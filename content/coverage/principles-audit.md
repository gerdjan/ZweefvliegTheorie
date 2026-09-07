# Dekkingsaudit — Beginselen van het zweefvliegen

De studiehulp is een oefenlijst, niet de inhoudsopgave van de cursus. De actuele theorie-PDF is daarom de enige bron voor de vraag **wat er minimaal behandeld moet worden**.

## Gate 1 — structurele sectiedekking (automatisch)

`principles-sections.json` bevat de 42 genummerde inhoudelijke secties uit `5-Beginselen.pdf` (versie november 2025). `npm run audit:content` scant uitsluitend `b(...)`-verwijzingen naar de actuele theorie. Als één sectie nergens voorkomt, faalt de build en wordt de website niet gepubliceerd.

Huidige stand: **42/42 secties** hebben ten minste één actuele bronverwijzing.

## Gate 2 — detaildekking binnen iedere sectie

Een sectieverwijzing alleen bewijst nog niet dat iedere belangrijke regel uit die sectie is onderwezen. Daarom is het dictaat pagina voor pagina doorgelopen. Een kenniselement is hierbij een afzonderlijke:

- definitie of vakterm;
- formule, symbool of berekenrelatie;
- opsomming, voorwaarde of expliciete vergelijking;
- oorzaak-gevolgrelatie;
- leerrelevant getal of limiet;
- veiligheidswaarschuwing, herstelregel of uitzondering.

Historische voorbeelden, externe links, de literatuurlijst en herhalende rekenvoorbeelden tellen niet als zelfstandig kenniselement tenzij ze een nieuwe regel introduceren.

De volledige machineleesbare matrix staat in `principles-detail-audit.json`.

### Huidige stand na uitwerking van §5.0 en §5.1

- **294** afzonderlijke kenniselementen geïdentificeerd in de actuele bron.
- **206** daarvan zijn nu expliciet terug te vinden in de cursus.
- **88** elementen staan nog open.
- Detaildekking: **70,1%**.
- **§5.0 en heel §5.1 zijn detail-audited: alle daar geïnventariseerde kenniselementen zijn expliciet opgenomen.**

De resterende open punten zitten in §5.2 t/m §5.7. De cursus blijft daarom `beta-detail-audit` totdat alle 294 kenniselementen zijn behandeld of met een expliciete redactionele reden zijn uitgesloten.

## Wat bij deze ronde is toegevoegd

De detailaudit vond 41 open punten in §5.0 en §5.1. Die zijn nu als brongebonden lesinhoud toegevoegd. Het gaat onder andere om:

- krachtpijlen, werklijn, momenten en de preciezere definitie van het zwaartepunt;
- spanwijdte, symmetrische/asymmetrische profielen, pijlvorm en V-stelling;
- luchtdruk, standaarddruk, luchtdichtheid, luchtsnelheid versus grondsnelheid, stroomlijnen en stroombuizen;
- vleugelbelasting, skeletlijn, profielwelving en drukpuntgedrag;
- thermiek-invloed en veiligheidsdetails van remkleppen en flaps;
- de relatieve invloed van luchtdichtheid versus snelheid en de relatie snelheid–CL–invalshoek uit de liftformule;
- schadelijke/parasitair weerstand, interferentieweerstand en de factoren voor drukweerstand;
- de vier factoren voor wrijvingsweerstand, omslagpunt, laminaire profielen, vervuiling en bugwipers;
- zogturbulentie, het aandeel van geïnduceerde weerstand en de praktische grenzen van grotere spanwijdte.

## Gate 3 — studiehulpdekking (apart)

Pas nadat Gate 2 is gesloten, leggen we de cursus opnieuw naast `5-beginselen-studiehulp.pdf`: kan de cursist na de lessen alle oude oefendoelen beantwoorden? De studiehulp mag extra oefening opleveren, maar bepaalt nooit welke actuele theorie wordt weggelaten.

## Release-regel

`Beginselen van het zweefvliegen` mag in de app pas als **inhoudelijk compleet / detail-audited** worden aangeduid wanneer alle kenniselementen uit de actuele bron expliciet zijn afgedekt of bewust als niet-leerpunt zijn beoordeeld en gedocumenteerd. Tot dat moment blijft de cursus zichtbaar als beta.
