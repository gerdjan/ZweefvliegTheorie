import { useEffect, useMemo, useState } from 'react'
import type { KnowledgeCheckStep, Lesson, LessonResult, QuestionResult } from '../domain/types'
import { getMeteorologyIllustrationByKey } from '../data/meteorologyIllustrations'
import { meteorologyTerms } from '../data/meteorologyTerms'
import { getPrinciplesIllustration, getPrinciplesIllustrationByKey } from '../data/principlesIllustrations'
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

function isKnowledgeCheck(step:Lesson['steps'][number]):step is KnowledgeCheckStep{
  return step.type!=='theory'
}

export function LessonPlayer({ lesson, onClose, onComplete }:{lesson:Lesson,onClose:()=>void,onComplete:(result:LessonResult)=>void}) {
  const [index,setIndex]=useState(0)
  const [selected,setSelected]=useState<number|null>(null)
  const [numericAnswer,setNumericAnswer]=useState('')
  const [orderedItems,setOrderedItems]=useState<string[]>([])
  const [matchAnswers,setMatchAnswers]=useState<Record<string,string>>({})
  const [checked,setChecked]=useState(false)
  const [correct,setCorrect]=useState(0)
  const [answerResults,setAnswerResults]=useState<QuestionResult[]>([])
  const step=lesson.steps[index]
  const questionCount=useMemo(()=>lesson.steps.filter(isKnowledgeCheck).length,[lesson])
  const shuffledAnswers=useMemo(()=>{
    if(step.type!=='question') return []
    return shuffled(step.answers.map((text,originalIndex)=>({text,originalIndex})))
  },[lesson.id,index])
  const initialOrder=useMemo(()=>step.type==='order'?shuffled(step.items):[],[lesson.id,index])
  const matchOptions=useMemo(()=>step.type==='match'?shuffled(step.pairs.map(pair=>pair.right)):[],[lesson.id,index])

  useEffect(()=>{
    setOrderedItems(initialOrder)
    setNumericAnswer('')
    setMatchAnswers({})
  },[initialOrder,index])

  const progress=Math.round((index/lesson.steps.length)*100)
  const sourceFile=step.source?.file
  const isPrinciples=lesson.id.startsWith('principles-') || sourceFile==='5-Beginselen.pdf'
  const isMeteorology=lesson.id.startsWith('meteo-') || sourceFile==='3.Meteorologie.pdf'
  const terms=isPrinciples ? principlesTerms : isMeteorology ? meteorologyTerms : []
  const illustration=isMeteorology
    ? getMeteorologyIllustrationByKey(step.illustrationKey)
    : step.type==='theory'
      ? getPrinciplesIllustration(lesson.id,step.title) ?? getPrinciplesIllustrationByKey(step.illustrationKey)
      : getPrinciplesIllustrationByKey(step.illustrationKey)

  function advance(){
    if(index===lesson.steps.length-1){
      const score=questionCount ? Math.round((correct/questionCount)*100) : 100
      onComplete({score,passed:score>=lesson.minScore,correct,total:questionCount,answers:answerResults})
      return
    }
    setIndex(v=>v+1);setSelected(null);setChecked(false)
  }

  function moveOrder(position:number,direction:-1|1){
    const next=position+direction
    if(next<0 || next>=orderedItems.length || checked) return
    setOrderedItems(items=>{
      const copy=[...items]
      ;[copy[position],copy[next]]=[copy[next],copy[position]]
      return copy
    })
  }

  function canCheck(){
    if(step.type==='question') return selected!==null
    if(step.type==='numeric') return numericAnswer.trim()!=='' && Number.isFinite(Number(numericAnswer.replace(',','.')))
    if(step.type==='order') return orderedItems.length===step.items.length
    if(step.type==='match') return step.pairs.every(pair=>Boolean(matchAnswers[pair.left]))
    return false
  }

  function check(){
    if(!isKnowledgeCheck(step) || checked || !canCheck()) return
    let isCorrect=false
    if(step.type==='question') isCorrect=selected===step.correctIndex
    if(step.type==='numeric'){
      const value=Number(numericAnswer.replace(',','.'))
      isCorrect=Math.abs(value-step.correctAnswer)<=(step.tolerance ?? 0.000001)
    }
    if(step.type==='order') isCorrect=step.correctOrder.every((item,i)=>orderedItems[i]===item)
    if(step.type==='match') isCorrect=step.pairs.every(pair=>matchAnswers[pair.left]===pair.right)
    if(isCorrect) setCorrect(v=>v+1)
    const questionId=step.id ?? `${lesson.id}::${index}`
    setAnswerResults(results=>[...results,{
      questionId,
      lessonId:step.originLessonId ?? lesson.id,
      chapterId:step.originChapterId,
      correct:isCorrect,
    }])
    setChecked(true)
  }

  const kicker=step.type==='theory'?'Kernkennis':step.type==='numeric'?'Rekenvraag':step.type==='order'?'Volgordevraag':step.type==='match'?'Koppelvraag':'Kennischeck'

  return <div className="lesson-shell">
    <div className="lesson-top"><button className="secondary" onClick={onClose}>← Terug</button><div className="progress"><span style={{width:`${progress}%`}}/></div></div>
    <section className="card lesson-card">
      <div className="eyebrow">{kicker} · {index+1}/{lesson.steps.length}</div>
      <h2>{lesson.title}</h2>
      {step.type==='theory' ? <div className="theory-box">
        <h3>{step.title}</h3>
        <p><RichText text={step.text} terms={terms}/></p>
        <StepIllustration illustration={illustration}/>
        <StepSource source={step.source} practiceSource={step.practiceSource}/>
      </div> : <>
        <h3 className="question"><RichText text={step.question} terms={terms}/></h3>
        <StepIllustration illustration={illustration}/>
        <StepSource source={step.source} practiceSource={step.practiceSource}/>
        {step.type==='question' && <div className="answers">{shuffledAnswers.map(({text,originalIndex})=><button key={`${originalIndex}-${text}`} disabled={checked} onClick={()=>setSelected(originalIndex)} className={(selected===originalIndex?'selected ':'')+(checked?(originalIndex===step.correctIndex?'correct':selected===originalIndex?'wrong':''):'')}>{text}</button>)}</div>}
        {step.type==='numeric' && <div className="numeric-answer"><label><span>Jouw antwoord{step.unit?` (${step.unit})`:''}</span><input inputMode="decimal" disabled={checked} value={numericAnswer} onChange={event=>setNumericAnswer(event.target.value)} placeholder="Vul een getal in" /></label>{checked && <div className="numeric-correct">Juiste antwoord: <strong>{step.correctAnswer}{step.unit?` ${step.unit}`:''}</strong></div>}</div>}
        {step.type==='order' && <div className="order-answer">{orderedItems.map((item,position)=><div className="order-row" key={item}><span className="order-number">{position+1}</span><span>{item}</span><span className="order-buttons"><button type="button" disabled={checked||position===0} onClick={()=>moveOrder(position,-1)} aria-label="Omhoog">↑</button><button type="button" disabled={checked||position===orderedItems.length-1} onClick={()=>moveOrder(position,1)} aria-label="Omlaag">↓</button></span></div>)}</div>}
        {step.type==='match' && <div className="match-answer">{step.pairs.map(pair=><label className="match-row" key={pair.left}><span>{pair.left}</span><select disabled={checked} value={matchAnswers[pair.left]??''} onChange={event=>setMatchAnswers(current=>({...current,[pair.left]:event.target.value}))}><option value="">Kies…</option>{matchOptions.map(option=><option value={option} key={option}>{option}</option>)}</select>{checked && <small>{matchAnswers[pair.left]===pair.right?'✓':'→ '+pair.right}</small>}</label>)}</div>}
        {checked && <div className="feedback"><RichText text={step.explanation} terms={terms}/></div>}
      </>}
      <div className="actions">
        {isKnowledgeCheck(step) && !checked ? <button className="primary" disabled={!canCheck()} onClick={check}>Controleer</button> : <button className="primary" onClick={advance}>{index===lesson.steps.length-1?'Afronden':'Verder →'}</button>}
      </div>
    </section>
  </div>
}
