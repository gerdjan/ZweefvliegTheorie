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

### Huidige stand na uitwerking van §5.0 t/m §5.6

- **294** afzonderlijke kenniselementen geïdentificeerd in de actuele bron.
- **289** daarvan zijn nu expliciet terug te vinden in de cursus.
- **5** elementen staan nog open.
- Detaildekking: **98,3%**.
- **§5.0 t/m §5.6 zijn volledig detail-audited.**

De resterende open punten zitten uitsluitend in §5.7 Spiraalduik. De cursus blijft daarom `beta-detail-audit` totdat alle 294 kenniselementen zijn behandeld of met een expliciete redactionele reden zijn uitgesloten.

## Wat bij de §5.6-ronde is toegevoegd

De 18 eerder openstaande punten uit Overtrek en Tolvlucht/Vrille zijn nu als brongebonden lesinhoud toegevoegd. Het gaat onder andere om:

- wrong als reden dat de overtrek in de regel eerst bij de vleugelwortel optreedt en het schudden door losgelaten wervels tegen romp en staart;
- de plotselinge drukpuntverschuiving naar achteren en het herstellende neus-omlaagmoment;
- de vijf expliciete waarschuwingssignalen voor overtrek;
- voorzorgsmaatregelen en de uitkijkprocedure met twee halve cirkels vóór de oefening;
- het directe herstel door vieren, de zakvlucht en het neutraal houden van voeten en rolroer;
- de leerdoelen en het herstel bij een dreigende overtrek in een schuivende bocht;
- de definitie van tolvlucht/vrille als overtrokken, schroefvormig dalende toestand met draaiing om de topas;
- langzaam vliegen met te veel voetenstuur/gier als mogelijke aanleiding, de overtrokken binnenvleugel en het nog werkzame richtingsroer;
- de binnen- en buitencheck voor de tolvluchtoefening, plus de in de bron genoemde circa 80 m hoogteverlies per draai en circa 300 m oefengrens;
- rolroer neutraal tijdens herstel en de waarschuwing dat tolvluchteigenschappen en herstelprocedures per zweefvliegtuigtype kunnen verschillen, zodat het vlieghandboek leidend blijft.

De gebruikersgerichte kennisindex van §5.6 is tegelijk uitgebreid en staat nu op **30/30 auditpunten**. Er zijn vijf verdiepingslevels toegevoegd. Bij de drukpuntverschuiving staat bovendien een eigen didactische illustratie die expliciet naar `5-Beginselen.pdf`, PDF p. 37, §5.6.1 verwijst.

## Gate 3 — studiehulpdekking (apart)

Pas nadat Gate 2 is gesloten, leggen we de cursus opnieuw naast `5-beginselen-studiehulp.pdf`: kan de cursist na de lessen alle oude oefendoelen beantwoorden? De studiehulp mag extra oefening opleveren, maar bepaalt nooit welke actuele theorie wordt weggelaten.

## Release-regel

`Beginselen van het zweefvliegen` mag in de app pas als **inhoudelijk compleet / detail-audited** worden aangeduid wanneer alle kenniselementen uit de actuele bron expliciet zijn afgedekt of bewust als niet-leerpunt zijn beoordeeld en gedocumenteerd. Tot dat moment blijft de cursus zichtbaar als beta.
