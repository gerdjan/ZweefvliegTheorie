# Zweeftheorie

Een eenvoudige Duolingo-achtige leerapp voor de Nederlandse SPL-theorie voor zweefvliegen.

## Status

MVP 0.1. De negen examenvakken zijn als curriculum gemapt. Van ieder vak is één korte demonstratieles speelbaar. Progressie, XP, hearts en voltooide lessen worden lokaal in de browser opgeslagen.

## Starten

```bash
npm install
npm run dev
```

Open daarna de URL die Vite toont (meestal `http://localhost:5173`).

Productie-build:

```bash
npm run build
npm run preview
```

## Architectuur

```text
src/
  components/          UI-componenten
  data/curriculum.ts   curriculum + huidige MVP-lesinhoud
  domain/types.ts      datamodel
  lib/progress.ts      localStorage-progressie
```

## Contentstrategie

- **Actuele theoriedictaten zijn de bron van waarheid voor kennis en antwoorden.**
- **Studiehulpen/oefenvragen worden gebruikt als leerdoel- en vragenbank.**
- Als een oudere studiehulp botst met een nieuwer dictaat, volgt de app het nieuwere dictaat.
- Inhoud die tijdgevoelig is (luchtvaartwetgeving, luchtruim, frequenties, procedures) moet voor publicatie worden gecontroleerd tegen de actuele bron.

Zie `CONTENT_GUIDELINES.md` voor het uitbreidingsproces.

## Volgende logische stappen

1. Beginselen volledig uitwerken tot levels 5.0–5.7.
2. Vraagtypen toevoegen: volgorde, koppelen, scenario's en later visuele kaart/diagram-vragen.
3. Foutenbak en spaced repetition toevoegen.
4. Boss level / hoofdstuktoets en examenmodus toevoegen.
5. Content uit `curriculum.ts` verplaatsen naar losse JSON-bestanden per vak.
6. Later optioneel accounts/sync via een backend toevoegen.
