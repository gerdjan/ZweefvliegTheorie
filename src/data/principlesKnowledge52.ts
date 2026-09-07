import type { SourceReference } from '../domain/types'
import type { KnowledgeChapter, KnowledgeElement } from './principlesKnowledgeIndex'

const b=(page:number,section:string,pageEnd?:number):SourceReference=>({
  file:'5-Beginselen.pdf',
  page,
  ...(pageEnd?{pageEnd}:{}),
  section,
})

const e=(id:string,title:string,meaning:string,source:SourceReference,lessonIds:string[]):KnowledgeElement=>({id,title,meaning,source,lessonIds})

export const principlesKnowledge52:KnowledgeChapter = {
  id:'5.2',
  title:'5.2 · Vliegmechanica',
  auditCovered:45,
  auditTotal:45,
  auditComplete:true,
  elements:[
    e('5-2-performance-properties','Prestatieleer en vliegeigenschappen','Prestatieleer gaat over de beweging van het vliegtuigzwaartepunt en prestaties; vliegeigenschappen over bewegingen om het zwaartepunt en het veilig innemen en handhaven van vliegtoestanden.',b(21,'§5.2 Vliegmechanica'),['principles-5-2-mechanics']),
    e('5-2-flight-states','Stationaire en rechtlijnige vlucht','Bij stationaire vlucht wijzigen de krachten niet en blijft de snelheid constant. Rechtlijnige vlucht betekent dat de vliegbaan een rechte lijn is.',b(21,'§5.2 Vliegmechanica: vliegtoestanden'),['principles-5-2-flight-states']),
    e('5-2-turn-states','Gecoördineerde, slippende en schuivende bocht','Het dictaat noemt de gecoördineerde bocht en de slippende of schuivende bocht als afzonderlijke vliegtoestanden.',b(21,'§5.2 Vliegmechanica: vliegtoestanden'),['principles-5-2-flight-states']),
    e('5-2-airworthiness-properties','Stabiliteit, bestuurbaarheid en herstelbaarheid','Na een kleine verstoring moet het vliegtuig zichzelf willen herstellen; gewenste toestanden moeten gemakkelijk bestuurbaar zijn en ongewenste toestanden voldoende snel herstelbaar.',b(21,'§5.2 Vliegmechanica: vliegeigenschappen'),['principles-5-2-flight-states']),
    e('5-2-glide-force','Gewicht als energiebron in de glijvlucht','Een component van het gewicht langs de vliegbaan compenseert de weerstand; daardoor moet een zweefvliegtuig ten opzichte van de lucht dalen om snelheid te behouden.',b(22,'§5.2.1 Vliegtuigprestaties'),['principles-5-2-mechanics']),
    e('5-2-angles','Standhoek, baanhoek, instelhoek en invalshoek','Standhoek is langsas-horizon, baan- of glijhoek is vliegbaan-horizon, instelhoek is koorde-langsas en invalshoek is koorde-luchtstroming.',b(22,'§5.2.1 Hoeken'),['principles-5-2-mechanics']),
    e('5-2-gravity-constant','Zwaartekracht als constante kracht','Van de vier krachten blijft volgens de bron alleen de zwaartekracht tijdens de vlucht constant zolang de massa niet verandert.',b(22,'§5.2.1 Vliegtuigprestaties: vier krachten'),['principles-5-2-performance-detail']),
    e('5-2-rising-air','Eigen dalen in stijgende lucht','Ook in stijgende lucht blijft een zweefvliegtuig ten opzichte van de omringende lucht dalen. Hoogtewinst ontstaat alleen wanneer de lucht sneller stijgt dan de eigen daalsnelheid.',b(22,'§5.2.1 Vliegtuigprestaties: stijgende lucht'),['principles-5-2-performance-detail']),
    e('5-2-polar','Snelheidspolaire','Een snelheidspolaire zet vliegsnelheid horizontaal uit tegen daalsnelheid verticaal. Elk type en iedere relevante configuratie heeft zijn eigen polaire.',b(22,'§5.2.2 Snelheidspolaire',24),['principles-5-2-polar','principles-5-2-polar-detail']),
    e('5-2-four-points','Vier kernpunten op de polaire','Je moet minimum-/overtreksnelheid, minimum daalsnelheid, snelheid voor beste glijgetal en maximum toegestane snelheid herkennen. De maximumsnelheid is mede op sterkteberekeningen gebaseerd.',b(22,'§5.2.2 Vier punten op de snelheidspolaire'),['principles-5-2-polar','principles-5-2-performance-detail']),
    e('5-2-minsink-bestglide','Minimum dalen en beste glijgetal','Minimum dalen geeft de kleinste eigen daalsnelheid. Beste glijgetal geeft in rustige lucht zonder wind of thermiek de grootste afstand per verloren hoogte.',b(22,'§5.2.2 Snelheidspolaire',23),['principles-5-2-polar','principles-5-2-polar-detail']),
    e('5-2-wind','Tegenwind en meewind op de polaire','Voor tegenwind begint de raaklijn rechts van de oorsprong en ligt de optimale snelheid hoger. Voor meewind begint de raaklijn links van de oorsprong.',b(23,'§5.2.2 Beste glijgetal bij wind'),['principles-5-2-wind-maccready','principles-5-2-polar-detail']),
    e('5-2-type-flap','Type, flapstand en vlieghandboek','Elk type zweefvliegtuig en iedere flapstand heeft een eigen polaire/beste-glijsnelheid. Gebruik daarvoor de polaire uit het vlieghandboek.',b(24,'§5.2.2 Beste snelheid met flaps en typepolaires'),['principles-5-2-polar-detail']),
    e('5-2-clean-airframe','Toestand van het toestel en prestaties','De handboekpolaire veronderstelt een schoon, goed afgeplakt en onbeschadigd toestel; vervuiling, beschadiging of slecht sluitende delen kunnen de prestaties verslechteren.',b(24,'§5.2.2 Snelheidspolaires ASW28, DG300 en LS4'),['principles-5-2-polar-detail']),
    e('5-2-glideratio','Glijgetal als lift/weerstandsverhouding','Glijgetal is vliegsnelheid gedeeld door daalsnelheid in gelijke eenheden en is ook de lift-to-drag ratio. De bron gebruikt de benadering weerstand ≈ gewicht / glijgetal.',b(23,'§5.2.2 Glijgetal',25),['principles-5-2-polar','principles-5-2-polar-detail']),
    e('5-2-units','Daalsnelheid omrekenen','Bij polaires met daalsnelheid in m/s gebruikt het dictaat de omzetting 1 m/s = 3,6 km/h.',b(25,'§5.2.2 DG300: eenheden'),['principles-5-2-polar-detail']),
    e('5-2-wingloading-speeds','Vleugelbelasting en karakteristieke snelheden','Meer vleugelbelasting verhoogt overtreksnelheid, snelheid voor minimum dalen en snelheid voor beste glijgetal; het beste glijgetal blijft in de getoonde voorbeelden ongeveer gelijk.',b(25,'§5.2.2 Snelheid en vleugelbelasting'),['principles-5-2-ballast','principles-5-2-polar-detail']),
    e('5-2-mc-tools','MacCreadyring, sollfahrtgeber en final glide','MacCreadyring en sollfahrtgeber helpen een passende steeksnelheid kiezen. De final-glidecomputer wordt gebruikt voor hoogte en snelheid van de optimale laatste steek.',b(26,'§5.2.2 MacCreadyring en sollfahrtgeber'),['principles-5-2-wind-maccready','principles-5-2-mc-instruments']),
    e('5-2-mc-rain','MacCready bij vervuiling en regen','MacCready-aanwijzingen worden onbetrouwbaar bij sterke vleugelvervuiling en moeten volgens de bron in regen niet worden gevolgd; het dictaat noemt dan ongeveer 110 km/h.',b(26,'§5.2.2 MacCreadyring: vervuiling en regen'),['principles-5-2-mc-instruments']),
    e('5-2-mc-headwind','Tegenwind als positieve MC-instelling','De bron verwerkt tegenwind in de beschreven methode met een positieve ringinstelling en geeft vuistwaarden van ongeveer +0,25, +0,5 en +0,75 m/s bij toenemende tegenwind.',b(26,'§5.2.2 Terug vliegen naar het veld tegen de wind in'),['principles-5-2-mc-instruments']),
    e('5-2-sollfahrt','Sollfahrtgever op nul','Bij de sollfahrtgever stuur je de wijzer naar nul: boven nul betekent volgens de bron te snel; onder nul betekent dat de snelheid moet worden verhoogd.',b(26,'§5.2.2 Sollfahrtgeber'),['principles-5-2-mc-instruments']),
    e('5-2-water-handbook','Waterballast en vlieghandboek','Raadpleeg vóór waterballast het typehandboek voor polaires, maximum toelaatbaar gewicht, ballastverdeling en bijbehorende snelheden zoals de overtreksnelheid.',b(26,'§5.2.2 Vliegen met water'),['principles-5-2-ballast','principles-5-2-water-detail']),
    e('5-2-water-performance','Slechter stijgen, beter steken','Waterballast verhoogt de vleugelbelasting: in het lage snelheidsgebied wordt het eigen dalen groter, terwijl hoge-snelheidsprestaties gunstiger kunnen worden.',b(27,'§5.2.2 Slechter stijgen, beter steken'),['principles-5-2-ballast','principles-5-2-water-detail']),
    e('5-2-water-scale','Polaire opschalen voor ander gewicht','De nieuwe polaire kan volgens de bron worden verkregen door ieder punt vanaf de oorsprong te vermenigvuldigen met √nieuw gewicht / √oud gewicht.',b(27,'§5.2.2 Polaire berekenen bij waterballast'),['principles-5-2-water-detail']),
    e('5-2-thermal-diameter','Thermiekdiameter, snelheid en bochtstraal','Meer gewicht vraagt een hogere thermieksnelheid en geeft bij dezelfde dwarshelling een grotere bochtstraal. Daarom is water vooral bruikbaar bij voldoende brede en sterke thermiek.',b(27,'§5.2.2 Invloed diameter bellen'),['principles-5-2-ballast','principles-5-2-water-detail']),
    e('5-2-final-dump','Final glide, dolfijnvliegen en water lozen','Water kan bij hoge snelheden gunstig zijn voor final glide en dolfijnvliegen. Voor landing moet het tijdig worden geloosd, met aandacht voor loostijd en verkeer onder het toestel.',b(27,'§5.2.2 Final glide, dolfijnvliegen en water lozen'),['principles-5-2-water-detail']),
  ],
}
