import type { Subject } from '../domain/types'

export const subjects: Subject[] = [
  {
    id: 'law', number: 1, title: 'Luchtvaartwetgeving', sourceFreshness: 'theorie december 2025',
    description: 'Internationale organisaties, luchtwaardigheid, SPL, SERA, luchtruim, AIS, vliegvelden en nationale regelgeving.',
    units: [
      { id:'law-1-1', title:'1.1 Internationale regelgeving', lesson:{ id:'law-1-1', title:'Internationale regelgeving', description:'ICAO, EU en de basis van internationale luchtvaartregels.', minScore:80, steps:[
        {type:'theory', title:'Waarom internationale regels?', text:'Luchtvaart is grensoverschrijdend. Daarom zijn internationale afspraken nodig over veiligheid, procedures en het gebruik van luchtruim.'},
        {type:'theory', title:'ICAO', text:'ICAO is de internationale burgerluchtvaartorganisatie van de Verenigde Naties en is gebaseerd op het Verdrag van Chicago.'},
        {type:'question', question:'Welke organisatie is de VN-organisatie voor internationale burgerluchtvaart?', answers:['ICAO','EASA','ILT','Eurocontrol'], correctIndex:0, explanation:'ICAO is de internationale burgerluchtvaartorganisatie binnen de Verenigde Naties.'},
        {type:'theory', title:'EU-regels', text:'Een EU-verordening werkt rechtstreeks. Een richtlijn verplicht lidstaten om regels in nationale wetgeving te verwerken.'},
        {type:'question', question:'Welke vorm van EU-wetgeving werkt rechtstreeks?', answers:['Een richtlijn','Een verordening','Een NOTAM','Een AIC'], correctIndex:1, explanation:'Een EU-verordening heeft rechtstreekse werking.'}
      ]}},
      {id:'law-1-2',title:'1.2 Luchtwaardigheid'},{id:'law-1-3',title:'1.3 Registratie'},{id:'law-1-4',title:'1.4 SPL & bevoegdheden'},
      {id:'law-1-5',title:'1.5 Luchtverkeersregels'},{id:'law-1-6',title:'1.6 VFR & operaties'},{id:'law-1-7',title:'1.7 Luchtruimstructuur'},
      {id:'law-1-8',title:'1.8 ATS & ATM'},{id:'law-1-9',title:'1.9 AIS / AIP / NOTAM'},{id:'law-1-10',title:'1.10 Vliegvelden'},
      {id:'law-1-11',title:'1.11 SAR'},{id:'law-1-12',title:'1.12 Security'},{id:'law-1-13',title:'1.13 Voorvallen'},{id:'law-1-14',title:'1.14 Nationale wetgeving'}
    ]
  },
  {
    id:'human', number:2, title:'Menselijke prestaties', sourceFreshness:'theorie december 2025',
    description:'Menselijke factoren, fysiologie, zien en evenwicht, psychologie, stress, besluitvorming en zuurstof.',
    units:[
      {id:'human-2-1',title:'2.1 Menselijke factoren',lesson:{id:'human-2-1',title:'Menselijke factoren',description:'Waarom menselijke beperkingen belangrijk zijn voor veilig vliegen.',minScore:80,steps:[
        {type:'theory',title:'Waarom dit vak?',text:'Menselijke prestaties behandelt de fysiologische en psychologische beperkingen van de vlieger.'},
        {type:'question',question:'Welke twee hoofdgebieden horen bij menselijke prestaties?',answers:['Fysiologie en psychologie','Aerodynamica en navigatie','Meteorologie en constructieleer','Radio en onderhoud'],correctIndex:0,explanation:'Het vak behandelt elementaire luchtvaartfysiologie en luchtvaartpsychologie.'},
        {type:'theory',title:'Recente ervaring',text:'Recente vliegervaring ondersteunt snelle en juiste beslissingen. Na een langere onderbreking hoort de vlieger extra voorzichtig te zijn.'},
        {type:'question',question:'Wat is een belangrijk effect van recente vliegervaring?',answers:['Sneller en beter beslissen in onverwachte situaties','Een hogere vleugelbelasting','Een grotere radiospreiding','Minder luchtdruk'],correctIndex:0,explanation:'Recente ervaring ondersteunt snelle en juiste beslissingen.'}
      ]}},
      {id:'human-2-2',title:'2.2 Luchtvaartfysiologie'},{id:'human-2-3',title:'2.3 Luchtvaartpsychologie'},{id:'human-2-4',title:'2.4 Gebruik van zuurstof'}
    ]
  },
  {
    id:'meteo', number:3, title:'Meteorologie', sourceFreshness:'theorie januari 2026 · studiehulp 2019',
    description:'Atmosfeer, wind, thermodynamica, wolken, neerslag, fronten, druksystemen, gevaren en meteo-informatie.',
    units:[
      {id:'meteo-3-1',title:'3.1 De atmosfeer',lesson:{id:'meteo-3-1',title:'De atmosfeer',description:'Samenstelling, troposfeer en hoogtemeterbegrippen.',minScore:80,steps:[
        {type:'theory',title:'Samenstelling',text:'Droge lucht bestaat ongeveer uit 78% stikstof, 21% zuurstof en 1% andere gassen. Daarnaast bevat lucht waterdamp.'},
        {type:'question',question:'Hoe is droge lucht ongeveer samengesteld?',answers:['78% stikstof, 21% zuurstof, 1% overige gassen','21% stikstof, 78% zuurstof, 1% waterdamp','50% stikstof, 50% zuurstof','78% zuurstof, 21% stikstof, 1% overige gassen'],correctIndex:0,explanation:'Het dictaat noemt ongeveer 78% stikstof, 21% zuurstof en 1% overige gassen.'},
        {type:'theory',title:'Troposfeer',text:'Het weer speelt zich voornamelijk af in de troposfeer.'},
        {type:'question',question:'In welke laag speelt het weer zich voornamelijk af?',answers:['Troposfeer','Stratosfeer','Mesosfeer','Thermosfeer'],correctIndex:0,explanation:'Het weer speelt zich voornamelijk af in de troposfeer.'}
      ]}},
      {id:'meteo-3-2',title:'3.2 Wind'},{id:'meteo-3-3',title:'3.3 Thermodynamica'},{id:'meteo-3-4',title:'3.4 Wolken & mist'},
      {id:'meteo-3-5',title:'3.5 Neerslag'},{id:'meteo-3-6',title:'3.6 Luchtmassa’s & fronten'},{id:'meteo-3-7',title:'3.7 Druksystemen'},
      {id:'meteo-3-8',title:'3.8 Klimatologie'},{id:'meteo-3-9',title:'3.9 Gevaarlijk weer'},{id:'meteo-3-10',title:'3.10 Meteo-informatie'}
    ]
  },
  {
    id:'comm', number:4, title:'Communicatie', sourceFreshness:'theorie december 2025',
    description:'VFR-communicatie, radio, transponder, procedures, weertermen, storingen en noodcommunicatie.',
    units:[
      {id:'comm-4-1',title:'4.1 Begrippen & transponder',lesson:{id:'comm-4-1',title:'Communicatiebegrippen',description:'VFR, VMC en meteorologische berichten.',minScore:80,steps:[
        {type:'theory',title:'VFR en VMC',text:'VFR staat voor Visual Flight Rules. VMC staat voor Visual Meteorological Conditions.'},
        {type:'question',question:'Waar staat VFR voor?',answers:['Visual Flight Rules','Verified Flight Radio','Vertical Flight Route','Visual Frequency Range'],correctIndex:0,explanation:'VFR staat voor Visual Flight Rules.'},
        {type:'theory',title:'METAR en TAF',text:'METAR is een actueel vliegveldweerrapport. TAF is een weersverwachting voor een vliegveld.'},
        {type:'question',question:'Welk bericht geeft het actuele weer op een vliegveld?',answers:['TAF','SIGMET','METAR','AIC'],correctIndex:2,explanation:'Een METAR is een actueel meteorologisch vliegveldrapport.'}
      ]}},
      {id:'comm-4-2',title:'4.2 VFR-communicatie'},{id:'comm-4-3',title:'4.3 Algemene procedures'},{id:'comm-4-4',title:'4.4 Weertermen'},
      {id:'comm-4-5',title:'4.5 Communicatiestoring'},{id:'comm-4-6',title:'4.6 Nood & spoed'},{id:'comm-4-7',title:'4.7 VHF & zweefvliegkanalen'}
    ]
  },
  {
    id:'principles', number:5, title:'Beginselen van het zweefvliegen', sourceFreshness:'theorie november 2025 · studiehulp 2018',
    description:'Aerodynamica, vliegmechanica, stabiliteit, besturing, belastingen, overtrek, vrille en spiraalduik.',
    units:[
      {id:'principles-5-0',title:'5.0 Begrippen en definities',lesson:{id:'principles-5-0',title:'Krachten, assen en hoeken',description:'De basisbegrippen waarop de aerodynamica voortbouwt.',minScore:80,steps:[
        {type:'theory',title:'Vier krachten',text:'De theorie onderscheidt draagkracht (lift), zwaartekracht, voortstuwingskracht en weerstand (drag).'},
        {type:'theory',title:'Drie assen',text:'De langsas loopt in de lengterichting, de dwarsas in de spanwijdterichting en de topas staat loodrecht op beide.'},
        {type:'question',question:'Welke beweging vindt plaats om de dwarsas?',answers:['Rollen','Gieren','Stampen','Slippen'],correctIndex:2,explanation:'Stampen is de rotatie om de dwarsas en wordt met het hoogteroer bestuurd.'},
        {type:'theory',title:'Invalshoek',text:'De invalshoek is de hoek tussen de vleugelkoorde en de langsstromende lucht.'},
        {type:'question',question:'Welke hoek is de hoek tussen vleugelkoorde en luchtstroom?',answers:['Instelhoek','Invalshoek','Pijlstelling','V-stelling'],correctIndex:1,explanation:'De invalshoek is de hoek tussen de vleugelkoorde en de luchtstroom.'}
      ]}},
      {id:'principles-5-1',title:'5.1 Aerodynamica'},{id:'principles-5-2',title:'5.2 Vliegmechanica'},{id:'principles-5-3',title:'5.3 Stabiliteit'},
      {id:'principles-5-4',title:'5.4 Besturing'},{id:'principles-5-5',title:'5.5 Beperkingen'},{id:'principles-5-6',title:'5.6 Overtrek & vrille'},{id:'principles-5-7',title:'5.7 Spiraalduik'}
    ]
  },
  {
    id:'ops', number:6, title:'Operationele procedures', sourceFreshness:'theorie december 2025',
    description:'Veiligheid op het veld, startmethoden, thermiek, circuit, landing, buitenlanding en noodprocedures.',
    units:[
      {id:'ops-6-1',title:'6.1 Algemene voorschriften',lesson:{id:'ops-6-1',title:'Veiligheid op het veld',description:'Basisregels voor een veilig vliegbedrijf.',minScore:80,steps:[
        {type:'theory',title:'Drie basisregels',text:'Kijk in alle richtingen uit, loop achter startende vliegtuigen langs en blijf uit de buurt van lierkabels.'},
        {type:'question',question:'Welke combinatie bevat de drie basisveiligheidsregels op het veld?',answers:['Uitkijken; achter startende vliegtuigen langs; uit de buurt van lierkabels','Alleen links en rechts kijken; vóór vliegtuigen langs; kabels vrijmaken','Instrumenten controleren; tegen de wind lopen; radio uit','Kap sluiten; remkleppen openen; vleugel laag houden'],correctIndex:0,explanation:'Het dictaat noemt precies deze drie basisregels.'},
        {type:'theory',title:'Dienstdoende Instructeur',text:'De DDI heeft de algemene leiding over het vliegbedrijf en is voor het geheel verantwoordelijk.'},
        {type:'question',question:'Wie heeft de algemene leiding over het vliegbedrijf?',answers:['De tijdschrijver','De tiploper','De Dienstdoende Instructeur','De kabelrijder'],correctIndex:2,explanation:'De Dienstdoende Instructeur heeft de algemene leiding.'}
      ]}},
      {id:'ops-6-2',title:'6.2 Startmethoden'},{id:'ops-6-3',title:'6.3 Thermiek & bergen'},{id:'ops-6-4',title:'6.4 Circuit & landing'},
      {id:'ops-6-5',title:'6.5 Buitenlanding'},{id:'ops-6-6',title:'6.6 Speciale procedures'},{id:'ops-6-7',title:'6.7 Noodprocedures'},{id:'ops-6-8',title:'6.8 Parachute'}
    ]
  },
  {
    id:'perf', number:7, title:'Vliegprestaties & vluchtplanning', sourceFreshness:'theorie december 2025',
    description:'Massa en zwaartepunt, snelheidspolaires, reissnelheid, final glide, taakstelling en vliegplanning.',
    units:[
      {id:'perf-7-1',title:'7.1 Massa & zwaartepunt',lesson:{id:'perf-7-1',title:'Massa en zwaartepunt',description:'De grenzen die voor iedere start gecontroleerd moeten worden.',minScore:80,steps:[
        {type:'theory',title:'Voor iedere start',text:'Controleer of massa én zwaartepunt binnen de grenzen uit het vlieghandboek en het actuele weegrapport liggen.'},
        {type:'theory',title:'Achterlijk zwaartepunt',text:'Een te achterlijk zwaartepunt vermindert de stabiliteit en kan het vliegtuig onbestuurbaar maken.'},
        {type:'question',question:'Wat is een belangrijk gevaar van een te achterlijk zwaartepunt?',answers:['Het vliegtuig wordt te stabiel','Het vliegtuig kan onbestuurbaar worden','Alleen de radio werkt slechter','De vleugelbelasting wordt nul'],correctIndex:1,explanation:'Een te achterlijk zwaartepunt verlaagt de stabiliteit en kan tot onbestuurbaarheid leiden.'},
        {type:'question',question:'Wat geeft een snelheidspolaire weer?',answers:['Daalsnelheid bij verschillende vliegsnelheden','Alleen de maximaal toegestane snelheid','Windrichting op verschillende hoogtes','De positie van het zwaartepunt'],correctIndex:0,explanation:'Een snelheidspolaire geeft de daalsnelheid bij verschillende vliegsnelheden weer.'}
      ]}},
      {id:'perf-7-2',title:'7.2 Polaire & reissnelheid'},{id:'perf-7-3',title:'7.3 Vluchtplanning'},{id:'perf-7-4',title:'7.4 ICAO-vliegplan'},{id:'perf-7-5',title:'7.5 In-flight replanning'}
    ]
  },
  {
    id:'aircraft', number:8, title:'Algemene kennis zweefvliegtuig', sourceFreshness:'theorie v2.0 · studiehulp 2018',
    description:'Constructies, belastingen, onderstel, balans, roeren, instrumenten, montage, documenten, onderhoud en systemen.',
    units:[
      {id:'aircraft-8-1',title:'8.1 Constructies',lesson:{id:'aircraft-8-1',title:'Samenstellende delen',description:'Vleugels, staart, romp en roeren.',minScore:80,steps:[
        {type:'theory',title:'Staart',text:'Het verticale kielvlak draagt bij aan richtingsstabiliteit; het horizontale stabilo aan langsstabiliteit.'},
        {type:'question',question:'Welk onderdeel draagt primair bij aan langsstabiliteit om de dwarsas?',answers:['Het kielvlak','Het stabilo','Het hoofdwiel','De remklep'],correctIndex:1,explanation:'Het horizontale stabilo zorgt voor langsstabiliteit om de dwarsas.'},
        {type:'theory',title:'Roeren',text:'Hoogteroer: stampen. Richtingsroer: gieren. Rolroeren: rollen.'},
        {type:'question',question:'Welke roeren besturen de beweging om de langsas?',answers:['Rolroeren','Hoogteroer','Richtingsroer','Remkleppen'],correctIndex:0,explanation:'Rolroeren besturen het rollen om de langsas.'}
      ]}},
      {id:'aircraft-8-2',title:'8.2 Belastingen & spanning'},{id:'aircraft-8-3',title:'8.3 Onderstel & remmen'},{id:'aircraft-8-4',title:'8.4 Gewicht & balans'},
      {id:'aircraft-8-5',title:'8.5 Stuurorganen'},{id:'aircraft-8-6',title:'8.6 Instrumenten'},{id:'aircraft-8-7',title:'8.7 Montage'},{id:'aircraft-8-8',title:'8.8 Handboeken & documenten'},
      {id:'aircraft-8-9',title:'8.9 Luchtwaardigheid'},{id:'aircraft-8-10',title:'8.10 Motoren & propellers'},{id:'aircraft-8-11',title:'8.11 Waterballast'},
      {id:'aircraft-8-12',title:'8.12 Batterijen'},{id:'aircraft-8-13',title:'8.13 Parachutes'},{id:'aircraft-8-14',title:'8.14 Nooduitstap'}
    ]
  },
  {
    id:'nav', number:9, title:'Navigatie', sourceFreshness:'theorie november 2025 · studiehulp 2019',
    description:'Coördinaten, koers, kompas, kaarten, luchtruim, dead reckoning, GNSS en ATS.',
    units:[
      {id:'nav-9-1',title:'9.1 Basisnavigatie',lesson:{id:'nav-9-1',title:'Coördinaten en richting',description:'Breedte, lengte, afstanden, variatie en deviatie.',minScore:80,steps:[
        {type:'theory',title:'Coördinaten',text:'Plaatsen worden vastgelegd met breedte en lengte. Eerst wordt de breedte genoemd, daarna de lengte.'},
        {type:'theory',title:'Afstand',text:'Eén graad breedte is 60 NM. Eén minuut breedte is 1 NM, oftewel 1852 meter.'},
        {type:'question',question:'Hoeveel nautical mile komt overeen met één minuut breedte?',answers:['0,5 NM','1 NM','10 NM','60 NM'],correctIndex:1,explanation:'Een graad breedte is 60 NM en bevat 60 minuten; één minuut breedte is dus 1 NM.'},
        {type:'theory',title:'Variatie en deviatie',text:'Variatie is de hoek tussen waar noorden en magnetisch noorden. Deviatie is de kompasafwijking door invloeden in het vliegtuig.'},
        {type:'question',question:'Hoe heet de hoek tussen waar noorden en magnetisch noorden?',answers:['Deviatie','Variatie','Inclinatie','Drift'],correctIndex:1,explanation:'Variatie is de hoek tussen waar noorden en magnetisch noorden.'}
      ]}},
      {id:'nav-9-2',title:'9.2 Magnetisme & kompassen'},{id:'nav-9-3',title:'9.3 Vliegkaarten'},{id:'nav-9-4',title:'9.4 Dead reckoning'},
      {id:'nav-9-5',title:'9.5 In-flight navigatie'},{id:'nav-9-6',title:'9.6 GNSS'},{id:'nav-9-7',title:'9.7 ATS'}
    ]
  }
]
