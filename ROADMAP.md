# ZweefvliegTheorie — Roadmap

Dit bestand is de blijvende projectstatus. Na ieder afgerond werkpakket werken we dit bestand bij en nemen we dezelfde status kort op in het slotantwoord, zodat altijd zichtbaar blijft wat klaar is en wat nog moet gebeuren.

## Fase A — Inhoudelijke referentiecursus Beginselen ✅

- [x] Volledige cursus voor **5. Beginselen van het zweefvliegen** opgebouwd.
- [x] Elk theorieblok en elke vraag heeft een controleerbare PDF-bron.
- [x] Begrippen automatisch benadrukt waar passend.
- [x] Ondersteunende eigen illustraties toegevoegd waar nuttig.
- [x] Antwoordvolgorde van multiplechoicevragen per poging gerandomiseerd.
- [x] Kenniselementen-index per hoofdstuk met bron, uitleg en voortgang.
- [x] Gate 1: **42/42** genummerde bronsecties gedekt.
- [x] Gate 2: **294/294** detailpunten uit het actuele dictaat gedekt.
- [x] Gate 3: **75/75** oefendoelen uit de studiehulp herleidbaar.
- [x] Beginselen inhoudelijk als compleet gemarkeerd.

## Fase B — Beginselen 1.0: leerervaring en techniek ✅

- [x] De 53 levels gegroepeerd onder hoofdstukken **5.0 t/m 5.7**.
- [x] Hoofdstuktoetsen met **80%** beheersdrempel.
- [x] Herhaalmodus en spaced repetition **1 / 3 / 7 / 14 / 30 dagen**.
- [x] Kenniselementstatus **nieuw / gezien / geoefend / beheerst**.
- [x] Vakexamen met **30 willekeurige vragen**, examendrempel **75%**.
- [x] **75/75 actieve-vraagdekking** tegen de studiehulp.
- [x] Meerdere vraagvormen en eigen illustraties.

**Beginselen 1.0 is functioneel en inhoudelijk gesloten als referentiecursus.**

## Fase C — Generieke content- en auditpipeline ✅

- [x] Generieke cursusdefinities voor hoofdstukken, kenniselementen, bronbeleid en toetsen.
- [x] Generieke Gate 1, Gate 2 en Gate 3 in de build.
- [x] Release-statusmodel **concept → audit → content-complete → 1.0**.
- [x] Generieke hoofdstuktoets-, herhaal- en examenarchitectuur.
- [x] Examenscores per vak.
- [x] Generieke kennisindex.
- [x] `freshness: dynamic` en actualiteitswaarschuwingen.
- [x] Werkwijze gedocumenteerd in `content/COURSE_PIPELINE.md`.

## Fase D — Tweede volledige cursus: Meteorologie ✅

Meteorologie is het eerste vak dat vanaf het begin met de generieke pipeline én de aangescherpte ID-audits is opgebouwd.

- [x] `3.Meteorologie.pdf` januari 2026 als primaire bron vastgelegd.
- [x] Hoofdstukken **3.1 t/m 3.10** geregistreerd.
- [x] Gate 1: **37/37** genummerde bronsecties gedekt.
- [x] Pagina-voor-pagina auditinventaris: **437** punten.
- [x] Gate 2: **432/432** verplichte detail-ID's exact één keer in de cursuscode afgedekt.
- [x] **5** bronpunten expliciet als context-/conflictpunt geregistreerd in plaats van ze stil te negeren.
- [x] Kenniselementen-index wordt rechtstreeks uit de brongebonden theoriekaarten opgebouwd.
- [x] Volledige brongebonden theorie- en vraagcursus voor 3.1–3.10.
- [x] Eigen didactische illustraties voor atmosfeer, druk/wind, zeewind, stabiliteit/adiabaten, fronten en onweersontwikkeling.
- [x] Gate 3: **77/77** doelen uit `3-Meteo-studiehulp.pdf` geïnventariseerd.
- [x] Aangescherpte Gate 3: **77/77** doel-ID's staan expliciet op een actieve vraag.
- [x] Dynamische controles vastgelegd in `meteorology-current-checks.json`.
- [x] Bronconflict rond SIGMET/AIRMET expliciet vastgelegd; niet stilzwijgend geharmoniseerd.
- [x] Transition-altitudeclaim van het dictaat gecontroleerd tegen actuele AIP met VFR/IFR-nuance.
- [x] Hoofdstuktoetsen, herhaling, kennisindex en 30-vragen-vakexamen aangesloten op dezelfde 1.0-architectuur.
- [x] Feature-branch CI controleert audit + TypeScript + productiebuild zonder de live site voortijdig te deployen.

