import type { SourcedUnit } from '../../domain/types'
import { cov, goals, m, match, n, o, q, study, t } from '../meteorologyFactory'

export const meteorology31Part3:SourcedUnit[]=[
{
    id:'meteo-3-1-6-2',title:'3.1 · Hoogtemeterinstellingen · deel 2',
    lesson:{
      id:'meteo-3-1-6-2',title:'Hoogtemeterinstellingen · deel 2',description:"Brongebonden leerlevel uit '§3.1.6 Hoogtemeterinstellingen'.",minScore:80,
      steps:[
        t('High to low temperature · QFE praktisch lokaal','Van warmere naar koudere lucht kan de werkelijke hoogte lager zijn dan de aangegeven hoogte. Het dictaat beschrijft QFE als praktisch bij lokale vluchten omdat de meter rond veldniveau ongeveer nul kan aanwijzen. Het dictaat beschrijft QNH als praktisch bij overlandvluchten omdat kaart- en terreinhoogten ten opzichte van zeeniveau worden aangegeven.',m(10,'§3.1.6 Hoogtemeterinstellingen',{pageEnd:12,dynamic:true,currentCheck:'Controleer vóór operationeel gebruik AIP Nederland ENR 1.7. Gecontroleerd 7 september 2026: transition altitude Amsterdam FIR is 3500 ft voor VFR en 3000 ft voor IFR.'}),cov('meteo-d066','meteo-d067','meteo-d068')),
        t('GPS is geen drukhoogtemeter · Drukverandering tijdens overland','Het dictaat noemt GPS-hoogte als hulpmiddel bij buitenlanden, maar de drukhoogtemeter blijft een ander meetsysteem. Tijdens een langere vlucht kan QNH veranderen; een niet-bijgestelde hoogtemeter kan daardoor een relevante fout opbouwen. Het dictaat merkt hoogtemeterinstellingen expliciet aan als officiële SPL-leerstof binnen meteorologie.',m(10,'§3.1.6 Hoogtemeterinstellingen',{pageEnd:12,dynamic:true,currentCheck:'Controleer vóór operationeel gebruik AIP Nederland ENR 1.7. Gecontroleerd 7 september 2026: transition altitude Amsterdam FIR is 3500 ft voor VFR en 3000 ft voor IFR.'}),cov('meteo-d069','meteo-d070','meteo-d071')),
        q('Welke uitspraak past bij high to low temperature?',['Van warmere naar koudere lucht kan de werkelijke hoogte lager zijn dan de aangegeven hoogte.','Het dictaat stelt het tegenovergestelde zonder voorwaarden.','Dit begrip wordt alleen als navigatieterm gebruikt.','Dit verschijnsel heeft volgens het dictaat geen meteorologische betekenis.'],0,'Van warmere naar koudere lucht kan de werkelijke hoogte lager zijn dan de aangegeven hoogte.',m(10,'§3.1.6 Hoogtemeterinstellingen',{pageEnd:12,dynamic:true,currentCheck:'Controleer vóór operationeel gebruik AIP Nederland ENR 1.7. Gecontroleerd 7 september 2026: transition altitude Amsterdam FIR is 3500 ft voor VFR en 3000 ft voor IFR.'}),cov()),
      ],
    },
  }
]
