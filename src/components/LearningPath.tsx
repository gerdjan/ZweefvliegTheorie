import type { Subject } from '../domain/types'
import { getCourseDefinition } from '../data/courseDefinitions'
import { groupUnitsByChapter } from '../domain/course'
import { KnowledgeIndex } from './KnowledgeIndex'

export function LearningPath({ subject, completedLessons, checkpointScores={}, reviewDue=0, examBestScore=0, onStart, onCheckpoint, onReview, onExam }:{
  subject:Subject
  completedLessons:string[]
  checkpointScores?:Record<string,number>
  reviewDue?:number
  examBestScore?:number
  onStart:(lessonId:string)=>void
  onCheckpoint?:(chapterId:string)=>void
  onReview?:()=>void
  onExam?:()=>void
}) {
  const totalPlayable=subject.units.filter(u=>u.lesson).length
  const completedInSubject=subject.units.filter(u=>u.lesson && completedLessons.includes(u.lesson.id)).length
  const completed=new Set(completedLessons)
  const course=getCourseDefinition(subject.id)

  if(course?.supportsStudyModes && course.chapters.length){
    const {chapters:chapterGroups,extraUnits}=groupUnitsByChapter(subject,course)
    const allCheckpointsPassed=course.chapters.every(chapter=>(checkpointScores[chapter.id] ?? 0)>=course.checkpointMinScore)
    const allLessonsComplete=completedInSubject===totalPlayable
    const examUnlocked=allCheckpointsPassed && allLessonsComplete
    const gateEntries=course.releaseGates ? Object.values(course.releaseGates).filter(Boolean) : []

    return <section className="card path-card">
      <div className="section-head">
        <div><div className="eyebrow">Leerpad · {course.releaseStatus}</div><h2>{subject.number}. {subject.title}</h2></div>
        <span className="badge">{subject.sourceFreshness}</span>
      </div>
      <p className="muted">{subject.description}</p>
      {course.sourcePolicy && <div className="source-policy-banner">
        <strong>Broncontrole aan · {course.releaseStatus==='1.0'?'cursus 1.0':course.releaseStatus}</strong>
        <span><strong>{course.sourcePolicy.authoritativeSource}</strong>{course.sourcePolicy.authoritativeSourceVersion?` (${course.sourcePolicy.authoritativeSourceVersion})`:''} is de inhoudelijke antwoordbron.{course.sourcePolicy.practiceSource?` ${course.sourcePolicy.practiceSource} wordt alleen als oefenbron gebruikt.`:''}</span>
        {course.sourcePolicy.note && <span>{course.sourcePolicy.note}</span>}
        {gateEntries.length>0 && <span><strong>Releasegates:</strong> {gateEntries.join(' · ')}</span>}
        {course.sourcePolicy.dynamicContent && <span><strong>Actualiteitscontrole vereist:</strong> dit vak bevat onderwerpen die tegen officiële actuele bronnen gecontroleerd moeten worden.</span>}
      </div>}

      <div className="study-actions">
        <button type="button" className="study-action" onClick={onReview} disabled={!onReview || reviewDue===0}><strong>↻ Herhalen</strong><span>{reviewDue>0?`${reviewDue} vraag${reviewDue===1?'':'en'} nu aan de beurt`:'Niets achterstallig'}</span></button>
        <button type="button" className="study-action" onClick={onExam} disabled={!onExam || !examUnlocked}><strong>🎓 Vakexamen</strong><span>{examUnlocked?(examBestScore?`Beste score ${examBestScore}%`:`${course.examQuestionCount} willekeurige vragen`):'Rond alle levels en hoofdstuktoetsen af'}</span></button>
      </div>

      {course.knowledgeChapters && <KnowledgeIndex knowledgeChapters={course.knowledgeChapters} completedLessons={completedLessons} checkpointScores={checkpointScores}/>}      
      <div className="course-progress"><strong>{completedInSubject}/{totalPlayable}</strong> levels afgerond · <strong>{course.chapters.filter(ch=> (checkpointScores[ch.id]??0)>=course.checkpointMinScore).length}/{course.chapters.length}</strong> hoofdstuktoetsen gehaald</div>

      <div className="chapter-path">
        {chapterGroups.map(({chapter,units},chapterIndex)=>{
          const chapterCompleted=units.filter(unit=>unit.lesson && completed.has(unit.lesson.id)).length
          const chapterTotal=units.length
          const percent=chapterTotal ? Math.round(chapterCompleted/chapterTotal*100) : 0
          const checkpointScore=checkpointScores[chapter.id] ?? 0
          const checkpointPassed=checkpointScore>=course.checkpointMinScore
          const previousGatePassed=chapterIndex===0 || (checkpointScores[course.chapters[chapterIndex-1].id] ?? 0)>=course.checkpointMinScore
          return <section className={'chapter-block '+(checkpointPassed?'chapter-complete':'')} key={chapter.id}>
            <div className="chapter-head">
              <div><strong>{chapter.title}</strong><small>{chapterCompleted}/{chapterTotal} levels · {checkpointPassed?`toets gehaald (${checkpointScore}%)`:checkpointScore?`beste toets ${checkpointScore}%`:'toets nog niet gedaan'}</small></div>
              <span>{percent}%</span>
            </div>
            <div className="chapter-progress"><span style={{width:`${percent}%`}}/></div>
            <div className="path chapter-levels">
              {units.map((unit,index)=>{
                const lesson=unit.lesson!
                const complete=completed.has(lesson.id)
                const previous=index>0 ? units[index-1].lesson : undefined
                const previousComplete=index===0 ? previousGatePassed : Boolean(previous && completed.has(previous.id))
                const unlocked=complete || previousComplete
                const displayTitle=unit.title.startsWith(`${chapter.id} · `)?unit.title.replace(`${chapter.id} · `,''):unit.title
                return <div className={'path-row '+(complete?'path-complete':'')} key={unit.id}>
                  <button disabled={!unlocked} onClick={()=>unlocked && onStart(lesson.id)} className={'node '+(unlocked?'playable':'locked')}>{complete?'✓':index+1}</button>
                  <div><strong>{displayTitle}</strong><small>{complete?'Voltooid':unlocked?'Start level':index===0?'Haal eerst de vorige hoofdstuktoets':'Voltooi eerst het vorige level'}</small></div>
                </div>
              })}
            </div>
            <button type="button" className={'checkpoint-button '+(checkpointPassed?'passed':'')} disabled={chapterCompleted<chapterTotal || !onCheckpoint} onClick={()=>onCheckpoint?.(chapter.id)}>
              <strong>{checkpointPassed?'✓ ':''}Hoofdstuktoets {chapter.id}</strong>
              <span>{chapterCompleted<chapterTotal?'Rond eerst alle levels af':checkpointPassed?`Gehaald · ${checkpointScore}% · opnieuw doen`:`Willekeurige vragen · ${course.checkpointMinScore}% nodig`}</span>
            </button>
          </section>
        })}

        {extraUnits.length>0 && <section className="chapter-block final-check-block">
          <div className="chapter-head"><div><strong>Integrale eindcheck</strong><small>Laatste cursuslevel vóór het vakexamen</small></div></div>
          <div className="path chapter-levels">{extraUnits.map((unit,index)=>{
            const lesson=unit.lesson!
            const complete=completed.has(lesson.id)
            const unlocked=complete || allCheckpointsPassed && (index===0 || completed.has(extraUnits[index-1].lesson!.id))
            return <div className={'path-row '+(complete?'path-complete':'')} key={unit.id}>
              <button disabled={!unlocked} onClick={()=>unlocked && onStart(lesson.id)} className={'node '+(unlocked?'playable':'locked')}>{complete?'✓':'★'}</button>
              <div><strong>{unit.title}</strong><small>{complete?'Voltooid':unlocked?'Start eindcheck':'Haal eerst alle hoofdstuktoetsen'}</small></div>
            </div>
          })}</div>
        </section>}
      </div>
    </section>
  }

  return <section className="card path-card">
    <div className="section-head">
      <div><div className="eyebrow">Leerpad</div><h2>{subject.number}. {subject.title}</h2></div>
      <span className="badge">{subject.sourceFreshness}</span>
    </div>
    <p className="muted">{subject.description}</p>
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
