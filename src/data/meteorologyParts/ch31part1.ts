import type { SourcedUnit } from '../../domain/types'
import { cov, goals, m, match, n, o, q, study, t } from '../meteorologyFactory'

export const meteorology31Part1:SourcedUnit[]=[
{
    id:'meteo-3-1-1-1',title:'3.1 · De samenstelling, omvang en verticale verdeling van de atmosfeer · deel 1',
    lesson:{
      id:'meteo-3-1-1-1',title:'De samenstelling, omvang en verticale verdeling van de atmosfeer · deel 1',description:"Brongebonden leerlevel uit '§3.1.1 De samenstelling.",minScore:80,
      steps:[
        t('Atmosfeer/dampkring · Waterdamp is weerbepalend','De atmosfeer is het gasvormige omhulsel rond de aarde; in het dictaat wordt ook de term dampkring gebruikt. Waterdamp is volgens het dictaat het belangrijkste luchtbestanddeel voor het ontstaan van weersverschijnselen. De luchtlaag is honderden kilometers dik en wordt met toenemende hoogte ijler doordat er minder moleculen aanwezig zijn.',m(5,'§3.1.1 De samenstelling, omvang en verticale verdeling van de atmosfeer',{pageEnd:6}),cov('meteo-d001','meteo-d002','meteo-d003'),'atmosphere-layers'),
        t('Weer als toestand van dampkring · Samenstelling droge lucht','Weer is de toestand van de dampkring op een bepaald moment en een bepaalde plaats; temperatuur, wind en neerslag zijn belangrijke kenmerken. Droge lucht bestaat ongeveer uit 78% stikstof, 21% zuurstof en 1% andere gassen. Naast droge lucht bevat de atmosfeer waterdamp; het aandeel is niet constant en hangt onder meer met temperatuur samen.',m(5,'§3.1.1 De samenstelling, omvang en verticale verdeling van de atmosfeer',{pageEnd:6}),cov('meteo-d004','meteo-d005','meteo-d006')),
        t('Warme lucht kan meer waterdamp bevatten · Zwaartekracht en luchtkolom','Het dictaat beschrijft dat warme lucht meer waterdamp kan bevatten dan koude lucht. Luchtmoleculen worden door de zwaartekracht aangetrokken; op zeeniveau drukt de luchtkolom erboven de lucht samen. Een warme luchtbel stijgt wanneer de omringende lucht kouder en daardoor dichter is; koude lucht kan in een warmere omgeving dalen.',m(5,'§3.1.1 De samenstelling, omvang en verticale verdeling van de atmosfeer',{pageEnd:6}),cov('meteo-d007','meteo-d008','meteo-d009')),
        q('Welk bestanddeel noemt het dictaat essentieel voor veel weersverschijnselen?',['Waterdamp','Argon','Stikstof','Koolstofdioxide'],0,'Waterdamp varieert sterk en is cruciaal voor wolken, mist en neerslag.',m(5,'§3.1.1 De samenstelling, omvang en verticale verdeling van de atmosfeer',{pageEnd:6}),cov(),goals('meteo-g02'),study(1,'3.1 vraag 2')),
      ],
    },
  },
{
    id:'meteo-3-1-1-2',title:'3.1 · De samenstelling, omvang en verticale verdeling van de atmosfeer · deel 2',
    lesson:{
      id:'meteo-3-1-1-2',title:'De samenstelling, omvang en verticale verdeling van de atmosfeer · deel 2',description:"Brongebonden leerlevel uit '§3.1.1 De samenstelling.",minScore:80,
      steps:[
        t('Vier temperatuurlagen · Troposfeer temperatuur','Op basis van temperatuurverloop worden troposfeer, stratosfeer, mesosfeer en thermosfeer onderscheiden. In de troposfeer neemt de temperatuur in het algemeen af met de hoogte. In de stratosfeer neemt de temperatuur weer toe met de hoogte; het dictaat koppelt dit aan absorptie van ultraviolette straling.',m(5,'§3.1.1 De samenstelling, omvang en verticale verdeling van de atmosfeer',{pageEnd:6}),cov('meteo-d010','meteo-d011','meteo-d012')),
        t('Tropopauze en isothermie · Inversie en isothermie','De tropopauze ligt tussen troposfeer en stratosfeer en is een laag waarin de temperatuur ongeveer gelijk blijft met de hoogte. Een inversie is een laag waarin de temperatuur met de hoogte stijgt; bij isothermie blijft de temperatuur gelijk. Het weer op aarde speelt zich voornamelijk af in de troposfeer.',m(5,'§3.1.1 De samenstelling, omvang en verticale verdeling van de atmosfeer',{pageEnd:6}),cov('meteo-d013','meteo-d014','meteo-d015')),
        t('Tropopauze begrenst diepe convectie','Onweerswolken kunnen tot in de tropopauze reiken; daar komt de verticale ontwikkeling doorgaans tot stilstand.',m(5,'§3.1.1 De samenstelling, omvang en verticale verdeling van de atmosfeer',{pageEnd:6}),cov('meteo-d016')),
        q('In welke laag speelt het weer zich voornamelijk af?',['Troposfeer','Stratosfeer','Mesosfeer','Thermosfeer'],0,'Het dictaat plaatst het dagelijkse weer voornamelijk in de troposfeer.',m(5,'§3.1.1 De samenstelling, omvang en verticale verdeling van de atmosfeer',{pageEnd:6}),cov(),goals('meteo-g01'),study(1,'3.1 vraag 1')),
      ],
    },
  },
{
    id:'meteo-3-1-2-1',title:'3.1 · De temperatuur van de atmosfeer · deel 1',
    lesson:{
      id:'meteo-3-1-2-1',title:'De temperatuur van de atmosfeer · deel 1',description:"Brongebonden leerlevel uit '§3.1.2 De temperatuur van de atmosfeer'.",minScore:80,
      steps:[
        t('Zon als energiebron · Instralingshoek','De zon is de belangrijkste energiebron voor het weer. Hoe rechter zonnestraling op het aardoppervlak valt, hoe meer energie per oppervlakte-eenheid wordt ontvangen. Bij lage zonnestand legt straling een langere weg door de atmosfeer af en bereikt minder energie het oppervlak.',m(6,'§3.1.2 De temperatuur van de atmosfeer',{pageEnd:8}),cov('meteo-d017','meteo-d018','meteo-d019')),
        t('Bewolking beïnvloedt instraling · Bodemsoort beïnvloedt opwarming','Wolken verminderen overdag de instraling aan het aardoppervlak en beperken ’s nachts de uitstraling. De bodemgesteldheid beïnvloedt de opwarming; kleur, vochtigheid en materiaal maken verschil. Water warmt en koelt langzamer dan veel landoppervlakken; dit is belangrijk voor lokale temperatuurverschillen.',m(6,'§3.1.2 De temperatuur van de atmosfeer',{pageEnd:8}),cov('meteo-d020','meteo-d021','meteo-d022')),
        t('Celsius en Fahrenheit · C/F omrekening','Meteorologische temperatuur wordt in het dictaat in Celsius en Fahrenheit behandeld. De omrekening die het dictaat geeft is °C = (°F − 32) / 1,8. De oppervlaktetemperatuur wordt meteorologisch gemeten in een witte, geventileerde opstelling op ongeveer 1,5 m boven de grond.',m(6,'§3.1.2 De temperatuur van de atmosfeer',{pageEnd:8}),cov('meteo-d023','meteo-d024','meteo-d025')),
        match('Koppel de factor aan het effect op opwarming.',[{left:'Hogere zonnestand',right:'meer instraling per m²'},{left:'Bewolking',right:'minder directe instraling overdag'},{left:'Nat/wateroppervlak',right:'warmt doorgaans trager op'}],'Instralingshoek, bewolking en ondergrond bepalen samen hoeveel en hoe snel het oppervlak opwarmt.',m(6,'§3.1.2 De temperatuur van de atmosfeer',{pageEnd:8}),cov(),goals('meteo-g03'),study(1,'3.1 vraag 3')),
        q('Hoe beschrijft het dictaat de standaardmeting van luchttemperatuur nabij de grond?',['In een witte geventileerde opstelling rond 1,5 m hoogte','Direct op het asfalt in de zon','Op 10 m hoogte tegen een zwarte wand','Alleen met satellietmetingen'],0,'De meting wordt afgeschermd van directe straling en rond 1,5 m hoogte uitgevoerd.',m(6,'§3.1.2 De temperatuur van de atmosfeer',{pageEnd:8}),cov(),goals('meteo-g06'),study(1,'3.1 vraag 6')),
        q('Hoe wordt de onderste atmosfeer vooral verwarmd?',['Via het door de zon verwarmde aardoppervlak','Rechtstreeks overal even sterk door UV','Alleen door onweerswolken','Door de maan'],0,'De zon verwarmt vooral het oppervlak; dat draagt warmte over aan de onderste lucht.',m(6,'§3.1.2 De temperatuur van de atmosfeer',{pageEnd:8}),cov(),goals('meteo-g30'),study(1,'3.3 vraag 7')),
      ],
    },
  },
{
    id:'meteo-3-1-2-2',title:'3.1 · De temperatuur van de atmosfeer · deel 2',
    lesson:{
      id:'meteo-3-1-2-2',title:'De temperatuur van de atmosfeer · deel 2',description:"Brongebonden leerlevel uit '§3.1.2 De temperatuur van de atmosfeer'.",minScore:80,
      steps:[
        t('Radiosonde · Warmteoverdracht','Radiosondes leveren op hoogte onder meer temperatuur-, vochtigheids- en drukgegevens. Warmte wordt volgens het dictaat overgedragen door straling, geleiding en convectie. Een onverzadigde stijgende luchtbel koelt in het dictaat ongeveer 1 °C per 100 m.',m(6,'§3.1.2 De temperatuur van de atmosfeer',{pageEnd:8}),cov('meteo-d026','meteo-d027','meteo-d028')),
        t('Dalende lucht warmt · Daggang temperatuur','Dalende onverzadigde lucht warmt ongeveer 1 °C per 100 m op. De hoogste temperatuur treedt later op dan het moment van maximale zonshoogte doordat opwarming tijd kost. Wind bevordert menging in de onderste luchtlagen en verkleint daardoor sterke lokale temperatuurverschillen.',m(6,'§3.1.2 De temperatuur van de atmosfeer',{pageEnd:8}),cov('meteo-d029','meteo-d030','meteo-d031')),
        t('Grondinversie door uitstraling','Sterke nachtelijke afkoeling van het aardoppervlak kan een inversie dicht bij de grond veroorzaken.',m(6,'§3.1.2 De temperatuur van de atmosfeer',{pageEnd:8}),cov('meteo-d032')),
        q('Welke uitspraak past bij radiosonde?',['Radiosondes leveren op hoogte onder meer temperatuur-, vochtigheids- en drukgegevens.','Het dictaat stelt het tegenovergestelde zonder voorwaarden.','Dit begrip wordt alleen als navigatieterm gebruikt.','Dit verschijnsel heeft volgens het dictaat geen meteorologische betekenis.'],0,'Radiosondes leveren op hoogte onder meer temperatuur-, vochtigheids- en drukgegevens.',m(6,'§3.1.2 De temperatuur van de atmosfeer',{pageEnd:8}),cov()),
      ],
    },
  }
]
