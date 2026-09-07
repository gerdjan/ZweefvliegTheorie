import type { SourceReference as SourceRef } from '../domain/types'

function pageLabel(source:SourceRef){
  return source.pageEnd && source.pageEnd !== source.page
    ? `PDF p. ${source.page}-${source.pageEnd}`
    : `PDF p. ${source.page}`
}

export function StepSource({ source, practiceSource }:{source?:SourceRef,practiceSource?:SourceRef}){
  if(!source) return null
  return <div className={'source-reference '+(source.freshness==='dynamic'?'source-dynamic':'')}>
    <div className="source-primary">
      <span className="source-kicker">📄 Bron</span>
      <strong>{source.file}</strong>
      <span>· {pageLabel(source)}</span>
      <span>· {source.section}</span>
    </div>
    <div className="source-read-more">Meer lezen: open <strong>{source.file}</strong> bij {pageLabel(source)} en zoek op <strong>{source.section}</strong>.</div>
    {source.note && <div className="source-note">{source.note}</div>}
    {source.freshness==='dynamic' && <div className="source-current-check"><strong>↻ Actuele controle nodig.</strong> {source.currentCheck ?? 'Controleer dit onderwerp vóór operationeel gebruik tegen de daarvoor geldende officiële actuele bron.'}</div>}
    {practiceSource && <div className="source-practice">
      <span className="source-kicker">📝 Oefendoel</span>
      <strong>{practiceSource.file}</strong>
      <span>· {pageLabel(practiceSource)}</span>
      <span>· {practiceSource.section}</span>
      {practiceSource.note && <span className="source-note-inline"> — {practiceSource.note}</span>}
    </div>}
  </div>
}
