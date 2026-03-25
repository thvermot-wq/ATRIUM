// Données de leçons 5E · Période 3 — Discordia in Subura.

const headerContexts5eP3 = {

  "p3-l1": "Une voisine jure qu’elle a vu un homme sortir de nuit, la tête basse et le pas court. « Une histoire pareille ne marche pas ; elle déboule », dit Marcus, puis il attrape une lampe.",

  "p3-l2": "Entre deux immeubles, la ruelle se resserre et garde l’odeur d’humidité. « S’il repasse par là, ce n’est plus une fuite, c’est une habitude », murmure Marcus, puis il touche une trace fraîche sur le mur.",

  "p3-l3": "Aux fenêtres, les voisines regardent la rue avec cette patience qui use tout le monde. « Je ne fouine pas, j’observe mieux que les autres », dit l’une d’elles, puis elle indique une direction sans bouger les pieds.",

  "p3-l4": "Au marché, un marchand d’huile reconnaît son client à l’odeur avant de reconnaître sa figure. « Celui-là entre dans une rue avant son parfum », ricane-t-il, puis Marcus ouvre l’amphore et grimace.",

  "p3-l5": "Dans les boutiques, chacun reprend son récit avec une assurance neuve. « On recommence, mais sans théâtre cette fois », dit Flavia, puis elle bloque du plat de la main le plus bavard des témoins.",

  "p3-l6": "Aux bains, un homme dit qu’il a vu, puis qu’il a entendu, puis qu’il a surtout compris. « Le mensonge fatigue plus vite que la vapeur », murmure Marcus, puis il attend que l’autre se contredise encore.",

  "p3-l7": "Sur la place, les voisins crient, les marchands répliquent, les enfants ramassent des bribes. « Vous êtes nombreux ; essayez maintenant d’être utiles », lance Flavia, puis elle sépare le groupe en deux.",

  "p3-l8": "Devant la porte sombre, Niger gratte le bois et recule aussitôt. « Même lui n’aime pas l’odeur, et il mange pourtant n’importe quoi », dit Livia, puis Marcus colle l’oreille au battant.",

  "p3-l9": "Sous le portique de la grande maison, le sol sonne plus sec et les murs sentent la cire. « Un homme ne finit pas ici sans y être attendu », dit Marcus, puis il longe la galerie à petits pas.",

  "p3-l10": "À l’entrée de la villa de l’avocat, tout est à sa place, jusqu’au silence. « Les riches rangent même leur accueil », glisse Livia, puis elle suit des yeux le serviteur et la tablette.",

  "p3-l11": "Dans le vestibule, le serviteur ouvre, prend la tablette, referme, sans une hésitation. « On ne reçoit pas un inconnu comme ça », souffle Flavia, puis Marcus refait la scène dans sa tête.",

  "p3-l12": "Dans le jardin, les torches balaient la terre humide au ras du mur. « Regardez bien : là... c’est une piste ! », dit Livia, puis tous se penchent d’un même mouvement.",

  "p3-l13": "Une dernière nuit tombe sur Subure. Marcus et Livia reprennent les indices un à un, dans l’ordre, jusqu’au moment où la trace, la porte, le jardin et la route se rejoignent enfin en un petit récit continu."

};

 

