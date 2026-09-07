import type { SourceReference } from '../domain/types'

export type KnowledgeElement = {
  id: string
  title: string
  meaning: string
  source: SourceReference
  lessonIds: string[]
}

export type KnowledgeChapter = {
  id: string
  title: string
  auditCovered: number
  auditTotal: number
  auditComplete: boolean
  elements: KnowledgeElement[]
}

const b=(page:number,section:string,pageEnd?:number):SourceReference=>({
  file:'5-Beginselen.pdf',
  page,
  ...(pageEnd?{pageEnd}:{}),
  section,
})

const e=(id:string,title:string,meaning:string,source:SourceReference,lessonIds:string[]=[]):KnowledgeElement=>({id,title,meaning,source,lessonIds})

export const principlesKnowledgeChapters:KnowledgeChapter[] = [
  {
    id:'5.0',title:'5.0 · Begrippen en definities',auditCovered:16,auditTotal:16,auditComplete:true,
    elements:[
      e('5-0-aero-mech','Aerodynamica en vliegmechanica','Aerodynamica gaat over krachten en momenten door de omstromende lucht; vliegmechanica over de beweging van het zweefvliegtuig onder invloed van die krachten.',b(3,'§5.0.1 Inleiding'),['principles-5-0-basics']),
      e('5-0-force-vector','Krachten en krachtpijlen','De lengte van een krachtpijl geeft de grootte aan, de stand de richting en de plaats de werklijn waarlangs de kracht werkt.',b(3,'§5.0.2 Krachten en krachtpijlen'),['principles-5-0-detail']),
      e('5-0-four-forces','Vier krachten','Het dictaat onderscheidt draagkracht/lift, zwaartekracht, voortstuwingskracht en weerstand/drag.',b(3,'§5.0.2 Krachten'),['principles-5-0-basics']),
      e('5-0-moment','Moment','Een moment is de draaiende werking van een kracht rond een punt of as; in het dictaat wordt het zwaartepunt als referentie gebruikt.',b(3,'§5.0.2 Momenten'),['principles-5-0-detail']),
      e('5-0-cg','Zwaartepunt','Het zwaartepunt is het punt waarin je de totale massa geconcentreerd kunt denken. De ligging verandert onder andere met het vliegergewicht.',b(3,'§5.0.2 Zwaartepunt'),['principles-5-0-detail']),
      e('5-0-axes','Langsas, dwarsas en topas','Door het zwaartepunt lopen drie loodrechte assen: langsas, dwarsas en topas.',b(3,'§5.0.2 Zwaartepunt en assen'),['principles-5-0-basics']),
      e('5-0-wing-geometry','Spanwijdte, koorde en slankheid','Spanwijdte is tip-tot-tip; koorde is de vleugelbreedte; slankheid is spanwijdte gedeeld door gemiddelde koorde.',b(3,'§5.0.2 Spanwijdte en koorde',4),['principles-5-0-basics','principles-5-0-detail']),
      e('5-0-profiles','Symmetrisch en asymmetrisch profiel','Een symmetrisch profiel heeft boven en onder dezelfde vorm rond de middellijn; een hoofdvleugelprofiel is doorgaans asymmetrisch.',b(4,'§5.0.2 Profielen'),['principles-5-0-detail']),
      e('5-0-sweep-dihedral','Pijlvorm en V-stelling','Positieve pijlvorm wijkt naar achteren; negatieve naar voren. V-stelling betekent dat de vleugels vanaf de romp omhoog lopen.',b(4,'§5.0.2 Pijlvorm en V-stelling'),['principles-5-0-detail']),
      e('5-0-incidence-aoa','Instelhoek en invalshoek','Instelhoek is de vaste hoek tussen vleugelkoorde en langsas; invalshoek is de veranderlijke hoek tussen koorde en aanstromende lucht.',b(5,'§5.0.2 Instelhoek en invalshoek'),['principles-5-0-basics']),
    ],
  },
  {
    id:'5.1',title:'5.1 · Aerodynamica',auditCovered:98,auditTotal:98,auditComplete:true,
    elements:[
      e('5-1-pressure','Luchtdruk','Luchtdruk ontstaat door botsende luchtmoleculen. Het dictaat gebruikt 1013,3 hPa als gemiddelde standaardluchtdruk op zeeniveau.',b(5,'§5.1.0.1 Luchtdruk'),['principles-5-1-air-medium']),
      e('5-1-density-basic','Luchtdichtheid ρ','Luchtdichtheid is de hoeveelheid massa per volume. Het dictaat noemt 1,225 kg/m³ op zeeniveau in de standaardatmosfeer.',b(5,'§5.1.0.1 Luchtdichtheid',6),['principles-5-1-air-medium']),
      e('5-1-newton','Newton en actie-reactie','Wanneer de vleugel lucht naar beneden afbuigt, werkt volgens actie-reactie een tegengestelde kracht op de vleugel naar boven.',b(5,'§5.1.0.1 Newton'),['principles-5-1-lift-origin']),
      e('5-1-bernoulli','Bernoulli','In de gebruikte beschrijving gaat hogere stromingssnelheid samen met lagere statische druk en omgekeerd.',b(5,'§5.1.0.1 Bernoulli',6),['principles-5-1-lift-origin','principles-5-1-air-medium']),
      e('5-1-streamlines','Stroomlijn en stroombuis','Een stroomlijn volgt de lokale stroming; een stroombuis is een denkbeeldige buis begrensd door stroomlijnen. Stroomlijnen kruisen elkaar niet.',b(7,'§5.1.0.1 Stroomlijn en stroombuis'),['principles-5-1-lift-origin','principles-5-1-air-medium']),
      e('5-1-airspeed','Luchtsnelheid versus grondsnelheid','De vliegtuigsnelheidsmeter meet snelheid ten opzichte van de langsstromende lucht, niet de snelheid over de grond.',b(6,'§5.1.0.1 Snelheidsmeter en luchtsnelheid'),['principles-5-1-air-medium','principles-5-1-lift-detail']),
      e('5-1-force-balance','Krachten in motor- en zweefvlucht','In motorvlucht worden trekkracht en weerstand tegenover elkaar gezet. In zweefvlucht levert een component van het gewicht langs de baan de kracht die de weerstand compenseert.',b(7,'§5.1.0.2 Luchtstroming rond een vliegtuig',8),['principles-5-1-forces-angle']),
      e('5-1-resultant','Totale luchtkracht R','De totale luchtkracht kan worden ontbonden in lift loodrecht op de luchtstroom en weerstand in de richting van de luchtstroom.',b(8,'§5.1.0.2 Totale luchtkracht'),['principles-5-1-forces-angle']),
      e('5-1-critical-aoa','Kritische invalshoek','Bij toenemende invalshoek neemt lift eerst toe; rond de kritische invalshoek laat de stroming los, neemt lift sterk af en weerstand sterk toe.',b(8,'§5.1.0.4 De invalshoek en de lift',9),['principles-5-1-forces-angle']),
      e('5-1-lift-factors','Factoren die draagkracht bepalen','Draagkracht hangt af van luchtsnelheid, vleugeloppervlak, invalshoek/profiel-liftcoëfficiënt en luchtdichtheid.',b(9,'§5.1.1 De draagkracht'),['principles-5-1-lift-factors']),
      e('5-1-wing-loading','Vleugelbelasting','Vleugelbelasting is gewicht gedeeld door vleugeloppervlak. Een lichtere vlieger verlaagt de vleugelbelasting; waterballast verhoogt haar.',b(9,'§5.1.1.2 Vleugelbelasting'),['principles-5-1-lift-detail']),
      e('5-1-profile-geometry','Koorde, skeletlijn en profielwelving','De koorde loopt van achterrand naar vleugelneus; de skeletlijn ligt midden tussen boven- en onderzijde; de grootste afstand tussen beide geeft de profielwelving.',b(10,'§5.1.1.4 Koorde, skeletlijn en profielwelving'),['principles-5-1-lift-detail']),
      e('5-1-pressure-point','Drukpunt','Het drukpunt is het aangrijpingspunt van de draagkracht. Bij een asymmetrisch profiel kan het met de invalshoek verschuiven.',b(11,'§5.1.1.4 Drukpunt'),['principles-5-1-profile-controls','principles-5-1-lift-detail']),
      e('5-1-thermal-entry','Thermiek en invalshoek','Bij het binnenvliegen van stijgende lucht verandert de aanstroming en daarmee de invalshoek en lift. In krachtige/turbulente thermiek adviseert de bron extra snelheidsmarge.',b(11,'§5.1.1.4 Binnenvliegen thermiek',12),['principles-5-1-lift-detail']),
      e('5-1-airbrakes','Remkleppen','Uitgetrokken remkleppen vergroten de weerstand en verminderen lokaal de lift. De bron koppelt het gebruik aan voldoende snelheid en compensatie van snelheid/hoek.',b(12,'§5.1.1.4 Remkleppen'),['principles-5-1-profile-controls','principles-5-1-lift-detail']),
      e('5-1-flaps','Flaps / welvingskleppen','Positieve flapstand vergroot de welving en lift; negatieve stand kan bij hogere snelheid weerstand verminderen. De bron waarschuwt voor configuratiewijzigingen laag bij de grond.',b(12,'§5.1.1.4 Flaps'),['principles-5-1-profile-controls','principles-5-1-lift-detail']),
      e('5-1-turn-lift','Draagkracht in de bocht','Met meer dwarshelling is meer totale lift nodig; daardoor neemt de belastingfactor en de overtreksnelheid toe.',b(13,'§5.1.1 Draagkracht in een bocht'),['principles-5-1-turn-ground']),
      e('5-1-ground-effect','Grondeffect','Vlak boven de grond worden tipwervels en neerwaartse luchtbeweging verzwakt; de geïnduceerde weerstand neemt af.',b(13,'§5.1.1 Grondeffect',14),['principles-5-1-turn-ground']),
      e('5-1-density-height','Luchtdichtheid en hoogte','Met toenemende hoogte neemt de luchtdichtheid per saldo af. De temperatuurdaling remt die afname gedeeltelijk.',b(12,'§5.1.1.5 De luchtdichtheid'),['principles-5-1-air-density']),
      e('5-1-lift-formula','Liftformule','Het dictaat schrijft de draagkracht als L = CL · ½ρV² · S. De snelheid staat dus in het kwadraat.',b(14,'§5.1.2 De liftformule'),['principles-5-1-lift-formula']),
      e('5-1-drag-types','Weerstandssoorten','De bron onderscheidt profielweerstand, schadelijke/parasitaire weerstand, interferentieweerstand en geïnduceerde weerstand.',b(15,'§5.1.3 De weerstand',16),['principles-5-1-drag-types','principles-5-1-drag-detail']),
      e('5-1-pressure-drag','Drukweerstand','Drukweerstand hangt onder meer af van aanstromingsvlak, luchtdichtheid, snelheid, vorm en hoek met de stroming. Loslating vergroot haar sterk.',b(16,'§5.1.3.1 Drukweerstand',17),['principles-5-1-drag-types','principles-5-1-drag-detail']),
      e('5-1-boundary-layer','Grenslaag','De grenslaag is de dunne luchtlaag direct langs het oppervlak waarin de stroming is afgeremd; aan het oppervlak is de snelheid nul.',b(17,'§5.1.3.2 Grenslaag'),['principles-5-1-boundary-layer']),
      e('5-1-laminar-turbulent','Laminair, turbulent, omslagpunt en loslaatpunt','Een laminaire grenslaag geeft minder wrijvingsweerstand maar laat makkelijker los. Het omslagpunt is de overgang naar turbulent; het loslaatpunt is waar de stroming het profiel niet meer volgt.',b(17,'§5.1.3.2 Laminaire en turbulente stroming',19),['principles-5-1-boundary-layer','principles-5-1-boundary-induced-detail']),
      e('5-1-contamination','Oppervlakteruwheid, vervuiling en bugwipers','Insecten, water en vuil kunnen de overgang in de grenslaag naar voren halen en weerstand vergroten. Bugwipers kunnen insecten van de voorrand verwijderen.',b(18,'§5.1.3.2 Oppervlakteruwheid',19),['principles-5-1-boundary-layer','principles-5-1-boundary-induced-detail']),
      e('5-1-induced','Geïnduceerde weerstand en tipwervels','Liftproductie veroorzaakt tipwervels en geïnduceerde weerstand. Een grotere spanwijdte/slankheid en winglets kunnen die weerstand verkleinen.',b(19,'§5.1.3.3 Geïnduceerde weerstand',20),['principles-5-1-induced-drag','principles-5-1-boundary-induced-detail']),
      e('5-1-wake','Zogturbulentie','De bron waarschuwt zogturbulentie achter grote vliegtuigen te vermijden; wervels kunnen nog enkele minuten blijven bestaan.',b(20,'§5.1.3.3 Zogturbulentie'),['principles-5-1-boundary-induced-detail']),
    ],
  },
  {
    id:'5.2',title:'5.2 · Vliegmechanica',auditCovered:20,auditTotal:45,auditComplete:false,
    elements:[
      e('5-2-performance-properties','Prestatieleer en vliegeigenschappen','Prestatieleer gaat over de beweging van het zwaartepunt en prestaties; vliegeigenschappen over bewegingen van het vliegtuig om het zwaartepunt.',b(21,'§5.2 Vliegmechanica'),['principles-5-2-mechanics']),
      e('5-2-flight-states','Stationaire, rechtlijnige en gecoördineerde vlucht','De bron onderscheidt verschillende vliegtoestanden, waaronder stationaire en rechtlijnige vlucht en gecoördineerde, slippende of schuivende bochten.',b(21,'§5.2 Vliegmechanica')),
      e('5-2-glide-force','Gewicht als energiebron in de glijvlucht','Een component van het gewicht langs de vliegbaan compenseert de weerstand; daardoor moet een zweefvliegtuig ten opzichte van de lucht dalen om snelheid te behouden.',b(22,'§5.2.1 Vliegtuigprestaties'),['principles-5-2-mechanics']),
      e('5-2-angles','Standhoek, baanhoek, instelhoek en invalshoek','De bron onderscheidt de stand van de langsas, de richting van de vliegbaan, de vaste instelhoek en de actuele invalshoek.',b(22,'§5.2.1 Hoeken'),['principles-5-2-mechanics']),
      e('5-2-polar','Snelheidspolaire','Een snelheidspolaire zet vliegsnelheid horizontaal uit tegen daalsnelheid verticaal en is type- en configuratie-afhankelijk.',b(22,'§5.2.2 Snelheidspolaire',23),['principles-5-2-polar']),
      e('5-2-minsink-bestglide','Minimum dalen en beste glijgetal','Minimum dalen geeft de kleinste verticale snelheid; beste glijgetal geeft in rustige lucht de grootste afstand per verloren hoogte.',b(22,'§5.2.2 Snelheidspolaire',23),['principles-5-2-polar']),
      e('5-2-wind','Wind en optimale snelheid','Tegenwind verschuift de optimale steeksnelheid omhoog; bij meewind werkt de raaklijnmethode in de tegenovergestelde richting.',b(23,'§5.2.2 Beste glijgetal bij wind'),['principles-5-2-wind-maccready']),
      e('5-2-maccready','MacCready en sollfahrt','MacCready-instellingen vertalen verwachte stijg-/daalcondities naar een passende steeksnelheid; de bron bespreekt daarnaast de sollfahrtgever en final-glidehulpmiddelen.',b(26,'§5.2.2 MacCreadyring en sollfahrtgeber'),['principles-5-2-wind-maccready']),
      e('5-2-ballast','Waterballast','Meer waterballast verhoogt de vleugelbelasting en verschuift de polaire naar hogere snelheden: slechter klimmen in zwakke omstandigheden, maar gunstiger hoge-snelheidsprestaties.',b(24,'§5.2.2 Beste snelheid met waterballast',27),['principles-5-2-ballast']),
      e('5-2-handbook','Vlieghandboek en polaire','Polaire, maximale massa, ballastverdeling en snelheidsgrenzen zijn type-afhankelijk; de bron verwijst daarvoor naar het vlieghandboek.',b(26,'§5.2.2 Vliegen met water',27),['principles-5-2-ballast']),
    ],
  },
  {
    id:'5.3',title:'5.3 · Stabiliteit',auditCovered:12,auditTotal:21,auditComplete:false,
    elements:[
      e('5-3-definitions','Stabiel, onstabiel en indifferent','Stabiel betekent terugkeer naar de oorspronkelijke toestand; onstabiel een toenemende afwijking; indifferent een nieuwe evenwichtstoestand.',b(28,'§5.3 Stabiliteit'),['principles-5-3-stability']),
      e('5-3-cg-limits','Stabiliteit en zwaartepuntgrenzen','De beschreven stabiliteit veronderstelt dat het zwaartepunt binnen de door de fabrikant vastgelegde grenzen ligt.',b(28,'§5.3 Stabiliteit')),
      e('5-3-longitudinal','Langsstabiliteit','Het horizontale stabilo levert een herstellend moment bij een verstoring van de neusstand om de dwarsas.',b(28,'§5.3.1 Langsstabiliteit',29),['principles-5-3-stability']),
      e('5-3-directional','Richtingsstabiliteit / weerhaaneffect','Het kielvlak wordt bij een richtingsverstoring van opzij aangeblazen en werkt de afwijking tegen.',b(29,'§5.3.2 Richtingsstabiliteit'),['principles-5-3-stability']),
      e('5-3-roll','Rolstabiliteit en V-stelling','V-stelling helpt een rolverstoring te herstellen doordat de lage vleugel bij slip gunstiger wordt aangestroomd.',b(29,'§5.3.3 Rolstabiliteit',30),['principles-5-3-stability']),
      e('5-3-washout','Wrong','Bij wrong neemt de instelhoek naar de tip af, zodat de vleugel doorgaans eerst bij de wortel overtrekt en de rolroeren langer effectief blijven.',b(30,'§5.3.4 Instelhoek en wrong'),['principles-5-3-stability']),
    ],
  },
  {
    id:'5.4',title:'5.4 · Besturing',auditCovered:22,auditTotal:27,auditComplete:false,
    elements:[
      e('5-4-elevator','Hoogteroer en stampen','Het hoogteroer bestuurt de beweging om de dwarsas; de grote arm tot die as maakt een bruikbaar stuurmoment mogelijk.',b(31,'§5.4.1 Het hoogteroer, stampen'),['principles-5-4-controls']),
      e('5-4-ailerons','Rolroeren en rollen','Tegengestelde rolroeruitslagen veranderen links en rechts de lift en laten het vliegtuig om de langsas rollen.',b(31,'§5.4.2 De rolroeren, rollen'),['principles-5-4-controls']),
      e('5-4-rudder','Richtingsroer en gieren','Het richtingsroer bestuurt de beweging om de topas.',b(31,'§5.4.3 Het richtingsroer, gieren'),['principles-5-4-controls']),
      e('5-4-secondary','Neveneffecten','Gieren kan rollen veroorzaken doordat de buitenvleugel sneller beweegt en meer lift levert; dwarshelling kan op haar beurt gieren veroorzaken.',b(31,'§5.4.4 Neveneffecten',32),['principles-5-4-secondary-effects']),
      e('5-4-adverse-yaw','Haakeffect','Het omlaaggaande rolroer veroorzaakt naast meer lift ook meer weerstand, waardoor de neus aanvankelijk naar de hoge vleugel wil gieren.',b(32,'§5.4.5 Haakeffect'),['principles-5-4-secondary-effects']),
      e('5-4-coordination','Gecoördineerd sturen','Een zuivere bocht vraagt een passende combinatie van stuurknuppel en voetenstuur om haakeffect en neveneffecten te compenseren.',b(32,'§5.4.5 Haakeffect')),
      e('5-4-trim','Trim','Trim vermindert de constante stuurkracht die nodig is om een gekozen snelheid/stand vast te houden.',b(33,'§5.4.6 De trim'),['principles-5-4-secondary-effects']),
    ],
  },
  {
    id:'5.5',title:'5.5 · Beperkingen en belastingen',auditCovered:21,auditTotal:47,auditComplete:false,
    elements:[
      e('5-5-turn-g','Bocht en g-krachten','Met toenemende dwarshelling moet de totale lift toenemen. Bij 60° noemt de bron ongeveer 2g.',b(33,'§5.5.1 Bochten en g-krachten'),['principles-5-5-turn-load']),
      e('5-5-clean-turn','Zuivere, schuivende en slippende bocht','De bron gebruikt het piefje om bochtcoördinatie te herkennen en waarschuwt vooral voor een schuivende bocht bij lage snelheid.',b(33,'§5.5.2 Zuivere en onzuivere bochten',34),['principles-5-5-turn-load']),
      e('5-5-loadfactor','Belastingfactor n','Belastingfactor drukt de belasting uit ten opzichte van het eigen gewicht; bij 2g is tweemaal zoveel lift nodig als bij 1g.',b(34,'§5.5.3 Belastingsfactor'),['principles-5-5-turn-load']),
      e('5-5-high-speed-stall','High-speed stall','Ook bij hoge snelheid kan een overtrek optreden als de invalshoek snel genoeg tot de kritische waarde wordt vergroot.',b(34,'§5.5.3 Belastingsfactor')),
      e('5-5-manoeuvre-gust','Manoeuvreer- en remousbelasting','Manoeuvreerbelasting komt door stuurbewegingen; remousbelasting door plotselinge invalshoekveranderingen in turbulentie.',b(34,'§5.5.4 Manoeuvreerbelasting en remousbelasting'),['principles-5-5-vn-diagram']),
      e('5-5-va','VA','VA is de manoeuvreersnelheid. Boven VA mogen volgens de bron geen plotselinge volledige roeruitslagen worden gegeven.',b(34,'§5.5.4 VA',35),['principles-5-5-vn-diagram']),
      e('5-5-vn','V-n-diagram','Het V-n-diagram zet snelheid uit tegen belastingfactor en toont de toegestane combinaties van snelheid en g-belasting.',b(34,'§5.5.5 Belastingdiagram',35),['principles-5-5-vn-diagram']),
      e('5-5-vne-vra','Vne en VRA','Vne is de maximum toegestane snelheid; VRA is een lagere maximumsnelheid voor rough air/onrustige lucht.',b(35,'§5.5.5 Vne en VRA',36),['principles-5-5-vn-diagram']),
      e('5-5-flutter','Flutter','Flutter is een onstabiele gekoppelde trilling die boven een kritische snelheid snel destructief kan worden; snelheid verminderen is de genoemde reactie op trillingen.',b(36,'§5.5.6 Flutter'),['principles-5-5-flutter']),
    ],
  },
  {
    id:'5.6',title:'5.6 · Overtrek en tolvlucht',auditCovered:12,auditTotal:30,auditComplete:false,
    elements:[
      e('5-6-stall','Overtrek','Een overtrek ontstaat door het overschrijden van de kritische invalshoek, niet door lage grondsnelheid op zichzelf.',b(37,'§5.6.1 Overtrek'),['principles-5-6-stall']),
      e('5-6-signs','Waarschuwingssignalen overtrek','De bron noemt onder meer een ver getrokken knuppel, hoge neusstand, stil worden, slappe roeren en schudden als signalen.',b(37,'§5.6.1 Gevolgen en herkenning overtrek')),
      e('5-6-higher-stall-speed','Verhoogde overtreksnelheid','Lierstart, steile bocht, waterballast, turbulentie en natte/vuile vleugels kunnen de overtreksnelheid verhogen.',b(37,'§5.6.1 Verhoogde overtreksnelheid'),['principles-5-6-stall']),
      e('5-6-stall-recovery','Herstel uit overtrek','De kern is de invalshoek verkleinen door de knuppel te laten vieren en voldoende snelheid op te nemen; voeten en rolroer blijven neutraal.',b(38,'§5.6.1 Herstelprocedure overtrek'),['principles-5-6-stall']),
      e('5-6-spin','Tolvlucht / vrille','Een tolvlucht is een overtrokken toestand met draaiing; asymmetrische overtrek kan de beweging inleiden.',b(38,'§5.6.2 Tolvlucht',39),['principles-5-6-spin']),
      e('5-6-spin-recovery','Herstel uit tolvlucht','De standaardmethode in het dictaat gebruikt richtingsroer tegen de draairichting, hoogteroer naar voren/neutraal en rolroer neutraal; het vlieghandboek van het type blijft leidend.',b(39,'§5.6.2 Uit een tolvlucht halen'),['principles-5-6-spin']),
    ],
  },
  {
    id:'5.7',title:'5.7 · Spiraalduik',auditCovered:5,auditTotal:10,auditComplete:false,
    elements:[
      e('5-7-difference','Spiraalduik versus tolvlucht','Een tolvlucht is overtrokken; een spiraalduik niet. In de spiraalduik kunnen snelheid en g-belasting snel oplopen.',b(39,'§5.7 Spiraalduik',40),['principles-5-7-spiral-dive']),
      e('5-7-cause','Ontstaan van een spiraalduik','Een mogelijke aanleiding is een bocht waarbij de neus zakt en de snelheid oploopt; verder trekken verkleint dan de bochtstraal en verhoogt de belasting.',b(40,'§5.7 Spiraalduik')),
      e('5-7-recovery','Herstel uit spiraalduik','De bron noemt: eerst de g-belasting verminderen door iets naar voren te sturen, daarna horizontaal rollen en vervolgens de snelheid beheerst uitnemen.',b(40,'§5.7 Herstel spiraalduik'),['principles-5-7-spiral-dive']),
      e('5-7-airbrakes','Spiraalduik en remkleppen','De bron waarschuwt geen spiraalduik met geopende remkleppen te maken omdat de toegestane belasting dan lager kan zijn.',b(40,'§5.7 Spiraalduik en remkleppen'),['principles-5-7-spiral-dive']),
    ],
  },
]
