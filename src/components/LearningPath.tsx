import type { Subject } from '../domain/types'

export function LearningPath({ subject, completedLessons, onStart }:{subject:Subject,completedLessons:string[],onStart:(lessonId:string)=>void}) {
  return <section className="card path-card">
    <div className="section-head">
      <div><div className="eyebrow">Leerpad</div><h2>{subject.number}. {subject.title}</h2></div>
      <span className="badge">{subject.sourceFreshness}</span>
    </div>
    <p className="muted">{subject.description}</p>
    <div className="path">
      {subject.units.map((u,i) => {
        const playable = Boolean(u.lesson)
        const complete = u.lesson ? completedLessons.includes(u.lesson.id) : false
        return <div className="path-row" key={u.id}>
          <button disabled={!playable} onClick={()=>u.lesson && onStart(u.lesson.id)} className={'node '+(playable?'playable':'locked')}>{complete?'✓':i+1}</button>
          <div><strong>{u.title}</strong><small>{playable?'Speelbare MVP-les':'Curriculum gemapt · inhoud volgt'}</small></div>
        </div>
      })}
    </div>
  </section>
}
