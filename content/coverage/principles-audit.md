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

De basismatrix staat in `principles-detail-audit.json`. Tijdens de lopende hoofdstuk-voor-hoofdstukaudit worden afgeronde secties aanvullend vastgelegd in `principles-detail-audit-overrides.json`; de build voegt beide samen tot één effectieve audit. Na afronding van het hele vak kunnen de overrides weer in de basismatrix worden geconsolideerd.

### Huidige stand na uitwerking van §5.0 t/m §5.5

- **294** afzonderlijke kenniselementen geïdentificeerd in de actuele bron.
- **271** daarvan zijn nu expliciet terug te vinden in de cursus.
- **23** elementen staan nog open.
- Detaildekking: **92,2%**.
- **§5.0 t/m §5.5 zijn volledig detail-audited.**

De resterende open punten zitten uitsluitend in §5.6 en §5.7. De cursus blijft daarom `beta-detail-audit` totdat alle 294 kenniselementen zijn behandeld of met een expliciete redactionele reden zijn uitgesloten.

## Wat bij de §5.5-ronde is toegevoegd

De 26 eerder openstaande punten uit Beperkingen en belastingen zijn nu als brongebonden lesinhoud toegevoegd. Het gaat onder andere om:

- centripetale kracht, centrifugaalkracht/schijnbaar gewicht en de relatie tussen dwarshelling, g-belasting en overtreksnelheid;
- het piefje als indicatie voor zuiver, schuivend en slippend vliegen, plus de herstelmethode en het verschillende tolvluchtrisico;
- circa 5g bij ongeveer 80° dwarshelling, beheerst herstel uit een duik, de relatie `n = (V/Vstall)²` en high-speed stall;
- het optellen van manoeuvreer- en remousbelasting, Utility versus Aerobatic en de voorbeeldlimieten uit de tabel;
- positieve en negatieve grenzen in het V-n-diagram, groen/geel snelheidsgebied, VA, Vne, Vd, VRA en de veiligheidsfactor 1,5;
- buigings- en torsietrillingen, de snelheidsafhankelijkheid van hun frequenties en het mechanisme waardoor ze bij flutter elkaar kunnen versterken.

De gebruikersgerichte kennisindex van §5.5 is tegelijk uitgebreid en staat nu op **47/47 auditpunten**. Er zijn zes verdiepingslevels toegevoegd. Bij het V-n-diagram staat bovendien een eigen didactische illustratie met bronverwijzing; de exacte operationele limieten blijven type-afhankelijk en moeten uit het vlieghandboek worden gehaald.

## Gate 3 — studiehulpdekking (apart)

Pas nadat Gate 2 is gesloten, leggen we de cursus opnieuw naast `5-beginselen-studiehulp.pdf`: kan de cursist na de lessen alle oude oefendoelen beantwoorden? De studiehulp mag extra oefening opleveren, maar bepaalt nooit welke actuele theorie wordt weggelaten.

## Release-regel

`Beginselen van het zweefvliegen` mag in de app pas als **inhoudelijk compleet / detail-audited** worden aangeduid wanneer alle kenniselementen uit de actuele bron expliciet zijn afgedekt of bewust als niet-leerpunt zijn beoordeeld en gedocumenteerd. Tot dat moment blijft de cursus zichtbaar als beta.
