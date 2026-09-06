import type { SourcedUnit } from '../../domain/types'
import { b, q, study, t } from './helpers'

export const units:SourcedUnit[] = [
    {
      id:'principles-5-3-stability',
      title:'5.3 · Stabiliteit',
      lesson:{
        id:'principles-5-3-stability',
        title:'Stabiliteit om drie assen',
        description:'Stabiel, onstabiel, indifferent en de constructieve kenmerken die herstel veroorzaken.',
        minScore:80,
        steps:[
          t('Stabiel, onstabiel, indifferent','Stabiel betekent terugkeer naar de oorspronkelijke evenwichtstoestand; onstabiel betekent dat de afwijking groter wordt; indifferent betekent dat na de verstoring een nieuwe evenwichtstoestand ontstaat.',b(28,'§5.3 Stabiliteit')),
          q('Wat betekent “stabiel” in de definitie van het dictaat?',['Na een verstoring bestaat de neiging terug te keren naar de oorspronkelijke toestand','Elke verstoring wordt steeds groter','Na een verstoring blijft altijd een nieuwe stand bestaan','Het vliegtuig kan niet bestuurd worden'],0,'Bij stabiel evenwicht werkt een herstellende neiging terug naar de oorspronkelijke toestand.',b(28,'§5.3 Stabiliteit'),study(2,'§5.3 Stabiliteit')),
          t('Langsstabiliteit','Een afwijking in neusstand, dus om de dwarsas, wordt door het horizontale stabilo tegengewerkt.',b(28,'§5.3.1 Langsstabiliteit',29)),
          t('Richtingsstabiliteit','Een richtingsafwijking om de topas wordt gecorrigeerd door het kielvlak; positieve pijlstelling kan daarbij eveneens stabiliserend werken.',b(29,'§5.3.2 Richtingsstabiliteit')),
          t('Rolstabiliteit','Bij een rolverstoring helpt de V-stelling een herstellend rolmoment te leveren.',b(29,'§5.3.3 Rolstabiliteit',30)),
          q('Welk constructief kenmerk noemt het dictaat als belangrijk voor rolstabiliteit?',['V-stelling','Negatieve flapstand','Remkleppen','Een grotere spinner'],0,'De V-stelling helpt een rolverstoring te herstellen.',b(29,'§5.3.3 Rolstabiliteit'),study(2,'§5.3 Stabiliteit')),
          t('Wrong','Wrong betekent dat de invalshoek/instelhoek naar de tip toe kleiner is. Daardoor overtrekt de vleugel doorgaans eerst bij de wortel en later bij de tip, zodat de rolroeren langer effectief blijven.',b(30,'§5.3.4 Instelhoek en wrong')),
        ],
      },
    },
    {
      id:'principles-5-4-controls',
      title:'5.4 · Besturing om drie assen',
      lesson:{
        id:'principles-5-4-controls',
        title:'Besturing om drie assen',
        description:'Hoogteroer, rolroeren en richtingsroer.',
        minScore:80,
        steps:[
          t('Hoogteroer: stampen','Met het hoogteroer bestuur je de beweging om de dwarsas. Knuppel naar voren laat de neus zakken en de snelheid oplopen; knuppel naar achteren doet het omgekeerde.',b(31,'§5.4.1 Het hoogteroer, stampen')),
          q('Om welke as stampt het zweefvliegtuig?',['Langsas','Dwarsas','Topas','Geen van deze'],1,'Stampen is de beweging om de dwarsas.',b(31,'§5.4.1 Het hoogteroer, stampen'),study(2,'§5.4 Besturingssysteem')),
          t('Rolroeren: rollen','Knuppel naar rechts laat het linker rolroer omlaag en het rechter omhoog uitslaan. Het liftverschil laat het vliegtuig om de langsas rollen.',b(31,'§5.4.2 De rolroeren, rollen')),
          t('Richtingsroer: gieren','Het voetenstuur bedient het richtingsroer. Rechts voeten geeft een richtingsroeruitslag naar rechts en laat de neus naar rechts gieren om de topas.',b(31,'§5.4.3 Het richtingsroer, gieren')),
          q('Welke combinatie is juist?',['Hoogteroer-dwarsas, rolroeren-langsas, richtingsroer-topas','Hoogteroer-topas, rolroeren-dwarsas, richtingsroer-langsas','Hoogteroer-langsas, rolroeren-topas, richtingsroer-dwarsas','Alle drie de roeren werken alleen om de langsas'],0,'Het dictaat koppelt stampen aan de dwarsas, rollen aan de langsas en gieren aan de topas.',b(30,'§5.4 Besturingssysteem',31),study(2,'§5.4 Besturingssysteem')),
          t('Staartvormen','Het dictaat beschrijft naast de conventionele/T-staart ook V-staart en pendelroer als mogelijke uitvoeringen.',b(31,'§5.4.1 Staartvormen')),
        ],
      },
    },
    {
      id:'principles-5-4-secondary-effects',
      title:'5.4 · Neveneffecten, haakeffect en trim',
      lesson:{
        id:'principles-5-4-secondary-effects',
        title:'Neveneffecten, haakeffect en trim',
        description:'Waarom gieren rollen veroorzaakt, helling gieren kan veroorzaken en rolroeren een haakeffect geven.',
        minScore:80,
        steps:[
          t('Neveneffect van gieren','Een uitslag van het richtingsroer veroorzaakt primair gieren; het dictaat noemt rollen als neveneffect.',b(31,'§5.4.4 Neveneffecten',32)),
          t('Neveneffect van helling','Bij dwarshelling glijdt het vliegtuig naar de lage vleugel. Daardoor wordt het kielvlak van opzij aangeblazen en ontstaat een giermoment.',b(32,'§5.4.4 Neveneffect van dwarshelling')),
          q('Wat noemt het dictaat als neveneffect van een richtingsroeruitslag/gieren?',['Rollen','Alleen stampen','Geen beweging','Alleen remmen'],0,'Het neveneffect van gieren is rollen.',b(31,'§5.4.4 Neveneffecten'),study(2,'§5.4 Besturingssysteem')),
          t('Haakeffect','Bij rolroeruitslag krijgt de vleugel met het omlaag uitgeslagen rolroer meer lift én meer weerstand. Daardoor giert de neus aanvankelijk naar de kant van de hoge vleugel: het haakeffect.',b(32,'§5.4.5 Haakeffect')),
          q('Hoe wordt het haakeffect constructief verkleind?',['Met differentiaalrolroeren','Door beide rolroeren altijd even ver omlaag te zetten','Door de remkleppen volledig te openen','Door de V-stelling weg te halen'],0,'Differentiaalrolroeren laten het omhooggaande rolroer meer uitslaan dan het omlaaggaande, waardoor het weerstandsverschil kleiner wordt.',b(32,'§5.4.5 Haakeffect'),study(2,'§5.4 Besturingssysteem')),
          t('Trim','Trim vermindert de benodigde constante stuurkracht. Het dictaat noemt een trimvlakje aan het hoogteroer en een veertrim als twee uitvoeringen.',b(33,'§5.4.6 De trim')),
        ],
      },
    },
]
