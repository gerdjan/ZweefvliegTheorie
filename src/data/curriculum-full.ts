import { subjects as baseSubjects } from './curriculum'
import { principlesSubject } from './principlesCourse'

export const subjects = baseSubjects.map(subject =>
  subject.id === 'principles' ? principlesSubject : subject
)
