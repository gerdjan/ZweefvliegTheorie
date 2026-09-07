# Dekkingsaudit — Beginselen van het zweefvliegen

De studiehulp is een oefenlijst, niet de inhoudsopgave van de cursus. De actuele theorie-PDF is daarom de enige bron voor de vraag **wat er minimaal behandeld moet worden** en voor de inhoud van antwoorden.

Beginselen gebruikt nu dezelfde generieke auditarchitectuur die ook voor de overige vakken wordt gebruikt. `content/coverage/courses.json` registreert per vak de primaire bron, cursusbestanden, sectiemanifesten, detailaudit, eventuele studiehulp en release-status. `scripts/audit-content.mjs` loopt alle geregistreerde vakken af.

## Gate 1 — structurele sectiedekking

`principles-sections.json` bevat de 42 genummerde inhoudelijke secties uit `5-Beginselen.pdf` (versie november 2025). De generieke audit scant uitsluitend verwijzingen naar de geregistreerde primaire theoriebron. Als één sectie nergens in de cursus voorkomt, faalt de build.

**Status: 42/42 bronsecties afgedekt.**

## Gate 2 — detaildekking binnen iedere sectie

Een sectieverwijzing alleen bewijst niet dat iedere belangrijke regel uit die sectie is onderwezen. Daarom is het dictaat pagina voor pagina doorgelopen. Als kenniselement tellen onder andere definities/vaktermen, formules, relaties, voorwaarden, leerrelevante getallen, veiligheidswaarschuwingen en herstelregels.

De definitieve matrix staat in `principles-detail-audit.json`. Tijdelijke overrides zijn verwijderd; er is nog maar één auditwaarheid.

**Status: 294/294 kenniselementen afgedekt (100%). §5.0 t/m §5.7 zijn volledig detail-audited.**

## Gate 3 — studiehulpdekking en actieve vraagdekking

De twee pagina's van `5-beginselen-studiehulp.pdf` (3-1-2018) zijn volledig in documentvolgorde doorgelopen. Voor ieder oefendoel legt `principles-study-aid-audit.json` vast welk level, welke kenniselementen en welke actuele bronvindplaats erbij horen.

De generieke releasegate controleert daarnaast dat ieder studiehulpdoel aan minimaal één level met een actieve kennisvraag is gekoppeld. Zo is alleen theorie tonen niet voldoende om een oefendoel als afgedekt te tellen.

**Status: 75/75 oefendoelen herleidbaar en 75/75 actief bevraagd; 0 open.**

### Twee bewust aangepaste oude verwijzingen

Twee opdrachten uit §5.2 verwijzen letterlijk naar polaire-afbeeldingen en paginanummers uit de studiehulp van 2018 die niet één-op-één terugkomen in het dictaat van november 2025:

1. het berekenen van een glijgetal bij 120 km/h uit een oude polaire;
2. het grafisch bepalen van beste glijhoek/snelheid bij 10 km/h tegenwind uit een oude polaire.

Deze zijn gemarkeerd als `adapted-reference`, niet als stilzwijgend kloppend. De actuele cursus leert en toetst dezelfde vaardigheden met de actuele bron.

## Generiek release-statusmodel

Alle geregistreerde cursussen gebruiken voortaan dezelfde statussen:

`concept → audit → content-complete → 1.0`

- **concept**: inhoud wordt opgebouwd; gates mogen open zijn;
- **audit**: bron- en dekkingsaudit is actief maar nog niet noodzakelijk gesloten;
- **content-complete**: alle voor het vak vereiste inhoudelijke gates moeten gesloten zijn;
- **1.0**: inhoudelijke gates zijn gesloten én de cursus gebruikt de volledige leerarchitectuur voor hoofdstukken, herhaling en examen.

`principles-release.json` staat nu op **1.0**.

## Dynamische informatie

De generieke bronstructuur ondersteunt `freshness: "dynamic"` plus een `currentCheck`. Daarmee kunnen toekomstige vakken, vooral Luchtvaartwetgeving en veranderlijke operationele/meteo-informatie, zichtbaar aangeven dat een PDF-bron voor leren wordt gebruikt maar vóór operationeel gebruik tegen een officiële actuele bron moet worden gecontroleerd.

## Release-status

Beginselen 1.0 blijft automatisch geblokkeerd als een van deze voorwaarden terug open gaat:

- Gate 1: **42/42** bronsecties;
- Gate 2: **294/294** detailpunten;
- Gate 3: **75/75** studiehulpdoelen;
- actieve vraagdekking: **75/75**.

Pedagogische verbeteringen, extra illustraties en extra vragen kunnen worden toegevoegd zonder deze minimale bron- en dekkingsgates te versoepelen.
