import { readFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..')
const registry=JSON.parse(await readFile(path.join(root,'content/coverage/courses.json'),'utf8'))
const allowedReleaseStatuses=new Set(['concept','audit','content-complete','1.0'])
const allowedStudyStatuses=new Set(['covered','adapted-reference','open'])

function absolute(relativePath){ return path.join(root,relativePath) }
function escapeRegex(value){ return value.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') }
async function readJson(relativePath){ return JSON.parse(await readFile(absolute(relativePath),'utf8')) }
function expectedIds(prefix,count,width){ return Array.from({length:count},(_,index)=>`${prefix}${String(index+1).padStart(width,'0')}`) }

async function tsFilesRecursive(relativeDir){
  const out=[]
  async function walk(dir){
    for(const entry of await readdir(dir,{withFileTypes:true})){
      const full=path.join(dir,entry.name)
      if(entry.isDirectory()) await walk(full)
      else if(entry.isFile() && entry.name.endsWith('.ts')) out.push(full)
    }
  }
  await walk(absolute(relativeDir))
  return out
}

function idsInSource(source,prefix){
  const regex=new RegExp(`${escapeRegex(prefix)}\\d+`,'g')
  return [...source.matchAll(regex)].map(match=>match[0])
}

function activeIdsInSource(source,prefix,questionFactories){
  const result=[]
  const factoryRegex=new RegExp(`\\b(?:${questionFactories.map(escapeRegex).join('|')})\\s*\\(`)
  for(const line of source.split('\n')){
    if(factoryRegex.test(line)) result.push(...idsInSource(line,prefix))
  }
  return result
}

function expectedDetailIds(spec){
  if(Number.isInteger(spec.expected)) return expectedIds(spec.prefix,spec.expected,spec.width)
  const first=spec.first ?? 1
  const last=spec.last
  const excluded=new Set(spec.exclude ?? [])
  const ids=[]
  for(let number=first;number<=last;number++){
    if(!excluded.has(number)) ids.push(`${spec.prefix}${String(number).padStart(spec.width,'0')}`)
  }
  return ids
}

async function auditCourse(config){
  const prefix=`${config.label}:`
  let invalid=false
  const sectionManifest=await readJson(config.sectionManifest)
  const detailAudit=await readJson(config.detailAudit)
  const release=await readJson(config.release)

  if(!allowedReleaseStatuses.has(release.status)){
    console.error(`${prefix} onbekende release-status “${release.status}”.`)
    invalid=true
  }
  if(release.authoritativeSource!==config.authoritativeSource){
    console.error(`${prefix} releasebestand en register noemen niet dezelfde primaire bron.`)
    invalid=true
  }

  const contentFiles=await tsFilesRecursive(config.contentDir)
  const sourceTexts=[]
  const refs=[]
  const lessonIds=new Set()
  const questionBearingLessonIds=new Set()
  const lessonPrefix=escapeRegex(config.lessonIdPrefix)
  const sourceHelper=escapeRegex(config.sourceHelper)
  const sourceRegex=new RegExp(`\\b${sourceHelper}\\(\\s*\\d+\\s*,\\s*['"\\\`]§([0-9.]+)`,'g')
  const lessonRegex=new RegExp(`\\bid\\s*:\\s*['"\\\`](${lessonPrefix}[^'"\\\`]+)['"\\\`]`,'g')
  const questionFactoryRegex=new RegExp(`\\b(?:${(config.questionFactories ?? []).map(escapeRegex).join('|')})\\s*\\(`)
  const directQuestionRegex=/\btype\s*:\s*['"`](?:question|numeric|order|match)['"`]/

  for(const filePath of contentFiles){
    const source=await readFile(filePath,'utf8')
    sourceTexts.push(source)
    for(const match of source.matchAll(sourceRegex)) refs.push(match[1])
    for(const match of source.matchAll(lessonRegex)) lessonIds.add(match[1])
    for(const chunk of source.split(/\blesson\s*:\s*\{/).slice(1)){
      const id=chunk.match(new RegExp(`^\\s*id\\s*:\\s*['"\\\`](${lessonPrefix}[^'"\\\`]+)['"\\\`]`))?.[1]
      if(id && (questionFactoryRegex.test(chunk) || directQuestionRegex.test(chunk))) questionBearingLessonIds.add(id)
    }
  }

  const knowledgeIds=new Set()
  if(config.knowledgeDir && config.knowledgeFilePrefix && config.knowledgeFactory){
    const files=(await readdir(absolute(config.knowledgeDir))).filter(name=>name.startsWith(config.knowledgeFilePrefix) && name.endsWith('.ts'))
    const factory=escapeRegex(config.knowledgeFactory)
    const knowledgeRegex=new RegExp(`\\b${factory}\\(\\s*['"\\\`]([^'"\\\`]+)['"\\\`]`,'g')
    for(const file of files){
      const source=await readFile(path.join(absolute(config.knowledgeDir),file),'utf8')
      for(const match of source.matchAll(knowledgeRegex)) knowledgeIds.add(match[1])
    }
  }

  // Gate 1: every numbered primary-source section must be represented in course source refs.
  const coveredSections=new Set(refs)
  const missingSections=sectionManifest.sections.filter(section=>!coveredSections.has(section.id))
  console.log(`${prefix} structurele brondekking: ${sectionManifest.sections.length-missingSections.length}/${sectionManifest.sections.length} secties.`)
  if(missingSections.length){
    invalid=true
    for(const section of missingSections) console.error(`${prefix} ontbreekt: §${section.id} ${section.title}`)
  }

  // Gate 2: legacy count audit or strict explicit detail IDs.
  let detailMissing=0
  if(detailAudit.schemaVersion===2){
    const spec=detailAudit.requiredIds ?? config.detailIds
    if(detailAudit.sourceFile!==config.authoritativeSource || !spec || typeof spec.prefix!=='string' || !Number.isInteger(spec.width) || (!Number.isInteger(spec.expected) && !Number.isInteger(spec.last))){
      console.error(`${prefix} ongeldige detailaudit-v2 configuratie.`)
      invalid=true
    } else {
      const expected=expectedDetailIds(spec)
      const expectedSet=new Set(expected)
      const counts=new Map()
      for(const source of sourceTexts){
        for(const id of idsInSource(source,spec.prefix)) counts.set(id,(counts.get(id)??0)+1)
      }
      const missing=expected.filter(id=>!counts.has(id))
      const duplicates=expected.filter(id=>(counts.get(id)??0)>1)
      const contextIds=new Set((detailAudit.contextOnly ?? []).map(item=>item.id))
      const unexpected=[...counts.keys()].filter(id=>!expectedSet.has(id) && !contextIds.has(id))
      const excludedNumbers=new Set(spec.exclude ?? [])
      const expectedContextIds=[...excludedNumbers].map(number=>`${spec.prefix}${String(number).padStart(spec.width,'0')}`)
      const contextMismatch=expectedContextIds.some(id=>!contextIds.has(id)) || [...contextIds].some(id=>!expectedContextIds.includes(id))
      detailMissing=missing.length
      console.log(`${prefix} detail-ID-dekking: ${expected.length-missing.length}/${expected.length}. Context-only expliciet: ${contextIds.size}.`)
      if(missing.length){ invalid=true; console.error(`${prefix} ontbrekende detail-ID's (${missing.length}): ${missing.join(', ')}`) }
      if(duplicates.length){ invalid=true; console.error(`${prefix} dubbele detail-ID's (${duplicates.length}): ${duplicates.join(', ')}`) }
      if(unexpected.length){ invalid=true; console.error(`${prefix} onverwachte detail-ID's: ${unexpected.join(', ')}`) }
      const inv=detailAudit.sourceInventory
      if(!inv || inv.required!==expected.length || inv.total!==inv.required+inv.contextOnly || inv.contextOnly!==contextIds.size || contextMismatch){
        invalid=true
        console.error(`${prefix} broninventarisatie en context-exclusies zijn intern niet sluitend.`)
      }
    }
  } else {
    const detailById=new Map(detailAudit.sections.map(section=>[section.section,section]))
    let total=0,covered=0
    for(const sourceSection of sectionManifest.sections){
      const section=detailById.get(sourceSection.id)
      if(!section){ invalid=true; console.error(`${prefix} bronsectie §${sourceSection.id} ontbreekt in detailaudit.`); continue }
      if(!Number.isInteger(section.total)||!Number.isInteger(section.covered)||section.covered<0||section.total<section.covered){ invalid=true; continue }
      const expectedMissing=section.total-section.covered
      if(!Array.isArray(section.missing)||section.missing.length!==expectedMissing) invalid=true
      total+=section.total;covered+=section.covered;detailMissing+=expectedMissing
    }
    if(detailAudit.summary && (detailAudit.summary.elements!==total||detailAudit.summary.covered!==covered||detailAudit.summary.missing!==detailMissing)) invalid=true
    console.log(`${prefix} detailaudit: ${covered}/${total} kenniselementen expliciet afgedekt. Nog open: ${detailMissing}.`)
  }

  // Gate 3: legacy mapped rows or strict goal IDs that must appear on active questions.
  let studyOpen=0
  let studyGoalTotal=0
  let activeRetrievalCovered=0
  if(config.studyAidAudit){
    const studyAidAudit=await readJson(config.studyAidAudit)
    if(studyAidAudit.sourceFile!==config.studyAid?.sourceFile || studyAidAudit.currentAuthority?.file!==config.authoritativeSource){ invalid=true; console.error(`${prefix} verkeerde studiehulp/antwoordbron.`) }

    if(studyAidAudit.schemaVersion===2){
      const goals=studyAidAudit.goals ?? []
      const expectedCount=config.studyAid?.expectedGoals ?? goals.length
      const goalPrefix=config.studyAid?.goalIdPrefix
      const goalWidth=config.studyAid?.goalIdWidth ?? 2
      const expected=goalPrefix?expectedIds(goalPrefix,expectedCount,goalWidth):goals.map(goal=>goal.id)
      const defined=new Set(goals.map(goal=>goal.id))
      studyGoalTotal=expected.length
      if(goals.length!==expectedCount || defined.size!==goals.length || expected.some(id=>!defined.has(id))){ invalid=true; console.error(`${prefix} studiehulp bevat niet exact ${expectedCount} unieke doel-ID's.`) }
      const active=new Map()
      if(goalPrefix){
        for(const source of sourceTexts){
          for(const id of activeIdsInSource(source,goalPrefix,config.questionFactories ?? [])) active.set(id,(active.get(id)??0)+1)
        }
      }
      const missing=expected.filter(id=>!active.has(id))
      const unexpected=[...active.keys()].filter(id=>!defined.has(id))
      activeRetrievalCovered=expected.length-missing.length
      studyOpen=missing.length
      console.log(`${prefix} studiehulpaudit: ${goals.length}/${expectedCount} doelen geïnventariseerd.`)
      console.log(`${prefix} actieve-doeldekking: ${activeRetrievalCovered}/${expected.length} doel-ID's expliciet op actieve vragen.`)
      if(missing.length){ invalid=true; console.error(`${prefix} doelen zonder actieve vraag (${missing.length}): ${missing.join(', ')}`) }
      if(unexpected.length){ invalid=true; console.error(`${prefix} onbekende actieve doel-ID's: ${unexpected.join(', ')}`) }
      if(studyAidAudit.summary?.goals!==goals.length || studyAidAudit.summary?.requiredActive!==expected.length) invalid=true
    } else {
      const rows=(studyAidAudit.groups ?? []).flatMap(group=>(group.rows ?? []).map(row=>({group,row})))
      studyGoalTotal=rows.length
      const seen=new Set();let adapted=0
      for(const {group,row} of rows){
        if(!Array.isArray(row)||row.length!==6){ invalid=true; continue }
        const [number,goal,status,mappedLessons,mappedKnowledge,currentSource]=row
        if(!Number.isInteger(number)||number<1||seen.has(number)||typeof goal!=='string'||!allowedStudyStatuses.has(status)){ invalid=true; continue }
        seen.add(number);if(status==='open')studyOpen++;if(status==='adapted-reference')adapted++
        if(!Array.isArray(mappedLessons)||mappedLessons.length===0||mappedLessons.some(id=>!lessonIds.has(id))) invalid=true
        if(config.studyAid?.requireActiveQuestion && mappedLessons.some(id=>questionBearingLessonIds.has(id))) activeRetrievalCovered++
        else if(config.studyAid?.requireActiveQuestion) invalid=true
        if(!Array.isArray(mappedKnowledge)||mappedKnowledge.length===0||(knowledgeIds.size&&mappedKnowledge.some(id=>!knowledgeIds.has(id)))) invalid=true
        if(!Array.isArray(currentSource)||currentSource.length!==3||!Number.isInteger(currentSource[0])||typeof currentSource[2]!=='string') invalid=true
        if(status==='adapted-reference'&&!studyAidAudit.adaptations?.[String(number)]) invalid=true
      }
      const expectedCount=config.studyAid?.expectedGoals??rows.length
      if(rows.length!==expectedCount) invalid=true
      const reachable=rows.length-studyOpen
      if(studyAidAudit.summary && (studyAidAudit.summary.questions!==rows.length||studyAidAudit.summary.covered!==reachable||studyAidAudit.summary.adaptedReferences!==adapted||studyAidAudit.summary.open!==studyOpen)) invalid=true
      console.log(`${prefix} studiehulpaudit: ${reachable}/${rows.length} oefendoelen herleidbaar. Open: ${studyOpen}.`)
      if(config.studyAid?.requireActiveQuestion) console.log(`${prefix} actieve-vraagdekking: ${activeRetrievalCovered}/${rows.length}.`)
    }
  }

  const closesContentGates=release.status==='content-complete'||release.status==='1.0'
  const activeGateOpen=Boolean(config.studyAid?.requireActiveQuestion&&activeRetrievalCovered!==studyGoalTotal)
  if(closesContentGates&&(missingSections.length||detailMissing||studyOpen||activeGateOpen)){
    invalid=true
    console.error(`${prefix} staat als ${release.status} gemarkeerd terwijl een releasegate open staat.`)
  }

  if(invalid) throw new Error(`${config.label} contentaudit mislukt.`)
  console.log(`${prefix} release-status ${release.status.toUpperCase()} — alle vereiste gates voor deze status zijn gesloten.`)
}

if(![1,2].includes(registry.schemaVersion)||!Array.isArray(registry.courses)) throw new Error('Ongeldig cursusregister.')
let failed=false
for(const course of registry.courses){
  try{ await auditCourse(course) }catch(error){ failed=true;console.error(error.message) }
}
if(failed) process.exit(1)
