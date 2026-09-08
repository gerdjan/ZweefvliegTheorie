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
  const base=absolute(relativeDir)
  const out=[]
  async function walk(dir){
    for(const entry of await readdir(dir,{withFileTypes:true})){
      const full=path.join(dir,entry.name)
      if(entry.isDirectory()) await walk(full)
      else if(entry.isFile() && entry.name.endsWith('.ts')) out.push(full)
    }
  }
  await walk(base)
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
    if(!factoryRegex.test(line)) continue
    result.push(...idsInSource(line,prefix))
  }
  return result
}

async function auditCourse(config){
  const prefix=`${config.label}:`
  let invalid=false
  const sectionManifest=await readJson(config.sectionManifest)
  const detailAudit=await readJson(config.detailAudit)
  const release=await readJson(config.release)

  if(!allowedReleaseStatuses.has(release.status)){
    console.error(`${prefix} onbekende release-status “${release.status}”. Gebruik concept, audit, content-complete of 1.0.`)
    invalid=true
  }
  if(release.authoritativeSource!==config.authoritativeSource){
    console.error(`${prefix} releasebestand en cursusregister noemen niet dezelfde primaire bron.`)
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
    sourceTexts.push({filePath,source})
    for(const match of source.matchAll(sourceRegex)) refs.push({section:match[1],file:filePath})
    for(const match of source.matchAll(lessonRegex)) lessonIds.add(match[1])
    for(const chunk of source.split(/\blesson\s*:\s*\{/).slice(1)){
      const id=chunk.match(new RegExp(`^\\s*id\\s*:\\s*['"\\\`](${lessonPrefix}[^'"\\\`]+)['"\\\`]`))?.[1]
      if(id && (questionFactoryRegex.test(chunk) || directQuestionRegex.test(chunk))) questionBearingLessonIds.add(id)
    }
  }

  const knowledgeIds=new Set()
  if(config.knowledgeDir && config.knowledgeFilePrefix && config.knowledgeFactory){
    const dir=absolute(config.knowledgeDir)
    const files=(await readdir(dir)).filter(name=>name.startsWith(config.knowledgeFilePrefix) && name.endsWith('.ts'))
    const factory=escapeRegex(config.knowledgeFactory)
    const knowledgeRegex=new RegExp(`\\b${factory}\\(\\s*['"\\\`]([^'"\\\`]+)['"\\\`]`,'g')
    for(const file of files){
      const source=await readFile(path.join(dir,file),'utf8')
      for(const match of source.matchAll(knowledgeRegex)) knowledgeIds.add(match[1])
    }
  }

  // Gate 1 — iedere genummerde sectie uit de primaire bron moet in cursusinhoud voorkomen.
  const coveredSections=new Set(refs.map(ref=>ref.section))
  const missingSections=sectionManifest.sections.filter(section=>!coveredSections.has(section.id))
  console.log(`${prefix} structurele brondekking: ${sectionManifest.sections.length-missingSections.length}/${sectionManifest.sections.length} secties.`)
  if(missingSections.length){
    invalid=true
    for(const section of missingSections) console.error(`${prefix} ontbreekt: §${section.id} ${section.title}`)
  }

  // Gate 2 — oude tellingaudit (Beginselen) of expliciete stabiele detail-ID's (nieuwe cursussen).
  let detailTotal=0
  let detailCovered=0
  let detailMissing=0

  if(detailAudit.schemaVersion===2){
    if(detailAudit.sourceFile!==config.authoritativeSource){
      console.error(`${prefix} detailaudit noemt niet de geregistreerde primaire bron.`)
      invalid=true
    }
    const spec=detailAudit.requiredIds ?? config.detailIds
    if(!spec || !Number.isInteger(spec.last ?? spec.expected) || !Number.isInteger(spec.width) || typeof spec.prefix!=='string'){
      console.error(`${prefix} detailaudit v2 mist een geldige requiredIds-specificatie.`)
      invalid=true
    } else {
      const count=spec.expected ?? ((spec.last ?? 0)-(spec.first ?? 1)+1)
      const first=spec.first ?? 1
      const expected=Array.from({length:count},(_,index)=>`${spec.prefix}${String(first+index).padStart(spec.width,'0')}`)
      const expectedSet=new Set(expected)
      const counts=new Map()
      for(const {source} of sourceTexts){
        for(const id of idsInSource(source,spec.prefix)) counts.set(id,(counts.get(id)??0)+1)
      }
      const missing=expected.filter(id=>!counts.has(id))
      const duplicates=expected.filter(id=>(counts.get(id)??0)>1)
      const unexpected=[...counts.keys()].filter(id=>!expectedSet.has(id))
      detailTotal=expected.length
      detailCovered=detailTotal-missing.length
      detailMissing=missing.length
      console.log(`${prefix} detail-ID-dekking: ${detailCovered}/${detailTotal}. Context-only: ${detailAudit.sourceInventory?.contextOnly ?? 0}.`)
      if(missing.length){
        invalid=true
        console.error(`${prefix} ontbrekende detail-ID's (${missing.length}): ${missing.join(', ')}`)
      }
      if(duplicates.length){
        invalid=true
        console.error(`${prefix} detail-ID's komen meer dan één keer voor (${duplicates.length}): ${duplicates.join(', ')}`)
      }
      if(unexpected.length){
        invalid=true
        console.error(`${prefix} onverwachte detail-ID's: ${unexpected.join(', ')}`)
      }
      const inv=detailAudit.sourceInventory
      if(!inv || inv.required!==detailTotal || inv.total!==inv.required+inv.contextOnly || !Array.isArray(detailAudit.contextOnly) || detailAudit.contextOnly.length!==inv.contextOnly){
        console.error(`${prefix} broninventarisatie total/required/context-only is intern niet sluitend.`)
        invalid=true
      }
    }
  } else {
    const detailById=new Map(detailAudit.sections.map(section=>[section.section,section]))
    const effectiveSections=sectionManifest.sections.map(section=>detailById.get(section.id))
    if(effectiveSections.some(section=>!section)){
      console.error(`${prefix} detailaudit bevat niet alle secties uit het sectiemanifest.`)
      invalid=true
    }
    const auditedIds=new Set()
    for(const section of effectiveSections.filter(Boolean)){
      auditedIds.add(section.section)
      if(!Number.isInteger(section.total) || !Number.isInteger(section.covered) || section.total<0 || section.covered<0 || section.covered>section.total){
        console.error(`${prefix} ongeldige telling in detailaudit §${section.section}.`)
        invalid=true
        continue
      }
      const expectedMissing=section.total-section.covered
      if(!Array.isArray(section.missing) || section.missing.length!==expectedMissing){
        console.error(`${prefix} detailaudit §${section.section}: ${expectedMissing} open verwacht, maar ${Array.isArray(section.missing)?section.missing.length:'geen lijst'} vastgelegd.`)
        invalid=true
      }
      detailTotal+=section.total
      detailCovered+=section.covered
      detailMissing+=expectedMissing
    }
    for(const sourceSection of sectionManifest.sections){
      if(!auditedIds.has(sourceSection.id)){
        console.error(`${prefix} bronsectie §${sourceSection.id} ontbreekt in de detailaudit.`)
        invalid=true
      }
    }
    if(detailAudit.summary && (detailAudit.summary.elements!==detailTotal || detailAudit.summary.covered!==detailCovered || detailAudit.summary.missing!==detailMissing)){
      console.error(`${prefix} samenvatting van de detailaudit komt niet overeen met de sectietellingen.`)
      invalid=true
    }
    const percentage=detailTotal ? (detailCovered/detailTotal*100).toFixed(1) : '0.0'
    console.log(`${prefix} detailaudit: ${detailCovered}/${detailTotal} kenniselementen expliciet afgedekt (${percentage}%). Nog open: ${detailMissing}.`)
  }

  // Gate 3 — studiehulp: oud mappingmodel of expliciete doel-ID's op actieve vragen.
  let studyOpen=0
  let studyRows=[]
  let activeRetrievalCovered=0
  let adaptedReferences=0

  if(config.studyAidAudit){
    const studyAidAudit=await readJson(config.studyAidAudit)
    if(studyAidAudit.sourceFile!==config.studyAid?.sourceFile || studyAidAudit.currentAuthority?.file!==config.authoritativeSource){
      console.error(`${prefix} studiehulpaudit gebruikt niet de geregistreerde oefenbron en primaire antwoordbron.`)
      invalid=true
    }

    if(studyAidAudit.schemaVersion===2){
      const goals=studyAidAudit.goals ?? []
      const expectedGoals=config.studyAid?.expectedGoals ?? goals.length
      const goalPrefix=config.studyAid?.goalIdPrefix
      const goalWidth=config.studyAid?.goalIdWidth ?? 2
      const expected=goalPrefix ? expectedIds(goalPrefix,expectedGoals,goalWidth) : goals.map(goal=>goal.id)
      const goalIds=goals.map(goal=>goal.id)
      const uniqueGoalIds=new Set(goalIds)
      const expectedSet=new Set(expected)
      if(goals.length!==expectedGoals || uniqueGoalIds.size!==goals.length || expected.some(id=>!uniqueGoalIds.has(id))){
        console.error(`${prefix} studiehulp v2 bevat niet exact de ${expectedGoals} verwachte doel-ID's.`)
        invalid=true
      }
      const activeCounts=new Map()
      if(goalPrefix){
        for(const {source} of sourceTexts){
          for(const id of activeIdsInSource(source,goalPrefix,config.questionFactories ?? [])) activeCounts.set(id,(activeCounts.get(id)??0)+1)
        }
      }
      const missingActive=expected.filter(id=>!activeCounts.has(id))
      const unexpectedActive=[...activeCounts.keys()].filter(id=>!expectedSet.has(id))
      activeRetrievalCovered=expected.length-missingActive.length
      studyOpen=missingActive.length
      studyRows=goals
      console.log(`${prefix} studiehulpaudit: ${goals.length}/${expectedGoals} doelen geïnventariseerd.`)
      console.log(`${prefix} actieve-doeldekking: ${activeRetrievalCovered}/${expected.length} doel-ID's expliciet op actieve vragen.`)
      if(missingActive.length){
        invalid=true
        console.error(`${prefix} studiehulpdoelen zonder actieve vraag (${missingActive.length}): ${missingActive.join(', ')}`)
      }
      if(unexpectedActive.length){
        invalid=true
        console.error(`${prefix} actieve vragen gebruiken onbekende studiehulp-ID's: ${unexpectedActive.join(', ')}`)
      }
      if(studyAidAudit.summary?.goals!==goals.length || studyAidAudit.summary?.requiredActive!==expected.length){
        console.error(`${prefix} samenvatting van studiehulpaudit v2 is niet sluitend.`)
        invalid=true
      }
    } else {
      studyRows=(studyAidAudit.groups ?? []).flatMap(group=>(group.rows ?? []).map(row=>({group,row})))
      const seenNumbers=new Set()
      for(const {group,row} of studyRows){
        if(!Array.isArray(row) || row.length!==6){
          console.error(`${prefix} ongeldige studiehulprij in groep ${group.id ?? '?'}.`)
          invalid=true
          continue
        }
        const [number,shortGoal,status,mappedLessons,mappedKnowledge,currentSource]=row
        if(!Number.isInteger(number) || number<1 || seenNumbers.has(number)){
          console.error(`${prefix} ongeldig of dubbel studienummer: ${number}.`)
          invalid=true
        }
        seenNumbers.add(number)
        if(typeof shortGoal!=='string' || !shortGoal.trim()){
          console.error(`${prefix} studiehulppunt ${number} mist een korte omschrijving.`)
          invalid=true
        }
        if(!allowedStudyStatuses.has(status)){
          console.error(`${prefix} studiehulppunt ${number} heeft onbekende status ${status}.`)
          invalid=true
        }
        if(status==='open') studyOpen++
        if(status==='adapted-reference'){
          adaptedReferences++
          if(!studyAidAudit.adaptations?.[String(number)]){
            console.error(`${prefix} studiehulppunt ${number} is aangepast maar mist een toelichting.`)
            invalid=true
          }
        }
        if(!Array.isArray(mappedLessons) || mappedLessons.length===0){
          console.error(`${prefix} studiehulppunt ${number} is niet aan een level gekoppeld.`)
          invalid=true
        } else {
          for(const lessonId of mappedLessons){
            if(!lessonIds.has(lessonId)){
              console.error(`${prefix} studiehulppunt ${number} verwijst naar onbekend level ${lessonId}.`)
              invalid=true
            }
          }
          if(config.studyAid?.requireActiveQuestion){
            if(mappedLessons.some(lessonId=>questionBearingLessonIds.has(lessonId))) activeRetrievalCovered++
            else {
              console.error(`${prefix} studiehulppunt ${number} is niet gekoppeld aan een level met een actieve kennisvraag.`)
              invalid=true
            }
          }
        }
        if(!Array.isArray(mappedKnowledge) || mappedKnowledge.length===0){
          console.error(`${prefix} studiehulppunt ${number} is niet aan een kenniselement gekoppeld.`)
          invalid=true
        } else if(knowledgeIds.size){
          for(const knowledgeId of mappedKnowledge){
            if(!knowledgeIds.has(knowledgeId)){
              console.error(`${prefix} studiehulppunt ${number} verwijst naar onbekend kenniselement ${knowledgeId}.`)
              invalid=true
            }
          }
        }
        if(!Array.isArray(currentSource) || currentSource.length!==3 || !Number.isInteger(currentSource[0]) || (currentSource[1]!==null && !Number.isInteger(currentSource[1])) || typeof currentSource[2]!=='string' || !currentSource[2].startsWith('§')){
          console.error(`${prefix} studiehulppunt ${number} heeft geen geldige actuele bronvindplaats.`)
          invalid=true
        }
      }

      const expectedGoals=config.studyAid?.expectedGoals ?? studyRows.length
      const expectedNumbers=Array.from({length:expectedGoals},(_,index)=>index+1)
      if(studyRows.length!==expectedGoals || expectedNumbers.some(number=>!seenNumbers.has(number))){
        console.error(`${prefix} studiehulpaudit bevat ${studyRows.length}/${expectedGoals} verwachte vragen/opdrachten.`)
        invalid=true
      }
      const reachable=studyRows.length-studyOpen
      const studySummary=studyAidAudit.summary ?? {}
      if(studySummary.questions!==studyRows.length || studySummary.covered!==reachable || studySummary.adaptedReferences!==adaptedReferences || studySummary.open!==studyOpen){
        console.error(`${prefix} samenvatting van de studiehulpaudit komt niet overeen met de rijen.`)
        invalid=true
      }
      console.log(`${prefix} studiehulpaudit: ${reachable}/${studyRows.length} oefendoelen herleidbaar. Aangepaste oude verwijzingen: ${adaptedReferences}. Open: ${studyOpen}.`)
      if(config.studyAid?.requireActiveQuestion){
        console.log(`${prefix} actieve-vraagdekking: ${activeRetrievalCovered}/${studyRows.length} studiehulpdoelen gekoppeld aan minimaal één level met een kennisvraag.`)
      }
    }
  }

  const closesContentGates=release.status==='content-complete' || release.status==='1.0'
  const activeGateOpen=Boolean(config.studyAid?.requireActiveQuestion && activeRetrievalCovered!==studyRows.length)
  if(closesContentGates && (missingSections.length>0 || detailMissing>0 || studyOpen>0 || activeGateOpen)){
    console.error(`${prefix} staat als ${release.status} gemarkeerd terwijl één of meer releasegates nog open staan.`)
    invalid=true
  }

  if(invalid) throw new Error(`${config.label} contentaudit mislukt.`)
  console.log(`${prefix} release-status ${release.status.toUpperCase()} — alle vereiste gates voor deze status zijn gesloten.`)
}

if(![1,2].includes(registry.schemaVersion) || !Array.isArray(registry.courses)) throw new Error('Ongeldig cursusregister content/coverage/courses.json.')

let failed=false
for(const course of registry.courses){
  try {
    await auditCourse(course)
  } catch (error) {
    failed=true
    console.error(error.message)
  }
}
if(failed) process.exit(1)
