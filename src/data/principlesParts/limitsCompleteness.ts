import type { SourcedUnit } from '../../domain/types'
import { b, q, study, t } from './helpers'

export const units:SourcedUnit[] = [
  {
    id:'principles-5-5-turn-forces-detail',
    title:'5.5 · Bochtkrachten en overtreksnelheid',
    lesson:{
      id:'principles-5-5-turn-forces-detail',
      title:'Bochtkrachten en overtreksnelheid',
      description:'Centripetale kracht, schijnbaar gewicht en waarom steilere bochten meer snelheid en lift vragen.',
      minScore:80,
      steps:[
        t('Lift in een bocht','In een bocht wordt de totale lift ontbonden in een verticale component die ongeveer het gewicht draagt en een horizontale component die de centripetale, middelpuntzoekende versnelling veroorzaakt.',b(33,'§5.5.1 Bochten en g-krachten')),
        t('Centrifugaalkracht en schijnbaar gewicht','De massatraagheid van vliegtuig en inzittenden verzet zich tegen de middelpuntzoekende versnelling. Het dictaat noemt de ervaren reactie centrifugaalkracht. Samen met de zwaartekracht vormt die het schijnbare gewicht dat je als extra druk in de stoel ervaart.',b(33,'§5.5.1 Bochten en g-krachten')),
        q('Welke component van de lift zorgt er in de beschrijving van het dictaat voor dat het vliegtuig de bocht maakt?',['De horizontale liftcomponent','Alleen de verticale liftcomponent','Alleen de zwaartekracht','De remousbelasting'],0,'De horizontale component van de lift levert de centripetale versnelling die de vliegbaan kromt.',b(33,'§5.5.1 Bochten en g-krachten'),study(2,'§5.5 Beperkingen')),
        t('30° en 60° dwarshelling','Het dictaat geeft bij 30° dwarshelling ongeveer 1,15g en circa 7% hogere overtreksnelheid. Bij 60° is dat ongeveer 2g en circa 41% hogere overtreksnelheid.',b(33,'§5.5.1 Bochten en g-krachten')),
        q('Hoeveel neemt de overtreksnelheid volgens de tabel ongeveer toe bij 30° dwarshelling?',['7%','15%','30%','41%'],0,'Voor 30° noemt het dictaat ongeveer 1,15g en een toename van de overtreksnelheid met circa 7%.',b(33,'§5.5.1 Bochten en g-krachten'),study(2,'§5.5 Beperkingen')),
        t('Steile bochten','Voor dezelfde invalshoek moet je in een steile bocht sneller vliegen om voldoende lift te maken. De bron zegt dat steile bochten in de regel met zowel grotere snelheid als grotere invalshoek worden gevlogen.',b(33,'§5.5.1 Bochten en g-krachten')),
      ],
    },
  },
  {
    id:'principles-5-5-slip-skid-detail',
    title:'5.5 · Piefje, slippen en schuiven',
    lesson:{
      id:'principles-5-5-slip-skid-detail',
      title:'Piefje, slippen en schuiven',
      description:'Herkennen en corrigeren van zuivere, schuivende en slippende bochten.',
      minScore:80,
      steps:[
        t('Piefje als coördinatie-indicatie','In een zuivere bocht staat het piefje in het midden. Bij een schuivende bocht wijst het naar de binnenkant van de bocht; bij een slippende bocht naar de buitenkant.',b(33,'§5.5.2 Zuivere en onzuivere bochten',34)),
        q('Het piefje wijst naar de binnenkant van de bocht. Welke toestand beschrijft het dictaat?',['Een schuivende bocht','Een slippende bocht','Een zuivere bocht','Rechtlijnige vlucht'],0,'Te veel voetenstuur geeft een schuivende bocht; het piefje wijst dan naar binnen.',b(33,'§5.5.2 Schuivende bocht'),study(2,'§5.5 Beperkingen')),
        t('Waarom schuiven riskant is','In een schuivende bocht is de binnenvleugel langzamer en wordt zij bovendien gedeeltelijk door de romp afgeschermd. Bij te lage snelheid of te grote invalshoek kan de binnenvleugel overtrekken en kan een tolvlucht ontstaan.',b(33,'§5.5.2 Schuivende bocht')),
        t('Slippende bocht','Bij te weinig voetenstuur ontstaat een slippende bocht. Het piefje wijst naar buiten. Volgens het dictaat is het tolvluchtrisico hierbij kleiner omdat de langzamere binnenvleugel niet door de romp wordt afgeschermd.',b(34,'§5.5.2 Slippende bocht')),
        t('Onzuiver kost weerstand','Onzuivere bochten veroorzaken meer weerstand dan een zuivere bocht.',b(34,'§5.5.2 Zuivere en onzuivere bochten')),
        q('Hoe corrigeer je volgens het dictaat een onzuivere bocht?',['Voeten tegen de richting van het piefje geven of de dwarshelling aanpassen','Altijd meer voeten in dezelfde richting als het piefje geven','Alle roeren loslaten en niets doen','Alleen de remkleppen openen'],0,'De bron zegt: voeten “tegen” geven - tegen de richting van het piefje - of de dwarshelling aanpassen.',b(34,'§5.5.2 Zuivere en onzuivere bochten'),study(2,'§5.5 Beperkingen')),
      ],
    },
  },
  {
    id:'principles-5-5-loadfactor-detail',
    title:'5.5 · Belastingfactor en high-speed stall',
    lesson:{
      id:'principles-5-5-loadfactor-detail',
      title:'Belastingfactor en high-speed stall',
      description:'Hoe g-belasting snel oploopt en waarom ook bij hoge snelheid een overtrek mogelijk is.',
      minScore:80,
      steps:[
        t('80° dwarshelling','Bij ongeveer 80° dwarshelling noemt het dictaat circa 5g. Kleine ongecontroleerde stuurbewegingen kunnen dan snel tot overbelasting leiden.',b(34,'§5.5.3 Belastingsfactor')),
        t('Herstel uit een duik','De bron adviseert een zweefvliegtuig beheerst horizontaal te leggen en daarna de hoge snelheid rustig terug te brengen. Abrupt hard optrekken kan de g-belasting alsnog te hoog maken.',b(34,'§5.5.3 Belastingsfactor')),
        q('Wat is volgens het dictaat de veilige gedachte bij herstel uit een snelle duik?',['Eerst beheerst horizontaal leggen en daarna de snelheid rustig terugbrengen','Zo hard mogelijk aan de knuppel trekken','Eerst nog versnellen en daarna abrupt optrekken','Volledige rolroeruitslag geven bij Vne'],0,'De bron waarschuwt dat abrupt optrekken bij hoge snelheid het toestel kan overbelasten.',b(34,'§5.5.3 Belastingsfactor'),study(2,'§5.5 Beperkingen')),
        t('Relatie n en snelheid','Het dictaat gebruikt voor het voorbeeld de relatie n = (V / Vstall)². Daardoor neemt de mogelijke belasting sterk toe wanneer je bij een veelvoud van de overtreksnelheid snel naar een grote invalshoek stuurt.',b(34,'§5.5.3 Belastingsfactor')),
        t('High-speed stall','Een high-speed stall is een overtrek bij hoge vliegsnelheid door een snelle, te grote invalshoekvergroting. Hoge snelheid beschermt dus niet tegen overtrek wanneer de kritische invalshoek wordt overschreden.',b(34,'§5.5.3 Belastingsfactor')),
        q('Een toestel heeft Vstall 65 km/h en wordt volgens het rekenvoorbeeld bij 195 km/h overtrokken. Welke belasting geeft de bron?',['9g','3g','1g','6g'],0,'De bron rekent (195/65)² = 9g.',b(34,'§5.5.3 Belastingsfactor'),study(2,'§5.5 Beperkingen')),
      ],
    },
  },
  {
    id:'principles-5-5-certification-detail',
    title:'5.5 · Manoeuvreer-, remous- en certificeringsgrenzen',
    lesson:{
      id:'principles-5-5-certification-detail',
      title:'Manoeuvreer-, remous- en certificeringsgrenzen',
      description:'Waarom stuurbelasting en turbulentie samen gevaarlijk kunnen worden en welke voorbeeldlimieten het dictaat geeft.',
      minScore:80,
      steps:[
        t('Belastingen kunnen optellen','Hoge manoeuvreerbelasting en remousbelasting kunnen tegelijk optreden. De combinatie kan de totale belasting boven de toegestane grens brengen.',b(34,'§5.5.4 Manoeuvreerbelasting en remousbelasting')),
        q('Waarom is hard optrekken in sterke turbulentie extra riskant?',['Manoeuvreer- en remousbelasting kunnen samen te groot worden','Omdat de zwaartekracht dan verdwijnt','Omdat de Vne automatisch stijgt','Omdat turbulentie de vleugelbelasting altijd verlaagt'],0,'De bron waarschuwt expliciet voor de combinatie van manoeuvreer- en remousbelasting.',b(34,'§5.5.4 Manoeuvreerbelasting en remousbelasting'),study(2,'§5.5 Beperkingen')),
        t('Utility en Aerobatic','Het dictaat onderscheidt onder meer de certificeringscategorieën Utility en Aerobatic. Een vliegtuig voor kunstvluchten moet hogere belastingen kunnen verdragen dan een toestel dat daarvoor niet is toegelaten.',b(34,'§5.5.4 Manoeuvreerbelasting en remousbelasting')),
        t('Voorbeeldlimieten uit de bron','De tabel in het dictaat geeft als voorbeeld voor Utility +5,3g bij VA, +4,0g bij Vne, -2,65g bij negatieve VA-belasting en -1,5g bij Vne-negatief. Voor Aerobatic noemt de tabel hogere waarden.',b(34,'§5.5.4 Manoeuvreerbelasting en remousbelasting')),
        t('VA als grens voor volle roeruitslag','VA is de manoeuvreersnelheid. Boven VA mag volgens de bron geen plotselinge volle roeruitslag worden gegeven, omdat de structurele belasting dan te hoog kan worden.',b(34,'§5.5.4 Manoeuvreerbelasting en remousbelasting')),
        q('Welke uitspraak over VA is volgens het dictaat juist?',['Boven VA geen plotselinge volle roeruitslag geven','VA is altijd gelijk aan Vne','Onder VA is flutter gegarandeerd','VA geldt alleen op de grond'],0,'VA markeert de grens waarboven een plotselinge volledige roeruitslag niet is toegestaan.',b(34,'§5.5.4 Manoeuvreerbelasting en remousbelasting'),study(2,'§5.5 Beperkingen')),
      ],
    },
  },
  {
    id:'principles-5-5-vn-detail',
    title:'5.5 · V-n-diagram in detail',
    lesson:{
      id:'principles-5-5-vn-detail',
      title:'V-n-diagram in detail',
      description:'Positieve en negatieve grenzen, VA, Vne, Vd, VRA en de veiligheidsfactor.',
      minScore:80,
      steps:[
        t('Positief en negatief','In het V-n-diagram staan positieve belastingen boven nul en negatieve eronder. De maximale toegestane negatieve belasting is volgens de bron altijd kleiner in grootte dan de maximale positieve belasting.',b(35,'§5.5.5 Belastingdiagram',36)),
        t('Groen en geel snelheidsgebied','In het LS4-voorbeeld loopt het groene gebied van 100 tot 190 km/h. Het gele gebied loopt van 190 tot 280 km/h; daar zijn de toegestane roeruitslagen beperkt en bij Vne noemt de bron maximaal ongeveer een derde volledige uitslag.',b(35,'§5.5.5 Belastingdiagram')),
        q('Wat betekent het gele snelheidsgebied in het LS4-voorbeeld?',['Boven VA zijn roeruitslagen beperkt','Volledige roeruitslagen zijn altijd toegestaan','Het is alleen een markering voor minimumsnelheid','Het betekent dat Vne niet meer geldt'],0,'De bron koppelt het gele gebied aan snelheden boven VA, waar volledige roeruitslagen niet meer zijn toegestaan.',b(35,'§5.5.5 Belastingdiagram'),study(2,'§5.5 Beperkingen')),
        t('Vd en Vne','Vd is de ontwerpduiksnelheid waarop het toestel voor certificering wordt getest. Het dictaat vermeldt Vne = 0,85 × Vd. Vne overschrijden is niet toegestaan en kan tot schade of breuk leiden.',b(35,'§5.5.5 Belastingdiagram')),
        t('Onder VA eerst overtrek','In het voorbeeld kan het toestel tot VA bij een abrupte positieve stuurbeweging eerder overtrekken dan de structurele positieve limiet overschrijden. Het V-n-diagram toont dit als het gebied waar die structurele belasting niet bereikbaar is vóór de stallgrens.',b(35,'§5.5.5 Belastingdiagram')),
        t('VRA bij onrustige lucht','VRA is de lagere maximumsnelheid voor rough air/onrustige lucht. Turbulentie of thermiekstoten kunnen al onder Vne schadelijke remousbelasting veroorzaken.',b(36,'§5.5.5 Belastingdiagram')),
        t('Veiligheidsfactor','De fabrikant moet volgens het dictaat met breuktesten aantonen dat de constructie minstens een factor 1,5 sterker is dan de limietbelasting. Die marge heet de veiligheidsfactor; zij is geen toestemming om buiten de gebruikslimieten te vliegen.',b(36,'§5.5.5 Veiligheidsfactor')),
        q('Welke veiligheidsfactor noemt het dictaat?',['Minstens 1,5','1,05','2,5','10'],0,'De bron noemt een veiligheidsfactor van minstens 1,5 boven de limietbelasting.',b(36,'§5.5.5 Veiligheidsfactor'),study(2,'§5.5 Beperkingen')),
      ],
    },
  },
  {
    id:'principles-5-5-flutter-detail',
    title:'5.5 · Flutter in detail',
    lesson:{
      id:'principles-5-5-flutter-detail',
      title:'Flutter in detail',
      description:'Buiging, torsie, kritische snelheid en waarom de trillingen elkaar kunnen versterken.',
      minScore:80,
      steps:[
        t('Certificeringsmarge voor flutter','Het dictaat zegt dat flutter pas mag optreden wanneer de maximumsnelheid met 20% wordt overschreden. De toegestane snelheids- en g-grenzen blijven desondanks de grenzen waarbinnen de constructieve sterkte en demping zijn bedoeld te worden gebruikt.',b(36,'§5.5.6 Flutter')),
        q('Wanneer mag flutter volgens de genoemde certificeringseis pas optreden?',['Pas boven 120% van de maximumsnelheid','Al bij 80% van Vne','Precies bij VA','Bij elke snelheid zodra de rolroeren bewegen'],0,'De bron vermeldt dat flutter pas mag optreden wanneer de maximumsnelheid met 20% is overschreden.',b(36,'§5.5.6 Flutter'),study(2,'§5.5 Beperkingen')),
        t('Buiging en torsie','Een vleugel kan door een roeruitslag of remousstoot in een buigingstrilling of in een torsietrilling worden gebracht. Torsie is een draaiingstrilling.',b(36,'§5.5.6 Flutter')),
        t('Frequenties veranderen met snelheid','Volgens het dictaat neemt bij hogere vliegsnelheid meestal de buigingsfrequentie toe en de torsiefrequentie af.',b(36,'§5.5.6 Flutter')),
        t('Trillingen kunnen koppelen','Buiten het toegestane snelheidsgebied kunnen buigings- en torsietrilling elkaar in frequentie naderen en versterken. De bron waarschuwt dat dit in enkele seconden tot vleugelbreuk kan leiden.',b(36,'§5.5.6 Flutter')),
        q('Wat moet je doen als je bij hoge snelheid trillingen in de stuurvlakken voelt?',['Snelheid verminderen','Verder versnellen om de resonantie te passeren','Volledige rolroeruitslagen geven','De trim volledig naar achteren zetten'],0,'Het dictaat zegt bij dergelijke trillingen de snelheid te verminderen.',b(36,'§5.5.6 Flutter'),study(2,'§5.5 Beperkingen')),
      ],
    },
  },
]
