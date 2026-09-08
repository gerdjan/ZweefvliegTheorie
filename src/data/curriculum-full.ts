import { subjects as baseSubjects } from './curriculum'
import { meteorologySubject } from './meteorologyCourse'
import { principlesSubject } from './principlesCourse'

export const subjects = baseSubjects.map(subject => {
  if(subject.id === 'meteo') return meteorologySubject
  if(subject.id === 'principles') return principlesSubject
  return subject
})
