import type { SourcedUnit } from '../../domain/types'
import { cov, goals, m, match, n, o, q, study, t } from '../meteorologyFactory'

export const meteorology31Part2:SourcedUnit[]=[
{
    id:'meteo-3-1-3-1',title:'3.1 · Luchtdruk',
    lesson:{
      id:'meteo-3-1-3-1',title:'Luchtdruk',description:"Brongebonden leerlevel uit '§3.1.3 Luchtdruk').",minScore:80,
      steps:[
        t('Luchtdruk definitie · Barometer','Luchtdruk is de kracht die het gewicht van de luchtkolom op een oppervlak uitoefent. Een barometer meet luchtdruk; een hoogtemeter is in beginsel een aangepaste barometer. Het dictaat behandelt hectopascal en millibar als numeriek gelijkwaardige druk-eenheden in deze context.',m(9,'§3.1.3 Luchtdruk'),cov('meteo-d033','meteo-d034','meteo-d035')),
        t('Gemiddelde zeeniveaudruk · Isobaren','De gemiddelde standaarddruk op zeeniveau is ongeveer 1013,25 hPa. Isobaren zijn lijnen op een weerkaart die punten met gelijke luchtdruk verbinden. Luchtdruk neemt af met de hoogte doordat de luchtkolom boven het meetpunt kleiner wordt.',m(9,'§3.1.3 Luchtdruk'),cov('meteo-d036','meteo-d037','meteo-d038')),
        t('Drukafname niet lineair · Zeeniveaudruk varieert','De afname van luchtdruk met hoogte is niet overal gelijk; de druk neemt procentueel af naarmate de hoogte toeneemt. Werkelijke luchtdruk op zeeniveau varieert rond de standaardwaarde en hangt samen met druksystemen.',m(9,'§3.1.3 Luchtdruk'),cov('meteo-d039','meteo-d040')),
        q('Waarvan is de luchtdruk op een punt in hoofdzaak het gevolg?',['Het gewicht van de luchtkolom erboven','Alleen de windsnelheid','Alleen de relatieve vochtigheid','De richting van het aardmagnetisch veld'],0,'Luchtdruk is de kracht door het gewicht van de bovenliggende luchtkolom.',m(9,'§3.1.3 Luchtdruk'),cov(),goals('meteo-g07'),study(1,'3.1 vraag 7')),
      ],
    },
  },
{
    id:'meteo-3-1-4-1',title:'3.1 · Luchtdichtheid',
    lesson:{
      id:'meteo-3-1-4-1',title:'Luchtdichtheid',description:"Brongebonden leerlevel uit '§3.1.4 Luchtdichtheid').",minScore:80,
      steps:[
        t('Luchtdichtheid definitie · Dichtheid en druk','Luchtdichtheid is de massa lucht per volume-eenheid, uitgedrukt in kg/m³. Bij gelijke temperatuur neemt de luchtdichtheid toe wanneer de luchtdruk toeneemt. Bij gelijke druk neemt de luchtdichtheid af wanneer de temperatuur stijgt.',m(9,'§3.1.4 Luchtdichtheid'),cov('meteo-d041','meteo-d042','meteo-d043')),
        t('Warme lucht lichter · Dichtheid daalt met hoogte','Warme lucht is bij vergelijkbare druk minder dicht dan koude lucht. Met toenemende hoogte neemt de luchtdichtheid in de atmosfeer in het algemeen af. Het dictaat noemt voor droge lucht bij 0 °C en 1013,25 hPa ongeveer 1,293 kg/m³.',m(9,'§3.1.4 Luchtdichtheid'),cov('meteo-d044','meteo-d045','meteo-d046')),
        q('Welke uitspraak past bij luchtdichtheid definitie?',['Luchtdichtheid is de massa lucht per volume-eenheid, uitgedrukt in kg/m³.','Het dictaat stelt het tegenovergestelde zonder voorwaarden.','Dit begrip wordt alleen als navigatieterm gebruikt.','Dit verschijnsel heeft volgens het dictaat geen meteorologische betekenis.'],0,'Luchtdichtheid is de massa lucht per volume-eenheid, uitgedrukt in kg/m³.',m(9,'§3.1.4 Luchtdichtheid'),cov()),
      ],
    },
  },
{
    id:'meteo-3-1-5-1',title:'3.1 · De internationale standaardatmosfeer · deel 1',
    lesson:{
      id:'meteo-3-1-5-1',title:'De internationale standaardatmosfeer · deel 1',description:"Brongebonden leerlevel uit '§3.1.5 De internationale standaardatmosfeer').",minScore:80,
      steps:[
        t('ISA is afgesproken model · ISA temperatuur zeeniveau','De Internationale Standaardatmosfeer is een afgesproken referentiemodel voor gemiddelde atmosferische omstandigheden. ISA gebruikt 15 °C op zeeniveau. ISA gebruikt in de troposfeer een temperatuurafname van 0,65 °C per 100 m.',m(10,'§3.1.5 De internationale standaardatmosfeer'),cov('meteo-d047','meteo-d048','meteo-d049')),
        t('ISA druk zeeniveau · ISA drukgradiënt laag','ISA gebruikt 1013,25 hPa op zeeniveau. Het dictaat gebruikt tot ongeveer 1500 m de vuistregel circa 1 hPa drukafname per 8 m. ISA gebruikt een luchtdichtheid van 1,225 kg/m³ op zeeniveau.',m(10,'§3.1.5 De internationale standaardatmosfeer'),cov('meteo-d050','meteo-d051','meteo-d052')),
        t('Instrumentkalibratie · IAS en TAS zeeniveau','Hoogtemeter en snelheidsmeter worden geijkt tegen omstandigheden uit de standaardatmosfeer. Bij ISA op zeeniveau vallen IAS en TAS in het dictaat samen. Door afnemende dichtheid is de TAS op grotere hoogte bij dezelfde IAS hoger.',m(10,'§3.1.5 De internationale standaardatmosfeer'),cov('meteo-d053','meteo-d054','meteo-d055')),
        q('Waarom gebruikt de luchtvaart de Internationale Standaardatmosfeer?',['Als afgesproken referentiemodel voor instrumenten en berekeningen','Als dagelijkse weersverwachting','Als wettelijke windlimiet','Om fronten op kaarten te tekenen'],0,'ISA is een referentiemodel, geen voorspelling van het actuele weer.',m(10,'§3.1.5 De internationale standaardatmosfeer'),cov(),goals('meteo-g08'),study(1,'3.1 vraag 8')),
        match('Koppel de ISA-grootheid op zeeniveau aan de waarde uit het dictaat.',[{left:'Temperatuur',right:'15 °C'},{left:'Druk',right:'1013,25 hPa'},{left:'Dichtheid',right:'1,225 kg/m³'}],'Deze waarden horen bij ISA op zeeniveau.',m(10,'§3.1.5 De internationale standaardatmosfeer'),cov(),goals('meteo-g09'),study(1,'3.1 vraag 9')),
      ],
    },
  },
{
    id:'meteo-3-1-5-2',title:'3.1 · De internationale standaardatmosfeer · deel 2',
    lesson:{
      id:'meteo-3-1-5-2',title:'De internationale standaardatmosfeer · deel 2',description:"Brongebonden leerlevel uit '§3.1.5 De internationale standaardatmosfeer').",minScore:80,
      steps:[
        t('Typeafhankelijke snelheidslimiet op hoogte','Het dictaat gebruikt een 260 km/h-voorbeeld om te benadrukken dat toegestane snelheden op hoogte type-afhankelijk kunnen zijn; het vlieghandboek is leidend.',m(10,'§3.1.5 De internationale standaardatmosfeer'),cov('meteo-d056')),
        q('Welke uitspraak past bij typeafhankelijke snelheidslimiet op hoogte?',['Het dictaat gebruikt een 260 km/h-voorbeeld om te benadrukken dat toegestane snelheden op hoogte type-afhankelijk kunnen zijn; het vlieghandboek is leidend.','Het dictaat stelt het tegenovergestelde zonder voorwaarden.','Dit begrip wordt alleen als navigatieterm gebruikt.','Dit verschijnsel heeft volgens het dictaat geen meteorologische betekenis.'],0,'Het dictaat gebruikt een 260 km/h-voorbeeld om te benadrukken dat toegestane snelheden op hoogte type-afhankelijk kunnen zijn; het vlieghandboek is leidend.',m(10,'§3.1.5 De internationale standaardatmosfeer'),cov()),
      ],
    },
  },
{
    id:'meteo-3-1-6-1',title:'3.1 · Hoogtemeterinstellingen · deel 1',
    lesson:{
      id:'meteo-3-1-6-1',title:'Hoogtemeterinstellingen · deel 1',description:"Brongebonden leerlevel uit '§3.1.6 Hoogtemeterinstellingen'.",minScore:80,
      steps:[
        t('QFE en height · QNH en altitude','Bij QFE is de hoogtemeter op veldniveau ingesteld; de aanwijzing wordt als height ten opzichte van het referentieniveau gebruikt. Bij QNH is de druk naar zeeniveau herleid; de aanwijzing heet altitude en sluit aan op hoogtes boven zeeniveau. Bij QNE staat de hoogtemeter op 1013,25 hPa en wordt hoogte uitgedrukt als Flight Level.',m(10,'§3.1.6 Hoogtemeterinstellingen',{pageEnd:12,dynamic:true,currentCheck:'Controleer vóór operationeel gebruik AIP Nederland ENR 1.7. Gecontroleerd 7 september 2026: transition altitude Amsterdam FIR is 3500 ft voor VFR en 3000 ft voor IFR.'}),cov('meteo-d057','meteo-d058','meteo-d059')),
        t('Flight Level is honderden feet · Transition altitude','Een Flight Level wordt in honderdtallen feet aangeduid: FL45 correspondeert met drukvlak 4500 ft bij standaardinstelling. Het dictaat noemt voor Nederland 3500 ft als transition altitude in de zweefvlieg/VFR-context. Actuele AIP-controle op 7 september 2026: in de Amsterdam FIR is de transition altitude 3500 ft voor VFR en 3000 ft voor IFR.',m(10,'§3.1.6 Hoogtemeterinstellingen',{pageEnd:12,dynamic:true,currentCheck:'Controleer vóór operationeel gebruik AIP Nederland ENR 1.7. Gecontroleerd 7 september 2026: transition altitude Amsterdam FIR is 3500 ft voor VFR en 3000 ft voor IFR.'}),cov('meteo-d060','meteo-d061','meteo-d062')),
        t('Boven transition altitude QNE · Terug naar QNH bij dalen','Boven de transition altitude wordt naar de standaarddrukinstelling overgeschakeld zodat verticale separatie op dezelfde drukreferentie berust. Bij dalen door de overgang wordt weer naar de passende QNH-instelling teruggeschakeld; het actuele transition level wordt operationeel bepaald. Van hoge naar lage luchtdruk zonder bijstellen geeft de hoogtemeter een te hoge aanwijzing: de werkelijke hoogte is lager.',m(10,'§3.1.6 Hoogtemeterinstellingen',{pageEnd:12,dynamic:true,currentCheck:'Controleer vóór operationeel gebruik AIP Nederland ENR 1.7. Gecontroleerd 7 september 2026: transition altitude Amsterdam FIR is 3500 ft voor VFR en 3000 ft voor IFR.'}),cov('meteo-d063','meteo-d064','meteo-d065')),
        q('Welke instelling hoort bij altitude boven zeeniveau?',['QNH','QFE','QNE','Geen drukinstelling'],0,'QNH geeft altitude ten opzichte van zeeniveau.',m(10,'§3.1.6 Hoogtemeterinstellingen',{pageEnd:12,dynamic:true,currentCheck:'Controleer vóór operationeel gebruik AIP Nederland ENR 1.7. Gecontroleerd 7 september 2026: transition altitude Amsterdam FIR is 3500 ft voor VFR en 3000 ft voor IFR.'}),cov()),
        q('Wat gebeurt met de werkelijke hoogte als je van hoge naar lage druk vliegt zonder de instelling aan te passen?',['Je zit lager dan de meter aangeeft','Je zit hoger dan de meter aangeeft','Er verandert niets','De meter wordt een snelheidsmeter'],0,'“High to low, look out below”: de meter leest te hoog.',m(10,'§3.1.6 Hoogtemeterinstellingen',{pageEnd:12,dynamic:true,currentCheck:'Controleer vóór operationeel gebruik AIP Nederland ENR 1.7. Gecontroleerd 7 september 2026: transition altitude Amsterdam FIR is 3500 ft voor VFR en 3000 ft voor IFR.'}),cov()),
      ],
    },
  }
]
