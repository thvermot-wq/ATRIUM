#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.isFile() && entry.name.endsWith('.js')) out.push(full);
  }
  return out;
}

function normalize(value) {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, "'")
    .replace(/[.,;:!?()[\]{}]/g, ' ')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

function uniqueCollector() {
  const seen = new Set();
  return {
    push(list, severity, scope, message) {
      const key = `${severity}|${scope}|${message}`;
      if (seen.has(key)) return;
      seen.add(key);
      list.push({ severity, scope, message });
    }
  };
}

function loadLessonsModule(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const exportMatch = raw.match(/export const (\w+)\s*=\s*\[/);
  if (!exportMatch) return null;

  const exportName = exportMatch[1];
  const code =
    raw.replace(/export const (\w+)\s*=\s*\[/, 'const $1 = [') +
    `\nmodule.exports = ${exportName};`;

  const context = { module: { exports: null }, exports: {} };
  vm.createContext(context);
  vm.runInContext(code, context, { timeout: 15000, filename: filePath });

  return Array.isArray(context.module.exports) ? context.module.exports : null;
}

function validateExpectedShape(exercise) {
  const { type, expected } = exercise;

  if (!type) {
    return 'Type d’exercice manquant.';
  }

  if (['singleChoice', 'ordering', 'textInput'].includes(type)) {
    const valid = typeof expected === 'string' || typeof expected === 'number';
    return valid ? null : `Pour un exercice de type ${type}, expected doit être scalaire.`;
  }

  if (type === 'multipleChoice') {
    return Array.isArray(expected)
      ? null
      : 'Pour un multipleChoice, expected doit être un tableau.';
  }

  if (type === 'matching') {
    return expected && typeof expected === 'object' && !Array.isArray(expected)
      ? null
      : 'Pour un matching, expected doit être un objet clé/valeur.';
  }

  return null;
}

function findNormalizedDuplicates(list = []) {
  const seen = new Map();
  const duplicates = [];
  for (const value of list) {
    const key = normalize(value);
    if (!key) continue;
    if (seen.has(key)) duplicates.push([seen.get(key), value]);
    else seen.set(key, value);
  }
  return duplicates;
}

function compareNormalizedSets(a = [], b = []) {
  const setA = new Set(a.map(normalize).filter(Boolean));
  const setB = new Set(b.map(normalize).filter(Boolean));

  if (setA.size !== setB.size) return false;
  for (const item of setA) {
    if (!setB.has(item)) return false;
  }
  return true;
}

function main() {
  const repoRoot = process.argv[2] || process.cwd();
  const lessonsRoot = path.join(repoRoot, 'assets', 'js', 'data', 'lessons');

  if (!fs.existsSync(lessonsRoot)) {
    console.error(`Dossier introuvable : ${lessonsRoot}`);
    process.exit(2);
  }

  const files = walk(lessonsRoot);
  const issues = [];
  const seenIds = new Map();
  const collector = uniqueCollector();

  for (const file of files) {
    const lessons = loadLessonsModule(file);
    if (!lessons) continue;

    for (const lesson of lessons) {
      const lessonScope = `${path.relative(repoRoot, file)} :: ${lesson.id || 'lesson-sans-id'}`;
      const training = Array.isArray(lesson.training) ? lesson.training : [];
      const production = Array.isArray(lesson.production) ? lesson.production : [];
      const allExercises = [
        ...training.map(ex => ({ ...ex, _stage: 'training' })),
        ...production.map(ex => ({ ...ex, _stage: 'production' }))
      ];

      if (lesson.maxScore !== 10) {
        collector.push(
          issues,
          'ERROR',
          lessonScope,
          `maxScore doit être 10, trouvé ${lesson.maxScore}.`
        );
      }

      const pointsSum = allExercises.reduce((sum, ex) => sum + Number(ex.points || 0), 0);
      if (pointsSum !== Number(lesson.maxScore || 0)) {
        collector.push(
          issues,
          'ERROR',
          lessonScope,
          `Somme des points = ${pointsSum}, maxScore = ${lesson.maxScore}.`
        );
      }

      for (const ex of allExercises) {
        const exScope = `${lessonScope} :: ${ex.id || 'exercise-sans-id'}`;

        if (!ex.id) {
          collector.push(issues, 'ERROR', exScope, 'ID manquant.');
        } else if (seenIds.has(ex.id)) {
          collector.push(
            issues,
            'ERROR',
            exScope,
            `ID dupliqué avec ${seenIds.get(ex.id)}.`
          );
        } else {
          seenIds.set(ex.id, exScope);
        }

        const shapeError = validateExpectedShape(ex);
        if (shapeError) {
          collector.push(issues, 'ERROR', exScope, shapeError);
        }

        if (Array.isArray(ex.options)) {
          const dupOptions = findNormalizedDuplicates(ex.options);
          if (dupOptions.length) {
            collector.push(
              issues,
              'ERROR',
              exScope,
              `Options dupliquées : ${dupOptions
                .map(([a, b]) => `"${a}" / "${b}"`)
                .join(', ')}.`
            );
          }
        }

        if (Array.isArray(ex.acceptedAnswers)) {
          const dupAccepted = findNormalizedDuplicates(ex.acceptedAnswers);
          if (dupAccepted.length) {
            collector.push(
              issues,
              'ERROR',
              exScope,
              `acceptedAnswers dupliquées après normalisation : ${dupAccepted
                .map(([a, b]) => `"${a}" / "${b}"`)
                .join(', ')}.`
            );
          }
        }

        if (ex._stage === 'production' && ex.type === 'textInput') {
          if (!Array.isArray(ex.acceptedAnswers) || ex.acceptedAnswers.length === 0) {
            collector.push(
              issues,
              'ERROR',
              exScope,
              'Production textInput sans acceptedAnswers.'
            );
          }

          const acceptedFromConfig = Array.isArray(ex?.answerConfig?.accepted)
            ? ex.answerConfig.accepted
            : [];

          if (acceptedFromConfig.length === 0) {
            collector.push(
              issues,
              'ERROR',
              exScope,
              'Production textInput sans answerConfig.accepted.'
            );
          }

          if (
            Array.isArray(ex.acceptedAnswers) &&
            acceptedFromConfig.length > 0 &&
            !compareNormalizedSets(ex.acceptedAnswers, acceptedFromConfig)
          ) {
            collector.push(
              issues,
              'WARN',
              exScope,
              'acceptedAnswers et answerConfig.accepted divergent après normalisation.'
            );
          }

          if (!Array.isArray(ex.tests) || ex.tests.length < 2) {
            collector.push(
              issues,
              'ERROR',
              exScope,
              'Production textInput sans tests minimaux suffisants.'
            );
          } else {
            const hasPositive = ex.tests.some(
              t => t && t.isCorrect === true && typeof t.input === 'string'
            );
            const hasNegative = ex.tests.some(
              t => t && t.isCorrect === false && typeof t.input === 'string'
            );

            if (!hasPositive || !hasNegative) {
              collector.push(
                issues,
                'ERROR',
                exScope,
                'Les tests doivent contenir au moins un cas correct et un cas incorrect.'
              );
            }
          }
        }
      }
    }
  }

  const errors = issues.filter(issue => issue.severity === 'ERROR');
  const warnings = issues.filter(issue => issue.severity === 'WARN');

  if (issues.length === 0) {
    console.log('ATRIUM lesson validation: OK');
    process.exit(0);
  }

  for (const issue of issues) {
    console.log(`${issue.severity} | ${issue.scope} | ${issue.message}`);
  }

  console.log(`\nRésumé : ${errors.length} erreur(s), ${warnings.length} avertissement(s).`);
  process.exit(errors.length ? 1 : 0);
}

main();
