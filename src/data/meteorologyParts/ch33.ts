import type { SourcedUnit } from '../../domain/types'
import { cov, goals, m, match, n, o, q, study, t } from '../meteorologyFactory'

export const meteorology33Units:SourcedUnit[]=[
  {
    id:'meteo-3-3-1-1',title:'3.3 · Vochtigheid',
    lesson:{
      id:'meteo-3-3-1-1',title:'Vochtigheid',description:"Brongebonden leerlevel uit '§3.3.1 Vochtigheid'.",minScore:80,
      steps:[
        t('Waterdamp in atmosfeer · Maximale waterdamp temperatuurafhankelijk','De hoeveelheid waterdamp in lucht varieert sterk en is essentieel voor wolken en neerslag. De maximale hoeveelheid waterdamp die lucht kan bevatten neemt sterk toe met de temperatuur. Relatieve vochtigheid vergelijkt de aanwezige hoeveelheid waterdamp met de maximale hoeveelheid bij dezelfde temperatuur.',m(24,'§3.3.1 Vochtigheid',{pageEnd:25}),cov('meteo-d143','meteo-d144','meteo-d145')),
        t('Hygrometer · Dauwpunt','Relatieve vochtigheid kan met een hygrometer worden gemeten. Het dauwpunt is de temperatuur waarbij de lucht bij gelijkblijvende hoeveelheid waterdamp verzadigd raakt. Bij een relatieve vochtigheid van 100% is lucht verzadigd; verdere afkoeling kan condensatie veroorzaken.',m(24,'§3.3.1 Vochtigheid',{pageEnd:25}),cov('meteo-d146','meteo-d147','meteo-d148')),
        t('Condensatieniveau · Temperatuur-dauwpuntspreiding','Het condensatieniveau is de hoogte waarop stijgende lucht door afkoeling verzadigd raakt en wolkenvorming kan beginnen. Hoe kleiner het verschil tussen temperatuur en dauwpunt, hoe dichter de lucht bij verzadiging is.',m(24,'§3.3.1 Vochtigheid',{pageEnd:25}),cov('meteo-d149','meteo-d150')),
        q('Wat betekent relatieve vochtigheid?',['Verhouding tussen aanwezige en maximaal mogelijke waterdamp bij die temperatuur','De totale massa lucht per m³','De hoeveelheid regen per uur','Het dauwpunt minus de temperatuur'],0,'Relatieve vochtigheid vergelijkt actuele waterdamp met verzadiging bij dezelfde temperatuur.',m(24,'§3.3.1 Vochtigheid',{pageEnd:25}),cov(),goals('meteo-g24'),study(1,'3.3 vraag 1')),
        q('Waarvan hangt de maximale hoeveelheid waterdamp in lucht vooral af?',['Van de temperatuur','Alleen van windrichting','Alleen van luchtdruk op zeeniveau','Van magnetische variatie'],0,'Warme lucht kan volgens het dictaat meer waterdamp bevatten dan koude lucht.',m(24,'§3.3.1 Vochtigheid',{pageEnd:25}),cov(),goals('meteo-g25'),study(1,'3.3 vraag 2')),
        match('Koppel begrip aan definitie.',[{left:'Dauwpunt',right:'temperatuur waarbij lucht verzadigd raakt'},{left:'Condensatieniveau',right:'hoogte waar stijgende lucht verzadigd raakt'}],'Door afkoeling tijdens stijgen kan lucht bij het condensatieniveau het dauwpunt bereiken.',m(24,'§3.3.1 Vochtigheid',{pageEnd:25}),cov(),goals('meteo-g26'),study(1,'3.3 vraag 3')),
        q('Wat gebeurt er bij verdere afkoeling wanneer lucht 100% relatieve vochtigheid heeft bereikt?',['Condensatie kan beginnen','De lucht wordt automatisch droog','De luchtdruk wordt nul','Alle wolken lossen op'],0,'Verzadigde lucht kan bij verdere afkoeling waterdamp condenseren.',m(24,'§3.3.1 Vochtigheid',{pageEnd:25}),cov(),goals('meteo-g29'),study(1,'3.3 vraag 6')),
      ],
    },
  },
  {
    id:'meteo-3-3-2-1',title:'3.3 · Veranderingen van de aggregatietoestanden',
    lesson:{
      id:'meteo-3-3-2-1',title:'Veranderingen van de aggregatietoestanden',description:"Brongebonden leerlevel uit '§3.3.2 Veranderingen van de aggregatietoestanden').",minScore:80,
      steps:[
        t('Drie aggregatietoestanden · Smelten','Water komt voor als vaste stof, vloeistof en gas/waterdamp. Overgang van vast naar vloeibaar heet smelten en kost warmte. Overgang van vloeibaar naar vast heet bevriezen of stollen en geeft warmte vrij.',m(25,'§3.3.2 Veranderingen van de aggregatietoestanden'),cov('meteo-d151','meteo-d152','meteo-d153')),
        t('Verdampen · Condenseren','Overgang van vloeibaar naar gas heet verdampen en kost warmte. Overgang van gas naar vloeibaar heet condenseren en geeft warmte vrij. Een directe overgang van vast naar gas heet sublimatie/vervluchtiging.',m(25,'§3.3.2 Veranderingen van de aggregatietoestanden'),cov('meteo-d154','meteo-d155','meteo-d156')),
        t('Rijpen/depositie · Latente warmte beïnvloedt stijgende lucht','Een directe overgang van waterdamp naar ijs wordt in het dictaat als rijpen/depositie beschreven. Warmte die bij condensatie vrijkomt verklaart waarom verzadigde opstijgende lucht minder snel afkoelt dan droge lucht.',m(25,'§3.3.2 Veranderingen van de aggregatietoestanden'),cov('meteo-d157','meteo-d158')),
        match('Welke drie aggregatietoestanden van water worden behandeld?',[{left:'Vast',right:'ijs'},{left:'Vloeibaar',right:'water'},{left:'Gasvormig',right:'waterdamp'}],'Water kan in alle drie toestanden in de atmosfeer voorkomen.',m(25,'§3.3.2 Veranderingen van de aggregatietoestanden'),cov(),goals('meteo-g27'),study(1,'3.3 vraag 4')),
        match('Koppel proces aan warmte-effect.',[{left:'Verdampen',right:'kost warmte'},{left:'Condenseren',right:'geeft warmte vrij'},{left:'Bevriezen',right:'geeft warmte vrij'}],'Latente warmte is belangrijk voor wolken- en thermiekprocessen.',m(25,'§3.3.2 Veranderingen van de aggregatietoestanden'),cov(),goals('meteo-g28'),study(1,'3.3 vraag 5')),
      ],
    },
  },
  {
    id:'meteo-3-3-3-1',title:'3.3 · Adiabatische processen · deel 1',
    lesson:{
      id:'meteo-3-3-3-1',title:'Adiabatische processen · deel 1',description:"Brongebonden leerlevel uit '§3.3.3 Adiabatische processen'.",minScore:80,
      steps:[
        t('Adiabatisch proces · Drukdaling laat lucht uitzetten','Een adiabatisch proces verloopt zonder noemenswaardige warmte-uitwisseling met de omgeving; het dictaat gebruikt het opstijgen van een luchtbel als voorbeeld. Stijgende lucht komt in lagere druk, zet uit en koelt daardoor af. Onverzadigde stijgende lucht koelt ongeveer 1 °C per 100 m af.',m(25,'§3.3.3 Adiabatische processen',{pageEnd:34}),cov('meteo-d159','meteo-d160','meteo-d161')),
        t('Natadiabaat kleiner · Natadiabaat variabel','Verzadigde stijgende lucht koelt minder snel af; het dictaat gebruikt ongeveer 0,6 °C per 100 m als voorbeeldwaarde. De natadiabatische gradiënt is niet constant en hangt onder meer van temperatuur en druk af. Een atmosfeer is stabiel wanneer een verplaatste luchtbel de neiging heeft terug te keren of niet verder zelfstandig te stijgen.',m(25,'§3.3.3 Adiabatische processen',{pageEnd:34}),cov('meteo-d162','meteo-d163','meteo-d164')),
        t('Onstabiele atmosfeer · Indifferente atmosfeer','Een atmosfeer is onstabiel wanneer een opgetilde luchtbel warmer/licht blijft dan de omgeving en verder kan stijgen. Bij indifferent/neutral gedrag blijft een verplaatste luchtbel ongeveer in evenwicht met de omgeving. De toestandskromme geeft het werkelijke temperatuurverloop van de atmosfeer met de hoogte weer.',m(25,'§3.3.3 Adiabatische processen',{pageEnd:34}),cov('meteo-d165','meteo-d166','meteo-d167')),
        match('Koppel het begrip aan de betekenis.',[{left:'Toestandskromme',right:'werkelijk temperatuurverloop met hoogte'},{left:'Isothermie',right:'temperatuur blijft gelijk met hoogte'},{left:'Inversie',right:'temperatuur stijgt met hoogte'}],'Deze drie begrippen beschrijven het verticale temperatuurprofiel.',m(25,'§3.3.3 Adiabatische processen',{pageEnd:34}),cov(),goals('meteo-g04'),study(1,'3.1 vraag 4')),
        q('Waarom koelt een stijgende onverzadigde luchtbel af?',['Door uitzetting bij afnemende druk','Omdat zonlicht bovenin zwakker is','Door hogere luchtdichtheid','Alleen door verdamping van regen'],0,'Bij stijgen daalt de omgevingsdruk; de lucht zet uit en koelt adiabatisch af.',m(25,'§3.3.3 Adiabatische processen',{pageEnd:34}),cov(),goals('meteo-g05'),study(1,'3.1 vraag 5')),
        q('Wat betekent adiabatisch bij een stijgende luchtbel?',['Nauwelijks warmte-uitwisseling met omgeving; temperatuur verandert door uitzetting/samendrukking','Temperatuur blijft altijd constant','Lucht wisselt maximaal warmte uit','Alle waterdamp verdwijnt'],0,'De luchtbel koelt door uitzetting terwijl vrijwel geen warmte met de omgeving wordt uitgewisseld.',m(25,'§3.3.3 Adiabatische processen',{pageEnd:34}),cov(),goals('meteo-g31'),study(1,'3.3 vraag 8')),
        match('Koppel de gradiënt aan de orde van grootte uit het dictaat.',[{left:'Droogadiabaat',right:'ongeveer 1 °C/100 m'},{left:'Natadiabaat',right:'ongeveer 0,6 °C/100 m als voorbeeld'}],'Condensatiewarmte maakt de natadiabatische afkoeling kleiner.',m(25,'§3.3.3 Adiabatische processen',{pageEnd:34}),cov(),goals('meteo-g32'),study(1,'3.3 vraag 9')),
        q('Wanneer is een opgetilde luchtbel in beginsel onstabiel?',['Als hij warmer/licht blijft dan de omgeving en verder stijgt','Als hij altijd kouder is en terugzakt','Als temperatuur exact 0 °C is','Alleen wanneer er regen valt'],0,'Onstabiliteit betekent dat een verplaatsing zichzelf versterkt.',m(25,'§3.3.3 Adiabatische processen',{pageEnd:34}),cov(),goals('meteo-g33'),study(1,'3.3 vraag 10')),
      ],
    },
  },
  {
    id:'meteo-3-3-3-2',title:'3.3 · Adiabatische processen · deel 2',
    lesson:{
      id:'meteo-3-3-3-2',title:'Adiabatische processen · deel 2',description:"Brongebonden leerlevel uit '§3.3.3 Adiabatische processen'.",minScore:80,
      steps:[
        t('Vergelijk toestandskromme met adiabaat · Superadiabatische laag','Door toestandskromme en adiabaat te vergelijken kun je stabiliteit en mogelijke thermiekhoogte beoordelen. Een laag met een temperatuurafname groter dan ongeveer 1 °C per 100 m is superadiabatisch en zeer onstabiel. Sterke instraling kan direct boven een heet oppervlak een superadiabatische laag vormen.',m(25,'§3.3.3 Adiabatische processen',{pageEnd:34}),cov('meteo-d168','meteo-d169','meteo-d170')),
        t('Thermiektrigger · Thermiekbron ondergrond','Wind, obstakels en lokale verstoringen kunnen een warme luchtmassa losmaken en als thermiekbel laten opstijgen. Droge/donkere oppervlakken warmen vaak sneller op en zijn gunstiger thermiekbronnen dan water of natte vegetatie. Steden, verharde oppervlakken en industriële warmtebronnen kunnen thermische bronnen vormen.',m(25,'§3.3.3 Adiabatische processen',{pageEnd:34}),cov('meteo-d171','meteo-d172','meteo-d173')),
        t('Blauwe thermiek · Natte thermiek/cumulus','Als stijgende lucht het condensatieniveau niet bereikt, blijft de thermiek onzichtbaar: blauwe thermiek. Als de thermiek het condensatieniveau bereikt, kan cumulus ontstaan en wordt de thermiek zichtbaar. Boven het condensatieniveau komt latente warmte vrij, waardoor de stijgende lucht volgens de natadiabaat verder afkoelt.',m(25,'§3.3.3 Adiabatische processen',{pageEnd:34}),cov('meteo-d174','meteo-d175','meteo-d176')),
        q('Wat is een superadiabatische laag?',['Een laag waarin temperatuur sneller dan ongeveer 1 °C/100 m afneemt','Een laag met constante temperatuur','Een laag met uitsluitend sneeuw','Een laag boven de tropopauze'],0,'Sterk verhit oppervlak kan een zeer steile temperatuurgradiënt dicht bij de grond maken.',m(25,'§3.3.3 Adiabatische processen',{pageEnd:34}),cov(),goals('meteo-g34'),study(1,'3.3 vraag 11')),
        q('Wat verandert wanneer een stijgende thermiekbel het condensatieniveau bereikt?',['Wolk kan ontstaan en verdere afkoeling volgt de natadiabaat','De bel stopt altijd meteen','Alle waterdamp verdampt','De druk wordt 1013 hPa'],0,'Condensatie begint en latente warmte vermindert de verdere afkoeling.',m(25,'§3.3.3 Adiabatische processen',{pageEnd:34}),cov(),goals('meteo-g38'),study(1,'3.3 vraag 15')),
        match('Koppel factor aan bijdrage aan thermiek.',[{left:'Sterke instraling',right:'verwarmt het oppervlak'},{left:'Droge/donkere ondergrond',right:'kan snel opwarmen'},{left:'Trigger door wind/obstakel',right:'kan warme lucht losmaken'}],'Thermiek vraagt zowel opwarming als voldoende onstabiliteit en vaak een trigger.',m(25,'§3.3.3 Adiabatische processen',{pageEnd:34}),cov(),goals('meteo-g39'),study(1,'3.3 vraag 16')),
        q('Wat is blauwe thermiek?',['Thermiek die het condensatieniveau niet bereikt en dus geen cumulus vormt','Thermiek in blauwe lucht die altijd zwak is','Alleen golfstijgwind','Een onweersfase'],0,'Zonder condensatie blijft de stijgende lucht onzichtbaar.',m(25,'§3.3.3 Adiabatische processen',{pageEnd:34}),cov()),
      ],
    },
  },
  {
    id:'meteo-3-3-3-3',title:'3.3 · Adiabatische processen · deel 3',
    lesson:{
      id:'meteo-3-3-3-3',title:'Adiabatische processen · deel 3',description:"Brongebonden leerlevel uit '§3.3.3 Adiabatische processen'.",minScore:80,
      steps:[
        t('Wolkenontwikkeling lezen · Overontwikkeling','Scherpe, bloemkoolachtige randen wijzen op groei; rafelende/uitzakkende randen op afnemende ontwikkeling. Wanneer wolkenvorming sneller gaat dan oplossen kan bewolking uitbreiden, instraling afnemen en thermiek tijdelijk verzwakken. Nachtelijke uitstraling kan dicht bij het oppervlak een grondinversie vormen die ochtendthermiek aanvankelijk onderdrukt.',m(25,'§3.3.3 Adiabatische processen',{pageEnd:34}),cov('meteo-d177','meteo-d178','meteo-d179')),
        t('Inversie als thermiekdeksel · Condensatieniveau vuistregel','Een stabiele inversie op hoogte kan thermiek en cumulusontwikkeling afkappen. Het dictaat gebruikt voor wolkenbasis/condensatieniveau de vuistregel ongeveer (Tmax − Td) × 120 m. Het snijpunt van een vanaf de grondtemperatuur getrokken droogadiabaat met de toestandskromme geeft een indicatie van de maximale droge thermiekhoogte.',m(25,'§3.3.3 Adiabatische processen',{pageEnd:34}),cov('meteo-d180','meteo-d181','meteo-d182')),
        t('Wolkenbasis uit grafiek · Wolkenstraten','Als het condensatieniveau onder de maximale droge thermiekhoogte ligt, kan de thermiek cumulus vormen. Bij voldoende wind kunnen cumuli zich in ongeveer windparallelle straten organiseren met stijggebieden onder de straat en daalgebieden ertussen. Het dictaat noemt als orde van grootte een afstand tussen straten van circa 2,5 maal de thermiekhoogte.',m(25,'§3.3.3 Adiabatische processen',{pageEnd:34}),cov('meteo-d183','meteo-d184','meteo-d185')),
        q('Hoe ontstaat een typische grondinversie?',['Door nachtelijke uitstraling en afkoeling van de grond','Door maximale middagverwarming','Alleen door regen','Door de jetstream'],0,'De grond koelt ’s nachts af en koelt de lucht er direct boven.',m(25,'§3.3.3 Adiabatische processen',{pageEnd:34}),cov(),goals('meteo-g35'),study(1,'3.3 vraag 12')),
        q('Wat kan het snijpunt van een vanaf de grond getrokken droogadiabaat met de toestandskromme aangeven?',['Een indicatie van maximale droge thermiekhoogte','De windrichting op 10 m','Het QNH','De wolkencode OVC'],0,'De temperatuur van de stijgende luchtbel wordt daar gelijk aan die van de omgeving.',m(25,'§3.3.3 Adiabatische processen',{pageEnd:34}),cov(),goals('meteo-g36'),study(1,'3.3 vraag 13')),
        n('Bij een verwacht maximum van 24 °C en dauwpunt 14 °C: welke condensatiehoogte geeft de vuistregel (T − Td) × 120 m?',1200,'(24−14)×120 = 1200 m.',m(25,'§3.3.3 Adiabatische processen',{pageEnd:34}),cov(),goals('meteo-g37'),study(1,'3.3 vraag 14'),'m'),
      ],
    },
  },
  {
    id:'meteo-3-3-3-4',title:'3.3 · Adiabatische processen · deel 4',
    lesson:{
      id:'meteo-3-3-3-4',title:'Adiabatische processen · deel 4',description:"Brongebonden leerlevel uit '§3.3.3 Adiabatische processen'.",minScore:80,
      steps:[
        t('Wolkenstraten en inversie · Bergen adiabatisch loefzijde','Een inversie boven de convectielaag kan bijdragen aan georganiseerde wolkenstraten. Lucht die tegen een berg wordt opgetild koelt adiabatisch en kan condenseren/neerslag geven. Dalende lucht aan de lijzijde warmt droogadiabatisch op en wordt relatief droger.',m(25,'§3.3.3 Adiabatische processen',{pageEnd:34}),cov('meteo-d186','meteo-d187','meteo-d188')),
        q('Welke uitspraak past bij wolkenstraten en inversie?',['Een inversie boven de convectielaag kan bijdragen aan georganiseerde wolkenstraten.','Het dictaat stelt het tegenovergestelde zonder voorwaarden.','Dit begrip wordt alleen als navigatieterm gebruikt.','Dit verschijnsel heeft volgens het dictaat geen meteorologische betekenis.'],0,'Een inversie boven de convectielaag kan bijdragen aan georganiseerde wolkenstraten.',m(25,'§3.3.3 Adiabatische processen',{pageEnd:34}),cov()),
      ],
    },
  },
]
