import type { LearningIllustration } from './principlesIllustrations'
import type { SourceReference } from '../domain/types'

const m=(page:number,section:string):SourceReference=>({file:'3.Meteorologie.pdf',page,section})
const keyed:Record<string,LearningIllustration>={
  'atmosphere-layers':{src:'illustrations/meteorology/atmosphere-layers.svg',alt:'Schematische verticale indeling van troposfeer, tropopauze, stratosfeer, mesosfeer en thermosfeer.',caption:'Didactische schets van de temperatuurlagen van de atmosfeer; niet op schaal.',source:m(6,'§3.1.1 Verticale verdeling van de atmosfeer')},
  'pressure-wind':{src:'illustrations/meteorology/pressure-wind.svg',alt:'Schematische isobaren met drukgradiënt en afgebogen wind op het noordelijk halfrond.',caption:'Vereenvoudigd schema van drukgradiënt, Coriolis en ongeveer geostrofische wind.',source:m(15,'§3.2.2 Het ontstaan van wind')},
  'sea-breeze':{src:'illustrations/meteorology/sea-breeze.svg',alt:'Doorsnede met koele zeewind aan het oppervlak richting warmer land en retourstroming op hoogte.',caption:'Vereenvoudigde dagcirculatie van zeewind door verschil in opwarming tussen land en zee.',source:m(20,'§3.2.4 Lokale winden')},
  'adiabats-stability':{src:'illustrations/meteorology/adiabats-stability.svg',alt:'Grafiek met hoogte verticaal en temperatuur horizontaal, met droogadiabaat, natadiabaat en een toestandskromme.',caption:'Didactische schets om droog-/natadiabaat en stabiliteit te vergelijken; geen operationele sounding.',source:m(27,'§3.3.3 Adiabatische processen')},
  'fronts':{src:'illustrations/meteorology/fronts.svg',alt:'Schematische doorsneden van warmtefront en koufront met typische stijgbeweging en bewolking.',caption:'Vereenvoudigde frontdoorsneden; echte fronten variëren in helling, wolken en intensiteit.',source:m(43,'§3.6.2 Fronten')},
  'thunderstorm-lifecycle':{src:'illustrations/meteorology/thunderstorm-lifecycle.svg',alt:'Drie schematische fasen van een onweersbui: groei, volwassen en uitdovend.',caption:'Didactische weergave van de levenscyclus van een cumulonimbus en dominante op-/neerwaartse stromingen.',source:m(52,'§3.9.4 Onweer')},
}
export function getMeteorologyIllustrationByKey(key?:string){ return key ? keyed[key] : undefined }
