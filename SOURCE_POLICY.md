# Source policy - Beginselen van het zweefvliegen

De cursus **Beginselen van het zweefvliegen** is source-first opgebouwd.

## Regels voor juistheid

1. Elk theorieblok heeft een `source` met bestandsnaam, PDF-pagina en paragraaf.
2. Elke kennisvraag heeft een `source` die het **inhoudelijke juiste antwoord** ondersteunt.
3. Vragen die zijn geïnspireerd op de oudere studiehulp krijgen daarnaast een `practiceSource`.
4. De studiehulp uit 2018 is **geen antwoordautoriteit en geen inhoudsopgave**. Bij verschil, twijfel of ontbrekende oefenvraag is `5-Beginselen.pdf` (versie november 2025) leidend.
5. De paginanummers in de app zijn **PDF-paginanummers**: de voorpagina telt dus als PDF-pagina 1.
6. Een nieuw theorieblok of een nieuwe vraag zonder bronverwijzing mag niet aan deze cursus worden toegevoegd.
7. Voor type-specifieke procedures blijft het vlieghandboek van het betreffende zweefvliegtuig leidend. Dit is vooral belangrijk bij tolvlucht-/vrilleprocedures.

## Regels voor volledigheid

Juist brongebruik is niet hetzelfde als volledige dekking. Daarom zijn er drie controles:

1. **Structurele brondekking (CI):** `content/coverage/principles-sections.json` bevat alle inhoudelijke genummerde secties uit het actuele dictaat. `npm run audit:content` controleert dat iedere sectie ten minste één `b(...)`-verwijzing naar de actuele PDF heeft. Ontbreekt een sectie, dan faalt de build.
2. **Detailaudit per sectie:** definities, formules, opsommingen, oorzaak-gevolgrelaties, relevante getallen/tabellen, veiligheidswaarschuwingen en figuren worden per sectie gecontroleerd tegen de theorie-PDF. Een enkele sectieverwijzing is dus niet genoeg om de detailaudit af te vinken.
3. **Studiehulp als eindcheck:** pas daarna vergelijken we met de oude oefenvragen om te controleren of alle oefendoelen terugkomen. De studiehulp kan dus extra vragen opleveren, maar nooit actuele inhoud wegfilteren.

De actuele status en werkwijze staan in `content/coverage/principles-audit.md`.

## Illustraties

Illustraties in de publieke app worden bij voorkeur als eigen didactische schets gemaakt en krijgen een expliciete bronverwijzing naar de passage die de inhoud ondersteunt. We nemen afbeeldingen uit de PDF niet automatisch over in de publieke repository, omdat redistributierechten apart moeten worden vastgesteld.

## Bronbestanden

- `5-Beginselen.pdf` - Beginselen van het zweefvliegen, versie november 2025, 41 PDF-pagina's.
- `5-beginselen-studiehulp.pdf` - Studiehulp Beginselen van het Zweefvliegen, 3 januari 2018, 2 PDF-pagina's.

De PDF-bestanden zelf worden niet automatisch in deze publieke repository gepubliceerd. De app toont daarom een exacte verwijzing waarmee de betreffende passage in de bronset kan worden teruggevonden. Als de PDF's later in de app zelf moeten kunnen worden geopend, moet eerst worden vastgesteld dat publicatie/redistributie van die bestanden is toegestaan.
