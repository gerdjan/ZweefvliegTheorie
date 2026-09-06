import type { SourcedUnit } from '../../domain/types'
import { b, q, study, t } from './helpers'

export const units:SourcedUnit[] = [
    {
      id:'principles-5-6-stall',
      title:'5.6 · Overtrek',
      lesson:{
        id:'principles-5-6-stall',
        title:'Overtrek herkennen en herstellen',
        description:'Kritische invalshoek, gevolgen, verhoogde overtreksnelheid en herstel.',
        minScore:80,
        steps:[
          t('Overtrek is een invalshoekprobleem','Een overtrek ontstaat wanneer de invalshoek zo groot wordt dat de stroming de bovenzijde van het profiel niet meer kan volgen. De lift neemt af en de weerstand sterk toe.',b(37,'§5.6.1 Overtrek')),
          t('Gevolgen','Het dictaat noemt afname van draagkracht, sterke toename van weerstand en schudden, een moment om de dwarsas en - als één vleugel eerder overtrekt - ook momenten om langs- en topas.',b(37,'§5.6.1 Gevolgen van de overtrek')),
          q('Wat is de primaire aerodynamische oorzaak van een overtrek?',['Een te grote invalshoek waardoor de stroming loslaat','Een te lage grondsnelheid op zichzelf','Een te hoge QNH','Een te kleine spanwijdte zonder verdere voorwaarden'],0,'De overtrek wordt bepaald door het bereiken van de kritische invalshoek.',b(37,'§5.6.1 Overtrek'),study(2,'§5.6 Overtrek en Vrille')),
          t('Wanneer overtreksnelheid hoger ligt','Het dictaat waarschuwt voor hogere overtreksnelheid bij onder andere lierstart, steile bochten, waterballast, turbulentie en natte/vuile vleugels.',b(37,'§5.6.1 Verhoogde overtreksnelheid')),
          t('Herstel','De herstelprocedure is de stuurknuppel laten vieren en voldoende snelheid opnemen. Voeten en rolroer worden neutraal gehouden om asymmetrie niet te vergroten.',b(38,'§5.6.1 Herstelprocedure overtrek')),
          q('Wat is de eerste kernhandeling bij herstel uit een overtrek volgens het dictaat?',['De stuurknuppel laten vieren','Vol richtingsroer geven','De remkleppen volledig trekken','De stuurknuppel verder naar achteren trekken'],0,'Door de stuurknuppel te vieren verklein je de invalshoek en kan de stroming herstellen.',b(38,'§5.6.1 Herstelprocedure overtrek'),study(2,'§5.6 Overtrek en Vrille')),
        ],
      },
    },
    {
      id:'principles-5-6-spin',
      title:'5.6 · Tolvlucht / vrille',
      lesson:{
        id:'principles-5-6-spin',
        title:'Tolvlucht herkennen en herstellen',
        description:'Asymmetrische overtrek, waarom rolroer tegen averechts werkt en de standaardherstelprocedure.',
        minScore:80,
        steps:[
          t('Begin van een tolvlucht','Een overtrek in een schuivende bocht kan beginnen met één overtrokken vleugel en overgaan in een tolvlucht. Op geringe hoogte is er onvoldoende ruimte voor herstel.',b(38,'§5.6.1 Overtrek in een schuivende bocht')),
          t('Waarom rolroer tegen niet helpt','Bij een overtrokken lage vleugel kan een naar beneden uitgeslagen rolroer de invalshoek daar verder vergroten en de overtrek verdiepen.',b(39,'§5.6.2 Uit een tolvlucht halen')),
          q('Waarom moet je bij een tolvlucht niet proberen de lage vleugel met veel rolroer “tegen” op te trekken?',['Het neergaande rolroer kan de invalshoek van de overtrokken vleugel verder vergroten','Omdat rolroeren alleen op de grond werken','Omdat het altijd de snelheid halveert','Omdat het richtingsroer dan automatisch blokkeert'],0,'Het dictaat waarschuwt dat het neergaande rolroer op de overtrokken vleugel de invalshoek verder kan vergroten.',b(39,'§5.6.2 Tolvlucht'),study(2,'§5.6 Overtrek en Vrille')),
          t('Standaardherstel','De standaardmethode in het dictaat: volledig richtingsroer tegen de draairichting, hoogteroer naar voren/neutraal, rolroer neutraal; zodra de draai stopt richtingsroer neutraal en beheerst uit de duikvlucht optrekken.',b(39,'§5.6.2 Uit een tolvlucht halen')),
          q('Welk roer wordt volgens de standaardmethode volledig tegen de draairichting gebruikt om de tolvlucht te stoppen?',['Richtingsroer','Rolroer','Remkleppen','Trim'],0,'De standaardmethode gebruikt volledig richtingsroer tegen de draairichting.',b(39,'§5.6.2 Uit een tolvlucht halen'),study(2,'§5.6 Overtrek en Vrille')),
          t('Vlieghandboek gaat voor','Het dictaat benadrukt dat tolvluchteigenschappen en procedures per type kunnen verschillen. Voor een onbekend type moet je eerst het vlieghandboek raadplegen.',b(39,'§5.6.2 N.B. type-afhankelijkheid')),
        ],
      },
    },
    {
      id:'principles-5-7-spiral-dive',
      title:'5.7 · Spiraalduik',
      lesson:{
        id:'principles-5-7-spiral-dive',
        title:'Spiraalduik herkennen en herstellen',
        description:'Het verschil met een vrille en hoe je hoge snelheid en g-belasting beheerst.',
        minScore:80,
        steps:[
          t('Niet overtrokken','Een vrille is een overtrokken vliegtoestand; een spiraalduik is volgens het dictaat niet overtrokken en gaat gepaard met veel hogere snelheid.',b(39,'§5.7 Spiraalduik')),
          t('Herkenning','Als je steil draait en de snelheid ondanks verder trekken niet afneemt maar juist oploopt terwijl de g-krachten toenemen, beschrijft het dictaat dat als spiraalduik.',b(40,'§5.7 Spiraalduik')),
          q('Wat is het belangrijkste onderscheid tussen een tolvlucht en een spiraalduik?',['De tolvlucht is overtrokken; de spiraalduik niet','De spiraalduik is overtrokken; de tolvlucht niet','Beide hebben altijd dezelfde lage snelheid','Een tolvlucht heeft geen draaiing'],0,'Het dictaat maakt expliciet dit onderscheid: vrille/tolvlucht overtrokken, spiraalduik niet overtrokken.',b(39,'§5.7 Spiraalduik'),study(2,'§5.6 Overtrek en Vrille / spiraalduik')),
          t('Herstel','Herstel volgens het dictaat: stick iets naar voren om g te verminderen, horizontaal rollen en daarna de snelheid voorzichtig uittrekken.',b(40,'§5.7 Herstel spiraalduik')),
          q('Wat doe je volgens het dictaat eerst om de hoge g-belasting in een spiraalduik te verminderen?',['De stick iets naar voren','Vol aan de stick trekken','Volledig remkleppen openen','Vol rolroer tegen en blijven trekken'],0,'De eerste genoemde stap is de stick iets naar voren om de g-krachten te verminderen.',b(40,'§5.7 Herstel spiraalduik'),study(2,'§5.6 Overtrek en Vrille / spiraalduik')),
          t('Remkleppen','Het dictaat waarschuwt expliciet: doe geen spiraalduik met geopende remkleppen. De belastingslimiet kan met geopende remkleppen lager zijn door de gewijzigde liftverdeling.',b(40,'§5.7 Spiraalduik en remkleppen')),
        ],
      },
    },
    {
      id:'principles-final-check',
      title:'Eindtoets · Beginselen van het zweefvliegen',
      lesson:{
        id:'principles-final-check',
        title:'Eindtoets Beginselen',
        description:'Een gemengde kennischeck over de volledige cursus. 80% is voldoende.',
        minScore:80,
        steps:[
          q('Welke hoek is de hoek tussen de vleugelkoorde en de aanstromende lucht?',['Instelhoek','Invalshoek','Glijhoek','V-stelling'],1,'Dat is de invalshoek.',b(5,'§5.0.2 De invalshoek'),study(1,'§5.1 Aerodynamica')),
          q('Wat gebeurt er met lift als je de luchtsnelheid verdubbelt en alle andere factoren gelijk houdt?',['De lift halveert','De lift verdubbelt','De lift wordt vier keer zo groot','De lift blijft gelijk'],2,'In L = CL · ½ρV² · S staat de snelheid in het kwadraat.',b(14,'§5.1.2 De liftformule'),study(1,'§5.1.1/5.1.2 Draagkracht')),
          q('Welke grenslaag heeft volgens het dictaat de laagste wrijvingsweerstand?',['Een laminaire grenslaag','Een turbulente grenslaag','Een losgelaten stroming','Alle drie zijn gelijk'],0,'Een laminaire grenslaag geeft minder wrijvingsweerstand, maar is gevoeliger voor loslating.',b(17,'§5.1.3.2 Laminaire en turbulente stroming',19),study(1,'§5.1.3 Weerstand')),
          q('Wat is de snelheid voor het beste glijgetal?',['De snelheid waarmee je in rustige lucht uit een gegeven hoogte de grootste afstand kunt afleggen','Altijd Vne','De snelheid met de hoogste daalsnelheid','Altijd de overtreksnelheid'],0,'De raaklijn vanuit de oorsprong aan de polaire geeft de snelheid voor het beste glijgetal.',b(23,'§5.2.2 Beste glijgetal'),study(1,'§5.2 Vliegmechanica')),
          q('Welk onderdeel levert volgens het dictaat de belangrijkste langsstabiliteit?',['Het horizontale stabilo','De remkleppen','Het wiel','De radioantenne'],0,'Het horizontale stabilo herstelt afwijkingen in neusstand.',b(28,'§5.3.1 Langsstabiliteit',29),study(2,'§5.3 Stabiliteit')),
          q('Wat is het haakeffect?',['Een giermoment naar de kant van de hoge vleugel door het weerstandsverschil bij rolroeruitslag','Een plotselinge afname van luchtdichtheid','Een trilling door flutter','Een daling van de overtreksnelheid in een bocht'],0,'Het omlaaggaande rolroer veroorzaakt naast meer lift ook meer weerstand, waardoor de neus aanvankelijk de andere kant op giert.',b(32,'§5.4.5 Haakeffect'),study(2,'§5.4 Besturingssysteem')),
          q('Wat gebeurt er met de overtreksnelheid als de dwarshelling in een gecoördineerde bocht toeneemt?',['Die neemt toe','Die neemt altijd af','Die blijft per definitie gelijk','Die wordt nul bij 60°'],0,'Door de hogere benodigde lift en belastingfactor stijgt de overtreksnelheid.',b(33,'§5.5.1 Bochten en g-krachten'),study(2,'§5.5 Beperkingen')),
          q('Wat betekent VA?',['Manoeuvreersnelheid: daarboven geen plotselinge volledige roeruitslag','Minimum daalsnelheid','Maximum snelheid in elke vorm van turbulentie','Overtreksnelheid met remkleppen'],0,'Het dictaat noemt VA de manoeuvreersnelheid.',b(34,'§5.5.4 VA',35),study(2,'§5.5 Beperkingen')),
          q('Wat is de eerste kernactie bij herstel uit een overtrek?',['Invalshoek verkleinen door de stuurknuppel te laten vieren','Volledig aan de stuurknuppel trekken','Vol rolroer geven','De trim volledig achteruit zetten'],0,'Het herstel begint met de stuurknuppel laten vieren en snelheid opnemen.',b(38,'§5.6.1 Herstelprocedure overtrek'),study(2,'§5.6 Overtrek en Vrille')),
          q('Welke uitspraak over een spiraalduik is juist?',['Het is een niet-overtrokken toestand met oplopende snelheid en g-belasting','Het is altijd een overtrek met zeer lage snelheid','De snelheid neemt vanzelf af als je harder trekt','Het herstel begint met maximaal verder aantrekken'],0,'In een spiraalduik is het vliegtuig niet overtrokken; snelheid en g-belasting kunnen snel oplopen.',b(39,'§5.7 Spiraalduik',40),study(2,'§5.6 Overtrek en Vrille / spiraalduik')),
        ],
      },
    },
]
