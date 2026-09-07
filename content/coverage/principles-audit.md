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

### Huidige stand na uitwerking van §5.0 t/m §5.3

- **294** afzonderlijke kenniselementen geïdentificeerd in de actuele bron.
- **240** daarvan zijn nu expliciet terug te vinden in de cursus.
- **54** elementen staan nog open.
- Detaildekking: **81,6%**.
- **§5.0, §5.1, §5.2 en §5.3 zijn volledig detail-audited.**

De resterende open punten zitten in §5.4 t/m §5.7. De cursus blijft daarom `beta-detail-audit` totdat alle 294 kenniselementen zijn behandeld of met een expliciete redactionele reden zijn uitgesloten.

## Wat bij de §5.3-ronde is toegevoegd

De 9 eerder openstaande punten uit Stabiliteit zijn nu als brongebonden lesinhoud toegevoegd. Het gaat om:

- zelfherstel bij kleine verstoringen en de noodzaak van stuurcorrectie bij grotere verstoringen;
- de relatie tussen stabiliteit en een zwaartepunt binnen de fabrieksgrenzen, inclusief het risico van te neus- of staartlastig beladen;
- de gezamenlijke reactie van vleugel en stabilo op veranderde aanstroming in thermiek of turbulentie;
- het weerhaaneffect van het kielvlak bij richtingsstabiliteit;
- het verschil tussen positieve en negatieve pijlvorm voor koersherstel;
- twee afzonderlijke herstelmechanismen van V-stelling bij rolstabiliteit: veranderde invalshoek van de lage vleugel en de richting van de liftvector ten opzichte van de zwaartekracht;
- de kleinere instelhoek van het stabilo ten opzichte van de vleugel en de rol daarvan bij herstel na overtrek;
- wrong als bijdrage aan een gunstiger ellipsvormige liftverdeling en minder geïnduceerde weerstand.

De gebruikersgerichte kennisindex van §5.3 is tegelijk uitgebreid en staat nu op **21/21 auditpunten**. De kenniselementen blijven gegroepeerd tot bruikbare begrippen in plaats van ieder micro-auditpunt als afzonderlijk vinkje te tonen.

## Gate 3 — studiehulpdekking (apart)

Pas nadat Gate 2 is gesloten, leggen we de cursus opnieuw naast `5-beginselen-studiehulp.pdf`: kan de cursist na de lessen alle oude oefendoelen beantwoorden? De studiehulp mag extra oefening opleveren, maar bepaalt nooit welke actuele theorie wordt weggelaten.

## Release-regel

`Beginselen van het zweefvliegen` mag in de app pas als **inhoudelijk compleet / detail-audited** worden aangeduid wanneer alle kenniselementen uit de actuele bron expliciet zijn afgedekt of bewust als niet-leerpunt zijn beoordeeld en gedocumenteerd. Tot dat moment blijft de cursus zichtbaar als beta.
