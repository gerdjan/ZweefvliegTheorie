import type { LearningIllustration } from '../data/principlesIllustrations'

export function StepIllustration({ illustration }:{illustration?:LearningIllustration}){
  if(!illustration) return null
  const src=`${import.meta.env.BASE_URL}${illustration.src.replace(/^\//,'')}`
  const pageLabel=illustration.source.pageEnd
    ? `PDF p. ${illustration.source.page}–${illustration.source.pageEnd}`
    : `PDF p. ${illustration.source.page}`

  return <figure className="step-illustration">
    <img src={src} alt={illustration.alt} loading="lazy"/>
    <figcaption>
      <span>{illustration.caption}</span>
      <small>Didactische illustratie · bron: <strong>{illustration.source.file}</strong> · {pageLabel} · {illustration.source.section}</small>
    </figcaption>
  </figure>
}
