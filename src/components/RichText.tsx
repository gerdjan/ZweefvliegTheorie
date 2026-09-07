import type { ReactNode } from 'react'

function escapeRegExp(value:string){
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function RichText({ text, terms }:{text:string,terms:readonly string[]}) {
  if(!terms.length) return <>{text}</>

  const ordered=[...terms].sort((a,b)=>b.length-a.length)
  const pattern=ordered.map(escapeRegExp).join('|')
  const matcher=new RegExp(`(?<![\\p{L}\\p{N}])(${pattern})(?![\\p{L}\\p{N}])`,'giu')
  const known=new Set(ordered.map(term=>term.toLocaleLowerCase('nl-NL')))

  return <>{text.split(matcher).map((part,index):ReactNode => {
    if(known.has(part.toLocaleLowerCase('nl-NL'))){
      return <strong className="learning-term" key={`${index}-${part}`}>{part}</strong>
    }
    return part
  })}</>
}
