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
- [x] Vraagbankbreedte bewaakt tegen de 75 studiehulpdoelen: de build controleert nu **75/75 actieve-vraagdekking**.
- [x] Meer vraagvormen toegevoegd: multiplechoice, rekenen, volgorde, koppelen, diagraminterpretatie, snelheidspolaire en scenario's.
- [x] Eigen snelheidspolaire-illustratie toegevoegd naast de bestaande krachten-, assen-, V-n- en overtrekschema's.

**Beginselen 1.0 is hiermee functioneel en inhoudelijk gesloten als referentiecursus.** Verbeteringen op basis van echt gebruik blijven natuurlijk mogelijk zonder de releasegates te versoepelen.

## Fase C — Generieke content- en auditpipeline ← VOLGENDE

Voor we het tweede vak volledig uitwerken maken we de Beginselen-specifieke techniek herbruikbaar.

- [ ] Generieke datastructuur voor bronnen, hoofdstukken, kenniselementen en lessen.
- [ ] Generieke Gate 1: bronsectiedekking.
- [ ] Generieke Gate 2: detailaudit per bronsectie.
- [ ] Generieke Gate 3: studiehulp-/oefendoeldekking en actieve-vraagdekking.
- [ ] Eén release-statusmodel voor alle vakken: concept → audit → inhoud compleet → 1.0.
- [ ] Generieke hoofdstuktoets-, herhaal- en examenarchitectuur gebruiken voor ieder vak.
- [ ] Dynamische/current-info markering ondersteunen voor onderwerpen die officiële actualiteitscontrole vragen.

## Fase D — Tweede volledige cursus: Meteorologie

Na Beginselen 1.0 en de generieke pipeline wordt **3. Meteorologie** de volgende volledige cursus.

- [ ] Actuele theorie-PDF als primaire bron structureren.
- [ ] Bronsecties inventariseren en Gate 1 sluiten.
- [ ] Pagina-voor-pagina detailaudit uitvoeren en Gate 2 sluiten.
- [ ] Kenniselementen-index bouwen.
- [ ] Theorielevels en oefenvragen bouwen met exacte bronnen.
- [ ] Geschikte illustraties, weerdiagrammen en interpretatieoefeningen toevoegen.
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

**Klaar:** Fase A en Fase B — Beginselen 1.0.  
**Nu:** Fase C — generieke content- en auditpipeline.  
**Daarna:** Fase D — Meteorologie als tweede volledige cursus.  
**Eerstvolgende concrete taak:** de Beginselen-specifieke bron-, audit-, hoofdstuk- en releasecode ombouwen tot een generiek vaksjabloon zonder de bestaande Beginselen-release te breken.
