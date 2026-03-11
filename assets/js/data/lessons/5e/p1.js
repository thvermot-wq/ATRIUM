const SHARED_REFERENCE = {
  declensions: {
    title: "Tableau récapitulatif simplifié – 1re et 2e déclinaisons",
    note: "En 5e, on s'en sert d'abord pour repérer sujet, complément et quelques formes fréquentes dans de très courtes phrases.",
    tables: [
      {
        label: "1re déclinaison : rosa, rosae (f.)",
        forms: [
          { case: "Nominatif singulier", latin: "rosa", fr: "la rose / sujet" },
          { case: "Accusatif singulier", latin: "rosam", fr: "la rose / complément" },
          { case: "Ablatif singulier", latin: "rosa", fr: "avec / par / dans + contexte" },
          { case: "Nominatif pluriel", latin: "rosae", fr: "les roses / sujet" },
          { case: "Accusatif pluriel", latin: "rosas", fr: "les roses / complément" }
        ]
      },
      {
        label: "2e déclinaison masculin : dominus, domini (m.)",
        forms: [
          { case: "Nominatif singulier", latin: "dominus", fr: "le maître / sujet" },
          { case: "Accusatif singulier", latin: "dominum", fr: "le maître / complément" },
          { case: "Ablatif singulier", latin: "domino", fr: "avec / par / dans + contexte" },
          { case: "Nominatif pluriel", latin: "domini", fr: "les maîtres / sujet" },
          { case: "Accusatif pluriel", latin: "dominos", fr: "les maîtres / complément" }
        ]
      },
      {
        label: "2e déclinaison neutre : templum, templi (n.)",
        forms: [
          { case: "Nominatif singulier", latin: "templum", fr: "le temple / sujet" },
          { case: "Accusatif singulier", latin: "templum", fr: "le temple / complément" },
          { case: "Ablatif singulier", latin: "templo", fr: "dans / par / avec le temple" },
          { case: "Nominatif pluriel", latin: "templa", fr: "les temples / sujet" },
          { case: "Accusatif pluriel", latin: "templa", fr: "les temples / complément" }
        ]
      }
    ]
  },
  presentConjugation: {
    title: "Présent de l'indicatif – repères utiles",
    tables: [
      { label: "1re conjugaison : salutare", forms: ["saluto", "salutas", "salutat", "salutamus", "salutatis", "salutant"] },
      { label: "3e conjugaison : currere", forms: ["curro", "curris", "currit", "currimus", "curritis", "currunt"] },
      { label: "être / être là", forms: ["sum, es, est, sumus, estis, sunt", "adsum, ades, adest, adsumus, adestis, adsunt"] }
    ],
    note: "En 5e, on commence surtout par repérer la 3e personne du singulier : -t."
  },
  method: [
    "Je cherche d'abord le verbe.",
    "Je repère ensuite le sujet et les groupes de lieu.",
    "En production, on valorise d'abord la bonne terminaison et la bonne désinence, pas un ordre unique des mots."
  ]
};

