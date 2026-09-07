# Dekkingsaudit — Beginselen van het zweefvliegen

De studiehulp is een oefenlijst, niet de inhoudsopgave van de cursus. De actuele theorie-PDF is daarom de enige bron voor de vraag **wat er minimaal behandeld moet worden** en voor de inhoud van antwoorden.

## Gate 1 — structurele sectiedekking (automatisch)

`principles-sections.json` bevat de 42 genummerde inhoudelijke secties uit `5-Beginselen.pdf` (versie november 2025). `npm run audit:content` scant uitsluitend `b(...)`-verwijzingen naar de actuele theorie. Als één sectie nergens voorkomt, faalt de build.

**Status: 42/42 bronsecties afgedekt.**

## Gate 2 — detaildekking binnen iedere sectie

Een sectieverwijzing alleen bewijst niet dat iedere belangrijke regel uit die sectie is onderwezen. Daarom is het dictaat pagina voor pagina doorgelopen. Als kenniselement tellen onder andere definities/vaktermen, formules, relaties, voorwaarden, leerrelevante getallen, veiligheidswaarschuwingen en herstelregels.

De basismatrix staat in `principles-detail-audit.json`. De tijdens de uitwerking gesloten secties staan in `principles-detail-audit-overrides.json`; de build voegt beide samen tot één effectieve audit.

**Status: 294/294 kenniselementen afgedekt (100%). §5.0 t/m §5.7 zijn volledig detail-audited.**

## Gate 3 — studiehulpdekking

De twee pagina's van `5-beginselen-studiehulp.pdf` (3-1-2018) zijn volledig in documentvolgorde doorgelopen. De studiehulp bevat **75 vragen/opdrachten** verdeeld over Aerodynamica, Draagkracht, Weerstand, Vliegmechanica, Stabiliteit, Besturingssysteem, Beperkingen en Overtrek/Vrille/Spiraalduik.

Voor ieder oefendoel legt `principles-study-aid-audit.json` vast:

- het nummer en onderwerp van de vraag in de studiehulp;
- één of meer actuele cursuslevels waarin de benodigde kennis wordt geleerd;
- één of meer gebruikersgerichte kenniselementen;
- de actuele vindplaats in `5-Beginselen.pdf`.

**Status: 75/75 oefendoelen zijn naar actuele cursusinhoud herleidbaar; 0 open.**

### Twee bewust aangepaste oude verwijzingen

Twee opdrachten uit §5.2 verwijzen letterlijk naar polaire-afbeeldingen en paginanummers uit de studiehulp van 2018 die niet één-op-één terugkomen in het dictaat van november 2025:

1. het berekenen van een glijgetal bij 120 km/h uit een oude polaire;
2. het grafisch bepalen van beste glijhoek/snelheid bij 10 km/h tegenwind uit een oude polaire.

Deze zijn gemarkeerd als `adapted-reference`, niet als stilzwijgend 'kloppend'. De actuele cursus leert en toetst dezelfde vaardigheden met de actuele bron: glijgetal berekenen uit vliegsnelheid en daalsnelheid, en de raaklijnmethode voor beste glijgetal bij wind.

Andere vragen uit de oude studiehulp konden inhoudelijk rechtstreeks naar het actuele dictaat en bestaande cursuslevels worden herleid. Waar een oud paginanummer niet meer de handigste locator is, is de actuele PDF-pagina/paragraaf leidend.

## Automatische releasegate

`scripts/audit-content.mjs` controleert bij iedere productiebuild nu alle drie de gates. De build faalt onder andere wanneer:

- een bronsectie uit het actuele dictaat nergens in de cursus voorkomt;
- de detailaudit intern niet klopt of open punten bevat terwijl de release compleet is;
- niet alle 75 studiehulpdoelen aanwezig zijn;
- een studiehulpdoel niet aan een bestaand level of kenniselement gekoppeld is;
- een aangepaste oude verwijzing geen expliciete toelichting heeft;
- de cursus als compleet staat gemarkeerd terwijl een releasegate nog open is.

## Release-status

`principles-release.json` markeert de cursus nu als **complete** op inhoudsniveau:

- Gate 1: **42/42** bronsecties;
- Gate 2: **294/294** detailpunten;
- Gate 3: **75/75** studiehulpdoelen.

Dit betekent inhoudelijk compleet ten opzichte van de gebruikte bronnen. Het betekent niet dat de cursus pedagogisch nooit meer verbeterd kan worden: extra oefenvormen, betere illustraties, herhalingsvragen en UX-verbeteringen kunnen we blijven toevoegen zonder de inhoudelijke releasegate te verlagen.
