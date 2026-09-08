import type { SourcedUnit } from '../../domain/types'
import { cov, h, match, o, q, t } from '../humanFactory'

export const human21Units:SourcedUnit[]=[
  {
    id:"human-human-factors-intro",title:"2.1 · Waarom menselijke prestaties?",
    lesson:{
      id:"human-human-factors-intro",title:"Waarom menselijke prestaties?",description:"Brongebonden leerlevel uit §2.1.",minScore:80,
      steps:[
        t("Mens en vliegen","Het menselijk lichaam is niet gebouwd voor de afwijkende omstandigheden van het vliegen en presteert van nature het best rond normale zwaartekracht en omstandigheden dicht bij de standaardatmosfeer. Een zweefvlieger moet weten wat het lichaam kan en welke fysiologische en psychologische beperkingen tijdens het vliegen optreden.",h(2,"§2.1"),cov("human-d001","human-d002")),
        t("Human factors als veiligheidsvak","Human performance onderzoekt menselijke prestaties en beperkingen met als doel veiligere beslissingen en minder ongevallen. De theorie behandelt menselijke factoren, elementaire luchtvaartfysiologie, elementaire luchtvaartpsychologie en het gebruik van zuurstof.",h(2,"§2.1"),cov("human-d003","human-d004")),
        q("Waarom hoort menselijke prestaties bij de zweefvliegtheorie?",["Omdat de vlieger zijn fysiologische en psychologische beperkingen moet kennen","Omdat het alleen gaat om onderhoud van het vliegtuig","Omdat het alleen gaat om luchtruimregels","Omdat het uitsluitend radioprocedures behandelt"],0,"Het vak gaat over wat de mens kan, waar beperkingen liggen en hoe die de vliegveiligheid beïnvloeden.",h(2,"§2.1")),
        match("Koppel het hoofdgebied aan het onderwerp.",[{left:"Fysiologie",right:"werking en beperkingen van het lichaam"},{left:"Psychologie",right:"waarnemen, denken, stress en beslissen"},{left:"Zuurstof",right:"effecten van hoogte en hypoxie"}],"Deze drie leergebieden vormen samen met menselijke factoren de kern van het vak.",h(2,"§2.1")),
      ],
    },
  },
  {
    id:"human-accident-human-error",title:"2.1 · Menselijke fouten en ongevallen",
    lesson:{
      id:"human-accident-human-error",title:"Menselijke fouten en ongevallen",description:"Brongebonden leerlevel uit §2.1.1.",minScore:80,
      steps:[
        t("Menselijke fout als belangrijke factor","Het dictaat gebruikt historische luchtvaart- en zweefvliegonderzoeken om te laten zien dat menselijke vergissingen een groot aandeel hebben in ongevallen. De veiligheidsles is niet het historische percentage zelf, maar dat menselijke fouten actief moeten worden herkend, besproken en voorkomen.",h(2,"§2.1.1"),cov("human-d005","human-d006")),
        t("Van statistiek naar gedrag","Onderzoek naar menselijke factoren is volgens het dictaat een belangrijke reden waarom training in human performance onderdeel is van de luchtvaartopleiding. Veiligheid verbetert wanneer vliegers niet alleen techniek beheersen, maar ook eigen beperkingen en foutmechanismen kennen.",h(2,"§2.1.1"),cov("human-d007","human-d008")),
        q("Welke conclusie wil het dictaat vooral trekken uit de ongevalsstatistieken?",["Menselijke vergissingen zijn een belangrijke veiligheidsfactor en verdienen training","Technische storingen spelen nooit een rol","Ongevallen zijn volledig willekeurig","Alleen zeer onervaren vliegers maken fouten"],0,"De statistieken worden gebruikt om het belang van human factors-training te motiveren.",h(2,"§2.1.1")),
      ],
    },
  },
  {
    id:"human-safety-lessons",title:"2.1 · Lessen uit zweefvliegongevallen",
    lesson:{
      id:"human-safety-lessons",title:"Lessen uit zweefvliegongevallen",description:"Brongebonden leerlevel uit §2.1.2.",minScore:80,
      steps:[
        t("Checks en snelheid","Checks zijn belangrijk: neem er tijd voor en voer ze hardop en bewust uit. Voldoende vliegsnelheid moet continu bewaakt worden; vooral lage en steile of schuivende bochten vergroten het risico.",h(3,"§2.1.2",{pageEnd:6}),cov("human-d009","human-d010")),
        t("Zien, marges en discipline","Goed uitkijken en gezien worden zijn centrale botsingspreventiemaatregelen; een schone kap en bril ondersteunen het zicht. Houd ruime marges en zorg voor alternatieven in plaats van een alles-of-niets-benadering. Houd je aan thermiek- en veiligheidsregels en spreek gevaarlijk gedrag na de vlucht aan.",h(3,"§2.1.2",{pageEnd:6}),cov("human-d011","human-d012","human-d013")),
        t("Landing als trainingspunt","Het dictaat adviseert elke vlucht het doellanden te oefenen en overland pas te vliegen als de landing met het type voldoende beheerst wordt. Pas de landingssnelheid bewust aan bij harde wind en turbulentie en neem dit mee in de downwindcheck.",h(3,"§2.1.2",{pageEnd:6}),cov("human-d014","human-d015")),
        match("Koppel de veiligheidsmaatregel aan het risico.",[{left:"Hardop en bewust checken",right:"vergeten of overslaan van cockpitstappen"},{left:"Goed uitkijken",right:"botsingsgevaar"},{left:"Ruime marges",right:"geen uitweg meer hebben"},{left:"Snelheid bewaken",right:"overtrek op lage hoogte"}],"De bron koppelt concrete gewoonten aan het doorbreken van veel voorkomende ongevalsketens.",h(3,"§2.1.2",{pageEnd:6})),
        q("Welke denkwijze past het best bij de veiligheidslessen uit het dictaat?",["Altijd een alternatief en ruime marge houden","Zo dicht mogelijk langs de limieten vliegen","Alleen op ervaring vertrouwen","Checks overslaan als het rustig is"],0,"“Nooit alles of niets” en ruime marges zijn expliciete veiligheidslessen.",h(3,"§2.1.2",{pageEnd:6})),
      ],
    },
  },
  {
    id:"human-recent-experience",title:"2.1 · Recente vliegervaring",
    lesson:{
      id:"human-recent-experience",title:"Recente vliegervaring",description:"Brongebonden leerlevel uit §2.1.3.",minScore:80,
      steps:[
        t("Recency en beslissen","Recente vliegervaring ondersteunt snelle en juiste beslissingen in onverwachte omstandigheden. Wie weinig vliegt of lang niet gevlogen heeft, heeft volgens het dictaat tijdelijk een lagere vliegstandaard en moet extra marge nemen.",h(6,"§2.1.3",{pageEnd:7}),cov("human-d016","human-d017")),
        t("Aanpassen aan ervaring","Na een langere onderbreking adviseert het dictaat eerst een checkstart en de eerste starts bij rustig weer. Onbekend terrein, een nieuw type, een onbekend veld of een weinig gebruikte startmethode vragen extra voorzichtigheid als de recente ervaring beperkt is. Pas de vluchtkeuze aan de actuele vliegstandaard aan en begin pas aan overlandvliegen wanneer de recente ervaring weer op peil is.",h(6,"§2.1.3",{pageEnd:7}),cov("human-d018","human-d019","human-d020")),
        q("Wat is het belangrijkste veiligheidseffect van recente vliegervaring?",["Sneller en juister kunnen reageren op onverwachte situaties","Een hoger maximaal startgewicht","Minder weerstand van de vleugel","Een lagere luchtdruk"],0,"Het dictaat koppelt recente ervaring rechtstreeks aan besluitvorming en reactievermogen.",h(6,"§2.1.3",{pageEnd:7})),
        q("Wat past bij weinig recente ervaring?",["Extra voorzichtig zijn met een nieuw type of onbekend veld","Meteen de moeilijkste overlandvlucht kiezen","Juist grotere marges vermijden","Alleen de radio minder gebruiken"],0,"Onbekende omstandigheden vergroten de belasting wanneer routines nog niet vers zijn.",h(6,"§2.1.3",{pageEnd:7})),
      ],
    },
  },
  {
    id:"human-risk-assessment",title:"2.1 · Risico vooraf inschatten",
    lesson:{
      id:"human-risk-assessment",title:"Risico vooraf inschatten",description:"Brongebonden leerlevel uit §2.1.4.",minScore:80,
      steps:[
        t("Meer dan alleen recency","Een veilige vluchtbeslissing kijkt verder dan alleen recente ervaring: ook lichamelijke toestand, slaap, weer, verloop van de dag, taak en ervaring met het vliegtuig tellen mee. Het dictaat combineert de I’M SAFE-check, recente vliegervaring en een risico-invullijst om vooraf te beoordelen of een geplande vlucht verantwoord is.",h(8,"§2.1.4",{pageEnd:9}),cov("human-d021","human-d022")),
        t("Plan aanpassen","Een hogere risicoscore is een signaal om het plan conservatiever te maken, bijvoorbeeld lokaal te vliegen of met een instructeur in een tweezitter. Risico-inschatting is bedoeld om vóór de start alternatieven te kiezen, niet om een al genomen risicovolle beslissing achteraf te rechtvaardigen.",h(8,"§2.1.4",{pageEnd:9}),cov("human-d023","human-d024")),
        q("Wat is een passende reactie als meerdere risicofactoren tegelijk ongunstig zijn?",["Het vluchtplan conservatiever maken of met een instructeur vliegen","De factoren negeren als het vliegtuig technisch goed is","Alleen sneller vliegen zodat de vlucht korter duurt","De checklist overslaan om tijd te winnen"],0,"De bron gebruikt de risicolijst juist om plannen aan te passen voordat de vlucht begint.",h(8,"§2.1.4",{pageEnd:9})),
        o("Zet de veiligheidslogica in de juiste volgorde.",["Plan aanpassen aan de uitkomst","I’M SAFE en actuele toestand beoordelen","Recente ervaring meenemen","Risicofactoren van vlucht en weer beoordelen"],["I’M SAFE en actuele toestand beoordelen","Recente ervaring meenemen","Risicofactoren van vlucht en weer beoordelen","Plan aanpassen aan de uitkomst"],"De beoordeling leidt uiteindelijk tot een keuze voor tweezitter, lokaal of overland.",h(8,"§2.1.4",{pageEnd:9})),
      ],
    },
  }
]
