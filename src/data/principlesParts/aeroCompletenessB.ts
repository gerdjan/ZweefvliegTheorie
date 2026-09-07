import type { SourcedUnit } from '../../domain/types'
import { b, q, t } from './helpers'

export const units:SourcedUnit[] = [
  {
    id:'principles-5-1-drag-detail',
    title:'5.1 · Verdieping: schadelijke, interferentie- en drukweerstand',
    lesson:{
      id:'principles-5-1-drag-detail',
      title:'Weerstand buiten de vleugel',
      description:'Schadelijke weerstand, interferentieweerstand en de vijf factoren die drukweerstand beïnvloeden.',
      minScore:80,
      steps:[
        t('Schadelijke of parasitaire weerstand','De onderdelen die niet aan de draagkracht bijdragen, zoals wiel, romp en verticaal staartstuk, veroorzaken volgens het dictaat schadelijke of parasitaire weerstand. Die kan worden verminderd met onder andere een intrekbaar wiel, gladde oppervlakken, het afplakken van naden en een aerodynamische vorm.',b(15,'§5.1.3 Schadelijke weerstand')),
        q('Welke maatregel noemt het dictaat om schadelijke weerstand te verkleinen?',['Gladde oppervlakken en naden afplakken','De vleugel expres vuil maken','De romp hoekiger maken','De spanwijdte tot nul verkleinen'],0,'De bron noemt onder andere gladde oppervlakken, afplakken, een intrekbaar wiel en een aerodynamische vorm.',b(15,'§5.1.3 Schadelijke weerstand')),
        t('Interferentieweerstand','Interferentieweerstand ontstaat door onderlinge beïnvloeding van luchtstromingen, bijvoorbeeld bij de overgang van romp naar vleugel. Het dictaat noemt afplakken van die overgang om lekkage en extra interferentieweerstand te beperken.',b(16,'§5.1.3 Interferentieweerstand')),
        t('Aanstromingsvlak','De drukweerstand is volgens de bron recht evenredig met de grootte van het aanstromingsvlak: een twee keer zo groot aanstromingsvlak geeft bij gelijke overige omstandigheden twee keer zoveel drukweerstand.',b(16,'§5.1.3.1 Drukweerstand: aanstromingsvlak')),
        t('Luchtdichtheid en drukweerstand','Bij gelijke temperatuur geeft een hogere luchtdichtheid meer drukweerstand. Met toenemende hoogte neemt de dichtheid af en daardoor ook de drukweerstand, waarbij de temperatuurdaling die afname volgens de bron gedeeltelijk tegenwerkt.',b(16,'§5.1.3.1 Drukweerstand: luchtdichtheid')),
        q('Wat gebeurt er volgens §5.1.3.1 met de drukweerstand wanneer de luchtdichtheid groter wordt en de overige factoren gelijk blijven?',['De drukweerstand wordt groter','De drukweerstand wordt altijd nul','Alleen de koorde verandert','De drukweerstand wordt onafhankelijk van de vorm'],0,'De bron noemt luchtdichtheid als één van de bepalende factoren voor drukweerstand.',b(16,'§5.1.3.1 Drukweerstand: luchtdichtheid')),
        t('Vorm: de druppelvorm','Van de getoonde vormen geeft de druppelvorm volgens het dictaat de minste drukweerstand; een vlakke plaat levert juist veel weerstand.',b(16,'§5.1.3.1 Drukweerstand: vorm')),
        t('Hoek en loslating','Hoe groter de hoek die een onderdeel met de aanstromende lucht maakt, hoe groter de drukweerstand. Zodra de luchtstroming loslaat, neemt de weerstand sterk toe.',b(16,'§5.1.3.1 Drukweerstand: hoek en loslating',17)),
        q('Welke combinatie vergroot volgens het dictaat de drukweerstand?',['Een grotere hoek met de aanstroming en stromingsloslating','Een gunstigere druppelvorm en kleinere hoek','Alleen een lagere luchtdichtheid','Alleen een kleiner aanstromingsvlak'],0,'De bron noemt een grotere aanstroomhoek en vooral loslating als oorzaken van meer drukweerstand.',b(16,'§5.1.3.1 Drukweerstand: hoek en loslating',17)),
      ],
    },
  },
  {
    id:'principles-5-1-boundary-induced-detail',
    title:'5.1 · Verdieping: grenslaag en geïnduceerde weerstand',
    lesson:{
      id:'principles-5-1-boundary-induced-detail',
      title:'Grenslaag en tipwervels in detail',
      description:'Factoren voor wrijvingsweerstand, omslagpunt, laminaire profielen, vervuiling, bugwipers en zogturbulentie.',
      minScore:80,
      steps:[
        t('Vier factoren voor wrijvingsweerstand','Het dictaat noemt vier factoren: de stromingsvorm in de grenslaag (laminair of turbulent), de oppervlakteruwheid, de luchtdichtheid en de luchtsnelheid.',b(17,'§5.1.3.2 Wrijvingsweerstand')),
        q('Welke factor hoort volgens het dictaat bij de wrijvingsweerstand?',['De stromingsvorm in de grenslaag','Alleen de grondsnelheid','Alleen de spanwijdte','De kleur van de cockpitkap'],0,'Stromingsvorm, oppervlakteruwheid, luchtdichtheid en luchtsnelheid vormen de vier genoemde factoren.',b(17,'§5.1.3.2 Wrijvingsweerstand')),
        t('Turbulente grenslaag geeft meer wrijving','De bron stelt dat een turbulente grenslaag ongeveer 5 tot 10 keer zoveel wrijvingsweerstand kan veroorzaken als een laminaire grenslaag. Daarom probeert men de grenslaag zo lang mogelijk laminair te houden.',b(17,'§5.1.3.2 Laminaire en turbulente grenslaag')),
        t('Waar ligt het omslagpunt?','De plaats waar een laminaire stroming turbulent wordt hangt volgens het dictaat af van luchtsnelheid, lichaamsvorm, oppervlakteruwheid en de stand van het profiel in de stroming.',b(18,'§5.1.3.2 Omslagpunt')),
        q('Welke vier invloeden noemt het dictaat voor de plaats van het omslagpunt?',['Luchtsnelheid, lichaamsvorm, oppervlakteruwheid en profielstand','Gewicht, radiofrequentie, QNH en koers','Alleen spanwijdte en kleur','Alleen luchtdichtheid en grondsnelheid'],0,'Deze vier factoren staan bij de uitleg van het omslagpunt in §5.1.3.2.',b(18,'§5.1.3.2 Omslagpunt')),
        t('Laminair profiel','Een laminair profiel heeft volgens het dictaat de grootste dikte ongeveer op 40 tot 50% van de koorde vanaf de voorrand. Het voordeel is lagere weerstand; een nadeel is dat de laminaire stroming gemakkelijker en abrupter kan loslaten.',b(18,'§5.1.3.2 Laminair profiel')),
        t('Ruwheid en vervuiling','Volgens de bron beïnvloedt een korrelhoogte kleiner dan ongeveer 0,02 mm het omslagpunt niet. Muggen/insecten, afplaktape, regendruppels en vuil kunnen het omslagpunt wel naar voren halen; vervuiling van de voorrand, vooral bovenop, is daarbij belangrijk.',b(18,'§5.1.3.2 Oppervlakteruwheid')),
        t('Bugwipers','Bugwipers worden gebruikt om tijdens de vlucht insecten van de voorrand te verwijderen en zo de nadelige invloed van vervuiling op de stroming en weerstand te beperken.',b(19,'§5.1.3.2 Bugwipers')),
        q('Waarvoor dienen bugwipers volgens het dictaat?',['Om insecten tijdens de vlucht van de voorrand te verwijderen','Om de waterballast te vullen','Om het richtingsroer te trimmen','Om de luchtdruk te meten'],0,'De bron noemt bugwipers expliciet als middel om insectenvervuiling van de voorrand tijdens de vlucht te verwijderen.',b(19,'§5.1.3.2 Bugwipers')),
        t('Zogturbulentie achter grote vliegtuigen','Het dictaat waarschuwt dat de zogturbulentie achter grote vliegtuigen altijd vermeden moet worden. De wervels zijn niet na enkele tellen weg en kunnen volgens de bron nog enkele minuten in de lucht blijven bestaan.',b(20,'§5.1.3.3 Zogturbulentie')),
        t('Een groot deel van de totale weerstand','Bij zweefvliegtuigen kan de geïnduceerde weerstand volgens het dictaat een aanzienlijk deel vormen: tot ongeveer 50% van de totale weerstand.',b(20,'§5.1.3.3 Geïnduceerde weerstand')),
        t('Spanwijdte helpt, maar heeft grenzen','De bron formuleert dat de geïnduceerde weerstand omgekeerd afneemt met toenemende spanwijdte. Een grotere spanwijdte heeft echter praktische grenzen: extra gewicht, minder wendbaarheid en grotere vleugelvervorming gaan volgens het dictaat een rol spelen.',b(20,'§5.1.3.3 Grotere spanwijdte')),
        q('Welke praktische nadelen van steeds grotere spanwijdte noemt het dictaat?',['Meer gewicht, minder wendbaarheid en meer vervorming van de vleugel','Altijd minder lift en nul weerstand','Een hogere standaardluchtdruk','Een kortere koorde is per definitie onmogelijk'],0,'Het dictaat noemt gewicht, afnemende wendbaarheid en vleugelvervorming als praktische grenzen aan steeds grotere spanwijdte.',b(20,'§5.1.3.3 Grotere spanwijdte')),
      ],
    },
  },
]
