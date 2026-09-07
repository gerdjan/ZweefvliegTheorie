import type { SourcedUnit } from '../../domain/types'
import { b, q, t } from './helpers'

export const units:SourcedUnit[] = [
  {
    id:'principles-5-4-control-geometry',
    title:'5.4 · Verdieping: roerarmen en staartvormen',
    lesson:{
      id:'principles-5-4-control-geometry',
      title:'Roerarmen en staartvormen',
      description:'Waarom de staart ver van de stuurassen ligt en hoe T-staart, conventionele staart, V-staart en pendelroer verschillen.',
      minScore:80,
      steps:[
        t('Kracht maal arm','Het hoogteroer ligt zo ver mogelijk van de dwarsas. Daardoor is de arm groot en kan een relatief kleine kracht toch een groot moment om de dwarsas leveren. Dat maakt besturing met kleine stuurknuppelkrachten mogelijk.',b(31,'§5.4.1 Het hoogteroer, stampen')),
        q('Waarom ligt het hoogteroer volgens het dictaat ver van de dwarsas?',['Om met een grote arm en kleine kracht een bruikbaar moment te maken','Om de vleugelbelasting automatisch te verlagen','Omdat het hoogteroer alleen bij stilstand werkt','Om de topas te verkorten'],0,'Moment is kracht maal arm. Een grotere arm vergroot dus het effect van een relatief kleine roerkracht.',b(31,'§5.4.1 Het hoogteroer, stampen')),
        t('T-staart en conventionele staart','Bij een T-staart zit het stabilo boven op het kielvlak. Bij veel oudere, conventionele uitvoeringen zit stabilo met hoogteroer lager aan de staart, onderaan het kielvlak.',b(31,'§5.4.1 Staartvormen')),
        t('V-staart','Bij een V-staart zijn de functies van hoogteroer en richtingsroer gecombineerd in twee staartvlakken die samen een V vormen; de beweegbare stuurvlakken zitten aan de achterzijde.',b(31,'§5.4.1 V-staart')),
        t('Pendelroer','Bij een pendelroer vormen stabilo en hoogteroer één bewegend geheel. Het hele horizontale staartvlak beweegt en veroorzaakt zo een moment om de dwarsas.',b(31,'§5.4.1 Pendelroer')),
        q('Welke omschrijving past bij een pendelroer?',['Het hele horizontale staartvlak beweegt als één geheel','Alleen het kielvlak beweegt','Twee staartvlakken vormen altijd een V maar bewegen niet','Het rolroer neemt de functie van het hoogteroer over'],0,'Bij het pendelroer zijn stabilo en hoogteroer één bewegend geheel.',b(31,'§5.4.1 Pendelroer')),
        t('Ook het richtingsroer gebruikt een lange arm','Het richtingsroer zit aan het einde van de romp, ver van de topas. Daardoor kan een relatief klein richtingsroer door de lange arm toch een bruikbaar giermoment leveren.',b(31,'§5.4.3 Het richtingsroer, gieren')),
      ],
    },
  },
  {
    id:'principles-5-4-coordination-trim-detail',
    title:'5.4 · Verdieping: neveneffecten, coördinatie en trim',
    lesson:{
      id:'principles-5-4-coordination-trim-detail',
      title:'Coördineren en trimmen in detail',
      description:'Waarom gieren ook rollen veroorzaakt, waarom je knuppel en voeten samen gebruikt en waarom trim afhangt van gewicht en snelheid.',
      minScore:80,
      steps:[
        t('Waarom gieren ook rollen veroorzaakt','Bij een gierbeweging legt de buitenvleugel een langere weg af dan de binnenvleugel. De buitenvleugel beweegt daardoor sneller, levert meer lift en gaat omhoog; de binnenvleugel levert door de lagere snelheid minder lift. Zo ontstaat rollen als neveneffect van gieren.',b(31,'§5.4.4 Neveneffecten',32)),
        q('Waarom gaat het zweefvliegtuig rollen wanneer je het laat gieren?',['De buitenvleugel beweegt sneller en levert meer lift dan de binnenvleugel','Beide vleugels verliezen altijd alle lift','De zwaartekracht verdwijnt tijdelijk','Het hoogteroer krijgt automatisch volledige uitslag'],0,'De buitenvleugel legt bij de gierbeweging een langere weg af, heeft daardoor een hogere snelheid en levert meer lift.',b(31,'§5.4.4 Neveneffect van gieren',32)),
        t('Knuppel en voeten tegelijk','Bij het inzetten van een bocht gebruik je de stuurknuppel om de gewenste dwarshelling te maken en het richtingsroer om het ongewenste haakeffect en andere gierneveneffecten te corrigeren. Volgens het dictaat kun je alleen een zuivere bocht vliegen wanneer je stuurknuppel en voetenstuur tegelijk passend gebruikt.',b(32,'§5.4.5 Haakeffect')),
        q('Wat is volgens het dictaat nodig voor een zuivere bocht?',['Een passende combinatie van stuurknuppel en voetenstuur','Alleen voetenstuur','Alleen hoogteroer','Volledig geopende remkleppen'],0,'De stuurknuppel maakt de helling; het richtingsroer corrigeert het haakeffect en helpt de bocht zuiver te houden.',b(32,'§5.4.5 Haakeffect')),
        t('Trim en vliegergewicht','De benodigde stuurkracht hangt mede af van het gewicht van de vlieger. Het dictaat vergelijkt bijvoorbeeld een vlieger van 100 kg met een vlieger van 70 kg: een andere belasting voorin verandert hoeveel stuurkracht nodig is om de gewenste neusstand te houden. Met trim kun je die constante kracht wegnemen.',b(32,'§5.4.6 De trim',33)),
        t('Trim en gekozen snelheid','Ook de gekozen vliegsnelheid beïnvloedt de stuurkracht. Bij hoge snelheid kan langdurig duwen vermoeiend worden; door de trim passend te verstellen hoeft de vlieger niet voortdurend dezelfde kracht op de stuurknuppel uit te oefenen.',b(32,'§5.4.6 De trim',33)),
        q('Waarmee hangt de benodigde trimstand volgens de beschreven voorbeelden samen?',['Met onder andere vliegergewicht en gekozen vliegsnelheid','Alleen met de kleur van het vliegtuig','Alleen met de luchtdruk op het veld','Alleen met de spanwijdte'],0,'De bron geeft zowel vliegergewicht als vliegsnelheid als voorbeelden van factoren die de benodigde constante stuurkracht en daarmee de triminstelling beïnvloeden.',b(32,'§5.4.6 De trim',33)),
      ],
    },
  },
]
