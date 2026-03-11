export const LESSONS_SPEC = {
  periods: 3,
  lessonsPerPeriod: 12,
  lessonsTotal: 36,
  lessonMax: 10,
  trainingMax: 7,
  productionMax: 3,
  periodMax: 120,
  validationPercent: 80,
  validationMinScore: 96,
};

const PERIODS_5E_BASE = [
  {
    id: "p1",
    period: 1,
    title: "Période 1",
    level: "Fondations",
    objective: "Entrer dans les premières formes et routines du latin scolaire.",
    maxScore: LESSONS_SPEC.periodMax,
  },
  {
    id: "p2",
    period: 2,
    title: "Période 2",
    level: "Consolidation",
    objective: "Stabiliser les repères morphologiques et syntaxiques simples.",
    maxScore: LESSONS_SPEC.periodMax,
  },
  {
    id: "p3",
    period: 3,
    title: "Période 3",
    level: "Structuration",
    objective: "Préparer la production guidée plus autonome.",
    maxScore: LESSONS_SPEC.periodMax,
  },
];

function createPlaceholderLesson({ id, period, title, objective }) {
  return {
    id,
    period,
    periodId: `p${period}`,
    title,
    objective,
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      {
        id: `${id}-t1`,
        type: "mcq",
        prompt: "Question d'entraînement placeholder à compléter.",
        options: ["Option A", "Option B", "Option C"],
        expected: "Option A",
        points: 1,
        feedback: "Placeholder à compléter.",
      },
    ],
    production: [
      {
        id: `${id}-p1`,
        type: "short-text",
        prompt: "Production guidée placeholder à compléter.",
        expected: "placeholder",
        points: LESSONS_SPEC.productionMax,
        feedback: "Placeholder à compléter.",
      },
    ],
    meta: {
      status: "draft",
      tags: ["placeholder"],
    },
    summary: {
      retains: [objective],
      cahier: ["Je recopie le vocabulaire clé de la leçon."],
      keywords: ["placeholder", `p${period}`],
    },
  };
}

