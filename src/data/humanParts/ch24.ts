import type { SourcedUnit } from '../../domain/types'
import { cov, h, match, o, q, t } from '../humanFactory'

export const human24Units:SourcedUnit[]=[
  {
    id:"human-oxygen-saturation",title:"2.4 · Hoogte en zuurstofsaturatie",
    lesson:{
      id:"human-oxygen-saturation",title:"Hoogte en zuurstofsaturatie",description:"Brongebonden leerlevel uit §2.4.",minScore:80,
      steps:[
        t("Hemoglobine en saturatie","Zuurstofsaturatie is het percentage hemoglobine waaraan zuurstof is gebonden. Bij toenemende hoogte daalt de totale luchtdruk en daarmee de partiële zuurstofdruk, waardoor hemoglobine moeilijker volledig met zuurstof wordt verzadigd. Het lichaam compenseert aanvankelijk met diepere/sneller ademhaling en een hogere hartslag.",h(38,"§2.4"),cov("human-d192","human-d193","human-d194")),
        t("Hypoxie","Hypoxie is zuurstoftekort in de weefsels; de hersenen zijn bijzonder gevoelig voor een tekort. Het dictaat gebruikt ongeveer 10.000 ft als gebied waar bij gezonde personen de veiligheidsmarge merkbaar kleiner wordt en zuurstofsaturatie richting 90% kan dalen. De ernst hangt af van hoogte én verblijfsduur.",h(38,"§2.4"),cov("human-d195","human-d196","human-d197")),
        q("Waarom neemt de zuurstofsaturatie af met hoogte?",["De partiële zuurstofdruk daalt met de totale luchtdruk","Het zuurstofpercentage wordt automatisch nul","Hemoglobine verdwijnt uit het bloed","De longen worden kleiner door de lagere druk"],0,"De zuurstoffractie blijft ongeveer gelijk, maar de partiële druk daalt.",h(38,"§2.4")),
      ],
    },
  },
  {
    id:"human-hypoxia-symptoms",title:"2.4 · Hypoxie herkennen",
    lesson:{
      id:"human-hypoxia-symptoms",title:"Hypoxie herkennen",description:"Brongebonden leerlevel uit §2.4.",minScore:80,
      steps:[
        t("Symptomen","Het dictaat noemt onder meer euforie, hoofdpijn, duizeligheid, misselijkheid, verminderd gezichtsvermogen, tintelingen, diepere ademhaling, tragere reacties en slechtere besluitvorming als symptomen van hypoxie. Blauwverkleuring van lippen of nagels kan bij ernstiger zuurstoftekort optreden. Een gevaarlijk kenmerk is dat de vlieger door euforie en slechter beoordelingsvermogen zelf kan onderschatten hoe slecht hij functioneert.",h(38,"§2.4",{pageEnd:39}),cov("human-d198","human-d199","human-d200")),
        t("Factoren die het verergeren","Langere verblijfsduur, lichamelijke inspanning en koude verhogen de zuurstofbehoefte of verlagen de reserve. Roken, alcohol, sommige medicijnen en bloedarmoede kunnen de effecten van hypoxie op lagere hoogte versterken.",h(38,"§2.4",{pageEnd:39}),cov("human-d201","human-d202")),
        match("Koppel factor aan effect op hypoxierisico.",[{left:"Langere tijd op hoogte",right:"meer blootstelling"},{left:"Inspanning",right:"hogere zuurstofbehoefte"},{left:"Koude",right:"extra energie voor warm blijven"},{left:"Roken/alcohol/medicatie",right:"lagere fysiologische reserve"}],"De mate van zuurstofgebrek hangt niet alleen van hoogte af.",h(38,"§2.4",{pageEnd:39})),
        q("Waarom is euforie bij hypoxie extra gevaarlijk?",["Omdat de vlieger zich goed kan voelen terwijl beoordeling en prestaties verslechteren","Omdat euforie de zuurstofdruk verhoogt","Omdat euforie alleen bij lage hoogte voorkomt","Omdat het de vleugelbelasting verlaagt"],0,"Zelfinschatting wordt juist minder betrouwbaar.",h(38,"§2.4",{pageEnd:39})),
      ],
    },
  },
  {
    id:"human-tuc-oxygen-use",title:"2.4 · TUC en zuurstofgebruik",
    lesson:{
      id:"human-tuc-oxygen-use",title:"TUC en zuurstofgebruik",description:"Brongebonden leerlevel uit §2.4.",minScore:80,
      steps:[
        t("Time of Useful Consciousness","Time of Useful Consciousness (TUC) is de tijd waarin iemand na ernstig zuurstofverlies nog voldoende in staat is doelgericht te handelen. De TUC wordt met toenemende hoogte snel korter; de bron geeft als voorbeelden ongeveer 30 minuten of langer op 6000 m, 5–10 minuten op 6700 m en slechts enkele minuten rond 7600–9000 m. TUC is een gemiddelde en geen persoonlijke garantie.",h(39,"§2.4",{dynamic:true,currentCheck:"Actuele basis: Commission Implementing Regulation (EU) 2018/1976, SAO.OP.150 en AMC1 SAO.OP.150. De vaste “boven 3000 m wettelijk verplicht”-formulering in het dictaat is te absoluut."}),cov("human-d203","human-d204","human-d205")),
        t("Regelgeving is dynamisch","De bron koppelt zuurstofgebruik aan vaste hoogtegrenzen, maar de actuele Part-SAO-regel legt de primaire verantwoordelijkheid bij de gezagvoerder om zuurstof te laten gebruiken wanneer zuurstofgebrek de vermogens kan aantasten. De bijbehorende EASA AMC adviseert, wanneer de gezagvoerder de individuele behoefte niet kan bepalen, zuurstof voor alle inzittenden voor elke periode boven een pressure altitude van 10.000 ft.",h(39,"§2.4",{dynamic:true,currentCheck:"Actuele basis: Commission Implementing Regulation (EU) 2018/1976, SAO.OP.150 en AMC1 SAO.OP.150. De vaste “boven 3000 m wettelijk verplicht”-formulering in het dictaat is te absoluut."}),cov("human-d206","human-d207")),
        q("Wat betekent Time of Useful Consciousness?",["De tijd waarin je na ernstig zuurstofverlies nog doelgericht kunt handelen","De maximale vliegduur van de zwever","De tijd om donkeradaptatie te bereiken","De duur van een medische keuring"],0,"TUC neemt sterk af naarmate de hoogte verder toeneemt.",h(39,"§2.4",{dynamic:true,currentCheck:"Actuele basis: Commission Implementing Regulation (EU) 2018/1976, SAO.OP.150 en AMC1 SAO.OP.150. De vaste “boven 3000 m wettelijk verplicht”-formulering in het dictaat is te absoluut."})),
        q("Welke uitspraak past bij de actuele zuurstofregel voor zweefvliegtuigen?",["De gezagvoerder moet zuurstof laten gebruiken wanneer hij bepaalt dat zuurstofgebrek de vermogens kan aantasten","Er bestaat voor elke persoon één universele wettelijke grens van exact 3000 m zonder verdere beoordeling","Zuurstof is onder alle omstandigheden verboden onder 13.000 ft","Alleen passagiers mogen zuurstof gebruiken"],0,"SAO.OP.150 is risicogebaseerd; AMC1 noemt 10.000 ft als veilige default wanneer de individuele behoefte niet kan worden bepaald.",h(39,"§2.4",{dynamic:true,currentCheck:"Actuele basis: Commission Implementing Regulation (EU) 2018/1976, SAO.OP.150 en AMC1 SAO.OP.150. De vaste “boven 3000 m wettelijk verplicht”-formulering in het dictaat is te absoluut."})),
      ],
    },
  },
  {
    id:"human-oxygen-system",title:"2.4 · Zuurstofinstallatie veilig gebruiken",
    lesson:{
      id:"human-oxygen-system",title:"Zuurstofinstallatie veilig gebruiken",description:"Brongebonden leerlevel uit §2.4.",minScore:80,
      steps:[
        t("Voor de vlucht","Controleer vóór gebruik dat de zuurstofvoorraad voldoende is, de kraan open staat, het systeem lekvrij is en slangen niet zijn afgekneld. Een zuurstofinstallatie moet geschikt en goed onderhouden zijn; vocht kan op grote hoogte bevriezen en de werking verstoren. Zuurstofsystemen moeten schoon, droog en vetvrij worden gehouden omdat olie en vet in een zuurstofrijke omgeving brandgevaar geven.",h(40,"§2.4",{dynamic:true,currentCheck:"Gebruik en onderhoud van een specifieke zuurstofinstallatie moeten altijd volgens het actuele handboek en fabrikantvoorschrift plaatsvinden."}),cov("human-d208","human-d209","human-d210")),
        t("Tijdens de vlucht","Bewaak de inhoud en werking van de installatie en let op symptomen die op onvoldoende zuurstoftoevoer kunnen wijzen. Bij een storing of symptomen van hypoxie is de veilige reactie: zuurstof gebruiken indien beschikbaar en zo snel als veilig mogelijk naar een lagere hoogte gaan. Vermijd onnodige inspanning en blijf besluitvorming eenvoudig totdat de zuurstofvoorziening en veilige hoogte zijn hersteld.",h(40,"§2.4",{dynamic:true,currentCheck:"Gebruik en onderhoud van een specifieke zuurstofinstallatie moeten altijd volgens het actuele handboek en fabrikantvoorschrift plaatsvinden."}),cov("human-d211","human-d212","human-d213")),
        o("Zet de reactie op vermoedelijke zuurstofstoring logisch op volgorde.",["Dalen naar een veilige lagere hoogte","Symptomen/storing herkennen","Zuurstofvoorziening controleren/gebruiken indien beschikbaar"],["Symptomen/storing herkennen","Zuurstofvoorziening controleren/gebruiken indien beschikbaar","Dalen naar een veilige lagere hoogte"],"De bron noemt snel dalen als essentiële remedie bij falende zuurstofvoorziening.",h(40,"§2.4",{dynamic:true,currentCheck:"Gebruik en onderhoud van een specifieke zuurstofinstallatie moeten altijd volgens het actuele handboek en fabrikantvoorschrift plaatsvinden."})),
        q("Waarom moet een zuurstofsysteem vetvrij zijn?",["Olie of vet kan in contact met zuurstof brandgevaar geven","Vet verlaagt de luchtdruk","Vet veroorzaakt alleen gehoorschade","Vet maakt de hoogtemeter onnauwkeurig"],0,"Zuurstof ondersteunt verbranding sterk; contaminatie met olie/vet is gevaarlijk.",h(40,"§2.4",{dynamic:true,currentCheck:"Gebruik en onderhoud van een specifieke zuurstofinstallatie moeten altijd volgens het actuele handboek en fabrikantvoorschrift plaatsvinden."})),
      ],
    },
  }
]
