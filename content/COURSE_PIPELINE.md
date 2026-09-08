# Generieke cursus- en auditpipeline

Dit document beschrijft hoe een nieuw SPL-theorievak van bron-PDF naar een 1.0-cursus gaat. Beginselen was de referentie-implementatie; Meteorologie is het eerste vak dat volledig met de strengere tweede generatie van deze pipeline is opgebouwd.

## Release-status

Iedere cursus doorloopt dezelfde statussen:

1. `concept` — inhoud en structuur worden opgebouwd;
2. `audit` — de broninventaris en detailaudit zijn actief;
3. `content-complete` — alle vereiste inhoudelijke releasegates zijn gesloten;
4. `1.0` — de inhoud is compleet en aangesloten op hoofdstuktoetsen, herhaling en vakexamen.

Een status wordt pas verhoogd nadat de CI-build die status zelf succesvol heeft gecontroleerd.

## Runtime-architectuur

`src/domain/course.ts` bevat de generieke typen voor hoofdstukken, kenniselementen, bronbeleid, releasegates, toets-/examendrempels en cursusdefinities. `src/data/courseDefinitions.ts` is het runtime-register.

De generieke leerarchitectuur ondersteunt:

- hoofdstukgroepering en voortgang;
- hoofdstuktoetsen;
- kennisindex;
- herhaalmodus;
- spaced repetition op 1 / 3 / 7 / 14 / 30 dagen;
- willekeurige vakexamens en per-vak examenscores;
- multiplechoice, rekenen, volgorde, koppelen, diagramvragen en scenario's.

Voor omvangrijke vakken mogen hoofdstukken technisch in kleinere bestanden worden gesplitst. Dat verandert de zichtbare hoofdstukstructuur niet, maar voorkomt moeilijk onderhoudbare megabestanden.

## Bronmodel

Iedere theorie- en vraagstap van een volwaardige cursus heeft een `SourceReference` met PDF, pagina en paragraaf. Bronverwijzingen moeten de inhoud daadwerkelijk ondersteunen; een verwijzing alleen is geen bewijs van semantische juistheid.

Voor veranderlijke informatie wordt daarnaast gebruikt:

```ts
{
  freshness: 'dynamic',
  currentCheck: 'Controleer vóór operationeel gebruik tegen de actuele officiële bron.'
}
```

Dynamische controles worden apart vastgelegd, bijvoorbeeld in `content/coverage/<vak>-current-checks.json`. De actuele officiële controle **vervangt de theorie-PDF niet**: stabiele leerstof blijft uit de primaire bron komen, terwijl tijdgebonden operationele claims apart worden geverifieerd.

Bij een conflict tussen dictaat en actuele officiële bron geldt:

1. het conflict expliciet vastleggen;
2. de oude claim niet stilzwijgend herschrijven alsof hij uit het dictaat komt;
3. de stabiele definitie/theorie brongebonden houden;
4. toepasselijkheid, frequentie, regelgeving of distributie als dynamisch markeren.

## Build-audit

`content/coverage/courses.json` registreert per vak de primaire bron, inhoudsmap, bronhelper, sectiemanifest, detailaudit, eventuele studiehulpaudit en release-status. `scripts/audit-content.mjs` voert de gates uit.

### Gate 1 — bronsecties

Iedere genummerde sectie uit het actuele dictaat moet vanuit de cursus worden gerefereerd. Dit voorkomt dat een volledig hoofdstuk of subhoofdstuk ongemerkt ontbreekt.

### Gate 2 — detailaudit

**Nieuwe standaard vanaf Meteorologie:** ieder verplicht bron-/auditdetail krijgt een stabiel ID, bijvoorbeeld `meteo-d137`. Dat ID staat op de daadwerkelijke theoriekaart die het punt afdekt. De build vereist dat ieder verplicht ID exact één keer voorkomt.

Hierdoor is een totaaltelling als `432/432` niet meer voldoende op zichzelf: de build bewijst welke 432 elementen daadwerkelijk in de cursuscode zitten.

De oorspronkelijke inventarisnummering blijft behouden. Als een bronpunt bewust niet als mastery wordt geleerd, blijft zijn ID bestaan als expliciet `context-only`/conflictpunt. Verplichte elementen worden **niet opnieuw doorgenummerd**, omdat dat de traceerbaarheid naar de oorspronkelijke audit verbreekt.

