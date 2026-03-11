// Données de leçons 5E · Période 3.
export const lessons5eP3 = [
  {
    "id": "p3-l17",
    "period": 3,
    "periodId": "p3",
    "title": "Les dieux arrivent",
    "objective": "Reconnaître quelques dieux et déesses dans des phrases courtes accessibles.",
    "lessonPoint": "Je repère qui est qui dans une scène divine simple.",
    "canDo": [
      "Je reconnais Venus, Minerva, Iuno et Iuppiter.",
      "Je comprends une phrase attributive simple.",
      "Je traduis des mini-phrases mythologiques."
    ],
    "lexicon": [
      "Venus",
      "Minerva",
      "Iuno",
      "Iuppiter",
      "pulchra",
      "irata",
      "templum"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p3-l17-t1",
        "type": "singleChoice",
        "prompt": "Dans la scène, qui est une déesse ?",
        "options": [
          "Venus",
          "Iuppiter",
          "Paris"
        ],
        "expected": "Venus",
        "points": 1
      },
      {
        "id": "p3-l17-t2",
        "type": "singleChoice",
        "prompt": "Dans « Venus pulchra est », que signifie pulchra ?",
        "options": [
          "belle",
          "en colère",
          "forte"
        ],
        "expected": "belle",
        "points": 1
      },
      {
        "id": "p3-l17-t3",
        "type": "multipleChoice",
        "prompt": "Sélectionne les noms de dieux/déesses de la leçon.",
        "options": [
          "Minerva",
          "Iuno",
          "Iuppiter",
          "Davus"
        ],
        "expected": [
          "Minerva",
          "Iuno",
          "Iuppiter"
        ],
        "points": 1
      },
      {
        "id": "p3-l17-t4",
        "type": "matching",
        "prompt": "Associe nom divin et information.",
        "pairs": [
          {
            "left": "Venus",
            "right": "dea"
          },
          {
            "left": "Iuppiter",
            "right": "deus"
          },
          {
            "left": "Minerva",
            "right": "dea"
          }
        ],
        "rightOptions": [
          "deus",
          "dea"
        ],
        "expected": {
          "Venus": "dea",
          "Iuppiter": "deus",
          "Minerva": "dea"
        },
        "points": 1
      },
      {
        "id": "p3-l17-t5",
        "type": "singleChoice",
        "prompt": "Dans « Iuno irata est », Iuno est :",
        "options": [
          "en colère",
          "heureuse",
          "fatiguée"
        ],
        "expected": "en colère",
        "points": 1
      },
      {
        "id": "p3-l17-t6",
        "type": "ordering",
        "prompt": "Remets la phrase :",
        "options": [
          "Venus",
          "pulchra",
          "est"
        ],
        "expected": [
          "Venus",
          "pulchra",
          "est"
        ],
        "points": 1
      },
      {
        "id": "p3-l17-t7",
        "type": "textInput",
        "prompt": "Écris en latin : « Junon ».",
        "expected": "iuno",
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l17-p1",
        "type": "textInput",
        "prompt": "Traduis en français : Venus pulchra est",
        "expected": "vénus est belle",
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "vénus est belle",
            "venus est belle"
          ]
        },
        "points": 1,
        "acceptedAnswers": [
          "vénus est belle",
          "venus est belle"
        ]
      },
      {
        "id": "p3-l17-p2",
        "type": "textInput",
        "prompt": "Traduis en français : Minerva templum videt",
        "expected": "minerve voit le temple",
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "minerve voit le temple",
            "minerva voit le temple"
          ]
        },
        "points": 1,
        "acceptedAnswers": [
          "minerve voit le temple",
          "minerva voit le temple"
        ]
      },
      {
        "id": "p3-l17-p3",
        "type": "textInput",
        "prompt": "Traduis en latin : Junon est en colère",
        "expected": "iuno irata est",
        "answerConfig": {
          "type": "latin-expression",
          "language": "latin",
          "expected": "iuno irata est"
        },
        "points": 1,
        "acceptedAnswers": [
          "iuno irata est"
        ]
      }
    ],
    "summary": {
      "retains": [
        "Quelques noms divins reviennent souvent dans les récits.",
        "Une phrase attributive simple reste facile à lire."
      ],
      "cahier": [
        "Venus pulchra est",
        "Iuno irata est"
      ],
      "keywords": [
        "dieux",
        "déesses",
        "venus",
        "iuno"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "mythologie",
        "dieux",
        "p3-l11"
      ]
    }
  },
  {
    "id": "p3-l12",
    "period": 3,
    "periodId": "p3",
    "title": "Le mariage de Pélée et Thétis",
    "objective": "Comprendre un mini-passage mythologique très court autour d’un mariage divin.",
    "lessonPoint": "Je lis une mini-scène mythologique sans entrer dans des détails compliqués.",
    "canDo": [
      "Je repère qui vient à la fête.",
      "Je comprends qui n’est pas invité.",
      "Je résume une scène en une phrase."
    ],
    "lexicon": [
      "nuptiae",
      "dei",
      "Discordia",
      "venit",
      "non invitata",
      "cena"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p3-l12-t1",
        "type": "singleChoice",
        "prompt": "Dans la scène, à quoi viennent les dieux ?",
        "options": [
          "aux noces",
          "au combat",
          "au forum"
        ],
        "expected": "aux noces",
        "points": 1
      },
      {
        "id": "p3-l12-t2",
        "type": "singleChoice",
        "prompt": "Qui n’est pas invitée ?",
        "options": [
          "Discordia",
          "Venus",
          "Minerva"
        ],
        "expected": "Discordia",
        "points": 1
      },
      {
        "id": "p3-l12-t3",
        "type": "multipleChoice",
        "prompt": "Sélectionne les informations du passage.",
        "options": [
          "Les dieux viennent",
          "Discordia n’est pas invitée",
          "Paris dort",
          "Un banquet a lieu"
        ],
        "expected": [
          "Les dieux viennent",
          "Discordia n’est pas invitée",
          "Un banquet a lieu"
        ],
        "points": 1
      },
      {
        "id": "p3-l12-t4",
        "type": "matching",
        "prompt": "Associe élément et rôle.",
        "pairs": [
          {
            "left": "dei",
            "right": "invités"
          },
          {
            "left": "Discordia",
            "right": "non invitée"
          },
          {
            "left": "cena",
            "right": "banquet"
          }
        ],
        "rightOptions": [
          "banquet",
          "invités",
          "non invitée"
        ],
        "expected": {
          "dei": "invités",
          "Discordia": "non invitée",
          "cena": "banquet"
        },
        "points": 1
      },
      {
        "id": "p3-l12-t5",
        "type": "singleChoice",
        "prompt": "« Dei cenam habent » signifie :",
        "options": [
          "Les dieux ont un banquet",
          "Les dieux fuient",
          "Les dieux perdent un cadeau"
        ],
        "expected": "Les dieux ont un banquet",
        "points": 1
      },
      {
        "id": "p3-l12-t6",
        "type": "ordering",
        "prompt": "Ordonne la mini-scène : invitation → venue → tension.",
        "options": [
          "dei veniunt",
          "cena est",
          "Discordia venit"
        ],
        "expected": [
          "cena est",
          "dei veniunt",
          "Discordia venit"
        ],
        "points": 1
      },
      {
        "id": "p3-l12-t7",
        "type": "textInput",
        "prompt": "Écris en latin : « dieux ».",
        "expected": "dei",
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l12-p1",
        "type": "textInput",
        "prompt": "Traduis en français : Discordia ad nuptias venit",
        "expected": "discorde vient aux noces",
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "discorde vient aux noces",
            "discordia vient aux noces"
          ]
        },
        "points": 1,
        "acceptedAnswers": [
          "discorde vient aux noces",
          "discordia vient aux noces"
        ]
      },
      {
        "id": "p3-l12-p2",
        "type": "textInput",
        "prompt": "Traduis en français : Dei cenam habent",
        "expected": "les dieux ont un banquet",
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "les dieux ont un banquet",
            "les dieux ont le repas",
            "les dieux font un banquet"
          ]
        },
        "points": 1,
        "acceptedAnswers": [
          "les dieux ont un banquet",
          "les dieux ont le repas",
          "les dieux font un banquet"
        ]
      },
      {
        "id": "p3-l12-p3",
        "type": "textInput",
        "prompt": "Traduis en latin : les dieux voient le cadeau",
        "expected": "dei donum vident",
        "answerConfig": {
          "type": "latin-expression",
          "language": "latin",
          "expected": "dei donum vident"
        },
        "points": 1,
        "acceptedAnswers": [
          "dei donum vident"
        ]
      }
    ],
    "summary": {
      "retains": [
        "Je peux suivre une mini-scène mythologique de 2-3 idées.",
        "Discordia n’est pas invitée : c’est la tension de départ."
      ],
      "cahier": [
        "Discordia ad nuptias venit",
        "Dei cenam habent"
      ],
      "keywords": [
        "nuptiae",
        "discordia",
        "dei",
        "banquet"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "mythe",
        "mariage",
        "p3-l12"
      ]
    }
  },
  {
    "id": "p3-l13",
    "period": 3,
    "periodId": "p3",
    "title": "La pomme de Discorde",
    "objective": "Comprendre une scène centrée sur un objet mythologique.",
    "lessonPoint": "L’objet central de la scène aide à relier les actions.",
    "canDo": [
      "Je repère qui lance l’objet.",
      "Je repère qui regarde l’objet.",
      "Je comprends à qui l’objet est destiné."
    ],
    "lexicon": [
      "malum aureum",
      "dea",
      "deae",
      "pulcherrima",
      "iacit",
      "spectant"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p3-l13-t1",
        "type": "singleChoice",
        "prompt": "Quel objet est au centre de la scène ?",
        "options": [
          "malum aureum",
          "liber novus",
          "corona magna"
        ],
        "expected": "malum aureum",
        "points": 1
      },
      {
        "id": "p3-l13-t2",
        "type": "singleChoice",
        "prompt": "Qui lance la pomme ?",
        "options": [
          "Discordia",
          "Venus",
          "Paris"
        ],
        "expected": "Discordia",
        "points": 1
      },
      {
        "id": "p3-l13-t3",
        "type": "singleChoice",
        "prompt": "Dans « Deae malum spectant », qui regarde la pomme ?",
        "options": [
          "Deae",
          "malum",
          "Discordia"
        ],
        "expected": "Deae",
        "points": 1
      },
      {
        "id": "p3-l13-t4",
        "type": "multipleChoice",
        "prompt": "Sélectionne les mots de la scène.",
        "options": [
          "malum",
          "aureum",
          "pulcherrima",
          "porta"
        ],
        "expected": [
          "malum",
          "aureum",
          "pulcherrima"
        ],
        "points": 1
      },
      {
        "id": "p3-l13-t5",
        "type": "matching",
        "prompt": "Associe phrase et sens.",
        "pairs": [
          {
            "left": "Discordia malum iacit",
            "right": "Discorde lance la pomme"
          },
          {
            "left": "Deae malum spectant",
            "right": "Les déesses regardent la pomme"
          },
          {
            "left": "Malum pulcherrimae est",
            "right": "La pomme est pour la plus belle"
          }
        ],
        "rightOptions": [
          "La pomme est pour la plus belle",
          "Les déesses regardent la pomme",
          "Discorde lance la pomme"
        ],
        "expected": {
          "Discordia malum iacit": "Discorde lance la pomme",
          "Deae malum spectant": "Les déesses regardent la pomme",
          "Malum pulcherrimae est": "La pomme est pour la plus belle"
        },
        "points": 1
      },
      {
        "id": "p3-l13-t6",
        "type": "ordering",
        "prompt": "Ordonne la logique : lancer → regarder → discuter.",
        "options": [
          "iacit",
          "spectant",
          "disputant"
        ],
        "expected": [
          "iacit",
          "spectant",
          "disputant"
        ],
        "points": 1
      },
      {
        "id": "p3-l13-t7",
        "type": "textInput",
        "prompt": "Écris le groupe latin : « pomme d’or ».",
        "expected": "malum aureum",
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l13-p1",
        "type": "textInput",
        "prompt": "Traduis en français : Discordia malum aureum iacit",
        "expected": "discorde lance la pomme d'or",
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "discorde lance la pomme d'or",
            "discordia lance la pomme d'or",
            "discorde jette la pomme d'or"
          ]
        },
        "points": 1,
        "acceptedAnswers": [
          "discorde lance la pomme d'or",
          "discordia lance la pomme d'or",
          "discorde jette la pomme d'or"
        ]
      },
      {
        "id": "p3-l13-p2",
        "type": "textInput",
        "prompt": "Traduis en français : Deae malum spectant",
        "expected": "les déesses regardent la pomme",
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "les déesses regardent la pomme",
            "les deesses regardent la pomme"
          ]
        },
        "points": 1,
        "acceptedAnswers": [
          "les déesses regardent la pomme",
          "les deesses regardent la pomme"
        ]
      },
      {
        "id": "p3-l13-p3",
        "type": "textInput",
        "prompt": "Traduis en latin : Vénus voit la pomme",
        "expected": "venus malum videt",
        "answerConfig": {
          "type": "latin-expression",
          "language": "latin",
          "expected": "venus malum videt"
        },
        "points": 1,
        "acceptedAnswers": [
          "venus malum videt"
        ]
      }
    ],
    "summary": {
      "retains": [
        "La scène tourne autour du malum aureum.",
        "Je repère facilement qui agit sur l’objet."
      ],
      "cahier": [
        "Discordia malum aureum iacit",
        "Deae malum spectant"
      ],
      "keywords": [
        "malum aureum",
        "deae",
        "pulcherrima",
        "discordia"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "mythe",
        "pomme",
        "p3-l13"
      ]
    }
  },
  {
    "id": "p3-l14",
    "period": 3,
    "periodId": "p3",
    "title": "Paris juge",
    "objective": "Suivre une scène simple de jugement mythologique.",
    "lessonPoint": "Je comprends qui juge et qui intervient dans la scène.",
    "canDo": [
      "Je reconnais la phrase clé Paris arbiter est.",
      "Je repère qui parle et qui regarde.",
      "Je relie la déesse au bon rôle dans la scène."
    ],
    "lexicon": [
      "Paris",
      "arbiter",
      "est",
      "Venus",
      "Iuno",
      "dicit",
      "videt",
      "donum"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p3-l14-t1",
        "type": "singleChoice",
        "prompt": "Dans la scène, qui est juge ?",
        "options": [
          "Paris",
          "Iuppiter",
          "Davus"
        ],
        "expected": "Paris",
        "points": 1
      },
      {
        "id": "p3-l14-t2",
        "type": "singleChoice",
        "prompt": "« Paris arbiter est » signifie :",
        "options": [
          "Paris est juge",
          "Paris est roi",
          "Paris est poète"
        ],
        "expected": "Paris est juge",
        "points": 1
      },
      {
        "id": "p3-l14-t3",
        "type": "multipleChoice",
        "prompt": "Sélectionne les personnages présents dans cette scène.",
        "options": [
          "Paris",
          "Venus",
          "Iuno",
          "Romulus"
        ],
        "expected": [
          "Paris",
          "Venus",
          "Iuno"
        ],
        "points": 1
      },
      {
        "id": "p3-l14-t4",
        "type": "matching",
        "prompt": "Associe phrase et sens.",
        "pairs": [
          {
            "left": "Paris arbiter est",
            "right": "Paris est juge"
          },
          {
            "left": "Venus donum habet",
            "right": "Vénus a un cadeau"
          },
          {
            "left": "Iuno dicit",
            "right": "Junon parle"
          }
        ],
        "rightOptions": [
          "Junon parle",
          "Paris est juge",
          "Vénus a un cadeau"
        ],
        "expected": {
          "Paris arbiter est": "Paris est juge",
          "Venus donum habet": "Vénus a un cadeau",
          "Iuno dicit": "Junon parle"
        },
        "points": 1
      },
      {
        "id": "p3-l14-t5",
        "type": "singleChoice",
        "prompt": "Qui est impliquée comme déesse dans la scène de jugement ?",
        "options": [
          "Iuno",
          "Paula",
          "Lupa"
        ],
        "expected": "Iuno",
        "points": 1
      },
      {
        "id": "p3-l14-t6",
        "type": "ordering",
        "prompt": "Ordonne la scène : juge → parole → décision.",
        "options": [
          "Paris arbiter est",
          "Iuno dicit",
          "Paris videt"
        ],
        "expected": [
          "Paris arbiter est",
          "Iuno dicit",
          "Paris videt"
        ],
        "points": 1
      },
      {
        "id": "p3-l14-t7",
        "type": "textInput",
        "prompt": "Écris en latin : « juge » (mot de la leçon).",
        "expected": "arbiter",
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l14-p1",
        "type": "textInput",
        "prompt": "Traduis en français : Paris arbiter est",
        "expected": "paris est juge",
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "paris est juge"
          ]
        },
        "points": 1,
        "acceptedAnswers": [
          "paris est juge"
        ]
      },
      {
        "id": "p3-l14-p2",
        "type": "textInput",
        "prompt": "Traduis en français : Venus donum habet",
        "expected": "vénus a un cadeau",
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "vénus a un cadeau",
            "venus a un cadeau"
          ]
        },
        "points": 1,
        "acceptedAnswers": [
          "vénus a un cadeau",
          "venus a un cadeau"
        ]
      },
      {
        "id": "p3-l14-p3",
        "type": "textInput",
        "prompt": "Traduis en latin : Paris voit Junon",
        "expected": "paris iunonem videt",
        "answerConfig": {
          "type": "latin-expression",
          "language": "latin",
          "expected": "paris iunonem videt"
        },
        "points": 1,
        "acceptedAnswers": [
          "paris iunonem videt"
        ]
      }
    ],
    "summary": {
      "retains": [
        "Paris arbiter est est la phrase clé de la scène.",
        "Je relie les personnages à leurs actions."
      ],
      "cahier": [
        "Paris arbiter est",
        "Venus donum habet"
      ],
      "keywords": [
        "paris",
        "arbiter",
        "iuno",
        "jugement"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "jugement",
        "paris",
        "p3-l14"
      ]
    }
  },
  {
    "id": "p3-l15",
    "period": 3,
    "periodId": "p3",
    "title": "Romulus et Remus",
    "objective": "Comprendre une scène simple de la fondation de Rome.",
    "lessonPoint": "Je lis une mini-scène culturelle sans surcharge grammaticale.",
    "canDo": [
      "Je reconnais Romulus, Remus, lupa, flumen.",
      "Je repère qui protège les enfants.",
      "Je réponds à une question culturelle simple."
    ],
    "lexicon": [
      "Romulus",
      "Remus",
      "lupa",
      "flumen",
      "pueri",
      "servat",
      "urbem"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p3-l15-t1",
        "type": "singleChoice",
        "prompt": "Dans la scène, qui protège les enfants ?",
        "options": [
          "lupa",
          "rex",
          "poeta"
        ],
        "expected": "lupa",
        "points": 1
      },
      {
        "id": "p3-l15-t2",
        "type": "singleChoice",
        "prompt": "Quel mot signifie « fleuve » ?",
        "options": [
          "flumen",
          "forum",
          "templum"
        ],
        "expected": "flumen",
        "points": 1
      },
      {
        "id": "p3-l15-t3",
        "type": "multipleChoice",
        "prompt": "Sélectionne les personnages de la fondation de Rome.",
        "options": [
          "Romulus",
          "Remus",
          "lupa",
          "Paris"
        ],
        "expected": [
          "Romulus",
          "Remus",
          "lupa"
        ],
        "points": 1
      },
      {
        "id": "p3-l15-t4",
        "type": "matching",
        "prompt": "Associe phrase et information.",
        "pairs": [
          {
            "left": "Lupa pueros servat",
            "right": "protection"
          },
          {
            "left": "Romulus urbem amat",
            "right": "amour de la ville"
          },
          {
            "left": "Remus flumen videt",
            "right": "regard sur le fleuve"
          }
        ],
        "rightOptions": [
          "amour de la ville",
          "protection",
          "regard sur le fleuve"
        ],
        "expected": {
          "Lupa pueros servat": "protection",
          "Romulus urbem amat": "amour de la ville",
          "Remus flumen videt": "regard sur le fleuve"
        },
        "points": 1
      },
      {
        "id": "p3-l15-t5",
        "type": "singleChoice",
        "prompt": "Question culture : ces personnages sont liés à :",
        "options": [
          "la fondation de Rome",
          "la guerre de Troie",
          "le banquet de Pélée"
        ],
        "expected": "la fondation de Rome",
        "points": 1
      },
      {
        "id": "p3-l15-t6",
        "type": "ordering",
        "prompt": "Ordonne la mini-scène : protéger → grandir → fonder.",
        "options": [
          "lupa servat",
          "pueri crescunt",
          "Roma est"
        ],
        "expected": [
          "lupa servat",
          "pueri crescunt",
          "Roma est"
        ],
        "points": 1
      },
      {
        "id": "p3-l15-t7",
        "type": "textInput",
        "prompt": "Écris en latin : « louve ».",
        "expected": "lupa",
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l15-p1",
        "type": "textInput",
        "prompt": "Traduis en français : Lupa pueros servat",
        "expected": "la louve protège les enfants",
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "la louve protège les enfants",
            "la louve sauve les enfants"
          ]
        },
        "points": 1,
        "acceptedAnswers": [
          "la louve protège les enfants",
          "la louve sauve les enfants"
        ]
      },
      {
        "id": "p3-l15-p2",
        "type": "textInput",
        "prompt": "Traduis en français : Romulus urbem amat",
        "expected": "romulus aime la ville",
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "romulus aime la ville",
            "romulus aime rome"
          ]
        },
        "points": 1,
        "acceptedAnswers": [
          "romulus aime la ville",
          "romulus aime rome"
        ]
      },
      {
        "id": "p3-l15-p3",
        "type": "textInput",
        "prompt": "Traduis en latin : Remus voit le fleuve",
        "expected": "remus flumen videt",
        "answerConfig": {
          "type": "latin-expression",
          "language": "latin",
          "expected": "remus flumen videt"
        },
        "points": 1,
        "acceptedAnswers": [
          "remus flumen videt"
        ]
      }
    ],
    "summary": {
      "retains": [
        "Romulus et Remus appartiennent à la mémoire de Rome.",
        "Une mini-scène culturelle reste lisible avec peu de mots."
      ],
      "cahier": [
        "Lupa pueros servat",
        "Remus flumen videt"
      ],
      "keywords": [
        "romulus",
        "remus",
        "lupa",
        "flumen",
        "rome"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "rome",
        "fondation",
        "p3-l15"
      ]
    }
  },
  {
    "id": "p3-l16",
    "period": 3,
    "periodId": "p3",
    "title": "Rome, forum, mur et porte",
    "objective": "Comprendre de courtes scènes urbaines avec déplacement et localisation.",
    "lessonPoint": "Je distingue in et ad dans des scènes de ville.",
    "canDo": [
      "Je repère mouvement et position en ville.",
      "Je localise forum, murus, porta, via, templum.",
      "Je traduis une phrase urbaine simple."
    ],
    "lexicon": [
      "forum",
      "murus",
      "porta",
      "via",
      "templum",
      "cives",
      "ad",
      "in"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p3-l16-t1",
        "type": "singleChoice",
        "prompt": "Dans « Cives ad forum ambulant », ad indique :",
        "options": [
          "vers",
          "dans",
          "avec"
        ],
        "expected": "vers",
        "points": 1
      },
      {
        "id": "p3-l16-t2",
        "type": "singleChoice",
        "prompt": "Dans « Servus sub muro est », la phrase décrit :",
        "options": [
          "une position",
          "un déplacement",
          "une comparaison"
        ],
        "expected": "une position",
        "points": 1
      },
      {
        "id": "p3-l16-t3",
        "type": "multipleChoice",
        "prompt": "Sélectionne les lieux urbains de la leçon.",
        "options": [
          "forum",
          "murus",
          "porta",
          "malum"
        ],
        "expected": [
          "forum",
          "murus",
          "porta"
        ],
        "points": 1
      },
      {
        "id": "p3-l16-t4",
        "type": "matching",
        "prompt": "Associe phrase et lecture correcte.",
        "pairs": [
          {
            "left": "Cives ad forum ambulant",
            "right": "mouvement"
          },
          {
            "left": "Servus sub muro est",
            "right": "position"
          },
          {
            "left": "Amici templum vident",
            "right": "observation"
          }
        ],
        "rightOptions": [
          "observation",
          "position",
          "mouvement"
        ],
        "expected": {
          "Cives ad forum ambulant": "mouvement",
          "Servus sub muro est": "position",
          "Amici templum vident": "observation"
        },
        "points": 1
      },
      {
        "id": "p3-l16-t5",
        "type": "singleChoice",
        "prompt": "Quelle phrase contient in (position) ?",
        "options": [
          "Servus in via est",
          "Cives ad forum ambulant",
          "Amici templum vident"
        ],
        "expected": "Servus in via est",
        "points": 1
      },
      {
        "id": "p3-l16-t6",
        "type": "ordering",
        "prompt": "Remets la phrase urbaine :",
        "options": [
          "amici",
          "templum",
          "vident"
        ],
        "expected": [
          "amici",
          "templum",
          "vident"
        ],
        "points": 1
      },
      {
        "id": "p3-l16-t7",
        "type": "textInput",
        "prompt": "Écris en latin : « porte (de ville) ».",
        "expected": "porta",
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l16-p1",
        "type": "textInput",
        "prompt": "Traduis en français : Cives ad forum ambulant",
        "expected": "les citoyens marchent vers le forum",
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "les citoyens marchent vers le forum",
            "les citoyens vont au forum"
          ]
        },
        "points": 1,
        "acceptedAnswers": [
          "les citoyens marchent vers le forum",
          "les citoyens vont au forum"
        ]
      },
      {
        "id": "p3-l16-p2",
        "type": "textInput",
        "prompt": "Traduis en français : Servus sub muro est",
        "expected": "le serviteur est sous le mur",
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "le serviteur est sous le mur",
            "l'esclave est sous le mur"
          ]
        },
        "points": 1,
        "acceptedAnswers": [
          "le serviteur est sous le mur",
          "l'esclave est sous le mur"
        ]
      },
      {
        "id": "p3-l16-p3",
        "type": "textInput",
        "prompt": "Traduis en latin : les amis voient le temple",
        "expected": "amici templum vident",
        "answerConfig": {
          "type": "latin-expression",
          "language": "latin",
          "expected": "amici templum vident"
        },
        "points": 1,
        "acceptedAnswers": [
          "amici templum vident"
        ]
      }
    ],
    "summary": {
      "retains": [
        "En ville, ad et in ne donnent pas la même information.",
        "Je relie facilement lieu, mouvement et action."
      ],
      "cahier": [
        "Cives ad forum ambulant",
        "Servus sub muro est",
        "Amici templum vident"
      ],
      "keywords": [
        "rome",
        "forum",
        "murus",
        "porta",
        "ad/in"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "ville",
        "rome",
        "p3-l16"
      ]
    }
  },
  {
    "id": "p3-l17",
    "period": 3,
    "periodId": "p3",
    "title": "Hannibal ! Hannibal !",
    "objective": "Comprendre une micro-scène historique simple autour d’Hannibal et de Rome.",
    "lessonPoint": "Je relie des mots-clés historiques à des phrases courtes en latin.",
    "canDo": [
      "Je repère qui menace Rome dans la scène.",
      "Je comprends un cri d’alerte et ses acteurs.",
      "Je traduis des phrases courtes de contexte historique."
    ],
    "lexicon": [
      "Hannibal",
      "Roma",
      "milites",
      "murus",
      "porta",
      "clamat",
      "vident"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p3-l17-t1",
        "type": "singleChoice",
        "prompt": "Dans la scène, qui approche de Rome ?",
        "options": [
          "Hannibal",
          "Crispus",
          "Davus"
        ],
        "expected": "Hannibal",
        "points": 1
      },
      {
        "id": "p3-l17-t2",
        "type": "singleChoice",
        "prompt": "« Roma murum habet » signifie que Rome a :",
        "options": [
          "un mur",
          "un marché",
          "un banquet"
        ],
        "expected": "un mur",
        "points": 1
      },
      {
        "id": "p3-l17-t3",
        "type": "multipleChoice",
        "prompt": "Choisis les mots liés à la défense de la ville.",
        "options": [
          "milites",
          "murus",
          "porta",
          "corona"
        ],
        "expected": [
          "milites",
          "murus",
          "porta"
        ],
        "points": 1
      },
      {
        "id": "p3-l17-t4",
        "type": "matching",
        "prompt": "Associe chaque phrase à son idée.",
        "pairs": [
          {
            "left": "Milites murum servant",
            "right": "défendre"
          },
          {
            "left": "Populus clamat",
            "right": "alerter"
          },
          {
            "left": "Hannibal ad portam venit",
            "right": "approcher"
          }
        ],
        "rightOptions": [
          "approcher",
          "défendre",
          "alerter"
        ],
        "expected": {
          "Milites murum servant": "défendre",
          "Populus clamat": "alerter",
          "Hannibal ad portam venit": "approcher"
        },
        "points": 1
      },
      {
        "id": "p3-l17-t5",
        "type": "ordering",
        "prompt": "Remets la phrase d’alerte en ordre :",
        "options": [
          "milites",
          "Hannibal",
          "vident"
        ],
        "expected": [
          "milites",
          "Hannibal",
          "vident"
        ],
        "points": 1
      },
      {
        "id": "p3-l17-t6",
        "type": "singleChoice",
        "prompt": "Piège d’ordre : « Portam milites servant » veut dire :",
        "options": [
          "Les soldats gardent la porte",
          "La porte garde les soldats",
          "Les soldats voient la porte"
        ],
        "expected": "Les soldats gardent la porte",
        "points": 1
      },
      {
        "id": "p3-l17-t7",
        "type": "textInput",
        "prompt": "Écris en latin : « Rome ».",
        "expected": "Roma",
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l17-p1",
        "type": "textInput",
        "prompt": "Traduis en français : Milites murum servant",
        "expected": "les soldats gardent le mur",
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "les soldats gardent le mur",
            "les soldats défendent le mur",
            "des soldats gardent le mur"
          ]
        },
        "points": 1,
        "acceptedAnswers": [
          "les soldats gardent le mur",
          "les soldats défendent le mur",
          "des soldats gardent le mur"
        ]
      },
      {
        "id": "p3-l17-p2",
        "type": "textInput",
        "prompt": "Traduis en français : Hannibal ad portam venit",
        "expected": "hannibal vient vers la porte",
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "hannibal vient vers la porte",
            "hannibal arrive à la porte",
            "hannibal vient à la porte"
          ]
        },
        "points": 1,
        "acceptedAnswers": [
          "hannibal vient vers la porte",
          "hannibal arrive à la porte",
          "hannibal vient à la porte"
        ]
      },
      {
        "id": "p3-l17-p3",
        "type": "textInput",
        "prompt": "Traduis en latin : les soldats voient Hannibal",
        "expected": "milites Hannibalem vident",
        "answerConfig": {
          "type": "latin-expression",
          "language": "latin",
          "expected": "milites Hannibalem vident"
        },
        "points": 1,
        "acceptedAnswers": [
          "milites Hannibalem vident"
        ]
      }
    ],
    "summary": {
      "retains": [
        "Un mini-récit historique reste lisible avec un lexique ciblé.",
        "Je garde mes repères sujet/verbe/complément même sous l’effet de l’alerte."
      ],
      "cahier": [
        "Milites murum servant",
        "Hannibal ad portam venit",
        "Milites Hannibalem vident"
      ],
      "keywords": [
        "hannibal",
        "rome",
        "alerte",
        "milites",
        "porta"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "histoire",
        "rome",
        "p3-l17"
      ]
    }
  },
  {
    "id": "p3-l18",
    "period": 3,
    "periodId": "p3",
    "title": "César écrit",
    "objective": "Comprendre des phrases simples autour de César auteur et chef militaire.",
    "lessonPoint": "Je lis des phrases courtes de type historique sans perdre le sens global.",
    "canDo": [
      "Je repère qui écrit et qui lit.",
      "Je comprends le mot Gallia dans un contexte simple.",
      "Je traduis une phrase historique courte."
    ],
    "lexicon": [
      "Caesar",
      "scribit",
      "liber",
      "Gallia",
      "milites",
      "legunt",
      "epistula"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p3-l18-t1",
        "type": "singleChoice",
        "prompt": "Dans « Caesar librum scribit », qui écrit ?",
        "options": [
          "Caesar",
          "librum",
          "Gallia"
        ],
        "expected": "Caesar",
        "points": 1
      },
      {
        "id": "p3-l18-t2",
        "type": "singleChoice",
        "prompt": "Que signifie scribit ?",
        "options": [
          "écrit",
          "lit",
          "voit"
        ],
        "expected": "écrit",
        "points": 1
      },
      {
        "id": "p3-l18-t3",
        "type": "multipleChoice",
        "prompt": "Choisis les mots liés à l’écriture et à la lecture.",
        "options": [
          "scribit",
          "legunt",
          "liber",
          "murus"
        ],
        "expected": [
          "scribit",
          "legunt",
          "liber"
        ],
        "points": 1
      },
      {
        "id": "p3-l18-t4",
        "type": "matching",
        "prompt": "Associe la phrase à son action principale.",
        "pairs": [
          {
            "left": "Caesar epistulam scribit",
            "right": "écrire"
          },
          {
            "left": "Milites librum legunt",
            "right": "lire"
          },
          {
            "left": "Gallia magna est",
            "right": "décrire"
          }
        ],
        "rightOptions": [
          "décrire",
          "lire",
          "écrire"
        ],
        "expected": {
          "Caesar epistulam scribit": "écrire",
          "Milites librum legunt": "lire",
          "Gallia magna est": "décrire"
        },
        "points": 1
      },
      {
        "id": "p3-l18-t5",
        "type": "ordering",
        "prompt": "Remets la phrase : Caesar / de Gallia / scribit.",
        "options": [
          "Caesar",
          "de Gallia",
          "scribit"
        ],
        "expected": [
          "Caesar",
          "scribit",
          "de Gallia"
        ],
        "points": 1
      },
      {
        "id": "p3-l18-t6",
        "type": "singleChoice",
        "prompt": "Piège d’ordre : « Librum milites legunt » signifie :",
        "options": [
          "Les soldats lisent le livre",
          "Le livre lit les soldats",
          "Les soldats écrivent le livre"
        ],
        "expected": "Les soldats lisent le livre",
        "points": 1
      },
      {
        "id": "p3-l18-t7",
        "type": "textInput",
        "prompt": "Écris en latin : « César ».",
        "expected": "Caesar",
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l18-p1",
        "type": "textInput",
        "prompt": "Traduis en français : Caesar epistulam scribit",
        "expected": "césar écrit une lettre",
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "césar écrit une lettre",
            "caesar écrit une lettre",
            "césar écrit la lettre"
          ]
        },
        "points": 1,
        "acceptedAnswers": [
          "césar écrit une lettre",
          "caesar écrit une lettre",
          "césar écrit la lettre"
        ]
      },
      {
        "id": "p3-l18-p2",
        "type": "textInput",
        "prompt": "Traduis en français : Milites librum legunt",
        "expected": "les soldats lisent le livre",
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "les soldats lisent le livre",
            "des soldats lisent le livre",
            "les soldats lisent un livre"
          ]
        },
        "points": 1,
        "acceptedAnswers": [
          "les soldats lisent le livre",
          "des soldats lisent le livre",
          "les soldats lisent un livre"
        ]
      },
      {
        "id": "p3-l18-p3",
        "type": "textInput",
        "prompt": "Traduis en latin : César voit la Gaule",
        "expected": "Caesar Galliam videt",
        "answerConfig": {
          "type": "latin-expression",
          "language": "latin",
          "expected": "Caesar Galliam videt"
        },
        "points": 1,
        "acceptedAnswers": [
          "Caesar Galliam videt"
        ]
      }
    ],
    "summary": {
      "retains": [
        "Le latin sert aussi à raconter l’histoire et à écrire.",
        "Je peux suivre une phrase historique courte sans me noyer."
      ],
      "cahier": [
        "Caesar epistulam scribit",
        "Milites librum legunt",
        "Caesar Galliam videt"
      ],
      "keywords": [
        "caesar",
        "scribit",
        "legunt",
        "gallia",
        "histoire"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "histoire",
        "caesar",
        "p3-l18"
      ]
    }
  },
  {
    "id": "p3-l19",
    "period": 3,
    "periodId": "p3",
    "title": "Le latin vit encore",
    "objective": "Identifier des héritages latins simples dans le français d’aujourd’hui.",
    "lessonPoint": "Je relie des mots latins connus à des mots français actuels.",
    "canDo": [
      "Je reconnais des racines latines dans des mots français.",
      "Je distingue un mot hérité d’un faux ami.",
      "Je formule une phrase courte sur l’héritage du latin."
    ],
    "lexicon": [
      "via",
      "porta",
      "forum",
      "aqua",
      "liber",
      "civis",
      "nomen"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p3-l19-t1",
        "type": "singleChoice",
        "prompt": "Quel mot français vient le plus clairement de via ?",
        "options": [
          "voie",
          "voix",
          "voir"
        ],
        "expected": "voie",
        "points": 1
      },
      {
        "id": "p3-l19-t2",
        "type": "singleChoice",
        "prompt": "De porta, on retrouve en français :",
        "options": [
          "porte",
          "porteur",
          "port"
        ],
        "expected": "porte",
        "points": 1
      },
      {
        "id": "p3-l19-t3",
        "type": "multipleChoice",
        "prompt": "Sélectionne des héritages latins plausibles.",
        "options": [
          "aquatique",
          "forum",
          "librairie",
          "météore"
        ],
        "expected": [
          "aquatique",
          "forum",
          "librairie"
        ],
        "points": 1
      },
      {
        "id": "p3-l19-t4",
        "type": "matching",
        "prompt": "Associe mot latin et mot français proche.",
        "pairs": [
          {
            "left": "aqua",
            "right": "eau / aquatique"
          },
          {
            "left": "liber",
            "right": "livre"
          },
          {
            "left": "nomen",
            "right": "nom"
          }
        ],
        "rightOptions": [
          "nom",
          "livre",
          "eau / aquatique"
        ],
        "expected": {
          "aqua": "eau / aquatique",
          "liber": "livre",
          "nomen": "nom"
        },
        "points": 1
      },
      {
        "id": "p3-l19-t5",
        "type": "ordering",
        "prompt": "Ordonne : latin → français → usage moderne",
        "options": [
          "forum",
          "forum",
          "forum de discussion"
        ],
        "expected": [
          "forum",
          "forum",
          "forum de discussion"
        ],
        "points": 1
      },
      {
        "id": "p3-l19-t6",
        "type": "singleChoice",
        "prompt": "Dans la famille de civis, quel mot est le plus proche ?",
        "options": [
          "civil",
          "cible",
          "civière"
        ],
        "expected": "civil",
        "points": 1
      },
      {
        "id": "p3-l19-t7",
        "type": "textInput",
        "prompt": "Écris un dérivé français de aqua.",
        "expected": "aquatique",
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l19-p1",
        "type": "textInput",
        "prompt": "Traduis en français : nomen",
        "expected": "nom",
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "nom",
            "le nom",
            "un nom"
          ]
        },
        "points": 1,
        "acceptedAnswers": [
          "nom",
          "le nom",
          "un nom"
        ]
      },
      {
        "id": "p3-l19-p2",
        "type": "textInput",
        "prompt": "Traduis en français : civis",
        "expected": "citoyen",
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "citoyen",
            "le citoyen",
            "un citoyen"
          ]
        },
        "points": 1,
        "acceptedAnswers": [
          "citoyen",
          "le citoyen",
          "un citoyen"
        ]
      },
      {
        "id": "p3-l19-p3",
        "type": "textInput",
        "prompt": "Traduis en latin : la porte",
        "expected": "porta",
        "answerConfig": {
          "type": "latin-expression",
          "language": "latin",
          "expected": "porta"
        },
        "points": 1,
        "acceptedAnswers": [
          "porta"
        ]
      }
    ],
    "summary": {
      "retains": [
        "Le latin reste présent dans beaucoup de mots français.",
        "Repérer une racine aide à comprendre un mot nouveau."
      ],
      "cahier": [
        "aqua → aquatique",
        "nomen → nom",
        "civis → citoyen"
      ],
      "keywords": [
        "héritage",
        "étymologie",
        "latin",
        "français",
        "racines"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "culture",
        "héritage",
        "p3-l19"
      ]
    }
  },
  {
    "id": "p3-l20",
    "period": 3,
    "periodId": "p3",
    "title": "Lire un mini-récit",
    "objective": "Lire un mini-récit latin de 3 à 4 phrases et en extraire les informations explicites.",
    "lessonPoint": "Je lis phrase par phrase pour reconstruire une petite histoire cohérente.",
    "canDo": [
      "Je repère personnages, lieux et actions principales.",
      "Je réponds à des questions de compréhension explicite.",
      "Je traduis des phrases clés d’un mini-récit."
    ],
    "lexicon": [
      "in foro",
      "templum",
      "epistula",
      "portat",
      "videt",
      "ridet",
      "currit"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p3-l20-t1",
        "type": "singleChoice",
        "prompt": "Mini-récit : « Servus in foro est. Poeta epistulam portat. Dominus ridet. » Qui porte la lettre ?",
        "options": [
          "poeta",
          "servus",
          "dominus"
        ],
        "expected": "poeta",
        "points": 1
      },
      {
        "id": "p3-l20-t2",
        "type": "singleChoice",
        "prompt": "Dans ce mini-récit, où est le serviteur ?",
        "options": [
          "in foro",
          "in horto",
          "ad templum"
        ],
        "expected": "in foro",
        "points": 1
      },
      {
        "id": "p3-l20-t3",
        "type": "multipleChoice",
        "prompt": "Quelles informations sont explicites ?",
        "options": [
          "Le poète porte une lettre",
          "Le maître rit",
          "Le serviteur court",
          "La lettre est dans le jardin"
        ],
        "expected": [
          "Le poète porte une lettre",
          "Le maître rit"
        ],
        "points": 1
      },
      {
        "id": "p3-l20-t4",
        "type": "matching",
        "prompt": "Associe phrase et information lue.",
        "pairs": [
          {
            "left": "Servus in foro est",
            "right": "lieu"
          },
          {
            "left": "Poeta epistulam portat",
            "right": "action"
          },
          {
            "left": "Dominus ridet",
            "right": "réaction"
          }
        ],
        "rightOptions": [
          "réaction",
          "lieu",
          "action"
        ],
        "expected": {
          "Servus in foro est": "lieu",
          "Poeta epistulam portat": "action",
          "Dominus ridet": "réaction"
        },
        "points": 1
      },
      {
        "id": "p3-l20-t5",
        "type": "singleChoice",
        "prompt": "Piège d’ordre : « Epistulam poeta portat » signifie :",
        "options": [
          "Le poète porte la lettre",
          "La lettre porte le poète",
          "Le poète lit la lettre"
        ],
        "expected": "Le poète porte la lettre",
        "points": 1
      },
      {
        "id": "p3-l20-t6",
        "type": "ordering",
        "prompt": "Remets la phrase du récit en ordre :",
        "options": [
          "dominus",
          "ridet"
        ],
        "expected": [
          "dominus",
          "ridet"
        ],
        "points": 1
      },
      {
        "id": "p3-l20-t7",
        "type": "textInput",
        "prompt": "Écris en latin : « lettre ».",
        "expected": "epistula",
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l20-p1",
        "type": "textInput",
        "prompt": "Traduis en français : Servus in foro est",
        "expected": "le serviteur est au forum",
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "le serviteur est au forum",
            "l'esclave est au forum",
            "le serviteur est dans le forum"
          ]
        },
        "points": 1,
        "acceptedAnswers": [
          "le serviteur est au forum",
          "l'esclave est au forum",
          "le serviteur est dans le forum"
        ]
      },
      {
        "id": "p3-l20-p2",
        "type": "textInput",
        "prompt": "Traduis en français : Dominus ridet",
        "expected": "le maître rit",
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "le maître rit",
            "le maitre rit",
            "un maître rit"
          ]
        },
        "points": 1,
        "acceptedAnswers": [
          "le maître rit",
          "le maitre rit",
          "un maître rit"
        ]
      },
      {
        "id": "p3-l20-p3",
        "type": "textInput",
        "prompt": "Traduis en latin : le poète voit le temple",
        "expected": "poeta templum videt",
        "answerConfig": {
          "type": "latin-expression",
          "language": "latin",
          "expected": "poeta templum videt"
        },
        "points": 1,
        "acceptedAnswers": [
          "poeta templum videt"
        ]
      }
    ],
    "summary": {
      "retains": [
        "Je peux comprendre un mini-récit court si je collecte les infos explicites.",
        "Même avec un ordre varié, les fonctions restent lisibles."
      ],
      "cahier": [
        "Servus in foro est",
        "Poeta epistulam portat",
        "Dominus ridet"
      ],
      "keywords": [
        "mini-récit",
        "lecture",
        "forum",
        "epistula",
        "compréhension"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "lecture",
        "mini-recits",
        "p3-l20"
      ]
    }
  },
  {
    "id": "p3-l21",
    "period": 3,
    "periodId": "p3",
    "title": "Comparer deux traductions",
    "objective": "Comparer deux traductions françaises d’une même phrase latine et choisir la plus juste.",
    "lessonPoint": "Je justifie un choix de traduction à partir des formes latines.",
    "canDo": [
      "Je distingue une traduction fidèle d’une traduction approximative.",
      "Je vérifie sujet, verbe, complément avant de choisir.",
      "Je corrige une traduction insuffisante."
    ],
    "lexicon": [
      "servus",
      "dominus",
      "amici",
      "templum",
      "vident",
      "vocat",
      "portat"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p3-l21-t1",
        "type": "singleChoice",
        "prompt": "Phrase : « Servus dominum vocat ». Quelle traduction est juste ?",
        "options": [
          "Le serviteur appelle le maître",
          "Le maître appelle le serviteur",
          "Le serviteur voit le maître"
        ],
        "expected": "Le serviteur appelle le maître",
        "points": 1
      },
      {
        "id": "p3-l21-t2",
        "type": "singleChoice",
        "prompt": "Phrase : « Amici templum vident ». Choisis la meilleure traduction.",
        "options": [
          "Les amis voient le temple",
          "Le temple voit les amis",
          "Les amis portent le temple"
        ],
        "expected": "Les amis voient le temple",
        "points": 1
      },
      {
        "id": "p3-l21-t3",
        "type": "multipleChoice",
        "prompt": "Quels critères t’aident à comparer deux traductions ?",
        "options": [
          "Repérer le verbe",
          "Identifier le sujet",
          "Deviner au hasard",
          "Chercher le complément"
        ],
        "expected": [
          "Repérer le verbe",
          "Identifier le sujet",
          "Chercher le complément"
        ],
        "points": 1
      },
      {
        "id": "p3-l21-t4",
        "type": "matching",
        "prompt": "Associe la phrase latine à la traduction correcte.",
        "pairs": [
          {
            "left": "Dominus librum portat",
            "right": "Le maître porte le livre"
          },
          {
            "left": "Servi ad forum ambulant",
            "right": "Les serviteurs vont vers le forum"
          },
          {
            "left": "Puella rosam habet",
            "right": "La jeune fille a une rose"
          }
        ],
        "rightOptions": [
          "Le maître porte le livre",
          "La jeune fille a une rose",
          "Les serviteurs vont vers le forum"
        ],
        "expected": {
          "Dominus librum portat": "Le maître porte le livre",
          "Servi ad forum ambulant": "Les serviteurs vont vers le forum",
          "Puella rosam habet": "La jeune fille a une rose"
        },
        "points": 1
      },
      {
        "id": "p3-l21-t5",
        "type": "ordering",
        "prompt": "Réordonne pour vérifier la traduction :",
        "options": [
          "servus",
          "templum",
          "videt"
        ],
        "expected": [
          "servus",
          "videt",
          "templum"
        ],
        "points": 1
      },
      {
        "id": "p3-l21-t6",
        "type": "singleChoice",
        "prompt": "Piège : « Dominum servus vocat » signifie :",
        "options": [
          "Le serviteur appelle le maître",
          "Le maître appelle le serviteur",
          "Le serviteur appelle le serviteur"
        ],
        "expected": "Le serviteur appelle le maître",
        "points": 1
      },
      {
        "id": "p3-l21-t7",
        "type": "textInput",
        "prompt": "Écris le verbe de « Amici templum vident ».",
        "expected": "vident",
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l21-p1",
        "type": "textInput",
        "prompt": "Traduis en français : Servi ad forum ambulant",
        "expected": "les serviteurs marchent vers le forum",
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "les serviteurs marchent vers le forum",
            "les serviteurs vont vers le forum",
            "des serviteurs marchent vers le forum"
          ]
        },
        "points": 1,
        "acceptedAnswers": [
          "les serviteurs marchent vers le forum",
          "les serviteurs vont vers le forum",
          "des serviteurs marchent vers le forum"
        ]
      },
      {
        "id": "p3-l21-p2",
        "type": "textInput",
        "prompt": "Traduis en français : Dominus librum portat",
        "expected": "le maître porte le livre",
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "le maître porte le livre",
            "le maitre porte le livre",
            "un maître porte le livre"
          ]
        },
        "points": 1,
        "acceptedAnswers": [
          "le maître porte le livre",
          "le maitre porte le livre",
          "un maître porte le livre"
        ]
      },
      {
        "id": "p3-l21-p3",
        "type": "textInput",
        "prompt": "Traduis en latin : les amis voient la porte",
        "expected": "amici portam vident",
        "answerConfig": {
          "type": "latin-expression",
          "language": "latin",
          "expected": "amici portam vident"
        },
        "points": 1,
        "acceptedAnswers": [
          "amici portam vident"
        ]
      }
    ],
    "summary": {
      "retains": [
        "Comparer deux traductions oblige à revenir au latin précis.",
        "Le bon réflexe : sujet + verbe + complément avant toute interprétation."
      ],
      "cahier": [
        "Servus dominum vocat",
        "Amici templum vident",
        "Amici portam vident"
      ],
      "keywords": [
        "traduction",
        "comparaison",
        "fidélité",
        "fonctions",
        "lecture"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "traduction",
        "comparaison",
        "p3-l21"
      ]
    }
  },
  {
    "id": "p3-l22",
    "period": 3,
    "periodId": "p3",
    "title": "Synthèse Euroclassica 5e",
    "objective": "Réviser l’essentiel de l’année 5e avec une scène de synthèse langue + culture.",
    "lessonPoint": "Je mobilise vocabulaire, fonctions et repères culturels dans une tâche finale guidée.",
    "canDo": [
      "Je comprends une courte scène qui mélange langue et culture.",
      "Je traduis des phrases de synthèse sans perdre le sens.",
      "Je réactive les mots-clés utiles pour la suite Euroclassica."
    ],
    "lexicon": [
      "forum",
      "templum",
      "Roma",
      "dii",
      "servus",
      "amici",
      "epistula",
      "vident",
      "portat"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p3-l22-t1",
        "type": "singleChoice",
        "prompt": "Dans « Amici ad forum ambulant », ad indique :",
        "options": [
          "vers",
          "dans",
          "sous"
        ],
        "expected": "vers",
        "points": 1
      },
      {
        "id": "p3-l22-t2",
        "type": "singleChoice",
        "prompt": "Dans « Servus epistulam portat », le complément est :",
        "options": [
          "servus",
          "epistulam",
          "portat"
        ],
        "expected": "epistulam",
        "points": 1
      },
      {
        "id": "p3-l22-t3",
        "type": "multipleChoice",
        "prompt": "Sélectionne les éléments culturels romains.",
        "options": [
          "forum",
          "templum",
          "Iuppiter",
          "ordinateur"
        ],
        "expected": [
          "forum",
          "templum",
          "Iuppiter"
        ],
        "points": 1
      },
      {
        "id": "p3-l22-t4",
        "type": "matching",
        "prompt": "Associe phrase et idée de synthèse.",
        "pairs": [
          {
            "left": "Dii templum vident",
            "right": "mythe"
          },
          {
            "left": "Servus epistulam portat",
            "right": "vie quotidienne"
          },
          {
            "left": "Amici ad forum ambulant",
            "right": "ville"
          }
        ],
        "rightOptions": [
          "ville",
          "mythe",
          "vie quotidienne"
        ],
        "expected": {
          "Dii templum vident": "mythe",
          "Servus epistulam portat": "vie quotidienne",
          "Amici ad forum ambulant": "ville"
        },
        "points": 1
      },
      {
        "id": "p3-l22-t5",
        "type": "ordering",
        "prompt": "Remets en ordre la phrase finale :",
        "options": [
          "amici",
          "templum",
          "vident"
        ],
        "expected": [
          "amici",
          "templum",
          "vident"
        ],
        "points": 1
      },
      {
        "id": "p3-l22-t6",
        "type": "singleChoice",
        "prompt": "Piège : « Epistulam servus portat » signifie :",
        "options": [
          "Le serviteur porte la lettre",
          "La lettre porte le serviteur",
          "Le serviteur lit la lettre"
        ],
        "expected": "Le serviteur porte la lettre",
        "points": 1
      },
      {
        "id": "p3-l22-t7",
        "type": "textInput",
        "prompt": "Écris en latin : « les dieux ».",
        "expected": "dii",
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l22-p1",
        "type": "textInput",
        "prompt": "Traduis en français : Dii templum vident",
        "expected": "les dieux voient le temple",
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "les dieux voient le temple",
            "les dieux regardent le temple"
          ]
        },
        "points": 1,
        "acceptedAnswers": [
          "les dieux voient le temple",
          "les dieux regardent le temple"
        ]
      },
      {
        "id": "p3-l22-p2",
        "type": "textInput",
        "prompt": "Traduis en français : Servus epistulam portat",
        "expected": "le serviteur porte la lettre",
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "le serviteur porte la lettre",
            "l'esclave porte la lettre",
            "le serviteur apporte la lettre"
          ]
        },
        "points": 1,
        "acceptedAnswers": [
          "le serviteur porte la lettre",
          "l'esclave porte la lettre",
          "le serviteur apporte la lettre"
        ]
      },
      {
        "id": "p3-l22-p3",
        "type": "textInput",
        "prompt": "Traduis en latin : les amis voient Rome",
        "expected": "amici Romam vident",
        "answerConfig": {
          "type": "latin-expression",
          "language": "latin",
          "expected": "amici Romam vident"
        },
        "points": 1,
        "acceptedAnswers": [
          "amici Romam vident"
        ]
      }
    ],
    "summary": {
      "retains": [
        "Je peux mobiliser les acquis de 5e dans une scène courte et mixte.",
        "Langue et culture avancent ensemble : vocabulaire, formes et contexte."
      ],
      "cahier": [
        "Dii templum vident",
        "Servus epistulam portat",
        "Amici Romam vident"
      ],
      "keywords": [
        "synthèse",
        "euroclassica",
        "lecture",
        "culture",
        "latin 5e"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "synthese",
        "euroclassica",
        "p3-l22"
      ]
    }
  }
];
