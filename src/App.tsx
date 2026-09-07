import { useMemo, useState } from 'react'
import { Header } from './components/Header'
import { LearningPath } from './components/LearningPath'
import { LessonPlayer } from './components/LessonPlayer'
import { SubjectList } from './components/SubjectList'
import { subjects } from './data/curriculum-full'
import { getCourseDefinition } from './data/courseDefinitions'
import type { Lesson, LessonResult, Progress, Subject } from './domain/types'
import { loadProgress, saveProgress } from './lib/progress'
import { buildChapterCheckpoint, buildReviewLesson, buildSubjectExam, collectQuestionBank, dueReviewItems, updateReviewItem } from './lib/studyModes'
import './styles.css'
import './components/studyModes.css'

type SessionKind='lesson'|'checkpoint'|'review'|'exam'
type StudySession={lesson:Lesson,kind:SessionKind,chapterId?:string}
type ResultState={result:LessonResult,kind:SessionKind,chapterId?:string}

export default function App(){
  const [progress,setProgress]=useState<Progress>(()=>loadProgress())
  const [subject,setSubject]=useState<Subject>(subjects[4])
  const [session,setSession]=useState<StudySession|null>(null)
  const [resultState,setResultState]=useState<ResultState|null>(null)

  const course=getCourseDefinition(subject.id)
  const lessonIndex=useMemo(()=>new Map(subjects.flatMap(s=>s.units.filter(u=>u.lesson).map(u=>[u.lesson!.id,u.lesson!] as const))),[])
  const subjectQuestionIds=useMemo(()=>new Set(collectQuestionBank(subject).map(item=>item.questionId)),[subject])
  const reviewDue=dueReviewItems(progress).filter(item=>subjectQuestionIds.has(item.questionId)).length
  const examBestScore=progress.examBestScores[subject.id] ?? 0

  function updateProgress(next:Progress){ setProgress(next); saveProgress(next) }

  function startLesson(id:string){
    const found=lessonIndex.get(id)
    if(found){setSession({lesson:found,kind:'lesson'});setResultState(null)}
  }

  function startCheckpoint(chapterId:string){
    const lesson=buildChapterCheckpoint(subject,chapterId)
    if(lesson.steps.length) {setSession({lesson,kind:'checkpoint',chapterId});setResultState(null)}
  }

  function startReview(){
    const lesson=buildReviewLesson(subject,progress)
    if(lesson.steps.length) {setSession({lesson,kind:'review'});setResultState(null)}
  }

  function startExam(){
    const lesson=buildSubjectExam(subject)
    if(lesson.steps.length) {setSession({lesson,kind:'exam'});setResultState(null)}
  }

  function finishLesson(result:LessonResult){
    if(!session) return
    const now=new Date()
    const questionReviews={...progress.questionReviews}
    for(const answer of result.answers){
      questionReviews[answer.questionId]=updateReviewItem(questionReviews[answer.questionId],{
        questionId:answer.questionId,
        lessonId:answer.lessonId,
        chapterId:answer.chapterId,
      },answer.correct,now)
    }

    const already=session.kind==='lesson' && progress.completedLessons.includes(session.lesson.id)
    let completedLessons=progress.completedLessons
    const checkpointScores={...progress.checkpointScores}
    const examBestScores={...progress.examBestScores}

    if(session.kind==='lesson' && result.passed && !already) completedLessons=[...completedLessons,session.lesson.id]
    if(session.kind==='checkpoint' && session.chapterId) checkpointScores[session.chapterId]=Math.max(checkpointScores[session.chapterId]??0,result.score)
    if(session.kind==='exam') examBestScores[subject.id]=Math.max(examBestScores[subject.id]??0,result.score)

    const bonus=session.kind==='lesson'?(result.passed && !already?20:0):session.kind==='checkpoint'?(result.passed?30:0):session.kind==='exam'?(result.passed?50:0):0
    const next:Progress={
      ...progress,
      xp:progress.xp + result.correct*10 + bonus,
      hearts:session.kind==='lesson'?Math.max(0,progress.hearts-(result.total-result.correct)):progress.hearts,
      completedLessons,
      questionReviews,
      checkpointScores,
      examBestScores,
    }
    updateProgress(next)
    setResultState({result,kind:session.kind,chapterId:session.chapterId})
  }

  function resultCopy(state:ResultState){
    const checkpointMin=course?.checkpointMinScore ?? 80
    const examMin=course?.examMinScore ?? 75
    if(state.kind==='checkpoint') return state.result.passed
      ? `Hoofdstuktoets ${state.chapterId} gehaald. Het volgende hoofdstuk is nu beschikbaar.`
      : `Nog geen ${checkpointMin}%. De vragen die fout gingen staan direct klaar bij Herhalen; daarna kun je de hoofdstuktoets opnieuw doen.`
    if(state.kind==='review') return 'Herhaalronde afgerond. Goede antwoorden worden volgens het 1/3/7/14/30-dagenritme later opnieuw ingepland; fouten blijven direct terugkomen.'
    if(state.kind==='exam') return state.result.passed
      ? 'Vakexamen gehaald. Je beste examenscore voor dit vak is opgeslagen; een nieuwe poging krijgt opnieuw een willekeurige mix.'
      : `Nog onder de examendrempel van ${examMin}%. Foute vragen zijn aan de herhaalvoorraad toegevoegd.`
    return state.result.passed
      ? 'Level gehaald. Je voortgang is opgeslagen.'
      : 'Nog niet boven de mastery-drempel. Bekijk de bronverwijzingen en gebruik Herhalen voor de fouten.'
  }

  if(session && resultState) return <main className="app"><Header progress={progress}/><section className="result card"><div className="trophy">{resultState.result.passed?'🏆':'🛩️'}</div><div className="eyebrow">{resultState.kind==='checkpoint'?'Hoofdstuktoets':resultState.kind==='exam'?'Vakexamen':resultState.kind==='review'?'Herhalen':'Level'}</div><h2>{resultState.result.score}%</h2><p>{resultState.result.correct} van {resultState.result.total} kennischecks goed.</p><p className="muted">{resultCopy(resultState)}</p><button className="primary" onClick={()=>{setSession(null);setResultState(null)}}>Terug naar leerpad</button></section></main>

  if(session) return <main className="app"><Header progress={progress}/><LessonPlayer lesson={session.lesson} onClose={()=>setSession(null)} onComplete={finishLesson}/></main>

  const studyModesEnabled=Boolean(course?.supportsStudyModes)
  return <main className="app">
    <Header progress={progress}/>
    <div className="layout">
      <section><h2 className="small-title">De 9 examenvakken</h2><p className="muted">Beginselen van het zweefvliegen is onze eerste volledige 1.0-cursus. De leerarchitectuur is nu generiek gemaakt zodat dezelfde broncontrole, hoofdstukken, herhaling en examens ook voor de volgende vakken kunnen worden gebruikt.</p><SubjectList subjects={subjects} currentId={subject.id} onSelect={next=>{setSubject(next);setResultState(null)}} completedLessons={progress.completedLessons}/></section>
      <LearningPath subject={subject} completedLessons={progress.completedLessons} checkpointScores={progress.checkpointScores} reviewDue={reviewDue} examBestScore={examBestScore} onStart={startLesson} onCheckpoint={studyModesEnabled?startCheckpoint:undefined} onReview={studyModesEnabled?startReview:undefined} onExam={studyModesEnabled?startExam:undefined}/>
    </div>
    <section className="principles card"><div><strong>Lesopbouw</strong><p>korte theorie → kennischeck → hoofdstuktoets</p></div><div><strong>Herhalen</strong><p>fouten direct terug; daarna 1 / 3 / 7 / 14 / 30 dagen</p></div><div><strong>Mastery</strong><p>toetsdrempels en exameninstellingen komen per vak uit één cursusdefinitie</p></div></section>
  </main>
}
