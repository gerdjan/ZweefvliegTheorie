import type { SourceReference } from '../domain/types'
import type { KnowledgeChapter, KnowledgeElement } from './principlesKnowledgeIndex'

const b=(page:number,section:string,pageEnd?:number):SourceReference=>({
  file:'5-Beginselen.pdf',
  page,
  ...(pageEnd?{pageEnd}:{}),
  section,
})

const e=(id:string,title:string,meaning:string,source:SourceReference,lessonIds:string[]=[]):KnowledgeElement=>({id,title,meaning,source,lessonIds})

export const principlesKnowledgeFiveFive:KnowledgeChapter = {
  id:'5.5',
  title:'5.5 · Beperkingen en belastingen',
  auditCovered:47,
  auditTotal:47,
  auditComplete:true,
  elements:[
    e('5-5-limits-purpose','Gebruikslimieten','De constructie is sterk genoeg voor normaal gebruik maar niet onbeperkt. Snelheid, roeruitslag, g-belasting en turbulentie moeten binnen de goedgekeurde grenzen blijven.',b(33,'§5.5 Beperkingen'),['principles-5-5-turn-load']),
    e('5-5-turn-lift-components','Liftcomponenten in een bocht','De verticale liftcomponent draagt ongeveer het gewicht; de horizontale component levert de centripetale versnelling die de vliegbaan doet krommen.',b(33,'§5.5.1 Bochten en g-krachten'),['principles-5-5-turn-load','principles-5-5-turn-forces-detail']),
    e('5-5-apparent-weight','Centripetaal, centrifugaal en schijnbaar gewicht','De bron koppelt de middelpuntzoekende kracht aan de bocht en beschrijft de ervaren reactie als centrifugaalkracht. Samen met zwaartekracht ontstaat het schijnbare gewicht dat je als extra g ervaart.',b(33,'§5.5.1 Bochten en g-krachten'),['principles-5-5-turn-forces-detail']),
    e('5-5-bank-stall-speed','Dwarshelling en overtreksnelheid','Bij 30° noemt de bron circa 1,15g en +7% overtreksnelheid; bij 60° circa 2g en +41%. Steile bochten worden doorgaans met meer snelheid én grotere invalshoek gevlogen.',b(33,'§5.5.1 Bochten en g-krachten'),['principles-5-5-turn-load','principles-5-5-turn-forces-detail']),
    e('5-5-piefje','Piefje en bochtcoördinatie','Piefje midden betekent zuiver; naar binnen betekent schuiven; naar buiten betekent slippen.',b(33,'§5.5.2 Zuivere en onzuivere bochten',34),['principles-5-5-turn-load','principles-5-5-slip-skid-detail']),
    e('5-5-skid-risk','Schuivende bocht en tolvluchtrisico','Bij te veel voetenstuur kan de langzamere binnenvleugel door de romp worden afgeschermd. Bij lage snelheid kan zij overtrekken en een tolvlucht inzetten.',b(33,'§5.5.2 Schuivende bocht'),['principles-5-5-turn-load','principles-5-5-slip-skid-detail']),
    e('5-5-slip','Slippende bocht','Bij te weinig voetenstuur wijst het piefje naar buiten. De bron noemt het tolvluchtrisico kleiner dan bij schuiven, omdat de binnenvleugel niet door de romp wordt afgeschermd.',b(34,'§5.5.2 Slippende bocht'),['principles-5-5-slip-skid-detail']),
    e('5-5-turn-correction','Onzuivere bocht corrigeren','Onzuivere bochten geven extra weerstand. Corrigeer volgens de bron met voeten tegen de richting van het piefje of door de dwarshelling aan te passen.',b(34,'§5.5.2 Zuivere en onzuivere bochten'),['principles-5-5-slip-skid-detail']),
    e('5-5-loadfactor','Belastingfactor n','Belastingfactor n is lift gedeeld door zwaartekracht en wordt in g uitgedrukt. Bij 2g is tweemaal zoveel lift nodig als bij 1g.',b(34,'§5.5.3 Belastingsfactor'),['principles-5-5-turn-load','principles-5-5-loadfactor-detail']),
    e('5-5-80deg','Ongeveer 5g bij 80°','De bron noemt bij ongeveer 80° dwarshelling circa 5g en waarschuwt dat ongecontroleerde stuurbewegingen dan snel tot overbelasting leiden.',b(34,'§5.5.3 Belastingsfactor'),['principles-5-5-loadfactor-detail']),
    e('5-5-pullout','Herstel uit een duik','Eerst beheerst horizontaal leggen en daarna de hoge snelheid rustig terugbrengen; abrupt optrekken kan de g-belasting te groot maken.',b(34,'§5.5.3 Belastingsfactor'),['principles-5-5-loadfactor-detail']),
    e('5-5-n-formula','Relatie n = (V/Vstall)²','Het dictaat gebruikt n = (V/Vstall)² om te laten zien hoe snel belasting kan oplopen wanneer bij hoge snelheid tot de kritische invalshoek wordt getrokken.',b(34,'§5.5.3 Belastingsfactor'),['principles-5-5-loadfactor-detail']),
    e('5-5-high-speed-stall','High-speed stall','Ook bij hoge snelheid kan een overtrek ontstaan als de invalshoek snel genoeg tot boven de kritische waarde wordt gebracht.',b(34,'§5.5.3 Belastingsfactor'),['principles-5-5-loadfactor-detail']),
    e('5-5-manoeuvre-gust','Manoeuvreer- en remousbelasting','Manoeuvreerbelasting ontstaat door stuurbewegingen; remousbelasting door plotselinge invalshoekverandering in onrustige lucht. Beide kunnen tegelijk optreden en optellen.',b(34,'§5.5.4 Manoeuvreerbelasting en remousbelasting'),['principles-5-5-vn-diagram','principles-5-5-certification-detail']),
    e('5-5-cert-categories','Utility en Aerobatic','De bron onderscheidt certificeringscategorieën met verschillende toegestane belastingen. Aerobatic is bedoeld voor hogere belastingen dan Utility.',b(34,'§5.5.4 Manoeuvreerbelasting en remousbelasting'),['principles-5-5-certification-detail']),
    e('5-5-example-load-limits','Voorbeeldlimieten Utility','De tabel geeft voor Utility als voorbeeld +5,3g bij VA, +4,0g bij Vne, -2,65g bij VA-negatief en -1,5g bij Vne-negatief.',b(34,'§5.5.4 Manoeuvreerbelasting en remousbelasting'),['principles-5-5-certification-detail']),
    e('5-5-va','VA - manoeuvreersnelheid','Boven VA mag volgens de bron geen plotselinge volledige roeruitslag worden gegeven.',b(34,'§5.5.4 Manoeuvreerbelasting en remousbelasting',35),['principles-5-5-vn-diagram','principles-5-5-certification-detail']),
    e('5-5-vn','V-n-diagram','Het V-n-diagram zet snelheid V horizontaal uit tegen belastingfactor n verticaal en toont de grenzen waarbinnen snelheid en belasting gecombineerd mogen worden.',b(34,'§5.5.5 Belastingdiagram',36),['principles-5-5-vn-diagram','principles-5-5-vn-detail']),
    e('5-5-positive-negative','Positieve en negatieve belasting','Positieve belasting staat boven nul, negatieve eronder. De maximale negatieve belasting is volgens de bron lager dan de maximale positieve belasting.',b(35,'§5.5.5 Belastingdiagram',36),['principles-5-5-vn-detail']),
    e('5-5-green-yellow','Groen en geel snelheidsgebied','In het LS4-voorbeeld loopt het groene gebied tot VA. In het gele gebied boven VA zijn de toegestane roeruitslagen beperkt; bij Vne noemt de bron maximaal ongeveer een derde uitslag.',b(35,'§5.5.5 Belastingdiagram'),['principles-5-5-vn-detail']),
    e('5-5-vd-vne','Vd en Vne','Vd is de ontwerpduiksnelheid. Het dictaat geeft de relatie Vne = 0,85 × Vd en verbiedt overschrijding van Vne.',b(35,'§5.5.5 Belastingdiagram'),['principles-5-5-vn-detail']),
    e('5-5-stall-before-structure','Onder VA: eerder overtrek dan positieve overbelasting','In het getoonde voorbeeld ligt onder VA de positieve stallgrens vóór de structurele limiet: bij een abrupte positieve uitslag treedt eerder overtrek op.',b(35,'§5.5.5 Belastingdiagram'),['principles-5-5-vn-diagram','principles-5-5-vn-detail']),
    e('5-5-vra','VRA - rough air','VRA is een lagere maximumsnelheid voor onrustige lucht, omdat turbulentie of thermiekstoten ook onder Vne schade kunnen veroorzaken.',b(36,'§5.5.5 Belastingdiagram'),['principles-5-5-vn-diagram','principles-5-5-vn-detail']),
    e('5-5-safety-factor','Veiligheidsfactor 1,5','De fabrikant moet volgens de bron aantonen dat de constructie minstens een factor 1,5 boven de limietbelasting aankan. Dit is constructiemarge, geen extra operationeel toegestaan gebied.',b(36,'§5.5.5 Veiligheidsfactor'),['principles-5-5-vn-detail']),
    e('5-5-flutter','Flutter','Flutter is een onstabiele trilling die snel destructief kan worden. Binnen de toegestane grenzen moeten constructiestijfheid en demping trillingen uitdoven.',b(36,'§5.5.6 Flutter'),['principles-5-5-flutter']),
    e('5-5-flutter-120','Fluttercertificering boven 120% maximumsnelheid','Het dictaat zegt dat flutter pas mag optreden nadat de maximumsnelheid met 20% is overschreden.',b(36,'§5.5.6 Flutter'),['principles-5-5-flutter-detail']),
    e('5-5-bending-torsion','Buigings- en torsietrilling','Een vleugel kan buigen of torderen. Bij hogere snelheid neemt volgens de bron meestal de buigingsfrequentie toe en de torsiefrequentie af.',b(36,'§5.5.6 Flutter'),['principles-5-5-flutter-detail']),
    e('5-5-flutter-coupling','Koppeling van trillingen','Buiten het toegestane gebied kunnen buiging en torsie elkaar in frequentie naderen en versterken, waarna breuk in korte tijd mogelijk is.',b(36,'§5.5.6 Flutter'),['principles-5-5-flutter-detail']),
    e('5-5-flutter-response','Reactie op trillingen','Te veel roerspeling kan flutter versterken. Voel je bij hoge snelheid trillingen in de stuurvlakken, dan zegt de bron de snelheid te verminderen.',b(36,'§5.5.6 Flutter'),['principles-5-5-flutter','principles-5-5-flutter-detail']),
  ],
}
