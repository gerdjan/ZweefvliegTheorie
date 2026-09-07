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

De basismatrix staat in `principles-detail-audit.json`. Afgeronde secties zijn tijdens de hoofdstuk-voor-hoofdstukaudit aanvullend vastgelegd in `principles-detail-audit-overrides.json`; de build voegt beide samen tot één effectieve audit. Na de laatste releasecheck kunnen de overrides in de basismatrix worden geconsolideerd.

### Huidige stand na uitwerking van §5.0 t/m §5.7

- **294** afzonderlijke kenniselementen geïdentificeerd in de actuele bron.
- **294** daarvan zijn expliciet terug te vinden in de cursus.
- **0** elementen staan nog open.
- Detaildekking: **100%**.
- **§5.0 t/m §5.7 zijn volledig detail-audited.**

Gate 2 is hiermee gesloten. De cursus kan inhoudelijk als **100% gedekt tegen het actuele dictaat** worden aangeduid. De aparte vergelijking met de studiehulp blijft nog als laatste releasecheck over.

## Wat bij de §5.7-ronde is toegevoegd

De vijf laatste open punten uit Spiraalduik zijn als brongebonden lesinhoud toegevoegd:

- een mogelijke ontstaansketen: in een bocht niet of te laat trekken, neus zakt en snelheid loopt op;
- waarom alleen harder trekken de situatie kan verergeren doordat de bochtstraal kleiner wordt en snelheid en g-belasting verder oplopen;
- de bronwaarden van ongeveer 2g bij 60° en circa 5g rond 80° dwarshelling, plus het risico van een abrupte optrekbeweging;
- de ontwerpcontext van minimaal circa +5,3g normaal tegenover een lagere maximale belasting rond +3,5g met geopende remkleppen bij veel typen, door de veranderde liftverdeling;
- het oefendoel: eerste symptomen vroeg herkennen en het juiste herstel vrijwel instinctief uitvoeren.

Er zijn twee verdiepingslevels toegevoegd. De gebruikersgerichte kennisindex van §5.7 staat nu op **10/10 auditpunten**.

## Gate 3 — studiehulpdekking (apart)

Nu Gate 2 is gesloten, leggen we de cursus opnieuw naast `5-beginselen-studiehulp.pdf`: kan de cursist na de lessen alle oude oefendoelen beantwoorden? De studiehulp mag extra oefening opleveren, maar bepaalt nooit welke actuele theorie wordt weggelaten.

Deze check heeft twee doelen:

1. aantonen dat geen oud oefendoel door onze lesstructuur onbedoeld onbereikbaar is geworden;
2. extra oefenvragen toevoegen waar de theorie wel aanwezig is, maar nog te weinig actief wordt opgehaald.

## Release-regel

De cursus mag nu als **detail-audited tegen het actuele dictaat** worden aangeduid. Voor de definitieve inhoudelijke release voeren we nog Gate 3 uit en documenteren we per studiehulpvraag naar welk(e) level(s) en kenniselement(en) die vraag verwijst.
