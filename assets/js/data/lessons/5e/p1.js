// Données de leçons 5E · Période 1.

const headerContexts5eP1 = {

  "p1-l1": "Les pavés sont encore mouillés quand Niger rase les jambes des passants. « Ton chien a déjà choisi la bagarre », souffle Marcus, et l’animal file vers une porte entrouverte.",

  "p1-l2": "Aurelia reste sur le seuil pendant que Lucius écoute la rue d’un air distrait. « Une maison tranquille, ça n’existe que vue de dehors », dit-il en relevant la tête vers l’étage.",

  "p1-l3": "Sur la place, le marchand range son pain et son vin avec une hâte suspecte. « Celui-là vend, oui, mais il cache mieux qu’il ne compte », glisse Flavia, puis elle passe derrière l’étal.",

  "p1-l4": "Près du petit autel, la pierre porte une marque nette là où l’offrande manquait. « Quelqu’un a déplacé ça sans trembler », dit Livia, et elle redresse la couronne du bout des doigts.",

  "p1-l5": "Niger s’arrête devant un mur blanchi et renifle jusqu’à coller sa truffe au crépi. « Tu as trouvé quoi, cette fois ? » demande Marcus, puis il suit la fissure jusqu’à un tournant de ruelle.",

  "p1-l6": "Une tablette de cire circule enfin de main en main, graisseuse sur un coin. « On a écrit vite, mais on savait très bien où piquer », tranche Flavia, puis elle la retourne d’un geste sec.",

  "p1-l7": "À la fontaine, l’eau claque dans les seaux et personne ne raconte la même chose. « Une rumeur, ça assoiffe tout un quartier », lâche Marcus, en interrompant la troisième version.",

  "p1-l8": "Devant la boutique du boulanger, la chaleur sort jusque dans la rue. « Si le mystère se cache dans ce pain, il a déjà trop cuit », dit Flavia, et elle suit de l'oeil le client qui s’éclipse.",

  "p1-l9": "Dans la petite école, le maître lit haut et les élèves n’écoutent qu’à moitié. « Quand un enfant baisse les yeux comme ça, c’est qu’il sait quelque chose en plus », murmure Livia.",

  "p1-l10": "Aux bains, la buée colle aux bras et les voix passent d’un bassin à l’autre. « Ici, les gens lavent leur peau, jamais leur langue », dit Marcus, puis il se rapproche du bord sans faire de bruit.",

  "p1-l11": "Sur le mur, des accusations ont été griffés si fort que la chaux s’est soulevée. « Joli courage : écrire ça dehors et se taire dedans », souffle Flavia, puis elle relit le nom une seconde fois.",

  "p1-l12": "Le soir, dans une popina, ils étalent pain, tablette et souvenirs du jour sur la même table. « On ne cherche plus un voleur, on cherche ce qui fait dérailler tout le monde », note Marcus, puis le silence tombe d’un coup.",

  "p1-l13": "Le soir tombe sur Subure. Marcus vérifie qui est là, qui manque encore, et chacun apprend enfin à dire simplement : je suis, tu es, il est ; je suis là, tu es là, il est là."

};

 