export const lessons5eP3 = [

  {

    "id": "p3-l1",

    "period": 3,

    "periodId": "p3",

    "title": "Rumor nocturnus - Interrogatifs",

    "subtitle": "Une rumeur nocturne rouvre l’affaire quand une voisine affirme avoir vu un homme sortir dans l’ombre.",

    "objective": "Réactiver les interrogatifs dans une scène d’enquête nocturne.",

    "lessonPoint": "Je trouve le verbe d’abord, puis qui / quoi / où / pourquoi ; l’ordre latin peut varier.",

    "canDo": [

      "Je reconnais quis / quid /ubi / cur.",

      "Je distingue vu et entendu.",

      "Je traduis une question simple."

    ],

    "lexicon": [

      "quis = qui ?",

      "quid = quoi ?",

      "ubi = où ?",

      "cur = pourquoi ?",

      "rumor, rumoris m. = rumeur",

      "vir, viri m. = homme",

      "vicus, vici m. = quartier",

      "noctu = de nuit",
      "multum = beaucoup",

      "exeo, exit = je sors ; il/elle sort",

      "video, videt = je vois ; il/elle voit",

      "turbo, turbat = je trouble ; il/elle trouble",

      "dico, dicit = je dis ; il/elle dit"

    ],

    "maxScore": 10,

    "training": [

      {

        "id": "p3-l1-t1",

        "type": "singleChoice",

        "prompt": "Quel mot signifie « qui ? »",

        "options": [

          "quis",

          "quid",

          "cur",

          "ubi"

        ],

        "expected": "quis",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l1-t2",

        "type": "matching",

        "prompt": "Associe l’interrogatif et son sens.",

        "pairs": [

          {

            "left": "quis",

            "right": "qui ?"

          },

          {

            "left": "quid",

            "right": "quoi ?"

          },

          {

            "left": "ubi",

            "right": "où ?"

          },

          {

            "left": "cur",

            "right": "pourquoi ?"

          }

        ],

        "rightOptions": [

          "pourquoi ?",

          "où ?",

          "qui ?",

          "quoi ?"

        ],

        "expected": {

          "quis": "qui ?",

          "quid": "quoi ?",

          "ubi": "où ?",

          "cur": "pourquoi ?"

        },

        "points": 1

      },

      {

        "id": "p3-l1-t3",

        "type": "singleChoice",

        "prompt": "« vicina virum noctu videt » : qui voit l’homme ?",

        "options": [

          "la voisine",

          "l’homme",

          "la rumeur",

          "le chien"

        ],

        "expected": "la voisine",

        "shuffle": true,

        "points": 1

      },

   {
  "id": "p3-l1-t4",
  "type": "multipleChoice",
  "prompt": "Coche les deux traductions recevables de « vir noctu exit ».",
  "options": [
    "L’homme sort de nuit",
    "Un homme sort pendant la nuit",
    "L’homme entre de nuit",
    "La nuit sort avec l’homme"
  ],
  "expected": [
    "L’homme sort de nuit",
    "Un homme sort pendant la nuit"
  ],
  "shuffle": true,
  "points": 1
},

      {

        "id": "p3-l1-t5",

        "type": "singleChoice",

        "prompt": "Dans « noctu vir exit », quel mot indique le moment ?",

        "options": [

          "noctu",

          "vir",

          "exit",

          "rumor"

        ],

        "expected": "noctu",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l1-t6",

        "type": "singleChoice",

        "prompt": "Dans « rumor vicum turbat », le verbe est…",

        "options": [

          "rumor",

          "vicum",

          "turbat",

          "noctu"

        ],

        "expected": "turbat",

        "shuffle": true,

        "points": 1

      },

     {

  "id": "p3-l1-t7",

  "type": "matching",

  "prompt": "Mini-texte : « Vicina virum videt. Servus dicit multum. » Associe chaque mot ou groupe à son rôle dans la scène.",

  "pairs": [

    {

      "left": "vicina",

      "right": "celle qui voit"

    },

    {

      "left": "virum",

      "right": "celui qui est vu"

    },

    {

      "left": "servus",

      "right": "celui qui parle"

    }

  ],

  "rightOptions": [

    "celui qui est vu",

    "celle qui voit",

    "celui qui parle"

  ],

  "expected": {

    "vicina": "celle qui voit",

    "virum": "celui qui est vu",

    "servus": "celui qui parle"

  },

  "points": 1

}

    ],

    "production": [

      {

        "id": "p3-l1-p1",

        "type": "textInput",

        "prompt": "Traduis : Quis virum videt ?",

        "expected": "qui voit l'homme ?",

        "acceptedAnswers": [

          "qui voit l'homme",

          "qui voit l'homme ?",

          "qui voit cet homme",

          "qui voit cet homme ?",

          "qui aperçoit l'homme",

          "qui aperçoit l'homme ?",

          "qui aperçoit cet homme",

          "qui aperçoit cet homme ?"

        ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted": [

            "qui voit l'homme",

            "qui voit l'homme ?",

            "qui voit cet homme",

            "qui voit cet homme ?",

            "qui aperçoit l'homme",

            "qui aperçoit l'homme ?",

            "qui aperçoit cet homme",

            "qui aperçoit cet homme ?"

          ]

        },

        "points": 1,

        "canonicalAnswer": "qui voit l'homme ?",

        "normalization": {

          "trim": true,

          "collapseSpaces": true,

          "ignoreCase": true,

          "ignorePunctuation": true,

          "normalizeApostrophes": true,

          "ignoreDiacritics": true

        },

        "gradingFocus": "Compréhension correcte en français ; variantes lexicales recevables.",

        "rejectIf": [

          "verbe incorrect",

          "sens inversé sujet/objet",

          "forme latine impossible au niveau de la leçon"

        ],

        "tests": [

          {

            "input": "qui voit l'homme ?",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

      {

        "id": "p3-l1-p2",

        "type": "textInput",

        "prompt": "Traduis en latin : La voisine voit l’homme.",

        "expected": "vicina virum videt",

        "acceptedAnswers": [

          "vicina virum videt",

          "vicina videt virum",

          "virum vicina videt",

          "virum videt vicina",

          "videt vicina virum",

          "videt virum vicina"

        ],

        "answerConfig": {

          "type": "one-of",

          "language": "latin",

          "accepted": [

            "vicina virum videt",

            "vicina videt virum",

            "virum vicina videt",

            "virum videt vicina",

            "videt vicina virum",

            "videt virum vicina"

          ]

        },

        "points": 1,

        "canonicalAnswer": "vicina virum videt",

        "normalization": {

          "trim": true,

          "collapseSpaces": true,

          "ignoreCase": true,

          "ignorePunctuation": true,

          "normalizeApostrophes": true,

          "ignoreDiacritics": true

        },

        "gradingFocus": "Morphologie et sens latin corrects ; ordre flexible accepté.",

        "rejectIf": [

          "verbe incorrect",

          "sens inversé sujet/objet",

          "forme latine impossible au niveau de la leçon"

        ],

        "tests": [

          {

            "input": "vicina virum videt",

            "isCorrect": true

          },

          {

            "input": "lorem ipsum",

            "isCorrect": false

          }

        ]

      },

      {

        "id": "p3-l1-p3",

        "type": "textInput",

        "prompt": "Traduis : rumor vicum turbat.",

        "expected": "la rumeur trouble le quartier",

        "acceptedAnswers": [

          "la rumeur trouble le quartier",

          "la rumeur trouble le voisinage",

          "la rumeur perturbe le quartier",

          "la rumeur perturbe le voisinage",

          "la rumeur trouble la rue",

          "la rumeur perturbe la rue"

        ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted": [

            "la rumeur trouble le quartier",

            "la rumeur trouble le voisinage",

            "la rumeur perturbe le quartier",

            "la rumeur perturbe le voisinage",

            "la rumeur trouble la rue",

            "la rumeur perturbe la rue"

          ]

        },

        "points": 1,

        "canonicalAnswer": "la rumeur trouble le quartier",

        "normalization": {

          "trim": true,

          "collapseSpaces": true,

          "ignoreCase": true,

          "ignorePunctuation": true,

          "normalizeApostrophes": true,

          "ignoreDiacritics": true

        },

        "gradingFocus": "Traduction correcte d’une phrase simple avec sujet, COD et verbe.",

        "rejectIf": [

          "verbe incorrect",

          "sens inversé sujet/objet",

          "réponse hors-sujet"

        ],

        "tests": [

          {

            "input": "la rumeur trouble le quartier",

            "isCorrect": true

          },

          {

            "input": "le quartier trouble la rumeur",

            "isCorrect": false

          }

        ]

      }

    ],

    "summary": {

      "retains": [

        "Je commence par le verbe et je distingue sujet, objet (COD) et complément de lieu.",

        "Je sais traduire une question d’enquête simple."

      ],

      "cahier": [

        "quis / quid / ubi / cur",

        "rumor vicum turbat = la rumeur trouble le quartier"

      ],

      "keywords": [

        "nuit",

        "rumeur",

        "interrogatifs"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "p3",

        "rumor",

        "noctu"

      ]

    }

  },

  {

    "id": "p3-l2",

    "period": 3,

    "periodId": "p3",

    "title": "Inter insulas - Prépositions",

    "subtitle": "Marcus suit la trace entre les insulae, se cache dans les angles, et comprend qu’un homme a pris l’habitude de passer là quand les portes se ferment.",

    "objective": "Lire un trajet nocturne grâce aux prépositions.",

    "lessonPoint": "Je lis le groupe prépositionnel d’un seul bloc pour suivre le trajet.",

    "canDo": [

      "Je lis ad/in/ex/ante.",

      "Je repère des lieux traversés.",

      "Je traduis un trajet."

    ],

    "lexicon": [

      "insula, insulae f. = immeuble",

      "via, viae f. = rue",
      "villa, villae, f. = demeure, villa",
      "vir, viri, m. = homme",

      "ad + acc. = vers",

      "in + abl. = dans (lieu où l’on est)",

      "in + acc. = dans, vers (mouvement)",

      "ex + abl. = hors de, depuis",

      "ante + acc. = devant",
      "exeo, exis = je sors, tu sors",

      "curro, currit = je cours ; il/elle court",

      "sto, stat = je me tiens ; il/elle se tient",

      "maneo, manet = je reste ; il/elle reste",

      "intro, intrat = j’entre ; il/elle entre"

    ],

    "maxScore": 10,

    "training": [

      {

        "id": "p3-l2-t1",

        "type": "singleChoice",

        "prompt": "ex signifie…",

        "options": [

          "hors de",

          "vers",

          "dans",

          "devant"

        ],

        "expected": "hors de",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l2-t2",

        "type": "matching",

        "prompt": "Associe ad/in/ex/ante et leur sens.",

        "pairs": [

          {

            "left": "ad",

            "right": "vers"

          },

          {

            "left": "in",

            "right": "dans"

          },

          {

            "left": "ex",

            "right": "hors de"

          },

          {

            "left": "ante",

            "right": "devant"

          }

        ],

        "rightOptions": [

          "devant",

          "dans",

          "vers",

          "hors de"

        ],

        "expected": {

          "ad": "vers",

          "in": "dans",

          "ex": "hors de",

          "ante": "devant"

        },

        "points": 1

      },

      {

        "id": "p3-l2-t3",

        "type": "singleChoice",

        "prompt": "« vir ex insula exit » : d’où sort l’homme ?",

        "options": [

          "de l’immeuble",

          "de la fontaine",

          "du forum",

          "de la porte"

        ],

        "expected": "de l’immeuble",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l2-t4",

        "type": "singleChoice",

        "prompt": "« ante ianuam vir stat » : que fait-il ?",

        "options": [

          "il se tient devant la porte",

          "il entre dans la porte",

          "il quitte la rue",

          "il crie devant une porte"

        ],

        "expected": "il se tient devant la porte",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l2-t5",

        "type": "singleChoice",

        "prompt": "Dans « vir in via currit », quel mot ou groupe indique le lieu ?",

        "options": [

          "in via",

          "vir",

          "currit",

          "nullus"

        ],

        "expected": "in via",

        "shuffle": true,

        "points": 1

      },

     {
  "id": "p3-l2-t6",
  "type": "multipleChoice",
  "prompt": "Coche les trois traductions recevables de « servus ad villam currit ».",
  "options": [
    "Le serviteur court vers la villa",
    "L’esclave court vers la villa",
    "Le serviteur va vers la villa",
    "Le serviteur sort de la villa"
  ],
  "expected": [
    "Le serviteur court vers la villa",
    "L’esclave court vers la villa",
    "Le serviteur va vers la villa"
  ],
  "shuffle": true,
  "points": 1
},

     {

  "id": "p3-l2-t7",

  "type": "matching",

  "prompt": "Mini-texte : « Vir ex insula exit et ad forum currit. » Associe chaque groupe au bon rôle.",

  "pairs": [

    {

      "left": "ex insula",

      "right": "point de départ"

    },

    {

      "left": "ad forum",

      "right": "point d’arrivée"

    }

  ],

  "rightOptions": [

    "point de départ",

    "point d’arrivée"

  ],

  "expected": {

    "ex insula": "point de départ",

    "ad forum": "point d’arrivée"

  },

  "points": 1

}

    ],

    "production": [

      {

        "id": "p3-l2-p1",

        "type": "textInput",

        "prompt": "Traduis : vir ante insulam manet",

        "expected": "l'homme reste devant l'immeuble",

        "acceptedAnswers": [

          "l'homme reste devant l'immeuble",

          "l'homme demeure devant l'immeuble",

          "l'homme reste devant le bâtiment",

          "l'homme demeure devant le bâtiment",

          "l'homme reste devant l'insula",

          "l'homme demeure devant l'insula",

          "un homme reste devant l'immeuble",

          "un homme demeure devant l'immeuble",

          "un homme reste devant le bâtiment",

          "un homme demeure devant le bâtiment",

          "un homme reste devant l'insula",

          "un homme demeure devant l'insula"

        ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted": [

            "l'homme reste devant l'immeuble",

            "l'homme demeure devant l'immeuble",

            "l'homme reste devant le bâtiment",

            "l'homme demeure devant le bâtiment",

            "l'homme reste devant l'insula",

            "l'homme demeure devant l'insula",

            "un homme reste devant l'immeuble",

            "un homme demeure devant l'immeuble",

            "un homme reste devant le bâtiment",

            "un homme demeure devant le bâtiment",

            "un homme reste devant l'insula",

            "un homme demeure devant l'insula"

          ]

        },

        "points": 1,

        "canonicalAnswer": "l'homme reste devant l'immeuble",

        "normalization": {

          "trim": true,

          "collapseSpaces": true,

          "ignoreCase": true,

          "ignorePunctuation": true,

          "normalizeApostrophes": true,

          "ignoreDiacritics": true

        },

        "gradingFocus": "Compréhension correcte en français ; variantes lexicales recevables.",

        "rejectIf": [

          "verbe incorrect",

          "sens inversé sujet/objet",

          "forme latine impossible au niveau de la leçon"

        ],

        "tests": [

          {

            "input": "l'homme reste devant l'immeuble",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

      {

        "id": "p3-l2-p2",

        "type": "textInput",

        "prompt": "Traduis en latin : L’homme entre dans l’immeuble.",

        "expected": "vir in insulam intrat",

        "acceptedAnswers": [

          "vir in insulam intrat",

          "vir intrat in insulam",

          "in insulam vir intrat",

          "in insulam intrat vir",

          "intrat vir in insulam",

          "intrat in insulam vir"

        ],

        "answerConfig": {

          "type": "one-of",

          "language": "latin",

          "accepted": [

            "vir in insulam intrat",

            "vir intrat in insulam",

            "in insulam vir intrat",

            "in insulam intrat vir",

            "intrat vir in insulam",

            "intrat in insulam vir"

          ]

        },

        "points": 1,

        "canonicalAnswer": "vir in insulam intrat",

        "normalization": {

          "trim": true,

          "collapseSpaces": true,

          "ignoreCase": true,

          "ignorePunctuation": true,

          "normalizeApostrophes": true,

          "ignoreDiacritics": true

        },

        "gradingFocus": "Morphologie et sens latin corrects ; ordre flexible accepté.",

        "rejectIf": [

          "verbe incorrect",

          "sens inversé sujet/objet",

          "forme latine impossible au niveau de la leçon"

        ],

        "tests": [

          {

            "input": "vir in insulam intrat",

            "isCorrect": true

          },

          {

            "input": "lorem ipsum",

            "isCorrect": false

          }

        ]

      },

      {

        "id": "p3-l2-p3",

        "type": "textInput",

        "prompt": "Traduis : vir ex insula exit et ante ianuam stat.",

        "expected": "l’homme sort de l’immeuble et se tient devant la porte",

        "acceptedAnswers": [

          "l’homme sort de l’immeuble et se tient devant la porte",

          "l’homme sort de l’insula et se tient devant la porte",

          "un homme sort de l’immeuble et se tient devant la porte",

          "un homme sort de l’insula et se tient devant la porte",

          "l’homme sort de l’immeuble et reste devant la porte",

          "l’homme sort de l’insula et reste devant la porte",

          "un homme sort de l’immeuble et reste devant la porte",

          "un homme sort de l’immeuble et se poste devant la porte",

          "l'homme sort de l’immeuble et se poste devant la porte",

          "un homme sort de l’insula et reste devant la porte"

        ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted": [

            "l’homme sort de l’immeuble et se tient devant la porte",

            "l’homme sort de l’insula et se tient devant la porte",

            "un homme sort de l’immeuble et se tient devant la porte",

            "un homme sort de l’insula et se tient devant la porte",

            "l’homme sort de l’immeuble et reste devant la porte",

            "l’homme sort de l’insula et reste devant la porte",

            "un homme sort de l’immeuble et reste devant la porte",

            "un homme sort de l’immeuble et se poste devant la porte",

            "l'homme sort de l’immeuble et se poste devant la porte",

            "un homme sort de l’insula et reste devant la porte"

          ]

        },

        "points": 1,

        "canonicalAnswer": "l’homme sort de l’immeuble et se tient devant la porte",

        "normalization": {

          "trim": true,

          "collapseSpaces": true,

          "ignoreCase": true,

          "ignorePunctuation": true,

          "normalizeApostrophes": true,

          "ignoreDiacritics": true

        },

        "gradingFocus": "Traduire correctement deux groupes de lieu dans une même phrase.",

        "rejectIf": [

          "préposition mal comprise",

          "verbe incorrect",

          "réponse hors-sujet"

        ],

        "tests": [

          {

            "input": "l’homme sort de l’immeuble et se tient devant la porte",

            "isCorrect": true

          },

          {

            "input": "l’homme entre dans l’immeuble et quitte la porte",

            "isCorrect": false

          }

        ]

      }

    ],

    "summary": {

      "retains": [

        "Je lis le groupe prépositionnel d’un seul bloc pour suivre un trajet.",

        "Je distingue sortie, entrée et arrêt dans la rue."

      ],

      "cahier": [

        "ad = vers ; in = dans ; ex = hors de ; ante = devant",

        "vir ex insula exit et ante ianuam stat"

      ],

      "keywords": [

        "trajet",

        "insula",

        "prépositions"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "p3",

        "lieux",

        "insula"

      ]

    }

  },

  {

    "id": "p3-l3",

    "period": 3,

    "periodId": "p3",

    "title": "Feminae ad ianuam - 1ère déclinaison",

    "subtitle": "Aux portes et aux fenêtres, les voisines de Subure regardent la rue chacune à sa façon.",

    "objective": "Réinvestir la 1re déclinaison dans une scène d’observation.",

    "lessonPoint": "Je regarde -a et -am pour distinguer qui agit et ce qui est regardé.",

    "canDo": [

      "Je reconnais des noms de 1re déclinaison.",

      "Je traduis une phrase simple."

    ],

    "lexicon": [

      "femina, feminae f. = femme",

      "vicina, vicinae f. = voisine",

      "amica, amicae f. = amie",

      "ianua, ianuae f. = porte",

      "fenestra, fenestrae f. = fenêtre",

      "lucerna, lucernae f. = lampe",

      "via, viae f. = rue",

      "specto, spectat = je regarde ; il/elle regarde",

      "aperio, aperit = j’ouvre ; il/elle ouvre",

      "porto, portat = je porte ; il/elle porte"

    ],

    "maxScore": 10,

    "training": [

      {

        "id": "p3-l3-t1",

        "type": "singleChoice",

        "prompt": "Quel mot appartient à la 1re déclinaison ?",

        "options": [

          "vicina",

          "dominus",

          "donum",

          "forum"

        ],

        "expected": "vicina",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l3-t2",

        "type": "matching",

        "prompt": "Associe mot et sens.",

        "pairs": [

          {

            "left": "femina",

            "right": "femme"

          },

          {

            "left": "vicina",

            "right": "voisine"

          },

          {

            "left": "ianua",

            "right": "porte"

          },

          {

            "left": "fenestra",

            "right": "fenêtre"

          }

        ],

        "rightOptions": [

          "porte",

          "femme",

          "fenêtre",

          "voisine"

        ],

        "expected": {

          "femina": "femme",

          "vicina": "voisine",

          "ianua": "porte",

          "fenestra": "fenêtre"

        },

        "points": 1

      },

      {

        "id": "p3-l3-t3",

        "type": "singleChoice",

        "prompt": "Dans « vicina viam spectat », le complément d'objet est…",

        "options": [

          "vicina",

          "viam",

          "spectat",

          "ianua"

        ],

        "expected": "viam",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l3-t4",

        "type": "singleChoice",

        "prompt": "La terminaison à l'accusatif singulier, dans la première déclinaison, est…",

        "options": [

          "-am",

          "-us",

          "-um",

          "-nt"

        ],

        "expected": "-am",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l3-t5",

        "type": "matching",

        "prompt": "Associe chaque mot à sa fonction dans « vicina viam spectat ».",

        "pairs": [

          {

            "left": "vicina",

            "right": "sujet"

          },

          {

            "left": "viam",

            "right": "COD"

          },

          {

            "left": "spectat",

            "right": "verbe"

          }

        ],

        "rightOptions": [

          "verbe",

          "sujet",

          "COD"

        ],

        "expected": {

          "vicina": "sujet",

          "viam": "COD",

          "spectat": "verbe"

        },

        "points": 1

      },

      {
  "id": "p3-l3-t6",
  "type": "multipleChoice",
  "prompt": "Coche les deux traductions recevables de « amica lucernam portat ».",
  "options": [
    "L’amie porte la lampe",
    "Une amie porte une lampe",
    "L’amie casse la lampe",
    "La lampe porte l’amie"
  ],
  "expected": [
    "L’amie porte la lampe",
    "Une amie porte une lampe"
  ],
  "shuffle": true,
  "points": 1
},

    {

  "id": "p3-l3-t7",

  "type": "matching",

  "prompt": "Mini-texte : « Vicina ad ianuam stat et viam spectat. » Associe chaque élément à sa fonction dans la phrase.",

  "pairs": [

    {

      "left": "vicina",

      "right": "celle qui agit"

    },

    {

      "left": "ad ianuam",

      "right": "près de la porte"

    },

    {

      "left": "viam",

      "right": "ce qui est regardé"

    }

  ],

  "rightOptions": [

    "celle qui agit",

    "près de la porte",

    "ce qui est regardé"

  ],

  "expected": {

    "vicina": "celle qui agit",

    "ad ianuam": "près de la porte",

    "viam": "ce qui est regardé"

  },

  "points": 1

}

    ],

    "production": [

      {

        "id": "p3-l3-p1",

        "type": "textInput",

        "prompt": "Traduis : vicina ianuam aperit",

        "expected": "la voisine ouvre la porte",

        "acceptedAnswers": [

          "la voisine ouvre la porte",

          "une voisine ouvre la porte",

          "une voisine ouvre une porte",

          "la voisine ouvre cette porte",

          "une voisine ouvre cette porte"

        ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted": [

            "la voisine ouvre la porte",

            "une voisine ouvre la porte",

            "une voisine ouvre une porte",

            "la voisine ouvre cette porte",

            "une voisine ouvre cette porte"

          ]

        },

        "points": 1,

        "canonicalAnswer": "la voisine ouvre la porte",

        "normalization": {

          "trim": true,

          "collapseSpaces": true,

          "ignoreCase": true,

          "ignorePunctuation": true,

          "normalizeApostrophes": true,

          "ignoreDiacritics": true

        },

        "gradingFocus": "Compréhension correcte en français ; variantes lexicales recevables.",

        "rejectIf": [

          "verbe incorrect",

          "sens inversé sujet/objet",

          "forme latine impossible au niveau de la leçon"

        ],

        "tests": [

          {

            "input": "la voisine ouvre la porte",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

      {

        "id": "p3-l3-p2",

        "type": "textInput",

        "prompt": "Traduis en latin : La femme regarde la rue.",

        "expected": "femina viam spectat",

        "acceptedAnswers": [

          "femina viam spectat",

          "femina spectat viam",

          "viam femina spectat",

          "viam spectat femina",

          "spectat femina viam",

          "spectat viam femina"

        ],

        "answerConfig": {

          "type": "one-of",

          "language": "latin",

          "accepted": [

            "femina viam spectat",

            "femina spectat viam",

            "viam femina spectat",

            "viam spectat femina",

            "spectat femina viam",

            "spectat viam femina"

          ]

        },

        "points": 1,

        "canonicalAnswer": "femina viam spectat",

        "normalization": {

          "trim": true,

          "collapseSpaces": true,

          "ignoreCase": true,

          "ignorePunctuation": true,

          "normalizeApostrophes": true,

          "ignoreDiacritics": true

        },

        "gradingFocus": "Morphologie et sens latin corrects ; ordre flexible accepté.",

        "rejectIf": [

          "verbe incorrect",

          "sens inversé sujet/objet",

          "forme latine impossible au niveau de la leçon"

        ],

        "tests": [

          {

            "input": "femina viam spectat",

            "isCorrect": true

          },

          {

            "input": "lorem ipsum",

            "isCorrect": false

          }

        ]

      },

      {

        "id": "p3-l3-p3",

        "type": "textInput",

        "prompt": "Complète en latin : « La voisine porte la lampe » = « vicina ... portat »",

        "expected": "lucernam",

        "acceptedAnswers": [

          "lucernam"

        ],

        "answerConfig": {

          "type": "one-of",

          "language": "latin",

          "accepted": [

            "lucernam"

          ]

        },

        "points": 1,

        "canonicalAnswer": "lucernam",

        "normalization": {

          "trim": true,

          "collapseSpaces": true,

          "ignoreCase": true,

          "ignorePunctuation": true,

          "normalizeApostrophes": true,

          "ignoreDiacritics": true

        },

        "gradingFocus": "Choisir la bonne forme de COD en -am.",

        "rejectIf": [

          "forme laissée au nominatif",

          "réponse hors-sujet"

        ],

        "tests": [

          {

            "input": "lucernam",

            "isCorrect": true

          },

          {

            "input": "lucerna",

            "isCorrect": false

          }

        ]

      }

    ],

    "summary": {

      "retains": [

        "Je distingue mieux qui agit et ce qui est regardé grâce à -a et -am.",

      ],

      "cahier": [

        "vicina viam spectat",

        "-a : sujet fréquent ; -am : COD fréquent"

      ],

      "keywords": [

        "observation",

        "1re déclinaison",

        "porte"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "p3",

        "feminae",

        "declinaison1"

      ]

    }

  },

  {

    "id": "p3-l4",

    "period": 3,

    "periodId": "p3",

    "title": "In macello - Le genre neutre",

    "subtitle": "Au marché, un marchand reconnaît l’homme et parle d'un parfum tenace d'huile mal pressée ; si bien que l’odeur grasse revient soudain dans tous les souvenirs.",

    "objective": "Réinvestir le neutre dans une scène de marché et d’indice.",

    "lessonPoint": "Je repère les neutres de la 2e déclinaison, et j’observe leur fonction dans l’indice. Sujet (nominatif) = -um ; COD (accusatif) = -um.",

    "canDo": [

      "Je reconnais des neutres fréquents.",

      "Je repère l’action principale.",

      "Je traduis un indice concret."

    ],

    "lexicon": [

      "macellum, macelli n. = marché",

      "mercator, mercatoris m. = marchand",

      "oleum, olei n. = huile",

      "signum, signi n. = signe, marque, indice",

      "templum, templi n. = temple",

      "vir, viri m. = homme",

      "donum, doni = cadeau, don",
"rumor, rumoris = rumeur",
"noctu = de nuit",
"cresco, crescis = je grandis, tu grandis",

      "emo, emit = j’achète ; il/elle achète",

      "porto, portat = je porte ; il/elle porte",

      "celo, celat = je cache ; il/elle cache",

      "video, videt = je vois ; il/elle voit",

      "invenio, invenit = je trouve ; il/elle trouve"

    ],

    "maxScore": 10,

    "training": [

      {

        "id": "p3-l4-t1",

        "type": "singleChoice",

        "prompt": "macellum signifie…",

        "options": [

          "marché",

          "forum",

          "thermes",

          "porte"

        ],

        "expected": "marché",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l4-t2",

        "type": "matching",

        "prompt": "Associe mot et sens.",

        "pairs": [

          {

            "left": "macellum",

            "right": "marché"

          },

          {

            "left": "oleum",

            "right": "huile"

          },

          {

            "left": "donum",

            "right": "offrande"

          },

          {

            "left": "signum",

            "right": "indice"

          }

        ],

        "rightOptions": [

          "indice",

          "offrande",

          "marché",

          "huile"

        ],

        "expected": {

          "macellum": "marché",

          "oleum": "huile",

          "donum": "offrande",

          "signum": "indice"

        },

        "points": 1

      },

      {

        "id": "p3-l4-t3",

        "type": "singleChoice",

        "prompt": "« vir oleum emit » : que fait l’homme ?",

        "options": [

          "il achète de l’huile",

          "il cache l’huile",

          "il trouve l’huile",

          "il appelle"

        ],

        "expected": "il achète de l’huile",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l4-t4",

        "type": "singleChoice",

        "prompt": "Quel mot est neutre ?",

        "options": [

          "oleum",

          "vicina",

          "servus",

          "ianua"

        ],

        "expected": "oleum",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l4-t5",

        "type": "multipleChoice",

        "prompt": "Traductions recevables de « oleum vir portat ».",

        "options": [

          "L’homme porte de l’huile",

          "L’homme transporte l’huile",

          "L’huile porte l’homme",

          "L’homme achète l’huile"

        ],

        "expected": [

          "L’homme porte de l’huile",

          "L’homme transporte l’huile"

        ],

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l4-t6",

        "type": "singleChoice",

        "prompt": "Dans « vir oleum emit », quel mot est le complément d’objet direct ?",

        "options": [

          "vir",

          "oleum",

          "emit",

          "macellum"

        ],

        "expected": "oleum",

        "shuffle": true,

        "points": 1

      },

      {

  "id": "p3-l4-t7",

  "type": "singleChoice",

  "prompt": "Mini-texte : « In macello rumor crescit : vir oleum emit noctu. » Pourquoi cet achat effectué par l'homme paraît-il inquiétant ?",

  "options": [

    "parce qu’il achète de l’huile en pleine nuit",

    "parce qu’il vend du blé au marché",

    "parce qu’il prie dans un temple",

    "parce qu’il parle avec ses voisins"

  ],

  "expected": [

    "parce qu’il achète de l’huile en pleine nuit"

  ],

  "shuffle": true,

  "points": 1

}

    ],

    "production": [

      {

        "id": "p3-l4-p1",

        "type": "textInput",

        "prompt": "Traduis : vir oleum celat",

        "expected": "l'homme cache l'huile",

        "acceptedAnswers": [

          "l'homme cache l'huile",

          "l'homme cache de l'huile",

          "l'homme dissimule l'huile",

          "l'homme dissimule de l'huile",

          "un homme cache l'huile",

          "un homme cache de l'huile",

          "un homme dissimule l'huile",

          "un homme dissimule de l'huile"

        ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted": [

            "l'homme cache l'huile",

            "l'homme cache de l'huile",

            "l'homme dissimule l'huile",

            "l'homme dissimule de l'huile",

            "un homme cache l'huile",

            "un homme cache de l'huile",

            "un homme dissimule l'huile",

            "un homme dissimule de l'huile"

          ]

        },

        "points": 1,

        "canonicalAnswer": "l'homme cache l'huile",

        "normalization": {

          "trim": true,

          "collapseSpaces": true,

          "ignoreCase": true,

          "ignorePunctuation": true,

          "normalizeApostrophes": true,

          "ignoreDiacritics": true

        },

        "gradingFocus": "Compréhension correcte en français ; variantes lexicales recevables.",

        "rejectIf": [

          "verbe incorrect",

          "sens inversé sujet/objet",

          "forme latine impossible au niveau de la leçon"

        ],

        "tests": [

          {

            "input": "l'homme cache l'huile",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

      {

        "id": "p3-l4-p2",

        "type": "textInput",

        "prompt": "Traduis en latin : Le marchand voit l’homme.",

        "expected": "mercator virum videt",

        "acceptedAnswers": [

          "mercator virum videt",

          "mercator videt virum",

          "virum mercator videt",

          "virum videt mercator",

          "videt mercator virum",

          "videt virum mercator"

        ],

        "answerConfig": {

          "type": "one-of",

          "language": "latin",

          "accepted": [

            "mercator virum videt",

            "mercator videt virum",

            "virum mercator videt",

            "virum videt mercator",

            "videt mercator virum",

            "videt virum mercator"

          ]

        },

        "points": 1,

        "canonicalAnswer": "mercator virum videt",

        "normalization": {

          "trim": true,

          "collapseSpaces": true,

          "ignoreCase": true,

          "ignorePunctuation": true,

          "normalizeApostrophes": true,

          "ignoreDiacritics": true

        },

        "gradingFocus": "Produire une phrase correcte avec un sujet masculin et un COD.",

        "rejectIf": [

          "verbe incorrect",

          "sens inversé sujet/objet",

          "forme latine impossible au niveau de la leçon"

        ],

        "tests": [

          {

            "input": "mercator virum videt",

            "isCorrect": true

          },

          {

            "input": "vir mercatorem videt",

            "isCorrect": false

          }

        ]

      },

      {

        "id": "p3-l4-p3",

        "type": "textInput",

        "prompt": "Complète en latin : « vicinus ... invenit » (l’indice).",

        "expected": "signum",

        "acceptedAnswers": [

          "signum"

        ],

        "answerConfig": {

          "type": "one-of",

          "language": "latin",

          "accepted": [

            "signum"

          ]

        },

        "points": 1,

        "canonicalAnswer": "signum",

        "normalization": {

          "trim": true,

          "collapseSpaces": true,

          "ignoreCase": true,

          "ignorePunctuation": true,

          "normalizeApostrophes": true,

          "ignoreDiacritics": true

        },

        "gradingFocus": "Employer un neutre correct comme COD sans changer sa forme.",

        "rejectIf": [

          "forme incorrecte",

          "réponse hors-sujet"

        ],

        "tests": [

          {

            "input": "signum",

            "isCorrect": true

          },

          {

            "input": "signam",

            "isCorrect": false

          }

        ]

      }

    ],

    "summary": {

      "retains": [

        "Je repère un neutre utile dans une scène concrète de marché.",

        "Je comprends qu’un neutre peut rester identique comme sujet (nominatif) et comme COD (accusatif)."

      ],

      "cahier": [

        "mercator virum videt",

        "signum : même forme au neutre comme sujet ou COD"

      ],

      "keywords": [

        "marché",

        "huile",

        "neutre"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "p3",

        "macellum",

        "neutre"

      ]

    }

  },

  {

    "id": "p3-l5",

    "period": 3,

    "periodId": "p3",

    "title": "In tabernis - 2ème déclinaison",

    "subtitle": "Dans les boutiques, les récits se contredisent, mais Flavia oblige chacun à reprendre les faits un par un et à ne pas tirer de conclusion hâtive.",

    "objective": "Lire qui agit et qui subit dans des versions contradictoires.",

    "lessonPoint": "Qui accuse qui ? Je regarde qui est sujet (-us) / complément d'objet (-um) avant d’interpréter une accusation.",

    "canDo": [

      "Je relis la 2e déclinaison masculine.",

      "Je compare deux versions contradictoires.",

      "Je traduis une phrase d’accusation."

    ],

    "lexicon": [

      "servus, servi, m. = esclave, serviteur",

      "dominus, domini, m. = maître, maître de maison",

      "vicinus, vicini, m. = voisin",

      "amicus, amici, m. = ami",

      "tabernarius, tabernarii, m. = boutiquier",

      "murus, muri, m. = mur",

      "sero = tard, tardivement",

      "dubito, dubitas, dubitat = je doute, tu doutes, il/elle doute",
      
      "audio, audis, audit = j’entends ; tu entends ; il/elle entend",
      
      "voco, vocas, vocat = j’appelle, tu appelles, il/elle appelle",

      "accuso, accusas, accusat = j’accuse, tu accuses, il/elle accuse",

      "timeo, times, timet = je crains, tu crains, il/elle craint"

    ],

    "maxScore": 10,

    "training": [

      {

        "id": "p3-l5-t1",

        "type": "singleChoice",

        "prompt": "Quel mot est de 2e déclinaison masculine ?",

        "options": [

          "dominus",

          "ianua",

          "tabella",

          "pax"

        ],

        "expected": "dominus",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l5-t2",

        "type": "matching",

        "prompt": "Associe mot et sens.",

        "pairs": [

          {

            "left": "servus",

            "right": "serviteur"

          },

          {

            "left": "dominus",

            "right": "maître"

          },

          {

            "left": "vicinus",

            "right": "voisin"

          },

          {

            "left": "amicus",

            "right": "ami"

          }

        ],

        "rightOptions": [

          "voisin",

          "ami",

          "serviteur",

          "maître"

        ],

        "expected": {

          "servus": "serviteur",

          "dominus": "maître",

          "vicinus": "voisin",

          "amicus": "ami"

        },

        "points": 1

      },

      {

        "id": "p3-l5-t3",

        "type": "singleChoice",

        "prompt": "« tabernarius virum audit » : qui entend l’homme ?",

        "options": [

          "le boutiquier",

          "l’homme",

          "le voisin",

          "le chien"

        ],

        "expected": "le boutiquier",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l5-t4",

        "type": "singleChoice",

        "prompt": "« virum vicinus accusat » : qui est accusé ?",

        "options": [

          "l’homme",

          "le voisin",

          "le maître",

          "l’ami"

        ],

        "expected": "l’homme",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l5-t5",

        "type": "multipleChoice",

        "prompt": "Traductions recevables de « dominus servum vocat ».",

        "options": [

          "Le maître appelle le serviteur",

          "Le maître fait venir le serviteur",

          "Le serviteur appelle le maître",

          "Le maître craint le serviteur"

        ],

        "expected": [

          "Le maître appelle le serviteur",

          "Le maître fait venir le serviteur"

        ],

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l5-t6",

        "type": "singleChoice",

        "prompt": "Dans « amicus vicinum timet », qui a peur ?",

        "options": [

          "l’ami",

          "le voisin",

          "le maître",

          "le boutiquier"

        ],

        "expected": "l’ami",

        "shuffle": true,

        "points": 1

      },

     {
  "id": "p3-l5-t7",
  "type": "singleChoice",
  "prompt": "Mini-texte : « Sero virum tabernarius videt. Amicus dubitat. » Qui a vu l’homme tard dans la nuit ?",
  "options": [
    "le boutiquier",
    "l’ami",
    "le videur",
    "le serrurier"
  ],
  "expected": "le boutiquier",
  "shuffle": true,
  "points": 1
}

    ],

    "production": [

      {

        "id": "p3-l5-p1",

        "type": "textInput",

        "prompt": "Traduis : amicus vicinum timet",

        "expected": "l'ami craint le voisin",

        "acceptedAnswers": [

          "l'ami craint le voisin",

          "l'ami craint un voisin",

          "l'ami a peur du voisin",

          "l'ami a peur d'un voisin",

          "l'ami redoute le voisin",

          "l'ami redoute un voisin",

          "un ami craint le voisin",

          "un ami craint un voisin",

          "un ami a peur du voisin",

          "un ami a peur d'un voisin",

          "un ami redoute le voisin",

          "un ami redoute un voisin"

        ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted": [

            "l'ami craint le voisin",

            "l'ami craint un voisin",

            "l'ami a peur du voisin",

            "l'ami a peur d'un voisin",

            "l'ami redoute le voisin",

            "l'ami redoute un voisin",

            "un ami craint le voisin",

            "un ami craint un voisin",

            "un ami a peur du voisin",

            "un ami a peur d'un voisin",

            "un ami redoute le voisin",

            "un ami redoute un voisin"

          ]

        },

        "points": 1,

        "canonicalAnswer": "l'ami craint le voisin",

        "normalization": {

          "trim": true,

          "collapseSpaces": true,

          "ignoreCase": true,

          "ignorePunctuation": true,

          "normalizeApostrophes": true,

          "ignoreDiacritics": true

        },

        "gradingFocus": "Compréhension correcte en français ; variantes lexicales recevables.",

        "rejectIf": [

          "verbe incorrect",

          "sens inversé sujet/objet",

          "forme latine impossible au niveau de la leçon"

        ],

        "tests": [

          {

            "input": "l'ami craint le voisin",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

      {

        "id": "p3-l5-p2",

        "type": "textInput",

        "prompt": "Traduis en latin : Le voisin appelle le serviteur.",

        "expected": "vicinus servum vocat",

        "acceptedAnswers": [

          "vicinus servum vocat",

          "vicinus vocat servum",

          "servum vicinus vocat",

          "servum vocat vicinus",

          "vocat vicinus servum",

          "vocat servum vicinus"

        ],

        "answerConfig": {

          "type": "one-of",

          "language": "latin",

          "accepted": [

            "vicinus servum vocat",

            "vicinus vocat servum",

            "servum vicinus vocat",

            "servum vocat vicinus",

            "vocat vicinus servum",

            "vocat servum vicinus"

          ]

        },

        "points": 1,

        "canonicalAnswer": "vicinus servum vocat",

        "normalization": {

          "trim": true,

          "collapseSpaces": true,

          "ignoreCase": true,

          "ignorePunctuation": true,

          "normalizeApostrophes": true,

          "ignoreDiacritics": true

        },

        "gradingFocus": "Morphologie et sens latin corrects ; ordre flexible accepté.",

        "rejectIf": [

          "verbe incorrect",

          "sens inversé sujet/objet",

          "forme latine impossible au niveau de la leçon"

        ],

        "tests": [

          {

            "input": "vicinus servum vocat",

            "isCorrect": true

          },

          {

            "input": "lorem ipsum",

            "isCorrect": false

          }

        ]

      },

   {

  "id": "p3-l5-p3",

  "type": "textInput",

  "prompt": "Traduis : tabernarius vicinum audit.",

  "expected": "le boutiquier entend le voisin",

  "acceptedAnswers": [

    "le boutiquier entend le voisin",

    "le boutiquier entend un voisin",

    "le boutiquier écoute le voisin",

    "le boutiquier écoute un voisin",

    "un boutiquier entend le voisin",

    "un boutiquier entend un voisin",

    "un boutiquier écoute le voisin",

    "un boutiquier écoute un voisin",

    "le marchand entend le voisin",

    "le marchand entend un voisin",

    "le marchand écoute le voisin",

    "le marchand écoute un voisin",

    "un marchand entend le voisin",

    "un marchand entend un voisin",

    "un marchand écoute le voisin",

    "un marchand écoute un voisin"

  ],

  "answerConfig": {

    "type": "translation-segment",

    "language": "fr",

    "accepted": [

      "le boutiquier entend le voisin",

      "le boutiquier entend un voisin",

      "le boutiquier écoute le voisin",

      "le boutiquier écoute un voisin",

      "un boutiquier entend le voisin",

      "un boutiquier entend un voisin",

      "un boutiquier écoute le voisin",

      "un boutiquier écoute un voisin",

      "le marchand entend le voisin",

      "le marchand entend un voisin",

      "le marchand écoute le voisin",

      "le marchand écoute un voisin",

      "un marchand entend le voisin",

      "un marchand entend un voisin",

      "un marchand écoute le voisin",

      "un marchand écoute un voisin"

    ]

  },

  "points": 1,

  "canonicalAnswer": "le boutiquier entend le voisin",

  "normalization": {

    "trim": true,

    "collapseSpaces": true,

    "ignoreCase": true,

    "ignorePunctuation": true,

    "normalizeApostrophes": true,

    "ignoreDiacritics": true

  },

  "gradingFocus": "Traduction correcte d’une phrase d’écoute dans la boutique.",

  "rejectIf": [

    "sens inversé sujet/objet",

    "verbe incorrect",

    "réponse hors-sujet"

  ],

  "tests": [

    {

      "input": "le boutiquier entend le voisin",

      "isCorrect": true

    },

    {

      "input": "le voisin entend le boutiquier",

      "isCorrect": false

    }

  ]

}

    ],

    "summary": {

      "retains": [

        "Je vérifie les terminaisons (sujet ? COD ?) avant d’accuser ou d’innocenter.",

        "Je comprends mieux qui agit et qui subit dans les récits contradictoires."

      ],

      "cahier": [

        "dominus servum vocat",

        "-us : sujet fréquent ; -um : COD fréquent"

      ],

      "keywords": [

        "boutiques",

        "accusation",

        "2e déclinaison"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "p3",

        "tabernis",

        "declinaison2-m"

      ]

    }

  },

  {

    "id": "p3-l6",

    "period": 3,

    "periodId": "p3",

    "title": "In balneo - Présent singulier",

    "subtitle": "Aux bains, un témoin confirme un détail, en retire un autre, puis Marcus sent que le mensonge fatigue ceux qui le portent depuis trop longtemps.",

    "objective": "Identifier je / tu / il-elle dans des témoignages.",

    "lessonPoint": "Je lis la terminaison du verbe pour savoir qui parle.",

    "canDo": [

      "Je repère les personnes du singulier.",

      "Je comprends qui parle dans une déposition.",

      "Je traduis une phrase simple."

    ],

    "lexicon": [

      "balneum = thermes, bains",
      "in balneo = aux bains",
      "ego = moi, je",
      "ille, illa, illud = ce, cet, celui-là",
      "video, vides, videt = je vois, tu vois, il/elle voit",
      "audio, audis, audit = j'entends, tu entends, il/elle entend",
      "narro, narras, narrat = je raconte, tu racontes, il/elle raconte",
      "nego, negas, negat = je nie, tu nies, il/elle nie",
      "timeo, times, timet = je crains, tu crains, il/elle craint",
      "intro, intras, intrat = j'entre, tu entres, il/elle entre",
      "exeo, exis, exit = je sors, tu sors, il/elle sort",
      "rogo, rogas, rogat = je demande, tu demandes, il/elle demande",
      "habito, habitas, habitat = j’habite, tu habites, il/elle habite"

    ],

    "maxScore": 10,

    "training": [

      {

        "id": "p3-l6-t1",

        "type": "singleChoice",

        "prompt": "Quelle terminaison marque souvent « je » ?",

        "options": [

          "-o",

          "-s",

          "-t",

          "-nt"

        ],

        "expected": "-o",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l6-t2",

        "type": "matching",

        "prompt": "Associe -o / -s / -t et la personne.",

        "pairs": [

          {

            "left": "-o",

            "right": "je"

          },

          {

            "left": "-s",

            "right": "tu"

          },

          {

            "left": "-t",

            "right": "il/elle"

          }

        ],

        "rightOptions": [

          "tu",

          "il/elle",

          "je"

        ],

        "expected": {

          "-o": "je",

          "-s": "tu",

          "-t": "il/elle"

        },

        "points": 1

      },

      {

        "id": "p3-l6-t3",

        "type": "singleChoice",

        "prompt": "« nego » signifie…",

        "options": [

          "je nie",

          "tu nies",

          "il/elle nie",

          "nous nions"

        ],

        "expected": "je nie",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l6-t4",

        "type": "singleChoice",

        "prompt": "« tu entends » =",

        "options": [

          "audis",

          "audio",

          "audit",

          "audimus"

        ],

        "expected": "audis",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l6-t5",

        "type": "multipleChoice",

        "prompt": "Choisis les formes de 1re personne.",

        "options": [

          "video",

          "nego",

          "habito",

          "rogas"

        ],

        "expected": [

          "video",

          "nego",

          "habito"

        ],

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l6-t6",

        "type": "singleChoice",

        "prompt": "Mini-témoignage : « Video virum. Nego rumorem. » Qui parle ?",

        "options": [

          "je",

          "tu",

          "il/elle",

          "ils/elles"

        ],

        "expected": "je",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l6-t7",

        "type": "textInput",

        "prompt": "Passe de la 1re à la 2e personne : « audio » devient « ... »",

        "expected": "audis",

        "acceptedAnswers": [

          "audis"

        ],

        "answerConfig": {

          "type": "one-of",

          "language": "latin",

          "accepted": [

            "audis"

          ]

        },

        "points": 1,

        "canonicalAnswer": "audis",

        "normalization": {

          "trim": true,

          "collapseSpaces": true,

          "ignoreCase": true,

          "ignorePunctuation": true,

          "normalizeApostrophes": true,

          "ignoreDiacritics": true

        },

        "gradingFocus": "Transformer correctement une forme du singulier.",

        "rejectIf": [

          "personne incorrecte",

          "réponse hors-sujet"

        ],

        "tests": [

          {

            "input": "audis",

            "isCorrect": true

          },

          {

            "input": "audio",

            "isCorrect": false

          }

        ]

      }

    ],

    "production": [

      {

        "id": "p3-l6-p1",

        "type": "textInput",

        "prompt": "Traduis : audio virum",

        "expected": "j'entends l'homme",

        "acceptedAnswers": [
  "j'entends l'homme",
  "j'entends cet homme",
  "j'écoute l'homme",
  "j'écoute cet homme"
],
"answerConfig": {
  "type": "translation-segment",
  "language": "fr",
  "accepted": [
    "j'entends l'homme",
    "j'entends cet homme",
    "j'écoute l'homme",
    "j'écoute cet homme"
  ]
},

        "points": 1,

        "canonicalAnswer": "j'entends l'homme",

        "normalization": {

          "trim": true,

          "collapseSpaces": true,

          "ignoreCase": true,

          "ignorePunctuation": true,

          "normalizeApostrophes": true,

          "ignoreDiacritics": true

        },

        "gradingFocus": "Compréhension correcte en français ; variantes lexicales recevables.",

        "rejectIf": [

          "verbe incorrect",

          "sens inversé sujet/objet",

          "forme latine impossible au niveau de la leçon"

        ],

        "tests": [

          {

            "input": "j'entends l'homme",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

      {

        "id": "p3-l6-p2",

        "type": "textInput",

        "prompt": "Traduis en latin : Je nie la rumeur.",

        "expected": "nego rumorem",

        "acceptedAnswers": [

          "nego rumorem",

          "rumorem nego",

          "ego nego rumorem",

          "ego rumorem nego",

          "nego ego rumorem",

          "nego rumorem ego",

          "rumorem ego nego",

          "rumorem nego ego"

        ],

        "answerConfig": {

          "type": "one-of",

          "language": "latin",

          "accepted": [

            "nego rumorem",

            "rumorem nego",

            "ego nego rumorem",

            "ego rumorem nego",

            "nego ego rumorem",

            "nego rumorem ego",

            "rumorem ego nego",

            "rumorem nego ego"

          ]

        },

        "points": 1,

        "canonicalAnswer": "nego rumorem",

        "normalization": {

          "trim": true,

          "collapseSpaces": true,

          "ignoreCase": true,

          "ignorePunctuation": true,

          "normalizeApostrophes": true,

          "ignoreDiacritics": true

        },

        "gradingFocus": "Morphologie et sens latin corrects ; ordre flexible accepté.",

        "rejectIf": [

          "verbe incorrect",

          "sens inversé sujet/objet",

          "forme latine impossible au niveau de la leçon"

        ],

        "tests": [

          {

            "input": "nego rumorem",

            "isCorrect": true

          },

          {

            "input": "lorem ipsum",

            "isCorrect": false

          }

        ]

      },

      {

        "id": "p3-l6-p3",

        "type": "textInput",

        "prompt": "Complète le témoignage avec les verbes « voir », « nier » et « entrer », conjugués à la bonne personne : « Ego virum ... ; tu rumorem ... ; ille in balneum ... »",

        "expected": "video ; negas ; intrat",

        "acceptedAnswers": [

          "video ; negas ; intrat",

          "video, negas, intrat",

          "video / negas / intrat",

          "video negas intrat"

        ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "latin",

          "accepted": [

            "video ; negas ; intrat",

            "video, negas, intrat",

            "video / negas / intrat",

            "video negas intrat"

          ]

        },

        "points": 1,

        "canonicalAnswer": "video ; negas ; intrat",

        "normalization": {

          "trim": true,

          "collapseSpaces": true,

          "ignoreCase": true,

          "ignorePunctuation": true,

          "normalizeApostrophes": true,

          "ignoreDiacritics": true

        },

        "gradingFocus": "Produire trois personnes du singulier dans une scène cohérente.",

        "rejectIf": [

          "forme verbale incorrecte",

          "personne incorrecte",

          "réponse hors-sujet"

        ],

        "tests": [

          {

            "input": "video ; negas ; intrat",

            "isCorrect": true

          },

          {

            "input": "video ; negat ; intrat",

            "isCorrect": false

          }

        ]

      }

    ],

    "summary": {

      "retains": [

        "-o = je ; -s = tu ; -t = il/elle",

        "video / vides / videt"

      ],

      "cahier": [

        "Je lis la terminaison du verbe pour savoir qui parle. 1ère conjugaison : -o = je, -as = tu, -at = il/elle, -amus = nous, -atis = vous, -ant = ils/elles.",

        "Je peux produire les trois personnes du singulier dans une mini-déposition. (Video = je vois, audis = tu entends, narrat = elle raconte...)"

      ],

      "keywords": [

        "bains",

        "présent singulier",

        "témoignage"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "p3",

        "balneum",

        "present-singulier"

      ]

    }

  },

  {

    "id": "p3-l7",

    "period": 3,

    "periodId": "p3",

    "title": "In foro - Présent pluriel",

    "subtitle": "Au forum, Subure vide enfin sa colère en plein jour, et les voisins se répondent et s'invectivent face à face au lieu de se mordre par rumeur interposée.",

    "objective": "Identifier nous / vous / ils-elles dans un débat public.",

    "lessonPoint": "Je lis la terminaison du verbe pour savoir quel groupe agit.",

    "canDo": [

      "Je reconnais les personnes du pluriel.",

      "Je lis un échange collectif.",

      "Je traduis une phrase au présent pluriel."

    ],

    "lexicon": [

      "forum, fori, n. = forum",
      "vicinus (sg.), vicini (pl.) = voisin, voisins",
      "mercator (sg.), mercatores (pl.) = marchand, marchands",
      "puella (sg.), puellae (pl.) = jeune fille, jeunes filles",
      "rumor (sg.), rumores (pl.) = rumeur, rumeurs",
      "verum (nom./acc.) = le vrai, la vérité",
      "in foro = sur le forum",
      "audio, audis, audit = j’entends, tu entends, il/elle entend",
      "audimus, auditis, audiunt = nous entendons, vous entendez, ils/elles entendent",
      "video, videmus = je vois ; nous voyons",
      "clamo, clamant = je crie ; ils/elles crient",
      "respondeo, respondent = je réponds ; ils/elles répondent",
      "quaero, quaerimus = je cherche ; nous cherchons"

    ],

    "maxScore": 10,

    "training": [

      {

        "id": "p3-l7-t1",

        "type": "singleChoice",

        "prompt": "Quelle forme correspond à « nous » ?",

        "options": [

          "quaerimus",

          "quaeris",

          "quaerit",

          "quaerunt"

        ],

        "expected": "quaerimus",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l7-t2",

        "type": "matching",

        "prompt": "Associe la terminaison et la personne.",

        "pairs": [

          {

            "left": "-mus",

            "right": "nous"

          },

          {

            "left": "-tis",

            "right": "vous"

          },

          {

            "left": "-nt",

            "right": "ils/elles"

          }

        ],

        "rightOptions": [

          "ils/elles",

          "vous",

          "nous"

        ],

        "expected": {

          "-mus": "nous",

          "-tis": "vous",

          "-nt": "ils/elles"

        },

        "points": 1

      },

      {

        "id": "p3-l7-t3",

        "type": "singleChoice",

        "prompt": "« vicini clamant » : qui crie ?",

        "options": [

          "les voisins",

          "le voisin",

          "la voisine",

          "le marchand"

        ],

        "expected": "les voisins",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l7-t4",

        "type": "singleChoice",

        "prompt": "Quelle forme est bien au pluriel ?",

        "options": [

          "respondent",

          "respondet",

          "respondes",

          "respondeo"

        ],

        "expected": "respondent",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l7-t5",

        "type": "multipleChoice",

        "prompt": "Repère les verbes au pluriel.",

        "options": [

          "videmus",

          "auditis",

          "clamant",

          "narrat"

        ],

        "expected": [

          "videmus",

          "auditis",

          "clamant"

        ],

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l7-t6",

        "type": "multipleChoice",

        "prompt": "Mini-texte : « Vicini clamant, mercatores respondent, puellae audiunt. » Coche les trois groupes de personnages mentionnés dans la scène.",

        "options": [

          "les voisins",

          "Les vaincus",
          
          "les marchands",

          "les jeunes filles",

          "les marcheurs"

        ],

        "expected": [

          "les voisins",

          "les marchands",

          "les jeunes filles"

        ],

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l7-t7",

        "type": "singleChoice",

        "prompt": "Dans « In foro vicini clamant », où crient les voisins ?",

        "options": [

          "au forum",

          "dans la maison",

          "à la fontaine",

          "au marché"

        ],

        "expected": "au forum",

        "shuffle": true,

        "points": 1

      }

    ],

    "production": [

      {

        "id": "p3-l7-p1",

        "type": "textInput",

        "prompt": "Traduis : Quaerimus verum",

        "expected": "nous cherchons la vérité",

        "acceptedAnswers":           [

            "nous cherchons la vérité",

            "nous cherchons le vrai",

            "nous cherchons ce qui est vrai",

            "nous recherchons la vérité",

            "nous recherchons le vrai",

            "nous recherchons ce qui est vrai"

          ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted":             [

              "nous cherchons la vérité",

              "nous cherchons le vrai",

              "nous cherchons ce qui est vrai"

            ],

          "synonyms":             [

              "nous recherchons la vérité",

              "nous recherchons le vrai",

              "nous recherchons ce qui est vrai"

            ]

        },

        "points": 1,

        "canonicalAnswer": "nous cherchons la vérité",

        "normalization": {

          "trim": true,

          "collapseSpaces": true,

          "ignoreCase": true,

          "ignorePunctuation": true,

          "normalizeApostrophes": true,

          "ignoreDiacritics": true

        },

        "gradingFocus": "Compréhension correcte en français ; variantes lexicales recevables.",

        "rejectIf": [

          "verbe incorrect",

          "sens inversé sujet/objet",

          "forme latine impossible au niveau de la leçon"

        ],

        "tests": [

          {

            "input": "nous cherchons la vérité",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

   {

  "id": "p3-l7-p2",

  "type": "textInput",

  "prompt": "Traduis en latin : Sur le forum, les voisins crient.",

  "expected": "vicini in foro clamant",

  "acceptedAnswers": [

    "vicini in foro clamant",

    "vicini clamant in foro",

    "in foro vicini clamant",

    "in foro clamant vicini",

    "clamant vicini in foro",

    "clamant in foro vicini"

  ],

  "answerConfig": {

    "type": "one-of",

    "language": "latin",

    "accepted": [

      "vicini in foro clamant",

      "vicini clamant in foro",

      "in foro vicini clamant",

      "in foro clamant vicini",

      "clamant vicini in foro",

      "clamant in foro vicini"

    ]

  },

  "points": 1,

  "canonicalAnswer": "vicini in foro clamant",

  "normalization": {

    "trim": true,

    "collapseSpaces": true,

    "ignoreCase": true,

    "ignorePunctuation": true,

    "normalizeApostrophes": true,

    "ignoreDiacritics": true

  },

  "gradingFocus": "Morphologie et sens latin corrects ; ordre flexible accepté.",

  "rejectIf": [

    "verbe incorrect",

    "sens inversé sujet/objet",

    "forme latine impossible au niveau de la leçon"

  ],

  "tests": [

    {

      "input": "vicini in foro clamant",

      "isCorrect": true

    },

    {

      "input": "lorem ipsum",

      "isCorrect": false

    }

  ]

},

      {

        "id": "p3-l7-p3",

        "type": "textInput",

        "prompt": "Complète à l'aide des verbes 'chercher', 'écouter', 'répondre' : « In foro nos ... ; vos ... ; illi ... »",

        "expected": "quaerimus ; auditis ; respondent",

        "acceptedAnswers": [

          "quaerimus ; auditis ; respondent",

          "quaerimus, auditis, respondent",

          "quaerimus / auditis / respondent",

          "quaerimus auditis respondent"

        ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "latin",

          "accepted": [

            "quaerimus ; auditis ; respondent",

            "quaerimus, auditis, respondent",

            "quaerimus / auditis / respondent",

            "quaerimus auditis respondent"

          ]

        },

        "points": 1,

        "canonicalAnswer": "quaerimus ; auditis ; respondent",

        "normalization": {

          "trim": true,

          "collapseSpaces": true,

          "ignoreCase": true,

          "ignorePunctuation": true,

          "normalizeApostrophes": true,

          "ignoreDiacritics": true

        },

        "gradingFocus": "Produire trois personnes du pluriel dans un échange collectif.",

        "rejectIf": [

          "forme verbale incorrecte",

          "personne incorrecte",

          "réponse hors-sujet"

        ],

        "tests": [

          {

            "input": "quaerimus ; auditis ; respondent",

            "isCorrect": true

          },

          {

            "input": "quaerimus ; audimus ; respondent",

            "isCorrect": false

          }

        ]

      }

    ],

    "summary": {

      "retains": [

        "Je reconnais les personnes du pluriel dans un échange collectif.",

        "Je peux produire des formes du pluriel à partir d'une scène à plusieurs."

      ],

      "cahier": [

        "-mus = nous ; -tis = vous ; -nt = ils/elles",

        "quaerimus / auditis / respondent"

      ],

      "keywords": [

        "forum",

        "présent pluriel",

        "débat"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "p3",

        "forum",

        "present-pluriel"

      ]

    }

  },

  {

    "id": "p3-l8",

    "period": 3,

    "periodId": "p3",

    "title": "Canis et porta obscura - Ordre des mots",

    "subtitle": "Niger retourne à la porte louche, gratte le bois, refuse d’entrer, et plus personne n’ose traiter ce manège comme un simple caprice.",

    "objective": "Lire une phrase à ordre variable sans se tromper sur le sens.",

    "lessonPoint": "Le sens dépend des formes et du verbe, pas seulement de la position des mots.",

    "canDo": [

      "Je lis des ordres variés.",

      "Je garde le même sens malgré l’ordre.",

      "Je produis une phrase latine correcte."

    ],

    "lexicon": [

      "canis, canis m. = chien",

      "porta, portae f. = porte",

      "vir, viri m. = homme",

      "obscurus, obscura, obscurum = sombre",

      "ante + acc. = devant",

      "ex + abl. = hors de, depuis",

      "clamo, clamas, clamat = je crie, tu cries, il/elle crie",

      "exeo, exis, exit = je sors, tu sors, il/elle sort",

      "latro, latras, latrat = j’aboie, tu aboies, il/elle aboie",

      "maneo, manes, manet = je reste, tu restes, il/elle reste",

      "timeo, times, timet = je crains, tu crains, il/elle craint",

      "recuso, recusas, recusat = je refuse, tu refuses, il/elle refuse",

      "intro, intras, intrat = j’entre, tu entres, il/elle entre",

      "audio, audis, audit = j’entends, tu entends, il/elle entend"

    ],

    "maxScore": 10,

    "training": [

      {

        "id": "p3-l8-t1",

        "type": "singleChoice",

        "prompt": "'latramus' signifie…",

        "options": [

          "J'aboie",

          "Vous volez",

          "Elles volent",

          "Nous aboyons"

        ],

        "expected": "Nous aboyons",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l8-t2",

        "type": "matching",

        "prompt": "Associe les mots-clés de la scène.",

        "pairs": [

          {

            "left": "canis",

            "right": "chien"

          },

          {

            "left": "porta",

            "right": "porte"

          },

          {

            "left": "ante",

            "right": "devant"

          },

          {

            "left": "obscura",

            "right": "sombre"

          }

        ],

        "rightOptions": [

          "sombre",

          "chien",

          "devant",

          "porte"

        ],

        "expected": {

          "canis": "chien",

          "porta": "porte",

          "ante": "devant",

          "obscura": "sombre"

        },

        "points": 1

      },

      {

        "id": "p3-l8-t3",

        "type": "singleChoice",

        "prompt": "« Ante portam obscuram canis latrat » : sens correct ?",

        "options": [

          "Le chien aboie devant la porte sombre",

          "La porte aboie devant le chien obscur",

          "Le chien passe par la porte obscure",

          "Le chien dort devant l'obscure latrine"

        ],

        "expected": "Le chien aboie devant la porte sombre",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l8-t4",

        "type": "singleChoice",

        "prompt": "« Latrat ante obscuram portam canis » : cette phrase garde-t-elle le même sens général ?",

        "options": [

          "oui",

          "non",

          "impossible",

          "on ne sait pas"

        ],

        "expected": "oui",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l8-t5",

        "type": "multipleChoice",

        "prompt": "Quelles phrases peuvent signifier « Le chien reste devant la porte » ?",

        "options": [

          "canis ante portam manet",

          "ante portam canis manet",

          "manet canis ante portam",

          "porta canem manet"

        ],

        "expected": [

          "canis ante portam manet",

          "ante portam canis manet",

          "manet canis ante portam"

        ],

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p3-l8-t6",

        "type": "singleChoice",

        "prompt": "Dans « manet ante portam canis », quel mot est le sujet ?",

        "options": [

          "manet",

          "ante",

          "portam",

          "canis"

        ],

        "expected": "canis",

        "shuffle": true,

        "points": 1

      },

     {

  "id": "p3-l8-t7",

  "type": "matching",

  "prompt": "Associe chaque mot à sa fonction dans « 𝘊𝘢𝘯𝘪𝘴 𝘱𝘰𝘳𝘵𝘢𝘮 𝘰𝘣𝘴𝘤𝘶𝘳𝘢𝘮 𝘵𝘪𝘮𝘦𝘵 𝘦𝘵 𝘳𝘦𝘤𝘶𝘴𝘢𝘵 ».",

  "pairs": [

    {

      "left": "canis",

      "right": "sujet"

    },

    {

      "left": "portam obscuram",

      "right": "COD"

    },

    {

      "left": "timet et recusat",

      "right": "verbes"

    }

  ],

  "rightOptions": [

    "sujet",

    "COD",

    "verbes"

  ],

  "expected": {

    "canis": "sujet",

    "portam obscuram": "COD",

    "timet et recusat": "verbes"

  },

  "points": 1

}

    ],

    "production": [

      {

        "id": "p3-l8-p1",

        "type": "textInput",

        "prompt": "Traduis : canis portam timet",

        "expected": "le chien craint la porte",

        "acceptedAnswers": [

          "le chien craint la porte",

  "le chien craint une porte",

  "le chien a peur de la porte",

  "le chien a peur d'une porte",

  "le chien redoute la porte",

  "le chien redoute une porte",

 

  "un chien craint la porte",

  "un chien craint une porte",

  "un chien a peur de la porte",

  "un chien a peur d'une porte",

  "un chien redoute la porte",

  "un chien redoute une porte"

        ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted": [

            "le chien craint la porte",

  "le chien craint une porte",

  "le chien a peur de la porte",

  "le chien a peur d'une porte",

  "le chien redoute la porte",

  "le chien redoute une porte",

 

  "un chien craint la porte",

  "un chien craint une porte",

  "un chien a peur de la porte",

  "un chien a peur d'une porte",

  "un chien redoute la porte",

  "un chien redoute une porte"

          ]

        },

        "points": 1,

        "canonicalAnswer": "le chien craint la porte",

        "normalization": {

          "trim": true,

          "collapseSpaces": true,

          "ignoreCase": true,

          "ignorePunctuation": true,

          "normalizeApostrophes": true,

          "ignoreDiacritics": true

        },

        "gradingFocus": "Compréhension correcte en français ; variantes lexicales recevables.",

        "rejectIf": [

          "verbe incorrect",

          "sens inversé sujet/objet",

          "forme latine impossible au niveau de la leçon"

        ],

        "tests": [

          {

            "input": "le chien craint la porte",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

            {

        "id": "p3-l8-p2",

        "type": "textInput",

        "prompt": "Traduis en latin : Le chien aboie devant la porte sombre.",

        "expected": "canis ante portam obscuram latrat",

        "acceptedAnswers": [

          "canis ante portam obscuram latrat",

          "canis latrat ante portam obscuram",

          "ante portam obscuram canis latrat",

          "ante portam obscuram latrat canis",

          "latrat canis ante portam obscuram",

          "latrat ante portam obscuram canis"

        ],

        "answerConfig": {

          "type": "one-of",

          "language": "latin",

          "accepted": [

            "canis ante portam obscuram latrat",

            "canis latrat ante portam obscuram",

            "ante portam obscuram canis latrat",

            "ante portam obscuram latrat canis",

            "latrat canis ante portam obscuram",

            "latrat ante portam obscuram canis"

          ]

        },

        "points": 1,

        "canonicalAnswer": "canis ante portam obscuram latrat",

        "normalization": {

          "trim": true,

          "collapseSpaces": true,

          "ignoreCase": true,

          "ignorePunctuation": true,

          "normalizeApostrophes": true,

          "ignoreDiacritics": true

        },

        "gradingFocus": "Morphologie et sens latin corrects ; ordre flexible accepté.",

        "rejectIf": [

          "verbe incorrect",

          "sens inversé sujet/objet",

          "forme latine impossible au niveau de la leçon"

        ],

        "tests": [

          {

            "input": "canis ante portam obscuram latrat",

            "isCorrect": true

          },

          {

            "input": "lorem ipsum",

            "isCorrect": false

          }

        ]

      },

     {

  "id": "p3-l8-p3",

  "type": "textInput",

  "prompt": "Traduis en français : « 𝘌𝘹 𝘱𝘰𝘳𝘵𝘢 𝘰𝘣𝘴𝘤𝘶𝘳𝘢 𝘷𝘪𝘳 𝘦𝘹𝘪𝘵 𝘦𝘵 𝘤𝘭𝘢𝘮𝘢𝘵. »",

  "expected": "un homme sort de la porte sombre et crie",

  "acceptedAnswers": [

    "un homme sort de la porte sombre et crie",

    "l'homme sort de la porte sombre et crie",

    "un homme sort d'une porte sombre et crie",

    "l'homme sort d'une porte sombre et crie",

 

    "un homme sort de la porte obscure et crie",

    "l'homme sort de la porte obscure et crie",

    "un homme sort d'une porte obscure et crie",

    "l'homme sort d'une porte obscure et crie",

 

    "un homme sort de la porte sombre et il crie",

    "l'homme sort de la porte sombre et il crie",

    "un homme sort d'une porte sombre et il crie",

    "l'homme sort d'une porte sombre et il crie",

 

    "un homme sort de la porte obscure et il crie",

    "l'homme sort de la porte obscure et il crie",

    "un homme sort d'une porte obscure et il crie",

    "l'homme sort d'une porte obscure et il crie"

  ],

  "answerConfig": {

    "type": "translation-segment",

    "language": "fr",

    "accepted": [

      "un homme sort de la porte sombre et crie",

      "l'homme sort de la porte sombre et crie",

      "un homme sort d'une porte sombre et crie",

      "l'homme sort d'une porte sombre et crie",

 

      "un homme sort de la porte obscure et crie",

      "l'homme sort de la porte obscure et crie",

      "un homme sort d'une porte obscure et crie",

      "l'homme sort d'une porte obscure et crie",

 

      "un homme sort de la porte sombre et il crie",

      "l'homme sort de la porte sombre et il crie",

      "un homme sort d'une porte sombre et il crie",

      "l'homme sort d'une porte sombre et il crie",

 

      "un homme sort de la porte obscure et il crie",

      "l'homme sort de la porte obscure et il crie",

      "un homme sort d'une porte obscure et il crie",

      "l'homme sort d'une porte obscure et il crie"

    ]

  },

  "points": 1,

  "canonicalAnswer": "un homme sort de la porte sombre et crie",

  "normalization": {

    "trim": true,

    "collapseSpaces": true,

    "ignoreCase": true,

    "ignorePunctuation": true,

    "normalizeApostrophes": true,

    "ignoreDiacritics": true

  },

  "gradingFocus": "Comprendre ex + ablatif, identifier le sujet vir et traduire correctement les deux verbes exit et clamat.",

  "rejectIf": [

    "contre-sens sur ex",

    "porta prise pour sujet",

    "omission d'un des deux verbes",

    "réponse hors-sujet"

  ],

  "tests": [

    {

      "input": "un homme sort de la porte sombre et crie",

      "isCorrect": true

    },

    {

      "input": "l'homme sort de la porte obscure et il crie",

      "isCorrect": true

    },

    {

      "input": "la porte sombre sort et l'homme crie",

      "isCorrect": false

    }

  ]

}

    ],

    "summary": {

      "retains": [

        "Je ne me fais pas piéger par l’ordre des mots.",

        "J'essaie de repérer les groupes de mots qui fonctionnent ensemble : 'ante portam'.",

        "Je regarde le verbe et les terminaisons avant de traduire."

      ],

      "cahier": [

        "canis ante portam obscuram manet",

        "Le sens dépend des terminaisons et du verbe, pas seulement de la place des mots."

      ],

      "keywords": [

        "ordre variable",

        "porte sombre",

        "canis"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "p3",

        "word-order",

        "porta-obscura"

      ]

    }

  },

 {

  "id": "p3-l9",

  "period": 3,

  "periodId": "p3",

  "title": "Sub porticu villae - Lieux et prépositions",

  "subtitle": "La fuite mène à une villa illuminée : sous le porche, un homme se cache pendant qu’un avocat célèbre reçoit pour un grand dîner.",

  "objective": "Suivre un déplacement et comprendre vers quel lieu précis mène la fuite.",

  "lessonPoint": "Je repère le verbe, puis je lis d’un bloc le groupe de lieu : per vias, in villam, sub porticu.",

  "canDo": [

    "Je suis un déplacement dans une phrase simple.",

    "Je distingue où l’on va et où l’on se cache.",

    "Je relie un nouveau lieu à l’enquête."

  ],

  "lexicon": [

      "vir, viri, m. = homme",
      "via, viae, f. = rue",
      "villa, villae, f. = villa, grande maison",
      "porticus, porticus, f. = porche, portique",
      "cena, cenae, f. = dîner, repas",
      "advocatus, advocati, m. = avocat",
      "magnus, magna, magnum = grand",
      "per + acc. = par, à travers",
      "in + acc. = dans, vers (mouvement vers un lieu)",
      "sub + abl. = sous (lieu où l’on est)",
      "curro, curris, currit = je cours, tu cours, il/elle court",
      "intro, intras, intrat = j’entre, tu entres, il/elle entre",
      "lateo, lates, latet = je me cache, tu te caches, il/elle se cache",
      "paro, paras, parat = je prépare, tu prépares, il/elle prépare"

],

  "maxScore": 10,

  "training": [

    {

      "id": "p3-l9-t1",

      "type": "matching",

      "prompt": "Associe chaque groupe latin à sa bonne lecture.",

      "pairs": [

        {

          "left": "per vias",

          "right": "à travers les rues"

        },

        {

          "left": "in villam",

          "right": "dans la villa"

        },

        {

          "left": "sub porticu",

          "right": "sous le porche"

        },

        {

          "left": "cena magna",

          "right": "un grand dîner"

        }

      ],

      "rightOptions": [

        "sous le porche",

        "à travers les rues",

        "un grand dîner",

        "dans la villa"

      ],

      "expected": {

        "per vias": "à travers les rues",

        "in villam": "dans la villa",

        "sub porticu": "sous le porche",

        "cena magna": "un grand dîner"

      },

      "points": 1

    },

    {

      "id": "p3-l9-t2",

      "type": "singleChoice",

      "prompt": "Dans « vir per vias currit », que fait l’homme ?",

      "options": [

        "il court à travers les rues",

        "il entre dans la villa",

        "il se cache sous le porche",

        "il prépare le dîner"

      ],

      "expected": "il court à travers les rues",

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p3-l9-t3",

      "type": "singleChoice",

      "prompt": "Dans « vir in villam intrat », où va l’homme ?",

      "options": [

        "dans la villa",

        "sous le porche",

        "à travers les rues",

        "près de la fontaine"

      ],

      "expected": "dans la villa",

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p3-l9-t4",

      "type": "singleChoice",

      "prompt": "Dans « vir sub porticu latet », quel groupe de mots indique précisément où l’homme se cache ?",

      "options": [

        "sub porticu",

        "vir sub",

        "vir latet",

        "in villam"

      ],

      "expected": "sub porticu",

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p3-l9-t5",

      "type": "multipleChoice",

      "prompt": "Lis ce mini-texte : « Advocatus cenam magnam parat. Vir in villam intrat. » Coche les deux informations justes.",

      "options": [

        "L’avocat prépare un grand dîner",

        "L’homme entre dans la villa",

        "L’homme quitte la villa",

        "L’avocat se cache sous le porche"

      ],

      "expected": [

        "L’avocat prépare un grand dîner",

        "L’homme entre dans la villa"

      ],

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p3-l9-t6",

      "type": "singleChoice",

      "prompt": "Lis : « Vir currit ; sub porticu latet. » Quelle reformulation correspond exactement à la scène ?",

      "options": [

        "Il fuit puis se cache",

        "Il dîne puis s’endort",

        "Il parle puis rit",

        "Il prépare puis vend un dîner"

      ],

      "expected": "Il fuit puis se cache",

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p3-l9-t7",

      "type": "multipleChoice",

      "prompt": "Mini-dossier : « Vir per vias currit. In villam intrat. Sub porticu latet. » Coche les trois étapes de la fuite.",

      "options": [

        "Il passe par les rues",

        "Il entre dans la villa",

        "Il se cache sous le porche",

        "Il retourne au marché"

      ],

      "expected": [

        "Il passe par les rues",

        "Il entre dans la villa",

        "Il se cache sous le porche"

      ],

      "shuffle": true,

      "points": 1

    }

  ],

  "production": [

    {

      "id": "p3-l9-p1",

      "type": "textInput",

      "prompt": "Traduis : vir sub porticu latet.",

      "expected": "l’homme se cache sous le porche",

     "acceptedAnswers": [

  "l’homme se cache sous le porche",

  "l’homme se cache sous un porche",

  "un homme se cache sous le porche",

  "un homme se cache sous un porche",

  "l’homme se cache sous le portique",

  "l’homme se cache sous un portique",

  "un homme se cache sous le portique",

  "un homme se cache sous un portique",

  "l’homme est caché sous le porche",

  "l’homme est caché sous un porche",

  "un homme est caché sous le porche",

  "un homme est caché sous un porche",

  "l’homme est caché sous le portique",

  "l’homme est caché sous un portique",

  "un homme est caché sous le portique",

  "un homme est caché sous un portique"

],

      "answerConfig": {

        "type": "translation-segment",

        "language": "fr",

        "accepted": [

          "l’homme se cache sous le porche",

  "l’homme se cache sous un porche",

  "un homme se cache sous le porche",

  "un homme se cache sous un porche",

  "l’homme se cache sous le portique",

  "l’homme se cache sous un portique",

  "un homme se cache sous le portique",

  "un homme se cache sous un portique",

  "l’homme est caché sous le porche",

  "l’homme est caché sous un porche",

  "un homme est caché sous le porche",

  "un homme est caché sous un porche",

  "l’homme est caché sous le portique",

  "l’homme est caché sous un portique",

  "un homme est caché sous le portique",

  "un homme est caché sous un portique"

        ]

      },

      "points": 1,

      "canonicalAnswer": "l’homme se cache sous le porche",

      "normalization": {

        "trim": true,

        "collapseSpaces": true,

        "ignoreCase": true,

        "ignorePunctuation": true,

        "normalizeApostrophes": true,

        "ignoreDiacritics": true

      },

      "gradingFocus": "Comprendre l’action et le groupe de lieu.",

      "rejectIf": [

        "sens inversé",

        "verbe principal mal compris",

        "lieu oublié ou faux"

      ],

      "tests": [

        {

          "input": "l'homme se cache sous le porche",

          "isCorrect": true

        },

        {

          "input": "l'homme entre dans la villa",

          "isCorrect": false

        }

      ]

    },

    {

      "id": "p3-l9-p2",

      "type": "textInput",

      "prompt": "Traduis en latin : L’homme entre dans la villa.",

      "expected": "vir in villam intrat",

      "acceptedAnswers": [

        "vir in villam intrat",

        "vir intrat in villam",

        "in villam vir intrat",

        "in villam intrat vir",

        "intrat vir in villam",

        "intrat in villam vir"

      ],

      "answerConfig": {

        "type": "one-of",

        "language": "latin",

        "accepted": [

          "vir in villam intrat",

          "vir intrat in villam",

          "in villam vir intrat",

          "in villam intrat vir",

          "intrat vir in villam",

          "intrat in villam vir"

        ]

      },

      "points": 1,

      "canonicalAnswer": "vir in villam intrat",

      "normalization": {

        "trim": true,

        "collapseSpaces": true,

        "ignoreCase": true,

        "ignorePunctuation": true,

        "normalizeApostrophes": true,

        "ignoreDiacritics": true

      },

      "gradingFocus": "Réinvestir le verbe de mouvement et le groupe de lieu avec in + accusatif.",

      "rejectIf": [

        "préposition absente",

        "verbe incorrect",

        "forme latine hors leçon"

      ],

      "tests": [

        {

          "input": "vir in villam intrat",

          "isCorrect": true

        },

        {

          "input": "vir sub porticu latet",

          "isCorrect": false

        }

      ]

    },

    {

  "id": "p3-l9-p3",

  "type": "textInput",

  "prompt": "Traduis : Vir in villam intrat ; advocatus cenam magnam parat.",

 "expected": "un homme entre dans la villa ; l’avocat prépare un grand dîner",

  "acceptedAnswers": [
  "l'homme entre dans la villa et l'avocat prépare un grand dîner",
  "un homme entre dans la villa et l'avocat prépare un grand dîner",
  "l'homme entre dans une villa et l'avocat prépare un grand dîner",
  "l'homme entre dans la grande maison et l'avocat prépare un grand dîner",
  "l'homme entre dans la villa, et l'avocat prépare un grand dîner",
  "l'homme entre dans la villa ; l'avocat prépare un grand dîner",
  "l'homme entre dans la villa et l'avocat prépare le dîner",
  "un homme entre dans la villa et l'avocat prépare le dîner"
],
"answerConfig": {
  "type": "translation-segment",
  "language": "fr",
  "tolerateArticles": true,
  "accepted": [
    "l'homme entre dans la villa et l'avocat prépare un grand dîner",
    "un homme entre dans la villa et l'avocat prépare un grand dîner",
    "l'homme entre dans une villa et l'avocat prépare un grand dîner",
    "l'homme entre dans la grande maison et l'avocat prépare un grand dîner",
    "l'homme entre dans la villa, et l'avocat prépare un grand dîner",
    "l'homme entre dans la villa ; l'avocat prépare un grand dîner",
    "l'homme entre dans la villa et l'avocat prépare le dîner",
    "un homme entre dans la villa et l'avocat prépare le dîner"
  ]
},

  "points": 1,

  "canonicalAnswer": "un homme entre dans la villa ; l’avocat prépare un grand dîner",

  "normalization": {

    "trim": true,

    "collapseSpaces": true,

    "ignoreCase": true,

    "ignorePunctuation": true,

    "normalizeApostrophes": true,

    "ignoreDiacritics": true

  },

  "gradingFocus": "Relier un mouvement vers un lieu et une action parallèle dans la scène.",

  "rejectIf": [

    "préposition mal comprise",

    "verbe principal mal compris",

    "contre-sens sur cena ou advocatus"

  ],

  "tests": [

    {

      "input": "un homme entre dans la villa l’avocat prépare un grand dîner",

      "isCorrect": true

    },

    {

      "input": "un homme se cache sous le porche l’avocat fuit",

      "isCorrect": false

    }

  ]

}

  ],

  "summary": {

    "retains": [

      "Je lis le déplacement grâce aux groupes de lieux : préposition + endroit.",

      "Je relie plusieurs actions brèves pour suivre une fuite."

    ],

    "cahier": [

      "in + accusatif = mouvement, direction",

      "per vias = à travers les rues ; in villam = dans la villa ; sub porticu = sous le porche",

      "Vir per vias currit, in villam intrat, sub porticu latet."

    ],

    "keywords": [

      "fuite",

      "villa",

      "porche"

    ]

  },

  "meta": {

    "status": "ready",

    "tags": [

      "p3",

      "villa",

      "fuite",

      "groupes-de-lieu"

    ]

  }

},

  {

  "id": "p3-l10",

  "period": 3,

  "periodId": "p3",

  "title": "In villa advocati - Le génitif",

  "subtitle": "L’homme louche a franchi la porte de la villa de l’avocat. Dans l’atrium, Marcus et Livia recoupent les indices : serviteur du maître, dîner du maître, tablette du maître. Intrus dangereux ou complice attendu ?",

  "objective": "Comprendre le génitif pour savoir à qui appartiennent la villa, le serviteur, la tablette et le dîner.",

  "lessonPoint": "Je repère le mot au génitif pour répondre à la question « de qui ? » ou « de quoi ? ».",

  "canDo": [

    "Je lis un groupe au génitif.",

    "Je comprends à qui appartient un lieu, un objet ou un repas.",

    "Je traduis une scène courte dans la villa de l’avocat."

  ],

  "lexicon": [

    "vir, viri m. = homme",

    "advocatus, advocati m. = avocat",

    "villa, villae f. = villa, grande maison",

    "ianua, ianuae f. = porte",

    "servus, servi m. = serviteur, esclave",

    "tabella, tabellae f. = tablette",

    "cena, cenae f. = dîner, repas",

    "atrium, atrii n. = atrium, hall",

    "titulus, tituli m. = écriteau, inscription",

    "in + acc. = dans, vers (mouvement)",

    "in + abl. = dans (lieu où l’on est)",

    "sub + abl. = sous (lieu où l’on est)",

    "paratus, parata, paratum = préparé, prête, préparé",

    "intro, intras, intrat = j’entre, tu entres, il/elle entre",

    "porto, portas, portat = je porte, tu portes, il/elle porte",

    "maneo, manes, manet = je reste, tu restes, il/elle reste",

    "paro, paras, parat = je prépare, tu prépares, il/elle prépare",

    "taceo, taces, tacet = je me tais, tu te tais, il/elle se tait"

  ],

  "maxScore": 10,

  "training": [

    {

      "id": "p3-l10-t1",

      "type": "matching",

      "prompt": "Le génitif est utilisé en latin pour traduire un complément du nom (un homme 'de main', un chapeau 'de paille'). Associe chaque groupe latin à sa bonne lecture.",

      "pairs": [

        {

          "left": "villa advocati",

          "right": "la villa de l’avocat"

        },

        {

          "left": "servus advocati",

          "right": "le serviteur de l’avocat"

        },

        {

          "left": "cena advocati",

          "right": "le dîner de l’avocat"

        },

        {

          "left": "ianua villae",

          "right": "la porte de la villa"

        }

      ],

      "rightOptions": [

        "la porte de la villa",

        "le dîner de l’avocat",

        "la villa de l’avocat",

        "le serviteur de l’avocat"

      ],

      "expected": {

        "villa advocati": "la villa de l’avocat",

        "servus advocati": "le serviteur de l’avocat",

        "cena advocati": "le dîner de l’avocat",

        "ianua villae": "la porte de la villa"

      },

      "points": 1

    },

    {

      "id": "p3-l10-t2",

      "type": "singleChoice",

      "prompt": "Dans « vir in villam advocati intrat », où l’homme entre-t-il ?",

      "options": [

        "dans la villa de l’avocat",

        "dans la rue de la voisine",

        "sous le marché",

        "dans la tablette du serviteur"

      ],

      "expected": "dans la villa de l’avocat",

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p3-l10-t3",

      "type": "singleChoice",

      "prompt": "Dans « servus advocati tabellam portat », qui porte la tablette ?",

      "options": [

        "le serviteur de l’avocat",

        "l’avocat du serviteur",

        "la tablette de l’avocat",

        "la porte de la villa"

      ],

      "expected": "le serviteur de l’avocat",

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p3-l10-t4",

      "type": "singleChoice",

      "prompt": "Dans « servus advocati », quel mot veut dire « de l’avocat » ?",

      "options": [

        "servus",

        "advocati",

        "tacet",

        "tabellam"

      ],

      "expected": "advocati",

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p3-l10-t5",

      "type": "singleChoice",

      "prompt": "Dans « ianua villae », quel mot est au génitif ?",

      "options": [

        "ianua",

        "villae",

        "in",

        "portat"

      ],

      "expected": "villae",

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p3-l10-t6",

      "type": "multipleChoice",

      "prompt": "Mini-texte : « In atrio villae servus advocati tacet. Cena advocati parata est. » Coche les deux informations justes.",

      "options": [

        "Le serviteur de l’avocat se tait dans l’atrium de la villa",

        "Le dîner de l’avocat est prêt",

        "L’avocat fuit dans la rue",

        "La tablette est sous la fontaine"

      ],

      "expected": [

        "Le serviteur de l’avocat se tait dans l’atrium de la villa",

        "Le dîner de l’avocat est prêt"

      ],

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p3-l10-t7",

      "type": "singleChoice",

      "prompt": "Mini-dossier : « Vir in villam advocati intrat. Servus advocati tacet. » Quelle information est bien présente dans ce court texte ?",

      "options": [

        "L’homme entre dans une maison bien précise, celle de l’avocat",

        "Le serviteur quitte la villa pour courir au forum",

        "L’avocat entre chez le serviteur",

        "Le dîner se déroule dans la rue"

      ],

      "expected": "L’homme entre dans une maison bien précise, celle de l’avocat",

      "shuffle": true,

      "points": 1

    }

  ],

  "production": [

    {

      "id": "p3-l10-p1",

      "type": "textInput",

      "prompt": "Traduis : Servus advocati tacet.",

      "expected": "le serviteur de l’avocat se tait",

      "acceptedAnswers": [

        "le serviteur de l’avocat se tait",

        "un serviteur de l’avocat se tait",

        "le serviteur de l’avocat garde le silence",

        "un serviteur de l’avocat garde le silence",

        "l’esclave de l’avocat se tait",

        "un esclave de l’avocat se tait",

        "l’esclave de l’avocat garde le silence",

        "un esclave de l’avocat garde le silence"

      ],

      "answerConfig": {

        "type": "translation-segment",

        "language": "fr",

        "accepted": [

          "le serviteur de l’avocat se tait",

          "un serviteur de l’avocat se tait",

          "le serviteur de l’avocat garde le silence",

          "un serviteur de l’avocat garde le silence",

          "l’esclave de l’avocat se tait",

          "un esclave de l’avocat se tait",

          "l’esclave de l’avocat garde le silence",

          "un esclave de l’avocat garde le silence"

        ]

      },

      "points": 1,

      "canonicalAnswer": "le serviteur de l’avocat se tait",

      "normalization": {

        "trim": true,

        "collapseSpaces": true,

        "ignoreCase": true,

        "ignorePunctuation": true,

        "normalizeApostrophes": true,

        "ignoreDiacritics": true,

        "ignoreFrenchDeterminers": true

      },

      "gradingFocus": "Lire correctement le génitif et traduire une action brève.",

      "rejectIf": [

        "sens inversé",

        "génitif ignoré",

        "verbe principal mal compris"

      ],

      "tests": [

        {

          "input": "un serviteur de l’avocat se tait",

          "isCorrect": true

        },

        {

          "input": "le serviteur entre chez l’avocat",

          "isCorrect": false

        }

      ]

    },

    {

      "id": "p3-l10-p2",

      "type": "textInput",

      "prompt": "'Le serviteur de l'avocat porte une tablette.' Complète en latin : servus ____ tabellam portat.",

      "expected": "advocati",

      "acceptedAnswers": [

        "advocati"

      ],

      "answerConfig": {

        "type": "one-of",

        "language": "latin",

        "accepted": [

          "advocati"

        ]

      },

      "points": 1,

      "canonicalAnswer": "advocati",

      "normalization": {

        "trim": true,

        "collapseSpaces": true,

        "ignoreCase": true,

        "ignorePunctuation": true,

        "normalizeApostrophes": true,

        "ignoreDiacritics": true

      },

      "gradingFocus": "Produire le génitif attendu dans un groupe nominal simple.",

      "rejectIf": [

        "nominatif au lieu du génitif",

        "mot hors leçon",

        "réponse vide"

      ],

      "tests": [

        {

          "input": "advocati",

          "isCorrect": true

        },

        {

          "input": "advocatus",

          "isCorrect": false

        }

      ]

    },

    {

  "id": "p3-l10-p3",

  "type": "textInput",

  "prompt": "Traduis : In villa advocati servus cenam parat ; vir sub porticu manet.",

  "expected": "dans la villa de l’avocat, le serviteur prépare le dîner ; l’homme reste sous le porche",

 "acceptedAnswers": [
  "dans la villa de l'avocat, le serviteur prépare le dîner et l'homme reste sous le porche",
  "dans la villa de l'avocat, l'esclave prépare le dîner et l'homme reste sous le porche",
  "dans la villa de l'avocat, le serviteur prépare le repas et l'homme reste sous le porche",
  "dans la villa de l'avocat, le serviteur prépare le dîner et l'homme reste sous le portique",
  "dans la villa de l'avocat, le serviteur prépare le dîner, et l'homme reste sous le porche",
  "dans la villa de l'avocat ; le serviteur prépare le dîner et l'homme reste sous le porche"
],
"answerConfig": {
  "type": "translation-segment",
  "language": "fr",
  "tolerateArticles": true,
  "accepted": [
    "dans la villa de l'avocat, le serviteur prépare le dîner et l'homme reste sous le porche",
    "dans la villa de l'avocat, l'esclave prépare le dîner et l'homme reste sous le porche",
    "dans la villa de l'avocat, le serviteur prépare le repas et l'homme reste sous le porche",
    "dans la villa de l'avocat, le serviteur prépare le dîner et l'homme reste sous le portique",
    "dans la villa de l'avocat, le serviteur prépare le dîner, et l'homme reste sous le porche",
    "dans la villa de l'avocat ; le serviteur prépare le dîner et l'homme reste sous le porche"
  ]
},

  "points": 1,

  "canonicalAnswer": "dans la villa de l’avocat le serviteur prépare le dîner l’homme reste sous le porche",

  "normalization": {

    "trim": true,

    "collapseSpaces": true,

    "ignoreCase": true,

    "ignorePunctuation": true,

    "normalizeApostrophes": true,

    "ignoreDiacritics": true

  },

  "gradingFocus": "Comprendre villa advocati, servus, cenam parat et sub porticu manet, sans pénaliser les variations de déterminants.",

  "rejectIf": [

    "contre-sens sur advocati",

    "contre-sens sur servus",

    "contre-sens sur cenam",

    "contre-sens sur sub porticu",

    "réponse hors-sujet"

  ],

  "tests": [

    {

      "input": "dans une villa d’un avocat un serviteur prépare un dîner un homme reste sous un porche",

      "isCorrect": true

    },

    {

      "input": "dans la grande maison de l’avocat l’esclave prépare le repas l’homme reste sous le portique",

      "isCorrect": true

    },

    {

      "input": "dans la villa de l’avocat le serviteur mange le dîner l’homme reste sous le porche",

      "isCorrect": false

    }

  ]

}

  ],

  "summary": {

    "retains": [

      "Je repère le génitif pour comprendre de qui est un lieu, un objet ou un repas.",

      "Je lis mieux les liens dans la villa de l’avocat : servus advocati, cena advocati, ianua villae."

    ],

    "cahier": [

      "servus advocati = le serviteur de l’avocat",

      "ianua villae = la porte de la villa"

    ],

    "keywords": [

      "génitif",

      "villa",

      "avocat"

    ]

  },

  "meta": {

    "status": "ready",

    "tags": [

      "p3",

      "genitif",

      "villa",

      "advocatus"

   ]

    }

  },

{

  "id": "p3-l11",

  "period": 3,

  "periodId": "p3",

  "title": "Amicus advocati - Le génitif",

  "subtitle": "Le serviteur de l’avocat voit l’homme, n’appelle personne, puis ouvre la porte. Intrus dangereux ou complice attendu ?",

  "objective": "Réinvestir le génitif et lire plusieurs indices courts pour décider si l’homme semble connu de la maison.",

  "lessonPoint": "Je lis les phrases l’une après l’autre et j’additionne les indices.",

  "canDo": [

    "Je lis un indice bref dans une scène continue.",

    "Je comprends un groupe au génitif dans la maison de l’avocat.",

    "Je traduis une conclusion simple à partir de plusieurs signes."

  ],

  "lexicon": [

    "vir, viri m. = homme",

    "advocatus, advocati m. = avocat",

    "servus, servi m. = serviteur, esclave",

    "villa, villae f. = villa, grande maison",

    "ianua, ianuae f. = porte",

    "atrium, atrii n. = atrium, hall",

    "tabella, tabellae f. = tablette",

    "amicus, amici m. = ami",
    "eum = le, lui",

    "periculosus, periculosa, periculosum = dangereux",

    "non = ne ... pas, non",

    "et = et",

    "deinde = puis, après cela",

    "in + acc. = dans, vers (mouvement)",

    "in + abl. = dans (lieu où l’on est)",

    "video, vides, videt = je vois, tu vois, il/elle voit",

    "clamo, clamas, clamat = je crie, tu cries, il/elle crie",

    "aperio, aperis, aperit = j’ouvre, tu ouvres, il/elle ouvre",

    "porto, portas, portat = je porte, tu portes, il/elle porte",

    "teneo, tenes, tenet = je tiens, tu tiens, il/elle tient",

    "sum, es, est = je suis, tu es, il/elle est"

  ],

  "maxScore": 10,

  "training": [

    {

      "id": "p3-l11-t1",

      "type": "matching",

      "prompt": "Associe chaque groupe latin à sa bonne lecture.",

      "pairs": [

        {

          "left": "servus advocati",

          "right": "le serviteur de l’avocat"

        },

        {

          "left": "villa advocati",

          "right": "la villa de l’avocat"

        },

        {

          "left": "tabella advocati",

          "right": "la tablette de l’avocat"

        },

        {

          "left": "amicus advocati",

          "right": "l’ami de l’avocat"

        }

      ],

      "rightOptions": [

        "la tablette de l’avocat",

        "l’ami de l’avocat",

        "le serviteur de l’avocat",

        "la villa de l’avocat"

      ],

      "expected": {

        "servus advocati": "le serviteur de l’avocat",

        "villa advocati": "la villa de l’avocat",

        "tabella advocati": "la tablette de l’avocat",

        "amicus advocati": "l’ami de l’avocat"

      },

      "points": 1

    },

    {

      "id": "p3-l11-t2",

      "type": "singleChoice",

      "prompt": "Dans « servus ianuam aperit », que fait le serviteur ?",

      "options": [

        "il ouvre la porte",

        "il ferme la porte",

        "il cache la tablette",

        "il quitte la villa"

      ],

      "expected": "il ouvre la porte",

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p3-l11-t3",

      "type": "singleChoice",

      "prompt": "Dans « servus virum videt et non clamat », quel indice nouveau apparaît ?",

      "options": [

        "le serviteur voit l’homme mais ne crie pas",

        "le serviteur court dans la rue en criant",

        "l’homme porte l’avocat qui hurle",

        "la tablette ouvre la porte qui grince"

      ],

      "expected": "le serviteur voit l’homme mais ne crie pas",

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p3-l11-t4",

      "type": "multipleChoice",

      "prompt": "Mini-texte : « Servus virum videt. Non clamat. Ianuam aperit. » Coche les trois signes qui font penser que l’homme n’est peut-être pas considéré comme un intrus.",

      "options": [

        "le serviteur voit l’homme",

        "il ne crie pas",

        "il ouvre la porte",

        "il fuit jusqu’au forum"

      ],

      "expected": [

        "le serviteur voit l’homme",

        "il ne crie pas",

        "il ouvre la porte"

      ],

      "shuffle": true,

      "points": 1

    },

        {

      "id": "p3-l11-t5",

      "type": "singleChoice",

      "prompt": "Dans « amicus advocati », quelle traduction + association de cas latin / fonction française correspond à « advocati » ?",

      "options": [

        "pour l'avocat : ablatif / CC de but",

        "de l'avocat : génitif / Compl. du nom",

        "avec l'avocat : accusatif / COD",

        "par l'avocat : nominatif / sujet"

      ],

      "expected": "de l'avocat : génitif / Compl. du nom",

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p3-l11-t6",

      "type": "singleChoice",

      "prompt": "« vir amicus advocati est » signifie…",

      "options": [

        "l’homme est un ami de l’avocat",

        "l’avocat est un ami de l’homme",

        "le serviteur est dangereux",

        "la porte est dans l’ami"

      ],

      "expected": "l’homme est un ami de l’avocat",

      "shuffle": true,

      "points": 1

    },

   {

  "id": "p3-l11-t7",

  "type": "singleChoice",

  "prompt": "Mini-dossier : « Servus ad ianuam venit. Vir tabellam advocati tenet. Servus eum spectat, deinde ianuam aperit. » Dans « vir tabellam advocati tenet », quel mot est au génitif ?",

  "options": [

    "vir",

    "tabellam",

    "advocati",

    "tenet"

  ],

  "expected": "advocati",

  "shuffle": true,

  "points": 1

}

  ],

  "production": [

    {

      "id": "p3-l11-p1",

      "type": "textInput",

      "prompt": "Traduis : servus ianuam aperit.",

      "expected": "le serviteur ouvre la porte",

     "acceptedAnswers": [
  "le serviteur ouvre la porte",
  "un serviteur ouvre la porte",
  "l'esclave ouvre la porte",
  "un esclave ouvre la porte",
  "le serviteur ouvre cette porte",
  "l'esclave ouvre cette porte"
],
"answerConfig": {
  "type": "translation-segment",
  "language": "fr",
  "accepted": [
    "le serviteur ouvre la porte",
    "un serviteur ouvre la porte",
    "l'esclave ouvre la porte",
    "un esclave ouvre la porte",
    "le serviteur ouvre cette porte",
    "l'esclave ouvre cette porte"
  ]
},

      "points": 1,

      "canonicalAnswer": "le serviteur ouvre la porte",

      "normalization": {

        "trim": true,

        "collapseSpaces": true,

        "ignoreCase": true,

        "ignorePunctuation": true,

        "normalizeApostrophes": true,

        "ignoreDiacritics": true,

        "ignoreFrenchDeterminers": true

      },

      "gradingFocus": "Traduire proprement une action brève et concrète.",

      "rejectIf": [

        "verbe principal mal compris",

        "contre-sens sur ianuam",

        "réponse hors-sujet"

      ],

      "tests": [

        {

          "input": "un serviteur ouvre la porte",

          "isCorrect": true

        },

        {

          "input": "le serviteur ferme la porte",

          "isCorrect": false

        }

      ]

    },

    {

      "id": "p3-l11-p2",

      "type": "textInput",

      "prompt": "'L'homme est un ami de l'avocat.' Complète en latin : vir amicus ____ est.",

      "expected": "advocati",

      "acceptedAnswers": [

        "advocati"

      ],

      "answerConfig": {

        "type": "one-of",

        "language": "latin",

        "accepted": [

          "advocati"

        ]

      },

      "points": 1,

      "canonicalAnswer": "advocati",

      "normalization": {

        "trim": true,

        "collapseSpaces": true,

        "ignoreCase": true,

        "ignorePunctuation": true,

        "normalizeApostrophes": true,

        "ignoreDiacritics": true

      },

      "gradingFocus": "Produire le génitif attendu dans un groupe simple.",

      "rejectIf": [

        "nominatif au lieu du génitif",

        "mot hors leçon",

        "réponse vide"

      ],

      "tests": [

        {

          "input": "advocati",

          "isCorrect": true

        },

        {

          "input": "advocatus",

          "isCorrect": false

        }

      ]

    },

    {

      "id": "p3-l11-p3",

      "type": "textInput",

      "prompt": "Traduis : Servus advocati ianuam aperit ; vir amicus advocati est.",

      "expected": "le serviteur de l’avocat ouvre la porte ; l’homme est un ami de l’avocat",

     "acceptedAnswers": [
  "le serviteur de l'avocat ouvre la porte et l'homme est un ami de l'avocat",
  "l'esclave de l'avocat ouvre la porte et l'homme est un ami de l'avocat",
  "le serviteur de l'avocat ouvre la porte et l'homme est l'ami de l'avocat",
  "le serviteur de l'avocat ouvre la porte, et l'homme est un ami de l'avocat",
  "le serviteur de l'avocat ouvre la porte ; l'homme est un ami de l'avocat"
],
"answerConfig": {
  "type": "translation-segment",
  "language": "fr",
  "tolerateArticles": true,
  "accepted": [
    "le serviteur de l'avocat ouvre la porte et l'homme est un ami de l'avocat",
    "l'esclave de l'avocat ouvre la porte et l'homme est un ami de l'avocat",
    "le serviteur de l'avocat ouvre la porte et l'homme est l'ami de l'avocat",
    "le serviteur de l'avocat ouvre la porte, et l'homme est un ami de l'avocat",
    "le serviteur de l'avocat ouvre la porte ; l'homme est un ami de l'avocat"
  ]
},

      "points": 1,

      "canonicalAnswer": "le serviteur de l’avocat ouvre la porte ; l’homme est un ami de l’avocat",

      "normalization": {

        "trim": true,

        "collapseSpaces": true,

        "ignoreCase": true,

        "ignorePunctuation": true,

        "normalizeApostrophes": true,

        "ignoreDiacritics": true,

        "ignoreFrenchDeterminers": true

      },

      "gradingFocus": "Réinvestir le génitif et conclure la lecture des indices dans une phrase-bilan.",

      "rejectIf": [

        "génitif ignoré",

        "contre-sens sur amicus",

        "verbe principal mal compris"

      ],

      "tests": [

        {

          "input": "le serviteur de l’avocat ouvre la porte l’homme est un ami de l’avocat",

          "isCorrect": true

        },

        {

          "input": "le serviteur de l’homme ouvre la porte l’avocat est un ami",

          "isCorrect": false

        }

      ]

    }

  ],

  "summary": {

    "retains": [

      "Je lis plusieurs indices courts avant de conclure.",

      "Je repère le génitif pour comprendre qui appartient à la maison de l’avocat."

    ],

    "cahier": [

      "servus advocati = le serviteur de l’avocat",

      "amicus advocati = l’ami de l’avocat",

      "Prépositions : deinde = puis, après cela"

    ],

    "keywords": [

      "indices",

      "serviteur",

      "génitif"

    ]

  },

  "meta": {

    "status": "ready",

    "tags": [

      "p3",

      "villa",

      "servus",

      "genitif",

      "indices"

    ]

  }

},

  {

  "id": "p3-l12",

  "period": 3,

  "periodId": "p3",

  "title": "Vestigium extra oppidum - Synthèse",

  "subtitle": "De nuit, dans les jardins de l’avocat éclairés par les chandelles, plusieurs figures de Subure reviennent avec des flambeaux et fouillent les lieux. Puis une trace apparaît : elle mène hors de la ville. Le danger s’éloigne. Pour le moment.",

  "objective": "Relire toute l’enquête dans une scène nocturne finale et comprendre où mène la trace découverte.",

  "lessonPoint": "Je repère qui agit, ce qui est cherché, et à quel lieu mène la trace.",

  "canDo": [

    "Je lis une scène nocturne continue en latin simple.",

    "Je repère le génitif dans des groupes comme porta oppidi ou vicini Suburae.",

    "Je comprends la conclusion d’un mini-dossier d’indices."

  ],

  "lexicon": [

      "Subura, Suburae f. = Subure",

      "vicinus, vicini m. = voisin, habitant du quartier",

      "puella, puellae f. = jeune fille",

      "servus, servi m. = serviteur, esclave",

      "advocatus, advocati m. = avocat",

      "hortus, horti m. = jardin",

      "taeda, taedae f. = flambeau, torche",

      "candela, candelae f. = chandelle, bougie",

      "vestigium, vestigii n. = trace, piste",

      "porta, portae f. = porte",

      "oppidum, oppidi n. = ville",

      "per + acc. = à travers",

      "ad + acc. = vers, jusqu’à",

      "extra + acc. = hors de",

      "illumino, illuminas, illuminat = j’éclaire, tu éclaires, il/elle éclaire",

      "porto, portas, portat = je porte, tu portes, il/elle porte",

      "quaero, quaeris, quaerit = je cherche, tu cherches, il/elle cherche",

      "video, vides, videt = je vois, tu vois, il/elle voit",

      "invenio, invenis, invenit = je trouve, tu trouves, il/elle trouve",

      "duco, ducis, ducit = je mène, tu mènes, il/elle mène"

  ],

  "maxScore": 10,

  "training": [

    {

      "id": "p3-l12-t1",

      "type": "matching",

      "prompt": "Associe chaque mot latin à sa bonne traduction.",

      "pairs": [

        {

          "left": "hortus",

          "right": "jardin"

        },

        {

          "left": "taeda",

          "right": "flambeau"

        },

        {

          "left": "vestigium",

          "right": "trace"

        },

        {

          "left": "oppidum",

          "right": "ville"

        }

      ],

      "rightOptions": [

        "trace",

        "ville",

        "jardin",

        "flambeau"

      ],

      "expected": {

        "hortus": "jardin",

        "taeda": "flambeau",

        "vestigium": "trace",

        "oppidum": "ville"

      },

      "points": 1

    },

    {

      "id": "p3-l12-t2",

      "type": "singleChoice",

      "prompt": "« Taedae hortum illuminant » signifie…",

      "options": [

        "Les flambeaux éclairent le jardin",

        "Les jardins portent les flambeaux",

        "La trace éclaire la porte",

        "Le serviteur cache la chandelle"

      ],

      "expected": "Les flambeaux éclairent le jardin",

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p3-l12-t3",

      "type": "singleChoice",

      "prompt": "Dans « vicini Suburae taedas portant », qui apporte les flambeaux ?",

      "options": [

        "les habitants de Subure",

        "les serviteurs de la villa",

        "les portes de la ville",

        "les traces du jardin"

      ],

      "expected": "les habitants de Subure",

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p3-l12-t4",

      "type": "multipleChoice",

      "prompt": "Mini-texte : « Servus advocati candelas portat. Puella vestigium videt. Vicini hortum quaerunt. » Coche les trois informations justes.",

      "options": [

        "Le serviteur de l’avocat porte les chandelles",

        "La jeune fille voit une trace",

        "Les habitants cherchent dans le jardin",

        "L’avocat fuit hors de la ville"

      ],

      "expected": [

        "Le serviteur de l’avocat porte les chandelles",

        "La jeune fille voit une trace",

        "Les habitants cherchent dans le jardin"

      ],

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p3-l12-t5",

      "type": "singleChoice",

      "prompt": "Dans « porta oppidi », quel mot veut dire « de la ville » ?",

      "options": [

        "porta",

        "oppidi",

        "vestigium",

        "taedae"

      ],

      "expected": "oppidi",

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p3-l12-t6",

      "type": "singleChoice",

      "prompt": "« Vestigium ad portam oppidi ducit » signifie…",

      "options": [

        "La trace mène vers la porte de la ville",

        "La porte porte la trace jusqu’au jardin",

        "Le serviteur mène la ville vers la porte",

        "Le flambeau sort du jardin"

      ],

      "expected": "La trace mène vers la porte de la ville",

      "shuffle": true,

      "points": 1

    },

  {

  "id": "p3-l12-t7",

  "type": "singleChoice",

  "prompt": "Mini-dossier : « Taedae hortum illuminant. Vicini Suburae hortum quaerunt. Puella vestigium invenit. Vestigium extra oppidum ducit. » Où mène explicitement la trace ?",

  "options": [

    "hors de la ville",

    "dans la villa",

    "au dîner de l’avocat",

    "au forum"

  ],

  "expected": "hors de la ville",

  "shuffle": true,

  "points": 1

}

  ],

  "production": [

    {

      "id": "p3-l12-p1",

      "type": "textInput",

      "prompt": "Traduis : Taedae hortum illuminant.",

      "expected": "les flambeaux éclairent le jardin",

     "acceptedAnswers": [
  "les flambeaux éclairent le jardin",
  "des flambeaux éclairent le jardin",
  "les torches éclairent le jardin",
  "des torches éclairent le jardin",
  "les flambeaux illuminent le jardin",
  "des flambeaux illuminent le jardin",
  "les torches illuminent le jardin",
  "des torches illuminent le jardin"
],
"answerConfig": {
  "type": "translation-segment",
  "language": "fr",
  "accepted": [
    "les flambeaux éclairent le jardin",
    "des flambeaux éclairent le jardin",
    "les torches éclairent le jardin",
    "des torches éclairent le jardin"
  ],
  "synonyms": [
    "les flambeaux illuminent le jardin",
    "des flambeaux illuminent le jardin",
    "les torches illuminent le jardin",
    "des torches illuminent le jardin"
  ]
},

      "points": 1,

      "canonicalAnswer": "les flambeaux éclairent le jardin",

      "normalization": {

        "trim": true,

        "collapseSpaces": true,

        "ignoreCase": true,

        "ignorePunctuation": true,

        "normalizeApostrophes": true,

        "ignoreDiacritics": true,

        "ignoreFrenchDeterminers": true

      },

      "gradingFocus": "Traduire correctement un sujet pluriel, un verbe au présent et un COD simple.",

      "rejectIf": [

        "verbe principal mal compris",

        "contre-sens sur hortum",

        "réponse hors-sujet"

      ],

      "tests": [

        {

          "input": "les flambeaux éclairent le jardin",

          "isCorrect": true

        },

        {

          "input": "les flambeaux quittent le jardin",

          "isCorrect": false

        }

      ]

    },

        {

      "id": "p3-l12-p2",

      "type": "textInput",

      "prompt": "'Les portes de la ville.' - Traduis en latin : ____ oppidi",

      "expected": "portae",

      "acceptedAnswers": [

        "portae"

      ],

      "answerConfig": {

        "type": "one-of",

        "language": "latin",

        "accepted": [

          "portae"

        ]

      },

      "points": 1,

      "canonicalAnswer": "portae",

      "normalization": {

        "trim": true,

        "collapseSpaces": true,

        "ignoreCase": true,

        "ignorePunctuation": true,

        "normalizeApostrophes": true,

        "ignoreDiacritics": true

      },

      "gradingFocus": "Ne pas confondre singulier et pluriel dans un groupe nominal simple.",

      "rejectIf": [

        "singulier au lieu du pluriel",

        "mot hors leçon",

        "réponse vide"

      ],

      "tests": [

        {

          "input": "portae",

          "isCorrect": true

        },

        {

          "input": "porta",

          "isCorrect": false

        }

      ]

    },

    {

      "id": "p3-l12-p3",

      "type": "textInput",

      "prompt": "Traduis : Vicini Suburae taedas portant ; vestigium extra oppidum ducit.",

      "expected": "les habitants de Subure portent des flambeaux ; la trace mène hors de la ville",

     "acceptedAnswers": [
  "les habitants de subure portent des flambeaux et la trace mène hors de la ville",
  "les habitants de subure portent les flambeaux et la trace mène hors de la ville",
  "les habitants de subure portent des torches et la trace mène hors de la ville",
  "les habitants de subure portent les torches et la trace mène hors de la ville",
  "les voisins de subure portent des flambeaux et la trace mène hors de la ville",
  "les voisins de subure portent les flambeaux et la trace mène hors de la ville",
  "les voisins de subure portent des torches et la trace mène hors de la ville",
  "les voisins de subure portent les torches et la trace mène hors de la ville",
  "les habitants de subure portent des flambeaux et la piste mène hors de la ville",
  "les habitants de subure portent des torches et la piste mène hors de la ville",
  "les voisins de subure portent des flambeaux et la piste mène hors de la ville",
  "les voisins de subure portent des torches et la piste mène hors de la ville",
  "les habitants de subure portent des flambeaux, et la trace mène hors de la ville",
  "les habitants de subure portent des flambeaux ; la trace mène hors de la ville"
],
"answerConfig": {
  "type": "translation-segment",
  "language": "fr",
  "tolerateArticles": true,
  "accepted": [
    "les habitants de subure portent des flambeaux et la trace mène hors de la ville",
    "les habitants de subure portent les flambeaux et la trace mène hors de la ville",
    "les habitants de subure portent des torches et la trace mène hors de la ville",
    "les habitants de subure portent les torches et la trace mène hors de la ville",
    "les voisins de subure portent des flambeaux et la trace mène hors de la ville",
    "les voisins de subure portent les flambeaux et la trace mène hors de la ville",
    "les voisins de subure portent des torches et la trace mène hors de la ville",
    "les voisins de subure portent les torches et la trace mène hors de la ville",
    "les habitants de subure portent des flambeaux et la piste mène hors de la ville",
    "les habitants de subure portent des torches et la piste mène hors de la ville",
    "les voisins de subure portent des flambeaux et la piste mène hors de la ville",
    "les voisins de subure portent des torches et la piste mène hors de la ville",
    "les habitants de subure portent des flambeaux, et la trace mène hors de la ville",
    "les habitants de subure portent des flambeaux ; la trace mène hors de la ville"
  ]
},

      "points": 1,

      "canonicalAnswer": "les habitants de Subure portent des flambeaux ; la trace mène hors de la ville",

      "normalization": {

        "trim": true,

        "collapseSpaces": true,

        "ignoreCase": true,

        "ignorePunctuation": true,

        "normalizeApostrophes": true,

        "ignoreDiacritics": true,

        "ignoreFrenchDeterminers": true

      },

      "gradingFocus": "Réinvestir le génitif et comprendre la conclusion de la scène finale.",

      "rejectIf": [

        "génitif ignoré",

        "contre-sens sur extra oppidum",

        "verbe principal mal compris"

      ],

      "tests": [

        {

          "input": "les habitants de Subure portent des flambeaux la trace mène hors de la ville",

          "isCorrect": true

        },

        {

          "input": "les habitants de Subure portent la ville la trace mène vers le jardin",

          "isCorrect": false

        }

      ]

    }

  ],

  "summary": {

    "retains": [

      "Je comprends une scène finale d’enquête en reliant plusieurs indices courts.",

      "Je comprends le génitif dans des groupes comme 'vicini Suburae' et 'porta oppidi'.",

      "Le génitif = Complément du nom.",

 

    ],

    "cahier": [

      "vicini Suburae = les habitants de Subure",

      "porta oppidi = la porte de la ville",

      "vestigium extra oppidum ducit = la trace mène hors de la ville"

    ],

    "keywords": [

      "jardin",

      "trace",

      "ville"

    ]

  },

  "meta": {

    "status": "ready",

    "tags": [

      "p3",

      "scene-finale",

      "genitif",

      "vestigium",

      "Subura"

    ]

  }

},

  {

  "id": "p3-l13",

  "period": 3,

  "periodId": "p3",

  "title": "Signum Discordiae - Texte final",

  "subtitle": headerContexts5eP3["p3-l13"],

  "objective": "Lire un court texte de 4 à 6 phrases, repérer les verbes, reconstruire le sens, puis traduire partiellement.",

  "lessonPoint": "Je lis phrase après phrase, je repère les verbes, puis je recompose le sens global sans traduire mot à mot.",

  "narrative": "Pour la première fois, les indices ne viennent plus en miettes mais en petit récit suivi. Marcus et Livia doivent recoller les morceaux de ce qu’ils ont vu dans la villa, dans le jardin et près de la porte.",

  "canDo": [

    "Je lis un mini-récit latin de plusieurs phrases.",

    "Je repère les verbes et les groupes de lieu.",

    "Je formule une conclusion simple à partir d’un texte suivi."

  ],

  "lexicon": [

      "caelum, caeli n. = ciel",

      "Discordia, Discordiae f. = Discordia, déesse de la discorde",

      "nox, noctis f. = nuit",

      "porta, portae f. = porte",

      "signum, signi n. = signe",

      "villa, villae f. = villa, grande maison",

      "hortus, horti m. = jardin",

      "via, viae f. = route, chemin",

      "vestigium, vestigii n. = trace",

      "servus, servi m. = serviteur",

      "taeda, taedae f. = flambeau",

    "oppidum, oppidi = ville, bourg",
"vir, viri = homme",
"dico, dicis = je dis, tu dis",

      "sto, stas, stat = je me tiens, tu te tiens, il/elle se tient",

      "porto, portas, portat = je porte, tu portes, il/elle porte",

      "taceo, taces, tacet = je me tais, tu te tais, il/elle se tait",

      "appareo, appares, apparet = j’apparais, tu apparais, il/elle apparaît",

      "duco, ducis, ducit = je mène, tu mènes, il/elle mène",

      "fugio, fugis, fugit = je fuis, tu fuis, il/elle fuit",

      "extra + acc. = hors de"

  ],

  "maxScore": 10,

  "training": [

    {

      "id": "p3-l13-t1",

      "type": "matching",

      "prompt": "Associe chaque mot du texte à sa bonne traduction.",

      "pairs": [

        {

          "left": "vestigium",

          "right": "trace"

        },

        {

          "left": "taeda",

          "right": "flambeau"

        },

        {

          "left": "via",

          "right": "route"

        },

        {

          "left": "fugit",

          "right": "il / elle fuit"

        }

      ],

      "rightOptions": [

        "il / elle fuit",

        "trace",

        "route",

        "flambeau"

      ],

      "expected": {

        "vestigium": "trace",

        "taeda": "flambeau",

        "via": "route",

        "fugit": "il / elle fuit"

      },

      "points": 1

    },

    {

      "id": "p3-l13-t2",

      "type": "singleChoice",

      "prompt": "Dans le texte, que font Marcus et Livia au début ? — « Marcus et Livia ad portam villae stant. »",

      "options": [

        "Ils se tiennent devant la porte de la villa",

        "Ils fuient hors de la ville",

        "Ils ferment le jardin",

        "Ils cachent la tablette"

      ],

      "expected": "Ils se tiennent devant la porte de la villa",

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p3-l13-t3",

      "type": "multipleChoice",

      "prompt": "Mini-texte : « Marcus et Livia ad portam villae stant. Servus taedam portat et tacet. In horto vestigium apparet. » Coche les trois informations justes.",

      "options": [

        "Marcus et Livia sont devant la porte de la villa",

        "Le serviteur porte un flambeau",

        "Une trace apparaît dans le jardin",

        "Le serviteur parle beaucoup"

      ],

      "expected": [

        "Marcus et Livia sont devant la porte de la villa",

        "Le serviteur porte un flambeau",

        "Une trace apparaît dans le jardin"

      ],

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p3-l13-t4",

      "type": "singleChoice",

      "prompt": "Dans « Servus taedam portat et tacet », quel mot est le complément objet ?",

      "options": [

        "servus",

        "taedam",

        "portat",

        "tacet"

      ],

      "expected": "taedam",

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p3-l13-t5",

      "type": "singleChoice",

      "prompt": "« Vestigium ad viam ducit » signifie…",

      "options": [

        "La trace mène vers la route",

        "La route mène vers la trace",

        "Le serviteur porte la route",

        "La porte fuit hors de la ville"

      ],

      "expected": "La trace mène vers la route",

      "shuffle": true,

      "points": 1

    },

  {

  "id": "p3-l13-t6",

  "type": "matching",

  "prompt": "Associe chaque phrase du texte à sa traduction exacte.",

  "pairs": [

    {

      "left": "Servus taedam portat et tacet",

      "right": "Le serviteur porte un flambeau et se tait"

    },

    {

      "left": "In horto vestigium apparet",

      "right": "Une trace apparaît dans le jardin"

    },

    {

      "left": "Vir extra oppidum fugit",

      "right": "L’homme fuit hors de la ville"

    }

  ],

  "rightOptions": [

    "Une trace apparaît dans le jardin",

    "L’homme fuit hors de la ville",

    "Le serviteur porte un flambeau et se tait"

  ],

  "expected": {

    "Servus taedam portat et tacet": "Le serviteur porte un flambeau et se tait",

    "In horto vestigium apparet": "Une trace apparaît dans le jardin",

    "Vir extra oppidum fugit": "L’homme fuit hors de la ville"

  },

  "points": 1

},

   {

  "id": "p3-l13-t7",

  "type": "singleChoice",

  "prompt": "Mini-récit complet : « Marcus et Livia ad portam villae stant. Servus taedam portat et tacet. In horto vestigium apparet. Vestigium ad viam ducit. Marcus dicit : “Vir extra oppidum fugit.” » Quelle traduction exacte de « Vir extra oppidum fugit » ?",

  "options": [

    "L’homme fuit hors de la ville",

    "L’homme revient dans la ville",

    "L'homme s'est pris la porte en pleine poire",

    "Le fugitif retourne au forum"

  ],

  "expected": "L’homme fuit hors de la ville",

  "shuffle": true,

  "points": 1

}

  ],

  "production": [

    {

      "id": "p3-l13-p1",

      "type": "textInput",

      "prompt": "Traduis : Servus taedam portat et tacet.",

      "expected": "le serviteur porte un flambeau et se tait",

    "acceptedAnswers": [
  "le serviteur porte un flambeau et se tait",
  "le serviteur porte le flambeau et se tait",
  "le serviteur porte une torche et se tait",
  "le serviteur porte la torche et se tait",
  "le serviteur porte ce flambeau et se tait",
  "le serviteur porte cette torche et se tait",
  "l'esclave porte un flambeau et se tait",
  "l'esclave porte une torche et se tait"
],
"answerConfig": {
  "type": "translation-segment",
  "language": "fr",
  "accepted": [
    "le serviteur porte un flambeau et se tait",
    "le serviteur porte le flambeau et se tait",
    "le serviteur porte une torche et se tait",
    "le serviteur porte la torche et se tait",
    "le serviteur porte ce flambeau et se tait",
    "le serviteur porte cette torche et se tait"
  ],
  "synonyms": [
    "l'esclave porte un flambeau et se tait",
    "l'esclave porte une torche et se tait"
  ]
},

      "points": 1,

      "canonicalAnswer": "le serviteur porte un flambeau et se tait",

      "normalization": {

        "trim": true,

        "collapseSpaces": true,

        "ignoreCase": true,

        "ignorePunctuation": true,

        "normalizeApostrophes": true,

        "ignoreDiacritics": true

      },

      "gradingFocus": "Traduire correctement une phrase suivie avec deux verbes simples coordonnés.",

      "rejectIf": [

        "verbe principal mal compris",

        "contre-sens sur taedam",

        "réponse hors-sujet"

      ],

      "tests": [

        {

          "input": "le serviteur porte un flambeau et se tait",

          "isCorrect": true

        },

        {

          "input": "le serviteur fuit hors de la ville",

          "isCorrect": false

        }

      ]

    },

    {

      "id": "p3-l13-p2",

      "type": "textInput",

      "prompt": "Traduis en latin : La trace mène vers la route.",

      "expected": "vestigium ad viam ducit",

      "acceptedAnswers": [

        "vestigium ad viam ducit",

        "vestigium ducit ad viam",

        "ad viam vestigium ducit",

        "ad viam ducit vestigium",

        "ducit vestigium ad viam",

        "ducit ad viam vestigium"

      ],

      "answerConfig": {

        "type": "one-of",

        "language": "latin",

        "accepted": [

          "vestigium ad viam ducit",

          "vestigium ducit ad viam",

          "ad viam vestigium ducit",

          "ad viam ducit vestigium",

          "ducit vestigium ad viam",

          "ducit ad viam vestigium"

        ]

      },

      "points": 1,

      "canonicalAnswer": "vestigium ad viam ducit",

      "normalization": {

        "trim": true,

        "collapseSpaces": true,

        "ignoreCase": true,

        "ignorePunctuation": true,

        "normalizeApostrophes": true,

        "ignoreDiacritics": true

      },

      "gradingFocus": "Produire une phrase simple à partir d’un texte suivi, avec groupe prépositionnel.",

      "rejectIf": [

        "préposition incorrecte",

        "contre-sens sur vestigium",

        "réponse hors-sujet"

      ],

      "tests": [

        {

          "input": "vestigium ad viam ducit",

          "isCorrect": true

        },

        {

          "input": "via ad vestigium ducit",

          "isCorrect": false

        }

      ]

    },

   {

  "id": "p3-l13-p3",

  "type": "textInput",

  "prompt": "Traduction guidée. Fin du mini-récit : « In caelo signum Discordiae apparet. Marcus tacet. » Traduis les deux phrases, dans l’ordre.",

  "expected": "dans le ciel le signe de discordia apparaît marcus se tait",

 "acceptedAnswers": [
  "dans le ciel, le signe de discordia apparaît et marcus se tait",
  "dans le ciel, le signe de discordia apparaît, et marcus se tait",
  "dans le ciel, le signe de discordia apparaît ; marcus se tait",
  "dans le ciel le signe de discordia apparaît et marcus se tait",
  "le signe de discordia apparaît dans le ciel et marcus se tait",
  "le signe de discordia apparaît dans le ciel, et marcus se tait"
],
"answerConfig": {
  "type": "translation-segment",
  "language": "fr",
  "tolerateArticles": true,
  "accepted": [
    "dans le ciel, le signe de discordia apparaît et marcus se tait",
    "dans le ciel, le signe de discordia apparaît, et marcus se tait",
    "dans le ciel, le signe de discordia apparaît ; marcus se tait",
    "dans le ciel le signe de discordia apparaît et marcus se tait",
    "le signe de discordia apparaît dans le ciel et marcus se tait",
    "le signe de discordia apparaît dans le ciel, et marcus se tait"
  ]
},

  "points": 1,

  "canonicalAnswer": "dans le ciel, le signe de Discordia apparaît ; Marcus se tait",

  "normalization": {

    "trim": true,

    "collapseSpaces": true,

    "ignoreCase": true,

    "ignorePunctuation": true,

    "normalizeApostrophes": true,

    "ignoreDiacritics": true,

    "ignoreFrenchDeterminers": true

  },

  "gradingFocus": "Traduire correctement une révélation finale en tenant ensemble lieu, groupe nominal au génitif et verbe.",

  "rejectIf": [

    "contre-sens sur in caelo",

    "contre-sens sur signum",

    "contre-sens sur Discordiae",

    "omission d'une des deux phrases",

    "réponse hors-sujet"

  ],

  "tests": [

    {

      "input": "dans le ciel le signe de discordia apparaît marcus se tait",

      "isCorrect": true

    },

    {

      "input": "dans le ciel un signe de la discorde apparaît marcus se tait",

      "isCorrect": true

    },

    {

      "input": "dans le jardin la trace apparaît marcus court",

      "isCorrect": false

    }

  ]

}

  ],

  "summary": {

    "retains": [

      "Je peux lire un mini-récit suivi en avançant phrase après phrase.",

      "Je repère les verbes avant de reconstruire le sens global.",

      "Une trace, un lieu et une parole finale suffisent à faire émerger une conclusion."

    ],

    "cahier": [

      "Servus taedam portat et tacet",

      "In horto vestigium apparet",

      "Vestigium ad viam ducit",

      "Vir extra oppidum fugit"

    ],

    "keywords": [

      "texte suivi",

      "récit",

      "trace",

      "route",

      "conclusion"

    ]

  },

  "meta": {

    "status": "ready",

    "tags": [

      "p3",

      "texte-suivi",

      "lecture",

      "conclusion",

      "final"

    ]

  }

}

];

      
