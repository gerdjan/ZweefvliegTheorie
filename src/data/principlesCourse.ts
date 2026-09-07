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
import { units as limits } from './principlesParts/limits'
import { units as safetyFinal } from './principlesParts/safetyFinal'

export const principlesSubject:SourcedSubject = {
  id:'principles',
  number:5,
  title:'Beginselen van het zweefvliegen',
  sourceFreshness:'35 levels · theorie november 2025 · detailaudit 78,6%',
  description:'35 levels over aerodynamica, vliegmechanica, stabiliteit, besturing, belastingen, overtrek, tolvlucht en spiraalduik. Elk theorieblok en elke vraag heeft een controleerbare PDF-bron. 5.0, 5.1 en 5.2 zijn nu pagina-voor-pagina op detailniveau gecontroleerd; de overige hoofdstukken volgen.',
  units:[...basics,...completenessA,...aeroA,...density,...aeroB,...completenessB,...mechanics,...mechanicsCompleteness,...stabilityControls,...limits,...safetyFinal],
}
