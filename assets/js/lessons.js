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
    title: "Des mots qui se ressemblent",
    objective: "Reconnaître des mots latins proches du français dans le récit de Flavia et Titus.",
    lessonPoint: "Observer les ressemblances latin-français pour sécuriser le sens.",
    canDo: [
      "Je relie un mot latin transparent à son sens français.",
      "Je repère un intrus dans une famille de mots.",
      "Je mobilise un mot dérivé français à partir d’un radical latin.",
    ],
    lexicon: ["aqua", "via", "luna", "terra", "vita", "villa", "liber", "amicus"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      {
        id: "p1-l1-t1",
        type: "matching",
        prompt: "Associe chaque mot latin à son sens français (Flavia prépare son sac sur la via).",
        pairs: [
          { left: "aqua", right: "eau" },
          { left: "via", right: "route" },
          { left: "liber", right: "livre" },
        ],
        rightOptions: ["livre", "eau", "route"],
        expected: { aqua: "eau", via: "route", liber: "livre" },
        points: 1,
      },
      {
        id: "p1-l1-t2",
        type: "singleChoice",
        prompt: "Quel mot latin signifie « ami » ?",
        options: ["amicus", "luna", "terra"],
        expected: "amicus",
        points: 1,
      },
      {
        id: "p1-l1-t3",
        type: "multipleChoice",
        prompt: "Sélectionne les mots qui ressemblent fortement au français.",
        options: ["vita", "villa", "luna", "brnx"],
        expected: ["vita", "villa", "luna"],
        points: 1,
      },
      {
        id: "p1-l1-t4",
        type: "singleChoice",
        prompt: "Dans la famille de aqua, quel intrus n’appartient pas au même radical ?",
        options: ["aquatique", "aquarium", "lunaire"],
        expected: "lunaire",
        points: 1,
      },
      {
        id: "p1-l1-t5",
        type: "ordering",
        prompt: "Remets dans l’ordre logique latin → français → dérivé français.",
        options: ["aqua", "eau", "aquatique"],
        expected: ["aqua", "eau", "aquatique"],
        points: 1,
      },
      {
        id: "p1-l1-t6",
        type: "singleChoice",
        prompt: "Au marché, Titus entend « terra ». Quelle traduction choisir ?",
        options: ["terre", "temple", "âne"],
        expected: "terre",
        points: 1,
      },
      {
        id: "p1-l1-t7",
        type: "textInput",
        prompt: "Écris le mot latin qui correspond à « lune ».",
        expected: "luna",
        points: 1,
      },
    ],
    production: [
      {
        id: "p1-l1-p1",
        type: "textInput",
        prompt: "Traduis en français : amicus",
        expected: "ami",
        answerConfig: { type: "translation-segment", language: "fr", accepted: ["ami", "un ami", "l'ami", "l’ami", "copain"] },
        points: 1,
      },
      {
        id: "p1-l1-p2",
        type: "textInput",
        prompt: "Traduis en français : villa",
        expected: "maison",
        answerConfig: { type: "translation-segment", language: "fr", accepted: ["maison", "villa", "demeure"] },
        points: 1,
      },
      {
        id: "p1-l1-p3",
        type: "textInput",
        prompt: "Donne un dérivé français du mot latin aqua.",
        expected: "aquatique",
        answerConfig: { type: "one-of", language: "fr", accepted: ["aquatique", "aquarium", "aqueux", "aqueduc"] },
        points: 1,
      },
    ],
    summary: {
      retains: [
        "De nombreux mots latins transparents aident à comprendre vite.",
        "Un intrus ne partage pas le même radical lexical.",
      ],
      cahier: [
        "aqua → eau → aquatique",
        "amicus → ami ; liber → livre ; terra → terre",
      ],
      keywords: ["lexique", "transparence", "cousins", "aqua", "amicus"],
    },
    meta: {
      status: "ready",
      tags: ["cousins", "lexique", "latin-français", "p1-l1"],
    },
  },
  {
    id: "p1-l2",
    period: 1,
    periodId: "p1",
    title: "À la porte de la maison",
    objective: "Comprendre et utiliser les salutations latines autour de la maison de Livia.",
    lessonPoint: "Choisir la bonne formule selon le nombre de personnes et la situation.",
    canDo: [
      "Je salue une personne ou un groupe.",
      "Je prends congé correctement en latin.",
      "Je réponds présent en classe et dans la scène.",
    ],
    lexicon: ["salve", "salvete", "vale", "valete", "adsum", "quid agis", "bene", "male"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p1-l2-t1", type: "singleChoice", prompt: "Flavia salue Titus seul :", options: ["salve", "salvete", "valete"], expected: "salve", points: 1 },
      { id: "p1-l2-t2", type: "singleChoice", prompt: "Livia salue toute la maisonnée :", options: ["salve", "salvete", "vale"], expected: "salvete", points: 1 },
      { id: "p1-l2-t3", type: "multipleChoice", prompt: "Quelles formules servent à prendre congé ?", options: ["vale", "valete", "adsum", "quid agis"], expected: ["vale", "valete"], points: 1 },
      {
        id: "p1-l2-t4",
        type: "matching",
        prompt: "Associe formule et usage.",
        pairs: [
          { left: "adsum", right: "je suis présent" },
          { left: "quid agis ?", right: "comment vas-tu ?" },
          { left: "bene", right: "je vais bien" },
        ],
        rightOptions: ["je vais bien", "je suis présent", "comment vas-tu ?"],
        expected: { "adsum": "je suis présent", "quid agis ?": "comment vas-tu ?", "bene": "je vais bien" },
        points: 1,
      },
      { id: "p1-l2-t5", type: "ordering", prompt: "Ordonne le mini-dialogue : salutation → réponse → congé.", options: ["salve", "bene", "vale"], expected: ["salve", "bene", "vale"], points: 1 },
      { id: "p1-l2-t6", type: "textInput", prompt: "Écris en latin : « je vais mal ».", expected: "male", points: 1 },
      { id: "p1-l2-t7", type: "singleChoice", prompt: "Davus part et salue plusieurs personnes. Il dit :", options: ["vale", "valete", "salve"], expected: "valete", points: 1 },
    ],
    production: [
      { id: "p1-l2-p1", type: "textInput", prompt: "Traduis en latin : bonjour (à une personne)", expected: "salve", answerConfig: { type: "exact", language: "latin", expected: "salve" }, points: 1 },
      { id: "p1-l2-p2", type: "textInput", prompt: "Traduis en latin : au revoir (à plusieurs personnes)", expected: "valete", answerConfig: { type: "exact", language: "latin", expected: "valete" }, points: 1 },
      { id: "p1-l2-p3", type: "textInput", prompt: "Traduis en latin : je suis présent", expected: "adsum", answerConfig: { type: "one-of", language: "latin", accepted: ["adsum"] }, points: 1 },
    ],
    summary: {
      retains: [
        "salve / salvete pour saluer ; vale / valete pour prendre congé.",
        "adsum signifie « je suis présent ».",
      ],
      cahier: [
        "salve (1 pers.) ; salvete (pluriel)",
        "vale (1 pers.) ; valete (pluriel)",
      ],
      keywords: ["salutations", "rituel", "adsum", "bene", "male"],
    },
    meta: {
      status: "ready",
      tags: ["rituel", "formules", "classe", "p1-l2"],
    },
  },
  {
    id: "p1-l3",
    period: 1,
    periodId: "p1",
    title: "Qui est là ?",
    objective: "Identifier des noms latins de personnes, lieux et objets dans la scène quotidienne.",
    lessonPoint: "Distinguer personne / lieu / chose grâce au lexique de base.",
    canDo: [
      "Je reconnais si un nom latin désigne une personne, un lieu ou une chose.",
      "Je traduis des noms fréquents du récit.",
      "Je mobilise le lexique utile pour décrire la scène.",
    ],
    lexicon: ["puella", "servus", "domina", "liber", "aqua", "templum", "via"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p1-l3-t1", type: "singleChoice", prompt: "Quel mot latin désigne une personne féminine ?", options: ["domina", "templum", "via"], expected: "domina", points: 1 },
      { id: "p1-l3-t2", type: "singleChoice", prompt: "Quel mot latin désigne un lieu de culte ?", options: ["aqua", "templum", "liber"], expected: "templum", points: 1 },
      { id: "p1-l3-t3", type: "multipleChoice", prompt: "Sélectionne les noms de personnes.", options: ["puella", "servus", "via", "domina"], expected: ["puella", "servus", "domina"], points: 1 },
      {
        id: "p1-l3-t4",
        type: "matching",
        prompt: "Associe chaque mot latin à sa catégorie.",
        pairs: [
          { left: "servus", right: "personne" },
          { left: "via", right: "lieu" },
          { left: "liber", right: "objet" },
        ],
        rightOptions: ["objet", "personne", "lieu"],
        expected: { servus: "personne", via: "lieu", liber: "objet" },
        points: 1,
      },
      { id: "p1-l3-t5", type: "ordering", prompt: "Classe du plus concret au plus abstrait : objet → lieu → personne.", options: ["liber", "via", "domina"], expected: ["liber", "via", "domina"], points: 1 },
      { id: "p1-l3-t6", type: "textInput", prompt: "Écris en latin : « eau ».", expected: "aqua", points: 1 },
      { id: "p1-l3-t7", type: "singleChoice", prompt: "Au puits, Brunus voit quoi ?", options: ["aqua", "servus", "domina"], expected: "aqua", points: 1 },
    ],
    production: [
      { id: "p1-l3-p1", type: "textInput", prompt: "Traduis en français : domina", expected: "maîtresse de maison", answerConfig: { type: "translation-segment", language: "fr", accepted: ["maîtresse", "la maîtresse", "maîtresse de maison", "dame"] }, points: 1 },
      { id: "p1-l3-p2", type: "textInput", prompt: "Traduis en français : templum", expected: "temple", answerConfig: { type: "translation-segment", language: "fr", accepted: ["temple", "le temple", "petit temple"] }, points: 1 },
      { id: "p1-l3-p3", type: "textInput", prompt: "Traduis en latin : le livre", expected: "liber", answerConfig: { type: "exact", language: "latin", expected: "liber" }, points: 1 },
    ],
    summary: {
      retains: [
        "Les noms latins peuvent désigner personne, lieu ou objet.",
        "templum et via sont des lieux ; liber est un objet.",
      ],
      cahier: [
        "puella / servus / domina = personnes",
        "via / templum = lieux ; liber / aqua = choses",
      ],
      keywords: ["noms", "catégories", "puella", "templum"],
    },
    meta: {
      status: "ready",
      tags: ["noms", "lexique", "catégories", "p1-l3"],
    },
  },
  {
    id: "p1-l4",
    period: 1,
    periodId: "p1",
    title: "Le verbe : le moteur de la phrase",
    objective: "Identifier le verbe dans des phrases simples du quotidien de la domus.",
    lessonPoint: "Le verbe exprime l’action : on le repère pour comprendre la phrase.",
    canDo: [
      "Je repère le verbe dans une phrase latine simple.",
      "Je distingue verbe et noms autour de lui.",
      "Je traduis des micro-phrases avec verbe au présent.",
    ],
    lexicon: ["ambulat", "amat", "habet", "vocat", "videt", "portat"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p1-l4-t1", type: "singleChoice", prompt: "Dans « Flavia ambulat. », le verbe est :", options: ["Flavia", "ambulat", "domus"], expected: "ambulat", points: 1 },
      { id: "p1-l4-t2", type: "singleChoice", prompt: "Dans « Titus librum habet. », le verbe est :", options: ["Titus", "librum", "habet"], expected: "habet", points: 1 },
      { id: "p1-l4-t3", type: "multipleChoice", prompt: "Sélectionne uniquement les verbes.", options: ["vocat", "via", "videt", "portat"], expected: ["vocat", "videt", "portat"], points: 1 },
      {
        id: "p1-l4-t4",
        type: "matching",
        prompt: "Associe chaque phrase à son verbe.",
        pairs: [
          { left: "Davus portat aquam.", right: "portat" },
          { left: "Livia vocat Davum.", right: "vocat" },
          { left: "Brunus videt viam.", right: "videt" },
        ],
        rightOptions: ["videt", "portat", "vocat"],
        expected: {
          "Davus portat aquam.": "portat",
          "Livia vocat Davum.": "vocat",
          "Brunus videt viam.": "videt",
        },
        points: 1,
      },
      { id: "p1-l4-t5", type: "ordering", prompt: "Remets la phrase dans l’ordre canonique :", options: ["Titus", "amicum", "amat"], expected: ["Titus", "amat", "amicum"], points: 1 },
      { id: "p1-l4-t6", type: "textInput", prompt: "Écris le verbe de la phrase : « Livia amicum vocat. »", expected: "vocat", points: 1 },
      { id: "p1-l4-t7", type: "singleChoice", prompt: "Quel verbe signifie « il voit » ?", options: ["videt", "amat", "habet"], expected: "videt", points: 1 },
    ],
    production: [
      { id: "p1-l4-p1", type: "textInput", prompt: "Traduis en français : Puella amat.", expected: "la jeune fille aime", answerConfig: { type: "translation-segment", language: "fr", accepted: ["la jeune fille aime", "la fille aime", "une jeune fille aime"] }, points: 1 },
      { id: "p1-l4-p2", type: "textInput", prompt: "Traduis en français : Servus videt.", expected: "l'esclave voit", answerConfig: { type: "translation-segment", language: "fr", accepted: ["l'esclave voit", "l’esclave voit", "le serviteur voit", "un esclave voit"] }, points: 1 },
      { id: "p1-l4-p3", type: "textInput", prompt: "Traduis en latin : l’ami porte", expected: "amicus portat", answerConfig: { type: "latin-expression", language: "latin", expected: "amicus portat" }, points: 1 },
    ],
    summary: {
      retains: [
        "Le verbe est le moteur de la phrase.",
        "En repérant le verbe, on comprend l’action principale.",
      ],
      cahier: [
        "ambulat = marche ; videt = voit ; portat = porte",
        "Phrase minimale : sujet + verbe (éventuellement + complément)",
      ],
      keywords: ["verbe", "action", "présent", "domus"],
    },
    meta: {
      status: "ready",
      tags: ["verbe", "présent", "action", "p1-l4"],
    },
    meta: { status: "ready", tags: ["marché", "scène", "ad-forum", "p1-l9"] },
  },
  {
    id: "p1-l10",
    period: 1,
    periodId: "p1",
    title: "Le sujet : qui fait l’action ?",
    objective: "Identifier le sujet, y compris avec un ordre des mots moins attendu.",
    lessonPoint: "Le sujet est celui qui accomplit l’action, même si le verbe arrive en premier.",
    canDo: [
      "Je trouve le sujet d’une phrase simple.",
      "Je ne me laisse pas piéger par l’ordre des mots.",
      "Je traduis des groupes nominaux et des phrases courtes.",
    ],
    lexicon: ["puella", "servus", "dominus", "amicus", "videt", "amat"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p1-l5-t1", type: "singleChoice", prompt: "Dans « Puella videt. », le sujet est :", options: ["Puella", "videt", "aucun"], expected: "Puella", points: 1 },
      { id: "p1-l5-t2", type: "singleChoice", prompt: "Dans « Videt servus. » (piège), le sujet est :", options: ["videt", "servus", "les deux"], expected: "servus", points: 1 },
      { id: "p1-l5-t3", type: "multipleChoice", prompt: "Quels mots peuvent être sujet dans cette séquence ?", options: ["puella", "dominus", "videt", "amat"], expected: ["puella", "dominus"], points: 1 },
      {
        id: "p1-l5-t4",
        type: "matching",
        prompt: "Associe phrase et sujet.",
        pairs: [
          { left: "Amat puella.", right: "puella" },
          { left: "Servus videt.", right: "servus" },
          { left: "Videt amicus.", right: "amicus" },
        ],
        rightOptions: ["servus", "amicus", "puella"],
        expected: { "Amat puella.": "puella", "Servus videt.": "servus", "Videt amicus.": "amicus" },
        points: 1,
      },
      { id: "p1-l5-t5", type: "ordering", prompt: "Remets la phrase avec le sujet en tête :", options: ["videt", "dominus"], expected: ["dominus", "videt"], points: 1 },
      { id: "p1-l5-t6", type: "textInput", prompt: "Dans « Amat Titus. », écris le sujet.", expected: "titus", points: 1 },
      { id: "p1-l5-t7", type: "singleChoice", prompt: "Qui fait l’action dans « Amicus videt. » ?", options: ["amicus", "videt", "puella"], expected: "amicus", points: 1 },
    ],
    production: [
      { id: "p1-l5-p1", type: "textInput", prompt: "Traduis en latin : la jeune fille", expected: "puella", answerConfig: { type: "one-of", language: "latin", accepted: ["puella"] }, points: 1 },
      { id: "p1-l5-p2", type: "textInput", prompt: "Traduis en latin : le maître", expected: "dominus", answerConfig: { type: "one-of", language: "latin", accepted: ["dominus"] }, points: 1 },
      { id: "p1-l5-p3", type: "textInput", prompt: "Traduis en latin : l’ami voit", expected: "amicus videt", answerConfig: { type: "latin-expression", language: "latin", expected: "amicus videt" }, points: 1 },
    ],
    summary: {
      retains: [
        "Le sujet réalise l’action, même si le verbe est placé avant.",
        "On peut reformuler pour vérifier qui agit.",
      ],
      cahier: [
        "Videt servus = le serviteur voit",
        "Repère : qui fait l’action ?",
      ],
      keywords: ["sujet", "ordre des mots", "piège", "videt servus"],
    },
    meta: {
      status: "ready",
      tags: ["sujet", "fonctions", "ordre", "p1-l5"],
    },
    meta: { status: "ready", tags: ["lieux", "prépositions", "p2-l7"] },
  },
  {
    id: "p1-l6",
    period: 1,
    periodId: "p1",
    title: "La phrase minimale",
    objective: "Traduire des phrases minimales sujet + verbe dans le cadre de la vie quotidienne.",
    lessonPoint: "Une phrase minimale S+V suffit pour transmettre une action claire.",
    canDo: [
      "Je traduis une phrase très courte latin → français.",
      "Je repère un piège d’ordre des mots comme Currit servus.",
      "Je produis une phrase minimale en latin.",
    ],
    lexicon: ["dominus", "davus", "flavia", "ambulat", "laborat", "currit", "ridet"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p1-l6-t1", type: "singleChoice", prompt: "Dominus ambulat. signifie :", options: ["Le maître marche.", "Le maître appelle.", "Le maître voit."], expected: "Le maître marche.", points: 1 },
      { id: "p1-l6-t2", type: "singleChoice", prompt: "Davus laborat. signifie :", options: ["Davus travaille.", "Davus rit.", "Davus dort."], expected: "Davus travaille.", points: 1 },
      { id: "p1-l6-t3", type: "multipleChoice", prompt: "Quelles phrases sont des phrases minimales S+V ?", options: ["Flavia ridet.", "Brunus currit.", "Aqua in via."], expected: ["Flavia ridet.", "Brunus currit."], points: 1 },
      {
        id: "p1-l6-t4",
        type: "matching",
        prompt: "Associe phrase latine et traduction.",
        pairs: [
          { left: "Flavia ridet.", right: "Flavia rit." },
          { left: "Currit servus.", right: "Le serviteur court." },
          { left: "Livia ambulat.", right: "Livia marche." },
        ],
        rightOptions: ["Le serviteur court.", "Livia marche.", "Flavia rit."],
        expected: {
          "Flavia ridet.": "Flavia rit.",
          "Currit servus.": "Le serviteur court.",
          "Livia ambulat.": "Livia marche.",
        },
        points: 1,
      },
      { id: "p1-l6-t5", type: "ordering", prompt: "Réorganise la phrase piège en ordre canonique sujet + verbe :", options: ["currit", "servus"], expected: ["servus", "currit"], points: 1 },
      { id: "p1-l6-t6", type: "textInput", prompt: "Traduis en français (un mot) : currit", expected: "court", points: 1 },
      { id: "p1-l6-t7", type: "singleChoice", prompt: "Quelle phrase signifie « Davus travaille » ?", options: ["Davus laborat.", "Davus ambulat.", "Laborat Davum."], expected: "Davus laborat.", points: 1 },
    ],
    production: [
      { id: "p1-l6-p1", type: "textInput", prompt: "Traduis en français : Dominus ambulat", expected: "le maître marche", answerConfig: { type: "translation-segment", language: "fr", accepted: ["le maître marche", "le maitre marche", "un maître marche"] }, points: 1 },
      { id: "p1-l6-p2", type: "textInput", prompt: "Traduis en français : Davus laborat", expected: "davus travaille", answerConfig: { type: "translation-segment", language: "fr", accepted: ["davus travaille", "davus travaille beaucoup", "le serviteur travaille"] }, points: 1 },
      { id: "p1-l6-p3", type: "textInput", prompt: "Traduis en latin : Flavia rit", expected: "flavia ridet", answerConfig: { type: "latin-expression", language: "latin", expected: "flavia ridet" }, points: 1 },
    ],
    summary: {
      retains: [
        "Une phrase minimale associe un sujet et un verbe.",
        "Même si l’ordre change (Currit servus), le sens reste accessible.",
      ],
      cahier: [
        "Dominus ambulat = le maître marche",
        "Davus laborat = Davus travaille",
      ],
      keywords: ["phrase minimale", "S+V", "currit servus", "traduction"],
    },
    meta: {
      status: "ready",
      tags: ["phrase", "traduction", "sujet-verbe", "p1-l6"],
    },
  },
  {
    id: "p1-l7",
    period: 1,
    periodId: "p1",
    title: "Le complément",
    objective: "Identifier le complément qui reçoit l’action dans des phrases simples.",
    lessonPoint: "Le complément reçoit l’action du verbe, même si l’ordre des mots varie.",
    canDo: [
      "Je repère le complément dans une phrase courte.",
      "Je distingue un piège d’ordre des mots.",
      "Je choisis entre une forme sujet et une forme complément.",
    ],
    lexicon: ["puella", "rosam", "servus", "librum", "aqua", "aquam", "amicus"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p1-l7-t1", type: "singleChoice", prompt: "Dans « Puella rosam portat », quel mot est le complément ?", options: ["Puella", "rosam", "portat"], expected: "rosam", points: 1 },
      { id: "p1-l7-t2", type: "singleChoice", prompt: "Dans « Servus librum habet », le complément est :", options: ["Servus", "librum", "habet"], expected: "librum", points: 1 },
      { id: "p1-l7-t3", type: "singleChoice", prompt: "Choisis la bonne forme comme complément : Davus ____ portat.", options: ["aqua", "aquam", "aquae"], expected: "aquam", points: 1 },
      { id: "p1-l7-t4", type: "multipleChoice", prompt: "Sélectionne les formes qui peuvent être compléments dans nos phrases.", options: ["rosam", "librum", "puella", "aquam"], expected: ["rosam", "librum", "aquam"], points: 1 },
      {
        id: "p1-l7-t5",
        type: "matching",
        prompt: "Associe chaque phrase à son complément.",
        pairs: [
          { left: "Puella rosam portat", right: "rosam" },
          { left: "Servus aquam portat", right: "aquam" },
          { left: "Livia amicum vocat", right: "amicum" },
        ],
        rightOptions: ["aquam", "amicum", "rosam"],
        expected: { "Puella rosam portat": "rosam", "Servus aquam portat": "aquam", "Livia amicum vocat": "amicum" },
        points: 1,
      },
      { id: "p1-l7-t6", type: "singleChoice", prompt: "Piège : dans « Rosam puella portat », le complément est :", options: ["Rosam", "puella", "portat"], expected: "Rosam", points: 1 },
      { id: "p1-l7-t7", type: "textInput", prompt: "Écris le complément dans « Servus aquam portat ».", expected: "aquam", points: 1 },
    ],
    production: [
      { id: "p1-l7-p1", type: "textInput", prompt: "Traduis en français : Servus aquam portat", expected: "le serviteur porte l'eau", answerConfig: { type: "translation-segment", language: "fr", accepted: ["le serviteur porte l'eau", "le serviteur porte de l'eau", "l'esclave porte de l'eau", "l’esclave porte de l’eau"] }, points: 1 },
      { id: "p1-l7-p2", type: "textInput", prompt: "Traduis en français : Flavia donum habet", expected: "flavia a un cadeau", answerConfig: { type: "translation-segment", language: "fr", accepted: ["flavia a un cadeau", "flavia a le cadeau", "flavia possède un cadeau"] }, points: 1 },
      { id: "p1-l7-p3", type: "textInput", prompt: "Traduis en latin : le maître appelle l’ami", expected: "dominus amicum vocat", answerConfig: { type: "latin-expression", language: "latin", expected: "dominus amicum vocat" }, points: 1 },
    ],
    summary: {
      retains: ["Le complément reçoit l’action.", "L’ordre des mots peut changer, la fonction reste la même."],
      cahier: ["Puella rosam portat : rosam est le complément.", "Servus librum habet : librum est le complément."],
      keywords: ["complément", "objet", "aquam", "rosam"],
    },
    meta: { status: "ready", tags: ["complément", "objet", "p1-l7"] },
  },
  {
    id: "p1-l8",
    period: 1,
    periodId: "p1",
    title: "Les formes du sujet et du complément",
    objective: "Choisir entre formes sujet et formes complément dans des phrases très courtes.",
    lessonPoint: "La forme d’un nom change selon sa fonction dans la phrase.",
    canDo: [
      "Je distingue une forme sujet d’une forme complément.",
      "Je choisis la bonne forme dans une phrase guidée.",
      "Je traduis des groupes nominaux simples.",
    ],
    lexicon: ["puella", "puellam", "servus", "servum", "rosa", "rosam", "amicus", "amicum", "villa", "villam"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p1-l8-t1", type: "singleChoice", prompt: "Forme sujet de « la jeune fille » :", options: ["puella", "puellam", "puellae"], expected: "puella", points: 1 },
      { id: "p1-l8-t2", type: "singleChoice", prompt: "Forme complément de « la jeune fille » :", options: ["puella", "puellam", "puellarum"], expected: "puellam", points: 1 },
      { id: "p1-l8-t3", type: "singleChoice", prompt: "Dans « Servus rosam portat », quelle forme est sujet ?", options: ["servus", "servum", "rosam"], expected: "servus", points: 1 },
      { id: "p1-l8-t4", type: "multipleChoice", prompt: "Sélectionne les formes complément.", options: ["servum", "amicum", "villa", "rosam"], expected: ["servum", "amicum", "rosam"], points: 1 },
      {
        id: "p1-l8-t5",
        type: "matching",
        prompt: "Associe chaque paire sujet / complément.",
        pairs: [
          { left: "puella", right: "puellam" },
          { left: "servus", right: "servum" },
          { left: "amicus", right: "amicum" },
        ],
        rightOptions: ["servum", "amicum", "puellam"],
        expected: { puella: "puellam", servus: "servum", amicus: "amicum" },
        points: 1,
      },
      { id: "p1-l8-t6", type: "ordering", prompt: "Remets en ordre : sujet + verbe + complément.", options: ["servus", "vocat", "amicum"], expected: ["servus", "vocat", "amicum"], points: 1 },
      { id: "p1-l8-t7", type: "textInput", prompt: "Complète : Livia ____ habet (la villa en complément).", expected: "villam", points: 1 },
    ],
    production: [
      { id: "p1-l8-p1", type: "textInput", prompt: "Traduis en latin : la jeune fille", expected: "puella", answerConfig: { type: "exact", language: "latin", expected: "puella" }, points: 1 },
      { id: "p1-l8-p2", type: "textInput", prompt: "Traduis en latin : la jeune fille (comme complément)", expected: "puellam", answerConfig: { type: "exact", language: "latin", expected: "puellam" }, points: 1 },
      { id: "p1-l8-p3", type: "textInput", prompt: "Traduis en latin : l’esclave voit la route", expected: "servus viam videt", answerConfig: { type: "latin-expression", language: "latin", expected: "servus viam videt" }, points: 1 },
    ],
    summary: {
      retains: ["Une même base peut avoir deux formes selon la fonction.", "Le sujet n’a pas la même forme que le complément."],
      cahier: ["puella / puellam ; servus / servum", "rosa / rosam ; villa / villam"],
      keywords: ["formes", "sujet", "complément", "puella/puellam"],
    },
    meta: { status: "ready", tags: ["formes", "cas", "p1-l8"] },
  },
  {
    id: "p1-l9",
    period: 1,
    periodId: "p1",
    title: "Au marché",
    objective: "Comprendre une micro-scène complète au marché avec lieu, objet et action.",
    lessonPoint: "Dans une scène, on repère qui agit, quoi est transporté et vers quel lieu.",
    canDo: [
      "Je repère un lieu introduit par ad forum.",
      "Je distingue action, objet et lieu.",
      "Je traduis des micro-phrases de scène.",
    ],
    lexicon: ["forum", "ad forum", "donum", "aquam", "templum", "videt", "portat", "habet"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p1-l9-t1", type: "singleChoice", prompt: "Que signifie « ad forum » ?", options: ["vers le marché", "dans la maison", "au temple"], expected: "vers le marché", points: 1 },
      { id: "p1-l9-t2", type: "singleChoice", prompt: "Dans « Davus aquam ad forum portat », quel est le lieu ?", options: ["aquam", "forum", "Davus"], expected: "forum", points: 1 },
      { id: "p1-l9-t3", type: "multipleChoice", prompt: "Sélectionne les mots qui peuvent être des objets transportés.", options: ["aquam", "donum", "forum", "librum"], expected: ["aquam", "donum", "librum"], points: 1 },
      {
        id: "p1-l9-t4",
        type: "matching",
        prompt: "Associe phrase et action principale.",
        pairs: [
          { left: "Davus aquam portat", right: "porter" },
          { left: "Livia donum habet", right: "avoir" },
          { left: "Titus templum videt", right: "voir" },
        ],
        rightOptions: ["voir", "avoir", "porter"],
        expected: { "Davus aquam portat": "porter", "Livia donum habet": "avoir", "Titus templum videt": "voir" },
        points: 1,
      },
      { id: "p1-l9-t5", type: "singleChoice", prompt: "Piège : dans « Donum servus portat », qui porte ?", options: ["Donum", "servus", "portat"], expected: "servus", points: 1 },
      { id: "p1-l9-t6", type: "ordering", prompt: "Remets la phrase canonique :", options: ["Davus", "aquam", "portat"], expected: ["Davus", "portat", "aquam"], points: 1 },
      { id: "p1-l9-t7", type: "textInput", prompt: "Écris le lieu en latin : « au marché » (avec ad).", expected: "ad forum", points: 1 },
    ],
    production: [
      { id: "p1-l9-p1", type: "textInput", prompt: "Traduis en français : Davus aquam ad forum portat", expected: "davus porte de l'eau au marché", answerConfig: { type: "translation-segment", language: "fr", accepted: ["davus porte de l'eau au marché", "davus porte l'eau au marché", "davus apporte de l'eau au marché"] }, points: 1 },
      { id: "p1-l9-p2", type: "textInput", prompt: "Traduis en français : Livia donum habet", expected: "livia a un cadeau", answerConfig: { type: "translation-segment", language: "fr", accepted: ["livia a un cadeau", "livia possède un cadeau", "livia a le cadeau"] }, points: 1 },
      { id: "p1-l9-p3", type: "textInput", prompt: "Traduis en latin : Titus voit le temple", expected: "titus templum videt", answerConfig: { type: "latin-expression", language: "latin", expected: "titus templum videt" }, points: 1 },
    ],
    summary: {
      retains: ["ad forum indique le lieu vers lequel on va.", "Une scène combine acteur, action, objet et lieu."],
      cahier: ["Davus aquam ad forum portat", "Titus templum videt"],
      keywords: ["marché", "ad forum", "scène", "lieu"],
    },
    meta: { status: "ready", tags: ["marché", "scène", "ad-forum", "p1-l9"] },
  },
  {
    id: "p1-l10",
    period: 1,
    periodId: "p1",
    title: "L’ordre des mots peut tromper",
    objective: "Comprendre que l’ordre des mots ne fixe pas toujours la fonction en latin.",
    lessonPoint: "Même sens possible avec des ordres différents ; changer une forme peut changer le sens.",
    canDo: [
      "Je lis une phrase en V/S/C ou C/S/V sans me tromper.",
      "Je compare deux phrases proches pour vérifier le sens.",
      "Je produis une phrase simple correcte malgré l’ordre variable.",
    ],
    lexicon: ["rosam", "servus", "portat", "servum", "dominus", "dominum", "vocat", "librum"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p1-l10-t1", type: "singleChoice", prompt: "« Rosam servus portat » signifie :", options: ["Le serviteur porte la rose.", "La rose porte le serviteur.", "Le serviteur appelle la rose."], expected: "Le serviteur porte la rose.", points: 1 },
      { id: "p1-l10-t2", type: "singleChoice", prompt: "« Servum dominus vocat » : qui est appelé ?", options: ["servum", "dominus", "vocat"], expected: "servum", points: 1 },
      { id: "p1-l10-t3", type: "singleChoice", prompt: "« Dominum servus vocat » : qui est appelé ?", options: ["dominum", "servus", "les deux"], expected: "dominum", points: 1 },
      { id: "p1-l10-t4", type: "multipleChoice", prompt: "Quelles phrases ont le même sens que « Servus rosam portat » ?", options: ["Rosam servus portat", "Servus portat rosam", "Rosa servum portat", "Portat servus rosam"], expected: ["Rosam servus portat", "Servus portat rosam", "Portat servus rosam"], points: 1 },
      {
        id: "p1-l10-t5",
        type: "matching",
        prompt: "Associe l’ordre et le schéma.",
        pairs: [
          { left: "Portat servus rosam", right: "V/S/C" },
          { left: "Rosam servus portat", right: "C/S/V" },
          { left: "Servus portat rosam", right: "S/V/C" },
        ],
        rightOptions: ["S/V/C", "V/S/C", "C/S/V"],
        expected: { "Portat servus rosam": "V/S/C", "Rosam servus portat": "C/S/V", "Servus portat rosam": "S/V/C" },
        points: 1,
      },
      { id: "p1-l10-t6", type: "ordering", prompt: "Mets en ordre C/S/V :", options: ["librum", "Titus", "portat"], expected: ["librum", "Titus", "portat"], points: 1 },
      { id: "p1-l10-t7", type: "textInput", prompt: "Dans « Dominum servus vocat », écris le mot qui est appelé.", expected: "dominum", points: 1 },
    ],
    production: [
      { id: "p1-l10-p1", type: "textInput", prompt: "Traduis en français : Librum Titus portat", expected: "titus porte le livre", answerConfig: { type: "translation-segment", language: "fr", accepted: ["titus porte le livre", "titus porte un livre"] }, points: 1 },
      { id: "p1-l10-p2", type: "textInput", prompt: "Traduis en français : Aquam ancilla habet", expected: "la servante a de l'eau", answerConfig: { type: "translation-segment", language: "fr", accepted: ["la servante a de l'eau", "la servante a l'eau", "une servante a de l'eau"] }, points: 1 },
      { id: "p1-l10-p3", type: "textInput", prompt: "Traduis en latin : la maîtresse de maison voit le livre", expected: "domina librum videt", answerConfig: { type: "latin-expression", language: "latin", expected: "domina librum videt" }, points: 1 },
    ],
    summary: {
      retains: ["L’ordre des mots varie sans changer forcément le sens.", "La forme du mot aide à identifier sa fonction."],
      cahier: ["Rosam servus portat = Servus rosam portat", "Dominum servus vocat ≠ Servum dominus vocat"],
      keywords: ["ordre des mots", "V/S/C", "C/S/V", "sens"],
    },
    meta: { status: "ready", tags: ["ordre", "pièges", "traduction", "p1-l10"] },
  },
  {
    id: "p1-l11",
    period: 1,
    periodId: "p1",
    title: "Premiers pluriels",
    objective: "Identifier sujet pluriel, complément pluriel et verbe au pluriel dans des phrases simples.",
    lessonPoint: "Au pluriel, plusieurs éléments changent en même temps : sujet, complément, verbe.",
    canDo: [
      "Je reconnais un sujet pluriel.",
      "Je repère un complément pluriel.",
      "Je traduis des phrases courtes au pluriel.",
    ],
    lexicon: ["puellae", "servi", "dona", "rosas", "ambulant", "portant", "amici", "habent"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p1-l11-t1", type: "singleChoice", prompt: "Dans « Puellae ambulant », le sujet est :", options: ["Puellae", "ambulant", "aucun"], expected: "Puellae", points: 1 },
      { id: "p1-l11-t2", type: "singleChoice", prompt: "Dans « Servi dona portant », le verbe est :", options: ["Servi", "dona", "portant"], expected: "portant", points: 1 },
      { id: "p1-l11-t3", type: "singleChoice", prompt: "Dans « Puellae rosas portant », le complément pluriel est :", options: ["Puellae", "rosas", "portant"], expected: "rosas", points: 1 },
      { id: "p1-l11-t4", type: "multipleChoice", prompt: "Sélectionne les formes pluriel de sujet.", options: ["puellae", "servi", "puellam", "amici"], expected: ["puellae", "servi", "amici"], points: 1 },
      {
        id: "p1-l11-t5",
        type: "matching",
        prompt: "Associe phrase et traduction.",
        pairs: [
          { left: "Puellae ambulant", right: "Les jeunes filles marchent" },
          { left: "Servi dona portant", right: "Les serviteurs portent des cadeaux" },
          { left: "Amici habent dona", right: "Les amis ont des cadeaux" },
        ],
        rightOptions: ["Les amis ont des cadeaux", "Les jeunes filles marchent", "Les serviteurs portent des cadeaux"],
        expected: { "Puellae ambulant": "Les jeunes filles marchent", "Servi dona portant": "Les serviteurs portent des cadeaux", "Amici habent dona": "Les amis ont des cadeaux" },
        points: 1,
      },
      { id: "p1-l11-t6", type: "ordering", prompt: "Remets la phrase plurielle en ordre canonique :", options: ["servi", "dona", "portant"], expected: ["servi", "portant", "dona"], points: 1 },
      { id: "p1-l11-t7", type: "textInput", prompt: "Écris le verbe pluriel de la phrase : « Puellae ambulant ».", expected: "ambulant", points: 1 },
    ],
    production: [
      { id: "p1-l11-p1", type: "textInput", prompt: "Traduis en français : Puellae rosas portant", expected: "les jeunes filles portent des roses", answerConfig: { type: "translation-segment", language: "fr", accepted: ["les jeunes filles portent des roses", "les filles portent des roses"] }, points: 1 },
      { id: "p1-l11-p2", type: "textInput", prompt: "Traduis en français : Servi ad villam ambulant", expected: "les serviteurs marchent vers la maison", answerConfig: { type: "translation-segment", language: "fr", accepted: ["les serviteurs marchent vers la maison", "les esclaves marchent vers la villa", "les serviteurs vont vers la maison"] }, points: 1 },
      { id: "p1-l11-p3", type: "textInput", prompt: "Traduis en latin : les amis ont les cadeaux", expected: "amici dona habent", answerConfig: { type: "latin-expression", language: "latin", expected: "amici dona habent" }, points: 1 },
    ],
    summary: {
      retains: ["Le pluriel se lit sur plusieurs mots de la phrase.", "Sujet pluriel et verbe pluriel vont ensemble."],
      cahier: ["Puellae ambulant", "Servi dona portant"],
      keywords: ["pluriel", "puellae", "servi", "dona"],
    },
    meta: { status: "ready", tags: ["pluriel", "accord", "p1-l11"] },
  },
  {
    id: "p1-l12",
    period: 1,
    periodId: "p1",
    title: "Le jour de fête",
    objective: "Réinvestir sujet/verbe/complément et singulier-pluriel dans une scène de fête.",
    lessonPoint: "Je mobilise toutes les bases de période 1 dans une scène courte et lisible.",
    canDo: [
      "Je reconnais sujet, verbe et complément dans des phrases variées.",
      "Je passe du singulier au pluriel sans perdre le sens.",
      "Je traduis une scène courte de synthèse.",
    ],
    lexicon: ["flavia", "coronam", "servi", "aquam", "portant", "domini", "amicos", "vident"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p1-l12-t1", type: "singleChoice", prompt: "Dans « Flavia coronam habet », le complément est :", options: ["Flavia", "coronam", "habet"], expected: "coronam", points: 1 },
      { id: "p1-l12-t2", type: "singleChoice", prompt: "Dans « Servi aquam portant », le sujet est :", options: ["Servi", "aquam", "portant"], expected: "Servi", points: 1 },
      { id: "p1-l12-t3", type: "singleChoice", prompt: "Choisis la phrase au pluriel :", options: ["Dominus amicum videt", "Domini amicos vident", "Domina librum habet"], expected: "Domini amicos vident", points: 1 },
      { id: "p1-l12-t4", type: "multipleChoice", prompt: "Sélectionne les compléments possibles dans ces phrases.", options: ["coronam", "aquam", "amicos", "servi"], expected: ["coronam", "aquam", "amicos"], points: 1 },
      {
        id: "p1-l12-t5",
        type: "matching",
        prompt: "Associe chaque phrase à sa traduction.",
        pairs: [
          { left: "Flavia coronam habet", right: "Flavia a une couronne" },
          { left: "Servi aquam portant", right: "Les serviteurs portent de l'eau" },
          { left: "Domini amicos vident", right: "Les maîtres voient les amis" },
        ],
        rightOptions: ["Les maîtres voient les amis", "Flavia a une couronne", "Les serviteurs portent de l'eau"],
        expected: { "Flavia coronam habet": "Flavia a une couronne", "Servi aquam portant": "Les serviteurs portent de l'eau", "Domini amicos vident": "Les maîtres voient les amis" },
        points: 1,
      },
      { id: "p1-l12-t6", type: "singleChoice", prompt: "Phrase piège : « Amicos domini vident ». Qui voit ?", options: ["amicos", "domini", "vident"], expected: "domini", points: 1 },
      { id: "p1-l12-t7", type: "ordering", prompt: "Remets la phrase de synthèse :", options: ["servi", "aquam", "portant"], expected: ["servi", "portant", "aquam"], points: 1 },
    ],
    production: [
      { id: "p1-l12-p1", type: "textInput", prompt: "Traduis en français : Flavia coronam habet", expected: "flavia a une couronne", answerConfig: { type: "translation-segment", language: "fr", accepted: ["flavia a une couronne", "flavia possède une couronne"] }, points: 1 },
      { id: "p1-l12-p2", type: "textInput", prompt: "Traduis en français : Servi aquam portant", expected: "les serviteurs portent de l'eau", answerConfig: { type: "translation-segment", language: "fr", accepted: ["les serviteurs portent de l'eau", "les esclaves portent de l'eau", "les serviteurs portent l'eau"] }, points: 1 },
      { id: "p1-l12-p3", type: "textInput", prompt: "Traduis en latin : les maîtres voient les amis", expected: "domini amicos vident", answerConfig: { type: "latin-expression", language: "latin", expected: "domini amicos vident" }, points: 1 },
    ],
    summary: {
      retains: ["Je combine sujet, verbe, complément et nombre.", "Je reste vigilant quand l’ordre des mots change."],
      cahier: ["Flavia coronam habet", "Domini amicos vident"],
      keywords: ["synthèse", "fête", "singulier", "pluriel"],
    },
    meta: { status: "ready", tags: ["synthèse", "révision", "p1-l12"] },
  },

  {
    id: "p2-l1",
    period: 2,
    periodId: "p2",
    title: "La maison n’est jamais rangée",
    objective: "Comprendre des groupes nom + adjectif dans la villa-théâtre de Domina Aemilia.",
    lessonPoint: "Nom et adjectif s’associent pour préciser un objet ou un lieu.",
    canDo: [
      "Je repère un groupe nom + adjectif.",
      "Je distingue magnus/parvus et novus/bonus en contexte.",
      "Je traduis des groupes nominaux courts.",
    ],
    lexicon: ["liber novus", "villa magna", "magnus", "parvus", "novus", "bonus", "statua"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p2-l1-t1", type: "singleChoice", prompt: "Dans la villa, « liber novus » signifie :", options: ["livre neuf", "bon livre", "petit livre"], expected: "livre neuf", points: 1 },
      { id: "p2-l1-t2", type: "singleChoice", prompt: "« villa magna » se traduit par :", options: ["grande villa", "petite villa", "nouvelle villa"], expected: "grande villa", points: 1 },
      { id: "p2-l1-t3", type: "multipleChoice", prompt: "Sélectionne les adjectifs de taille.", options: ["magnus", "parvus", "novus", "bonus"], expected: ["magnus", "parvus"], points: 1 },
      {
        id: "p2-l1-t4",
        type: "matching",
        prompt: "Associe le groupe latin à son sens.",
        pairs: [
          { left: "liber novus", right: "livre neuf" },
          { left: "donum parvum", right: "petit cadeau" },
          { left: "vinum bonum", right: "bon vin" },
        ],
        rightOptions: ["petit cadeau", "bon vin", "livre neuf"],
        expected: { "liber novus": "livre neuf", "donum parvum": "petit cadeau", "vinum bonum": "bon vin" },
        points: 1,
      },
      { id: "p2-l1-t5", type: "singleChoice", prompt: "Contraste : quel contraire de magnus ?", options: ["novus", "parvus", "bonus"], expected: "parvus", points: 1 },
      { id: "p2-l1-t6", type: "ordering", prompt: "Remets le groupe dans l’ordre nom + adjectif :", options: ["novus", "liber"], expected: ["liber", "novus"], points: 1 },
      { id: "p2-l1-t7", type: "textInput", prompt: "Écris en latin : « bonus ».", expected: "bonus", points: 1 },
    ],
    production: [
      { id: "p2-l1-p1", type: "textInput", prompt: "Traduis en français : statua magna", expected: "grande statue", answerConfig: { type: "translation-segment", language: "fr", accepted: ["grande statue", "la grande statue", "une grande statue"] }, points: 1 },
      { id: "p2-l1-p2", type: "textInput", prompt: "Traduis en français : liber novus", expected: "livre neuf", answerConfig: { type: "translation-segment", language: "fr", accepted: ["livre neuf", "le livre neuf", "un livre neuf"] }, points: 1 },
      { id: "p2-l1-p3", type: "textInput", prompt: "Traduis en latin : la grande villa", expected: "villa magna", answerConfig: { type: "latin-expression", language: "latin", expected: "villa magna" }, points: 1 },
    ],
    summary: {
      retains: ["Un adjectif précise le nom.", "magnus/parvus et novus/bonus changent le sens de la scène."],
      cahier: ["villa magna = la grande villa", "liber novus = le livre neuf"],
      keywords: ["nom-adjectif", "magnus", "parvus", "novus", "bonus"],
    },
    meta: { status: "ready", tags: ["adjectifs", "villa", "p2-l1"] },
  },
  {
    id: "p2-l2",
    period: 2,
    periodId: "p2",
    title: "Où est la lettre ?",
    objective: "Comprendre les prépositions simples de lieu et de déplacement dans la villa.",
    lessonPoint: "Les prépositions in, ad, cum donnent des repères clairs de lieu et de relation.",
    canDo: [
      "Je reconnais in, ad, cum dans une phrase.",
      "Je localise un objet ou un personnage.",
      "Je traduis de courtes phrases de localisation.",
    ],
    lexicon: ["in", "ad", "cum", "epistula", "cista", "mensa", "forum", "venit"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p2-l2-t1", type: "singleChoice", prompt: "« epistula in cista est » signifie :", options: ["la lettre est dans la caisse", "la lettre va à la caisse", "la lettre vient avec la caisse"], expected: "la lettre est dans la caisse", points: 1 },
      { id: "p2-l2-t2", type: "singleChoice", prompt: "Dans « servus ad villam ambulat », ad indique :", options: ["le lieu où l’on est", "le mouvement vers", "la compagnie"], expected: "le mouvement vers", points: 1 },
      { id: "p2-l2-t3", type: "multipleChoice", prompt: "Sélectionne les prépositions étudiées.", options: ["in", "ad", "cum", "et"], expected: ["in", "ad", "cum"], points: 1 },
      {
        id: "p2-l2-t4",
        type: "matching",
        prompt: "Associe phrase et valeur de la préposition.",
        pairs: [
          { left: "epistula in mensa est", right: "dans" },
          { left: "servus ad forum ambulat", right: "vers" },
          { left: "poeta cum amico venit", right: "avec" },
        ],
        rightOptions: ["avec", "vers", "dans"],
        expected: { "epistula in mensa est": "dans", "servus ad forum ambulat": "vers", "poeta cum amico venit": "avec" },
        points: 1,
      },
      { id: "p2-l2-t5", type: "singleChoice", prompt: "Où est la lettre dans « epistula in cista est » ?", options: ["dans la caisse", "au forum", "avec l’ami"], expected: "dans la caisse", points: 1 },
      { id: "p2-l2-t6", type: "ordering", prompt: "Remets la phrase :", options: ["epistula", "in mensa", "est"], expected: ["epistula", "in mensa", "est"], points: 1 },
      { id: "p2-l2-t7", type: "textInput", prompt: "Écris la préposition latine pour « avec ».", expected: "cum", points: 1 },
    ],
    production: [
      { id: "p2-l2-p1", type: "textInput", prompt: "Traduis en français : Epistula in mensa est", expected: "la lettre est sur la table", answerConfig: { type: "translation-segment", language: "fr", accepted: ["la lettre est sur la table", "la lettre est dans la table", "la lettre est sur la mensa", "la lettre est sur table"] }, points: 1 },
      { id: "p2-l2-p2", type: "textInput", prompt: "Traduis en français : Servus ad forum ambulat", expected: "le serviteur marche vers le forum", answerConfig: { type: "translation-segment", language: "fr", accepted: ["le serviteur marche vers le forum", "l'esclave marche vers le marché", "le serviteur va au forum"] }, points: 1 },
      { id: "p2-l2-p3", type: "textInput", prompt: "Traduis en latin : la lettre est dans la caisse", expected: "epistula in cista est", answerConfig: { type: "latin-expression", language: "latin", expected: "epistula in cista est" }, points: 1 },
    ],
    summary: {
      retains: ["in = dans ; ad = vers ; cum = avec.", "La préposition aide à comprendre la scène."],
      cahier: ["epistula in cista est", "poeta cum amico venit"],
      keywords: ["prépositions", "in", "ad", "cum", "lettre"],
    },
    meta: { status: "ready", tags: ["lieu", "prépositions", "p2-l2"] },
  },
  {
    id: "p2-l3",
    period: 2,
    periodId: "p2",
    title: "Le banquet tourne mal",
    objective: "Lire une micro-scène de repas en repérant sujet, objet et action.",
    lessonPoint: "Dans la scène, vinum et aqua ne jouent pas le même rôle.",
    canDo: [
      "Je repère qui agit pendant le banquet.",
      "Je distingue vinum et aqua selon la phrase.",
      "Je comprends une phrase à ordre piégeux.",
    ],
    lexicon: ["vinum", "aqua", "ridet", "habet", "portat", "non", "convivium"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p2-l3-t1", type: "singleChoice", prompt: "Dans « Domina vinum non habet », que n’a pas la domina ?", options: ["vinum", "aqua", "donum"], expected: "vinum", points: 1 },
      { id: "p2-l3-t2", type: "singleChoice", prompt: "Dans « Servus aquam portat », le complément est :", options: ["Servus", "aquam", "portat"], expected: "aquam", points: 1 },
      { id: "p2-l3-t3", type: "singleChoice", prompt: "Quel verbe signifie « rit » ?", options: ["ridet", "habet", "portat"], expected: "ridet", points: 1 },
      { id: "p2-l3-t4", type: "multipleChoice", prompt: "Sélectionne les mots qui appartiennent à la scène du repas.", options: ["vinum", "aqua", "convivium", "hortus"], expected: ["vinum", "aqua", "convivium"], points: 1 },
      {
        id: "p2-l3-t5",
        type: "matching",
        prompt: "Associe chaque phrase à sa traduction.",
        pairs: [
          { left: "Domina vinum non habet", right: "La maîtresse n’a pas de vin" },
          { left: "Servus aquam portat", right: "Le serviteur porte de l’eau" },
          { left: "Amicus ridet", right: "L’ami rit" },
        ],
        rightOptions: ["L’ami rit", "La maîtresse n’a pas de vin", "Le serviteur porte de l’eau"],
        expected: { "Domina vinum non habet": "La maîtresse n’a pas de vin", "Servus aquam portat": "Le serviteur porte de l’eau", "Amicus ridet": "L’ami rit" },
        points: 1,
      },
      { id: "p2-l3-t6", type: "singleChoice", prompt: "Piège d’ordre : « Vinum servus non habet ». Qui n’a pas de vin ?", options: ["Vinum", "servus", "non"], expected: "servus", points: 1 },
      { id: "p2-l3-t7", type: "ordering", prompt: "Remets la phrase canonique :", options: ["servus", "aquam", "portat"], expected: ["servus", "portat", "aquam"], points: 1 },
    ],
    production: [
      { id: "p2-l3-p1", type: "textInput", prompt: "Traduis en français : Domina vinum non habet", expected: "la maîtresse n'a pas de vin", answerConfig: { type: "translation-segment", language: "fr", accepted: ["la maîtresse n'a pas de vin", "la maitresse n'a pas de vin", "la maîtresse ne possède pas de vin"] }, points: 1 },
      { id: "p2-l3-p2", type: "textInput", prompt: "Traduis en français : Servus aquam portat", expected: "le serviteur porte de l'eau", answerConfig: { type: "translation-segment", language: "fr", accepted: ["le serviteur porte de l'eau", "l'esclave porte de l'eau", "l’esclave porte de l’eau"] }, points: 1 },
      { id: "p2-l3-p3", type: "textInput", prompt: "Traduis en latin : l’ami rit", expected: "amicus ridet", answerConfig: { type: "latin-expression", language: "latin", expected: "amicus ridet" }, points: 1 },
    ],
    summary: {
      retains: ["Une scène se lit avec sujet, verbe, complément.", "vinum et aqua n’ont pas le même rôle selon la phrase."],
      cahier: ["Domina vinum non habet", "Servus aquam portat"],
      keywords: ["banquet", "vinum", "aqua", "ridet"],
    },
    meta: { status: "ready", tags: ["banquet", "scène", "p2-l3"] },
  },
  {
    id: "p2-l4",
    period: 2,
    periodId: "p2",
    title: "Le poète agaçant",
    objective: "Déduire le sens par le contexte dans une scène comique autour de Poeta Crispus.",
    lessonPoint: "Le contexte aide à comprendre même quand un mot est nouveau.",
    canDo: [
      "Je m’appuie sur la scène pour comprendre.",
      "Je repère le mot poète et ses actions.",
      "Je traite un item piégeux avec poetam.",
    ],
    lexicon: ["poeta", "liber", "corona", "epistula", "iratus", "laetus", "poetam", "clamat"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p2-l4-t1", type: "singleChoice", prompt: "Dans « Poeta clamat », que fait le poète ?", options: ["il crie", "il dort", "il marche"], expected: "il crie", points: 1 },
      { id: "p2-l4-t2", type: "singleChoice", prompt: "Quel mot signifie « fâché » ?", options: ["iratus", "laetus", "bonus"], expected: "iratus", points: 1 },
      { id: "p2-l4-t3", type: "multipleChoice", prompt: "Sélectionne les objets de la scène du poète.", options: ["liber", "corona", "epistula", "hortus"], expected: ["liber", "corona", "epistula"], points: 1 },
      {
        id: "p2-l4-t4",
        type: "matching",
        prompt: "Associe phrase et émotion/context.",
        pairs: [
          { left: "Poeta iratus clamat", right: "le poète est fâché" },
          { left: "Poeta laetus cantat", right: "le poète est content" },
          { left: "Servus poetam non amat", right: "le serviteur n’aime pas le poète" },
        ],
        rightOptions: ["le poète est content", "le serviteur n’aime pas le poète", "le poète est fâché"],
        expected: { "Poeta iratus clamat": "le poète est fâché", "Poeta laetus cantat": "le poète est content", "Servus poetam non amat": "le serviteur n’aime pas le poète" },
        points: 1,
      },
      { id: "p2-l4-t5", type: "singleChoice", prompt: "Item piège : dans « Servus poetam videt », poetam est :", options: ["sujet", "complément", "verbe"], expected: "complément", points: 1 },
      { id: "p2-l4-t6", type: "ordering", prompt: "Remets en ordre S/V/C :", options: ["poeta", "librum", "portat"], expected: ["poeta", "portat", "librum"], points: 1 },
      { id: "p2-l4-t7", type: "textInput", prompt: "Écris en latin : « content ».", expected: "laetus", points: 1 },
    ],
    production: [
      { id: "p2-l4-p1", type: "textInput", prompt: "Traduis en français : Poeta clamat", expected: "le poète crie", answerConfig: { type: "translation-segment", language: "fr", accepted: ["le poète crie", "le poete crie", "un poète crie"] }, points: 1 },
      { id: "p2-l4-p2", type: "textInput", prompt: "Traduis en français : Servus poetam non amat", expected: "le serviteur n'aime pas le poète", answerConfig: { type: "translation-segment", language: "fr", accepted: ["le serviteur n'aime pas le poète", "l'esclave n'aime pas le poète", "le serviteur ne supporte pas le poète"] }, points: 1 },
      { id: "p2-l4-p3", type: "textInput", prompt: "Traduis en latin : le poète porte le livre", expected: "poeta librum portat", answerConfig: { type: "latin-expression", language: "latin", expected: "poeta librum portat" }, points: 1 },
    ],
    summary: {
      retains: ["Le contexte de scène aide à comprendre les mots.", "poetam peut apparaître comme complément."],
      cahier: ["Poeta clamat", "Servus poetam non amat"],
      keywords: ["poète", "contexte", "iratus", "laetus", "poetam"],
    },
    meta: { status: "ready", tags: ["poète", "contexte", "p2-l4"] },
  },
  {
    id: "p2-l5",
    period: 2,
    periodId: "p2",
    title: "L’âne dans le jardin",
    objective: "Mémoriser et comprendre une scène comique vive autour d’Asinus Rufus.",
    lessonPoint: "Une image forte aide à retenir vocabulaire et structures.",
    canDo: [
      "Je décris une scène simple avec l’âne.",
      "Je repère un piège V/S/C.",
      "Je traduis des phrases courtes de situation.",
    ],
    lexicon: ["asinus", "hortus", "rosa", "aqua", "in horto", "timet"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p2-l5-t1", type: "singleChoice", prompt: "« Asinus in horto est » signifie :", options: ["l’âne est dans le jardin", "l’âne est au temple", "l’âne est sur la route"], expected: "l’âne est dans le jardin", points: 1 },
      { id: "p2-l5-t2", type: "singleChoice", prompt: "Dans « Servus asinum timet », qui a peur ?", options: ["Servus", "asinum", "timet"], expected: "Servus", points: 1 },
      { id: "p2-l5-t3", type: "multipleChoice", prompt: "Sélectionne les mots de la scène du jardin.", options: ["asinus", "hortus", "rosa", "forum"], expected: ["asinus", "hortus", "rosa"], points: 1 },
      {
        id: "p2-l5-t4",
        type: "matching",
        prompt: "Associe phrase et traduction.",
        pairs: [
          { left: "Asinus rosam portat", right: "L’âne porte une rose" },
          { left: "Davus asinum timet", right: "Davus craint l’âne" },
          { left: "Asinus in horto est", right: "L’âne est dans le jardin" },
        ],
        rightOptions: ["Davus craint l’âne", "L’âne est dans le jardin", "L’âne porte une rose"],
        expected: { "Asinus rosam portat": "L’âne porte une rose", "Davus asinum timet": "Davus craint l’âne", "Asinus in horto est": "L’âne est dans le jardin" },
        points: 1,
      },
      { id: "p2-l5-t5", type: "singleChoice", prompt: "Piège V/S/C : « Timet Davus asinum ». Qui est sujet ?", options: ["Davus", "asinum", "timet"], expected: "Davus", points: 1 },
      { id: "p2-l5-t6", type: "ordering", prompt: "Remets la phrase canonique :", options: ["asinus", "rosam", "portat"], expected: ["asinus", "portat", "rosam"], points: 1 },
      { id: "p2-l5-t7", type: "textInput", prompt: "Écris en latin : « jardin ».", expected: "hortus", points: 1 },
    ],
    production: [
      { id: "p2-l5-p1", type: "textInput", prompt: "Traduis en français : Asinus rosam portat", expected: "l'âne porte une rose", answerConfig: { type: "translation-segment", language: "fr", accepted: ["l'âne porte une rose", "l’âne porte une rose", "un âne porte une rose"] }, points: 1 },
      { id: "p2-l5-p2", type: "textInput", prompt: "Traduis en français : Davus asinum timet", expected: "davus craint l'âne", answerConfig: { type: "translation-segment", language: "fr", accepted: ["davus craint l'âne", "davus a peur de l'âne", "davus a peur de l’âne"] }, points: 1 },
      { id: "p2-l5-p3", type: "textInput", prompt: "Traduis en latin : l’âne est dans le jardin", expected: "asinus in horto est", answerConfig: { type: "latin-expression", language: "latin", expected: "asinus in horto est" }, points: 1 },
    ],
    summary: {
      retains: ["Une scène comique aide à mémoriser vite.", "Même en V/S/C, on retrouve qui agit."],
      cahier: ["Asinus in horto est", "Davus asinum timet"],
      keywords: ["âne", "jardin", "piège", "timet"],
    },
    meta: { status: "ready", tags: ["âne", "hortus", "p2-l5"] },
  },
  {
    id: "p2-l6",
    period: 2,
    periodId: "p2",
    title: "La lettre perdue",
    objective: "Comprendre une mini-scène en 2-3 phrases liées autour d’une lettre perdue.",
    lessonPoint: "Je relie qui cherche, qui voit et où se trouve la lettre.",
    canDo: [
      "Je suis une petite chronologie de scène.",
      "J’identifie chercheur, observateur et lieu.",
      "Je traduis une phrase finale de synthèse.",
    ],
    lexicon: ["epistula", "epistulam", "quaerit", "videt", "in mensa", "amicus", "portat"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p2-l6-t1", type: "singleChoice", prompt: "Dans « Domina epistulam quaerit », qui cherche ?", options: ["Domina", "epistulam", "quaerit"], expected: "Domina", points: 1 },
      { id: "p2-l6-t2", type: "singleChoice", prompt: "Dans « Servus epistulam in mensa videt », qui voit la lettre ?", options: ["Servus", "mensa", "epistulam"], expected: "Servus", points: 1 },
      { id: "p2-l6-t3", type: "singleChoice", prompt: "Où est la lettre dans la scène ?", options: ["in mensa", "ad forum", "in horto"], expected: "in mensa", points: 1 },
      { id: "p2-l6-t4", type: "multipleChoice", prompt: "Sélectionne les actions de la scène.", options: ["quaerit", "videt", "portat", "cantat"], expected: ["quaerit", "videt", "portat"], points: 1 },
      {
        id: "p2-l6-t5",
        type: "matching",
        prompt: "Associe phrase et rôle dans la scène.",
        pairs: [
          { left: "Domina epistulam quaerit", right: "qui cherche" },
          { left: "Servus epistulam videt", right: "qui voit" },
          { left: "Epistula in mensa est", right: "où elle est" },
        ],
        rightOptions: ["où elle est", "qui cherche", "qui voit"],
        expected: { "Domina epistulam quaerit": "qui cherche", "Servus epistulam videt": "qui voit", "Epistula in mensa est": "où elle est" },
        points: 1,
      },
      { id: "p2-l6-t6", type: "ordering", prompt: "Ordonne la logique de scène : chercher → voir → porter.", options: ["quaerit", "videt", "portat"], expected: ["quaerit", "videt", "portat"], points: 1 },
      { id: "p2-l6-t7", type: "textInput", prompt: "Écris le verbe latin pour « cherche » (3e pers.).", expected: "quaerit", points: 1 },
    ],
    production: [
      { id: "p2-l6-p1", type: "textInput", prompt: "Traduis en français : Domina epistulam quaerit", expected: "la maîtresse cherche la lettre", answerConfig: { type: "translation-segment", language: "fr", accepted: ["la maîtresse cherche la lettre", "la maitresse cherche la lettre", "domina cherche la lettre"] }, points: 1 },
      { id: "p2-l6-p2", type: "textInput", prompt: "Traduis en français : Servus epistulam in mensa videt", expected: "le serviteur voit la lettre sur la table", answerConfig: { type: "translation-segment", language: "fr", accepted: ["le serviteur voit la lettre sur la table", "l'esclave voit la lettre sur la table", "le serviteur voit la lettre sur la mensa"] }, points: 1 },
      { id: "p2-l6-p3", type: "textInput", prompt: "Traduis en latin : l’ami porte la lettre", expected: "amicus epistulam portat", answerConfig: { type: "latin-expression", language: "latin", expected: "amicus epistulam portat" }, points: 1 },
    ],
    summary: {
      retains: ["Je peux relier plusieurs phrases d’une même scène.", "Je sais retrouver qui cherche, qui voit et où est l’objet."],
      cahier: ["Domina epistulam quaerit", "Servus epistulam in mensa videt"],
      keywords: ["lettre", "quaerit", "videt", "in mensa", "scène"],
    },
    meta: { status: "ready", tags: ["lettre", "scène", "p2-l6"] },
  },
  {
    id: "p2-l7",
    period: 2,
    periodId: "p2",
    title: "Forum, temple, jardin",
    objective: "Comprendre où se déroule la scène et distinguer position et déplacement.",
    lessonPoint: "in indique la position, ad indique le déplacement vers un lieu.",
    canDo: [
      "Je repère le lieu d’une scène.",
      "Je distingue être quelque part et aller vers un lieu.",
      "Je traduis des micro-phrases de localisation.",
    ],
    lexicon: ["forum", "templum", "hortus", "via", "murus", "in", "ad"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p2-l7-t1", type: "singleChoice", prompt: "Dans « Davus in horto est », l’action décrit :", options: ["une position", "un déplacement", "un ordre"], expected: "une position", points: 1 },
      { id: "p2-l7-t2", type: "singleChoice", prompt: "Dans « Paula ad templum ambulat », ad indique :", options: ["dans", "vers", "avec"], expected: "vers", points: 1 },
      { id: "p2-l7-t3", type: "multipleChoice", prompt: "Sélectionne les lieux de la scène.", options: ["forum", "templum", "hortus", "epistula"], expected: ["forum", "templum", "hortus"], points: 1 },
      {
        id: "p2-l7-t4",
        type: "matching",
        prompt: "Associe phrase et valeur de la préposition.",
        pairs: [
          { left: "Servus in via est", right: "position" },
          { left: "Domina ad forum ambulat", right: "déplacement" },
          { left: "Asinus in horto est", right: "position" },
        ],
        rightOptions: ["position", "déplacement"],
        expected: { "Servus in via est": "position", "Domina ad forum ambulat": "déplacement", "Asinus in horto est": "position" },
        points: 1,
      },
      { id: "p2-l7-t5", type: "singleChoice", prompt: "« sub muro » signifie plutôt :", options: ["sous le mur", "vers le mur", "dans le mur"], expected: "sous le mur", points: 1 },
      { id: "p2-l7-t6", type: "ordering", prompt: "Remets la phrase en ordre canonique :", options: ["Paula", "ad templum", "ambulat"], expected: ["Paula", "ad templum", "ambulat"], points: 1 },
      { id: "p2-l7-t7", type: "textInput", prompt: "Écris la préposition latine pour « dans ».", expected: "in", points: 1 },
    ],
    production: [
      { id: "p2-l7-p1", type: "textInput", prompt: "Traduis en français : Paula ad templum ambulat", expected: "paula marche vers le temple", answerConfig: { type: "translation-segment", language: "fr", accepted: ["paula marche vers le temple", "paula va au temple", "paula se dirige vers le temple"] }, points: 1 },
      { id: "p2-l7-p2", type: "textInput", prompt: "Traduis en français : Servus sub muro est", expected: "le serviteur est sous le mur", answerConfig: { type: "translation-segment", language: "fr", accepted: ["le serviteur est sous le mur", "l'esclave est sous le mur", "le serviteur se trouve sous le mur"] }, points: 1 },
      { id: "p2-l7-p3", type: "textInput", prompt: "Traduis en latin : le maître entre dans la villa", expected: "dominus in villam intrat", answerConfig: { type: "latin-expression", language: "latin", expected: "dominus in villam intrat" }, points: 1 },
    ],
    summary: {
      retains: ["in décrit où l’on est, ad vers où l’on va.", "Les lieux du décor guident la compréhension de scène."],
      cahier: ["Paula ad templum ambulat", "Servus in via est"],
      keywords: ["forum", "templum", "hortus", "in", "ad"],
    },
    meta: { status: "ready", tags: ["lieux", "prépositions", "p2-l7"] },
  },
  {
    id: "p2-l8",
    period: 2,
    periodId: "p2",
    title: "La statue, le cadeau et l’ami",
    objective: "Distinguer sujet, verbe et complément dans des scènes variées.",
    lessonPoint: "Même dans une scène riche en objets, on retrouve qui agit et ce qui est affecté.",
    canDo: [
      "Je repère sujet, verbe et complément.",
      "Je lis une phrase à ordre piégeux C/S/V.",
      "Je traduis des phrases de scène avec objets.",
    ],
    lexicon: ["statua", "donum", "corona", "templum", "portat", "habet", "videt"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p2-l8-t1", type: "singleChoice", prompt: "Dans « Dominus coronam habet », le complément est :", options: ["Dominus", "coronam", "habet"], expected: "coronam", points: 1 },
      { id: "p2-l8-t2", type: "singleChoice", prompt: "Dans « Amicus donum ad templum portat », le sujet est :", options: ["Amicus", "donum", "templum"], expected: "Amicus", points: 1 },
      { id: "p2-l8-t3", type: "multipleChoice", prompt: "Sélectionne les objets de la scène.", options: ["statua", "donum", "corona", "via"], expected: ["statua", "donum", "corona"], points: 1 },
      {
        id: "p2-l8-t4",
        type: "matching",
        prompt: "Associe phrase et complément.",
        pairs: [
          { left: "Dominus coronam habet", right: "coronam" },
          { left: "Poeta donum portat", right: "donum" },
          { left: "Servus statuam videt", right: "statuam" },
        ],
        rightOptions: ["statuam", "donum", "coronam"],
        expected: { "Dominus coronam habet": "coronam", "Poeta donum portat": "donum", "Servus statuam videt": "statuam" },
        points: 1,
      },
      { id: "p2-l8-t5", type: "singleChoice", prompt: "Piège C/S/V : « Donum amicus portat ». Qui porte ?", options: ["Donum", "amicus", "portat"], expected: "amicus", points: 1 },
      { id: "p2-l8-t6", type: "ordering", prompt: "Remets S/V/C :", options: ["puella", "donum", "videt"], expected: ["puella", "videt", "donum"], points: 1 },
      { id: "p2-l8-t7", type: "textInput", prompt: "Écris le verbe de la phrase : « Servus statuam videt ».", expected: "videt", points: 1 },
    ],
    production: [
      { id: "p2-l8-p1", type: "textInput", prompt: "Traduis en français : Dominus coronam habet", expected: "le maître a une couronne", answerConfig: { type: "translation-segment", language: "fr", accepted: ["le maître a une couronne", "le maitre a une couronne", "le maître possède une couronne"] }, points: 1 },
      { id: "p2-l8-p2", type: "textInput", prompt: "Traduis en français : Amicus donum ad templum portat", expected: "l'ami porte un cadeau vers le temple", answerConfig: { type: "translation-segment", language: "fr", accepted: ["l'ami porte un cadeau vers le temple", "l’ami porte un cadeau vers le temple", "l'ami apporte un cadeau au temple"] }, points: 1 },
      { id: "p2-l8-p3", type: "textInput", prompt: "Traduis en latin : la jeune fille voit le cadeau", expected: "puella donum videt", answerConfig: { type: "latin-expression", language: "latin", expected: "puella donum videt" }, points: 1 },
    ],
    summary: {
      retains: ["Sujet, verbe et complément restent lisibles dans la scène.", "Un ordre C/S/V peut piéger la lecture rapide."],
      cahier: ["Dominus coronam habet", "Amicus donum ad templum portat"],
      keywords: ["statua", "donum", "corona", "C/S/V"],
    },
    meta: { status: "ready", tags: ["scène", "fonctions", "p2-l8"] },
  },
  {
    id: "p2-l9",
    period: 2,
    periodId: "p2",
    title: "D’autres noms existent",
    objective: "Découvrir quelques noms fréquents hors du duo puella/servus.",
    lessonPoint: "On élargit le lexique avec quelques noms très courants, sans tableau complexe.",
    canDo: [
      "Je reconnais mater, pater, rex, nomen.",
      "Je comprends leur rôle dans des phrases courtes.",
      "Je traduis des micro-phrases avec ces nouveaux noms.",
    ],
    lexicon: ["mater", "pater", "rex", "nomen", "librum", "statuam", "forum"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p2-l9-t1", type: "singleChoice", prompt: "Quel mot latin signifie « mère » ?", options: ["mater", "pater", "rex"], expected: "mater", points: 1 },
      { id: "p2-l9-t2", type: "singleChoice", prompt: "Quel mot latin signifie « roi » ?", options: ["nomen", "rex", "pater"], expected: "rex", points: 1 },
      { id: "p2-l9-t3", type: "multipleChoice", prompt: "Sélectionne les noms de personnes.", options: ["mater", "pater", "rex", "nomen"], expected: ["mater", "pater", "rex"], points: 1 },
      {
        id: "p2-l9-t4",
        type: "matching",
        prompt: "Associe mot latin et sens français.",
        pairs: [
          { left: "mater", right: "mère" },
          { left: "pater", right: "père" },
          { left: "nomen", right: "nom" },
        ],
        rightOptions: ["nom", "mère", "père"],
        expected: { mater: "mère", pater: "père", nomen: "nom" },
        points: 1,
      },
      { id: "p2-l9-t5", type: "singleChoice", prompt: "Dans « Mater librum habet », que possède la mère ?", options: ["librum", "mater", "habet"], expected: "librum", points: 1 },
      { id: "p2-l9-t6", type: "ordering", prompt: "Remets la phrase :", options: ["Pater", "ad forum", "ambulat"], expected: ["Pater", "ad forum", "ambulat"], points: 1 },
      { id: "p2-l9-t7", type: "textInput", prompt: "Écris en latin : « nom ».", expected: "nomen", points: 1 },
    ],
    production: [
      { id: "p2-l9-p1", type: "textInput", prompt: "Traduis en français : Mater librum habet", expected: "la mère a un livre", answerConfig: { type: "translation-segment", language: "fr", accepted: ["la mère a un livre", "la mere a un livre", "la mère possède un livre"] }, points: 1 },
      { id: "p2-l9-p2", type: "textInput", prompt: "Traduis en français : Pater ad forum ambulat", expected: "le père marche vers le forum", answerConfig: { type: "translation-segment", language: "fr", accepted: ["le père marche vers le forum", "le pere marche vers le forum", "le père va au forum"] }, points: 1 },
      { id: "p2-l9-p3", type: "textInput", prompt: "Traduis en latin : le roi voit la statue", expected: "rex statuam videt", answerConfig: { type: "latin-expression", language: "latin", expected: "rex statuam videt" }, points: 1 },
    ],
    summary: {
      retains: ["On peut lire de nouveaux noms sans faire un cours de paradigmes.", "Le sens vient du contexte de scène."],
      cahier: ["mater librum habet", "rex statuam videt"],
      keywords: ["mater", "pater", "rex", "nomen"],
    },
    meta: { status: "ready", tags: ["lexique", "noms", "p2-l9"] },
  },
  {
    id: "p2-l10",
    period: 2,
    periodId: "p2",
    title: "Qui fait quoi, vraiment ?",
    objective: "Renforcer la lecture des fonctions même quand l’ordre des mots varie.",
    lessonPoint: "La forme et la fonction comptent plus que la simple position des mots.",
    canDo: [
      "Je compare deux phrases proches et j’explique la différence de sens.",
      "Je repère qui appelle qui.",
      "Je traduis des phrases à ordre variable.",
    ],
    lexicon: ["servum", "dominus", "dominum", "servus", "vocat", "ancilla", "coronam", "domina"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p2-l10-t1", type: "singleChoice", prompt: "Dans « Servum dominus vocat », qui est appelé ?", options: ["servum", "dominus", "vocat"], expected: "servum", points: 1 },
      { id: "p2-l10-t2", type: "singleChoice", prompt: "Dans « Dominum servus vocat », qui est appelé ?", options: ["dominum", "servus", "les deux"], expected: "dominum", points: 1 },
      { id: "p2-l10-t3", type: "singleChoice", prompt: "Dans les deux phrases, qui agit dans « Servum dominus vocat » ?", options: ["dominus", "servum", "vocat"], expected: "dominus", points: 1 },
      { id: "p2-l10-t4", type: "multipleChoice", prompt: "Quelles phrases gardent le sens « le maître appelle le serviteur » ?", options: ["Servum dominus vocat", "Dominus servum vocat", "Servus dominum vocat", "Vocat dominus servum"], expected: ["Servum dominus vocat", "Dominus servum vocat", "Vocat dominus servum"], points: 1 },
      {
        id: "p2-l10-t5",
        type: "matching",
        prompt: "Associe phrase et traduction juste.",
        pairs: [
          { left: "Servum dominus vocat", right: "Le maître appelle le serviteur" },
          { left: "Dominum servus vocat", right: "Le serviteur appelle le maître" },
          { left: "Coronam ancilla habet", right: "La servante a une couronne" },
        ],
        rightOptions: ["La servante a une couronne", "Le serviteur appelle le maître", "Le maître appelle le serviteur"],
        expected: { "Servum dominus vocat": "Le maître appelle le serviteur", "Dominum servus vocat": "Le serviteur appelle le maître", "Coronam ancilla habet": "La servante a une couronne" },
        points: 1,
      },
      { id: "p2-l10-t6", type: "ordering", prompt: "Mets la phrase en ordre C/S/V :", options: ["dominam", "servus", "vocat"], expected: ["dominam", "servus", "vocat"], points: 1 },
      { id: "p2-l10-t7", type: "textInput", prompt: "Dans « Dominum servus vocat », écris le mot qui reçoit l’action.", expected: "dominum", points: 1 },
    ],
    production: [
      { id: "p2-l10-p1", type: "textInput", prompt: "Traduis en français : Donum ancilla portat", expected: "la servante porte un cadeau", answerConfig: { type: "translation-segment", language: "fr", accepted: ["la servante porte un cadeau", "une servante porte un cadeau", "l'ancilla porte un cadeau"] }, points: 1 },
      { id: "p2-l10-p2", type: "textInput", prompt: "Traduis en français : Coronam poeta habet", expected: "le poète a une couronne", answerConfig: { type: "translation-segment", language: "fr", accepted: ["le poète a une couronne", "le poete a une couronne", "le poète possède une couronne"] }, points: 1 },
      { id: "p2-l10-p3", type: "textInput", prompt: "Traduis en latin : le serviteur appelle la maîtresse de maison", expected: "servus dominam vocat", answerConfig: { type: "latin-expression", language: "latin", expected: "servus dominam vocat" }, points: 1 },
    ],
    summary: {
      retains: ["Deux phrases proches peuvent inverser le sens.", "Il faut regarder la fonction, pas seulement l’ordre."],
      cahier: ["Servum dominus vocat", "Dominum servus vocat"],
      keywords: ["contraste", "ordre", "fonctions", "vocat"],
    },
    meta: { status: "ready", tags: ["contraste", "ordre", "p2-l10"] },
  },
  {
    id: "p2-l11",
    period: 2,
    periodId: "p2",
    title: "Lire pour comprendre une micro-scène",
    objective: "Lire trois phrases et extraire des informations explicites.",
    lessonPoint: "Lire une micro-scène, c’est repérer des infos concrètes phrase par phrase.",
    canDo: [
      "Je repère qui fait quoi dans trois phrases.",
      "Je isole une information explicite sans deviner.",
      "Je reformule une micro-scène en français simple.",
    ],
    lexicon: ["horto", "asinus", "aquam", "dominus", "ridet", "servus", "videt"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p2-l11-t1", type: "singleChoice", prompt: "Dans la micro-scène, où est le serviteur ?", options: ["in horto", "ad forum", "sub muro"], expected: "in horto", points: 1 },
      { id: "p2-l11-t2", type: "singleChoice", prompt: "Qui porte l’eau ?", options: ["asinus", "dominus", "servus"], expected: "asinus", points: 1 },
      { id: "p2-l11-t3", type: "singleChoice", prompt: "Qui rit ?", options: ["dominus", "asinus", "servus"], expected: "dominus", points: 1 },
      { id: "p2-l11-t4", type: "multipleChoice", prompt: "Sélectionne les infos exactes de la micro-scène.", options: ["Servus in horto est", "Asinus aquam portat", "Dominus ridet", "Poeta dormit"], expected: ["Servus in horto est", "Asinus aquam portat", "Dominus ridet"], points: 1 },
      {
        id: "p2-l11-t5",
        type: "matching",
        prompt: "Associe phrase et information.",
        pairs: [
          { left: "Servus in horto est", right: "lieu du serviteur" },
          { left: "Asinus aquam portat", right: "action de l’âne" },
          { left: "Dominus ridet", right: "réaction finale" },
        ],
        rightOptions: ["réaction finale", "lieu du serviteur", "action de l’âne"],
        expected: { "Servus in horto est": "lieu du serviteur", "Asinus aquam portat": "action de l’âne", "Dominus ridet": "réaction finale" },
        points: 1,
      },
      { id: "p2-l11-t6", type: "ordering", prompt: "Ordonne la micro-scène dans l’ordre logique de lecture.", options: ["Servus in horto est", "Asinus aquam portat", "Dominus ridet"], expected: ["Servus in horto est", "Asinus aquam portat", "Dominus ridet"], points: 1 },
      { id: "p2-l11-t7", type: "textInput", prompt: "Écris le verbe de « Dominus ridet ».", expected: "ridet", points: 1 },
    ],
    production: [
      { id: "p2-l11-p1", type: "textInput", prompt: "Traduis en français : Asinus aquam portat", expected: "l'âne porte de l'eau", answerConfig: { type: "translation-segment", language: "fr", accepted: ["l'âne porte de l'eau", "l’âne porte de l’eau", "un âne porte de l'eau"] }, points: 1 },
      { id: "p2-l11-p2", type: "textInput", prompt: "Traduis en français : Dominus ridet", expected: "le maître rit", answerConfig: { type: "translation-segment", language: "fr", accepted: ["le maître rit", "le maitre rit", "un maître rit"] }, points: 1 },
      { id: "p2-l11-p3", type: "textInput", prompt: "Traduis en latin : le serviteur voit l’âne", expected: "servus asinum videt", answerConfig: { type: "latin-expression", language: "latin", expected: "servus asinum videt" }, points: 1 },
    ],
    summary: {
      retains: ["Une micro-scène donne des informations explicites et vérifiables.", "Lire phrase par phrase évite les erreurs."],
      cahier: ["Servus in horto est", "Asinus aquam portat", "Dominus ridet"],
      keywords: ["micro-scène", "lecture", "infos explicites", "ridet"],
    },
    meta: { status: "ready", tags: ["lecture", "micro-scène", "p2-l11"] },
  },
  {
    id: "p2-l12",
    period: 2,
    periodId: "p2",
    title: "La grande scène finale",
    objective: "Comprendre une courte scène de quatre phrases et en extraire les informations clés.",
    lessonPoint: "Je relie plusieurs actions dans une scène unique, avec un piège d’ordre des mots.",
    canDo: [
      "Je retrouve qui cherche quoi.",
      "Je localise un personnage dans l’espace.",
      "Je synthétise une scène complète en gardant les rôles justes.",
    ],
    lexicon: ["epistulam", "quaerit", "in horto", "coronam", "portat", "ridet", "videt"],
    maxScore: LESSONS_SPEC.lessonMax,
    training: [
      { id: "p2-l12-t1", type: "singleChoice", prompt: "Dans « Domina epistulam quaerit », que cherche la domina ?", options: ["epistulam", "domina", "quaerit"], expected: "epistulam", points: 1 },
      { id: "p2-l12-t2", type: "singleChoice", prompt: "Où est le serviteur dans la scène ?", options: ["in horto", "ad forum", "in templo"], expected: "in horto", points: 1 },
      { id: "p2-l12-t3", type: "singleChoice", prompt: "Qui porte la couronne ?", options: ["asinus", "dominus", "servus"], expected: "asinus", points: 1 },
      { id: "p2-l12-t4", type: "singleChoice", prompt: "Qui rit ?", options: ["dominus", "domina", "poeta"], expected: "dominus", points: 1 },
      { id: "p2-l12-t5", type: "multipleChoice", prompt: "Sélectionne les informations exactes de la grande scène.", options: ["Domina cherche une lettre", "Le serviteur est dans le jardin", "L’âne porte une couronne", "Le maître rit", "Poeta porte la lettre"], expected: ["Domina cherche une lettre", "Le serviteur est dans le jardin", "L’âne porte une couronne", "Le maître rit"], points: 1 },
      {
        id: "p2-l12-t6",
        type: "matching",
        prompt: "Associe phrase et rôle dans la scène.",
        pairs: [
          { left: "Domina epistulam quaerit", right: "recherche" },
          { left: "Asinus coronam portat", right: "transport" },
          { left: "Dominus ridet", right: "réaction" },
        ],
        rightOptions: ["réaction", "recherche", "transport"],
        expected: { "Domina epistulam quaerit": "recherche", "Asinus coronam portat": "transport", "Dominus ridet": "réaction" },
        points: 1,
      },
      { id: "p2-l12-t7", type: "ordering", prompt: "Piège d’ordre : remets « Coronam asinus portat » en S/V/C.", options: ["coronam", "asinus", "portat"], expected: ["asinus", "portat", "coronam"], points: 1 },
    ],
    production: [
      { id: "p2-l12-p1", type: "textInput", prompt: "Traduis en français : Domina epistulam quaerit", expected: "la maîtresse cherche la lettre", answerConfig: { type: "translation-segment", language: "fr", accepted: ["la maîtresse cherche la lettre", "la maitresse cherche la lettre", "domina cherche la lettre"] }, points: 1 },
      { id: "p2-l12-p2", type: "textInput", prompt: "Traduis en français : Asinus coronam portat", expected: "l'âne porte une couronne", answerConfig: { type: "translation-segment", language: "fr", accepted: ["l'âne porte une couronne", "l’âne porte une couronne", "un âne porte une couronne"] }, points: 1 },
      { id: "p2-l12-p3", type: "textInput", prompt: "Traduis en latin : le maître voit le serviteur", expected: "dominus servum videt", answerConfig: { type: "latin-expression", language: "latin", expected: "dominus servum videt" }, points: 1 },
    ],
    summary: {
      retains: ["Je peux suivre une scène de quatre phrases sans me perdre.", "Je vérifie toujours qui agit et qui reçoit l’action."],
      cahier: ["Domina epistulam quaerit", "Asinus coronam portat", "Dominus ridet"],
      keywords: ["scène finale", "lettre", "couronne", "piège ordre"],
    },
    meta: { status: "ready", tags: ["synthèse", "scène finale", "p2-l12"] },
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
  createPlaceholderLesson({
    id: "p3-l17",
    period: 3,
    title: "P3 — Leçon 7 (placeholder)",
    objective: "Placeholder structurel pour extension à 12 leçons en période 3.",
  }),
  createPlaceholderLesson({
    id: "p3-l18",
    period: 3,
    title: "P3 — Leçon 8 (placeholder)",
    objective: "Placeholder structurel pour extension à 12 leçons en période 3.",
  }),
  createPlaceholderLesson({
    id: "p3-l19",
    period: 3,
    title: "P3 — Leçon 9 (placeholder)",
    objective: "Placeholder structurel pour extension à 12 leçons en période 3.",
  }),
  createPlaceholderLesson({
    id: "p3-l20",
    period: 3,
    title: "P3 — Leçon 10 (placeholder)",
    objective: "Placeholder structurel pour extension à 12 leçons en période 3.",
  }),
  createPlaceholderLesson({
    id: "p3-l21",
    period: 3,
    title: "P3 — Leçon 11 (placeholder)",
    objective: "Placeholder structurel pour extension à 12 leçons en période 3.",
  }),
  createPlaceholderLesson({
    id: "p3-l22",
    period: 3,
    title: "P3 — Leçon 12 (placeholder)",
    objective: "Placeholder structurel pour extension à 12 leçons en période 3.",
  }),
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

export const periodsByLevel = {
  "5e": namespacePeriodsForLevel("5e", PERIODS_5E_BASE),
  "4e": namespacePeriodsForLevel("4e", PERIODS_5E_BASE),
  "3e": namespacePeriodsForLevel("3e", PERIODS_5E_BASE),
};

export const lessonsByLevel = {
  "5e": LESSONS_5E_BASE.map((lesson) => namespaceLessonForLevel("5e", lesson)),
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
