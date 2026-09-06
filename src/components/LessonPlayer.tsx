import { useMemo, useState } from 'react'
import type { Lesson } from '../domain/types'

export function LessonPlayer({ lesson, onClose, onComplete }:{lesson:Lesson,onClose:()=>void,onComplete:(result:{score:number,passed:boolean,correct:number,total:number})=>void}) {
  const [index,setIndex]=useState(0)
  const [selected,setSelected]=useState<number|null>(null)
  const [checked,setChecked]=useState(false)
  const [correct,setCorrect]=useState(0)
  const step=lesson.steps[index]
  const questionCount=useMemo(()=>lesson.steps.filter(s=>s.type==='question').length,[lesson])
  const progress=Math.round((index/lesson.steps.length)*100)

  function advance(){
    if(index===lesson.steps.length-1){
      const score=Math.round((correct/questionCount)*100)
      onComplete({score,passed:score>=lesson.minScore,correct,total:questionCount})
      return
    }
    setIndex(v=>v+1);setSelected(null);setChecked(false)
  }

  function check(){
    if(step.type!=='question'||selected===null) return
    if(!checked && selected===step.correctIndex) setCorrect(v=>v+1)
    setChecked(true)
  }

  return <div className="lesson-shell">
    <div className="lesson-top"><button className="secondary" onClick={onClose}>← Terug</button><div className="progress"><span style={{width:`${progress}%`}}/></div></div>
    <section className="card lesson-card">
      <div className="eyebrow">{step.type==='theory'?'Kernkennis':'Kennischeck'} · {index+1}/{lesson.steps.length}</div>
      <h2>{lesson.title}</h2>
      {step.type==='theory' ? <div className="theory-box"><h3>{step.title}</h3><p>{step.text}</p></div> : <>
        <h3 className="question">{step.question}</h3>
        <div className="answers">{step.answers.map((a,i)=><button key={a} disabled={checked} onClick={()=>setSelected(i)} className={(selected===i?'selected ':'')+(checked?(i===step.correctIndex?'correct':selected===i?'wrong':''):'')}>{a}</button>)}</div>
        {checked && <div className="feedback">{step.explanation}</div>}
      </>}
      <div className="actions">
        {step.type==='question' && !checked ? <button className="primary" disabled={selected===null} onClick={check}>Controleer</button> : <button className="primary" onClick={advance}>{index===lesson.steps.length-1?'Afronden':'Verder →'}</button>}
      </div>
    </section>
  </div>
}
