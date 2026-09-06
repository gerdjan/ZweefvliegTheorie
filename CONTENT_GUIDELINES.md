# Content guidelines

## Bronnen in de huidige projectset

Theoriedictaten:

- `LUCHTVAARTWETGEVING.pdf` — december 2025
- `2-Menselijke-prestaties.pdf` — december 2025
- `3.Meteorologie.pdf` — januari 2026
- `4-Communicatie.pdf` — december 2025
- `5-Beginselen.pdf` — november 2025
- `6-OperationeleProcedures.pdf` — december 2025
- `7-Vliegprestaties.pdf` — december 2025
- `Akvhz.pdf` — Algemene Kennis van het Zweefvliegtuig, v2.0
- `9-Navigatie.pdf` — november 2025

Studiehulpen:

- `1-Luchtvaartwetgeving-studiehulp.pdf` — januari 2019
- `3-Meteo-studiehulp.pdf` — november 2019
- `5-beginselen-studiehulp.pdf` — januari 2018
- `8-AlgemeneKennis-studiehulp.pdf` — januari 2018
- `9-nav-studiehulp.pdf` — januari 2019

## Bronhiërarchie

1. Nieuwste relevante theoriedictaat.
2. Actuele officiële publicatie wanneer een onderwerp expliciet tijdgevoelig is.
3. Studiehulp als indicatie welke kennis actief beheerst moet worden.

Een studiehulp is dus **geen automatische answer key** wanneer deze ouder is dan het actuele dictaat.

## Lesformat

Een level bevat idealiter 5–9 stappen:

1. kernidee in 60–100 woorden;
2. recall-vraag;
3. tweede kernidee;
4. toepassingsvraag;
5. eventueel diagram/scenario;
6. eindcheck.

Vermijd het digitaal kopiëren van lange stukken dictaat. De app moet samenvatten, laten toepassen en actief laten terughalen.

## Mastery

- `>= 80%`: level gehaald.
- XP beloont activiteit, niet beheersing.
- Een later spaced-repetition-systeem bepaalt daadwerkelijke mastery.
- Foute antwoorden gaan naar een herhaalqueue.

## Per vak

De curriculumhoofdstukken in `src/data/curriculum.ts` volgen de structuur uit de aangeleverde theorie. Nieuwe lessen moeten hun `id` aan die structuur koppelen, bijvoorbeeld `meteo-3-3-adiabatisch` of `principles-5-6-vrille`.
