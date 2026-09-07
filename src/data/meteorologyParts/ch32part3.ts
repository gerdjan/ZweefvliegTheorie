import type { SourcedUnit } from '../../domain/types'
import { cov, goals, m, match, n, o, q, study, t } from '../meteorologyFactory'

export const meteorology32Part3:SourcedUnit[]=[
{
    id:'meteo-3-2-6-1',title:'3.2 · Turbulentie · deel 1',
    lesson:{
      id:'meteo-3-2-6-1',title:'Turbulentie · deel 1',description:"Brongebonden leerlevel uit '§3.2.6 Turbulentie'.",minScore:80,
      steps:[
        t('Mechanische turbulentie · Thermische turbulentie','Obstakels en ruw terrein veroorzaken mechanische turbulentie. Sterke convectie en thermiek veroorzaken thermische turbulentie. Vliegtuigen veroorzaken zogturbulentie die vooral achter zware toestellen gevaarlijk kan zijn.',m(21,'§3.2.6 Turbulentie',{pageEnd:23}),cov('meteo-d131','meteo-d132','meteo-d133')),
        t('Turbulentie neemt sterk toe met wind · Lijzijde obstakel','Het dictaat gebruikt als vuistregel dat turbulentie-energie sterk met windsnelheid toeneemt en noemt een kwadratisch verband als illustratie. De lijzijde van gebouwen, bomen en heuvels is een typische zone voor mechanische turbulentie. Windgradiënt is de verandering van windsnelheid en/of -richting met hoogte, vooral merkbaar dicht bij de grond.',m(21,'§3.2.6 Turbulentie',{pageEnd:23}),cov('meteo-d134','meteo-d135','meteo-d136')),
        t('Windgradient bij landing · Turbulentie beïnvloedt besturing','Een sterke afname van tegenwind tijdens het dalen kan de luchtsnelheid en baanhoek nadelig beïnvloeden. Turbulentie veroorzaakt snel wisselende belastingen en vraagt passende snelheid en stuurmarges. Het dictaat adviseert bij harde wind/turbulentie extra snelheidsmarge; de precieze snelheid hoort uit vlieghandboek, opleiding en lokale procedures te komen.',m(21,'§3.2.6 Turbulentie',{pageEnd:23}),cov('meteo-d137','meteo-d138','meteo-d139')),
        q('Wat is windgradiënt?',['Verandering van wind met hoogte','Verschil tussen QNH en QFE','Temperatuurafname in een wolk','Verandering van magnetische koers'],0,'Windgradiënt is verandering van snelheid en/of richting met hoogte.',m(21,'§3.2.6 Turbulentie',{pageEnd:23}),cov(),goals('meteo-g23'),study(1,'3.2 vraag 14')),
      ],
    },
  },
{
    id:'meteo-3-2-6-2',title:'3.2 · Turbulentie · deel 2',
    lesson:{
      id:'meteo-3-2-6-2',title:'Turbulentie · deel 2',description:"Brongebonden leerlevel uit '§3.2.6 Turbulentie'.",minScore:80,
      steps:[
        t('Bronadvies remkleppen · Turbulentie voorspellen uit terrein','Het dictaat geeft een specifieke waarschuwing over volledig remkleppengebruik bij harde wind; behandel dit als operationeel bronadvies, niet als universele regel. Windrichting, windsterkte en positie ten opzichte van obstakels helpen voorspellen waar turbulentie het sterkst is. Niet alleen de windsnelheid maar ook de windrichting kan met hoogte veranderen.',m(21,'§3.2.6 Turbulentie',{pageEnd:23}),cov('meteo-d140','meteo-d141','meteo-d142')),
        q('Welke uitspraak past bij bronadvies remkleppen?',['Het dictaat geeft een specifieke waarschuwing over volledig remkleppengebruik bij harde wind; behandel dit als operationeel bronadvies, niet als universele regel.','Het dictaat stelt het tegenovergestelde zonder voorwaarden.','Dit begrip wordt alleen als navigatieterm gebruikt.','Dit verschijnsel heeft volgens het dictaat geen meteorologische betekenis.'],0,'Het dictaat geeft een specifieke waarschuwing over volledig remkleppengebruik bij harde wind; behandel dit als operationeel bronadvies, niet als universele regel.',m(21,'§3.2.6 Turbulentie',{pageEnd:23}),cov()),
      ],
    },
  }
]
