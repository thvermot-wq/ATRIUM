// Données de leçons 5E · Période 1.

const headerContexts5eP1 = {

  "p1-l1": "Les pavés sont encore mouillés quand Niger rase les jambes des passants. «Ton chien a déjà choisi la bagarre», souffle Marcus, et l’animal file vers une porte entrouverte.",

  "p1-l2": "Aurelia reste sur le seuil pendant que Lucius écoute la rue d’un air distrait. «Une maison tranquille, ça n’existe que vue de dehors», dit-il en relevant la tête vers l’étage.",

  "p1-l3": "Sur la place, le marchand range son pain et son vin avec une hâte suspecte. «Celui-là vend, oui, mais il cache mieux qu’il ne compte», glisse Flavia, puis elle passe derrière l’étal.",

  "p1-l4": "Près du petit autel, la pierre porte une marque nette là où l’offrande manquait. «Quelqu’un a déplacé ça sans craindre qui que ce soit!», dit Livia, et elle redresse la couronne du bout des doigts.",

  "p1-l5": "Niger s’arrête devant un mur blanchi et renifle jusqu’à coller sa truffe au crépi. «Tu as trouvé quoi, cette fois ?» demande Marcus, puis il suit la fissure jusqu’à un tournant de ruelle.",

  "p1-l6": "Une tablette de cire circule enfin de main en main, graisseuse sur un coin. «On a écrit ça à la va-vite, mais on savait très bien où piquer», tranche Flavia, puis elle la retourne d’un geste sec.",

  "p1-l7": "À la fontaine, l’eau claque dans les seaux et personne ne raconte la même chose. «Une rumeur, ça assoiffe tout un quartier», lâche Marcus, en interrompant la troisième version.",

  "p1-l8": "Devant la boulangerie, l’odeur chaude attire du monde, mais Flavia ne regarde pas les miches : elle regarde les mains. « Ici, tout le monde prend, reçoit ou porte quelque chose. Si tu veux comprendre la scène, regarde ce que chacun a dans les bras. »",

  "p1-l9": "Dans la petite école, le maître lit haut et les élèves n’écoutent qu’à moitié. «Quand un enfant baisse les yeux comme ça, c’est qu’il sait quelque chose en plus», murmure Livia.",

  "p1-l10": "Aux bains, la buée colle aux bras et les voix passent d’un bassin à l’autre. «Ici, les gens lavent leur peau, jamais leur langue», dit Marcus, puis il se rapproche du bord sans faire de bruit.",

  "p1-l11": "Sur le mur, des accusations ont été griffés si fort que la chaux s’est soulevée. «Joli courage : écrire ça dehors et se taire dedans!», souffle Flavia, puis elle relit le nom une seconde fois.",

  "p1-l12": "Le soir, dans une popina, ils étalent pain, tablette et souvenirs du jour sur la même table. «On ne cherche plus un voleur, on cherche ce qui fait dérailler tout le monde», note Marcus, puis le silence tombe d’un coup.",

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

        "prompt": "👋 Si 'Flavia Sextum salutat' signifie 'Flavia salue Sextus' et 'Sextus Marcum salutat' signifie 'Sextus salue Marcus', traduis alors en latin : Marcus salue Flavia",

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

      "fenestra (nominatif) = fenêtre (sujet)",
      "fenestram (accusatif) = fenêtre (COD)",
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

        "prompt": "🏠 « Niger prope ianuam stat » : Niger se tient…",

        "options": [

          "près de la porte",

          "dans le forum",

          "sur le mur",

          "devant la porte",

          "dans l’école"

        ],

        "expected": "près de la porte",

        "shuffle": true,

        "points": 1,

        "feedback": "Dans le lexique, cherche le verbe stat puis le lieu prope ianuam."

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

        "prompt": "🏠 Traduis en latin : Niger regarde par la fenêtre",

        "expected": "Niger per fenestram spectat",

        "acceptedAnswers": [

          "Niger per fenestram spectat",

          "Niger spectat per fenestram",

          "per fenestram Niger spectat",

          "per fenestram spectat Niger",

          "spectat Niger per fenestram",

          "spectat per fenestram Niger"

        ],

        "answerConfig": {

          "type": "one-of",

          "language": "latin",

          "accepted": [

           "Niger per fenestram spectat",

          "Niger spectat per fenestram",

          "per fenestram Niger spectat",

          "per fenestram spectat Niger",

          "spectat Niger per fenestram",

          "spectat per fenestram Niger"

          ]

        },

        "points": 1,

        "canonicalAnswer": "Niger per fenestram spectat",

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

            "input": "Niger per fenestram spectat",

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

        "ante ianuam",

        "per fenestram"

      ],

      "keywords": [

        "domus",

        "insula",

        "ianua",

        "fenestra"

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
      "prima luce = à l'aube, au petit matin, dès les premières lueurs",

      "taberna (nom.) = boutique",
      "tabernam (acc.) = boutique (COD)",
      "in tabernam = dans la boutique (mouvement)",

      "lucerna (nom.) = lampe (sujet)",
      "lucernam (acc.) = lampe (COD)",

      "amphora (nom.) = amphore (sujet)",
      "amphoram (acc.) = amphore (COD)",

      "tunica (nom.) = tunique (sujet)",
      "tunicam (acc.) = tunique (COD)",

      "panis (nom.) = pain (sujet)",
      "panem (acc.) = pain (COD)",

      "mercator = marchand",

      "panis (nominatif) = pain (sujet)",
      "panem (accusatif) = pain (COD)",

      "vinum = vin",

      "portat = il/elle porte",

      "currit = il/elle court",
      "considerat = il/elle regarde, examine",
      "entrat = il/elle entre",

      "spectat = il/elle regarde",

      "vendit = il/elle vend",
      "emit = il/elle achète",

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

  "prompt": "🛍️ Mini-scène : « Lucius tunicam considerat. Mercator panem et vinum portat. Flavia in tabernam entrat. » Coche les deux objets que porte le marchand.",

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

        "prompt": "🛍️ « Panem Flavia emit. Niger currit in tabernam. Mercator amphoram portat » : qui achète le pain ?",

        "options": [

          "mercator",

          "un porteur",

          "un émissaire",

          "Flavia",

          "Niger"

        ],

        "expected": "Flavia",

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
  "prompt": "🛍️ Mini-scène : « Prima luce currit mercator ad forum. » Quel mot est le verbe conjugué ?",
  "options": [
    "Mercator",
    "ad forum",
    "currit",
    "prima luce"
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
      "libum = petit gâteau",
      "gemma = pierre précieuse, gemme",

      "corona (nom.), coronam (acc.) = couronne",

      "dea = déesse",

      "sacerdos = prêtre, prêtresse",
      "vetus = vieux, vieille",

      "ponit = il/elle pose",

      "moveo, moves, movet = je bouge, tu bouges, il/elle bouge | déplace",
      "quaero, quaeris, quaerit = je cherche, tu cherches, il/elle cherche",
      "specto, spectas, spectat = je regarde, tu regardes, il/elle regarde",
      "timeo, times, timet = je m'inquiète, tu t'inquiètes, il/elle s'inquiète"

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
  "prompt": "🏺 Mini-scène : « Sacerdos timet ; Livia aram spectat et Sextus gemmam quaerit. » Coche les deux mots qui désignent ce que les personnages regardent ou cherchent.",
  "options": [
    "l'autel",
    "une pierre précieuse",
    "Livia",
    "Sextus",
    "une couronne sacrée"
  ],
  "expected": [
    "une pierre précieuse",
    "l'autel"
  ],
  "shuffle": true,
  "points": 1
},

      {

        "id": "p1-l4-t4",

        "type": "matching",

        "prompt": "🏺 Associe mot latin et sens en français.",

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

        "prompt": "🏺 « Livia ad sacellum venit. Vetus sacerdos donum ponit ; Sextus libum portat. » : qui pose l’offrande ?",

        "options": [

          "La vieille prêtresse",

          "Livia",

          "Un porteur",

          "Un poney",

          "Sextus"

        ],

        "expected": "la vieille prêtresse",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p1-l4-t6",

        "type": "singleChoice",

        "prompt": "🏺 Choisis la bonne traduction : « Donum Sextus movet » :",

        "options": [

          "Sextus déplace l’offrande",

          "L’offrande déplace Sextus",

          "Sextus regarde l’offrande",

          "Sextus mugit dans le temple",

          "Il y a six offrandes"

        ],

        "expected": "Sextus déplace l’offrande",

        "shuffle": true,

        "points": 1,

        "feedback": "Attention : l’ordre peut tromper, cherche le verbe movet."

      },

      {

        "id": "p1-l4-t7",

        "type": "textInput",

        "prompt": "🏺 Complète : « In sacellum Sextus _____________ movet », pour dire : « Dans le petit sanctuaire, Sextus déplace la couronne ».",

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

        "prompt": "🏺 Si 'Sextus gemmam spectat' signifie 'Sextus regarde la pierre précieuse', traduis donc en français : 'Sextus coronam movet'",

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

        "prompt": "🏺 Traduis en latin : 'Livia regarde l’autel'",

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

        "Les noms de cette leçon tournent autour du champ lexical du sacré, du religieux.",
        "Première introduction à l'accusatif latin (= COD), avec la terminaison -m."
        

      ],

      "cahier": [

        "donum",

        "corona",

        "Vetus sacerdos donum ponit",
        "Sextus gemmam quaerit",
        "Livia aram spectat"

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
      "cum + ablatif = avec (CC d'accompagnement)",

      "specto, spectas, spectat = je regarde, tu regardes, il/elle regarde",

      "video, vides, videt = je vois, tu vois, il/elle voit",

      "curro, curris, currit = je cours, tu cours, il/elle court",
      "sto, stas, stat = je me tiens, tu te tiens, il/elle se tient"

    ],

    "maxScore": 10,

    "training": [

   {
  "id": "p1-l5-t1",
  "type": "multipleChoice",
  "prompt": "🐕 Mini-scène : « Niger ianuam spectat. Vicini canem vocant. » Coche les deux mots qui désignent le chien.",
  "options": [
    "Niger",
    "canem",
    "ianuam",
    "vicini",
    "vocant"
  ],
  "expected": [
    "Niger",
    "canem"
  ],
  "shuffle": true,
  "points": 1
},

      {

        "id": "p1-l5-t2",

        "type": "singleChoice",

        "prompt": "🐕 Le verbe latrat signifie :",

        "options": [

          "j'aboie",

          "tu aboies",

          "il aboie",

          "nous aboyons",

          "vous aboyez"

        ],

        "expected": "il aboie",

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

        "prompt": "🐕 Piège : « Canem videt Livia » signifie :",

        "options": [

          "Livia voit le chien",

          "Le chien voit Livia",

          "Livia est un chien",

          "Le chien court",

          "Le chien aboie après Livia"

        ],

        "expected": "Livia voit le chien",

        "shuffle": true,

        "points": 1,

        "feedback": "La terminaison aide : canem est le complément."

      },

      {
  "id": "p1-l5-t6",
  "type": "matching",
  "prompt": "🐕 Dans « Niger currit cum Livia », associe chaque élément à son rôle.",
  "pairs": [
    {
      "left": "Niger",
      "right": "sujet"
    },
    {
      "left": "currit",
      "right": "verbe"
    },
    {
      "left": "cum Livia",
      "right": "CC d'accompagnement"
    }
  ],
  "rightOptions": [
    "sujet",
    "verbe",
    "CC d'accompagnement"
  ],
  "expected": {
    "Niger": "sujet",
    "currit": "verbe",
    "cum Livia": "CC d'accompagnement"
  },
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
  "acceptedAnswers": [
    "niger est devant la porte",
    "niger se tient devant la porte",
    "niger se trouve devant la porte",
    "niger est debout devant la porte",
    "niger est devant une porte",
    "niger se tient devant une porte",
    "niger se trouve devant une porte",
    "le chien niger est devant la porte",
    "le chien niger se tient devant la porte",
    "le chien est devant la porte",
    "le chien se tient devant la porte",
    "le chien se trouve devant la porte"
  ],
  "answerConfig": {
    "type": "translation-segment",
    "language": "fr",
    "accepted": [
      "niger est devant la porte",
      "niger se tient devant la porte",
      "niger se trouve devant la porte",
      "niger est debout devant la porte",
      "niger est devant une porte",
      "niger se tient devant une porte",
      "niger se trouve devant une porte",
      "le chien niger est devant la porte",
      "le chien niger se tient devant la porte",
      "le chien est devant la porte",
      "le chien se tient devant la porte",
      "le chien se trouve devant la porte"
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
  "gradingFocus": "Traduire correctement le sujet, le groupe de lieu ante ianuam et le verbe stat.",
  "rejectIf": [
    "verbe français incompatible avec stat",
    "groupe de lieu absent ou incorrect",
    "réponse hors-sujet"
  ],
  "tests": [
    {
      "input": "niger est devant la porte",
      "isCorrect": true
    },
    {
      "input": "le chien se tient devant la porte",
      "isCorrect": true
    },
    {
      "input": "niger attend à la porte",
      "isCorrect": false
    },
    {
      "input": "niger est dans la porte",
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
    "spectat canem Marcus",
    "Marcus canem videt",
    "Marcus videt canem",
    "canem Marcus videt",
    "canem videt Marcus",
    "videt Marcus canem",
    "videt canem Marcus"
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
      "spectat canem Marcus",
      "Marcus canem videt",
      "Marcus videt canem",
      "canem Marcus videt",
      "canem videt Marcus",
      "videt Marcus canem",
      "videt canem Marcus"
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
  "gradingFocus": "Produire correctement un sujet au nominatif, un COD à l'accusatif et un verbe de perception correct, avec ordre latin flexible.",
  "rejectIf": [
    "verbe incorrect",
    "sens inversé sujet/objet",
    "forme latine impossible au niveau de la leçon",
    "réponse incomplète"
  ],
  "tests": [
    {
      "input": "Marcus canem spectat",
      "isCorrect": true
    },
    {
      "input": "Marcus canem videt",
      "isCorrect": true
    },
    {
      "input": "Marcus canis videt",
      "isCorrect": false
    },
    {
      "input": "canem Marcus amat",
      "isCorrect": false
    },
    {
      "input": "Marcus videt",
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

      "scribo, scribis, scribit = j'écris, tu écris, il/elle écrit",

      "lego, legis, legit = je lis, tu lis, il/elle lit",

      "porto, portas, portat = je porte, tu portes, il/elle porte",

      "habeo, habes, habet = j'ai, tu as, il/elle a",

      "quaero, quaeris, quaerit = je cherche, tu cherches, il/elle cherche",

      "invenio, invenis, invenit = je trouve, tu trouves il/elle trouve"

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

          "recopie une lettre"

        ],

        "expected": "cherche la lettre",

        "shuffle": true,

        "points": 1

      },

   {
  "id": "p1-l6-t3",
  "type": "textInput",
  "prompt": "📜 Mini-texte : « Marcus tabellam legit, epistulam quaerit, servus tabellam portat. » Recopie, au choix, un des groupes 'verbe + complément' :",
  "expected": "tabellam legit",
  "acceptedAnswers": [
    "tabellam legit",
    "legit tabellam",
    "epistulam quaerit",
    "quaerit epistulam",
    "tabellam portat",
    "portat tabellam"
  ],
  "answerConfig": {
    "type": "one-of",
    "language": "latin",
    "ignoreCase": true,
    "ignorePunctuation": true
  },
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

        "prompt": "📜 Piège : « Tabellam portat Marcus » signifie :",

        "options": [

          "Marcus porte la tablette",

          "La tablette porte Marcus",

          "Marcus écrit sur la tablette",

          "Marcus voit la tablette",

          "La tablette est apportée par Marcus"

        ],

        "expected": "Marcus porte la tablette",

        "shuffle": true,

        "points": 1,

        "feedback": "La terminaison en -am signale ici le complément."

      },

      {

        "id": "p1-l6-t6",

        "type": "singleChoice",

        "prompt": "📜 Dans la scène, quel verbe indique qu’on trouve l’objet ?",

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
  "prompt": "📜 « Je cherche la lettre avec Marcus ». Complète en latin : « Cum Marco epistulam ... »",
  "expected": "quaero",
  "acceptedAnswers": [
    "quaero"
  ],
  "answerConfig": {
    "type": "one-of",
    "language": "latin",
    "ignoreCase": true,
    "ignorePunctuation": true
  },
  "points": 1
}

    ],

    "production": [

      {

        "id": "p1-l6-p1",

        "type": "textInput",

        "prompt": "📜 Traduis en français : « Marcus tabellam portat »",

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
  "prompt": "📜 Traduis en français : « Lucius epistulam habet »",
  "expected": "lucius a la lettre",
  "acceptedAnswers": [
    "lucius a la lettre",
    "lucius a une lettre",
    "lucius possède la lettre",
    "lucius possède une lettre",
    "lucius détient la lettre",
    "lucius détient une lettre"
  ],
  "answerConfig": {
    "type": "translation-segment",
    "language": "fr",
    "accepted": [
      "lucius a la lettre",
      "lucius a une lettre",
      "lucius possède la lettre",
      "lucius possède une lettre",
      "lucius détient la lettre",
      "lucius détient une lettre"
    ],
    "ignoreDeterminers": true,
    "ignoreContractions": true,
    "allowPartialAnswer": "core-meaning-only"
  },
  "points": 1,
  "canonicalAnswer": "lucius a la lettre",
  "normalization": {
    "trim": true,
    "collapseSpaces": true,
    "ignoreCase": true,
    "ignorePunctuation": true,
    "normalizeApostrophes": true,
    "ignoreDiacritics": true,
    "normalizeFrenchContractions": true,
    "ignoreFrenchDeterminers": true
  },
  "gradingFocus": "Compréhension correcte en français ; déterminants non discriminants ; variantes lexicales recevables.",
  "rejectIf": [
    "verbe incorrect",
    "sens inversé sujet/objet",
    "contre-sens global",
    "réponse hors-sujet"
  ],
  "tests": [
    {
      "input": "lucius a la lettre",
      "isCorrect": true
    },
    {
      "input": "lucius a lettre",
      "isCorrect": true
    },
    {
      "input": "lucius possède une lettre",
      "isCorrect": true
    },
    {
      "input": "lucius détient la lettre",
      "isCorrect": true
    },
    {
      "input": "lucius trouve la lettre",
      "isCorrect": false
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

        "prompt": "📜 Traduis en latin : « Livia cherche la tablette »",

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

    "objective": "Suivre une micro-scène de fontaine en distinguant arrivée, présence, sortie et accompagnement.",

    "lessonPoint": "Je lis ad + accusatif, in + ablatif, ex + ablatif et cum + ablatif pour suivre qui va, qui reste, qui vient de quelque part et avec qui.",

    "canDo": [

      "Je distingue vers, à, de et avec dans une scène simple.",

      "Je repère un groupe prépositionnel et sa valeur.",

      "Je traduis des phrases courtes de déplacement et de présence."

    ],

    "lexicon": [

      "fons (nom.), fontem (acc.), fonte (abl.) = fontaine",

      "aqua (nom.), aquam (acc.) = eau",

      "situla (nom.), situlam (acc.), situla (abl.) = seau",

      "ad fontem = vers la fontaine",

      "in fonte = à la fontaine",

      "ex fonte = de la fontaine",

      "cum situla = avec un seau",

      "cum Livia = avec Livia",

      "venit = il/elle vient",

      "manet = il/elle reste",

      "portat = il/elle porte",

      "turbat = il/elle trouble"

    ],

    "maxScore": 10,

    "training": [

      {
        "id": "p1-l7-t1",
        "type": "singleChoice",
        "prompt": "⛲ Dans « Lucius ex fonte venit », quel groupe indique le lieu d’où l’on vient ?",
        "options": [
          "ex fonte",
          "ad fontem",
          "in fonte",
          "cum situla"
        ],
        "expected": "ex fonte",
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l7-t2",
        "type": "singleChoice",
        "prompt": "⛲ « Marcus cum situla ad fontem venit » : Marcus…",
        "options": [
          "vient vers la fontaine avec un seau",
          "vient de la fontaine avec un seau",
          "reste à la fontaine avec un seau",
          "vient vers la fontaine avec de l’eau"
        ],
        "expected": "vient vers la fontaine avec un seau",
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l7-t3",
        "type": "multipleChoice",
        "prompt": "⛲ Mini-texte : « Aurelia in fonte manet. Lucius ex fonte venit. Flavia ad fontem venit cum situla. » Coche les deux groupes qui montrent un déplacement.",
        "options": [
          "in fonte",
          "ex fonte",
          "ad fontem",
          "cum situla",
          "manet"
        ],
        "expected": [
          "ex fonte",
          "ad fontem"
        ],
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l7-t4",
        "type": "matching",
        "prompt": "⛲ Associe chaque groupe à sa valeur.",
        "pairs": [
          {
            "left": "ad fontem",
            "right": "direction"
          },
          {
            "left": "in fonte",
            "right": "lieu où l’on est"
          },
          {
            "left": "ex fonte",
            "right": "origine"
          },
          {
            "left": "cum Livia",
            "right": "accompagnement"
          }
        ],
        "rightOptions": [
          "direction",
          "lieu où l’on est",
          "origine",
          "accompagnement"
        ],
        "expected": {
          "ad fontem": "direction",
          "in fonte": "lieu où l’on est",
          "ex fonte": "origine",
          "cum Livia": "accompagnement"
        },
        "points": 1
      },

      {
        "id": "p1-l7-t5",
        "type": "singleChoice",
        "prompt": "⛲ Dans « Marcus ad fontem venit », le groupe « ad fontem » indique…",
        "options": [
          "où Marcus va",
          "où Marcus reste",
          "ce que Marcus porte",
          "qui vient avec Marcus"
        ],
        "expected": "où Marcus va",
        "shuffle": true,
        "points": 1,
        "feedback": "ad + accusatif sert ici à indiquer la direction."
      },

      {
        "id": "p1-l7-t6",
        "type": "textInput",
        "prompt": "⛲ Mini-texte : « Marcus ad fontem venit. Livia in fonte manet. Lucius ex fonte venit cum situla. » Recopie seulement le groupe qui montre l’accompagnement.",
        "expected": "cum situla",
        "acceptedAnswers": [
          "cum situla"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "cum situla"
          ]
        },
        "points": 1
      },

      {
        "id": "p1-l7-t7",
        "type": "textInput",
        "prompt": "⛲ Complète : « Flavia ... venit » pour dire « Flavia vient de la fontaine ».",
        "expected": "ex fonte",
        "acceptedAnswers": [
          "ex fonte"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "ex fonte"
          ]
        },
        "points": 1
      }

    ],

    "production": [

      {
        "id": "p1-l7-p1",
        "type": "textInput",
        "prompt": "⛲ Traduis en français : Lucius ex fonte venit cum situla",
        "expected": "lucius vient de la fontaine avec un seau",
        "acceptedAnswers": [
          "lucius vient de la fontaine avec un seau",
          "lucius arrive de la fontaine avec un seau",
          "lucius vient avec un seau de la fontaine",
          "lucius arrive avec un seau de la fontaine"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "lucius vient de la fontaine avec un seau",
            "lucius arrive de la fontaine avec un seau",
            "lucius vient avec un seau de la fontaine",
            "lucius arrive avec un seau de la fontaine"
          ],
          "ignoreDeterminers": true,
          "ignoreContractions": true,
          "allowPartialAnswer": "core-meaning-only"
        },
        "points": 1,
        "canonicalAnswer": "lucius vient de la fontaine avec un seau",
        "normalization": {
          "trim": true,
          "collapseSpaces": true,
          "ignoreCase": true,
          "ignorePunctuation": true,
          "normalizeApostrophes": true,
          "ignoreDiacritics": true,
          "normalizeFrenchContractions": true,
          "ignoreFrenchDeterminers": true
        },
        "gradingFocus": "Compréhension correcte en français ; déterminants non discriminants ; variantes lexicales recevables.",
        "rejectIf": [
          "verbe incorrect",
          "sens inversé sujet/objet",
          "contre-sens global",
          "réponse hors-sujet"
        ],
        "tests": [
          {
            "input": "lucius vient de la fontaine avec un seau",
            "isCorrect": true
          },
          {
            "input": "lucius vient fontaine avec un seau",
            "isCorrect": true
          },
          {
            "input": "lucius arrive avec un seau de la fontaine",
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
        "prompt": "⛲ Traduis en latin : Livia reste à la fontaine",
        "expected": "Livia in fonte manet",
        "acceptedAnswers": [
          "Livia in fonte manet",
          "Livia manet in fonte",
          "in fonte Livia manet",
          "in fonte manet Livia",
          "manet Livia in fonte",
          "manet in fonte Livia"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "Livia in fonte manet",
            "Livia manet in fonte",
            "in fonte Livia manet",
            "in fonte manet Livia",
            "manet Livia in fonte",
            "manet in fonte Livia"
          ]
        },
        "points": 1,
        "canonicalAnswer": "Livia in fonte manet",
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
            "input": "Livia in fonte manet",
            "isCorrect": true
          },
          {
            "input": "manet Livia in fonte",
            "isCorrect": true
          },
          {
            "input": "lorem ipsum",
            "isCorrect": false
          }
        ]
      },

      {
        "id": "p1-l7-p3",
        "type": "textInput",
        "prompt": "⛲ Traduis en latin : Marcus vient vers la fontaine",
        "expected": "Marcus ad fontem venit",
        "acceptedAnswers": [
          "Marcus ad fontem venit",
          "Marcus venit ad fontem",
          "ad fontem Marcus venit",
          "ad fontem venit Marcus",
          "venit Marcus ad fontem",
          "venit ad fontem Marcus"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "Marcus ad fontem venit",
            "Marcus venit ad fontem",
            "ad fontem Marcus venit",
            "ad fontem venit Marcus",
            "venit Marcus ad fontem",
            "venit ad fontem Marcus"
          ]
        },
        "points": 1,
        "canonicalAnswer": "Marcus ad fontem venit",
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
            "input": "Marcus ad fontem venit",
            "isCorrect": true
          },
          {
            "input": "venit Marcus ad fontem",
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

        "ad + accusatif indique vers où l’on va ; in + ablatif indique où l’on est ; ex + ablatif indique d’où l’on vient ; cum + ablatif indique l’accompagnement.",

        "Je suis une scène simple en lisant les groupes prépositionnels plutôt qu’en devinant l’ambiance."

      ],

      "cahier": [

        "ad fontem",

        "in fonte",

        "ex fonte",

        "cum situla"

      ],

      "keywords": [

        "fontaine",

        "prépositions",

        "déplacement"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "fontaine",

        "prepositions",

        "in-ad-ex-cum",

        "p1-l7"

      ]

    }

  },

   {

    "id": "p1-l8",

    "period": 1,

    "periodId": "p1",

    "title": "Chez le boulanger - COD",

    subtitle: headerContexts5eP1["p1-l8"],

    "objective": "Lire une scène de boutique et repérer le COD même quand l’ordre latin varie.",

    "lessonPoint": "Le COD se lit souvent à l’accusatif. Je pars du verbe, puis je distingue le sujet et le mot qui reçoit l’action.",

    "canDo": [

      "Je repère le COD dans une phrase courte.",

      "Je distingue le sujet et le COD même si l’ordre des mots change.",

      "Je produis un accusatif simple dans une scène du quotidien."

    ],

    "lexicon": [

      "pistor = boulanger",

      "panis (nom.), panem (acc.) = pain",

      "farina (nom.), farinam (acc.) = farine",

      "taberna (nom.), tabernam (acc.) = boutique",

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
        "prompt": "🍞 Dans « Panem pistor portat », quel mot est le COD ?",
        "options": [
          "Panem",
          "pistor",
          "portat"
        ],
        "expected": "Panem",
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l8-t2",
        "type": "singleChoice",
        "prompt": "🍞 « Panem Flavia emit » signifie :",
        "options": [
          "Flavia achète le pain",
          "Le pain achète Flavia",
          "Flavia porte le pain",
          "Flavia voit le pain"
        ],
        "expected": "Flavia achète le pain",
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l8-t3",
        "type": "multipleChoice",
        "prompt": "🍞 Mini-scène : « Pistor panem portat. Flavia farinam accipit. Marcus tabernam videt. » Coche les trois COD.",
        "options": [
          "Pistor",
          "panem",
          "Flavia",
          "farinam",
          "Marcus",
          "tabernam"
        ],
        "expected": [
          "panem",
          "farinam",
          "tabernam"
        ],
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l8-t4",
        "type": "textInput",
        "prompt": "🍞 Complète avec la bonne forme : « Pistor ... portat » pour dire « Le boulanger porte la farine ».",
        "expected": "farinam",
        "acceptedAnswers": [
          "farinam"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "farinam"
          ]
        },
        "points": 1
      },

      {
        "id": "p1-l8-t5",
        "type": "singleChoice",
        "prompt": "🍞 Piège : « Farinam Flavia portat » signifie :",
        "options": [
          "Flavia porte la farine",
          "La farine porte Flavia",
          "Flavia achète la farine",
          "Le boulanger porte la farine"
        ],
        "expected": "Flavia porte la farine",
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l8-t6",
        "type": "singleChoice",
        "prompt": "🍞 Mini-texte : « Panem pistor portat. Farinam Flavia accipit. » Dans la deuxième phrase, quel mot est le sujet ?",
        "options": [
          "Farinam",
          "Flavia",
          "accipit",
          "panem"
        ],
        "expected": "Flavia",
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l8-t7",
        "type": "textInput",
        "prompt": "🍞 Complète avec la bonne forme : « Marcus ... videt » pour dire « Marcus voit la boutique ».",
        "expected": "tabernam",
        "acceptedAnswers": [
          "tabernam"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "tabernam"
          ]
        },
        "points": 1
      }

    ],

    "production": [

      {
        "id": "p1-l8-p1",
        "type": "textInput",
        "prompt": "🍞 Traduis en français : Panem pistor portat",
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
          ],
          "ignoreDeterminers": true,
          "ignoreContractions": true,
          "allowPartialAnswer": "core-meaning-only"
        },
        "points": 1,
        "canonicalAnswer": "le boulanger porte le pain",
        "normalization": {
          "trim": true,
          "collapseSpaces": true,
          "ignoreCase": true,
          "ignorePunctuation": true,
          "normalizeApostrophes": true,
          "ignoreDiacritics": true,
          "normalizeFrenchContractions": true,
          "ignoreFrenchDeterminers": true
        },
        "gradingFocus": "Compréhension correcte en français ; déterminants non discriminants ; variantes lexicales recevables.",
        "rejectIf": [
          "verbe incorrect",
          "sens inversé sujet/objet",
          "contre-sens global",
          "réponse hors-sujet"
        ],
        "tests": [
          {
            "input": "le boulanger porte le pain",
            "isCorrect": true
          },
          {
            "input": "boulanger porte pain",
            "isCorrect": true
          },
          {
            "input": "le pain porte le boulanger",
            "isCorrect": false
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
        "prompt": "🍞 Traduis en latin : Flavia reçoit la farine",
        "expected": "Flavia farinam accipit",
        "acceptedAnswers": [
          "Flavia farinam accipit",
          "Flavia accipit farinam",
          "farinam Flavia accipit",
          "farinam accipit Flavia",
          "accipit Flavia farinam",
          "accipit farinam Flavia"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "Flavia farinam accipit",
            "Flavia accipit farinam",
            "farinam Flavia accipit",
            "farinam accipit Flavia",
            "accipit Flavia farinam",
            "accipit farinam Flavia"
          ]
        },
        "points": 1,
        "canonicalAnswer": "Flavia farinam accipit",
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
          "cas incorrect",
          "forme latine impossible au niveau de la leçon"
        ],
        "tests": [
          {
            "input": "Flavia farinam accipit",
            "isCorrect": true
          },
          {
            "input": "farinam accipit Flavia",
            "isCorrect": true
          },
          {
            "input": "Flavia farina accipit",
            "isCorrect": false
          },
          {
            "input": "lorem ipsum",
            "isCorrect": false
          }
        ]
      },

      {
        "id": "p1-l8-p3",
        "type": "textInput",
        "prompt": "🍞 Traduis en latin : Marcus voit la boutique",
        "expected": "Marcus tabernam videt",
        "acceptedAnswers": [
          "Marcus tabernam videt",
          "Marcus videt tabernam",
          "tabernam Marcus videt",
          "tabernam videt Marcus",
          "videt Marcus tabernam",
          "videt tabernam Marcus"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "Marcus tabernam videt",
            "Marcus videt tabernam",
            "tabernam Marcus videt",
            "tabernam videt Marcus",
            "videt Marcus tabernam",
            "videt tabernam Marcus"
          ]
        },
        "points": 1,
        "canonicalAnswer": "Marcus tabernam videt",
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
          "cas incorrect",
          "forme latine impossible au niveau de la leçon"
        ],
        "tests": [
          {
            "input": "Marcus tabernam videt",
            "isCorrect": true
          },
          {
            "input": "videt Marcus tabernam",
            "isCorrect": true
          },
          {
            "input": "Marcus taberna videt",
            "isCorrect": false
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

        "Le COD reçoit l’action du verbe et se lit souvent à l’accusatif.",

        "L’ordre latin peut changer : pour traduire, je pars du verbe puis je distingue sujet et COD grâce aux formes."

      ],

      "cahier": [

        "Panem pistor portat",

        "Flavia farinam accipit",

        "Marcus tabernam videt"

      ],

      "keywords": [

        "boulanger",

        "cod",

        "accusatif"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "metier",

        "boutique",

        "cod",

        "p1-l8"

      ]

    }

  },

    {

    "id": "p1-l9",

    "period": 1,

    "periodId": "p1",

    "title": "L’école du quartier - Verbe, sujet, COD",

    subtitle: headerContexts5eP1["p1-l9"],

    "objective": "Lire de petites scènes de classe en partant du verbe, puis en distinguant sujet, COD et complément de lieu.",

    "lessonPoint": "Je cherche d’abord le verbe. Ensuite, je repère le sujet et je vérifie s’il y a un COD exprimé.",

    "canDo": [

      "Je repère le verbe d’une phrase scolaire.",

      "Je distingue sujet et COD même si l’ordre des mots change.",

      "Je comprends qu’un verbe peut avoir un COD… ou non."

    ],

    "lexicon": [

      "ludus (nom.), ludum (acc.), ludo (abl.) = école",

      "magister (nom.), magistrum (acc.) = maître d’école",

      "discipulus (nom.), discipulum (acc.) = élève",

      "tabella (nom.), tabellam (acc.), tabella (abl.) = tablette",

      "littera (nom.), litteram (acc.) = lettre",

      "in ludo = dans l’école",

      "legit = il/elle lit",

      "scribit = il/elle écrit",

      "audit = il/elle écoute / entend",

      "respondet = il/elle répond"

    ],

    "maxScore": 10,

    "training": [

      {
        "id": "p1-l9-t1",
        "type": "singleChoice",
        "prompt": "🎓 Dans « Discipulus magistrum audit », quel mot dit l’action ?",
        "options": [
          "Discipulus",
          "magistrum",
          "audit"
        ],
        "expected": "audit",
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l9-t2",
        "type": "singleChoice",
        "prompt": "🎓 « Magistrum discipulus audit » signifie :",
        "options": [
          "L’élève écoute le maître",
          "Le maître écoute l’élève",
          "L’élève répond au maître",
          "Le maître lit l’élève"
        ],
        "expected": "L’élève écoute le maître",
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l9-t3",
        "type": "multipleChoice",
        "prompt": "🎓 Coche les trois phrases où un COD est exprimé.",
        "options": [
          "Magister tabellam legit",
          "Discipulus magistrum audit",
          "Marcus respondet",
          "Flavia litteram scribit"
        ],
        "expected": [
          "Magister tabellam legit",
          "Discipulus magistrum audit",
          "Flavia litteram scribit"
        ],
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l9-t4",
        "type": "textInput",
        "prompt": "🎓 Mini-texte : « In ludo magister legit. Discipulus magistrum audit. Marcus respondet. » Recopie seulement le sujet de la deuxième phrase.",
        "expected": "discipulus",
        "acceptedAnswers": [
          "discipulus",
          "Discipulus"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "discipulus",
            "Discipulus"
          ]
        },
        "points": 1
      },

      {
        "id": "p1-l9-t5",
        "type": "singleChoice",
        "prompt": "🎓 Piège : « Tabellam magister legit » veut dire :",
        "options": [
          "Le maître lit la tablette",
          "La tablette lit le maître",
          "Le maître écrit sur la tablette",
          "L’élève lit la tablette"
        ],
        "expected": "Le maître lit la tablette",
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l9-t6",
        "type": "singleChoice",
        "prompt": "🎓 Dans « Marcus respondet », combien y a-t-il de COD exprimé ?",
        "options": [
          "un",
          "deux",
          "aucun",
          "on ne peut pas savoir"
        ],
        "expected": "aucun",
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l9-t7",
        "type": "textInput",
        "prompt": "🎓 Complète avec la bonne forme : « Magister ... legit » pour dire « Le maître lit la tablette ».",
        "expected": "tabellam",
        "acceptedAnswers": [
          "tabellam"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "tabellam"
          ]
        },
        "points": 1
      }

    ],

    "production": [

      {
        "id": "p1-l9-p1",
        "type": "textInput",
        "prompt": "🎓 Traduis en français : Magistrum discipulus audit",
        "expected": "l'élève écoute le maître",
        "acceptedAnswers": [
          "l'élève écoute le maître",
          "l'élève entend le maître",
          "l'élève écoute un maître",
          "l'élève entend un maître"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "l'élève écoute le maître",
            "l'élève entend le maître",
            "l'élève écoute un maître",
            "l'élève entend un maître"
          ],
          "ignoreDeterminers": true,
          "ignoreContractions": true,
          "allowPartialAnswer": "core-meaning-only"
        },
        "points": 1,
        "canonicalAnswer": "l'élève écoute le maître",
        "normalization": {
          "trim": true,
          "collapseSpaces": true,
          "ignoreCase": true,
          "ignorePunctuation": true,
          "normalizeApostrophes": true,
          "ignoreDiacritics": true,
          "normalizeFrenchContractions": true,
          "ignoreFrenchDeterminers": true
        },
        "gradingFocus": "Compréhension correcte en français ; déterminants non discriminants ; verbe et fonctions bien compris malgré l’ordre latin.",
        "rejectIf": [
          "verbe incorrect",
          "sens inversé sujet/objet",
          "contre-sens global",
          "réponse hors-sujet"
        ],
        "tests": [
          {
            "input": "l'élève écoute le maître",
            "isCorrect": true
          },
          {
            "input": "élève écoute maître",
            "isCorrect": true
          },
          {
            "input": "le maître écoute l'élève",
            "isCorrect": false
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
        "prompt": "🎓 Traduis en latin : Le maître lit la tablette",
        "expected": "Magister tabellam legit",
        "acceptedAnswers": [
          "Magister tabellam legit",
          "Magister legit tabellam",
          "tabellam Magister legit",
          "tabellam legit Magister",
          "legit Magister tabellam",
          "legit tabellam Magister"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "Magister tabellam legit",
            "Magister legit tabellam",
            "tabellam Magister legit",
            "tabellam legit Magister",
            "legit Magister tabellam",
            "legit tabellam Magister"
          ]
        },
        "points": 1,
        "canonicalAnswer": "Magister tabellam legit",
        "normalization": {
          "trim": true,
          "collapseSpaces": true,
          "ignoreCase": true,
          "ignorePunctuation": true,
          "normalizeApostrophes": true,
          "ignoreDiacritics": true
        },
        "gradingFocus": "Morphologie et sens latin corrects ; accusatif juste ; ordre flexible accepté.",
        "rejectIf": [
          "verbe incorrect",
          "sens inversé sujet/objet",
          "cas incorrect",
          "forme latine impossible au niveau de la leçon"
        ],
        "tests": [
          {
            "input": "Magister tabellam legit",
            "isCorrect": true
          },
          {
            "input": "tabellam legit Magister",
            "isCorrect": true
          },
          {
            "input": "Magister tabella legit",
            "isCorrect": false
          },
          {
            "input": "lorem ipsum",
            "isCorrect": false
          }
        ]
      },

      {
        "id": "p1-l9-p3",
        "type": "textInput",
        "prompt": "🎓 Traduis en latin : Dans l’école, Marcus répond",
        "expected": "In ludo Marcus respondet",
        "acceptedAnswers": [
          "In ludo Marcus respondet",
          "In ludo respondet Marcus",
          "Marcus in ludo respondet",
          "Marcus respondet in ludo",
          "respondet Marcus in ludo",
          "respondet in ludo Marcus"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "In ludo Marcus respondet",
            "In ludo respondet Marcus",
            "Marcus in ludo respondet",
            "Marcus respondet in ludo",
            "respondet Marcus in ludo",
            "respondet in ludo Marcus"
          ]
        },
        "points": 1,
        "canonicalAnswer": "In ludo Marcus respondet",
        "normalization": {
          "trim": true,
          "collapseSpaces": true,
          "ignoreCase": true,
          "ignorePunctuation": true,
          "normalizeApostrophes": true,
          "ignoreDiacritics": true
        },
        "gradingFocus": "Réemploi correct de in + ablatif ; verbe intransitif bien identifié ; ordre latin flexible.",
        "rejectIf": [
          "verbe incorrect",
          "préposition incorrecte",
          "forme latine impossible au niveau de la leçon",
          "réponse hors-sujet"
        ],
        "tests": [
          {
            "input": "In ludo Marcus respondet",
            "isCorrect": true
          },
          {
            "input": "Marcus respondet in ludo",
            "isCorrect": true
          },
          {
            "input": "In ludum Marcus respondet",
            "isCorrect": false
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

        "Pour lire une phrase, je commence par le verbe, puis je cherche le sujet.",

        "Je vérifie ensuite s’il y a un COD exprimé : certains verbes en ont un, d’autres non.",

        "L’ordre latin peut changer sans changer les fonctions."

      ],

      "cahier": [

        "Magistrum discipulus audit",

        "Magister tabellam legit",

        "In ludo Marcus respondet"

      ],

      "keywords": [

        "ludus",

        "verbe",

        "cod"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "ecole",

        "verbe",

        "cod",

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

    "objective": "Lire une scène aux thermes en distinguant approche, entrée, présence, sortie et accompagnement.",

    "lessonPoint": "Je combine le verbe et le groupe prépositionnel pour comprendre le trajet : ad + accusatif, in + accusatif, in + ablatif, ex + ablatif, cum + ablatif.",

    "canDo": [

      "Je distingue vers, dans, hors de et avec dans une phrase simple.",

      "Je comprends la différence entre aller vers, entrer, rester et revenir.",

      "Je traduis et je produis de petites phrases de déplacement."

    ],

    "lexicon": [

      "thermae (nom.), thermas (acc.), thermis (abl.) = les thermes",

      "ad thermas = vers les thermes",

      "in thermas = dans les thermes (entrée, mouvement)",

      "in thermis = dans / aux thermes (position fixe)",

      "ex thermis = hors des thermes / des thermes",

      "amicus (nom.), amico (abl.) = ami",

      "cum amico = avec un ami",

      "intrat = il/elle entre",

      "currit = il/elle court",

      "manet = il/elle reste",

      "venit = il/elle vient"

    ],

    "maxScore": 10,

    "training": [

      {
        "id": "p1-l10-t1",
        "type": "singleChoice",
        "prompt": "🛁 Quel groupe montre qu’on entre dans les thermes, et non qu’on va seulement vers eux ?",
        "options": [
          "ad thermas",
          "in thermas",
          "in thermis",
          "ex thermis"
        ],
        "expected": "in thermas",
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l10-t2",
        "type": "singleChoice",
        "prompt": "🛁 « Marcus ad thermas currit » signifie :",
        "options": [
          "Marcus court vers les thermes",
          "Marcus entre dans les thermes",
          "Marcus reste aux thermes",
          "Marcus vient des thermes"
        ],
        "expected": "Marcus court vers les thermes",
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l10-t3",
        "type": "multipleChoice",
        "prompt": "🛁 Mini-scène : « Titus ad thermas currit. Livia in thermas intrat. Flavia in thermis manet. Marcus ex thermis venit cum amico. » Coche les trois groupes qui montrent un déplacement.",
        "options": [
          "ad thermas",
          "in thermas",
          "in thermis",
          "ex thermis",
          "cum amico"
        ],
        "expected": [
          "ad thermas",
          "in thermas",
          "ex thermis"
        ],
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l10-t4",
        "type": "matching",
        "prompt": "🛁 Associe chaque groupe à sa valeur.",
        "pairs": [
          {
            "left": "ad thermas",
            "right": "approche"
          },
          {
            "left": "in thermas",
            "right": "entrée"
          },
          {
            "left": "in thermis",
            "right": "position fixe"
          },
          {
            "left": "ex thermis",
            "right": "origine / sortie"
          },
          {
            "left": "cum amico",
            "right": "accompagnement"
          }
        ],
        "rightOptions": [
          "approche",
          "entrée",
          "position fixe",
          "origine / sortie",
          "accompagnement"
        ],
        "expected": {
          "ad thermas": "approche",
          "in thermas": "entrée",
          "in thermis": "position fixe",
          "ex thermis": "origine / sortie",
          "cum amico": "accompagnement"
        },
        "points": 1
      },

      {
        "id": "p1-l10-t5",
        "type": "singleChoice",
        "prompt": "🛁 Piège : « Titus in thermas intrat » signifie :",
        "options": [
          "Titus entre dans les thermes",
          "Titus reste dans les thermes",
          "Titus court vers les thermes",
          "Titus vient des thermes"
        ],
        "expected": "Titus entre dans les thermes",
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l10-t6",
        "type": "textInput",
        "prompt": "🛁 Mini-texte : « Livia in thermis manet. Marcus ex thermis venit cum amico. » Recopie seulement le groupe qui indique d’où Marcus vient.",
        "expected": "ex thermis",
        "acceptedAnswers": [
          "ex thermis"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "ex thermis"
          ]
        },
        "points": 1
      },

      {
        "id": "p1-l10-t7",
        "type": "textInput",
        "prompt": "🛁 Complète avec le bon groupe : « Flavia ... manet » pour dire « Flavia reste aux thermes ».",
        "expected": "in thermis",
        "acceptedAnswers": [
          "in thermis"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "in thermis"
          ]
        },
        "points": 1
      }

    ],

    "production": [

      {
        "id": "p1-l10-p1",
        "type": "textInput",
        "prompt": "🛁 Traduis en français : Titus in thermas intrat",
        "expected": "titus entre dans les thermes",
        "acceptedAnswers": [
          "titus entre dans les thermes",
          "titus entre aux thermes",
          "titus pénètre dans les thermes",
          "titus va dans les thermes"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "titus entre dans les thermes",
            "titus entre aux thermes",
            "titus pénètre dans les thermes",
            "titus va dans les thermes"
          ],
          "ignoreDeterminers": true,
          "ignoreContractions": true,
          "allowPartialAnswer": "core-meaning-only"
        },
        "points": 1,
        "canonicalAnswer": "titus entre dans les thermes",
        "normalization": {
          "trim": true,
          "collapseSpaces": true,
          "ignoreCase": true,
          "ignorePunctuation": true,
          "normalizeApostrophes": true,
          "ignoreDiacritics": true,
          "normalizeFrenchContractions": true,
          "ignoreFrenchDeterminers": true
        },
        "gradingFocus": "Compréhension correcte de in + accusatif : entrée dans le lieu.",
        "rejectIf": [
          "verbe incorrect",
          "contre-sens sur le lieu",
          "réponse hors-sujet"
        ],
        "tests": [
          {
            "input": "titus entre dans les thermes",
            "isCorrect": true
          },
          {
            "input": "titus entre aux thermes",
            "isCorrect": true
          },
          {
            "input": "titus reste aux thermes",
            "isCorrect": false
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
        "prompt": "🛁 Traduis en français : Marcus ex thermis venit cum amico",
        "expected": "marcus vient des thermes avec un ami",
        "acceptedAnswers": [
          "marcus vient des thermes avec un ami",
          "marcus vient des bains avec un ami",
          "marcus revient des thermes avec un ami",
          "marcus revient des bains avec un ami",
          "marcus sort des thermes avec un ami",
          "marcus sort des bains avec un ami"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "marcus vient des thermes avec un ami",
            "marcus vient des bains avec un ami",
            "marcus revient des thermes avec un ami",
            "marcus revient des bains avec un ami",
            "marcus sort des thermes avec un ami",
            "marcus sort des bains avec un ami"
          ],
          "ignoreDeterminers": true,
          "ignoreContractions": true,
          "allowPartialAnswer": "core-meaning-only"
        },
        "points": 1,
        "canonicalAnswer": "marcus vient des thermes avec un ami",
        "normalization": {
          "trim": true,
          "collapseSpaces": true,
          "ignoreCase": true,
          "ignorePunctuation": true,
          "normalizeApostrophes": true,
          "ignoreDiacritics": true,
          "normalizeFrenchContractions": true,
          "ignoreFrenchDeterminers": true
        },
        "gradingFocus": "Compréhension correcte de ex + ablatif et de cum + ablatif.",
        "rejectIf": [
          "verbe incorrect",
          "contre-sens sur l’origine",
          "contre-sens sur l’accompagnement",
          "réponse hors-sujet"
        ],
        "tests": [
          {
            "input": "marcus vient des thermes avec un ami",
            "isCorrect": true
          },
          {
            "input": "marcus sort des bains avec un ami",
            "isCorrect": true
          },
          {
            "input": "marcus va vers les thermes avec un ami",
            "isCorrect": false
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
        "prompt": "🛁 Traduis en latin : Livia reste aux thermes",
        "expected": "Livia in thermis manet",
        "acceptedAnswers": [
          "Livia in thermis manet",
          "Livia manet in thermis",
          "in thermis Livia manet",
          "in thermis manet Livia",
          "manet Livia in thermis",
          "manet in thermis Livia"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "Livia in thermis manet",
            "Livia manet in thermis",
            "in thermis Livia manet",
            "in thermis manet Livia",
            "manet Livia in thermis",
            "manet in thermis Livia"
          ]
        },
        "points": 1,
        "canonicalAnswer": "Livia in thermis manet",
        "normalization": {
          "trim": true,
          "collapseSpaces": true,
          "ignoreCase": true,
          "ignorePunctuation": true,
          "normalizeApostrophes": true,
          "ignoreDiacritics": true
        },
        "gradingFocus": "Réemploi correct de in + ablatif avec un verbe de position.",
        "rejectIf": [
          "verbe incorrect",
          "préposition incorrecte",
          "cas incorrect",
          "forme latine impossible au niveau de la leçon"
        ],
        "tests": [
          {
            "input": "Livia in thermis manet",
            "isCorrect": true
          },
          {
            "input": "manet Livia in thermis",
            "isCorrect": true
          },
          {
            "input": "Livia in thermas manet",
            "isCorrect": false
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

        "ad + accusatif marque l’approche ; in + accusatif l’entrée ; in + ablatif la position ; ex + ablatif l’origine ; cum + ablatif l’accompagnement.",

        "Je combine le verbe et le groupe prépositionnel pour comprendre précisément le trajet."

      ],

      "cahier": [

        "Titus ad thermas currit",

        "Titus in thermas intrat",

        "Livia in thermis manet",

        "Marcus ex thermis venit cum amico"

      ],

      "keywords": [

        "thermes",

        "trajet",

        "prépositions"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "thermes",

        "prepositions",

        "trajet",

        "p1-l10"

      ]

    }

  },

   {

    "id": "p1-l11",

    "period": 1,

    "periodId": "p1",

    "title": "Un graffiti sur le mur ! - Lire une inscription",

    subtitle: headerContexts5eP1["p1-l11"],

    "objective": "Lire une courte inscription en distinguant ce qui est écrit, où c’est écrit, qui le lit et qui le craint.",

    "lessonPoint": "Je pars du verbe, puis je repère le sujet, le COD éventuel et le groupe de lieu.",

    "canDo": [

      "Je lis une courte inscription latine.",

      "Je distingue ce qui est écrit, qui le lit et où c’est écrit.",

      "Je traduis une phrase brève liée à l’alerte."

    ],

    "lexicon": [

      "murus (nom.), muro (abl.) = mur",

      "scriptum (nom./acc.) = inscription, écrit",

      "Discordia (nom.), Discordiam (acc.) = Discordia / la Discorde",

      "in muro = sur le mur / dans le mur",

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
        "prompt": "🧱 Dans « Scriptum in muro est », quel groupe indique où se trouve l’inscription ?",
        "options": [
          "in muro",
          "Scriptum",
          "est"
        ],
        "expected": "in muro",
        "shuffle": true,
        "points": 1,
        "feedback": "in muro indique ici le lieu où se trouve l’inscription."
      },

      {
        "id": "p1-l11-t2",
        "type": "singleChoice",
        "prompt": "🧱 « Marcus scriptum legit » signifie :",
        "options": [
          "Marcus lit l’inscription",
          "Marcus écrit l’inscription",
          "Marcus craint l’inscription",
          "Marcus voit le mur"
        ],
        "expected": "Marcus lit l’inscription",
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l11-t3",
        "type": "multipleChoice",
        "prompt": "🧱 Coche les deux phrases où un COD est exprimé.",
        "options": [
          "Scriptum in muro est",
          "Marcus scriptum legit",
          "Livia Discordiam timet",
          "Marcus legit"
        ],
        "expected": [
          "Marcus scriptum legit",
          "Livia Discordiam timet"
        ],
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l11-t4",
        "type": "textInput",
        "prompt": "🧱 Mini-texte : « Discordia in muro est. Marcus scriptum legit. » Recopie seulement le mot écrit sur le mur.",
        "expected": "Discordia",
        "acceptedAnswers": [
          "Discordia",
          "discordia"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "Discordia",
            "discordia"
          ]
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
          "Marcus craint Discordia"
        ],
        "expected": "Marcus lit le nom Discordia",
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l11-t6",
        "type": "singleChoice",
        "prompt": "🧱 Mini-texte : « Scriptum in muro est. Livia timet. » Quel groupe montre où se trouve l’inscription ?",
        "options": [
          "Scriptum",
          "in muro",
          "Livia",
          "timet"
        ],
        "expected": "in muro",
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l11-t7",
        "type": "textInput",
        "prompt": "🧱 Complète avec la bonne forme : « Livia ... timet » pour dire « Livia craint Discordia ».",
        "expected": "Discordiam",
        "acceptedAnswers": [
          "Discordiam",
          "discordiam"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "Discordiam",
            "discordiam"
          ]
        },
        "points": 1
      }

    ],

    "production": [

      {
        "id": "p1-l11-p1",
        "type": "textInput",
        "prompt": "🧱 Traduis en français : Scriptum in muro est",
        "expected": "une inscription est sur le mur",
        "acceptedAnswers": [
          "une inscription est sur le mur",
          "l'inscription est sur le mur",
          "une inscription est écrite sur le mur",
          "l'inscription est écrite sur le mur",
          "une inscription est inscrite sur le mur",
          "l'inscription est inscrite sur le mur"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "une inscription est sur le mur",
            "l'inscription est sur le mur",
            "une inscription est écrite sur le mur",
            "l'inscription est écrite sur le mur",
            "une inscription est inscrite sur le mur",
            "l'inscription est inscrite sur le mur"
          ],
          "ignoreDeterminers": true,
          "ignoreContractions": true,
          "allowPartialAnswer": "core-meaning-only"
        },
        "points": 1,
        "canonicalAnswer": "une inscription est sur le mur",
        "normalization": {
          "trim": true,
          "collapseSpaces": true,
          "ignoreCase": true,
          "ignorePunctuation": true,
          "normalizeApostrophes": true,
          "ignoreDiacritics": true,
          "normalizeFrenchContractions": true,
          "ignoreFrenchDeterminers": true
        },
        "gradingFocus": "Compréhension correcte de la phrase de lieu ; déterminants non discriminants.",
        "rejectIf": [
          "verbe incorrect",
          "contre-sens sur le lieu",
          "réponse hors-sujet"
        ],
        "tests": [
          {
            "input": "une inscription est sur le mur",
            "isCorrect": true
          },
          {
            "input": "l'inscription est écrite sur le mur",
            "isCorrect": true
          },
          {
            "input": "une inscription lit le mur",
            "isCorrect": false
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
        "acceptedAnswers": [
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
          "accepted": [
            "livia craint discordia",
            "livia a peur de discordia",
            "livia redoute discordia",
            "livia craint la discorde",
            "livia a peur de la discorde",
            "livia redoute la discorde"
          ],
          "ignoreDeterminers": true,
          "ignoreContractions": true,
          "allowPartialAnswer": "core-meaning-only"
        },
        "points": 1,
        "canonicalAnswer": "livia craint discordia",
        "normalization": {
          "trim": true,
          "collapseSpaces": true,
          "ignoreCase": true,
          "ignorePunctuation": true,
          "normalizeApostrophes": true,
          "ignoreDiacritics": true,
          "normalizeFrenchContractions": true,
          "ignoreFrenchDeterminers": true
        },
        "gradingFocus": "Compréhension correcte du verbe timet et du COD Discordiam.",
        "rejectIf": [
          "verbe incorrect",
          "sens inversé sujet/objet",
          "réponse hors-sujet"
        ],
        "tests": [
          {
            "input": "livia craint discordia",
            "isCorrect": true
          },
          {
            "input": "livia a peur de la discorde",
            "isCorrect": true
          },
          {
            "input": "discordia craint livia",
            "isCorrect": false
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
            "input": "legit Marcus scriptum",
            "isCorrect": true
          },
          {
            "input": "Marcus scriptum scribit",
            "isCorrect": false
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

        "Je lis d’abord le verbe, puis je cherche le sujet, le COD éventuel et le groupe de lieu.",

        "Une inscription peut être sur le mur ; quelqu’un peut la lire ; quelqu’un peut craindre ce qu’elle annonce."

      ],

      "cahier": [

        "Scriptum in muro est",

        "Marcus scriptum legit",

        "Livia Discordiam timet"

      ],

      "keywords": [

        "murus",

        "scriptum",

        "Discordia"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "inscription",

        "mur",

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

    "id": "p1-l12",

    "period": 1,

    "periodId": "p1",

    "title": "La piste Discordia - Synthèse",

    subtitle: headerContexts5eP1["p1-l12"],

    "objective": "Réinvestir les acquis de P1 dans une scène finale de taverne sans ajouter de notion nouvelle.",

    "lessonPoint": "Je lis d’abord le verbe, puis je repère le sujet, le COD éventuel, et le groupe de lieu ou de direction.",

    "canDo": [

      "Je lis une micro-scène complète en combinant plusieurs repères.",

      "Je distingue sujet, verbe, COD et groupe de lieu ou de direction.",

      "Je traduis et je produis une phrase de synthèse sans me fier seulement à l’ordre des mots."

    ],

    "lexicon": [

      "popina (nom.), popinam (acc.), popina (abl.) = taverne",

      "in popina = dans la taverne",

      "ad popinam = vers la taverne",

      "tabella (nom.), tabellam (acc.) = tablette",

      "scriptum (nom./acc.) = inscription, écrit",

      "Discordia (nom.), Discordiam (acc.) = Discordia / la Discorde",

      "nomen Discordiae = le nom de Discordia",

      "legit = il/elle lit",

      "videt = il/elle voit",

      "timet = il/elle craint",

      "portat = il/elle porte",

      "manet = il/elle reste"

    ],

    "maxScore": 10,

    "training": [

      {
        "id": "p1-l12-t1",
        "type": "singleChoice",
        "prompt": "🧩 Dans « Marcus scriptum legit in popina », quel mot est le verbe ?",
        "options": [
          "Marcus",
          "scriptum",
          "legit",
          "popina"
        ],
        "expected": "legit",
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l12-t2",
        "type": "singleChoice",
        "prompt": "🧩 Traduction. « Marcus scriptum legit in popina » : Marcus…",
        "options": [
          "lit l’inscription dans la taverne",
          "écrit l’inscription dans la taverne",
          "porte l’inscription vers la taverne",
          "craint l’inscription dans la taverne"
        ],
        "expected": "lit l’inscription dans la taverne",
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l12-t3",
        "type": "multipleChoice",
        "prompt": "🧩 Coche les trois phrases où un COD est exprimé.",
        "options": [
          "Marcus scriptum legit in popina",
          "Livia Discordiam timet",
          "Titus tabellam ad popinam portat",
          "Marcus in popina manet"
        ],
        "expected": [
          "Marcus scriptum legit in popina",
          "Livia Discordiam timet",
          "Titus tabellam ad popinam portat"
        ],
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l12-t4",
        "type": "matching",
        "prompt": "🧩 Dans « Titus tabellam ad popinam portat », associe chaque élément à sa fonction.",
        "pairs": [
          {
            "left": "Titus",
            "right": "sujet"
          },
          {
            "left": "tabellam",
            "right": "COD"
          },
          {
            "left": "portat",
            "right": "verbe"
          },
          {
            "left": "ad popinam",
            "right": "groupe de direction"
          }
        ],
        "rightOptions": [
          "verbe",
          "sujet",
          "COD",
          "groupe de direction"
        ],
        "expected": {
          "Titus": "sujet",
          "tabellam": "COD",
          "portat": "verbe",
          "ad popinam": "groupe de direction"
        },
        "points": 1
      },

      {
        "id": "p1-l12-t5",
        "type": "singleChoice",
        "prompt": "🧩 Piège : « Tabellam Titus ad popinam portat » signifie :",
        "options": [
          "Titus porte la tablette vers la taverne",
          "La tablette porte Titus vers la taverne",
          "Titus lit la tablette dans la taverne",
          "Titus reste dans la taverne avec la tablette"
        ],
        "expected": "Titus porte la tablette vers la taverne",
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l12-t6",
        "type": "singleChoice",
        "prompt": "🧩 Dans « Marcus nomen Discordiae legit », quel bloc faut-il traduire ensemble par « le nom de Discordia » ?",
        "options": [
          "Marcus legit",
          "nomen Discordiae",
          "Discordiam legit",
          "in popina"
        ],
        "expected": "nomen Discordiae",
        "shuffle": true,
        "points": 1
      },

      {
        "id": "p1-l12-t7",
        "type": "textInput",
        "prompt": "🧩 Complète en latin : « Marcus ... legit » pour dire « Marcus lit le nom de Discordia ».",
        "expected": "nomen Discordiae",
        "acceptedAnswers": [
          "nomen Discordiae",
          "nomen discordiae"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "nomen Discordiae",
            "nomen discordiae"
          ]
        },
        "points": 1
      }

    ],

    "production": [

      {
        "id": "p1-l12-p1",
        "type": "textInput",
        "prompt": "🧩 Traduis en français : Marcus nomen Discordiae legit in popina",
        "expected": "marcus lit le nom de discordia dans la taverne",
        "acceptedAnswers": [
          "marcus lit le nom de discordia dans la taverne",
          "marcus lit le nom de discordia à la taverne",
          "marcus lit le nom de discorde dans la taverne",
          "marcus lit le nom de discorde à la taverne",
          "marcus lit le nom de la discorde dans la taverne",
          "marcus lit le nom de la discorde à la taverne",
          "marcus déchiffre le nom de discordia dans la taverne",
          "marcus déchiffre le nom de la discorde dans la taverne"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "marcus lit le nom de discordia dans la taverne",
            "marcus lit le nom de discordia à la taverne",
            "marcus lit le nom de discorde dans la taverne",
            "marcus lit le nom de discorde à la taverne",
            "marcus lit le nom de la discorde dans la taverne",
            "marcus lit le nom de la discorde à la taverne",
            "marcus déchiffre le nom de discordia dans la taverne",
            "marcus déchiffre le nom de la discorde dans la taverne"
          ],
          "ignoreDeterminers": true,
          "ignoreContractions": true,
          "allowPartialAnswer": "core-meaning-only"
        },
        "points": 1,
        "canonicalAnswer": "marcus lit le nom de discordia dans la taverne",
        "normalization": {
          "trim": true,
          "collapseSpaces": true,
          "ignoreCase": true,
          "ignorePunctuation": true,
          "normalizeApostrophes": true,
          "ignoreDiacritics": true,
          "normalizeFrenchContractions": true,
          "ignoreFrenchDeterminers": true
        },
        "gradingFocus": "Compréhension correcte du verbe, du bloc lexical et du groupe de lieu.",
        "rejectIf": [
          "verbe incorrect",
          "contre-sens sur le lieu",
          "réponse hors-sujet"
        ],
        "tests": [
          {
            "input": "marcus lit le nom de discordia dans la taverne",
            "isCorrect": true
          },
          {
            "input": "marcus lit le nom de la discorde à la taverne",
            "isCorrect": true
          },
          {
            "input": "marcus craint discordia dans la taverne",
            "isCorrect": false
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
        "acceptedAnswers": [
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
          "accepted": [
            "livia craint discordia",
            "livia a peur de discordia",
            "livia redoute discordia",
            "livia craint la discorde",
            "livia a peur de la discorde",
            "livia redoute la discorde"
          ],
          "ignoreDeterminers": true,
          "ignoreContractions": true,
          "allowPartialAnswer": "core-meaning-only"
        },
        "points": 1,
        "canonicalAnswer": "livia craint discordia",
        "normalization": {
          "trim": true,
          "collapseSpaces": true,
          "ignoreCase": true,
          "ignorePunctuation": true,
          "normalizeApostrophes": true,
          "ignoreDiacritics": true,
          "normalizeFrenchContractions": true,
          "ignoreFrenchDeterminers": true
        },
        "gradingFocus": "Compréhension correcte de timet et du COD Discordiam.",
        "rejectIf": [
          "verbe incorrect",
          "sens inversé sujet/objet",
          "réponse hors-sujet"
        ],
        "tests": [
          {
            "input": "livia craint discordia",
            "isCorrect": true
          },
          {
            "input": "livia a peur de la discorde",
            "isCorrect": true
          },
          {
            "input": "discordia craint livia",
            "isCorrect": false
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
          {
            "input": "Titus tabellam ad popinam portat",
            "isCorrect": true
          },
          {
            "input": "portat Titus tabellam ad popinam",
            "isCorrect": true
          },
          {
            "input": "Titus tabella ad popinam portat",
            "isCorrect": false
          },
          {
            "input": "réponse hors-sujet",
            "isCorrect": false
          }
        ]
      }

    ],

    "summary": {

      "retains": [

        "Dans une scène complète, je pars du verbe, puis je repère sujet, COD et groupe de lieu ou de direction.",

        "Je ne me fie pas seulement à l’ordre des mots : les fonctions restent lisibles.",

        "Je peux réinvestir ensemble plusieurs acquis de P1 dans une même phrase."

      ],

      "cahier": [

        "Marcus nomen Discordiae legit in popina",

        "Livia Discordiam timet",

        "Titus tabellam ad popinam portat"

      ],

      "keywords": [

        "Discordia",

        "popina",

        "synthèse",

        "lecture"

      ]

    },

    "meta": {

      "status": "ready",

      "tags": [

        "synthese",

        "discordia",

        "popina",

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

      "prompt": "🟢 « Adest » signifie surtout :",

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

      "prompt": "🟢 Quelles phrases utilisent des verbes d'état (être, paraître, se tenir...) ?",

      "options": [

        "Marcus adest.",

        "Livia in domo est.",

        "Lucius tabellam portat.",

        "Flavia in thermis stat."

      ],

      "expected": [

        "Marcus adest.",

        "Livia in domo est.",

        "Flavia in thermis stat."

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

      "prompt": "🟢 Traduis en français : « Adest Marcus ».",

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
];

      
