import type { Subject } from '../domain/types'

export function SubjectList({ subjects, currentId, onSelect, completedLessons }:{subjects:Subject[], currentId:string, onSelect:(s:Subject)=>void, completedLessons:string[]}) {
  return <div className="subject-list">
    {subjects.map(s => {
      const complete = s.units.some(u => u.lesson && completedLessons.includes(u.lesson.id))
      return <button key={s.id} className={'subject-button '+(s.id===currentId?'active':'')} onClick={()=>onSelect(s)}>
        <span className="subject-number">{s.number}</span>
        <span className="subject-copy"><strong>{s.title}</strong><small>{s.units.length} onderwerpen · {complete?'demo-les voltooid':'startklaar'}</small></span>
      </button>
    })}
  </div>
}
