import type { SourcedSubject } from '../domain/types'
import { units as basics } from './principlesParts/basics'
import { units as completenessA } from './principlesParts/aeroCompletenessA'
import { units as aeroA } from './principlesParts/aeroA'
import { units as density } from './principlesParts/density'
import { units as aeroB } from './principlesParts/aeroB'
import { units as completenessB } from './principlesParts/aeroCompletenessB'
import { units as mechanics } from './principlesParts/mechanics'
import { units as mechanicsCompleteness } from './principlesParts/mechanicsCompleteness'
import { units as stabilityControls } from './principlesParts/stabilityControls'
import { units as stabilityCompleteness } from './principlesParts/stabilityCompleteness'
import { units as controlsCompleteness } from './principlesParts/controlsCompleteness'
import { units as limits } from './principlesParts/limits'
import { units as limitsCompleteness } from './principlesParts/limitsCompleteness'
import { units as safetyFinal } from './principlesParts/safetyFinal'
import { units as spiralCompleteness } from './principlesParts/spiralCompleteness'

const safetyCore=safetyFinal.filter(unit=>unit.id!=='principles-final-check')
const finalCheck=safetyFinal.filter(unit=>unit.id==='principles-final-check')

export const principlesSubject:SourcedSubject = {
  id:'principles',
  number:5,
  title:'Beginselen van het zweefvliegen',
  sourceFreshness:'53 levels · theorie november 2025 · detailaudit 100%',
  description:'53 levels over aerodynamica, vliegmechanica, stabiliteit, besturing, belastingen, overtrek, tolvlucht en spiraalduik. Elk theorieblok en elke vraag heeft een controleerbare PDF-bron. Alle hoofdstukken 5.0 t/m 5.7 zijn nu pagina-voor-pagina op detailniveau gecontroleerd; de aparte controle tegen de studiehulp volgt als laatste releasecheck.',
  units:[...basics,...completenessA,...aeroA,...density,...aeroB,...completenessB,...mechanics,...mechanicsCompleteness,...stabilityControls,...stabilityCompleteness,...controlsCompleteness,...limits,...limitsCompleteness,...safetyCore,...spiralCompleteness,...finalCheck],
}
