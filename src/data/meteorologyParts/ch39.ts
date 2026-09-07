import type { SourcedUnit } from '../../domain/types'
import { cov, goals, m, match, n, o, q, study, t } from '../meteorologyFactory'

export const meteorology39Units:SourcedUnit[]=[
  {
    id:'meteo-3-9-1-1',title:'3.9 · IJsvorming · deel 1',
    lesson:{
      id:'meteo-3-9-1-1',title:'IJsvorming · deel 1',description:"Brongebonden leerlevel uit '§3.9.1 IJsvorming'.",minScore:80,
      steps:[
        t('IJsafzetting door onderkoeld water · Rijpijs','IJsafzetting ontstaat wanneer onderkoelde waterdruppels op een vliegtuig botsen en bevriezen. Kleine druppels kunnen snel bevriezen en een ruw, witachtig rijpijs vormen. Grote onderkoelde druppels kunnen uitvloeien vóór bevriezing en helder/glad ijs vormen.',m(51,'§3.9.1 IJsvorming',{pageEnd:52}),cov('meteo-d322','meteo-d323','meteo-d324')),
        t('IJzel extreem gevaarlijk · IJs verstoort profiel','Bevriezende regen kan zeer snel ernstige heldere ijsafzetting veroorzaken. IJs verandert het vleugelprofiel en kan draagkracht verminderen en weerstand sterk verhogen. IJsafzetting verhoogt de massa van het vliegtuig.',m(51,'§3.9.1 IJsvorming',{pageEnd:52}),cov('meteo-d325','meteo-d326','meteo-d327')),
        t('IJs kan instrumenten blokkeren · IJs kan besturing hinderen','IJs kan pitot- en statische openingen of andere sensoren beïnvloeden. IJs kan bewegende delen en besturing hinderen. Het dictaat benadrukt dat een normaal zweefvliegtuig geen systeem heeft om ernstige ijsafzetting tijdens de vlucht te verwijderen.',m(51,'§3.9.1 IJsvorming',{pageEnd:52}),cov('meteo-d328','meteo-d329','meteo-d330')),
        match('Koppel ijsrisico aan gevolg.',[{left:'Vleugelprofiel',right:'meer weerstand en minder draagkracht'},{left:'Massa',right:'neemt toe'},{left:'Pitot/static of besturing',right:'kan blokkeren of hinderen'}],'IJsafzetting raakt aerodynamica, massa en systemen tegelijk.',m(51,'§3.9.1 IJsvorming',{pageEnd:52}),cov(),goals('meteo-g62'),study(2,'3.9 vraag 1')),
      ],
    },
  },
  {
    id:'meteo-3-9-1-2',title:'3.9 · IJsvorming · deel 2',
    lesson:{
      id:'meteo-3-9-1-2',title:'IJsvorming · deel 2',description:"Brongebonden leerlevel uit '§3.9.1 IJsvorming'.",minScore:80,
      steps:[
        t('Vermijden is hoofdmaatregel','Voor zweefvliegen is het vermijden van omstandigheden met ijsafzetting de primaire veiligheidsmaatregel.',m(51,'§3.9.1 IJsvorming',{pageEnd:52}),cov('meteo-d331')),
        q('Wat is de belangrijkste strategie voor een zweefvliegtuig bij voorspelde ernstige icing?',['De omstandigheden vermijden','IJs accepteren omdat het vanzelf loslaat','Sneller vliegen zonder limiet','In de wolk blijven'],0,'Een normaal zweefvliegtuig heeft geen volwaardig de-icing systeem; vermijden staat voorop.',m(51,'§3.9.1 IJsvorming',{pageEnd:52}),cov()),
      ],
    },
  },
  {
    id:'meteo-3-9-2-1',title:'3.9 · Turbulentie',
    lesson:{
      id:'meteo-3-9-2-1',title:'Turbulentie',description:"Brongebonden leerlevel uit '§3.9.2 Turbulentie'.",minScore:80,
      steps:[
        t('Turbulentie belast vliegtuig · Bronnen turbulentie','Turbulentie veroorzaakt plotselinge veranderingen in luchtsnelheid, invalshoek en belasting. Mechanische turbulentie, thermiek, rotor en windshear zijn belangrijke meteorologische bronnen. Lijzijde van bergen en rotorgebieden kunnen extreem turbulent zijn.',m(51,'§3.9.2 Turbulentie',{pageEnd:52}),cov('meteo-d332','meteo-d333','meteo-d334')),
        t('Turbulentie bij Cb · Passende snelheid','Onweerswolken en hun omgeving kunnen zeer sterke turbulentie bevatten. De geschikte turbulentiesnelheid en limieten zijn type-afhankelijk en komen uit het vlieghandboek; het dictaat waarschuwt voor te hoge snelheid in turbulentie. De veiligste strategie is sterke turbulentiegebieden zoals Cb, rotor en zware lijturbulentie te vermijden.',m(51,'§3.9.2 Turbulentie',{pageEnd:52}),cov('meteo-d335','meteo-d336','meteo-d337')),
        q('Welke uitspraak past bij turbulentie belast vliegtuig?',['Turbulentie veroorzaakt plotselinge veranderingen in luchtsnelheid, invalshoek en belasting.','Het dictaat stelt het tegenovergestelde zonder voorwaarden.','Dit begrip wordt alleen als navigatieterm gebruikt.','Dit verschijnsel heeft volgens het dictaat geen meteorologische betekenis.'],0,'Turbulentie veroorzaakt plotselinge veranderingen in luchtsnelheid, invalshoek en belasting.',m(51,'§3.9.2 Turbulentie',{pageEnd:52}),cov()),
      ],
    },
  },
  {
    id:'meteo-3-9-3-1',title:'3.9 · Windshear',
    lesson:{
      id:'meteo-3-9-3-1',title:'Windshear',description:"Brongebonden leerlevel uit '§3.9.3 Windshear'.",minScore:80,
      steps:[
        t('Windshear definitie · Verticaal en horizontaal','Windshear is een sterke verandering van windrichting en/of windsnelheid over een kleine afstand. Windshear kan zowel verticaal als horizontaal optreden. Onweer en downbursts zijn belangrijke bronnen van sterke windshear.',m(51,'§3.9.3 Windshear',{pageEnd:52}),cov('meteo-d338','meteo-d339','meteo-d340')),
        t('Fronten · Laag bij grond gevaarlijk','Actieve fronten kunnen windshear veroorzaken door scherpe overgang tussen luchtstromen. Windshear dicht bij de grond is extra gevaarlijk omdat snelheid en baanhoek snel veranderen terwijl weinig herstelhoogte beschikbaar is. Sterke windveranderingen, buienlijnen, frontsituaties en downburst-signalen zijn aanwijzingen om windshear te verwachten.',m(51,'§3.9.3 Windshear',{pageEnd:52}),cov('meteo-d341','meteo-d342','meteo-d343')),
        q('Wat is windshear?',['Sterke windverandering over kleine afstand','Alleen wind boven 50 kt','Een wolkentype','Een vaste drukgradiënt'],0,'Windshear kan richting én snelheid abrupt laten veranderen.',m(51,'§3.9.3 Windshear',{pageEnd:52}),cov(),goals('meteo-g63'),study(2,'3.9 vraag 2')),
      ],
    },
  },
  {
    id:'meteo-3-9-4-1',title:'3.9 · Onweer · deel 1',
    lesson:{
      id:'meteo-3-9-4-1',title:'Onweer · deel 1',description:"Brongebonden leerlevel uit '§3.9.4 Onweer'.",minScore:80,
      steps:[
        t('Onweer vereist diepe onstabiliteit · Cb als onweerswolk','Voor onweersontwikkeling is een diepe, onstabiele en vochtige luchtlaag nodig met voldoende liftmechanisme. Cumulonimbus is de karakteristieke onweerswolk. In de groeifase domineren krachtige stijgstromen en groeit de wolk snel verticaal.',m(51,'§3.9.4 Onweer',{pageEnd:54}),cov('meteo-d344','meteo-d345','meteo-d346')),
        t('Volwassen fase · Uitdooffase','In de volwassen fase zijn zowel sterke stijg- als daalstromen aanwezig en treden zware neerslag, hagel en bliksem op. In de uitdooffase domineren daalstromen en valt de wolk geleidelijk uiteen. De top spreidt zich bij de tropopauze vaak uit tot een aambeeld.',m(51,'§3.9.4 Onweer',{pageEnd:54}),cov('meteo-d347','meteo-d348','meteo-d349')),
        t('Sterke stijgstromen · Hagelcyclus','Het dictaat noemt stijgstromen tot circa 30 m/s in zware buien als orde van grootte. Hagel kan door herhaald transport in sterke op- en neerwaartse stromingen aangroeien. Een downburst is een sterke neerwaartse luchtstroom die bij de grond horizontaal uiteenstroomt.',m(51,'§3.9.4 Onweer',{pageEnd:54}),cov('meteo-d350','meteo-d351','meteo-d352')),
        o('Zet de levensfasen van een onweersbui in volgorde.',['Groeifase met vooral stijgstromen','Volwassen fase met stijg- én daalstromen','Uitdooffase met vooral daalstromen'],['Groeifase met vooral stijgstromen','Volwassen fase met stijg- én daalstromen','Uitdooffase met vooral daalstromen'],'De drie fasen verklaren de veranderende gevaren rond de bui.',m(51,'§3.9.4 Onweer',{pageEnd:54}),cov(),goals('meteo-g64'),study(2,'3.9 vraag 3')),
        match('Koppel buiengevaar aan verschijnsel.',[{left:'Downburst',right:'sterke neerwaartse stroom en windshear'},{left:'Hagel',right:'ernstige schade/icingrisico'},{left:'Zware regen',right:'sterke zichtvermindering'},{left:'Bliksem',right:'elektrische ontlading'}],'Cumulonimbus brengt meerdere gevaren tegelijk.',m(51,'§3.9.4 Onweer',{pageEnd:54}),cov(),goals('meteo-g66'),study(2,'3.9 vraag 5')),
        q('Wat is een downburst?',['Sterke neerwaartse luchtstroom die bij de grond uiteenstroomt','Een type cirrus','Een langdurig hogedrukgebied','Een drukinstelling'],0,'Downburst veroorzaakt sterke windstoten en windshear.',m(51,'§3.9.4 Onweer',{pageEnd:54}),cov()),
      ],
    },
  },
  {
    id:'meteo-3-9-4-2',title:'3.9 · Onweer · deel 2',
    lesson:{
      id:'meteo-3-9-4-2',title:'Onweer · deel 2',description:"Brongebonden leerlevel uit '§3.9.4 Onweer'.",minScore:80,
      steps:[
        t('Downburst windshear · Bliksem','De uiteenstromende lucht van een downburst veroorzaakt zeer sterke windshear en windstoten. Onweer brengt elektrische ontladingen en bliksem met zich mee; een inslag kan vliegtuigsystemen of constructie beïnvloeden. Intense regen of hagel kan zicht vrijwel wegnemen.',m(51,'§3.9.4 Onweer',{pageEnd:54}),cov('meteo-d353','meteo-d354','meteo-d355')),
        t('IJs in Cb · Turbulentie rond Cb','Grote hoeveelheden onderkoeld water en ijs maken Cb een ernstige icingomgeving. Ook buiten de zichtbare Cb kunnen sterke turbulentie en windstoten voorkomen. Het dictaat benadrukt onweer ruim te vermijden en vroegtijdig te landen wanneer buien de vliegveiligheid bedreigen.',m(51,'§3.9.4 Onweer',{pageEnd:54}),cov('meteo-d356','meteo-d357','meteo-d358')),
        t('Bronnoodadvies niet universeel · Warmteonweer','Het dictaat bevat noodadvies voor onverwacht wolkencontact; behandel dat niet als universele herstelprocedure en volg voor operationele procedures opleiding, actuele regels en typehandboek. Warmteonweer ontstaat door sterke lokale opwarming in een vochtige, onstabiele luchtmassa. Een front of trog kan op grotere schaal de opstijgbeweging leveren die onweersbuien organiseert.',m(51,'§3.9.4 Onweer',{pageEnd:54}),cov('meteo-d359','meteo-d360','meteo-d361')),
        q('Wat is een belangrijke ontstaansroute voor warmteonweer?',['Sterke lokale opwarming van vochtige, onstabiele lucht','Alleen een koude oceaan','Een isotherme stratosfeer','Alleen hoge druk en droge lucht'],0,'Sterke convectie kan in een vochtige onstabiele luchtmassa tot Cb/onweer uitgroeien.',m(51,'§3.9.4 Onweer',{pageEnd:54}),cov(),goals('meteo-g65'),study(2,'3.9 vraag 4')),
      ],
    },
  },
  {
    id:'meteo-3-9-5-1',title:'3.9 · Wervelwinden, waterhozen en stofduivels',
    lesson:{
      id:'meteo-3-9-5-1',title:'Wervelwinden, waterhozen en stofduivels',description:"Brongebonden leerlevel uit '§3.9.5 Wervelwinden.",minScore:80,
      steps:[
        t('Tornado · Windhoos','Een tornado is een zeer krachtige, roterende luchtkolom die uit een onweerswolk naar de grond reikt. Een windhoos is een roterende luchtkolom; in de praktijk wordt de term voor kleinere of lokale vortices gebruikt. Een waterhoos is een wervelwind boven water.',m(54,'§3.9.5 Wervelwinden, waterhozen en stofduivels'),cov('meteo-d362','meteo-d363','meteo-d364')),
        t('Stofduivel · Stofduivel zichtbaar door stof','Een stofduivel ontstaat bij sterke opwarming van de grond en lokale convectie, meestal bij helder weer. Op droge grond wordt een stofduivel zichtbaar doordat stof en los materiaal worden opgetild. Sterke wervelwinden veroorzaken abrupte wind- en verticale snelheidsveranderingen en zijn dicht bij de grond bijzonder gevaarlijk.',m(54,'§3.9.5 Wervelwinden, waterhozen en stofduivels'),cov('meteo-d365','meteo-d366','meteo-d367')),
        t('Vermijden','Zichtbare of gemelde sterke wervelwinden moeten ruim worden vermeden.',m(54,'§3.9.5 Wervelwinden, waterhozen en stofduivels'),cov('meteo-d368')),
        match('Koppel wervel aan omgeving.',[{left:'Waterhoos',right:'boven water'},{left:'Stofduivel',right:'sterk verwarmde droge ondergrond'},{left:'Tornado',right:'krachtige vortex vanuit onweerswolk naar de grond'}],'Deze vortices verschillen in ontstaansmechanisme en schaal.',m(54,'§3.9.5 Wervelwinden, waterhozen en stofduivels'),cov(),goals('meteo-g67'),study(2,'3.9 vraag 6')),
      ],
    },
  },
  {
    id:'meteo-3-9-6-1',title:'3.9 · Gevaren bij het vliegen in de bergen · deel 1',
    lesson:{
      id:'meteo-3-9-6-1',title:'Gevaren bij het vliegen in de bergen · deel 1',description:"Brongebonden leerlevel uit '§3.9.6 Gevaren bij het vliegen in de bergen'.",minScore:80,
      steps:[
        t('Terrein versterkt stijging · Fronten vertragen/versnellen door terrein','Bergen dwingen lucht omhoog, waardoor wolken en neerslag aan loefzijde kunnen versterken. Terrein kan frontpassages en neerslagpatronen lokaal sterk veranderen. Aan lijzijde kan sterke dalende lucht optreden.',m(54,'§3.9.6 Gevaren bij het vliegen in de bergen',{pageEnd:55}),cov('meteo-d369','meteo-d370','meteo-d371')),
        t('Rotor · Passen versnellen wind','Onder golf of achter een bergkam kan een rotor met zeer sterke turbulentie ontstaan. Wind kan in bergpassen sterk versnellen door terreinvernauwing. Golfstijgwind en lenticulariswolken zijn typische bergverschijnselen.',m(54,'§3.9.6 Gevaren bij het vliegen in de bergen',{pageEnd:55}),cov('meteo-d372','meteo-d373','meteo-d374')),
        t('IJsafzetting bergen · Vallei-inversie','Orografische bewolking kan bij temperaturen onder nul ernstige icingomstandigheden geven. Koude lucht kan zich in dalen verzamelen en een vallei-inversie vormen. Buien en lage bewolking kunnen routes door dalen snel blokkeren.',m(54,'§3.9.6 Gevaren bij het vliegen in de bergen',{pageEnd:55}),cov('meteo-d375','meteo-d376','meteo-d377')),
        match('Koppel bergverschijnsel aan plaats.',[{left:'Loefzijde',right:'gedwongen stijging, wolken/neerslag'},{left:'Lijzijde',right:'dalende lucht en rotor/turbulentie'},{left:'Pas',right:'wind kan sterk versnellen'}],'Terrein maakt wind en weer in bergen sterk plaatsafhankelijk.',m(54,'§3.9.6 Gevaren bij het vliegen in de bergen',{pageEnd:55}),cov(),goals('meteo-g68'),study(2,'3.9 vraag 7')),
      ],
    },
  },
  {
    id:'meteo-3-9-6-2',title:'3.9 · Gevaren bij het vliegen in de bergen · deel 2',
    lesson:{
      id:'meteo-3-9-6-2',title:'Gevaren bij het vliegen in de bergen · deel 2',description:"Brongebonden leerlevel uit '§3.9.6 Gevaren bij het vliegen in de bergen'.",minScore:80,
      steps:[
        t('Operationele bergmarges','Het dictaat geeft praktische snelheids-/afstandadviezen bij bergen; precieze operationele marges horen uit bergvliegopleiding, typehandboek en lokale procedures te komen.',m(54,'§3.9.6 Gevaren bij het vliegen in de bergen',{pageEnd:55}),cov('meteo-d378')),
        q('Welke uitspraak past bij operationele bergmarges?',['Het dictaat geeft praktische snelheids-/afstandadviezen bij bergen; precieze operationele marges horen uit bergvliegopleiding, typehandboek en lokale procedures te komen.','Het dictaat stelt het tegenovergestelde zonder voorwaarden.','Dit begrip wordt alleen als navigatieterm gebruikt.','Dit verschijnsel heeft volgens het dictaat geen meteorologische betekenis.'],0,'Het dictaat geeft praktische snelheids-/afstandadviezen bij bergen; precieze operationele marges horen uit bergvliegopleiding, typehandboek en lokale procedures te komen.',m(54,'§3.9.6 Gevaren bij het vliegen in de bergen',{pageEnd:55}),cov()),
      ],
    },
  },
  {
    id:'meteo-3-9-7-1',title:'3.9 · Verminderd zicht',
    lesson:{
      id:'meteo-3-9-7-1',title:'Verminderd zicht',description:"Brongebonden leerlevel uit '§3.9.7 Verminderd zicht'.",minScore:80,
      steps:[
        t('Neerslag vermindert zicht · Sneeuw vermindert oriëntatie','Regen en vooral zware neerslag verminderen horizontaal zicht. Sneeuw kan zicht en contrast sterk verminderen en een white-out-achtig beeld veroorzaken. Mist en nevel zijn directe oorzaken van verminderd zicht door waterdruppels.',m(55,'§3.9.7 Verminderd zicht',{pageEnd:56,dynamic:true,currentCheck:'Controleer wettelijke VMC/VFR-zichtminima tegen de actuele SERA/AIP; deze waarden kunnen wijzigen en horen niet alleen uit dit dictaat te worden gehaald.'}),cov('meteo-d379','meteo-d380','meteo-d381')),
        t('Rook en stof · Tegen de zon','Rook, stof en heiigheid verminderen zicht zonder dat sprake hoeft te zijn van mist. Laagstaande zon kan effectief zicht in de vliegrichting sterk verminderen. De exacte wettelijke VMC/VFR-zichtminima horen bij actuele luchtvaartregelgeving en AIP/SERA; het meteorologiedictaat is daarvoor niet de enige actuele bron.',m(55,'§3.9.7 Verminderd zicht',{pageEnd:56,dynamic:true,currentCheck:'Controleer wettelijke VMC/VFR-zichtminima tegen de actuele SERA/AIP; deze waarden kunnen wijzigen en horen niet alleen uit dit dictaat te worden gehaald.'}),cov('meteo-d382','meteo-d383','meteo-d384')),
        t('Vroegtijdig beslissen','Bij afnemend zicht is vroegtijdige route-aanpassing of landing belangrijker dan doorgaan tot wettelijke of praktische marges zijn opgebruikt.',m(55,'§3.9.7 Verminderd zicht',{pageEnd:56,dynamic:true,currentCheck:'Controleer wettelijke VMC/VFR-zichtminima tegen de actuele SERA/AIP; deze waarden kunnen wijzigen en horen niet alleen uit dit dictaat te worden gehaald.'}),cov('meteo-d385')),
        q('Welke uitspraak past bij neerslag vermindert zicht?',['Regen en vooral zware neerslag verminderen horizontaal zicht.','Het dictaat stelt het tegenovergestelde zonder voorwaarden.','Dit begrip wordt alleen als navigatieterm gebruikt.','Dit verschijnsel heeft volgens het dictaat geen meteorologische betekenis.'],0,'Regen en vooral zware neerslag verminderen horizontaal zicht.',m(55,'§3.9.7 Verminderd zicht',{pageEnd:56,dynamic:true,currentCheck:'Controleer wettelijke VMC/VFR-zichtminima tegen de actuele SERA/AIP; deze waarden kunnen wijzigen en horen niet alleen uit dit dictaat te worden gehaald.'}),cov()),
      ],
    },
  },
]
