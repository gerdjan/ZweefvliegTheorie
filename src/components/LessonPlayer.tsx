import { useMemo, useState } from 'react'
import type { Lesson } from '../domain/types'
import { getPrinciplesIllustration } from '../data/principlesIllustrations'
import { principlesTerms } from '../data/principlesTerms'
import { RichText } from './RichText'
import { StepIllustration } from './StepIllustration'
import { StepSource } from './StepSource'
import './learningContent.css'

function shuffled<T>(items:T[]){
  const copy=[...items]
  for(let i=copy.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1))
    ;[copy[i],copy[j]]=[copy[j],copy[i]]
  }
  return copy
}

export function LessonPlayer({ lesson, onClose, onComplete }:{lesson:Lesson,onClose:()=>void,onComplete:(result:{score:number,passed:boolean,correct:number,total:number})=>void}) {
  const [index,setIndex]=useState(0)
  const [selected,setSelected]=useState<number|null>(null)
  const [checked,setChecked]=useState(false)
  const [correct,setCorrect]=useState(0)
  const step=lesson.steps[index]
  const questionCount=useMemo(()=>lesson.steps.filter(s=>s.type==='question').length,[lesson])
  const shuffledAnswers=useMemo(()=>{
    if(step.type!=='question') return []
    return shuffled(step.answers.map((text,originalIndex)=>({text,originalIndex})))
  },[lesson.id,index])
  const progress=Math.round((index/lesson.steps.length)*100)
  const isPrinciples=lesson.id.startsWith('principles-') || step.source?.file==='5-Beginselen.pdf'
  const terms=isPrinciples ? principlesTerms : []
  const illustration=step.type==='theory' ? getPrinciplesIllustration(lesson.id,step.title) : undefined

  function advance(){
    if(index===lesson.steps.length-1){
      const score=questionCount ? Math.round((correct/questionCount)*100) : 100
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
      {step.type==='theory' ? <div className="theory-box">
        <h3>{step.title}</h3>
        <p><RichText text={step.text} terms={terms}/></p>
        <StepIllustration illustration={illustration}/>
        <StepSource source={step.source} practiceSource={step.practiceSource}/>
      </div> : <>
        <h3 className="question"><RichText text={step.question} terms={terms}/></h3>
        <StepSource source={step.source} practiceSource={step.practiceSource}/>
        <div className="answers">{shuffledAnswers.map(({text,originalIndex})=><button key={`${originalIndex}-${text}`} disabled={checked} onClick={()=>setSelected(originalIndex)} className={(selected===originalIndex?'selected ':'')+(checked?(originalIndex===step.correctIndex?'correct':selected===originalIndex?'wrong':''):'')}>{text}</button>)}</div>
        {checked && <div className="feedback"><RichText text={step.explanation} terms={terms}/></div>}
      </>}
      <div className="actions">
        {step.type==='question' && !checked ? <button className="primary" disabled={selected===null} onClick={check}>Controleer</button> : <button className="primary" onClick={advance}>{index===lesson.steps.length-1?'Afronden':'Verder →'}</button>}
      </div>
    </section>
  </div>
}
