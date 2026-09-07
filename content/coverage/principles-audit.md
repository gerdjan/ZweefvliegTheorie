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

### Huidige stand na uitwerking van §5.0 t/m §5.4

- **294** afzonderlijke kenniselementen geïdentificeerd in de actuele bron.
- **245** daarvan zijn nu expliciet terug te vinden in de cursus.
- **49** elementen staan nog open.
- Detaildekking: **83,3%**.
- **§5.0 t/m §5.4 zijn volledig detail-audited.**

De resterende open punten zitten in §5.5 t/m §5.7. De cursus blijft daarom `beta-detail-audit` totdat alle 294 kenniselementen zijn behandeld of met een expliciete redactionele reden zijn uitgesloten.

## Wat bij de §5.4-ronde is toegevoegd

De 5 eerder openstaande punten uit het Besturingssysteem zijn nu als brongebonden lesinhoud toegevoegd. Het gaat om:

- de grote arm van hoogteroer en richtingsroer: door `kracht × arm` kan een relatief kleine roerkracht toch een bruikbaar stuurmoment geven;
- het onderscheid tussen T-staart, conventionele staart, V-staart en pendelroer zoals het dictaat die beschrijft;
- de verklaring waarom gieren ook rollen veroorzaakt: de buitenvleugel legt een langere weg af, beweegt sneller en levert meer lift;
- de noodzaak om stuurknuppel en voetenstuur passend te combineren om haakeffect en neveneffecten te corrigeren en een zuivere bocht te vliegen;
- de relatie tussen trimstand, vliegergewicht en gekozen vliegsnelheid doordat de benodigde constante stuurkracht verandert.

De gebruikersgerichte kennisindex van §5.4 is tegelijk uitgebreid en staat nu op **27/27 auditpunten**. De vijf ontbrekende details zijn verdeeld over twee nieuwe verdiepingslevels, zodat de leerstappen compact blijven.

## Gate 3 — studiehulpdekking (apart)

Pas nadat Gate 2 is gesloten, leggen we de cursus opnieuw naast `5-beginselen-studiehulp.pdf`: kan de cursist na de lessen alle oude oefendoelen beantwoorden? De studiehulp mag extra oefening opleveren, maar bepaalt nooit welke actuele theorie wordt weggelaten.

## Release-regel

`Beginselen van het zweefvliegen` mag in de app pas als **inhoudelijk compleet / detail-audited** worden aangeduid wanneer alle kenniselementen uit de actuele bron expliciet zijn afgedekt of bewust als niet-leerpunt zijn beoordeeld en gedocumenteerd. Tot dat moment blijft de cursus zichtbaar als beta.