const LESSONS_5E_BASE = [
  {
    id: "p1-l1",
    period: 1,
    periodId: "p1",
    title: "Salve, Subura",
    objective: "Découvrir le quartier de la Subura et lire des salutations simples dans une micro-scène.",
    lessonPoint: "Je cherche d’abord le verbe et le personnage qui agit.",
    canDo: [
      "Je reconnais des salutations latines dans une scène.",
      "Je comprends qui parle à qui.",
      "Je traduis une phrase courte de présentation.",
    ],
    lexicon: ["salve", "salvete", "vale", "adsum", "Subura", "in via", "amicus", "canis"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p1-l1-t1", type: "singleChoice", prompt: "Flavia salue Marcus seul. Quelle formule choisit-elle ?", options: ["salve", "salvete", "valete", "adsum", "vale"], expected: "salve", shuffle: true, points: 1 },
      { id: "p1-l1-t2", type: "singleChoice", prompt: "Titus parle à trois voisins. Il dit :", options: ["salve", "salvete", "vale", "adsum", "bene"], expected: "salvete", shuffle: true, points: 1 },
      { id: "p1-l1-t3", type: "multipleChoice", prompt: "Sélectionne les formules de départ.", options: ["vale", "valete", "salve", "adsum", "male"], expected: ["vale", "valete"], shuffle: true, points: 1 },
      { id: "p1-l1-t4", type: "matching", prompt: "Associe formule et sens.", pairs: [{ left: "adsum", right: "je suis présent" }, { left: "salve", right: "bonjour (à une personne)" }, { left: "vale", right: "au revoir (à une personne)" }], rightOptions: ["au revoir (à une personne)", "je suis présent", "bonjour (à une personne)"], expected: { "adsum": "je suis présent", "salve": "bonjour (à une personne)", "vale": "au revoir (à une personne)" }, points: 1 },
      { id: "p1-l1-t5", type: "singleChoice", prompt: "Dans « Flavia in via est », que signifie via ?", options: ["route", "maison", "fontaine", "mur", "temple"], expected: "route", shuffle: true, points: 1, feedback: "Le groupe nominal aide : in via = dans la rue." },
      { id: "p1-l1-t6", type: "singleChoice", prompt: "« Niger canis est » signifie :", options: ["Niger est un chien", "Le chien est noir", "Niger est un mur", "Niger crie", "Le chien salue"], expected: "Niger est un chien", shuffle: true, points: 1 },
      { id: "p1-l1-t7", type: "textInput", prompt: "Écris en latin : « je suis présent ».", expected: "adsum", points: 1 },
    ],
    production: [
      { id: "p1-l1-p1", type: "textInput", prompt: "Traduis en français : Flavia Suburae habitat", expected: "flavia habite dans la subura", acceptedAnswers: ["flavia habite dans la subura", "flavia habite en subura"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["flavia habite dans la subura", "flavia habite en subura"] }, points: 1 },
      { id: "p1-l1-p2", type: "textInput", prompt: "Traduis en français : Niger canis est", expected: "niger est un chien", acceptedAnswers: ["niger est un chien", "niger est le chien"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["niger est un chien", "niger est le chien"] }, points: 1 },
      { id: "p1-l1-p3", type: "textInput", prompt: "Traduis en latin : Marcus salue Flavia", expected: "Marcus Flaviam salutat", acceptedAnswers: ["Marcus Flaviam salutat", "Marcus salutat Flaviam"], answerConfig: { type: "one-of", language: "latin", accepted: ["Marcus Flaviam salutat", "Marcus salutat Flaviam"] }, points: 1 },
    ],
    summary: {
      retains: ["Dans une scène, je repère d’abord qui parle et le verbe.", "Les formules salve/vale structurent la communication."],
      cahier: ["salve / salvete", "vale / valete", "adsum"],
      keywords: ["Subura", "salutation", "verbe", "personnages"],
    },
    meta: { status: "ready", tags: ["subura", "rituel", "p1-l1"] },
  },
  {
    id: "p1-l2",
    period: 1,
    periodId: "p1",
    title: "Domus et insula",
    objective: "Identifier les lieux d’habitation et les objets proches dans le quartier.",
    lessonPoint: "Le groupe nominal se lit ensemble : nom + adjectif ou complément.",
    canDo: [
      "Je distingue domus et insula dans une scène.",
      "Je comprends une phrase de localisation simple.",
      "Je traduis des groupes nominaux utiles.",
    ],
    lexicon: ["domus", "insula", "ianua", "fenestra", "in domo", "prope", "stat", "habitat"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p1-l2-t1", type: "singleChoice", prompt: "Aurelia vit dans une grande maison. Quel nom latin choisir ?", options: ["domus", "insula", "forum", "taberna", "templum"], expected: "domus", shuffle: true, points: 1 },
      { id: "p1-l2-t2", type: "singleChoice", prompt: "Marcus vit dans un immeuble de quartier. C’est :", options: ["insula", "domus", "via", "porta", "murus"], expected: "insula", shuffle: true, points: 1 },
      { id: "p1-l2-t3", type: "multipleChoice", prompt: "Choisis des éléments de la maison.", options: ["ianua", "fenestra", "forum", "cella", "taberna"], expected: ["ianua", "fenestra", "cella"], shuffle: true, points: 1 },
      { id: "p1-l2-t4", type: "matching", prompt: "Associe mot et sens.", pairs: [{ left: "domus", right: "maison" }, { left: "insula", right: "immeuble" }, { left: "ianua", right: "porte" }], rightOptions: ["porte", "maison", "immeuble"], expected: { "domus": "maison", "insula": "immeuble", "ianua": "porte" }, points: 1 },
      { id: "p1-l2-t5", type: "singleChoice", prompt: "« Niger ante ianuam stat » : Niger est…", options: ["devant la porte", "dans le forum", "sur le mur", "à la fontaine", "dans l’école"], expected: "devant la porte", shuffle: true, points: 1, feedback: "Cherche le verbe stat puis le lieu ante ianuam." },
      { id: "p1-l2-t6", type: "singleChoice", prompt: "Dans « Flavia in domo manet », manet signifie :", options: ["reste", "court", "crie", "porte", "écrit"], expected: "reste", shuffle: true, points: 1 },
      { id: "p1-l2-t7", type: "textInput", prompt: "Écris en latin : « porte » (nom).", expected: "ianua", points: 1 },
    ],
    production: [
      { id: "p1-l2-p1", type: "textInput", prompt: "Traduis en français : Aurelia in domo manet", expected: "aurélia reste dans la maison", acceptedAnswers: ["aurélia reste dans la maison", "aurelia reste dans la maison", "aurélia demeure dans la maison"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["aurélia reste dans la maison", "aurelia reste dans la maison", "aurélia demeure dans la maison"] }, points: 1 },
      { id: "p1-l2-p2", type: "textInput", prompt: "Traduis en français : Marcus in insula habitat", expected: "marcus habite dans l'insula", acceptedAnswers: ["marcus habite dans l'insula", "marcus habite dans une insula", "marcus habite en insula"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["marcus habite dans l'insula", "marcus habite dans une insula", "marcus habite en insula"] }, points: 1 },
      { id: "p1-l2-p3", type: "textInput", prompt: "Traduis en latin : Niger est devant la porte", expected: "Niger ante ianuam stat", acceptedAnswers: ["Niger ante ianuam stat", "Ante ianuam Niger stat"], answerConfig: { type: "one-of", language: "latin", accepted: ["Niger ante ianuam stat", "Ante ianuam Niger stat"] }, points: 1 },
    ],
    summary: { retains: ["Je lis un lieu avec sa préposition.", "Nom + repère spatial donne le sens de la scène."], cahier: ["in domo", "in insula", "ante ianuam"], keywords: ["domus", "insula", "localisation"] },
    meta: { status: "ready", tags: ["habitat", "quartier", "p1-l2"] },
  },
  {
    id: "p1-l3",
    period: 1,
    periodId: "p1",
    title: "Forum et taberna",
    objective: "Comprendre une scène simple autour du forum et des boutiques de la Subura.",
    lessonPoint: "Le verbe indique l’action centrale : porter, vendre, regarder.",
    canDo: ["Je reconnais les lieux du commerce.", "Je relie personnage et action.", "Je traduis une phrase de marché."],
    lexicon: ["forum", "taberna", "mercator", "panis", "vinum", "portat", "spectat", "vendit"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p1-l3-t1", type: "singleChoice", prompt: "Le lieu principal des échanges est :", options: ["forum", "domus", "thermae", "ludus", "templum"], expected: "forum", shuffle: true, points: 1 },
      { id: "p1-l3-t2", type: "singleChoice", prompt: "Une boutique se dit :", options: ["taberna", "insula", "via", "porta", "aqua"], expected: "taberna", shuffle: true, points: 1 },
      { id: "p1-l3-t3", type: "multipleChoice", prompt: "Choisis des mots de la scène du marché.", options: ["mercator", "panis", "vinum", "murus", "canis"], expected: ["mercator", "panis", "vinum"], shuffle: true, points: 1 },
      { id: "p1-l3-t4", type: "matching", prompt: "Associe latin et français.", pairs: [{ left: "mercator", right: "marchand" }, { left: "panis", right: "pain" }, { left: "vinum", right: "vin" }], rightOptions: ["vin", "pain", "marchand"], expected: { "mercator": "marchand", "panis": "pain", "vinum": "vin" }, points: 1 },
      { id: "p1-l3-t5", type: "singleChoice", prompt: "« Mercator panem portat » : qui porte le pain ?", options: ["mercator", "panem", "forum", "Flavia", "Niger"], expected: "mercator", shuffle: true, points: 1, feedback: "Cherche d’abord le verbe portat, puis son sujet." },
      { id: "p1-l3-t6", type: "singleChoice", prompt: "« Panem mercator portat » signifie :", options: ["Le marchand porte le pain", "Le pain porte le marchand", "Le marchand vend le pain", "Le pain est dans la maison", "Le forum court"], expected: "Le marchand porte le pain", shuffle: true, points: 1 },
      { id: "p1-l3-t7", type: "textInput", prompt: "Écris en latin : « marchand ».", expected: "mercator", points: 1 },
    ],
    production: [
      { id: "p1-l3-p1", type: "textInput", prompt: "Traduis en français : Mercator panem portat", expected: "le marchand porte du pain", acceptedAnswers: ["le marchand porte du pain", "le marchand apporte le pain", "le marchand transporte du pain"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["le marchand porte du pain", "le marchand apporte le pain", "le marchand transporte du pain"] }, points: 1 },
      { id: "p1-l3-p2", type: "textInput", prompt: "Traduis en français : Flavia tabernam spectat", expected: "flavia regarde la boutique", acceptedAnswers: ["flavia regarde la boutique", "flavia observe la boutique", "flavia regarde l'échoppe"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["flavia regarde la boutique", "flavia observe la boutique", "flavia regarde l'échoppe"] }, points: 1 },
      { id: "p1-l3-p3", type: "textInput", prompt: "Traduis en latin : Marcus court vers le forum", expected: "Marcus ad forum currit", acceptedAnswers: ["Marcus ad forum currit", "Ad forum Marcus currit"], answerConfig: { type: "one-of", language: "latin", accepted: ["Marcus ad forum currit", "Ad forum Marcus currit"] }, points: 1 },
    ],
    summary: { retains: ["L’ordre latin peut varier sans changer l’idée.", "Le verbe donne le cœur de la scène."], cahier: ["Mercator panem portat", "Marcus ad forum currit"], keywords: ["forum", "taberna", "commerce"] },
    meta: { status: "ready", tags: ["marché", "lecture", "p1-l3"] },
  },
  {
    id: "p1-l4",
    period: 1,
    periodId: "p1",
    title: "Au petit sanctuaire",
    objective: "Lire de courtes phrases au sanctuaire et repérer une offrande déplacée.",
    lessonPoint: "Je lis ensemble le groupe nominal (donum sacrum, ara parva).",
    canDo: ["Je comprends une scène religieuse simple.", "Je repère un objet offert.", "Je traduis une action autour du sanctuaire."],
    lexicon: ["sacellum", "ara", "donum", "corona", "dea", "sacerdos", "ponit", "movet"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p1-l4-t1", type: "singleChoice", prompt: "Le petit sanctuaire se dit :", options: ["sacellum", "forum", "insula", "thermae", "taberna"], expected: "sacellum", shuffle: true, points: 1 },
      { id: "p1-l4-t2", type: "singleChoice", prompt: "Une offrande est :", options: ["donum", "murus", "canis", "ludus", "porta"], expected: "donum", shuffle: true, points: 1 },
      { id: "p1-l4-t3", type: "multipleChoice", prompt: "Choisis les mots du sanctuaire.", options: ["ara", "corona", "dea", "panis", "sacerdos"], expected: ["ara", "corona", "dea", "sacerdos"], shuffle: true, points: 1 },
      { id: "p1-l4-t4", type: "matching", prompt: "Associe latin et sens.", pairs: [{ left: "ara", right: "autel" }, { left: "sacerdos", right: "prêtresse" }, { left: "corona", right: "couronne" }], rightOptions: ["couronne", "autel", "prêtresse"], expected: { "ara": "autel", "sacerdos": "prêtresse", "corona": "couronne" }, points: 1 },
      { id: "p1-l4-t5", type: "singleChoice", prompt: "« Vetus sacerdos donum ponit » : qui pose l’offrande ?", options: ["la vieille prêtresse", "l’offrande", "la déesse", "Marcus", "Niger"], expected: "la vieille prêtresse", shuffle: true, points: 1 },
      { id: "p1-l4-t6", type: "singleChoice", prompt: "« Donum Sextus movet » :", options: ["Sextus déplace l’offrande", "L’offrande déplace Sextus", "Sextus regarde l’offrande", "Sextus crie", "L’offrande est sacrée"], expected: "Sextus déplace l’offrande", shuffle: true, points: 1, feedback: "Attention : l’ordre peut tromper, cherche le verbe movet." },
      { id: "p1-l4-t7", type: "textInput", prompt: "Écris en latin : « couronne ».", expected: "corona", points: 1 },
    ],
    production: [
      { id: "p1-l4-p1", type: "textInput", prompt: "Traduis en français : Vetus sacerdos donum ponit", expected: "la vieille prêtresse pose l'offrande", acceptedAnswers: ["la vieille prêtresse pose l'offrande", "la vieille prêtresse place l'offrande", "la prêtresse âgée pose l'offrande"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["la vieille prêtresse pose l'offrande", "la vieille prêtresse place l'offrande", "la prêtresse âgée pose l'offrande"] }, points: 1 },
      { id: "p1-l4-p2", type: "textInput", prompt: "Traduis en français : Sextus coronam movet", expected: "sextus déplace la couronne", acceptedAnswers: ["sextus déplace la couronne", "sextus bouge la couronne", "sextus dérange la couronne"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["sextus déplace la couronne", "sextus bouge la couronne", "sextus dérange la couronne"] }, points: 1 },
      { id: "p1-l4-p3", type: "textInput", prompt: "Traduis en latin : Livia regarde l’autel", expected: "Livia aram spectat", acceptedAnswers: ["Livia aram spectat", "Aram Livia spectat"], answerConfig: { type: "one-of", language: "latin", accepted: ["Livia aram spectat", "Aram Livia spectat"] }, points: 1 },
    ],
    summary: { retains: ["Le groupe nominal aide à comprendre l’objet sacré.", "L’action du verbe clarifie la scène de discorde."], cahier: ["donum", "corona", "Vetus sacerdos donum ponit"], keywords: ["sanctuaire", "offrande", "discorde"] },
    meta: { status: "ready", tags: ["sacellum", "narration", "p1-l4"] },
  },
  {
    id: "p1-l5",
    period: 1,
    periodId: "p1",
    title: "Niger devant la porte",
    objective: "Comprendre des phrases où Niger signale un trouble devant les maisons.",
    lessonPoint: "Je repère sujet et complément sans me laisser piéger par l’ordre.",
    canDo: ["Je lis une scène courte avec un animal.", "Je distingue qui agit et ce qui est vu.", "Je traduis des phrases simples avec canis."],
    lexicon: ["Niger", "canis", "latrat", "ianua", "domus", "spectat", "videt", "currit"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p1-l5-t1", type: "singleChoice", prompt: "Niger est :", options: ["le chien", "le marchand", "la prêtresse", "la tablette", "la rue"], expected: "le chien", shuffle: true, points: 1 },
      { id: "p1-l5-t2", type: "singleChoice", prompt: "Le verbe latrat signifie :", options: ["aboie", "court", "porte", "écrit", "regarde"], expected: "aboie", shuffle: true, points: 1 },
      { id: "p1-l5-t3", type: "multipleChoice", prompt: "Choisis les phrases possibles de la scène.", options: ["Niger ante ianuam stat", "Niger latrat", "Livia Nigrum videt", "Canis forum scribit", "Marcus canem spectat"], expected: ["Niger ante ianuam stat", "Niger latrat", "Livia Nigrum videt", "Marcus canem spectat"], shuffle: true, points: 1 },
      { id: "p1-l5-t4", type: "matching", prompt: "Associe phrase et interprétation.", pairs: [{ left: "Niger latrat", right: "le chien aboie" }, { left: "Marcus canem spectat", right: "Marcus regarde le chien" }, { left: "Canem Livia videt", right: "Livia voit le chien" }], rightOptions: ["Livia voit le chien", "Marcus regarde le chien", "le chien aboie"], expected: { "Niger latrat": "le chien aboie", "Marcus canem spectat": "Marcus regarde le chien", "Canem Livia videt": "Livia voit le chien" }, points: 1 },
      { id: "p1-l5-t5", type: "singleChoice", prompt: "Piège : « Canem Livia videt » signifie :", options: ["Livia voit le chien", "Le chien voit Livia", "Livia est un chien", "Le chien court", "Livia aboie"], expected: "Livia voit le chien", shuffle: true, points: 1, feedback: "La terminaison aide : canem est le complément." },
      { id: "p1-l5-t6", type: "singleChoice", prompt: "Dans « Niger currit », le sujet est :", options: ["Niger", "currit", "ianua", "canem", "Livia"], expected: "Niger", shuffle: true, points: 1 },
      { id: "p1-l5-t7", type: "textInput", prompt: "Écris en latin : « chien ».", expected: "canis", points: 1 },
    ],
    production: [
      { id: "p1-l5-p1", type: "textInput", prompt: "Traduis en français : Niger ante ianuam stat", expected: "niger est devant la porte", acceptedAnswers: ["niger est devant la porte", "niger se tient devant la porte", "le chien niger est devant la porte"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["niger est devant la porte", "niger se tient devant la porte", "le chien niger est devant la porte"] }, points: 1 },
      { id: "p1-l5-p2", type: "textInput", prompt: "Traduis en français : Canem Livia videt", expected: "livia voit le chien", acceptedAnswers: ["livia voit le chien", "livia regarde le chien", "livia aperçoit le chien"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["livia voit le chien", "livia regarde le chien", "livia aperçoit le chien"] }, points: 1 },
      { id: "p1-l5-p3", type: "textInput", prompt: "Traduis en latin : Marcus regarde le chien", expected: "Marcus canem spectat", acceptedAnswers: ["Marcus canem spectat", "Canem Marcus spectat"], answerConfig: { type: "one-of", language: "latin", accepted: ["Marcus canem spectat", "Canem Marcus spectat"] }, points: 1 },
    ],
    summary: { retains: ["Le latin ne suit pas toujours l’ordre français.", "Je vérifie la forme du complément pour éviter le piège."], cahier: ["Niger latrat", "Canem Livia videt"], keywords: ["Niger", "porte", "piège ordre"] },
    meta: { status: "ready", tags: ["niger", "sujet-complement", "p1-l5"] },
  },
  {
    id: "p1-l6",
    period: 1,
    periodId: "p1",
    title: "La tablette échangée",
    objective: "Suivre une scène où une tablette a été échangée et identifier qui porte quoi.",
    lessonPoint: "Je relie verbe + objet pour comprendre l’incident.",
    canDo: ["Je lis une phrase d’action avec tablette.", "Je repère le complément d’objet courant.", "Je traduis une phrase liée à l’enquête."],
    lexicon: ["tabella", "epistula", "portat", "habet", "quaerit", "invenit", "Marcus", "Lucius"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p1-l6-t1", type: "singleChoice", prompt: "La tablette se dit :", options: ["tabella", "taberna", "templum", "porta", "fontis"], expected: "tabella", shuffle: true, points: 1 },
      { id: "p1-l6-t2", type: "singleChoice", prompt: "Dans « Lucius epistulam quaerit », Lucius :", options: ["cherche la lettre", "porte la lettre", "voit la lettre", "échange la lettre", "crie"], expected: "cherche la lettre", shuffle: true, points: 1 },
      { id: "p1-l6-t3", type: "multipleChoice", prompt: "Choisis les actions plausibles de l’enquête.", options: ["quaerit", "invenit", "portat", "scribit", "murmurat"], expected: ["quaerit", "invenit", "portat", "scribit"], shuffle: true, points: 1 },
      { id: "p1-l6-t4", type: "matching", prompt: "Associe phrase et sens.", pairs: [{ left: "Marcus tabellam portat", right: "Marcus porte la tablette" }, { left: "Lucius epistulam quaerit", right: "Lucius cherche la lettre" }, { left: "Livia tabellam habet", right: "Livia a la tablette" }], rightOptions: ["Livia a la tablette", "Marcus porte la tablette", "Lucius cherche la lettre"], expected: { "Marcus tabellam portat": "Marcus porte la tablette", "Lucius epistulam quaerit": "Lucius cherche la lettre", "Livia tabellam habet": "Livia a la tablette" }, points: 1 },
      { id: "p1-l6-t5", type: "singleChoice", prompt: "Piège : « Tabellam Marcus portat » signifie :", options: ["Marcus porte la tablette", "La tablette porte Marcus", "Marcus écrit la tablette", "Marcus voit la tablette", "Lucius porte la tablette"], expected: "Marcus porte la tablette", shuffle: true, points: 1, feedback: "La terminaison en -am signale ici le complément." },
      { id: "p1-l6-t6", type: "singleChoice", prompt: "Dans la scène, quel verbe dit qu’on trouve l’objet ?", options: ["invenit", "quaerit", "habet", "manet", "latrat"], expected: "invenit", shuffle: true, points: 1 },
      { id: "p1-l6-t7", type: "textInput", prompt: "Écris en latin : « lettre ».", expected: "epistula", points: 1 },
    ],
    production: [
      { id: "p1-l6-p1", type: "textInput", prompt: "Traduis en français : Marcus tabellam portat", expected: "marcus porte la tablette", acceptedAnswers: ["marcus porte la tablette", "marcus apporte la tablette", "marcus transporte la tablette"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["marcus porte la tablette", "marcus apporte la tablette", "marcus transporte la tablette"] }, points: 1 },
      { id: "p1-l6-p2", type: "textInput", prompt: "Traduis en français : Lucius epistulam invenit", expected: "lucius trouve la lettre", acceptedAnswers: ["lucius trouve la lettre", "lucius retrouve la lettre", "lucius découvre la lettre"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["lucius trouve la lettre", "lucius retrouve la lettre", "lucius découvre la lettre"] }, points: 1 },
      { id: "p1-l6-p3", type: "textInput", prompt: "Traduis en latin : Livia cherche la tablette", expected: "Livia tabellam quaerit", acceptedAnswers: ["Livia tabellam quaerit", "Tabellam Livia quaerit"], answerConfig: { type: "one-of", language: "latin", accepted: ["Livia tabellam quaerit", "Tabellam Livia quaerit"] }, points: 1 },
    ],
    summary: { retains: ["Je suis une enquête simple en reliant action et objet.", "Chercher, trouver, porter : les verbes structurent la lecture."], cahier: ["tabella", "epistula", "Livia tabellam quaerit"], keywords: ["tablette", "enquête", "verbes" ] },
    meta: { status: "ready", tags: ["tablette", "incident", "p1-l6"] },
  },
  {
    id: "p1-l7",
    period: 1,
    periodId: "p1",
    title: "À la fontaine",
    objective: "Comprendre une scène de fontaine perturbée et les actions du quotidien.",
    lessonPoint: "Je lis les lieux avec in/ad pour suivre le déplacement.",
    canDo: ["Je comprends une scène autour de l’eau.", "Je distingue position et mouvement.", "Je traduis des phrases courtes de lieu."],
    lexicon: ["fons", "aqua", "situla", "in fonte", "ad fontem", "venit", "manet", "turbat"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p1-l7-t1", type: "singleChoice", prompt: "La fontaine se dit :", options: ["fons", "forum", "domus", "murus", "via"], expected: "fons", shuffle: true, points: 1 },
      { id: "p1-l7-t2", type: "singleChoice", prompt: "« Marcus ad fontem venit » : Marcus va…", options: ["vers la fontaine", "dans la maison", "sous le mur", "au sanctuaire", "au four"], expected: "vers la fontaine", shuffle: true, points: 1 },
      { id: "p1-l7-t3", type: "multipleChoice", prompt: "Sélectionne les mots de la scène de fontaine.", options: ["aqua", "situla", "fons", "tabella", "venit"], expected: ["aqua", "situla", "fons", "venit"], shuffle: true, points: 1 },
      { id: "p1-l7-t4", type: "matching", prompt: "Associe expression et sens.", pairs: [{ left: "in fonte", right: "à la fontaine" }, { left: "ad fontem", right: "vers la fontaine" }, { left: "aquam portat", right: "porte de l’eau" }], rightOptions: ["vers la fontaine", "porte de l’eau", "à la fontaine"], expected: { "in fonte": "à la fontaine", "ad fontem": "vers la fontaine", "aquam portat": "porte de l’eau" }, points: 1 },
      { id: "p1-l7-t5", type: "singleChoice", prompt: "« Aquam Lucius portat » : qui porte l’eau ?", options: ["Lucius", "aquam", "fons", "Niger", "Aurelia"], expected: "Lucius", shuffle: true, points: 1 },
      { id: "p1-l7-t6", type: "singleChoice", prompt: "Le verbe turbat veut dire :", options: ["trouble", "calme", "regarde", "écrit", "salue"], expected: "trouble", shuffle: true, points: 1, feedback: "Ce verbe sert pour les scènes de discorde." },
      { id: "p1-l7-t7", type: "textInput", prompt: "Écris en latin : « eau ».", expected: "aqua", points: 1 },
    ],
    production: [
      { id: "p1-l7-p1", type: "textInput", prompt: "Traduis en français : Aurelia ad fontem venit", expected: "aurélia vient vers la fontaine", acceptedAnswers: ["aurélia vient vers la fontaine", "aurelia vient vers la fontaine", "aurélia va à la fontaine"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["aurélia vient vers la fontaine", "aurelia vient vers la fontaine", "aurélia va à la fontaine"] }, points: 1 },
      { id: "p1-l7-p2", type: "textInput", prompt: "Traduis en français : Lucius aquam portat", expected: "lucius porte de l'eau", acceptedAnswers: ["lucius porte de l'eau", "lucius apporte de l'eau", "lucius transporte de l'eau"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["lucius porte de l'eau", "lucius apporte de l'eau", "lucius transporte de l'eau"] }, points: 1 },
      { id: "p1-l7-p3", type: "textInput", prompt: "Traduis en latin : Niger trouble la fontaine", expected: "Niger fontem turbat", acceptedAnswers: ["Niger fontem turbat", "Fontem Niger turbat"], answerConfig: { type: "one-of", language: "latin", accepted: ["Niger fontem turbat", "Fontem Niger turbat"] }, points: 1 },
    ],
    summary: { retains: ["in et ad ne disent pas la même chose.", "Je repère mouvement, lieu, action dans une même phrase."], cahier: ["ad fontem", "in fonte", "Lucius aquam portat"], keywords: ["fontaine", "aqua", "mouvement"] },
    meta: { status: "ready", tags: ["fontaine", "in-ad", "p1-l7"] },
  },
  {
    id: "p1-l8",
    period: 1,
    periodId: "p1",
    title: "Chez le boulanger",
    objective: "Lire une micro-scène dans une boulangerie et consolider sujet/complément.",
    lessonPoint: "Le verbe et la terminaison du nom guident la fonction dans la phrase.",
    canDo: ["Je comprends une scène de métier.", "Je repère qui agit et ce qui est transporté.", "Je traduis des phrases courtes du quotidien."],
    lexicon: ["pistor", "panis", "farina", "taberna", "emit", "portat", "videt", "accipit"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p1-l8-t1", type: "singleChoice", prompt: "Le boulanger se dit :", options: ["pistor", "mercator", "agricola", "poeta", "servus"], expected: "pistor", shuffle: true, points: 1 },
      { id: "p1-l8-t2", type: "singleChoice", prompt: "« Flavia panem emit » : Flavia…", options: ["achète du pain", "porte du pain", "voit du pain", "écrit du pain", "crie"], expected: "achète du pain", shuffle: true, points: 1 },
      { id: "p1-l8-t3", type: "multipleChoice", prompt: "Choisis les mots de la boulangerie.", options: ["pistor", "panis", "farina", "aqua", "tabella"], expected: ["pistor", "panis", "farina"], shuffle: true, points: 1 },
      { id: "p1-l8-t4", type: "matching", prompt: "Associe phrase et sens.", pairs: [{ left: "Pistor panem portat", right: "Le boulanger porte le pain" }, { left: "Flavia panem emit", right: "Flavia achète du pain" }, { left: "Marcus pistrum videt", right: "Marcus voit le boulanger" }], rightOptions: ["Marcus voit le boulanger", "Flavia achète du pain", "Le boulanger porte le pain"], expected: { "Pistor panem portat": "Le boulanger porte le pain", "Flavia panem emit": "Flavia achète du pain", "Marcus pistrum videt": "Marcus voit le boulanger" }, points: 1 },
      { id: "p1-l8-t5", type: "singleChoice", prompt: "Piège : « Panem pistor portat » signifie :", options: ["Le boulanger porte le pain", "Le pain porte le boulanger", "Le boulanger vend le pain", "Flavia porte le pain", "Le four porte le pain"], expected: "Le boulanger porte le pain", shuffle: true, points: 1 },
      { id: "p1-l8-t6", type: "singleChoice", prompt: "Dans « Titus farinam accipit », accipit signifie :", options: ["reçoit", "apporte", "regarde", "dérange", "salue"], expected: "reçoit", shuffle: true, points: 1 },
      { id: "p1-l8-t7", type: "textInput", prompt: "Écris en latin : « pain ».", expected: "panis", points: 1 },
    ],
    production: [
      { id: "p1-l8-p1", type: "textInput", prompt: "Traduis en français : Pistor panem portat", expected: "le boulanger porte le pain", acceptedAnswers: ["le boulanger porte le pain", "le boulanger apporte le pain", "le boulanger transporte le pain"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["le boulanger porte le pain", "le boulanger apporte le pain", "le boulanger transporte le pain"] }, points: 1 },
      { id: "p1-l8-p2", type: "textInput", prompt: "Traduis en français : Flavia panem emit", expected: "flavia achète du pain", acceptedAnswers: ["flavia achète du pain", "flavia achète le pain", "flavia prend du pain"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["flavia achète du pain", "flavia achète le pain", "flavia prend du pain"] }, points: 1 },
      { id: "p1-l8-p3", type: "textInput", prompt: "Traduis en latin : Marcus voit le boulanger", expected: "Marcus pistrum videt", acceptedAnswers: ["Marcus pistrum videt", "Pistrum Marcus videt"], answerConfig: { type: "one-of", language: "latin", accepted: ["Marcus pistrum videt", "Pistrum Marcus videt"] }, points: 1 },
    ],
    summary: { retains: ["La scène de métier consolide les mêmes repères grammaticaux.", "Je relis verbe et complément avant de traduire."], cahier: ["Pistor panem portat", "Flavia panem emit"], keywords: ["boulanger", "panis", "quotidien"] },
    meta: { status: "ready", tags: ["metier", "boutique", "p1-l8"] },
  },
  {
    id: "p1-l9",
    period: 1,
    periodId: "p1",
    title: "L’école du quartier",
    objective: "Comprendre de petites consignes et scènes de classe dans le ludus de la Subura.",
    lessonPoint: "Je cherche le verbe d’énoncé (legit, scribit, audit) pour comprendre la tâche.",
    canDo: ["Je lis une mini-scène de classe.", "Je relie action d’étude et personnage.", "Je traduis des phrases scolaires courtes."],
    lexicon: ["ludus", "magister", "discipulus", "tabella", "legit", "scribit", "audit", "respondet"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p1-l9-t1", type: "singleChoice", prompt: "Le lieu de classe est :", options: ["ludus", "forum", "thermae", "taberna", "domus"], expected: "ludus", shuffle: true, points: 1 },
      { id: "p1-l9-t2", type: "singleChoice", prompt: "Le magister est :", options: ["le maître", "l’élève", "le marchand", "le chien", "la prêtresse"], expected: "le maître", shuffle: true, points: 1 },
      { id: "p1-l9-t3", type: "multipleChoice", prompt: "Sélectionne des verbes de travail scolaire.", options: ["legit", "scribit", "audit", "portat", "salutat"], expected: ["legit", "scribit", "audit"], shuffle: true, points: 1 },
      { id: "p1-l9-t4", type: "matching", prompt: "Associe phrase et sens.", pairs: [{ left: "Discipulus tabellam scribit", right: "L'élève écrit la tablette" }, { left: "Magister legit", right: "Le maître lit" }, { left: "Marcus respondet", right: "Marcus répond" }], rightOptions: ["Marcus répond", "Le maître lit", "L'élève écrit la tablette"], expected: { "Discipulus tabellam scribit": "L'élève écrit la tablette", "Magister legit": "Le maître lit", "Marcus respondet": "Marcus répond" }, points: 1 },
      { id: "p1-l9-t5", type: "singleChoice", prompt: "Piège : « Tabellam discipulus scribit » veut dire :", options: ["L’élève écrit la tablette", "La tablette écrit l’élève", "L’élève lit la tablette", "Le maître écrit", "L’élève répond"], expected: "L’élève écrit la tablette", shuffle: true, points: 1 },
      { id: "p1-l9-t6", type: "singleChoice", prompt: "Dans « Titus audit », audit signifie :", options: ["écoute", "écrit", "porte", "court", "salue"], expected: "écoute", shuffle: true, points: 1 },
      { id: "p1-l9-t7", type: "textInput", prompt: "Écris en latin : « élève ».", expected: "discipulus", points: 1 },
    ],
    production: [
      { id: "p1-l9-p1", type: "textInput", prompt: "Traduis en français : Magister legit", expected: "le maître lit", acceptedAnswers: ["le maître lit", "le maitre lit", "un maître lit"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["le maître lit", "le maitre lit", "un maître lit"] }, points: 1 },
      { id: "p1-l9-p2", type: "textInput", prompt: "Traduis en français : Marcus respondet", expected: "marcus répond", acceptedAnswers: ["marcus répond", "marcus donne une réponse"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["marcus répond", "marcus donne une réponse"] }, points: 1 },
      { id: "p1-l9-p3", type: "textInput", prompt: "Traduis en latin : l’élève écoute le maître", expected: "Discipulus magistrum audit", acceptedAnswers: ["Discipulus magistrum audit", "Magistrum discipulus audit"], answerConfig: { type: "one-of", language: "latin", accepted: ["Discipulus magistrum audit", "Magistrum discipulus audit"] }, points: 1 },
    ],
    summary: { retains: ["En classe aussi, je lis en cherchant d’abord le verbe.", "Le complément peut passer avant le sujet en latin."], cahier: ["Magister legit", "Discipulus magistrum audit"], keywords: ["ludus", "magister", "lecture"] },
    meta: { status: "ready", tags: ["ecole", "lecture", "p1-l9"] },
  },
  {
    id: "p1-l10",
    period: 1,
    periodId: "p1",
    title: "Aux thermes",
    objective: "Lire une scène simple aux thermes et repérer actions et lieux.",
    lessonPoint: "Les prépositions et le verbe suffisent souvent pour comprendre la situation.",
    canDo: ["Je comprends une phrase de déplacement aux thermes.", "Je repère une action collective simple.", "Je traduis des phrases brèves de scène urbaine."],
    lexicon: ["thermae", "aqua", "calida", "frigidus", "in thermis", "ad thermas", "intrat", "manet"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p1-l10-t1", type: "singleChoice", prompt: "Le lieu des bains publics est :", options: ["thermae", "taberna", "forum", "sacellum", "insula"], expected: "thermae", shuffle: true, points: 1 },
      { id: "p1-l10-t2", type: "singleChoice", prompt: "« Marcus ad thermas currit » : Marcus court…", options: ["vers les thermes", "dans la maison", "vers le forum", "sous le mur", "à l’école"], expected: "vers les thermes", shuffle: true, points: 1 },
      { id: "p1-l10-t3", type: "multipleChoice", prompt: "Choisis les mots de la scène des thermes.", options: ["thermae", "aqua", "calida", "ianua", "frigidus"], expected: ["thermae", "aqua", "calida", "frigidus"], shuffle: true, points: 1 },
      { id: "p1-l10-t4", type: "matching", prompt: "Associe expression et sens.", pairs: [{ left: "in thermis", right: "dans les thermes" }, { left: "ad thermas", right: "vers les thermes" }, { left: "aqua calida", right: "eau chaude" }], rightOptions: ["eau chaude", "dans les thermes", "vers les thermes"], expected: { "in thermis": "dans les thermes", "ad thermas": "vers les thermes", "aqua calida": "eau chaude" }, points: 1 },
      { id: "p1-l10-t5", type: "singleChoice", prompt: "Piège : « Thermas Marcus intrat » signifie :", options: ["Marcus entre dans les thermes", "Les thermes entrent dans Marcus", "Marcus sort des thermes", "Marcus regarde les thermes", "Marcus crie"], expected: "Marcus entre dans les thermes", shuffle: true, points: 1 },
      { id: "p1-l10-t6", type: "singleChoice", prompt: "Dans « Livia in thermis manet », manet signifie :", options: ["reste", "court", "porte", "perturbe", "écrit"], expected: "reste", shuffle: true, points: 1 },
      { id: "p1-l10-t7", type: "textInput", prompt: "Écris en latin : « eau chaude ».", expected: "aqua calida", points: 1 },
    ],
    production: [
      { id: "p1-l10-p1", type: "textInput", prompt: "Traduis en français : Marcus ad thermas currit", expected: "marcus court vers les thermes", acceptedAnswers: ["marcus court vers les thermes", "marcus court aux thermes", "marcus va vite vers les thermes"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["marcus court vers les thermes", "marcus court aux thermes", "marcus va vite vers les thermes"] }, points: 1 },
      { id: "p1-l10-p2", type: "textInput", prompt: "Traduis en français : Livia in thermis manet", expected: "livia reste dans les thermes", acceptedAnswers: ["livia reste dans les thermes", "livia demeure dans les thermes"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["livia reste dans les thermes", "livia demeure dans les thermes"] }, points: 1 },
      { id: "p1-l10-p3", type: "textInput", prompt: "Traduis en latin : Titus entre dans les thermes", expected: "Titus thermas intrat", acceptedAnswers: ["Titus thermas intrat", "Thermas Titus intrat"], answerConfig: { type: "one-of", language: "latin", accepted: ["Titus thermas intrat", "Thermas Titus intrat"] }, points: 1 },
    ],
    summary: { retains: ["ad marque un déplacement, in une position.", "Même en contexte culturel, je garde mes réflexes de lecture."], cahier: ["ad thermas", "in thermis", "Titus thermas intrat"], keywords: ["thermes", "lieux", "prépositions"] },
    meta: { status: "ready", tags: ["thermes", "ville", "p1-l10"] },
  },
  {
    id: "p1-l11",
    period: 1,
    periodId: "p1",
    title: "Le mur écrit",
    objective: "Comprendre une inscription sur le mur et relier lecture, sens et contexte narratif.",
    lessonPoint: "Je lis mot à mot puis je recompose le sens global.",
    canDo: ["Je déchiffre une courte inscription latine.", "Je distingue message et commentaire.", "Je traduis une phrase d’alerte."],
    lexicon: ["murus", "scriptum", "nomen", "Discordia", "videt", "legit", "scribit", "timet"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p1-l11-t1", type: "singleChoice", prompt: "Le mur se dit :", options: ["murus", "porta", "domus", "via", "ara"], expected: "murus", shuffle: true, points: 1 },
      { id: "p1-l11-t2", type: "singleChoice", prompt: "« Marcus scriptum legit » : Marcus…", options: ["lit une inscription", "écrit une inscription", "voit un chien", "porte une inscription", "court"], expected: "lit une inscription", shuffle: true, points: 1 },
      { id: "p1-l11-t3", type: "multipleChoice", prompt: "Choisis les mots liés à l’inscription.", options: ["scriptum", "nomen", "murus", "discordia", "panis"], expected: ["scriptum", "nomen", "murus", "discordia"], shuffle: true, points: 1 },
      { id: "p1-l11-t4", type: "matching", prompt: "Associe phrase et sens.", pairs: [{ left: "Nomen in muro est", right: "Un nom est sur le mur" }, { left: "Marcus legit", right: "Marcus lit" }, { left: "Livia timet", right: "Livia a peur" }], rightOptions: ["Livia a peur", "Marcus lit", "Un nom est sur le mur"], expected: { "Nomen in muro est": "Un nom est sur le mur", "Marcus legit": "Marcus lit", "Livia timet": "Livia a peur" }, points: 1 },
      { id: "p1-l11-t5", type: "singleChoice", prompt: "Piège : « Discordiam Marcus legit » signifie :", options: ["Marcus lit le nom Discordia", "Discordia lit Marcus", "Marcus écrit Discordia", "Marcus crie", "Discordia aboie"], expected: "Marcus lit le nom Discordia", shuffle: true, points: 1 },
      { id: "p1-l11-t6", type: "singleChoice", prompt: "Quel verbe signifie « craint » ?", options: ["timet", "legit", "scribit", "portat", "manet"], expected: "timet", shuffle: true, points: 1 },
      { id: "p1-l11-t7", type: "textInput", prompt: "Écris en latin : « nom ».", expected: "nomen", points: 1 },
    ],
    production: [
      { id: "p1-l11-p1", type: "textInput", prompt: "Traduis en français : Nomen in muro est", expected: "un nom est sur le mur", acceptedAnswers: ["un nom est sur le mur", "le nom est sur le mur", "un nom est écrit sur le mur"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["un nom est sur le mur", "le nom est sur le mur", "un nom est écrit sur le mur"] }, points: 1 },
      { id: "p1-l11-p2", type: "textInput", prompt: "Traduis en français : Livia Discordiam timet", expected: "livia craint discordia", acceptedAnswers: ["livia craint discordia", "livia a peur de discordia"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["livia craint discordia", "livia a peur de discordia"] }, points: 1 },
      { id: "p1-l11-p3", type: "textInput", prompt: "Traduis en latin : Marcus lit l’inscription", expected: "Marcus scriptum legit", acceptedAnswers: ["Marcus scriptum legit", "Scriptum Marcus legit"], answerConfig: { type: "one-of", language: "latin", accepted: ["Marcus scriptum legit", "Scriptum Marcus legit"] }, points: 1 },
    ],
    summary: { retains: ["Je peux lire un message court sur un support réel (le mur).", "Le sens global se construit à partir de mots simples bien reconnus."], cahier: ["Nomen in muro est", "Marcus scriptum legit"], keywords: ["murus", "inscription", "Discordia"] },
    meta: { status: "ready", tags: ["inscription", "discordia", "p1-l11"] },
  },
  {
    id: "p1-l12",
    period: 1,
    periodId: "p1",
    title: "Le nom de Discordia",
    objective: "Synthétiser les acquis de P1 dans une scène finale où le nom de Discordia est identifié.",
    lessonPoint: "Je combine lexique récurrent, verbe et repères de lieu pour comprendre la scène finale.",
    canDo: ["Je comprends une micro-scène complète.", "Je repère rapidement sujet, verbe, complément.", "Je traduis des phrases de synthèse en restant précis."],
    lexicon: ["Discordia", "Subura", "forum", "domus", "murus", "nomen", "portat", "videt", "timet"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p1-l12-t1", type: "singleChoice", prompt: "Dans la scène finale, quel nom apparaît sur le mur ?", options: ["Discordia", "Minerva", "Marcus", "Subura", "Niger"], expected: "Discordia", shuffle: true, points: 1 },
      { id: "p1-l12-t2", type: "singleChoice", prompt: "« Marcus nomen videt » : Marcus…", options: ["voit le nom", "porte le nom", "écrit le nom", "craint le nom", "appelle le nom"], expected: "voit le nom", shuffle: true, points: 1 },
      { id: "p1-l12-t3", type: "multipleChoice", prompt: "Sélectionne les éléments-clés de la scène finale.", options: ["murus", "nomen", "forum", "tabella", "discordia"], expected: ["murus", "nomen", "forum", "tabella", "discordia"], shuffle: true, points: 1 },
      { id: "p1-l12-t4", type: "matching", prompt: "Associe phrase et rôle narratif.", pairs: [{ left: "Marcus nomen videt", right: "découverte" }, { left: "Livia Discordiam timet", right: "réaction" }, { left: "Titus tabellam portat", right: "indice" }], rightOptions: ["indice", "découverte", "réaction"], expected: { "Marcus nomen videt": "découverte", "Livia Discordiam timet": "réaction", "Titus tabellam portat": "indice" }, points: 1 },
      { id: "p1-l12-t5", type: "singleChoice", prompt: "Piège : « Discordiam Livia timet » signifie :", options: ["Livia craint Discordia", "Discordia craint Livia", "Livia voit Discordia", "Livia écrit Discordia", "Discordia porte Livia"], expected: "Livia craint Discordia", shuffle: true, points: 1 },
      { id: "p1-l12-t6", type: "singleChoice", prompt: "Quel rappel méthodologique est juste ?", options: ["Cherche d’abord le verbe", "Traduis mot à mot sans contexte", "Ignore les terminaisons", "L’ordre latin est toujours français", "Le sujet est toujours au début"], expected: "Cherche d’abord le verbe", shuffle: true, points: 1 },
      { id: "p1-l12-t7", type: "textInput", prompt: "Écris en latin : « nom de Discordia » (deux mots).", expected: "nomen Discordiae", points: 1 },
    ],
    production: [
      { id: "p1-l12-p1", type: "textInput", prompt: "Traduis en français : Marcus nomen Discordiae videt", expected: "marcus voit le nom de discordia", acceptedAnswers: ["marcus voit le nom de discordia", "marcus voit le nom discordia"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["marcus voit le nom de discordia", "marcus voit le nom discordia"] }, points: 1 },
      { id: "p1-l12-p2", type: "textInput", prompt: "Traduis en français : Livia Discordiam timet", expected: "livia craint discordia", acceptedAnswers: ["livia craint discordia", "livia a peur de discordia"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["livia craint discordia", "livia a peur de discordia"] }, points: 1 },
      { id: "p1-l12-p3", type: "textInput", prompt: "Traduis en latin : Titus porte la tablette au forum", expected: "Titus tabellam ad forum portat", acceptedAnswers: ["Titus tabellam ad forum portat", "Tabellam Titus ad forum portat", "Titus ad forum tabellam portat"], answerConfig: { type: "one-of", language: "latin", accepted: ["Titus tabellam ad forum portat", "Tabellam Titus ad forum portat", "Titus ad forum tabellam portat"] }, points: 1 },
    ],
    summary: {
      retains: ["Je peux lire une scène complète en latin simple avec cohérence narrative.", "Validation de la période : 8/10 (80 %) et plus."],
      cahier: ["Marcus nomen Discordiae videt", "Livia Discordiam timet", "Titus tabellam ad forum portat"],
      keywords: ["Discordia", "Subura", "synthèse", "lecture", "validation"],
    },
    meta: { status: "ready", tags: ["synthese", "discordia", "p1-l12"] },
  },
  {
    id: "p2-l1",
    period: 2,
    periodId: "p2",
    title: "Quis fecit ?",
    objective: "Lire des témoignages contradictoires et comprendre qui accuse qui.",
    lessonPoint: "Questionner une phrase, c’est déjà la comprendre.",
    canDo: [
      "Je reconnais les interrogatifs latins les plus fréquents.",
      "Je repère le témoin dans un micro-texte.",
      "Je traduis une question courte d’enquête.",
    ],
    lexicon: ["quis", "quid", "cur", "ubi", "testis", "vicinus", "videt", "dicit", "negat", "accusat"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p2-l1-t1", type: "singleChoice", prompt: "Quel mot demande « qui ? »", options: ["quis", "quid", "cur", "ubi", "testis"], expected: "quis", shuffle: true, points: 1 },
      { id: "p2-l1-t2", type: "matching", prompt: "Associe l’interrogatif à sa réponse logique.", pairs: [{ left: "quis", right: "Marcus" }, { left: "quid", right: "tabellam" }, { left: "cur", right: "metum habet" }, { left: "ubi", right: "in via" }], rightOptions: ["in via", "Marcus", "tabellam", "metum habet"], expected: { "quis": "Marcus", "quid": "tabellam", "cur": "metum habet", "ubi": "in via" }, points: 1 },
      { id: "p2-l1-t3", type: "singleChoice", prompt: "Micro-texte : « Testis vetus dicit: vicinus Marcum accusat. » Qui accuse Marcus ?", options: ["le voisin", "Marcus", "le témoin", "Flavia", "Niger"], expected: "le voisin", shuffle: true, points: 1 },
      { id: "p2-l1-t4", type: "multipleChoice", prompt: "Traductions recevables de « vicinus Marcum accusat ».", options: ["Le voisin accuse Marcus", "Le voisin met Marcus en cause", "Marcus accuse le voisin", "Marcus est accusé par le voisin", "Le voisin salue Marcus"], expected: ["Le voisin accuse Marcus", "Le voisin met Marcus en cause", "Marcus est accusé par le voisin"], shuffle: true, points: 1 },
      { id: "p2-l1-t5", type: "singleChoice", prompt: "Dans « vicinus Marcum accusat », qui accuse ?", options: ["vicinus", "Marcum", "accusat", "testis", "quis"], expected: "vicinus", shuffle: true, points: 1, feedback: "Cherche d’abord le verbe accusat puis le sujet." },
      { id: "p2-l1-t6", type: "singleChoice", prompt: "Micro-texte : « Titus dicit; Lucius negat se vidisse. » Qui nie avoir vu ?", options: ["Lucius", "Titus", "Marcus", "Flavia", "Aurelia"], expected: "Lucius", shuffle: true, points: 1 },
      { id: "p2-l1-t7", type: "multipleChoice", prompt: "Quels mots servent à poser une question ?", options: ["quis", "quid", "cur", "ubi", "dicit"], expected: ["quis", "quid", "cur", "ubi"], shuffle: true, points: 1 },
    ],
    production: [
      { id: "p2-l1-p1", type: "textInput", prompt: "Micro-version : quis tabellam videt ?", expected: "qui voit la tablette ?", acceptedAnswers: ["qui voit la tablette", "qui voit la tablette ?"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["qui voit la tablette", "qui voit la tablette ?"] }, points: 1 },
      { id: "p2-l1-p2", type: "textInput", prompt: "Micro-thème : Le voisin accuse Marcus.", expected: "Vicinus Marcum accusat", acceptedAnswers: ["Vicinus Marcum accusat", "Marcum vicinus accusat"], answerConfig: { type: "one-of", language: "latin", accepted: ["Vicinus Marcum accusat", "Marcum vicinus accusat"] }, points: 1 },
      { id: "p2-l1-p3", type: "textInput", prompt: "Culture : à Rome, un testis est…", expected: "un témoin", acceptedAnswers: ["un témoin", "le témoin"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["un témoin", "le témoin"] }, points: 1 },
    ],
    summary: { retains: ["Je peux entrer dans une phrase en lui posant les bonnes questions.", "Le verbe et le sujet clarifient vite un témoignage."], cahier: ["quis ? quid ? cur ? ubi ?", "vicinus Marcum accusat"], keywords: ["interrogatifs", "testis", "accusat", "enquête"] },
    meta: { status: "ready", tags: ["p2-l1", "enquete", "interrogatifs"] },
  },
  {
    id: "p2-l2",
    period: 2,
    periodId: "p2",
    title: "Ad forum",
    objective: "Comprendre les déplacements suspects entre rue, boutique et forum.",
    lessonPoint: "Les prépositions changent le sens du mouvement.",
    canDo: ["Je distingue ad / in / ex.", "Je repère qui va vers le forum.", "Je traduis une phrase de déplacement."],
    lexicon: ["ad", "in", "ex", "forum", "via", "taberna", "currit", "venit", "exit", "intrat"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p2-l2-t1", type: "singleChoice", prompt: "Quel mot signifie « vers » dans ad forum ?", options: ["ad", "in", "ex", "cum", "sub"], expected: "ad", shuffle: true, points: 1 },
      { id: "p2-l2-t2", type: "matching", prompt: "Associe préposition et idée.", pairs: [{ left: "ad", right: "aller vers" }, { left: "in", right: "être dans" }, { left: "ex", right: "sortir de" }], rightOptions: ["être dans", "aller vers", "sortir de"], expected: { "ad": "aller vers", "in": "être dans", "ex": "sortir de" }, points: 1 },
      { id: "p2-l2-t3", type: "singleChoice", prompt: "Mini-texte : « Marcus ad forum currit, Titus ex taberna exit. » Qui va vers le forum ?", options: ["Marcus", "Titus", "la boutique", "le forum", "Niger"], expected: "Marcus", shuffle: true, points: 1 },
      { id: "p2-l2-t4", type: "multipleChoice", prompt: "Traductions recevables de « Marcus ad forum currit ».", options: ["Marcus court vers le forum", "Marcus court au forum", "Marcus sort du forum", "Marcus se dirige vers le forum", "Marcus est dans le forum"], expected: ["Marcus court vers le forum", "Marcus court au forum", "Marcus se dirige vers le forum"], shuffle: true, points: 1 },
      { id: "p2-l2-t5", type: "singleChoice", prompt: "Quelle préposition indique l’origine ?", options: ["ex", "ad", "in", "cum", "prope"], expected: "ex", shuffle: true, points: 1, feedback: "La préposition change le sens du déplacement." },
      { id: "p2-l2-t6", type: "singleChoice", prompt: "Marcus va-t-il vers le forum ou en vient-il ?", options: ["vers le forum", "il en vient", "il reste dans le forum", "il entre dans une domus", "on ne sait pas"], expected: "vers le forum", shuffle: true, points: 1 },
      { id: "p2-l2-t7", type: "multipleChoice", prompt: "Quelles phrases parlent d’un déplacement ?", options: ["Titus ex taberna exit", "Marcus ad forum currit", "Livia in domo manet", "Aurelia in via venit", "Niger dormit"], expected: ["Titus ex taberna exit", "Marcus ad forum currit", "Aurelia in via venit"], shuffle: true, points: 1 },
    ],
    production: [
      { id: "p2-l2-p1", type: "textInput", prompt: "Micro-version : Titus ex taberna exit", expected: "titus sort de la boutique", acceptedAnswers: ["titus sort de la boutique", "titus sort d'une boutique", "titus vient de la boutique"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["titus sort de la boutique", "titus sort d'une boutique", "titus vient de la boutique"] }, points: 1 },
      { id: "p2-l2-p2", type: "textInput", prompt: "Micro-thème : Le garçon entre dans la boutique.", expected: "Puer in tabernam intrat", acceptedAnswers: ["Puer in tabernam intrat", "In tabernam puer intrat"], answerConfig: { type: "one-of", language: "latin", accepted: ["Puer in tabernam intrat", "In tabernam puer intrat"] }, points: 1 },
      { id: "p2-l2-p3", type: "textInput", prompt: "Culture : le forum est…", expected: "un centre de la vie urbaine", acceptedAnswers: ["un centre de la vie urbaine", "la place centrale de la ville", "le centre de la ville"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["un centre de la vie urbaine", "la place centrale de la ville", "le centre de la ville"] }, points: 1 },
    ],
    summary: { retains: ["Je distingue aller vers, être dans, sortir de.", "Une petite préposition peut changer toute la lecture."], cahier: ["Marcus ad forum currit", "Titus ex taberna exit"], keywords: ["ad", "in", "ex", "déplacement"] },
    meta: { status: "ready", tags: ["p2-l2", "prepositions", "forum"] },
  },
  {
    id: "p2-l3",
    period: 2,
    periodId: "p2",
    title: "In domo, ex domo",
    objective: "Comparer lieu de présence et lieu d’origine dans des témoignages contradictoires.",
    lessonPoint: "Le lieu où l’on est et le lieu d’où l’on vient ne se traduisent pas pareil.",
    canDo: ["Je distingue in / ex dans une scène.", "Je repère qui sort de la maison.", "Je traduis des phrases de localisation."],
    lexicon: ["domus", "hortus", "cubiculum", "ex", "in", "manet", "venit", "intrat", "exit", "spectat"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p2-l3-t1", type: "singleChoice", prompt: "in domo se traduit par :", options: ["dans la maison", "hors de la maison", "vers la maison", "avec la maison", "sous la maison"], expected: "dans la maison", shuffle: true, points: 1 },
      { id: "p2-l3-t2", type: "matching", prompt: "Associe expression et exemple.", pairs: [{ left: "in domo", right: "Aurelia manet" }, { left: "ex domo", right: "Marcus venit" }], rightOptions: ["Marcus venit", "Aurelia manet"], expected: { "in domo": "Aurelia manet", "ex domo": "Marcus venit" }, points: 1 },
      { id: "p2-l3-t3", type: "singleChoice", prompt: "Mini-texte : « Aurelia in domo manet; Lucius ex domo venit. » Qui sort de la maison ?", options: ["Lucius", "Aurelia", "domus", "hortus", "Niger"], expected: "Lucius", shuffle: true, points: 1 },
      { id: "p2-l3-t4", type: "multipleChoice", prompt: "Traductions recevables de « Marcus ex domo venit ».", options: ["Marcus vient de la maison", "Marcus sort de la maison", "Marcus va vers la maison", "Marcus arrive depuis la maison", "Marcus reste dans la maison"], expected: ["Marcus vient de la maison", "Marcus sort de la maison", "Marcus arrive depuis la maison"], shuffle: true, points: 1 },
      { id: "p2-l3-t5", type: "singleChoice", prompt: "Dans « Aurelia in horto manet », où est Aurelia ?", options: ["dans le jardin", "hors du jardin", "vers le jardin", "au forum", "dans la rue"], expected: "dans le jardin", shuffle: true, points: 1 },
      { id: "p2-l3-t6", type: "singleChoice", prompt: "Qui ment sur ses déplacements selon le mini-récit ?", options: ["Marcus", "Aurelia", "Lucius", "Niger", "la prêtresse"], expected: "Marcus", shuffle: true, points: 1, feedback: "Relis les prépositions avant de conclure." },
      { id: "p2-l3-t7", type: "multipleChoice", prompt: "Quelles expressions parlent du lieu où l’on reste ?", options: ["in domo", "in horto", "ex domo", "ex cubiculo", "in cubiculo"], expected: ["in domo", "in horto", "in cubiculo"], shuffle: true, points: 1 },
    ],
    production: [
      { id: "p2-l3-p1", type: "textInput", prompt: "Micro-version : Livia in cubiculo manet", expected: "livia reste dans la chambre", acceptedAnswers: ["livia reste dans la chambre", "livia demeure dans la chambre"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["livia reste dans la chambre", "livia demeure dans la chambre"] }, points: 1 },
      { id: "p2-l3-p2", type: "textInput", prompt: "Micro-thème : Le garçon sort du jardin.", expected: "Puer ex horto exit", acceptedAnswers: ["Puer ex horto exit", "Ex horto puer exit"], answerConfig: { type: "one-of", language: "latin", accepted: ["Puer ex horto exit", "Ex horto puer exit"] }, points: 1 },
      { id: "p2-l3-p3", type: "textInput", prompt: "Culture : domus et hortus, ce sont…", expected: "la maison et le jardin", acceptedAnswers: ["la maison et le jardin", "un espace domestique romain", "des lieux de la vie quotidienne"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["la maison et le jardin", "un espace domestique romain", "des lieux de la vie quotidienne"] }, points: 1 },
    ],
    summary: { retains: ["Je fais attention aux petits mots qui disent lieu, mouvement et origine.", "Le verbe aide à confirmer le déplacement."], cahier: ["in domo", "ex domo", "Puer ex horto exit"], keywords: ["domus", "hortus", "in/ex"] },
    meta: { status: "ready", tags: ["p2-l3", "maison", "localisation"] },
  },
  {
    id: "p2-l4",
    period: 2,
    periodId: "p2",
    title: "Cum amico",
    objective: "Lire avec précision qui agit avec qui dans les témoignages.",
    lessonPoint: "Cum m’aide à lire la relation entre les personnages.",
    canDo: ["Je reconnais un accompagnement.", "Je relie deux personnages dans l’action.", "Je traduis une phrase avec cum."],
    lexicon: ["cum", "amicus", "ancilla", "servus", "venit", "ambulat", "laborat", "loquitur", "manet", "ridet"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p2-l4-t1", type: "singleChoice", prompt: "Quel mot latin veut dire « avec » ?", options: ["cum", "ad", "in", "ex", "sub"], expected: "cum", shuffle: true, points: 1 },
      { id: "p2-l4-t2", type: "matching", prompt: "Associe personnage et compagnon.", pairs: [{ left: "Marcus", right: "cum amico" }, { left: "ancilla", right: "cum domina" }, { left: "servus", right: "cum Lucio" }], rightOptions: ["cum Lucio", "cum amico", "cum domina"], expected: { "Marcus": "cum amico", "ancilla": "cum domina", "servus": "cum Lucio" }, points: 1 },
      { id: "p2-l4-t3", type: "singleChoice", prompt: "Mini-texte : « Titus dicit: Marcus cum ancilla ambulat. » Avec qui Marcus marche-t-il ?", options: ["avec l’ancilla", "avec Titus", "avec Niger", "avec le forum", "avec la domus"], expected: "avec l’ancilla", shuffle: true, points: 1 },
      { id: "p2-l4-t4", type: "multipleChoice", prompt: "Traductions recevables de « Marcus cum amico ambulat ».", options: ["Marcus marche avec un ami", "Marcus se promène avec son ami", "Marcus va vers son ami", "Marcus et un ami marchent ensemble", "Marcus quitte son ami"], expected: ["Marcus marche avec un ami", "Marcus se promène avec son ami", "Marcus et un ami marchent ensemble"], shuffle: true, points: 1 },
      { id: "p2-l4-t5", type: "singleChoice", prompt: "Quel groupe indique l’accompagnement ?", options: ["cum amico", "ad forum", "in domo", "ex taberna", "per viam"], expected: "cum amico", shuffle: true, points: 1, feedback: "Le groupe nominal se lit ensemble autour de cum." },
      { id: "p2-l4-t6", type: "singleChoice", prompt: "Selon Titus, avec qui Marcus a-t-il été vu ?", options: ["avec un ami", "avec la prêtresse", "avec Niger", "avec Sextus", "avec personne"], expected: "avec un ami", shuffle: true, points: 1 },
      { id: "p2-l4-t7", type: "multipleChoice", prompt: "Quels énoncés décrivent une action faite à deux ?", options: ["Ancilla cum domina laborat", "Marcus cum amico ridet", "Lucius in domo manet", "Titus cum Flavia loquitur", "Niger latrat"], expected: ["Ancilla cum domina laborat", "Marcus cum amico ridet", "Titus cum Flavia loquitur"], shuffle: true, points: 1 },
    ],
    production: [
      { id: "p2-l4-p1", type: "textInput", prompt: "Micro-version : ancilla cum domina laborat", expected: "la servante travaille avec la maîtresse", acceptedAnswers: ["la servante travaille avec la maîtresse", "l'ancilla travaille avec la domina", "la servante travaille avec sa maîtresse"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["la servante travaille avec la maîtresse", "l'ancilla travaille avec la domina", "la servante travaille avec sa maîtresse"] }, points: 1 },
      { id: "p2-l4-p2", type: "textInput", prompt: "Micro-thème : Le serviteur rit avec son ami.", expected: "Servus cum amico ridet", acceptedAnswers: ["Servus cum amico ridet", "Cum amico servus ridet"], answerConfig: { type: "one-of", language: "latin", accepted: ["Servus cum amico ridet", "Cum amico servus ridet"] }, points: 1 },
      { id: "p2-l4-p3", type: "textInput", prompt: "Culture : cum amico dit…", expected: "une relation d'accompagnement", acceptedAnswers: ["une relation d'accompagnement", "agir avec quelqu'un", "la relation entre deux personnages"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["une relation d'accompagnement", "agir avec quelqu'un", "la relation entre deux personnages"] }, points: 1 },
    ],
    summary: { retains: ["Je repère le lien entre les personnages : cum est un indice fort.", "Le verbe et l’accompagnement se lisent ensemble."], cahier: ["Marcus cum amico ambulat", "ancilla cum domina laborat"], keywords: ["cum", "accompagnement", "relation"] },
    meta: { status: "ready", tags: ["p2-l4", "cum", "relations"] },
  },
  {
    id: "p2-l5",
    period: 2,
    periodId: "p2",
    title: "Domina, dominus, servus",
    objective: "Comprendre les rapports sociaux dans les scènes d’enquête domestique.",
    lessonPoint: "Les mots de statut social orientent l’interprétation de la scène.",
    canDo: ["Je reconnais qui donne l’ordre.", "Je repère qui répond.", "Je traduis une phrase de hiérarchie domestique."],
    lexicon: ["domina", "dominus", "servus", "ancilla", "iubet", "parat", "portat", "audit", "respondet", "laborat"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p2-l5-t1", type: "singleChoice", prompt: "Quel mot désigne la maîtresse de maison ?", options: ["domina", "dominus", "servus", "ancilla", "testis"], expected: "domina", shuffle: true, points: 1 },
      { id: "p2-l5-t2", type: "matching", prompt: "Associe mot et rôle.", pairs: [{ left: "dominus", right: "maître" }, { left: "domina", right: "maîtresse" }, { left: "servus", right: "serviteur" }, { left: "ancilla", right: "servante" }], rightOptions: ["serviteur", "maître", "servante", "maîtresse"], expected: { "dominus": "maître", "domina": "maîtresse", "servus": "serviteur", "ancilla": "servante" }, points: 1 },
      { id: "p2-l5-t3", type: "singleChoice", prompt: "Mini-texte : « Domina servum iubet; servus respondet. » Qui donne l’ordre ?", options: ["domina", "servus", "dominus", "ancilla", "Niger"], expected: "domina", shuffle: true, points: 1 },
      { id: "p2-l5-t4", type: "multipleChoice", prompt: "Traductions recevables de « domina servum vocat ».", options: ["La maîtresse appelle le serviteur", "La dame appelle le serviteur", "Le serviteur appelle la maîtresse", "La maîtresse fait venir le serviteur", "Le serviteur appelle la dame"], expected: ["La maîtresse appelle le serviteur", "La dame appelle le serviteur", "La maîtresse fait venir le serviteur"], shuffle: true, points: 1 },
      { id: "p2-l5-t5", type: "singleChoice", prompt: "Dans « servus dominae respondet », qui répond ?", options: ["servus", "dominae", "respondet", "domina", "dominus"], expected: "servus", shuffle: true, points: 1 },
      { id: "p2-l5-t6", type: "singleChoice", prompt: "Qui dit la vérité dans le micro-récit ?", options: ["ancilla", "Sextus", "Niger", "dominus", "personne"], expected: "ancilla", shuffle: true, points: 1, feedback: "Cherche d’abord le verbe de parole." },
      { id: "p2-l5-t7", type: "multipleChoice", prompt: "Quels mots indiquent une hiérarchie ?", options: ["domina", "dominus", "servus", "ancilla", "forum"], expected: ["domina", "dominus", "servus", "ancilla"], shuffle: true, points: 1 },
    ],
    production: [
      { id: "p2-l5-p1", type: "textInput", prompt: "Micro-version : ancilla panem parat", expected: "la servante prépare le pain", acceptedAnswers: ["la servante prépare le pain", "l'ancilla prépare le pain"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["la servante prépare le pain", "l'ancilla prépare le pain"] }, points: 1 },
      { id: "p2-l5-p2", type: "textInput", prompt: "Micro-thème : La maîtresse appelle le serviteur.", expected: "Domina servum vocat", acceptedAnswers: ["Domina servum vocat", "Servum domina vocat"], answerConfig: { type: "one-of", language: "latin", accepted: ["Domina servum vocat", "Servum domina vocat"] }, points: 1 },
      { id: "p2-l5-p3", type: "textInput", prompt: "Culture : domina / servus montrent…", expected: "une hiérarchie domestique", acceptedAnswers: ["une hiérarchie domestique", "des rapports sociaux de la maison", "un statut social"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["une hiérarchie domestique", "des rapports sociaux de la maison", "un statut social"] }, points: 1 },
    ],
    summary: { retains: ["Le latin dit le statut social, je le prends en compte.", "Je lis mieux une scène si je repère qui ordonne et qui répond."], cahier: ["domina servum vocat", "servus dominae respondet"], keywords: ["hiérarchie", "domus", "rapports sociaux"] },
    meta: { status: "ready", tags: ["p2-l5", "statut", "domina"] },
  },
  {
    id: "p2-l6",
    period: 2,
    periodId: "p2",
    title: "Mercator iratus",
    objective: "Interpréter le ton de la scène grâce aux adjectifs et aux verbes de parole.",
    lessonPoint: "L’adjectif n’est pas décoratif : il oriente le sens.",
    canDo: ["Je reconnais un adjectif de ton.", "Je repère qui est en colère.", "Je traduis un groupe nominal expressif."],
    lexicon: ["iratus", "laetus", "fessus", "bonus", "malus", "mercator", "pistor", "clamat", "accusat", "tacet"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p2-l6-t1", type: "singleChoice", prompt: "Quel mot est un adjectif ?", options: ["iratus", "mercator", "forum", "tacet", "domus"], expected: "iratus", shuffle: true, points: 1 },
      { id: "p2-l6-t2", type: "matching", prompt: "Associe personnage et adjectif plausible.", pairs: [{ left: "mercator", right: "iratus" }, { left: "pistor", right: "fessus" }, { left: "ancilla", right: "laeta" }], rightOptions: ["fessus", "laeta", "iratus"], expected: { "mercator": "iratus", "pistor": "fessus", "ancilla": "laeta" }, points: 1 },
      { id: "p2-l6-t3", type: "singleChoice", prompt: "Mini-texte : « Lucius mercator iratus clamat. » Qui est en colère ?", options: ["Lucius", "pistor", "Sextus", "Niger", "la prêtresse"], expected: "Lucius", shuffle: true, points: 1 },
      { id: "p2-l6-t4", type: "multipleChoice", prompt: "Traductions recevables de « mercator iratus clamat ».", options: ["Le marchand furieux crie", "Le marchand en colère s’écrie", "Le marchand calme crie", "Le marchand accuse en criant", "Le marchand heureux parle doucement"], expected: ["Le marchand furieux crie", "Le marchand en colère s’écrie", "Le marchand accuse en criant"], shuffle: true, points: 1 },
      { id: "p2-l6-t5", type: "singleChoice", prompt: "Quel adjectif est l’opposé de bonus ?", options: ["malus", "laetus", "fessus", "iratus", "tacet"], expected: "malus", shuffle: true, points: 1 },
      { id: "p2-l6-t6", type: "singleChoice", prompt: "Pourquoi Lucius s’emporte-t-il dans la scène ?", options: ["Il accuse Sextus", "Il cherche Niger", "Il sort du forum", "Il prie Minerve", "Il dort"], expected: "Il accuse Sextus", shuffle: true, points: 1, feedback: "Relis le verbe accusat et le groupe nominal." },
      { id: "p2-l6-t7", type: "multipleChoice", prompt: "Quels groupes nominaux sont cohérents ?", options: ["mercator iratus", "pistor fessus", "domina laeta", "forum iratus", "taberna laeta"], expected: ["mercator iratus", "pistor fessus", "domina laeta"], shuffle: true, points: 1 },
    ],
    production: [
      { id: "p2-l6-p1", type: "textInput", prompt: "Micro-version : pistor fessus tacet", expected: "le boulanger fatigué se tait", acceptedAnswers: ["le boulanger fatigué se tait", "le boulanger épuisé se tait", "le pistor fatigué se tait"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["le boulanger fatigué se tait", "le boulanger épuisé se tait", "le pistor fatigué se tait"] }, points: 1 },
      { id: "p2-l6-p2", type: "textInput", prompt: "Micro-thème : Le marchand furieux accuse le boulanger.", expected: "Mercator iratus pistorem accusat", acceptedAnswers: ["Mercator iratus pistorem accusat", "Pistorem mercator iratus accusat"], answerConfig: { type: "one-of", language: "latin", accepted: ["Mercator iratus pistorem accusat", "Pistorem mercator iratus accusat"] }, points: 1 },
      { id: "p2-l6-p3", type: "textInput", prompt: "Culture : dans une taberna, un mercator est…", expected: "un marchand", acceptedAnswers: ["un marchand", "le vendeur", "un commerçant"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["un marchand", "le vendeur", "un commerçant"] }, points: 1 },
    ],
    summary: { retains: ["L’adjectif change le ton de la scène.", "Je relis le groupe nominal avant de traduire."], cahier: ["mercator iratus clamat", "pistor fessus tacet"], keywords: ["adjectif", "ton", "marché"] },
    meta: { status: "ready", tags: ["p2-l6", "adjectifs", "mercator"] },
  },
  {
    id: "p2-l7",
    period: 2,
    periodId: "p2",
    title: "Duo pueri, tres feminae",
    objective: "Utiliser les nombres pour mieux lire les témoins et les actions.",
    lessonPoint: "Compter aide à lire : la quantité change la scène.",
    canDo: ["Je reconnais des nombres fréquents.", "Je relie nombre et groupe.", "Je traduis des phrases au pluriel."],
    lexicon: ["unus", "duo", "tres", "multi", "pauci", "puer", "femina", "venit", "manet", "currit"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p2-l7-t1", type: "singleChoice", prompt: "Quel mot veut dire « deux » ?", options: ["duo", "tres", "unus", "multi", "pauci"], expected: "duo", shuffle: true, points: 1 },
      { id: "p2-l7-t2", type: "matching", prompt: "Associe nombre et quantité.", pairs: [{ left: "unus", right: "1" }, { left: "duo", right: "2" }, { left: "tres", right: "3" }, { left: "multi", right: "plusieurs" }], rightOptions: ["3", "1", "2", "plusieurs"], expected: { "unus": "1", "duo": "2", "tres": "3", "multi": "plusieurs" }, points: 1 },
      { id: "p2-l7-t3", type: "singleChoice", prompt: "Mini-scène : « duo pueri currunt, tres feminae manent. » Combien de femmes restent ?", options: ["trois", "deux", "une", "plusieurs", "aucune"], expected: "trois", shuffle: true, points: 1 },
      { id: "p2-l7-t4", type: "multipleChoice", prompt: "Traductions recevables de « duo pueri currunt ».", options: ["Deux garçons courent", "Les deux garçons courent", "Un garçon court", "Deux élèves courent", "Trois garçons courent"], expected: ["Deux garçons courent", "Les deux garçons courent", "Deux élèves courent"], shuffle: true, points: 1 },
      { id: "p2-l7-t5", type: "singleChoice", prompt: "Quelle phrase parle de plusieurs femmes ?", options: ["tres feminae veniunt", "duo pueri currunt", "unus servus manet", "Marcus venit", "Niger latrat"], expected: "tres feminae veniunt", shuffle: true, points: 1 },
      { id: "p2-l7-t6", type: "singleChoice", prompt: "Combien de témoins disent avoir vu la scène ?", options: ["deux", "trois", "un", "quatre", "cinq"], expected: "deux", shuffle: true, points: 1, feedback: "Le nombre est un indice de fiabilité du récit." },
      { id: "p2-l7-t7", type: "multipleChoice", prompt: "Quels mots expriment une quantité ?", options: ["duo", "tres", "multi", "pauci", "currit"], expected: ["duo", "tres", "multi", "pauci"], shuffle: true, points: 1 },
    ],
    production: [
      { id: "p2-l7-p1", type: "textInput", prompt: "Micro-version : tres feminae ad fontem veniunt", expected: "trois femmes viennent à la fontaine", acceptedAnswers: ["trois femmes viennent à la fontaine", "trois femmes arrivent à la fontaine"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["trois femmes viennent à la fontaine", "trois femmes arrivent à la fontaine"] }, points: 1 },
      { id: "p2-l7-p2", type: "textInput", prompt: "Micro-thème : Deux garçons restent dans la rue.", expected: "Duo pueri in via manent", acceptedAnswers: ["Duo pueri in via manent", "In via duo pueri manent"], answerConfig: { type: "one-of", language: "latin", accepted: ["Duo pueri in via manent", "In via duo pueri manent"] }, points: 1 },
      { id: "p2-l7-p3", type: "textInput", prompt: "Culture : multi signifie…", expected: "plusieurs", acceptedAnswers: ["plusieurs", "nombreux"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["plusieurs", "nombreux"] }, points: 1 },
    ],
    summary: { retains: ["Les nombres modifient la scène et l’action.", "Je lis mieux les témoignages quand je compte précisément."], cahier: ["duo pueri currunt", "tres feminae veniunt"], keywords: ["nombres", "pluriel", "témoins"] },
    meta: { status: "ready", tags: ["p2-l7", "nombres", "quantite"] },
  },
  {
    id: "p2-l8",
    period: 2,
    periodId: "p2",
    title: "Ego, tu, nos",
    objective: "Comprendre le point de vue des personnages grâce aux pronoms personnels.",
    lessonPoint: "Le pronom change qui parle et qui est visé.",
    canDo: ["Je reconnais les pronoms personnels fréquents.", "Je lis un mini-dialogue simple.", "Je traduis une phrase avec pronom."],
    lexicon: ["ego", "tu", "nos", "vos", "me", "te", "amat", "audit", "vocat", "videt"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p2-l8-t1", type: "singleChoice", prompt: "Quel pronom signifie « je » ?", options: ["ego", "tu", "nos", "vos", "me"], expected: "ego", shuffle: true, points: 1 },
      { id: "p2-l8-t2", type: "matching", prompt: "Associe pronom et personne.", pairs: [{ left: "ego", right: "1re pers. sing." }, { left: "tu", right: "2e pers. sing." }, { left: "nos", right: "1re pers. plur." }, { left: "vos", right: "2e pers. plur." }], rightOptions: ["2e pers. sing.", "1re pers. sing.", "2e pers. plur.", "1re pers. plur."], expected: { "ego": "1re pers. sing.", "tu": "2e pers. sing.", "nos": "1re pers. plur.", "vos": "2e pers. plur." }, points: 1 },
      { id: "p2-l8-t3", type: "singleChoice", prompt: "Mini-dialogue : « Ego dico, tu negas. » Qui nie ?", options: ["tu", "ego", "nos", "Marcus", "Livia"], expected: "tu", shuffle: true, points: 1 },
      { id: "p2-l8-t4", type: "multipleChoice", prompt: "Traductions recevables de « tu me vides ».", options: ["Tu me vois", "Tu m’aperçois", "Je te vois", "Tu me regardes", "Nous te voyons"], expected: ["Tu me vois", "Tu m’aperçois", "Tu me regardes"], shuffle: true, points: 1 },
      { id: "p2-l8-t5", type: "singleChoice", prompt: "Dans « Marcus me videt », qui est vu ?", options: ["me", "Marcus", "videt", "tu", "nos"], expected: "me", shuffle: true, points: 1 },
      { id: "p2-l8-t6", type: "singleChoice", prompt: "Dans la scène, qui accuse qui ?", options: ["Flavia accuse Marcus", "Marcus accuse Flavia", "Titus accuse Niger", "Personne n’accuse", "Livia accuse la prêtresse"], expected: "Flavia accuse Marcus", shuffle: true, points: 1, feedback: "Ici, le pronom change le point de vue." },
      { id: "p2-l8-t7", type: "multipleChoice", prompt: "Quels mots sont des pronoms personnels ?", options: ["ego", "tu", "nos", "vos", "forum"], expected: ["ego", "tu", "nos", "vos"], shuffle: true, points: 1 },
    ],
    production: [
      { id: "p2-l8-p1", type: "textInput", prompt: "Micro-version : ego te audio", expected: "je t'entends", acceptedAnswers: ["je t'entends", "je t’écoute", "je t entends"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["je t'entends", "je t’écoute", "je t entends"] }, points: 1 },
      { id: "p2-l8-p2", type: "textInput", prompt: "Micro-thème : Nous voyons Marcus.", expected: "Nos Marcum videmus", acceptedAnswers: ["Nos Marcum videmus", "Marcum nos videmus"], answerConfig: { type: "one-of", language: "latin", accepted: ["Nos Marcum videmus", "Marcum nos videmus"] }, points: 1 },
      { id: "p2-l8-p3", type: "textInput", prompt: "Culture : dans un témoignage, ego sert à…", expected: "indiquer qui parle", acceptedAnswers: ["indiquer qui parle", "marquer la première personne", "donner le point de vue"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["indiquer qui parle", "marquer la première personne", "donner le point de vue"] }, points: 1 },
    ],
    summary: { retains: ["Le pronom permet de comprendre qui parle et qui est concerné.", "Je relis la phrase entière avant de traduire un pronom."], cahier: ["ego te audio", "Marcus me videt"], keywords: ["pronoms", "point de vue", "dialogue"] },
    meta: { status: "ready", tags: ["p2-l8", "pronoms", "temoignage"] },
  },
  {
    id: "p2-l9",
    period: 2,
    periodId: "p2",
    title: "Vox in via",
    objective: "Lire une micro-scène de rumeur et repérer qui croit, qui craint, qui fuit.",
    lessonPoint: "Je lis par blocs de sens et non mot à mot isolé.",
    canDo: ["Je reconnais le champ lexical de la parole.", "Je repère qui croit la rumeur.", "Je traduis une phrase de rumeur."],
    lexicon: ["vox", "clamor", "rumor", "verbum", "audit", "credit", "timet", "dicit", "fugit", "manet"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p2-l9-t1", type: "singleChoice", prompt: "Quel mot renvoie à la rumeur ?", options: ["rumor", "domus", "forum", "ianua", "panis"], expected: "rumor", shuffle: true, points: 1 },
      { id: "p2-l9-t2", type: "matching", prompt: "Associe mot et sens.", pairs: [{ left: "vox", right: "voix" }, { left: "rumor", right: "rumeur" }, { left: "verbum", right: "mot / parole" }, { left: "timet", right: "craint" }], rightOptions: ["rumeur", "mot / parole", "craint", "voix"], expected: { "vox": "voix", "rumor": "rumeur", "verbum": "mot / parole", "timet": "craint" }, points: 1 },
      { id: "p2-l9-t3", type: "singleChoice", prompt: "Mini-texte : « Marcus rumorem audit et credit. » Qui croit la rumeur ?", options: ["Marcus", "Livia", "Titus", "Niger", "la prêtresse"], expected: "Marcus", shuffle: true, points: 1 },
      { id: "p2-l9-t4", type: "multipleChoice", prompt: "Traductions recevables de « Marcus rumorem audit ».", options: ["Marcus entend la rumeur", "Marcus entend un bruit qui court", "Marcus voit la rumeur", "Marcus écoute la rumeur", "Marcus écrit la rumeur"], expected: ["Marcus entend la rumeur", "Marcus entend un bruit qui court", "Marcus écoute la rumeur"], shuffle: true, points: 1 },
      { id: "p2-l9-t5", type: "singleChoice", prompt: "Dans « Livia rumorem timet », qui a peur ?", options: ["Livia", "rumorem", "timet", "Marcus", "vox"], expected: "Livia", shuffle: true, points: 1 },
      { id: "p2-l9-t6", type: "singleChoice", prompt: "Qui fuit et qui reste dans le micro-récit ?", options: ["Titus fuit, Marcus manet", "Marcus fuit, Titus manet", "Tout le monde fuit", "Personne ne bouge", "Niger fuit, Livia manet"], expected: "Titus fuit, Marcus manet", shuffle: true, points: 1, feedback: "Relis les verbes fugit et manet." },
      { id: "p2-l9-t7", type: "multipleChoice", prompt: "Quels mots appartiennent au champ de la parole ?", options: ["vox", "rumor", "verbum", "dicit", "hortus"], expected: ["vox", "rumor", "verbum", "dicit"], shuffle: true, points: 1 },
    ],
    production: [
      { id: "p2-l9-p1", type: "textInput", prompt: "Micro-version : vox in via manet", expected: "la voix reste dans la rue", acceptedAnswers: ["la voix reste dans la rue", "la rumeur reste dans la rue", "la parole reste dans la rue"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["la voix reste dans la rue", "la rumeur reste dans la rue", "la parole reste dans la rue"] }, points: 1 },
      { id: "p2-l9-p2", type: "textInput", prompt: "Micro-thème : Le garçon croit la rumeur.", expected: "Puer rumorem credit", acceptedAnswers: ["Puer rumorem credit", "Rumorem puer credit"], answerConfig: { type: "one-of", language: "latin", accepted: ["Puer rumorem credit", "Rumorem puer credit"] }, points: 1 },
      { id: "p2-l9-p3", type: "textInput", prompt: "Culture : rumor est…", expected: "une rumeur", acceptedAnswers: ["une rumeur", "un bruit qui court", "un bruit public"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["une rumeur", "un bruit qui court", "un bruit public"] }, points: 1 },
    ],
    summary: { retains: ["Le contexte oriente le sens de verbum, vox, rumor.", "Je lis la scène par ensembles de mots."], cahier: ["Marcus rumorem audit", "Livia rumorem timet"], keywords: ["rumeur", "voix", "lecture suivie"] },
    meta: { status: "ready", tags: ["p2-l9", "rumeur", "vox"] },
  },
  {
    id: "p2-l10",
    period: 2,
    periodId: "p2",
    title: "Petite fabula de Discordia",
    objective: "Lire un mini-récit mythologique simple et relier action, cause et effet.",
    lessonPoint: "Un petit récit mythologique se lit comme une scène : qui fait quoi, et pourquoi.",
    canDo: ["Je reconnais des mots du mythe de Discordia.", "Je repère l’action déclencheuse.", "Je traduis une phrase mythologique courte."],
    lexicon: ["dea", "malum", "aurum", "pulcher", "irata", "intrat", "iacit", "fugit", "turbat", "ridet"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p2-l10-t1", type: "singleChoice", prompt: "Quel mot appartient clairement au récit mythologique ?", options: ["dea", "taberna", "pistor", "insula", "vicinus"], expected: "dea", shuffle: true, points: 1 },
      { id: "p2-l10-t2", type: "matching", prompt: "Associe mot et sens.", pairs: [{ left: "dea", right: "déesse" }, { left: "malum", right: "pomme" }, { left: "aurum", right: "or" }, { left: "iacit", right: "jette" }], rightOptions: ["or", "déesse", "jette", "pomme"], expected: { "dea": "déesse", "malum": "pomme", "aurum": "or", "iacit": "jette" }, points: 1 },
      { id: "p2-l10-t3", type: "singleChoice", prompt: "Dans le récit, qui jette l’objet ?", options: ["dea irata", "Flavia", "Marcus", "Niger", "sacerdos"], expected: "dea irata", shuffle: true, points: 1 },
      { id: "p2-l10-t4", type: "multipleChoice", prompt: "Traductions recevables de « dea irata malum iacit ».", options: ["La déesse en colère jette la pomme", "La déesse fâchée lance la pomme", "La pomme jette la déesse", "La déesse irrite la pomme", "La déesse en colère projette la pomme"], expected: ["La déesse en colère jette la pomme", "La déesse fâchée lance la pomme", "La déesse en colère projette la pomme"], shuffle: true, points: 1 },
      { id: "p2-l10-t5", type: "singleChoice", prompt: "Quel mot dit la colère ?", options: ["irata", "pulcher", "aurum", "ridet", "fugit"], expected: "irata", shuffle: true, points: 1 },
      { id: "p2-l10-t6", type: "singleChoice", prompt: "Pourquoi le trouble commence-t-il dans la fabula ?", options: ["Parce que la déesse jette la pomme", "Parce que Marcus fuit", "Parce que Niger aboie", "Parce que Titus écrit", "Parce que le forum ferme"], expected: "Parce que la déesse jette la pomme", shuffle: true, points: 1, feedback: "Cherche l’action déclencheuse dans le verbe." },
      { id: "p2-l10-t7", type: "multipleChoice", prompt: "Quels mots appartiennent à l’histoire de Discordia ?", options: ["dea", "malum", "aurum", "turbat", "mercator"], expected: ["dea", "malum", "aurum", "turbat"], shuffle: true, points: 1 },
    ],
    production: [
      { id: "p2-l10-p1", type: "textInput", prompt: "Micro-version : Discordia ridet", expected: "discordia rit", acceptedAnswers: ["discordia rit", "discordia sourit"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["discordia rit", "discordia sourit"] }, points: 1 },
      { id: "p2-l10-p2", type: "textInput", prompt: "Micro-thème : La déesse jette la pomme.", expected: "Dea malum iacit", acceptedAnswers: ["Dea malum iacit", "Malum dea iacit"], answerConfig: { type: "one-of", language: "latin", accepted: ["Dea malum iacit", "Malum dea iacit"] }, points: 1 },
      { id: "p2-l10-p3", type: "textInput", prompt: "Culture : la pomme de discorde provoque…", expected: "un conflit", acceptedAnswers: ["un conflit", "la discorde", "un trouble"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["un conflit", "la discorde", "un trouble"] }, points: 1 },
    ],
    summary: { retains: ["Le mythe aide à comprendre l’intrigue du quartier.", "Je lis le récit avec des actions simples bien repérées."], cahier: ["dea irata malum iacit", "Discordia ridet"], keywords: ["Discordia", "mythe", "pomme", "cause"] },
    meta: { status: "ready", tags: ["p2-l10", "mythe", "discordia"] },
  },
  {
    id: "p2-l11",
    period: 2,
    periodId: "p2",
    title: "Dans le temple de Minerve",
    objective: "Lire une scène religieuse simple pour comprendre la recherche de conseil des habitants.",
    lessonPoint: "Les noms de dieux font partie du sens du texte.",
    canDo: ["Je reconnais Minerva, Iuno, Venus.", "Je repère qui entre dans le temple.", "Je traduis une phrase religieuse simple."],
    lexicon: ["Minerva", "Iuno", "Venus", "templum", "dea", "donum", "orat", "stat", "intrat", "spectat"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p2-l11-t1", type: "singleChoice", prompt: "Quel nom est celui d’une déesse romaine ?", options: ["Minerva", "Marcus", "Niger", "Lucius", "Sextus"], expected: "Minerva", shuffle: true, points: 1 },
      { id: "p2-l11-t2", type: "matching", prompt: "Associe mot et sens.", pairs: [{ left: "templum", right: "temple" }, { left: "dea", right: "déesse" }, { left: "orat", right: "prie" }, { left: "donum", right: "offrande" }], rightOptions: ["offrande", "temple", "déesse", "prie"], expected: { "templum": "temple", "dea": "déesse", "orat": "prie", "donum": "offrande" }, points: 1 },
      { id: "p2-l11-t3", type: "singleChoice", prompt: "Mini-scène : « Flavia in templum intrat et deam orat. » Qui entre dans le temple ?", options: ["Flavia", "Marcus", "Niger", "Iuno", "Sextus"], expected: "Flavia", shuffle: true, points: 1 },
      { id: "p2-l11-t4", type: "multipleChoice", prompt: "Traductions recevables de « Flavia deam orat ».", options: ["Flavia prie la déesse", "Flavia adresse une prière à la déesse", "La déesse prie Flavia", "Flavia parle à la déesse", "Flavia regarde la déesse en silence"], expected: ["Flavia prie la déesse", "Flavia adresse une prière à la déesse", "Flavia parle à la déesse"], shuffle: true, points: 1 },
      { id: "p2-l11-t5", type: "singleChoice", prompt: "Quel mot désigne le temple ?", options: ["templum", "forum", "taberna", "domus", "murus"], expected: "templum", shuffle: true, points: 1 },
      { id: "p2-l11-t6", type: "singleChoice", prompt: "Que demandent les habitants à Minerve ?", options: ["du conseil", "du pain", "une course", "un chien", "une boutique"], expected: "du conseil", shuffle: true, points: 1, feedback: "Le contexte religieux oriente la lecture." },
      { id: "p2-l11-t7", type: "multipleChoice", prompt: "Quels mots appartiennent au monde religieux ?", options: ["dea", "templum", "donum", "orat", "taberna"], expected: ["dea", "templum", "donum", "orat"], shuffle: true, points: 1 },
    ],
    production: [
      { id: "p2-l11-p1", type: "textInput", prompt: "Micro-version : Marcus in templo stat", expected: "marcus se tient dans le temple", acceptedAnswers: ["marcus se tient dans le temple", "marcus est dans le temple", "marcus reste dans le temple"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["marcus se tient dans le temple", "marcus est dans le temple", "marcus reste dans le temple"] }, points: 1 },
      { id: "p2-l11-p2", type: "textInput", prompt: "Micro-thème : La jeune fille regarde la déesse.", expected: "Puella deam spectat", acceptedAnswers: ["Puella deam spectat", "Deam puella spectat"], answerConfig: { type: "one-of", language: "latin", accepted: ["Puella deam spectat", "Deam puella spectat"] }, points: 1 },
      { id: "p2-l11-p3", type: "textInput", prompt: "Culture : Minerve est une déesse de…", expected: "la sagesse", acceptedAnswers: ["la sagesse", "l'intelligence", "la stratégie"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["la sagesse", "l'intelligence", "la stratégie"] }, points: 1 },
    ],
    summary: { retains: ["Les dieux romains éclairent le monde du texte.", "Le vocabulaire religieux n’est pas un décor vide."], cahier: ["Flavia deam orat", "Marcus in templo stat"], keywords: ["Minerva", "templum", "religion", "conseil"] },
    meta: { status: "ready", tags: ["p2-l11", "temple", "minerve"] },
  },
  {
    id: "p2-l12",
    period: 2,
    periodId: "p2",
    title: "Première conclusion",
    objective: "Synthétiser les indices de l’enquête en combinant lexique, formes et contexte.",
    lessonPoint: "Je comprends mieux un texte simple quand je relie mots, personnages et actions.",
    canDo: ["Je repère l’indice principal d’un texte court.", "Je juge la fiabilité d’un témoin.", "Je traduis une phrase de conclusion d’enquête."],
    lexicon: ["indicium", "verbum", "testis", "dea", "via", "forum", "domus", "scribit", "dicit", "turbat"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p2-l12-t1", type: "singleChoice", prompt: "Quel mot signifie « indice » ?", options: ["indicium", "testis", "verbum", "forum", "domus"], expected: "indicium", shuffle: true, points: 1 },
      { id: "p2-l12-t2", type: "matching", prompt: "Associe mot et sens d’enquête.", pairs: [{ left: "indicium", right: "indice" }, { left: "testis", right: "témoin" }, { left: "verbum", right: "mot / parole" }, { left: "turbat", right: "trouble" }], rightOptions: ["mot / parole", "trouble", "indice", "témoin"], expected: { "indicium": "indice", "testis": "témoin", "verbum": "mot / parole", "turbat": "trouble" }, points: 1 },
      { id: "p2-l12-t3", type: "singleChoice", prompt: "Mini-texte : « In muro indicium est; testis verum dicit. » Quel est l’indice principal ?", options: ["l’inscription sur le mur", "la boutique", "le pain", "le chien", "la fontaine"], expected: "l’inscription sur le mur", shuffle: true, points: 1 },
      { id: "p2-l12-t4", type: "multipleChoice", prompt: "Traductions recevables de « verbum Discordiae turbationem parat ».", options: ["La parole de Discordia prépare le trouble", "Le mot de Discordia prépare la perturbation", "Discordia calme le quartier", "Le propos de Discordia provoque le désordre", "Le témoin écrit un mot"], expected: ["La parole de Discordia prépare le trouble", "Le mot de Discordia prépare la perturbation", "Le propos de Discordia provoque le désordre"], shuffle: true, points: 1 },
      { id: "p2-l12-t5", type: "singleChoice", prompt: "Quel témoin paraît le plus fiable dans la scène ?", options: ["la vieille prêtresse", "Sextus", "Marcus", "Niger", "personne"], expected: "la vieille prêtresse", shuffle: true, points: 1 },
      { id: "p2-l12-t6", type: "singleChoice", prompt: "Que sait-on désormais avec certitude ?", options: ["La discorde est liée à des messages manipulés", "Niger est coupable", "Le forum est fermé", "Marcus ment toujours", "Il n’y a aucun indice"], expected: "La discorde est liée à des messages manipulés", shuffle: true, points: 1, feedback: "Relie les indices, les témoins et les verbes de parole." },
      { id: "p2-l12-t7", type: "multipleChoice", prompt: "Quels mots appartiennent à l’enquête ?", options: ["indicium", "testis", "verbum", "dicit", "panis"], expected: ["indicium", "testis", "verbum", "dicit"], shuffle: true, points: 1 },
    ],
    production: [
      { id: "p2-l12-p1", type: "textInput", prompt: "Micro-version : testis verum dicit", expected: "le témoin dit la vérité", acceptedAnswers: ["le témoin dit la vérité", "un témoin dit la vérité", "le témoin dit le vrai"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["le témoin dit la vérité", "un témoin dit la vérité", "le témoin dit le vrai"] }, points: 1 },
      { id: "p2-l12-p2", type: "textInput", prompt: "Micro-thème : L’indice trouble les habitants.", expected: "Indicium incolas turbat", acceptedAnswers: ["Indicium incolas turbat", "Incolas indicium turbat"], answerConfig: { type: "one-of", language: "latin", accepted: ["Indicium incolas turbat", "Incolas indicium turbat"] }, points: 1 },
      { id: "p2-l12-p3", type: "textInput", prompt: "Culture : enquêter dans une ville antique est…", expected: "possible mais difficile", acceptedAnswers: ["possible mais difficile", "possible avec des témoins", "possible grâce aux indices"], answerConfig: { type: "translation-segment", language: "fr", accepted: ["possible mais difficile", "possible avec des témoins", "possible grâce aux indices"] }, points: 1 },
    ],
    summary: { retains: ["Je relie mots, personnages, actions et cadre pour comprendre un texte simple.", "Une enquête se lit avec méthode : verbe, témoin, indice."], cahier: ["testis verum dicit", "indicium incolas turbat"], keywords: ["indice", "témoignage", "Discordia", "synthèse"] },
    meta: { status: "ready", tags: ["p2-l12", "synthese", "enquete"] },
  },
  {
    id: "p3-l11",
    period: 3,
    periodId: "p3",
    title: "Les dieux arrivent",
    objective: "Reconnaître quelques dieux et déesses dans des phrases courtes accessibles.",
    lessonPoint: "Je repère qui est qui dans une scène divine simple.",
    canDo: [
      "Je reconnais Venus, Minerva, Iuno et Iuppiter.",
      "Je comprends une phrase attributive simple.",
      "Je traduis des mini-phrases mythologiques.",
    ],
    lexicon: ["Venus", "Minerva", "Iuno", "Iuppiter", "pulchra", "irata", "templum"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p3-l11-t1", type: "singleChoice", prompt: "Dans la scène, qui est une déesse ?", options: ["Venus", "Iuppiter", "Paris"], expected: "Venus", points: 1 },
      { id: "p3-l11-t2", type: "singleChoice", prompt: "Dans « Venus pulchra est », que signifie pulchra ?", options: ["belle", "en colère", "forte"], expected: "belle", points: 1 },
      { id: "p3-l11-t3", type: "multipleChoice", prompt: "Sélectionne les noms de dieux/déesses de la leçon.", options: ["Minerva", "Iuno", "Iuppiter", "Davus"], expected: ["Minerva", "Iuno", "Iuppiter"], points: 1 },
      {
        id: "p3-l11-t4",
        type: "matching",
        prompt: "Associe nom divin et information.",
        pairs: [
          { left: "Venus", right: "dea" },
          { left: "Iuppiter", right: "deus" },
          { left: "Minerva", right: "dea" },
        ],
        rightOptions: ["deus", "dea"],
        expected: { Venus: "dea", Iuppiter: "deus", Minerva: "dea" },
        points: 1,
      },
      { id: "p3-l11-t5", type: "singleChoice", prompt: "Dans « Iuno irata est », Iuno est :", options: ["en colère", "heureuse", "fatiguée"], expected: "en colère", points: 1 },
      { id: "p3-l11-t6", type: "ordering", prompt: "Remets la phrase :", options: ["Venus", "pulchra", "est"], expected: ["Venus", "pulchra", "est"], points: 1 },
      { id: "p3-l11-t7", type: "textInput", prompt: "Écris en latin : « Junon ».", expected: "iuno", points: 1 },
    ],
    production: [
      { id: "p3-l11-p1", type: "textInput", prompt: "Traduis en français : Venus pulchra est", expected: "vénus est belle", answerConfig: { type: "translation-segment", language: "fr", accepted: ["vénus est belle", "venus est belle"] }, points: 1 },
      { id: "p3-l11-p2", type: "textInput", prompt: "Traduis en français : Minerva templum videt", expected: "minerve voit le temple", answerConfig: { type: "translation-segment", language: "fr", accepted: ["minerve voit le temple", "minerva voit le temple"] }, points: 1 },
      { id: "p3-l11-p3", type: "textInput", prompt: "Traduis en latin : Junon est en colère", expected: "iuno irata est", answerConfig: { type: "latin-expression", language: "latin", expected: "iuno irata est" }, points: 1 },
    ],
    summary: {
      retains: ["Quelques noms divins reviennent souvent dans les récits.", "Une phrase attributive simple reste facile à lire."],
      cahier: ["Venus pulchra est", "Iuno irata est"],
      keywords: ["dieux", "déesses", "venus", "iuno"],
    },
    meta: { status: "ready", tags: ["mythologie", "dieux", "p3-l11"] },
  },
  {
    id: "p3-l12",
    period: 3,
    periodId: "p3",
    title: "Le mariage de Pélée et Thétis",
    objective: "Comprendre un mini-passage mythologique très court autour d’un mariage divin.",
    lessonPoint: "Je lis une mini-scène mythologique sans entrer dans des détails compliqués.",
    canDo: [
      "Je repère qui vient à la fête.",
      "Je comprends qui n’est pas invité.",
      "Je résume une scène en une phrase.",
    ],
    lexicon: ["nuptiae", "dei", "Discordia", "venit", "non invitata", "cena"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p3-l12-t1", type: "singleChoice", prompt: "Dans la scène, à quoi viennent les dieux ?", options: ["aux noces", "au combat", "au forum"], expected: "aux noces", points: 1 },
      { id: "p3-l12-t2", type: "singleChoice", prompt: "Qui n’est pas invitée ?", options: ["Discordia", "Venus", "Minerva"], expected: "Discordia", points: 1 },
      { id: "p3-l12-t3", type: "multipleChoice", prompt: "Sélectionne les informations du passage.", options: ["Les dieux viennent", "Discordia n’est pas invitée", "Paris dort", "Un banquet a lieu"], expected: ["Les dieux viennent", "Discordia n’est pas invitée", "Un banquet a lieu"], points: 1 },
      {
        id: "p3-l12-t4",
        type: "matching",
        prompt: "Associe élément et rôle.",
        pairs: [
          { left: "dei", right: "invités" },
          { left: "Discordia", right: "non invitée" },
          { left: "cena", right: "banquet" },
        ],
        rightOptions: ["banquet", "invités", "non invitée"],
        expected: { dei: "invités", Discordia: "non invitée", cena: "banquet" },
        points: 1,
      },
      { id: "p3-l12-t5", type: "singleChoice", prompt: "« Dei cenam habent » signifie :", options: ["Les dieux ont un banquet", "Les dieux fuient", "Les dieux perdent un cadeau"], expected: "Les dieux ont un banquet", points: 1 },
      { id: "p3-l12-t6", type: "ordering", prompt: "Ordonne la mini-scène : invitation → venue → tension.", options: ["dei veniunt", "cena est", "Discordia venit"], expected: ["cena est", "dei veniunt", "Discordia venit"], points: 1 },
      { id: "p3-l12-t7", type: "textInput", prompt: "Écris en latin : « dieux ».", expected: "dei", points: 1 },
    ],
    production: [
      { id: "p3-l12-p1", type: "textInput", prompt: "Traduis en français : Discordia ad nuptias venit", expected: "discorde vient aux noces", answerConfig: { type: "translation-segment", language: "fr", accepted: ["discorde vient aux noces", "discordia vient aux noces"] }, points: 1 },
      { id: "p3-l12-p2", type: "textInput", prompt: "Traduis en français : Dei cenam habent", expected: "les dieux ont un banquet", answerConfig: { type: "translation-segment", language: "fr", accepted: ["les dieux ont un banquet", "les dieux ont le repas", "les dieux font un banquet"] }, points: 1 },
      { id: "p3-l12-p3", type: "textInput", prompt: "Traduis en latin : les dieux voient le cadeau", expected: "dei donum vident", answerConfig: { type: "latin-expression", language: "latin", expected: "dei donum vident" }, points: 1 },
    ],
    summary: {
      retains: ["Je peux suivre une mini-scène mythologique de 2-3 idées.", "Discordia n’est pas invitée : c’est la tension de départ."],
      cahier: ["Discordia ad nuptias venit", "Dei cenam habent"],
      keywords: ["nuptiae", "discordia", "dei", "banquet"],
    },
    meta: { status: "ready", tags: ["mythe", "mariage", "p3-l12"] },
  },
  {
    id: "p3-l13",
    period: 3,
    periodId: "p3",
    title: "La pomme de Discorde",
    objective: "Comprendre une scène centrée sur un objet mythologique.",
    lessonPoint: "L’objet central de la scène aide à relier les actions.",
    canDo: [
      "Je repère qui lance l’objet.",
      "Je repère qui regarde l’objet.",
      "Je comprends à qui l’objet est destiné.",
    ],
    lexicon: ["malum aureum", "dea", "deae", "pulcherrima", "iacit", "spectant"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p3-l13-t1", type: "singleChoice", prompt: "Quel objet est au centre de la scène ?", options: ["malum aureum", "liber novus", "corona magna"], expected: "malum aureum", points: 1 },
      { id: "p3-l13-t2", type: "singleChoice", prompt: "Qui lance la pomme ?", options: ["Discordia", "Venus", "Paris"], expected: "Discordia", points: 1 },
      { id: "p3-l13-t3", type: "singleChoice", prompt: "Dans « Deae malum spectant », qui regarde la pomme ?", options: ["Deae", "malum", "Discordia"], expected: "Deae", points: 1 },
      { id: "p3-l13-t4", type: "multipleChoice", prompt: "Sélectionne les mots de la scène.", options: ["malum", "aureum", "pulcherrima", "porta"], expected: ["malum", "aureum", "pulcherrima"], points: 1 },
      {
        id: "p3-l13-t5",
        type: "matching",
        prompt: "Associe phrase et sens.",
        pairs: [
          { left: "Discordia malum iacit", right: "Discorde lance la pomme" },
          { left: "Deae malum spectant", right: "Les déesses regardent la pomme" },
          { left: "Malum pulcherrimae est", right: "La pomme est pour la plus belle" },
        ],
        rightOptions: ["La pomme est pour la plus belle", "Les déesses regardent la pomme", "Discorde lance la pomme"],
        expected: { "Discordia malum iacit": "Discorde lance la pomme", "Deae malum spectant": "Les déesses regardent la pomme", "Malum pulcherrimae est": "La pomme est pour la plus belle" },
        points: 1,
      },
      { id: "p3-l13-t6", type: "ordering", prompt: "Ordonne la logique : lancer → regarder → discuter.", options: ["iacit", "spectant", "disputant"], expected: ["iacit", "spectant", "disputant"], points: 1 },
      { id: "p3-l13-t7", type: "textInput", prompt: "Écris le groupe latin : « pomme d’or ».", expected: "malum aureum", points: 1 },
    ],
    production: [
      { id: "p3-l13-p1", type: "textInput", prompt: "Traduis en français : Discordia malum aureum iacit", expected: "discorde lance la pomme d'or", answerConfig: { type: "translation-segment", language: "fr", accepted: ["discorde lance la pomme d'or", "discordia lance la pomme d'or", "discorde jette la pomme d'or"] }, points: 1 },
      { id: "p3-l13-p2", type: "textInput", prompt: "Traduis en français : Deae malum spectant", expected: "les déesses regardent la pomme", answerConfig: { type: "translation-segment", language: "fr", accepted: ["les déesses regardent la pomme", "les deesses regardent la pomme"] }, points: 1 },
      { id: "p3-l13-p3", type: "textInput", prompt: "Traduis en latin : Vénus voit la pomme", expected: "venus malum videt", answerConfig: { type: "latin-expression", language: "latin", expected: "venus malum videt" }, points: 1 },
    ],
    summary: {
      retains: ["La scène tourne autour du malum aureum.", "Je repère facilement qui agit sur l’objet."],
      cahier: ["Discordia malum aureum iacit", "Deae malum spectant"],
      keywords: ["malum aureum", "deae", "pulcherrima", "discordia"],
    },
    meta: { status: "ready", tags: ["mythe", "pomme", "p3-l13"] },
  },
  {
    id: "p3-l14",
    period: 3,
    periodId: "p3",
    title: "Paris juge",
    objective: "Suivre une scène simple de jugement mythologique.",
    lessonPoint: "Je comprends qui juge et qui intervient dans la scène.",
    canDo: [
      "Je reconnais la phrase clé Paris arbiter est.",
      "Je repère qui parle et qui regarde.",
      "Je relie la déesse au bon rôle dans la scène.",
    ],
    lexicon: ["Paris", "arbiter", "est", "Venus", "Iuno", "dicit", "videt", "donum"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p3-l14-t1", type: "singleChoice", prompt: "Dans la scène, qui est juge ?", options: ["Paris", "Iuppiter", "Davus"], expected: "Paris", points: 1 },
      { id: "p3-l14-t2", type: "singleChoice", prompt: "« Paris arbiter est » signifie :", options: ["Paris est juge", "Paris est roi", "Paris est poète"], expected: "Paris est juge", points: 1 },
      { id: "p3-l14-t3", type: "multipleChoice", prompt: "Sélectionne les personnages présents dans cette scène.", options: ["Paris", "Venus", "Iuno", "Romulus"], expected: ["Paris", "Venus", "Iuno"], points: 1 },
      {
        id: "p3-l14-t4",
        type: "matching",
        prompt: "Associe phrase et sens.",
        pairs: [
          { left: "Paris arbiter est", right: "Paris est juge" },
          { left: "Venus donum habet", right: "Vénus a un cadeau" },
          { left: "Iuno dicit", right: "Junon parle" },
        ],
        rightOptions: ["Junon parle", "Paris est juge", "Vénus a un cadeau"],
        expected: { "Paris arbiter est": "Paris est juge", "Venus donum habet": "Vénus a un cadeau", "Iuno dicit": "Junon parle" },
        points: 1,
      },
      { id: "p3-l14-t5", type: "singleChoice", prompt: "Qui est impliquée comme déesse dans la scène de jugement ?", options: ["Iuno", "Paula", "Lupa"], expected: "Iuno", points: 1 },
      { id: "p3-l14-t6", type: "ordering", prompt: "Ordonne la scène : juge → parole → décision.", options: ["Paris arbiter est", "Iuno dicit", "Paris videt"], expected: ["Paris arbiter est", "Iuno dicit", "Paris videt"], points: 1 },
      { id: "p3-l14-t7", type: "textInput", prompt: "Écris en latin : « juge » (mot de la leçon).", expected: "arbiter", points: 1 },
    ],
    production: [
      { id: "p3-l14-p1", type: "textInput", prompt: "Traduis en français : Paris arbiter est", expected: "paris est juge", answerConfig: { type: "translation-segment", language: "fr", accepted: ["paris est juge"] }, points: 1 },
      { id: "p3-l14-p2", type: "textInput", prompt: "Traduis en français : Venus donum habet", expected: "vénus a un cadeau", answerConfig: { type: "translation-segment", language: "fr", accepted: ["vénus a un cadeau", "venus a un cadeau"] }, points: 1 },
      { id: "p3-l14-p3", type: "textInput", prompt: "Traduis en latin : Paris voit Junon", expected: "paris iunonem videt", answerConfig: { type: "latin-expression", language: "latin", expected: "paris iunonem videt" }, points: 1 },
    ],
    summary: {
      retains: ["Paris arbiter est est la phrase clé de la scène.", "Je relie les personnages à leurs actions."],
      cahier: ["Paris arbiter est", "Venus donum habet"],
      keywords: ["paris", "arbiter", "iuno", "jugement"],
    },
    meta: { status: "ready", tags: ["jugement", "paris", "p3-l14"] },
  },
  {
    id: "p3-l15",
    period: 3,
    periodId: "p3",
    title: "Romulus et Remus",
    objective: "Comprendre une scène simple de la fondation de Rome.",
    lessonPoint: "Je lis une mini-scène culturelle sans surcharge grammaticale.",
    canDo: [
      "Je reconnais Romulus, Remus, lupa, flumen.",
      "Je repère qui protège les enfants.",
      "Je réponds à une question culturelle simple.",
    ],
    lexicon: ["Romulus", "Remus", "lupa", "flumen", "pueri", "servat", "urbem"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p3-l15-t1", type: "singleChoice", prompt: "Dans la scène, qui protège les enfants ?", options: ["lupa", "rex", "poeta"], expected: "lupa", points: 1 },
      { id: "p3-l15-t2", type: "singleChoice", prompt: "Quel mot signifie « fleuve » ?", options: ["flumen", "forum", "templum"], expected: "flumen", points: 1 },
      { id: "p3-l15-t3", type: "multipleChoice", prompt: "Sélectionne les personnages de la fondation de Rome.", options: ["Romulus", "Remus", "lupa", "Paris"], expected: ["Romulus", "Remus", "lupa"], points: 1 },
      {
        id: "p3-l15-t4",
        type: "matching",
        prompt: "Associe phrase et information.",
        pairs: [
          { left: "Lupa pueros servat", right: "protection" },
          { left: "Romulus urbem amat", right: "amour de la ville" },
          { left: "Remus flumen videt", right: "regard sur le fleuve" },
        ],
        rightOptions: ["amour de la ville", "protection", "regard sur le fleuve"],
        expected: { "Lupa pueros servat": "protection", "Romulus urbem amat": "amour de la ville", "Remus flumen videt": "regard sur le fleuve" },
        points: 1,
      },
      { id: "p3-l15-t5", type: "singleChoice", prompt: "Question culture : ces personnages sont liés à :", options: ["la fondation de Rome", "la guerre de Troie", "le banquet de Pélée"], expected: "la fondation de Rome", points: 1 },
      { id: "p3-l15-t6", type: "ordering", prompt: "Ordonne la mini-scène : protéger → grandir → fonder.", options: ["lupa servat", "pueri crescunt", "Roma est"], expected: ["lupa servat", "pueri crescunt", "Roma est"], points: 1 },
      { id: "p3-l15-t7", type: "textInput", prompt: "Écris en latin : « louve ».", expected: "lupa", points: 1 },
    ],
    production: [
      { id: "p3-l15-p1", type: "textInput", prompt: "Traduis en français : Lupa pueros servat", expected: "la louve protège les enfants", answerConfig: { type: "translation-segment", language: "fr", accepted: ["la louve protège les enfants", "la louve sauve les enfants"] }, points: 1 },
      { id: "p3-l15-p2", type: "textInput", prompt: "Traduis en français : Romulus urbem amat", expected: "romulus aime la ville", answerConfig: { type: "translation-segment", language: "fr", accepted: ["romulus aime la ville", "romulus aime rome"] }, points: 1 },
      { id: "p3-l15-p3", type: "textInput", prompt: "Traduis en latin : Remus voit le fleuve", expected: "remus flumen videt", answerConfig: { type: "latin-expression", language: "latin", expected: "remus flumen videt" }, points: 1 },
    ],
    summary: {
      retains: ["Romulus et Remus appartiennent à la mémoire de Rome.", "Une mini-scène culturelle reste lisible avec peu de mots."],
      cahier: ["Lupa pueros servat", "Remus flumen videt"],
      keywords: ["romulus", "remus", "lupa", "flumen", "rome"],
    },
    meta: { status: "ready", tags: ["rome", "fondation", "p3-l15"] },
  },
  {
    id: "p3-l16",
    period: 3,
    periodId: "p3",
    title: "Rome, forum, mur et porte",
    objective: "Comprendre de courtes scènes urbaines avec déplacement et localisation.",
    lessonPoint: "Je distingue in et ad dans des scènes de ville.",
    canDo: [
      "Je repère mouvement et position en ville.",
      "Je localise forum, murus, porta, via, templum.",
      "Je traduis une phrase urbaine simple.",
    ],
    lexicon: ["forum", "murus", "porta", "via", "templum", "cives", "ad", "in"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p3-l16-t1", type: "singleChoice", prompt: "Dans « Cives ad forum ambulant », ad indique :", options: ["vers", "dans", "avec"], expected: "vers", points: 1 },
      { id: "p3-l16-t2", type: "singleChoice", prompt: "Dans « Servus sub muro est », la phrase décrit :", options: ["une position", "un déplacement", "une comparaison"], expected: "une position", points: 1 },
      { id: "p3-l16-t3", type: "multipleChoice", prompt: "Sélectionne les lieux urbains de la leçon.", options: ["forum", "murus", "porta", "malum"], expected: ["forum", "murus", "porta"], points: 1 },
      {
        id: "p3-l16-t4",
        type: "matching",
        prompt: "Associe phrase et lecture correcte.",
        pairs: [
          { left: "Cives ad forum ambulant", right: "mouvement" },
          { left: "Servus sub muro est", right: "position" },
          { left: "Amici templum vident", right: "observation" },
        ],
        rightOptions: ["observation", "position", "mouvement"],
        expected: { "Cives ad forum ambulant": "mouvement", "Servus sub muro est": "position", "Amici templum vident": "observation" },
        points: 1,
      },
      { id: "p3-l16-t5", type: "singleChoice", prompt: "Quelle phrase contient in (position) ?", options: ["Servus in via est", "Cives ad forum ambulant", "Amici templum vident"], expected: "Servus in via est", points: 1 },
      { id: "p3-l16-t6", type: "ordering", prompt: "Remets la phrase urbaine :", options: ["amici", "templum", "vident"], expected: ["amici", "templum", "vident"], points: 1 },
      { id: "p3-l16-t7", type: "textInput", prompt: "Écris en latin : « porte (de ville) ».", expected: "porta", points: 1 },
    ],
    production: [
      { id: "p3-l16-p1", type: "textInput", prompt: "Traduis en français : Cives ad forum ambulant", expected: "les citoyens marchent vers le forum", answerConfig: { type: "translation-segment", language: "fr", accepted: ["les citoyens marchent vers le forum", "les citoyens vont au forum"] }, points: 1 },
      { id: "p3-l16-p2", type: "textInput", prompt: "Traduis en français : Servus sub muro est", expected: "le serviteur est sous le mur", answerConfig: { type: "translation-segment", language: "fr", accepted: ["le serviteur est sous le mur", "l'esclave est sous le mur"] }, points: 1 },
      { id: "p3-l16-p3", type: "textInput", prompt: "Traduis en latin : les amis voient le temple", expected: "amici templum vident", answerConfig: { type: "latin-expression", language: "latin", expected: "amici templum vident" }, points: 1 },
    ],
    summary: {
      retains: ["En ville, ad et in ne donnent pas la même information.", "Je relie facilement lieu, mouvement et action."],
      cahier: ["Cives ad forum ambulant", "Servus sub muro est", "Amici templum vident"],
      keywords: ["rome", "forum", "murus", "porta", "ad/in"],
    },
    meta: { status: "ready", tags: ["ville", "rome", "p3-l16"] },
  },
  {
    id: "p3-l17",
    period: 3,
    periodId: "p3",
    title: "Hannibal ! Hannibal !",
    objective: "Comprendre une micro-scène historique simple autour d’Hannibal et de Rome.",
    lessonPoint: "Je relie des mots-clés historiques à des phrases courtes en latin.",
    canDo: [
      "Je repère qui menace Rome dans la scène.",
      "Je comprends un cri d’alerte et ses acteurs.",
      "Je traduis des phrases courtes de contexte historique.",
    ],
    lexicon: ["Hannibal", "Roma", "milites", "murus", "porta", "clamat", "vident"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p3-l17-t1", type: "singleChoice", prompt: "Dans la scène, qui approche de Rome ?", options: ["Hannibal", "Crispus", "Davus"], expected: "Hannibal", points: 1 },
      { id: "p3-l17-t2", type: "singleChoice", prompt: "« Roma murum habet » signifie que Rome a :", options: ["un mur", "un marché", "un banquet"], expected: "un mur", points: 1 },
      { id: "p3-l17-t3", type: "multipleChoice", prompt: "Choisis les mots liés à la défense de la ville.", options: ["milites", "murus", "porta", "corona"], expected: ["milites", "murus", "porta"], points: 1 },
      {
        id: "p3-l17-t4",
        type: "matching",
        prompt: "Associe chaque phrase à son idée.",
        pairs: [
          { left: "Milites murum servant", right: "défendre" },
          { left: "Populus clamat", right: "alerter" },
          { left: "Hannibal ad portam venit", right: "approcher" },
        ],
        rightOptions: ["approcher", "défendre", "alerter"],
        expected: { "Milites murum servant": "défendre", "Populus clamat": "alerter", "Hannibal ad portam venit": "approcher" },
        points: 1,
      },
      { id: "p3-l17-t5", type: "ordering", prompt: "Remets la phrase d’alerte en ordre :", options: ["milites", "Hannibal", "vident"], expected: ["milites", "Hannibal", "vident"], points: 1 },
      { id: "p3-l17-t6", type: "singleChoice", prompt: "Piège d’ordre : « Portam milites servant » veut dire :", options: ["Les soldats gardent la porte", "La porte garde les soldats", "Les soldats voient la porte"], expected: "Les soldats gardent la porte", points: 1 },
      { id: "p3-l17-t7", type: "textInput", prompt: "Écris en latin : « Rome ».", expected: "Roma", points: 1 },
    ],
    production: [
      { id: "p3-l17-p1", type: "textInput", prompt: "Traduis en français : Milites murum servant", expected: "les soldats gardent le mur", answerConfig: { type: "translation-segment", language: "fr", accepted: ["les soldats gardent le mur", "les soldats défendent le mur", "des soldats gardent le mur"] }, points: 1 },
      { id: "p3-l17-p2", type: "textInput", prompt: "Traduis en français : Hannibal ad portam venit", expected: "hannibal vient vers la porte", answerConfig: { type: "translation-segment", language: "fr", accepted: ["hannibal vient vers la porte", "hannibal arrive à la porte", "hannibal vient à la porte"] }, points: 1 },
      { id: "p3-l17-p3", type: "textInput", prompt: "Traduis en latin : les soldats voient Hannibal", expected: "milites Hannibalem vident", answerConfig: { type: "latin-expression", language: "latin", expected: "milites Hannibalem vident" }, points: 1 },
    ],
    summary: {
      retains: ["Un mini-récit historique reste lisible avec un lexique ciblé.", "Je garde mes repères sujet/verbe/complément même sous l’effet de l’alerte."],
      cahier: ["Milites murum servant", "Hannibal ad portam venit", "Milites Hannibalem vident"],
      keywords: ["hannibal", "rome", "alerte", "milites", "porta"],
    },
    meta: { status: "ready", tags: ["histoire", "rome", "p3-l17"] },
  },
  {
    id: "p3-l18",
    period: 3,
    periodId: "p3",
    title: "César écrit",
    objective: "Comprendre des phrases simples autour de César auteur et chef militaire.",
    lessonPoint: "Je lis des phrases courtes de type historique sans perdre le sens global.",
    canDo: [
      "Je repère qui écrit et qui lit.",
      "Je comprends le mot Gallia dans un contexte simple.",
      "Je traduis une phrase historique courte.",
    ],
    lexicon: ["Caesar", "scribit", "liber", "Gallia", "milites", "legunt", "epistula"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p3-l18-t1", type: "singleChoice", prompt: "Dans « Caesar librum scribit », qui écrit ?", options: ["Caesar", "librum", "Gallia"], expected: "Caesar", points: 1 },
      { id: "p3-l18-t2", type: "singleChoice", prompt: "Que signifie scribit ?", options: ["écrit", "lit", "voit"], expected: "écrit", points: 1 },
      { id: "p3-l18-t3", type: "multipleChoice", prompt: "Choisis les mots liés à l’écriture et à la lecture.", options: ["scribit", "legunt", "liber", "murus"], expected: ["scribit", "legunt", "liber"], points: 1 },
      {
        id: "p3-l18-t4",
        type: "matching",
        prompt: "Associe la phrase à son action principale.",
        pairs: [
          { left: "Caesar epistulam scribit", right: "écrire" },
          { left: "Milites librum legunt", right: "lire" },
          { left: "Gallia magna est", right: "décrire" },
        ],
        rightOptions: ["décrire", "lire", "écrire"],
        expected: { "Caesar epistulam scribit": "écrire", "Milites librum legunt": "lire", "Gallia magna est": "décrire" },
        points: 1,
      },
      { id: "p3-l18-t5", type: "ordering", prompt: "Remets la phrase : Caesar / de Gallia / scribit.", options: ["Caesar", "de Gallia", "scribit"], expected: ["Caesar", "scribit", "de Gallia"], points: 1 },
      { id: "p3-l18-t6", type: "singleChoice", prompt: "Piège d’ordre : « Librum milites legunt » signifie :", options: ["Les soldats lisent le livre", "Le livre lit les soldats", "Les soldats écrivent le livre"], expected: "Les soldats lisent le livre", points: 1 },
      { id: "p3-l18-t7", type: "textInput", prompt: "Écris en latin : « César ».", expected: "Caesar", points: 1 },
    ],
    production: [
      { id: "p3-l18-p1", type: "textInput", prompt: "Traduis en français : Caesar epistulam scribit", expected: "césar écrit une lettre", answerConfig: { type: "translation-segment", language: "fr", accepted: ["césar écrit une lettre", "caesar écrit une lettre", "césar écrit la lettre"] }, points: 1 },
      { id: "p3-l18-p2", type: "textInput", prompt: "Traduis en français : Milites librum legunt", expected: "les soldats lisent le livre", answerConfig: { type: "translation-segment", language: "fr", accepted: ["les soldats lisent le livre", "des soldats lisent le livre", "les soldats lisent un livre"] }, points: 1 },
      { id: "p3-l18-p3", type: "textInput", prompt: "Traduis en latin : César voit la Gaule", expected: "Caesar Galliam videt", answerConfig: { type: "latin-expression", language: "latin", expected: "Caesar Galliam videt" }, points: 1 },
    ],
    summary: {
      retains: ["Le latin sert aussi à raconter l’histoire et à écrire.", "Je peux suivre une phrase historique courte sans me noyer."],
      cahier: ["Caesar epistulam scribit", "Milites librum legunt", "Caesar Galliam videt"],
      keywords: ["caesar", "scribit", "legunt", "gallia", "histoire"],
    },
    meta: { status: "ready", tags: ["histoire", "caesar", "p3-l18"] },
  },
  {
    id: "p3-l19",
    period: 3,
    periodId: "p3",
    title: "Le latin vit encore",
    objective: "Identifier des héritages latins simples dans le français d’aujourd’hui.",
    lessonPoint: "Je relie des mots latins connus à des mots français actuels.",
    canDo: [
      "Je reconnais des racines latines dans des mots français.",
      "Je distingue un mot hérité d’un faux ami.",
      "Je formule une phrase courte sur l’héritage du latin.",
    ],
    lexicon: ["via", "porta", "forum", "aqua", "liber", "civis", "nomen"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p3-l19-t1", type: "singleChoice", prompt: "Quel mot français vient le plus clairement de via ?", options: ["voie", "voix", "voir"], expected: "voie", points: 1 },
      { id: "p3-l19-t2", type: "singleChoice", prompt: "De porta, on retrouve en français :", options: ["porte", "porteur", "port"], expected: "porte", points: 1 },
      { id: "p3-l19-t3", type: "multipleChoice", prompt: "Sélectionne des héritages latins plausibles.", options: ["aquatique", "forum", "librairie", "météore"], expected: ["aquatique", "forum", "librairie"], points: 1 },
      {
        id: "p3-l19-t4",
        type: "matching",
        prompt: "Associe mot latin et mot français proche.",
        pairs: [
          { left: "aqua", right: "eau / aquatique" },
          { left: "liber", right: "livre" },
          { left: "nomen", right: "nom" },
        ],
        rightOptions: ["nom", "livre", "eau / aquatique"],
        expected: { aqua: "eau / aquatique", liber: "livre", nomen: "nom" },
        points: 1,
      },
      { id: "p3-l19-t5", type: "ordering", prompt: "Ordonne : latin → français → usage moderne", options: ["forum", "forum", "forum de discussion"], expected: ["forum", "forum", "forum de discussion"], points: 1 },
      { id: "p3-l19-t6", type: "singleChoice", prompt: "Dans la famille de civis, quel mot est le plus proche ?", options: ["civil", "cible", "civière"], expected: "civil", points: 1 },
      { id: "p3-l19-t7", type: "textInput", prompt: "Écris un dérivé français de aqua.", expected: "aquatique", points: 1 },
    ],
    production: [
      { id: "p3-l19-p1", type: "textInput", prompt: "Traduis en français : nomen", expected: "nom", answerConfig: { type: "translation-segment", language: "fr", accepted: ["nom", "le nom", "un nom"] }, points: 1 },
      { id: "p3-l19-p2", type: "textInput", prompt: "Traduis en français : civis", expected: "citoyen", answerConfig: { type: "translation-segment", language: "fr", accepted: ["citoyen", "le citoyen", "un citoyen"] }, points: 1 },
      { id: "p3-l19-p3", type: "textInput", prompt: "Traduis en latin : la porte", expected: "porta", answerConfig: { type: "latin-expression", language: "latin", expected: "porta" }, points: 1 },
    ],
    summary: {
      retains: ["Le latin reste présent dans beaucoup de mots français.", "Repérer une racine aide à comprendre un mot nouveau."],
      cahier: ["aqua → aquatique", "nomen → nom", "civis → citoyen"],
      keywords: ["héritage", "étymologie", "latin", "français", "racines"],
    },
    meta: { status: "ready", tags: ["culture", "héritage", "p3-l19"] },
  },
  {
    id: "p3-l20",
    period: 3,
    periodId: "p3",
    title: "Lire un mini-récit",
    objective: "Lire un mini-récit latin de 3 à 4 phrases et en extraire les informations explicites.",
    lessonPoint: "Je lis phrase par phrase pour reconstruire une petite histoire cohérente.",
    canDo: [
      "Je repère personnages, lieux et actions principales.",
      "Je réponds à des questions de compréhension explicite.",
      "Je traduis des phrases clés d’un mini-récit.",
    ],
    lexicon: ["in foro", "templum", "epistula", "portat", "videt", "ridet", "currit"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p3-l20-t1", type: "singleChoice", prompt: "Mini-récit : « Servus in foro est. Poeta epistulam portat. Dominus ridet. » Qui porte la lettre ?", options: ["poeta", "servus", "dominus"], expected: "poeta", points: 1 },
      { id: "p3-l20-t2", type: "singleChoice", prompt: "Dans ce mini-récit, où est le serviteur ?", options: ["in foro", "in horto", "ad templum"], expected: "in foro", points: 1 },
      { id: "p3-l20-t3", type: "multipleChoice", prompt: "Quelles informations sont explicites ?", options: ["Le poète porte une lettre", "Le maître rit", "Le serviteur court", "La lettre est dans le jardin"], expected: ["Le poète porte une lettre", "Le maître rit"], points: 1 },
      {
        id: "p3-l20-t4",
        type: "matching",
        prompt: "Associe phrase et information lue.",
        pairs: [
          { left: "Servus in foro est", right: "lieu" },
          { left: "Poeta epistulam portat", right: "action" },
          { left: "Dominus ridet", right: "réaction" },
        ],
        rightOptions: ["réaction", "lieu", "action"],
        expected: { "Servus in foro est": "lieu", "Poeta epistulam portat": "action", "Dominus ridet": "réaction" },
        points: 1,
      },
      { id: "p3-l20-t5", type: "singleChoice", prompt: "Piège d’ordre : « Epistulam poeta portat » signifie :", options: ["Le poète porte la lettre", "La lettre porte le poète", "Le poète lit la lettre"], expected: "Le poète porte la lettre", points: 1 },
      { id: "p3-l20-t6", type: "ordering", prompt: "Remets la phrase du récit en ordre :", options: ["dominus", "ridet"], expected: ["dominus", "ridet"], points: 1 },
      { id: "p3-l20-t7", type: "textInput", prompt: "Écris en latin : « lettre ».", expected: "epistula", points: 1 },
    ],
    production: [
      { id: "p3-l20-p1", type: "textInput", prompt: "Traduis en français : Servus in foro est", expected: "le serviteur est au forum", answerConfig: { type: "translation-segment", language: "fr", accepted: ["le serviteur est au forum", "l'esclave est au forum", "le serviteur est dans le forum"] }, points: 1 },
      { id: "p3-l20-p2", type: "textInput", prompt: "Traduis en français : Dominus ridet", expected: "le maître rit", answerConfig: { type: "translation-segment", language: "fr", accepted: ["le maître rit", "le maitre rit", "un maître rit"] }, points: 1 },
      { id: "p3-l20-p3", type: "textInput", prompt: "Traduis en latin : le poète voit le temple", expected: "poeta templum videt", answerConfig: { type: "latin-expression", language: "latin", expected: "poeta templum videt" }, points: 1 },
    ],
    summary: {
      retains: ["Je peux comprendre un mini-récit court si je collecte les infos explicites.", "Même avec un ordre varié, les fonctions restent lisibles."],
      cahier: ["Servus in foro est", "Poeta epistulam portat", "Dominus ridet"],
      keywords: ["mini-récit", "lecture", "forum", "epistula", "compréhension"],
    },
    meta: { status: "ready", tags: ["lecture", "mini-recits", "p3-l20"] },
  },
  {
    id: "p3-l21",
    period: 3,
    periodId: "p3",
    title: "Comparer deux traductions",
    objective: "Comparer deux traductions françaises d’une même phrase latine et choisir la plus juste.",
    lessonPoint: "Je justifie un choix de traduction à partir des formes latines.",
    canDo: [
      "Je distingue une traduction fidèle d’une traduction approximative.",
      "Je vérifie sujet, verbe, complément avant de choisir.",
      "Je corrige une traduction insuffisante.",
    ],
    lexicon: ["servus", "dominus", "amici", "templum", "vident", "vocat", "portat"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p3-l21-t1", type: "singleChoice", prompt: "Phrase : « Servus dominum vocat ». Quelle traduction est juste ?", options: ["Le serviteur appelle le maître", "Le maître appelle le serviteur", "Le serviteur voit le maître"], expected: "Le serviteur appelle le maître", points: 1 },
      { id: "p3-l21-t2", type: "singleChoice", prompt: "Phrase : « Amici templum vident ». Choisis la meilleure traduction.", options: ["Les amis voient le temple", "Le temple voit les amis", "Les amis portent le temple"], expected: "Les amis voient le temple", points: 1 },
      { id: "p3-l21-t3", type: "multipleChoice", prompt: "Quels critères t’aident à comparer deux traductions ?", options: ["Repérer le verbe", "Identifier le sujet", "Deviner au hasard", "Chercher le complément"], expected: ["Repérer le verbe", "Identifier le sujet", "Chercher le complément"], points: 1 },
      {
        id: "p3-l21-t4",
        type: "matching",
        prompt: "Associe la phrase latine à la traduction correcte.",
        pairs: [
          { left: "Dominus librum portat", right: "Le maître porte le livre" },
          { left: "Servi ad forum ambulant", right: "Les serviteurs vont vers le forum" },
          { left: "Puella rosam habet", right: "La jeune fille a une rose" },
        ],
        rightOptions: ["Le maître porte le livre", "La jeune fille a une rose", "Les serviteurs vont vers le forum"],
        expected: { "Dominus librum portat": "Le maître porte le livre", "Servi ad forum ambulant": "Les serviteurs vont vers le forum", "Puella rosam habet": "La jeune fille a une rose" },
        points: 1,
      },
      { id: "p3-l21-t5", type: "ordering", prompt: "Réordonne pour vérifier la traduction :", options: ["servus", "templum", "videt"], expected: ["servus", "videt", "templum"], points: 1 },
      { id: "p3-l21-t6", type: "singleChoice", prompt: "Piège : « Dominum servus vocat » signifie :", options: ["Le serviteur appelle le maître", "Le maître appelle le serviteur", "Le serviteur appelle le serviteur"], expected: "Le serviteur appelle le maître", points: 1 },
      { id: "p3-l21-t7", type: "textInput", prompt: "Écris le verbe de « Amici templum vident ».", expected: "vident", points: 1 },
    ],
    production: [
      { id: "p3-l21-p1", type: "textInput", prompt: "Traduis en français : Servi ad forum ambulant", expected: "les serviteurs marchent vers le forum", answerConfig: { type: "translation-segment", language: "fr", accepted: ["les serviteurs marchent vers le forum", "les serviteurs vont vers le forum", "des serviteurs marchent vers le forum"] }, points: 1 },
      { id: "p3-l21-p2", type: "textInput", prompt: "Traduis en français : Dominus librum portat", expected: "le maître porte le livre", answerConfig: { type: "translation-segment", language: "fr", accepted: ["le maître porte le livre", "le maitre porte le livre", "un maître porte le livre"] }, points: 1 },
      { id: "p3-l21-p3", type: "textInput", prompt: "Traduis en latin : les amis voient la porte", expected: "amici portam vident", answerConfig: { type: "latin-expression", language: "latin", expected: "amici portam vident" }, points: 1 },
    ],
    summary: {
      retains: ["Comparer deux traductions oblige à revenir au latin précis.", "Le bon réflexe : sujet + verbe + complément avant toute interprétation."],
      cahier: ["Servus dominum vocat", "Amici templum vident", "Amici portam vident"],
      keywords: ["traduction", "comparaison", "fidélité", "fonctions", "lecture"],
    },
    meta: { status: "ready", tags: ["traduction", "comparaison", "p3-l21"] },
  },
  {
    id: "p3-l22",
    period: 3,
    periodId: "p3",
    title: "Synthèse Euroclassica 5e",
    objective: "Réviser l’essentiel de l’année 5e avec une scène de synthèse langue + culture.",
    lessonPoint: "Je mobilise vocabulaire, fonctions et repères culturels dans une tâche finale guidée.",
    canDo: [
      "Je comprends une courte scène qui mélange langue et culture.",
      "Je traduis des phrases de synthèse sans perdre le sens.",
      "Je réactive les mots-clés utiles pour la suite Euroclassica.",
    ],
    lexicon: ["forum", "templum", "Roma", "dii", "servus", "amici", "epistula", "vident", "portat"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p3-l22-t1", type: "singleChoice", prompt: "Dans « Amici ad forum ambulant », ad indique :", options: ["vers", "dans", "sous"], expected: "vers", points: 1 },
      { id: "p3-l22-t2", type: "singleChoice", prompt: "Dans « Servus epistulam portat », le complément est :", options: ["servus", "epistulam", "portat"], expected: "epistulam", points: 1 },
      { id: "p3-l22-t3", type: "multipleChoice", prompt: "Sélectionne les éléments culturels romains.", options: ["forum", "templum", "Iuppiter", "ordinateur"], expected: ["forum", "templum", "Iuppiter"], points: 1 },
      {
        id: "p3-l22-t4",
        type: "matching",
        prompt: "Associe phrase et idée de synthèse.",
        pairs: [
          { left: "Dii templum vident", right: "mythe" },
          { left: "Servus epistulam portat", right: "vie quotidienne" },
          { left: "Amici ad forum ambulant", right: "ville" },
        ],
        rightOptions: ["ville", "mythe", "vie quotidienne"],
        expected: { "Dii templum vident": "mythe", "Servus epistulam portat": "vie quotidienne", "Amici ad forum ambulant": "ville" },
        points: 1,
      },
      { id: "p3-l22-t5", type: "ordering", prompt: "Remets en ordre la phrase finale :", options: ["amici", "templum", "vident"], expected: ["amici", "templum", "vident"], points: 1 },
      { id: "p3-l22-t6", type: "singleChoice", prompt: "Piège : « Epistulam servus portat » signifie :", options: ["Le serviteur porte la lettre", "La lettre porte le serviteur", "Le serviteur lit la lettre"], expected: "Le serviteur porte la lettre", points: 1 },
      { id: "p3-l22-t7", type: "textInput", prompt: "Écris en latin : « les dieux ».", expected: "dii", points: 1 },
    ],
    production: [
      { id: "p3-l22-p1", type: "textInput", prompt: "Traduis en français : Dii templum vident", expected: "les dieux voient le temple", answerConfig: { type: "translation-segment", language: "fr", accepted: ["les dieux voient le temple", "les dieux regardent le temple"] }, points: 1 },
      { id: "p3-l22-p2", type: "textInput", prompt: "Traduis en français : Servus epistulam portat", expected: "le serviteur porte la lettre", answerConfig: { type: "translation-segment", language: "fr", accepted: ["le serviteur porte la lettre", "l'esclave porte la lettre", "le serviteur apporte la lettre"] }, points: 1 },
      { id: "p3-l22-p3", type: "textInput", prompt: "Traduis en latin : les amis voient Rome", expected: "amici Romam vident", answerConfig: { type: "latin-expression", language: "latin", expected: "amici Romam vident" }, points: 1 },
    ],
    summary: {
      retains: ["Je peux mobiliser les acquis de 5e dans une scène courte et mixte.", "Langue et culture avancent ensemble : vocabulaire, formes et contexte."],
      cahier: ["Dii templum vident", "Servus epistulam portat", "Amici Romam vident"],
      keywords: ["synthèse", "euroclassica", "lecture", "culture", "latin 5e"],
    },
    meta: { status: "ready", tags: ["synthese", "euroclassica", "p3-l22"] },
  },
];

