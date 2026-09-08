import type { SourcedUnit } from '../../domain/types'
import { cov, h, match, o, q, t } from '../humanFactory'

export const human221Units:SourcedUnit[]=[
  {
    id:"human-atmosphere-pressure",title:"2.2 · Atmosfeer, druk en hoogte",
    lesson:{
      id:"human-atmosphere-pressure",title:"Atmosfeer, druk en hoogte",description:"Brongebonden leerlevel uit §2.2.1.",minScore:80,
      steps:[
        t("Atmosferische lagen","De atmosfeer wordt op basis van temperatuurverloop ingedeeld in troposfeer, stratosfeer, mesosfeer en thermosfeer. Zweefvliegen speelt zich af in het onderste deel van de troposfeer; daar neemt de temperatuur met de hoogte doorgaans af.",h(11,"§2.2.1"),cov("human-d030","human-d031")),
        t("Druk met hoogte","De luchtdruk neemt in de hele atmosfeer af met de hoogte en de afname is in de onderste kilometers het sterkst. Het dictaat gebruikt als ordegrootte dat de druk rond 2400 m ongeveer een kwart lager is en rond 5500 m ongeveer gehalveerd.",h(11,"§2.2.1"),cov("human-d032","human-d033")),
        q("Wat gebeurt er met de luchtdruk als je stijgt?",["De luchtdruk neemt af","De luchtdruk neemt altijd toe","De luchtdruk blijft exact gelijk","Alleen de zuurstoffractie verandert"],0,"Met toenemende hoogte rust een kleinere luchtkolom boven je.",h(11,"§2.2.1")),
      ],
    },
  },
  {
    id:"human-partial-pressure-gas-laws",title:"2.2 · Partiële druk en gaswetten",
    lesson:{
      id:"human-partial-pressure-gas-laws",title:"Partiële druk en gaswetten",description:"Brongebonden leerlevel uit §2.2.1.",minScore:80,
      steps:[
        t("Partiële druk","Lucht is een mengsel van gassen; volgens de wet van Dalton is de totale druk de som van de partiële drukken van de afzonderlijke gassen. Als de totale luchtdruk bij stijgen daalt, dalen ook de partiële drukken, waaronder die van zuurstof. De lagere partiële zuurstofdruk maakt opname van zuurstof in het bloed moeilijker.",h(12,"§2.2.1"),cov("human-d034","human-d035","human-d036")),
        t("Boyle en Henry","De wet van Boyle beschrijft dat een gasvolume groter wordt wanneer de omgevingsdruk afneemt; dit verklaart drukproblemen in afgesloten lichaamsholten en uitzettende darmgassen. De wet van Henry beschrijft dat bij hogere druk meer gas in een vloeistof kan oplossen; bij snelle drukdaling kan opgelost gas belletjes vormen.",h(12,"§2.2.1"),cov("human-d037","human-d038")),
        match("Koppel de gaswet aan de luchtvaartbetekenis.",[{left:"Dalton",right:"partiële zuurstofdruk daalt mee met totale druk"},{left:"Boyle",right:"gasvolume zet uit bij drukdaling"},{left:"Henry",right:"opgelost gas kan bij drukdaling belletjes vormen"}],"Het dictaat koppelt deze drie gaswetten aan hypoxie, barotrauma en decompressieziekte.",h(12,"§2.2.1")),
      ],
    },
  },
  {
    id:"human-respiration-gas-exchange",title:"2.2 · Ademhaling en gaswisseling",
    lesson:{
      id:"human-respiration-gas-exchange",title:"Ademhaling en gaswisseling",description:"Brongebonden leerlevel uit §2.2.1.",minScore:80,
      steps:[
        t("Route van de lucht","Lucht komt via neus of mond, luchtpijp en luchtwegen in de longen; de neus filtert de ingeademde lucht. In de longblaasjes vindt gaswisseling plaats met het bloed in de longcapillairen.",h(13,"§2.2.1"),cov("human-d039","human-d040")),
        t("Zuurstof en kooldioxide","Zuurstof diffundeert vanuit de longblaasjes naar het bloed en kooldioxide diffundeert vanuit het bloed naar de longen om te worden uitgeademd. Hemoglobine in rode bloedcellen bindt zuurstof en maakt transport naar de weefsels mogelijk. Het lichaam gebruikt veranderingen in onder meer kooldioxidegehalte om de ademhaling te regelen.",h(13,"§2.2.1"),cov("human-d041","human-d042","human-d043")),
        match("Koppel onderdeel aan functie.",[{left:"Longblaasjes",right:"plaats van gaswisseling"},{left:"Hemoglobine",right:"bindt en transporteert zuurstof"},{left:"Kooldioxide",right:"wordt via de longen uitgeademd"}],"Gaswisseling en zuurstoftransport vormen de basis voor het begrijpen van hypoxie.",h(13,"§2.2.1")),
      ],
    },
  },
  {
    id:"human-hyperventilation",title:"2.2 · Hyperventilatie herkennen",
    lesson:{
      id:"human-hyperventilation",title:"Hyperventilatie herkennen",description:"Brongebonden leerlevel uit §2.2.1.",minScore:80,
      steps:[
        t("Fysiologisch of psychisch","Fysiologische hyperventilatie kan een normale reactie zijn op extra zuurstofbehoefte, bijvoorbeeld bij inspanning of zuurstoftekort. Niet-fysiologische of psychische hyperventilatie kan ontstaan door angst of stress terwijl er geen extra zuurstofbehoefte is. Bij psychische hyperventilatie daalt het kooldioxidegehalte van het bloed; klachten kunnen daardoor juist toenemen.",h(14,"§2.2.1"),cov("human-d044","human-d045","human-d046")),
        t("Aanpak","De bron adviseert bij psychische hyperventilatie bewust rustig te ademen en vooral langzaam en dieper uit te ademen. Hardop praten kan helpen het ademritme te vertragen; het doel is de ademhaling te normaliseren.",h(14,"§2.2.1"),cov("human-d047","human-d048")),
        q("Wat onderscheidt psychische hyperventilatie van fysiologische hyperventilatie?",["Er is geen extra lichamelijke zuurstofbehoefte die de versnelde ademhaling noodzakelijk maakt","Er wordt helemaal niet meer geademd","Het zuurstofpercentage van de buitenlucht stijgt","Alleen de bloeddruk daalt"],0,"Bij psychische hyperventilatie is de snelle/diepe ademhaling niet nodig voor de actuele stofwisseling.",h(14,"§2.2.1")),
        q("Welke aanpak noemt het dictaat bij psychische hyperventilatie?",["Bewust rustiger ademen en langer uitademen","Zo snel mogelijk blijven doorademen","De adem volledig inhouden tot klachten verdwijnen","Extra inspanning leveren"],0,"Normaliseren van het ademritme is de kern van de aanpak.",h(14,"§2.2.1")),
      ],
    },
  },
  {
    id:"human-decompression",title:"2.2 · Decompressieziekte",
    lesson:{
      id:"human-decompression",title:"Decompressieziekte",description:"Brongebonden leerlevel uit §2.2.1.",minScore:80,
      steps:[
        t("Ontstaan","Decompressieziekte kan ontstaan wanneer de omgevingsdruk in korte tijd sterk daalt en opgelost gas belletjes in het lichaam vormt. Snel stijgen naar grote hoogte vergroot het risico; recent diepzeeduiken kan het risico al op lagere vlieghoogte verhogen.",h(14,"§2.2.1",{dynamic:true,currentCheck:"Wachttijden na duiken, bloeddonatie, ziekte of medische behandeling zijn persoons- en situatieafhankelijk; volg actuele luchtvaartmedische richtlijnen en overleg bij twijfel met een bevoegde arts/AME."}),cov("human-d049","human-d050")),
        t("Herkennen en reageren","Het dictaat noemt gewrichtspijn als vroeg symptoom en later onder meer ernstige pijn en benauwdheid wanneer gasbelletjes andere weefsels bereiken. Bij verdenking op decompressieziekte is de onmiddellijke vluchtactie: dalen zodat de omgevingsdruk weer toeneemt. Na duiken of een episode met decompressiesymptomen noemt het dictaat een ruime herstelperiode voordat opnieuw gevlogen wordt; exacte medische wachttijden moeten actueel medisch worden beoordeeld.",h(14,"§2.2.1",{dynamic:true,currentCheck:"Wachttijden na duiken, bloeddonatie, ziekte of medische behandeling zijn persoons- en situatieafhankelijk; volg actuele luchtvaartmedische richtlijnen en overleg bij twijfel met een bevoegde arts/AME."}),cov("human-d051","human-d052","human-d053")),
        q("Welke combinatie past bij decompressieziekte?",["Snelle drukdaling, gasbelletjes en bij symptomen dalen","Hoge druk, extra zuurstof en stijgen","Alleen lage temperatuur en meer drinken","Alleen stress en sneller ademen"],0,"De wet van Henry verklaart gasbelvorming bij drukdaling; dalen verhoogt de druk weer.",h(14,"§2.2.1",{dynamic:true,currentCheck:"Wachttijden na duiken, bloeddonatie, ziekte of medische behandeling zijn persoons- en situatieafhankelijk; volg actuele luchtvaartmedische richtlijnen en overleg bij twijfel met een bevoegde arts/AME."})),
      ],
    },
  },
  {
    id:"human-circulation-blood",title:"2.2 · Bloedsomloop en bloed",
    lesson:{
      id:"human-circulation-blood",title:"Bloedsomloop en bloed",description:"Brongebonden leerlevel uit §2.2.1.",minScore:80,
      steps:[
        t("Hart en vaten","Het hart pompt bloed via slagaders naar organen en via aders terug naar het hart; haarvaten vormen de fijne uitwisseling tussen bloed en weefsel. De kleine bloedsomloop voert zuurstofarm bloed naar de longen en zuurstofrijk bloed terug; de grote bloedsomloop brengt zuurstofrijk bloed naar het lichaam.",h(15,"§2.2.1"),cov("human-d054","human-d055")),
        t("Bloedbestanddelen","Rode bloedcellen bevatten hemoglobine en zijn belangrijk voor zuurstoftransport. Witte bloedcellen spelen een rol bij afweer, bloedplaatjes bij stolling en bloedplasma bij transport van onder meer cellen, hormonen, zouten en voedingsstoffen.",h(15,"§2.2.1"),cov("human-d056","human-d057")),
        t("Bloeddruk en regeling","Systolische druk is de maximale slagaderdruk tijdens samentrekken van de linker hartkamer; diastolische druk is de lagere druk tussen twee slagen. Baroreceptoren in de hals bewaken de drukvoorziening richting hersenen en leveren informatie voor de regeling van de bloeddruk.",h(15,"§2.2.1"),cov("human-d058","human-d059")),
        match("Koppel bloedbestanddeel aan hoofdfunctie.",[{left:"Rode bloedcel",right:"zuurstoftransport via hemoglobine"},{left:"Witte bloedcel",right:"afweer"},{left:"Bloedplaatje",right:"stolling"},{left:"Bloedplasma",right:"transportmedium"}],"Het dictaat onderscheidt deze vier hoofdcomponenten.",h(15,"§2.2.1")),
        q("Wat is de systolische bloeddruk?",["De maximale slagaderdruk tijdens het samentrekken van de linker hartkamer","De druk in de longblaasjes","De minimale oogdruk","De luchtdruk op zeeniveau"],0,"Systolisch is de bovendruk.",h(15,"§2.2.1")),
      ],
    },
  },
  {
    id:"human-accelerations-g",title:"2.2 · Versnellingen en G-krachten",
    lesson:{
      id:"human-accelerations-g",title:"Versnellingen en G-krachten",description:"Brongebonden leerlevel uit §2.2.1.",minScore:80,
      steps:[
        t("Soorten versnelling","Het dictaat onderscheidt lineaire versnelling, hoekversnelling en centripetale versnelling als relevante vormen voor een zweefvlieger. In een gecoördineerde bocht neemt de belastingsfactor toe met de hellingshoek; bij ongeveer 60° helling is de ervaren belasting circa 2 g.",h(16,"§2.2.1"),cov("human-d060","human-d061")),
        t("Positieve en negatieve G","Bij negatieve G verplaatst bloed zich richting hoofd en kan een rode waas optreden. Bij positieve G verplaatst bloed zich richting voeten, waardoor minder bloed en zuurstof de hersenen en ogen bereikt. Bij toenemende positieve G noemt het dictaat achtereenvolgens tunnelvisie, grey-out, blackout en uiteindelijk G-LOC/bewusteloosheid.",h(16,"§2.2.1"),cov("human-d062","human-d063","human-d064")),
        t("G-tolerantie","Een goede lichamelijke conditie en training ondersteunen G-tolerantie. Vermoeidheid, alcohol en sommige medicijnen verminderen de tolerantie voor G-belasting.",h(16,"§2.2.1"),cov("human-d065","human-d066")),
        o("Zet de visuele effecten van toenemende positieve G in de volgorde uit het dictaat.",["Blackout","Tunnelvisie","Bewusteloosheid / G-LOC","Grey-out"],["Tunnelvisie","Grey-out","Blackout","Bewusteloosheid / G-LOC"],"Met toenemende positieve G neemt de bloedtoevoer naar ogen en hersenen verder af.",h(16,"§2.2.1")),
        q("Waarom kan positieve G tot bewusteloosheid leiden?",["Omdat de bloedtoevoer en daarmee zuurstoftoevoer naar de hersenen afneemt","Omdat de zuurstoffractie in de atmosfeer plots nul wordt","Omdat de pupil dichtgaat","Omdat het binnenoor stopt met werken"],0,"Het hart moet tegen de verhoogde effectieve zwaartekracht bloed naar het hoofd blijven pompen.",h(16,"§2.2.1")),
      ],
    },
  }
]
