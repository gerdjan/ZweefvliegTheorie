import type { CourseDefinition } from '../domain/course'
import { principlesKnowledge } from './principlesKnowledge'
import { principlesChapters } from './principlesStructure'

export const courseDefinitions:Record<string,CourseDefinition>={
  principles:{
    subjectId:'principles',
    releaseStatus:'1.0',
    chapters:principlesChapters,
    knowledgeChapters:principlesKnowledge,
    sourcePolicy:{
      authoritativeSource:'5-Beginselen.pdf',
      authoritativeSourceVersion:'november 2025',
      practiceSource:'5-beginselen-studiehulp.pdf',
      dynamicContent:false,
      note:'Het actuele dictaat bepaalt inhoud en antwoorden; de oudere studiehulp levert alleen oefendoelen.',
    },
    releaseGates:{
      sourceSections:'42/42',
      detailElements:'294/294',
      studyAidGoals:'75/75',
      activeQuestionGoals:'75/75',
    },
    checkpointMinScore:80,
    examMinScore:75,
    examQuestionCount:30,
    supportsStudyModes:true,
    chapterIdForUnit:unit=>principlesChapters.find(chapter=>unit.title.startsWith(chapter.id))?.id,
  },
}

export function getCourseDefinition(subjectId:string){
  return courseDefinitions[subjectId]
}