export const LEVELS_SPEC = [
  {
    id: "5e",
    label: "5e",
    masteryTitle: "Maîtrise 1 : Fondations du latin",
    masteryShort: "Fondations",
    subtitle: "Maîtrise 1 : Fondations du latin",
    ambition: "Entrer dans la langue, reconnaître, manipuler, mémoriser",
    description: "Vocabulaire de base, cas essentiels, premières phrases.",
    dashboardTitle: "Atrium I : Fondations",
    dashboardSubtitle:
      "Euroclassica : pré-Vestibulum / Vestibulum en cours d’acquisition · CECRL adapté – profil LCA : Pre-A1+ / A1 émergent en réception écrite guidée",
  },
  {
    id: "4e",
    label: "4e",
    masteryTitle: "Maîtrise 2 : Morphologie et syntaxe",
    masteryShort: "Morphologie et syntaxe",
    subtitle: "Maîtrise 2 : Morphologie et syntaxe",
    ambition: "Consolider les formes, comprendre les fonctions, automatiser",
    description: "Déclinaisons, conjugaisons, fonctions, automatisation.",
    dashboardTitle: "Atrium II : Consolidation",
    dashboardSubtitle:
      "Euroclassica : Vestibulum consolidé · CECRL adapté – profil LCA : A1 émergent / A1 consolidé en réception écrite guidée",
  },
  {
    id: "3e",
    label: "3e",
    masteryTitle: "Maîtrise 3 : Lecture et traduction guidées",
    masteryShort: "Lecture et traduction",
    subtitle: "Maîtrise 3 : Lecture et traduction guidées",
    ambition: "Lire, traduire, relier langue et civilisation",
    description: "Consolidation, lecture accompagnée, version/thème simples.",
    dashboardTitle: "Atrium III : Maîtrise",
    dashboardSubtitle:
      "Euroclassica : Vestibulum + / pré-Ianua · CECRL adapté – profil LCA : A1+ / début A2 en réception écrite guidée",
  },
];

