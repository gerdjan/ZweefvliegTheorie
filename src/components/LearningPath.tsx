import type { Subject } from '../domain/types'
import { KnowledgeIndex } from './KnowledgeIndex'

export function LearningPath({ subject, completedLessons, onStart }:{subject:Subject,completedLessons:string[],onStart:(lessonId:string)=>void}) {
  const totalPlayable=subject.units.filter(u=>u.lesson).length
  const completedInSubject=subject.units.filter(u=>u.lesson && completedLessons.includes(u.lesson.id)).length

  return <section className="card path-card">
    <div className="section-head">
      <div><div className="eyebrow">Leerpad</div><h2>{subject.number}. {subject.title}</h2></div>
      <span className="badge">{subject.sourceFreshness}</span>
    </div>
    <p className="muted">{subject.description}</p>
    {subject.id==='principles' && <>
      <div className="source-policy-banner">
        <strong>Broncontrole aan · inhoudelijk compleet</strong>
        <span>Elk theorieblok en elke vraag toont de exacte PDF, PDF-pagina en paragraaf. De actuele theorie is leidend; de studiehulp wordt alleen als oefendoel gebruikt.</span>
        <span><strong>Dekkingsstatus:</strong> 42/42 genummerde bronsecties · 294/294 detailpunten · 75/75 oefendoelen uit de studiehulp herleidbaar. Bij 2 oefendoelen verwees de studiehulp naar oude polaire-figuren/paginanummers; daar gebruikt de cursus expliciet de gelijkwaardige methode en voorbeelden uit het dictaat van november 2025.</span>
      </div>
      <KnowledgeIndex completedLessons={completedLessons}/>
    </>}
    {totalPlayable>1 && <div className="course-progress"><strong>{completedInSubject}/{totalPlayable}</strong> levels afgerond</div>}
    <div className="path">
      {subject.units.map((u,i) => {
        const playable=Boolean(u.lesson)
        const complete=u.lesson ? completedLessons.includes(u.lesson.id) : false
        const previous=subject.units[i-1]
        const previousComplete=i===0 || !previous?.lesson || completedLessons.includes(previous.lesson.id)
        const unlocked=playable && previousComplete
        return <div className={'path-row '+(complete?'path-complete':'')} key={u.id}>
          <button disabled={!unlocked} onClick={()=>unlocked && u.lesson && onStart(u.lesson.id)} className={'node '+(unlocked?'playable':'locked')}>{complete?'✓':i+1}</button>
          <div><strong>{u.title}</strong><small>{complete?'Voltooid':unlocked?'Start level':playable?'Voltooi eerst het vorige level':'Curriculum gemapt · inhoud volgt'}</small></div>
        </div>
      })}
    </div>
  </section>
}
