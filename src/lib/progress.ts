import type { Progress } from '../domain/types'

const KEY = 'zweeftheorie.progress.v1'

export const defaultProgress: Progress = {
  xp: 0,
  hearts: 5,
  streak: 1,
  completedLessons: [],
}

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? { ...defaultProgress, ...JSON.parse(raw) } : defaultProgress
  } catch {
    return defaultProgress
  }
}

export function saveProgress(progress: Progress) {
  localStorage.setItem(KEY, JSON.stringify(progress))
}
