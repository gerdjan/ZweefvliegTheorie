import type { SourcedUnit } from '../../domain/types'
import { cov, h, match, o, q, t } from '../humanFactory'

export const human225Units:SourcedUnit[]=[
  {
    id:"human-im-safe",title:"2.2 · I’M SAFE voor de vlucht",
    lesson:{
      id:"human-im-safe",title:"I’M SAFE voor de vlucht",description:"Brongebonden leerlevel uit §2.2.5.",minScore:80,
      steps:[
        t("De checklist","I’M SAFE staat voor Illness, Medication, Stress, Alcohol, Fatigue en Eating. De checklist is een persoonlijke fit-to-fly-controle: ziekte, medicijnen, stress, alcohol, vermoeidheid en onvoldoende eten/drinken kunnen de vliegveiligheid verminderen.",h(26,"§2.2.5"),cov("human-d112","human-d113")),
        t("Beslissen niet vliegen","Bij twijfel over ziekte of medicatie geldt in het dictaat: niet vliegen en zo nodig medisch advies vragen. De checklist is bedoeld als stopmoment vóór de vlucht en niet als excuus om symptomen tijdens de vlucht te negeren.",h(26,"§2.2.5"),cov("human-d114","human-d115")),
        match("Koppel de letters van I’M SAFE.",[{left:"I",right:"Illness"},{left:"M",right:"Medication"},{left:"S",right:"Stress"},{left:"A",right:"Alcohol"},{left:"F",right:"Fatigue"},{left:"E",right:"Eating"}],"De checklist helpt de eigen vliegfitheid systematisch te beoordelen.",h(26,"§2.2.5")),
        q("Wat is de juiste bedoeling van I’M SAFE?",["Voor de vlucht bewust beoordelen of je lichamelijk en mentaal fit bent","Na de vlucht beoordelen of het vliegtuig schade heeft","Alleen het weer controleren","Alleen de brandstofvoorraad controleren"],0,"Het is een persoonlijke fit-to-fly-check.",h(26,"§2.2.5")),
      ],
    },
  },
  {
    id:"human-alcohol-drugs-medicine",title:"2.2 · Alcohol, drugs en medicijnen",
    lesson:{
      id:"human-alcohol-drugs-medicine",title:"Alcohol, drugs en medicijnen",description:"Brongebonden leerlevel uit §2.2.5.",minScore:80,
      steps:[
        t("Alcohol en drugs","Alcohol vermindert waarneming, reactievermogen en besluitvorming; de nawerking kan ook aanwezig zijn wanneer het bloedalcoholgehalte alweer nul is. Soft- en harddrugs zijn volgens het dictaat onverenigbaar met zweefvliegen omdat reactietijd en beoordelingsvermogen worden aangetast. Lagere zuurstofdruk op hoogte kan ongewenste effecten van alcohol, drugs en sommige medicijnen versterken.",h(26,"§2.2.5",{pageEnd:27,dynamic:true,currentCheck:"Concrete wachttijden na medicatie, verdoving of behandeling zijn niet als vaste cursusregel betrouwbaar; volg actuele Part-MED/AME-richtlijnen."}),cov("human-d116","human-d117","human-d118")),
        t("Medicijnen","Slaapmiddelen, kalmerende middelen, zware pijnstillers en andere medicijnen kunnen alertheid en reactievermogen beïnvloeden. Vaste wachttijden uit oudere richtlijnen mogen niet als universele regel worden geleerd; beoordeel medicatie en hersteltijd volgens actuele luchtvaartmedische regels en bij twijfel met een arts/AME.",h(26,"§2.2.5",{pageEnd:27,dynamic:true,currentCheck:"Concrete wachttijden na medicatie, verdoving of behandeling zijn niet als vaste cursusregel betrouwbaar; volg actuele Part-MED/AME-richtlijnen."}),cov("human-d119","human-d120")),
        q("Waarom kan “ik voel me alweer nuchter” onvoldoende zijn voor een vliegentscheidung?",["Nawerking van alcohol kan prestaties nog beïnvloeden nadat het alcoholgehalte is gedaald","Alcohol verbetert altijd het nachtzien","Alleen de hoogtemeter wordt beïnvloed","Alcohol heeft alleen effect op gehoor"],0,"De bron waarschuwt expliciet voor nawerking en verminderde prestaties.",h(26,"§2.2.5",{pageEnd:27,dynamic:true,currentCheck:"Concrete wachttijden na medicatie, verdoving of behandeling zijn niet als vaste cursusregel betrouwbaar; volg actuele Part-MED/AME-richtlijnen."})),
        q("Wat is bij twijfel over een medicijn de veilige aanpak?",["Niet vliegen totdat actuele medische geschiktheid duidelijk is","Zelf een kortere wachttijd kiezen","Alleen extra koffie drinken","De dosis verdubbelen zodat het sneller werkt"],0,"Medicatie kan alertheid en reactievermogen beïnvloeden; medische regels zijn dynamisch.",h(26,"§2.2.5",{pageEnd:27,dynamic:true,currentCheck:"Concrete wachttijden na medicatie, verdoving of behandeling zijn niet als vaste cursusregel betrouwbaar; volg actuele Part-MED/AME-richtlijnen."})),
      ],
    },
  },
  {
    id:"human-hydration-nutrition",title:"2.2 · Eten, drinken en uitdroging",
    lesson:{
      id:"human-hydration-nutrition",title:"Eten, drinken en uitdroging",description:"Brongebonden leerlevel uit §2.2.5.",minScore:80,
      steps:[
        t("Hydratatie","Tijdens lange vluchten kan uitdroging ongemerkt ontstaan; de liggende zithouding kan het dorstsignaal minder opvallend maken. Vochtverlies kan vermoeidheid, misselijkheid, hoofdpijn, duizeligheid en temperatuurstijging veroorzaken. Regelmatig drinken vóór en tijdens de vlucht helpt de conditie te behouden; bij warm weer en transpiratie is meer vocht nodig.",h(27,"§2.2.5",{pageEnd:28}),cov("human-d121","human-d122","human-d123")),
        t("Voeding en spijsvertering","Voldoende en passend eten ondersteunt langdurige concentratie en prestaties. Maag-darmklachten door bedorven voedsel of besmet water kunnen door uitdroging, pijn en gasuitzetting op hoogte de vliegveiligheid aantasten. Bij relevante maag-darmklachten is niet vliegen de veilige keuze.",h(27,"§2.2.5",{pageEnd:28}),cov("human-d124","human-d125","human-d126")),
        q("Waarom is uitdroging tijdens een lange zweefvlucht gevaarlijk?",["Het kan vermoeidheid, duizeligheid en concentratieverlies veroorzaken","Het verhoogt automatisch de vleugelbelasting","Het maakt de radio stiller","Het voorkomt hypoxie"],0,"De bron koppelt vochtverlies aan zowel lichamelijke klachten als slechtere prestaties.",h(27,"§2.2.5",{pageEnd:28})),
      ],
    },
  },
  {
    id:"human-smoking-fitness",title:"2.2 · Roken, conditie en G/hypoxie",
    lesson:{
      id:"human-smoking-fitness",title:"Roken, conditie en G/hypoxie",description:"Brongebonden leerlevel uit §2.2.5.",minScore:80,
      steps:[
        t("Roken","Roken belast ademhalingssysteem, hart en bloedvaten en verlaagt de reserve om hypoxie en G-krachten op te vangen. Volgens het dictaat kunnen rokers op lagere hoogte eerder symptomen van zuurstofgebrek krijgen en slechter nachtzien.",h(28,"§2.2.5"),cov("human-d127","human-d128")),
        t("Conditie","Regelmatige lichaamsbeweging, gezond gewicht, gezonde voeding, voldoende ontspanning en niet roken verlagen het risico op hart- en vaatproblemen. Een goede algemene conditie ondersteunt ook de tolerantie voor belasting, stress en positieve G.",h(28,"§2.2.5"),cov("human-d129","human-d130")),
        q("Welke combinatie ondersteunt volgens het dictaat zowel algemene gezondheid als vliegprestaties?",["Regelmatig bewegen, gezond eten, niet roken en voldoende rust","Veel cafeïne, weinig slaap en roken","Alleen extra zuurstof gebruiken","Zo min mogelijk drinken"],0,"Het gezondheidsdeel benadrukt leefstijl als onderdeel van de veiligheidsmarge.",h(28,"§2.2.5")),
      ],
    },
  },
  {
    id:"human-fatigue",title:"2.2 · Vermoeidheid en oververmoeidheid",
    lesson:{
      id:"human-fatigue",title:"Vermoeidheid en oververmoeidheid",description:"Brongebonden leerlevel uit §2.2.5.",minScore:80,
      steps:[
        t("Tijdelijk versus chronisch","Gewone vermoeidheid na inspanning of een slechte nacht kan na voldoende herstel verdwijnen. Oververmoeidheid ontstaat na langer durende slaaptekorten, overbelasting, onregelmatige rust of stress en verdwijnt niet na één goede nacht.",h(28,"§2.2.5",{pageEnd:29}),cov("human-d131","human-d132")),
        t("Effect op vliegen","Vermoeidheid vermindert concentratie, alertheid en waarneming en vergroot de kans op vergissingen en illusies. Tijdens een lange vlucht neemt de reserve af terwijl de landing juist een taak met hoge werkbelasting is. Bij oververmoeidheid is langere rust nodig voordat opnieuw verantwoord gevlogen kan worden.",h(28,"§2.2.5",{pageEnd:29}),cov("human-d133","human-d134","human-d135")),
        q("Wat onderscheidt oververmoeidheid van gewone tijdelijke vermoeidheid?",["Oververmoeidheid verdwijnt niet na één goede nacht slapen","Oververmoeidheid verbetert altijd de concentratie","Gewone vermoeidheid is permanent","Er is geen verschil"],0,"Chronische overbelasting vraagt langer herstel.",h(28,"§2.2.5",{pageEnd:29})),
        q("Waarom is vermoeidheid extra relevant richting landing?",["De reserve kan laag zijn terwijl de taakbelasting juist hoog wordt","De luchtdruk wordt dan hoger dan op de grond","De vleugel produceert geen lift meer","De radio wordt automatisch uitgeschakeld"],0,"Het dictaat koppelt de afnemende reservecapaciteit aan de hoge eisen van de landing.",h(28,"§2.2.5",{pageEnd:29})),
      ],
    },
  }
]
