import type { SourceReference, Subject, Unit } from './types'

export type CourseReleaseStatus='concept'|'audit'|'content-complete'|'1.0'

export type CourseChapter={
  id:string
  title:string
  shortTitle:string
}

export type KnowledgeElement={
  id:string
  title:string
  meaning:string
  source:SourceReference
  lessonIds:string[]
}

export type KnowledgeChapter={
  id:string
  title:string
  auditCovered:number
  auditTotal:number
  auditComplete:boolean
  elements:KnowledgeElement[]
}

export type ReleaseGateSummary={
  sourceSections?:string
  detailElements?:string
  studyAidGoals?:string
  activeQuestionGoals?:string
}

export type CourseSourcePolicy={
  authoritativeSource:string
  authoritativeSourceVersion?:string
  practiceSource?:string
  dynamicContent?:boolean
  note?:string
}

export type CourseDefinition={
  subjectId:string
  releaseStatus:CourseReleaseStatus
  chapters:CourseChapter[]
  knowledgeChapters?:KnowledgeChapter[]
  sourcePolicy?:CourseSourcePolicy
  releaseGates?:ReleaseGateSummary
  checkpointMinScore:number
  examMinScore:number
  examQuestionCount:number
  supportsStudyModes:boolean
  chapterIdForUnit:(unit:Unit)=>string|undefined
}

export function groupUnitsByChapter(subject:Subject,course:CourseDefinition){
  const grouped=new Set<string>()
  const chapters=course.chapters.map(chapter=>{
    const units=subject.units.filter(unit=>{
      if(!unit.lesson) return false
      const match=course.chapterIdForUnit(unit)===chapter.id
      if(match) grouped.add(unit.id)
      return match
    })
    return {chapter,units}
  })
  const extraUnits=subject.units.filter(unit=>unit.lesson && !grouped.has(unit.id))
  return {chapters,extraUnits}
}