export const DEFAULT_LEVEL_ID = "5e";

function toLevelPeriodId(levelId, basePeriodId) {
  return `${levelId}-${basePeriodId}`;
}

function toLevelLessonId(levelId, baseLessonId) {
  return `${levelId}-${baseLessonId}`;
}

function namespaceLessonForLevel(levelId, lesson) {
  const baseLessonId = lesson.id;
  const nextLessonId = toLevelLessonId(levelId, baseLessonId);

  const mapItem = (item) => ({
    ...item,
    id: `${nextLessonId}-${String(item.id || '').split('-').slice(-1)[0] || 'item'}`,
  });

  return {
    ...lesson,
    id: nextLessonId,
    periodId: toLevelPeriodId(levelId, lesson.periodId),
    levelId,
    training: Array.isArray(lesson.training) ? lesson.training.map(mapItem) : [],
    production: Array.isArray(lesson.production) ? lesson.production.map(mapItem) : [],
  };
}

function namespacePeriodsForLevel(levelId, basePeriods) {
  return basePeriods.map((period) => ({
    ...period,
    id: toLevelPeriodId(levelId, period.id),
    levelId,
  }));
}

function buildPlaceholderLessonForLevel(levelId, periodIndex, lessonIndex) {
  const periodId = `p${periodIndex}`;
  const lessonId = `${levelId}-${periodId}-l${lessonIndex}`;
  const lessonTitle = `${levelId} · P${periodIndex} · Leçon ${lessonIndex} (placeholder)`;

  return {
    id: lessonId,
    period: periodIndex,
    periodId: toLevelPeriodId(levelId, periodId),
    levelId,
    title: lessonTitle,
    objective: `Contenu ${levelId} à venir pour la période ${periodIndex}.`,
    lessonPoint: "Leçon placeholder : structure prête, contenu à venir.",
    canDo: [
      "Je visualise la structure de la leçon.",
      "Je peux ouvrir la leçon sans erreur.",
      "Je prépare le travail futur de niveau.",
    ],
    lexicon: ["placeholder", levelId, periodId],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      {
        id: `${lessonId}-t1`,
        type: "singleChoice",
        prompt: "Contenu 4e/3e à venir : item de structure.",
        options: ["A", "B", "C"],
        expected: "A",
        points: 1,
      },
    ],
    production: [
      {
        id: `${lessonId}-p1`,
        type: "textInput",
        prompt: "Contenu 4e/3e à venir : production de structure.",
        expected: "placeholder",
        answerConfig: { type: "one-of", language: "fr", accepted: ["placeholder"] },
        points: 1,
      },
    ],
    summary: {
      retains: ["Leçon placeholder de niveau."],
      cahier: ["Contenu à venir."],
      keywords: ["placeholder", levelId, `p${periodIndex}`],
    },
    meta: {
      status: "draft",
      tags: ["placeholder", levelId],
    },
  };
}

