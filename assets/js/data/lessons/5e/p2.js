// Données de leçons 5E · Période 2.
export const lessons5eP2 = [
  {
    "id": "p2-l1",
    "period": 2,
    "periodId": "p2",
    "title": "Quis fecit ?",
    "objective": "Lire des témoignages contradictoires et comprendre qui accuse qui.",
    "lessonPoint": "Questionner une phrase, c’est déjà la comprendre.",
    "canDo": [
      "Je reconnais les interrogatifs latins les plus fréquents.",
      "Je repère le témoin dans un micro-texte.",
      "Je traduis une question courte d’enquête."
    ],
    "lexicon": [
      "quis",
      "quid",
      "cur",
      "ubi",
      "testis",
      "vicinus",
      "videt",
      "dicit",
      "negat",
      "accusat"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p2-l1-t1",
        "type": "singleChoice",
        "prompt": "Quel mot demande « qui ? »",
        "options": [
          "quis",
          "quid",
          "cur",
          "ubi",
          "testis"
        ],
        "expected": "quis",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l1-t2",
        "type": "matching",
        "prompt": "Associe l’interrogatif à sa réponse logique.",
        "pairs": [
          {
            "left": "quis",
            "right": "Marcus"
          },
          {
            "left": "quid",
            "right": "tabellam"
          },
          {
            "left": "cur",
            "right": "metum habet"
          },
          {
            "left": "ubi",
            "right": "in via"
          }
        ],
        "rightOptions": [
          "in via",
          "Marcus",
          "tabellam",
          "metum habet"
        ],
        "expected": {
          "quis": "Marcus",
          "quid": "tabellam",
          "cur": "metum habet",
          "ubi": "in via"
        },
        "points": 1
      },
      {
        "id": "p2-l1-t3",
        "type": "singleChoice",
        "prompt": "Micro-texte : « Testis vetus dicit: vicinus Marcum accusat. » Qui accuse Marcus ?",
        "options": [
          "le voisin",
          "Marcus",
          "le témoin",
          "Flavia",
          "Niger"
        ],
        "expected": "le voisin",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l1-t4",
        "type": "multipleChoice",
        "prompt": "Traductions recevables de « vicinus Marcum accusat ».",
        "options": [
          "Le voisin accuse Marcus",
          "Le voisin met Marcus en cause",
          "Marcus accuse le voisin",
          "Marcus est accusé par le voisin",
          "Le voisin salue Marcus"
        ],
        "expected": [
          "Le voisin accuse Marcus",
          "Le voisin met Marcus en cause",
          "Marcus est accusé par le voisin"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l1-t5",
        "type": "singleChoice",
        "prompt": "Dans « vicinus Marcum accusat », qui accuse ?",
        "options": [
          "vicinus",
          "Marcum",
          "accusat",
          "testis",
          "quis"
        ],
        "expected": "vicinus",
        "shuffle": true,
        "points": 1,
        "feedback": "Cherche d’abord le verbe accusat puis le sujet."
      },
      {
        "id": "p2-l1-t6",
        "type": "singleChoice",
        "prompt": "Micro-texte : « Titus dicit; Lucius negat se vidisse. » Qui nie avoir vu ?",
        "options": [
          "Lucius",
          "Titus",
          "Marcus",
          "Flavia",
          "Aurelia"
        ],
        "expected": "Lucius",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l1-t7",
        "type": "multipleChoice",
        "prompt": "Quels mots servent à poser une question ?",
        "options": [
          "quis",
          "quid",
          "cur",
          "ubi",
          "dicit"
        ],
        "expected": [
          "quis",
          "quid",
          "cur",
          "ubi"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p2-l1-p1",
        "type": "textInput",
        "prompt": "Micro-version : quis tabellam videt ?",
        "expected": "qui voit la tablette ?",
        "acceptedAnswers": [
          "qui voit la tablette",
          "qui voit la tablette ?"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "qui voit la tablette",
            "qui voit la tablette ?"
          ]
        },
        "points": 1
      },
      {
        "id": "p2-l1-p2",
        "type": "textInput",
        "prompt": "Micro-thème : Le voisin accuse Marcus.",
        "expected": "Vicinus Marcum accusat",
        "acceptedAnswers": [
          "Vicinus Marcum accusat",
          "Marcum vicinus accusat"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "Vicinus Marcum accusat",
            "Marcum vicinus accusat"
          ]
        },
        "points": 1
      },
      {
        "id": "p2-l1-p3",
        "type": "textInput",
        "prompt": "Culture : à Rome, un testis est…",
        "expected": "un témoin",
        "acceptedAnswers": [
          "un témoin",
          "le témoin"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "un témoin",
            "le témoin"
          ]
        },
        "points": 1
      }
    ],
    "summary": {
      "retains": [
        "Je peux entrer dans une phrase en lui posant les bonnes questions.",
        "Le verbe et le sujet clarifient vite un témoignage."
      ],
      "cahier": [
        "quis ? quid ? cur ? ubi ?",
        "vicinus Marcum accusat"
      ],
      "keywords": [
        "interrogatifs",
        "testis",
        "accusat",
        "enquête"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p2-l1",
        "enquete",
        "interrogatifs"
      ]
    }
  },
  {
    "id": "p2-l2",
    "period": 2,
    "periodId": "p2",
    "title": "Ad forum",
    "objective": "Comprendre les déplacements suspects entre rue, boutique et forum.",
    "lessonPoint": "Les prépositions changent le sens du mouvement.",
    "canDo": [
      "Je distingue ad / in / ex.",
      "Je repère qui va vers le forum.",
      "Je traduis une phrase de déplacement."
    ],
    "lexicon": [
      "ad",
      "in",
      "ex",
      "forum",
      "via",
      "taberna",
      "currit",
      "venit",
      "exit",
      "intrat"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p2-l2-t1",
        "type": "singleChoice",
        "prompt": "Quel mot signifie « vers » dans ad forum ?",
        "options": [
          "ad",
          "in",
          "ex",
          "cum",
          "sub"
        ],
        "expected": "ad",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l2-t2",
        "type": "matching",
        "prompt": "Associe préposition et idée.",
        "pairs": [
          {
            "left": "ad",
            "right": "aller vers"
          },
          {
            "left": "in",
            "right": "être dans"
          },
          {
            "left": "ex",
            "right": "sortir de"
          }
        ],
        "rightOptions": [
          "être dans",
          "aller vers",
          "sortir de"
        ],
        "expected": {
          "ad": "aller vers",
          "in": "être dans",
          "ex": "sortir de"
        },
        "points": 1
      },
      {
        "id": "p2-l2-t3",
        "type": "singleChoice",
        "prompt": "Mini-texte : « Marcus ad forum currit, Titus ex taberna exit. » Qui va vers le forum ?",
        "options": [
          "Marcus",
          "Titus",
          "la boutique",
          "le forum",
          "Niger"
        ],
        "expected": "Marcus",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l2-t4",
        "type": "multipleChoice",
        "prompt": "Traductions recevables de « Marcus ad forum currit ».",
        "options": [
          "Marcus court vers le forum",
          "Marcus court au forum",
          "Marcus sort du forum",
          "Marcus se dirige vers le forum",
          "Marcus est dans le forum"
        ],
        "expected": [
          "Marcus court vers le forum",
          "Marcus court au forum",
          "Marcus se dirige vers le forum"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l2-t5",
        "type": "singleChoice",
        "prompt": "Quelle préposition indique l’origine ?",
        "options": [
          "ex",
          "ad",
          "in",
          "cum",
          "prope"
        ],
        "expected": "ex",
        "shuffle": true,
        "points": 1,
        "feedback": "La préposition change le sens du déplacement."
      },
      {
        "id": "p2-l2-t6",
        "type": "singleChoice",
        "prompt": "Marcus va-t-il vers le forum ou en vient-il ?",
        "options": [
          "vers le forum",
          "il en vient",
          "il reste dans le forum",
          "il entre dans une domus",
          "on ne sait pas"
        ],
        "expected": "vers le forum",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l2-t7",
        "type": "multipleChoice",
        "prompt": "Quelles phrases parlent d’un déplacement ?",
        "options": [
          "Titus ex taberna exit",
          "Marcus ad forum currit",
          "Livia in domo manet",
          "Aurelia in via venit",
          "Niger dormit"
        ],
        "expected": [
          "Titus ex taberna exit",
          "Marcus ad forum currit",
          "Aurelia in via venit"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p2-l2-p1",
        "type": "textInput",
        "prompt": "Micro-version : Titus ex taberna exit",
        "expected": "titus sort de la boutique",
        "acceptedAnswers": [
          "titus sort de la boutique",
          "titus sort d'une boutique",
          "titus vient de la boutique"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "titus sort de la boutique",
            "titus sort d'une boutique",
            "titus vient de la boutique"
          ]
        },
        "points": 1
      },
      {
        "id": "p2-l2-p2",
        "type": "textInput",
        "prompt": "Micro-thème : Le garçon entre dans la boutique.",
        "expected": "Puer in tabernam intrat",
        "acceptedAnswers": [
          "Puer in tabernam intrat",
          "In tabernam puer intrat"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "Puer in tabernam intrat",
            "In tabernam puer intrat"
          ]
        },
        "points": 1
      },
      {
        "id": "p2-l2-p3",
        "type": "textInput",
        "prompt": "Culture : le forum est…",
        "expected": "un centre de la vie urbaine",
        "acceptedAnswers": [
          "un centre de la vie urbaine",
          "la place centrale de la ville",
          "le centre de la ville"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "un centre de la vie urbaine",
            "la place centrale de la ville",
            "le centre de la ville"
          ]
        },
        "points": 1
      }
    ],
    "summary": {
      "retains": [
        "Je distingue aller vers, être dans, sortir de.",
        "Une petite préposition peut changer toute la lecture."
      ],
      "cahier": [
        "Marcus ad forum currit",
        "Titus ex taberna exit"
      ],
      "keywords": [
        "ad",
        "in",
        "ex",
        "déplacement"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p2-l2",
        "prepositions",
        "forum"
      ]
    }
  },
  {
    "id": "p2-l3",
    "period": 2,
    "periodId": "p2",
    "title": "In domo, ex domo",
    "objective": "Comparer lieu de présence et lieu d’origine dans des témoignages contradictoires.",
    "lessonPoint": "Le lieu où l’on est et le lieu d’où l’on vient ne se traduisent pas pareil.",
    "canDo": [
      "Je distingue in / ex dans une scène.",
      "Je repère qui sort de la maison.",
      "Je traduis des phrases de localisation."
    ],
    "lexicon": [
      "domus",
      "hortus",
      "cubiculum",
      "ex",
      "in",
      "manet",
      "venit",
      "intrat",
      "exit",
      "spectat"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p2-l3-t1",
        "type": "singleChoice",
        "prompt": "in domo se traduit par :",
        "options": [
          "dans la maison",
          "hors de la maison",
          "vers la maison",
          "avec la maison",
          "sous la maison"
        ],
        "expected": "dans la maison",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l3-t2",
        "type": "matching",
        "prompt": "Associe expression et exemple.",
        "pairs": [
          {
            "left": "in domo",
            "right": "Aurelia manet"
          },
          {
            "left": "ex domo",
            "right": "Marcus venit"
          }
        ],
        "rightOptions": [
          "Marcus venit",
          "Aurelia manet"
        ],
        "expected": {
          "in domo": "Aurelia manet",
          "ex domo": "Marcus venit"
        },
        "points": 1
      },
      {
        "id": "p2-l3-t3",
        "type": "singleChoice",
        "prompt": "Mini-texte : « Aurelia in domo manet; Lucius ex domo venit. » Qui sort de la maison ?",
        "options": [
          "Lucius",
          "Aurelia",
          "domus",
          "hortus",
          "Niger"
        ],
        "expected": "Lucius",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l3-t4",
        "type": "multipleChoice",
        "prompt": "Traductions recevables de « Marcus ex domo venit ».",
        "options": [
          "Marcus vient de la maison",
          "Marcus sort de la maison",
          "Marcus va vers la maison",
          "Marcus arrive depuis la maison",
          "Marcus reste dans la maison"
        ],
        "expected": [
          "Marcus vient de la maison",
          "Marcus sort de la maison",
          "Marcus arrive depuis la maison"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l3-t5",
        "type": "singleChoice",
        "prompt": "Dans « Aurelia in horto manet », où est Aurelia ?",
        "options": [
          "dans le jardin",
          "hors du jardin",
          "vers le jardin",
          "au forum",
          "dans la rue"
        ],
        "expected": "dans le jardin",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l3-t6",
        "type": "singleChoice",
        "prompt": "Qui ment sur ses déplacements selon le mini-récit ?",
        "options": [
          "Marcus",
          "Aurelia",
          "Lucius",
          "Niger",
          "la prêtresse"
        ],
        "expected": "Marcus",
        "shuffle": true,
        "points": 1,
        "feedback": "Relis les prépositions avant de conclure."
      },
      {
        "id": "p2-l3-t7",
        "type": "multipleChoice",
        "prompt": "Quelles expressions parlent du lieu où l’on reste ?",
        "options": [
          "in domo",
          "in horto",
          "ex domo",
          "ex cubiculo",
          "in cubiculo"
        ],
        "expected": [
          "in domo",
          "in horto",
          "in cubiculo"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p2-l3-p1",
        "type": "textInput",
        "prompt": "Micro-version : Livia in cubiculo manet",
        "expected": "livia reste dans la chambre",
        "acceptedAnswers": [
          "livia reste dans la chambre",
          "livia demeure dans la chambre"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "livia reste dans la chambre",
            "livia demeure dans la chambre"
          ]
        },
        "points": 1
      },
      {
        "id": "p2-l3-p2",
        "type": "textInput",
        "prompt": "Micro-thème : Le garçon sort du jardin.",
        "expected": "Puer ex horto exit",
        "acceptedAnswers": [
          "Puer ex horto exit",
          "Ex horto puer exit"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "Puer ex horto exit",
            "Ex horto puer exit"
          ]
        },
        "points": 1
      },
      {
        "id": "p2-l3-p3",
        "type": "textInput",
        "prompt": "Culture : domus et hortus, ce sont…",
        "expected": "la maison et le jardin",
        "acceptedAnswers": [
          "la maison et le jardin",
          "un espace domestique romain",
          "des lieux de la vie quotidienne"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "la maison et le jardin",
            "un espace domestique romain",
            "des lieux de la vie quotidienne"
          ]
        },
        "points": 1
      }
    ],
    "summary": {
      "retains": [
        "Je fais attention aux petits mots qui disent lieu, mouvement et origine.",
        "Le verbe aide à confirmer le déplacement."
      ],
      "cahier": [
        "in domo",
        "ex domo",
        "Puer ex horto exit"
      ],
      "keywords": [
        "domus",
        "hortus",
        "in/ex"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p2-l3",
        "maison",
        "localisation"
      ]
    }
  },
  {
    "id": "p2-l4",
    "period": 2,
    "periodId": "p2",
    "title": "Cum amico",
    "objective": "Lire avec précision qui agit avec qui dans les témoignages.",
    "lessonPoint": "Cum m’aide à lire la relation entre les personnages.",
    "canDo": [
      "Je reconnais un accompagnement.",
      "Je relie deux personnages dans l’action.",
      "Je traduis une phrase avec cum."
    ],
    "lexicon": [
      "cum",
      "amicus",
      "ancilla",
      "servus",
      "venit",
      "ambulat",
      "laborat",
      "loquitur",
      "manet",
      "ridet"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p2-l4-t1",
        "type": "singleChoice",
        "prompt": "Quel mot latin veut dire « avec » ?",
        "options": [
          "cum",
          "ad",
          "in",
          "ex",
          "sub"
        ],
        "expected": "cum",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l4-t2",
        "type": "matching",
        "prompt": "Associe personnage et compagnon.",
        "pairs": [
          {
            "left": "Marcus",
            "right": "cum amico"
          },
          {
            "left": "ancilla",
            "right": "cum domina"
          },
          {
            "left": "servus",
            "right": "cum Lucio"
          }
        ],
        "rightOptions": [
          "cum Lucio",
          "cum amico",
          "cum domina"
        ],
        "expected": {
          "Marcus": "cum amico",
          "ancilla": "cum domina",
          "servus": "cum Lucio"
        },
        "points": 1
      },
      {
        "id": "p2-l4-t3",
        "type": "singleChoice",
        "prompt": "Mini-texte : « Titus dicit: Marcus cum ancilla ambulat. » Avec qui Marcus marche-t-il ?",
        "options": [
          "avec l’ancilla",
          "avec Titus",
          "avec Niger",
          "avec le forum",
          "avec la domus"
        ],
        "expected": "avec l’ancilla",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l4-t4",
        "type": "multipleChoice",
        "prompt": "Traductions recevables de « Marcus cum amico ambulat ».",
        "options": [
          "Marcus marche avec un ami",
          "Marcus se promène avec son ami",
          "Marcus va vers son ami",
          "Marcus et un ami marchent ensemble",
          "Marcus quitte son ami"
        ],
        "expected": [
          "Marcus marche avec un ami",
          "Marcus se promène avec son ami",
          "Marcus et un ami marchent ensemble"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l4-t5",
        "type": "singleChoice",
        "prompt": "Quel groupe indique l’accompagnement ?",
        "options": [
          "cum amico",
          "ad forum",
          "in domo",
          "ex taberna",
          "per viam"
        ],
        "expected": "cum amico",
        "shuffle": true,
        "points": 1,
        "feedback": "Le groupe nominal se lit ensemble autour de cum."
      },
      {
        "id": "p2-l4-t6",
        "type": "singleChoice",
        "prompt": "Selon Titus, avec qui Marcus a-t-il été vu ?",
        "options": [
          "avec un ami",
          "avec la prêtresse",
          "avec Niger",
          "avec Sextus",
          "avec personne"
        ],
        "expected": "avec un ami",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l4-t7",
        "type": "multipleChoice",
        "prompt": "Quels énoncés décrivent une action faite à deux ?",
        "options": [
          "Ancilla cum domina laborat",
          "Marcus cum amico ridet",
          "Lucius in domo manet",
          "Titus cum Flavia loquitur",
          "Niger latrat"
        ],
        "expected": [
          "Ancilla cum domina laborat",
          "Marcus cum amico ridet",
          "Titus cum Flavia loquitur"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p2-l4-p1",
        "type": "textInput",
        "prompt": "Micro-version : ancilla cum domina laborat",
        "expected": "la servante travaille avec la maîtresse",
        "acceptedAnswers": [
          "la servante travaille avec la maîtresse",
          "l'ancilla travaille avec la domina",
          "la servante travaille avec sa maîtresse"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "la servante travaille avec la maîtresse",
            "l'ancilla travaille avec la domina",
            "la servante travaille avec sa maîtresse"
          ]
        },
        "points": 1
      },
      {
        "id": "p2-l4-p2",
        "type": "textInput",
        "prompt": "Micro-thème : Le serviteur rit avec son ami.",
        "expected": "Servus cum amico ridet",
        "acceptedAnswers": [
          "Servus cum amico ridet",
          "Cum amico servus ridet"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "Servus cum amico ridet",
            "Cum amico servus ridet"
          ]
        },
        "points": 1
      },
      {
        "id": "p2-l4-p3",
        "type": "textInput",
        "prompt": "Culture : cum amico dit…",
        "expected": "une relation d'accompagnement",
        "acceptedAnswers": [
          "une relation d'accompagnement",
          "agir avec quelqu'un",
          "la relation entre deux personnages"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "une relation d'accompagnement",
            "agir avec quelqu'un",
            "la relation entre deux personnages"
          ]
        },
        "points": 1
      }
    ],
    "summary": {
      "retains": [
        "Je repère le lien entre les personnages : cum est un indice fort.",
        "Le verbe et l’accompagnement se lisent ensemble."
      ],
      "cahier": [
        "Marcus cum amico ambulat",
        "ancilla cum domina laborat"
      ],
      "keywords": [
        "cum",
        "accompagnement",
        "relation"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p2-l4",
        "cum",
        "relations"
      ]
    }
  },
  {
    "id": "p2-l5",
    "period": 2,
    "periodId": "p2",
    "title": "Domina, dominus, servus",
    "objective": "Comprendre les rapports sociaux dans les scènes d’enquête domestique.",
    "lessonPoint": "Les mots de statut social orientent l’interprétation de la scène.",
    "canDo": [
      "Je reconnais qui donne l’ordre.",
      "Je repère qui répond.",
      "Je traduis une phrase de hiérarchie domestique."
    ],
    "lexicon": [
      "domina",
      "dominus",
      "servus",
      "ancilla",
      "iubet",
      "parat",
      "portat",
      "audit",
      "respondet",
      "laborat"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p2-l5-t1",
        "type": "singleChoice",
        "prompt": "Quel mot désigne la maîtresse de maison ?",
        "options": [
          "domina",
          "dominus",
          "servus",
          "ancilla",
          "testis"
        ],
        "expected": "domina",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l5-t2",
        "type": "matching",
        "prompt": "Associe mot et rôle.",
        "pairs": [
          {
            "left": "dominus",
            "right": "maître"
          },
          {
            "left": "domina",
            "right": "maîtresse"
          },
          {
            "left": "servus",
            "right": "serviteur"
          },
          {
            "left": "ancilla",
            "right": "servante"
          }
        ],
        "rightOptions": [
          "serviteur",
          "maître",
          "servante",
          "maîtresse"
        ],
        "expected": {
          "dominus": "maître",
          "domina": "maîtresse",
          "servus": "serviteur",
          "ancilla": "servante"
        },
        "points": 1
      },
      {
        "id": "p2-l5-t3",
        "type": "singleChoice",
        "prompt": "Mini-texte : « Domina servum iubet; servus respondet. » Qui donne l’ordre ?",
        "options": [
          "domina",
          "servus",
          "dominus",
          "ancilla",
          "Niger"
        ],
        "expected": "domina",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l5-t4",
        "type": "multipleChoice",
        "prompt": "Traductions recevables de « domina servum vocat ».",
        "options": [
          "La maîtresse appelle le serviteur",
          "La dame appelle le serviteur",
          "Le serviteur appelle la maîtresse",
          "La maîtresse fait venir le serviteur",
          "Le serviteur appelle la dame"
        ],
        "expected": [
          "La maîtresse appelle le serviteur",
          "La dame appelle le serviteur",
          "La maîtresse fait venir le serviteur"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l5-t5",
        "type": "singleChoice",
        "prompt": "Dans « servus dominae respondet », qui répond ?",
        "options": [
          "servus",
          "dominae",
          "respondet",
          "domina",
          "dominus"
        ],
        "expected": "servus",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l5-t6",
        "type": "singleChoice",
        "prompt": "Qui dit la vérité dans le micro-récit ?",
        "options": [
          "ancilla",
          "Sextus",
          "Niger",
          "dominus",
          "personne"
        ],
        "expected": "ancilla",
        "shuffle": true,
        "points": 1,
        "feedback": "Cherche d’abord le verbe de parole."
      },
      {
        "id": "p2-l5-t7",
        "type": "multipleChoice",
        "prompt": "Quels mots indiquent une hiérarchie ?",
        "options": [
          "domina",
          "dominus",
          "servus",
          "ancilla",
          "forum"
        ],
        "expected": [
          "domina",
          "dominus",
          "servus",
          "ancilla"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p2-l5-p1",
        "type": "textInput",
        "prompt": "Micro-version : ancilla panem parat",
        "expected": "la servante prépare le pain",
        "acceptedAnswers": [
          "la servante prépare le pain",
          "l'ancilla prépare le pain"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "la servante prépare le pain",
            "l'ancilla prépare le pain"
          ]
        },
        "points": 1
      },
      {
        "id": "p2-l5-p2",
        "type": "textInput",
        "prompt": "Micro-thème : La maîtresse appelle le serviteur.",
        "expected": "Domina servum vocat",
        "acceptedAnswers": [
          "Domina servum vocat",
          "Servum domina vocat"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "Domina servum vocat",
            "Servum domina vocat"
          ]
        },
        "points": 1
      },
      {
        "id": "p2-l5-p3",
        "type": "textInput",
        "prompt": "Culture : domina / servus montrent…",
        "expected": "une hiérarchie domestique",
        "acceptedAnswers": [
          "une hiérarchie domestique",
          "des rapports sociaux de la maison",
          "un statut social"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "une hiérarchie domestique",
            "des rapports sociaux de la maison",
            "un statut social"
          ]
        },
        "points": 1
      }
    ],
    "summary": {
      "retains": [
        "Le latin dit le statut social, je le prends en compte.",
        "Je lis mieux une scène si je repère qui ordonne et qui répond."
      ],
      "cahier": [
        "domina servum vocat",
        "servus dominae respondet"
      ],
      "keywords": [
        "hiérarchie",
        "domus",
        "rapports sociaux"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p2-l5",
        "statut",
        "domina"
      ]
    }
  },
  {
    "id": "p2-l6",
    "period": 2,
    "periodId": "p2",
    "title": "Mercator iratus",
    "objective": "Interpréter le ton de la scène grâce aux adjectifs et aux verbes de parole.",
    "lessonPoint": "L’adjectif n’est pas décoratif : il oriente le sens.",
    "canDo": [
      "Je reconnais un adjectif de ton.",
      "Je repère qui est en colère.",
      "Je traduis un groupe nominal expressif."
    ],
    "lexicon": [
      "iratus",
      "laetus",
      "fessus",
      "bonus",
      "malus",
      "mercator",
      "pistor",
      "clamat",
      "accusat",
      "tacet"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p2-l6-t1",
        "type": "singleChoice",
        "prompt": "Quel mot est un adjectif ?",
        "options": [
          "iratus",
          "mercator",
          "forum",
          "tacet",
          "domus"
        ],
        "expected": "iratus",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l6-t2",
        "type": "matching",
        "prompt": "Associe personnage et adjectif plausible.",
        "pairs": [
          {
            "left": "mercator",
            "right": "iratus"
          },
          {
            "left": "pistor",
            "right": "fessus"
          },
          {
            "left": "ancilla",
            "right": "laeta"
          }
        ],
        "rightOptions": [
          "fessus",
          "laeta",
          "iratus"
        ],
        "expected": {
          "mercator": "iratus",
          "pistor": "fessus",
          "ancilla": "laeta"
        },
        "points": 1
      },
      {
        "id": "p2-l6-t3",
        "type": "singleChoice",
        "prompt": "Mini-texte : « Lucius mercator iratus clamat. » Qui est en colère ?",
        "options": [
          "Lucius",
          "pistor",
          "Sextus",
          "Niger",
          "la prêtresse"
        ],
        "expected": "Lucius",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l6-t4",
        "type": "multipleChoice",
        "prompt": "Traductions recevables de « mercator iratus clamat ».",
        "options": [
          "Le marchand furieux crie",
          "Le marchand en colère s’écrie",
          "Le marchand calme crie",
          "Le marchand accuse en criant",
          "Le marchand heureux parle doucement"
        ],
        "expected": [
          "Le marchand furieux crie",
          "Le marchand en colère s’écrie",
          "Le marchand accuse en criant"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l6-t5",
        "type": "singleChoice",
        "prompt": "Quel adjectif est l’opposé de bonus ?",
        "options": [
          "malus",
          "laetus",
          "fessus",
          "iratus",
          "tacet"
        ],
        "expected": "malus",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l6-t6",
        "type": "singleChoice",
        "prompt": "Pourquoi Lucius s’emporte-t-il dans la scène ?",
        "options": [
          "Il accuse Sextus",
          "Il cherche Niger",
          "Il sort du forum",
          "Il prie Minerve",
          "Il dort"
        ],
        "expected": "Il accuse Sextus",
        "shuffle": true,
        "points": 1,
        "feedback": "Relis le verbe accusat et le groupe nominal."
      },
      {
        "id": "p2-l6-t7",
        "type": "multipleChoice",
        "prompt": "Quels groupes nominaux sont cohérents ?",
        "options": [
          "mercator iratus",
          "pistor fessus",
          "domina laeta",
          "forum iratus",
          "taberna laeta"
        ],
        "expected": [
          "mercator iratus",
          "pistor fessus",
          "domina laeta"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p2-l6-p1",
        "type": "textInput",
        "prompt": "Micro-version : pistor fessus tacet",
        "expected": "le boulanger fatigué se tait",
        "acceptedAnswers": [
          "le boulanger fatigué se tait",
          "le boulanger épuisé se tait",
          "le pistor fatigué se tait"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "le boulanger fatigué se tait",
            "le boulanger épuisé se tait",
            "le pistor fatigué se tait"
          ]
        },
        "points": 1
      },
      {
        "id": "p2-l6-p2",
        "type": "textInput",
        "prompt": "Micro-thème : Le marchand furieux accuse le boulanger.",
        "expected": "Mercator iratus pistorem accusat",
        "acceptedAnswers": [
          "Mercator iratus pistorem accusat",
          "Pistorem mercator iratus accusat"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "Mercator iratus pistorem accusat",
            "Pistorem mercator iratus accusat"
          ]
        },
        "points": 1
      },
      {
        "id": "p2-l6-p3",
        "type": "textInput",
        "prompt": "Culture : dans une taberna, un mercator est…",
        "expected": "un marchand",
        "acceptedAnswers": [
          "un marchand",
          "le vendeur",
          "un commerçant"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "un marchand",
            "le vendeur",
            "un commerçant"
          ]
        },
        "points": 1
      }
    ],
    "summary": {
      "retains": [
        "L’adjectif change le ton de la scène.",
        "Je relis le groupe nominal avant de traduire."
      ],
      "cahier": [
        "mercator iratus clamat",
        "pistor fessus tacet"
      ],
      "keywords": [
        "adjectif",
        "ton",
        "marché"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p2-l6",
        "adjectifs",
        "mercator"
      ]
    }
  },
  {
    "id": "p2-l7",
    "period": 2,
    "periodId": "p2",
    "title": "Duo pueri, tres feminae",
    "objective": "Utiliser les nombres pour mieux lire les témoins et les actions.",
    "lessonPoint": "Compter aide à lire : la quantité change la scène.",
    "canDo": [
      "Je reconnais des nombres fréquents.",
      "Je relie nombre et groupe.",
      "Je traduis des phrases au pluriel."
    ],
    "lexicon": [
      "unus",
      "duo",
      "tres",
      "multi",
      "pauci",
      "puer",
      "femina",
      "venit",
      "manet",
      "currit"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p2-l7-t1",
        "type": "singleChoice",
        "prompt": "Quel mot veut dire « deux » ?",
        "options": [
          "duo",
          "tres",
          "unus",
          "multi",
          "pauci"
        ],
        "expected": "duo",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l7-t2",
        "type": "matching",
        "prompt": "Associe nombre et quantité.",
        "pairs": [
          {
            "left": "unus",
            "right": "1"
          },
          {
            "left": "duo",
            "right": "2"
          },
          {
            "left": "tres",
            "right": "3"
          },
          {
            "left": "multi",
            "right": "plusieurs"
          }
        ],
        "rightOptions": [
          "3",
          "1",
          "2",
          "plusieurs"
        ],
        "expected": {
          "unus": "1",
          "duo": "2",
          "tres": "3",
          "multi": "plusieurs"
        },
        "points": 1
      },
      {
        "id": "p2-l7-t3",
        "type": "singleChoice",
        "prompt": "Mini-scène : « duo pueri currunt, tres feminae manent. » Combien de femmes restent ?",
        "options": [
          "trois",
          "deux",
          "une",
          "plusieurs",
          "aucune"
        ],
        "expected": "trois",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l7-t4",
        "type": "multipleChoice",
        "prompt": "Traductions recevables de « duo pueri currunt ».",
        "options": [
          "Deux garçons courent",
          "Les deux garçons courent",
          "Un garçon court",
          "Deux élèves courent",
          "Trois garçons courent"
        ],
        "expected": [
          "Deux garçons courent",
          "Les deux garçons courent",
          "Deux élèves courent"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l7-t5",
        "type": "singleChoice",
        "prompt": "Quelle phrase parle de plusieurs femmes ?",
        "options": [
          "tres feminae veniunt",
          "duo pueri currunt",
          "unus servus manet",
          "Marcus venit",
          "Niger latrat"
        ],
        "expected": "tres feminae veniunt",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l7-t6",
        "type": "singleChoice",
        "prompt": "Combien de témoins disent avoir vu la scène ?",
        "options": [
          "deux",
          "trois",
          "un",
          "quatre",
          "cinq"
        ],
        "expected": "deux",
        "shuffle": true,
        "points": 1,
        "feedback": "Le nombre est un indice de fiabilité du récit."
      },
      {
        "id": "p2-l7-t7",
        "type": "multipleChoice",
        "prompt": "Quels mots expriment une quantité ?",
        "options": [
          "duo",
          "tres",
          "multi",
          "pauci",
          "currit"
        ],
        "expected": [
          "duo",
          "tres",
          "multi",
          "pauci"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p2-l7-p1",
        "type": "textInput",
        "prompt": "Micro-version : tres feminae ad fontem veniunt",
        "expected": "trois femmes viennent à la fontaine",
        "acceptedAnswers": [
          "trois femmes viennent à la fontaine",
          "trois femmes arrivent à la fontaine"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "trois femmes viennent à la fontaine",
            "trois femmes arrivent à la fontaine"
          ]
        },
        "points": 1
      },
      {
        "id": "p2-l7-p2",
        "type": "textInput",
        "prompt": "Micro-thème : Deux garçons restent dans la rue.",
        "expected": "Duo pueri in via manent",
        "acceptedAnswers": [
          "Duo pueri in via manent",
          "In via duo pueri manent"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "Duo pueri in via manent",
            "In via duo pueri manent"
          ]
        },
        "points": 1
      },
      {
        "id": "p2-l7-p3",
        "type": "textInput",
        "prompt": "Culture : multi signifie…",
        "expected": "plusieurs",
        "acceptedAnswers": [
          "plusieurs",
          "nombreux"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "plusieurs",
            "nombreux"
          ]
        },
        "points": 1
      }
    ],
    "summary": {
      "retains": [
        "Les nombres modifient la scène et l’action.",
        "Je lis mieux les témoignages quand je compte précisément."
      ],
      "cahier": [
        "duo pueri currunt",
        "tres feminae veniunt"
      ],
      "keywords": [
        "nombres",
        "pluriel",
        "témoins"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p2-l7",
        "nombres",
        "quantite"
      ]
    }
  },
  {
    "id": "p2-l8",
    "period": 2,
    "periodId": "p2",
    "title": "Ego, tu, nos",
    "objective": "Comprendre le point de vue des personnages grâce aux pronoms personnels.",
    "lessonPoint": "Le pronom change qui parle et qui est visé.",
    "canDo": [
      "Je reconnais les pronoms personnels fréquents.",
      "Je lis un mini-dialogue simple.",
      "Je traduis une phrase avec pronom."
    ],
    "lexicon": [
      "ego",
      "tu",
      "nos",
      "vos",
      "me",
      "te",
      "amat",
      "audit",
      "vocat",
      "videt"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p2-l8-t1",
        "type": "singleChoice",
        "prompt": "Quel pronom signifie « je » ?",
        "options": [
          "ego",
          "tu",
          "nos",
          "vos",
          "me"
        ],
        "expected": "ego",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l8-t2",
        "type": "matching",
        "prompt": "Associe pronom et personne.",
        "pairs": [
          {
            "left": "ego",
            "right": "1re pers. sing."
          },
          {
            "left": "tu",
            "right": "2e pers. sing."
          },
          {
            "left": "nos",
            "right": "1re pers. plur."
          },
          {
            "left": "vos",
            "right": "2e pers. plur."
          }
        ],
        "rightOptions": [
          "2e pers. sing.",
          "1re pers. sing.",
          "2e pers. plur.",
          "1re pers. plur."
        ],
        "expected": {
          "ego": "1re pers. sing.",
          "tu": "2e pers. sing.",
          "nos": "1re pers. plur.",
          "vos": "2e pers. plur."
        },
        "points": 1
      },
      {
        "id": "p2-l8-t3",
        "type": "singleChoice",
        "prompt": "Mini-dialogue : « Ego dico, tu negas. » Qui nie ?",
        "options": [
          "tu",
          "ego",
          "nos",
          "Marcus",
          "Livia"
        ],
        "expected": "tu",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l8-t4",
        "type": "multipleChoice",
        "prompt": "Traductions recevables de « tu me vides ».",
        "options": [
          "Tu me vois",
          "Tu m’aperçois",
          "Je te vois",
          "Tu me regardes",
          "Nous te voyons"
        ],
        "expected": [
          "Tu me vois",
          "Tu m’aperçois",
          "Tu me regardes"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l8-t5",
        "type": "singleChoice",
        "prompt": "Dans « Marcus me videt », qui est vu ?",
        "options": [
          "me",
          "Marcus",
          "videt",
          "tu",
          "nos"
        ],
        "expected": "me",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l8-t6",
        "type": "singleChoice",
        "prompt": "Dans la scène, qui accuse qui ?",
        "options": [
          "Flavia accuse Marcus",
          "Marcus accuse Flavia",
          "Titus accuse Niger",
          "Personne n’accuse",
          "Livia accuse la prêtresse"
        ],
        "expected": "Flavia accuse Marcus",
        "shuffle": true,
        "points": 1,
        "feedback": "Ici, le pronom change le point de vue."
      },
      {
        "id": "p2-l8-t7",
        "type": "multipleChoice",
        "prompt": "Quels mots sont des pronoms personnels ?",
        "options": [
          "ego",
          "tu",
          "nos",
          "vos",
          "forum"
        ],
        "expected": [
          "ego",
          "tu",
          "nos",
          "vos"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p2-l8-p1",
        "type": "textInput",
        "prompt": "Micro-version : ego te audio",
        "expected": "je t'entends",
        "acceptedAnswers": [
          "je t'entends",
          "je t’écoute",
          "je t entends"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "je t'entends",
            "je t’écoute",
            "je t entends"
          ]
        },
        "points": 1
      },
      {
        "id": "p2-l8-p2",
        "type": "textInput",
        "prompt": "Micro-thème : Nous voyons Marcus.",
        "expected": "Nos Marcum videmus",
        "acceptedAnswers": [
          "Nos Marcum videmus",
          "Marcum nos videmus"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "Nos Marcum videmus",
            "Marcum nos videmus"
          ]
        },
        "points": 1
      },
      {
        "id": "p2-l8-p3",
        "type": "textInput",
        "prompt": "Culture : dans un témoignage, ego sert à…",
        "expected": "indiquer qui parle",
        "acceptedAnswers": [
          "indiquer qui parle",
          "marquer la première personne",
          "donner le point de vue"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "indiquer qui parle",
            "marquer la première personne",
            "donner le point de vue"
          ]
        },
        "points": 1
      }
    ],
    "summary": {
      "retains": [
        "Le pronom permet de comprendre qui parle et qui est concerné.",
        "Je relis la phrase entière avant de traduire un pronom."
      ],
      "cahier": [
        "ego te audio",
        "Marcus me videt"
      ],
      "keywords": [
        "pronoms",
        "point de vue",
        "dialogue"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p2-l8",
        "pronoms",
        "temoignage"
      ]
    }
  },
  {
    "id": "p2-l9",
    "period": 2,
    "periodId": "p2",
    "title": "Vox in via",
    "objective": "Lire une micro-scène de rumeur et repérer qui croit, qui craint, qui fuit.",
    "lessonPoint": "Je lis par blocs de sens et non mot à mot isolé.",
    "canDo": [
      "Je reconnais le champ lexical de la parole.",
      "Je repère qui croit la rumeur.",
      "Je traduis une phrase de rumeur."
    ],
    "lexicon": [
      "vox",
      "clamor",
      "rumor",
      "verbum",
      "audit",
      "credit",
      "timet",
      "dicit",
      "fugit",
      "manet"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p2-l9-t1",
        "type": "singleChoice",
        "prompt": "Quel mot renvoie à la rumeur ?",
        "options": [
          "rumor",
          "domus",
          "forum",
          "ianua",
          "panis"
        ],
        "expected": "rumor",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l9-t2",
        "type": "matching",
        "prompt": "Associe mot et sens.",
        "pairs": [
          {
            "left": "vox",
            "right": "voix"
          },
          {
            "left": "rumor",
            "right": "rumeur"
          },
          {
            "left": "verbum",
            "right": "mot / parole"
          },
          {
            "left": "timet",
            "right": "craint"
          }
        ],
        "rightOptions": [
          "rumeur",
          "mot / parole",
          "craint",
          "voix"
        ],
        "expected": {
          "vox": "voix",
          "rumor": "rumeur",
          "verbum": "mot / parole",
          "timet": "craint"
        },
        "points": 1
      },
      {
        "id": "p2-l9-t3",
        "type": "singleChoice",
        "prompt": "Mini-texte : « Marcus rumorem audit et credit. » Qui croit la rumeur ?",
        "options": [
          "Marcus",
          "Livia",
          "Titus",
          "Niger",
          "la prêtresse"
        ],
        "expected": "Marcus",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l9-t4",
        "type": "multipleChoice",
        "prompt": "Traductions recevables de « Marcus rumorem audit ».",
        "options": [
          "Marcus entend la rumeur",
          "Marcus entend un bruit qui court",
          "Marcus voit la rumeur",
          "Marcus écoute la rumeur",
          "Marcus écrit la rumeur"
        ],
        "expected": [
          "Marcus entend la rumeur",
          "Marcus entend un bruit qui court",
          "Marcus écoute la rumeur"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l9-t5",
        "type": "singleChoice",
        "prompt": "Dans « Livia rumorem timet », qui a peur ?",
        "options": [
          "Livia",
          "rumorem",
          "timet",
          "Marcus",
          "vox"
        ],
        "expected": "Livia",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l9-t6",
        "type": "singleChoice",
        "prompt": "Qui fuit et qui reste dans le micro-récit ?",
        "options": [
          "Titus fuit, Marcus manet",
          "Marcus fuit, Titus manet",
          "Tout le monde fuit",
          "Personne ne bouge",
          "Niger fuit, Livia manet"
        ],
        "expected": "Titus fuit, Marcus manet",
        "shuffle": true,
        "points": 1,
        "feedback": "Relis les verbes fugit et manet."
      },
      {
        "id": "p2-l9-t7",
        "type": "multipleChoice",
        "prompt": "Quels mots appartiennent au champ de la parole ?",
        "options": [
          "vox",
          "rumor",
          "verbum",
          "dicit",
          "hortus"
        ],
        "expected": [
          "vox",
          "rumor",
          "verbum",
          "dicit"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p2-l9-p1",
        "type": "textInput",
        "prompt": "Micro-version : vox in via manet",
        "expected": "la voix reste dans la rue",
        "acceptedAnswers": [
          "la voix reste dans la rue",
          "la rumeur reste dans la rue",
          "la parole reste dans la rue"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "la voix reste dans la rue",
            "la rumeur reste dans la rue",
            "la parole reste dans la rue"
          ]
        },
        "points": 1
      },
      {
        "id": "p2-l9-p2",
        "type": "textInput",
        "prompt": "Micro-thème : Le garçon croit la rumeur.",
        "expected": "Puer rumorem credit",
        "acceptedAnswers": [
          "Puer rumorem credit",
          "Rumorem puer credit"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "Puer rumorem credit",
            "Rumorem puer credit"
          ]
        },
        "points": 1
      },
      {
        "id": "p2-l9-p3",
        "type": "textInput",
        "prompt": "Culture : rumor est…",
        "expected": "une rumeur",
        "acceptedAnswers": [
          "une rumeur",
          "un bruit qui court",
          "un bruit public"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "une rumeur",
            "un bruit qui court",
            "un bruit public"
          ]
        },
        "points": 1
      }
    ],
    "summary": {
      "retains": [
        "Le contexte oriente le sens de verbum, vox, rumor.",
        "Je lis la scène par ensembles de mots."
      ],
      "cahier": [
        "Marcus rumorem audit",
        "Livia rumorem timet"
      ],
      "keywords": [
        "rumeur",
        "voix",
        "lecture suivie"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p2-l9",
        "rumeur",
        "vox"
      ]
    }
  },
  {
    "id": "p2-l10",
    "period": 2,
    "periodId": "p2",
    "title": "Petite fabula de Discordia",
    "objective": "Lire un mini-récit mythologique simple et relier action, cause et effet.",
    "lessonPoint": "Un petit récit mythologique se lit comme une scène : qui fait quoi, et pourquoi.",
    "canDo": [
      "Je reconnais des mots du mythe de Discordia.",
      "Je repère l’action déclencheuse.",
      "Je traduis une phrase mythologique courte."
    ],
    "lexicon": [
      "dea",
      "malum",
      "aurum",
      "pulcher",
      "irata",
      "intrat",
      "iacit",
      "fugit",
      "turbat",
      "ridet"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p2-l10-t1",
        "type": "singleChoice",
        "prompt": "Quel mot appartient clairement au récit mythologique ?",
        "options": [
          "dea",
          "taberna",
          "pistor",
          "insula",
          "vicinus"
        ],
        "expected": "dea",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l10-t2",
        "type": "matching",
        "prompt": "Associe mot et sens.",
        "pairs": [
          {
            "left": "dea",
            "right": "déesse"
          },
          {
            "left": "malum",
            "right": "pomme"
          },
          {
            "left": "aurum",
            "right": "or"
          },
          {
            "left": "iacit",
            "right": "jette"
          }
        ],
        "rightOptions": [
          "or",
          "déesse",
          "jette",
          "pomme"
        ],
        "expected": {
          "dea": "déesse",
          "malum": "pomme",
          "aurum": "or",
          "iacit": "jette"
        },
        "points": 1
      },
      {
        "id": "p2-l10-t3",
        "type": "singleChoice",
        "prompt": "Dans le récit, qui jette l’objet ?",
        "options": [
          "dea irata",
          "Flavia",
          "Marcus",
          "Niger",
          "sacerdos"
        ],
        "expected": "dea irata",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l10-t4",
        "type": "multipleChoice",
        "prompt": "Traductions recevables de « dea irata malum iacit ».",
        "options": [
          "La déesse en colère jette la pomme",
          "La déesse fâchée lance la pomme",
          "La pomme jette la déesse",
          "La déesse irrite la pomme",
          "La déesse en colère projette la pomme"
        ],
        "expected": [
          "La déesse en colère jette la pomme",
          "La déesse fâchée lance la pomme",
          "La déesse en colère projette la pomme"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l10-t5",
        "type": "singleChoice",
        "prompt": "Quel mot dit la colère ?",
        "options": [
          "irata",
          "pulcher",
          "aurum",
          "ridet",
          "fugit"
        ],
        "expected": "irata",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l10-t6",
        "type": "singleChoice",
        "prompt": "Pourquoi le trouble commence-t-il dans la fabula ?",
        "options": [
          "Parce que la déesse jette la pomme",
          "Parce que Marcus fuit",
          "Parce que Niger aboie",
          "Parce que Titus écrit",
          "Parce que le forum ferme"
        ],
        "expected": "Parce que la déesse jette la pomme",
        "shuffle": true,
        "points": 1,
        "feedback": "Cherche l’action déclencheuse dans le verbe."
      },
      {
        "id": "p2-l10-t7",
        "type": "multipleChoice",
        "prompt": "Quels mots appartiennent à l’histoire de Discordia ?",
        "options": [
          "dea",
          "malum",
          "aurum",
          "turbat",
          "mercator"
        ],
        "expected": [
          "dea",
          "malum",
          "aurum",
          "turbat"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p2-l10-p1",
        "type": "textInput",
        "prompt": "Micro-version : Discordia ridet",
        "expected": "discordia rit",
        "acceptedAnswers": [
          "discordia rit",
          "discordia sourit"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "discordia rit",
            "discordia sourit"
          ]
        },
        "points": 1
      },
      {
        "id": "p2-l10-p2",
        "type": "textInput",
        "prompt": "Micro-thème : La déesse jette la pomme.",
        "expected": "Dea malum iacit",
        "acceptedAnswers": [
          "Dea malum iacit",
          "Malum dea iacit"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "Dea malum iacit",
            "Malum dea iacit"
          ]
        },
        "points": 1
      },
      {
        "id": "p2-l10-p3",
        "type": "textInput",
        "prompt": "Culture : la pomme de discorde provoque…",
        "expected": "un conflit",
        "acceptedAnswers": [
          "un conflit",
          "la discorde",
          "un trouble"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "un conflit",
            "la discorde",
            "un trouble"
          ]
        },
        "points": 1
      }
    ],
    "summary": {
      "retains": [
        "Le mythe aide à comprendre l’intrigue du quartier.",
        "Je lis le récit avec des actions simples bien repérées."
      ],
      "cahier": [
        "dea irata malum iacit",
        "Discordia ridet"
      ],
      "keywords": [
        "Discordia",
        "mythe",
        "pomme",
        "cause"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p2-l10",
        "mythe",
        "discordia"
      ]
    }
  },
  {
    "id": "p2-l11",
    "period": 2,
    "periodId": "p2",
    "title": "Dans le temple de Minerve",
    "objective": "Lire une scène religieuse simple pour comprendre la recherche de conseil des habitants.",
    "lessonPoint": "Les noms de dieux font partie du sens du texte.",
    "canDo": [
      "Je reconnais Minerva, Iuno, Venus.",
      "Je repère qui entre dans le temple.",
      "Je traduis une phrase religieuse simple."
    ],
    "lexicon": [
      "Minerva",
      "Iuno",
      "Venus",
      "templum",
      "dea",
      "donum",
      "orat",
      "stat",
      "intrat",
      "spectat"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p2-l11-t1",
        "type": "singleChoice",
        "prompt": "Quel nom est celui d’une déesse romaine ?",
        "options": [
          "Minerva",
          "Marcus",
          "Niger",
          "Lucius",
          "Sextus"
        ],
        "expected": "Minerva",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l11-t2",
        "type": "matching",
        "prompt": "Associe mot et sens.",
        "pairs": [
          {
            "left": "templum",
            "right": "temple"
          },
          {
            "left": "dea",
            "right": "déesse"
          },
          {
            "left": "orat",
            "right": "prie"
          },
          {
            "left": "donum",
            "right": "offrande"
          }
        ],
        "rightOptions": [
          "offrande",
          "temple",
          "déesse",
          "prie"
        ],
        "expected": {
          "templum": "temple",
          "dea": "déesse",
          "orat": "prie",
          "donum": "offrande"
        },
        "points": 1
      },
      {
        "id": "p2-l11-t3",
        "type": "singleChoice",
        "prompt": "Mini-scène : « Flavia in templum intrat et deam orat. » Qui entre dans le temple ?",
        "options": [
          "Flavia",
          "Marcus",
          "Niger",
          "Iuno",
          "Sextus"
        ],
        "expected": "Flavia",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l11-t4",
        "type": "multipleChoice",
        "prompt": "Traductions recevables de « Flavia deam orat ».",
        "options": [
          "Flavia prie la déesse",
          "Flavia adresse une prière à la déesse",
          "La déesse prie Flavia",
          "Flavia parle à la déesse",
          "Flavia regarde la déesse en silence"
        ],
        "expected": [
          "Flavia prie la déesse",
          "Flavia adresse une prière à la déesse",
          "Flavia parle à la déesse"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l11-t5",
        "type": "singleChoice",
        "prompt": "Quel mot désigne le temple ?",
        "options": [
          "templum",
          "forum",
          "taberna",
          "domus",
          "murus"
        ],
        "expected": "templum",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l11-t6",
        "type": "singleChoice",
        "prompt": "Que demandent les habitants à Minerve ?",
        "options": [
          "du conseil",
          "du pain",
          "une course",
          "un chien",
          "une boutique"
        ],
        "expected": "du conseil",
        "shuffle": true,
        "points": 1,
        "feedback": "Le contexte religieux oriente la lecture."
      },
      {
        "id": "p2-l11-t7",
        "type": "multipleChoice",
        "prompt": "Quels mots appartiennent au monde religieux ?",
        "options": [
          "dea",
          "templum",
          "donum",
          "orat",
          "taberna"
        ],
        "expected": [
          "dea",
          "templum",
          "donum",
          "orat"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p2-l11-p1",
        "type": "textInput",
        "prompt": "Micro-version : Marcus in templo stat",
        "expected": "marcus se tient dans le temple",
        "acceptedAnswers": [
          "marcus se tient dans le temple",
          "marcus est dans le temple",
          "marcus reste dans le temple"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "marcus se tient dans le temple",
            "marcus est dans le temple",
            "marcus reste dans le temple"
          ]
        },
        "points": 1
      },
      {
        "id": "p2-l11-p2",
        "type": "textInput",
        "prompt": "Micro-thème : La jeune fille regarde la déesse.",
        "expected": "Puella deam spectat",
        "acceptedAnswers": [
          "Puella deam spectat",
          "Deam puella spectat"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "Puella deam spectat",
            "Deam puella spectat"
          ]
        },
        "points": 1
      },
      {
        "id": "p2-l11-p3",
        "type": "textInput",
        "prompt": "Culture : Minerve est une déesse de…",
        "expected": "la sagesse",
        "acceptedAnswers": [
          "la sagesse",
          "l'intelligence",
          "la stratégie"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "la sagesse",
            "l'intelligence",
            "la stratégie"
          ]
        },
        "points": 1
      }
    ],
    "summary": {
      "retains": [
        "Les dieux romains éclairent le monde du texte.",
        "Le vocabulaire religieux n’est pas un décor vide."
      ],
      "cahier": [
        "Flavia deam orat",
        "Marcus in templo stat"
      ],
      "keywords": [
        "Minerva",
        "templum",
        "religion",
        "conseil"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p2-l11",
        "temple",
        "minerve"
      ]
    }
  },
  {
    "id": "p2-l12",
    "period": 2,
    "periodId": "p2",
    "title": "Première conclusion",
    "objective": "Synthétiser les indices de l’enquête en combinant lexique, formes et contexte.",
    "lessonPoint": "Je comprends mieux un texte simple quand je relie mots, personnages et actions.",
    "canDo": [
      "Je repère l’indice principal d’un texte court.",
      "Je juge la fiabilité d’un témoin.",
      "Je traduis une phrase de conclusion d’enquête."
    ],
    "lexicon": [
      "indicium",
      "verbum",
      "testis",
      "dea",
      "via",
      "forum",
      "domus",
      "scribit",
      "dicit",
      "turbat"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p2-l12-t1",
        "type": "singleChoice",
        "prompt": "Quel mot signifie « indice » ?",
        "options": [
          "indicium",
          "testis",
          "verbum",
          "forum",
          "domus"
        ],
        "expected": "indicium",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l12-t2",
        "type": "matching",
        "prompt": "Associe mot et sens d’enquête.",
        "pairs": [
          {
            "left": "indicium",
            "right": "indice"
          },
          {
            "left": "testis",
            "right": "témoin"
          },
          {
            "left": "verbum",
            "right": "mot / parole"
          },
          {
            "left": "turbat",
            "right": "trouble"
          }
        ],
        "rightOptions": [
          "mot / parole",
          "trouble",
          "indice",
          "témoin"
        ],
        "expected": {
          "indicium": "indice",
          "testis": "témoin",
          "verbum": "mot / parole",
          "turbat": "trouble"
        },
        "points": 1
      },
      {
        "id": "p2-l12-t3",
        "type": "singleChoice",
        "prompt": "Mini-texte : « In muro indicium est; testis verum dicit. » Quel est l’indice principal ?",
        "options": [
          "l’inscription sur le mur",
          "la boutique",
          "le pain",
          "le chien",
          "la fontaine"
        ],
        "expected": "l’inscription sur le mur",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l12-t4",
        "type": "multipleChoice",
        "prompt": "Traductions recevables de « verbum Discordiae turbationem parat ».",
        "options": [
          "La parole de Discordia prépare le trouble",
          "Le mot de Discordia prépare la perturbation",
          "Discordia calme le quartier",
          "Le propos de Discordia provoque le désordre",
          "Le témoin écrit un mot"
        ],
        "expected": [
          "La parole de Discordia prépare le trouble",
          "Le mot de Discordia prépare la perturbation",
          "Le propos de Discordia provoque le désordre"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l12-t5",
        "type": "singleChoice",
        "prompt": "Quel témoin paraît le plus fiable dans la scène ?",
        "options": [
          "la vieille prêtresse",
          "Sextus",
          "Marcus",
          "Niger",
          "personne"
        ],
        "expected": "la vieille prêtresse",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l12-t6",
        "type": "singleChoice",
        "prompt": "Que sait-on désormais avec certitude ?",
        "options": [
          "La discorde est liée à des messages manipulés",
          "Niger est coupable",
          "Le forum est fermé",
          "Marcus ment toujours",
          "Il n’y a aucun indice"
        ],
        "expected": "La discorde est liée à des messages manipulés",
        "shuffle": true,
        "points": 1,
        "feedback": "Relie les indices, les témoins et les verbes de parole."
      },
      {
        "id": "p2-l12-t7",
        "type": "multipleChoice",
        "prompt": "Quels mots appartiennent à l’enquête ?",
        "options": [
          "indicium",
          "testis",
          "verbum",
          "dicit",
          "panis"
        ],
        "expected": [
          "indicium",
          "testis",
          "verbum",
          "dicit"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p2-l12-p1",
        "type": "textInput",
        "prompt": "Micro-version : testis verum dicit",
        "expected": "le témoin dit la vérité",
        "acceptedAnswers": [
          "le témoin dit la vérité",
          "un témoin dit la vérité",
          "le témoin dit le vrai"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "le témoin dit la vérité",
            "un témoin dit la vérité",
            "le témoin dit le vrai"
          ]
        },
        "points": 1
      },
      {
        "id": "p2-l12-p2",
        "type": "textInput",
        "prompt": "Micro-thème : L’indice trouble les habitants.",
        "expected": "Indicium incolas turbat",
        "acceptedAnswers": [
          "Indicium incolas turbat",
          "Incolas indicium turbat"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "Indicium incolas turbat",
            "Incolas indicium turbat"
          ]
        },
        "points": 1
      },
      {
        "id": "p2-l12-p3",
        "type": "textInput",
        "prompt": "Culture : enquêter dans une ville antique est…",
        "expected": "possible mais difficile",
        "acceptedAnswers": [
          "possible mais difficile",
          "possible avec des témoins",
          "possible grâce aux indices"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "possible mais difficile",
            "possible avec des témoins",
            "possible grâce aux indices"
          ]
        },
        "points": 1
      }
    ],
    "summary": {
      "retains": [
        "Je relie mots, personnages, actions et cadre pour comprendre un texte simple.",
        "Une enquête se lit avec méthode : verbe, témoin, indice."
      ],
      "cahier": [
        "testis verum dicit",
        "indicium incolas turbat"
      ],
      "keywords": [
        "indice",
        "témoignage",
        "Discordia",
        "synthèse"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p2-l12",
        "synthese",
        "enquete"
      ]
    }
  }
];