const REMINDERS = {
  "p1-l1": {
    focus: "Entrer dans le bain de langue : saluer, répondre, situer un personnage dans Subure.",
    grammar: [
      "Une phrase très simple se lit souvent en trois temps : verbe, sujet, lieu.",
      "sum / adsum servent à dire qu'on est là ou présent.",
      "Suburae peut se comprendre comme un lieu : à Subure."
    ],
    conjugation: ["Repérer au présent : est, adsum, salutat."],
    civilisation: "La Subure est un quartier populaire et animé de Rome.",
    copy: ["salve / salvete = bonjour", "vale / valete = au revoir", "adsum = je suis là", "Subura = Subure"]
  },
  "p1-l2": {
    focus: "Lire les lieux d'habitation et les repères spatiaux les plus simples.",
    grammar: [
      "in + ablatif répond souvent à la question où ? : in domo.",
      "ante + accusatif donne une position devant un lieu : ante ianuam.",
      "Le groupe nominal se lit d'un seul bloc : magna domus, bona fenestra."
    ],
    conjugation: ["Repérer au présent : habitat, manet, stat."],
    civilisation: "À Rome, domus et insula ne désignent pas la même réalité sociale.",
    copy: ["domus = maison", "insula = immeuble", "ianua = porte", "in domo = dans la maison", "ante ianuam = devant la porte"]
  },
  "p1-l3": {
    focus: "Comprendre une scène de commerce autour du forum et des boutiques.",
    grammar: [
      "L'ordre latin varie : Mercator panem portat = Panem mercator portat.",
      "Le verbe aide à choisir le bon sens : portat, vendit, spectat.",
      "Le complément peut venir avant le sujet."
    ],
    conjugation: ["Repérer au présent : portat, vendit, spectat, currit."],
    civilisation: "Le forum est un lieu d'échanges, de circulation et d'observation.",
    copy: ["forum = forum", "taberna = boutique", "mercator = marchand", "panis = pain", "vinum = vin"]
  },
  "p1-l4": {
    focus: "Lire une micro-scène religieuse et comprendre le vocabulaire du sanctuaire.",
    grammar: [
      "Le groupe nominal aide à comprendre : vetus sacerdos, parva ara, sacrum donum.",
      "Le verbe permet de suivre le geste : ponit, movet, spectat.",
      "On s'habitue à lire l'objet au complément : donum, coronam, aram."
    ],
    conjugation: ["Repérer au présent : ponit, movet, spectat."],
    civilisation: "Le petit sanctuaire de quartier fait partie du paysage urbain romain.",
    copy: ["sacellum = petit sanctuaire", "ara = autel", "donum = offrande", "corona = couronne", "dea = déesse"]
  },
  "p1-l5": {
    focus: "Comprendre une scène d'alerte avec le chien et résister au piège de l'ordre des mots.",
    grammar: [
      "Canem Livia videt ne veut pas dire que canem est sujet.",
      "On cherche le verbe avant de traduire mot à mot.",
      "Le latin n'est pas obligé de suivre l'ordre sujet-verbe-complément du français."
    ],
    conjugation: ["Repérer au présent : latrat, currit, videt, spectat."],
    civilisation: "Les animaux et les passants font partie de la rue romaine.",
    copy: ["canis = chien", "latrat = aboie", "videt = voit", "spectat = regarde", "currit = court"]
  },
  "p1-l6": {
    focus: "Suivre une petite enquête à partir d'un objet déplacé.",
    grammar: [
      "La désinence du complément aide à comprendre qui porte quoi.",
      "On lit bien le couple verbe + complément : tabellam portat, epistulam quaerit.",
      "On réutilise le lexique narratif en production."
    ],
    conjugation: ["Repérer au présent : portat, habet, quaerit, invenit."],
    civilisation: "Les tablettes et les lettres rappellent que l'écrit circule dans la ville romaine.",
    copy: ["tabella = tablette", "epistula = lettre", "habet = a", "quaerit = cherche", "invenit = trouve"]
  },
  "p1-l7": {
    focus: "Distinguer le lieu où l'on est et le lieu vers lequel on va.",
    grammar: [
      "ad + accusatif répond souvent à la question vers où ? : ad fontem.",
      "in + ablatif répond souvent à la question où ? : in fonte.",
      "Le même nom peut changer de forme selon la fonction."
    ],
    conjugation: ["Repérer au présent : venit, manet, portat, turbat."],
    civilisation: "La fontaine est un lieu utile, fréquenté et parfois encombré.",
    copy: ["fons = fontaine", "aqua = eau", "situla = seau", "ad fontem = vers la fontaine", "in fonte = à la fontaine"]
  },
  "p1-l8": {
    focus: "Lire une scène de boutique alimentaire et réactiver le lexique de la ville.",
    grammar: [
      "Le présent exprime ici une action immédiate : emit, accipit, portat.",
      "Le latin peut placer l'objet avant le sujet si les formes restent claires.",
      "On enrichit la traduction française avec des sens admis : taberna = boutique, échoppe."
    ],
    conjugation: ["Repérer au présent : emit, accipit, portat, videt."],
    civilisation: "Le boulanger appartient au petit commerce quotidien de la ville.",
    copy: ["pistor = boulanger", "farina = farine", "emit = achète", "accipit = reçoit / prend", "panis = pain"]
  },
  "p1-l9": {
    focus: "Lire des consignes et des actions simples autour de l'école du quartier.",
    grammar: [
      "Les verbes de classe sont utiles pour lire une scène scolaire : legit, scribit, audit, respondet.",
      "On garde l'habitude de chercher d'abord le verbe puis les acteurs.",
      "Le maître et l'élève peuvent changer de place dans la phrase latine."
    ],
    conjugation: ["Repérer au présent : legit, scribit, audit, respondet."],
    civilisation: "Le ludus est l'école élémentaire ; il fait entrer la vie quotidienne dans la langue latine.",
    copy: ["ludus = école", "magister = maître", "discipulus = élève", "legit = lit", "scribit = écrit", "audit = écoute"]
  },
  "p1-l10": {
    focus: "Comprendre les déplacements et les lieux aux thermes.",
    grammar: [
      "ad + accusatif marque souvent le déplacement : ad thermas.",
      "in + ablatif marque souvent la situation : in thermis.",
      "On repère les adjectifs fréquents de température : calida, frigida."
    ],
    conjugation: ["Repérer au présent : intrat, currit, manet."],
    civilisation: "Les thermes sont un lieu de passage et de sociabilité.",
    copy: ["thermae = thermes", "ad thermas = vers les thermes", "in thermis = dans les thermes", "intrat = entre", "manet = reste"]
  },
  "p1-l11": {
    focus: "Lire une inscription simple et comprendre ce qu'elle déclenche dans l'enquête.",
    grammar: [
      "nomen est un neutre de 3e déclinaison : on le reconnaît d'abord comme mot-outil du récit.",
      "Le verbe de lecture ou de peur commande le sens de la scène : legit, timet, videt.",
      "La traduction française doit être naturelle : on ne traduit pas toujours mot à mot."
    ],
    conjugation: ["Repérer au présent : legit, scribit, videt, timet."],
    civilisation: "Les murs parlent aussi à Rome : nom, inscription, trace écrite.",
    copy: ["murus = mur", "scriptum = inscription / écrit", "nomen = nom", "legit = lit", "timet = craint"]
  },
  "p1-l12": {
    focus: "Réinvestir tout le lexique de la période dans une petite résolution d'enquête.",
    grammar: [
      "On réactive sujet, verbe, complément et repères de lieu.",
      "On accepte plusieurs ordres latins si les formes sont correctes.",
      "La bonne terminaison verbale et la bonne forme du nom comptent davantage qu'un ordre unique."
    ],
    conjugation: ["Repérer au présent : portat, videt, timet."],
    civilisation: "La fin de période rassemble quartier, mur, forum et écrits brefs : une Rome quotidienne.",
    copy: ["Discordia = Discorde / Discordia", "nomen = nom", "forum = forum", "murus = mur", "tabella = tablette"]
  }
};

function uniq(values) {
  return [...new Set(values.filter(Boolean))];
}

