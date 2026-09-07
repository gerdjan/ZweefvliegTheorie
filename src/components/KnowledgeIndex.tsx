import { useMemo, useState } from 'react'
import { principlesKnowledgeChapters } from '../data/principlesKnowledgeIndex'
import { principlesKnowledge52 } from '../data/principlesKnowledge52'

function sourceLabel(source:{file:string,page:number,pageEnd?:number,section:string}){
  const pages=source.pageEnd && source.pageEnd!==source.page ? `${source.page}–${source.pageEnd}` : `${source.page}`
  return `${source.file} · PDF p. ${pages} · ${source.section}`
}

const knowledgeChapters=principlesKnowledgeChapters.map(chapter=>chapter.id==='5.2'?principlesKnowledge52:chapter)

export function KnowledgeIndex({completedLessons}:{completedLessons:string[]}){
  const [open,setOpen]=useState(false)
  const [query,setQuery]=useState('')
  const completed=new Set(completedLessons)

  const visible=useMemo(()=>{
    const q=query.trim().toLocaleLowerCase('nl-NL')
    if(!q) return knowledgeChapters
    return knowledgeChapters
      .map(chapter=>({
        ...chapter,
        elements:chapter.elements.filter(element=>`${element.title} ${element.meaning} ${element.source.section}`.toLocaleLowerCase('nl-NL').includes(q)),
      }))
      .filter(chapter=>chapter.elements.length>0)
  },[query])

  const allElements=knowledgeChapters.flatMap(chapter=>chapter.elements)
  const seenCount=allElements.filter(element=>element.lessonIds.some(id=>completed.has(id))).length

  return <div className="knowledge-index">
    <button className="knowledge-toggle" type="button" onClick={()=>setOpen(v=>!v)} aria-expanded={open}>
      <span><strong>Kenniselementen</strong><small>{seenCount}/{allElements.length} studeerbare elementen gezien</small></span>
      <span aria-hidden="true">{open?'−':'+'}</span>
    </button>

    {open && <div className="knowledge-panel">
      <p className="knowledge-intro">Gebruik dit als naslaglijst. Een vinkje betekent dat het element voorkomt in een level dat je hebt afgerond. Elementen zonder gekoppeld level staan al in de bronindex, maar moeten nog expliciet in een les worden verwerkt.</p>
      <label className="knowledge-search">
        <span>Zoeken</span>
        <input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Bijv. invalshoek, flutter, MacCready…" />
      </label>

      <div className="knowledge-chapters">
        {visible.map((chapter,index)=>{
          const seen=chapter.elements.filter(element=>element.lessonIds.some(id=>completed.has(id))).length
          return <details className="knowledge-chapter" key={chapter.id} open={index===0 && !query}>
            <summary>
              <span><strong>{chapter.title}</strong><small>{seen}/{chapter.elements.length} gezien · detailaudit {chapter.auditCovered}/{chapter.auditTotal}{chapter.auditComplete?' ✓':' · loopt nog'}</small></span>
              <span className={chapter.auditComplete?'audit-complete':'audit-open'}>{chapter.auditComplete?'geaudit':'beta'}</span>
            </summary>
            <div className="knowledge-list">
              {chapter.elements.map(element=>{
                const seen=element.lessonIds.some(id=>completed.has(id))
                const inCourse=element.lessonIds.length>0
                return <details className={'knowledge-element '+(seen?'seen':'')} key={element.id}>
                  <summary>
                    <span className="knowledge-check" aria-label={seen?'Gezien':'Nog niet gezien'}>{seen?'✓':'○'}</span>
                    <span className="knowledge-element-title">{element.title}</span>
                    {!inCourse && <span className="knowledge-pending">nog niet in les</span>}
                  </summary>
                  <div className="knowledge-element-body">
                    <p>{element.meaning}</p>
                    <div className="knowledge-source"><span>📄 Bron</span> {sourceLabel(element.source)}</div>
                    <div className="knowledge-state">{seen?'✓ Behandeld in een afgerond level':inCourse?'Nog niet afgevinkt: rond het gekoppelde level af':'Dit brononderwerp staat in de index maar is nog niet als afzonderlijk lesonderdeel gekoppeld.'}</div>
                  </div>
                </details>
              })}
            </div>
          </details>
        })}
        {visible.length===0 && <div className="knowledge-empty">Geen kenniselement gevonden voor “{query}”.</div>}
      </div>
    </div>}
  </div>
}
