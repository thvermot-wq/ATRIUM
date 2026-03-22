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

const headerContexts4eP1_L7toL9 = {
  "p1-l7": "Au pied des marches du forum, les voix baissent d’un coup autour d’un seul nom, puis repartent plus vite encore ; sur plusieurs tablettes, la cire garde l’empreinte de doigts pressés. « Une rumeur marche plus vite qu’une armée ; c’est bien pour ça qu’elle fait peur », dit Lucius, puis il relève la tête quand quelqu’un prononce enfin le nom d’Hannibal.",
  "p1-l8": "Sur une carte de bois couverte de cire, une ligne rouge descend vers le sud et s’arrête sur un nom encore neuf ; tout près, un scribe recopie une liste de citoyens à envoyer. « Une ville fondée loin d’ici agrandit Rome sans la déplacer », dit Marcus, puis il pose l’ongle sur un point minuscule au bord de la mer.",
  "p1-l9": "Sur le quai, personne ne parle fort ; les gestes se font plus courts, les regards reviennent toujours vers la passerelle, et le vent prend les pans des manteaux sans réussir à briser le silence. « Les villes gagnent du terrain, mais elles prennent aussi des gens », dit Flavia, puis elle replie une bande de tissu safran autour d’un paquet mal fermé."
};

const headerContexts4eP1_L10toL12 = {
  "p1-l10": "Le soir descend sur la ville avec une poussière dorée ; près d’un petit sanctuaire, deux silhouettes se reconnaissent avant même de parler, et une tablette passe d’une main à l’autre sans être lâchée tout de suite. « Une nouvelle n’a pas le même poids selon qu’on la lit seul ou qu’on la reçoit de quelqu’un », dit Livia, puis elle incline la tête comme si elle hésitait encore à sourire.",
  "p1-l11": "Le long d’une route blanche, un cavalier dépasse un convoi de mulets puis disparaît derrière un tournant ; plus loin, une borne tiède garde la chaleur du jour, et la poussière reste en suspens après le passage des roues. « Ce n’est jamais le même temps selon qu’on voit, qu’on raconte ou qu’on se souvient », dit Marcus, puis il relit trois lignes dans un autre ordre.",
  "p1-l12": "Sur une table chargée de tablettes, d’anneaux et de rubans, un secrétaire trie des messages pendant que le portique bruisse de voix retenues. « Ce n’est pas la même chose, cette lettre, cette rumeur, et l’homme même qui parle », dit Flavia, puis elle pousse du doigt la mauvaise tablette du mauvais côté."
};

const headerContexts4eP1_L13toL15 = {
  "p1-l13": "Sous un portique peint, une carte du monde connu pend au mur ; des routes rouges filent depuis Rome vers des noms qu’on prononce à mi-voix, comme si chacun pesait davantage que les autres. « Une cité se raconte aussi par les mots qu’elle invente pour se gouverner », dit Lucius, puis il pose deux doigts sur Rome avant de les faire glisser jusqu’à Sicilia.",
  "p1-l14": "La tablette passe de main en main ; certains lisent en silence, d’autres à voix basse, comme si le bois lui-même pouvait garder un secret venu du large. « Une même nouvelle change selon celui qui l’apporte, selon celui qui la lit, et selon celui qui préfère ne pas y croire », dit Marcus, puis il trie trois messages en trois tas distincts.",
  "p1-l15": "Le soir tombe sur le forum, mais au loin les mâts d’Ostie gardent encore une lueur pâle ; des noms de lieux, de peuples et d’hommes circulent d’une voix à l’autre, jusqu’à se mêler à la poussière et au bruit des pas. « Rome paraît immense quand on la regarde d’ici ; elle paraît fragile dès qu’on écoute plus loin », dit Flavia, puis personne ne répond tout de suite."
};

