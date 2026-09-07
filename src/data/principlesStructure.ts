import type { CourseChapter } from '../domain/course'

export const principlesChapters:CourseChapter[] = [
  {id:'5.0',title:'5.0 · Begrippen en definities',shortTitle:'Begrippen'},
  {id:'5.1',title:'5.1 · Aerodynamica',shortTitle:'Aerodynamica'},
  {id:'5.2',title:'5.2 · Vliegmechanica',shortTitle:'Vliegmechanica'},
  {id:'5.3',title:'5.3 · Stabiliteit',shortTitle:'Stabiliteit'},
  {id:'5.4',title:'5.4 · Besturingssysteem',shortTitle:'Besturing'},
  {id:'5.5',title:'5.5 · Beperkingen en belastingen',shortTitle:'Beperkingen'},
  {id:'5.6',title:'5.6 · Overtrek en tolvlucht',shortTitle:'Overtrek & tolvlucht'},
  {id:'5.7',title:'5.7 · Spiraalduik',shortTitle:'Spiraalduik'},
]

export function chapterIdForUnitTitle(title:string){
  return principlesChapters.find(chapter=>title.startsWith(chapter.id))?.id
}

export function chapterIdForLessonId(lessonId:string, unitTitle?:string){
  if(unitTitle) return chapterIdForUnitTitle(unitTitle)
  const match=lessonId.match(/^principles-5-([0-7])(?:-|$)/)
  return match ? `5.${match[1]}` : undefined
}
