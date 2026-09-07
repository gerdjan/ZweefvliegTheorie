import type { SourcedUnit } from '../../domain/types'
import { b, q, t } from './helpers'

export const units:SourcedUnit[] = [
  {
    id:'principles-5-3-stability-detail',
    title:'5.3 · Verdieping: zelfherstel en zwaartepunt',
    lesson:{
      id:'principles-5-3-stability-detail',
      title:'Wanneer is een zweefvliegtuig stabiel?',
      description:'Kleine en grote verstoringen, bestuurbaarheid en de invloed van de zwaartepuntligging op stabiliteit.',
      minScore:80,
      steps:[
        t('Zelfherstel geldt voor kleine verstoringen','Het dictaat beschrijft een stabiel zweefvliegtuig als een toestel dat na een kleine verstoring uit zichzelf naar de evenwichtssituatie terugkeert. Bij grotere verstoringen moet de vlieger met de stuurorganen de gewenste vliegrichting herstellen.',b(28,'§5.3 Stabiliteit')),
        q('Wanneer verwacht het dictaat dat het zweefvliegtuig zichzelf zonder stuurcorrectie weer naar de evenwichtstoestand beweegt?',['Bij een kleine verstoring','Bij elke willekeurig grote verstoring','Alleen wanneer de remkleppen open staan','Nooit'],0,'De bron maakt expliciet onderscheid: kleine verstoringen worden door de stabiliteit zelf hersteld; grotere verstoringen vragen stuurcorrectie.',b(28,'§5.3 Stabiliteit')),
        t('Stabiel én bestuurbaar','Het zweefvliegtuig is volgens de bron zo ontworpen dat een gewenste vliegtoestand veilig en gemakkelijk bestuurbaar is en een ongewenste afwijking voldoende snel kan worden hersteld. Stabiliteit neemt het sturen dus niet over; zij helpt afwijkingen te onderdrukken.',b(28,'§5.3 Stabiliteit')),
        t('Zwaartepunt binnen de fabrieksgrenzen','De beschreven stabiliteit werkt alleen als het zwaartepunt binnen de door de fabrikant vastgestelde grenzen ligt. Een toestel dat te neuslastig of te staartlastig wordt beladen kan volgens het dictaat onstabiel worden.',b(28,'§5.3 Stabiliteit')),
        q('Welke uitspraak over stabiliteit en zwaartepunt volgt rechtstreeks uit het dictaat?',['Een te neus- of staartlastig beladen toestel kan onstabiel worden','De zwaartepuntligging heeft geen invloed op stabiliteit','Alleen een te zware vleugel beïnvloedt stabiliteit','Een zwaartepunt buiten de grenzen maakt het toestel automatisch stabieler'],0,'De bron koppelt stabiel gedrag expliciet aan een zwaartepunt binnen de door de fabrikant vastgelegde grenzen.',b(28,'§5.3 Stabiliteit')),
        t('Drie stabiliteitsrichtingen','Omdat een vliegtuig om drie assen kan bewegen, beschrijft het dictaat drie vormen van stabiliteit: langsstabiliteit om de dwarsas, richtingsstabiliteit om de topas en rolstabiliteit om de langsas.',b(28,'§5.3 Stabiliteit')),
      ],
    },
  },
  {
    id:'principles-5-3-direction-roll-detail',
    title:'5.3 · Verdieping: richtings- en rolstabiliteit',
    lesson:{
      id:'principles-5-3-direction-roll-detail',
      title:'Waarom het toestel terug wil naar koers en horizontaal',
      description:'Weerhaaneffect, pijlstelling en de twee herstelmechanismen van V-stelling.',
      minScore:80,
      steps:[
        t('Weerhaaneffect van het kielvlak','Na een richtingsverstoring wordt het verticale kielvlak van opzij aangeblazen. Daardoor ontstaat een corrigerende kracht en een moment om het zwaartepunt waardoor het vliegtuig naar zijn oorspronkelijke koers terugdraait. Dit is het weerhaaneffect.',b(29,'§5.3.2 Richtingsstabiliteit')),
        q('Wat veroorzaakt bij het weerhaaneffect de herstellende koerscorrectie?',['Het van opzij aangeblazen kielvlak levert een corrigerende kracht','De remkleppen trekken de neus naar de koers','De rolroeren worden automatisch volledig uitgeslagen','De grondsnelheid wordt nul'],0,'Het dictaat beschrijft een van opzij aangeblazen kielvlak dat een corrigerend moment om het zwaartepunt veroorzaakt.',b(29,'§5.3.2 Richtingsstabiliteit')),
        t('Positieve en negatieve pijlvorm','Positieve pijlvorm kan een richtingsafwijking helpen herstellen doordat de twee vleugels na een gierverstoring verschillend in de aanstroming staan. Bij negatieve pijlvorm werkt dit minder gunstig; de koerscorrectie moet dan sterker door het kielvlak worden geleverd.',b(29,'§5.3.2 Richtingsstabiliteit')),
        q('Wat zegt het dictaat over negatieve pijlvorm en richtingsstabiliteit?',['Negatieve pijlvorm is minder gunstig, zodat het kielvlak meer corrigerende kracht moet leveren','Negatieve pijlvorm maakt het kielvlak overbodig','Negatieve pijlvorm voorkomt elke richtingsverstoring','Negatieve pijlvorm heeft volgens de bron alleen invloed op de hoogteroerwerking'],0,'Bij de genoemde tweezitters met negatieve pijlvorm moet de koerscorrectie volgens de bron volledig of sterker van het kielvlak komen.',b(29,'§5.3.2 Richtingsstabiliteit')),
        t('V-stelling: gunstiger invalshoek van de lage vleugel','Na een rolverstoring glijdt het vliegtuig naar de lage vleugel. Door de V-stelling komt die lage vleugel gunstiger in de aanstromende lucht te staan: de invalshoek wordt groter, de lift neemt toe en de vleugel rolt weer omhoog. Bij de hoge vleugel gebeurt het omgekeerde.',b(29,'§5.3.3 Rolstabiliteit',30)),
        t('V-stelling: richting van de liftvector','De bron beschrijft nog een tweede herstelwerking. Lift staat loodrecht op de vleugel. Na een rolverstoring komt de lift van de lage vleugel meer recht tegenover de zwaartekracht te staan, terwijl de lift van de hoge vleugel schuiner staat. Ook daardoor ontstaat een herstellend rolmoment.',b(30,'§5.3.3 Rolstabiliteit')),
        q('Welke twee herstelwerkingen van V-stelling noemt het dictaat?',['Een gunstiger invalshoek van de lage vleugel én een gunstiger richting van zijn lift ten opzichte van de zwaartekracht','Meer remklepweerstand én minder kielvlakwerking','Meer grondsnelheid én een kleiner zwaartepunt','Alleen een verandering van de instelhoek van het stabilo'],0,'§5.3.3 beschrijft zowel de veranderde aanstroming/invalshoek als de richting van de liftvector als bijdrage aan rolherstel.',b(29,'§5.3.3 Rolstabiliteit',30)),
      ],
    },
  },
  {
    id:'principles-5-3-longitudinal-washout-detail',
    title:'5.3 · Verdieping: stabilo, instelhoek en wrong',
    lesson:{
      id:'principles-5-3-longitudinal-washout-detail',
      title:'Stabilo en wrong als stabiliserende constructiekeuzes',
      description:'Hoe thermiek het stabilo laat reageren, waarom de stabilo-instelhoek kleiner is en wat wrong naast overtrekgedrag doet voor weerstand.',
      minScore:80,
      steps:[
        t('Vleugel en stabilo reageren samen','Wanneer thermiek of turbulentie de invalshoek van de vleugel vergroot, neemt de draagkracht toe en gaat de neus omhoog. Omdat het stabilo met de romp verbonden is, krijgt ook het stabilo een grotere invalshoek en levert het een herstellend moment. Bij een verkleinde invalshoek gebeurt het omgekeerde.',b(29,'§5.3.1 Langsstabiliteit')),
        q('Waarom helpt het stabilo na het binnenvliegen van een thermiekbel de neusafwijking te herstellen?',['Ook het stabilo krijgt door de veranderde aanstroming een andere invalshoek en levert een herstellend moment','Omdat de spanwijdte van het stabilo plotseling groter wordt','Omdat het zwaartepunt naar de staart springt','Omdat de remkleppen automatisch openen'],0,'De bron beschrijft dat vleugel en stabilo door dezelfde verstoring een veranderde invalshoek krijgen; de stabilokracht helpt vervolgens de afwijking te herstellen.',b(29,'§5.3.1 Langsstabiliteit')),
        t('Instelhoek van het stabilo','De instelhoek van het stabilo is volgens het dictaat kleiner dan die van de vleugel. Wanneer de vleugel door een te grote invalshoek overtrekt en veel lift verliest, zakt de neus. De snelheid neemt toe, de invalshoek van de vleugel wordt kleiner en de draagkracht kan zich herstellen.',b(30,'§5.3.4 Instelhoek en wrong')),
        q('Welke relatie tussen stabilo en vleugel noemt de bron?',['De instelhoek van het stabilo is kleiner dan die van de vleugel','De instelhoek van het stabilo is altijd groter dan 90°','Vleugel en stabilo hebben per definitie dezelfde instelhoek','Het stabilo heeft volgens de bron geen instelhoek'],0,'§5.3.4 vermeldt expliciet dat de stabilo-instelhoek kleiner is dan de vleugelinstelhoek en koppelt dit aan het herstel na overtrek.',b(30,'§5.3.4 Instelhoek en wrong')),
        t('Wrong en bestuurbaarheid bij overtrek','Bij wrong neemt de instelhoek naar de tip af. Daardoor laat de stroming bij een te grote invalshoek eerst bij de vleugelwortel los en pas later bij de tip, waar de rolroeren zitten. Dat bevordert de bestuurbaarheid.',b(30,'§5.3.4 Instelhoek en wrong')),
        t('Wrong en geïnduceerde weerstand','De afnemende invalshoek naar de vleugeltippen zorgt volgens het dictaat ook voor een gunstiger, meer ellipsvormige liftverdeling. Een ellipsvormige opbouw van de draagkracht vermindert de geïnduceerde weerstand.',b(30,'§5.3.4 Instelhoek en wrong')),
        q('Wat is naast gunstiger overtrekgedrag nog een voordeel van wrong dat het dictaat noemt?',['Een gunstiger ellipsvormige liftverdeling en minder geïnduceerde weerstand','Een grotere standaardluchtdruk','Een hogere grondsnelheid zonder extra energie','Het volledig verdwijnen van tipwervels'],0,'De bron koppelt wrong ook aan een gunstiger ellipsvormige liftverdeling en daardoor minder geïnduceerde weerstand.',b(30,'§5.3.4 Instelhoek en wrong')),
      ],
    },
  },
]
