import type { SourceReference, SourcedLessonStep } from '../domain/types'

export const cov=(...ids:string[])=>ids
export const goals=(...ids:string[])=>ids

type SourceOptions={dynamic?:boolean,note?:string,currentCheck?:string,pageEnd?:number}
export function m(page:number,section:string,options:SourceOptions={}):SourceReference{
  return {file:'3.Meteorologie.pdf',page,...(options.pageEnd?{pageEnd:options.pageEnd}:{}),section,...(options.note?{note:options.note}:{}),...(options.dynamic?{freshness:'dynamic' as const,currentCheck:options.currentCheck}:{}),}
}
export function study(page:number,section:string,note?:string):SourceReference{
  return {file:'3-Meteo-studiehulp.pdf',page,section,...(note?{note}:{}),}
}
export function t(title:string,text:string,source:SourceReference,coverageIds:string[],illustrationKey?:string):SourcedLessonStep{
  return {type:'theory',title,text,source,coverageIds,...(illustrationKey?{illustrationKey}:{})}
}
export function q(question:string,answers:string[],correctIndex:number,explanation:string,source:SourceReference,coverageIds:string[]=[],studyGoalIds:string[]=[],practiceSource?:SourceReference,illustrationKey?:string):SourcedLessonStep{
  return {type:'question',question,answers,correctIndex,explanation,source,coverageIds,studyGoalIds,...(practiceSource?{practiceSource}:{}),...(illustrationKey?{illustrationKey}:{}),}
}
export function n(question:string,correctAnswer:number,explanation:string,source:SourceReference,coverageIds:string[]=[],studyGoalIds:string[]=[],practiceSource?:SourceReference,unit?:string,tolerance?:number):SourcedLessonStep{
  return {type:'numeric',question,correctAnswer,explanation,source,coverageIds,studyGoalIds,...(practiceSource?{practiceSource}:{}),...(unit?{unit}:{}),...(tolerance!==undefined?{tolerance}:{}),}
}
export function o(question:string,items:string[],correctOrder:string[],explanation:string,source:SourceReference,coverageIds:string[]=[],studyGoalIds:string[]=[],practiceSource?:SourceReference,illustrationKey?:string):SourcedLessonStep{
  return {type:'order',question,items,correctOrder,explanation,source,coverageIds,studyGoalIds,...(practiceSource?{practiceSource}:{}),...(illustrationKey?{illustrationKey}:{}),}
}
export function match(question:string,pairs:{left:string,right:string}[],explanation:string,source:SourceReference,coverageIds:string[]=[],studyGoalIds:string[]=[],practiceSource?:SourceReference,illustrationKey?:string):SourcedLessonStep{
  return {type:'match',question,pairs,explanation,source,coverageIds,studyGoalIds,...(practiceSource?{practiceSource}:{}),...(illustrationKey?{illustrationKey}:{}),}
}
