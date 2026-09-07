import type { KnowledgeChapter } from '../domain/course'
import { principlesKnowledgeChapters } from './principlesKnowledgeIndex'
import { principlesKnowledge52 } from './principlesKnowledge52'
import { principlesKnowledgeFiveThree } from './principlesKnowledgeFiveThree'
import { principlesKnowledgeFiveFour } from './principlesKnowledgeFiveFour'
import { principlesKnowledgeFiveFive } from './principlesKnowledgeFiveFive'
import { principlesKnowledgeFiveSix } from './principlesKnowledgeFiveSix'
import { principlesKnowledgeFiveSeven } from './principlesKnowledgeFiveSeven'

export const principlesKnowledge:KnowledgeChapter[]=principlesKnowledgeChapters.map(chapter=>{
  if(chapter.id==='5.2') return principlesKnowledge52
  if(chapter.id==='5.3') return principlesKnowledgeFiveThree
  if(chapter.id==='5.4') return principlesKnowledgeFiveFour
  if(chapter.id==='5.5') return principlesKnowledgeFiveFive
  if(chapter.id==='5.6') return principlesKnowledgeFiveSix
  if(chapter.id==='5.7') return principlesKnowledgeFiveSeven
  return chapter
})
