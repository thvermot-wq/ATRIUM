// p1.js — ATRIUM 4e P1 placeholders

const makePlaceholderLesson = (period, lessonNumber, title) => ({
  id: `4e-p${period}-l${lessonNumber}`,
  period,
  periodId: `p${period}`,
  title,
  subtitle: "Placeholder narratif à rédiger.",
  objective: "Placeholder objectif.",
  lessonPoint: "Placeholder lessonPoint.",
  canDo: [
    "Placeholder canDo 1.",
    "Placeholder canDo 2.",
    "Placeholder canDo 3."
  ],
  lexicon: [
    "mot1 = sens1",
    "mot2 = sens2",
    "mot3 = sens3",
    "mot4 = sens4",
    "mot5 = sens5",
    "mot6 = sens6",
    "mot7 = sens7",
    "mot8 = sens8",
    "mot9 = sens9",
    "mot10 = sens10",
    "mot11 = sens11",
    "mot12 = sens12"
  ],
  maxScore: 10,
  training: [],
  production: [],
  summary: {
    retains: [
      "Placeholder retain 1.",
      "Placeholder retain 2."
    ],
    cahier: [
      "Placeholder cahier 1",
      "Placeholder cahier 2"
    ],
    keywords: [
      "placeholder",
      "p1",
      "4e"
    ]
  },
  meta: {
    status: "placeholder",
    tags: ["4e", `p${period}`, "placeholder"]
  }
});

const headerContexts4eP1 = {
  "p1-l1": "Les ruelles de Subure déversent déjà leurs voix vers le forum ; des portefaix se croisent, une boutique lève ses volets, et les premières odeurs de laine teinte se mêlent au pain chaud. « À Rome, le matin ne tombe jamais d’un seul coup ; il gagne rue après rue », dit Marcus, puis il voit deux citoyens quitter la même venelle pour prendre la montée du forum.",
  "p1-l2": "Sous les portiques, les toges se serrent et les noms circulent plus vite que les corps ; au centre, un homme lève la main, aussitôt noyé sous les voix. « Une place publique ne parle jamais doucement ; même son silence pousse », dit Flavia, puis elle suit l’endroit précis où la foule se referme.",
  "p1-l3": "Au bord du forum, une tablette arrive avec une odeur de sel, de bois humide et de voyage trop long ; la cire garde la trace d’un lien rompu à la hâte. « Quand la mer envoie quelque chose, elle n’envoie jamais seulement une nouvelle », dit Lucius, puis il passe le pouce sur une fente noire qui coupe un mot."
};

