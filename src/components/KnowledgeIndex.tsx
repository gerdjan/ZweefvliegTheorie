import { useMemo, useState } from 'react'
import type { KnowledgeChapter } from '../domain/course'

function sourceLabel(source:{file:string,page:number,pageEnd?:number,section:string}){
  const pages=source.pageEnd && source.pageEnd!==source.page ? `${source.page}–${source.pageEnd}` : `${source.page}`
  return `${source.file} · PDF p. ${pages} · ${source.section}`
}

type MasteryState='nieuw'|'gezien'|'geoefend'|'beheerst'

function stateFor(seen:boolean,checkpointScore:number):MasteryState{
  if(!seen) return 'nieuw'
  if(checkpointScore>=80) return 'beheerst'
  if(checkpointScore>0) return 'geoefend'
  return 'gezien'
}

const stateIcon:Record<MasteryState,string>={nieuw:'○',gezien:'◐',geoefend:'●',beheerst:'✓'}

export function KnowledgeIndex({knowledgeChapters,completedLessons,checkpointScores={}}:{knowledgeChapters:KnowledgeChapter[],completedLessons:string[],checkpointScores?:Record<string,number>}){
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
  },[query,knowledgeChapters])

  const allElements=knowledgeChapters.flatMap(chapter=>chapter.elements.map(element=>({chapter,element})))
  const states=allElements.map(({chapter,element})=>stateFor(element.lessonIds.some(id=>completed.has(id)),checkpointScores[chapter.id]??0))
  const seenCount=states.filter(state=>state!=='nieuw').length
  const practicedCount=states.filter(state=>state==='geoefend'||state==='beheerst').length
  const masteredCount=states.filter(state=>state==='beheerst').length

  return <div className="knowledge-index">
    <button className="knowledge-toggle" type="button" onClick={()=>setOpen(v=>!v)} aria-expanded={open}>
      <span><strong>Kenniselementen</strong><small>{seenCount}/{allElements.length} gezien · {practicedCount} geoefend · {masteredCount} beheerst</small></span>
      <span aria-hidden="true">{open?'−':'+'}</span>
    </button>

    {open && <div className="knowledge-panel">
      <p className="knowledge-intro">Gebruik dit als naslaglijst. <strong>Gezien</strong> betekent dat je een gekoppeld level hebt afgerond. Na een hoofdstuktoets wordt de status <strong>geoefend</strong>; bij 80% of hoger wordt het hoofdstuk als <strong>beheerst</strong> gemarkeerd. De herhaalmodus houdt vragen daarna volgens het herhaalritme actief.</p>
      <label className="knowledge-search">
        <span>Zoeken</span>
        <input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Zoek een begrip of onderwerp…" />
      </label>

      <div className="knowledge-chapters">
        {visible.map((chapter,index)=>{
          const score=checkpointScores[chapter.id]??0
          const chapterStates=chapter.elements.map(element=>stateFor(element.lessonIds.some(id=>completed.has(id)),score))
          const mastered=chapterStates.filter(state=>state==='beheerst').length
          const seen=chapterStates.filter(state=>state!=='nieuw').length
          return <details className="knowledge-chapter" key={chapter.id} open={index===0 && !query}>
            <summary>
              <span><strong>{chapter.title}</strong><small>{seen}/{chapter.elements.length} gezien · {mastered} beheerst · detailaudit {chapter.auditCovered}/{chapter.auditTotal}{chapter.auditComplete?' ✓':' · loopt nog'}</small></span>
              <span className={chapter.auditComplete?'audit-complete':'audit-open'}>{chapter.auditComplete?'geaudit':'beta'}</span>
            </summary>
            <div className="knowledge-list">
              {chapter.elements.map(element=>{
                const inCourse=element.lessonIds.length>0
                const seen=element.lessonIds.some(id=>completed.has(id))
                const state=stateFor(seen,score)
                return <details className={'knowledge-element state-'+state} key={element.id}>
                  <summary>
                    <span className="knowledge-check" aria-label={state}>{stateIcon[state]}</span>
                    <span className="knowledge-element-title">{element.title}</span>
                    <span className={'knowledge-mastery '+state}>{state}</span>
                    {!inCourse && <span className="knowledge-pending">nog niet in les</span>}
                  </summary>
                  <div className="knowledge-element-body">
                    <p>{element.meaning}</p>
                    <div className="knowledge-source"><span>📄 Bron</span> {sourceLabel(element.source)}</div>
                    <div className="knowledge-state">Status: <strong>{state}</strong>{state==='gezien'?' · maak de hoofdstuktoets om dit actief te oefenen':state==='geoefend'?' · haal 80% op de hoofdstuktoets voor beheerst':state==='beheerst'?' · blijft terugkomen via gespreide herhaling':' · rond een gekoppeld level af'}</div>
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
