import { useMemo, useState } from 'react'
import { Header } from './components/Header'
import { LearningPath } from './components/LearningPath'
import { LessonPlayer } from './components/LessonPlayer'
import { SubjectList } from './components/SubjectList'
import { subjects } from './data/curriculum'
import type { Lesson, Progress, Subject } from './domain/types'
import { loadProgress, saveProgress } from './lib/progress'
import './styles.css'

export default function App(){
  const [progress,setProgress]=useState<Progress>(()=>loadProgress())
  const [subject,setSubject]=useState<Subject>(subjects[4])
  const [lesson,setLesson]=useState<Lesson|null>(null)
  const [result,setResult]=useState<{score:number,passed:boolean,correct:number,total:number}|null>(null)

  const lessonIndex=useMemo(()=>new Map(subjects.flatMap(s=>s.units.filter(u=>u.lesson).map(u=>[u.lesson!.id,u.lesson!] as const))),[])

  function updateProgress(next:Progress){ setProgress(next); saveProgress(next) }

  function finishLesson(r:{score:number,passed:boolean,correct:number,total:number}){
    if(!lesson) return
    const already=progress.completedLessons.includes(lesson.id)
    const next:Progress={
      ...progress,
      xp:progress.xp + r.correct*10 + (r.passed && !already ? 20 : 0),
      hearts:Math.max(0,progress.hearts-(r.total-r.correct)),
      completedLessons:r.passed && !already ? [...progress.completedLessons,lesson.id] : progress.completedLessons,
    }
    updateProgress(next);setResult(r)
  }

  if(lesson && result) return <main className="app"><Header progress={progress}/><section className="result card"><div className="trophy">{result.passed?'🏆':'🛩️'}</div><h2>{result.score}%</h2><p>{result.correct} van {result.total} kennischecks goed.</p><p className="muted">{result.passed?'Level gehaald. De volgende stap kan in de content-pipeline worden uitgewerkt.':'Nog niet boven de mastery-drempel. Probeer de les nog een keer.'}</p><button className="primary" onClick={()=>{setLesson(null);setResult(null)}}>Terug naar leerpad</button></section></main>

  if(lesson) return <main className="app"><Header progress={progress}/><LessonPlayer lesson={lesson} onClose={()=>setLesson(null)} onComplete={finishLesson}/></main>

  return <main className="app">
    <Header progress={progress}/>
    <div className="layout">
      <section><h2 className="small-title">De 9 examenvakken</h2><p className="muted">Kies een vak. In deze MVP is van ieder vak één bron-gebaseerde les speelbaar.</p><SubjectList subjects={subjects} currentId={subject.id} onSelect={setSubject} completedLessons={progress.completedLessons}/></section>
      <LearningPath subject={subject} completedLessons={progress.completedLessons} onStart={id=>{const found=lessonIndex.get(id); if(found) setLesson(found)}}/>
    </div>
    <section className="principles card"><div><strong>Lesopbouw</strong><p>korte theorie → directe kennischeck</p></div><div><strong>Bronregel</strong><p>nieuwste dictaat bepaalt het antwoord</p></div><div><strong>Mastery</strong><p>80%+ om een level te halen</p></div></section>
  </main>
}
