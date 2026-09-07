import type { SourcedUnit } from '../../domain/types'
import { cov, goals, m, match, n, o, q, study, t } from '../meteorologyFactory'

export const meteorology32Part1:SourcedUnit[]=[
{
    id:'meteo-3-2-1-1',title:'3.2 · Wind, windkracht en windrichtingen · deel 1',
    lesson:{
      id:'meteo-3-2-1-1',title:'Wind, windkracht en windrichtingen · deel 1',description:"Brongebonden leerlevel uit '§3.2.1 Wind.",minScore:80,
      steps:[
        t('Wind is horizontale luchtbeweging · Windsterkte-eenheden','In dit hoofdstuk wordt wind vooral als horizontale luchtbeweging behandeld; verticale luchtbeweging komt bij thermiek terug. Windsterkte kan worden uitgedrukt in Beaufort, m/s, km/h en knopen. In de luchtvaart wordt windsnelheid doorgaans in knopen gegeven.',m(13,'§3.2.1 Wind, windkracht en windrichtingen',{pageEnd:14}),cov('meteo-d072','meteo-d073','meteo-d074')),
        t('Knoop conversie · Windrichting is herkomst','Het dictaat gebruikt ongeveer 1 knoop = 0,5 m/s = 1,8 km/h. Windrichting geeft aan uit welke richting de wind komt. Windrichting wordt in graden ten opzichte van het noorden weergegeven.',m(13,'§3.2.1 Wind, windkracht en windrichtingen',{pageEnd:14}),cov('meteo-d075','meteo-d076','meteo-d077')),
        t('Gustnotatie · Ruimen','Een windbericht kan naast gemiddelde wind ook uitschieters/gusts vermelden. Ruimen betekent dat de windrichting met de klok mee draait. Krimpen betekent dat de windrichting tegen de klok in draait.',m(13,'§3.2.1 Wind, windkracht en windrichtingen',{pageEnd:14}),cov('meteo-d078','meteo-d079','meteo-d080')),
        match('Welke eenheden/indelingen gebruikt het dictaat voor windsterkte?',[{left:'Luchtvaart',right:'knopen'},{left:'Algemeen SI',right:'m/s'},{left:'Weerbericht publiek',right:'Beaufort kan worden gebruikt'}],'Het dictaat noemt Beaufort, m/s, km/h en knopen; luchtvaart gebruikt vooral knopen.',m(13,'§3.2.1 Wind, windkracht en windrichtingen',{pageEnd:14}),cov(),goals('meteo-g10'),study(1,'3.2 vraag 1')),
        q('Wat betekent een windrichting van 180°?',['Wind komt uit het zuiden','Wind waait naar het zuiden','Wind komt uit het noorden','Wind is variabel'],0,'Windrichting noemt de richting waaruit de wind komt.',m(13,'§3.2.1 Wind, windkracht en windrichtingen',{pageEnd:14}),cov(),goals('meteo-g11'),study(1,'3.2 vraag 2')),
        match('Koppel het begrip aan de richtingsverandering.',[{left:'Ruimen',right:'met de klok mee'},{left:'Krimpen',right:'tegen de klok in'}],'Dit zijn de gebruikelijke meteorologische termen voor richtingsverandering.',m(13,'§3.2.1 Wind, windkracht en windrichtingen',{pageEnd:14}),cov(),goals('meteo-g12'),study(1,'3.2 vraag 3')),
      ],
    },
  },
{
    id:'meteo-3-2-1-2',title:'3.2 · Wind, windkracht en windrichtingen · deel 2',
    lesson:{
      id:'meteo-3-2-1-2',title:'Wind, windkracht en windrichtingen · deel 2',description:"Brongebonden leerlevel uit '§3.2.1 Wind.",minScore:80,
      steps:[
        t('Wind boven grond sterker · Bronlimiet 25 kt','Door minder wrijving is de wind boven de grond doorgaans sterker dan vlak bij het oppervlak. Het dictaat noemt windkracht 6 / circa 25 kt als grensvoorbeeld voor veilig zweefvliegen en lagere grenzen bij dwarswind; dit is geen universele type- of clublimiet.',m(13,'§3.2.1 Wind, windkracht en windrichtingen',{pageEnd:14}),cov('meteo-d081','meteo-d082')),
        q('Welke uitspraak past bij wind boven grond sterker?',['Door minder wrijving is de wind boven de grond doorgaans sterker dan vlak bij het oppervlak.','Het dictaat stelt het tegenovergestelde zonder voorwaarden.','Dit begrip wordt alleen als navigatieterm gebruikt.','Dit verschijnsel heeft volgens het dictaat geen meteorologische betekenis.'],0,'Door minder wrijving is de wind boven de grond doorgaans sterker dan vlak bij het oppervlak.',m(13,'§3.2.1 Wind, windkracht en windrichtingen',{pageEnd:14}),cov()),
      ],
    },
  },
{
    id:'meteo-3-2-2-1',title:'3.2 · Het ontstaan van wind · deel 1',
    lesson:{
      id:'meteo-3-2-2-1',title:'Het ontstaan van wind · deel 1',description:"Brongebonden leerlevel uit '§3.2.2 Het ontstaan van wind'.",minScore:80,
      steps:[
        t('Drukverschil veroorzaakt wind · Temperatuurverschillen veroorzaken drukverschillen','Wind ontstaat doordat lucht van hogere naar lagere druk wil stromen. Ongelijke opwarming van de aarde is een belangrijke oorzaak van drukverschillen. De drukgradiënt beschrijft hoe snel de luchtdruk over een horizontale afstand verandert.',m(14,'§3.2.2 Het ontstaan van wind',{pageEnd:17}),cov('meteo-d083','meteo-d084','meteo-d085'),'pressure-wind'),
        t('Dichte isobaren sterke gradient · Coriolis door aardrotatie','Dicht bij elkaar liggende isobaren betekenen een grotere drukgradiënt en meestal meer wind. Het corioliseffect hangt samen met de draaiing van de aarde. Op het noordelijk halfrond buigt bewegende lucht door het corioliseffect naar rechts af.',m(14,'§3.2.2 Het ontstaan van wind',{pageEnd:17}),cov('meteo-d086','meteo-d087','meteo-d088')),
        t('Coriolis SH links · Coriolis nul evenaar','Op het zuidelijk halfrond is de afbuiging naar links. Het corioliseffect is volgens het dictaat nul aan de evenaar en neemt naar de polen toe. Geostrofische wind ontstaat wanneer drukgradiëntkracht en corioliskracht in evenwicht zijn; de wind loopt dan ongeveer parallel aan isobaren.',m(14,'§3.2.2 Het ontstaan van wind',{pageEnd:17}),cov('meteo-d089','meteo-d090','meteo-d091')),
        q('Wat is de directe drijvende oorzaak van wind?',['Horizontale luchtdrukverschillen','Verschil in zuurstofpercentage','Magnetische variatie','Bewolkingsgraad'],0,'Lucht wordt door drukgradiënten in beweging gebracht.',m(14,'§3.2.2 Het ontstaan van wind',{pageEnd:17}),cov(),goals('meteo-g13'),study(1,'3.2 vraag 4')),
        q('Welke oorzaak ligt vaak achter luchtdrukverschillen op aarde?',['Ongelijke opwarming','Gelijke instraling overal','Alleen maanstand','Alleen regenval'],0,'Ongelijke zonverwarming leidt tot temperatuur-, dichtheids- en drukverschillen.',m(14,'§3.2.2 Het ontstaan van wind',{pageEnd:17}),cov(),goals('meteo-g14'),study(1,'3.2 vraag 5')),
        q('Wat betekent het wanneer isobaren op een weerkaart dicht bij elkaar liggen?',['Grote drukgradiënt en meestal meer wind','Geen drukgradiënt','Altijd mist','Altijd windstil'],0,'Dichte isobaren betekenen een snelle drukverandering over afstand.',m(14,'§3.2.2 Het ontstaan van wind',{pageEnd:17}),cov(),goals('meteo-g15'),study(1,'3.2 vraag 6')),
        q('Hoe buigt het corioliseffect bewegende lucht op het noordelijk halfrond af?',['Naar rechts','Naar links','Altijd omhoog','Niet'],0,'Op het noordelijk halfrond is de afbuiging naar rechts.',m(14,'§3.2.2 Het ontstaan van wind',{pageEnd:17}),cov(),goals('meteo-g16'),study(1,'3.2 vraag 7')),
        q('Hoe loopt geostrofische wind ongeveer ten opzichte van isobaren?',['Parallel aan de isobaren','Loodrecht van laag naar hoog','Altijd naar het zuiden','Alleen verticaal'],0,'Bij evenwicht tussen drukgradiënt en Coriolis loopt de wind ongeveer parallel aan isobaren.',m(14,'§3.2.2 Het ontstaan van wind',{pageEnd:17}),cov()),
      ],
    },
  },
{
    id:'meteo-3-2-2-2',title:'3.2 · Het ontstaan van wind · deel 2',
    lesson:{
      id:'meteo-3-2-2-2',title:'Het ontstaan van wind · deel 2',description:"Brongebonden leerlevel uit '§3.2.2 Het ontstaan van wind'.",minScore:80,
      steps:[
        t('Wrijving verstoort geostrofie · Buys Ballot NH','Dicht bij het aardoppervlak remt wrijving de wind en verandert de richting ten opzichte van de geostrofische wind. Op het noordelijk halfrond geldt als ezelsbrug: met de rug naar de wind ligt lage druk links en hoge druk rechts. Bij lage druk stroomt lucht nabij het oppervlak naar elkaar toe en stijgt vervolgens.',m(14,'§3.2.2 Het ontstaan van wind',{pageEnd:17}),cov('meteo-d092','meteo-d093','meteo-d094')),
        t('Divergentie hoog · Divergentie boven laag','Bij hoge druk stroomt lucht nabij het oppervlak uit elkaar terwijl lucht van boven daalt. Om een lagedrukgebied in stand te houden moet bovenin lucht worden afgevoerd; het dictaat beschrijft divergentie op hoogte. In een hogedrukgebied is dalende lucht of subsidentie een kenmerkend onderdeel van de circulatie.',m(14,'§3.2.2 Het ontstaan van wind',{pageEnd:17}),cov('meteo-d095','meteo-d096','meteo-d097')),
        match('Koppel het systeem aan de draairichting op het noordelijk halfrond.',[{left:'Hogedrukgebied',right:'met de klok mee'},{left:'Lagedrukgebied',right:'tegen de klok in'}],'Wrijving zorgt nabij de grond bovendien voor een component over de isobaren.',m(14,'§3.2.2 Het ontstaan van wind',{pageEnd:17}),cov(),goals('meteo-g17'),study(1,'3.2 vraag 8')),
      ],
    },
  }
]
