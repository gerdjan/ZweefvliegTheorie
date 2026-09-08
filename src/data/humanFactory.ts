import type { SourceReference, SourcedLessonStep } from '../domain/types'

export const cov=(...ids:string[])=>ids

type SourceOptions={dynamic?:boolean,note?:string,currentCheck?:string,pageEnd?:number}
export function h(page:number,section:string,options:SourceOptions={}):SourceReference{
  return {file:'2-Menselijke-prestaties.pdf',page,...(options.pageEnd?{pageEnd:options.pageEnd}:{}),section,...(options.note?{note:options.note}:{}),...(options.dynamic?{freshness:'dynamic' as const,currentCheck:options.currentCheck}:{}),}
}
export function t(title:string,text:string,source:SourceReference,coverageIds:string[],illustrationKey?:string):SourcedLessonStep{
  return {type:'theory',title,text,source,coverageIds,...(illustrationKey?{illustrationKey}:{})}
}
export function q(question:string,answers:string[],correctIndex:number,explanation:string,source:SourceReference,coverageIds:string[]=[]):SourcedLessonStep{
  return {type:'question',question,answers,correctIndex,explanation,source,coverageIds}
}
export function o(question:string,items:string[],correctOrder:string[],explanation:string,source:SourceReference,coverageIds:string[]=[]):SourcedLessonStep{
  return {type:'order',question,items,correctOrder,explanation,source,coverageIds}
}
export function match(question:string,pairs:{left:string,right:string}[],explanation:string,source:SourceReference,coverageIds:string[]=[]):SourcedLessonStep{
  return {type:'match',question,pairs,explanation,source,coverageIds}
}
