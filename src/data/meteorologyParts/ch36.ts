import type { SourcedUnit } from '../../domain/types'
import { cov, goals, m, match, n, o, q, study, t } from '../meteorologyFactory'

export const meteorology36Units:SourcedUnit[]=[
  {
    id:'meteo-3-6-1-1',title:'3.6 · Luchtsoorten · deel 1',
    lesson:{
      id:'meteo-3-6-1-1',title:'Luchtsoorten · deel 1',description:"Brongebonden leerlevel uit '§3.6.1 Luchtsoorten'.",minScore:80,
      steps:[
        t('Luchtmassa · Brongebied','Een luchtmassa is een groot volume lucht met relatief homogene temperatuur- en vochtigheidseigenschappen. Een brongebied is een groot gebied waar een luchtmassa lang genoeg verblijft om kenmerken van ondergrond en breedtegraad over te nemen. Het dictaat onderscheidt equatoriale lucht (EL) als zeer warme lucht uit de evenaarszone.',m(41,'§3.6.1 Luchtsoorten',{pageEnd:42}),cov('meteo-d246','meteo-d247','meteo-d248')),
        t('Tropische lucht TL · Polaire lucht PL','Tropische lucht (TL) heeft haar oorsprong grofweg tussen 15° en 45° breedte. Polaire lucht (PL) komt grofweg uit breedten tussen 45° en 70°. Arctische lucht (AL) komt uit zeer hoge breedten/poolgebieden.',m(41,'§3.6.1 Luchtsoorten',{pageEnd:42}),cov('meteo-d249','meteo-d250','meteo-d251')),
        t('Maritiem · Continentaal','Een luchtmassa die over zee is aangevoerd wordt maritiem genoemd en is doorgaans vochtiger. Een luchtmassa die over groot landoppervlak is aangevoerd wordt continentaal genoemd en is doorgaans droger. Een luchtmassa heet warm wanneer zij warmer is dan het onderliggende oppervlak.',m(41,'§3.6.1 Luchtsoorten',{pageEnd:42}),cov('meteo-d252','meteo-d253','meteo-d254')),
        q('Wat is een brongebied van een luchtmassa?',['Een groot gebied waar lucht kenmerken van ondergrond en breedtegraad overneemt','Alleen de plek waar een front ontstaat','Elke luchthaven met een METAR','Een wolkenbasis'],0,'Luchtmassa’s krijgen hun typische temperatuur/vochtigheid in een brongebied.',m(41,'§3.6.1 Luchtsoorten',{pageEnd:42}),cov(),goals('meteo-g48'),study(2,'3.6 vraag 1')),
        match('Koppel luchtsoort aan typische herkomst.',[{left:'Arctische lucht',right:'zeer hoge breedten'},{left:'Tropische lucht',right:'lagere/tropische breedten'},{left:'Maritieme lucht',right:'aanvoer over zee'},{left:'Continentale lucht',right:'aanvoer over land'}],'Breedtegraad en ondergrond bepalen de classificatie.',m(41,'§3.6.1 Luchtsoorten',{pageEnd:42}),cov(),goals('meteo-g49'),study(2,'3.6 vraag 2')),
      ],
    },
  },
  {
    id:'meteo-3-6-1-2',title:'3.6 · Luchtsoorten · deel 2',
    lesson:{
      id:'meteo-3-6-1-2',title:'Luchtsoorten · deel 2',description:"Brongebonden leerlevel uit '§3.6.1 Luchtsoorten'.",minScore:80,
      steps:[
        t('Koude luchtmassa definitie · Koude lucht boven warm oppervlak onstabieler','Een luchtmassa heet koud wanneer zij kouder is dan het onderliggende oppervlak. Koude lucht die over een warmer oppervlak stroomt wordt van onderen verwarmd en kan onstabieler worden. Warme lucht boven een kouder oppervlak koelt van onderen af en wordt vaak stabieler met lage bewolking/mist.',m(41,'§3.6.1 Luchtsoorten',{pageEnd:42}),cov('meteo-d255','meteo-d256','meteo-d257')),
        q('Wanneer noemt het dictaat een luchtmassa “koud”?',['Als de lucht kouder is dan het onderliggende oppervlak','Alleen als de temperatuur onder 0 °C is','Als zij uit het westen komt','Als de QNH laag is'],0,'De benaming warm/koud is relatief ten opzichte van het oppervlak.',m(41,'§3.6.1 Luchtsoorten',{pageEnd:42}),cov(),goals('meteo-g50'),study(2,'3.6 vraag 3')),
      ],
    },
  },
  {
    id:'meteo-3-6-2-1',title:'3.6 · Fronten · deel 1',
    lesson:{
      id:'meteo-3-6-2-1',title:'Fronten · deel 1',description:"Brongebonden leerlevel uit '§3.6.2 Fronten'.",minScore:80,
      steps:[
        t('Front · Frontale depressie','Een front is de overgangszone tussen luchtmassa’s met verschillende eigenschappen. Een frontale depressie is gekoppeld aan een golf in de grens tussen warme en koude luchtmassa’s. Bij een warmtefront schuift warme lucht geleidelijk over koudere lucht heen.',m(42,'§3.6.2 Fronten',{pageEnd:44}),cov('meteo-d258','meteo-d259','meteo-d260')),
        t('Warmtefront brede zone · Warmtefront wolkenvolgorde','Het dictaat beschrijft de frontale bewolkingszone van een warmtefront als zeer breed, orde honderden kilometers. Typisch kan de bewolking van Ci/Cs via Ac/As naar Ns/St verdikken bij nadering van een warmtefront. Een warmtefront geeft vaak langdurige, gelijkmatige neerslag en geleidelijk slechter zicht.',m(42,'§3.6.2 Fronten',{pageEnd:44}),cov('meteo-d261','meteo-d262','meteo-d263')),
        t('Warmtefront wind ruimt · Warme sector','Bij frontpassage kan de wind richting veranderen/ruimen en neemt temperatuur en vochtigheid in de warme sector toe. De warme sector ligt tussen warmtefront en koufront en kan lage bewolking, motregen en matig zicht geven. Bij een koufront schuift koudere lucht onder warmere lucht en dwingt deze sneller omhoog.',m(42,'§3.6.2 Fronten',{pageEnd:44}),cov('meteo-d264','meteo-d265','meteo-d266')),
        match('Koppel fronttype aan kernkenmerk.',[{left:'Warmtefront',right:'warme lucht glijdt over koude lucht'},{left:'Koufront',right:'koude lucht schuift onder warme lucht'},{left:'Occlusie',right:'koufront haalt warmtefront in'},{left:'Stationair front',right:'front verplaatst weinig'}],'De fronttypen verschillen in beweging en verticale structuur.',m(42,'§3.6.2 Fronten',{pageEnd:44}),cov(),goals('meteo-g51'),study(2,'3.6 vraag 4')),
        match('Koppel front aan typisch weerbeeld.',[{left:'Warmtefront',right:'geleidelijke verdikking Ci/Cs→As/Ns, langdurige neerslag'},{left:'Koufront',right:'smallere zone, buien/Cb en windstoten'},{left:'Na koufront',right:'koeler, vaak beter zicht en cumulus/buien'}],'Dit zijn typische schema’s; de werkelijke intensiteit varieert.',m(42,'§3.6.2 Fronten',{pageEnd:44}),cov(),goals('meteo-g52'),study(2,'3.6 vraag 5')),
        q('Welke typische wolkenvolgorde hoort bij nadering van een warmtefront?',['Ci/Cs → As/Ns','Cb → Ci → mist','St → Cu → Cc','Alleen Cb'],0,'De bewolking verdikt geleidelijk van hoog naar middel/laag.',m(42,'§3.6.2 Fronten',{pageEnd:44}),cov()),
      ],
    },
  },
  {
    id:'meteo-3-6-2-2',title:'3.6 · Fronten · deel 2',
    lesson:{
      id:'meteo-3-6-2-2',title:'Fronten · deel 2',description:"Brongebonden leerlevel uit '§3.6.2 Fronten'.",minScore:80,
      steps:[
        t('Koufront smalle zone · Koufront Cb en buien','Een koufront is doorgaans smaller en steiler dan een warmtefront. Snelle stijging bij een actief koufront kan cumulonimbus, buien, windstoten en zware neerslag geven. Na een koufront volgt vaak koelere lucht, beter zicht en een buiig/cumulusachtig weertype.',m(42,'§3.6.2 Fronten',{pageEnd:44}),cov('meteo-d267','meteo-d268','meteo-d269')),
        t('Koufront wind ruimt · Occlusie','Ook bij een koufront ruimt de wind vaak tijdens de passage. Een occlusie ontstaat wanneer het sneller bewegende koufront het warmtefront inhaalt en warme lucht van de grond optilt. Een stationair front verplaatst weinig; bewolking kan lang blijven liggen en neerslag kan zwak of afwezig zijn.',m(42,'§3.6.2 Fronten',{pageEnd:44}),cov('meteo-d270','meteo-d271','meteo-d272')),
        t('Warmfront vooraf drukdaling · Na front drukstijging','Bij nadering van een frontale depressie daalt de luchtdruk doorgaans. Na passage van een actief koufront stijgt de druk vaak weer. Warmte-, koude-, occlusie- en stationaire fronten hebben eigen standaardsymbolen op weerkaarten.',m(42,'§3.6.2 Fronten',{pageEnd:44}),cov('meteo-d273','meteo-d274','meteo-d275')),
        q('Welke uitspraak past bij koufront smalle zone?',['Een koufront is doorgaans smaller en steiler dan een warmtefront.','Het dictaat stelt het tegenovergestelde zonder voorwaarden.','Dit begrip wordt alleen als navigatieterm gebruikt.','Dit verschijnsel heeft volgens het dictaat geen meteorologische betekenis.'],0,'Een koufront is doorgaans smaller en steiler dan een warmtefront.',m(42,'§3.6.2 Fronten',{pageEnd:44}),cov()),
      ],
    },
  },
  {
    id:'meteo-3-6-2-3',title:'3.6 · Fronten · deel 3',
    lesson:{
      id:'meteo-3-6-2-3',title:'Fronten · deel 3',description:"Brongebonden leerlevel uit '§3.6.2 Fronten'.",minScore:80,
      steps:[
        t('Frontsectoren bij depressie · Frontweer is driedimensionaal','Een klassieke depressie heeft een warme sector tussen het warmte- en koufront en koudere sectoren ervoor/erna. Het weer bij een front wordt bepaald door helling, snelheid, vochtigheid en stabiliteit van de betrokken luchtmassa’s; de schematische volgorden zijn typische patronen.',m(42,'§3.6.2 Fronten',{pageEnd:44}),cov('meteo-d276','meteo-d277')),
        q('Waar ligt de warme sector in een klassieke frontale depressie?',['Tussen warmtefront en koufront','Achter de occlusie alleen','Boven de tropopauze','Altijd ten noorden van het laag'],0,'De warme sector is het gebied met warme lucht tussen beide hoofdfronten.',m(42,'§3.6.2 Fronten',{pageEnd:44}),cov(),goals('meteo-g53'),study(2,'3.6 vraag 6')),
      ],
    },
  },
]
