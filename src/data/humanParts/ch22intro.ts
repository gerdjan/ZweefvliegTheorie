import type { SourcedUnit } from '../../domain/types'
import { cov, h, match, o, q, t } from '../humanFactory'

export const human22IntroUnits:SourcedUnit[]=[
  {
    id:"human-physiology-basics",title:"2.2 · Fysiologie en medische geschiktheid",
    lesson:{
      id:"human-physiology-basics",title:"Fysiologie en medische geschiktheid",description:"Brongebonden leerlevel uit §2.2.",minScore:80,
      steps:[
        t("Wat fysiologie bestudeert","Fysiologie bestudeert de werking van levensprocessen, waaronder zenuwstelsel, hart en bloedsomloop, longen en gaswisseling, stofwisseling en hormoonhuishouding. Homeostase is het vermogen van het lichaam om interne functies zoals temperatuur, zuurgraad, bloeddruk en ademhaling binnen bruikbare grenzen te houden ondanks invloeden van buitenaf.",h(10,"§2.2",{dynamic:true,currentCheck:"Actuele medische eisen voor SPL worden bepaald door EASA Part-MED; voor SPL-privileges is ten minste een geldig LAPL-medical vereist, met aanvullende eisen voor bepaalde commerciële privileges."}),cov("human-d025","human-d026")),
        t("Medische geschiktheid","Een luchtvaartmedische beoordeling heeft als doel vast te stellen of de vlieger lichamelijk en geestelijk geschikt is om te vliegen. Het dictaat noemt onder meer bloeddruk, bloed, ogen, gehoor, hartfunctie en medische geschiedenis als onderdelen die bij een beoordeling kunnen worden betrokken. De exacte keuringseisen en testfrequenties zijn regelgeving en moeten tegen de actuele Part-MED-regels worden gecontroleerd.",h(10,"§2.2",{dynamic:true,currentCheck:"Actuele medische eisen voor SPL worden bepaald door EASA Part-MED; voor SPL-privileges is ten minste een geldig LAPL-medical vereist, met aanvullende eisen voor bepaalde commerciële privileges."}),cov("human-d027","human-d028","human-d029")),
        match("Koppel begrip aan betekenis.",[{left:"Fysiologie",right:"werking van levensprocessen"},{left:"Homeostase",right:"intern evenwicht ondanks omgevingsinvloeden"},{left:"Medische beoordeling",right:"beoordelen van lichamelijke en geestelijke geschiktheid"}],"Deze begrippen staan aan het begin van het fysiologiedeel.",h(10,"§2.2",{dynamic:true,currentCheck:"Actuele medische eisen voor SPL worden bepaald door EASA Part-MED; voor SPL-privileges is ten minste een geldig LAPL-medical vereist, met aanvullende eisen voor bepaalde commerciële privileges."})),
      ],
    },
  }
]
