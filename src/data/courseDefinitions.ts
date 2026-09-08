import type { CourseDefinition } from '../domain/course'
import { meteorologyKnowledge } from './meteorologyKnowledge'
import { meteorologyChapters } from './meteorologyStructure'
import { principlesKnowledge } from './principlesKnowledge'
import { principlesChapters } from './principlesStructure'

export const courseDefinitions:Record<string,CourseDefinition>={
  meteo:{
    subjectId:'meteo',
    releaseStatus:'1.0',
    chapters:meteorologyChapters,
    knowledgeChapters:meteorologyKnowledge,
    sourcePolicy:{
      authoritativeSource:'3.Meteorologie.pdf',
      authoritativeSourceVersion:'januari 2026',
      practiceSource:'3-Meteo-studiehulp.pdf',
      dynamicContent:true,
      note:'Het actuele dictaat bepaalt de stabiele leerstof. Veranderlijke operationele gegevens krijgen een afzonderlijke actualiteitswaarschuwing; de studiehulp uit 2019 is alleen een oefen- en kruiscontrolebron.',
    },
    releaseGates:{
      sourceSections:'37/37',
      detailElements:'432/432 + 5 context-only',
      studyAidGoals:'77/77',
      activeQuestionGoals:'77/77',
    },
    checkpointMinScore:80,
    examMinScore:75,
    examQuestionCount:30,
    supportsStudyModes:true,
    chapterIdForUnit:unit=>meteorologyChapters.find(chapter=>unit.title.startsWith(chapter.id))?.id,
  },
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
