import type { SourcedUnit } from '../../domain/types'
import { cov, h, match, o, q, t } from '../humanFactory'

export const human23Units:SourcedUnit[]=[
  {
    id:"human-psychology-chain",title:"2.3 · Psychologie en ongevalsketens",
    lesson:{
      id:"human-psychology-chain",title:"Psychologie en ongevalsketens",description:"Brongebonden leerlevel uit §2.3.",minScore:80,
      steps:[
        t("Psychologie in de luchtvaart","Luchtvaartpsychologie bestudeert hoe bewuste en onbewuste motieven, emoties, waarneming en gedachten het gedrag van vliegers beïnvloeden. Het doel is te begrijpen hoe vergissingen ontstaan en hoe ze door training, procedures en cultuur kunnen worden voorkomen.",h(29,"§2.3",{pageEnd:30}),cov("human-d136","human-d137")),
        t("Swiss-cheese-model","Een enkel foutje leidt volgens het dictaat zelden direct tot een ongeval; vaak is er een keten van meerdere omstandigheden en vergissingen. In het Zwitserse-gatenkaasmodel ontstaat een ongeval wanneer gaten in verschillende verdedigingslagen tegelijk op één lijn komen. Een extra controle, procedure, veilige cultuur of goede voorbereiding kan zo’n foutketen onderbreken.",h(29,"§2.3",{pageEnd:30}),cov("human-d138","human-d139","human-d140")),
        q("Wat laat het Zwitserse-gatenkaasmodel zien?",["Dat meerdere fouten en zwakke verdedigingslagen samen tot een ongeval kunnen leiden","Dat elk ongeval één enkele oorzaak heeft","Dat alleen technische fouten tellen","Dat regels geen veiligheidsfunctie hebben"],0,"De bron gebruikt het model om ketens van vergissingen en verdedigingslagen uit te leggen.",h(29,"§2.3",{pageEnd:30})),
        o("Zet het foutketenprincipe logisch op volgorde.",["Ongeval kan ontstaan","Meerdere gaten/vergissingen vallen samen","Verdedigingslagen bestaan","Een niet-onderbroken keten ontwikkelt zich"],["Verdedigingslagen bestaan","Meerdere gaten/vergissingen vallen samen","Een niet-onderbroken keten ontwikkelt zich","Ongeval kan ontstaan"],"Het doel van human factors is zoveel mogelijk schakels vroeg te onderbreken.",h(29,"§2.3",{pageEnd:30})),
      ],
    },
  },
  {
    id:"human-safety-culture",title:"2.3 · Veiligheidscultuur en vooruitdenken",
    lesson:{
      id:"human-safety-culture",title:"Veiligheidscultuur en vooruitdenken",description:"Brongebonden leerlevel uit §2.3.",minScore:80,
      steps:[
        t("Open cultuur","Van ongevallen, bijna-ongevallen en technische fouten kun je leren wanneer ze worden gemeld en besproken. Een veiligheidscultuur waardeert het melden van fouten met als doel ervan te leren in plaats van fouten uit schaamte te verbergen.",h(29,"§2.3",{pageEnd:30}),cov("human-d141","human-d142")),
        t("Verdedigingslagen in de club","Goede clubcultuur, veilige vliegtuigtypen, naleving van procedures, goed onderhoud, opleiding/training en een veilige houding van de vlieger vormen samen verdedigingslagen. Onderbreking van een checklist is een risico; de bron adviseert bij onderbreking de checklist opnieuw te beginnen. Vooruitdenken betekent vóór de start al bedenken wat je bij een kabelbreuk of andere afwijking zult doen.",h(29,"§2.3",{pageEnd:30}),cov("human-d143","human-d144","human-d145")),
        q("Wat past bij een gezonde veiligheidscultuur?",["Fouten en bijna-ongevallen bespreken om ervan te leren","Fouten verzwijgen om reputaties te beschermen","Alleen technische incidenten melden","Checklistonderbrekingen negeren"],0,"Een open meldcultuur maakt het mogelijk om verdedigingslagen te verbeteren.",h(29,"§2.3",{pageEnd:30})),
        q("Wat adviseert de bron als je tijdens een checklist wordt onderbroken?",["De checklist opnieuw beginnen","Verdergaan waar je denkt gebleven te zijn","De checklist overslaan","Alleen de laatste stap herhalen"],0,"Opnieuw beginnen voorkomt dat een stap ongemerkt wordt overgeslagen.",h(29,"§2.3",{pageEnd:30})),
      ],
    },
  },
  {
    id:"human-hazardous-attitudes",title:"2.3 · Riskante houdingen",
    lesson:{
      id:"human-hazardous-attitudes",title:"Riskante houdingen",description:"Brongebonden leerlevel uit §2.3.",minScore:80,
      steps:[
        t("Vijf riskante houdingen","De bron noemt vijf hazardous attitudes: anti-autoritair, impulsief, onkwetsbaar, macho en berusting. Deze houdingen vergroten de kans dat iemand bewust of onbewust meer risico neemt, vooral wanneer meerdere houdingen tegelijk spelen.",h(31,"§2.3"),cov("human-d146","human-d147")),
        t("Antidotes","Anti-autoritair wordt bestreden door te erkennen dat regels uit ervaring zijn ontstaan en ze na te leven. Impulsiviteit vraagt eerst denken en alternatieven afwegen voordat je handelt. Onkwetsbaarheid wordt gecorrigeerd door te erkennen dat het iedereen kan overkomen. Macho-gedrag vraagt grenzen niet op te zoeken om iets te bewijzen; berusting vraagt actief verantwoordelijkheid nemen en handelen.",h(31,"§2.3"),cov("human-d148","human-d149","human-d150","human-d151")),
        t("Prioriteiten","Bij hoge werkbelasting geldt de prioriteit AVIATE, NAVIGATE, COMMUNICATE: eerst het vliegtuig besturen, dan de vluchtweg regelen en pas daarna communiceren.",h(31,"§2.3"),cov("human-d152")),
        match("Koppel riskante houding aan tegenmaatregel.",[{left:"Anti-autoritair",right:"regels serieus nemen"},{left:"Impulsief",right:"eerst denken, dan doen"},{left:"Onkwetsbaar",right:"erkennen dat het iedereen kan overkomen"},{left:"Macho",right:"grenzen niet opzoeken om iets te bewijzen"},{left:"Berusting",right:"actief verantwoordelijkheid nemen"}],"De bron geeft bij elke hazardous attitude een bewust tegenantwoord.",h(31,"§2.3")),
        o("Wat is de juiste prioriteit bij hoge werkbelasting?",["COMMUNICATE","NAVIGATE","AVIATE"],["AVIATE","NAVIGATE","COMMUNICATE"],"Besturen en een veilige vluchtweg hebben voorrang op radioverkeer.",h(31,"§2.3")),
      ],
    },
  },
  {
    id:"human-information-process",title:"2.3 · Menselijk informatieproces",
    lesson:{
      id:"human-information-process",title:"Menselijk informatieproces",description:"Brongebonden leerlevel uit §2.3.1.",minScore:80,
      steps:[
        t("Van zintuig naar actie","Zintuigen leveren continu informatie die geselecteerd, geïnterpreteerd en in het geheugen verwerkt wordt voordat een beslissing en handeling volgen. Aandacht is beperkt; niet alle aangeboden informatie kan tegelijk bewust worden verwerkt.",h(32,"§2.3.1",{pageEnd:33}),cov("human-d153","human-d154")),
        t("Geheugen","Het dictaat onderscheidt een zeer kort sensorisch geheugen, een kortetermijn/werkgeheugen van seconden en een langetermijngeheugen. Ervaring en oefening verplaatsen veel handelingen naar goed ingesleten patronen, waardoor minder bewuste aandacht nodig is.",h(32,"§2.3.1",{pageEnd:33}),cov("human-d155","human-d156")),
        o("Zet het informatieproces in een logische volgorde.",["Handeling","Waarneming","Beslissing","Selectie/interpretatie"],["Waarneming","Selectie/interpretatie","Beslissing","Handeling"],"Informatie moet eerst worden waargenomen en geïnterpreteerd voordat bewust handelen volgt.",h(32,"§2.3.1",{pageEnd:33})),
        q("Waarom helpt routine bij eenvoudige vliegacties?",["Goed geoefende handelingen vragen minder bewuste aandacht","Routine vergroot altijd de werkbelasting","Routine voorkomt elke fout","Routine vervangt uitkijken"],0,"Automatisering maakt aandacht vrij, maar kan ook eigen fouttypen geven.",h(32,"§2.3.1",{pageEnd:33})),
      ],
    },
  },
  {
    id:"human-attention-perception",title:"2.3 · Aandacht en waarnemingsfouten",
    lesson:{
      id:"human-attention-perception",title:"Aandacht en waarnemingsfouten",description:"Brongebonden leerlevel uit §2.3.1.",minScore:80,
      steps:[
        t("Selectieve aandacht","Wat we waarnemen wordt beïnvloed door verwachtingen, eerdere ervaring, motivatie, stress en waar de aandacht op gericht is. Mensen kunnen informatie missen die wel zichtbaar of hoorbaar is wanneer de aandacht sterk op een andere taak is gericht.",h(32,"§2.3.1",{pageEnd:33}),cov("human-d157","human-d158")),
        t("Perceptie is interpretatie","Het brein vult waarnemingen aan met eerdere kennis; daardoor kunnen we patronen snel herkennen maar ook zien wat we verwachten te zien. Visuele illusies laten zien dat een overtuigende waarneming toch onjuist kan zijn.",h(32,"§2.3.1",{pageEnd:33}),cov("human-d159","human-d160")),
        q("Waarom kan een vlieger een zichtbaar risico toch missen?",["Aandacht is selectief en kan door een andere taak worden opgeslokt","Omdat het netvlies geen beweging kan waarnemen","Omdat ervaren vliegers geen perifere waarneming hebben","Omdat geluid altijd de ogen blokkeert"],0,"Beperkte aandacht en verwachtingen beïnvloeden wat uiteindelijk bewust wordt waargenomen.",h(32,"§2.3.1",{pageEnd:33})),
      ],
    },
  },
  {
    id:"human-decision-channel",title:"2.3 · Centrale besluitvormingskanaal",
    lesson:{
      id:"human-decision-channel",title:"Centrale besluitvormingskanaal",description:"Brongebonden leerlevel uit §2.3.2.",minScore:80,
      steps:[
        t("Eén bewuste hoofdtaak","Het centrale besluitvormingskanaal heeft een beperkte capaciteit; twee taken die allebei veel bewuste verwerking vragen kunnen elkaar sterk hinderen. Wanneer de werkbelasting te hoog wordt neemt de kans toe dat informatie wordt gemist, procedures worden vergeten of besluiten worden uitgesteld.",h(34,"§2.3.2"),cov("human-d161","human-d162")),
        t("Werkbelasting verlagen","Goede voorbereiding, een schoon en overzichtelijk cockpitbeeld, actuele informatie en vooraf gevouwen kaarten verminderen onnodige taken tijdens de vlucht. Automatiseer veel voorkomende veilige procedures door training, maar blijf controles gebruiken om fouten in routines te ontdekken.",h(34,"§2.3.2"),cov("human-d163","human-d164")),
        q("Wat gebeurt er als twee nieuwe, aandachtvragende taken tegelijk moeten worden uitgevoerd?",["Ze concurreren om beperkte bewuste verwerkingscapaciteit","De hersenen verdubbelen automatisch hun capaciteit","Beide worden altijd sneller uitgevoerd","Alleen het gehoor valt uit"],0,"Het centrale besluitvormingskanaal is een bottleneck bij hoge werkbelasting.",h(34,"§2.3.2")),
      ],
    },
  },
  {
    id:"human-situational-awareness",title:"2.3 · Situational awareness",
    lesson:{
      id:"human-situational-awareness",title:"Situational awareness",description:"Brongebonden leerlevel uit §2.3.2.",minScore:80,
      steps:[
        t("Weten wat er speelt","Situational awareness betekent weten waar je bent, wat het vliegtuig doet, wat er om je heen gebeurt en hoe de situatie waarschijnlijk verder ontwikkelt. Goede situational awareness vraagt informatie verzamelen, betekenis geven en vooruitdenken.",h(34,"§2.3.2"),cov("human-d165","human-d166")),
        t("Verlies voorkomen","Stress, vermoeidheid, afleiding en hoge werkbelasting kunnen situational awareness afbreken. Voorbereiding, uitkijken, controles, actuele weer- en operationele informatie en regelmatig het totaalbeeld opnieuw opbouwen helpen dit te voorkomen.",h(34,"§2.3.2"),cov("human-d167","human-d168")),
        q("Wat hoort bij situational awareness?",["Huidige situatie begrijpen én vooruitdenken hoe die zich kan ontwikkelen","Alleen je huidige hoogte kennen","Alleen radioverkeer onthouden","Alleen de kaartpositie weten"],0,"Het begrip omvat waarnemen, begrijpen en anticiperen.",h(34,"§2.3.2")),
      ],
    },
  },
  {
    id:"human-stress-arousal",title:"2.3 · Arousal en stress",
    lesson:{
      id:"human-stress-arousal",title:"Arousal en stress",description:"Brongebonden leerlevel uit §2.3.3.",minScore:80,
      steps:[
        t("Arousal","Arousal is de mate van paraatheid of activering van het lichaam en de geest. Te weinig arousal kan leiden tot verveling en lage alertheid; een gematigd niveau ondersteunt prestaties, terwijl te veel arousal/stress prestaties weer verslechtert.",h(34,"§2.3.3"),cov("human-d169","human-d170")),
        t("Acute stressreactie","Acute stress activeert het lichaam: hartslag, bloeddruk, ademhaling en beschikbaarheid van energie nemen toe. Deze reactie kan op korte termijn nuttig zijn, maar bij te hoge intensiteit ontstaan tunnelvisie, verkramping en slechtere besluitvorming.",h(34,"§2.3.3"),cov("human-d171","human-d172")),
        q("Wat beschrijft de relatie tussen arousal en prestaties het best?",["Een gematigd niveau is vaak gunstig; te weinig én te veel kunnen prestaties verslechteren","Hoe hoger de arousal, hoe beter altijd","Arousal heeft geen relatie met prestaties","Alleen lage arousal is gevaarlijk"],0,"Het dictaat beschrijft een optimum tussen onder- en overbelasting.",h(34,"§2.3.3")),
      ],
    },
  },
  {
    id:"human-stressors-cumulative",title:"2.3 · Stressoren en cumulatieve stress",
    lesson:{
      id:"human-stressors-cumulative",title:"Stressoren en cumulatieve stress",description:"Brongebonden leerlevel uit §2.3.3.",minScore:80,
      steps:[
        t("Stressoren","Stress kan worden veroorzaakt door lichamelijke, psychologische en omgevingsfactoren; verschillende stressoren kunnen tegelijk optreden. Stress is cumulatief: problemen thuis, werkdruk, slaaptekort en een moeilijke vliegsituatie tellen bij elkaar op.",h(35,"§2.3.3"),cov("human-d173","human-d174")),
        t("Acute en chronische stress","Acute stress is kortdurend en kan na herstel verdwijnen; chronische stress duurt langer en kan de beschikbare reserve geleidelijk uitputten. Chronische stress kan leiden tot langdurige vermoeidheid en een groter risico op fouten.",h(35,"§2.3.3"),cov("human-d175","human-d176")),
        q("Wat betekent dat stress cumulatief is?",["Stress uit verschillende bronnen kan zich opstapelen","Elke stressor heft de vorige op","Alleen vliegstress telt","Stress bestaat alleen tijdens een noodsituatie"],0,"De totale belasting is de som van meerdere bronnen, ook buiten het vliegveld.",h(35,"§2.3.3")),
      ],
    },
  },
  {
    id:"human-stress-symptoms-management",title:"2.3 · Stress herkennen en aanpakken",
    lesson:{
      id:"human-stress-symptoms-management",title:"Stress herkennen en aanpakken",description:"Brongebonden leerlevel uit §2.3.3.",minScore:80,
      steps:[
        t("Signalen van overbelasting","Het dictaat noemt onder meer hoofdpijn, slechter zien, hogere hartslag, snellere ademhaling, droge mond, zweten, gespannen spieren, misselijkheid en vaker toiletbezoek als mogelijke lichamelijke signalen. Psychologisch kunnen negatieve gedachten, prikkelbaarheid, concentratieverlies, nerveuze gewoonten en meer kleine fouten optreden.",h(36,"§2.3.3"),cov("human-d177","human-d178")),
        t("Aanpak","Ontspanning, rustige ademhaling, gezonder leven, regelmaat, voldoende slaap, een betere planning en positief oplossingsgericht denken zijn constructieve strategieën. Een stressdagboek kan helpen herkennen welke situaties terugkerend stress veroorzaken en hoe je daarop reageert. Alcohol, meer roken, drugs of ongericht medicijngebruik bestrijden hooguit symptomen en kunnen nieuwe veiligheidsproblemen veroorzaken.",h(36,"§2.3.3"),cov("human-d179","human-d180","human-d181")),
        match("Koppel aanpak aan type.",[{left:"Rustige ademhaling en ontspanning",right:"constructieve stressreductie"},{left:"Betere planning",right:"stressor of werkbelasting verkleinen"},{left:"Stressdagboek",right:"patronen herkennen"},{left:"Meer alcohol of drugs",right:"ongeschikte symptoombestrijding"}],"De bron maakt onderscheid tussen oorzaken aanpakken en ongezonde symptoombestrijding.",h(36,"§2.3.3")),
      ],
    },
  },
  {
    id:"human-srk-model",title:"2.3 · SRK-model van Rasmussen",
    lesson:{
      id:"human-srk-model",title:"SRK-model van Rasmussen",description:"Brongebonden leerlevel uit §2.3.4.",minScore:80,
      steps:[
        t("Skill-based","Skill-based gedrag bestaat uit sterk geoefende handelingen die grotendeels automatisch verlopen en weinig bewuste aandacht vragen. Skill-based fouten ontstaan onder meer door afleiding of een ingesleten routine die in de actuele situatie niet past.",h(36,"§2.3.4",{pageEnd:37}),cov("human-d182","human-d183")),
        t("Rule-based","Rule-based gedrag gebruikt bekende procedures of regels voor een herkenbare situatie. Rule-based fouten ontstaan wanneer de verkeerde regel wordt gekozen of een bekende procedure verkeerd wordt uitgevoerd.",h(36,"§2.3.4",{pageEnd:37}),cov("human-d184","human-d185")),
        t("Knowledge-based","Knowledge-based gedrag is nodig voor nieuwe problemen waarvoor geen passende routine of regel beschikbaar is; analyse en creatief denken zijn dan nodig. Een knowledge-based fout kan ontstaan door een verkeerde diagnose en vervolgens alleen informatie te zien die die eerste aanname bevestigt.",h(36,"§2.3.4",{pageEnd:37}),cov("human-d186","human-d187")),
        match("Koppel prestatieniveau aan voorbeeld.",[{left:"Skill-based",right:"routinehandeling grotendeels automatisch"},{left:"Rule-based",right:"bekende checklist of procedure toepassen"},{left:"Knowledge-based",right:"nieuwe oplossing bedenken voor onbekend probleem"}],"Rasmussen onderscheidt drie niveaus van menselijk handelen.",h(36,"§2.3.4",{pageEnd:37})),
        match("Koppel niveau aan typisch foutmechanisme.",[{left:"Skill-based",right:"afleiding of routine-slip"},{left:"Rule-based",right:"verkeerde regel/procedure"},{left:"Knowledge-based",right:"verkeerde diagnose en confirmation bias"}],"Elk niveau heeft een eigen foutprofiel.",h(36,"§2.3.4",{pageEnd:37})),
      ],
    },
  },
  {
    id:"human-training-automation",title:"2.3 · Training, automatisering en overload",
    lesson:{
      id:"human-training-automation",title:"Training, automatisering en overload",description:"Brongebonden leerlevel uit §2.3.4.",minScore:80,
      steps:[
        t("Van nieuw naar routine","Een beginnende vlieger voert veel taken knowledge-based uit; met oefening worden procedures rule-based en uiteindelijk kunnen delen skill-based worden. De instructeur moet bij nieuwe taken voorkomen dat te veel tegelijk wordt aangeboden, omdat dan overload ontstaat.",h(37,"§2.3.4"),cov("human-d188","human-d189")),
        t("Noodsituaties trainen","Veelvuldig en correct oefenen kan veilige noodprocedures zodanig automatiseren dat ze onder stress sneller beschikbaar zijn. Vermoeidheid en stress vergroten vooral de kans op fouten bij bewust rule-based en knowledge-based handelen, waardoor goed ingesleten veilige routines extra waardevol zijn.",h(37,"§2.3.4"),cov("human-d190","human-d191")),
        q("Waarom worden noodprocedures herhaald geoefend?",["Om correcte handelingen sneller en met minder bewuste belasting beschikbaar te maken","Om elke noodsituatie identiek te maken","Om uitkijken overbodig te maken","Om de regels te kunnen negeren"],0,"Training verschuift passende handelingen richting betrouwbaar routinegedrag.",h(37,"§2.3.4")),
      ],
    },
  }
]
