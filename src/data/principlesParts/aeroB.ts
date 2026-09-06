import type { SourcedUnit } from '../../domain/types'
import { b, q, study, t } from './helpers'

export const units:SourcedUnit[] = [
    {
      id:'principles-5-1-lift-formula',
      title:'5.1 · De liftformule',
      lesson:{
        id:'principles-5-1-lift-formula',
        title:'De liftformule',
        description:'De vijf factoren samengebracht in één formule.',
        minScore:80,
        steps:[
          t('Formule','Het dictaat schrijft de draagkracht als L = CL · ½ρV² · S.',b(14,'§5.1.2 De liftformule')),
          t('Betekenis symbolen','L is lift in newton, CL de liftcoëfficiënt, ρ de luchtdichtheid, V de luchtsnelheid en S het vleugeloppervlak.',b(14,'§5.1.2 De liftformule')),
          q('Welke grootheid staat in de liftformule in het kwadraat?',['Luchtdichtheid ρ','Vleugeloppervlak S','Luchtsnelheid V','Liftcoëfficiënt CL'],2,'De formule bevat V².',b(14,'§5.1.2 De liftformule'),study(1,'§5.1.1/5.1.2 Draagkracht')),
          t('CL en invalshoek','CL hangt af van de invalshoek en de eigenschappen van het vleugelprofiel. Bij gelijk gewicht en oppervlak moet een verandering van CL samengaan met een passende verandering van snelheid.',b(14,'§5.1.2 Liftcoëfficiënt',15)),
          q('Wat bepaalt volgens het dictaat de liftcoëfficiënt CL?',['Alleen de grondsnelheid','Invalshoek en eigenschappen van het vleugelprofiel','Alleen de spanwijdte','Alleen het vliegtuiggewicht'],1,'CL is afhankelijk van de invalshoek en de eigenschappen van de profielvorm.',b(14,'§5.1.2 Liftcoëfficiënt'),study(1,'§5.1.1/5.1.2 Draagkracht')),
          t('Hoogteroer en snelheid','Het dictaat benadrukt dat het hoogteroer in aerodynamische zin de invalshoek beïnvloedt en daarmee, via CL en het evenwicht van krachten, de vliegsnelheid.',b(15,'§5.1.2 Conclusie liftformule')),
        ],
      },
    },
    {
      id:'principles-5-1-drag-types',
      title:'5.1 · Weerstand en drukweerstand',
      lesson:{
        id:'principles-5-1-drag-types',
        title:'Weerstand en drukweerstand',
        description:'Waar totale weerstand uit bestaat en waarom vorm en snelheid ertoe doen.',
        minScore:80,
        steps:[
          t('Weerstand minimaliseren','Zweefvliegtuigen worden glad, schoon en goed afgeplakt gehouden omdat weerstand de prestaties direct verslechtert.',b(15,'§5.1.3 De weerstand')),
          t('Soorten weerstand','Het dictaat bespreekt profielweerstand, rest-/schadelijke weerstand, interferentieweerstand en geïnduceerde weerstand. Profiel- en restweerstand bevatten druk- en wrijvingsweerstand.',b(15,'§5.1.3 De weerstand',16)),
          q('Welke twee onderdelen vormen volgens het dictaat zowel profielweerstand als restweerstand?',['Drukweerstand en wrijvingsweerstand','Alleen geïnduceerde weerstand en zwaartekracht','Liftweerstand en rolweerstand','Thermiekweerstand en remousweerstand'],0,'Profielweerstand en restweerstand bestaan uit druk- en wrijvingsweerstand.',b(16,'§5.1.3 De weerstand'),study(1,'§5.1.3 Weerstand')),
          t('Drukweerstand','Druk- of vormweerstand ontstaat doordat lucht tegen een onderdeel botst en er een drukverschil tussen voor- en achterzijde ontstaat.',b(16,'§5.1.3.1 Drukweerstand')),
          t('Snelheid in het kwadraat','De drukweerstand neemt volgens het dictaat met het kwadraat van de luchtsnelheid toe.',b(16,'§5.1.3.1 Drukweerstand')),
          q('Als de luchtsnelheid verdubbelt en de overige factoren gelijk blijven, wat gebeurt er met de drukweerstand?',['Die halveert','Die verdubbelt','Die wordt vier keer zo groot','Die blijft gelijk'],2,'Drukweerstand is in het dictaat evenredig met V².',b(16,'§5.1.3.1 Drukweerstand'),study(1,'§5.1.3 Weerstand')),
        ],
      },
    },
    {
      id:'principles-5-1-boundary-layer',
      title:'5.1 · Grenslaag en wrijvingsweerstand',
      lesson:{
        id:'principles-5-1-boundary-layer',
        title:'Grenslaag en wrijvingsweerstand',
        description:'Laminair, turbulent, omslagpunt, loslaatpunt en vervuiling.',
        minScore:80,
        steps:[
          t('Wrijvingsweerstand','Wrijvingsweerstand ontstaat doordat luchtdeeltjes langs vleugel, romp en stabilo worden afgeremd.',b(17,'§5.1.3.2 Wrijvingsweerstand')),
          t('Grenslaag','De grenslaag is de dunne laag bij het oppervlak waarin de stromingssnelheid lager is dan in de ongestoorde lucht. Aan het oppervlak is de snelheid nul.',b(17,'§5.1.3.2 Grenslaag')),
          q('Wat is volgens het dictaat de grenslaag?',['De laag waarin lucht nabij het oppervlak is afgeremd','De scheiding tussen twee luchtmassa’s','De luchtlaag boven de tropopauze','Alleen de wervel achter de vleugeltip'],0,'De grenslaag is de dunne laag nabij het oppervlak waarin de stroming is afgeremd.',b(17,'§5.1.3.2 Grenslaag'),study(1,'§5.1.3 Weerstand')),
          t('Laminair versus turbulent','Een laminaire grenslaag heeft minder wrijvingsweerstand maar laat bij een ongunstige drukgradiënt makkelijker los. Een turbulente grenslaag heeft meer weerstand maar kan het profiel langer blijven volgen.',b(17,'§5.1.3.2 Laminaire en turbulente stroming',19)),
          t('Omslagpunt is niet loslaatpunt','Bij het omslagpunt wordt een laminaire stroming turbulent; bij het loslaatpunt kan de stroming het profiel niet meer volgen.',b(18,'§5.1.3.2 Omslagpunt en loslaatpunt')),
          q('Wat gebeurt er bij het omslagpunt?',['De stroming gaat van laminair naar turbulent','De vleugel is per definitie volledig overtrokken','De luchtsnelheid wordt nul in de vrije stroming','De lift wordt altijd maximaal'],0,'Het omslagpunt is de overgang van laminaire naar turbulente grenslaag; dat is iets anders dan loslating.',b(18,'§5.1.3.2 Omslagpunt'),study(1,'§5.1.3 Weerstand')),
          t('Vervuiling en turbulatortape','Ruwheid, insecten en water kunnen de grenslaag en weerstand nadelig beïnvloeden. Turbulatortape wordt juist doelbewust op een bepaalde plaats gebruikt om de overgang naar turbulent te sturen en loslating uit te stellen.',b(18,'§5.1.3.2 Oppervlakteruwheid en omslagpunt',19)),
        ],
      },
    },
    {
      id:'principles-5-1-induced-drag',
      title:'5.1 · Geïnduceerde weerstand',
      lesson:{
        id:'principles-5-1-induced-drag',
        title:'Geïnduceerde weerstand',
        description:'Tipwervels, invalshoek, spanwijdte en de totale weerstandsbalans.',
        minScore:80,
        steps:[
          t('Ontstaan tipwervels','Door het drukverschil tussen onder- en bovenzijde stroomt lucht bij de tip om de vleugel heen. Daardoor ontstaan achter de vleugel spiraalvormige wervels.',b(19,'§5.1.3.3 Geïnduceerde weerstand',20)),
          t('Lift heeft een prijs','Het dictaat noemt geïnduceerde weerstand de weerstand die samenhangt met het produceren van lift. Hoe groter de invalshoek, hoe groter deze weerstand.',b(20,'§5.1.3.3 Geïnduceerde weerstand')),
          q('Wanneer is de geïnduceerde weerstand volgens het dictaat groter?',['Bij een grotere invalshoek','Altijd bij een kleinere spanwijdte én nul lift','Alleen wanneer remkleppen gesloten zijn','Wanneer de vleugel geen lift produceert'],0,'Meer invalshoek geeft een groter drukverschil en sterkere tipwervels; de geïnduceerde weerstand neemt toe.',b(20,'§5.1.3.3 Geïnduceerde weerstand'),study(1,'§5.1.3 Weerstand')),
          t('Maatregelen','Een grotere spanwijdte, winglets en een grotere vleugelslankheid verminderen volgens het dictaat de geïnduceerde weerstand.',b(20,'§5.1.3.3 Geïnduceerde weerstand')),
          t('Totale weerstand en snelheid','Bij lage snelheid is de invalshoek groot en de geïnduceerde weerstand relatief groot. Bij hoge snelheid neemt geïnduceerde weerstand af terwijl profiel- en schadelijke weerstand toenemen.',b(21,'§5.1.3 Totale weerstand versus snelheid')),
          q('Welke weerstand neemt bij toenemende snelheid volgens het dictaat juist af?',['Drukweerstand','Wrijvingsweerstand','Geïnduceerde weerstand','Schadelijke weerstand'],2,'De geïnduceerde weerstand neemt met toenemende snelheid af; de andere genoemde weerstanden nemen juist toe.',b(21,'§5.1.3 Totale weerstand versus snelheid'),study(1,'§5.1.3 Weerstand')),
        ],
      },
    },
]
