import type { SourceReference, SourcedQuestionStep, SourcedTheoryStep } from '../../domain/types'

export const b = (page:number, section:string, pageEnd?:number):SourceReference => ({
  file:'5-Beginselen.pdf',
  page,
  ...(pageEnd ? {pageEnd} : {}),
  section,
})

export const study = (page:number, section:string):SourceReference => ({
  file:'5-beginselen-studiehulp.pdf',
  page,
  section,
  note:'Oefendoel uit de studiehulp; het inhoudelijke antwoord is gecontroleerd tegen het actuele dictaat.',
})

export const t = (title:string, text:string, source:SourceReference):SourcedTheoryStep => ({
  type:'theory', title, text, source,
})

export const q = (
  question:string,
  answers:string[],
  correctIndex:number,
  explanation:string,
  source:SourceReference,
  practiceSource?:SourceReference,
):SourcedQuestionStep => ({
  type:'question', question, answers, correctIndex, explanation, source, ...(practiceSource ? {practiceSource} : {}),
})
