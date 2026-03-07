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

## Principe général de correction
- **Entraînement (/7)** : auto-correction déterministe (réponses attendues définies dans les données).
- **Production (/3)** : correction guidée sur réponse courte avec normalisation (`normalize.js`) pour éviter les faux négatifs dus aux accents, casse, espaces, ponctuation.
- Le mécanisme exact sera implémenté dans une PR dédiée au moteur métier.
