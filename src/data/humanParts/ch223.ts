import type { SourcedUnit } from '../../domain/types'
import { cov, h, match, o, q, t } from '../humanFactory'

export const human223Units:SourcedUnit[]=[
  {
    id:"human-hearing",title:"2.2 · Gehoor en lawaai",
    lesson:{
      id:"human-hearing",title:"Gehoor en lawaai",description:"Brongebonden leerlevel uit §2.2.3.",minScore:80,
      steps:[
        t("Van geluid naar zenuwsignaal","Geluid bestaat uit druktrillingen in de lucht die via buitenoor en middenoor naar het binnenoor worden geleid. In het slakkenhuis worden trillingen omgezet in zenuwsignalen die via de gehoorzenuw naar de hersenen gaan.",h(21,"§2.2.3"),cov("human-d090","human-d091")),
        t("Bescherming","Langdurig of hard geluid kan Noise Induced Hearing Loss veroorzaken en dit gehoorverlies kan blijvend zijn. Gehoorbescherming vermindert de belasting; ook communicatie moet voldoende verstaanbaar blijven.",h(21,"§2.2.3"),cov("human-d092","human-d093")),
        q("Wat is Noise Induced Hearing Loss?",["Gehoorverlies door schadelijke blootstelling aan lawaai","Een tijdelijke visuele illusie","Een vorm van hypoxie","Een fout van de hoogtemeter"],0,"Het dictaat waarschuwt voor blijvende gehoorbeschadiging door lawaai.",h(21,"§2.2.3")),
      ],
    },
  },
  {
    id:"human-ear-pressure-balance",title:"2.2 · Drukvereffening en evenwichtsorgaan",
    lesson:{
      id:"human-ear-pressure-balance",title:"Drukvereffening en evenwichtsorgaan",description:"Brongebonden leerlevel uit §2.2.3.",minScore:80,
      steps:[
        t("Drukvereffening","De buis van Eustachius verbindt het middenoor met de keelholte en helpt drukverschillen over het trommelvlies te vereffenen. Slikken, gapen en zo nodig een Valsalva-manoeuvre kunnen drukvereffening ondersteunen. Bij verkoudheid, griep of ontsteking kan drukvereffening moeilijk of pijnlijk worden; dit is een reden om niet te vliegen wanneer je niet fit bent.",h(21,"§2.2.3",{pageEnd:22}),cov("human-d094","human-d095","human-d096")),
        t("Vestibulair systeem","De halfcirkelvormige kanalen registreren vooral hoekversnellingen van het hoofd. De otolietorganen reageren vooral op lineaire versnellingen en zwaartekracht.",h(21,"§2.2.3",{pageEnd:22}),cov("human-d097","human-d098")),
        match("Koppel onderdeel aan wat het vooral registreert.",[{left:"Halfcirkelvormige kanalen",right:"hoekversnelling"},{left:"Otolieten",right:"lineaire versnelling en zwaartekracht"},{left:"Buis van Eustachius",right:"drukvereffening middenoor"}],"Het gehoor- en evenwichtssysteem hebben verschillende maar naburige functies.",h(21,"§2.2.3",{pageEnd:22})),
        q("Waarom kan verkoudheid een vliegveiligheidsprobleem geven?",["Drukvereffening in het middenoor kan moeilijk worden","De zuurstoffractie in de lucht stijgt","De vleugelbelasting verdubbelt","De radiofrequentie verandert"],0,"Geblokkeerde verbindingen kunnen pijn en drukproblemen veroorzaken.",h(21,"§2.2.3",{pageEnd:22})),
      ],
    },
  }
]