function stripAccents(value) {
  return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function normalizeAnswer(value) {
  return String(value || "").replace(/’/g, "'").replace(/\s+/g, " ").trim();
}

function parseLexiconEntry(entry) {
  const raw = String(entry || "").trim();
  const m = raw.match(/^(.*?)\s*\((.*?)\)\s*$/);
  if (m) return { latin: m[1].trim(), fr: m[2].trim() };
  if (raw.includes("=")) {
    const [latin, fr] = raw.split(/=(.*)/s).slice(0, 2);
    return { latin: latin.trim(), fr: String(fr || "").trim() };
  }
  return { latin: raw, fr: "" };
}

function expandAccepted(answers) {
  return uniq(
    answers
      .map(normalizeAnswer)
      .filter(Boolean)
      .flatMap((a) => uniq([a, a.toLowerCase(), stripAccents(a), stripAccents(a.toLowerCase())]))
  );
}

function sc(id, prompt, options, expected, feedback) {
  return { id, type: "singleChoice", prompt, options, expected, shuffle: true, points: 1, ...(feedback ? { feedback } : {}) };
}

function mc(id, prompt, options, expected) {
  return { id, type: "multipleChoice", prompt, options, expected, shuffle: true, points: 1 };
}

function mt(id, prompt, pairs) {
  return {
    id,
    type: "matching",
    prompt,
    pairs,
    rightOptions: pairs.map((p) => p.right),
    expected: Object.fromEntries(pairs.map((p) => [p.left, p.right])),
    points: 1,
    shuffle: true,
    shuffleRightOptions: true
  };
}

function tiFr(id, prompt, expected, accepted = []) {
  const bank = uniq([expected, ...accepted]);
  return {
    id,
    type: "textInput",
    prompt,
    expected,
    acceptedAnswers: bank,
    answerConfig: {
      type: "translation-segment",
      language: "fr",
      accepted: bank,
      ignoreCase: true,
      ignoreAccents: true,
      trimSpaces: true,
      acceptSynonyms: true,
      allowWordOrderFlexibility: false,
      gradingPriority: "meaning-first"
    },
    points: 1
  };
}

function tiLa(id, prompt, accepted) {
  const bank = uniq(accepted);
  return {
    id,
    type: "textInput",
    prompt,
    expected: bank[0],
    acceptedAnswers: bank,
    answerConfig: {
      type: "one-of",
      language: "latin",
      accepted: bank,
      ignoreCase: true,
      ignoreAccents: true,
      trimSpaces: true,
      acceptSynonyms: false,
      allowWordOrderFlexibility: true,
      gradingPriority: "desinences-then-word-order"
    },
    points: 1,
    wordOrderNote: "Le latin n'impose pas un seul ordre sujet / verbe / complément."
  };
}

function buildCourseReminder(lesson) {
  const r = REMINDERS[lesson.id];
  return {
    title: "Rappel de cours",
    focus: r.focus,
    lexicon: lesson.lexicon.map(parseLexiconEntry),
    method: SHARED_REFERENCE.method,
    grammar: r.grammar,
    conjugation: r.conjugation,
    referenceTables: SHARED_REFERENCE,
    civilisation: r.civilisation,
    teacherNote: "Niveau 5e LCA : bain de langue léger, lecture-compréhension, repérage du verbe, du sujet et du complément, puis traduction simple et progressive.",
    copyBook: r.copy
  };
}

function buildSummary(lesson) {
  const r = REMINDERS[lesson.id];
  return {
    title: "Je retiens + je note dans mon cahier",
    retains: uniq([
      ...(lesson.summary?.retains || []),
      r.focus,
      "Le latin ne suit pas forcément l'ordre sujet / verbe / complément du français.",
      "En production, on privilégie la bonne forme latine et la terminaison juste."
    ]),
    cahier: uniq(r.copy),
    keywords: uniq([...(lesson.summary?.keywords || []), "1re déclinaison", "2e déclinaison", "présent"]),
    grammar: r.grammar,
    conjugation: r.conjugation,
    civilisation: r.civilisation
  };
}

function enrichExercise(exercise) {
  const acceptedFromConfig = exercise.answerConfig?.accepted || [];
  const acceptedAnswers = exercise.type === "textInput"
    ? expandAccepted([...(exercise.acceptedAnswers || []), ...(exercise.expected ? [exercise.expected] : []), ...acceptedFromConfig])
    : undefined;

  return {
    ...exercise,
    ...(exercise.type === "textInput" ? { acceptedAnswers } : {}),
    correctionNotes: exercise.type === "textInput"
      ? [
          "Autoriser les synonymes français plausibles lorsqu'ils gardent le sens de la phrase.",
          "En latin, ne pas exiger un ordre sujet / verbe / complément si les formes sont correctes."
        ]
      : undefined,
    resettable: true,
    attemptPolicy: {
      correctionUnlockedAfterLesson: true,
      resettable: true,
      ...(exercise.attemptPolicy || {})
    }
  };
}

function makeLesson(data) {
  const summary = buildSummary(data);
  return {
    ...data,
    maxScore: 10,
    courseReminder: buildCourseReminder(data),
    lessonConfig: {
      totalExercises: 10,
      trainingExercises: data.training.length,
      productionExercises: data.production.length,
      unlockCorrectionOnlyAfterLessonComplete: true,
      unlockCorrectionAfter: 10,
      showCorrectionBeforeCompletion: false,
      allowLessonReset: true,
      resetLabel: "Recommencer la leçon",
      shuffleChoicesByDefault: true,
      progressionModel: "duolingo-like",
      pedagogy: {
        eduscol: ["lecture-compréhension", "repérage du verbe", "compréhension globale", "traduction simple"],
        euroclassica: ["lexique de base", "1re et 2e déclinaisons", "présent", "sujet-prédicat-objet", "textes simples sur la vie romaine"]
      }
    },
    correctionPolicy: {
      acceptFrenchSynonyms: true,
      acceptAccentlessInput: true,
      acceptCaseInsensitiveInput: true,
      acceptFlexibleLatinWordOrder: true,
      focusOnInflectionBeforeWordOrder: true
    },
    training: data.training.map(enrichExercise),
    production: data.production.map(enrichExercise),
    summary,
    endOfLessonBubble: summary,
    teacherGuidelines: [
      "Faire verbaliser le chemin de lecture : verbe -> sujet -> complément -> lieu.",
      "Rappeler qu'une traduction mot à mot n'est qu'une étape.",
      "Tolérer les synonymes français recevables et les ordres latins variés dès lors que la forme est correcte."
    ]
  };
}

const RAW_LESSONS_5E_P1 = [
  {
    id: "p1-l1",
    period: 1,
    periodId: "p1",
    title: "Salve, Subura !",
    objective: "Découvrir le quartier de Subure et lire des salutations simples dans une micro-scène.",
    lessonPoint: "Je cherche d'abord le verbe et le personnage qui agit.",
    canDo: [
      "Je reconnais des salutations latines dans une scène.",
      "Je comprends qui parle à qui.",
      "Je traduis une phrase courte de présentation."
    ],
    lexicon: [
      "salve (bonjour)",
      "salvete (bonjour à tous)",
      "vale (au revoir)",
      "adsum (je suis là, je suis présent)",
      "Subura (Subure)",
      "in via (dans la rue)",
      "amicus (ami)",
      "canis (chien)"
    ],
    training: [
      sc("p1-l1-t1", "Flavia salue Marcus seul. Quelle formule choisit-elle ?", ["salve", "salvete", "valete", "adsum", "vale"], "salve"),
      sc("p1-l1-t2", "Titus parle à trois voisins. Il dit :", ["salve", "salvete", "vale", "adsum", "bene"], "salvete"),
      mc("p1-l1-t3", "Sélectionne les formules pour dire « au revoir ».", ["vale", "valete", "salve", "adsum", "male"], ["vale", "valete"]),
      mt("p1-l1-t4", "Associe formule et sens.", [
        { left: "adsum", right: "je suis présent" },
        { left: "salve", right: "bonjour (à une personne)" },
        { left: "vale", right: "au revoir (à une personne)" }
      ]),
      sc("p1-l1-t5", "Dans « Flavia in via est », que signifie via ?", ["rue", "maison", "fontaine", "mur", "temple"], "rue", "Le groupe in via donne un lieu."),
      sc("p1-l1-t6", "« Niger canis est » signifie :", ["Niger est un chien", "Le chien est drôle", "Niger est un mur", "Niger crie", "Le chien salue"], "Niger est un chien"),
      tiLa("p1-l1-t7", "Écris en latin : « je suis présent ».", ["adsum"])
    ],
    production: [
      tiFr("p1-l1-p1", "Traduis en français : Flavia Suburae habitat", "Flavia habite à Subure", ["Flavia habite dans Subure", "Flavia habite à Subura"]),
      tiFr("p1-l1-p2", "Traduis en français : Niger canis est", "Niger est un chien", ["Niger est le chien"]),
      tiLa("p1-l1-p3", "Traduis en latin : Marcus salue Flavia", ["Marcus Flaviam salutat", "Marcus salutat Flaviam", "Salutat Marcus Flaviam"])
    ],
    summary: {
      retains: ["Dans une scène, je repère d'abord qui parle et le verbe.", "Les formules salve / vale structurent la communication."],
      keywords: ["Subura", "salutation", "verbe", "personnages"]
    },
    meta: { status: "ready", tags: ["subura", "rituel", "p1-l1"] }
  },
  {
    id: "p1-l2",
    period: 1,
    periodId: "p1",
    title: "Domus et insula",
    objective: "Identifier les lieux d'habitation et les objets proches dans le quartier.",
    lessonPoint: "Le groupe nominal se lit ensemble : nom + adjectif ou complément.",
    canDo: [
      "Je distingue domus et insula dans une scène.",
      "Je comprends une phrase de localisation simple.",
      "Je traduis des groupes nominaux utiles."
    ],
    lexicon: [
      "domus = maison",
      "insula = immeuble",
      "ianua = porte",
      "fenestra = fenêtre",
      "in domo = dans la maison",
      "ante ianuam = devant la porte",
      "stat = il / elle se tient",
      "manet = il / elle reste"
    ],
    training: [
      sc("p1-l2-t1", "Aurelia vit dans une grande maison. Quel nom latin choisir pour « maison » ?", ["domus", "insula", "forum", "taberna", "templum"], "domus"),
      sc("p1-l2-t2", "Marcus vit dans un immeuble de quartier. C'est une :", ["insula", "domus", "via", "porta", "murus"], "insula"),
      mc("p1-l2-t3", "Choisis des éléments de la maison.", ["ianua", "fenestra", "forum", "cella", "taberna"], ["ianua", "fenestra", "cella"]),
      mt("p1-l2-t4", "Associe mot et sens.", [
        { left: "domus", right: "maison" },
        { left: "insula", right: "immeuble" },
        { left: "ianua", right: "porte" }
      ]),
      sc("p1-l2-t5", "« Niger ante ianuam stat » : Niger est…", ["devant la porte", "dans le forum", "sur le mur", "à la fontaine", "dans l'école"], "devant la porte", "Cherche le verbe stat puis le lieu ante ianuam."),
      sc("p1-l2-t6", "Dans « Flavia in domo manet », manet signifie :", ["reste", "court", "crie", "porte", "écrit"], "reste"),
      tiLa("p1-l2-t7", "Écris en latin : « porte » (nom).", ["ianua"])
    ],
    production: [
      tiFr("p1-l2-p1", "Traduis en français : Aurelia in domo manet", "Aurélia reste dans la maison", ["Aurelia reste dans la maison", "Aurélia demeure dans la maison"]),
      tiFr("p1-l2-p2", "Traduis en français : Marcus in insula habitat", "Marcus habite dans l'immeuble", ["Marcus habite dans une insula", "Marcus habite dans un immeuble", "Marcus habite en insula"]),
      tiLa("p1-l2-p3", "Traduis en latin : Niger est devant la porte", ["Niger ante ianuam stat", "Niger stat ante ianuam", "Ante ianuam Niger stat", "Ante ianuam stat Niger", "Niger ante ianuam est", "Ante ianuam Niger est"])
    ],
    summary: {
      retains: ["Je lis un lieu avec sa préposition.", "Nom + repère spatial donne le sens de la scène."],
      keywords: ["domus", "insula", "localisation"]
    },
    meta: { status: "ready", tags: ["habitat", "quartier", "p1-l2"] }
  },
  {
    id: "p1-l3",
    period: 1,
    periodId: "p1",
    title: "Forum et taberna",
    objective: "Comprendre une scène simple autour du forum et des boutiques.",
    lessonPoint: "Le verbe indique l'action centrale : porter, vendre, regarder.",
    canDo: ["Je reconnais les lieux du commerce.", "Je relie personnage et action.", "Je traduis une phrase de marché."],
    lexicon: ["forum = forum", "taberna = boutique", "mercator = marchand", "panis = pain", "vinum = vin", "portat = porte", "spectat = regarde", "vendit = vend"],
    training: [
      sc("p1-l3-t1", "Le lieu principal des échanges est :", ["forum", "domus", "thermae", "ludus", "templum"], "forum"),
      sc("p1-l3-t2", "Une boutique se dit :", ["taberna", "insula", "via", "porta", "aqua"], "taberna"),
      mc("p1-l3-t3", "Choisis des mots de la scène du marché.", ["mercator", "panis", "vinum", "murus", "canis"], ["mercator", "panis", "vinum"]),
      mt("p1-l3-t4", "Associe latin et français.", [
        { left: "mercator", right: "marchand" },
        { left: "panis", right: "pain" },
        { left: "vinum", right: "vin" }
      ]),
      sc("p1-l3-t5", "« Mercator panem portat » : qui porte le pain ?", ["mercator", "panem", "forum", "Flavia", "Niger"], "mercator", "Cherche d'abord le verbe puis son sujet."),
      sc("p1-l3-t6", "« Panem mercator portat » signifie :", ["Le marchand porte le pain", "Le pain porte le marchand", "Le marchand vend le pain", "Le pain est dans la maison", "Le forum court"], "Le marchand porte le pain"),
      tiLa("p1-l3-t7", "Écris en latin : « marchand ».", ["mercator"])
    ],
    production: [
      tiFr("p1-l3-p1", "Traduis en français : Mercator panem portat", "Le marchand porte du pain", ["Le marchand apporte le pain", "Le marchand transporte du pain"]),
      tiFr("p1-l3-p2", "Traduis en français : Flavia tabernam spectat", "Flavia regarde la boutique", ["Flavia observe la boutique", "Flavia regarde l'échoppe"]),
      tiLa("p1-l3-p3", "Traduis en latin : Marcus court vers le forum", ["Marcus ad forum currit", "Ad forum Marcus currit", "Marcus currit ad forum"])
    ],
    summary: {
      retains: ["L'ordre latin peut varier sans changer l'idée.", "Le verbe donne le cœur de la scène."],
      keywords: ["forum", "taberna", "commerce"]
    },
    meta: { status: "ready", tags: ["marche", "lecture", "p1-l3"] }
  },
  {
    id: "p1-l4",
    period: 1,
    periodId: "p1",
    title: "Au petit sanctuaire",
    objective: "Lire de courtes phrases au sanctuaire et repérer une offrande déplacée.",
    lessonPoint: "Je lis ensemble le groupe nominal : donum sacrum, ara parva.",
    canDo: ["Je comprends une scène religieuse simple.", "Je repère un objet offert.", "Je traduis une action autour du sanctuaire."],
    lexicon: ["sacellum = petit sanctuaire", "ara = autel", "donum = offrande", "corona = couronne", "dea = déesse", "sacerdos = prêtre", "ponit = pose", "movet = déplace"],
    training: [
      sc("p1-l4-t1", "Le petit sanctuaire se dit :", ["sacellum", "forum", "insula", "thermae", "taberna"], "sacellum"),
      sc("p1-l4-t2", "L'autel se dit :", ["ara", "aqua", "ianua", "tabella", "via"], "ara"),
      mc("p1-l4-t3", "Choisis des mots liés au sanctuaire.", ["donum", "corona", "dea", "panis", "forum"], ["donum", "corona", "dea"]),
      mt("p1-l4-t4", "Associe mot et sens.", [
        { left: "donum", right: "offrande" },
        { left: "corona", right: "couronne" },
        { left: "sacerdos", right: "prêtre" }
      ]),
      sc("p1-l4-t5", "« Sacerdos donum ponit » signifie :", ["Le prêtre pose une offrande", "Le prêtre court", "L'offrande lit", "Le mur bouge", "La déesse vend"], "Le prêtre pose une offrande"),
      sc("p1-l4-t6", "Dans « Corona in ara est », quel est le lieu ?", ["sur l'autel", "dans l'école", "dans l'immeuble", "sur le forum", "à la fontaine"], "sur l'autel"),
      tiLa("p1-l4-t7", "Écris en latin : « offrande ».", ["donum"])
    ],
    production: [
      tiFr("p1-l4-p1", "Traduis en français : Sacerdos coronam movet", "Le prêtre déplace la couronne", ["Le prêtre bouge la couronne"]),
      tiFr("p1-l4-p2", "Traduis en français : Flavia sacellum spectat", "Flavia regarde le sanctuaire", ["Flavia observe le sanctuaire"]),
      tiLa("p1-l4-p3", "Traduis en latin : La déesse voit l'offrande", ["Dea donum videt", "Donum dea videt", "Dea videt donum"])
    ],
    summary: {
      retains: ["Je lis mieux un groupe nominal court.", "Je repère des gestes simples autour du culte."],
      keywords: ["sacellum", "ara", "donum"]
    },
    meta: { status: "ready", tags: ["culte", "quartier", "p1-l4"] }
  },
  {
    id: "p1-l5",
    period: 1,
    periodId: "p1",
    title: "Canis in via",
    objective: "Comprendre une scène de rue avec le chien et résister aux pièges d'ordre des mots.",
    lessonPoint: "Je ne confonds pas place du mot et fonction du mot.",
    canDo: ["Je reconnais quelques verbes d'action.", "Je lis une phrase avec ordre piégeux.", "Je produis une phrase latine simple avec un ordre souple."],
    lexicon: ["canis = chien", "latrat = aboie", "currit = court", "videt = voit", "spectat = regarde", "puella = fille", "puer = garçon", "via = rue"],
    training: [
      sc("p1-l5-t1", "Le chien se dit :", ["canis", "panis", "murus", "forum", "tabella"], "canis"),
      sc("p1-l5-t2", "Le verbe qui signifie « aboie » est :", ["latrat", "currit", "legit", "scribit", "manet"], "latrat"),
      mc("p1-l5-t3", "Choisis des verbes possibles dans une scène de rue.", ["currit", "videt", "spectat", "scribit", "latrat"], ["currit", "videt", "spectat", "latrat"]),
      mt("p1-l5-t4", "Associe latin et français.", [
        { left: "currit", right: "court" },
        { left: "latrat", right: "aboie" },
        { left: "spectat", right: "regarde" }
      ]),
      sc("p1-l5-t5", "Piège : « Canem Livia videt » signifie :", ["Livia voit le chien", "Le chien voit Livia", "Livia court avec le chien", "Le chien aboie", "Livia regarde la rue"], "Livia voit le chien", "Le complément peut venir avant le sujet en latin."),
      sc("p1-l5-t6", "« In via canis currit » signifie :", ["Le chien court dans la rue", "La rue court avec le chien", "Le chien lit dans la rue", "La fille voit le chien", "Le chien reste"], "Le chien court dans la rue"),
      tiLa("p1-l5-t7", "Écris en latin : « il voit ».", ["videt"])
    ],
    production: [
      tiFr("p1-l5-p1", "Traduis en français : Canem puella spectat", "La fille regarde le chien", ["La fille observe le chien"]),
      tiFr("p1-l5-p2", "Traduis en français : In via canis latrat", "Le chien aboie dans la rue"),
      tiLa("p1-l5-p3", "Traduis en latin : Le chien court dans la rue", ["Canis in via currit", "In via canis currit", "Canis currit in via"])
    ],
    summary: {
      retains: ["La place d'un mot ne suffit pas à donner sa fonction.", "Je fais attention aux pièges d'ordre."],
      keywords: ["canis", "ordre des mots", "rue"]
    },
    meta: { status: "ready", tags: ["chien", "ordre", "p1-l5"] }
  },
  {
    id: "p1-l6",
    period: 1,
    periodId: "p1",
    title: "Ubi tabella est ?",
    objective: "Suivre une petite enquête à partir d'une tablette déplacée.",
    lessonPoint: "Le couple verbe + complément aide à comprendre l'action.",
    canDo: ["Je lis qui porte quoi.", "Je comprends un mini-récit d'enquête.", "Je réemploie quelques verbes utiles."],
    lexicon: ["tabella = tablette", "epistula = lettre", "quaerit = cherche", "invenit = trouve", "habet = a", "portat = porte", "amicus = ami", "murus = mur"],
    training: [
      sc("p1-l6-t1", "La tablette se dit :", ["tabella", "epistula", "ianua", "farina", "aqua"], "tabella"),
      sc("p1-l6-t2", "Le verbe qui signifie « cherche » est :", ["quaerit", "invenit", "portat", "latrat", "legit"], "quaerit"),
      mc("p1-l6-t3", "Choisis des mots de la petite enquête.", ["tabella", "epistula", "quaerit", "thermae", "murus"], ["tabella", "epistula", "quaerit", "murus"]),
      mt("p1-l6-t4", "Associe mot et sens.", [
        { left: "quaerit", right: "cherche" },
        { left: "invenit", right: "trouve" },
        { left: "tabella", right: "tablette" }
      ]),
      sc("p1-l6-t5", "« Titus tabellam portat » signifie :", ["Titus porte la tablette", "La tablette porte Titus", "Titus cherche la tablette", "Titus lit la tablette", "La tablette court"], "Titus porte la tablette"),
      sc("p1-l6-t6", "« Flavia epistulam invenit » signifie :", ["Flavia trouve la lettre", "Flavia cherche la lettre", "La lettre voit Flavia", "Flavia porte le mur", "Flavia habite la lettre"], "Flavia trouve la lettre"),
      tiLa("p1-l6-t7", "Écris en latin : « lettre ».", ["epistula"])
    ],
    production: [
      tiFr("p1-l6-p1", "Traduis en français : Marcus tabellam quaerit", "Marcus cherche la tablette"),
      tiFr("p1-l6-p2", "Traduis en français : Flavia epistulam habet", "Flavia a la lettre", ["Flavia possède la lettre"]),
      tiLa("p1-l6-p3", "Traduis en latin : Titus trouve la tablette", ["Titus tabellam invenit", "Tabellam Titus invenit", "Titus invenit tabellam"])
    ],
    summary: {
      retains: ["Je lis mieux le couple verbe + complément.", "Je commence à suivre un très court récit d'enquête."],
      keywords: ["tabella", "epistula", "enquête"]
    },
    meta: { status: "ready", tags: ["tablette", "enquete", "p1-l6"] }
  },
  {
    id: "p1-l7",
    period: 1,
    periodId: "p1",
    title: "Ad fontem",
    objective: "Distinguer le lieu où l'on est et le lieu vers lequel on va.",
    lessonPoint: "La préposition et la forme du nom donnent le sens du déplacement.",
    canDo: ["Je distingue ad et in.", "Je lis une scène de fontaine.", "Je traduis de petites phrases de déplacement."],
    lexicon: ["fons = fontaine", "aqua = eau", "situla = seau", "ad fontem = vers la fontaine", "in fonte = à la fontaine", "venit = vient", "manet = reste", "turbat = gêne / trouble"],
    training: [
      sc("p1-l7-t1", "Le mot qui signifie « fontaine » est :", ["fons", "forum", "murus", "taberna", "ludus"], "fons"),
      sc("p1-l7-t2", "« ad fontem » signifie :", ["vers la fontaine", "dans la fontaine", "sur le mur", "devant la porte", "vers l'école"], "vers la fontaine"),
      mc("p1-l7-t3", "Choisis des mots de la scène de fontaine.", ["aqua", "situla", "fons", "farina", "thermae"], ["aqua", "situla", "fons"]),
      mt("p1-l7-t4", "Associe expression et sens.", [
        { left: "ad fontem", right: "vers la fontaine" },
        { left: "in fonte", right: "à la fontaine" },
        { left: "aqua", right: "eau" }
      ]),
      sc("p1-l7-t5", "« Livia ad fontem venit » signifie :", ["Livia vient vers la fontaine", "Livia reste à la fontaine", "La fontaine vient vers Livia", "Livia écrit à la fontaine", "Livia habite la fontaine"], "Livia vient vers la fontaine"),
      sc("p1-l7-t6", "« Titus in fonte manet » se comprend le mieux comme :", ["Titus reste à la fontaine", "Titus court à l'école", "Titus vend de l'eau", "Titus regarde le mur", "Titus prend le pain"], "Titus reste à la fontaine"),
      tiLa("p1-l7-t7", "Écris en latin : « eau ».", ["aqua"])
    ],
    production: [
      tiFr("p1-l7-p1", "Traduis en français : Marcus situlam portat ad fontem", "Marcus porte le seau vers la fontaine", ["Marcus apporte le seau vers la fontaine"]),
      tiFr("p1-l7-p2", "Traduis en français : Flavia in fonte manet", "Flavia reste à la fontaine"),
      tiLa("p1-l7-p3", "Traduis en latin : Livia vient vers la fontaine", ["Livia ad fontem venit", "Ad fontem Livia venit", "Livia venit ad fontem"])
    ],
    summary: {
      retains: ["Je distingue le lieu où l'on est et le lieu où l'on va.", "La préposition change le sens."],
      keywords: ["fontaine", "déplacement", "ad", "in"]
    },
    meta: { status: "ready", tags: ["fons", "aqua", "p1-l7"] }
  },
  {
    id: "p1-l8",
    period: 1,
    periodId: "p1",
    title: "Apud pistorem",
    objective: "Lire une scène de boutique alimentaire et réactiver le lexique du quartier.",
    lessonPoint: "Le présent exprime une action immédiate dans une scène quotidienne.",
    canDo: ["Je reconnais quelques mots du commerce alimentaire.", "Je lis une phrase avec achat ou réception.", "Je traduis une scène simple de boutique."],
    lexicon: ["pistor = boulanger", "farina = farine", "panis = pain", "emit = achète", "accipit = reçoit / prend", "portat = porte", "taberna = boutique", "via = rue"],
    training: [
      sc("p1-l8-t1", "Le boulanger se dit :", ["pistor", "mercator", "magister", "canis", "sacerdos"], "pistor"),
      sc("p1-l8-t2", "Le verbe qui signifie « achète » est :", ["emit", "accipit", "currit", "manet", "timet"], "emit"),
      mc("p1-l8-t3", "Choisis des mots de la boutique alimentaire.", ["pistor", "farina", "panis", "murus", "insula"], ["pistor", "farina", "panis"]),
      mt("p1-l8-t4", "Associe mot et sens.", [
        { left: "pistor", right: "boulanger" },
        { left: "farina", right: "farine" },
        { left: "accipit", right: "reçoit / prend" }
      ]),
      sc("p1-l8-t5", "« Flavia panem emit » signifie :", ["Flavia achète du pain", "Flavia reçoit du pain", "Le pain achète Flavia", "Flavia vend le pain", "Flavia écrit le pain"], "Flavia achète du pain"),
      sc("p1-l8-t6", "« Panem pistor portat » signifie :", ["Le boulanger porte le pain", "Le pain porte le boulanger", "Le boulanger habite le pain", "Le pain voit le boulanger", "Le boulanger lit le pain"], "Le boulanger porte le pain"),
      tiLa("p1-l8-t7", "Écris en latin : « pain ».", ["panis"])
    ],
    production: [
      tiFr("p1-l8-p1", "Traduis en français : Pistor farinam portat", "Le boulanger porte la farine", ["Le boulanger apporte la farine"]),
      tiFr("p1-l8-p2", "Traduis en français : Marcus panem accipit", "Marcus reçoit le pain", ["Marcus prend le pain"]),
      tiLa("p1-l8-p3", "Traduis en latin : Flavia achète le pain", ["Flavia panem emit", "Panem Flavia emit", "Flavia emit panem"])
    ],
    summary: {
      retains: ["Je lis une scène de petit commerce.", "J'accepte plusieurs sens français proches quand ils restent justes."],
      keywords: ["pistor", "farina", "panis"]
    },
    meta: { status: "ready", tags: ["boulanger", "boutique", "p1-l8"] }
  },
  {
    id: "p1-l9",
    period: 1,
    periodId: "p1",
    title: "In ludo",
    objective: "Lire des consignes et des actions simples autour de l'école du quartier.",
    lessonPoint: "Je cherche d'abord le verbe puis les acteurs de la scène scolaire.",
    canDo: ["Je reconnais des verbes de classe.", "Je distingue maître et élève.", "Je traduis une action simple de lecture ou d'écriture."],
    lexicon: ["ludus = école", "magister = maître", "discipulus = élève", "legit = lit", "scribit = écrit", "audit = écoute", "respondet = répond", "tabella = tablette"],
    training: [
      sc("p1-l9-t1", "Le mot pour dire « école » est :", ["ludus", "forum", "thermae", "domus", "via"], "ludus"),
      sc("p1-l9-t2", "Le verbe qui signifie « écrit » est :", ["scribit", "audit", "currit", "latrat", "ponit"], "scribit"),
      mc("p1-l9-t3", "Choisis des mots de la scène scolaire.", ["magister", "discipulus", "legit", "vinum", "scribit"], ["magister", "discipulus", "legit", "scribit"]),
      mt("p1-l9-t4", "Associe mot et sens.", [
        { left: "magister", right: "maître" },
        { left: "discipulus", right: "élève" },
        { left: "audit", right: "écoute" }
      ]),
      sc("p1-l9-t5", "« Discipulus legit » signifie :", ["L'élève lit", "Le maître lit", "L'élève écrit", "L'école court", "L'élève aboie"], "L'élève lit"),
      sc("p1-l9-t6", "« Tabellam magister videt » signifie :", ["Le maître voit la tablette", "La tablette voit le maître", "Le maître écrit la tablette", "L'élève voit le maître", "Le maître lit la lettre"], "Le maître voit la tablette"),
      tiLa("p1-l9-t7", "Écris en latin : « élève ».", ["discipulus"])
    ],
    production: [
      tiFr("p1-l9-p1", "Traduis en français : Magister legit", "Le maître lit"),
      tiFr("p1-l9-p2", "Traduis en français : Discipulus magistro respondet", "L'élève répond au maître", ["Le disciple répond au maître"]),
      tiLa("p1-l9-p3", "Traduis en latin : L'élève écrit la tablette", ["Discipulus tabellam scribit", "Tabellam discipulus scribit", "Discipulus scribit tabellam"])
    ],
    summary: {
      retains: ["Je lis une très courte scène de classe.", "Je reconnais des verbes fréquents du présent."],
      keywords: ["ludus", "magister", "discipulus"]
    },
    meta: { status: "ready", tags: ["ecole", "classe", "p1-l9"] }
  },
  {
    id: "p1-l10",
    period: 1,
    periodId: "p1",
    title: "Ad thermas",
    objective: "Comprendre les déplacements et les lieux aux thermes.",
    lessonPoint: "Je distingue déplacement et situation grâce aux groupes de lieu.",
    canDo: ["Je reconnais le vocabulaire des thermes.", "Je distingue ad thermas et in thermis.", "Je traduis une phrase simple de mouvement."],
    lexicon: ["thermae = thermes", "ad thermas = vers les thermes", "in thermis = dans les thermes", "intrat = entre", "manet = reste", "currit = court", "calida = chaude", "frigida = froide"],
    training: [
      sc("p1-l10-t1", "Les thermes se disent :", ["thermae", "taberna", "domus", "sacellum", "ludus"], "thermae"),
      sc("p1-l10-t2", "« ad thermas » signifie :", ["vers les thermes", "dans les thermes", "devant la porte", "vers l'école", "sur le forum"], "vers les thermes"),
      mc("p1-l10-t3", "Choisis des mots de la scène des thermes.", ["thermae", "intrat", "manet", "farina", "frigida"], ["thermae", "intrat", "manet", "frigida"]),
      mt("p1-l10-t4", "Associe expression et sens.", [
        { left: "ad thermas", right: "vers les thermes" },
        { left: "in thermis", right: "dans les thermes" },
        { left: "intrat", right: "entre" }
      ]),
      sc("p1-l10-t5", "« Marcus ad thermas currit » signifie :", ["Marcus court vers les thermes", "Marcus reste dans les thermes", "Les thermes courent", "Marcus vend aux thermes", "Marcus lit aux thermes"], "Marcus court vers les thermes"),
      sc("p1-l10-t6", "« Flavia in thermis manet » signifie :", ["Flavia reste dans les thermes", "Flavia va vers les thermes", "Flavia écrit aux thermes", "Flavia voit le mur", "Flavia porte l'eau"], "Flavia reste dans les thermes"),
      tiLa("p1-l10-t7", "Écris en latin : « il / elle entre ».", ["intrat"])
    ],
    production: [
      tiFr("p1-l10-p1", "Traduis en français : Titus ad thermas venit", "Titus vient vers les thermes", ["Titus va vers les thermes"]),
      tiFr("p1-l10-p2", "Traduis en français : Livia in thermis manet", "Livia reste dans les thermes"),
      tiLa("p1-l10-p3", "Traduis en latin : Marcus entre dans les thermes", ["Marcus in thermas intrat", "In thermas Marcus intrat", "Marcus intrat in thermas"])
    ],
    summary: {
      retains: ["Je distingue un lieu où l'on va et un lieu où l'on est.", "Les thermes font partie de la vie quotidienne romaine."],
      keywords: ["thermae", "déplacement", "sociabilité"]
    },
    meta: { status: "ready", tags: ["thermes", "ville", "p1-l10"] }
  },
  {
    id: "p1-l11",
    period: 1,
    periodId: "p1",
    title: "Nomen in muro",
    objective: "Lire une inscription simple sur un mur et comprendre ce qu'elle déclenche dans l'enquête.",
    lessonPoint: "Je traduis naturellement : je ne colle pas mot à mot si le français sonne faux.",
    canDo: ["Je reconnais les mots du mur et de l'inscription.", "Je lis un verbe de lecture ou de peur.", "Je comprends un petit indice écrit."],
    lexicon: ["murus = mur", "scriptum = inscription / écrit", "nomen = nom", "legit = lit", "scribit = écrit", "videt = voit", "timet = craint", "Discordia = Discordia"],
    training: [
      sc("p1-l11-t1", "Le mot pour dire « mur » est :", ["murus", "forum", "ludus", "fons", "ianua"], "murus"),
      sc("p1-l11-t2", "Le verbe qui signifie « lit » est :", ["legit", "scribit", "timet", "currit", "latrat"], "legit"),
      mc("p1-l11-t3", "Choisis des mots liés à l'inscription.", ["murus", "scriptum", "nomen", "panis", "legit"], ["murus", "scriptum", "nomen", "legit"]),
      mt("p1-l11-t4", "Associe mot et sens.", [
        { left: "scriptum", right: "inscription / écrit" },
        { left: "nomen", right: "nom" },
        { left: "timet", right: "craint" }
      ]),
      sc("p1-l11-t5", "« Marcus nomen legit » signifie :", ["Marcus lit le nom", "Le nom lit Marcus", "Marcus écrit le nom", "Marcus craint le mur", "Le mur court"], "Marcus lit le nom"),
      sc("p1-l11-t6", "« Livia scriptum timet » signifie :", ["Livia craint l'inscription", "Livia lit l'inscription", "L'inscription voit Livia", "Livia reste au mur", "Livia achète le mur"], "Livia craint l'inscription"),
      tiLa("p1-l11-t7", "Écris en latin : « nom ».", ["nomen"])
    ],
    production: [
      tiFr("p1-l11-p1", "Traduis en français : Titus murum videt", "Titus voit le mur"),
      tiFr("p1-l11-p2", "Traduis en français : Flavia nomen legit", "Flavia lit le nom"),
      tiLa("p1-l11-p3", "Traduis en latin : Livia craint l'inscription", ["Livia scriptum timet", "Scriptum Livia timet", "Livia timet scriptum"])
    ],
    summary: {
      retains: ["Je lis mieux un indice écrit dans une micro-scène.", "Je peux produire une traduction française naturelle."],
      keywords: ["murus", "scriptum", "nomen"]
    },
    meta: { status: "ready", tags: ["mur", "indice", "p1-l11"] }
  },
  {
    id: "p1-l12",
    period: 1,
    periodId: "p1",
    title: "Discordia in Subura ?",
    objective: "Réinvestir tout le lexique de la période dans une petite résolution d'enquête.",
    lessonPoint: "Je relis, je recoupe, je traduis avec cohérence.",
    canDo: ["Je mobilise le lexique de toute la période.", "Je lis une petite scène suivie.", "Je produis une phrase latine simple avec ordre souple."],
    lexicon: ["Discordia = Discordia", "nomen = nom", "forum = forum", "murus = mur", "tabella = tablette", "videt = voit", "timet = craint", "portat = porte"],
    training: [
      sc("p1-l12-t1", "Le mot qui revient dans l'enquête finale est :", ["Discordia", "farina", "thermae", "insula", "ianua"], "Discordia"),
      sc("p1-l12-t2", "Le mot qui signifie « nom » est :", ["nomen", "murus", "forum", "tabella", "dea"], "nomen"),
      mc("p1-l12-t3", "Choisis des mots qui peuvent servir dans la scène finale.", ["forum", "murus", "tabella", "videt", "farina"], ["forum", "murus", "tabella", "videt"]),
      mt("p1-l12-t4", "Associe mot et sens.", [
        { left: "Discordia", right: "Discordia / la Discorde" },
        { left: "tabella", right: "tablette" },
        { left: "portat", right: "porte" }
      ]),
      sc("p1-l12-t5", "« Marcus nomen Discordiae videt » signifie :", ["Marcus voit le nom de Discordia", "Discordia voit Marcus", "Marcus lit la tablette", "Le nom court", "Le forum voit Discordia"], "Marcus voit le nom de Discordia"),
      sc("p1-l12-t6", "« Tabellam Titus ad forum portat » signifie :", ["Titus porte la tablette vers le forum", "La tablette porte Titus au forum", "Titus craint le forum", "Titus lit la tablette au mur", "Le forum porte Titus"], "Titus porte la tablette vers le forum"),
      tiLa("p1-l12-t7", "Écris en latin : « il / elle porte ».", ["portat"])
    ],
    production: [
      tiFr("p1-l12-p1", "Traduis en français : Livia Discordiam timet", "Livia craint Discordia", ["Livia a peur de Discordia", "Livia craint la Discorde"]),
      tiFr("p1-l12-p2", "Traduis en français : Marcus forum videt", "Marcus voit le forum"),
      tiLa("p1-l12-p3", "Traduis en latin : Titus porte la tablette vers le forum", ["Titus tabellam ad forum portat", "Tabellam Titus ad forum portat", "Titus ad forum tabellam portat", "Titus portat tabellam ad forum"])
    ],
    summary: {
      retains: ["Je peux lire une scène complète en latin simple avec cohérence narrative.", "Validation de la période : 8/10 et plus pour considérer l'ensemble comme bien acquis."],
      keywords: ["Discordia", "Subura", "synthèse", "lecture", "validation"]
    },
    meta: { status: "ready", tags: ["synthese", "discordia", "p1-l12"] }
  }
];

export const lessons5eP1 = RAW_LESSONS_5E_P1.map(makeLesson);
