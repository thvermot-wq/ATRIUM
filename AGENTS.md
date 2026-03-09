# AGENTS.md — ATRIUM

Ce fichier définit les contraintes de contribution pour ATRIUM.

## Invariants
Les éléments suivants sont **non modifiables** sans instruction explicite du produit :
- 3 périodes
- 12 leçons par période
- 36 leçons au total
- 10 points par leçon
- 7 entraînements
- 3 productions
- 120 points par période
- validation à 80 %
- score minimal de validation : 96 / 120

## Contraintes obligatoires
- Rester **data-driven** : les leçons, critères et barèmes doivent être portés par les données.
- Ne **pas casser le scoring** contractuel (`/7 + /3 = /10`, `/120` par période, validation `>=80%`, seuil minimal `96/120`).
- Rester compatible **GitHub Pages** (site statique).
- Préserver la stratégie de persistance via **localStorage**.
- Éviter React / Vite / build lourd sans instruction expresse.

## Conventions de code
- HTML/CSS/JS vanilla privilégiés.
- Modules simples, fonctions courtes, nommage explicite.
- Séparer logique métier, données et rendu UI.
- Éviter la sur-ingénierie.

## Structure attendue
- `assets/js/lessons.js` : contenu pédagogique data-driven.
- `assets/js/scoring.js` : calculs de score et agrégations.
- `assets/js/normalize.js` : normalisation des réponses.
- `assets/js/storage.js` : persistance localStorage.
- `assets/js/ui.js` + `views/` + `components/` : rendu interface.

## Règle de sécurité produit
ATRIUM ne doit pas dériver vers un simple quiz : la part de production écrite guidée (/3) doit rester présente et corrigée.
