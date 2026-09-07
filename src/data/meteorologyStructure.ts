import type { CourseChapter } from '../domain/course'

export const meteorologyChapters:CourseChapter[] = [
  {id:'3.1',title:'3.1 · De atmosfeer',shortTitle:'Atmosfeer'},
  {id:'3.2',title:'3.2 · Wind',shortTitle:'Wind'},
  {id:'3.3',title:'3.3 · Thermodynamica',shortTitle:'Thermodynamica'},
  {id:'3.4',title:'3.4 · Wolken en mist',shortTitle:'Wolken & mist'},
  {id:'3.5',title:'3.5 · Neerslag',shortTitle:'Neerslag'},
  {id:'3.6',title:'3.6 · Luchtmassa’s en fronten',shortTitle:'Luchtmassa’s & fronten'},
  {id:'3.7',title:'3.7 · Druksystemen',shortTitle:'Druksystemen'},
  {id:'3.8',title:'3.8 · Klimatologie',shortTitle:'Klimatologie'},
  {id:'3.9',title:'3.9 · Gevaarlijke weersituaties',shortTitle:'Gevaren'},
  {id:'3.10',title:'3.10 · Meteo-informatie',shortTitle:'Meteo-info'},
]

export function meteorologyChapterIdForUnitTitle(title:string){
  return meteorologyChapters.find(chapter=>title.startsWith(chapter.id))?.id
}
