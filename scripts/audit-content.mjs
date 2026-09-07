import { readFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..')
const manifestPath=path.join(root,'content/coverage/principles-sections.json')
const partsDir=path.join(root,'src/data/principlesParts')
const manifest=JSON.parse(await readFile(manifestPath,'utf8'))
const files=(await readdir(partsDir)).filter(name=>name.endsWith('.ts'))

const refs=[]
for(const file of files){
  const source=await readFile(path.join(partsDir,file),'utf8')
  for(const match of source.matchAll(/\bb\(\s*\d+\s*,\s*['"`]§([0-9.]+)/g)){
    refs.push({section:match[1],file})
  }
}

const covered=new Set(refs.map(ref=>ref.section))
const missing=manifest.sections.filter(section=>!covered.has(section.id))

console.log(`Beginselen structurele brondekking: ${manifest.sections.length-missing.length}/${manifest.sections.length} secties.`)

if(missing.length){
  console.error('\nNiet afgedekte bronsecties:')
  for(const section of missing){
    console.error(`- §${section.id} ${section.title}`)
  }
  console.error('\nVoeg inhoud toe met een b(..., "§<sectie> ...") current-source verwijzing. Een study(...) verwijzing telt bewust niet mee.')
  process.exit(1)
}
