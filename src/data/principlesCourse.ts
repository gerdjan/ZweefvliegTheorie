import type { SourcedSubject } from '../domain/types'
import { units as basics } from './principlesParts/basics'
import { units as aeroA } from './principlesParts/aeroA'
import { units as aeroB } from './principlesParts/aeroB'
import { units as mechanics } from './principlesParts/mechanics'
import { units as stabilityControls } from './principlesParts/stabilityControls'
import { units as limits } from './principlesParts/limits'
import { units as safetyFinal } from './principlesParts/safetyFinal'

export const principlesSubject:SourcedSubject = {
  id:'principles',
  number:5,
  title:'Beginselen van het zweefvliegen',
  sourceFreshness:'volledige cursus · theorie november 2025 · studiehulp 2018',
  description:'24 levels over aerodynamica, vliegmechanica, stabiliteit, besturing, belastingen, overtrek, tolvlucht en spiraalduik. Elk theorieblok en elke vraag heeft een controleerbare PDF-bron.',
  units:[...basics,...aeroA,...aeroB,...mechanics,...stabilityControls,...limits,...safetyFinal],
}
