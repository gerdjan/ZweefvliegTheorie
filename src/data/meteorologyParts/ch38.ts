import type { SourcedUnit } from '../../domain/types'
import { cov, goals, m, match, n, o, q, study, t } from '../meteorologyFactory'

export const meteorology38Units:SourcedUnit[]=[
  {
    id:'meteo-3-8-1-1',title:'3.8 · Typische weersituaties bij de middelste breedtegraden',
    lesson:{
      id:'meteo-3-8-1-1',title:'Typische weersituaties bij de middelste breedtegraden',description:"Brongebonden leerlevel uit '§3.8.1 Typische weersituaties bij de middelste breedtegraden').",minScore:80,
      steps:[
        t('Klimaat · Klimaatfactoren','Klimaat beschrijft het gemiddelde en de variabiliteit van het weer over een lange periode. Temperatuur, neerslag, wind, vochtigheid, zonneschijn en bewolking behoren tot klimaatkenmerken. Breedtegraad en zoninstraling zijn belangrijke oorzaken van klimaatzones.',m(48,'§3.8.1 Typische weersituaties bij de middelste breedtegraden'),cov('meteo-d298','meteo-d299','meteo-d300')),
        t('Zeestromen · Gebergten','Zeestromen transporteren warmte en beïnvloeden regionale klimaten. Gebergten beïnvloeden neerslag, wind en temperatuur en creëren regionale klimaatverschillen. Het dictaat onderscheidt op grote schaal tropische, gematigde en polaire klimaatzones.',m(48,'§3.8.1 Typische weersituaties bij de middelste breedtegraden'),cov('meteo-d301','meteo-d302','meteo-d303')),
        t('Maritiem/continentaal · Nederlands zeeklimaat','Binnen klimaatzones maakt de nabijheid van zee een belangrijk verschil tussen maritiem en continentaal klimaat. Nederland heeft een gematigd maritiem klimaat met relatief zachte winters en koele zomers, mede door zee en westelijke circulatie.',m(48,'§3.8.1 Typische weersituaties bij de middelste breedtegraden'),cov('meteo-d304','meteo-d305')),
        match('Koppel indeling aan voorbeeld.',[{left:'Breedtegraadzone',right:'tropisch / gematigd / polair'},{left:'Ondergrondinvloed',right:'maritiem / continentaal'},{left:'Reliëf',right:'bergklimaat'}],'Klimaat kan vanuit meerdere schaalfactoren worden ingedeeld.',m(48,'§3.8.1 Typische weersituaties bij de middelste breedtegraden'),cov(),goals('meteo-g60'),study(2,'3.8 vraag 1')),
      ],
    },
  },
  {
    id:'meteo-3-8-2-1',title:'3.8 · Het weer in hogedrukgebieden',
    lesson:{
      id:'meteo-3-8-2-1',title:'Het weer in hogedrukgebieden',description:"Brongebonden leerlevel uit '§3.8.2 Het weer in hogedrukgebieden'.",minScore:80,
      steps:[
        t('Hogedrukgordels · Hoge druk en droogte','Rond subtropische breedten komen klimatologische hogedrukgordels voor door dalende lucht in de algemene circulatie. Langdurige subsidentie in hogedrukgebieden kan wolken en neerslag onderdrukken. In winter kan hogedruk juist mist, lage bewolking en slecht zicht vasthouden door stabiele lagen.',m(48,'§3.8.2 Het weer in hogedrukgebieden',{pageEnd:49}),cov('meteo-d306','meteo-d307','meteo-d308')),
        t('Zomerse hoge druk · Blokkade','In zomer kan hogedruk zonnig weer geven maar een sterke inversie kan thermiek vroeg afkappen. Een langdurig hogedrukgebied kan de gebruikelijke passage van depressies omleiden en een weerspatroon langere tijd vasthouden. Of een hogedrukdag goed thermiekweer geeft hangt ook af van temperatuurprofiel, vocht en inversiehoogte.',m(48,'§3.8.2 Het weer in hogedrukgebieden',{pageEnd:49}),cov('meteo-d309','meteo-d310','meteo-d311')),
        q('Welke uitspraak past bij hogedrukgordels?',['Rond subtropische breedten komen klimatologische hogedrukgordels voor door dalende lucht in de algemene circulatie.','Het dictaat stelt het tegenovergestelde zonder voorwaarden.','Dit begrip wordt alleen als navigatieterm gebruikt.','Dit verschijnsel heeft volgens het dictaat geen meteorologische betekenis.'],0,'Rond subtropische breedten komen klimatologische hogedrukgordels voor door dalende lucht in de algemene circulatie.',m(48,'§3.8.2 Het weer in hogedrukgebieden',{pageEnd:49}),cov()),
      ],
    },
  },
  {
    id:'meteo-3-8-3-1',title:'3.8 · Lokale weersverschijnselen · deel 1',
    lesson:{
      id:'meteo-3-8-3-1',title:'Lokale weersverschijnselen · deel 1',description:"Brongebonden leerlevel uit '§3.8.3 Lokale weersverschijnselen'.",minScore:80,
      steps:[
        t('Föhn loefzijde · Föhn lijzijde','Bij föhn wordt vochtige lucht aan loefzijde opgetild, koelt af, condenseert en kan neerslag verliezen. Aan lijzijde daalt de drogere lucht en warmt droogadiabatisch op. Daardoor is de lijzijde bij föhn vaak warmer en droger dan de loefzijde.',m(49,'§3.8.3 Lokale weersverschijnselen',{pageEnd:50}),cov('meteo-d312','meteo-d313','meteo-d314')),
        t('Föhn wolkenmuur · Mistral','Een wolkenmuur rond de bergkam kan de grens tussen vochtige loefzijde en drogere lijzijde markeren. De Mistral is een sterke, koude noordelijke tot noordwestelijke wind in Zuid-Frankrijk/Middellandse Zeegebied. Terrein tussen gebergten kan de Mistral versnellen en geleiden.',m(49,'§3.8.3 Lokale weersverschijnselen',{pageEnd:50}),cov('meteo-d315','meteo-d316','meteo-d317')),
        t('Sirocco · Sirocco stof','De Sirocco is een warme zuidelijke wind uit de Sahara richting Middellandse Zee/Europa. Sirocco kan zeer warme, droge en stoffige lucht transporteren. Mistral en Sirocco zijn regionale windnamen; hun exacte sterkte en duur variëren per situatie.',m(49,'§3.8.3 Lokale weersverschijnselen',{pageEnd:50}),cov('meteo-d318','meteo-d319','meteo-d320')),
        o('Zet het föhnproces in volgorde.',['Lucht stijgt aan loefzijde en koelt','Condensatie/neerslag verwijdert vocht','Lucht daalt aan lijzijde en warmt droogadiabatisch'],['Lucht stijgt aan loefzijde en koelt','Condensatie/neerslag verwijdert vocht','Lucht daalt aan lijzijde en warmt droogadiabatisch'],'Hierdoor is de lijzijde vaak warmer en droger.',m(49,'§3.8.3 Lokale weersverschijnselen',{pageEnd:50}),cov(),goals('meteo-g61'),study(2,'3.8 vraag 2')),
        q('Wat gebeurt aan de lijzijde bij föhn?',['Lucht daalt, warmt op en wordt relatief droger','Lucht stijgt en koelt natadiabatisch','Altijd sneeuwstorm','Geen temperatuurverandering'],0,'Na vochtverlies aan loefzijde warmt dalende lucht droogadiabatisch op.',m(49,'§3.8.3 Lokale weersverschijnselen',{pageEnd:50}),cov()),
      ],
    },
  },
  {
    id:'meteo-3-8-3-2',title:'3.8 · Lokale weersverschijnselen · deel 2',
    lesson:{
      id:'meteo-3-8-3-2',title:'Lokale weersverschijnselen · deel 2',description:"Brongebonden leerlevel uit '§3.8.3 Lokale weersverschijnselen'.",minScore:80,
      steps:[
        t('Föhn relevant voor vliegen','Föhn gaat samen met sterke wind, golf, rotor en grote verschillen tussen loef- en lijzijde.',m(49,'§3.8.3 Lokale weersverschijnselen',{pageEnd:50}),cov('meteo-d321')),
        q('Welke uitspraak past bij föhn relevant voor vliegen?',['Föhn gaat samen met sterke wind, golf, rotor en grote verschillen tussen loef- en lijzijde.','Het dictaat stelt het tegenovergestelde zonder voorwaarden.','Dit begrip wordt alleen als navigatieterm gebruikt.','Dit verschijnsel heeft volgens het dictaat geen meteorologische betekenis.'],0,'Föhn gaat samen met sterke wind, golf, rotor en grote verschillen tussen loef- en lijzijde.',m(49,'§3.8.3 Lokale weersverschijnselen',{pageEnd:50}),cov()),
      ],
    },
  },
]
