# ATRIUM

Application web statique d’apprentissage progressif du latin et des langues anciennes au collège.

ATRIUM propose un parcours structuré, cumulatif et lisible, pensé pour accompagner les élèves de la 5e à la 3e dans une progression régulière : acquisition du lexique, repérage des formes, compréhension syntaxique, micro-traduction guidée, puis montée vers une production plus assurée.

## Vision produit

ATRIUM est conçu comme un parcours pédagogique data-driven : l’élève progresse leçon par leçon, période par période, avec une part d’entraînement auto-corrigé et une part de production écrite guidée.

L’objectif n’est pas seulement de “faire des exercices”, mais d’installer des automatismes de lecture, de compréhension et de manipulation de la langue latine, dans une logique de progression continue, proche des usages des apps de langue, tout en restant compatible avec les attendus LCA du collège.

## Architecture pédagogique canonique (non négociable)

* 3 périodes par niveau
* 13 leçons par période
* 39 leçons par niveau
* 10 points par leçon
* 7 points d’entraînement auto-corrigé
* 3 points de production écrite guidée
* 130 points par période
* Validation d’une période à partir de 80 % (`104 / 130`)

## Logique de scoring

* Leçon = `training (/7) + production (/3) = total (/10)`
* Période = somme des 13 leçons = `/130`
* Une période est validée si le pourcentage obtenu est `>= 80%`
* Le scoring est contractuel et ne doit pas être modifié hors décision produit explicite

## Logique pédagogique générale

ATRIUM repose sur quelques principes simples :

- progression par micro-pas ;
- réactivation fréquente du lexique et des structures ;
- alternance entre reconnaissance, manipulation et production ;
- correction suffisamment souple pour accepter plusieurs réponses recevables ;
- montée progressive vers une autonomie réelle en thème guidé et en lecture.

L’application vise un apprentissage concret, progressif et cumulatif, avec une attention particulière à la robustesse pédagogique des corrections.

## Organisation par niveaux

### 5e — Acculturation et premiers automatismes

Le niveau 5e constitue l’entrée dans le parcours.

Objectifs généraux :

- découvrir le fonctionnement global du latin ;
- installer un premier bain lexical et syntaxique ;
- repérer sujet, verbe, complément, groupes nominaux simples ;
- comprendre et manipuler les premières déclinaisons et des formes verbales usuelles ;
- développer des réflexes de lecture et de micro-traduction ;
- construire une première familiarité avec la civilisation romaine à travers de petites scènes narratives.

La 5e pose le socle : vocabulaire de base, structures simples, repérages fondamentaux, premières productions guidées.

### 4e — Consolidation morphologique et extension des usages

Le niveau 4e prolonge la logique de 5e dans une version plus ambitieuse.

Objectifs généraux :

- consolider les acquis lexicaux et syntaxiques de 5e ;
- étendre le travail sur les déclinaisons et les fonctions ;
- renforcer la reconnaissance des formes verbales ;
- développer des phrases plus variées et plus rigoureuses ;
- travailler la lecture suivie de micro-textes davantage structurés ;
- inscrire l’apprentissage dans des contextes historiques, politiques et culturels plus riches.

La 4e doit permettre de passer d’une acclimatation solide à une maîtrise de plus en plus consciente des mécanismes de la langue.

### 3e — Maîtrise contrôlée et préparation à un niveau de sortie crédible

Le niveau 3e constitue l’aboutissement du parcours collège.

Objectifs généraux :

- stabiliser les connaissances morphologiques et syntaxiques ;
- manipuler un lexique plus étendu ;
- lire et comprendre des phrases plus longues ou plus denses ;
- produire du thème guidé de façon plus sûre ;
- renforcer l’autonomie de repérage, de traduction et de justification ;
- préparer une sortie de cycle cohérente avec les ambitions de l’application en matière de standardisation et de certification.

La 3e vise une compétence de production contrôlée et de compréhension structurée, suffisamment robuste pour servir de base à une reconnaissance plus explicite du niveau atteint.

## Progression d’ensemble

À l’échelle du collège, ATRIUM suit une montée lisible :

- **5e** : découverte, repérage, acclimatation, premiers réflexes ;
- **4e** : consolidation, extension, rigueur morphologique et syntaxique ;
- **3e** : stabilisation, autonomie contrôlée, préparation à une sortie de cycle ambitieuse.

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
      data/
        lessons/
          5e/
            p1.js
            p2.js
            p3.js
          4e/
            p1.js
            p2.js
            p3.js
          3e/
            p1.js
            p2.js
            p3.js
