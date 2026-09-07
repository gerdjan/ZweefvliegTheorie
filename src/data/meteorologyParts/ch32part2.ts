import type { SourcedUnit } from '../../domain/types'
import { cov, goals, m, match, n, o, q, study, t } from '../meteorologyFactory'

export const meteorology32Part2:SourcedUnit[]=[
{
    id:'meteo-3-2-3-1',title:'3.2 · Windcirculatie rondom de aarde',
    lesson:{
      id:'meteo-3-2-3-1',title:'Windcirculatie rondom de aarde',description:"Brongebonden leerlevel uit '§3.2.3 Windcirculatie rondom de aarde'.",minScore:80,
      steps:[
        t('Ongelijke zonverwarming drijft wereldcirculatie · Equatoriale lage druk','Sterke opwarming rond de evenaar en zwakke opwarming bij de polen drijven de algemene circulatie. Rond de evenaar stijgt warme lucht en ontstaat een zone met relatief lage druk. Rond ongeveer 30° breedte daalt lucht en liggen subtropische hogedrukgordels.',m(18,'§3.2.3 Windcirculatie rondom de aarde',{pageEnd:19}),cov('meteo-d098','meteo-d099','meteo-d100')),
        t('Polaire frontzone · Drie circulatiecellen','Rond ongeveer 60° ontmoeten luchtstromen elkaar in de polaire frontzone. Het dictaat beschrijft per halfrond drie grote circulatiecellen. De globale circulatie verklaart onder meer passaten in de tropen en overheersende westenwinden op middelbare breedten.',m(18,'§3.2.3 Windcirculatie rondom de aarde',{pageEnd:19}),cov('meteo-d101','meteo-d102','meteo-d103')),
        t('Jetstream · Jetstream hoogte','Een jetstream is een smalle band met zeer hoge windsnelheden op grote hoogte, vaak nabij sterke temperatuurgradiënten. Het dictaat plaatst jetstreams grofweg rond 10 km hoogte. Het dictaat noemt dat windsnelheden in een jetstream ruim boven 100 km/h kunnen liggen.',m(18,'§3.2.3 Windcirculatie rondom de aarde',{pageEnd:19}),cov('meteo-d104','meteo-d105','meteo-d106')),
        q('Welke structuur beschrijft het dictaat voor de mondiale circulatie per halfrond?',['Drie grote circulatiecellen','Eén enkele cel','Zes cellen alleen boven zee','Geen vaste circulatie'],0,'De globale circulatie wordt schematisch met drie cellen per halfrond beschreven.',m(18,'§3.2.3 Windcirculatie rondom de aarde',{pageEnd:19}),cov(),goals('meteo-g18'),study(1,'3.2 vraag 9')),
      ],
    },
  },
{
    id:'meteo-3-2-4-1',title:'3.2 · Lokale winden · deel 1',
    lesson:{
      id:'meteo-3-2-4-1',title:'Lokale winden · deel 1',description:"Brongebonden leerlevel uit '§3.2.4 Lokale winden'.",minScore:80,
      steps:[
        t('Lokale wind door lokaal temperatuurverschil · Anabatische wind','Lokale winden ontstaan vaak door verschillen in opwarming en afkoeling op kleine schaal. Anabatische wind stroomt overdag langs een opgewarmde helling omhoog. Katabatische wind stroomt bij afkoeling langs een helling omlaag.',m(19,'§3.2.4 Lokale winden',{pageEnd:20}),cov('meteo-d107','meteo-d108','meteo-d109')),
        t('Dalwind en bergwind · Hellingstijgwind','Dagelijkse opwarming en nachtelijke afkoeling veroorzaken in berggebieden karakteristieke dal- en bergwinden. Wind die tegen een helling wordt opgestuwd kan aan de loefzijde bruikbare stijgwind veroorzaken. Aan de lijzijde van een berg of obstakel kan sterke turbulentie en dalende lucht voorkomen.',m(19,'§3.2.4 Lokale winden',{pageEnd:20}),cov('meteo-d110','meteo-d111','meteo-d112')),
        t('Venturi-effect terrein · Rug en pas versnellen wind','Wanneer lucht door een vernauwing zoals een pas stroomt, kan de windsnelheid toenemen. Ruggen, passen en terreinvernauwingen kunnen de lokale windrichting en -sterkte sterk beïnvloeden. Overdag warmt land sneller op dan zee; daardoor kan koele lucht vanaf zee landinwaarts stromen.',m(19,'§3.2.4 Lokale winden',{pageEnd:20}),cov('meteo-d113','meteo-d114','meteo-d115')),
        match('Koppel dagdeel aan typische hellingstroming.',[{left:'Overdag',right:'anabatisch/omhoog langs opgewarmde helling'},{left:'Nacht',right:'katabatisch/omlaag langs afgekoelde helling'}],'Lokale hellingwinden volgen dagelijkse opwarming en afkoeling.',m(19,'§3.2.4 Lokale winden',{pageEnd:20}),cov(),goals('meteo-g19'),study(1,'3.2 vraag 10')),
        q('Waar verwacht je bij wind tegen een bergrug bruikbare hellingstijgwind en waar juist vaak turbulentie?',['Stijgen loefzijde, turbulentie lijzijde','Turbulentie loefzijde, stijgen alleen boven de top','Beide alleen aan lijzijde','Geen verschil'],0,'Lucht wordt aan loefzijde omhooggedwongen; aan lijzijde kan loslating/rotor optreden.',m(19,'§3.2.4 Lokale winden',{pageEnd:20}),cov(),goals('meteo-g20'),study(1,'3.2 vraag 11')),
        q('Waarom ontstaat overdag vaak zeewind?',['Land warmt sneller op dan zee','Zee warmt sneller op dan land','Coriolis stopt volledig','Omdat luchtdruk overal gelijk wordt'],0,'Het warmere land veroorzaakt een lokale druk-/circulatieverdeling waardoor koelere zeelucht landinwaarts stroomt.',m(19,'§3.2.4 Lokale winden',{pageEnd:20}),cov(),goals('meteo-g21'),study(1,'3.2 vraag 12')),
      ],
    },
  },
{
    id:'meteo-3-2-4-2',title:'3.2 · Lokale winden · deel 2',
    lesson:{
      id:'meteo-3-2-4-2',title:'Lokale winden · deel 2',description:"Brongebonden leerlevel uit '§3.2.4 Lokale winden'.",minScore:80,
      steps:[
        t('Zeewindfront · Landwind omgekeerde nachtcyclus','De grens van binnenstromende zeelucht kan als een lokale convergentiezone werken. ’s Nachts kan de temperatuurverdeling omkeren en ontstaat onder geschikte omstandigheden een landwind richting zee. Lokale circulaties kunnen thermiek versterken, verplaatsen of begrenzen.',m(19,'§3.2.4 Lokale winden',{pageEnd:20}),cov('meteo-d116','meteo-d117','meteo-d118')),
        t('Terreinlezen is veiligheidskennis','Bij berg- en hellingvliegen moet lokale wind altijd in samenhang met terrein, rotor en lijzijde worden beoordeeld.',m(19,'§3.2.4 Lokale winden',{pageEnd:20}),cov('meteo-d119')),
        q('Welke uitspraak past bij zeewindfront?',['De grens van binnenstromende zeelucht kan als een lokale convergentiezone werken.','Het dictaat stelt het tegenovergestelde zonder voorwaarden.','Dit begrip wordt alleen als navigatieterm gebruikt.','Dit verschijnsel heeft volgens het dictaat geen meteorologische betekenis.'],0,'De grens van binnenstromende zeelucht kan als een lokale convergentiezone werken.',m(19,'§3.2.4 Lokale winden',{pageEnd:20}),cov()),
      ],
    },
  },
{
    id:'meteo-3-2-5-1',title:'3.2 · Golf · deel 1',
    lesson:{
      id:'meteo-3-2-5-1',title:'Golf · deel 1',description:"Brongebonden leerlevel uit '§3.2.5 Golf'.",minScore:80,
      steps:[
        t('Golf achter bergketen · Wind neemt toe met hoogte','Bij geschikte stroming kan aan de lijzijde van een bergketen een stationaire golf ontstaan. Een van de door het dictaat genoemde gunstige golfvoorwaarden is wind die met de hoogte toeneemt. Voor sterke golf moet de wind op hoogte ongeveer loodrecht op de bergkam staan.',m(20,'§3.2.5 Golf',{pageEnd:21}),cov('meteo-d120','meteo-d121','meteo-d122')),
        t('Stabiele laag rond kamhoogte · Lenticularis markeert golf','Een voldoende dikke stabiele laag rond of boven kamhoogte helpt golfvorming. Lensvormige lenticulariswolken kunnen de toppen van een golf zichtbaar maken. Onder de golf kan een rotorwolk ontstaan die sterke turbulentie markeert.',m(20,'§3.2.5 Golf',{pageEnd:21}),cov('meteo-d123','meteo-d124','meteo-d125')),
        t('Kamwolk · Golf kan hoog reiken','Bewolking rond de kam kan optreden wanneer lucht aan loefzijde opstijgt en condenseert. Golfstijgwind kan veel hoger reiken dan thermische stijgwind. Rotorgebieden kunnen zeer turbulente lucht bevatten en vragen ruime veiligheidsmarges.',m(20,'§3.2.5 Golf',{pageEnd:21}),cov('meteo-d126','meteo-d127','meteo-d128')),
        match('Koppel het golfverschijnsel aan de typische plaats/rol.',[{left:'Lenticularis',right:'golfkam'},{left:'Rotorwolk',right:'turbulente zone onder golf'},{left:'Kamwolk',right:'bewolking bij gedwongen stijging rond de bergrug'}],'Deze wolken kunnen een golf-/bergstroming zichtbaar maken.',m(20,'§3.2.5 Golf',{pageEnd:21}),cov(),goals('meteo-g22'),study(1,'3.2 vraag 13')),
        q('Welke wolk is een sterke aanwijzing voor golfstijgwind?',['Lenticularis','Stratus fractus','Nimbostratus','Mist'],0,'Lensvormige lenticularis kan een golfkam markeren.',m(20,'§3.2.5 Golf',{pageEnd:21}),cov()),
      ],
    },
  },
{
    id:'meteo-3-2-5-2',title:'3.2 · Golf · deel 2',
    lesson:{
      id:'meteo-3-2-5-2',title:'Golf · deel 2',description:"Brongebonden leerlevel uit '§3.2.5 Golf'.",minScore:80,
      steps:[
        t('Wolk blijft vrijwel stationair · Golfpositie aan lijzijde','Golfwolken kunnen vrijwel op dezelfde plaats blijven terwijl lucht erdoorheen stroomt. Karakteristieke golf- en rotorstructuren bevinden zich aan de lijzijde van de bergketen.',m(20,'§3.2.5 Golf',{pageEnd:21}),cov('meteo-d129','meteo-d130')),
        q('Welke uitspraak past bij wolk blijft vrijwel stationair?',['Golfwolken kunnen vrijwel op dezelfde plaats blijven terwijl lucht erdoorheen stroomt.','Het dictaat stelt het tegenovergestelde zonder voorwaarden.','Dit begrip wordt alleen als navigatieterm gebruikt.','Dit verschijnsel heeft volgens het dictaat geen meteorologische betekenis.'],0,'Golfwolken kunnen vrijwel op dezelfde plaats blijven terwijl lucht erdoorheen stroomt.',m(20,'§3.2.5 Golf',{pageEnd:21}),cov()),
      ],
    },
  }
]
