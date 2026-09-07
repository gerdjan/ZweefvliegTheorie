# Dekkingsaudit — Beginselen van het zweefvliegen

De studiehulp is een oefenlijst, niet de inhoudsopgave van de cursus. De actuele theorie-PDF is daarom de enige bron voor de vraag **wat er minimaal behandeld moet worden**.

## Gate 1 — structurele sectiedekking (automatisch)

`principles-sections.json` bevat de genummerde inhoudelijke secties uit `5-Beginselen.pdf` (versie november 2025). `npm run audit:content` scant uitsluitend `b(...)`-verwijzingen naar de actuele theorie. Als één sectie nergens voorkomt, faalt de build en wordt de website niet gepubliceerd.

Deze gate voorkomt dat een hele paragraaf verdwijnt alleen omdat de oudere studiehulp er geen vraag over stelt.

## Gate 2 — detaildekking binnen iedere sectie (redactionele audit)

Een sectieverwijzing alleen bewijst nog niet dat iedere belangrijke zin uit die sectie is onderwezen. Daarom wordt iedere sectie bij inhoudelijke revisie opgesplitst in kleine controlepunten:

- definities en vaktermen;
- formules en symbolen;
- opsommingen en voorwaarden;
- oorzaak-gevolgrelaties;
- numerieke waarden of tabellen die leerrelevant zijn;
- veiligheidswaarschuwingen en uitzonderingen;
- didactisch relevante figuren/diagrammen.

Elk controlepunt moet vervolgens zijn gekoppeld aan ten minste één theoriekaart, vraag of expliciete reden waarom het niet als afzonderlijk leerpunt wordt opgenomen. Pas na deze tweede audit noemen we de inhoud **detail-audited**.

## Gate 3 — studiehulpdekking (apart)

De vragen uit `5-beginselen-studiehulp.pdf` worden daarna als tweede checklist gebruikt: kan de cursist na de lessen alle oude oefendoelen beantwoorden? De studiehulp mag nieuwe oefenvragen opleveren, maar mag nooit bepalen welke actuele theorie we weglaten.

## Bevinding bij invoering van deze audit

De eerste vergelijking vond direct een gat: `§5.1.1.5 De luchtdichtheid` stond wel als eigen sectie in het actuele dictaat, maar had in de app nog geen eigen source-reference. Daarom is hiervoor een apart level toegevoegd. Dit is precies het soort fout dat de structurele audit voortaan automatisch tegenhoudt.
