# Dekkingsaudit — Beginselen van het zweefvliegen

De studiehulp is een oefenlijst, niet de inhoudsopgave van de cursus. De actuele theorie-PDF is daarom de enige bron voor de vraag **wat er minimaal behandeld moet worden** en voor de inhoud van antwoorden.

## Gate 1 — structurele sectiedekking

`principles-sections.json` bevat de 42 genummerde inhoudelijke secties uit `5-Beginselen.pdf` (november 2025). `npm run audit:content` scant uitsluitend `b(...)`-verwijzingen naar de actuele theorie. Als één sectie nergens voorkomt, faalt de build.

**Status: 42/42 bronsecties afgedekt.**

## Gate 2 — detaildekking binnen iedere sectie

Een sectieverwijzing alleen bewijst niet dat iedere belangrijke regel uit die sectie is onderwezen. Daarom is het dictaat pagina voor pagina doorgelopen. Als kenniselement tellen onder andere definities/vaktermen, formules, relaties, voorwaarden, leerrelevante getallen, veiligheidswaarschuwingen en herstelregels.

De volledige, geconsolideerde matrix staat nu in `principles-detail-audit.json`. De tijdelijke overrides die tijdens de hoofdstuk-voor-hoofdstukaudit nodig waren zijn na voltooiing in de hoofdaudit verwerkt en verwijderd. Er is dus weer één inhoudelijke waarheid voor de detailaudit.

**Status: 294/294 kenniselementen afgedekt (100%). §5.0 t/m §5.7 zijn volledig detail-audited.**

## Gate 3 — studiehulpdekking

De twee pagina's van `5-beginselen-studiehulp.pdf` (3-1-2018) zijn volledig in documentvolgorde doorgelopen. De studiehulp bevat **75 vragen/opdrachten** verdeeld over Aerodynamica, Draagkracht, Weerstand, Vliegmechanica, Stabiliteit, Besturingssysteem, Beperkingen en Overtrek/Vrille/Spiraalduik.

Voor ieder oefendoel legt `principles-study-aid-audit.json` vast welk cursuslevel, welk kenniselement en welke actuele vindplaats in `5-Beginselen.pdf` erbij horen.

**Status: 75/75 oefendoelen zijn naar actuele cursusinhoud herleidbaar; 0 open.**

### Twee bewust aangepaste oude verwijzingen

Twee opdrachten uit §5.2 verwijzen letterlijk naar polaire-afbeeldingen en paginanummers uit 2018 die niet één-op-één terugkomen in het dictaat van november 2025: het berekenen van een glijgetal uit een oude polaire en het grafisch bepalen van beste glijhoek/snelheid bij 10 km/h tegenwind uit een oude polaire.

Deze zijn gemarkeerd als `adapted-reference`. De actuele cursus leert en toetst dezelfde vaardigheden met de actuele bron: glijgetal berekenen uit vliegsnelheid en daalsnelheid, en de raaklijnmethode voor beste glijgetal bij wind.

## Gate 4 — actieve-vraagdekking

Een oefendoel kan inhoudelijk in een les aanwezig zijn zonder dat de cursist het actief hoeft op te halen. Daarom controleert de build nu aanvullend of elk van de 75 studiehulpdoelen aan minimaal één cursuslevel met een echte kennisvraag is gekoppeld.

Deze gate is bewust een **breedtecontrole**, geen claim dat iedere oude open vraag letterlijk als één examenvraag is overgenomen. Hoofdstuktoetsen en het vakexamen trekken willekeurige vragen uit de brongebonden vraagbank; daarnaast zijn reken-, volgorde-, koppel-, diagram-, polaire- en scenariovragen toegevoegd.

## Automatische releasegate

`scripts/audit-content.mjs` controleert bij iedere productiebuild de vier gates. De build faalt onder andere wanneer een bronsectie ontbreekt, een detailpunt openstaat, een studiehulpdoel naar een onbekend level/kenniselement verwijst, of een studiehulpdoel alleen aan theorie zonder actieve kennisvraag gekoppeld is.

## Release-status

`principles-release.json` markeert de cursus inhoudelijk als **complete** wanneer alle gates gesloten zijn. De Beginselen 1.0-leerlaag voegt daar hoofdstukstructuur, checkpoints, gespreide herhaling, mastery-statussen, een vakexamen en rijkere vraagvormen aan toe zonder de bronregels te versoepelen.
