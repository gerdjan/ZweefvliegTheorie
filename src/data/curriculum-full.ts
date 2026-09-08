import { subjects as baseSubjects } from './curriculum'
import { humanSubject } from './humanCourse'
import { meteorologySubject } from './meteorologyCourse'
import { principlesSubject } from './principlesCourse'

export const subjects = baseSubjects.map(subject => {
  if(subject.id === 'human') return humanSubject
  if(subject.id === 'meteo') return meteorologySubject
  if(subject.id === 'principles') return principlesSubject
  return subject
})
