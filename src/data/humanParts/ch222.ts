import type { SourcedUnit } from '../../domain/types'
import { cov, h, match, o, q, t } from '../humanFactory'

export const human222Units:SourcedUnit[]=[
  {
    id:"human-eye-anatomy",title:"2.2 · Het oog: anatomie en functie",
    lesson:{
      id:"human-eye-anatomy",title:"Het oog: anatomie en functie",description:"Brongebonden leerlevel uit §2.2.2.",minScore:80,
      steps:[
        t("Lichtregeling en scherpstelling","Het hoornvlies en de lens helpen het beeld scherp op het netvlies te projecteren. De iris regelt via de pupil hoeveel licht het oog binnenkomt; bij veel licht vernauwt de pupil en in het donker verwijdt zij.",h(16,"§2.2.2",{pageEnd:17}),cov("human-d067","human-d068")),
        t("Netvlies en oogzenuw","Het netvlies bevat staafjes en kegeltjes die licht omzetten in zenuwsignalen. De gele vlek bevat vooral kegeltjes en ondersteunt scherp en kleurgevoelig centraal zien. Op de blinde vlek ontbreken lichtgevoelige cellen doordat daar de oogzenuw het oog verlaat.",h(16,"§2.2.2",{pageEnd:17}),cov("human-d069","human-d070","human-d071")),
        match("Koppel oogonderdeel aan functie.",[{left:"Iris/pupil",right:"hoeveelheid invallend licht regelen"},{left:"Lens/hoornvlies",right:"beeld scherpstellen"},{left:"Netvlies",right:"licht omzetten in zenuwsignalen"},{left:"Oogzenuw",right:"signalen naar de hersenen voeren"}],"Deze onderdelen vormen samen het optische en neurologische systeem van het oog.",h(16,"§2.2.2",{pageEnd:17})),
      ],
    },
  },
  {
    id:"human-rods-cones-depth",title:"2.2 · Staafjes, kegeltjes en diepte",
    lesson:{
      id:"human-rods-cones-depth",title:"Staafjes, kegeltjes en diepte",description:"Brongebonden leerlevel uit §2.2.2.",minScore:80,
      steps:[
        t("Kegeltjes en staafjes","Kegeltjes zijn belangrijk voor kleurwaarneming en hoge gezichtsscherpte; de bron onderscheidt gevoeligheid voor rood, groen en blauw. Staafjes zijn belangrijk voor zwart-witwaarneming, beweging en perifere waarneming en zijn relatief belangrijk bij weinig licht.",h(17,"§2.2.2"),cov("human-d072","human-d073")),
        t("Binoculair en dieptezien","Binoculair zien combineert informatie uit beide ogen; de kleine hoekverschillen ondersteunen dieptewaarneming dichtbij. Voor grotere afstanden gebruikt het brein ook ervaringssignalen zoals relatieve grootte en perspectief.",h(17,"§2.2.2"),cov("human-d074","human-d075")),
        match("Koppel receptor aan de sterkste rol.",[{left:"Kegeltjes",right:"kleur en scherp centraal zien"},{left:"Staafjes",right:"perifeer en weinig-licht zien"}],"De verdeling over het netvlies verklaart waarom gericht kijken en perifere scan elkaar aanvullen.",h(17,"§2.2.2")),
        q("Waarom helpt zien met twee ogen bij dieptewaarneming?",["Elk oog ziet het object onder een iets andere hoek","Beide ogen meten luchtdruk","De pupillen geven een afstandscijfer","De oogzenuwen draaien het hoofd"],0,"De hersenen combineren de twee enigszins verschillende beelden.",h(17,"§2.2.2")),
      ],
    },
  },
  {
    id:"human-visual-field-scan",title:"2.2 · Gezichtsveld en scan",
    lesson:{
      id:"human-visual-field-scan",title:"Gezichtsveld en scan",description:"Brongebonden leerlevel uit §2.2.2.",minScore:80,
      steps:[
        t("Centraal en perifeer zien","Centraal zien geeft de grootste scherpte in het gebied waarop je rechtstreeks fixeert; perifeer zien is belangrijk voor het opmerken van beweging buiten het centrum. De blinde vlek kan met één oog een klein deel van het beeld laten verdwijnen; met twee ogen wordt dit doorgaans door het andere oog gecompenseerd.",h(18,"§2.2.2"),cov("human-d076","human-d077")),
        t("Uitkijken","Effectief uitkijken vraagt een bewuste scan en korte fixaties in verschillende sectoren in plaats van langdurig staren op één punt. Een object dat als beweging in de periferie wordt opgemerkt, moet met centraal zien worden gecontroleerd om te bepalen wat het is.",h(18,"§2.2.2"),cov("human-d078","human-d079")),
        q("Welke scanmethode past het best bij het dictaat?",["De omgeving in sectoren afzoeken met korte fixaties","Langdurig op één punt voor de neus staren","Alleen instrumenten bekijken","Alleen met perifeer zicht identificeren wat je ziet"],0,"Perifeer zicht ontdekt beweging; centraal zicht wordt gebruikt om het object te identificeren.",h(18,"§2.2.2")),
      ],
    },
  },
  {
    id:"human-empty-field-night",title:"2.2 · Lege ruimte en nachtzien",
    lesson:{
      id:"human-empty-field-night",title:"Lege ruimte en nachtzien",description:"Brongebonden leerlevel uit §2.2.2.",minScore:80,
      steps:[
        t("Empty field myopia","Als er weinig visuele structuur of contrast is waarop het oog kan scherpstellen, kan het oog op een korte afstand blijven focussen: empty field myopia. Slecht zicht en een lege, egale achtergrond maken het daardoor moeilijker om verre objecten tijdig te ontdekken.",h(19,"§2.2.2"),cov("human-d080","human-d081")),
        t("Donkeradaptatie","Aanpassing aan het donker kost tijd; fel licht kan de opgebouwde donkeradaptatie snel verminderen. Bij nacht en weinig licht zijn staafjes belangrijker, zodat iets naast het centrum van de blik soms beter zichtbaar is dan bij rechtstreeks fixeren. Zuurstofgebrek en roken verslechteren volgens het dictaat het nachtzien.",h(19,"§2.2.2"),cov("human-d082","human-d083","human-d084")),
        q("Wat is empty field myopia?",["Het oog blijft bij weinig visuele aanknopingspunten te dichtbij focussen","Volledig verlies van kleurenzien","Een permanente beschadiging van het netvlies","Een storing in het evenwichtsorgaan"],0,"Een lege, contrastarme omgeving geeft het oog weinig houvast om op veraf scherp te stellen.",h(19,"§2.2.2")),
        q("Wat kan donkeradaptatie verstoren?",["Fel licht","Rustig scannen","Tijd in het donker","Perifeer kijken"],0,"Fel licht kan de gevoeligheid die in het donker is opgebouwd snel verminderen.",h(19,"§2.2.2")),
      ],
    },
  },
  {
    id:"human-visual-illusions",title:"2.2 · Visuele illusies bij nadering",
    lesson:{
      id:"human-visual-illusions",title:"Visuele illusies bij nadering",description:"Brongebonden leerlevel uit §2.2.2.",minScore:80,
      steps:[
        t("Illusies door baanvorm","Een ongewoon smalle landingsbaan kan verder weg of hoger doen lijken dan zij werkelijk is, waardoor de vlieger te laag kan gaan vliegen. Een ongewoon brede baan kan het tegenovergestelde effect geven en tot een te hoge nadering leiden.",h(19,"§2.2.2",{pageEnd:20}),cov("human-d085","human-d086")),
        t("Helling en atmosfeer","Een oplopende of aflopende landingsbaan kan de waargenomen naderingshoek vertekenen. Mist, neerslag, weinig contrast of een heldere atmosfeer kunnen afstand en hoogte verkeerd doen inschatten. De kernregel is dat een zintuiglijke indruk niet automatisch gelijk is aan de werkelijkheid; gebruik meerdere visuele aanwijzingen en een stabiel circuit.",h(19,"§2.2.2",{pageEnd:20}),cov("human-d087","human-d088","human-d089")),
        q("Wat is het gevaar van een ongewoon smalle landingsbaan?",["De baan kan verder weg lijken waardoor je te laag kunt naderen","De baan lijkt altijd dichterbij waardoor je te laag komt","De wind draait automatisch","De hoogtemeter stopt"],0,"De bron noemt baanbreedte als voorbeeld van een perspectiefillusie.",h(19,"§2.2.2",{pageEnd:20})),
      ],
    },
  }
]
