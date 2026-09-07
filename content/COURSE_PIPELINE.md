# Generieke cursus- en auditpipeline

Dit document beschrijft hoe een nieuw SPL-theorievak van bron-PDF naar een 1.0-cursus gaat. Beginselen is de referentie-implementatie; Meteorologie wordt het eerste vak dat vanaf het begin via dit sjabloon wordt opgebouwd.

## Release-status

Iedere cursus doorloopt dezelfde statussen:

1. `concept` — inhoud en structuur worden opgebouwd;
2. `audit` — de broninventaris en detailaudit zijn actief;
3. `content-complete` — alle vereiste inhoudelijke releasegates zijn gesloten;
4. `1.0` — de inhoud is compleet en aangesloten op hoofdstuktoetsen, herhaling en vakexamen.

## Runtime-architectuur

`src/domain/course.ts` bevat de generieke typen voor:

- hoofdstukken;
- kenniselementen;
- bronbeleid;
- releasegates;
- toets- en examendrempels;
- cursusdefinities.

`src/data/courseDefinitions.ts` is het runtime-register. Een cursus die de volledige leerarchitectuur gebruikt krijgt daar één `CourseDefinition`. De UI en studiemodi lezen vervolgens uit dit register in plaats van vakspecifieke controles te gebruiken.

De generieke leerarchitectuur ondersteunt:

- hoofdstukgroepering en voortgang;
- hoofdstuktoetsen;
- kennisindex;
- herhaalmodus;
- spaced repetition op 1 / 3 / 7 / 14 / 30 dagen;
- een willekeurig vakexamen;
- per-vak examenscores;
- multiplechoice, rekenen, volgorde, koppelen, diagramvragen en scenario's.

## Bronmodel

Iedere theorie- of vraagstap kan een `SourceReference` hebben met PDF, pagina en paragraaf. Voor veranderlijke informatie kan daarnaast worden vastgelegd:

```ts
{
  freshness: 'dynamic',
  currentCheck: 'Controleer vóór operationeel gebruik tegen de actuele officiële AIP/regelgeving.'
}
```

De app toont daarvoor automatisch een actualiteitswaarschuwing. Dit is bedoeld voor onder meer wetgeving, luchtruim, AIP/NOTAM en andere gegevens die na publicatie van een dictaat kunnen veranderen.

## Build-audit

`content/coverage/courses.json` is het register voor de automatische contentaudit. Per vak staan daar onder andere:

- primaire bron en versie;
- map met cursusinhoud;
- bronverwijzingshelper;
- sectiemanifest;
- detailaudit;
- optionele studiehulpaudit;
- releasebestand;
- verwacht aantal studiehulpdoelen;
- of actieve-vraagdekking verplicht is.

`scripts/audit-content.mjs` loopt alle geregistreerde vakken af en voert generiek uit:

### Gate 1 — bronsecties

Iedere genummerde sectie in het sectiemanifest moet minimaal één geldige verwijzing vanuit de cursus hebben.

### Gate 2 — detailaudit

Iedere bronsectie heeft een telling van geïnventariseerde kenniselementen, afgedekte elementen en expliciet open elementen. De tellingen moeten intern kloppen.

### Gate 3 — studiehulp

Als een studiehulp bestaat, moet ieder oefendoel naar bestaande levels, kenniselementen en een actuele vindplaats in de primaire bron verwijzen. Oude of niet meer één-op-één bestaande figuurverwijzingen moeten expliciet als aangepast worden gedocumenteerd.

### Actieve vraagdekking

Waar geconfigureerd moet ieder studiehulpdoel bovendien gekoppeld zijn aan minimaal één level waarin de kennis actief wordt bevraagd.

Bij status `content-complete` of `1.0` faalt de productiebuild zodra een vereiste gate open is.

## Stappen voor een nieuw vak

1. Maak hoofdstukken en een `CourseDefinition` met status `concept`.
2. Leg de actuele theorie-PDF vast als primaire bron.
3. Maak het sectiemanifest uit de actuele bron.
4. Registreer het vak in `content/coverage/courses.json` zodra de auditbestanden bestaan.
5. Voer de pagina-voor-pagina detailaudit uit.
6. Bouw de kenniselementen-index en brongebonden lessen.
7. Voeg actieve vragen toe en controleer vraagvariatie.
8. Gebruik een eventuele oudere studiehulp pas daarna als kruiscontrole.
9. Sluit Gate 1, Gate 2, Gate 3 en actieve-vraagdekking; zet status op `content-complete`.
10. Sluit hoofdstuktoetsen, herhaling en vakexamen aan; zet status op `1.0`.

## Belangrijk uitgangspunt

Een studiehulp bepaalt nooit welke theorie wel of niet in de cursus terechtkomt. De actuele primaire theoriebron bepaalt de inhoud; de studiehulp controleert achteraf of de traditionele oefendoelen door de cursus worden ondersteund.
