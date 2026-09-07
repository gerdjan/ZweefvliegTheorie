import { readFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..')
const sectionManifestPath=path.join(root,'content/coverage/principles-sections.json')
const detailAuditPath=path.join(root,'content/coverage/principles-detail-audit.json')
const detailOverridesPath=path.join(root,'content/coverage/principles-detail-audit-overrides.json')
const studyAidAuditPath=path.join(root,'content/coverage/principles-study-aid-audit.json')
const releasePath=path.join(root,'content/coverage/principles-release.json')
const partsDir=path.join(root,'src/data/principlesParts')
const dataDir=path.join(root,'src/data')

const sectionManifest=JSON.parse(await readFile(sectionManifestPath,'utf8'))
const detailAudit=JSON.parse(await readFile(detailAuditPath,'utf8'))
const studyAidAudit=JSON.parse(await readFile(studyAidAuditPath,'utf8'))
let detailOverrides={sections:[]}
try {
  detailOverrides=JSON.parse(await readFile(detailOverridesPath,'utf8'))
} catch (error) {
  if(error?.code!=='ENOENT') throw error
}
let release={status:detailAudit.releaseStatus ?? 'beta'}
try {
  release=JSON.parse(await readFile(releasePath,'utf8'))
} catch (error) {
  if(error?.code!=='ENOENT') throw error
}

const files=(await readdir(partsDir)).filter(name=>name.endsWith('.ts'))
const refs=[]
const lessonIds=new Set()
const questionBearingLessonIds=new Set()
for(const file of files){
  const source=await readFile(path.join(partsDir,file),'utf8')
  for(const match of source.matchAll(/\bb\(\s*\d+\s*,\s*['"`]§([0-9.]+)/g)){
    refs.push({section:match[1],file})
  }
  for(const match of source.matchAll(/\bid\s*:\s*['"`](principles-[^'"`]+)['"`]/g)){
    lessonIds.add(match[1])
  }
  for(const chunk of source.split(/\blesson\s*:\s*\{/).slice(1)){
    const id=chunk.match(/^\s*id\s*:\s*['"`](principles-[^'"`]+)['"`]/)?.[1]
    if(id && /\bq\s*\(/.test(chunk)) questionBearingLessonIds.add(id)
  }
}

const knowledgeIds=new Set()
const knowledgeFiles=(await readdir(dataDir)).filter(name=>name.startsWith('principlesKnowledge') && name.endsWith('.ts'))
for(const file of knowledgeFiles){
  const source=await readFile(path.join(dataDir,file),'utf8')
  for(const match of source.matchAll(/\be\(\s*['"`]([^'"`]+)['"`]/g)){
    knowledgeIds.add(match[1])
  }
}

const coveredSections=new Set(refs.map(ref=>ref.section))
const missingSections=sectionManifest.sections.filter(section=>!coveredSections.has(section.id))
console.log(`Beginselen structurele brondekking: ${sectionManifest.sections.length-missingSections.length}/${sectionManifest.sections.length} secties.`)

if(missingSections.length){
  console.error('\nNiet afgedekte bronsecties:')
  for(const section of missingSections){
    console.error(`- §${section.id} ${section.title}`)
  }
  console.error('\nVoeg inhoud toe met een b(..., "§<sectie> ...") current-source verwijzing. Een study(...) verwijzing telt bewust niet mee.')
  process.exit(1)
}

const effectiveById=new Map(detailAudit.sections.map(section=>[section.section,section]))
for(const override of detailOverrides.sections ?? []){
  if(!effectiveById.has(override.section)){
    console.error(`Detailaudit-override verwijst naar onbekende sectie §${override.section}.`)
    process.exit(1)
  }
  effectiveById.set(override.section,override)
}
const effectiveSections=sectionManifest.sections.map(section=>effectiveById.get(section.id))

let detailTotal=0
let detailCovered=0
let detailMissing=0
let invalid=false

if(effectiveSections.length!==sectionManifest.sections.length || effectiveSections.some(section=>!section)){
  console.error('De effectieve detailaudit bevat niet alle secties uit het sectiemanifest.')
  invalid=true
}

const auditedIds=new Set()
for(const section of effectiveSections.filter(Boolean)){
  auditedIds.add(section.section)
  if(!Number.isInteger(section.total) || !Number.isInteger(section.covered) || section.total<0 || section.covered<0 || section.covered>section.total){
    console.error(`Ongeldige telling in detailaudit §${section.section}.`)
    invalid=true
    continue
  }
  const expectedMissing=section.total-section.covered
  if(!Array.isArray(section.missing) || section.missing.length!==expectedMissing){
    console.error(`Detailaudit §${section.section}: ${expectedMissing} open verwacht, maar ${Array.isArray(section.missing)?section.missing.length:'geen lijst'} vastgelegd.`)
    invalid=true
  }
  detailTotal+=section.total
  detailCovered+=section.covered
  detailMissing+=expectedMissing
}

for(const sourceSection of sectionManifest.sections){
  if(!auditedIds.has(sourceSection.id)){
    console.error(`Bronsectie §${sourceSection.id} ontbreekt in de detailaudit.`)
    invalid=true
  }
}

const expectedSummary=detailOverrides.summary ?? detailAudit.summary
if(expectedSummary){
  if(expectedSummary.elements!==detailTotal || expectedSummary.covered!==detailCovered || expectedSummary.missing!==detailMissing){
    console.error('Samenvatting van de effectieve principles-detail-audit komt niet overeen met de sectietellingen.')
    invalid=true
  }
}

const percentage=detailTotal ? (detailCovered/detailTotal*100).toFixed(1) : '0.0'
console.log(`Beginselen detailaudit: ${detailCovered}/${detailTotal} kenniselementen expliciet afgedekt (${percentage}%). Nog open: ${detailMissing}.`)

if((detailOverrides.sections ?? []).length){
  console.log(`Beginselen detailaudit-overrides actief voor ${(detailOverrides.sections ?? []).length} secties.`)
}

// Gate 3: alle oude studiehulpvragen moeten naar actuele cursusinhoud herleidbaar zijn.
const allowedStudyStatuses=new Set(['covered','adapted-reference','open'])
const studyRows=(studyAidAudit.groups ?? []).flatMap(group=>(group.rows ?? []).map(row=>({group,row})))
let studyOpen=0
let adaptedReferences=0
let activeRetrievalCovered=0
const seenNumbers=new Set()

if(studyAidAudit.sourceFile!=='5-beginselen-studiehulp.pdf' || studyAidAudit.currentAuthority?.file!=='5-Beginselen.pdf'){
  console.error('Studiehulpaudit gebruikt niet de verwachte oefenbron en actuele antwoordbron.')
  invalid=true
}

for(const {group,row} of studyRows){
  if(!Array.isArray(row) || row.length!==6){
    console.error(`Ongeldige studiehulprij in groep ${group.id ?? '?'}.`)
    invalid=true
    continue
  }
  const [number,shortGoal,status,mappedLessons,mappedKnowledge,currentSource]=row
  if(!Number.isInteger(number) || number<1 || seenNumbers.has(number)){
    console.error(`Ongeldig of dubbel studienummer: ${number}.`)
    invalid=true
  }
  seenNumbers.add(number)
  if(typeof shortGoal!=='string' || !shortGoal.trim()){
    console.error(`Studiehulppunt ${number} mist een korte omschrijving.`)
    invalid=true
  }
  if(!allowedStudyStatuses.has(status)){
    console.error(`Studiehulppunt ${number} heeft onbekende status ${status}.`)
    invalid=true
  }
  if(status==='open') studyOpen++
  if(status==='adapted-reference'){
    adaptedReferences++
    if(!studyAidAudit.adaptations?.[String(number)]){
      console.error(`Studiehulppunt ${number} is aangepast maar mist een toelichting.`)
      invalid=true
    }
  }
  if(!Array.isArray(mappedLessons) || mappedLessons.length===0){
    console.error(`Studiehulppunt ${number} is niet aan een level gekoppeld.`)
    invalid=true
  } else {
    for(const lessonId of mappedLessons){
      if(!lessonIds.has(lessonId)){
        console.error(`Studiehulppunt ${number} verwijst naar onbekend level ${lessonId}.`)
        invalid=true
      }
    }
    if(mappedLessons.some(lessonId=>questionBearingLessonIds.has(lessonId))){
      activeRetrievalCovered++
    } else {
      console.error(`Studiehulppunt ${number} is wel aan theorie gekoppeld, maar geen gekoppeld level bevat een actieve kennisvraag.`)
      invalid=true
    }
  }
  if(!Array.isArray(mappedKnowledge) || mappedKnowledge.length===0){
    console.error(`Studiehulppunt ${number} is niet aan een kenniselement gekoppeld.`)
    invalid=true
  } else {
    for(const knowledgeId of mappedKnowledge){
      if(!knowledgeIds.has(knowledgeId)){
        console.error(`Studiehulppunt ${number} verwijst naar onbekend kenniselement ${knowledgeId}.`)
        invalid=true
      }
    }
  }
  if(!Array.isArray(currentSource) || currentSource.length!==3 || !Number.isInteger(currentSource[0]) || (currentSource[1]!==null && !Number.isInteger(currentSource[1])) || typeof currentSource[2]!=='string' || !currentSource[2].startsWith('§')){
    console.error(`Studiehulppunt ${number} heeft geen geldige actuele bronvindplaats.`)
    invalid=true
  }
}

const expectedStudyNumbers=Array.from({length:75},(_,index)=>index+1)
if(studyRows.length!==75 || expectedStudyNumbers.some(number=>!seenNumbers.has(number))){
  console.error(`Studiehulpaudit bevat ${studyRows.length}/75 verwachte vragen/opdrachten.`)
  invalid=true
}

const reachable=studyRows.length-studyOpen
const studySummary=studyAidAudit.summary ?? {}
if(studySummary.questions!==studyRows.length || studySummary.covered!==reachable || studySummary.adaptedReferences!==adaptedReferences || studySummary.open!==studyOpen){
  console.error('Samenvatting van de studiehulpaudit komt niet overeen met de rijen.')
  invalid=true
}

console.log(`Beginselen studiehulpaudit: ${reachable}/${studyRows.length} oefendoelen herleidbaar. ${adaptedReferences} oude figuur-/paginaverwijzingen aangepast aan de theorie van november 2025. Open: ${studyOpen}.`)
console.log(`Beginselen actieve-vraagdekking: ${activeRetrievalCovered}/${studyRows.length} studiehulpdoelen gekoppeld aan minimaal één level met een kennisvraag.`)

if(invalid) process.exit(1)

const releaseComplete=release.status==='complete'
if(releaseComplete && (detailMissing>0 || studyOpen>0 || studyRows.length!==75 || activeRetrievalCovered!==studyRows.length)){
  console.error('\nBeginselen staat als compleet gemarkeerd terwijl één van de inhoudelijke releasegates nog open staat.')
  process.exit(1)
}

if(releaseComplete){
  console.log('Beginselen releasegate: COMPLEET — bronsecties, detailaudit, studiehulpaudit en actieve-vraagdekking zijn gesloten.')
}
