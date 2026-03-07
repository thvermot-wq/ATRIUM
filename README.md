# ATRIUM

Application web statique d’apprentissage progressif du latin pour élèves de 5e (LCA).

## Vision produit
ATRIUM est conçu comme un parcours structuré et data-driven : l’élève progresse leçon par leçon, période par période, avec une part d’entraînement auto-corrigé et une part de production écrite guidée.

## Architecture pédagogique canonique (non négociable)
- 3 périodes
- 5 leçons par période
- 15 leçons au total
- 10 points par leçon
- 7 points d’entraînement auto-corrigé
- 3 points de production écrite guidée
- 50 points par période
- Validation d’une période à partir de 80 %

## Logique de scoring (contrat)
- **Leçon** = `training (/7) + production (/3) = total (/10)`
- **Période** = somme des 5 leçons = `/50`
- **Statut période** : validée si pourcentage `>= 80%`
- Le scoring est contractuel et ne doit pas être modifié hors décision produit explicite.

## État actuel de l’application
Cette étape implémente l’**app shell navigable** et un **modèle pédagogique data-driven** :
- accueil (`#/`)
- dashboard (`#/dashboard`)
- vue leçon (`#/lesson/:lessonId`)
- vue résultats placeholder (`#/results`)
- 15 leçons déclarées dans les données (3 périodes × 5)
- 3 leçons modèles entièrement remplies : `p1-l1`, `p1-l2`, `p3-l11`


## Leçons jouables actuellement (end-to-end)
Les leçons entièrement jouables dans cette version sont :
- `p1-l1` — Reconnaître des mots latins
- `p1-l2` — Comprendre les formules rituelles
- `p3-l11` — Trouver le verbe

Pour ces 3 leçons :
- entraînement 7 items jouables avec feedback immédiat
- production guidée 3 champs texte corrigés automatiquement
- synthèse finale de leçon affichée (`/7`, `/3`, `/10`)
- persistance score courant + meilleur score via `localStorage`

Les 12 autres leçons restent structurées mais non finalisées en mode jouable.

## Structure du repository

```text
ATRIUM/
  index.html
  README.md
  AGENTS.md
  assets/
    css/
      styles.css
    js/
      app.js
      router.js
      storage.js
      scoring.js
      normalize.js
      answerChecker.js
      trainingEngine.js
      productionEngine.js
      lessons.js
      ui.js
      components/
        periodCard.js
        lessonCard.js
        progressBar.js
        feedbackBox.js
      views/
        homeView.js
        dashboardView.js
        lessonView.js
        resultsView.js
```

## Lancement local
Option 1 (simple) : ouvrir `index.html` dans le navigateur.

Option 2 (recommandé) : serveur statique local.

```bash
python3 -m http.server 4173
```

Puis ouvrir `http://127.0.0.1:4173`.

## Publication GitHub Pages
1. Pousser sur le dépôt GitHub.
2. Dans **Settings > Pages** :
   - Source: `Deploy from a branch`
   - Branch: `main` (ou branche de publication)
   - Folder: `/ (root)`
3. Sauvegarder et attendre le déploiement.

Le projet est volontairement sans build lourd pour rester compatible GitHub Pages.

## Ajouter une nouvelle leçon (principe)
1. Déclarer la leçon dans `assets/js/lessons.js` (format data-driven).
2. Renseigner au minimum : `id`, `period`, `title`, `objective`, `maxScore`, `training`, `production`.
3. Vérifier qu’elle respecte le contrat `/7 + /3 = /10`.
4. Associer la leçon à une période existante (1 à 3).
5. Vérifier les rendus UI (dashboard + vue leçon) sans casser l’agrégation de période.




## Moteur d’entraînement générique
Le moteur d’entraînement est data-driven et supporte les micro-items suivants :
- `single-choice` (ou alias `mcq`)
- `multiple-choice`
- `matching`
- `ordering`

Architecture :
- `assets/js/trainingEngine.js` : logique métier (évaluation + progression)
- `assets/js/components/trainingItemCard.js` : rendu UI par type d’item
- `assets/js/views/lessonView.js` : orchestration de la phase d’entraînement dans la leçon

Comportements :
- feedback immédiat item par item (juste/faux)
- progression affichée (`x/7`)
- score d’entraînement calculé automatiquement (sur 7)
- score production saisi séparément (sur 3)
- enregistrement final via moteur scoring/storage existant


## Moteur de production guidée
La phase de production écrite guidée est conservée en 3 micro-productions (1 point chacune, total /3).

Architecture :
- `assets/js/productionEngine.js` : logique d’évaluation des productions
- `assets/js/components/productionItemCard.js` : rendu d’un champ texte + correction
- `assets/js/views/lessonView.js` : orchestration de la phase production dans la leçon

Comportements :
- 3 champs courts de saisie (pour les leçons modèles)
- correction automatique avec le moteur central (`answerChecker.js` + normalisation)
- feedback juste/faux par item
- affichage de la bonne réponse en cas d’erreur
- score production `/3` et prévisualisation du total leçon `/10`

## API scoring, progression et persistance
Fonctions principales :
- `computeLessonScore(...)`
- `computePeriodScore(...)`
- `getPeriodStatus(...)`
- `loadProgress(...)`
- `saveProgress(...)`
- `saveLessonProgress(...)`

Structure stockée dans `localStorage` (`atrium-progress-v1`) :
```json
{
  "lessons": {
    "p1-l1": {
      "current": {"trainingScore": 0, "productionScore": 0, "totalScore": 0, "maxScore": 10},
      "best": {"trainingScore": 0, "productionScore": 0, "totalScore": 0, "maxScore": 10}
    }
  },
  "periods": {
    "p1": {"totalScore": 0, "maxScore": 50, "percent": 0, "status": "période à reprendre"}
  },
  "updatedAt": "..."
}
```

Comportement de rejeu :
- le score courant de la leçon est remplacé par la tentative la plus récente ;
- le meilleur score de la leçon est conservé ;
- les scores de période sont recalculés automatiquement à partir des meilleurs scores de leçon.

## API de normalisation et correction
- `normalizeInput(value, options?)` dans `assets/js/normalize.js`
- `isCorrect(userAnswer, answerConfig)` dans `assets/js/answerChecker.js`
- `isCorrectAny(userAnswer, answerConfigs)` pour gérer plusieurs configurations acceptées

Types de correction supportés :
- `exact`
- `one-of` (liste fermée)
- `translation-segment`
- `latin-expression`

Règles de normalisation implémentées :
- casse ignorée
- trim + réduction des espaces
- ponctuation finale ignorée
- apostrophes harmonisées (`'` et `’`)
- accents tolérés côté français (`language: "fr"`)
- latin traité avec orthographe attendue fixée dans les données (`language: "latin"`)

Exécuter les assertions minimales :
```bash
node tests/answer-checker.assertions.mjs
```

## Principe général de correction
- **Entraînement (/7)** : auto-correction déterministe (réponses attendues définies dans les données).
- **Production (/3)** : correction guidée sur réponse courte avec normalisation (`normalize.js`) pour éviter les faux négatifs dus aux accents, casse, espaces, ponctuation.
- Le mécanisme exact sera implémenté dans une PR dédiée au moteur métier.
