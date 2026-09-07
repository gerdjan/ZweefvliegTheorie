import type { SourcedUnit } from '../../domain/types'
import { cov, goals, m, match, n, o, q, study, t } from '../meteorologyFactory'

export const meteorology34Units:SourcedUnit[]=[
  {
    id:'meteo-3-4-1-1',title:'3.4 · Wolkenvorming en indeling wolken · deel 1',
    lesson:{
      id:'meteo-3-4-1-1',title:'Wolkenvorming en indeling wolken · deel 1',description:"Brongebonden leerlevel uit '§3.4.1 Wolkenvorming en indeling wolken'.",minScore:80,
      steps:[
        t('Condensatiekernen · Vrieskernen','Voor wolkendruppels zijn condensatiekernen nodig waarop waterdamp kan condenseren. Voor ijskristalvorming spelen vrieskernen een rol. Waterdruppels kunnen onder 0 °C vloeibaar blijven; dit heet onderkoeld water.',m(34,'§3.4.1 Wolkenvorming en indeling wolken',{pageEnd:36}),cov('meteo-d191','meteo-d192','meteo-d193')),
        t('Spontane bevriezing zeer koud · Wolk ontstaat bij verzadiging','Het dictaat noemt rond −36 °C als temperatuur waaronder onderkoelde druppels spontaan bevriezen. Wolken ontstaan wanneer lucht verzadigd raakt en waterdamp condenseert of sublimeert op geschikte kernen. Het dictaat groepeert wolken naar hoogte/ontwikkeling in hoge, middelhoge, lage en verticaal ontwikkelde wolken.',m(34,'§3.4.1 Wolkenvorming en indeling wolken',{pageEnd:36}),cov('meteo-d194','meteo-d195','meteo-d196')),
        t('Hoge wolken 5–13 km · Middelhoge wolken 2–7 km','Cirrus, cirrocumulus en cirrostratus worden als hoge wolken ongeveer 5–13 km ingedeeld. Altocumulus, altostratus en nimbostratus worden als middelhoge wolken ongeveer 2–7 km ingedeeld. Stratocumulus en stratus horen bij lage bewolking ongeveer 0–2 km.',m(34,'§3.4.1 Wolkenvorming en indeling wolken',{pageEnd:36}),cov('meteo-d197','meteo-d198','meteo-d199')),
        q('Wat is onderkoeld water?',['Vloeibaar water met temperatuur onder 0 °C','IJs boven 0 °C','Waterdamp bij 100% RH','Regen boven 20 °C'],0,'Wolkendruppels kunnen onder nul vloeibaar blijven en bij botsing met een vliegtuig bevriezen.',m(34,'§3.4.1 Wolkenvorming en indeling wolken',{pageEnd:36}),cov(),goals('meteo-g40'),study(2,'3.4 vraag 1')),
        q('Welke combinatie is nodig voor gewone wolkenvorming?',['Verzadiging plus condensatie-/vrieskernen','Alleen hoge luchtdruk','Alleen sterke wind','Alleen zonsondergang'],0,'Afkoeling tot verzadiging en geschikte kernen laten druppels/ijskristallen ontstaan.',m(34,'§3.4.1 Wolkenvorming en indeling wolken',{pageEnd:36}),cov(),goals('meteo-g41'),study(2,'3.4 vraag 2')),
        match('Koppel wolk aan kenmerk.',[{left:'Cirrostratus',right:'hoge sluier, kan halo geven'},{left:'Nimbostratus',right:'dikke laag met langdurige neerslag'},{left:'Cumulonimbus',right:'grote verticale ontwikkeling/aambeeld'}],'Wolkengeslachten hebben kenmerkende hoogte en vorm.',m(34,'§3.4.1 Wolkenvorming en indeling wolken',{pageEnd:36}),cov(),goals('meteo-g42'),study(2,'3.4 vraag 3')),
      ],
    },
  },
  {
    id:'meteo-3-4-1-2',title:'3.4 · Wolkenvorming en indeling wolken · deel 2',
    lesson:{
      id:'meteo-3-4-1-2',title:'Wolkenvorming en indeling wolken · deel 2',description:"Brongebonden leerlevel uit '§3.4.1 Wolkenvorming en indeling wolken'.",minScore:80,
      steps:[
        t('Verticale wolken Cu/Cb · Cirrus','Cumulus en cumulonimbus kunnen zich sterk verticaal ontwikkelen. Cirrus bestaat uit ijskristallen en heeft vaak veerachtige structuren. Cirrostratus kan een melkachtige sluier en halo rond zon of maan geven en kan op een naderend warmtefront wijzen.',m(34,'§3.4.1 Wolkenvorming en indeling wolken',{pageEnd:36}),cov('meteo-d200','meteo-d201','meteo-d202')),
        t('Altostratus · Nimbostratus','Altostratus vormt een grijze/blauwgrijze laag waardoor de zon vaak nog vaag zichtbaar is. Nimbostratus is een dikke neerslagwolk die langdurige regen of sneeuw kan geven. Stratus is lage, egale grijze bewolking en kan overgaan in mist wanneer de basis de grond bereikt.',m(34,'§3.4.1 Wolkenvorming en indeling wolken',{pageEnd:36}),cov('meteo-d203','meteo-d204','meteo-d205')),
        t('Cumulus · TCU','Cumulus heeft vaak een vlakke basis en scherp begrensde bloemkoolachtige toppen bij actieve groei. Sterk verticaal ontwikkelde cumulus wordt Towering Cumulus (TCU) genoemd. Cumulonimbus is de onweerswolk met grote verticale ontwikkeling en vaak een aambeeldvormige top.',m(34,'§3.4.1 Wolkenvorming en indeling wolken',{pageEnd:36}),cov('meteo-d206','meteo-d207','meteo-d208')),
        q('Welke wolkensoort hoort bij sterke verticale ontwikkeling en onweer?',['Cumulonimbus','Cirrus','Stratus','Altostratus'],0,'Cumulonimbus is de onweerswolk.',m(34,'§3.4.1 Wolkenvorming en indeling wolken',{pageEnd:36}),cov()),
      ],
    },
  },
  {
    id:'meteo-3-4-1-3',title:'3.4 · Wolkenvorming en indeling wolken · deel 3',
    lesson:{
      id:'meteo-3-4-1-3',title:'Wolkenvorming en indeling wolken · deel 3',description:"Brongebonden leerlevel uit '§3.4.1 Wolkenvorming en indeling wolken'.",minScore:80,
      steps:[
        t('Lenticularis · Inversie beperkt wolken','Lenticularis is lensvormige golfbewolking en kan stationair lijken. Een inversie kan de verticale ontwikkeling van cumuluswolken afremmen of begrenzen. Bewolkingshoeveelheid wordt traditioneel in achtsten/oktas beschreven.',m(34,'§3.4.1 Wolkenvorming en indeling wolken',{pageEnd:36}),cov('meteo-d209','meteo-d210','meteo-d211')),
        t('SKC FEW SCT BKN OVC','In luchtvaartberichten komen codes voor onbewolkt/gering, weinig, verspreid, gebroken en geheel bewolkt voor: onder meer SKC/CLR, FEW, SCT, BKN en OVC.',m(34,'§3.4.1 Wolkenvorming en indeling wolken',{pageEnd:36}),cov('meteo-d212')),
        match('Koppel code aan bedekkingsgraad.',[{left:'FEW',right:'weinig bewolking'},{left:'SCT',right:'verspreid'},{left:'BKN',right:'gebroken'},{left:'OVC',right:'geheel bewolkt'}],'Luchtvaartberichten gebruiken vaste codes voor bewolkingsbedekking.',m(34,'§3.4.1 Wolkenvorming en indeling wolken',{pageEnd:36}),cov(),goals('meteo-g43'),study(2,'3.4 vraag 4')),
      ],
    },
  },
  {
    id:'meteo-3-4-2-1',title:'3.4 · Mist, nevel en heiigheid · deel 1',
    lesson:{
      id:'meteo-3-4-2-1',title:'Mist, nevel en heiigheid · deel 1',description:"Brongebonden leerlevel uit '§3.4.2 Mist.",minScore:80,
      steps:[
        t('Mist zichtgrens · Nevel','Het dictaat spreekt van mist wanneer het horizontale zicht door waterdruppels minder dan 1000 m is. Nevel is zichtvermindering door kleine waterdruppels met een zicht van 1000 m of meer. Heiigheid is zichtvermindering door droge deeltjes zoals rook, stof of zout.',m(36,'§3.4.2 Mist, nevel en heiigheid',{pageEnd:38}),cov('meteo-d213','meteo-d214','meteo-d215')),
        t('Stralingsmist · Koude lucht zakt naar laagtes','Stralingsmist ontstaat vooral bij sterke nachtelijke uitstraling, weinig wind en voldoende vocht dicht bij de grond. Bij stralingsmist kan koude lucht zich in laagten verzamelen waardoor mist lokaal dikker wordt. Advectiemist ontstaat wanneer relatief warme vochtige lucht over een kouder oppervlak stroomt en afkoelt tot verzadiging.',m(36,'§3.4.2 Mist, nevel en heiigheid',{pageEnd:38}),cov('meteo-d216','meteo-d217','meteo-d218')),
        t('Zeemist · Frontale/regenmist','Zeemist is een vorm van advectiemist boven koud zeewater. Na of bij langdurige neerslag kan extra vocht en afkoeling laaghangende bewolking of mist veroorzaken. Lucht die tegen terrein wordt opgetild kan afkoelen tot verzadiging en orografische bewolking vormen.',m(36,'§3.4.2 Mist, nevel en heiigheid',{pageEnd:38}),cov('meteo-d219','meteo-d220','meteo-d221')),
        match('Koppel mistsoort aan ontstaan.',[{left:'Stralingsmist',right:'nachtelijke afkoeling bij weinig wind'},{left:'Advectiemist',right:'vochtige lucht over kouder oppervlak'},{left:'Orografische bewolking',right:'lucht wordt tegen terrein opgetild'}],'Mistsoorten verschillen vooral in het mechanisme dat lucht tot verzadiging brengt.',m(36,'§3.4.2 Mist, nevel en heiigheid',{pageEnd:38}),cov(),goals('meteo-g44'),study(2,'3.4 vraag 5')),
      ],
    },
  },
  {
    id:'meteo-3-4-2-2',title:'3.4 · Mist, nevel en heiigheid · deel 2',
    lesson:{
      id:'meteo-3-4-2-2',title:'Mist, nevel en heiigheid · deel 2',description:"Brongebonden leerlevel uit '§3.4.2 Mist.",minScore:80,
      steps:[
        t('Mist oplost door zon · Mist oplost door windmenging','Opwarming door de zon kan mist van onderaf oplossen. Toenemende wind kan drogere lucht mengen en mist laten oplossen, maar kan onder andere omstandigheden ook advectiemist aanvoeren. Na vochtverlies aan loefzijde daalt lucht aan lijzijde warmer en droger, waardoor de wolkenbasis daar hoger kan liggen.',m(36,'§3.4.2 Mist, nevel en heiigheid',{pageEnd:38}),cov('meteo-d222','meteo-d223','meteo-d224')),
        q('Welke uitspraak past bij mist oplost door zon?',['Opwarming door de zon kan mist van onderaf oplossen.','Het dictaat stelt het tegenovergestelde zonder voorwaarden.','Dit begrip wordt alleen als navigatieterm gebruikt.','Dit verschijnsel heeft volgens het dictaat geen meteorologische betekenis.'],0,'Opwarming door de zon kan mist van onderaf oplossen.',m(36,'§3.4.2 Mist, nevel en heiigheid',{pageEnd:38}),cov()),
      ],
    },
  },
]