Een `context-only` beslissing moet altijd een reden bevatten, bijvoorbeeld:

- verouderde licentie- of regelgevingsclaim;
- tijdgebonden frequentie, website of inlogprocedure;
- gedateerd voorbeeld waarvan de methode wel wordt geleerd;
- vakoverschrijdende context die elders als mastery thuishoort;
- expliciet conflict met een actuele officiële bron.

Context-only betekent dus **geregistreerd maar niet als blijvend leerfeit getoetst**, niet “genegeerd”.

### Gate 3 — studiehulp

Een oude studiehulp wordt pas gebruikt nadat de actuele theorie volledig is geïnventariseerd. Ieder oefendoel krijgt vanaf Meteorologie een stabiel doel-ID (`meteo-g01`, enz.). De actuele theorie blijft de antwoordautoriteit.

### Actieve vraagdekking

**Nieuwe standaard vanaf Meteorologie:** het studiehulpdoel-ID moet op de actieve vraag zelf staan. De oude controle “het gekoppelde level bevat ergens een vraag” bleek te zwak: daarmee kon theoretisch de verkeerde vraag het doel groen maken.

De build vereist daarom ieder verwacht doel-ID op minimaal één actieve kennisvraag.

Bij status `content-complete` of `1.0` faalt de build zodra een vereiste gate open is.

## Kenniselementen-index

Waar mogelijk wordt de gebruikersgerichte kennisindex rechtstreeks uit de brongebonden theoriekaarten opgebouwd. Daarmee voorkomen we een tweede handmatig onderhouden kopie van dezelfde uitleg die later van de lessen kan afwijken.

De micro-detailaudit blijft strenger en fijner dan de zichtbare kennisindex. Niet ieder audit-ID hoeft een apart gebruikersbegrip te zijn.

## Veilige ontwikkelvolgorde

Voor een groot nieuw vak wordt eerst op een feature branch gewerkt. De CI draait daar dezelfde audit, TypeScript- en productiebuild als op `main`, maar publiceert GitHub Pages alleen vanaf `main`. Pas na een groene 1.0-build wordt naar `main` gemerged.

Meteorologie bewees waarom dit nuttig is: de eerste strikte Gate-2-run faalde doordat de audit ten onrechte aannam dat de 432 verplichte ID's simpelweg `001–432` waren. De echte inventaris liep `001–437` met vijf expliciete contextgaten. De rode build voorkwam dat een fout auditmodel als “100% compleet” werd gepubliceerd.

## Stappen voor een nieuw vak

1. Maak hoofdstukken en een `CourseDefinition` met status `concept`.
2. Leg de actuele theorie-PDF vast als primaire bron.
3. Maak het sectiemanifest uit de actuele bron.
4. Inventariseer de bron pagina voor pagina en geef **ieder** detail een stabiel volgnummer.
5. Classificeer alleen met expliciete reden eventuele context-only/dynamische/conflictpunten; bewaar hun oorspronkelijke nummers.
6. Bouw de brongebonden lessen en koppel de verplichte detail-ID's aan de echte theoriekaarten.
7. Bouw de kennisindex bij voorkeur uit dezelfde cursusdata.
8. Voeg actieve vragen en geschikte illustraties toe.
9. Gebruik een eventuele oudere studiehulp pas daarna als kruiscontrole; geef elk oefendoel een stabiel doel-ID en zet dat ID op een echte actieve vraag.
10. Laat Gate 1, 2, 3 en TypeScript/productiebuild groen worden; promoveer naar `content-complete` en laat opnieuw bouwen.
11. Controleer hoofdstuktoetsen, herhaling, examendekking, termen en illustraties; promoveer naar `1.0` en laat opnieuw bouwen.
12. Merge pas daarna naar `main` en verifieer de productie-deployment.

## Belangrijk uitgangspunt

Een studiehulp bepaalt nooit welke theorie wel of niet in de cursus terechtkomt. De actuele primaire theoriebron bepaalt de inhoud; de studiehulp controleert achteraf of de traditionele oefendoelen door de cursus worden ondersteund. Dynamische externe controles worden duidelijk als externe actualiteitscontrole herkenbaar gehouden.
