import type { SourcedUnit } from '../../domain/types'
import { b, q, study, t } from './helpers'

export const units:SourcedUnit[] = [
    {
      id:'principles-5-1-lift-origin',
      title:'5.1 · Waarom een vleugel lift maakt',
      lesson:{
        id:'principles-5-1-lift-origin',
        title:'Waarom een vleugel lift maakt',
        description:'Newton, Bernoulli, continuïteit en de stroming rond een profiel.',
        minScore:80,
        steps:[
          t('Twee beschrijvingen van lift','Het dictaat beschrijft lift met twee samenhangende effecten: de vleugel buigt lucht naar beneden af (actie-reactie) en snelheidsverschillen rond het profiel veroorzaken drukverschillen.',b(5,'§5.1.0.1 Hoe kan het dat een vliegtuig vliegt?')),
          t('Derde wet van Newton','Als de vleugel de luchtstroom naar beneden afbuigt, ontstaat volgens actie-reactie een tegengestelde kracht op de vleugel naar boven.',b(5,'§5.1.0.1 Newton')),
          q('Welke reactie hoort bij het naar beneden afbuigen van lucht door de vleugel?',['Een kracht op de vleugel naar boven','Een kracht op de vleugel naar achteren zonder lift','Alleen een hogere luchtdruk vóór de neus','Een kracht op de vleugel naar beneden'],0,'De neerwaarts afgebogen lucht heeft als reactie een opwaartse kracht op de vleugel.',b(5,'§5.1.0.1 Newton'),study(1,'§5.1 Aerodynamica')),
          t('Bernoulli','In sneller stromende lucht is de statische druk lager. Rond de vleugel zijn de lokale snelheden boven en onder verschillend, waardoor een drukverschil en dus lift ontstaat.',b(5,'§5.1.0.1 Bernoulli')),
          t('Continuïteit en stroombuizen','Bij een constante massastroom neemt de snelheid toe waar een stroombuis nauwer wordt. Het dictaat koppelt dit aan Bernoulli: hogere snelheid gaat samen met lagere druk.',b(6,'§5.1.0.1 Continuïteitswet')),
          q('Wat gebeurt er in de beschreven vernauwing van een stroombuis?',['De snelheid neemt toe en de druk neemt af','De snelheid neemt af en de druk neemt af','De snelheid blijft gelijk en de druk neemt toe','De snelheid neemt toe en de druk neemt toe'],0,'In de vernauwing neemt de snelheid toe; volgens Bernoulli daalt daar de druk.',b(6,'§5.1.0.1 Continuïteitswet'),study(1,'§5.1 Aerodynamica')),
          t('Stroomlijnen rond de vleugel','Boven de vleugel liggen stroomlijnen dichter bij elkaar en onder de vleugel wijken ze meer uiteen. Voor het profiel ontstaat opstroming en erachter neerwaartse stroming.',b(7,'§5.1.0.1 Stroomlijn en stroombuis')),
        ],
      },
    },
    {
      id:'principles-5-1-forces-angle',
      title:'5.1 · Glijvlucht, luchtkracht en invalshoek',
      lesson:{
        id:'principles-5-1-forces-angle',
        title:'Glijvlucht, luchtkracht en invalshoek',
        description:'Waarom een zweefvliegtuig daalt om snelheid te behouden en hoe invalshoek lift en weerstand verandert.',
        minScore:80,
        steps:[
          t('Motorvlucht in evenwicht','Bij horizontale vlucht met constante snelheid zijn lift en gewicht gelijk en tegengesteld; trekkracht en weerstand zijn eveneens gelijk en tegengesteld.',b(7,'§5.1.0.2 Luchtstroming rond een vliegtuig',8)),
          t('Zweefvlucht zonder voortstuwing','Bij een zweefvliegtuig zonder voortstuwing zijn totale luchtkracht R en gewicht G gelijk en tegengesteld. Een component van het gewicht langs de baan compenseert de weerstand, waardoor het toestel ten opzichte van de lucht daalt.',b(8,'§5.1.0.2 Zweefvlucht')),
          q('Waarom moet een zuiver zweefvliegtuig ten opzichte van de lucht dalen om zijn snelheid te behouden?',['Een component van het gewicht levert de kracht die de weerstand compenseert','Omdat de lift altijd kleiner is dan nul','Omdat de luchtdruk met de hoogte stijgt','Omdat het richtingsroer weerstand wegneemt'],0,'Het dictaat ontbindt het gewicht in een component die de lift compenseert en een component die de weerstand compenseert.',b(8,'§5.1.0.2 Zweefvlucht'),study(1,'§5.1 Aerodynamica')),
          t('Totale luchtkracht','De totale luchtkracht R kan worden ontbonden in lift L, loodrecht op de luchtstroom, en weerstand W, in de richting van de luchtstroom.',b(8,'§5.1.0.2 Totale luchtkracht')),
          t('Invalshoek en weerstand','Bij vergroten van de invalshoek neemt de weerstand toe; bij verkleinen neemt de weerstand af.',b(8,'§5.1.0.3 De invalshoek')),
          t('Kritische invalshoek','Bij vergroten van de invalshoek neemt de lift eerst toe. Rond de kritische invalshoek kan de stroming het profiel niet meer volgen: de lift neemt sterk af en de weerstand sterk toe.',b(8,'§5.1.0.4 De invalshoek en de lift',9)),
          q('Wat gebeurt er bij het bereiken van de kritische invalshoek?',['De lift neemt sterk af en de weerstand sterk toe','De lift en weerstand worden beide nul','De lift blijft toenemen en de weerstand neemt af','Alleen de luchtdichtheid verandert'],0,'Loslating van de stroming veroorzaakt een sterke afname van lift en sterke toename van weerstand.',b(8,'§5.1.0.4 De invalshoek en de lift',9),study(1,'§5.1 Aerodynamica')),
        ],
      },
    },
    {
      id:'principles-5-1-lift-factors',
      title:'5.1 · Draagkracht: vijf bepalende factoren',
      lesson:{
        id:'principles-5-1-lift-factors',
        title:'Draagkracht: vijf bepalende factoren',
        description:'Luchtsnelheid, vleugeloppervlak, invalshoek/profiel en luchtdichtheid.',
        minScore:80,
        steps:[
          t('R, lift en gewicht','Strikt genomen staat in een normale glijvlucht de totale luchtkracht R tegenover het gewicht. Omdat de liftcomponent bijna even groot is als R, wordt in de praktijk vaak gezegd dat lift ongeveer gelijk is aan gewicht.',b(9,'§5.1.0.5 Evenwicht lift en gewicht')),
          t('Vijf factoren','De draagkracht hangt volgens het dictaat af van luchtsnelheid V, vleugeloppervlak S, invalshoek, profielvorm/liftcoëfficiënt CL en luchtdichtheid ρ.',b(9,'§5.1.1 De draagkracht')),
          q('Welke factor staat NIET in de opsomming van factoren die de draagkracht bepalen?',['Luchtsnelheid','Vleugeloppervlak','Luchtdichtheid','Grondsnelheid'],3,'Het dictaat noemt luchtsnelheid, vleugeloppervlak, invalshoek/profiel en luchtdichtheid; niet grondsnelheid.',b(9,'§5.1.1 De draagkracht'),study(1,'§5.1.1/5.1.2 Draagkracht')),
          t('Snelheid werkt in het kwadraat','Bij gelijkblijvende overige factoren levert twee keer zoveel luchtsnelheid vier keer zoveel draagkracht.',b(9,'§5.1.1.1 De luchtsnelheid')),
          t('Vleugeloppervlak werkt lineair','Bij dezelfde snelheid en invalshoek levert een twee keer zo groot vleugeloppervlak twee keer zoveel draagkracht.',b(9,'§5.1.1.2 Vleugeloppervlak')),
          q('Wat gebeurt er volgens de liftrelatie met de draagkracht als de luchtsnelheid verdubbelt en de andere factoren gelijk blijven?',['Die verdubbelt','Die wordt vier keer zo groot','Die halveert','Die blijft gelijk'],1,'De draagkracht is evenredig met het kwadraat van de luchtsnelheid.',b(9,'§5.1.1.1 De luchtsnelheid'),study(1,'§5.1.1/5.1.2 Draagkracht')),
          t('Gewicht, snelheid en invalshoek','Bij een lager gewicht kan bij dezelfde snelheid een kleinere invalshoek volstaan. Ga je bij hetzelfde gewicht langzamer vliegen, dan is een grotere invalshoek nodig om de benodigde lift te behouden.',b(10,'§5.1.1.3 Invalshoek, gewicht en snelheid')),
        ],
      },
    },
    {
      id:'principles-5-1-profile-controls',
      title:'5.1 · Profiel, drukpunt, roeren, remkleppen en flaps',
      lesson:{
        id:'principles-5-1-profile-controls',
        title:'Profiel en vormverandering',
        description:'Hoe profielvorm en stuurvlakken lift, weerstand en drukpunt beïnvloeden.',
        minScore:80,
        steps:[
          t('Drukverdeling en drukpunt','De onderdruk boven de vleugel levert in de beschreven drukverdeling een grotere bijdrage aan de lift dan de overdruk onder de vleugel. Het aangrijpingspunt van de draagkracht heet het drukpunt.',b(11,'§5.1.1.4 Profielvorm en drukpunt')),
          t('Drukpunt verschuift','Bij het beschreven asymmetrische profiel schuift het drukpunt naar voren bij een grotere invalshoek en naar achteren bij een kleinere invalshoek.',b(11,'§5.1.1.4 Drukpunt')),
          q('Hoe noemt het dictaat het aangrijpingspunt van de draagkracht?',['Zwaartepunt','Drukpunt','Neutraalpunt','Omslagpunt'],1,'Het aangrijpingspunt van de draagkracht wordt het drukpunt genoemd.',b(11,'§5.1.1.4 Drukpunt'),study(1,'§5.1.1/5.1.2 Draagkracht')),
          t('Rolroer','Een omlaag uitslaand rolroer vergroot lokaal de invalshoek en veroorzaakt daar meer lift én meer weerstand; een omhoog uitslaand rolroer doet het omgekeerde.',b(12,'§5.1.1.4 Rolroer')),
          t('Remkleppen','Uitgetrokken remkleppen laten de stroming lokaal los: de weerstand neemt sterk toe en de lift af. Het dictaat wijst erop dat de overtreksnelheid daarbij iets toeneemt.',b(12,'§5.1.1.4 Remkleppen')),
          q('Wat is het hoofdeffect van het uittrekken van de remkleppen volgens het dictaat?',['Meer weerstand en minder lift','Minder weerstand en meer lift','Alleen meer lift','Alleen minder luchtdichtheid'],0,'Remkleppen verhogen de weerstand en verminderen lokaal de lift.',b(12,'§5.1.1.4 Remkleppen'),study(1,'§5.1.1/5.1.2 Draagkracht')),
          t('Flaps','Negatieve flapstand wordt gebruikt bij hoge snelheden om weerstand te verminderen; positieve flapstand vergroot de welving en daarmee de lift, onder andere bij thermiek en landing.',b(12,'§5.1.1.4 Flaps')),
        ],
      },
    },
    {
      id:'principles-5-1-turn-ground',
      title:'5.1 · Draagkracht in de bocht en grondeffect',
      lesson:{
        id:'principles-5-1-turn-ground',
        title:'Bochten en grondeffect',
        description:'Waarom steilere bochten meer lift en snelheid vragen, en wat de grond met de vleugelstroming doet.',
        minScore:80,
        steps:[
          t('Liftvector in een bocht','In een bocht blijft lift loodrecht op de vleugel staan. Door de dwarshelling heeft de lift een verticale en een horizontale component; de horizontale component levert de middelpuntzoekende kracht.',b(13,'§5.1.1 Draagkracht in een bocht')),
          t('Overtreksnelheid neemt toe','Met toenemende dwarshelling is meer totale lift nodig en neemt de overtreksnelheid toe. Het dictaat geeft circa +7% bij 30°, +20% bij 45° en +41% bij 60°.',b(13,'§5.1.1 Draagkracht in een bocht')),
          q('Hoe verandert de overtreksnelheid volgens het dictaat ongeveer bij 60° dwarshelling?',['Ongeveer 7% hoger','Ongeveer 20% hoger','Ongeveer 41% hoger','Ongeveer 100% hoger'],2,'De tabel in het dictaat geeft bij 60° ongeveer 41% toename.',b(13,'§5.1.1 Draagkracht in een bocht'),study(1,'§5.1.1/5.1.2 Draagkracht')),
          t('Grondeffect','Vlak boven de grond worden de neerwaartse luchtbeweging en tipwervels beïnvloed. De geïnduceerde weerstand neemt af en de druk onder de vleugel neemt toe.',b(13,'§5.1.1 Grondeffect',14)),
          q('Wat noemt het dictaat als twee effecten van vliegen vlak boven de grond?',['Minder geïnduceerde weerstand en hogere druk onder de vleugel','Meer geïnduceerde weerstand en lagere druk onder de vleugel','Minder lift en meer tipwervels','Geen verandering in weerstand of druk'],0,'Het grondeffect verzwakt de geïnduceerde weerstand en vergroot de druk onder de vleugel.',b(13,'§5.1.1 Grondeffect',14),study(1,'§5.1.1/5.1.2 Draagkracht')),
        ],
      },
    },
]