export const lessons5eP1 = [

  {

    "id": "p1-l1",

    "period": 1,

    "periodId": "p1",

    "title": "Salve, Subura ! - Salutations",

    subtitle: headerContexts5eP1["p1-l1"],

    "objective": "Découvrir le quartier de Subure (Subura) et lire des salutations simples dans une micro-scène.",

    "lessonPoint": "Je cherche d’abord le verbe et le personnage qui agit.",

    "canDo": [

      "Je reconnais des salutations latines dans une scène.",

      "Je comprends qui parle à qui.",

      "Je traduis une phrase courte de présentation."

    ],

    "lexicon": [

      "salve = bonjour",

      "salvete = bonjour à tous",

      "vale = au revoir",
      "sum, es, est = je suis, tu es, il/elle est",

      "adsum = je suis là, je suis présent",

      "saluto, salutas, salutat = je salue, tu salues, il/elle salue",
      "habito, habitas, habitat = j'habite, tu habites, il/elle habite",

      "Subura = Subure",
      "in Subura = à Subure",

      "in via = sur la route/dans la rue",

      "amicus = ami",
      "Flavia (nom.), Flaviam (acc.) = Flavia (personnage)",
      "canis (nom.), canem (acc.) = chien"

    ],

    "maxScore": 10,

    "training": [

      {

        "id": "p1-l1-t1",

        "type": "singleChoice",

        "prompt": "👋 Flavia salue Marcus seul. Quelle formule choisit-elle ?",

        "options": [

          "salve",

          "salvete",

          "valete",

          "adsum",

          "vale"

        ],

        "expected": "salve",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p1-l1-t2",

        "type": "singleChoice",

        "prompt": "👋 Titus parle à trois voisins. Il dit :",

        "options": [

          "salve",

          "salvete",

          "vale",

          "adsum",

          "bene"

        ],

        "expected": "salvete",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p1-l1-t3",

        "type": "multipleChoice",

        "prompt": "👋 Coche les deux formules pour dire « Au revoir ».",

        "options": [

          "vale",

          "valete",

          "salve",

          "adsum",

          "male"

        ],

        "expected": [

          "vale",

          "valete"

        ],

        "shuffle": true,

        "points": 1

      },

            {

        "id": "p1-l1-t4",

        "type": "matching",

        "prompt": "👋 Associe formule et sens.",

        "pairs": [

          {

            "left": "adsum",

            "right": "je suis là"

          },

          {

            "left": "salve",

            "right": "bonjour (à une personne)"

          },

          {

            "left": "vale",

            "right": "au revoir (à une personne)"

          }

        ],

        "rightOptions": [

          "au revoir (à une personne)",

          "je suis là",

          "bonjour (à une personne)"

        ],

        "expected": {

          "adsum": "je suis là",

          "salve": "bonjour (à une personne)",

          "vale": "au revoir (à une personne)"

        },

        "points": 1

      },

      {
  "id": "p1-l1-t5",
  "type": "singleChoice",
  "prompt": "👋 Dans « Flavia in via est », quel groupe indique où se trouve Flavia ?",
  "options": [
    "in via",
    "Flavia",
    "est",
    "via"
  ],
  "expected": "in via",
  "shuffle": true,
  "points": 1,
  "feedback": "On lit un groupe de lieu : in via = dans la rue."
},

      {

        "id": "p1-l1-t6",

        "type": "singleChoice",

        "prompt": "👋 « Niger canis est » signifie :",

        "options": [

          "Niger est un chien",

          "Le chien est rigolo",

          "Niger est un mur",

          "Niger a une canne",

          "Le chien salue"

        ],

        "expected": "Niger est un chien",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p1-l1-t7",

        "type": "textInput",

        "prompt": "👋 Écris en latin : « je suis présent ».",

        "expected": "adsum",

        "points": 1

      }

    ],

    "production": [

      {

        "id": "p1-l1-p1",

        "type": "textInput",

        "prompt": "👋 Traduis en français : Flavia in Subura habitat",

        "expected": "Flavia habite dans Subure",

        "acceptedAnswers":           [

            "flavia habite à subure",

            "flavia habite dans subure",
            "flavia demeure à subure",

            "flavia demeure à subura",

            "flavia vit à subure",

            "flavia vit dans subure",

            "flavia habite à subura",

            "flavia habite dans subura",

            "flavia vit à subura",

            "flavia vit dans subura"

          ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted":             [
            "flavia habite à subure",

            "flavia habite dans subure",
            "flavia demeure à subure",

            "flavia demeure à subura",

            "flavia vit à subure",

            "flavia vit dans subure",

            "flavia habite à subura",

            "flavia habite dans subura",

            "flavia vit à subura",

            "flavia vit dans subura"

            ],

          "synonyms":             [

              "flavia habite à subura",

              "flavia habite dans subura",

              "flavia vit à subura",

              "flavia vit dans subura"

            ]

        },

        "points": 1,

        "canonicalAnswer": "Flavia habite dans Subure",

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

            "input": "Flavia habite dans Subure",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

    {
  "id": "p1-l1-p2",
  "type": "textInput",
  "prompt": " Traduis en français : Niger canis est",
  "expected": "niger est un chien",
  "acceptedAnswers": [
    "niger est un chien",
    "niger est le chien",
    "niger c'est un chien",
    "niger c'est le chien"
  ],
  "answerConfig": {
    "type": "translation-segment",
    "language": "fr",
    "tolerateArticles": true,
    "accepted": [
      "niger est un chien",
      "niger est le chien",
      "niger c'est un chien",
      "niger c'est le chien"
    ]
  },
  "points": 1,
  "canonicalAnswer": "niger est un chien",
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
    { "input": "niger est un chien", "isCorrect": true },
    { "input": "niger c'est un chien", "isCorrect": true },
    { "input": "réponse hors-sujet", "isCorrect": false }
  ]
},

      {

        "id": "p1-l1-p3",

        "type": "textInput",

        "prompt": "👋 Traduis en latin : Marcus salue Flavia",

        "expected": "Marcus Flaviam salutat",

        "acceptedAnswers": [

          "Marcus Flaviam salutat",

          "Marcus salutat Flaviam",

          "Flaviam Marcus salutat",

          "Flaviam salutat Marcus",

          "salutat Marcus Flaviam",

          "salutat Flaviam Marcus"

        ],

        "answerConfig": {

          "type": "one-of",

          "language": "latin",

          "accepted": [

            "Marcus Flaviam salutat",

            "Marcus salutat Flaviam",

            "Flaviam Marcus salutat",

            "Flaviam salutat Marcus",

            "salutat Marcus Flaviam",

            "salutat Flaviam Marcus"

          ]

        },

        "points": 1,

        "canonicalAnswer": "Marcus Flaviam salutat",

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

            "input": "Marcus Flaviam salutat",

            "isCorrect": true

          },

          {

            "input": "lorem ipsum",

            "isCorrect": false

          }

        ]

      }

    ],

    "summary": {

      "retains": [

        "Dans une scène, je repère d’abord qui parle et le verbe.",

        "Les formules salve/vale structurent la communication."

      ],

      "cahier": [

        "salve / salvete = bonjour",

        "vale / valete = au revoir",

        "adsum = je suis là"

      ],

      "keywords": [

        "Subura",

        "salutation",

        "verbe",

        "personnages"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "subura",

        "rituel",

        "p1-l1"

      ]

    }

  },

  {

    "id": "p1-l2",

    "period": 1,

    "periodId": "p1",

    "title": "Domus et insula - Localisation",

    subtitle: headerContexts5eP1["p1-l2"],

    "objective": "Identifier les lieux d’habitation et les objets proches dans le quartier.",

    "lessonPoint": "Le groupe nominal se lit ensemble : nom + adjectif ou complément.",

    "canDo": [

      "Je distingue domus et insula dans une scène.",

      "Je comprends une phrase de localisation simple.",

      "Je traduis des groupes nominaux utiles."

    ],

    "lexicon": [

      "domus = maison",

      "insula = immeuble",

      "ianua = porte",

      "fenestra = fenêtre",
      "per + accusatif = par, à travers",

      "cella = cellier",

      "in domo = dans la maison",

      "prope ianuam = près de la porte",

      "ante ianuam = devant la porte",

      "sto, stas, stat = je me tiens, tu te tiens, il/elle se tient",
      "specto, spectas, spectat = je regarde, tu regardes, il/elle regarde",

      "habitat = il/elle habite",

      "manet = il/elle reste"

    ],

    "maxScore": 10,

    "training": [

   {
  "id": "p1-l2-t1",
  "type": "multipleChoice",
  "prompt": "🏠 Mini-scène : « Aurelia in domo manet. Marcus in insula habitat. » Coche les deux mots qui désignent des lieux d’habitation.",
  "options": [
    "domo",
    "insula",
    "Marcus",
    "manet",
    "ianuam"
  ],
  "expected": [
    "domo",
    "insula"
  ],
  "shuffle": true,
  "points": 1
},

      {

        "id": "p1-l2-t2",

        "type": "singleChoice",

        "prompt": "🏠 Marcus vit dans un immeuble de quartier. C’est une :",

        "options": [

          "insula",

          "domus",

          "via",

          "porta",

          "murus"

        ],

        "expected": "insula",

        "shuffle": true,

        "points": 1

      },

     {

  "id": "p1-l2-t3",

  "type": "multipleChoice",

  "prompt": "🏠 Mini-scène : « Niger ante ianuam stat. Lucius per fenestram spectat. » Coche les deux mots qui désignent des éléments de la maison.",

  "options": [

    "ianuam",

    "fenestram",

    "Niger",

    "stat",

    "Lucius"

  ],

  "expected": [

    "ianuam",

    "fenestram"

  ],

  "shuffle": true,

  "points": 1

},

      {

        "id": "p1-l2-t4",

        "type": "matching",

        "prompt": "🏠 Associe mot et sens.",

        "pairs": [

          {

            "left": "domus",

            "right": "maison"

          },

          {

            "left": "insula",

            "right": "immeuble"

          },

          {

            "left": "ianua",

            "right": "porte"

          }

        ],

        "rightOptions": [

          "porte",

          "maison",

          "immeuble"

        ],

        "expected": {

          "domus": "maison",

          "insula": "immeuble",

          "ianua": "porte"

        },

        "points": 1

      },

      {

        "id": "p1-l2-t5",

        "type": "singleChoice",

        "prompt": "🏠 « Niger ante ianuam stat » : Niger est…",

        "options": [

          "devant la porte",

          "dans le forum",

          "sur le mur",

          "à la fontaine",

          "dans l’école"

        ],

        "expected": "devant la porte",

        "shuffle": true,

        "points": 1,

        "feedback": "Cherche le verbe stat puis le lieu ante ianuam."

      },

      {

        "id": "p1-l2-t6",

        "type": "singleChoice",

        "prompt": "🏠 Dans « Flavia in domo manet », manet signifie :",

        "options": [

          "reste",

          "court",

          "monte",

          "porte",

          "écrit"

        ],

        "expected": "reste",

        "shuffle": true,

        "points": 1

      },

      {
  "id": "p1-l2-t7",
  "type": "singleChoice",
  "prompt": "🏠 Mini-scène : « Niger ________ stat. » Quel groupe signifierait exactement « devant la porte » ?",
  "options": [
    "ante ianuam",
    "prope ianuam",
    "in ianua",
    "per fenestram"
  ],
  "expected": "ante ianuam",
  "shuffle": true,
  "points": 1
}

    ],

    "production": [

      {

        "id": "p1-l2-p1",

        "type": "textInput",

        "prompt": "🏠 Traduis en français : Aurelia in domo manet",

        "expected": "aurélia reste dans la maison",

        "acceptedAnswers": [

          "aurélia reste dans la maison",

          "aurélia demeure dans la maison",

          "aurélia reste à la maison",

          "aurélia demeure à la maison",

        ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted": [

            "aurélia reste dans la maison",

            "aurélia demeure dans la maison",

            "aurélia reste à la maison",

            "aurélia demeure à la maison",

          ]

        },

        "points": 1,

        "canonicalAnswer": "aurélia reste dans la maison",

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

            "input": "aurélia reste dans la maison",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

      {
  "id": "p1-l2-p2",
  "type": "textInput",
  "prompt": " Traduis en français : Marcus in insula habitat",
  "expected": "marcus habite dans l'insula",
  "acceptedAnswers": [
    "marcus habite dans l'insula",
    "marcus habite dans l'immeuble",
    "marcus habite dans une insula",
    "marcus habite dans un immeuble",
    "marcus habite en insula",
    "marcus habite en immeuble",
    "marcus vit dans l'insula",
    "marcus vit dans l'immeuble",
    "marcus vit dans une insula",
    "marcus vit dans un immeuble",
    "marcus vit en insula",
    "marcus vit en immeuble"
  ],
  "answerConfig": {
    "type": "translation-segment",
    "language": "fr",
    "tolerateArticles": true,
    "accepted": [
      "marcus habite dans l'insula",
      "marcus habite dans l'immeuble",
      "marcus habite dans une insula",
      "marcus habite dans un immeuble",
      "marcus habite en insula",
      "marcus habite en immeuble",
      "marcus vit dans l'insula",
      "marcus vit dans l'immeuble",
      "marcus vit dans une insula",
      "marcus vit dans un immeuble",
      "marcus vit en insula",
      "marcus vit en immeuble"
    ]
  },
  "points": 1,
  "canonicalAnswer": "marcus habite dans l'insula",
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
    { "input": "marcus habite dans l'insula", "isCorrect": true },
    { "input": "marcus vit dans l'immeuble", "isCorrect": true },
    { "input": "réponse hors-sujet", "isCorrect": false }
  ]
},

      {

        "id": "p1-l2-p3",

        "type": "textInput",

        "prompt": "🏠 Traduis en latin : Niger est devant la porte",

        "expected": "Niger ante ianuam stat",

        "acceptedAnswers": [

          "Niger ante ianuam stat",

          "Niger stat ante ianuam",

          "ante ianuam Niger stat",

          "ante ianuam stat Niger",

          "stat Niger ante ianuam",

          "stat ante ianuam Niger",

          "Niger ante ianuam est",

          "Niger est ante ianuam",

          "ante ianuam Niger est",

          "ante ianuam est Niger",

          "est Niger ante ianuam",

          "est ante ianuam Niger"

        ],

        "answerConfig": {

          "type": "one-of",

          "language": "latin",

          "accepted": [

            "Niger ante ianuam stat",

            "Niger stat ante ianuam",

            "ante ianuam Niger stat",

            "ante ianuam stat Niger",

            "stat Niger ante ianuam",

            "stat ante ianuam Niger",

            "Niger ante ianuam est",

            "Niger est ante ianuam",

            "ante ianuam Niger est",

            "ante ianuam est Niger",

            "est Niger ante ianuam",

            "est ante ianuam Niger"

          ]

        },

        "points": 1,

        "canonicalAnswer": "Niger ante ianuam stat",

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

            "input": "Niger ante ianuam stat",

            "isCorrect": true

          },

          {

            "input": "lorem ipsum",

            "isCorrect": false

          }

        ]

      }

    ],

    "summary": {

      "retains": [

        "Je lis un lieu avec sa préposition.",

        "Nom + repère spatial donne le sens de la scène."

      ],

      "cahier": [

        "in domo",

        "in insula",

        "ante ianuam"

      ],

      "keywords": [

        "domus",

        "insula",

        "localisation"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "habitat",

        "quartier",

        "p1-l2"

      ]

    }

  },

  {

    "id": "p1-l3",

    "period": 1,

    "periodId": "p1",

    "title": "Forum et taberna - Actions",

    subtitle: headerContexts5eP1["p1-l3"],

    "objective": "Comprendre une scène simple autour du forum et des boutiques du quartier de Subura.",

    "lessonPoint": "Le verbe indique l’action centrale : porter, vendre, regarder.",

    "canDo": [

      "Je reconnais les lieux du commerce.",

      "Je relie personnage et action.",

      "Je traduis une phrase de marché."

    ],

    "lexicon": [

      "forum = forum, place",

      "taberna = boutique",

      "mercator = marchand",

      "panis = pain (nominatif/sujet)",
      "panem = pain (accusatif/COD)",

      "vinum = vin",

      "portat = il/elle porte",

      "currit = il/elle court",

      "spectat = il/elle regarde",

      "vendit = il/elle vend",

      "ad forum = vers le forum"

    ],

    "maxScore": 10,

    "training": [

     {
  "id": "p1-l3-t1",
  "type": "singleChoice",
  "prompt": "🛍️ Dans « Mercator ad forum currit », quel groupe indique vers quel lieu court le marchand ?",
  "options": [
    "ad forum",
    "mercator",
    "currit",
    "forum",
    "panem"
  ],
  "expected": "ad forum",
  "shuffle": true,
  "points": 1,
  "feedback": "ad forum forme un groupe de déplacement : vers le forum."
},

      {

        "id": "p1-l3-t2",

        "type": "singleChoice",

        "prompt": "🛍️ Parmi les mots de la leçon, lequel désigne le lieu où le marchand vend ?",

        "options": [

          "taberna",

          "mercator",

          "panis",

          "vinum",

          "portat"

        ],

        "expected": "taberna",

        "shuffle": true,

        "points": 1,

        "feedback": "taberna nomme le lieu du commerce ; mercator la personne ; panis et vinum les objets."

      },

    {

  "id": "p1-l3-t3",

  "type": "multipleChoice",

  "prompt": "🛍️ Mini-scène : « Mercator panem et vinum portat. » Coche les deux objets que porte le marchand.",

  "options": [

    "panem",

    "vinum",

    "mercator",

    "forum",

    "ianua"

  ],

  "expected": [

    "panem",

    "vinum"

  ],

  "shuffle": true,

  "points": 1

},

      {

        "id": "p1-l3-t4",

        "type": "matching",

        "prompt": "🛍️ Associe latin et français.",

        "pairs": [

          {

            "left": "mercator",

            "right": "marchand"

          },

          {

            "left": "panis",

            "right": "pain"

          },

          {

            "left": "vinum",

            "right": "vin"

          }

        ],

        "rightOptions": [

          "vin",

          "pain",

          "marchand"

        ],

        "expected": {

          "mercator": "marchand",

          "panis": "pain",

          "vinum": "vin"

        },

        "points": 1

      },

      {

        "id": "p1-l3-t5",

        "type": "singleChoice",

        "prompt": "🛍️ « Mercator panem portat » : qui porte le pain ?",

        "options": [

          "mercator",

          "panem",

          "forum",

          "Flavia",

          "Niger"

        ],

        "expected": "mercator",

        "shuffle": true,

        "points": 1,

        "feedback": "Cherche d’abord le verbe portat, puis son sujet."

      },

      {

        "id": "p1-l3-t6",

        "type": "singleChoice",

        "prompt": "🛍️ « Panem mercator portat » signifie :",

        "options": [

          "Le marchand porte le pain",

          "Le pain porte le marchand",

          "Le marchand vend le pain",

          "Le pain est dans la maison",

          "Le marchand porte du poisson"

        ],

        "expected": "Le marchand porte le pain",

        "shuffle": true,

        "points": 1

      },

     {
  "id": "p1-l3-t7",
  "type": "singleChoice",
  "prompt": "🛍️ Mini-scène : « Currit Mercator ad forum. » Quel mot est le verbe conjugué ?",
  "options": [
    "Mercator",
    "ad forum",
    "currit",
    "forum"
  ],
  "expected": "currit",
  "shuffle": true,
  "points": 1
}

    ],

    "production": [

     {
  "id": "p1-l3-p1",
  "type": "textInput",
  "prompt": " Traduis en français : Mercator panem vendit",
  "expected": "le marchand vend du pain",
  "acceptedAnswers": [
    "le marchand vend du pain",
    "le marchand vend le pain",
    "le marchand vend un pain",
    "un marchand vend du pain",
    "un marchand vend le pain",
    "un marchand vend un pain"
  ],
  "answerConfig": {
    "type": "translation-segment",
    "language": "fr",
    "tolerateArticles": true,
    "accepted": [
      "le marchand vend du pain",
      "le marchand vend le pain",
      "le marchand vend un pain",
      "un marchand vend du pain",
      "un marchand vend le pain",
      "un marchand vend un pain"
    ],
    "synonyms": [
      "le marchand vend du pain",
      "un marchand vend du pain",
      "le marchand vend du pain frais",
      "un marchand vend du pain frais",
      "le marchand vend des pains",
      "un marchand vend des pains"
    ]
  },
  "points": 1,
  "canonicalAnswer": "le marchand vend du pain",
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
    { "input": "le marchand vend du pain", "isCorrect": true },
    { "input": "un marchand vend du pain", "isCorrect": true },
    { "input": "le marchand vend le pain", "isCorrect": true },
    { "input": "réponse hors-sujet", "isCorrect": false }
  ]
},

      {

        "id": "p1-l3-p2",

        "type": "textInput",

        "prompt": "🛍️ Traduis en français : Flavia tabernam spectat",

        "expected": "flavia regarde la boutique",

        "acceptedAnswers":           [

            "flavia regarde la boutique",

            "flavia observe la boutique",

            "flavia voit la boutique",

            "flavia aperçoit la boutique",

            "flavia regarde l'échoppe",

            "flavia observe l'échoppe",

            "flavia voit l'échoppe",

            "flavia aperçoit l'échoppe",

            "flavia regarde le magasin",

            "flavia observe le magasin",

            "flavia voit le magasin",

            "flavia aperçoit le magasin"

          ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted":             [

              "flavia regarde la boutique",

              "flavia observe la boutique",

              "flavia voit la boutique",

              "flavia aperçoit la boutique"

            ],

          "synonyms":             [

              "flavia regarde l'échoppe",

              "flavia observe l'échoppe",

              "flavia voit l'échoppe",

              "flavia aperçoit l'échoppe",

              "flavia regarde le magasin",

              "flavia observe le magasin",

              "flavia voit le magasin",

              "flavia aperçoit le magasin"

            ]

        },

        "points": 1,

        "canonicalAnswer": "flavia regarde la boutique",

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

            "input": "flavia regarde la boutique",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

      {

        "id": "p1-l3-p3",

        "type": "textInput",

        "prompt": "🛍️ Traduis en latin : Marcus court vers le forum",

        "expected": "Marcus ad forum currit",

        "acceptedAnswers": [

          "Marcus ad forum currit",

          "Marcus currit ad forum",

          "ad forum Marcus currit",

          "ad forum currit Marcus",

          "currit Marcus ad forum",

          "currit ad forum Marcus"

        ],

        "answerConfig": {

          "type": "one-of",

          "language": "latin",

          "accepted": [

            "Marcus ad forum currit",

            "Marcus currit ad forum",

            "ad forum Marcus currit",

            "ad forum currit Marcus",

            "currit Marcus ad forum",

            "currit ad forum Marcus"

          ]

        },

        "points": 1,

        "canonicalAnswer": "Marcus ad forum currit",

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

            "input": "Marcus ad forum currit",

            "isCorrect": true

          },

          {

            "input": "lorem ipsum",

            "isCorrect": false

          }

        ]

      }

    ],

    "summary": {

      "retains": [

        "L’ordre latin peut varier sans changer l’idée.",

        "Le verbe donne le cœur de la scène."

      ],

      "cahier": [

        "Mercator panem portat",

        "Marcus ad forum currit"

      ],

      "keywords": [

        "forum",

        "taberna",

        "commerce"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "marché",

        "lecture",

        "p1-l3"

      ]

    }

  },

  {

    "id": "p1-l4",

    "period": 1,

    "periodId": "p1",

    "title": "Au petit sanctuaire - Groupe nominal",

    subtitle: headerContexts5eP1["p1-l4"],

    "objective": "Lire de courtes phrases au sanctuaire et repérer une offrande déplacée.",

    "lessonPoint": "Je lis ensemble le groupe nominal (donum sacrum, ara parva).",

    "canDo": [

      "Je comprends une scène religieuse simple.",

      "Je repère un objet offert.",

      "Je traduis une action autour du sanctuaire."

    ],

    "lexicon": [

      "sacellum = petit sanctuaire",

      "ara (nom.), aram (acc.) = autel",
      "donum = offrande",

      "corona (nom.), coronam (acc.) = couronne",

      "dea = déesse",

      "sacerdos = prêtre, prêtresse",
      "vetus = vieux, vieille",

      "ponit = il/elle pose",

      "moveo, moves, movet = je bouge, tu bouges, il/elle bouge | déplace",
      "specto, spectas, spectat = je regarde, tu regardes, il/elle regarde"

    ],

    "maxScore": 10,

    "training": [

      {
  "id": "p1-l4-t1",
  "type": "singleChoice",
  "prompt": "🏺 Mini-scène : « Vetus sacerdos donum ponit. » Quel mot est le verbe ?",
  "options": [
    "vetus",
    "sacerdos",
    "donum",
    "ponit"
  ],
  "expected": "ponit",
  "shuffle": true,
  "points": 1
},

      {
  "id": "p1-l4-t2",
  "type": "multipleChoice",
  "prompt": "🏺 Mini-scène : « Vetus sacerdos donum ponit. Livia coronam movet. » Coche les deux objets manipulés dans la scène.",
  "options": [
    "donum",
    "coronam",
    "sacerdos",
    "Livia",
    "movet"
  ],
  "expected": [
    "donum",
    "coronam"
  ],
  "shuffle": true,
  "points": 1
},

     {
  "id": "p1-l4-t3",
  "type": "multipleChoice",
  "prompt": "🏺 Mini-scène : « Livia aram spectat. Sextus coronam movet. » Coche les deux mots qui désignent ce que les personnages regardent ou déplacent.",
  "options": [
    "aram",
    "coronam",
    "Livia",
    "Sextus",
    "movet"
  ],
  "expected": [
    "aram",
    "coronam"
  ],
  "shuffle": true,
  "points": 1
},

      {

        "id": "p1-l4-t4",

        "type": "matching",

        "prompt": "🏺 Associe latin et sens.",

        "pairs": [

          {

            "left": "ara",

            "right": "autel"

          },

          {

            "left": "sacerdos",

            "right": "prêtresse"

          },

          {

            "left": "corona",

            "right": "couronne"

          }

        ],

        "rightOptions": [

          "couronne",

          "autel",

          "prêtresse"

        ],

        "expected": {

          "ara": "autel",

          "sacerdos": "prêtresse",

          "corona": "couronne"

        },

        "points": 1

      },

      {

        "id": "p1-l4-t5",

        "type": "singleChoice",

        "prompt": "🏺 « Vetus sacerdos donum ponit » : qui pose l’offrande ?",

        "options": [

          "la vieille prêtresse",

          "l’offrande",

          "la déesse",

          "Marcus",

          "Niger"

        ],

        "expected": "la vieille prêtresse",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p1-l4-t6",

        "type": "singleChoice",

        "prompt": "🏺 « Donum Sextus movet » :",

        "options": [

          "Sextus déplace l’offrande",

          "L’offrande déplace Sextus",

          "Sextus regarde l’offrande",

          "Sextus crie",

          "L’offrande est sacrée"

        ],

        "expected": "Sextus déplace l’offrande",

        "shuffle": true,

        "points": 1,

        "feedback": "Attention : l’ordre peut tromper, cherche le verbe movet."

      },

      {

        "id": "p1-l4-t7",

        "type": "textInput",

        "prompt": "🏺 Complète : « Sextus ... movet » pour dire « Sextus déplace la couronne ».",

        "expected": "coronam",

        "acceptedAnswers": [

          "coronam"

        ],

        "answerConfig": {

          "type": "one-of",

          "language": "latin",

          "accepted": [

            "coronam"

          ]

        },

        "points": 1

      }

    ],

    "production": [

      {

        "id": "p1-l4-p1",

        "type": "textInput",

        "prompt": "🏺 Traduis en français : Vetus sacerdos donum ponit",

        "expected": "la vieille prêtresse pose l'offrande",

        "acceptedAnswers": [

          "la vieille prêtresse pose l'offrande",

          "la vieille prêtresse place l'offrande",

          "le vieux prêtre place l'offrande",

          "le vieux prêtre pose l'offrande",

          "le prêtre âgé place l'offrande",

          "le prêtre âgé pose l'offrande",

          "la prêtresse âgée place l'offrande",

          "la prêtresse âgée pose l'offrande"

        ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted": [

            "la vieille prêtresse pose l'offrande",

            "la vieille prêtresse place l'offrande",

            "le vieux prêtre place l'offrande",

            "le vieux prêtre pose l'offrande",

            "le prêtre âgé place l'offrande",

            "le prêtre âgé pose l'offrande",

            "la prêtresse âgée place l'offrande",

            "la prêtresse âgée pose l'offrande"

          ]

        },

        "points": 1,

        "canonicalAnswer": "la vieille prêtresse pose l'offrande",

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

            "input": "la vieille prêtresse pose l'offrande",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

      {

        "id": "p1-l4-p2",

        "type": "textInput",

        "prompt": "🏺 Traduis en français : Sextus coronam movet",

        "expected": "sextus déplace la couronne",

        "acceptedAnswers":           [

            "sextus déplace la couronne",

            "sextus bouge la couronne",

            "sextus remue la couronne",

            "sextus dérange la couronne",

            "sextus fait bouger la couronne"

          ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted":             [

              "sextus déplace la couronne",

              "sextus bouge la couronne",

              "sextus remue la couronne"

            ],

          "synonyms":             [

              "sextus dérange la couronne",

              "sextus fait bouger la couronne"

            ]

        },

        "points": 1,

        "canonicalAnswer": "sextus déplace la couronne",

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

            "input": "sextus déplace la couronne",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

      {

        "id": "p1-l4-p3",

        "type": "textInput",

        "prompt": "🏺 Traduis en latin : Livia regarde l’autel",

        "expected": "Livia aram spectat",

        "acceptedAnswers": [

          "Livia aram spectat",

          "Livia spectat aram",

          "aram Livia spectat",

          "aram spectat Livia",

          "spectat Livia aram",

          "spectat aram Livia"

        ],

        "answerConfig": {

          "type": "one-of",

          "language": "latin",

          "accepted": [

            "Livia aram spectat",

            "Livia spectat aram",

            "aram Livia spectat",

            "aram spectat Livia",

            "spectat Livia aram",

            "spectat aram Livia"

          ]

        },

        "points": 1,

        "canonicalAnswer": "Livia aram spectat",

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

            "input": "Livia aram spectat",

            "isCorrect": true

          },

          {

            "input": "lorem ipsum",

            "isCorrect": false

          }

        ]

      }

    ],

    "summary": {

      "retains": [

        "Les noms de cette leçon tournent autour du champ lexical du sacré, du religieux."

      ],

      "cahier": [

        "donum",

        "corona",

        "Vetus sacerdos donum ponit"

      ],

      "keywords": [

        "sanctuaire",

        "offrande",

        "discorde"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "sacellum",

        "narration",

        "p1-l4"

      ]

    }

  },

  {

    "id": "p1-l5",

    "period": 1,

    "periodId": "p1",

    "title": "Niger devant la porte - Sujet/COD",

    subtitle: headerContexts5eP1["p1-l5"],

    "objective": "Comprendre des phrases où Niger signale un trouble devant les maisons.",

    "lessonPoint": "Je repère sujet et complément sans me laisser piéger par l’ordre.",

    "canDo": [

      "Je lis une scène courte avec un animal.",

      "Je distingue qui agit et ce qui est vu.",

      "Je traduis des phrases simples avec canis."

    ],

    "lexicon": [

      "Niger = le nom du petit chien",

      "canis (nom.), canem (acc.) = chien",

      "latrat = il/elle aboie",

      "ianua = porte",

      "domus = maison",

      "spectat = il/elle regarde",

      "videt = il/elle voit",

      "curro, curris, currit = je cours, tu cours, il/elle court",
      "sto, stas, stat = je me tiens, tu te tiens, il/elle se tient"

    ],

    "maxScore": 10,

    "training": [

      {

        "id": "p1-l5-t1",

        "type": "singleChoice",

        "prompt": "🐕 Niger est :",

        "options": [

          "le chien",

          "le marchand",

          "la prêtresse",

          "la tablette",

          "la rue"

        ],

        "expected": "le chien",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p1-l5-t2",

        "type": "singleChoice",

        "prompt": "🐕 Le verbe latrat signifie :",

        "options": [

          "aboie",

          "court",

          "porte",

          "écrit",

          "regarde"

        ],

        "expected": "aboie",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p1-l5-t3",

        "type": "multipleChoice",

        "prompt": "🐕 Coche les quatre phrases possibles liées à cette scène : Niger aboie devant une porte fermée et attire l’attention de Marcus et Livia.",

        "options": [

          "Niger ante ianuam stat",

          "Niger latrat",

          "Niger panem edet",

          "Livia Nigrum videt",

          "Canis forum scribit",

          "Niger Marcum mordet",

          "Marcus canem spectat"

        ],

        "expected": [

          "Niger ante ianuam stat",

          "Niger latrat",

          "Livia Nigrum videt",

          "Marcus canem spectat"

        ],

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p1-l5-t4",

        "type": "matching",

        "prompt": "🐕 Associe phrase et interprétation.",

        "pairs": [

          {

            "left": "Niger latrat",

            "right": "le chien aboie"

          },

          {

            "left": "Marcus canem spectat",

            "right": "Marcus regarde le chien"

          },

          {

            "left": "Canem Livia videt",

            "right": "Livia voit le chien"

          }

        ],

        "rightOptions": [

          "Livia voit le chien",

          "Marcus regarde le chien",

          "le chien aboie"

        ],

        "expected": {

          "Niger latrat": "le chien aboie",

          "Marcus canem spectat": "Marcus regarde le chien",

          "Canem Livia videt": "Livia voit le chien"

        },

        "points": 1

      },

      {

        "id": "p1-l5-t5",

        "type": "singleChoice",

        "prompt": "🐕 Piège : « Canem Livia videt » signifie :",

        "options": [

          "Livia voit le chien",

          "Le chien voit Livia",

          "Livia est un chien",

          "Le chien court",

          "Livia aboie"

        ],

        "expected": "Livia voit le chien",

        "shuffle": true,

        "points": 1,

        "feedback": "La terminaison aide : canem est le complément."

      },

      {

        "id": "p1-l5-t6",

        "type": "singleChoice",

        "prompt": "🐕 Dans « Niger currit cum Livia », le sujet est :",

        "options": [

          "Niger",

          "currit",

          "ianua",

          "canem",

          "Livia"

        ],

        "expected": "Niger",

        "shuffle": true,

        "points": 1

      },

      {
  "id": "p1-l5-t7",
  "type": "singleChoice",
  "prompt": "🐕 Dans quelle phrase le chien est-il le complément d’objet direct ?",
  "options": [
    "Niger latrat.",
    "Livia canem videt.",
    "Canis currit.",
    "Canis ante ianuam stat."
  ],
  "expected": "Livia canem videt.",
  "shuffle": true,
  "points": 1
}

    ],

    "production": [

      {

        "id": "p1-l5-p1",

        "type": "textInput",

        "prompt": "🐕 Traduis en français : Niger ante ianuam stat",

        "expected": "niger est devant la porte",

        "acceptedAnswers":           [

            "niger est devant la porte",

            "niger se tient devant la porte",

            "niger reste devant la porte",

            "niger se trouve devant la porte",

            "le chien niger est devant la porte",

            "le chien niger se tient devant la porte"

          ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted":             [

              "niger est devant la porte",

              "niger se tient devant la porte",

              "niger reste devant la porte"

            ],

          "synonyms":             [

              "niger se trouve devant la porte",

              "le chien niger est devant la porte",

              "le chien niger se tient devant la porte"

            ]

        },

        "points": 1,

        "canonicalAnswer": "niger est devant la porte",

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

            "input": "niger est devant la porte",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

      {

        "id": "p1-l5-p2",

        "type": "textInput",

        "prompt": "🐕 Traduis en français : Canem Livia videt",

        "expected": "livia voit le chien",

       "acceptedAnswers": [
  "livia voit le chien",
  "livia voit ce chien",
  "livia regarde le chien",
  "livia regarde ce chien",
  "livia aperçoit le chien",
  "livia aperçoit ce chien",
  "livia observe le chien",
  "livia observe ce chien"
],
"answerConfig": {
  "type": "translation-segment",
  "language": "fr",
  "accepted": [
    "livia voit le chien",
    "livia voit ce chien",
    "livia regarde le chien",
    "livia regarde ce chien"
  ],
  "synonyms": [
    "livia aperçoit le chien",
    "livia aperçoit ce chien",
    "livia observe le chien",
    "livia observe ce chien"
  ]
},

        "points": 1,

        "canonicalAnswer": "livia voit le chien",

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

            "input": "livia voit le chien",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

      {

        "id": "p1-l5-p3",

        "type": "textInput",

        "prompt": "🐕 Traduis en latin : Marcus regarde le chien",

        "expected": "Marcus canem spectat",

        "acceptedAnswers": [

          "Marcus canem spectat",

          "Marcus spectat canem",

          "canem Marcus spectat",

          "canem spectat Marcus",

          "spectat Marcus canem",

          "spectat canem Marcus"

        ],

        "answerConfig": {

          "type": "one-of",

          "language": "latin",

          "accepted": [

            "Marcus canem spectat",

            "Marcus spectat canem",

            "canem Marcus spectat",

            "canem spectat Marcus",

            "spectat Marcus canem",

            "spectat canem Marcus"

          ]

        },

        "points": 1,

        "canonicalAnswer": "Marcus canem spectat",

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

            "input": "Marcus canem spectat",

            "isCorrect": true

          },

          {

            "input": "lorem ipsum",

            "isCorrect": false

          }

        ]

      }

    ],

    "summary": {

      "retains": [

        "Le latin ne suit pas toujours l’ordre français.",

        "Je vérifie la forme du complément pour éviter le piège. La marque du COD, au singulier, est très souvent le -m !"

      ],

      "cahier": [

        "Niger latrat",

        "Canem Livia videt"

      ],

      "keywords": [

        "Niger",

        "porte",

        "piège ordre"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "niger",

        "sujet-complement",

        "p1-l5"

      ]

    }

  },

  {

    "id": "p1-l6",

    "period": 1,

    "periodId": "p1",

    "title": "La tablette échangée - Verbe/Objet",

    subtitle: headerContexts5eP1["p1-l6"],

    "objective": "Suivre une scène où une tablette a été échangée et identifier qui porte quoi.",

    "lessonPoint": "Je relie verbe + objet pour comprendre l’incident.",

    "canDo": [

      "Je lis une phrase d’action avec tablette.",

      "Je repère le complément d’objet courant.",

      "Je traduis une phrase liée à l’enquête."

    ],

    "lexicon": [

      "tabella (nom.), tabellam (acc.) = tablette",
      "epistula (nom.), epistulam (acc.) = lettre",

      "scribit = il/elle écrit",

      "legit = il/elle lit",

      "portat = il/elle porte",

      "habet = il/elle a",

      "quaerit = il/elle cherche",

      "invenit = il/elle trouve"

    ],

    "maxScore": 10,

    "training": [

     {
  "id": "p1-l6-t1",
  "type": "multipleChoice",
  "prompt": "📜 Mini-scène : « Marcus tabellam habet. Lucius epistulam legit. » Coche les deux compléments d'objet.",
  "options": [
    "tabellam",
    "epistulam",
    "Marcus",
    "Lucius",
    "legit"
  ],
  "expected": [
    "tabellam",
    "epistulam"
  ],
  "shuffle": true,
  "points": 1
},

      {

        "id": "p1-l6-t2",

        "type": "singleChoice",

        "prompt": "📜 Dans « Lucius epistulam quaerit », Lucius :",

        "options": [

          "cherche la lettre",

          "porte la lettre",

          "voit la lettre",

          "échange la lettre",

          "crie"

        ],

        "expected": "cherche la lettre",

        "shuffle": true,

        "points": 1

      },

     {

  "id": "p1-l6-t3",

  "type": "multipleChoice",

  "prompt": "📜 Coche les trois groupes verbe + complément cohérents avec la leçon.",

  "options": [

    "tabellam legit",

    "epistulam quaerit",

    "tabellam portat",

    "forum scribit",

    "ianuam invenit"

  ],

  "expected": [

    "tabellam legit",

    "epistulam quaerit",

    "tabellam portat"

  ],

  "shuffle": true,

  "points": 1

},

      {

        "id": "p1-l6-t4",

        "type": "matching",

        "prompt": "📜 Associe phrase et sens.",

        "pairs": [

          {

            "left": "Marcus tabellam portat",

            "right": "Marcus porte la tablette"

          },

          {

            "left": "Lucius epistulam quaerit",

            "right": "Lucius cherche la lettre"

          },

          {

            "left": "Livia tabellam habet",

            "right": "Livia a la tablette"

          }

        ],

        "rightOptions": [

          "Livia a la tablette",

          "Marcus porte la tablette",

          "Lucius cherche la lettre"

        ],

        "expected": {

          "Marcus tabellam portat": "Marcus porte la tablette",

          "Lucius epistulam quaerit": "Lucius cherche la lettre",

          "Livia tabellam habet": "Livia a la tablette"

        },

        "points": 1

      },

      {

        "id": "p1-l6-t5",

        "type": "singleChoice",

        "prompt": "📜 Piège : « Tabellam Marcus portat » signifie :",

        "options": [

          "Marcus porte la tablette",

          "La tablette porte Marcus",

          "Marcus écrit la tablette",

          "Marcus voit la tablette",

          "Lucius porte la tablette"

        ],

        "expected": "Marcus porte la tablette",

        "shuffle": true,

        "points": 1,

        "feedback": "La terminaison en -am signale ici le complément."

      },

      {

        "id": "p1-l6-t6",

        "type": "singleChoice",

        "prompt": "📜 Dans la scène, quel verbe dit qu’on trouve l’objet ?",

        "options": [

          "invenit",

          "quaerit",

          "habet",

          "manet",

          "latrat"

        ],

        "expected": "invenit",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p1-l6-t7",

        "type": "textInput",

        "prompt": "📜 Écris en latin : « lettre ».",

        "expected": "epistula",

        "points": 1

      }

    ],

    "production": [

      {

        "id": "p1-l6-p1",

        "type": "textInput",

        "prompt": "📜 Traduis en français : Marcus tabellam portat",

        "expected": "marcus porte la tablette",

        "acceptedAnswers": [

          "marcus porte la tablette",

          "marcus porte une tablette",

          "marcus apporte une tablette",

          "marcus apporte la tablette",

          "marcus transporte la tablette",

          "marcus transporte une tablette"

        ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted": [

            "marcus porte la tablette",

            "marcus porte une tablette",

            "marcus apporte une tablette",

            "marcus apporte la tablette",

            "marcus transporte la tablette",

            "marcus transporte une tablette"

          ]

        },

        "points": 1,

        "canonicalAnswer": "marcus porte la tablette",

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

            "input": "marcus porte la tablette",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

      {

        "id": "p1-l6-p2",

        "type": "textInput",

        "prompt": "📜 Traduis en français : Lucius epistulam invenit",

        "expected": "lucius trouve la lettre",

        "acceptedAnswers": [

          "lucius trouve la lettre",

          "lucius retrouve la lettre",

          "lucius découvre la lettre",

          "lucius trouve une lettre",

          "lucius retrouve une lettre",

          "lucius découvre une lettre"

        ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted": [

            "lucius trouve la lettre",

            "lucius retrouve la lettre",

            "lucius découvre la lettre",

            "lucius trouve une lettre",

            "lucius retrouve une lettre",

            "lucius découvre une lettre"

          ]

        },

        "points": 1,

        "canonicalAnswer": "lucius trouve la lettre",

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

            "input": "lucius trouve la lettre",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

      {

        "id": "p1-l6-p3",

        "type": "textInput",

        "prompt": "📜 Traduis en latin : Livia cherche la tablette",

        "expected": "Livia tabellam quaerit",

        "acceptedAnswers": [

          "Livia tabellam quaerit",

          "Livia quaerit tabellam",

          "tabellam Livia quaerit",

          "tabellam quaerit Livia",

          "quaerit Livia tabellam",

          "quaerit tabellam Livia"

        ],

        "answerConfig": {

          "type": "one-of",

          "language": "latin",

          "accepted": [

            "Livia tabellam quaerit",

            "Livia quaerit tabellam",

            "tabellam Livia quaerit",

            "tabellam quaerit Livia",

            "quaerit Livia tabellam",

            "quaerit tabellam Livia"

          ]

        },

        "points": 1,

        "canonicalAnswer": "Livia tabellam quaerit",

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

            "input": "Livia tabellam quaerit",

            "isCorrect": true

          },

          {

            "input": "lorem ipsum",

            "isCorrect": false

          }

        ]

      }

    ],

    "summary": {

      "retains": [

        "Je suis une enquête simple en reliant action et objet.",

        "Chercher, trouver, porter : les verbes structurent la lecture et la progression de l'histoire."

      ],

      "cahier": [

        "tabella",

        "epistula",

        "Livia tabellam quaerit"

      ],

      "keywords": [

        "tablette",

        "enquête",

        "verbes"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "tablette",

        "incident",

        "p1-l6"

      ]

    }

  },

  {

    "id": "p1-l7",

    "period": 1,

    "periodId": "p1",

    "title": "À la fontaine - Prépositions",

    subtitle: headerContexts5eP1["p1-l7"],

    "objective": "Comprendre une scène de fontaine perturbée et les actions du quotidien.",

    "lessonPoint": "Je lis les lieux avec in/ad pour suivre le déplacement.",

    "canDo": [

      "Je comprends une scène autour de l’eau.",

      "Je distingue position et mouvement.",

      "Je traduis des phrases courtes de lieu."

    ],

    "lexicon": [

      "fons = fontaine",

      "aqua = eau",

      "situla = seau",

      "in fonte = à la fontaine",

      "ad fontem = vers la fontaine",

      "venit = il/elle vient",

      "manet = il/elle reste",

      "turbat = il/elle trouble",
      "porto, portas, portat = je porte, tu portes, il/elle porte"

    ],

    "maxScore": 10,

    "training": [

    {
  "id": "p1-l7-t1",
  "type": "singleChoice",
  "prompt": "⛲ Dans « Marcus ad fontem venit », quel mot indique la direction ?",
  "options": [
    "Marcus",
    "ad",
    "venit",
    "fontem"
  ],
  "expected": "ad",
  "shuffle": true,
  "points": 1
},

      {

        "id": "p1-l7-t2",

        "type": "singleChoice",

        "prompt": "⛲ « Marcus ad fontem venit » : Marcus va…",

        "options": [

          "vers la fontaine",

          "dans la maison",

          "sous le mur",

          "au sanctuaire",

          "au four"

        ],

        "expected": "vers la fontaine",

        "shuffle": true,

        "points": 1

      },

     {
  "id": "p1-l7-t3",
  "type": "multipleChoice",
  "prompt": "⛲ Mini-scène : « Lucius aquam portat. Niger situlam turbat. » Coche les deux compléments d'objet.",
  "options": [
    "aquam",
    "situlam",
    "Lucius",
    "Niger",
    "turbat"
  ],
  "expected": [
    "aquam",
    "situlam"
  ],
  "shuffle": true,
  "points": 1
},

      {

        "id": "p1-l7-t4",

        "type": "matching",

        "prompt": "⛲ Associe expression et sens.",

        "pairs": [

          {

            "left": "in fonte",

            "right": "à la fontaine"

          },

          {

            "left": "ad fontem",

            "right": "vers la fontaine"

          },

          {

            "left": "aquam portat",

            "right": "porte de l’eau"

          }

        ],

        "rightOptions": [

          "vers la fontaine",

          "porte de l’eau",

          "à la fontaine"

        ],

        "expected": {

          "in fonte": "à la fontaine",

          "ad fontem": "vers la fontaine",

          "aquam portat": "porte de l’eau"

        },

        "points": 1

      },

      {

        "id": "p1-l7-t5",

        "type": "singleChoice",

        "prompt": "⛲ « Aquam Lucius portat » : qui porte l’eau ?",

        "options": [

          "Lucius",

          "aquam",

          "fons",

          "Niger",

          "Aurelia"

        ],

        "expected": "Lucius",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p1-l7-t6",

        "type": "singleChoice",

        "prompt": "⛲ Le verbe turbat veut dire :",

        "options": [

          "trouble",

          "calme",

          "regarde",

          "écrit",

          "salue"

        ],

        "expected": "trouble",

        "shuffle": true,

        "points": 1,

        "feedback": "Ce verbe sert pour les scènes de discorde."

      },

      {

        "id": "p1-l7-t7",

        "type": "textInput",

        "prompt": "⛲ Complète : « Aurelia ... manet » pour dire « Aurélia reste à la fontaine ».",

        "expected": "in fonte",

        "acceptedAnswers": [

          "in fonte"

        ],

        "answerConfig": {

          "type": "one-of",

          "language": "latin",

          "accepted": [

            "in fonte"

          ]

        },

        "points": 1

      }

    ],

    "production": [

      {

        "id": "p1-l7-p1",

        "type": "textInput",

        "prompt": "⛲ Traduis en français : Aurelia ad fontem venit",

        "expected": "aurélia vient vers la fontaine",

        "acceptedAnswers": [
  "aurélia vient vers la fontaine",
  "aurélia vient à la fontaine",
  "aurélia va à la fontaine",
  "aurélia se dirige vers la fontaine",
  "aurélia se rend à la fontaine",
  "aurélia arrive à la fontaine"
],
"answerConfig": {
  "type": "translation-segment",
  "language": "fr",
  "accepted": [
    "aurélia vient vers la fontaine",
    "aurélia vient à la fontaine",
    "aurélia va à la fontaine",
    "aurélia se dirige vers la fontaine",
    "aurélia se rend à la fontaine",
    "aurélia arrive à la fontaine"
  ]
},

        "points": 1,

        "canonicalAnswer": "aurélia vient vers la fontaine",

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

            "input": "aurélia vient vers la fontaine",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

            {

        "id": "p1-l7-p2",

        "type": "textInput",

        "prompt": "⛲ Traduis en français : Lucius situlam portat",

        "expected": "lucius porte le seau",

        "acceptedAnswers": [

          "lucius porte le seau",

          "lucius apporte le seau",

          "lucius transporte le seau",

          "lucius porte un seau",

          "lucius apporte un seau",

          "lucius transporte un seau",

          "lucius porte son seau",

          "lucius apporte son seau",

          "lucius transporte son seau"

        ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted": [

            "lucius porte le seau",

            "lucius apporte le seau",

            "lucius transporte le seau",

            "lucius porte un seau",

            "lucius apporte un seau",

            "lucius transporte un seau",

            "lucius porte son seau",

            "lucius apporte son seau",

            "lucius transporte son seau"

          ]

        },

        "points": 1,

        "canonicalAnswer": "lucius porte le seau",

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

            "input": "lucius porte le seau",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

      {

        "id": "p1-l7-p3",

        "type": "textInput",

        "prompt": "⛲ Traduis en latin : Niger trouble la fontaine",

        "expected": "Niger fontem turbat",

        "acceptedAnswers": [

          "Niger fontem turbat",

          "Niger turbat fontem",

          "fontem Niger turbat",

          "fontem turbat Niger",

          "turbat Niger fontem",

          "turbat fontem Niger"

        ],

        "answerConfig": {

          "type": "one-of",

          "language": "latin",

          "accepted": [

            "Niger fontem turbat",

            "Niger turbat fontem",

            "fontem Niger turbat",

            "fontem turbat Niger",

            "turbat Niger fontem",

            "turbat fontem Niger"

          ]

        },

        "points": 1,

        "canonicalAnswer": "Niger fontem turbat",

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

            "input": "Niger fontem turbat",

            "isCorrect": true

          },

          {

            "input": "lorem ipsum",

            "isCorrect": false

          }

        ]

      }

    ],

    "summary": {

      "retains": [

        "in et ad sont des prépositions : elles permettent de préciser un mouvement.",

        "= Je repère mouvement, lieu, action dans une même phrase."

      ],

      "cahier": [

        "ad fontem",

        "in fonte",

        "Lucius aquam portat"

      ],

      "keywords": [

        "fontaine",

        "aqua",

        "mouvement"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "fontaine",

        "in-ad",

        "p1-l7"

      ]

    }

  },

  {

    "id": "p1-l8",

    "period": 1,

    "periodId": "p1",

    "title": "Chez le boulanger - Sujet/Complément",

    subtitle: headerContexts5eP1["p1-l8"],

    "objective": "Lire une micro-scène dans une boulangerie et consolider sujet/complément.",

    "lessonPoint": "Le verbe et la terminaison du nom guident la fonction dans la phrase.",

    "canDo": [

      "Je comprends une scène de métier.",

      "Je repère qui agit et ce qui est transporté.",

      "Je traduis des phrases courtes du quotidien."

    ],

    "lexicon": [

      "pistor = meunier / boulanger",

      "panis (nom.), panem (acc.) = pain",
      "farina (nom.), farinam (acc.) = farine",

      "taberna = boutique",

      "emit = il/elle achète",

      "portat = il/elle porte",

      "videt = il/elle voit",

      "accipit = il/elle reçoit"

    ],

    "maxScore": 10,

    "training": [

      {
  "id": "p1-l8-t1",
  "type": "singleChoice",
  "prompt": "🍞 Dans « Pistor panem portat », quel mot est le complément d’objet direct ?",
  "options": [
    "Pistor",
    "panem",
    "portat",
  ],
  "expected": "panem",
  "shuffle": true,
  "points": 1
},

      {

        "id": "p1-l8-t2",

        "type": "singleChoice",

        "prompt": "🍞 « Flavia panem emit » : Flavia…",

        "options": [

          "achète du pain",

          "porte du pain",

          "voit du pain",

          "écrit du pain",

          "crie"

        ],

        "expected": "achète du pain",

        "shuffle": true,

        "points": 1

      },

     {
  "id": "p1-l8-t3",
  "type": "multipleChoice",
  "prompt": "🍞 Mini-scène : « Pistor panem portat. Flavia farinam accipit. » Coche les deux compléments d’objet.",
  "options": [
    "panem",
    "farinam",
    "Pistor",
    "Flavia",
    "accipit"
  ],
  "expected": [
    "panem",
    "farinam"
  ],
  "shuffle": true,
  "points": 1
},

          {

        "id": "p1-l8-t4",

        "type": "matching",

        "prompt": "🍞 Associe phrase et sens.",

        "pairs": [

          {

            "left": "Pistor panem portat",

            "right": "Le boulanger porte le pain"

          },

          {

            "left": "Flavia panem emit",

            "right": "Flavia achète du pain"

          },

          {

            "left": "Marcus panem videt",

            "right": "Marcus voit le pain"

          }

        ],

        "rightOptions": [

          "Marcus voit le pain",

          "Flavia achète du pain",

          "Le boulanger porte le pain"

        ],

        "expected": {

          "Pistor panem portat": "Le boulanger porte le pain",

          "Flavia panem emit": "Flavia achète du pain",

          "Marcus panem videt": "Marcus voit le pain"

        },

        "points": 1

      },

      {

        "id": "p1-l8-t5",

        "type": "singleChoice",

        "prompt": "🍞 Piège : « Panem pistor portat » signifie :",

        "options": [

          "Le boulanger porte le pain",

          "Le pain porte le boulanger",

          "Le boulanger vend le pain",

          "Flavia porte le pain",

          "Le four porte le pain"

        ],

        "expected": "Le boulanger porte le pain",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p1-l8-t6",

        "type": "singleChoice",

        "prompt": "🍞 Dans « Titus farinam accipit », accipit signifie :",

        "options": [

          "reçoit",

          "apporte",

          "regarde",

          "dérange",

          "salue"

        ],

        "expected": "reçoit",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p1-l8-t7",

        "type": "textInput",

        "prompt": "🍞 Écris en latin : « pain ».",

        "expected": "panis",

        "points": 1

      }

    ],

    "production": [

      {

        "id": "p1-l8-p1",

        "type": "textInput",

        "prompt": "🍞 Traduis en français : Pistor panem portat",

        "expected": "le boulanger porte le pain",

        "acceptedAnswers": [

          "le boulanger porte le pain",

          "le boulanger apporte le pain",

          "le boulanger transporte le pain",

          "le boulanger porte du pain",

          "le boulanger apporte du pain",

          "le boulanger transporte du pain"

        ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted": [

            "le boulanger porte le pain",

            "le boulanger apporte le pain",

            "le boulanger transporte le pain",

            "le boulanger porte du pain",

            "le boulanger apporte du pain",

            "le boulanger transporte du pain"

          ]

        },

        "points": 1,

        "canonicalAnswer": "le boulanger porte le pain",

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

            "input": "le boulanger porte le pain",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

      {

        "id": "p1-l8-p2",

        "type": "textInput",

        "prompt": "🍞 Traduis en français : Flavia panem emit",

        "expected": "flavia achète du pain",

        "acceptedAnswers":           [

            "flavia achète du pain",

            "flavia achète le pain",

            "flavia achète un pain",

            "flavia prend du pain",

            "flavia prend le pain",

            "flavia prend un pain"

          ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted":             [

              "flavia achète du pain",

              "flavia achète le pain",

              "flavia achète un pain"

            ],

          "synonyms":             [

              "flavia prend du pain",

              "flavia prend le pain",

              "flavia prend un pain"

            ]

        },

        "points": 1,

        "canonicalAnswer": "flavia achète du pain",

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

            "input": "flavia achète du pain",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

           {

        "id": "p1-l8-p3",

        "type": "textInput",

        "prompt": "🍞 Traduis en latin : Marcus voit le pain",

        "expected": "Marcus panem videt",

        "acceptedAnswers": [

          "Marcus panem videt",

          "Marcus videt panem",

          "panem Marcus videt",

          "panem videt Marcus",

          "videt Marcus panem",

          "videt panem Marcus"

        ],

        "answerConfig": {

          "type": "one-of",

          "language": "latin",

          "accepted": [

            "Marcus panem videt",

            "Marcus videt panem",

            "panem Marcus videt",

            "panem videt Marcus",

            "videt Marcus panem",

            "videt panem Marcus"

          ]

        },

        "points": 1,

        "canonicalAnswer": "Marcus panem videt",

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

            "input": "Marcus panem videt",

            "isCorrect": true

          },

          {

            "input": "lorem ipsum",

            "isCorrect": false

          }

        ]

      }

    ],

    "summary": {

      "retains": [

        "La scène de métier consolide les mêmes repères grammaticaux : sujet, verbe, complément.",

        "Pour traduire : je pars du verbe, je trouve le sujet... et tout le reste est du complément !"

      ],

      "cahier": [

        "Pistor panem portat",

        "Flavia panem emit"

      ],

      "keywords": [

        "boulanger",

        "panis",

        "quotidien"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "metier",

        "boutique",

        "p1-l8"

      ]

    }

  },

  {

    "id": "p1-l9",

    "period": 1,

    "periodId": "p1",

    "title": "L’école du quartier - Verbes scolaires",

    subtitle: headerContexts5eP1["p1-l9"],

    "objective": "Comprendre de petites consignes et scènes de classe dans la petite école de Subure.",

    "lessonPoint": "Je cherche le verbe d’énoncé (legit, scribit, audit) pour comprendre la tâche.",

    "canDo": [

      "Je lis une mini-scène de classe.",

      "Je relie action d’étude et personnage.",

      "Je traduis des phrases scolaires courtes."

    ],

    "lexicon": [

      "ludus = l'école",

      "magister (nom.), magistrum (acc.) = le maître d'école",
      "discipulus (nom.), discipulum (acc.) = l'élève",

      "tabella = tablette",

      "legit = il/elle lit",

      "scribit = il/elle écrit",

      "audit = il/elle écoute",

      "respondet = il/elle répond"

    ],

    "maxScore": 10,

    "training": [

      {

        "id": "p1-l9-t1",

        "type": "singleChoice",

        "prompt": "🎓 Le lieu de classe est :",

        "options": [

          "ludus",

          "forum",

          "thermae",

          "taberna",

          "domus"

        ],

        "expected": "ludus",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p1-l9-t2",

        "type": "singleChoice",

        "prompt": "🎓 Le magister est :",

        "options": [

          "le maître",

          "l’élève",

          "le marchand",

          "le chien",

          "la prêtresse"

        ],

        "expected": "le maître",

        "shuffle": true,

        "points": 1

      },

     {
  "id": "p1-l9-t3",
  "type": "multipleChoice",
  "prompt": "🎓 Mini-scène : « Discipulus magistrum audit. Magister discipulum audit. » Coche les deux personnes qui sont écoutées.",
  "options": [
    "magistrum",
    "discipulum",
    "discipulus",
    "Magister",
    "audit"
  ],
  "expected": [
    "magistrum",
    "discipulum"
  ],
  "shuffle": true,
  "points": 1
},

      {

        "id": "p1-l9-t4",

        "type": "matching",

        "prompt": "🎓 Associe phrase et sens.",

        "pairs": [

          {

            "left": "Discipulus in tabella scribit",

            "right": "L'élève écrit sur la tablette"

          },

          {

            "left": "Magister legit",

            "right": "Le maître lit"

          },

          {

            "left": "Marcus respondet",

            "right": "Marcus répond"

          }

        ],

        "rightOptions": [

          "Marcus répond",

          "Le maître lit",

          "L'élève écrit sur la tablette"

        ],

        "expected": {

          "Discipulus in tabella scribit": "L'élève écrit sur la tablette",

          "Magister legit": "Le maître lit",

          "Marcus respondet": "Marcus répond"

        },

        "points": 1

      },

      {

        "id": "p1-l9-t5",

        "type": "singleChoice",

        "prompt": "🎓 Piège : « In tabella discipulus scribit » veut dire :",

        "options": [

          "L’élève écrit sur la tablette",

          "La tablette écrit sur l’élève",

          "L’élève lit la tablette",

          "Le maître écrit sur la tablette",

          "L’élève répond au maître"

        ],

        "expected": "L’élève écrit sur la tablette",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p1-l9-t6",

        "type": "singleChoice",

        "prompt": "🎓 Dans « Titus audit », audit signifie :",

        "options": [

          "écoute",

          "écrit",

          "porte",

          "court",

          "salue"

        ],

        "expected": "écoute",

        "shuffle": true,

        "points": 1

      },

     {
  "id": "p1-l9-t7",
  "type": "textInput",
  "prompt": "🎓 Complète en latin : « L’élève écoute le maître » = Discipulus ____ audit.",
  "expected": "magistrum",
  "points": 1
}

    ],

    "production": [

      {

        "id": "p1-l9-p1",

        "type": "textInput",

        "prompt": "🎓 Traduis en français : Magister legit",

        "expected": "le maître lit",

      "acceptedAnswers": [
  "le maître lit",
  "un maître lit",
  "le professeur lit",
  "un professeur lit",
  "l'enseignant lit",
  "un enseignant lit"
],
"answerConfig": {
  "type": "translation-segment",
  "language": "fr",
  "accepted": [
    "le maître lit",
    "un maître lit"
  ],
  "synonyms": [
    "le professeur lit",
    "un professeur lit",
    "l'enseignant lit",
    "un enseignant lit"
  ]
},

        "points": 1,

        "canonicalAnswer": "le maître lit",

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

            "input": "le maître lit",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

      {
  "id": "p1-l9-p2",
  "type": "textInput",
  "prompt": " Traduis en français : Marcus respondet",
  "expected": "marcus répond",
  "acceptedAnswers": [
  "marcus répond",
  "marcus donne une réponse",
  "marcus donne sa réponse",
  "marcus fait une réponse",
  "marcus apporte une réponse"
],
"answerConfig": {
  "type": "translation-segment",
  "language": "fr",
  "tolerateArticles": true,
  "accepted": [
    "marcus répond",
    "marcus donne une réponse",
    "marcus donne sa réponse",
    "marcus fait une réponse",
    "marcus apporte une réponse"
  ]
},
  "points": 1,
  "canonicalAnswer": "marcus répond",
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
    { "input": "marcus répond", "isCorrect": true },
    { "input": "marcus donne sa réponse", "isCorrect": true },
    { "input": "marcus fait une réponse", "isCorrect": true },
    { "input": "réponse hors-sujet", "isCorrect": false }
  ]
},

      {

        "id": "p1-l9-p3",

        "type": "textInput",

        "prompt": "🎓 Traduis en latin : l’élève écoute le maître",

        "expected": "Discipulus magistrum audit",

        "acceptedAnswers": [

          "Discipulus magistrum audit",

          "Discipulus audit magistrum",

          "magistrum Discipulus audit",

          "magistrum audit Discipulus",

          "audit Discipulus magistrum",

          "audit magistrum Discipulus"

        ],

        "answerConfig": {

          "type": "one-of",

          "language": "latin",

          "accepted": [

            "Discipulus magistrum audit",

            "Discipulus audit magistrum",

            "magistrum Discipulus audit",

            "magistrum audit Discipulus",

            "audit Discipulus magistrum",

            "audit magistrum Discipulus"

          ]

        },

        "points": 1,

        "canonicalAnswer": "Discipulus magistrum audit",

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

            "input": "Discipulus magistrum audit",

            "isCorrect": true

          },

          {

            "input": "lorem ipsum",

            "isCorrect": false

          }

        ]

      }

    ],

    "summary": {

      "retains": [

        "En classe aussi, je lis en cherchant d’abord le verbe.",

        "Le complément peut passer avant le sujet en latin."

      ],

      "cahier": [

        "Magister legit",

        "Discipulus magistrum audit"

      ],

      "keywords": [

        "ludus",

        "magister",

        "lecture"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "ecole",

        "lecture",

        "p1-l9"

      ]

    }

  },

  {

    "id": "p1-l10",

    "period": 1,

    "periodId": "p1",

    "title": "Aux thermes - Prépositions",

    subtitle: headerContexts5eP1["p1-l10"],

    "objective": "Lire une scène simple aux thermes et repérer actions et lieux.",

    "lessonPoint": "Les prépositions et le verbe suffisent souvent pour comprendre la situation.",

    "canDo": [

      "Je comprends une phrase de déplacement aux thermes.",

      "Je repère une action collective simple.",

      "Je traduis des phrases brèves de scène urbaine."

    ],

    "lexicon": [

      "thermae = les thermes",
      "in thermas (accusatif) = dans les thermes (mouvement / direction)",
      "ad thermas (accusatif) = vers les thermes (mouvement / direction)",

      "in thermis (ablatif) = aux thermes (situation fixe)",

      "aqua = eau",

      "calida = chaude",

      "frigida = froide",

      


      "intrat = il/elle entre",

      "currit = il/elle court",

      "manet = il/elle reste"

    ],

    "maxScore": 10,

    "training": [

      {

        "id": "p1-l10-t1",

        "type": "singleChoice",

        "prompt": "🛁 Quel groupe indique qu’on va vers les thermes, et non qu’on y reste déjà ?",

        "options": [

          "ad thermas",

          "in thermis",

          "aqua calida",

          "thermae",

          "manet"

        ],

        "expected": "ad thermas",

        "shuffle": true,

        "points": 1,

        "feedback": "ad thermas marque ici le mouvement vers le lieu ; in thermis indique le lieu où l’on se trouve."

      },

      {

        "id": "p1-l10-t2",

        "type": "singleChoice",

        "prompt": "🛁 « Marcus ad thermas currit » : Marcus court…",

        "options": [

          "vers les thermes",

          "dans la maison",

          "vers le forum",

          "sous le mur",

          "à l’école"

        ],

        "expected": "vers les thermes",

        "shuffle": true,

        "points": 1

      },

    {
  "id": "p1-l10-t3",
  "type": "multipleChoice",
  "prompt": "🛁 Coche les deux groupes correctement formés pour parler de l’eau aux thermes.",
  "options": [
    "aqua calida",
    "aqua frigida",
    "aqua calidus",
    "aqua frigidus",
    "thermae frigida"
  ],
  "expected": [
    "aqua calida",
    "aqua frigida"
  ],
  "shuffle": true,
  "points": 1
},

      {

        "id": "p1-l10-t4",

        "type": "matching",

        "prompt": "🛁 Associe expression et sens.",

        "pairs": [

          {

            "left": "in thermis",

            "right": "dans les thermes"

          },

          {

            "left": "ad thermas",

            "right": "vers les thermes"

          },

          {

            "left": "aqua calida",

            "right": "eau chaude"

          }

        ],

        "rightOptions": [

          "eau chaude",

          "dans les thermes",

          "vers les thermes"

        ],

        "expected": {

          "in thermis": "dans les thermes",

          "ad thermas": "vers les thermes",

          "aqua calida": "eau chaude"

        },

        "points": 1

      },

           {
  "id": "p1-l10-t5",
  "type": "singleChoice",
  "prompt": "🛁 Piège : « Marcus in thermas intrat » signifie :",
  "options": [
    "Marcus entre dans les thermes",
    "Marcus reste dans les thermes",
    "Marus se trouve dans les thermes",
    "Marcus court vers les thermes",
    "Marcus sort des thermes",
    "Marcus voit les thermes"
  ],
  "expected": "Marcus entre dans les thermes",
  "shuffle": true,
  "points": 1
},

      {

        "id": "p1-l10-t6",

        "type": "singleChoice",

        "prompt": "🛁 Dans « Livia in thermis manet », manet signifie :",

        "options": [

          "reste",

          "court",

          "porte",

          "perturbe",

          "écrit"

        ],

        "expected": "reste",

        "shuffle": true,

        "points": 1

      },

     {
  "id": "p1-l10-t7",
  "type": "textInput",
  "prompt": "🛁 Écris en latin : « eau chaude ».",
  "expected": "aqua calida",
  "acceptedAnswers": [
    "aqua calida",
    "calida aqua"
  ],
  "answerConfig": {
    "type": "one-of",
    "language": "latin",
    "accepted": [
      "aqua calida",
      "calida aqua"
    ]
  },
  "points": 1
}

    ],

    "production": [

      {

        "id": "p1-l10-p1",

        "type": "textInput",

        "prompt": "🛁 Traduis en français : Marcus ad thermas currit",

        "expected": "marcus court vers les thermes",

        "acceptedAnswers":           [

            "marcus court vers les thermes",

            "marcus court aux thermes",

            "marcus va vers les thermes",

            "marcus court jusqu'aux thermes",

            "marcus court en direction des thermes",

            "marcus court vers les bains",

            "marcus court aux bains",

            "marcus va vers les bains"

          ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted":             [

              "marcus court vers les thermes",

              "marcus court aux thermes",

              "marcus va vers les thermes",

              "marcus court jusqu'aux thermes",

              "marcus court en direction des thermes"

            ],

          "synonyms":             [

              "marcus court vers les bains",

              "marcus court aux bains",

              "marcus va vers les bains"

            ]

        },

        "points": 1,

        "canonicalAnswer": "marcus court vers les thermes",

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

            "input": "marcus court vers les thermes",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

      {

        "id": "p1-l10-p2",

        "type": "textInput",

        "prompt": "🛁 Traduis en français : Livia in thermis manet",

        "expected": "livia reste dans les thermes",

      "acceptedAnswers": [
  "livia reste dans les thermes",
  "livia reste aux thermes",
  "livia demeure dans les thermes",
  "livia demeure aux thermes",
  "livia se trouve dans les thermes",
  "livia se trouve aux thermes",
  "livia est dans les thermes",
  "livia est aux thermes"
],
"answerConfig": {
  "type": "translation-segment",
  "language": "fr",
  "accepted": [
    "livia reste dans les thermes",
    "livia reste aux thermes",
    "livia demeure dans les thermes",
    "livia demeure aux thermes",
    "livia se trouve dans les thermes",
    "livia se trouve aux thermes",
    "livia est dans les thermes",
    "livia est aux thermes"
  ]
},

        "points": 1,

        "canonicalAnswer": "livia reste dans les thermes",

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

            "input": "livia reste dans les thermes",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

            {
  "id": "p1-l10-p3",
  "type": "textInput",
  "prompt": "🛁 Traduis en latin : Titus entre dans les thermes",
  "expected": "Titus in thermas intrat",
  "acceptedAnswers": [
    "Titus in thermas intrat",
    "Titus intrat in thermas",
    "in thermas Titus intrat",
    "in thermas intrat Titus",
    "intrat Titus in thermas",
    "intrat in thermas Titus"
  ],
  "answerConfig": {
    "type": "one-of",
    "language": "latin",
    "accepted": [
      "Titus in thermas intrat",
      "Titus intrat in thermas",
      "in thermas Titus intrat",
      "in thermas intrat Titus",
      "intrat Titus in thermas",
      "intrat in thermas Titus"
    ]
  },
  "points": 1,
  "canonicalAnswer": "Titus in thermas intrat",
  "normalization": {
    "trim": true,
    "collapseSpaces": true,
    "ignoreCase": true,
    "ignorePunctuation": true,
    "normalizeApostrophes": true,
    "ignoreDiacritics": true
  },
  "gradingFocus": "Préposition de direction correcte + verbe correct ; ordre latin flexible accepté.",
  "rejectIf": [
    "verbe incorrect",
    "sens inversé sujet/objet",
    "forme latine impossible au niveau de la leçon"
  ],
  "tests": [
    { "input": "Titus in thermas intrat", "isCorrect": true },
    { "input": "intrat Titus in thermas", "isCorrect": true },
    { "input": "réponse hors-sujet", "isCorrect": false }
  ]
}

    ],

       "summary": {

      "retains": [

        "AD + accusatif marque un déplacement, IN + ablatif une position fixe.",

        "Même en contexte culturel, je garde mes réflexes de lecture."

      ],

      "cahier": [

        "ad thermas",

        "in thermis",

        "Titus thermas intrat"

      ],

      "keywords": [

        "thermes",

        "lieux",

        "prépositions"

       ]

    }

  },

  {

    "id": "p1-l11",

    "period": 1,

    "periodId": "p1",

    "title": "Un graffiti sur le mur ! - Lecture globale",

    subtitle: headerContexts5eP1["p1-l11"],

    "objective": "Comprendre une inscription sur le mur et relier lecture, sens et contexte narratif.",

    "lessonPoint": "Je lis mot à mot puis je recompose le sens global.",

    "canDo": [

      "Je déchiffre une courte inscription latine.",

      "Je distingue message et commentaire.",

      "Je traduis une phrase d’alerte."

    ],

    "lexicon": [

      "murus = mur",

      "scriptum = inscription",

      "nomen = le nom",

      "Discordia = Discorde (déesse)",

      "videt = il/elle voit",

      "legit = il/elle lit",

      "scribit = il/elle écrit",

      "timet = il/elle craint"

    ],

    "maxScore": 10,

    "training": [

      {
  "id": "p1-l11-t1",
  "type": "singleChoice",
  "prompt": "🧱 Dans « Nomen in muro est », quel groupe indique où se trouve le nom ?",
  "options": [
    "in muro",
    "nomen",
    "est",
    "muro",
    "Marcus"
  ],
  "expected": "in muro",
  "shuffle": true,
  "points": 1,
  "feedback": "in muro indique le lieu où se trouve le nom."
},

      {

        "id": "p1-l11-t2",

        "type": "singleChoice",

        "prompt": "🧱 « Marcus scriptum legit » : Marcus…",

        "options": [

          "lit une inscription",

          "écrit une inscription",

          "voit un chien",

          "porte une inscription",

          "court"

        ],

        "expected": "lit une inscription",

        "shuffle": true,

        "points": 1

      },

      {
  "id": "p1-l11-t3",
  "type": "multipleChoice",
  "prompt": "🧱 Dans la phrase « Marcus nomen legit in muro », coche l'objet (COD) et le verbe.",
  "options": [
    "legit",
    "nomen",
    "Marcus",
    "muro",
    "timet"
  ],
  "expected": [
    "legit",
    "nomen"
  ],
  "shuffle": true,
  "points": 1
},

      {

        "id": "p1-l11-t4",

        "type": "matching",

        "prompt": "🧱 Associe phrase et sens.",

        "pairs": [

          {

            "left": "Nomen in muro est",

            "right": "Un nom est sur le mur"

          },

          {

            "left": "Marcus legit",

            "right": "Marcus lit"

          },

          {

            "left": "Livia timet",

            "right": "Livia a peur"

          }

        ],

        "rightOptions": [

          "Livia a peur",

          "Marcus lit",

          "Un nom est sur le mur"

        ],

        "expected": {

          "Nomen in muro est": "Un nom est sur le mur",

          "Marcus legit": "Marcus lit",

          "Livia timet": "Livia a peur"

        },

        "points": 1

      },

      {

        "id": "p1-l11-t5",

        "type": "singleChoice",

        "prompt": "🧱 Piège : « Discordiam Marcus legit » signifie :",

        "options": [

          "Marcus lit le nom Discordia",

          "Discordia lit Marcus",

          "Marcus écrit le nom Discordia",

          "La discorde de Marcus est légitime",

          "Discordia aboie devant le mur"

        ],

        "expected": "Marcus lit le nom Discordia",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p1-l11-t6",

        "type": "singleChoice",

        "prompt": "🧱 Quel verbe signifie « craint » ?",

        "options": [

          "timet",

          "legit",

          "scribit",

          "portat",

          "manet"

        ],

        "expected": "timet",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p1-l11-t7",

        "type": "textInput",

        "prompt": "🧱 Écris en latin : « nom ».",

        "expected": "nomen",

        "points": 1

      }

    ],

    "production": [

      {

        "id": "p1-l11-p1",

        "type": "textInput",

        "prompt": "🧱 Traduis en français : Nomen in muro est",

        "expected": "un nom est sur le mur",

      "acceptedAnswers": [
  "un nom est sur le mur",
  "le nom est sur le mur",
  "un nom est inscrit sur le mur",
  "le nom est inscrit sur le mur",
  "un nom est gravé sur le mur",
  "le nom est gravé sur le mur"
],
"answerConfig": {
  "type": "translation-segment",
  "language": "fr",
  "tolerateArticles": true,
  "accepted": [
    "un nom est sur le mur",
    "le nom est sur le mur",
    "un nom est inscrit sur le mur",
    "le nom est inscrit sur le mur",
    "un nom est gravé sur le mur",
    "le nom est gravé sur le mur"
  ]
},

        "points": 1,

        "canonicalAnswer": "un nom est sur le mur",

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

            "input": "un nom est sur le mur",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

      {

        "id": "p1-l11-p2",

        "type": "textInput",

        "prompt": "🧱 Traduis en français : Livia Discordiam timet",

        "expected": "livia craint discordia",

        "acceptedAnswers":           [

            "livia craint discordia",

            "livia a peur de discordia",

            "livia redoute discordia",

            "livia craint la discorde",

            "livia a peur de la discorde",

            "livia redoute la discorde"

          ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted":             [

              "livia craint discordia",

              "livia a peur de discordia",

              "livia redoute discordia"

            ],

          "synonyms":             [

              "livia craint la discorde",

              "livia a peur de la discorde",

              "livia redoute la discorde"

            ]

        },

        "points": 1,

        "canonicalAnswer": "livia craint discordia",

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

            "input": "livia craint discordia",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

      {

        "id": "p1-l11-p3",

        "type": "textInput",

        "prompt": "🧱 Traduis en latin : Marcus lit l’inscription",

        "expected": "Marcus scriptum legit",

        "acceptedAnswers": [

          "Marcus scriptum legit",

          "Marcus legit scriptum",

          "scriptum Marcus legit",

          "scriptum legit Marcus",

          "legit Marcus scriptum",

          "legit scriptum Marcus"

        ],

        "answerConfig": {

          "type": "one-of",

          "language": "latin",

          "accepted": [

            "Marcus scriptum legit",

            "Marcus legit scriptum",

            "scriptum Marcus legit",

            "scriptum legit Marcus",

            "legit Marcus scriptum",

            "legit scriptum Marcus"

          ]

        },

        "points": 1,

        "canonicalAnswer": "Marcus scriptum legit",

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

            "input": "Marcus scriptum legit",

            "isCorrect": true

          },

          {

            "input": "lorem ipsum",

            "isCorrect": false

          }

        ]

      }

    ],

    "summary": {

      "retains": [

        "Discordia est une déesse redoutable, qui sème.. la discorde.",

        "Le sens global se construit à partir de mots simples bien reconnus."

      ],

      "cahier": [

        "Nomen in muro est",

        "Marcus scriptum legit"

      ],

      "keywords": [

        "murus",

        "inscription",

        "Discordia"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "inscription",

        "discordia",

        "p1-l11"

      ]

    }

  },

  {

    "id": "p1-l12",

    "period": 1,

    "periodId": "p1",

    "title": "La piste Discordia - Synthèse",

    subtitle: headerContexts5eP1["p1-l12"],

    "objective": "Synthétiser les acquis de P1 dans une scène finale de taverne, sans ajouter de notion nouvelle.",
    "lessonPoint": "Je combine sujet, verbe, COD et groupe de lieu pour comprendre la scène finale.",
    "canDo": [

      "Je comprends une micro-scène complète.",

      "Je repère rapidement sujet, verbe, complément.",

      "Je traduis des phrases de synthèse en restant précis."

    ],

   "lexicon": [
  "Discordia (nom.), Discordiam (acc.) = Discordia / Discorde",
  "nomen Discordiae = le nom de Discordia",
  "Subura = Subure (quartier)",
  "popina = taverne",
  "ad popinam = vers la taverne",
  "domus = maison",
  "murus = mur",
  "nomen = nom",
  "tabella (nom.), tabellam (acc.) = tablette",
  "portat = il/elle porte",
  "videt = il/elle voit",
  "timet = il/elle craint"
],

    "maxScore": 10,

    "training": [

   {
  "id": "p1-l12-t1",
  "type": "singleChoice",
  "prompt": "🧩 Dans « Marcus nomen Discordiae videt », quel mot est le verbe ?",
  "options": [
    "Marcus",
    "nomen",
    "Discordiae",
    "videt"
  ],
  "expected": "videt",
  "shuffle": true,
  "points": 1
},

      {

        "id": "p1-l12-t2",

        "type": "singleChoice",

        "prompt": "🧩 Traduction. « Marcus nomen videt » : Marcus…",

        "options": [

          "voit le nom",

          "porte le nom",

          "écrit le nom",

          "craint le nom",

          "appelle le nom"

        ],

        "expected": "voit le nom",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p1-l12-t3",

        "type": "multipleChoice",

        "prompt": "🧩 Coche les trois mots latins explicitement présents dans cette scène finale.",

        "options": [

          "popina",

          "nomen",

          "candela",

          "ludus",

          "discordia"

        ],

        "expected": [

          "popina",

          "nomen",

          "discordia"

        ],

        "shuffle": true,

        "points": 1

      },

     {
  "id": "p1-l12-t4",
  "type": "matching",
  "prompt": "🧩 Dans « Marcus nomen videt in popina », associe chaque élément à sa fonction.",
  "pairs": [
    {
      "left": "Marcus",
      "right": "sujet"
    },
    {
      "left": "nomen",
      "right": "COD"
    },
    {
      "left": "videt",
      "right": "verbe"
    }
  ],
  "rightOptions": [
    "verbe",
    "sujet",
    "COD"
  ],
  "expected": {
    "Marcus": "sujet",
    "nomen": "COD",
    "videt": "verbe"
  },
  "points": 1
},

      {

        "id": "p1-l12-t5",

        "type": "singleChoice",

        "prompt": "🧩 Piège : « Discordiam Livia timet » signifie :",

        "options": [

          "Livia craint Discordia",

          "Discordia craint Livia",

          "Livia voit Discordia",

          "Livia écrit Discordia",

          "Discordia porte Livia"

        ],

        "expected": "Livia craint Discordia",

        "shuffle": true,

        "points": 1

      },

    {
  "id": "p1-l12-t6",
  "type": "singleChoice",
  "prompt": "🧩 Dans « Marcus nomen Discordiae videt », quel élément Marcus voit-il ?",
  "options": [
    "Marcus",
    "nomen",
    "Discordiae",
    "videt"
  ],
  "expected": "nomen",
  "shuffle": true,
  "points": 1
},

     {
  "id": "p1-l12-t7",
  "type": "textInput",
  "prompt": "🧩 Écris en latin : « Marcus voit le nom ».",
  "expected": "Marcus nomen videt",
  "acceptedAnswers": [
    "Marcus nomen videt",
    "Marcus videt nomen",
    "nomen Marcus videt",
    "nomen videt Marcus",
    "videt Marcus nomen",
    "videt nomen Marcus"
  ],
  "answerConfig": {
    "type": "one-of",
    "language": "latin",
    "accepted": [
      "Marcus nomen videt",
      "Marcus videt nomen",
      "nomen Marcus videt",
      "nomen videt Marcus",
      "videt Marcus nomen",
      "videt nomen Marcus"
    ]
  },
  "points": 1
}
    ],

    "production": [

      {

        "id": "p1-l12-p1",

        "type": "textInput",

        "prompt": "🧩 Traduis en français : Marcus nomen Discordiae videt",

        "expected": "marcus voit le nom de discordia",

        "acceptedAnswers":           [

            "marcus voit le nom de discordia",
            "marcus voit le nom de discorde",

            "marcus voit le nom discordia",

            "marcus aperçoit le nom de discordia",
            "marcus aperçoit le nom de discorde",

            "marcus voit le nom de la discorde",

            "marcus aperçoit le nom de la discorde",

            "marcus aperçoit le nom discordia"

          ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted":             [

              "marcus voit le nom de discordia",

              "marcus voit le nom discordia",
              "marcus voit le nom de discorde",

            ],

          "synonyms":             [

              "marcus aperçoit le nom de discordia",

              "marcus voit le nom de la discorde",

              "marcus aperçoit le nom de la discorde",
              "marcus aperçoit le nom de discorde",


              "marcus aperçoit le nom discordia"

            ]

        },

        "points": 1,

        "canonicalAnswer": "marcus voit le nom de discordia",

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

            "input": "marcus voit le nom de discordia",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

      {

        "id": "p1-l12-p2",

        "type": "textInput",

        "prompt": "🧩 Traduis en français : Livia Discordiam timet",

        "expected": "livia craint discordia",

        "acceptedAnswers":           [

            "livia craint discordia",

            "livia a peur de discordia",

            "livia redoute discordia",

            "livia craint la discorde",

            "livia a peur de la discorde",

            "livia redoute la discorde"

          ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted":             [

              "livia craint discordia",

              "livia a peur de discordia",

              "livia redoute discordia"

            ],

          "synonyms":             [

              "livia craint la discorde",

              "livia a peur de la discorde",

              "livia redoute la discorde"

            ]

        },

        "points": 1,

        "canonicalAnswer": "livia craint discordia",

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

            "input": "livia craint discordia",

            "isCorrect": true

          },

          {

            "input": "réponse hors-sujet",

            "isCorrect": false

          }

        ]

      },

     {
  "id": "p1-l12-p3",
  "type": "textInput",
  "prompt": "🧩 Traduis en latin : Titus porte la tablette vers la taverne",
  "expected": "Titus tabellam ad popinam portat",
  "acceptedAnswers": [
    "Titus tabellam ad popinam portat",
    "Titus tabellam portat ad popinam",
    "Titus ad popinam tabellam portat",
    "Titus ad popinam portat tabellam",
    "Titus portat tabellam ad popinam",
    "Titus portat ad popinam tabellam",
    "tabellam Titus ad popinam portat",
    "tabellam Titus portat ad popinam",
    "tabellam ad popinam Titus portat",
    "tabellam ad popinam portat Titus",
    "tabellam portat Titus ad popinam",
    "tabellam portat ad popinam Titus",
    "ad popinam Titus tabellam portat",
    "ad popinam Titus portat tabellam",
    "ad popinam tabellam Titus portat",
    "ad popinam tabellam portat Titus",
    "ad popinam portat Titus tabellam",
    "ad popinam portat tabellam Titus",
    "portat Titus tabellam ad popinam",
    "portat Titus ad popinam tabellam",
    "portat tabellam Titus ad popinam",
    "portat tabellam ad popinam Titus",
    "portat ad popinam Titus tabellam",
    "portat ad popinam tabellam Titus"
  ],
  "answerConfig": {
    "type": "one-of",
    "language": "latin",
    "accepted": [
      "Titus tabellam ad popinam portat",
      "Titus tabellam portat ad popinam",
      "Titus ad popinam tabellam portat",
      "Titus ad popinam portat tabellam",
      "Titus portat tabellam ad popinam",
      "Titus portat ad popinam tabellam",
      "tabellam Titus ad popinam portat",
      "tabellam Titus portat ad popinam",
      "tabellam ad popinam Titus portat",
      "tabellam ad popinam portat Titus",
      "tabellam portat Titus ad popinam",
      "tabellam portat ad popinam Titus",
      "ad popinam Titus tabellam portat",
      "ad popinam Titus portat tabellam",
      "ad popinam tabellam Titus portat",
      "ad popinam tabellam portat Titus",
      "ad popinam portat Titus tabellam",
      "ad popinam portat tabellam Titus",
      "portat Titus tabellam ad popinam",
      "portat Titus ad popinam tabellam",
      "portat tabellam Titus ad popinam",
      "portat tabellam ad popinam Titus",
      "portat ad popinam Titus tabellam",
      "portat ad popinam tabellam Titus"
    ]
  },
  "points": 1,
  "canonicalAnswer": "Titus tabellam ad popinam portat",
  "normalization": {
    "trim": true,
    "collapseSpaces": true,
    "ignoreCase": true,
    "ignorePunctuation": true,
    "normalizeApostrophes": true,
    "ignoreDiacritics": true
  },
  "gradingFocus": "Réinvestissement guidé de P1 : COD + groupe de direction + ordre latin flexible.",
  "rejectIf": [
    "verbe incorrect",
    "sens inversé sujet/objet",
    "cas incorrect",
    "forme latine impossible au niveau de la leçon",
    "réponse hors-sujet"
  ],
  "tests": [
    { "input": "Titus tabellam ad popinam portat", "isCorrect": true },
    { "input": "portat Titus tabellam ad popinam", "isCorrect": true },
    { "input": "réponse hors-sujet", "isCorrect": false }
  ]
}

    ],

    "summary": {

      "retains": [

        "Je peux lire une petite scène complète en latin simple avec cohérence narrative.",

        "Validation de la période : 80 % et plus."

      ],

      "cahier": [

        "Marcus nomen Discordiae videt",

        "Livia Discordiam timet",

        "Titus tabellam ad forum portat"

      ],

      "keywords": [

        "Discordia",

        "Subura",

        "synthèse",

        "lecture",

        "validation"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "synthese",

        "discordia",

        "p1-l12"

      ]

    }

  },

  {

  "id": "p1-l13",

  "period": 1,

  "periodId": "p1",

  "title": "Sum et adsum - 'Être' au singulier",

  subtitle: headerContexts5eP1["p1-l13"],

  "objective": "Reconnaître et produire les formes sum, es, est, puis les relier à adsum déjà rencontré.",

  "lessonPoint": "Je reconnais les formes d’esse et je comprends que adsum signifie être là, être présent.",

  "canDo": [

    "Je reconnais sum, es, est.",

    "Je comprends adsum, ades, adest dans une scène simple.",

    "Je traduis et je produis de très courtes phrases avec être."

  ],

  "lexicon": [

    "sum = je suis",

    "es = tu es",

    "est = il / elle est",

    "adsum = je suis là, je suis présent",

    "ades = tu es là, tu es présent",

    "adest = il / elle est là, il / elle est présent(e)",

    "in domo = dans la maison",

    "in foro = sur le forum",

    "hic = ici"

  ],

  "maxScore": 10,

  "training": [

    {
  "id": "p1-l13-t1",
  "type": "singleChoice",
  "prompt": "🟢 Dans « ego sum, Marcus est », quelle forme signifie « il est » ?",
  "options": [
    "sum",
    "Marcus",
    "est",
    "ego"
  ],
  "expected": "est",
  "shuffle": true,
  "points": 1
},

    {

      "id": "p1-l13-t2",

      "type": "matching",

      "prompt": "🟢 Associe chaque forme à sa traduction.",

      "pairs": [

        {

          "left": "sum",

          "right": "je suis"

        },

        {

          "left": "es",

          "right": "tu es"

        },

        {

          "left": "est",

          "right": "il / elle est"

        }

      ],

      "rightOptions": [

        "il / elle est",

        "je suis",

        "tu es"

      ],

      "expected": {

        "sum": "je suis",

        "es": "tu es",

        "est": "il / elle est"

      },

      "points": 1

    },

    {

      "id": "p1-l13-t3",

      "type": "singleChoice",

      "prompt": "🟢 « adest » signifie surtout :",

      "options": [

        "il / elle est là",

        "il / elle marche",

        "il / elle écrit",

        "il / elle porte"

      ],

      "expected": "il / elle est là",

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p1-l13-t4",

      "type": "multipleChoice",

      "prompt": "🟢 Quelles phrases parlent de présence ?",

      "options": [

        "Marcus adest.",

        "Livia in domo est.",

        "Lucius tabellam portat.",

        "Flavia adest."

      ],

      "expected": [

        "Marcus adest.",

        "Livia in domo est.",

        "Flavia adest."

      ],

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p1-l13-t5",

      "type": "singleChoice",

      "prompt": "🟢 Dans « Livia in domo est », quel est le verbe ?",

      "options": [

        "Livia",

        "domo",

        "est",

        "in"

      ],

      "expected": "est",

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p1-l13-t6",

      "type": "matching",

      "prompt": "🟢 Associe chaque petite phrase à son sens.",

      "pairs": [

        {

          "left": "Marcus adest",

          "right": "Marcus est là"

        },

        {

          "left": "Flavia in foro est",

          "right": "Flavia est sur le forum"

        },

        {

          "left": "Lucius hic est",

          "right": "Lucius est ici"

        }

      ],

      "rightOptions": [

        "Lucius est ici",

        "Marcus est là",

        "Flavia est sur le forum"

      ],

      "expected": {

        "Marcus adest": "Marcus est là",

        "Flavia in foro est": "Flavia est sur le forum",

        "Lucius hic est": "Lucius est ici"

      },

      "points": 1

    },

    {

  "id": "p1-l13-t7",

  "type": "singleChoice",

  "prompt": "🟢 Mini-scène : « Marcus adest. Flavia adest. Lucius non adest. » Qui n’est pas là ?",

  "options": [

    "Lucius",

    "Marcus",

    "Flavia",

    "tout le monde est là"

  ],

  "expected": "Lucius",

  "shuffle": true,

  "points": 1

}

  ],

  "production": [

    {

      "id": "p1-l13-p1",

      "type": "textInput",

      "prompt": "🟢 Traduis en français : Marcus adest.",

      "expected": "marcus est là",

      "acceptedAnswers":         [

          "marcus est là",

          "marcus est présent",

          "marcus est ici",

          "marcus est bien là",

          "marcus est bien présent"

        ],

      "answerConfig": {

        "type": "translation-segment",

        "language": "fr",

        "accepted":           [

            "marcus est là",

            "marcus est présent",

            "marcus est ici"

          ],

        "synonyms":           [

            "marcus est bien là",

            "marcus est bien présent"

          ]

      },

      "points": 1,

      "canonicalAnswer": "marcus est là",

      "normalization": {

        "trim": true,

        "collapseSpaces": true,

        "ignoreCase": true,

        "ignorePunctuation": true,

        "normalizeApostrophes": true,

        "ignoreDiacritics": true

      },

      "gradingFocus": "Comprendre correctement adest dans une phrase très simple.",

      "rejectIf": [

        "verbe mal compris",

        "sens inversé",

        "réponse hors-sujet"

      ],

      "tests": [

        {

          "input": "marcus est là",

          "isCorrect": true

        },

        {

          "input": "marcus porte la tablette",

          "isCorrect": false

        }

      ]

    },

    {

      "id": "p1-l13-p2",

      "type": "textInput",

      "prompt": "🟢 Traduis en latin : Livia est dans la maison.",

      "expected": "Livia in domo est",

      "acceptedAnswers": [

        "Livia in domo est",

        "Livia est in domo",

        "in domo Livia est",

        "in domo est Livia",

        "est Livia in domo",

        "est in domo Livia"

      ],

      "answerConfig": {

        "type": "one-of",

        "language": "latin",

        "accepted": [

          "Livia in domo est",

          "Livia est in domo",

          "in domo Livia est",

          "in domo est Livia",

          "est Livia in domo",

          "est in domo Livia"

        ]

      },

      "points": 1,

      "canonicalAnswer": "Livia in domo est",

      "normalization": {

        "trim": true,

        "collapseSpaces": true,

        "ignoreCase": true,

        "ignorePunctuation": true,

        "normalizeApostrophes": true,

        "ignoreDiacritics": true

      },

      "gradingFocus": "Produire une phrase très simple avec esse et un groupe de lieu.",

      "rejectIf": [

        "forme incorrecte de esse",

        "groupe de lieu incorrect",

        "réponse hors-sujet"

      ],

      "tests": [

        {

          "input": "Livia in domo est",

          "isCorrect": true

        },

        {

          "input": "Livia domum est",

          "isCorrect": false

        }

      ]

    },

    {

      "id": "p1-l13-p3",

      "type": "textInput",

      "prompt": "🟢 Traduis en latin : Je suis là.",

      "expected": "adsum",

      "acceptedAnswers": [

        "adsum"

      ],

      "answerConfig": {

        "type": "one-of",

        "language": "latin",

        "accepted": [

          "adsum"

        ]

      },

      "points": 1,

      "canonicalAnswer": "adsum",

      "normalization": {

        "trim": true,

        "collapseSpaces": true,

        "ignoreCase": true,

        "ignorePunctuation": true,

        "normalizeApostrophes": true,

        "ignoreDiacritics": true

      },

      "gradingFocus": "Réemployer correctement adsum comme forme simple mémorisable.",

      "rejectIf": [

        "confusion avec sum",

        "forme inexistante",

        "réponse hors-sujet"

      ],

      "tests": [

        {

          "input": "adsum",

          "isCorrect": true

        },

        {

          "input": "sum",

          "isCorrect": false

        }

      ]

    }

  ],

  "summary": {

    "retains": [

      "sum / es / est = je suis / tu es / il est",

      "adsum / ades / adest = je suis là / tu es là / il est là"

    ],

    "cahier": [

      "Marcus adest",

      "Livia in domo est",

      "adsum = je suis là"

    ],

    "keywords": [

      "esse",

      "adsum",

      "présence",

      "être"

    ]

  },

  "meta": {

    "status": "ready",

    "tags": [

      "p1",

      "esse",

      "adsum",

      "presence"

    ]

  }

}

];

      
