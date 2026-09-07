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

### Resultaat van de eerste detailaudit

- **294** afzonderlijke kenniselementen geïdentificeerd in de actuele bron.
- **165** daarvan zijn op dit moment expliciet terug te vinden in de cursus.
- **129** elementen zijn nog niet expliciet genoeg onderwezen of getoetst.
- Detaildekking: **56,1%**.

Dit betekent dat de huidige 25 levels inhoudelijk **beta** zijn. De cursus is pas echt compleet wanneer de detailaudit op 100% staat. De build controleert voortaan ook of de tellingen in deze matrix intern kloppen. Zodra `releaseStatus` in de matrix op `complete` wordt gezet, mag er geen enkel open detailpunt meer bestaan.

## Belangrijkste gevonden gaten

De audit vond geen nieuwe volledig ontbrekende genummerde paragraaf — Gate 1 werkt dus — maar wel veel details binnen bestaande paragrafen. Voorbeelden:

- §5.0.2: krachtpijlen, momenten, preciezere definitie van zwaartepunt, profielsoorten en pijlvorm/V-stelling.
- §5.1.0.1: luchtdruk, standaarddruk, luchtdichtheid, luchtsnelheid versus grondsnelheid, stroomlijnen en de onsamendrukbaarheidsaanname uit het dictaat.
- §5.1.1.4: profielwelving, drukpuntgedrag, thermiek-invloed en veiligheidsdetails van remkleppen/flaps.
- §5.1.3: volledige weerstandstaxonomie en de afzonderlijke bepalende factoren van druk- en wrijvingsweerstand.
- §5.2.2: veel details rond snelheidspolaires, MacCready/sollfahrtgeber, waterballast en type-afhankelijkheid uit het vlieghandboek.
- §5.5: belastingsfactorformule, V-n-diagramdetails, Utility/Aerobatic-limieten, veiligheidsfactor en fluttermechanisme.
- §5.6–5.7: waarschuwingstekenen, oefen-/veiligheidsprocedures, hoogteverlies bij tolvlucht en aanvullende belastingdetails bij spiraalduik.

## Gate 3 — studiehulpdekking (apart)

Pas nadat Gate 2 is gesloten, leggen we de cursus opnieuw naast `5-beginselen-studiehulp.pdf`: kan de cursist na de lessen alle oude oefendoelen beantwoorden? De studiehulp mag extra oefening opleveren, maar bepaalt nooit welke actuele theorie wordt weggelaten.

## Release-regel

`Beginselen van het zweefvliegen` mag in de app pas als **inhoudelijk compleet / detail-audited** worden aangeduid wanneer alle kenniselementen uit de actuele bron expliciet zijn afgedekt of bewust als niet-leerpunt zijn beoordeeld en gedocumenteerd. Tot dat moment blijft de cursus zichtbaar als beta.
