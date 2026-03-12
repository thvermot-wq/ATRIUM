// Données de leçons 5E · Période 1.
export const lessons5eP1 = [
  {
    "id": "p1-l1",
    "period": 1,
    "periodId": "p1",
    "title": "Salve, Subura !",
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
      "adsum = je suis là, je suis présent",
      "salutat = il/elle salue",
      "Subura = Subure",
      "in via = sur la route",
      "amicus = ami",
      "canis = chien"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p1-l1-t1",
        "type": "singleChoice",
        "prompt": "Flavia salue Marcus seul. Quelle formule choisit-elle ?",
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
        "prompt": "Titus parle à trois voisins. Il dit :",
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
        "prompt": "Sélectionne les formules pour dire 'Au revoir'.",
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
        "prompt": "Associe formule et sens.",
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
          "je suis présent",
          "bonjour (à une personne)"
        ],
        "expected": {
          "adsum": "je suis présent",
          "salve": "bonjour (à une personne)",
          "vale": "au revoir (à une personne)"
        },
        "points": 1
      },
      {
        "id": "p1-l1-t5",
        "type": "singleChoice",
        "prompt": "Dans « Flavia in via est », que signifie via ?",
        "options": [
          "route",
          "maison",
          "fontaine",
          "mur",
          "temple"
        ],
        "expected": "route",
        "shuffle": true,
        "points": 1,
        "feedback": "Le groupe nominal aide : in via = dans la rue."
      },
      {
        "id": "p1-l1-t6",
        "type": "singleChoice",
        "prompt": "« Niger canis est » signifie :",
        "options": [
          "Niger est un chien",
          "Le chien est rigolo",
          "Niger est un mur",
          "Niger crie",
          "Le chien salue"
        ],
        "expected": "Niger est un chien",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l1-t7",
        "type": "textInput",
        "prompt": "Écris en latin : « je suis présent ».",
        "expected": "adsum",
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p1-l1-p1",
        "type": "textInput",
        "prompt": "Traduis en français : Flavia Suburae habitat",
        "expected": "Flavia habite dans Subure",
        "acceptedAnswers": [
          "flavia habite à subure",
          "flavia habite à subura",
          "Flavia habite dans Subure"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "flavia habite à subure",
            "flavia habite à subura",
            "Flavia habite dans Subure"
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
        "prompt": "Traduis en français : Niger canis est",
        "expected": "niger est un chien",
        "acceptedAnswers": [
          "niger est un chien",
          "niger est le chien"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "niger est un chien",
            "niger est le chien"
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
          {
            "input": "niger est un chien",
            "isCorrect": true
          },
          {
            "input": "réponse hors-sujet",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p1-l1-p3",
        "type": "textInput",
        "prompt": "Traduis en latin : Marcus salue Flavia",
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
    "title": "Domus et insula",
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
      "cella = cellier",
      "in domo = à la maison",
      "prope = près",
      "ante = devant",
      "stat = il / elle se tient",
      "habitat = il/elle habite",
      "manet = il/elle reste"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p1-l2-t1",
        "type": "singleChoice",
        "prompt": "Aurelia vit dans une grande maison. Quel nom latin choisir pour 'maison' ?",
        "options": [
          "domus",
          "insula",
          "forum",
          "taberna",
          "templum"
        ],
        "expected": "domus",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l2-t2",
        "type": "singleChoice",
        "prompt": "Marcus vit dans un immeuble de quartier. C’est une :",
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
        "prompt": "Choisis des éléments de la maison.",
        "options": [
          "ianua",
          "fenestra",
          "forum",
          "cella",
          "taberna"
        ],
        "expected": [
          "ianua",
          "fenestra",
          "cella"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l2-t4",
        "type": "matching",
        "prompt": "Associe mot et sens.",
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
        "prompt": "« Niger ante ianuam stat » : Niger est…",
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
        "prompt": "Dans « Flavia in domo manet », manet signifie :",
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
        "type": "textInput",
        "prompt": "Écris en latin : « porte » (nom).",
        "expected": "ianua",
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p1-l2-p1",
        "type": "textInput",
        "prompt": "Traduis en français : Aurelia in domo manet",
        "expected": "aurélia reste dans la maison",
        "acceptedAnswers": [
          "aurélia reste dans la maison",
          "aurelia reste dans la maison",
          "aurélia demeure dans la maison",
          "aurélia reste à la maison",
          "aurélia demeure à la maison",
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "aurélia reste dans la maison",
            "aurelia reste dans la maison",
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
        "prompt": "Traduis en français : Marcus in insula habitat",
        "expected": "marcus habite dans l'insula",
        "acceptedAnswers": [
          "marcus habite dans l'insula",
          "marcus habite dans l'immeuble",
          "marcus habite dans une insula",
          "marcus habite dans un immeuble",
          "marcus habite en insula",
          "marcus habite en immeuble"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "marcus habite dans l'insula",
            "marcus habite dans l'immeuble",
            "marcus habite dans une insula",
            "marcus habite dans un immeuble",
            "marcus habite en insula",
            "marcus habite en immeuble"
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
          {
            "input": "marcus habite dans l'insula",
            "isCorrect": true
          },
          {
            "input": "réponse hors-sujet",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p1-l2-p3",
        "type": "textInput",
        "prompt": "Traduis en latin : Niger est devant la porte",
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
    "title": "Forum et taberna",
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
      "panis = pain",
      "vinum = vin",
      "portat = il/elle porte",
      "spectat = il/elle regarde",
      "vendit = il/elle vend",
      "ad = vers, en direction de"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p1-l3-t1",
        "type": "singleChoice",
        "prompt": "Le lieu principal des échanges est :",
        "options": [
          "forum",
          "domus",
          "thermae",
          "ludus",
          "templum"
        ],
        "expected": "forum",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l3-t2",
        "type": "singleChoice",
        "prompt": "Une boutique se dit :",
        "options": [
          "taberna",
          "insula",
          "via",
          "porta",
          "aqua"
        ],
        "expected": "taberna",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l3-t3",
        "type": "multipleChoice",
        "prompt": "Choisis les mots liés à une scène de marché.",
        "options": [
          "mercator",
          "panis",
          "vinum",
          "murus",
          "ianua"
        ],
        "expected": [
          "mercator",
          "panis",
          "vinum"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l3-t4",
        "type": "matching",
        "prompt": "Associe latin et français.",
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
        "prompt": "« Mercator panem portat » : qui porte le pain ?",
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
        "prompt": "« Panem mercator portat » signifie :",
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
        "type": "textInput",
        "prompt": "Écris en latin : « marchand ».",
        "expected": "mercator",
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p1-l3-p1",
        "type": "textInput",
        "prompt": "Traduis en français : Mercator panem vendit",
        "expected": "le marchand vend du pain",
        "acceptedAnswers": [
          "le marchand vend du pain",
          "le marchand vend le pain",
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "le marchand vend du pain",
            "le marchand vend le pain",
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
          {
            "input": "le marchand vend du pain",
            "isCorrect": true
          },
          {
            "input": "réponse hors-sujet",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p1-l3-p2",
        "type": "textInput",
        "prompt": "Traduis en français : Flavia tabernam spectat",
        "expected": "flavia regarde la boutique",
        "acceptedAnswers": [
          "flavia regarde la boutique",
          "flavia observe la boutique",
          "flavia regarde l'échoppe"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "flavia regarde la boutique",
            "flavia observe la boutique",
            "flavia regarde l'échoppe"
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
        "prompt": "Traduis en latin : Marcus court vers le forum",
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
    "title": "Au petit sanctuaire",
    "objective": "Lire de courtes phrases au sanctuaire et repérer une offrande déplacée.",
    "lessonPoint": "Je lis ensemble le groupe nominal (donum sacrum, ara parva).",
    "canDo": [
      "Je comprends une scène religieuse simple.",
      "Je repère un objet offert.",
      "Je traduis une action autour du sanctuaire."
    ],
    "lexicon": [
      "sacellum = petit sanctuaire",
      "ara = autel",
      "donum = offrande",
      "corona = couronne",
      "dea = déesse",
      "sacerdos = prêtre, prêtresse",
      "ponit = il/elle pose",
      "movet = il/elle bouge, déplace"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p1-l4-t1",
        "type": "singleChoice",
        "prompt": "Le petit sanctuaire se dit :",
        "options": [
          "sacellum",
          "forum",
          "insula",
          "thermae",
          "taberna"
        ],
        "expected": "sacellum",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l4-t2",
        "type": "singleChoice",
        "prompt": "Une offrande est :",
        "options": [
          "donum",
          "murus",
          "canis",
          "ludus",
          "porta"
        ],
        "expected": "donum",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l4-t3",
        "type": "multipleChoice",
        "prompt": "Choisis les mots liés au sanctuaire.",
        "options": [
          "ara",
          "corona",
          "dea",
          "panis",
          "sacerdos"
        ],
        "expected": [
          "ara",
          "corona",
          "dea",
          "sacerdos"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l4-t4",
        "type": "matching",
        "prompt": "Associe latin et sens.",
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
        "prompt": "« Vetus sacerdos donum ponit » : qui pose l’offrande ?",
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
        "prompt": "« Donum Sextus movet » :",
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
        "prompt": "Écris en latin : « couronne ».",
        "expected": "corona",
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p1-l4-p1",
        "type": "textInput",
        "prompt": "Traduis en français : Vetus sacerdos donum ponit",
        "expected": "la vieille prêtresse pose l'offrande",
        "acceptedAnswers": [
          "la vieille prêtresse pose l'offrande",
          "la vieille prêtresse place l'offrande",
          "la prêtresse âgée pose l'offrande"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "la vieille prêtresse pose l'offrande",
            "la vieille prêtresse place l'offrande",
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
        "prompt": "Traduis en français : Sextus coronam movet",
        "expected": "sextus déplace la couronne",
        "acceptedAnswers": [
          "sextus déplace la couronne",
          "sextus bouge la couronne",
          "sextus dérange la couronne"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "sextus déplace la couronne",
            "sextus bouge la couronne",
            "sextus dérange la couronne"
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
        "prompt": "Traduis en latin : Livia regarde l’autel",
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
    "title": "Niger devant la porte",
    "objective": "Comprendre des phrases où Niger signale un trouble devant les maisons.",
    "lessonPoint": "Je repère sujet et complément sans me laisser piéger par l’ordre.",
    "canDo": [
      "Je lis une scène courte avec un animal.",
      "Je distingue qui agit et ce qui est vu.",
      "Je traduis des phrases simples avec canis."
    ],
    "lexicon": [
      "Niger = le nom du petit chien",
      "canis = chien",
      "latrat = il/elle aboie",
      "ianua = porte",
      "domus = maison",
      "spectat = il/elle regarde",
      "videt = il/elle voit",
      "currit = il/elle court"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p1-l5-t1",
        "type": "singleChoice",
        "prompt": "Niger est :",
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
        "prompt": "Le verbe latrat signifie :",
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
        "prompt": "Choisis les phrases possibles liées à cette scène : Niger aboie devant une porte fermée, et attire l'attention de Marcus et Livia.",
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
        "prompt": "Associe phrase et interprétation.",
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
        "prompt": "Piège : « Canem Livia videt » signifie :",
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
        "prompt": "Dans « Niger currit cum Livia », le sujet est :",
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
        "type": "textInput",
        "prompt": "Écris en latin : « chien ».",
        "expected": "canis",
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p1-l5-p1",
        "type": "textInput",
        "prompt": "Traduis en français : Niger ante ianuam stat",
        "expected": "niger est devant la porte",
        "acceptedAnswers": [
          "niger est devant la porte",
          "niger se tient devant la porte",
          "le chien niger est devant la porte"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "niger est devant la porte",
            "niger se tient devant la porte",
            "le chien niger est devant la porte"
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
        "prompt": "Traduis en français : Canem Livia videt",
        "expected": "livia voit le chien",
        "acceptedAnswers": [
          "livia voit le chien",
          "livia regarde le chien",
          "livia aperçoit le chien"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "livia voit le chien",
            "livia regarde le chien",
            "livia aperçoit le chien"
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
        "prompt": "Traduis en latin : Marcus regarde le chien",
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
    "title": "La tablette échangée",
    "objective": "Suivre une scène où une tablette a été échangée et identifier qui porte quoi.",
    "lessonPoint": "Je relie verbe + objet pour comprendre l’incident.",
    "canDo": [
      "Je lis une phrase d’action avec tablette.",
      "Je repère le complément d’objet courant.",
      "Je traduis une phrase liée à l’enquête."
    ],
    "lexicon": [
      "tabella = tablette",
      "epistula = lettre",
      "portat = il/elle porte",
      "habet = il/elle a",
      "quaerit = il/elle cherche",
      "invenit = il/elle trouve",
      "Marcus",
      "Lucius"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p1-l6-t1",
        "type": "singleChoice",
        "prompt": "La tablette se dit :",
        "options": [
          "tabella",
          "taberna",
          "templum",
          "porta",
          "fontis"
        ],
        "expected": "tabella",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l6-t2",
        "type": "singleChoice",
        "prompt": "Dans « Lucius epistulam quaerit », Lucius :",
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
        "prompt": "Choisis les actions plausibles dans le cadre d'une enquête.",
        "options": [
          "quaerit",
          "invenit",
          "portat",
          "scribit",
          "murmurat"
        ],
        "expected": [
          "quaerit",
          "invenit",
          "scribit"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l6-t4",
        "type": "matching",
        "prompt": "Associe phrase et sens.",
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
        "prompt": "Piège : « Tabellam Marcus portat » signifie :",
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
        "prompt": "Dans la scène, quel verbe dit qu’on trouve l’objet ?",
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
        "prompt": "Écris en latin : « lettre ».",
        "expected": "epistula",
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p1-l6-p1",
        "type": "textInput",
        "prompt": "Traduis en français : Marcus tabellam portat",
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
        "prompt": "Traduis en français : Lucius epistulam invenit",
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
        "prompt": "Traduis en latin : Livia cherche la tablette",
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
    "title": "À la fontaine",
    "objective": "Comprendre une scène de fontaine perturbée et les actions du quotidien.",
    "lessonPoint": "Je lis les lieux avec in/ad pour suivre le déplacement.",
    "canDo": [
      "Je comprends une scène autour de l’eau.",
      "Je distingue position et mouvement.",
      "Je traduis des phrases courtes de lieu."
    ],
    "lexicon": [
      "fons",
      "aqua",
      "situla",
      "in fonte",
      "ad fontem",
      "venit",
      "manet",
      "turbat"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p1-l7-t1",
        "type": "singleChoice",
        "prompt": "La fontaine se dit :",
        "options": [
          "fons",
          "forum",
          "domus",
          "murus",
          "via"
        ],
        "expected": "fons",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l7-t2",
        "type": "singleChoice",
        "prompt": "« Marcus ad fontem venit » : Marcus va…",
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
        "prompt": "Sélectionne les mots de la scène de fontaine.",
        "options": [
          "aqua",
          "situla",
          "fons",
          "tabella",
          "venit"
        ],
        "expected": [
          "aqua",
          "situla",
          "fons",
          "venit"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l7-t4",
        "type": "matching",
        "prompt": "Associe expression et sens.",
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
        "prompt": "« Aquam Lucius portat » : qui porte l’eau ?",
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
        "prompt": "Le verbe turbat veut dire :",
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
        "prompt": "Écris en latin : « eau ».",
        "expected": "aqua",
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p1-l7-p1",
        "type": "textInput",
        "prompt": "Traduis en français : Aurelia ad fontem venit",
        "expected": "aurélia vient vers la fontaine",
        "acceptedAnswers": [
          "aurélia vient vers la fontaine",
          "aurelia vient vers la fontaine",
          "aurélia va à la fontaine"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "aurélia vient vers la fontaine",
            "aurelia vient vers la fontaine",
            "aurélia va à la fontaine"
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
        "prompt": "Traduis en français : Lucius aquam portat",
        "expected": "lucius porte de l'eau",
        "acceptedAnswers": [
          "lucius porte de l'eau",
          "lucius apporte de l'eau",
          "lucius transporte de l'eau"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "lucius porte de l'eau",
            "lucius apporte de l'eau",
            "lucius transporte de l'eau"
          ]
        },
        "points": 1,
        "canonicalAnswer": "lucius porte de l'eau",
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
            "input": "lucius porte de l'eau",
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
        "prompt": "Traduis en latin : Niger trouble la fontaine",
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
        "in et ad ne disent pas la même chose.",
        "Je repère mouvement, lieu, action dans une même phrase."
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
    "title": "Chez le boulanger",
    "objective": "Lire une micro-scène dans une boulangerie et consolider sujet/complément.",
    "lessonPoint": "Le verbe et la terminaison du nom guident la fonction dans la phrase.",
    "canDo": [
      "Je comprends une scène de métier.",
      "Je repère qui agit et ce qui est transporté.",
      "Je traduis des phrases courtes du quotidien."
    ],
    "lexicon": [
      "pistor",
      "panis",
      "farina",
      "taberna",
      "emit",
      "portat",
      "videt",
      "accipit"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p1-l8-t1",
        "type": "singleChoice",
        "prompt": "Le boulanger se dit :",
        "options": [
          "pistor",
          "mercator",
          "agricola",
          "poeta",
          "servus"
        ],
        "expected": "pistor",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l8-t2",
        "type": "singleChoice",
        "prompt": "« Flavia panem emit » : Flavia…",
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
        "prompt": "Choisis les mots de la boulangerie.",
        "options": [
          "pistor",
          "panis",
          "farina",
          "aqua",
          "tabella"
        ],
        "expected": [
          "pistor",
          "panis",
          "farina"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l8-t4",
        "type": "matching",
        "prompt": "Associe phrase et sens.",
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
            "left": "Marcus pistrum videt",
            "right": "Marcus voit le boulanger"
          }
        ],
        "rightOptions": [
          "Marcus voit le boulanger",
          "Flavia achète du pain",
          "Le boulanger porte le pain"
        ],
        "expected": {
          "Pistor panem portat": "Le boulanger porte le pain",
          "Flavia panem emit": "Flavia achète du pain",
          "Marcus pistrum videt": "Marcus voit le boulanger"
        },
        "points": 1
      },
      {
        "id": "p1-l8-t5",
        "type": "singleChoice",
        "prompt": "Piège : « Panem pistor portat » signifie :",
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
        "prompt": "Dans « Titus farinam accipit », accipit signifie :",
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
        "prompt": "Écris en latin : « pain ».",
        "expected": "panis",
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p1-l8-p1",
        "type": "textInput",
        "prompt": "Traduis en français : Pistor panem portat",
        "expected": "le boulanger porte le pain",
        "acceptedAnswers": [
          "le boulanger porte le pain",
          "le boulanger apporte le pain",
          "le boulanger transporte le pain"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "le boulanger porte le pain",
            "le boulanger apporte le pain",
            "le boulanger transporte le pain"
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
        "prompt": "Traduis en français : Flavia panem emit",
        "expected": "flavia achète du pain",
        "acceptedAnswers": [
          "flavia achète du pain",
          "flavia achète le pain",
          "flavia prend du pain"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "flavia achète du pain",
            "flavia achète le pain",
            "flavia prend du pain"
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
        "prompt": "Traduis en latin : Marcus voit le boulanger",
        "expected": "Marcus pistrum videt",
        "acceptedAnswers": [
          "Marcus pistrum videt",
          "Marcus videt pistrum",
          "pistrum Marcus videt",
          "pistrum videt Marcus",
          "videt Marcus pistrum",
          "videt pistrum Marcus"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "Marcus pistrum videt",
            "Marcus videt pistrum",
            "pistrum Marcus videt",
            "pistrum videt Marcus",
            "videt Marcus pistrum",
            "videt pistrum Marcus"
          ]
        },
        "points": 1,
        "canonicalAnswer": "Marcus pistrum videt",
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
            "input": "Marcus pistrum videt",
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
        "La scène de métier consolide les mêmes repères grammaticaux.",
        "Je relis verbe et complément avant de traduire."
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
    "title": "L’école du quartier",
    "objective": "Comprendre de petites consignes et scènes de classe dans le ludus de la Subura.",
    "lessonPoint": "Je cherche le verbe d’énoncé (legit, scribit, audit) pour comprendre la tâche.",
    "canDo": [
      "Je lis une mini-scène de classe.",
      "Je relie action d’étude et personnage.",
      "Je traduis des phrases scolaires courtes."
    ],
    "lexicon": [
      "ludus",
      "magister",
      "discipulus",
      "tabella",
      "legit",
      "scribit",
      "audit",
      "respondet"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p1-l9-t1",
        "type": "singleChoice",
        "prompt": "Le lieu de classe est :",
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
        "prompt": "Le magister est :",
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
        "prompt": "Sélectionne des verbes de travail scolaire.",
        "options": [
          "legit",
          "scribit",
          "audit",
          "portat",
          "salutat"
        ],
        "expected": [
          "legit",
          "scribit",
          "audit"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l9-t4",
        "type": "matching",
        "prompt": "Associe phrase et sens.",
        "pairs": [
          {
            "left": "Discipulus tabellam scribit",
            "right": "L'élève écrit la tablette"
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
          "L'élève écrit la tablette"
        ],
        "expected": {
          "Discipulus tabellam scribit": "L'élève écrit la tablette",
          "Magister legit": "Le maître lit",
          "Marcus respondet": "Marcus répond"
        },
        "points": 1
      },
      {
        "id": "p1-l9-t5",
        "type": "singleChoice",
        "prompt": "Piège : « Tabellam discipulus scribit » veut dire :",
        "options": [
          "L’élève écrit la tablette",
          "La tablette écrit l’élève",
          "L’élève lit la tablette",
          "Le maître écrit",
          "L’élève répond"
        ],
        "expected": "L’élève écrit la tablette",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l9-t6",
        "type": "singleChoice",
        "prompt": "Dans « Titus audit », audit signifie :",
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
        "prompt": "Écris en latin : « élève ».",
        "expected": "discipulus",
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p1-l9-p1",
        "type": "textInput",
        "prompt": "Traduis en français : Magister legit",
        "expected": "le maître lit",
        "acceptedAnswers": [
          "le maître lit",
          "le maitre lit",
          "un maître lit"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "le maître lit",
            "le maitre lit",
            "un maître lit"
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
        "prompt": "Traduis en français : Marcus respondet",
        "expected": "marcus répond",
        "acceptedAnswers": [
          "marcus répond",
          "marcus donne une réponse"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "marcus répond",
            "marcus donne une réponse"
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
          {
            "input": "marcus répond",
            "isCorrect": true
          },
          {
            "input": "réponse hors-sujet",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p1-l9-p3",
        "type": "textInput",
        "prompt": "Traduis en latin : l’élève écoute le maître",
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
    "title": "Aux thermes",
    "objective": "Lire une scène simple aux thermes et repérer actions et lieux.",
    "lessonPoint": "Les prépositions et le verbe suffisent souvent pour comprendre la situation.",
    "canDo": [
      "Je comprends une phrase de déplacement aux thermes.",
      "Je repère une action collective simple.",
      "Je traduis des phrases brèves de scène urbaine."
    ],
    "lexicon": [
      "thermae",
      "aqua",
      "calida",
      "frigidus",
      "in thermis",
      "ad thermas",
      "intrat",
      "manet"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p1-l10-t1",
        "type": "singleChoice",
        "prompt": "Le lieu des bains publics est :",
        "options": [
          "thermae",
          "taberna",
          "forum",
          "sacellum",
          "insula"
        ],
        "expected": "thermae",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l10-t2",
        "type": "singleChoice",
        "prompt": "« Marcus ad thermas currit » : Marcus court…",
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
        "prompt": "Choisis les mots de la scène des thermes.",
        "options": [
          "thermae",
          "aqua",
          "calida",
          "ianua",
          "frigidus"
        ],
        "expected": [
          "thermae",
          "aqua",
          "calida",
          "frigidus"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l10-t4",
        "type": "matching",
        "prompt": "Associe expression et sens.",
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
        "prompt": "Piège : « Thermas Marcus intrat » signifie :",
        "options": [
          "Marcus entre dans les thermes",
          "Les thermes entrent dans Marcus",
          "Marcus sort des thermes",
          "Marcus regarde les thermes",
          "Marcus crie"
        ],
        "expected": "Marcus entre dans les thermes",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l10-t6",
        "type": "singleChoice",
        "prompt": "Dans « Livia in thermis manet », manet signifie :",
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
        "prompt": "Écris en latin : « eau chaude ».",
        "expected": "aqua calida",
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p1-l10-p1",
        "type": "textInput",
        "prompt": "Traduis en français : Marcus ad thermas currit",
        "expected": "marcus court vers les thermes",
        "acceptedAnswers": [
          "marcus court vers les thermes",
          "marcus court aux thermes",
          "marcus va vite vers les thermes"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "marcus court vers les thermes",
            "marcus court aux thermes",
            "marcus va vite vers les thermes"
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
        "prompt": "Traduis en français : Livia in thermis manet",
        "expected": "livia reste dans les thermes",
        "acceptedAnswers": [
          "livia reste dans les thermes",
          "livia demeure dans les thermes"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "livia reste dans les thermes",
            "livia demeure dans les thermes"
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
        "prompt": "Traduis en latin : Titus entre dans les thermes",
        "expected": "Titus thermas intrat",
        "acceptedAnswers": [
          "Titus thermas intrat",
          "Titus intrat thermas",
          "thermas Titus intrat",
          "thermas intrat Titus",
          "intrat Titus thermas",
          "intrat thermas Titus"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "Titus thermas intrat",
            "Titus intrat thermas",
            "thermas Titus intrat",
            "thermas intrat Titus",
            "intrat Titus thermas",
            "intrat thermas Titus"
          ]
        },
        "points": 1,
        "canonicalAnswer": "Titus thermas intrat",
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
            "input": "Titus thermas intrat",
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
        "ad marque un déplacement, in une position.",
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
    },
    "meta": {
      "status": "ready",
      "tags": [
        "thermes",
        "ville",
        "p1-l10"
      ]
    }
  },
  {
    "id": "p1-l11",
    "period": 1,
    "periodId": "p1",
    "title": "Le mur écrit",
    "objective": "Comprendre une inscription sur le mur et relier lecture, sens et contexte narratif.",
    "lessonPoint": "Je lis mot à mot puis je recompose le sens global.",
    "canDo": [
      "Je déchiffre une courte inscription latine.",
      "Je distingue message et commentaire.",
      "Je traduis une phrase d’alerte."
    ],
    "lexicon": [
      "murus",
      "scriptum",
      "nomen",
      "Discordia",
      "videt",
      "legit",
      "scribit",
      "timet"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p1-l11-t1",
        "type": "singleChoice",
        "prompt": "Le mur se dit :",
        "options": [
          "murus",
          "porta",
          "domus",
          "via",
          "ara"
        ],
        "expected": "murus",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l11-t2",
        "type": "singleChoice",
        "prompt": "« Marcus scriptum legit » : Marcus…",
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
        "prompt": "Choisis les mots liés à l’inscription.",
        "options": [
          "scriptum",
          "nomen",
          "murus",
          "discordia",
          "panis"
        ],
        "expected": [
          "scriptum",
          "nomen",
          "murus",
          "discordia"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l11-t4",
        "type": "matching",
        "prompt": "Associe phrase et sens.",
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
        "prompt": "Piège : « Discordiam Marcus legit » signifie :",
        "options": [
          "Marcus lit le nom Discordia",
          "Discordia lit Marcus",
          "Marcus écrit Discordia",
          "Marcus crie",
          "Discordia aboie"
        ],
        "expected": "Marcus lit le nom Discordia",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l11-t6",
        "type": "singleChoice",
        "prompt": "Quel verbe signifie « craint » ?",
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
        "prompt": "Écris en latin : « nom ».",
        "expected": "nomen",
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p1-l11-p1",
        "type": "textInput",
        "prompt": "Traduis en français : Nomen in muro est",
        "expected": "un nom est sur le mur",
        "acceptedAnswers": [
          "un nom est sur le mur",
          "le nom est sur le mur",
          "un nom est écrit sur le mur"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "un nom est sur le mur",
            "le nom est sur le mur",
            "un nom est écrit sur le mur"
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
        "prompt": "Traduis en français : Livia Discordiam timet",
        "expected": "livia craint discordia",
        "acceptedAnswers": [
          "livia craint discordia",
          "livia a peur de discordia"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "livia craint discordia",
            "livia a peur de discordia"
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
        "prompt": "Traduis en latin : Marcus lit l’inscription",
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
        "Je peux lire un message court sur un support réel (le mur).",
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
    "title": "Le nom de Discordia",
    "objective": "Synthétiser les acquis de P1 dans une scène finale où le nom de Discordia est identifié.",
    "lessonPoint": "Je combine lexique récurrent, verbe et repères de lieu pour comprendre la scène finale.",
    "canDo": [
      "Je comprends une micro-scène complète.",
      "Je repère rapidement sujet, verbe, complément.",
      "Je traduis des phrases de synthèse en restant précis."
    ],
    "lexicon": [
      "Discordia",
      "Subura",
      "forum",
      "domus",
      "murus",
      "nomen",
      "portat",
      "videt",
      "timet"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p1-l12-t1",
        "type": "singleChoice",
        "prompt": "Dans la scène finale, quel nom apparaît sur le mur ?",
        "options": [
          "Discordia",
          "Minerva",
          "Marcus",
          "Subura",
          "Niger"
        ],
        "expected": "Discordia",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l12-t2",
        "type": "singleChoice",
        "prompt": "« Marcus nomen videt » : Marcus…",
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
        "prompt": "Sélectionne les éléments-clés de la scène finale.",
        "options": [
          "murus",
          "nomen",
          "forum",
          "tabella",
          "discordia"
        ],
        "expected": [
          "murus",
          "nomen",
          "forum",
          "tabella",
          "discordia"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l12-t4",
        "type": "matching",
        "prompt": "Associe phrase et rôle narratif.",
        "pairs": [
          {
            "left": "Marcus nomen videt",
            "right": "découverte"
          },
          {
            "left": "Livia Discordiam timet",
            "right": "réaction"
          },
          {
            "left": "Titus tabellam portat",
            "right": "indice"
          }
        ],
        "rightOptions": [
          "indice",
          "découverte",
          "réaction"
        ],
        "expected": {
          "Marcus nomen videt": "découverte",
          "Livia Discordiam timet": "réaction",
          "Titus tabellam portat": "indice"
        },
        "points": 1
      },
      {
        "id": "p1-l12-t5",
        "type": "singleChoice",
        "prompt": "Piège : « Discordiam Livia timet » signifie :",
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
        "prompt": "Quel rappel méthodologique est juste ?",
        "options": [
          "Cherche d’abord le verbe",
          "Traduis mot à mot sans contexte",
          "Ignore les terminaisons",
          "L’ordre latin est toujours français",
          "Le sujet est toujours au début"
        ],
        "expected": "Cherche d’abord le verbe",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p1-l12-t7",
        "type": "textInput",
        "prompt": "Écris en latin : « nom de Discordia » (deux mots).",
        "expected": "nomen Discordiae",
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p1-l12-p1",
        "type": "textInput",
        "prompt": "Traduis en français : Marcus nomen Discordiae videt",
        "expected": "marcus voit le nom de discordia",
        "acceptedAnswers": [
          "marcus voit le nom de discordia",
          "marcus voit le nom discordia"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "marcus voit le nom de discordia",
            "marcus voit le nom discordia"
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
        "prompt": "Traduis en français : Livia Discordiam timet",
        "expected": "livia craint discordia",
        "acceptedAnswers": [
          "livia craint discordia",
          "livia a peur de discordia"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "livia craint discordia",
            "livia a peur de discordia"
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
        "prompt": "Traduis en latin : Titus porte la tablette au forum",
        "expected": "Titus tabellam ad forum portat",
        "acceptedAnswers": [
          "Titus tabellam ad forum portat",
          "Titus tabellam portat ad forum",
          "Titus ad forum tabellam portat",
          "Titus ad forum portat tabellam",
          "Titus portat tabellam ad forum",
          "Titus portat ad forum tabellam",
          "tabellam Titus ad forum portat",
          "tabellam Titus portat ad forum",
          "tabellam ad forum Titus portat",
          "tabellam ad forum portat Titus",
          "tabellam portat Titus ad forum",
          "tabellam portat ad forum Titus",
          "ad forum Titus tabellam portat",
          "ad forum Titus portat tabellam",
          "ad forum tabellam Titus portat",
          "ad forum tabellam portat Titus",
          "ad forum portat Titus tabellam",
          "ad forum portat tabellam Titus",
          "portat Titus tabellam ad forum",
          "portat Titus ad forum tabellam",
          "portat tabellam Titus ad forum",
          "portat tabellam ad forum Titus",
          "portat ad forum Titus tabellam",
          "portat ad forum tabellam Titus"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "Titus tabellam ad forum portat",
            "Titus tabellam portat ad forum",
            "Titus ad forum tabellam portat",
            "Titus ad forum portat tabellam",
            "Titus portat tabellam ad forum",
            "Titus portat ad forum tabellam",
            "tabellam Titus ad forum portat",
            "tabellam Titus portat ad forum",
            "tabellam ad forum Titus portat",
            "tabellam ad forum portat Titus",
            "tabellam portat Titus ad forum",
            "tabellam portat ad forum Titus",
            "ad forum Titus tabellam portat",
            "ad forum Titus portat tabellam",
            "ad forum tabellam Titus portat",
            "ad forum tabellam portat Titus",
            "ad forum portat Titus tabellam",
            "ad forum portat tabellam Titus",
            "portat Titus tabellam ad forum",
            "portat Titus ad forum tabellam",
            "portat tabellam Titus ad forum",
            "portat tabellam ad forum Titus",
            "portat ad forum Titus tabellam",
            "portat ad forum tabellam Titus"
          ]
        },
        "points": 1,
        "canonicalAnswer": "Titus tabellam ad forum portat",
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
            "input": "Titus tabellam ad forum portat",
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
        "Je peux lire une scène complète en latin simple avec cohérence narrative.",
        "Validation de la période : 8/10 (80 %) et plus."
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
  }
];