export const lessons4eP1 = [
  {
    id: "4e-p1-l1",
    levelId: "4e",
    period: 1,
    periodId: "p1",
    title: "Subura ad forum fluit",
    subtitle: headerContexts4eP1["p1-l1"],
    objective: "Remettre en circulation les acquis de 5e dans une scène urbaine plus ample, avec plusieurs actions et plusieurs lieux.",
    lessonPoint: "Je combine vite verbe, groupes de lieu et personnages pour lire une scène déjà dense.",
    canDo: [
      "Je lis une scène urbaine avec plusieurs actions simultanées.",
      "Je rattache chaque déplacement au bon personnage.",
      "Je traduis un mini-dossier de circulation sans repartir des bases."
    ],
    lexicon: [
      "Subura = Subure",
      "forum = forum",
      "via = rue",
      "insula = immeuble",
      "taberna = boutique",
      "civis = citoyen",
      "mercator = marchand",
      "sarcinator = raccommodeur",
      "ambulat = il/elle marche",
      "currit = il/elle court",
      "intrat = il/elle entre",
      "ad forum = vers le forum"
    ],
    maxScore: 10,
    training: [
      {
        id: "4e-p1-l1-t1",
        type: "singleChoice",
        prompt: "🏛️ Dans « duo cives ad forum currunt », quel groupe indique clairement la destination ?",
        options: ["duo cives", "ad forum", "currunt", "Subura"],
        expected: "ad forum",
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l1-t2",
        type: "singleChoice",
        prompt: "🏛️ Dans « mercator in taberna stat et civis currit », qui reste sur place ?",
        options: ["mercator", "civis", "taberna", "forum"],
        expected: "mercator",
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l1-t3",
        type: "multipleChoice",
        prompt: "🏛️ Mini-texte : « Mercator in taberna stat. Civis ad forum currit. Sarcinator ex via intrat. » Quelles actions ont bien lieu ?",
        options: [
          "un marchand reste dans sa boutique",
          "un citoyen se dirige vers le forum",
          "un raccommodeur entre depuis la rue",
          "un navire quitte le port",
          "un consul harangue la foule"
        ],
        expected: [
          "un marchand reste dans sa boutique",
          "un citoyen se dirige vers le forum",
          "un raccommodeur entre depuis la rue"
        ],
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l1-t4",
        type: "matching",
        prompt: "🏛️ Associe le groupe latin et son sens.",
        pairs: [
          { left: "in taberna", right: "dans la boutique" },
          { left: "ad forum", right: "vers le forum" },
          { left: "ex via", right: "depuis la rue" }
        ],
        rightOptions: [
          "depuis la rue",
          "vers le forum",
          "dans la boutique"
        ],
        expected: {
          "in taberna": "dans la boutique",
          "ad forum": "vers le forum",
          "ex via": "depuis la rue"
        },
        points: 1
      },
      {
        id: "4e-p1-l1-t5",
        type: "singleChoice",
        prompt: "🏛️ Piège : « ad forum mercator ambulat, civis stat » signifie :",
        options: [
          "le marchand marche vers le forum, le citoyen reste là",
          "le citoyen marche vers le forum, le marchand reste là",
          "le forum se vide",
          "le marchand entre dans la boutique"
        ],
        expected: "le marchand marche vers le forum, le citoyen reste là",
        shuffle: true,
        points: 1,
        feedback: "Lis chaque verbe avec son personnage, puis rattache le groupe de lieu au bon segment."
      },
      {
        id: "4e-p1-l1-t6",
        type: "multipleChoice",
        prompt: "🏛️ Mini-texte : « Multi ad forum currunt. Tabernae aperiuntur. Mercatores ante insulas stant. » Quels indices montrent que la ville est déjà lancée ?",
        options: [
          "plusieurs gens vont déjà vers le forum",
          "les boutiques commencent à ouvrir",
          "tout le monde dort encore",
          "la scène se passe au large de la Sicile"
        ],
        expected: [
          "plusieurs gens vont déjà vers le forum",
          "les boutiques commencent à ouvrir"
        ],
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l1-t7",
        type: "textInput",
        prompt: "🏛️ Écris en latin : « boutique ».",
        expected: "taberna",
        acceptedAnswers: ["taberna"],
        answerConfig: {
          type: "one-of",
          language: "latin",
          accepted: ["taberna"]
        },
        points: 1,
        canonicalAnswer: "taberna",
        normalization: {
          trim: true,
          collapseSpaces: true,
          ignoreCase: true,
          ignorePunctuation: true,
          normalizeApostrophes: true,
          ignoreDiacritics: true
        },
        gradingFocus: "Réactivation précise du lexique urbain.",
        rejectIf: ["forme incorrecte", "réponse hors-sujet"],
        tests: [
          { input: "taberna", isCorrect: true },
          { input: "forum", isCorrect: false }
        ]
      }
    ],
    production: [
      {
        id: "4e-p1-l1-p1",
        type: "textInput",
        prompt: "🏛️ Traduis en français : mercator in taberna stat et duo cives ad forum currunt",
        expected: "le marchand reste dans la boutique et deux citoyens courent vers le forum",
        acceptedAnswers: [
          "le marchand reste dans la boutique et deux citoyens courent vers le forum",
          "un marchand reste dans une boutique et deux citoyens courent vers le forum",
          "le marchand se tient dans la boutique et deux citoyens vont vers le forum",
          "un marchand se tient dans une boutique et deux citoyens vont vers le forum"
        ],
        answerConfig: {
          type: "translation-segment",
          language: "fr",
          accepted: [
            "le marchand reste dans la boutique et deux citoyens courent vers le forum",
            "un marchand reste dans une boutique et deux citoyens courent vers le forum",
            "le marchand se tient dans la boutique et deux citoyens vont vers le forum",
            "un marchand se tient dans une boutique et deux citoyens vont vers le forum"
          ],
          ignoreDeterminers: true,
          ignoreContractions: true,
          allowPartialAnswer: "core-meaning-only"
        },
        points: 1,
        canonicalAnswer: "le marchand reste dans la boutique et deux citoyens courent vers le forum",
        normalization: {
          trim: true,
          collapseSpaces: true,
          ignoreCase: true,
          ignorePunctuation: true,
          normalizeApostrophes: true,
          ignoreDiacritics: true,
          normalizeFrenchContractions: true,
          ignoreFrenchDeterminers: true
        },
        gradingFocus: "Les deux actions et la destination doivent être correctement saisis.",
        rejectIf: [
          "verbe incorrect",
          "contre-sens global",
          "réponse hors-sujet"
        ],
        tests: [
          { input: "le marchand reste dans la boutique et deux citoyens courent vers le forum", isCorrect: true },
          { input: "un marchand se tient dans une boutique et deux citoyens vont vers le forum", isCorrect: true },
          { input: "deux citoyens restent dans la boutique et le marchand court vers le forum", isCorrect: false }
        ]
      },
      {
        id: "4e-p1-l1-p2",
        type: "textInput",
        prompt: "🏛️ Traduis en latin : Le raccommodeur entre depuis la rue.",
        expected: "sarcinator ex via intrat",
        acceptedAnswers: [
          "sarcinator ex via intrat",
          "sarcinator intrat ex via",
          "ex via sarcinator intrat",
          "ex via intrat sarcinator",
          "intrat sarcinator ex via",
          "intrat ex via sarcinator"
        ],
        answerConfig: {
          type: "one-of",
          language: "latin",
          accepted: [
            "sarcinator ex via intrat",
            "sarcinator intrat ex via",
            "ex via sarcinator intrat",
            "ex via intrat sarcinator",
            "intrat sarcinator ex via",
            "intrat ex via sarcinator"
          ],
          orderMode: "chunk-permutation"
        },
        points: 1,
        canonicalAnswer: "sarcinator ex via intrat",
        normalization: {
          trim: true,
          collapseSpaces: true,
          ignoreCase: true,
          ignorePunctuation: true,
          normalizeApostrophes: true,
          ignoreDiacritics: true
        },
        gradingFocus: "Ordre souple par blocs admis ; le groupe ex via doit rester juste.",
        rejectIf: [
          "verbe incorrect",
          "groupe de lieu incorrect",
          "forme latine impossible au niveau de la leçon",
          "réponse hors-sujet"
        ],
        tests: [
          { input: "sarcinator ex via intrat", isCorrect: true },
          { input: "ex via intrat sarcinator", isCorrect: true },
          { input: "sarcinator in via intrat", isCorrect: false }
        ]
      },
      {
        id: "4e-p1-l1-p3",
        type: "textInput",
        prompt: "🏛️ Mini-texte : « Duo cives ad forum currunt. Tabernae aperiuntur. Mercatores ante insulas stant. » Vers quel lieu plusieurs personnages convergent-ils ?",
        expected: "vers le forum",
        acceptedAnswers: [
          "vers le forum",
          "ils convergent vers le forum",
          "plusieurs personnages vont vers le forum"
        ],
        answerConfig: {
          type: "inference-fr",
          language: "fr",
          accepted: [
            "vers le forum",
            "ils convergent vers le forum",
            "plusieurs personnages vont vers le forum"
          ],
          ignoreDeterminers: true,
          ignoreContractions: true,
          allowPartialAnswer: "never"
        },
        points: 1,
        canonicalAnswer: "vers le forum",
        normalization: {
          trim: true,
          collapseSpaces: true,
          ignoreCase: true,
          ignorePunctuation: true,
          normalizeApostrophes: true,
          ignoreDiacritics: true,
          normalizeFrenchContractions: true,
          ignoreFrenchDeterminers: true
        },
        gradingFocus: "Inférence courte, fermée, fondée sur un mini-texte latin.",
        rejectIf: ["contre-sens global", "réponse hors-sujet"],
        tests: [
          { input: "vers le forum", isCorrect: true },
          { input: "ils convergent vers le forum", isCorrect: true },
          { input: "vers le port", isCorrect: false }
        ]
      }
    ],
    summary: {
      retains: [
        "Je combine vite plusieurs repères déjà connus pour lire une scène plus large.",
        "Une ville animée se lit par ses actions, ses lieux et ses convergences."
      ],
      cahier: [
        "ad forum = vers le forum ; ex via = depuis la rue",
        "mercator in taberna stat et duo cives ad forum currunt"
      ],
      keywords: ["Subura", "forum", "circulation"]
    },
    meta: {
      status: "ready",
      tags: ["4e", "p1", "subura", "reactivation-haute"]
    }
  },

  {
    id: "4e-p1-l2",
    levelId: "4e",
    period: 1,
    periodId: "p1",
    title: "Vox civium, nomen consulis",
    subtitle: headerContexts4eP1["p1-l2"],
    objective: "Faire entrer franchement la 3e déclinaison dans une scène civique dense, sans casser la fluidité de lecture.",
    lessonPoint: "Je lis les noms nouveaux dans la phrase sans attendre qu’ils ressemblent à ceux de 5e.",
    canDo: [
      "Je reconnais des noms fréquents de 3e déclinaison.",
      "Je lis une scène publique plus dense.",
      "Je traduis une phrase de choix civique."
    ],
    lexicon: [
      "consul = consul",
      "civis = citoyen",
      "urbs = ville",
      "vox = voix",
      "nomen = nom",
      "corpus = corps",
      "rex = roi",
      "mater = mère",
      "consulem = le consul (COD)",
      "civem = le citoyen (COD)",
      "audit = il/elle entend",
      "eligit = il/elle choisit"
    ],
    maxScore: 10,
    training: [
      {
        id: "4e-p1-l2-t1",
        type: "singleChoice",
        prompt: "🏛️ Quel mot appartient à la 3e déclinaison ?",
        options: ["civis", "taberna", "servus", "donum"],
        expected: "civis",
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l2-t2",
        type: "singleChoice",
        prompt: "🏛️ Dans « civis consulem audit », qui entend ?",
        options: ["civis", "consulem", "urbs", "vox"],
        expected: "civis",
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l2-t3",
        type: "multipleChoice",
        prompt: "🏛️ Choisis les mots plausibles dans une scène de choix public.",
        options: ["consul", "civis", "vox", "nomen", "navis"],
        expected: ["consul", "civis", "vox", "nomen"],
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l2-t4",
        type: "matching",
        prompt: "🏛️ Associe mot et sens.",
        pairs: [
          { left: "vox", right: "voix" },
          { left: "nomen", right: "nom" },
          { left: "urbs", right: "ville" }
        ],
        rightOptions: ["nom", "voix", "ville"],
        expected: {
          "vox": "voix",
          "nomen": "nom",
          "urbs": "ville"
        },
        points: 1
      },
      {
        id: "4e-p1-l2-t5",
        type: "singleChoice",
        prompt: "🏛️ Piège : « consulem civis audit » signifie :",
        options: [
          "le citoyen entend le consul",
          "le consul entend le citoyen",
          "la ville entend le roi",
          "la voix choisit le citoyen"
        ],
        expected: "le citoyen entend le consul",
        shuffle: true,
        points: 1,
        feedback: "Ne te fie pas seulement à la place : garde l’œil sur la forme du nom."
      },
      {
        id: "4e-p1-l2-t6",
        type: "multipleChoice",
        prompt: "🏛️ Mini-texte : « Vox crescit. Nomen consulis auditur. Civis consulem eligit. » Quelles informations deviennent certaines ?",
        options: [
          "le nom du consul circule dans la foule",
          "un citoyen choisit le consul",
          "la scène est publique",
          "un navire entre au port"
        ],
        expected: [
          "le nom du consul circule dans la foule",
          "un citoyen choisit le consul",
          "la scène est publique"
        ],
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l2-t7",
        type: "textInput",
        prompt: "🏛️ Écris en latin : « voix ».",
        expected: "vox",
        acceptedAnswers: ["vox"],
        answerConfig: {
          type: "one-of",
          language: "latin",
          accepted: ["vox"]
        },
        points: 1,
        canonicalAnswer: "vox",
        normalization: {
          trim: true,
          collapseSpaces: true,
          ignoreCase: true,
          ignorePunctuation: true,
          normalizeApostrophes: true,
          ignoreDiacritics: true
        },
        gradingFocus: "Réactivation ciblée d’un nom fréquent de 3e déclinaison.",
        rejectIf: ["forme incorrecte", "réponse hors-sujet"],
        tests: [
          { input: "vox", isCorrect: true },
          { input: "via", isCorrect: false }
        ]
      }
    ],
    production: [
      {
        id: "4e-p1-l2-p1",
        type: "textInput",
        prompt: "🏛️ Traduis en français : civis consulem audit et nomen clamat",
        expected: "le citoyen entend le consul et crie le nom",
        acceptedAnswers: [
          "le citoyen entend le consul et crie le nom",
          "un citoyen entend le consul et crie le nom",
          "le citoyen écoute le consul et crie le nom",
          "un citoyen écoute le consul et crie le nom"
        ],
        answerConfig: {
          type: "translation-segment",
          language: "fr",
          accepted: [
            "le citoyen entend le consul et crie le nom",
            "un citoyen entend le consul et crie le nom",
            "le citoyen écoute le consul et crie le nom",
            "un citoyen écoute le consul et crie le nom"
          ],
          ignoreDeterminers: true,
          ignoreContractions: true,
          allowPartialAnswer: "core-meaning-only"
        },
        points: 1,
        canonicalAnswer: "le citoyen entend le consul et crie le nom",
        normalization: {
          trim: true,
          collapseSpaces: true,
          ignoreCase: true,
          ignorePunctuation: true,
          normalizeApostrophes: true,
          ignoreDiacritics: true,
          normalizeFrenchContractions: true,
          ignoreFrenchDeterminers: true
        },
        gradingFocus: "Les deux actions et le bon rapport civis/consulem doivent être compris.",
        rejectIf: [
          "sens inversé sujet/objet",
          "verbe incorrect",
          "contre-sens global",
          "réponse hors-sujet"
        ],
        tests: [
          { input: "le citoyen entend le consul et crie le nom", isCorrect: true },
          { input: "un citoyen écoute le consul et crie le nom", isCorrect: true },
          { input: "le consul entend le citoyen et crie le nom", isCorrect: false }
        ]
      },
      {
        id: "4e-p1-l2-p2",
        type: "textInput",
        prompt: "🏛️ Traduis en latin : Le citoyen choisit le consul.",
        expected: "civis consulem eligit",
        acceptedAnswers: [
          "civis consulem eligit",
          "civis eligit consulem",
          "consulem civis eligit",
          "consulem eligit civis",
          "eligit civis consulem",
          "eligit consulem civis"
        ],
        answerConfig: {
          type: "one-of",
          language: "latin",
          accepted: [
            "civis consulem eligit",
            "civis eligit consulem",
            "consulem civis eligit",
            "consulem eligit civis",
            "eligit civis consulem",
            "eligit consulem civis"
          ],
          orderMode: "chunk-permutation"
        },
        points: 1,
        canonicalAnswer: "civis consulem eligit",
        normalization: {
          trim: true,
          collapseSpaces: true,
          ignoreCase: true,
          ignorePunctuation: true,
          normalizeApostrophes: true,
          ignoreDiacritics: true
        },
        gradingFocus: "Entrée effective dans la 3e déclinaison par le contexte civique.",
        rejectIf: [
          "sens inversé sujet/objet",
          "verbe incorrect",
          "forme latine impossible au niveau de la leçon",
          "réponse hors-sujet"
        ],
        tests: [
          { input: "civis consulem eligit", isCorrect: true },
          { input: "consulem eligit civis", isCorrect: true },
          { input: "consul civem eligit", isCorrect: false }
        ]
      },
      {
        id: "4e-p1-l2-p3",
        type: "textInput",
        prompt: "🏛️ Mini-texte : « Vox crescit. Nomen consulis auditur. Multi ad centrum pergunt. » Quelle information devient certaine ?",
        expected: "la foule se rassemble autour du nom du consul",
        acceptedAnswers: [
          "la foule se rassemble autour du nom du consul",
          "le nom du consul attire la foule",
          "plusieurs personnes se resserrent autour du consul",
          "le centre de la place attire la foule autour du consul"
        ],
        answerConfig: {
          type: "inference-fr",
          language: "fr",
          accepted: [
            "la foule se rassemble autour du nom du consul",
            "le nom du consul attire la foule",
            "plusieurs personnes se resserrent autour du consul",
            "le centre de la place attire la foule autour du consul"
          ],
          ignoreDeterminers: true,
          ignoreContractions: true,
          allowPartialAnswer: "never"
        },
        points: 1,
        canonicalAnswer: "la foule se rassemble autour du nom du consul",
        normalization: {
          trim: true,
          collapseSpaces: true,
          ignoreCase: true,
          ignorePunctuation: true,
          normalizeApostrophes: true,
          ignoreDiacritics: true,
          normalizeFrenchContractions: true,
          ignoreFrenchDeterminers: true
        },
        gradingFocus: "Inférence fermée sur un mini-texte latin ; réponse courte et calibrable.",
        rejectIf: ["contre-sens global", "réponse hors-sujet"],
        tests: [
          { input: "la foule se rassemble autour du nom du consul", isCorrect: true },
          { input: "le nom du consul attire la foule", isCorrect: true },
          { input: "la foule quitte le forum pour Ostie", isCorrect: false }
        ]
      }
    ],
    summary: {
      retains: [
        "Je lis les noms nouveaux de 3e déclinaison en contexte, sans casser la phrase.",
        "Le forum public donne un usage naturel à ces formes."
      ],
      cahier: [
        "civis / consulem",
        "civis consulem eligit"
      ],
      keywords: ["forum", "consul", "3e déclinaison"]
    },
    meta: {
      status: "ready",
      tags: ["4e", "p1", "forum", "declinaison3"]
    }
  },

  {
    id: "4e-p1-l3",
    levelId: "4e",
    period: 1,
    periodId: "p1",
    title: "Ex Sicilia venit",
    subtitle: headerContexts4eP1["p1-l3"],
    objective: "Faire entrer le parfait comme temps d’impact : ce qui est arrivé, ce qui a été apporté, ce qui change immédiatement l’atmosphère.",
    lessonPoint: "Je reconnais le parfait comme le temps de ce qui a eu lieu et modifie la scène.",
    canDo: [
      "Je reconnais plusieurs parfaits fréquents.",
      "Je distingue ce qui est déjà arrivé de ce qui dure encore.",
      "Je traduis un message venu du large."
    ],
    lexicon: [
      "nuntius = messager",
      "tabella = tablette",
      "Sicilia = Sicile",
      "mare = mer",
      "navis = navire",
      "portus = port",
      "venit = il/elle est venu(e)",
      "attulit = il/elle a apporté",
      "dixit = il/elle a dit",
      "vidit = il/elle a vu",
      "scripsit = il/elle a écrit",
      "heri = hier"
    ],
    maxScore: 10,
    training: [
      {
        id: "4e-p1-l3-t1",
        type: "singleChoice",
        prompt: "🌊 Quel mot signifie « hier » ?",
        options: ["heri", "hodie", "mare", "portus"],
        expected: "heri",
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l3-t2",
        type: "singleChoice",
        prompt: "🌊 Dans « nuntius tabellam attulit », quel verbe marque un fait accompli ?",
        options: ["nuntius", "tabellam", "attulit", "Sicilia"],
        expected: "attulit",
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l3-t3",
        type: "multipleChoice",
        prompt: "🌊 Choisis les formes de parfait dans la leçon.",
        options: ["attulit", "dixit", "vidit", "currit", "stat"],
        expected: ["attulit", "dixit", "vidit"],
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l3-t4",
        type: "matching",
        prompt: "🌊 Associe forme et sens.",
        pairs: [
          { left: "attulit", right: "a apporté" },
          { left: "scripsit", right: "a écrit" },
          { left: "venit", right: "est venu" }
        ],
        rightOptions: ["a apporté", "est venu", "a écrit"],
        expected: {
          "attulit": "a apporté",
          "scripsit": "a écrit",
          "venit": "est venu"
        },
        points: 1
      },
      {
        id: "4e-p1-l3-t5",
        type: "singleChoice",
        prompt: "🌊 Piège : « nuntius ex Sicilia venit » signifie ici :",
        options: [
          "le messager est venu de Sicile",
          "le messager vient chaque jour de Sicile",
          "la Sicile court vers le messager",
          "le navire écrit une lettre"
        ],
        expected: "le messager est venu de Sicile",
        shuffle: true,
        points: 1,
        feedback: "Dans cette leçon, la forme est lue comme un fait déjà arrivé, pas comme une habitude."
      },
      {
        id: "4e-p1-l3-t6",
        type: "multipleChoice",
        prompt: "🌊 Mini-texte : « Nuntius venit. Tabellam attulit. Lucius legit. » Qu’est-ce qui est déjà accompli avant la lecture ?",
        options: [
          "le messager est arrivé",
          "la tablette a été apportée",
          "Lucius a déjà tout compris",
          "le port a disparu"
        ],
        expected: [
          "le messager est arrivé",
          "la tablette a été apportée"
        ],
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l3-t7",
        type: "textInput",
        prompt: "🌊 Écris en latin : « messager ».",
        expected: "nuntius",
        acceptedAnswers: ["nuntius"],
        answerConfig: {
          type: "one-of",
          language: "latin",
          accepted: ["nuntius"]
        },
        points: 1,
        canonicalAnswer: "nuntius",
        normalization: {
          trim: true,
          collapseSpaces: true,
          ignoreCase: true,
          ignorePunctuation: true,
          normalizeApostrophes: true,
          ignoreDiacritics: true
        },
        gradingFocus: "Réactivation du lexique central de la nouvelle.",
        rejectIf: ["forme incorrecte", "réponse hors-sujet"],
        tests: [
          { input: "nuntius", isCorrect: true },
          { input: "navis", isCorrect: false }
        ]
      }
    ],
    production: [
      {
        id: "4e-p1-l3-p1",
        type: "textInput",
        prompt: "🌊 Traduis en français : nuntius ex Sicilia venit et tabellam attulit",
        expected: "le messager est venu de Sicile et a apporté la tablette",
        acceptedAnswers: [
          "le messager est venu de Sicile et a apporté la tablette",
          "un messager est venu de Sicile et a apporté la tablette",
          "le messager est venu de Sicile et a apporté une tablette",
          "un messager est venu de Sicile et a apporté une tablette"
        ],
        answerConfig: {
          type: "translation-segment",
          language: "fr",
          accepted: [
            "le messager est venu de Sicile et a apporté la tablette",
            "un messager est venu de Sicile et a apporté la tablette",
            "le messager est venu de Sicile et a apporté une tablette",
            "un messager est venu de Sicile et a apporté une tablette"
          ],
          ignoreDeterminers: true,
          ignoreContractions: true,
          allowPartialAnswer: "core-meaning-only"
        },
        points: 1,
        canonicalAnswer: "le messager est venu de Sicile et a apporté la tablette",
        normalization: {
          trim: true,
          collapseSpaces: true,
          ignoreCase: true,
          ignorePunctuation: true,
          normalizeApostrophes: true,
          ignoreDiacritics: true,
          normalizeFrenchContractions: true,
          ignoreFrenchDeterminers: true
        },
        gradingFocus: "Les deux parfaits doivent être compris comme faits accomplis.",
        rejectIf: [
          "verbe incorrect",
          "contre-sens global",
          "réponse hors-sujet"
        ],
        tests: [
          { input: "le messager est venu de Sicile et a apporté la tablette", isCorrect: true },
          { input: "un messager est venu de Sicile et a apporté une tablette", isCorrect: true },
          { input: "le messager vient de Sicile et apporte la tablette", isCorrect: false }
        ]
      },
      {
        id: "4e-p1-l3-p2",
        type: "textInput",
        prompt: "🌊 Traduis en latin : Le messager a vu le navire au port.",
        expected: "nuntius navem in portu vidit",
        acceptedAnswers: [
          "nuntius navem in portu vidit",
          "nuntius in portu navem vidit",
          "navem nuntius in portu vidit",
          "in portu nuntius navem vidit",
          "vidit nuntius navem in portu",
          "navem in portu vidit nuntius"
        ],
        answerConfig: {
          type: "one-of",
          language: "latin",
          accepted: [
            "nuntius navem in portu vidit",
            "nuntius in portu navem vidit",
            "navem nuntius in portu vidit",
            "in portu nuntius navem vidit",
            "vidit nuntius navem in portu",
            "navem in portu vidit nuntius"
          ],
          orderMode: "chunk-permutation"
        },
        points: 1,
        canonicalAnswer: "nuntius navem in portu vidit",
        normalization: {
          trim: true,
          collapseSpaces: true,
          ignoreCase: true,
          ignorePunctuation: true,
          normalizeApostrophes: true,
          ignoreDiacritics: true
        },
        gradingFocus: "Le parfait et le groupe de lieu doivent être exacts.",
        rejectIf: [
          "sens inversé sujet/objet",
          "verbe incorrect",
          "groupe de lieu incorrect",
          "forme latine impossible au niveau de la leçon",
          "réponse hors-sujet"
        ],
        tests: [
          { input: "nuntius navem in portu vidit", isCorrect: true },
          { input: "in portu nuntius navem vidit", isCorrect: true },
          { input: "nuntius navis in portu vidit", isCorrect: false }
        ]
      },
      {
        id: "4e-p1-l3-p3",
        type: "textInput",
        prompt: "🌊 Mini-texte : « Nuntius ex Sicilia venit. Tabellam attulit. Multi tacent. » Quel effet immédiat produit l’arrivée du message ?",
        expected: "elle fait entrer une inquiétude nouvelle dans la scène",
        acceptedAnswers: [
          "elle fait entrer une inquiétude nouvelle dans la scène",
          "le message apporte une inquiétude nouvelle",
          "une inquiétude nouvelle entre dans la scène avec le message",
          "le silence gagne la scène avec l'arrivée du message"
        ],
        answerConfig: {
          type: "inference-fr",
          language: "fr",
          accepted: [
            "elle fait entrer une inquiétude nouvelle dans la scène",
            "le message apporte une inquiétude nouvelle",
            "une inquiétude nouvelle entre dans la scène avec le message",
            "le silence gagne la scène avec l'arrivée du message"
          ],
          ignoreDeterminers: true,
          ignoreContractions: true,
          allowPartialAnswer: "never"
        },
        points: 1,
        canonicalAnswer: "elle fait entrer une inquiétude nouvelle dans la scène",
        normalization: {
          trim: true,
          collapseSpaces: true,
          ignoreCase: true,
          ignorePunctuation: true,
          normalizeApostrophes: true,
          ignoreDiacritics: true,
          normalizeFrenchContractions: true,
          ignoreFrenchDeterminers: true
        },
        gradingFocus: "Inférence fermée fondée sur le mini-texte latin et l’effet du message.",
        rejectIf: ["contre-sens global", "réponse hors-sujet"],
        tests: [
          { input: "le message apporte une inquiétude nouvelle", isCorrect: true },
          { input: "une inquiétude nouvelle entre dans la scène avec le message", isCorrect: true },
          { input: "tout le monde se réjouit et la scène devient légère", isCorrect: false }
        ]
      }
    ],
    summary: {
      retains: [
        "Je lis le parfait comme le temps de ce qui a eu lieu et change la scène.",
        "Les nouvelles venues du large modifient immédiatement l’atmosphère."
      ],
      cahier: [
        "heri = hier ; attulit = a apporté",
        "nuntius ex Sicilia venit et tabellam attulit"
      ],
      keywords: ["Sicilia", "mer", "parfait"]
    },
    meta: {
      status: "ready",
      tags: ["4e", "p1", "sicilia", "perfectum"]
    }
  }
];
  makePlaceholderLesson(1, 4, "Ad navem Ostiensim"),
  makePlaceholderLesson(1, 5, "Epistulae ex castris"),
  makePlaceholderLesson(1, 6, "Roma crescit"),
  makePlaceholderLesson(1, 7, "Hannibal appropinquat?"),
  makePlaceholderLesson(1, 8, "Colonia nova conditur"),
  makePlaceholderLesson(1, 9, "Amici separantur"),
  makePlaceholderLesson(1, 10, "Iterum conveniunt"),
  makePlaceholderLesson(1, 11, "Tempora in via"),
  makePlaceholderLesson(1, 12, "Hic rumor, illa littera"),
  makePlaceholderLesson(1, 13, "Civis, consul, colonia"),
  makePlaceholderLesson(1, 14, "Tabellae ex Sicilia"),
  makePlaceholderLesson(1, 15, "Roma, mare, metus")
];