const lessonL1 = {
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
      "Subura, Suburae = Subure",
      "forum, fori = forum",
      "via, viae = rue",
      "insula, insulae = immeuble",
      "taberna, tabernae = boutique",
      "civis, civis = citoyen",
      "mercator, mercatoris = marchand",
      "sarcinator, sarcinatoris = raccommodeur",
      "ambulo, ambulas = marcher",
      "curro, curris = courir",
      "intro, intras = entrer",
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
  prompt: "🏛️ Mini-texte : « Duo cives ad forum currunt. Tabernae aperiuntur. Mercatores ante insulas stant. » Recopie le groupe latin qui montre la destination des citoyens.",
  expected: "ad forum",
  acceptedAnswers: ["ad forum"],
  answerConfig: {
    type: "one-of",
    language: "latin",
    accepted: ["ad forum"]
  },
  points: 1,
  canonicalAnswer: "ad forum",
  normalization: {
    trim: true,
    collapseSpaces: true,
    ignoreCase: true,
    ignorePunctuation: true,
    normalizeApostrophes: true,
    ignoreDiacritics: true
  },
  gradingFocus: "Repérer un groupe de destination dans une scène urbaine.",
  rejectIf: ["forme absente du texte", "réponse hors-sujet"],
  tests: [
    { input: "ad forum", isCorrect: true },
    { input: "duo cives", isCorrect: false },
    { input: "ante insulas", isCorrect: false }
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
  };

const lessonL2 = {
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
      "consul, consulis = consul",
      "civis, civis = citoyen",
      "urbs, urbis = ville",
      "vox, vocis = voix",
      "nomen, nominis = nom",
      "corpus, corporis = corps",
      "rex, regis = roi",
      "mater, matris = mère",
      "forme-clé : consulem = le consul (COD)",
      "forme-clé : civem = le citoyen (COD)",
      "audio, audis = entendre",
      "eligo, eligis = choisir"
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
  prompt: "🏛️ Associe chaque forme à la fonction qu'elle peut jouer dans une phrase simple.",
  pairs: [
    { left: "civis", right: "forme sujet possible" },
    { left: "consulem", right: "forme COD possible" },
    { left: "nomen", right: "nom neutre : sujet ou COD" }
  ],
  rightOptions: [
    "forme sujet possible",
    "forme COD possible",
    "nom neutre : sujet ou COD"
  ],
  expected: {
    "civis": "forme sujet possible",
    "consulem": "forme COD possible",
    "nomen": "nom neutre : sujet ou COD"
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
  prompt: "🏛️ Mini-texte : « Vox crescit. Nomen consulis auditur. Multi ad centrum pergunt. » Recopie le groupe latin qui attire clairement la foule.",
  expected: "nomen consulis",
  acceptedAnswers: ["nomen consulis"],
  answerConfig: {
    type: "one-of",
    language: "latin",
    accepted: ["nomen consulis"]
  },
  points: 1,
  canonicalAnswer: "nomen consulis",
  normalization: {
    trim: true,
    collapseSpaces: true,
    ignoreCase: true,
    ignorePunctuation: true,
    normalizeApostrophes: true,
    ignoreDiacritics: true
  },
  gradingFocus: "Appuyer l'inférence sur le groupe central du texte.",
  rejectIf: ["forme absente du texte", "réponse hors-sujet"],
  tests: [
    { input: "nomen consulis", isCorrect: true },
    { input: "vox", isCorrect: false },
    { input: "multi", isCorrect: false }
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
  };

const lessonL3 = {
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
      "nuntius, nuntii = messager",
      "tabella, tabellae = tablette",
      "Sicilia, Siciliae = Sicile",
      "mare, maris = mer",
      "navis, navis = navire",
      "portus, portus = port",
      "venio, venis = venir",
      "fero, fers = porter, apporter ; forme-clé : attulit = a apporté",
      "dico, dicis = dire ; forme-clé : dixit = a dit",
      "video, vides = voir ; forme-clé : vidit = a vu",
      "scribo, scribis = écrire ; forme-clé : scripsit = a écrit",
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
  prompt: "🌊 Associe chaque forme de parfait net à son sens.",
  pairs: [
    { left: "attulit", right: "a apporté" },
    { left: "scripsit", right: "a écrit" },
    { left: "vidit", right: "a vu" }
  ],
  rightOptions: ["a apporté", "a écrit", "a vu"],
  expected: {
    "attulit": "a apporté",
    "scripsit": "a écrit",
    "vidit": "a vu"
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
  prompt: "🌊 Mini-texte : « Nuntius venit. Tabellam attulit. Multi tacent. » Recopie le verbe qui montre le plus clairement qu'une action est déjà accomplie.",
  expected: "attulit",
  acceptedAnswers: ["attulit"],
  answerConfig: {
    type: "one-of",
    language: "latin",
    accepted: ["attulit"]
  },
  points: 1,
  canonicalAnswer: "attulit",
  normalization: {
    trim: true,
    collapseSpaces: true,
    ignoreCase: true,
    ignorePunctuation: true,
    normalizeApostrophes: true,
    ignoreDiacritics: true
  },
  gradingFocus: "Repérer le parfait le moins ambigu du texte.",
  rejectIf: ["forme absente du texte", "réponse hors-sujet"],
  tests: [
    { input: "attulit", isCorrect: true },
    { input: "venit", isCorrect: false },
    { input: "tacent", isCorrect: false }
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
  };

const lessonL4 = {
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
      "ora, orae = rivage, bord",
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
  prompt: "⚓ Mini-texte : « Pons tollitur. Multi ad navem currunt. Nautae clamant. » Recopie le groupe latin qui montre clairement un mouvement vers le navire.",
  expected: "ad navem",
  acceptedAnswers: ["ad navem"],
  answerConfig: {
    type: "one-of",
    language: "latin",
    accepted: ["ad navem"]
  },
  points: 1,
  canonicalAnswer: "ad navem",
  normalization: {
    trim: true,
    collapseSpaces: true,
    ignoreCase: true,
    ignorePunctuation: true,
    normalizeApostrophes: true,
    ignoreDiacritics: true
  },
  gradingFocus: "Repérer un groupe de destination dans une scène maritime.",
  rejectIf: ["forme absente du texte", "réponse hors-sujet"],
  tests: [
    { input: "ad navem", isCorrect: true },
    { input: "pons", isCorrect: false },
    { input: "nautae", isCorrect: false }
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
  };

const lessonL5 = {
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
  prompt: "✉️ Choisis les formes qui installent clairement le fond de scène dans la durée.",
  options: ["scribebat", "manebat", "timebat", "vidit", "timuit"],
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
  type: "singleChoice",
  prompt: "✉️ Quelle phrase latine convient si le soldat était en train de craindre l'ennemi au moment où l'action se déroule ?",
  options: [
    "miles hostem timebat",
    "miles hostem timuit",
    "miles hostem vidit",
    "miles hostis timebat"
  ],
  expected: "miles hostem timebat",
  shuffle: true,
  points: 1,
  feedback: "On cherche ici le temps du fond de scène, pas le choc ponctuel."
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
  };

const lessonL6 = {
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
  prompt: "🏗️ Mini-texte : « Via lucebat. Currus sonabat. Pulvis surgebat. » Donne un verbe du texte qui appartient clairement à une description prolongée.",
  expected: "surgebat",
  acceptedAnswers: ["surgebat", "lucebat", "sonabat"],
  answerConfig: {
    type: "one-of",
    language: "latin",
    accepted: ["surgebat", "lucebat", "sonabat"]
  },
  points: 1,
  canonicalAnswer: "surgebat",
  normalization: {
    trim: true,
    collapseSpaces: true,
    ignoreCase: true,
    ignorePunctuation: true,
    normalizeApostrophes: true,
    ignoreDiacritics: true
  },
  gradingFocus: "Repérer un imparfait descriptif présent dans le texte.",
  rejectIf: ["forme absente du texte", "réponse hors-sujet"],
  tests: [
    { input: "surgebat", isCorrect: true },
    { input: "lucebat", isCorrect: true },
    { input: "vidit", isCorrect: false }
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
  };

const lessonL7 = {
    id: "4e-p1-l7",
    levelId: "4e",
    period: 1,
    periodId: "p1",
    title: "Hannibal appropinquat?",
    subtitle: headerContexts4eP1_L7toL9["p1-l7"],
    objective: "Comprendre comment imparfait et parfait construisent une rumeur de guerre, entre peur durable et fait soudain.",
    lessonPoint: "Je distingue ce qu’on répétait, ce qu’on craignait et ce qui s’est produit.",
    canDo: [
      "Je lis une rumeur courte sans me perdre.",
      "Je distingue le bruit qui dure et le fait qui rompt.",
      "Je traduis une phrase liée à la menace militaire."
    ],
    lexicon: [
      "Hannibal, Hannibalis = Hannibal",
      "Alpes, Alpium = Alpes",
      "hostis, hostis = ennemi",
      "rumor, rumoris = rumeur",
      "timor, timoris = peur",
      "exercitus, exercitus = armée",
      "urbs, urbis = ville",
      "civis, civis = citoyen",
      "vox, vocis = voix",
      "prope = près de",
      "appropinquo, appropinquas = s'approcher",
      "audio, audis = entendre",
      "timeo, times = craindre",
      "clamo, clamas = crier",
      "fugio, fugis = fuir"
    ],
    maxScore: 10,
    training: [
      {
        id: "4e-p1-l7-t1",
        type: "singleChoice",
        prompt: "⚔️ Quel mot signifie « rumeur » ?",
        options: ["rumor", "timor", "hostis", "exercitus"],
        expected: "rumor",
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l7-t2",
        type: "singleChoice",
        prompt: "⚔️ Dans « cives Hannibalem timebant », qui avait peur ?",
        options: ["cives", "Hannibalem", "timor", "urbs"],
        expected: "cives",
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l7-t3",
        type: "multipleChoice",
        prompt: "⚔️ Quelles formes relèvent du parfait ?",
        options: ["audiverunt", "clamaverunt", "fugerunt", "timebant", "appropinquabat"],
        expected: ["audiverunt", "clamaverunt", "fugerunt"],
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l7-t4",
        type: "matching",
        prompt: "⚔️ Associe forme et sens.",
        pairs: [
          { left: "timebant", right: "craignaient" },
          { left: "audiverunt", right: "ont entendu" },
          { left: "fugerunt", right: "ont fui" }
        ],
        rightOptions: ["ont entendu", "ont fui", "craignaient"],
        expected: {
          "timebant": "craignaient",
          "audiverunt": "ont entendu",
          "fugerunt": "ont fui"
        },
        points: 1
      },
      {
        id: "4e-p1-l7-t5",
        type: "singleChoice",
        prompt: "⚔️ Piège : « rumor crescebat, nonnulli fugerunt » signifie :",
        options: [
          "la rumeur grandissait, certains ont fui",
          "la rumeur a grandi, certains fuyaient",
          "la peur écrit une lettre",
          "l’armée restait dans le port"
        ],
        expected: "la rumeur grandissait, certains ont fui",
        shuffle: true,
        points: 1,
        feedback: "L’imparfait installe la montée ; le parfait marque la rupture."
      },
      {
        id: "4e-p1-l7-t6",
        type: "multipleChoice",
        prompt: "⚔️ Mini-texte : « Rumor in urbe crescebat. Cives timebant. Nonnulli fugerunt. Marcus tamen manebat. » Quelles informations deviennent certaines ?",
        options: [
          "la rumeur montait dans la ville",
          "les citoyens avaient peur",
          "certains ont fui",
          "Marcus est resté",
          "la colonie est fondée"
        ],
        expected: [
          "la rumeur montait dans la ville",
          "les citoyens avaient peur",
          "certains ont fui",
          "Marcus est resté"
        ],
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l7-t7",
        type: "textInput",
        prompt: "⚔️ Écris en latin : « peur ».",
        expected: "timor",
        acceptedAnswers: ["timor"],
        answerConfig: {
          type: "one-of",
          language: "latin",
          accepted: ["timor"]
        },
        points: 1,
        canonicalAnswer: "timor",
        normalization: {
          trim: true,
          collapseSpaces: true,
          ignoreCase: true,
          ignorePunctuation: true,
          normalizeApostrophes: true,
          ignoreDiacritics: true
        },
        gradingFocus: "Réactivation d’un nom-clé de la scène historique.",
        rejectIf: ["forme incorrecte", "réponse hors-sujet"],
        tests: [
          { input: "timor", isCorrect: true },
          { input: "rumor", isCorrect: false }
        ]
      }
    ],
    production: [
      {
        id: "4e-p1-l7-p1",
        type: "textInput",
        prompt: "⚔️ Traduis en français : cives Hannibalem timebant, nonnulli fugerunt",
        expected: "les citoyens craignaient Hannibal, certains ont fui",
        acceptedAnswers: [
          "les citoyens craignaient Hannibal, certains ont fui",
          "des citoyens craignaient Hannibal, certains ont fui",
          "les citoyens avaient peur d'Hannibal, certains ont fui",
          "des citoyens avaient peur d'Hannibal, certains ont fui"
        ],
        answerConfig: {
          type: "translation-segment",
          language: "fr",
          accepted: [
            "les citoyens craignaient Hannibal, certains ont fui",
            "des citoyens craignaient Hannibal, certains ont fui",
            "les citoyens avaient peur d'Hannibal, certains ont fui",
            "des citoyens avaient peur d'Hannibal, certains ont fui"
          ],
          ignoreDeterminers: true,
          ignoreContractions: true,
          allowPartialAnswer: "core-meaning-only"
        },
        points: 1,
        canonicalAnswer: "les citoyens craignaient Hannibal, certains ont fui",
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
        gradingFocus: "Il faut distinguer la peur durable et le départ soudain.",
        rejectIf: [
          "verbe incorrect",
          "contre-sens global",
          "réponse hors-sujet"
        ],
        tests: [
          { input: "les citoyens craignaient Hannibal, certains ont fui", isCorrect: true },
          { input: "des citoyens avaient peur d'Hannibal, certains ont fui", isCorrect: true },
          { input: "les citoyens ont craint Hannibal, certains fuyaient", isCorrect: false }
        ]
      },
      {
        id: "4e-p1-l7-p2",
        type: "textInput",
        prompt: "⚔️ Traduis en latin : Les citoyens craignaient Hannibal.",
        expected: "cives Hannibalem timebant",
        acceptedAnswers: [
          "cives Hannibalem timebant",
          "Hannibalem cives timebant",
          "cives timebant Hannibalem",
          "Hannibalem timebant cives",
          "timebant cives Hannibalem",
          "timebant Hannibalem cives"
        ],
        answerConfig: {
          type: "one-of",
          language: "latin",
          accepted: [
            "cives Hannibalem timebant",
            "Hannibalem cives timebant",
            "cives timebant Hannibalem",
            "Hannibalem timebant cives",
            "timebant cives Hannibalem",
            "timebant Hannibalem cives"
          ],
          orderMode: "chunk-permutation"
        },
        points: 1,
        canonicalAnswer: "cives Hannibalem timebant",
        normalization: {
          trim: true,
          collapseSpaces: true,
          ignoreCase: true,
          ignorePunctuation: true,
          normalizeApostrophes: true,
          ignoreDiacritics: true
        },
        gradingFocus: "Réinvestir l’imparfait dans une phrase historique simple.",
        rejectIf: [
          "sens inversé sujet/objet",
          "verbe incorrect",
          "forme latine impossible au niveau de la leçon",
          "réponse hors-sujet"
        ],
        tests: [
          { input: "cives Hannibalem timebant", isCorrect: true },
          { input: "Hannibalem timebant cives", isCorrect: true },
          { input: "cives Hannibalem timuerunt", isCorrect: false }
        ]
      },
      
{
  id: "4e-p1-l7-p3",
  type: "textInput",
  prompt: "⚔️ Mini-texte : « Rumor crescebat. Cives timebant. Nonnulli fugerunt. » Recopie d'abord le verbe du fond de peur, puis le verbe de la rupture. Réponds dans cet ordre.",
  expected: "timebant, fugerunt",
  acceptedAnswers: [
    "timebant, fugerunt",
    "timebant fugerunt"
  ],
  answerConfig: {
    type: "one-of",
    language: "latin",
    accepted: [
      "timebant, fugerunt",
      "timebant fugerunt"
    ]
  },
  points: 1,
  canonicalAnswer: "timebant, fugerunt",
  normalization: {
    trim: true,
    collapseSpaces: true,
    ignoreCase: true,
    ignorePunctuation: true,
    normalizeApostrophes: true,
    ignoreDiacritics: true
  },
  gradingFocus: "Associer directement une forme à sa valeur narrative.",
  rejectIf: ["forme absente du texte", "ordre inversé", "réponse hors-sujet"],
  tests: [
    { input: "timebant, fugerunt", isCorrect: true },
    { input: "timebant fugerunt", isCorrect: true },
    { input: "fugerunt, timebant", isCorrect: false }
  ]
}
    ],
    summary: {
      retains: [
        "Je distingue ce qu’on disait de ce qui s’est produit.",
        "La peur s’installe souvent à l’imparfait, le choc se marque souvent au parfait."
      ],
      cahier: [
        "timebant = craignaient ; fugerunt = ont fui",
        "cives Hannibalem timebant, nonnulli fugerunt"
      ],
      keywords: ["Hannibal", "rumeur", "temps"]
    },
    meta: {
      status: "ready",
      tags: ["4e", "p1", "hannibal", "imparfait-parfait"]
    }
  };

const lessonL8 = {
    id: "4e-p1-l8",
    levelId: "4e",
    period: 1,
    periodId: "p1",
    title: "Colonia nova conditur",
    subtitle: headerContexts4eP1_L7toL9["p1-l8"],
    objective: "Introduire la voix passive dans une scène d’expansion romaine et de fondation coloniale.",
    lessonPoint: "Quand le sujet reçoit l’action, je lis autrement le verbe.",
    canDo: [
      "Je reconnais un passif simple fréquent.",
      "Je comprends qu’une action peut être subie.",
      "Je traduis une phrase courte de fondation."
    ],
    lexicon: [
      "colonia, coloniae = colonie",
      "terra, terrae = terre",
      "via, viae = route",
      "ager, agri = champ, territoire",
      "urbs, urbis = ville",
      "murus, muri = mur",
      "civis, civis = citoyen",
      "nomen, nominis = nom",
      "littera, litterae = lettre, inscription",
      "longe = loin",
      "condo, condis = fonder",
      "voco, vocas = appeler",
      "lego, legis = lire",
      "mitto, mittis = envoyer",
      "paro, paras = préparer"
    ],
    maxScore: 10,
    training: [
      {
        id: "4e-p1-l8-t1",
        type: "singleChoice",
        prompt: "🏛️ Quel mot signifie « colonie » ?",
        options: ["colonia", "terra", "via", "ager"],
        expected: "colonia",
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l8-t2",
        type: "matching",
        prompt: "🏛️ Associe la forme passive et son sens.",
        pairs: [
          { left: "conditur", right: "est fondée" },
          { left: "vocatur", right: "est appelée" },
          { left: "mittitur", right: "est envoyé(e)" }
        ],
        rightOptions: ["est envoyée", "est fondée", "est appelée"],
        expected: {
          "conditur": "est fondée",
          "vocatur": "est appelée",
          "mittitur": "est envoyé(e)"
        },
        points: 1
      },
      {
        id: "4e-p1-l8-t3",
        type: "singleChoice",
        prompt: "🏛️ Dans « colonia nova conditur », qu’est-ce qui est fondé ?",
        options: ["colonia", "nova", "via", "ager"],
        expected: "colonia",
        shuffle: true,
        points: 1
      },
      
{
  id: "4e-p1-l8-t4",
  type: "singleChoice",
  prompt: "🏛️ Traduis le plus précisément possible : via paratur",
  options: [
    "la route est préparée",
    "la route prépare",
    "on a préparé la route",
    "la route a fui"
  ],
  expected: "la route est préparée",
  shuffle: true,
  points: 1,
  feedback: "Ici, on vérifie la lecture passive stricte."
},
      {
        id: "4e-p1-l8-t5",
        type: "singleChoice",
        prompt: "🏛️ Quel verbe est au passif ?",
        options: ["conditur", "condit", "mittit", "vocat"],
        expected: "conditur",
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l8-t6",
        type: "multipleChoice",
        prompt: "🏛️ Mini-texte : « Colonia nova conditur. Cives mittuntur. Via paratur. Marcus stupet. » Quelles informations deviennent certaines ?",
        options: [
          "une colonie est fondée",
          "des citoyens sont envoyés",
          "une route est préparée",
          "Hannibal fuit vers les Alpes"
        ],
        expected: [
          "une colonie est fondée",
          "des citoyens sont envoyés",
          "une route est préparée"
        ],
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l8-t7",
        type: "textInput",
        prompt: "🏛️ Écris en latin : « territoire ».",
        expected: "ager",
        acceptedAnswers: ["ager"],
        answerConfig: {
          type: "one-of",
          language: "latin",
          accepted: ["ager"]
        },
        points: 1,
        canonicalAnswer: "ager",
        normalization: {
          trim: true,
          collapseSpaces: true,
          ignoreCase: true,
          ignorePunctuation: true,
          normalizeApostrophes: true,
          ignoreDiacritics: true
        },
        gradingFocus: "Réactivation du lexique de fondation.",
        rejectIf: ["forme incorrecte", "réponse hors-sujet"],
        tests: [
          { input: "ager", isCorrect: true },
          { input: "urbs", isCorrect: false }
        ]
      }
    ],
    production: [
      
{
  id: "4e-p1-l8-p1",
  type: "singleChoice",
  prompt: "🏛️ Traduis le plus précisément possible : cives mittuntur",
  options: [
    "les citoyens sont envoyés",
    "les citoyens envoient",
    "on envoie les citoyens",
    "les citoyens ont envoyé"
  ],
  expected: "les citoyens sont envoyés",
  shuffle: true,
  points: 1,
  feedback: "Ici, le point visé est bien la lecture passive stricte."
},
      {
        id: "4e-p1-l8-p2",
        type: "textInput",
        prompt: "🏛️ Traduis en latin : La colonie est fondée.",
        expected: "colonia conditur",
        acceptedAnswers: [
          "colonia conditur",
          "colonia nova conditur",
          "conditur colonia",
          "conditur colonia nova"
        ],
        answerConfig: {
          type: "one-of",
          language: "latin",
          accepted: [
            "colonia conditur",
            "colonia nova conditur",
            "conditur colonia",
            "conditur colonia nova"
          ],
          orderMode: "chunk-permutation"
        },
        points: 1,
        canonicalAnswer: "colonia conditur",
        normalization: {
          trim: true,
          collapseSpaces: true,
          ignoreCase: true,
          ignorePunctuation: true,
          normalizeApostrophes: true,
          ignoreDiacritics: true
        },
        gradingFocus: "Premier réinvestissement du passif dans une phrase simple.",
        rejectIf: [
          "verbe incorrect",
          "forme latine impossible au niveau de la leçon",
          "réponse hors-sujet"
        ],
        tests: [
          { input: "colonia conditur", isCorrect: true },
          { input: "colonia nova conditur", isCorrect: true },
          { input: "colonia condit", isCorrect: false }
        ]
      },
      
{
  id: "4e-p1-l8-p3",
  type: "textInput",
  prompt: "🏛️ Mini-texte : « Colonia nova conditur. Cives mittuntur. Via paratur. » Recopie un verbe passif du texte.",
  expected: "conditur",
  acceptedAnswers: ["conditur", "mittuntur", "paratur"],
  answerConfig: {
    type: "one-of",
    language: "latin",
    accepted: ["conditur", "mittuntur", "paratur"]
  },
  points: 1,
  canonicalAnswer: "conditur",
  normalization: {
    trim: true,
    collapseSpaces: true,
    ignoreCase: true,
    ignorePunctuation: true,
    normalizeApostrophes: true,
    ignoreDiacritics: true
  },
  gradingFocus: "Repérer une forme passive dans un mini-dossier.",
  rejectIf: ["forme absente du texte", "réponse hors-sujet"],
  tests: [
    { input: "conditur", isCorrect: true },
    { input: "mittuntur", isCorrect: true },
    { input: "mittit", isCorrect: false }
  ]
}
    ],
    summary: {
      retains: [
        "Le sujet n’agit pas toujours : il peut recevoir l’action.",
        "Le passif change le regard sur la scène."
      ],
      cahier: [
        "conditur = est fondée ; mittuntur = sont envoyés",
        "colonia nova conditur"
      ],
      keywords: ["colonie", "passif", "expansion"]
    },
    meta: {
      status: "ready",
      tags: ["4e", "p1", "colonia", "passif"]
    }
  };

const lessonL9 = {
    id: "4e-p1-l9",
    levelId: "4e",
    period: 1,
    periodId: "p1",
    title: "Amici separantur",
    subtitle: headerContexts4eP1_L7toL9["p1-l9"],
    objective: "Réinvestir le passif dans une scène affective et concrète de séparation et d’éloignement.",
    lessonPoint: "Je lis le passif comme l’indice qu’un personnage subit une décision ou un départ.",
    canDo: [
      "Je repère un passif déjà vu.",
      "Je comprends une scène de séparation.",
      "Je traduis une phrase courte d’éloignement."
    ],
    lexicon: [
      "amicus, amici = ami",
      "familia, familiae = famille",
      "navis, navis = navire",
      "litus, litoris = rivage",
      "mare, maris = mer",
      "donum, doni = cadeau",
      "mater, matris = mère",
      "vox, vocis = voix",
      "silentium, silentii = silence",
      "in litore = sur le rivage",
      "separo, separas = séparer",
      "duco, ducis = conduire",
      "mitto, mittis = envoyer",
      "relinquo, relinquis = laisser",
      "taceo, taces = se taire"
    ],
    maxScore: 10,
    training: [
      {
        id: "4e-p1-l9-t1",
        type: "singleChoice",
        prompt: "🌫️ Que signifie « separantur » ?",
        options: [
          "ils/elles sont séparé(e)s",
          "ils/elles séparent",
          "ils/elles reviennent",
          "ils/elles écrivent"
        ],
        expected: "ils/elles sont séparé(e)s",
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l9-t2",
        type: "matching",
        prompt: "🌫️ Associe forme et sens.",
        pairs: [
          { left: "separantur", right: "sont séparés" },
          { left: "ducitur", right: "est conduit" },
          { left: "relinquitur", right: "est laissé" }
        ],
        rightOptions: ["est conduit", "est laissé", "sont séparés"],
        expected: {
          "separantur": "sont séparés",
          "ducitur": "est conduit",
          "relinquitur": "est laissé"
        },
        points: 1
      },
      {
        id: "4e-p1-l9-t3",
        type: "singleChoice",
        prompt: "🌫️ Dans « amici separantur », qui subit l’action ?",
        options: ["amici", "mare", "donum", "litus"],
        expected: "amici",
        shuffle: true,
        points: 1
      },
      
{
  id: "4e-p1-l9-t4",
  type: "multipleChoice",
  prompt: "🌫️ Quelles formes montrent qu'un personnage subit une action ?",
  options: ["separantur", "ducitur", "relinquitur", "ducit", "relinquit"],
  expected: ["separantur", "ducitur", "relinquitur"],
  shuffle: true,
  points: 1
},
      
{
  id: "4e-p1-l9-t5",
  type: "singleChoice",
  prompt: "🌫️ Quelle forme met le plus clairement en scène une séparation subie ?",
  options: ["separantur", "flevit", "mansit", "rediit"],
  expected: "separantur",
  shuffle: true,
  points: 1
},
      {
        id: "4e-p1-l9-t6",
        type: "multipleChoice",
        prompt: "🌫️ Mini-texte : « Amici separantur. Publius abest. Tullia flevit. Marcus tamen mansit. » Quelles informations deviennent certaines ?",
        options: [
          "les amis sont séparés",
          "Publius est absent",
          "Tullia a pleuré",
          "Marcus est resté",
          "une route est préparée"
        ],
        expected: [
          "les amis sont séparés",
          "Publius est absent",
          "Tullia a pleuré",
          "Marcus est resté"
        ],
        shuffle: true,
        points: 1
      },
      {
        id: "4e-p1-l9-t7",
        type: "textInput",
        prompt: "🌫️ Écris en latin : « cadeau ».",
        expected: "donum",
        acceptedAnswers: ["donum"],
        answerConfig: {
          type: "one-of",
          language: "latin",
          accepted: ["donum"]
        },
        points: 1,
        canonicalAnswer: "donum",
        normalization: {
          trim: true,
          collapseSpaces: true,
          ignoreCase: true,
          ignorePunctuation: true,
          normalizeApostrophes: true,
          ignoreDiacritics: true
        },
        gradingFocus: "Réactivation d’un objet concret de la scène affective.",
        rejectIf: ["forme incorrecte", "réponse hors-sujet"],
        tests: [
          { input: "donum", isCorrect: true },
          { input: "mare", isCorrect: false }
        ]
      }
    ],
    production: [
      {
        id: "4e-p1-l9-p1",
        type: "textInput",
        prompt: "🌫️ Traduis en français : amici separantur",
        expected: "les amis sont séparés",
        acceptedAnswers: [
          "les amis sont séparés",
          "des amis sont séparés",
          "on sépare les amis"
        ],
        answerConfig: {
          type: "translation-segment",
          language: "fr",
          accepted: [
            "les amis sont séparés",
            "des amis sont séparés",
            "on sépare les amis"
          ],
          ignoreDeterminers: true,
          ignoreContractions: true,
          allowPartialAnswer: "core-meaning-only"
        },
        points: 1,
        canonicalAnswer: "les amis sont séparés",
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
        gradingFocus: "Le passif doit être compris comme séparation subie.",
        rejectIf: [
          "verbe incorrect",
          "contre-sens global",
          "réponse hors-sujet"
        ],
        tests: [
          { input: "les amis sont séparés", isCorrect: true },
          { input: "on sépare les amis", isCorrect: true },
          { input: "les amis se séparent volontairement tous ensemble", isCorrect: false }
        ]
      },
      {
        id: "4e-p1-l9-p2",
        type: "textInput",
        prompt: "🌫️ Traduis en latin : Les amis sont séparés.",
        expected: "amici separantur",
        acceptedAnswers: [
          "amici separantur",
          "separantur amici"
        ],
        answerConfig: {
          type: "one-of",
          language: "latin",
          accepted: [
            "amici separantur",
            "separantur amici"
          ],
          orderMode: "chunk-permutation"
        },
        points: 1,
        canonicalAnswer: "amici separantur",
        normalization: {
          trim: true,
          collapseSpaces: true,
          ignoreCase: true,
          ignorePunctuation: true,
          normalizeApostrophes: true,
          ignoreDiacritics: true
        },
        gradingFocus: "Réinvestir le passif dans une phrase simple et nette.",
        rejectIf: [
          "verbe incorrect",
          "forme latine impossible au niveau de la leçon",
          "réponse hors-sujet"
        ],
        tests: [
          { input: "amici separantur", isCorrect: true },
          { input: "separantur amici", isCorrect: true },
          { input: "amici separant", isCorrect: false }
        ]
      },
      
{
  id: "4e-p1-l9-p3",
  type: "textInput",
  prompt: "🌫️ Mini-texte : « Amici separantur. Publius abest. Tullia flevit. Marcus tamen mansit. » Recopie le verbe qui montre le plus directement que les amis subissent l'éloignement.",
  expected: "separantur",
  acceptedAnswers: ["separantur"],
  answerConfig: {
    type: "one-of",
    language: "latin",
    accepted: ["separantur"]
  },
  points: 1,
  canonicalAnswer: "separantur",
  normalization: {
    trim: true,
    collapseSpaces: true,
    ignoreCase: true,
    ignorePunctuation: true,
    normalizeApostrophes: true,
    ignoreDiacritics: true
  },
  gradingFocus: "Appuyer la lecture affective sur la forme passive centrale.",
  rejectIf: ["forme absente du texte", "réponse hors-sujet"],
  tests: [
    { input: "separantur", isCorrect: true },
    { input: "abest", isCorrect: false },
    { input: "mansit", isCorrect: false }
  ]
}
    ],
    summary: {
      retains: [
        "La langue sert aussi à raconter l’éloignement et ce qu’on subit.",
        "Le passif devient concret quand il touche les liens humains."
      ],
      cahier: [
        "separantur = sont séparés ; relinquitur = est laissé",
        "amici separantur"
      ],
      keywords: ["amis", "séparation", "passif"]
    },
    meta: {
      status: "ready",
      tags: ["4e", "p1", "separation", "passif-affectif"]
    }
  };

const lessonL10 = {
  id: "4e-p1-l10",
  levelId: "4e",
  period: 1,
  periodId: "p1",
  title: "Iterum conveniunt",
  subtitle: headerContexts4eP1_L10toL12["p1-l10"],
  objective: "Relire plus fluidement une scène de retrouvailles en combinant plusieurs acquis de période dans un même passage.",
  lessonPoint: "Je combine ce que je sais déjà au lieu de chercher une règle nouvelle à chaque phrase.",
  canDo: [
    "Je lis une scène plus fluide sans repartir de zéro.",
    "Je combine temps, lieux et actions dans un même passage.",
    "Je traduis un petit échange narratif."
  ],
  lexicon: [
      "amicus, amici = ami",
      "tabella, tabellae = tablette",
      "nuntius, nuntii = messager, nouvelle",
      "sanctuarium, sanctuarii = sanctuaire",
      "vesper, vesperis = soir",
      "via, viae = route, rue",
      "vox, vocis = voix",
      "manus, manus = main",
      "timor, timoris = peur",
      "iterum = de nouveau",
      "convenio, convenis = se retrouver",
      "porto, portas = porter",
      "dico, dicis = dire",
      "audio, audis = entendre",
      "timeo, times = craindre"
    ],
  maxScore: 10,
  training: [
    {
      id: "4e-p1-l10-t1",
      type: "singleChoice",
      prompt: "🌆 Quel mot signifie « de nouveau » ?",
      options: ["iterum", "heri", "longe", "prope"],
      expected: "iterum",
      shuffle: true,
      points: 1
    },
    {
      id: "4e-p1-l10-t2",
      type: "singleChoice",
      prompt: "🌆 Dans « amici iterum conveniunt », quelle action a lieu ?",
      options: [
        "les amis se retrouvent",
        "les amis fuient",
        "les amis écrivent",
        "les amis fondent une colonie"
      ],
      expected: "les amis se retrouvent",
      shuffle: true,
      points: 1
    },
    {
      id: "4e-p1-l10-t3",
      type: "multipleChoice",
      prompt: "🌆 Mini-texte : « Livia tabellam portat. Marcus audit. Amici iterum conveniunt. » Quelles informations deviennent certaines ?",
      options: [
        "Livia porte une tablette",
        "Marcus écoute",
        "des amis se retrouvent",
        "un navire quitte Ostie",
        "Hannibal traverse les Alpes"
      ],
      expected: [
        "Livia porte une tablette",
        "Marcus écoute",
        "des amis se retrouvent"
      ],
      shuffle: true,
      points: 1
    },
    {
      id: "4e-p1-l10-t4",
      type: "matching",
      prompt: "🌆 Associe forme et sens.",
      pairs: [
        { left: "conveniunt", right: "se retrouvent" },
        { left: "portat", right: "porte" },
        { left: "audit", right: "écoute" }
      ],
      rightOptions: ["porte", "écoute", "se retrouvent"],
      expected: {
        "conveniunt": "se retrouvent",
        "portat": "porte",
        "audit": "écoute"
      },
      points: 1
    },
    {
      id: "4e-p1-l10-t5",
      type: "singleChoice",
      prompt: "🌆 Piège : « Livia tabellam portat et Marcus tacet » signifie :",
      options: [
        "Livia porte une tablette et Marcus se tait",
        "Marcus porte Livia et la tablette parle",
        "Livia a porté une tablette et Marcus parlait",
        "Marcus quitte le port avec Livia"
      ],
      expected: "Livia porte une tablette et Marcus se tait",
      shuffle: true,
      points: 1,
      feedback: "Je lis chaque verbe avec son sujet, sans déplacer les rôles."
    },
    {
      id: "4e-p1-l10-t6",
      type: "multipleChoice",
      prompt: "🌆 Mini-texte : « Amici conveniunt. Tabella traditur. Timor tamen manet. » Quels éléments montrent que la scène mêle retrouvaille et tension ?",
      options: [
        "les amis se retrouvent",
        "une tablette circule",
        "la peur demeure",
        "la scène se passe en pleine bataille"
      ],
      expected: [
        "les amis se retrouvent",
        "une tablette circule",
        "la peur demeure"
      ],
      shuffle: true,
      points: 1
    },
    {
      id: "4e-p1-l10-t7",
      type: "textInput",
      prompt: "🌆 Écris en latin : « soir ».",
      expected: "vesper",
      acceptedAnswers: ["vesper"],
      answerConfig: {
        type: "one-of",
        language: "latin",
        accepted: ["vesper"]
      },
      points: 1,
      canonicalAnswer: "vesper",
      normalization: {
        trim: true,
        collapseSpaces: true,
        ignoreCase: true,
        ignorePunctuation: true,
        normalizeApostrophes: true,
        ignoreDiacritics: true
      },
      gradingFocus: "Réactivation d’un nom concret de la scène.",
      rejectIf: ["forme incorrecte", "réponse hors-sujet"],
      tests: [
        { input: "vesper", isCorrect: true },
        { input: "vox", isCorrect: false }
      ]
    }
  ],
  production: [
    {
      id: "4e-p1-l10-p1",
      type: "textInput",
      prompt: "🌆 Traduis en français : amici iterum conveniunt et tabellam legunt",
      expected: "les amis se retrouvent de nouveau et lisent la tablette",
      acceptedAnswers: [
        "les amis se retrouvent de nouveau et lisent la tablette",
        "des amis se retrouvent de nouveau et lisent la tablette",
        "les amis se retrouvent encore et lisent la tablette",
        "des amis se retrouvent encore et lisent la tablette"
      ],
      answerConfig: {
        type: "translation-segment",
        language: "fr",
        accepted: [
          "les amis se retrouvent de nouveau et lisent la tablette",
          "des amis se retrouvent de nouveau et lisent la tablette",
          "les amis se retrouvent encore et lisent la tablette",
          "des amis se retrouvent encore et lisent la tablette"
        ],
        ignoreDeterminers: true,
        ignoreContractions: true,
        allowPartialAnswer: "core-meaning-only"
      },
      points: 1,
      canonicalAnswer: "les amis se retrouvent de nouveau et lisent la tablette",
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
      gradingFocus: "Les deux actions doivent être correctement saisies dans une scène fluide.",
      rejectIf: [
        "verbe incorrect",
        "contre-sens global",
        "réponse hors-sujet"
      ],
      tests: [
        { input: "les amis se retrouvent de nouveau et lisent la tablette", isCorrect: true },
        { input: "des amis se retrouvent encore et lisent la tablette", isCorrect: true },
        { input: "les amis fuient encore et écrivent la tablette", isCorrect: false }
      ]
    },
    {
      id: "4e-p1-l10-p2",
      type: "textInput",
      prompt: "🌆 Traduis en latin : Les amis se retrouvent de nouveau.",
      expected: "amici iterum conveniunt",
      acceptedAnswers: [
        "amici iterum conveniunt",
        "iterum amici conveniunt",
        "amici conveniunt iterum",
        "iterum conveniunt amici",
        "conveniunt amici iterum",
        "conveniunt iterum amici"
      ],
      answerConfig: {
        type: "one-of",
        language: "latin",
        accepted: [
          "amici iterum conveniunt",
          "iterum amici conveniunt",
          "amici conveniunt iterum",
          "iterum conveniunt amici",
          "conveniunt amici iterum",
          "conveniunt iterum amici"
        ],
        orderMode: "chunk-permutation"
      },
      points: 1,
      canonicalAnswer: "amici iterum conveniunt",
      normalization: {
        trim: true,
        collapseSpaces: true,
        ignoreCase: true,
        ignorePunctuation: true,
        normalizeApostrophes: true,
        ignoreDiacritics: true
      },
      gradingFocus: "Réinvestir plusieurs acquis dans une phrase simple et naturelle.",
      rejectIf: [
        "verbe incorrect",
        "forme latine impossible au niveau de la leçon",
        "réponse hors-sujet"
      ],
      tests: [
        { input: "amici iterum conveniunt", isCorrect: true },
        { input: "iterum conveniunt amici", isCorrect: true },
        { input: "amici iterum conveniuntunt", isCorrect: false }
      ]
    },
    
{
  id: "4e-p1-l10-p3",
  type: "textInput",
  prompt: "🌆 Mini-texte : « Amici iterum conveniunt. Tabella traditur. Timor tamen manet. » Recopie le nom du texte qui empêche la scène d'être paisible.",
  expected: "timor",
  acceptedAnswers: ["timor"],
  answerConfig: {
    type: "one-of",
    language: "latin",
    accepted: ["timor"]
  },
  points: 1,
  canonicalAnswer: "timor",
  normalization: {
    trim: true,
    collapseSpaces: true,
    ignoreCase: true,
    ignorePunctuation: true,
    normalizeApostrophes: true,
    ignoreDiacritics: true
  },
  gradingFocus: "Appuyer l'inférence sur le nom qui porte la tension.",
  rejectIf: ["forme absente du texte", "réponse hors-sujet"],
  tests: [
    { input: "timor", isCorrect: true },
    { input: "manet", isCorrect: false },
    { input: "amici", isCorrect: false }
  ]
}
  ],
  summary: {
    retains: [
      "Une bonne lecture combine plusieurs repères déjà installés.",
      "Une scène de retrouvailles peut garder une tension sous-jacente."
    ],
    cahier: [
      "iterum = de nouveau",
      "amici iterum conveniunt"
    ],
    keywords: ["retrouvailles", "fluidité", "réemploi"]
  },
  meta: {
    status: "ready",
    tags: ["4e", "p1", "retrouvailles", "rebrassage"]
  }
};

const lessonL11 = {
  id: "4e-p1-l11",
  levelId: "4e",
  period: 1,
  periodId: "p1",
  title: "Tempora in via",
  subtitle: headerContexts4eP1_L10toL12["p1-l11"],
  objective: "Brasser présent, imparfait et parfait dans un même dossier de route et de nouvelles.",
  lessonPoint: "Je relie chaque temps à son effet dans le récit.",
  canDo: [
    "Je distingue trois temps déjà vus.",
    "Je comprends leur effet dans une scène.",
    "Je traduis un petit dossier de route."
  ],
  lexicon: [
      "via, viae = route, rue",
      "eques, equitis = cavalier",
      "mulus, muli = mulet",
      "littera, litterae = lettre",
      "nuntius, nuntii = messager, nouvelle",
      "hostis, hostis = ennemi",
      "pulvis, pulveris = poussière",
      "meta, metae = borne",
      "hodie = aujourd'hui",
      "heri = hier",
      "transeo, transis = passer, traverser",
      "video, vides = voir",
      "dico, dicis = dire",
      "venio, venis = venir",
      "timeo, times = craindre"
    ],
  maxScore: 10,
  training: [
    {
      id: "4e-p1-l11-t1",
      type: "singleChoice",
      prompt: "🛣️ Quel mot signifie « hier » ?",
      options: ["heri", "hodie", "longe", "prope"],
      expected: "heri",
      shuffle: true,
      points: 1
    },
    {
      id: "4e-p1-l11-t2",
      type: "singleChoice",
      prompt: "🛣️ Dans « eques hodie transit », quel temps vois-tu ?",
      options: ["présent", "imparfait", "parfait", "passif"],
      expected: "présent",
      shuffle: true,
      points: 1
    },
    {
      id: "4e-p1-l11-t3",
      type: "multipleChoice",
      prompt: "🛣️ Choisis les formes qui relèvent du même passé prolongé.",
      options: ["timebat", "dicebat", "manebat", "venit", "vidit"],
      expected: ["timebat", "dicebat", "manebat"],
      shuffle: true,
      points: 1
    },
    
{
  id: "4e-p1-l11-t4",
  type: "matching",
  prompt: "🛣️ Associe chaque forme verbale à sa valeur dans le récit.",
  pairs: [
    { left: "transit", right: "actualité / présent" },
    { left: "timebat", right: "durée / fond" },
    { left: "vidit", right: "fait accompli" }
  ],
  rightOptions: ["actualité / présent", "durée / fond", "fait accompli"],
  expected: {
    "transit": "actualité / présent",
    "timebat": "durée / fond",
    "vidit": "fait accompli"
  },
  points: 1
},
    {
      id: "4e-p1-l11-t5",
      type: "singleChoice",
      prompt: "🛣️ Piège : « nuntius heri venit, Marcus hodie legit » signifie :",
      options: [
        "le messager est venu hier, Marcus lit aujourd’hui",
        "le messager venait hier, Marcus lut aujourd’hui",
        "Marcus est venu hier, le message lit aujourd’hui",
        "la borne a écrit une lettre"
      ],
      expected: "le messager est venu hier, Marcus lit aujourd’hui",
      shuffle: true,
      points: 1,
      feedback: "Je relie chaque forme verbale à son temps et à son effet."
    },
    {
      id: "4e-p1-l11-t6",
      type: "multipleChoice",
      prompt: "🛣️ Mini-texte : « Eques transit. Pulvis manebat. Nuntius heri venit. Marcus hodie legit. » Quelles informations sont bien distribuées dans le temps ?",
      options: [
        "un cavalier passe maintenant",
        "la poussière demeurait dans le décor",
        "le messager est arrivé hier",
        "Marcus lit aujourd’hui",
        "la colonie était fondée demain"
      ],
      expected: [
        "un cavalier passe maintenant",
        "la poussière demeurait dans le décor",
        "le messager est arrivé hier",
        "Marcus lit aujourd’hui"
      ],
      shuffle: true,
      points: 1
    },
    {
      id: "4e-p1-l11-t7",
      type: "textInput",
      prompt: "🛣️ Écris en latin : « cavalier ».",
      expected: "eques",
      acceptedAnswers: ["eques"],
      answerConfig: {
        type: "one-of",
        language: "latin",
        accepted: ["eques"]
      },
      points: 1,
      canonicalAnswer: "eques",
      normalization: {
        trim: true,
        collapseSpaces: true,
        ignoreCase: true,
        ignorePunctuation: true,
        normalizeApostrophes: true,
        ignoreDiacritics: true
      },
      gradingFocus: "Réactivation d’un nom concret de la scène de route.",
      rejectIf: ["forme incorrecte", "réponse hors-sujet"],
      tests: [
        { input: "eques", isCorrect: true },
        { input: "mulus", isCorrect: false }
      ]
    }
  ],
  production: [
    {
      id: "4e-p1-l11-p1",
      type: "textInput",
      prompt: "🛣️ Traduis en français : nuntius heri venit, Marcus hodie legit",
      expected: "le messager est venu hier, Marcus lit aujourd’hui",
      acceptedAnswers: [
        "le messager est venu hier, Marcus lit aujourd'hui",
        "un messager est venu hier, Marcus lit aujourd'hui",
        "le messager est arrivé hier, Marcus lit aujourd'hui",
        "un messager est arrivé hier, Marcus lit aujourd'hui"
      ],
      answerConfig: {
        type: "translation-segment",
        language: "fr",
        accepted: [
          "le messager est venu hier, Marcus lit aujourd'hui",
          "un messager est venu hier, Marcus lit aujourd'hui",
          "le messager est arrivé hier, Marcus lit aujourd'hui",
          "un messager est arrivé hier, Marcus lit aujourd'hui"
        ],
        ignoreDeterminers: true,
        ignoreContractions: true,
        allowPartialAnswer: "core-meaning-only"
      },
      points: 1,
      canonicalAnswer: "le messager est venu hier, Marcus lit aujourd’hui",
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
      gradingFocus: "La répartition temporelle doit être nette.",
      rejectIf: [
        "verbe incorrect",
        "contre-sens global",
        "réponse hors-sujet"
      ],
      tests: [
        { input: "le messager est venu hier, Marcus lit aujourd'hui", isCorrect: true },
        { input: "un messager est arrivé hier, Marcus lit aujourd'hui", isCorrect: true },
        { input: "le messager venait hier, Marcus a lu aujourd'hui", isCorrect: false }
      ]
    },
    {
      id: "4e-p1-l11-p2",
      type: "textInput",
      prompt: "🛣️ Traduis en latin : Le messager est venu hier.",
      expected: "nuntius heri venit",
      acceptedAnswers: [
        "nuntius heri venit",
        "heri nuntius venit",
        "nuntius venit heri",
        "heri venit nuntius",
        "venit nuntius heri",
        "venit heri nuntius"
      ],
      answerConfig: {
        type: "one-of",
        language: "latin",
        accepted: [
          "nuntius heri venit",
          "heri nuntius venit",
          "nuntius venit heri",
          "heri venit nuntius",
          "venit nuntius heri",
          "venit heri nuntius"
        ],
        orderMode: "chunk-permutation"
      },
      points: 1,
      canonicalAnswer: "nuntius heri venit",
      normalization: {
        trim: true,
        collapseSpaces: true,
        ignoreCase: true,
        ignorePunctuation: true,
        normalizeApostrophes: true,
        ignoreDiacritics: true
      },
      gradingFocus: "Réinvestir proprement un parfait avec repère temporel.",
      rejectIf: [
        "verbe incorrect",
        "forme latine impossible au niveau de la leçon",
        "réponse hors-sujet"
      ],
      tests: [
        { input: "nuntius heri venit", isCorrect: true },
        { input: "heri venit nuntius", isCorrect: true },
        { input: "nuntius heri veniebat", isCorrect: false }
      ]
    },
    
{
  id: "4e-p1-l11-p3",
  type: "textInput",
  prompt: "🛣️ Mini-texte : « Eques transit. Pulvis manebat. Nuntius heri venit. Marcus hodie legit. » Recopie d'abord un verbe au présent, puis un verbe à l'imparfait de fond. Réponds dans cet ordre.",
  expected: "transit, manebat",
  acceptedAnswers: [
    "transit, manebat",
    "transit manebat"
  ],
  answerConfig: {
    type: "one-of",
    language: "latin",
    accepted: [
      "transit, manebat",
      "transit manebat"
    ]
  },
  points: 1,
  canonicalAnswer: "transit, manebat",
  normalization: {
    trim: true,
    collapseSpaces: true,
    ignoreCase: true,
    ignorePunctuation: true,
    normalizeApostrophes: true,
    ignoreDiacritics: true
  },
  gradingFocus: "Identifier directement les formes qui répartissent le temps du récit.",
  rejectIf: ["forme absente du texte", "ordre incorrect", "réponse hors-sujet"],
  tests: [
    { input: "transit, manebat", isCorrect: true },
    { input: "transit manebat", isCorrect: true },
    { input: "manebat transit", isCorrect: false }
  ]
}
  ],
  summary: {
    retains: [
      "Le temps verbal guide la lecture du récit.",
      "Je peux distinguer l’actuel, le fond et le fait accompli dans une même scène."
    ],
    cahier: [
      "heri = hier ; hodie = aujourd'hui",
      "nuntius heri venit, Marcus hodie legit"
    ],
    keywords: ["temps", "route", "brassage"]
  },
  meta: {
    status: "ready",
    tags: ["4e", "p1", "temps", "synthese"]
  }
};

const lessonL12 = {
  id: "4e-p1-l12",
  levelId: "4e",
  period: 1,
  periodId: "p1",
  title: "Hic rumor, illa littera",
  subtitle: headerContexts4eP1_L10toL12["p1-l12"],
  objective: "Consolider les démonstratifs fréquents dans une scène de tri, d’information et de comparaison.",
  lessonPoint: "Je lis le petit mot démonstratif avec le nom qu’il précise.",
  canDo: [
    "Je distingue hic, ille et ipse dans une scène concrète.",
    "Je lis plus précisément un groupe nominal.",
    "Je traduis un court passage d’information."
  ],
  lexicon: [
      "hic, haec, hoc = ce / cette / ceci-ci",
      "ille, illa, illud = ce / cette / cela-là",
      "ipse, ipsa, ipsum = lui-même / elle-même / même",
      "littera, litterae = lettre",
      "rumor, rumoris = rumeur",
      "consul, consulis = consul",
      "tabella, tabellae = tablette",
      "verbum, verbi = mot",
      "nomen, nominis = nom",
      "porta, portae = porte",
      "lego, legis = lire",
      "teneo, tenes = tenir",
      "pono, ponis = poser",
      "erro, erras = se tromper",
      "monstro, monstras = montrer"
    ],
  maxScore: 10,
  training: [
    {
      id: "4e-p1-l12-t1",
      type: "singleChoice",
      prompt: "📜 Quel petit mot signifie souvent « ce / cette-ci » ?",
      options: ["hic", "ille", "ipse", "nomen"],
      expected: "hic",
      shuffle: true,
      points: 1
    },
    {
      id: "4e-p1-l12-t2",
      type: "singleChoice",
      prompt: "📜 Dans « haec littera », que désigne le petit mot ?",
      options: [
        "cette lettre-ci",
        "cette lettre-là",
        "la lettre même",
        "le mot écrit"
      ],
      expected: "cette lettre-ci",
      shuffle: true,
      points: 1
    },
    
{
  id: "4e-p1-l12-t3",
  type: "multipleChoice",
  prompt: "📜 Choisis les groupes qui sont correctement construits.",
  options: [
    "hic rumor",
    "hanc litteram",
    "ipse consul",
    "illa consul",
    "hoc littera"
  ],
  expected: [
    "hic rumor",
    "hanc litteram",
    "ipse consul"
  ],
  shuffle: true,
  points: 1
},
    
{
  id: "4e-p1-l12-t4",
  type: "matching",
  prompt: "📜 Associe chaque groupe à sa valeur précise.",
  pairs: [
    { left: "hic rumor", right: "ce bruit-ci / sujet" },
    { left: "hanc litteram", right: "cette lettre-ci / COD" },
    { left: "ipse consul", right: "le consul lui-même / sujet" }
  ],
  rightOptions: [
    "ce bruit-ci / sujet",
    "cette lettre-ci / COD",
    "le consul lui-même / sujet"
  ],
  expected: {
    "hic rumor": "ce bruit-ci / sujet",
    "hanc litteram": "cette lettre-ci / COD",
    "ipse consul": "le consul lui-même / sujet"
  },
  points: 1
},
    {
      id: "4e-p1-l12-t5",
      type: "singleChoice",
      prompt: "📜 Piège : « hic rumor falsus est, illa littera vera est » signifie :",
      options: [
        "cette rumeur-ci est fausse, cette lettre-là est vraie",
        "toutes les lettres sont fausses",
        "le consul écrit la rumeur",
        "la route brille au soleil"
      ],
      expected: "cette rumeur-ci est fausse, cette lettre-là est vraie",
      shuffle: true,
      points: 1,
      feedback: "Le petit mot démonstratif précise l’objet visé : il ne s’ajoute pas au hasard."
    },
    {
      id: "4e-p1-l12-t6",
      type: "multipleChoice",
      prompt: "📜 Mini-texte : « Hic rumor crescit. Illa littera legitur. Ipse consul tacet. » Quelles informations deviennent certaines ?",
      options: [
        "une rumeur précise se répand",
        "une lettre précise est lue",
        "le consul lui-même se tait",
        "un navire est fondé"
      ],
      expected: [
        "une rumeur précise se répand",
        "une lettre précise est lue",
        "le consul lui-même se tait"
      ],
      shuffle: true,
      points: 1
    },
    {
      id: "4e-p1-l12-t7",
      type: "textInput",
      prompt: "📜 Écris en latin : « lettre ».",
      expected: "littera",
      acceptedAnswers: ["littera"],
      answerConfig: {
        type: "one-of",
        language: "latin",
        accepted: ["littera"]
      },
      points: 1,
      canonicalAnswer: "littera",
      normalization: {
        trim: true,
        collapseSpaces: true,
        ignoreCase: true,
        ignorePunctuation: true,
        normalizeApostrophes: true,
        ignoreDiacritics: true
      },
      gradingFocus: "Réactivation d’un nom central de la scène d’information.",
      rejectIf: ["forme incorrecte", "réponse hors-sujet"],
      tests: [
        { input: "littera", isCorrect: true },
        { input: "rumor", isCorrect: false }
      ]
    }
  ],
  production: [
    {
      id: "4e-p1-l12-p1",
      type: "textInput",
      prompt: "📜 Traduis en français : hic rumor falsus est, illa littera vera est",
      expected: "cette rumeur-ci est fausse, cette lettre-là est vraie",
      acceptedAnswers: [
        "cette rumeur-ci est fausse, cette lettre-là est vraie",
        "ce bruit-ci est faux, cette lettre-là est vraie",
        "cette rumeur-ci est mensongère, cette lettre-là est vraie",
        "ce bruit-ci est mensonger, cette lettre-là est vraie"
      ],
      answerConfig: {
        type: "translation-segment",
        language: "fr",
        accepted: [
          "cette rumeur-ci est fausse, cette lettre-là est vraie",
          "ce bruit-ci est faux, cette lettre-là est vraie",
          "cette rumeur-ci est mensongère, cette lettre-là est vraie",
          "ce bruit-ci est mensonger, cette lettre-là est vraie"
        ],
        ignoreDeterminers: true,
        ignoreContractions: true,
        allowPartialAnswer: "core-meaning-only"
      },
      points: 1,
      canonicalAnswer: "cette rumeur-ci est fausse, cette lettre-là est vraie",
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
      gradingFocus: "Il faut comprendre la valeur oppositive des démonstratifs.",
      rejectIf: [
        "verbe incorrect",
        "contre-sens global",
        "réponse hors-sujet"
      ],
      tests: [
        { input: "cette rumeur-ci est fausse, cette lettre-là est vraie", isCorrect: true },
        { input: "ce bruit-ci est faux, cette lettre-là est vraie", isCorrect: true },
        { input: "cette lettre-ci est fausse, cette rumeur-là est vraie", isCorrect: false }
      ]
    },
    {
      id: "4e-p1-l12-p2",
      type: "textInput",
      prompt: "📜 Traduis en latin : Le consul lui-même lit cette lettre-ci.",
      expected: "ipse consul hanc litteram legit",
      acceptedAnswers: [
        "ipse consul hanc litteram legit",
        "hanc litteram ipse consul legit",
        "ipse consul legit hanc litteram",
        "legit ipse consul hanc litteram",
        "hanc litteram legit ipse consul",
        "legit hanc litteram ipse consul"
      ],
      answerConfig: {
        type: "one-of",
        language: "latin",
        accepted: [
          "ipse consul hanc litteram legit",
          "hanc litteram ipse consul legit",
          "ipse consul legit hanc litteram",
          "legit ipse consul hanc litteram",
          "hanc litteram legit ipse consul",
          "legit hanc litteram ipse consul"
        ],
        orderMode: "chunk-permutation"
      },
      points: 1,
      canonicalAnswer: "ipse consul hanc litteram legit",
      normalization: {
        trim: true,
        collapseSpaces: true,
        ignoreCase: true,
        ignorePunctuation: true,
        normalizeApostrophes: true,
        ignoreDiacritics: true
      },
      gradingFocus: "Réinvestir démonstratif et insistance dans une phrase précise.",
      rejectIf: [
        "verbe incorrect",
        "forme latine impossible au niveau de la leçon",
        "réponse hors-sujet"
      ],
      tests: [
        { input: "ipse consul hanc litteram legit", isCorrect: true },
        { input: "hanc litteram legit ipse consul", isCorrect: true },
        { input: "ipse consul illa littera legit", isCorrect: false }
      ]
    },
    
{
  id: "4e-p1-l12-p3",
  type: "textInput",
  prompt: "📜 Mini-texte : « Hic rumor crescit. Illa littera legitur. Ipse consul tacet. » Recopie le groupe qui désigne précisément la lettre, et non la rumeur.",
  expected: "illa littera",
  acceptedAnswers: ["illa littera"],
  answerConfig: {
    type: "one-of",
    language: "latin",
    accepted: ["illa littera"]
  },
  points: 1,
  canonicalAnswer: "illa littera",
  normalization: {
    trim: true,
    collapseSpaces: true,
    ignoreCase: true,
    ignorePunctuation: true,
    normalizeApostrophes: true,
    ignoreDiacritics: true
  },
  gradingFocus: "Repérer un groupe démonstratif précis dans la scène.",
  rejectIf: ["forme absente du texte", "réponse hors-sujet"],
  tests: [
    { input: "illa littera", isCorrect: true },
    { input: "hic rumor", isCorrect: false },
    { input: "ipse consul", isCorrect: false }
  ]
}
  ],
  summary: {
    retains: [
      "Le petit mot démonstratif change la précision du sens.",
      "Je lis hic, ille, ipse avec le nom qu’ils accompagnent."
    ],
    cahier: [
      "hic rumor ; illa littera ; ipse consul",
      "hic rumor falsus est, illa littera vera est"
    ],
    keywords: ["démonstratifs", "précision", "information"]
  },
  meta: {
    status: "ready",
    tags: ["4e", "p1", "demonstratifs", "precision"]
  }
};

const lessonL13 = {
  id: "4e-p1-l13",
  levelId: "4e",
  period: 1,
  periodId: "p1",
  title: "Civis, consul, colonia",
  subtitle: headerContexts4eP1_L13toL15["p1-l13"],
  objective: "Relier la langue à des réalités civiques et politiques simples de Rome en expansion.",
  lessonPoint: "Je relie le mot latin à une réalité concrète du monde romain.",
  canDo: [
    "Je comprends quelques mots civiques essentiels.",
    "Je situe la colonie dans l’expansion romaine.",
    "Je lis une courte présentation institutionnelle."
  ],
  lexicon: [
      "civis, civis = citoyen",
      "consul, consulis = consul",
      "senatus, senatus = sénat",
      "colonia, coloniae = colonie",
      "provincia, provinciae = province",
      "magistratus, magistratus = magistrat",
      "urbs, urbis = ville",
      "via, viae = route",
      "mare, maris = mer",
      "populus, populi = peuple",
      "rego, regis = diriger",
      "mitto, mittis = envoyer",
      "defendo, defendis = défendre",
      "voco, vocas = appeler",
      "administro, administras = administrer"
    ],
  maxScore: 10,
  training: [
    {
      id: "4e-p1-l13-t1",
      type: "matching",
      prompt: "🏛️ Associe le mot latin à la réalité romaine qu’il désigne.",
      pairs: [
        { left: "consul", right: "magistrat suprême annuel" },
        { left: "senatus", right: "assemblée politique de notables" },
        { left: "colonia", right: "ville fondée hors du centre initial" }
      ],
      rightOptions: [
        "ville fondée hors du centre initial",
        "magistrat suprême annuel",
        "assemblée politique de notables"
      ],
      expected: {
        "consul": "magistrat suprême annuel",
        "senatus": "assemblée politique de notables",
        "colonia": "ville fondée hors du centre initial"
      },
      points: 1
    },
    
{
  id: "4e-p1-l13-t2",
  type: "multipleChoice",
  prompt: "🏛️ Quels éléments du mini-dossier montrent clairement une action publique en cours ?",
  options: [
    "consul cives mittit",
    "colonia conditur",
    "provincia defenditur",
    "via",
    "mare"
  ],
  expected: [
    "consul cives mittit",
    "colonia conditur",
    "provincia defenditur"
  ],
  shuffle: true,
  points: 1
},
    {
      id: "4e-p1-l13-t3",
      type: "singleChoice",
      prompt: "🏛️ Mini-texte : « Consul cives mittit. Colonia conditur. Via paratur. » Quelle idée politique domine cette scène ?",
      options: [
        "Rome organise une expansion",
        "Rome abandonne ses territoires",
        "un banquet privé est préparé",
        "un procès se tient au Sénat"
      ],
      expected: "Rome organise une expansion",
      shuffle: true,
      points: 1
    },
    {
      id: "4e-p1-l13-t4",
      type: "multipleChoice",
      prompt: "🏛️ Mini-texte : « Senatus deliberat. Consul cives vocat. Colonia longe conditur. » Quelles actions appartiennent à l’autorité publique ?",
      options: [
        "délibérer",
        "appeler des citoyens",
        "fonder une colonie loin de Rome",
        "raccommoder un vêtement"
      ],
      expected: [
        "délibérer",
        "appeler des citoyens",
        "fonder une colonie loin de Rome"
      ],
      shuffle: true,
      points: 1
    },
    {
      id: "4e-p1-l13-t5",
      type: "singleChoice",
      prompt: "🏛️ Piège : « provincia defenditur, civis mittitur » signifie :",
      options: [
        "la province est défendue, un citoyen est envoyé",
        "la province défend un citoyen, il envoie la ville",
        "le citoyen défend le Sénat, la province fuit",
        "Rome ferme ses routes"
      ],
      expected: "la province est défendue, un citoyen est envoyé",
      shuffle: true,
      points: 1,
      feedback: "Je repère le passif et je rattache chaque groupe à la bonne réalité politique."
    },
    {
      id: "4e-p1-l13-t6",
      type: "multipleChoice",
      prompt: "🏛️ Mini-dossier : « Civis est Romanus. Consul rem publicam administrat. Colonia in nova terra conditur. Provincia defenditur. » Quelles relations mot / fonction apparaissent ?",
      options: [
        "le citoyen appartient à la cité",
        "le consul agit dans la vie publique",
        "la colonie prolonge Rome ailleurs",
        "la province est seulement un bâtiment"
      ],
      expected: [
        "le citoyen appartient à la cité",
        "le consul agit dans la vie publique",
        "la colonie prolonge Rome ailleurs"
      ],
      shuffle: true,
      points: 1
    },
    {
      id: "4e-p1-l13-t7",
      type: "singleChoice",
      prompt: "🏛️ Mini-texte : « Roma vias mittit, cives vocat, colonias condit. » Quel mouvement général se dessine ?",
      options: [
        "Rome étend son organisation au loin",
        "Rome s’enferme derrière ses murs",
        "Rome oublie la mer",
        "Rome cesse de gouverner"
      ],
      expected: "Rome étend son organisation au loin",
      shuffle: true,
      points: 1
    }
  ],
  production: [
    {
      id: "4e-p1-l13-p1",
      type: "textInput",
      prompt: "🏛️ Traduis en français : consul cives mittit et colonia conditur",
      expected: "le consul envoie des citoyens et une colonie est fondée",
      acceptedAnswers: [
        "le consul envoie des citoyens et une colonie est fondée",
        "le consul envoie les citoyens et une colonie est fondée",
        "un consul envoie des citoyens et une colonie est fondée",
        "un consul envoie les citoyens et une colonie est fondée"
      ],
      answerConfig: {
        type: "translation-segment",
        language: "fr",
        accepted: [
          "le consul envoie des citoyens et une colonie est fondée",
          "le consul envoie les citoyens et une colonie est fondée",
          "un consul envoie des citoyens et une colonie est fondée",
          "un consul envoie les citoyens et une colonie est fondée"
        ],
        ignoreDeterminers: true,
        ignoreContractions: true,
        allowPartialAnswer: "core-meaning-only"
      },
      points: 1,
      canonicalAnswer: "le consul envoie des citoyens et une colonie est fondée",
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
      gradingFocus: "Il faut articuler correctement action politique et passif de fondation.",
      rejectIf: [
        "verbe incorrect",
        "contre-sens global",
        "réponse hors-sujet"
      ],
      tests: [
        { input: "le consul envoie des citoyens et une colonie est fondée", isCorrect: true },
        { input: "un consul envoie les citoyens et une colonie est fondée", isCorrect: true },
        { input: "la colonie envoie le consul et les citoyens sont fondés", isCorrect: false }
      ]
    },
    {
      id: "4e-p1-l13-p2",
      type: "textInput",
      prompt: "🏛️ Traduis en latin : Le Sénat appelle les citoyens.",
      expected: "senatus cives vocat",
      acceptedAnswers: [
        "senatus cives vocat",
        "senatus vocat cives",
        "cives senatus vocat",
        "cives vocat senatus",
        "vocat senatus cives",
        "vocat cives senatus"
      ],
      answerConfig: {
        type: "one-of",
        language: "latin",
        accepted: [
          "senatus cives vocat",
          "senatus vocat cives",
          "cives senatus vocat",
          "cives vocat senatus",
          "vocat senatus cives",
          "vocat cives senatus"
        ],
        orderMode: "chunk-permutation"
      },
      points: 1,
      canonicalAnswer: "senatus cives vocat",
      normalization: {
        trim: true,
        collapseSpaces: true,
        ignoreCase: true,
        ignorePunctuation: true,
        normalizeApostrophes: true,
        ignoreDiacritics: true
      },
      gradingFocus: "Réinvestir le lexique civique dans une phrase active nette.",
      rejectIf: [
        "sens inversé sujet/objet",
        "verbe incorrect",
        "forme latine impossible au niveau de la leçon",
        "réponse hors-sujet"
      ],
      tests: [
        { input: "senatus cives vocat", isCorrect: true },
        { input: "cives vocat senatus", isCorrect: true },
        { input: "senatus cives vocant", isCorrect: false }
      ]
    },
    
{
  id: "4e-p1-l13-p3",
  type: "textInput",
  prompt: "🏛️ Mini-texte : « Consul cives mittit. Colonia conditur. Provincia defenditur. Via paratur. » Recopie un verbe passif du dossier.",
  expected: "conditur",
  acceptedAnswers: ["conditur", "defenditur", "paratur"],
  answerConfig: {
    type: "one-of",
    language: "latin",
    accepted: ["conditur", "defenditur", "paratur"]
  },
  points: 1,
  canonicalAnswer: "conditur",
  normalization: {
    trim: true,
    collapseSpaces: true,
    ignoreCase: true,
    ignorePunctuation: true,
    normalizeApostrophes: true,
    ignoreDiacritics: true
  },
  gradingFocus: "Repérer une forme passive dans un dossier civique.",
  rejectIf: ["forme absente du texte", "réponse hors-sujet"],
  tests: [
    { input: "conditur", isCorrect: true },
    { input: "defenditur", isCorrect: true },
    { input: "mittit", isCorrect: false }
  ]
}
  ],
  summary: {
    retains: [
      "Les mots civiques dessinent une carte mentale de Rome.",
      "La langue permet de comprendre l’expansion politique comme une organisation concrète."
    ],
    cahier: [
      "consul / senatus / colonia / provincia",
      "consul cives mittit et colonia conditur"
    ],
    keywords: ["civique", "institution", "expansion"]
  },
  meta: {
    status: "ready",
    tags: ["4e", "p1", "institutions", "civis-consul-colonia"]
  }
};

const lessonL14 = {
  id: "4e-p1-l14",
  levelId: "4e",
  period: 1,
  periodId: "p1",
  title: "Tabellae ex Sicilia",
  subtitle: headerContexts4eP1_L13toL15["p1-l14"],
  objective: "Lire un premier petit ensemble suivi mêlant lettre, annonce et témoignage venus du large.",
  lessonPoint: "Je lis chaque segment comme une voix différente dans le même dossier.",
  canDo: [
    "Je lis plusieurs phrases liées entre elles.",
    "Je distingue récit, nouvelle et ordre.",
    "Je comprends un petit dossier venu du large."
  ],
  lexicon: [
      "tabella, tabellae = tablette",
      "nuntius, nuntii = messager, nouvelle",
      "Sicilia, Siciliae = Sicile",
      "mare, maris = mer",
      "navis, navis = navire",
      "portus, portus = port",
      "iter, itineris = trajet, route",
      "vox, vocis = voix",
      "timor, timoris = peur",
      "silentium, silentii = silence",
      "venio, venis = venir",
      "scribo, scribis = écrire",
      "lego, legis = lire",
      "narro, narras = raconter",
      "iubeo, iubes = ordonner"
    ],
  maxScore: 10,
  training: [
    {
      id: "4e-p1-l14-t1",
      type: "multipleChoice",
      prompt: "🌊 Mini-dossier : « Prima tabella venit ex Sicilia. Secunda navem narrat. Tertia cives monet. » Quels types de voix apparaissent déjà ?",
      options: [
        "une annonce arrivée de Sicile",
        "un récit sur un navire",
        "un avertissement adressé aux citoyens",
        "une scène de classe",
        "une fable mythologique"
      ],
      expected: [
        "une annonce arrivée de Sicile",
        "un récit sur un navire",
        "un avertissement adressé aux citoyens"
      ],
      shuffle: true,
      points: 1
    },
    
{
  id: "4e-p1-l14-t2",
  type: "matching",
  prompt: "🌊 Associe chaque segment à sa fonction dans le dossier.",
  pairs: [
    { left: "nuntius venit", right: "arrivée d'une nouvelle" },
    { left: "tabella narrat", right: "récit" },
    { left: "cives monet", right: "avertissement" }
  ],
  rightOptions: [
    "arrivée d'une nouvelle",
    "récit",
    "avertissement"
  ],
  expected: {
    "nuntius venit": "arrivée d'une nouvelle",
    "tabella narrat": "récit",
    "cives monet": "avertissement"
  },
  points: 1
},
    
{
  id: "4e-p1-l14-t3",
  type: "matching",
  prompt: "🌊 Associe chaque segment du dossier à sa fonction.",
  pairs: [
    { left: "Prima tabella venit ex Sicilia", right: "annonce" },
    { left: "Secunda de nave narrat", right: "récit" },
    { left: "Tertia cives monet", right: "avertissement" }
  ],
  rightOptions: ["annonce", "récit", "avertissement"],
  expected: {
    "Prima tabella venit ex Sicilia": "annonce",
    "Secunda de nave narrat": "récit",
    "Tertia cives monet": "avertissement"
  },
  points: 1
},
    {
      id: "4e-p1-l14-t4",
      type: "multipleChoice",
      prompt: "🌊 Mini-texte : « Nuntius venit. Multi tacent. Marcus legit. Alius narrat. » Quels indices montrent que plusieurs voix se croisent ?",
      options: [
        "une nouvelle arrive",
        "quelqu'un lit",
        "un autre raconte",
        "tout le monde dort",
        "la ville disparaît"
      ],
      expected: [
        "une nouvelle arrive",
        "quelqu'un lit",
        "un autre raconte"
      ],
      shuffle: true,
      points: 1
    },
    {
      id: "4e-p1-l14-t5",
      type: "singleChoice",
      prompt: "🌊 Piège : « tabella narrat, altera iubet » signifie :",
      options: [
        "une tablette raconte, l'autre donne un ordre",
        "une tablette obéit, l'autre s'enfuit",
        "la mer lit la tablette",
        "la route devient un port"
      ],
      expected: "une tablette raconte, l'autre donne un ordre",
      shuffle: true,
      points: 1,
      feedback: "Je distingue la fonction de chaque segment, pas seulement les mots isolés."
    },
    
{
  id: "4e-p1-l14-t6",
  type: "multipleChoice",
  prompt: "🌊 Mini-dossier : « Prima tabella venit ex Sicilia. Secunda de nave narrat. Tertia cives monet. » Quelles fonctions différentes apparaissent dans le dossier ?",
  options: [
    "une annonce",
    "un récit",
    "un avertissement",
    "une scène de théâtre"
  ],
  expected: [
    "une annonce",
    "un récit",
    "un avertissement"
  ],
  shuffle: true,
  points: 1
},
    {
      id: "4e-p1-l14-t7",
      type: "singleChoice",
      prompt: "🌊 Mini-texte : « Nuntius venit. Multi tacent. » Quel effet de scène apparaît immédiatement ?",
      options: [
        "une tension silencieuse",
        "une fête bruyante",
        "un débat scolaire",
        "un départ joyeux"
      ],
      expected: "une tension silencieuse",
      shuffle: true,
      points: 1
    }
  ],
  production: [
    {
      id: "4e-p1-l14-p1",
      type: "textInput",
      prompt: "🌊 Traduis en français : nuntius ex Sicilia venit et cives monet",
      expected: "un message venu de Sicile arrive et avertit les citoyens",
      acceptedAnswers: [
        "un message venu de Sicile arrive et avertit les citoyens",
        "le messager venu de Sicile arrive et avertit les citoyens",
        "une nouvelle venue de Sicile arrive et avertit les citoyens",
        "un message de Sicile arrive et avertit les citoyens"
      ],
      answerConfig: {
        type: "translation-segment",
        language: "fr",
        accepted: [
          "un message venu de Sicile arrive et avertit les citoyens",
          "le messager venu de Sicile arrive et avertit les citoyens",
          "une nouvelle venue de Sicile arrive et avertit les citoyens",
          "un message de Sicile arrive et avertit les citoyens"
        ],
        ignoreDeterminers: true,
        ignoreContractions: true,
        allowPartialAnswer: "core-meaning-only"
      },
      points: 1,
      canonicalAnswer: "un message venu de Sicile arrive et avertit les citoyens",
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
      gradingFocus: "Il faut comprendre l’origine, l’arrivée et la fonction d’avertissement.",
      rejectIf: [
        "verbe incorrect",
        "contre-sens global",
        "réponse hors-sujet"
      ],
      tests: [
        { input: "un message venu de Sicile arrive et avertit les citoyens", isCorrect: true },
        { input: "une nouvelle venue de Sicile arrive et avertit les citoyens", isCorrect: true },
        { input: "des citoyens partent vers la Sicile et écrivent un navire", isCorrect: false }
      ]
    },
    {
      id: "4e-p1-l14-p2",
      type: "textInput",
      prompt: "🌊 Traduis en latin : Une tablette raconte le trajet du navire.",
      expected: "tabella iter navis narrat",
      acceptedAnswers: [
        "tabella iter navis narrat",
        "tabella narrat iter navis",
        "iter navis tabella narrat",
        "iter navis narrat tabella",
        "narrat tabella iter navis",
        "narrat iter navis tabella"
      ],
      answerConfig: {
        type: "one-of",
        language: "latin",
        accepted: [
          "tabella iter navis narrat",
          "tabella narrat iter navis",
          "iter navis tabella narrat",
          "iter navis narrat tabella",
          "narrat tabella iter navis",
          "narrat iter navis tabella"
        ],
        orderMode: "chunk-permutation"
      },
      points: 1,
      canonicalAnswer: "tabella iter navis narrat",
      normalization: {
        trim: true,
        collapseSpaces: true,
        ignoreCase: true,
        ignorePunctuation: true,
        normalizeApostrophes: true,
        ignoreDiacritics: true
      },
      gradingFocus: "Réinvestir le texte suivi par une production ciblée et sobre.",
      rejectIf: [
        "sens inversé sujet/objet",
        "verbe incorrect",
        "forme latine impossible au niveau de la leçon",
        "réponse hors-sujet"
      ],
      tests: [
        { input: "tabella iter navis narrat", isCorrect: true },
        { input: "iter navis narrat tabella", isCorrect: true },
        { input: "tabella iter navis narratur", isCorrect: false }
      ]
    },
    
{
  id: "4e-p1-l14-p3",
  type: "textInput",
  prompt: "🌊 Mini-dossier : « Prima tabella venit ex Sicilia. Secunda navem narrat. Tertia cives monet. » Recopie le verbe qui transforme clairement le dossier en avertissement pour la cité.",
  expected: "monet",
  acceptedAnswers: ["monet"],
  answerConfig: {
    type: "one-of",
    language: "latin",
    accepted: ["monet"]
  },
  points: 1,
  canonicalAnswer: "monet",
  normalization: {
    trim: true,
    collapseSpaces: true,
    ignoreCase: true,
    ignorePunctuation: true,
    normalizeApostrophes: true,
    ignoreDiacritics: true
  },
  gradingFocus: "Repérer le verbe qui fait basculer le dossier vers l'alerte collective.",
  rejectIf: ["forme absente du texte", "réponse hors-sujet"],
  tests: [
    { input: "monet", isCorrect: true },
    { input: "narrat", isCorrect: false },
    { input: "venit", isCorrect: false }
  ]
}
  ],
  summary: {
    retains: [
      "Un texte suivi se lit par segments et par fonctions.",
      "Une même nouvelle change de portée selon qu’elle raconte, informe ou ordonne."
    ],
    cahier: [
      "nuntius ex Sicilia venit",
      "tabella iter navis narrat"
    ],
    keywords: ["texte suivi", "Sicile", "dossier"]
  },
  meta: {
    status: "ready",
    tags: ["4e", "p1", "texte-suivi", "tabellae"]
  }
};

const lessonL15 = {
  id: "4e-p1-l15",
  levelId: "4e",
  period: 1,
  periodId: "p1",
  title: "Roma, mare, metus",
  subtitle: headerContexts4eP1_L13toL15["p1-l15"],
  objective: "Réinvestir l’ensemble des acquis de période dans une synthèse narrative cohérente et ample.",
  lessonPoint: "Je combine temps, formes et lexique pour lire une scène plus large sans me perdre.",
  canDo: [
    "Je lis une synthèse de période.",
    "Je distingue expansion, départ et menace.",
    "Je réemploie plusieurs acquis dans la même tâche."
  ],
  lexicon: [
      "Roma, Romae = Rome",
      "mare, maris = mer",
      "metus, metus = peur",
      "consul, consulis = consul",
      "civis, civis = citoyen",
      "nuntius, nuntii = messager",
      "navis, navis = navire",
      "via, viae = route",
      "portus, portus = port",
      "rumor, rumoris = rumeur",
      "venio, venis = venir",
      "timeo, times = craindre",
      "transeo, transis = passer, traverser",
      "mitto, mittis = envoyer",
      "audio, audis = entendre"
    ],
  maxScore: 10,
  training: [
    {
      id: "4e-p1-l15-t1",
      type: "multipleChoice",
      prompt: "🏛️🌊 Quels mots peuvent former l’armature thématique de la période ?",
      options: [
        "Roma",
        "mare",
        "metus",
        "nuntius",
        "hortus"
      ],
      expected: [
        "Roma",
        "mare",
        "metus",
        "nuntius"
      ],
      shuffle: true,
      points: 1
    },
    {
      id: "4e-p1-l15-t2",
      type: "matching",
      prompt: "🏛️🌊 Associe le mot-clé à la grande sphère qu’il évoque.",
      pairs: [
        { left: "Roma", right: "centre politique" },
        { left: "mare", right: "ouverture et circulation" },
        { left: "metus", right: "menace et inquiétude" }
      ],
      rightOptions: [
        "ouverture et circulation",
        "menace et inquiétude",
        "centre politique"
      ],
      expected: {
        "Roma": "centre politique",
        "mare": "ouverture et circulation",
        "metus": "menace et inquiétude"
      },
      points: 1
    },
    {
      id: "4e-p1-l15-t3",
      type: "multipleChoice",
      prompt: "🏛️🌊 Mini-dossier : « Roma vias mittit. Nuntii ex Sicilia veniunt. Cives timent. » Quels axes majeurs se croisent dans ce dossier ?",
      options: [
        "l’expansion romaine",
        "l’arrivée de nouvelles maritimes",
        "la montée de la peur",
        "la vie agricole paisible",
        "un concours poétique"
      ],
      expected: [
        "l’expansion romaine",
        "l’arrivée de nouvelles maritimes",
        "la montée de la peur"
      ],
      shuffle: true,
      points: 1
    },
    {
      id: "4e-p1-l15-t4",
      type: "singleChoice",
      prompt: "🏛️🌊 Mini-texte : « Roma magna est. Mare apertum est. Rumor tamen crescit. » Quelle tension interne traverse la période ?",
      options: [
        "la puissance coexiste avec la fragilité",
        "la ville est vide et sans avenir",
        "la mer supprime toute inquiétude",
        "le forum remplace complètement Ostie"
      ],
      expected: "la puissance coexiste avec la fragilité",
      shuffle: true,
      points: 1
    },
    {
      id: "4e-p1-l15-t5",
      type: "singleChoice",
      prompt: "🏛️🌊 Piège : « nuntii veniunt, cives timent, viae tamen patent » signifie :",
      options: [
        "des nouvelles arrivent, les citoyens ont peur, mais les routes restent ouvertes",
        "les routes ont peur et les citoyens ferment la mer",
        "Rome abandonne toute circulation",
        "la peur supprime les routes et les navires"
      ],
      expected: "des nouvelles arrivent, les citoyens ont peur, mais les routes restent ouvertes",
      shuffle: true,
      points: 1,
      feedback: "Je tiens ensemble les éléments opposés de la scène au lieu d’en effacer un."
    },
    {
      id: "4e-p1-l15-t6",
      type: "multipleChoice",
      prompt: "🏛️🌊 Mini-dossier : « Roma crescit. Colonia conditur. Nuntius venit. Multi tacent. » Quelles informations deviennent certaines ?",
      options: [
        "Rome continue de s’étendre",
        "une fondation a lieu",
        "une nouvelle arrive",
        "le silence gagne plusieurs personnages",
        "tout devient léger et festif"
      ],
      expected: [
        "Rome continue de s’étendre",
        "une fondation a lieu",
        "une nouvelle arrive",
        "le silence gagne plusieurs personnages"
      ],
      shuffle: true,
      points: 1
    },
    {
      id: "4e-p1-l15-t7",
      type: "singleChoice",
      prompt: "🏛️🌊 Mini-texte : « Roma magna est, sed metus manet. » Quel mot empêche la synthèse de devenir triomphale ?",
      options: ["metus", "Roma", "magna", "est"],
      expected: "metus",
      shuffle: true,
      points: 1
    }
  ],
  production: [
    {
      id: "4e-p1-l15-p1",
      type: "textInput",
      prompt: "🏛️🌊 Traduis en français : Roma crescit, nuntius venit, cives tamen timent",
      expected: "Rome grandit, un message arrive, pourtant les citoyens ont peur",
      acceptedAnswers: [
        "Rome grandit, un message arrive, pourtant les citoyens ont peur",
        "Rome grandit, un messager arrive, pourtant les citoyens ont peur",
        "Rome s'agrandit, un message vient, pourtant les citoyens craignent",
        "Rome s'étend, un message arrive, pourtant les citoyens ont peur"
      ],
      answerConfig: {
        type: "translation-segment",
        language: "fr",
        accepted: [
          "Rome grandit, un message arrive, pourtant les citoyens ont peur",
          "Rome grandit, un messager arrive, pourtant les citoyens ont peur",
          "Rome s'agrandit, un message vient, pourtant les citoyens craignent",
          "Rome s'étend, un message arrive, pourtant les citoyens ont peur"
        ],
        ignoreDeterminers: true,
        ignoreContractions: true,
        allowPartialAnswer: "core-meaning-only"
      },
      points: 1,
      canonicalAnswer: "Rome grandit, un message arrive, pourtant les citoyens ont peur",
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
      gradingFocus: "Il faut tenir ensemble expansion, information et inquiétude.",
      rejectIf: [
        "verbe incorrect",
        "contre-sens global",
        "réponse hors-sujet"
      ],
      tests: [
        { input: "Rome grandit, un message arrive, pourtant les citoyens ont peur", isCorrect: true },
        { input: "Rome s'étend, un message arrive, pourtant les citoyens ont peur", isCorrect: true },
        { input: "Rome disparaît, aucun message n'arrive, les citoyens se réjouissent", isCorrect: false }
      ]
    },
    {
      id: "4e-p1-l15-p2",
      type: "textInput",
      prompt: "🏛️🌊 Traduis en latin : Rome grandit, mais la peur demeure.",
      expected: "Roma crescit, sed metus manet",
      acceptedAnswers: [
        "Roma crescit, sed metus manet",
        "Roma crescit sed metus manet",
        "sed metus manet, Roma crescit",
        "Roma crescit, metus tamen manet",
        "Roma crescit metus tamen manet"
      ],
      answerConfig: {
        type: "one-of",
        language: "latin",
        accepted: [
          "Roma crescit, sed metus manet",
          "Roma crescit sed metus manet",
          "sed metus manet, Roma crescit",
          "Roma crescit, metus tamen manet",
          "Roma crescit metus tamen manet"
        ],
        orderMode: "chunk-permutation"
      },
      points: 1,
      canonicalAnswer: "Roma crescit, sed metus manet",
      normalization: {
        trim: true,
        collapseSpaces: true,
        ignoreCase: true,
        ignorePunctuation: true,
        normalizeApostrophes: true,
        ignoreDiacritics: true
      },
      gradingFocus: "Réinvestir la tension de période dans une formule sobre et claire.",
      rejectIf: [
        "verbe incorrect",
        "forme latine impossible au niveau de la leçon",
        "réponse hors-sujet"
      ],
      tests: [
        { input: "Roma crescit, sed metus manet", isCorrect: true },
        { input: "Roma crescit, metus tamen manet", isCorrect: true },
        { input: "Roma crevit, sed metus manet", isCorrect: false }
      ]
    },
    
{
  id: "4e-p1-l15-p3",
  type: "textInput",
  prompt: "🏛️🌊 Mini-dossier : « Roma crescit. Colonia conditur. Nuntii veniunt. Cives timent. » Recopie d'abord une forme qui dit l'expansion, puis une forme qui dit l'inquiétude.",
  expected: "crescit, timent",
  acceptedAnswers: [
    "crescit, timent",
    "crescit timent",
    "conditur, timent",
    "conditur timent"
  ],
  answerConfig: {
    type: "one-of",
    language: "latin",
    accepted: [
      "crescit, timent",
      "crescit timent",
      "conditur, timent",
      "conditur timent"
    ]
  },
  points: 1,
  canonicalAnswer: "crescit, timent",
  normalization: {
    trim: true,
    collapseSpaces: true,
    ignoreCase: true,
    ignorePunctuation: true,
    normalizeApostrophes: true,
    ignoreDiacritics: true
  },
  gradingFocus: "Faire du bilan final un repérage précis de formes porteuses de sens.",
  rejectIf: ["formes absentes du texte", "ordre incorrect", "réponse hors-sujet"],
  tests: [
    { input: "crescit, timent", isCorrect: true },
    { input: "conditur, timent", isCorrect: true },
    { input: "timent, crescit", isCorrect: false }
  ]
}
  ],
  summary: {
    retains: [
      "Je peux lire une scène plus ample en combinant mes repères.",
      "La ville, la mer et la peur se répondent dans cette période."
    ],
    cahier: [
      "Roma crescit, sed metus manet",
      "nuntii veniunt, cives timent"
    ],
    keywords: ["bilan", "Rome", "mer", "peur"]
  },
  meta: {
    status: "ready",
    tags: ["4e", "p1", "bilan", "roma-mare-metus"]
  }
};

export const lessons4eP1 = [
  lessonL1,
  lessonL2,
  lessonL3,
  lessonL4,
  lessonL5,
  lessonL6,
  lessonL7,
  lessonL8,
  lessonL9,
  lessonL10,
  lessonL11,
  lessonL12,
  lessonL13,
  lessonL14,
  lessonL15
];
