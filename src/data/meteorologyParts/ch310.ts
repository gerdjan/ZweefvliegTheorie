import type { SourcedUnit } from '../../domain/types'
import { cov, goals, m, match, n, o, q, study, t } from '../meteorologyFactory'

export const meteorology310Units:SourcedUnit[]=[
  {
    id:'meteo-3-10-1-1',title:'3.10 · Waarnemingen · deel 1',
    lesson:{
      id:'meteo-3-10-1-1',title:'Waarnemingen · deel 1',description:"Brongebonden leerlevel uit '§3.10.1 Waarnemingen'.",minScore:80,
      steps:[
        t('METAR · TAF','Een METAR is een gestandaardiseerde actuele meteorologische waarneming voor een vliegveld. Een TAF is een gestandaardiseerde weersverwachting voor een vliegveld en een geldigheidsperiode. Tijden in luchtvaartweercodes worden in UTC/Zulu weergegeven.',m(57,'§3.10.1 Waarnemingen',{pageEnd:60,dynamic:true,currentCheck:'Voor operationele vluchtvoorbereiding verwijst KNMI naar de bewaakte dienst Luchtvaartmeteo; publieke METAR/TAF-weergave is niet volledig.'}),cov('meteo-d386','meteo-d387','meteo-d388')),
        t('Stationcode · Windgroep','METAR en TAF beginnen met de ICAO-locatiecode van het vliegveld. Wind wordt gecodeerd met richting, snelheid, eenheid en zo nodig gusts. VRB geeft variabele windrichting aan binnen de regels van de code.',m(57,'§3.10.1 Waarnemingen',{pageEnd:60,dynamic:true,currentCheck:'Voor operationele vluchtvoorbereiding verwijst KNMI naar de bewaakte dienst Luchtvaartmeteo; publieke METAR/TAF-weergave is niet volledig.'}),cov('meteo-d389','meteo-d390','meteo-d391')),
        t('Zichtgroep · CAVOK','Horizontaal zicht wordt in meters gecodeerd; 9999 staat voor 10 km of meer. CAVOK vat gunstige combinatie van zicht, wolken en significant weer samen wanneer aan de criteria is voldaan. Actueel weer wordt met gestandaardiseerde afkortingen gecodeerd, bijvoorbeeld intensiteit en neerslagtype.',m(57,'§3.10.1 Waarnemingen',{pageEnd:60,dynamic:true,currentCheck:'Voor operationele vluchtvoorbereiding verwijst KNMI naar de bewaakte dienst Luchtvaartmeteo; publieke METAR/TAF-weergave is niet volledig.'}),cov('meteo-d392','meteo-d393','meteo-d394')),
        match('Koppel product aan functie.',[{left:'METAR',right:'actuele vliegveldwaarneming'},{left:'TAF',right:'vliegveldverwachting voor een geldigheidsperiode'}],'Beide gebruiken gestandaardiseerde luchtvaartweercodes.',m(57,'§3.10.1 Waarnemingen',{pageEnd:60,dynamic:true,currentCheck:'Voor operationele vluchtvoorbereiding verwijst KNMI naar de bewaakte dienst Luchtvaartmeteo; publieke METAR/TAF-weergave is niet volledig.'}),cov(),goals('meteo-g69'),study(2,'3.10 vraag 1')),
        q('Wat betekent 9999 in een METAR-zichtgroep?',['10 km of meer','9999 ft wolkenbasis','99,99 kt wind','QNH 999,9'],0,'9999 codeert zicht van 10 km of meer.',m(57,'§3.10.1 Waarnemingen',{pageEnd:60,dynamic:true,currentCheck:'Voor operationele vluchtvoorbereiding verwijst KNMI naar de bewaakte dienst Luchtvaartmeteo; publieke METAR/TAF-weergave is niet volledig.'}),cov()),
      ],
    },
  },
  {
    id:'meteo-3-10-1-2',title:'3.10 · Waarnemingen · deel 2',
    lesson:{
      id:'meteo-3-10-1-2',title:'Waarnemingen · deel 2',description:"Brongebonden leerlevel uit '§3.10.1 Waarnemingen'.",minScore:80,
      steps:[
        t('Bewolkingscodes · Wolkenbasis honderden feet','FEW, SCT, BKN en OVC geven toenemende bedekkingsgraad van wolkenlagen aan. De hoogte van een wolkenbasis in METAR/TAF wordt in honderdtallen feet boven vliegveldniveau gecodeerd. CB en TCU worden expliciet in luchtvaartweerberichten vermeld omdat ze operationeel significant zijn.',m(57,'§3.10.1 Waarnemingen',{pageEnd:60,dynamic:true,currentCheck:'Voor operationele vluchtvoorbereiding verwijst KNMI naar de bewaakte dienst Luchtvaartmeteo; publieke METAR/TAF-weergave is niet volledig.'}),cov('meteo-d395','meteo-d396','meteo-d397')),
        t('Temperatuur/dauwpunt · M voor negatief','METAR geeft temperatuur en dauwpunt als een paar waarden. De letter M vóór een temperatuurwaarde betekent min/onder nul. Een Q-groep zoals Q1013 geeft QNH in hPa.',m(57,'§3.10.1 Waarnemingen',{pageEnd:60,dynamic:true,currentCheck:'Voor operationele vluchtvoorbereiding verwijst KNMI naar de bewaakte dienst Luchtvaartmeteo; publieke METAR/TAF-weergave is niet volledig.'}),cov('meteo-d398','meteo-d399','meteo-d400')),
        t('TEMPO · BECMG','TEMPO in een TAF beschrijft tijdelijke veranderingen gedurende een deel van de geldigheidsperiode. BECMG in een TAF geeft een geleidelijke of blijvende overgang naar nieuwe omstandigheden aan. PROB geeft een kanspercentage voor een voorspelde tijdelijke gebeurtenis.',m(57,'§3.10.1 Waarnemingen',{pageEnd:60,dynamic:true,currentCheck:'Voor operationele vluchtvoorbereiding verwijst KNMI naar de bewaakte dienst Luchtvaartmeteo; publieke METAR/TAF-weergave is niet volledig.'}),cov('meteo-d401','meteo-d402','meteo-d403')),
        match('Koppel code aan betekenis.',[{left:'FEW',right:'weinig'},{left:'SCT',right:'verspreid'},{left:'BKN',right:'gebroken'},{left:'OVC',right:'geheel bewolkt'}],'Deze codes geven de bedekkingsgraad van een wolkenlaag.',m(57,'§3.10.1 Waarnemingen',{pageEnd:60,dynamic:true,currentCheck:'Voor operationele vluchtvoorbereiding verwijst KNMI naar de bewaakte dienst Luchtvaartmeteo; publieke METAR/TAF-weergave is niet volledig.'}),cov(),goals('meteo-g70'),study(2,'3.10 vraag 2')),
        match('Koppel afkorting aan wolk.',[{left:'CB',right:'cumulonimbus'},{left:'TCU',right:'towering cumulus'}],'CB en TCU worden vanwege hun operationele betekenis expliciet gemeld.',m(57,'§3.10.1 Waarnemingen',{pageEnd:60,dynamic:true,currentCheck:'Voor operationele vluchtvoorbereiding verwijst KNMI naar de bewaakte dienst Luchtvaartmeteo; publieke METAR/TAF-weergave is niet volledig.'}),cov(),goals('meteo-g71'),study(2,'3.10 vraag 3')),
        q('Wat betekent Q1013 in een METAR?',['QNH 1013 hPa','QFE 1013 ft','Wind 1013 kt','Temperatuur 10/13 °C'],0,'Een Q-groep geeft QNH in hPa.',m(57,'§3.10.1 Waarnemingen',{pageEnd:60,dynamic:true,currentCheck:'Voor operationele vluchtvoorbereiding verwijst KNMI naar de bewaakte dienst Luchtvaartmeteo; publieke METAR/TAF-weergave is niet volledig.'}),cov()),
      ],
    },
  },
  {
    id:'meteo-3-10-1-3',title:'3.10 · Waarnemingen · deel 3',
    lesson:{
      id:'meteo-3-10-1-3',title:'Waarnemingen · deel 3',description:"Brongebonden leerlevel uit '§3.10.1 Waarnemingen'.",minScore:80,
      steps:[
        t('Radiosonde · Radiosonde hoogte','Radiosondes meten op hoogte temperatuur, vochtigheid en druk; uit verplaatsing kan wind worden afgeleid. Het dictaat noemt sondes die tot ongeveer 20–30 km hoogte kunnen meten. Satellietbeelden geven informatie over bewolking, omvang, ontwikkeling en verplaatsing van weersystemen.',m(57,'§3.10.1 Waarnemingen',{pageEnd:60,dynamic:true,currentCheck:'Voor operationele vluchtvoorbereiding verwijst KNMI naar de bewaakte dienst Luchtvaartmeteo; publieke METAR/TAF-weergave is niet volledig.'}),cov('meteo-d404','meteo-d405','meteo-d406')),
        t('Weerradar · Vliegtuigwaarnemingen','Weerradar toont vooral neerslaggebieden en intensiteit en helpt buien volgen. Vliegtuigen leveren onderweg waarnemingen zoals temperatuur en wind die meteorologische analyses ondersteunen. Actuele KNMI-controle op 7 september 2026: publieke METAR/TAF-pagina’s zijn niet compleet voor operationele vluchtvoorbereiding; KNMI verwijst daarvoor naar Luchtvaartmeteo.',m(57,'§3.10.1 Waarnemingen',{pageEnd:60,dynamic:true,currentCheck:'Voor operationele vluchtvoorbereiding verwijst KNMI naar de bewaakte dienst Luchtvaartmeteo; publieke METAR/TAF-weergave is niet volledig.'}),cov('meteo-d407','meteo-d408','meteo-d410')),
        q('Welke bron noemt KNMI op 7 september 2026 nog steeds als distributiekanaal voor Nederlandse METAR?',['NOS Teletekst 707','Teletekst 101','Alleen een papieren atlas','Geen publieke bron'],0,'KNMI noemt NOS Teletekst 707 nog voor Nederlandse METAR; voor volledige operationele informatie is Luchtvaartmeteo nodig.',m(57,'§3.10.1 Waarnemingen',{pageEnd:60,dynamic:true,currentCheck:'Voor operationele vluchtvoorbereiding verwijst KNMI naar de bewaakte dienst Luchtvaartmeteo; publieke METAR/TAF-weergave is niet volledig.'}),cov(),goals('meteo-g72'),study(2,'3.10 vraag 4')),
      ],
    },
  },
  {
    id:'meteo-3-10-2-1',title:'3.10 · Weerkaarten · deel 1',
    lesson:{
      id:'meteo-3-10-2-1',title:'Weerkaarten · deel 1',description:"Brongebonden leerlevel uit '§3.10.2 Weerkaarten'.",minScore:80,
      steps:[
        t('Weerkaart druksystemen · Weerkaart fronten','Weerkaarten tonen hoge- en lagedrukgebieden en isobaren. Warmte-, kou-, occlusie- en stationaire fronten worden met standaardsymbolen weergegeven. Ruggen van hoge druk en troggen van lage druk kunnen op analysekaarten worden herkend.',m(60,'§3.10.2 Weerkaarten',{pageEnd:61}),cov('meteo-d411','meteo-d412','meteo-d413')),
        t('Warme sector · Windveren','De warme sector van een frontale depressie ligt tussen warmte- en koufront. Windrichting en windsnelheid kunnen met windveren/windbarbs worden weergegeven. Een halve veer staat in de gebruikte conventie voor 5 kt.',m(60,'§3.10.2 Weerkaarten',{pageEnd:61}),cov('meteo-d414','meteo-d415','meteo-d416')),
        t('Windbarb 10kt · Windbarb 50kt','Een hele veer staat voor 10 kt. Een gevulde driehoek staat voor 50 kt. Weerkaarten gebruiken standaardsymbolen om soorten neerslag en weersverschijnselen aan te geven.',m(60,'§3.10.2 Weerkaarten',{pageEnd:61}),cov('meteo-d417','meteo-d418','meteo-d419')),
        match('Koppel kaartelement aan betekenis.',[{left:'Isobaren',right:'lijnen van gelijke druk'},{left:'H/L',right:'hoge/lage druk'},{left:'Frontsymbolen',right:'grenzen tussen luchtmassa’s'}],'Een weerkaart combineert drukverdeling en frontale structuren.',m(60,'§3.10.2 Weerkaarten',{pageEnd:61}),cov(),goals('meteo-g73'),study(2,'3.10 vraag 5')),
        q('Welke vier fronttypen moet je op weerkaarten kunnen onderscheiden?',['Warmtefront, koufront, occlusie en stationair front','Alleen zeewind en landwind','Cirrus, stratus, cumulus en mist','QFE, QNH, QNE en ISA'],0,'Deze vier fronttypen hebben elk een eigen standaardsymbool.',m(60,'§3.10.2 Weerkaarten',{pageEnd:61}),cov(),goals('meteo-g74'),study(2,'3.10 vraag 6')),
        q('Wat geven neerslagsymbolen op een weerkaart aan?',['Type/significant weersverschijnsel zoals regen of sneeuw','Alleen luchtdruk','Alleen hoogte van tropopauze','Magnetische koers'],0,'Weerkaarten gebruiken symbolen voor neerslag en andere weersverschijnselen.',m(60,'§3.10.2 Weerkaarten',{pageEnd:61}),cov(),goals('meteo-g75'),study(2,'3.10 vraag 7')),
        match('Koppel windbarbdeel aan snelheid.',[{left:'Halve veer',right:'5 kt'},{left:'Hele veer',right:'10 kt'},{left:'Driehoek',right:'50 kt'}],'Windbarbs tonen richting en snelheid compact op kaarten.',m(60,'§3.10.2 Weerkaarten',{pageEnd:61}),cov(),goals('meteo-g76'),study(2,'3.10 vraag 8')),
      ],
    },
  },
  {
    id:'meteo-3-10-2-2',title:'3.10 · Weerkaarten · deel 2',
    lesson:{
      id:'meteo-3-10-2-2',title:'Weerkaarten · deel 2',description:"Brongebonden leerlevel uit '§3.10.2 Weerkaarten'.",minScore:80,
      steps:[
        t('Kaart is momentopname','Een analysekaart beschrijft de toestand op een bepaald tijdstip; voor planning is ook ontwikkeling/verwachting nodig.',m(60,'§3.10.2 Weerkaarten',{pageEnd:61}),cov('meteo-d420')),
        q('Welke uitspraak past bij kaart is momentopname?',['Een analysekaart beschrijft de toestand op een bepaald tijdstip; voor planning is ook ontwikkeling/verwachting nodig.','Het dictaat stelt het tegenovergestelde zonder voorwaarden.','Dit begrip wordt alleen als navigatieterm gebruikt.','Dit verschijnsel heeft volgens het dictaat geen meteorologische betekenis.'],0,'Een analysekaart beschrijft de toestand op een bepaald tijdstip; voor planning is ook ontwikkeling/verwachting nodig.',m(60,'§3.10.2 Weerkaarten',{pageEnd:61}),cov()),
      ],
    },
  },
  {
    id:'meteo-3-10-3-1',title:'3.10 · Informatie voor vluchtplanning',
    lesson:{
      id:'meteo-3-10-3-1',title:'Informatie voor vluchtplanning',description:"Brongebonden leerlevel uit '§3.10.3 Informatie voor vluchtplanning'.",minScore:80,
      steps:[
        t('Vluchtvoorbereiding combineert bronnen · Weerbulletin kleine luchtvaart','Goede vluchtvoorbereiding combineert waarnemingen, verwachtingen, kaarten en waarschuwingen. Het dictaat behandelt luchtvaartweerbulletins als bron voor onder meer wind, bewolking, zicht en thermische omstandigheden. ATIS is een herhaald uitgezonden informatiebericht voor een vliegveld met onder meer actuele meteorologische gegevens.',m(61,'§3.10.3 Informatie voor vluchtplanning',{pageEnd:62,dynamic:true,currentCheck:'Controleer distributiekanalen, frequenties en beschikbare producten bij KNMI Luchtvaartmeteo en AIP/LVNL.'}),cov('meteo-d421','meteo-d422','meteo-d423')),
        t('In-flight updates · AIP voor frequenties','Tijdens de vlucht kunnen via geschikte luchtvaartdiensten of actuele datakanalen weerupdates beschikbaar zijn. Voor actuele frequenties, diensten en procedures is de AIP/actuele officiële publicatie leidend. Actuele KNMI-controle op 7 september 2026: Luchtvaartmeteo is de operationeel bewaakte bron voor volledige Nederlandse luchtvaartmeteorologische vluchtvoorbereiding.',m(61,'§3.10.3 Informatie voor vluchtplanning',{pageEnd:62,dynamic:true,currentCheck:'Controleer distributiekanalen, frequenties en beschikbare producten bij KNMI Luchtvaartmeteo en AIP/LVNL.'}),cov('meteo-d424','meteo-d425','meteo-d426')),
        t('Teletekst 707 nog genoemd · Voor vlucht én tijdens vlucht','Actuele KNMI-controle op 7 september 2026: NOS Teletekst 707 wordt nog genoemd voor Nederlandse METAR, weerbulletin en SIGMET/AIRMET. Meteorologische documenten dienen zowel de preflight planning als het bijstellen van beslissingen onderweg. Waarschuwingen voor gevaarlijk weer horen expliciet in de vluchtvoorbereiding te worden gecontroleerd.',m(61,'§3.10.3 Informatie voor vluchtplanning',{pageEnd:62,dynamic:true,currentCheck:'Controleer distributiekanalen, frequenties en beschikbare producten bij KNMI Luchtvaartmeteo en AIP/LVNL.'}),cov('meteo-d427','meteo-d429','meteo-d430')),
        q('Welke bron noemt KNMI voor volledige operationele vluchtvoorbereiding?',['Luchtvaartmeteo','Alleen de publieke METAR-pagina','Een willekeurige weerapp','Alleen televisie'],0,'KNMI verwijst voor operationeel gebruik naar de bewaakte Luchtvaartmeteo-dienst.',m(61,'§3.10.3 Informatie voor vluchtplanning',{pageEnd:62,dynamic:true,currentCheck:'Controleer distributiekanalen, frequenties en beschikbare producten bij KNMI Luchtvaartmeteo en AIP/LVNL.'}),cov()),
      ],
    },
  },
  {
    id:'meteo-3-10-4-1',title:'3.10 · Meteorologische diensten',
    lesson:{
      id:'meteo-3-10-4-1',title:'Meteorologische diensten',description:"Brongebonden leerlevel uit '§3.10.4 Meteorologische diensten'.",minScore:80,
      steps:[
        t('SIGMET definitie · SIGMET voorbeelden','Een SIGMET waarschuwt voor significante meteorologische verschijnselen die de veiligheid van luchtvaart onderweg kunnen beïnvloeden. Het dictaat noemt onder meer onweer, zware icing, turbulentie en vulkanische as als voorbeelden van SIGMET-waardige gevaren. Een AIRMET beschrijft relevante weersverschijnselen op lagere schaal/voor lagere niveaus volgens de geldende meteorologische dienstverlening.',m(62,'§3.10.4 Meteorologische diensten',{dynamic:true,currentCheck:'Gecontroleerd 7 september 2026: KNMI neemt SIGMET/AIRMET op in volledige flight documentation en distribueert ze voor Amsterdam FIR via Luchtvaartmeteo en NOS Teletekst 707.'}),cov('meteo-d431','meteo-d432','meteo-d433')),
        t('Actuele KNMI distributie · Waarschuwingen altijd actueel controleren','Actuele KNMI-controle op 7 september 2026: volledige flight documentation bevat METAR/TAF/SIGMET/AIRMET en KNMI distribueert SIGMET/AIRMET voor Amsterdam FIR via Luchtvaartmeteo en Teletekst 707. Voor een echte vlucht moeten actuele SIGMET/AIRMET en andere waarschuwingen via de officiële operationele bron worden gecontroleerd. Leer de betekenis van SIGMET/AIRMET uit het dictaat, maar behandel distributie en toepasselijkheid als dynamische operationele informatie.',m(62,'§3.10.4 Meteorologische diensten',{dynamic:true,currentCheck:'Gecontroleerd 7 september 2026: KNMI neemt SIGMET/AIRMET op in volledige flight documentation en distribueert ze voor Amsterdam FIR via Luchtvaartmeteo en NOS Teletekst 707.'}),cov('meteo-d435','meteo-d436','meteo-d437')),
        match('Koppel product aan functie.',[{left:'SIGMET',right:'waarschuwing voor significant gevaarlijk weer onderweg'},{left:'AIRMET',right:'meteorologische informatie/waarschuwing voor relevante verschijnselen volgens de geldende dienst'}],'De definities zijn leerstof; actuele toepasselijkheid/distributie moet operationeel worden gecontroleerd.',m(62,'§3.10.4 Meteorologische diensten',{dynamic:true,currentCheck:'Gecontroleerd 7 september 2026: KNMI neemt SIGMET/AIRMET op in volledige flight documentation en distribueert ze voor Amsterdam FIR via Luchtvaartmeteo en NOS Teletekst 707.'}),cov(),goals('meteo-g77'),study(2,'3.10 vraag 9')),
        q('Waarom staat bij SIGMET/AIRMET in deze cursus een actualiteitswaarschuwing?',['Omdat de toepassingsclaim uit het dictaat afwijkt van actuele KNMI-distributie','Omdat de definities niet bestaan','Omdat METAR hetzelfde is','Omdat dit alleen navigatie is'],0,'We leren de definities uit het dictaat, maar distributie/toepasselijkheid wordt tegen actuele KNMI-bronnen gecontroleerd.',m(62,'§3.10.4 Meteorologische diensten',{dynamic:true,currentCheck:'Gecontroleerd 7 september 2026: KNMI neemt SIGMET/AIRMET op in volledige flight documentation en distribueert ze voor Amsterdam FIR via Luchtvaartmeteo en NOS Teletekst 707.'}),cov()),
      ],
    },
  },
]
