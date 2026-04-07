# AGENTS.md — ATRIUM

Ce fichier définit les contraintes de contribution pour ATRIUM.

## Mission du repo
ATRIUM est une application pédagogique de langues anciennes.
La priorité absolue est la stabilité du contenu pédagogique, du moteur de correction, du scoring et de la structure des leçons.

## Invariants produit
Les éléments suivants sont non modifiables sans instruction explicite du produit :
- 3 périodes
- 12 leçons par période
- 36 leçons au total
- 10 points par leçon
- 7 entraînements
- 3 productions
- 120 points par période
- validation à 80 %
- score minimal de validation : 96 / 120

## Interdits absolus
Ne pas modifier sans demande explicite :
- le contenu des leçons ;
- les exercices ;
- les acceptedAnswers ;
- les prompts pédagogiques ;
- le moteur de correction ;
- la logique de scoring contractuelle ;
- les seuils de validation ;
- le rulebook ;
- l’audit pédagogique ;
- les barèmes ;
- les textes Latin / Français ;
- la structure pédagogique périodes / leçons.

Ne faire aucun refactor opportuniste.
Ne faire aucune amélioration “au passage”.
Ne pas changer le wording pédagogique.
Ne pas élargir le chantier hors scope demandé.

## Contraintes obligatoires
- Rester data-driven : les leçons, critères et barèmes doivent être portés par les données.
- Ne pas casser le scoring contractuel (`/7 + /3 = /10`, `/120` par période, validation `>= 80 %`, seuil minimal `96/120`).
- Rester compatible GitHub Pages pour le front statique.
- HTML/CSS/JS vanilla privilégiés.
- Éviter React, Vite, build lourd ou refonte d’architecture sans instruction expresse.
- Préserver la séparation entre logique métier, données et rendu UI.
- Préférer des ajouts isolés à des réécritures transversales.

## Persistance et identité
- Ne pas considérer localStorage comme source de vérité pour une identité portable ou une progression partagée entre appareils.
- localStorage peut être utilisé pour des préférences locales, des caches légers ou des fallbacks non critiques.
- Si une contribution touche à l’authentification, à la sauvegarde de progression ou à la synchronisation, la source de vérité doit être centralisée côté serveur.
- Pour le hors ligne, préférer une file locale dédiée et synchronisable plutôt qu’une persistance métier uniquement locale.

## Sécurité
- Ne jamais exposer de secret serveur, service role ou clé d’administration dans le navigateur.
- Toute opération d’administration Auth ou de sécurité sensible doit passer par une brique serveur de confiance.
- Ne pas déclarer un flux “sécurisé” si le maillon serveur manque.
- Toute règle d’accès aux données doit être explicitée et vérifiable.

## Structure attendue
- `assets/js/lessons.js` ou `assets/js/data/lessons/*` : contenu pédagogique data-driven
- `assets/js/scoring.js` : calculs de score et agrégations
- `assets/js/normalize.js` : normalisation des réponses
- `assets/js/storage.js` : persistance locale non sensible
- `assets/js/ui.js` + `views/` + `components/` : rendu interface

Si un nouveau chantier ajoute une couche dédiée, préférer des modules séparés clairement nommés, par exemple :
- `auth/`
- `progress/`
- `teacher/`
- `supabase/`
- `config/`

## Mode de travail obligatoire
Avant tout code :
1. produire un plan d’exécution détaillé ;
2. lister les fichiers susceptibles d’être créés ou modifiés ;
3. rappeler les critères d’acceptation ;
4. signaler les dépendances d’environnement ou de secrets.

Ensuite seulement :
- travailler par lots courts ;
- montrer le diff réel après chaque lot ;
- dire explicitement ce qui reste non fait ;
- attendre validation avant d’élargir le chantier.

## Preuves attendues
Aucune tâche n’est considérée comme terminée sur simple résumé.
Toujours fournir :
- la liste exacte des fichiers créés ;
- la liste exacte des fichiers modifiés ;
- le patch ou diff réel ;
- les commandes de vérification exécutées ;
- les limites connues ;
- les points non traités volontairement.

## Définition du done
Une tâche est terminée seulement si :
- le scope est respecté ;
- aucun fichier pédagogique interdit n’a été touché ;
- le diff est strictement borné ;
- les checks pertinents passent ;
- les limites restantes sont dites explicitement.

## Règle de sécurité produit
ATRIUM ne doit pas dériver vers un simple quiz :
la part de production écrite guidée (`/3`) doit rester présente et corrigée.
À difficulté égale, ne jamais résoudre un problème technique en affaiblissant l’exigence pédagogique.
