import type { SourcedUnit } from '../../domain/types'
import { cov, goals, m, match, n, o, q, study, t } from '../meteorologyFactory'

export const meteorology37Units:SourcedUnit[]=[
  {
    id:'meteo-3-7-1-1',title:'3.7 · Hogedrukgebieden · deel 1',
    lesson:{
      id:'meteo-3-7-1-1',title:'Hogedrukgebieden · deel 1',description:"Brongebonden leerlevel uit '§3.7.1 Hogedrukgebieden'.",minScore:80,
      steps:[
        t('Hogedrukgebied/anticycloon · NH circulatie hoge druk','Een hogedrukgebied wordt ook anticycloon genoemd. Op het noordelijk halfrond stroomt de wind rond een hogedrukgebied met de klok mee. In een hogedrukgebied daalt lucht op grote schaal; dit heet subsidentie.',m(45,'§3.7.1 Hogedrukgebieden',{pageEnd:46}),cov('meteo-d278','meteo-d279','meteo-d280')),
        t('Subsidentie warmt op · Hoge druk vaak rustig/droog','Dalende lucht wordt samengedrukt en warmt droogadiabatisch op. Hogedrukgebieden geven vaak rustig en relatief droog weer, maar niet automatisch goed zweefweer. Subsidentie kan een inversie vormen die convectie en wolkenontwikkeling begrenst.',m(45,'§3.7.1 Hogedrukgebieden',{pageEnd:46}),cov('meteo-d281','meteo-d282','meteo-d283')),
        t('Vervuiling onder inversie · Rug','Een stabiele inversie kan vocht en vervuiling in de onderste luchtlagen vasthouden en zicht verslechteren. Een rug is een langgerekte uitloper van hoge druk tussen gebieden met lagere druk. Het dictaat gebruikt wig voor een meer wigvormige uitloper van hoge druk.',m(45,'§3.7.1 Hogedrukgebieden',{pageEnd:46}),cov('meteo-d284','meteo-d285','meteo-d286')),
        match('Koppel systeem aan typische verticale beweging.',[{left:'Hogedrukgebied',right:'dalende lucht/subsidentie'},{left:'Lagedrukgebied',right:'convergentie en stijgende lucht'}],'De verticale beweging helpt verklaren welk weer bij druksystemen hoort.',m(45,'§3.7.1 Hogedrukgebieden',{pageEnd:46}),cov(),goals('meteo-g54'),study(2,'3.7 vraag 1')),
        q('Wat gebeurt met dalende lucht in een hogedrukgebied?',['Zij wordt samengedrukt en warmt adiabatisch op','Zij koelt altijd natadiabatisch','Zij wordt onmiddellijk verzadigd','Zij verandert in een front'],0,'Subsidentie geeft compressie en opwarming.',m(45,'§3.7.1 Hogedrukgebieden',{pageEnd:46}),cov(),goals('meteo-g55'),study(2,'3.7 vraag 2')),
        q('Waarom kan een hogedrukgebied toch slecht zweefweer geven?',['Een subsidentie-inversie kan thermiek laag afkappen en zicht vervuilen','Hoge druk betekent altijd onweer','Omdat wind altijd stormkracht heeft','Omdat de troposfeer verdwijnt'],0,'Hoge druk is niet automatisch goede thermiek.',m(45,'§3.7.1 Hogedrukgebieden',{pageEnd:46}),cov(),goals('meteo-g56'),study(2,'3.7 vraag 3')),
        match('Koppel begrip aan beschrijving.',[{left:'Rug',right:'langgerekte uitloper van hoge druk'},{left:'Wig',right:'wigvormige uitloper van hoge druk'}],'Beide zijn uitbreidingen van een hogedrukgebied.',m(45,'§3.7.1 Hogedrukgebieden',{pageEnd:46}),cov(),goals('meteo-g57'),study(2,'3.7 vraag 4')),
        q('Waarom kan een inversie onder hoge druk zicht verslechteren?',['Vocht en vervuiling blijven in de onderste laag opgesloten','Alle lucht verdwijnt','De zon staat altijd laag','Er zijn geen aerosolen meer'],0,'Stabiele lucht remt verticale menging.',m(45,'§3.7.1 Hogedrukgebieden',{pageEnd:46}),cov()),
      ],
    },
  },
  {
    id:'meteo-3-7-1-2',title:'3.7 · Hogedrukgebieden · deel 2',
    lesson:{
      id:'meteo-3-7-1-2',title:'Hogedrukgebieden · deel 2',description:"Brongebonden leerlevel uit '§3.7.1 Hogedrukgebieden'.",minScore:80,
      steps:[
        t('Druk relatief aan omgeving','Hoewel het dictaat 1013,25 hPa als gemiddelde referentie gebruikt, wordt een hoog of laag operationeel vooral ten opzichte van de omgeving en drukverdeling geïnterpreteerd.',m(45,'§3.7.1 Hogedrukgebieden',{pageEnd:46}),cov('meteo-d287')),
        q('Welke uitspraak past bij druk relatief aan omgeving?',['Hoewel het dictaat 1013,25 hPa als gemiddelde referentie gebruikt, wordt een hoog of laag operationeel vooral ten opzichte van de omgeving en drukverdeling geïnterpreteerd.','Het dictaat stelt het tegenovergestelde zonder voorwaarden.','Dit begrip wordt alleen als navigatieterm gebruikt.','Dit verschijnsel heeft volgens het dictaat geen meteorologische betekenis.'],0,'Hoewel het dictaat 1013,25 hPa als gemiddelde referentie gebruikt, wordt een hoog of laag operationeel vooral ten opzichte van de omgeving en drukverdeling geïnterpreteerd.',m(45,'§3.7.1 Hogedrukgebieden',{pageEnd:46}),cov()),
      ],
    },
  },
  {
    id:'meteo-3-7-2-1',title:'3.7 · Niet-frontale depressies · deel 1',
    lesson:{
      id:'meteo-3-7-2-1',title:'Niet-frontale depressies · deel 1',description:"Brongebonden leerlevel uit '§3.7.2 Niet-frontale depressies'.",minScore:80,
      steps:[
        t('Niet-frontale depressie · NH circulatie lage druk','Een lagedrukgebied hoeft niet altijd met fronten verbonden te zijn. Op het noordelijk halfrond draait de wind rond een lagedrukgebied tegen de klok in. Sterke opwarming van lucht kan aan het oppervlak een thermisch lagedrukgebied veroorzaken.',m(46,'§3.7.2 Niet-frontale depressies',{pageEnd:47}),cov('meteo-d288','meteo-d289','meteo-d290')),
        t('Thermische depressie convergentie · Orografische depressie','Bij thermische lage druk kan lucht aan het oppervlak convergeren en stijgen. Achter een bergketen kan door stroming en drukverdeling een lagedrukgebied aan de lijzijde ontstaan. Het dictaat noemt polaire depressies als niet-frontaal depressietype.',m(46,'§3.7.2 Niet-frontale depressies',{pageEnd:47}),cov('meteo-d291','meteo-d292','meteo-d293')),
        t('Secundaire depressie · Trog','Een secundaire depressie kan zich als kleiner lagedrukgebied nabij een groter systeem ontwikkelen. Een trog is een langgerekte uitloper van lage druk. Troggen gaan vaak samen met stijgende lucht, buien en onstabiel weer.',m(46,'§3.7.2 Niet-frontale depressies',{pageEnd:47}),cov('meteo-d294','meteo-d295','meteo-d296')),
        match('Koppel depressietype aan oorzaak.',[{left:'Thermische depressie',right:'sterke lokale opwarming'},{left:'Orografische depressie',right:'stroming/drukverdeling aan lijzijde van gebergte'}],'Niet alle lagedrukgebieden zijn frontaal.',m(46,'§3.7.2 Niet-frontale depressies',{pageEnd:47}),cov(),goals('meteo-g58'),study(2,'3.7 vraag 5')),
        q('Wat is een trog?',['Een langgerekte uitloper van lage druk','Een uitloper van hoge druk','Een wolkensoort','Een windmeeteenheid'],0,'Een trog is een langgerekte lage-drukstructuur, vaak met onstabiel weer.',m(46,'§3.7.2 Niet-frontale depressies',{pageEnd:47}),cov(),goals('meteo-g59'),study(2,'3.7 vraag 6')),
      ],
    },
  },
  {
    id:'meteo-3-7-2-2',title:'3.7 · Niet-frontale depressies · deel 2',
    lesson:{
      id:'meteo-3-7-2-2',title:'Niet-frontale depressies · deel 2',description:"Brongebonden leerlevel uit '§3.7.2 Niet-frontale depressies'.",minScore:80,
      steps:[
        t('Convergentielijn','Grenzen waar luchtstromen samenkomen kunnen extra stijgbeweging en buien/thermiek organiseren.',m(46,'§3.7.2 Niet-frontale depressies',{pageEnd:47}),cov('meteo-d297')),
        q('Welke uitspraak past bij convergentielijn?',['Grenzen waar luchtstromen samenkomen kunnen extra stijgbeweging en buien/thermiek organiseren.','Het dictaat stelt het tegenovergestelde zonder voorwaarden.','Dit begrip wordt alleen als navigatieterm gebruikt.','Dit verschijnsel heeft volgens het dictaat geen meteorologische betekenis.'],0,'Grenzen waar luchtstromen samenkomen kunnen extra stijgbeweging en buien/thermiek organiseren.',m(46,'§3.7.2 Niet-frontale depressies',{pageEnd:47}),cov()),
      ],
    },
  },
]
