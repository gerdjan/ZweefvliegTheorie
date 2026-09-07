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

### Huidige stand na uitwerking van §5.0, §5.1 en §5.2

- **294** afzonderlijke kenniselementen geïdentificeerd in de actuele bron.
- **231** daarvan zijn nu expliciet terug te vinden in de cursus.
- **63** elementen staan nog open.
- Detaildekking: **78,6%**.
- **§5.0, heel §5.1 en heel §5.2 zijn detail-audited.**

De resterende open punten zitten in §5.3 t/m §5.7. De cursus blijft daarom `beta-detail-audit` totdat alle 294 kenniselementen zijn behandeld of met een expliciete redactionele reden zijn uitgesloten.

## Wat bij de §5.2-ronde is toegevoegd

De 25 eerder openstaande punten uit Vliegmechanica zijn nu als brongebonden lesinhoud toegevoegd. Het gaat onder andere om:

- definities van stationaire en rechtlijnige vlucht en het onderscheid tussen gecoördineerde, slippende en schuivende bochten;
- de eisen aan stabiliteit, bestuurbaarheid en herstelbaarheid van ongewenste vliegtoestanden;
- het feit dat zwaartekracht als enige van de vier genoemde krachten constant blijft zolang de massa niet verandert;
- eigen dalen ten opzichte van de lucht, ook binnen een stijgend luchtblok;
- de relatie tussen maximum toegestane snelheid en sterkteberekeningen;
- rustige-luchtvoorwaarden voor beste glijgetal en de raaklijnmethode voor tegen- en meewind;
- type-, flap- en toestandsafhankelijkheid van snelheidspolaires en het gebruik van het vlieghandboek;
- glijgetal als lift/weerstandsverhouding, de omzetting 1 m/s = 3,6 km/h en de invloed van vleugelbelasting op karakteristieke snelheden;
- het verschil tussen MacCreadyring, sollfahrtgeber en final-glidecomputer, plus de beperkingen bij vervuiling en regen;
- positieve MacCready-instelling voor tegenwind en de interpretatie van de sollfahrtwijzer;
- waterballast: typehandboek, prestatiewijziging, opschalen van de polaire, thermiekdiameter, final glide/dolfijnvliegen en tijdig/veilig lozen.

## Gate 3 — studiehulpdekking (apart)

Pas nadat Gate 2 is gesloten, leggen we de cursus opnieuw naast `5-beginselen-studiehulp.pdf`: kan de cursist na de lessen alle oude oefendoelen beantwoorden? De studiehulp mag extra oefening opleveren, maar bepaalt nooit welke actuele theorie wordt weggelaten.

## Release-regel

`Beginselen van het zweefvliegen` mag in de app pas als **inhoudelijk compleet / detail-audited** worden aangeduid wanneer alle kenniselementen uit de actuele bron expliciet zijn afgedekt of bewust als niet-leerpunt zijn beoordeeld en gedocumenteerd. Tot dat moment blijft de cursus zichtbaar als beta.