### Proceslessen uit Meteorologie

- [x] **Totaaltellingen zijn niet genoeg.** Stabiele detail-ID's maken bewijsbaar welke inhoud werkelijk in de lescode zit.
- [x] **Behoud de oorspronkelijke auditnummering.** De eerste strikte run faalde terecht doordat 432 verplichte punten onjuist als `001–432` waren aangenomen; werkelijk liep de inventaris `001–437` met vijf expliciete contextgaten.
- [x] **Een oefendoel moet op de actieve vraag zelf staan.** “Er staat ergens een vraag in dit level” is als Gate 3 te zwak.
- [x] **Context-only is geen weggooibak.** Ieder uitgesloten bronpunt houdt een ID en een reden.
- [x] **Dynamische feiten horen in een aparte actualiteitscontrole.** Ze worden niet vermengd met stabiele PDF-theorie.
- [x] **Bronconflicten blijven zichtbaar.** Oude claims worden niet stilzwijgend gecorrigeerd.
- [x] **Eén inhoudelijke waarheid.** De kennisindex wordt waar mogelijk uit dezelfde theoriedata opgebouwd in plaats van dubbel onderhouden.
- [x] **Grote hoofdstukken technisch opsplitsen** verbetert onderhoud zonder het leerpad te veranderen.

## Fase E — Overige zeven vakken ← VOLGENDE

De aangescherpte Meteorologie-pipeline wordt daarna toegepast op:

- [ ] Luchtvaartwetgeving
- [ ] Menselijke prestaties
- [ ] Communicatie
- [ ] Operationele procedures
- [ ] Vliegprestaties en vluchtplanning
- [ ] Algemene kennis van het zweefvliegtuig
- [ ] Navigatie

Bij **Luchtvaartwetgeving**, luchtruim, AIP/NOTAM en andere veranderlijke operationele onderwerpen blijft een extra actualiteitscontrole vereist.

**Voorgestelde eerstvolgende cursus:** Menselijke prestaties. Dat vak is inhoudelijk compacter en grotendeels stabiel, waardoor we eerst kunnen bevestigen dat de aangescherpte ID-pipeline ook zonder veel dynamische uitzonderingen soepel werkt. Daarna is Luchtvaartwetgeving een goede stresstest voor actualiteitscontrole.

## Later / productontwikkeling

- [ ] Account/synchronisatie zodat voortgang niet alleen per browser via localStorage bestaat.
- [ ] Streaks en XP verder koppelen aan leren zonder mastery ermee te verwarren.
- [ ] Persoonlijke zwakke-puntenweergave verder verdiepen tot kenniselementniveau.
- [ ] Gemengde examenmodus over meerdere vakken.
- [ ] Betere mobiele/PWA-ervaring en eventueel installeren op beginscherm.
- [ ] Beheer- of contenteditor voor brongebonden cursusinhoud.

## Huidige positie

**Klaar:** Fase A, B, C en D — Beginselen 1.0 + Meteorologie 1.0 + generieke strikte pipeline.  
**Nu:** laatste 1.0-CI en productie-publicatie van Meteorologie.  
**Daarna:** Fase E — overige zeven vakken.  
**Eerstvolgende concrete taak na publicatie:** Menselijke prestaties volgens exact dezelfde aangescherpte bron-ID- en auditmethode opbouwen.