function buildLevelPlaceholders(levelId) {
  const lessons = [];
  for (let period = 1; period <= LESSONS_SPEC.periods; period += 1) {
    for (let lesson = 1; lesson <= LESSONS_SPEC.lessonsPerPeriod; lesson += 1) {
      lessons.push(buildPlaceholderLessonForLevel(levelId, period, lesson));
    }
  }
  return lessons;
}

function resolveAcceptedAnswers(item) {
  if (Array.isArray(item.acceptedAnswers) && item.acceptedAnswers.length > 0) return item.acceptedAnswers;

  const config = item.answerConfig || {};
  if (Array.isArray(config.accepted) && config.accepted.length > 0) return config.accepted;
  if (typeof config.expected === "string" && config.expected.trim()) return [config.expected.trim()];
  if (typeof item.expected === "string" && item.expected.trim()) return [item.expected.trim()];

  return [];
}

function enrichPeriod1To3ProductionAcceptedAnswers(lesson) {
  if (![1, 2, 3].includes(lesson?.period) || !Array.isArray(lesson.production)) return lesson;

  return {
    ...lesson,
    production: lesson.production.map((item) => {
      if (item?.type !== "textInput") return item;
      const acceptedAnswers = resolveAcceptedAnswers(item);
      return acceptedAnswers.length > 0 ? { ...item, acceptedAnswers } : item;
    }),
  };
}

