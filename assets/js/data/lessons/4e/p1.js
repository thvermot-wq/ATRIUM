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
  "p1-l3": "Au bord du forum, une tablette arrive avec une odeur de sel, de bois humide et de voyage trop long ; la cire garde la trace d’un lien rompu à la hâte. « Quand la mer envoie quelque chose, elle n’envoie jamais seulement une nouvelle », dit Lucius, puis il passe le pouce sur une fente noire qui coupe un mot.",
  "p1-l4": "À Ostie, les coques sombres boivent encore la lumière du matin ; les cordages grincent, un marin jette un ordre sans lever la tête, et le ressac frappe bas contre les pierres du quai. « Un départ commence toujours avant la voile », dit Marcus, puis il suit du regard une passerelle qu’on retire à moitié.",
  "p1-l5": "La lettre venue du camp sent la fumée froide, le cuir mouillé et la cire mal fermée ; en la dépliant, Livia découvre un angle noirci comme si le feu l’avait touchée sans la prendre. « On écrit vite quand on a peu de temps ; on écrit encore plus vite quand on a peur », dit-elle, puis elle relit deux fois la même ligne.",
  "p1-l6": "Les routes blanches rendent la lumière, les marteaux répondent aux chars, et le marbre neuf accroche le soleil au bord du forum ; plus loin, des ouvriers tirent des blocs sous la poussière ocre. « On dit que Rome s’étend ; moi, je l’entends », dit Flavia, puis elle se protège les yeux d’un revers de main."
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
  },

  {
    id: "4e-p1-l4",
    levelId: "4e",
    period: 1,
    periodId: "p1",
    title: "Ad navem Ostiensim",
    subtitle: headerContexts4eP1["p1-l4"],
    objective: "Lire une scène de quai en suivant les groupes de lieu et de mouvement dans un espace maritime plus vaste.",
    lessonPoint: "Je lis chaque groupe prépositionnel comme un bloc de trajet dans la scène.",
    canDo: [
      "Je suis un déplacement sur le quai sans perdre les repères.",
      "Je distingue lieu fixe, provenance et destination.",
      "Je traduis une scène de départ maritime."
    ],
    lexicon: [
      "Ostia, Ostiae = Ostie",
      "navis, navis = navire",
      "portus, portus = port",
      "nauta, nautae = marin",
      "ancora, ancorae = ancre",
      "pons, pontis = passerelle, pont",
      "ora, orae = bord, rivage",
      "unda, undae = vague",
      "velum, veli = voile",
      "ad navem = vers le navire",
      "ex portu = hors du port",
      "in navi = dans le navire",
      "ascendo, ascendis = monter",
      "exeo, exis = sortir",
      "propero, properas = se hâter"
    ],
    maxScore: 10,
    training: [
      {
        id: "4e-p1-l4-t1",
        type: "singleChoice",
        prompt: "⚓ Dans « nauta ad navem properat », quel groupe indique la destination ?",
        options: ["nauta", "ad navem", "properat", "Ostia"],
        expected: "ad navem",
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l4-t2",
        type: "singleChoice",
        prompt: "⚓ Dans « mercator ex portu exit et nauta in navi stat », qui se trouve déjà dans le navire ?",
        options: ["mercator", "nauta", "portus", "ancora"],
        expected: "nauta",
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l4-t3",
        type: "multipleChoice",
        prompt: "⚓ Mini-texte : « Nauta ad navem currit. Mercator ex portu exit. Puer in navi stat. » Quelles actions ont bien lieu ?",
        options: [
          "un marin se dirige vers le navire",
          "un marchand sort du port",
          "un garçon se tient déjà dans le navire",
          "une armée traverse les Alpes",
          "un consul choisit un citoyen"
        ],
        expected: [
          "un marin se dirige vers le navire",
          "un marchand sort du port",
          "un garçon se tient déjà dans le navire"
        ],
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l4-t4",
        type: "matching",
        prompt: "⚓ Associe le groupe latin et son sens.",
        pairs: [
          { left: "ad navem", right: "vers le navire" },
          { left: "ex portu", right: "hors du port" },
          { left: "in navi", right: "dans le navire" }
        ],
        rightOptions: [
          "dans le navire",
          "hors du port",
          "vers le navire"
        ],
        expected: {
          "ad navem": "vers le navire",
          "ex portu": "hors du port",
          "in navi": "dans le navire"
        },
        points: 1
      },
      {
        id: "4e-p1-l4-t5",
        type: "singleChoice",
        prompt: "⚓ Piège : « ad navem mercator properat, nauta stat » signifie :",
        options: [
          "le marchand se hâte vers le navire, le marin reste là",
          "le marin se hâte vers le marchand",
          "le navire court vers le port",
          "le marchand sort déjà du port"
        ],
        expected: "le marchand se hâte vers le navire, le marin reste là",
        shuffle: true,
        points: 1,
        feedback: "Je lis chaque verbe avec son personnage, puis chaque groupe de lieu avec son mouvement."
      },
      {
        id: "4e-p1-l4-t6",
        type: "multipleChoice",
        prompt: "⚓ Mini-texte : « Pons tollitur. Nautae clamant. Multi ad navem currunt. » Quels indices montrent qu’un départ est en train de se préparer ?",
        options: [
          "la passerelle est retirée",
          "les marins donnent des ordres",
          "plusieurs gens courent vers le navire",
          "la scène se déroule dans une école"
        ],
        expected: [
          "la passerelle est retirée",
          "les marins donnent des ordres",
          "plusieurs gens courent vers le navire"
        ],
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l4-t7",
        type: "textInput",
        prompt: "⚓ Écris en latin : « port ».",
        expected: "portus",
        acceptedAnswers: ["portus"],
        answerConfig: {
          type: "one-of",
          language: "latin",
          accepted: ["portus"]
        },
        points: 1,
        canonicalAnswer: "portus",
        normalization: {
          trim: true,
          collapseSpaces: true,
          ignoreCase: true,
          ignorePunctuation: true,
          normalizeApostrophes: true,
          ignoreDiacritics: true
        },
        gradingFocus: "Réactivation du lexique maritime central.",
        rejectIf: ["forme incorrecte", "réponse hors-sujet"],
        tests: [
          { input: "portus", isCorrect: true },
          { input: "forum", isCorrect: false }
        ]
      }
    ],
    production: [
      {
        id: "4e-p1-l4-p1",
        type: "textInput",
        prompt: "⚓ Traduis en français : nauta ad navem properat et mercator ex portu exit",
        expected: "le marin se hâte vers le navire et le marchand sort du port",
        acceptedAnswers: [
          "le marin se hâte vers le navire et le marchand sort du port",
          "un marin se hâte vers le navire et un marchand sort du port",
          "le marin court vers le navire et le marchand quitte le port",
          "un marin court vers le navire et un marchand quitte le port"
        ],
        answerConfig: {
          type: "translation-segment",
          language: "fr",
          accepted: [
            "le marin se hâte vers le navire et le marchand sort du port",
            "un marin se hâte vers le navire et un marchand sort du port",
            "le marin court vers le navire et le marchand quitte le port",
            "un marin court vers le navire et un marchand quitte le port"
          ],
          ignoreDeterminers: true,
          ignoreContractions: true,
          allowPartialAnswer: "core-meaning-only"
        },
        points: 1,
        canonicalAnswer: "le marin se hâte vers le navire et le marchand sort du port",
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
        gradingFocus: "Les deux mouvements et leurs directions doivent être saisis.",
        rejectIf: [
          "verbe incorrect",
          "contre-sens global",
          "réponse hors-sujet"
        ],
        tests: [
          { input: "le marin se hâte vers le navire et le marchand sort du port", isCorrect: true },
          { input: "un marin court vers le navire et un marchand quitte le port", isCorrect: true },
          { input: "le marin sort du navire et le marchand entre dans le port", isCorrect: false }
        ]
      },
      {
        id: "4e-p1-l4-p2",
        type: "textInput",
        prompt: "⚓ Traduis en latin : Le marin monte dans le navire.",
        expected: "nauta in navem ascendit",
        acceptedAnswers: [
          "nauta in navem ascendit",
          "nauta ascendit in navem",
          "in navem nauta ascendit",
          "in navem ascendit nauta",
          "ascendit nauta in navem",
          "ascendit in navem nauta"
        ],
        answerConfig: {
          type: "one-of",
          language: "latin",
          accepted: [
            "nauta in navem ascendit",
            "nauta ascendit in navem",
            "in navem nauta ascendit",
            "in navem ascendit nauta",
            "ascendit nauta in navem",
            "ascendit in navem nauta"
          ],
          orderMode: "chunk-permutation"
        },
        points: 1,
        canonicalAnswer: "nauta in navem ascendit",
        normalization: {
          trim: true,
          collapseSpaces: true,
          ignoreCase: true,
          ignorePunctuation: true,
          normalizeApostrophes: true,
          ignoreDiacritics: true
        },
        gradingFocus: "Le mouvement d’entrée dans le navire doit être correctement formulé.",
        rejectIf: [
          "verbe incorrect",
          "groupe de lieu incorrect",
          "forme latine impossible au niveau de la leçon",
          "réponse hors-sujet"
        ],
        tests: [
          { input: "nauta in navem ascendit", isCorrect: true },
          { input: "in navem ascendit nauta", isCorrect: true },
          { input: "nauta in navi ascendit", isCorrect: false }
        ]
      },
      {
        id: "4e-p1-l4-p3",
        type: "textInput",
        prompt: "⚓ Mini-texte : « Pons tollitur. Multi ad navem currunt. Nautae clamant. » Quel geste rend le départ plus proche ?",
        expected: "le retrait de la passerelle",
        acceptedAnswers: [
          "le retrait de la passerelle",
          "on retire la passerelle",
          "la passerelle est retirée",
          "le fait qu'on enlève la passerelle"
        ],
        answerConfig: {
          type: "inference-fr",
          language: "fr",
          accepted: [
            "le retrait de la passerelle",
            "on retire la passerelle",
            "la passerelle est retirée",
            "le fait qu'on enlève la passerelle"
          ],
          ignoreDeterminers: true,
          ignoreContractions: true,
          allowPartialAnswer: "never"
        },
        points: 1,
        canonicalAnswer: "le retrait de la passerelle",
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
        gradingFocus: "Inférence courte, appuyée sur un indice matériel précis.",
        rejectIf: ["contre-sens global", "réponse hors-sujet"],
        tests: [
          { input: "le retrait de la passerelle", isCorrect: true },
          { input: "la passerelle est retirée", isCorrect: true },
          { input: "la pluie commence à tomber", isCorrect: false }
        ]
      }
    ],
    summary: {
      retains: [
        "Je lis les groupes de lieu comme des blocs de trajet.",
        "Un départ maritime se comprend par les gestes, les positions et les directions."
      ],
      cahier: [
        "ad navem = vers le navire ; ex portu = hors du port ; in navi = dans le navire",
        "nauta ad navem properat et mercator ex portu exit"
      ],
      keywords: ["Ostie", "port", "départ"]
    },
    meta: {
      status: "ready",
      tags: ["4e", "p1", "ostie", "depart-maritime"]
    }
  },

  {
    id: "4e-p1-l5",
    levelId: "4e",
    period: 1,
    periodId: "p1",
    title: "Epistulae ex castris",
    subtitle: headerContexts4eP1["p1-l5"],
    objective: "Distinguer imparfait descriptif et parfait événementiel dans une lettre venue du camp.",
    lessonPoint: "Je lis l’imparfait pour le fond de la scène, le parfait pour ce qui a rompu le cours des choses.",
    canDo: [
      "Je reconnais un imparfait descriptif.",
      "Je reconnais un parfait qui marque un fait accompli.",
      "Je traduis un court passage de lettre militaire."
    ],
    lexicon: [
      "epistula, epistulae = lettre",
      "castra, castrorum = camp",
      "miles, militis = soldat",
      "hostis, hostis = ennemi",
      "ignis, ignis = feu",
      "nox, noctis = nuit",
      "timor, timoris = peur",
      "fumus, fumi = fumée",
      "cera, cerae = cire",
      "ex castris = du camp",
      "scribo, scribis = écrire",
      "maneo, manes = rester",
      "venio, venis = venir",
      "video, vides = voir",
      "timeo, times = craindre"
    ],
    maxScore: 10,
    training: [
      {
        id: "4e-p1-l5-t1",
        type: "singleChoice",
        prompt: "✉️ Quel mot signifie « camp » ?",
        options: ["castra", "urbs", "navis", "forum"],
        expected: "castra",
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l5-t2",
        type: "singleChoice",
        prompt: "✉️ Dans « miles scribebat », quel temps vois-tu ?",
        options: ["présent", "imparfait", "parfait", "futur"],
        expected: "imparfait",
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l5-t3",
        type: "multipleChoice",
        prompt: "✉️ Choisis les formes qui décrivent un fond de scène ou une durée.",
        options: ["scribebat", "manebat", "timebat", "vidit", "venit"],
        expected: ["scribebat", "manebat", "timebat"],
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l5-t4",
        type: "matching",
        prompt: "✉️ Associe forme et valeur.",
        pairs: [
          { left: "scribebat", right: "écrivait" },
          { left: "vidit", right: "a vu" },
          { left: "timebat", right: "craignait" }
        ],
        rightOptions: ["a vu", "écrivait", "craignait"],
        expected: {
          "scribebat": "écrivait",
          "vidit": "a vu",
          "timebat": "craignait"
        },
        points: 1
      },
      {
        id: "4e-p1-l5-t5",
        type: "singleChoice",
        prompt: "✉️ Piège : « miles scribebat et hostem vidit » signifie :",
        options: [
          "le soldat écrivait et il a vu l’ennemi",
          "le soldat a écrit et voyait l’ennemi",
          "l’ennemi écrivait au soldat",
          "le camp regardait la nuit"
        ],
        expected: "le soldat écrivait et il a vu l’ennemi",
        shuffle: true,
        points: 1,
        feedback: "L’imparfait installe le fond ; le parfait marque l’irruption du fait."
      },
      {
        id: "4e-p1-l5-t6",
        type: "multipleChoice",
        prompt: "✉️ Mini-texte : « Miles scribebat. Nox erat. Hostis venit. » Quels éléments forment le fond avant l’arrivée de l’ennemi ?",
        options: [
          "le soldat était en train d’écrire",
          "la nuit était là",
          "l’ennemi est arrivé",
          "le port se remplissait"
        ],
        expected: [
          "le soldat était en train d’écrire",
          "la nuit était là"
        ],
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l5-t7",
        type: "textInput",
        prompt: "✉️ Écris en latin : « nuit ».",
        expected: "nox",
        acceptedAnswers: ["nox"],
        answerConfig: {
          type: "one-of",
          language: "latin",
          accepted: ["nox"]
        },
        points: 1,
        canonicalAnswer: "nox",
        normalization: {
          trim: true,
          collapseSpaces: true,
          ignoreCase: true,
          ignorePunctuation: true,
          normalizeApostrophes: true,
          ignoreDiacritics: true
        },
        gradingFocus: "Réactivation d’un nom concret du front.",
        rejectIf: ["forme incorrecte", "réponse hors-sujet"],
        tests: [
          { input: "nox", isCorrect: true },
          { input: "mare", isCorrect: false }
        ]
      }
    ],
    production: [
      {
        id: "4e-p1-l5-p1",
        type: "textInput",
        prompt: "✉️ Traduis en français : miles scribebat et hostem vidit",
        expected: "le soldat écrivait et il a vu l’ennemi",
        acceptedAnswers: [
          "le soldat écrivait et il a vu l’ennemi",
          "un soldat écrivait et il a vu l’ennemi",
          "le soldat était en train d’écrire et a vu l’ennemi",
          "un soldat était en train d’écrire et a vu l’ennemi"
        ],
        answerConfig: {
          type: "translation-segment",
          language: "fr",
          accepted: [
            "le soldat écrivait et il a vu l’ennemi",
            "un soldat écrivait et il a vu l’ennemi",
            "le soldat était en train d’écrire et a vu l’ennemi",
            "un soldat était en train d’écrire et a vu l’ennemi"
          ],
          ignoreDeterminers: true,
          ignoreContractions: true,
          allowPartialAnswer: "core-meaning-only"
        },
        points: 1,
        canonicalAnswer: "le soldat écrivait et il a vu l’ennemi",
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
        gradingFocus: "Il faut distinguer nettement le fond à l’imparfait et l’événement au parfait.",
        rejectIf: [
          "verbe incorrect",
          "contre-sens global",
          "réponse hors-sujet"
        ],
        tests: [
          { input: "le soldat écrivait et il a vu l’ennemi", isCorrect: true },
          { input: "un soldat était en train d’écrire et a vu l’ennemi", isCorrect: true },
          { input: "le soldat a écrit et voyait l’ennemi", isCorrect: false }
        ]
      },
      {
        id: "4e-p1-l5-p2",
        type: "textInput",
        prompt: "✉️ Traduis en latin : Le soldat craignait l’ennemi.",
        expected: "miles hostem timebat",
        acceptedAnswers: [
          "miles hostem timebat",
          "miles timebat hostem",
          "hostem miles timebat",
          "hostem timebat miles",
          "timebat miles hostem",
          "timebat hostem miles"
        ],
        answerConfig: {
          type: "one-of",
          language: "latin",
          accepted: [
            "miles hostem timebat",
            "miles timebat hostem",
            "hostem miles timebat",
            "hostem timebat miles",
            "timebat miles hostem",
            "timebat hostem miles"
          ],
          orderMode: "chunk-permutation"
        },
        points: 1,
        canonicalAnswer: "miles hostem timebat",
        normalization: {
          trim: true,
          collapseSpaces: true,
          ignoreCase: true,
          ignorePunctuation: true,
          normalizeApostrophes: true,
          ignoreDiacritics: true
        },
        gradingFocus: "L’imparfait doit être correctement réinvesti dans une phrase simple.",
        rejectIf: [
          "sens inversé sujet/objet",
          "verbe incorrect",
          "forme latine impossible au niveau de la leçon",
          "réponse hors-sujet"
        ],
        tests: [
          { input: "miles hostem timebat", isCorrect: true },
          { input: "hostem timebat miles", isCorrect: true },
          { input: "miles hostem timuit", isCorrect: false }
        ]
      },
      {
        id: "4e-p1-l5-p3",
        type: "textInput",
        prompt: "✉️ Mini-texte : « Miles scribebat. Nox erat. Hostis venit. » Quel élément fait basculer la scène ?",
        expected: "l’arrivée de l’ennemi",
        acceptedAnswers: [
          "l’arrivée de l’ennemi",
          "le moment où l’ennemi arrive",
          "le fait que l’ennemi est venu",
          "l’ennemi qui arrive"
        ],
        answerConfig: {
          type: "inference-fr",
          language: "fr",
          accepted: [
            "l’arrivée de l’ennemi",
            "le moment où l’ennemi arrive",
            "le fait que l’ennemi est venu",
            "l’ennemi qui arrive"
          ],
          ignoreDeterminers: true,
          ignoreContractions: true,
          allowPartialAnswer: "never"
        },
        points: 1,
        canonicalAnswer: "l’arrivée de l’ennemi",
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
        gradingFocus: "Inférence fermée sur la rupture narrative.",
        rejectIf: ["contre-sens global", "réponse hors-sujet"],
        tests: [
          { input: "l’arrivée de l’ennemi", isCorrect: true },
          { input: "le moment où l’ennemi arrive", isCorrect: true },
          { input: "la tranquillité de la nuit", isCorrect: false }
        ]
      }
    ],
    summary: {
      retains: [
        "Je lis l’imparfait pour le fond, le parfait pour la rupture.",
        "Dans une lettre venue du camp, les temps aident à distinguer atmosphère et événement."
      ],
      cahier: [
        "scribebat = écrivait ; vidit = a vu",
        "miles scribebat et hostem vidit"
      ],
      keywords: ["lettre", "camp", "temps"]
    },
    meta: {
      status: "ready",
      tags: ["4e", "p1", "lettre", "imparfait-parfait"]
    }
  },

  {
    id: "4e-p1-l6",
    levelId: "4e",
    period: 1,
    periodId: "p1",
    title: "Roma crescit",
    subtitle: headerContexts4eP1["p1-l6"],
    objective: "Lire l’imparfait comme temps de description et de durée dans une scène d’expansion matérielle de Rome.",
    lessonPoint: "Quand le décor dure et se développe, je m’attends souvent à un imparfait.",
    canDo: [
      "Je reconnais une description à l’imparfait.",
      "Je comprends une scène de chantier ou de circulation.",
      "Je traduis un passage descriptif plus ample."
    ],
    lexicon: [
      "Roma, Romae = Rome",
      "via, viae = route, rue",
      "lapis, lapidis = pierre",
      "marmor, marmoris = marbre",
      "currus, currus = char",
      "flumen, fluminis = fleuve",
      "pulvis, pulveris = poussière",
      "malleus, mallei = marteau",
      "forum, fori = forum",
      "sol, solis = soleil",
      "cresco, crescis = grandir",
      "duco, ducis = mener",
      "fero, fers = porter",
      "luceo, luces = briller",
      "sono, sonas = sonner, résonner"
    ],
    maxScore: 10,
    training: [
      {
        id: "4e-p1-l6-t1",
        type: "singleChoice",
        prompt: "🏗️ Dans « marmor lucebat », quel temps vois-tu ?",
        options: ["présent", "imparfait", "parfait", "futur"],
        expected: "imparfait",
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l6-t2",
        type: "singleChoice",
        prompt: "🏗️ Quel mot désigne la poussière ?",
        options: ["pulvis", "marmor", "currus", "flumen"],
        expected: "pulvis",
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l6-t3",
        type: "multipleChoice",
        prompt: "🏗️ Choisis les formes qui décrivent un décor en durée.",
        options: ["crescebat", "lucebat", "sonabat", "vidit", "venit"],
        expected: ["crescebat", "lucebat", "sonabat"],
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l6-t4",
        type: "matching",
        prompt: "🏗️ Associe forme et sens.",
        pairs: [
          { left: "crescebat", right: "grandissait" },
          { left: "lucebat", right: "brillait" },
          { left: "sonabat", right: "sonnait" }
        ],
        rightOptions: ["brillait", "sonnait", "grandissait"],
        expected: {
          "crescebat": "grandissait",
          "lucebat": "brillait",
          "sonabat": "sonnait"
        },
        points: 1
      },
      {
        id: "4e-p1-l6-t5",
        type: "singleChoice",
        prompt: "🏗️ Piège : « via lucebat et currus sonabat » signifie :",
        options: [
          "la route brillait et le char résonnait",
          "la route a brillé et le char a sonné",
          "le char regardait la route",
          "la pierre a couru vers le fleuve"
        ],
        expected: "la route brillait et le char résonnait",
        shuffle: true,
        points: 1,
        feedback: "L’imparfait installe ici un décor prolongé, pas un fait brutal."
      },
      {
        id: "4e-p1-l6-t6",
        type: "multipleChoice",
        prompt: "🏗️ Mini-texte : « Via lucebat. Currus sonabat. Pulvis surgebat. » Quels indices montrent une ville en travail ?",
        options: [
          "la route renvoie la lumière",
          "les chars font entendre leur passage",
          "la poussière se soulève",
          "la mer se retire du quai"
        ],
        expected: [
          "la route renvoie la lumière",
          "les chars font entendre leur passage",
          "la poussière se soulève"
        ],
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l6-t7",
        type: "textInput",
        prompt: "🏗️ Écris en latin : « marbre ».",
        expected: "marmor",
        acceptedAnswers: ["marmor"],
        answerConfig: {
          type: "one-of",
          language: "latin",
          accepted: ["marmor"]
        },
        points: 1,
        canonicalAnswer: "marmor",
        normalization: {
          trim: true,
          collapseSpaces: true,
          ignoreCase: true,
          ignorePunctuation: true,
          normalizeApostrophes: true,
          ignoreDiacritics: true
        },
        gradingFocus: "Réactivation d’un nom concret du décor romain.",
        rejectIf: ["forme incorrecte", "réponse hors-sujet"],
        tests: [
          { input: "marmor", isCorrect: true },
          { input: "mare", isCorrect: false }
        ]
      }
    ],
    production: [
      {
        id: "4e-p1-l6-p1",
        type: "textInput",
        prompt: "🏗️ Traduis en français : via lucebat et currus sonabat",
        expected: "la route brillait et le char résonnait",
        acceptedAnswers: [
          "la route brillait et le char résonnait",
          "une route brillait et un char résonnait",
          "la route brillait et le char faisait entendre son bruit",
          "une route brillait et un char faisait entendre son bruit"
        ],
        answerConfig: {
          type: "translation-segment",
          language: "fr",
          accepted: [
            "la route brillait et le char résonnait",
            "une route brillait et un char résonnait",
            "la route brillait et le char faisait entendre son bruit",
            "une route brillait et un char faisait entendre son bruit"
          ],
          ignoreDeterminers: true,
          ignoreContractions: true,
          allowPartialAnswer: "core-meaning-only"
        },
        points: 1,
        canonicalAnswer: "la route brillait et le char résonnait",
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
        gradingFocus: "Il faut lire l’imparfait comme une description prolongée.",
        rejectIf: [
          "verbe incorrect",
          "contre-sens global",
          "réponse hors-sujet"
        ],
        tests: [
          { input: "la route brillait et le char résonnait", isCorrect: true },
          { input: "une route brillait et un char résonnait", isCorrect: true },
          { input: "la route a brillé et le char a résonné", isCorrect: false }
        ]
      },
      {
        id: "4e-p1-l6-p2",
        type: "textInput",
        prompt: "🏗️ Traduis en latin : Le marbre brillait.",
        expected: "marmor lucebat",
        acceptedAnswers: [
          "marmor lucebat",
          "lucebat marmor"
        ],
        answerConfig: {
          type: "one-of",
          language: "latin",
          accepted: [
            "marmor lucebat",
            "lucebat marmor"
          ],
          orderMode: "chunk-permutation"
        },
        points: 1,
        canonicalAnswer: "marmor lucebat",
        normalization: {
          trim: true,
          collapseSpaces: true,
          ignoreCase: true,
          ignorePunctuation: true,
          normalizeApostrophes: true,
          ignoreDiacritics: true
        },
        gradingFocus: "Réinvestir l’imparfait descriptif dans une phrase minimale nette.",
        rejectIf: [
          "verbe incorrect",
          "forme latine impossible au niveau de la leçon",
          "réponse hors-sujet"
        ],
        tests: [
          { input: "marmor lucebat", isCorrect: true },
          { input: "lucebat marmor", isCorrect: true },
          { input: "marmor luxit", isCorrect: false }
        ]
      },
      {
        id: "4e-p1-l6-p3",
        type: "textInput",
        prompt: "🏗️ Mini-texte : « Via lucebat. Currus sonabat. Pulvis surgebat. » Quel élément rend la ville particulièrement matérielle dans cette scène ?",
        expected: "la poussière qui se soulève",
        acceptedAnswers: [
          "la poussière qui se soulève",
          "le soulèvement de la poussière",
          "la poussière qui monte",
          "la poussière en mouvement"
        ],
        answerConfig: {
          type: "inference-fr",
          language: "fr",
          accepted: [
            "la poussière qui se soulève",
            "le soulèvement de la poussière",
            "la poussière qui monte",
            "la poussière en mouvement"
          ],
          ignoreDeterminers: true,
          ignoreContractions: true,
          allowPartialAnswer: "never"
        },
        points: 1,
        canonicalAnswer: "la poussière qui se soulève",
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
        gradingFocus: "Inférence courte fondée sur un indice matériel précis du décor.",
        rejectIf: ["contre-sens global", "réponse hors-sujet"],
        tests: [
          { input: "la poussière qui se soulève", isCorrect: true },
          { input: "la poussière qui monte", isCorrect: true },
          { input: "le calme de la mer", isCorrect: false }
        ]
      }
    ],
    summary: {
      retains: [
        "Quand le décor dure et se développe, je lis souvent un imparfait.",
        "Rome en expansion se laisse lire par ses matières, ses sons et ses mouvements continus."
      ],
      cahier: [
        "crescebat = grandissait ; lucebat = brillait ; sonabat = sonnait",
        "via lucebat et currus sonabat"
      ],
      keywords: ["Rome", "imparfait", "description"]
    },
    meta: {
      status: "ready",
      tags: ["4e", "p1", "rome", "imparfait-descriptif"]
    }
  },

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
