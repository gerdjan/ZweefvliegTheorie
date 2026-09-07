import { readFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..')
const sectionManifestPath=path.join(root,'content/coverage/principles-sections.json')
const detailAuditPath=path.join(root,'content/coverage/principles-detail-audit.json')
const partsDir=path.join(root,'src/data/principlesParts')
const sectionManifest=JSON.parse(await readFile(sectionManifestPath,'utf8'))
const detailAudit=JSON.parse(await readFile(detailAuditPath,'utf8'))
const files=(await readdir(partsDir)).filter(name=>name.endsWith('.ts'))

const refs=[]
for(const file of files){
  const source=await readFile(path.join(partsDir,file),'utf8')
  for(const match of source.matchAll(/\bb\(\s*\d+\s*,\s*['"`]§([0-9.]+)/g)){
    refs.push({section:match[1],file})
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

let detailTotal=0
let detailCovered=0
let detailMissing=0
let invalid=false

if(detailAudit.sections.length!==sectionManifest.sections.length){
  console.error(`Detailaudit bevat ${detailAudit.sections.length} secties, maar sectiemanifest bevat ${sectionManifest.sections.length}.`)
  invalid=true
}

const auditedIds=new Set()
for(const section of detailAudit.sections){
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

if(detailAudit.summary){
  const s=detailAudit.summary
  if(s.elements!==detailTotal || s.covered!==detailCovered || s.missing!==detailMissing){
    console.error('Samenvatting van principles-detail-audit.json komt niet overeen met de sectietellingen.')
    invalid=true
  }
}

const percentage=detailTotal ? (detailCovered/detailTotal*100).toFixed(1) : '0.0'
console.log(`Beginselen detailaudit: ${detailCovered}/${detailTotal} kenniselementen expliciet afgedekt (${percentage}%). Nog open: ${detailMissing}.`)

if(invalid) process.exit(1)

if(detailAudit.releaseStatus==='complete' && detailMissing>0){
  console.error('\nDe cursus staat als complete gemarkeerd terwijl de detailaudit nog open punten bevat. Zet releaseStatus terug op beta-detail-audit of werk alle open punten weg.')
  process.exit(1)
}
