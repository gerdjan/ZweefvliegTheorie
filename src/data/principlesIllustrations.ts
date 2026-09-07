import type { SourceReference } from '../domain/types'

export type LearningIllustration = {
  src: string
  alt: string
  caption: string
  source: SourceReference
}

const b=(page:number,section:string):SourceReference=>({
  file:'5-Beginselen.pdf',
  page,
  section,
})

const illustrations:Record<string,LearningIllustration> = {
  'principles-5-0-basics::Vier krachten': {
    src:'illustrations/principles/four-forces.svg',
    alt:'Schematische weergave van lift omhoog, zwaartekracht omlaag, voortstuwingskracht vooruit en weerstand achteruit.',
    caption:'Didactische schets van de vier krachten die het dictaat bij horizontale vlucht met constante snelheid onderscheidt.',
    source:b(3,'§5.0.2 Begrippen en definities'),
  },
  'principles-5-0-basics::Drie assen': {
    src:'illustrations/principles/three-axes.svg',
    alt:'Bovenaanzicht van een zweefvliegtuig met langsas, dwarsas en topas door het zwaartepunt.',
    caption:'Didactische schets van de drie loodrecht op elkaar staande assen door het zwaartepunt.',
    source:b(3,'§5.0.2 Zwaartepunt en assen'),
  },
  'principles-5-0-basics::Koorde, slankheid en vleugelvorm': {
    src:'illustrations/principles/aspect-ratio.svg',
    alt:'Schematische vleugel met spanwijdte, gemiddelde koorde en de formule slankheid is spanwijdte gedeeld door gemiddelde koorde.',
    caption:'Didactische schets van spanwijdte, gemiddelde koorde en de definitie van slankheid.',
    source:b(4,'§5.0.2 Spanwijdte, koorde en slankheid'),
  },
  'principles-5-5-vn-detail::Positief en negatief': {
    src:'illustrations/principles/vn-diagram.svg',
    alt:'Schematisch V-n-diagram met vliegsnelheid op de horizontale as, belastingfactor op de verticale as, stallgrens, VA en Vne.',
    caption:'Didactische vereenvoudiging van het V-n-diagram en de LS4-voorbeeldwaarden uit het dictaat. Voor operationele limieten blijft het vlieghandboek van het betreffende type leidend.',
    source:b(35,'§5.5.5 Belastingdiagram'),
  },
  'principles-5-6-stall-signals::Drukpunt naar achteren': {
    src:'illustrations/principles/stall-progression.svg',
    alt:'Didactische vergelijking tussen aangehechte stroming vóór overtrek en losgelaten stroming bij overtrek, met het drukpunt achter het zwaartepunt en een neus-omlaagmoment.',
    caption:'Vereenvoudigde schets van loslating en de drukpuntverschuiving die het dictaat bij overtrek beschrijft.',
    source:b(37,'§5.6.1 Gevolgen van de overtrek · moment om de dwarsas'),
  },
}

export function getPrinciplesIllustration(lessonId:string, stepTitle:string){
  return illustrations[`${lessonId}::${stepTitle}`]
}
