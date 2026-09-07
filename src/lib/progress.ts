import type { Progress } from '../domain/types'

const KEY = 'zweeftheorie.progress.v1'

export const defaultProgress: Progress = {
  xp: 0,
  hearts: 5,
  streak: 1,
  completedLessons: [],
  questionReviews: {},
  checkpointScores: {},
  examBestScores: {},
}

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    if(!raw) return defaultProgress
    const parsed=JSON.parse(raw) as Partial<Progress> & {examBestScore?:number}
    const examBestScores=parsed.examBestScores ?? (parsed.examBestScore ? {principles:parsed.examBestScore} : {})
    return {
      ...defaultProgress,
      ...parsed,
      completedLessons:Array.isArray(parsed.completedLessons)?parsed.completedLessons:[],
      questionReviews:parsed.questionReviews ?? {},
      checkpointScores:parsed.checkpointScores ?? {},
      examBestScores,
    }
  } catch {
    return defaultProgress
  }
}

export function saveProgress(progress: Progress) {
  localStorage.setItem(KEY, JSON.stringify(progress))
}
