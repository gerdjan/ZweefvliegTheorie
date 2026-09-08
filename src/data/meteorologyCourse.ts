import type { SourcedSubject } from '../domain/types'
import { meteorology31Units } from './meteorologyParts/ch31'
import { meteorology32Units } from './meteorologyParts/ch32'
import { meteorology33Units } from './meteorologyParts/ch33'
import { meteorology34Units } from './meteorologyParts/ch34'
import { meteorology35Units } from './meteorologyParts/ch35'
import { meteorology36Units } from './meteorologyParts/ch36'
import { meteorology37Units } from './meteorologyParts/ch37'
import { meteorology38Units } from './meteorologyParts/ch38'
import { meteorology39Units } from './meteorologyParts/ch39'
import { meteorology310Units } from './meteorologyParts/ch310'

export const meteorologySubject:SourcedSubject={
  id:'meteo',number:3,title:'Meteorologie',sourceFreshness:'theorie januari 2026 · studiehulp 2019 · dynamische checks 7–8 sep 2026',
  description:'Atmosfeer, wind, thermodynamica, wolken, neerslag, fronten, druksystemen, klimatologie, gevaren en meteorologische informatie.',
  units:[...meteorology31Units,...meteorology32Units,...meteorology33Units,...meteorology34Units,...meteorology35Units,...meteorology36Units,...meteorology37Units,...meteorology38Units,...meteorology39Units,...meteorology310Units],
}
