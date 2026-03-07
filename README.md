# ATRIUM_APP

## FR

### Atrium — Le latin comme architecture
Atrium est une application d’apprentissage du latin pour le collège, centrée sur la morphologie, la syntaxe et le thème guidé.

### Positionnement
- Positionnement CECRL **indicatif** et **limité à la production contrôlée**.
- Références comparatives anglo-saxonnes en langues anciennes (lecture, grammaire, composition scolaire).
- Latin scolaire : analyse, structuration grammaticale et traduction dirigée (pas de promesse de communication spontanée).

### Paliers pédagogiques
1. **Atrium Tiro** (fin de 5e) — pré-A1 / A1- en production contrôlée.
2. **Atrium Discipulus** (fin de 4e) — A1 solide en production contrôlée.
3. **Atrium Scriba** (fin de 3e) — A1+ / A2- en production contrôlée.

### Invariants techniques et produit implémentés
- 3 périodes.
- 5 leçons par période (15 leçons).
- Chaque leçon : entraînement `/7`, production guidée `/3`, total `/10`.
- Chaque période : score `/50`, pourcentage, statut validée/non validée.
- Validation d’une période à partir de 80 %.
- Application statique GitHub Pages (HTML/CSS/JS vanilla), sans build lourd.
- Persistance locale via `localStorage`.
- Correction de production courte avec normalisation des réponses.

### Ce qu’Atrium revendique
- progression explicite,
- exigence grammaticale,
- progression mesurable en thème guidé.

### Ce qu’Atrium ne revendique pas
- certification CECRL officielle,
- équivalence stricte avec les certifications de langues vivantes,
- promesse de latin conversationnel.

---

## EN

### Atrium — Latin as structure
Atrium is a lower-secondary Latin learning app focused on morphology, syntax, and guided composition.

### Positioning
- CEFR references are **indicative** and restricted to controlled writing.
- Anglo-American classical benchmarks are used as comparison points.
- School Latin is treated as reading/analysis/guided translation, not spontaneous communication.

### Three stages
1. **Atrium Tiro** — pre-A1 / A1- (controlled production).
2. **Atrium Discipulus** — solid A1 (controlled production).
3. **Atrium Scriba** — A1+ / A2- (controlled production).

### Run locally
Open `index.html` directly, or serve the folder with a static server.