export const periodsByLevel = {
  "5e": namespacePeriodsForLevel("5e", PERIODS_5E_BASE),
  "4e": namespacePeriodsForLevel("4e", PERIODS_5E_BASE),
  "3e": namespacePeriodsForLevel("3e", PERIODS_5E_BASE),
};

export const lessonsByLevel = {
  "5e": LESSONS_5E_BASE
    .map((lesson) => enrichPeriod1To3ProductionAcceptedAnswers(lesson))
    .map((lesson) => namespaceLessonForLevel("5e", lesson)),
  "4e": buildLevelPlaceholders("4e"),
  "3e": buildLevelPlaceholders("3e"),
};

export const periods = periodsByLevel[DEFAULT_LEVEL_ID];
export const lessons = lessonsByLevel[DEFAULT_LEVEL_ID];

export const levels = LEVELS_SPEC.map((level) => ({
  ...level,
  periods: periodsByLevel[level.id] || [],
  lessons: lessonsByLevel[level.id] || [],
}));

function findLevel(levelId = DEFAULT_LEVEL_ID) {
  return levels.find((level) => level.id === levelId) || levels[0];
}

export function getLevelById(levelId = DEFAULT_LEVEL_ID) {
  return findLevel(levelId) || null;
}

export function getPeriodsByLevel(levelId = DEFAULT_LEVEL_ID) {
  return periodsByLevel[levelId] || [];
}

export function getLessonsByLevel(levelId = DEFAULT_LEVEL_ID) {
  return lessonsByLevel[levelId] || [];
}

export function getLessonsByPeriod(periodId, levelId = DEFAULT_LEVEL_ID) {
  const normalizedPeriodId = periodId?.startsWith(`${levelId}-`) ? periodId : toLevelPeriodId(levelId, periodId);
  return getLessonsByLevel(levelId).filter((lesson) => lesson.periodId === normalizedPeriodId);
}

export function getLessonById(lessonId, levelId = DEFAULT_LEVEL_ID) {
  const normalizedLessonId = lessonId?.startsWith(`${levelId}-`) ? lessonId : toLevelLessonId(levelId, lessonId);
  return getLessonsByLevel(levelId).find((lesson) => lesson.id === normalizedLessonId) || null;
}
