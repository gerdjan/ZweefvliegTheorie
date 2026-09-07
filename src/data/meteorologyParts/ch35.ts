import type { SourcedUnit } from '../../domain/types'
import { cov, goals, m, match, n, o, q, study, t } from '../meteorologyFactory'

export const meteorology35Units:SourcedUnit[]=[
  {
    id:'meteo-3-5-1-1',title:'3.5 · Ontstaan van neerslag',
    lesson:{
      id:'meteo-3-5-1-1',title:'Ontstaan van neerslag',description:"Brongebonden leerlevel uit '§3.5.1 Ontstaan van neerslag'.",minScore:80,
      steps:[
        t('Wolkendruppels te klein · Botsen en samenvloeien','Gewone wolkendruppels zijn aanvankelijk te klein om als neerslag de grond te bereiken. Druppels kunnen door botsing en samenvloeien groter worden. In relatief warme lage wolken kan het botsing/samenvloeiproces motregen produceren.',m(39,'§3.5.1 Ontstaan van neerslag',{pageEnd:40}),cov('meteo-d225','meteo-d226','meteo-d227')),
        t('Gemengde wolk · Bergeron-achtig groeiproces','Een gemengde wolk bevat zowel onderkoelde waterdruppels als ijskristallen. In gemengde wolken groeien ijskristallen ten koste van waterdruppels doordat de verzadigingscondities boven ijs en water verschillen. Gegroeide ijskristallen kunnen samenklonteren tot sneeuwvlokken.',m(39,'§3.5.1 Ontstaan van neerslag',{pageEnd:40}),cov('meteo-d228','meteo-d229','meteo-d230')),
        t('Veel regen begint als sneeuw · Orografische neerslag','Het dictaat legt uit dat veel neerslag in onze streken hoger in de wolk als sneeuw begint en lager smelt tot regen. Gedwongen stijging tegen terrein kan wolken en neerslag aan loefzijde versterken. Langdurige grootschalige stijging langs fronten is een belangrijke neerslagbron.',m(39,'§3.5.1 Ontstaan van neerslag',{pageEnd:40}),cov('meteo-d231','meteo-d232','meteo-d233')),
        q('Waarom vallen gewone kleine wolkendruppels meestal niet direct als regen uit de wolk?',['Ze moeten eerst groeien door botsing/samenvloeien of ijsprocessen','Omdat zwaartekracht niet werkt in wolken','Omdat alle wolken boven nul zijn','Omdat wind ze altijd omhoog blaast'],0,'Neerslagdeeltjes moeten voldoende groot en zwaar worden.',m(39,'§3.5.1 Ontstaan van neerslag',{pageEnd:40}),cov(),goals('meteo-g45'),study(2,'3.5 vraag 1')),
        q('Wat is een gemengde wolk?',['Een wolk met onderkoelde druppels én ijskristallen','Een wolk met alleen regen en stof','Elke cumulonimbus','Een wolk boven zee'],0,'Juist de combinatie van ijs en onderkoeld water ondersteunt snelle neerslaggroei.',m(39,'§3.5.1 Ontstaan van neerslag',{pageEnd:40}),cov(),goals('meteo-g46'),study(2,'3.5 vraag 2')),
      ],
    },
  },
  {
    id:'meteo-3-5-2-1',title:'3.5 · Soorten neerslag · deel 1',
    lesson:{
      id:'meteo-3-5-2-1',title:'Soorten neerslag · deel 1',description:"Brongebonden leerlevel uit '§3.5.2 Soorten neerslag'.",minScore:80,
      steps:[
        t('Regen · Motregen','Regen bestaat uit vloeibare druppels die groot genoeg zijn om de grond te bereiken. Motregen bestaat uit zeer kleine druppels en komt vaak uit lage stratusachtige bewolking. Sneeuw bestaat uit ijskristallen of sneeuwvlokken die niet volledig smelten vóór de grond.',m(39,'§3.5.2 Soorten neerslag',{pageEnd:40}),cov('meteo-d234','meteo-d235','meteo-d236')),
        t('Natte sneeuw · Hagel','Natte sneeuw ontstaat wanneer sneeuwvlokken gedeeltelijk smelten in een warmere luchtlaag. Hagel groeit in krachtige cumulonimbus door herhaalde passages door gebieden met onderkoeld water. IJzel ontstaat wanneer regendruppels onderkoeld raken en bij contact met een koud oppervlak bevriezen.',m(39,'§3.5.2 Soorten neerslag',{pageEnd:40}),cov('meteo-d237','meteo-d238','meteo-d239')),
        t('Heldere ijslaag gevaar · Sneeuw smelt naar regen','Bevriezende regen kan snel een gladde, doorzichtige ijslaag op een vliegtuig vormen. Als sneeuw door een voldoende dikke warme laag valt, smelt zij tot regen. Als gesmolten neerslag daarna door een diepe koude laag valt, kan opnieuw bevroren of onderkoelde neerslag ontstaan.',m(39,'§3.5.2 Soorten neerslag',{pageEnd:40}),cov('meteo-d240','meteo-d241','meteo-d242')),
        match('Koppel neerslag aan proces.',[{left:'Hagel',right:'groeit herhaald in sterke Cb-stromingen'},{left:'IJzel',right:'onderkoelde regen bevriest bij contact'},{left:'Natte sneeuw',right:'sneeuwvlokken smelten gedeeltelijk'}],'Temperatuurprofiel en wolkensoort bepalen welk type neerslag de grond bereikt.',m(39,'§3.5.2 Soorten neerslag',{pageEnd:40}),cov(),goals('meteo-g47'),study(2,'3.5 vraag 3')),
        q('Welke neerslagvorm kan bij contact direct een heldere ijslaag vormen?',['IJzel/bevriezende regen','Droge sneeuw','Motregen boven +20 °C','Hagel alleen'],0,'Onderkoelde regen kan bij contact bevriezen.',m(39,'§3.5.2 Soorten neerslag',{pageEnd:40}),cov()),
      ],
    },
  },
  {
    id:'meteo-3-5-2-2',title:'3.5 · Soorten neerslag · deel 2',
    lesson:{
      id:'meteo-3-5-2-2',title:'Soorten neerslag · deel 2',description:"Brongebonden leerlevel uit '§3.5.2 Soorten neerslag'.",minScore:80,
      steps:[
        t('Cb buien/hagel · Ns langdurige neerslag','Zware buien, hagel en sterke neerslagintensiteit zijn karakteristiek voor krachtige convectieve bewolking. Nimbostratus is typisch voor langdurige, meer gelijkmatige frontale neerslag. Regen en vooral sneeuw kunnen het vliegzicht sterk verminderen.',m(39,'§3.5.2 Soorten neerslag',{pageEnd:40}),cov('meteo-d243','meteo-d244','meteo-d245')),
        q('Welke uitspraak past bij cb buien/hagel?',['Zware buien, hagel en sterke neerslagintensiteit zijn karakteristiek voor krachtige convectieve bewolking.','Het dictaat stelt het tegenovergestelde zonder voorwaarden.','Dit begrip wordt alleen als navigatieterm gebruikt.','Dit verschijnsel heeft volgens het dictaat geen meteorologische betekenis.'],0,'Zware buien, hagel en sterke neerslagintensiteit zijn karakteristiek voor krachtige convectieve bewolking.',m(39,'§3.5.2 Soorten neerslag',{pageEnd:40}),cov()),
      ],
    },
  },
]
