import type { Progress } from '../domain/types'

export function Header({ progress }: { progress: Progress }) {
  return (
    <header className="topbar">
      <div>
        <div className="eyebrow">SPL leerpad · MVP</div>
        <h1>Zweeftheorie</h1>
      </div>
      <div className="stats">
        <span>🔥 {progress.streak} dag</span>
        <span>❤ {progress.hearts}</span>
        <span className="xp">⚡ {progress.xp} XP</span>
      </div>
    </header>
  )
}
