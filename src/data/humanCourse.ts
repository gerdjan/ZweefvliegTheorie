import type { SourcedSubject } from '../domain/types'
import { human21Units } from './humanParts/ch21'
import { human22IntroUnits } from './humanParts/ch22intro'
import { human221Units } from './humanParts/ch221'
import { human222Units } from './humanParts/ch222'
import { human223Units } from './humanParts/ch223'
import { human224Units } from './humanParts/ch224'
import { human225Units } from './humanParts/ch225'
import { human23Units } from './humanParts/ch23'
import { human24Units } from './humanParts/ch24'

export const humanSubject:SourcedSubject={
  id:'human',number:2,title:'Menselijke prestaties',
  sourceFreshness:'theorie december 2025 · dynamische EASA-check september 2026',
  description:'Menselijke factoren, recente ervaring, risico-inschatting, fysiologie, zien en evenwicht, gezondheid, psychologie, stress, besluitvorming en zuurstof.',
  units:[...human21Units,...human22IntroUnits,...human221Units,...human222Units,...human223Units,...human224Units,...human225Units,...human23Units,...human24Units],
}
