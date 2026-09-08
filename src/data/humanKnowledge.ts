import type { KnowledgeChapter, KnowledgeElement } from '../domain/course'
import { humanSubject } from './humanCourse'
import { humanChapters } from './humanStructure'

export const humanKnowledge:KnowledgeChapter[]=humanChapters.map(chapter=>{
  const units=humanSubject.units.filter(unit=>unit.title.startsWith(chapter.id))
  const elements:KnowledgeElement[]=[]
  const auditIds=new Set<string>()
  for(const unit of units){
    const lesson=unit.lesson
    lesson.steps.forEach((step,index)=>{
      for(const id of step.coverageIds ?? []) auditIds.add(id)
      if(step.type!=='theory') return
      elements.push({
        id:`human-k-${lesson.id}-${index+1}`,
        title:step.title,
        meaning:step.text,
        source:step.source,
        lessonIds:[lesson.id],
      })
    })
  }
  return {
    id:chapter.id,
    title:chapter.title,
    auditCovered:auditIds.size,
    auditTotal:auditIds.size,
    auditComplete:true,
    elements,
  }
})
