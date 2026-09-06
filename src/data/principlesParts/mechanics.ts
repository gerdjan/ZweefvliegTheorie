import type { SourcedUnit } from '../../domain/types'
import { b, q, study, t } from './helpers'

export const units:SourcedUnit[] = [
    {
      id:'principles-5-2-mechanics',
      title:'5.2 · Vliegmechanica en glijvlucht',
      lesson:{
        id:'principles-5-2-mechanics',
        title:'Vliegmechanica en glijvlucht',
        description:'Prestatieleer, vliegeigenschappen en de krachten/hoeken van de glijvlucht.',
        minScore:80,
        steps:[
          t('Twee delen','Vliegmechanica wordt verdeeld in prestatieleer (beweging van het zwaartepunt en prestaties) en vliegeigenschappen (bewegingen om het zwaartepunt).',b(21,'§5.2 Vliegmechanica')),
          q('Waar richt prestatieleer zich volgens het dictaat op?',['Beweging van het vliegtuigzwaartepunt en prestaties','Alleen radiocommunicatie','Alleen constructiesterkte','Uitsluitend onderhoud'],0,'Prestatieleer gaat over de beweging van het zwaartepunt en prestaties zoals beste glijhoek en minimum dalen.',b(21,'§5.2 Vliegmechanica'),study(1,'§5.2 Vliegmechanica')),
          t('Gewicht levert de voorwaartse component','Zonder propeller daalt het zweefvliegtuig. De component G2 van het gewicht langs de vliegbaan compenseert de weerstand en houdt zo de snelheid in stand.',b(22,'§5.2.1 Vliegtuigprestaties')),
          t('Vier belangrijke hoeken','Het dictaat onderscheidt standhoek (langsas-horizon), baan-/glijhoek (vliegbaan-horizon), instelhoek (koorde-langsas) en invalshoek (koorde-luchtstroom).',b(22,'§5.2.1 Hoeken')),
          q('Welke hoek ligt tussen de vliegbaan en de horizon?',['Instelhoek','Invalshoek','Baanhoek of glijhoek','V-stelling'],2,'De hoek van de baan met de horizon heet baanhoek of glijhoek.',b(22,'§5.2.1 Hoeken'),study(1,'§5.2 Vliegmechanica')),
        ],
      },
    },
    {
      id:'principles-5-2-polar',
      title:'5.2 · Snelheidspolaire en glijgetal',
      lesson:{
        id:'principles-5-2-polar',
        title:'Snelheidspolaire en glijgetal',
        description:'Lees minimumsnelheid, minimum dalen, beste glijgetal en maximumsnelheid uit een polaire.',
        minScore:80,
        steps:[
          t('Wat de polaire weergeeft','De snelheidspolaire zet vliegsnelheid op de horizontale as uit tegen daalsnelheid op de verticale as. Elk type zweefvliegtuig heeft zijn eigen polaire.',b(22,'§5.2.2 Snelheidspolaire')),
          t('Vier kernpunten','Je moet minimumsnelheid/overtreksnelheid, minimum daalsnelheid, snelheid voor beste glijgetal en maximum toegestane snelheid kunnen herkennen.',b(22,'§5.2.2 Vier punten op de snelheidspolaire')),
          q('Welke snelheid hoort bij het bovenste punt van de snelheidspolaire?',['De snelheid voor minimum daalsnelheid','Vne','Altijd de overtreksnelheid','De grondsnelheid'],0,'Het bovenste punt geeft de minimum daalsnelheid en de daarbij horende vliegsnelheid.',b(22,'§5.2.2 Snelheidspolaire',23),study(1,'§5.2 Vliegmechanica')),
          t('Glijgetal','Het glijgetal is vliegsnelheid gedeeld door daalsnelheid, mits beide in dezelfde eenheid zijn uitgedrukt.',b(23,'§5.2.2 Glijgetal')),
          t('Beste glijgetal','De snelheid voor het beste glijgetal vind je in rustige lucht met een raaklijn vanuit de oorsprong aan de polaire. Dit is de snelheid waarmee je uit een gegeven hoogte de grootste afstand aflegt.',b(23,'§5.2.2 Snelheid voor beste glijgetal')),
          q('Een toestel vliegt 150 km/h en daalt 5 km/h. Welk glijgetal volgt uit de methode van het dictaat?',['15','30','45','75'],1,'150 / 5 = 30.',b(23,'§5.2.2 Glijgetal'),study(1,'§5.2 Vliegmechanica')),
          t('Snelheid versus afstand','Bij snelheden boven de beste glijgetalsnelheid nemen in het voorbeeld daalsnelheid, glijhoek en weerstand toe en neemt het glijgetal af.',b(25,'§5.2.2 Conclusie glijgetal')),
        ],
      },
    },
    {
      id:'principles-5-2-wind-maccready',
      title:'5.2 · Wind, daalgebieden en MacCready',
      lesson:{
        id:'principles-5-2-wind-maccready',
        title:'Wind, daalgebieden en MacCready',
        description:'Waarom de optimale steeksnelheid verandert met tegenwind en dalende lucht.',
        minScore:80,
        steps:[
          t('Tegenwind vraagt sneller vliegen','Voor maximale grondafstand tegen de wind ligt de optimale snelheid hoger dan de snelheid voor beste glijgetal in windstilte. Op de polaire start de raaklijn dan bij de tegenwindsnelheid op de horizontale as.',b(23,'§5.2.2 Beste glijgetal bij tegenwind')),
          q('Hoe verandert de optimale snelheid om tegen de wind zo ver mogelijk te komen?',['Je vliegt sneller dan de windstille beste-glijgetalsnelheid','Je vliegt altijd langzamer','De optimale snelheid verandert nooit','Je vliegt op overtreksnelheid'],0,'Het dictaat laat zien dat tegenwind een hogere optimale snelheid vraagt.',b(23,'§5.2.2 Beste glijgetal bij tegenwind'),study(1,'§5.2 Vliegmechanica')),
          t('Daalgebied verschuift de polaire','In dalende lucht wordt de polaire naar beneden verschoven. De raaklijn vanuit de oorsprong raakt dan bij een hogere snelheid: ook in sterker dalen moet je sneller steken.',b(25,'§5.2.2 Beste glijhoek in daalwind')),
          t('MacCreadyring','Een MacCreadyring rond de variometer kan, op basis van de polaire, een passende steeksnelheid aangeven voor de gemeten stijg- of daalwind. Voor de beste glijhoek terug naar het veld wordt de ring in het beschreven gebruik op 0 m/s gezet.',b(26,'§5.2.2 MacCreadyring en sollfahrtgeber')),
          q('Wat gebeurt er met de aanbevolen steeksnelheid wanneer je volgens de polaire door sterker dalende lucht vliegt?',['Die wordt hoger','Die wordt lager tot overtreksnelheid','Die blijft altijd gelijk','Die wordt nul'],0,'Een naar beneden verschoven polaire geeft een hogere snelheid voor de beste glijhoek.',b(25,'§5.2.2 Daalwindgebied',26),study(1,'§5.2 Vliegmechanica')),
        ],
      },
    },
    {
      id:'principles-5-2-ballast',
      title:'5.2 · Waterballast en de polaire',
      lesson:{
        id:'principles-5-2-ballast',
        title:'Waterballast en de polaire',
        description:'Waarom een zwaarder zweefvliegtuig sneller kan steken maar slechter klimt.',
        minScore:80,
        steps:[
          t('Polaire verschuift','Met waterballast neemt de vleugelbelasting toe. De polaire verschuift naar rechts en omlaag: vergelijkbare glijverhoudingen worden bij hogere snelheden bereikt.',b(24,'§5.2.2 Beste snelheid met waterballast')),
          t('Slechter stijgen, beter steken','Het dictaat vat waterballast samen als: in het lage snelheidsgebied is de eigen daalsnelheid hoger, terwijl bij hoge snelheden de prestaties gunstiger kunnen zijn. Daardoor stijgt het toestel slechter maar steekt het beter.',b(27,'§5.2.2 Waterballast')),
          q('Wat is het typische effect van waterballast volgens het dictaat?',['Slechter stijgen, beter steken','Beter stijgen, slechter steken','Lagere overtreksnelheid en lager gewicht','Geen verandering in de polaire'],0,'Het dictaat beschrijft een hogere vleugelbelasting: slechter klimmen in zwakke thermiek, maar gunstiger steken bij hogere snelheden.',b(27,'§5.2.2 Waterballast'),study(2,'Aanvullende vragen bij §5.2')),
          t('Overtreksnelheid neemt toe','Bij hogere vleugelbelasting neemt de overtreksnelheid toe. De snelheden voor minimum dalen en beste glijgetal liggen eveneens hoger.',b(25,'§5.2.2 DG300 en vleugelbelasting')),
          t('Wanneer water lozen','Het dictaat adviseert het vliegtuighandboek te volgen, water vooral bij goede/brede thermiek te gebruiken en ruim voor de landing te lozen.',b(26,'§5.2.2 Vliegen met water',27)),
          q('Waarom is waterballast bij zwakke, nauwe thermiek vaak ongunstig?',['De hogere eigen daalsnelheid en grotere bochtstraal kunnen het klimmen verslechteren','Omdat de luchtdichtheid dan nul wordt','Omdat het richtingsroer niet meer werkt','Omdat de geïnduceerde weerstand altijd verdwijnt'],0,'Het dictaat beschrijft slechter stijgen en een grotere bochtstraal; in nauwe/zwakke bellen kan dat het voordeel van sneller steken tenietdoen.',b(27,'§5.2.2 Invloed diameter bellen'),study(2,'Aanvullende vragen bij §5.2')),
        ],
      },
    },
]
