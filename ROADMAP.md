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

- [x] Auditdata opgeschoond: tijdelijke detailaudit-overrides zijn geconsolideerd in één hoofdaudit.
- [x] De 53 levels zichtbaar gegroepeerd onder hoofdstukken **5.0 t/m 5.7**.
- [x] Per hoofdstuk een duidelijke voortgangsbalk en status toegevoegd.
- [x] Per hoofdstuk een willekeurige checkpoint / hoofdstuktoets toegevoegd; **80%** is de beheersdrempel.
- [x] Herhaalmodus gebouwd: fouten komen direct terug en later ingeplande vragen verschijnen wanneer ze weer aan de beurt zijn.
- [x] Spaced repetition ingevoerd rond **1 / 3 / 7 / 14 / 30 dagen**.
- [x] Kenniselementstatus verfijnd naar **nieuw / gezien / geoefend / beheerst**.
- [x] Vakexamen voor Beginselen gebouwd met **30 willekeurige vragen** uit het hele vak; examendrempel **75%**.
- [x] Vraagbankbreedte bewaakt tegen de 75 studiehulpdoelen: de build controleert **75/75 actieve-vraagdekking**.
- [x] Meer vraagvormen toegevoegd: multiplechoice, rekenen, volgorde, koppelen, diagraminterpretatie, snelheidspolaire en scenario's.
- [x] Eigen snelheidspolaire-illustratie toegevoegd naast de bestaande krachten-, assen-, V-n- en overtrekschema's.

**Beginselen 1.0 is hiermee functioneel en inhoudelijk gesloten als referentiecursus.** Verbeteringen op basis van echt gebruik blijven mogelijk zonder de releasegates te versoepelen.

## Fase C — Generieke content- en auditpipeline ✅

- [x] Generieke datastructuur voor bronnen, hoofdstukken, kenniselementen, bronbeleid en cursusdefinities toegevoegd in `src/domain/course.ts`.
- [x] Runtime-cursusregister toegevoegd in `src/data/courseDefinitions.ts`; LearningPath, KnowledgeIndex en studiemodi lezen uit dezelfde cursusdefinitie.
- [x] Generieke Gate 1: bronsectiedekking via het cursusregister `content/coverage/courses.json`.
- [x] Generieke Gate 2: detailaudit per bronsectie via dezelfde build-audit.
- [x] Generieke Gate 3: studiehulp-/oefendoeldekking plus optionele actieve-vraagdekking.
- [x] Eén release-statusmodel ingevoerd: **concept → audit → content-complete → 1.0**. Beginselen staat nu expliciet op **1.0**.
- [x] Hoofdstuktoets-, herhaal- en examenarchitectuur generiek gemaakt; toetsdrempels en examengrootte komen per vak uit de cursusdefinitie.
- [x] Examenscores per vak opgeslagen in plaats van één globale examenscore; bestaande Beginselen-voortgang wordt gemigreerd.
- [x] Kenniselementen-index generiek gemaakt zodat toekomstige vakken dezelfde naslag- en masteryweergave kunnen gebruiken.
- [x] Dynamische/current-info markering toegevoegd via `freshness: "dynamic"` en `currentCheck`; de UI toont automatisch een actualiteitswaarschuwing.
- [x] De generieke werkwijze gedocumenteerd in `content/COURSE_PIPELINE.md`.

## Fase D — Tweede volledige cursus: Meteorologie ← VOLGENDE

Meteorologie wordt het eerste vak dat vanaf het begin met de generieke pipeline wordt opgebouwd.

- [ ] Actuele theorie-PDF `3.Meteorologie.pdf` als primaire bron structureren en cursusstatus op `concept` zetten.
- [ ] Hoofdstukken 3.1 t/m 3.10 als generieke cursusstructuur registreren.
- [ ] Bronsecties inventariseren en Gate 1 opbouwen/sluiten.
- [ ] Pagina-voor-pagina detailaudit uitvoeren en Gate 2 sluiten.
- [ ] Kenniselementen-index bouwen.
- [ ] Theorielevels en oefenvragen bouwen met exacte bronnen.
- [ ] Geschikte illustraties, weerdiagrammen, reken- en interpretatieoefeningen toevoegen.
- [ ] Oude studiehulp als laatste kruiscontrole gebruiken en Gate 3 sluiten.
- [ ] Actuele/dynamische meteorologische informatie expliciet onderscheiden van stabiele theorie.
- [ ] Hoofdstuktoetsen, herhaling en vakexamen aansluiten op dezelfde 1.0-leerarchitectuur.

## Fase E — Overige zeven vakken

Daarna dezelfde pipeline toepassen op:

- [ ] Luchtvaartwetgeving
- [ ] Menselijke prestaties
- [ ] Communicatie
- [ ] Operationele procedures
- [ ] Vliegprestaties en vluchtplanning
- [ ] Algemene kennis van het zweefvliegtuig
- [ ] Navigatie

Bij **Luchtvaartwetgeving**, luchtruim, AIP/NOTAM en andere veranderlijke operationele onderwerpen blijft een extra actualiteitscontrole vereist.

## Later / productontwikkeling

Niet nodig om de eerste vakken inhoudelijk goed te maken, maar wel logische vervolgstappen:

- [ ] Account/synchronisatie zodat voortgang niet alleen per browser via localStorage bestaat.
- [ ] Streaks en XP verder koppelen aan leren zonder mastery ermee te verwarren.
- [ ] Persoonlijke zwakke-puntenweergave verder verdiepen tot kenniselementniveau.
- [ ] Gemengde examenmodus over meerdere vakken.
- [ ] Betere mobiele/PWA-ervaring en eventueel installeren op beginscherm.
- [ ] Beheer- of contenteditor voor brongebonden cursusinhoud.

## Huidige positie

**Klaar:** Fase A, Fase B en Fase C.  
**Nu:** Fase D — Meteorologie als tweede volledige cursus.  
**Daarna:** Fase E — de overige zeven vakken.  
**Eerstvolgende concrete taak:** Meteorologie registreren als `concept`-cursus, de hoofdstukstructuur 3.1–3.10 vastleggen en daarna uit het actuele dictaat het bronsectiemanifest voor Gate 1 opbouwen.
