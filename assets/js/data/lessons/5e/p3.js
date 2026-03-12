// Données de leçons 5E · Période 3 — Discordia in Subura.
export const lessons5eP3 = [
  {
    "id": "p3-l11",
    "period": 3,
    "periodId": "p3",
    "title": "Rumor nocturnus",
    "objective": "Relancer l’enquête nocturne dans Subure.",
    "lessonPoint": "Je trouve le verbe d’abord, puis qui/quoi/où/pourquoi ; l’ordre latin peut varier.",
    "narrative": "Une rumeur dit qu’un homme sort la nuit : les voisins veulent vérifier les faits.",
    "canDo": [
      "Je reconnais quis/quid/ubi/cur.",
      "Je distingue vu et entendu.",
      "Je traduis une question simple."
    ],
    "lexicon": [
      "quis = qui ?",
      "quid = quoi ?",
      "ubi = où ?",
      "cur = pourquoi ?",
      "rumor = rumeur",
      "vir = homme",
      "noctu = de nuit",
      "exit = il/elle sort",
      "videt = il/elle voit",
      "dicit = il/elle dit"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p3-l11-t1",
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
        "id": "p3-l11-t2",
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
        "id": "p3-l11-t3",
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
        "id": "p3-l11-t4",
        "type": "multipleChoice",
        "prompt": "Traductions recevables de « vir noctu exit ».",
        "options": [
          "L’homme sort de nuit",
          "Un homme sort la nuit",
          "La nuit sort l’homme",
          "L’homme entre la nuit"
        ],
        "expected": [
          "L’homme sort de nuit",
          "Un homme sort la nuit"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l11-t5",
        "type": "ordering",
        "prompt": "Remets en ordre : vir / noctu / exit",
        "options": [
          "vir",
          "noctu",
          "exit"
        ],
        "expected": [
          "vir",
          "noctu",
          "exit"
        ],
        "points": 1
      },
      {
        "id": "p3-l11-t6",
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
        "id": "p3-l11-t7",
        "type": "multipleChoice",
        "prompt": "Mini-texte : « Vicina virum videt. Servus dicit multum. » Qu’est-ce qui est vu, qu’est-ce qui est dit ?",
        "options": [
          "L’homme est vu",
          "Le serviteur parle",
          "La tablette est vue",
          "Le marché parle"
        ],
        "expected": [
          "L’homme est vu",
          "Le serviteur parle"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l11-p1",
        "type": "textInput",
        "prompt": "Traduis : quis virum videt ?",
        "expected": "qui voit l'homme ?",
        "acceptedAnswers": [
          "qui voit l'homme",
          "qui voit cet homme",
          "qui aperçoit l'homme",
          "qui voit l'homme ?"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "qui voit l'homme",
            "qui voit cet homme",
            "qui aperçoit l'homme",
            "qui voit l'homme ?"
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
        "id": "p3-l11-p2",
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
        "id": "p3-l11-p3",
        "type": "textInput",
        "prompt": "Explique en français court : qu’est-ce qu’une rumeur ?",
        "expected": "une information non vérifiée",
        "acceptedAnswers": [
          "une information non vérifiée",
          "une parole qu'on répète sans preuve",
          "quelque chose qu'on dit sans vérifier"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "une information non vérifiée",
            "une parole qu'on répète sans preuve",
            "quelque chose qu'on dit sans vérifier"
          ]
        },
        "points": 1,
        "canonicalAnswer": "une information non vérifiée",
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
            "input": "une information non vérifiée",
            "isCorrect": true
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
        "Je commence par le verbe.",
        "Je distingue fait observé et parole rapportée."
      ],
      "cahier": [
        "Je retiens : quis/quid/ubi/cur",
        "Je recopie sur mon cahier : l’ordre latin peut varier"
      ],
      "keywords": [
        "nuit",
        "rumeur",
        "enquête"
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
    "id": "p3-l12",
    "period": 3,
    "periodId": "p3",
    "title": "Inter insulas",
    "objective": "Suivre un trajet nocturne dans le quartier.",
    "lessonPoint": "Les prépositions m’aident à suivre le chemin exact d’un personnage.",
    "narrative": "L’homme passe entre les insulae, puis disparaît dans une ruelle.",
    "canDo": [
      "Je lis ad/in/ex/ante.",
      "Je repère des lieux traversés.",
      "Je traduis un trajet."
    ],
    "lexicon": [
      "insula = immeuble",
      "via = rue",
      "ad = vers",
      "in = dans",
      "ex = hors de, depuis",
      "ante = devant",
      "currit = il/elle court",
      "stat = il/elle se tient",
      "manet = il/elle reste",
      "intrat = il/elle entre"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p3-l12-t1",
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
        "id": "p3-l12-t2",
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
        "id": "p3-l12-t3",
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
        "id": "p3-l12-t4",
        "type": "singleChoice",
        "prompt": "« ante ianuam vir stat » : que fait-il ?",
        "options": [
          "il se tient devant la porte",
          "il entre dans la porte",
          "il quitte la rue",
          "il crie"
        ],
        "expected": "il se tient devant la porte",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l12-t5",
        "type": "ordering",
        "prompt": "Remets : vir / in via / currit",
        "options": [
          "vir",
          "in",
          "via",
          "currit"
        ],
        "expected": [
          "vir",
          "in",
          "via",
          "currit"
        ],
        "points": 1
      },
      {
        "id": "p3-l12-t6",
        "type": "multipleChoice",
        "prompt": "Traductions recevables de « vir ad forum ambulat ».",
        "options": [
          "L’homme va vers le forum",
          "L’homme marche au forum",
          "Le forum va vers l’homme",
          "L’homme se dirige vers la place publique"
        ],
        "expected": [
          "L’homme va vers le forum",
          "L’homme marche au forum",
          "L’homme se dirige vers la place publique"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l12-t7",
        "type": "multipleChoice",
        "prompt": "Mini-texte : « Vir ex insula exit et ad forum currit. » Quels lieux sont traversés ?",
        "options": [
          "insula",
          "forum",
          "balneum",
          "macellum"
        ],
        "expected": [
          "insula",
          "forum"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l12-p1",
        "type": "textInput",
        "prompt": "Traduis : vir ante insulam manet",
        "expected": "l'homme reste devant l'immeuble",
        "acceptedAnswers": [
          "l'homme reste devant l'immeuble",
          "l'homme demeure devant le bâtiment",
          "l'individu reste devant l'insula"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "l'homme reste devant l'immeuble",
            "l'homme demeure devant le bâtiment",
            "l'individu reste devant l'insula"
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
        "id": "p3-l12-p2",
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
        "id": "p3-l12-p3",
        "type": "textInput",
        "prompt": "Complète : ad = ... ; ex = ...",
        "expected": "vers ; hors de",
        "acceptedAnswers": [
          "vers ; hors de",
          "vers ; depuis",
          "ad vers ; ex hors de"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "vers ; hors de",
            "vers ; depuis",
            "ad vers ; ex hors de"
          ]
        },
        "points": 1,
        "canonicalAnswer": "vers ; hors de",
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
            "input": "vers ; hors de",
            "isCorrect": true
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
        "Je suis un trajet grâce aux prépositions.",
        "Je relis les lieux du quartier."
      ],
      "cahier": [
        "Je retiens : ad/in/ex/ante",
        "Je recopie sur mon cahier : insula, via, forum"
      ],
      "keywords": [
        "trajet",
        "quartier",
        "déplacements"
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
    "id": "p3-l13",
    "period": 3,
    "periodId": "p3",
    "title": "Feminae ad ianuam",
    "objective": "Réactiver la 1re déclinaison dans une scène d’observation.",
    "lessonPoint": "Je repère -a et -am pour distinguer souvent sujet et complément objet.",
    "narrative": "Des voisines observent depuis ianuae et fenestrae pendant le passage nocturne.",
    "canDo": [
      "Je reconnais des noms de 1re déclinaison.",
      "Je lis une scène depuis la porte.",
      "Je traduis une phrase simple."
    ],
    "lexicon": [
      "femina = femme",
      "vicina = voisine",
      "amica = amie",
      "ianua = porte",
      "fenestra = fenêtre",
      "lucernam = la lampe",
      "viam = la rue",
      "spectat = il/elle regarde",
      "narrat = il/elle raconte",
      "portat = il/elle porte"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p3-l13-t1",
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
        "id": "p3-l13-t2",
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
        "id": "p3-l13-t3",
        "type": "singleChoice",
        "prompt": "Dans « vicina viam spectat », l’objet est…",
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
        "id": "p3-l13-t4",
        "type": "singleChoice",
        "prompt": "La terminaison accusative la plus fréquente ici est…",
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
        "id": "p3-l13-t5",
        "type": "ordering",
        "prompt": "Remets : femina / virum / spectat",
        "options": [
          "femina",
          "virum",
          "spectat"
        ],
        "expected": [
          "femina",
          "virum",
          "spectat"
        ],
        "points": 1
      },
      {
        "id": "p3-l13-t6",
        "type": "multipleChoice",
        "prompt": "Traductions recevables de « amica lucernam portat ».",
        "options": [
          "L’amie porte la lampe",
          "L’amie transporte la lampe",
          "La lampe porte l’amie",
          "L’amie cache la lampe"
        ],
        "expected": [
          "L’amie porte la lampe",
          "L’amie transporte la lampe"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l13-t7",
        "type": "multipleChoice",
        "prompt": "Mini-texte : « Vicina ad ianuam stat et viam spectat. » Que voit-elle ?",
        "options": [
          "la rue",
          "la porte",
          "le forum",
          "le marché"
        ],
        "expected": [
          "la rue",
          "la porte"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l13-p1",
        "type": "textInput",
        "prompt": "Traduis : vicina ianuam aperit",
        "expected": "la voisine ouvre la porte",
        "acceptedAnswers": [
          "la voisine ouvre la porte",
          "une voisine ouvre la porte",
          "la personne du voisinage ouvre la porte"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "la voisine ouvre la porte",
            "une voisine ouvre la porte",
            "la personne du voisinage ouvre la porte"
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
        "id": "p3-l13-p2",
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
        "id": "p3-l13-p3",
        "type": "textInput",
        "prompt": "Complète : -a = ... ; -am = ...",
        "expected": "souvent sujet ; souvent objet",
        "acceptedAnswers": [
          "souvent sujet ; souvent objet",
          "forme de base ; forme objet",
          "sujet ; complément objet"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "souvent sujet ; souvent objet",
            "forme de base ; forme objet",
            "sujet ; complément objet"
          ]
        },
        "points": 1,
        "canonicalAnswer": "souvent sujet ; souvent objet",
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
            "input": "souvent sujet ; souvent objet",
            "isCorrect": true
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
        "Je reconnais -a/-am dans une scène réelle.",
        "J’utilise la porte et la fenêtre comme repères de lieu."
      ],
      "cahier": [
        "Je retiens : 1re déclinaison (femina/viam)",
        "Je recopie sur mon cahier : les voisines observent depuis la ianua"
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
    "id": "p3-l14",
    "period": 3,
    "periodId": "p3",
    "title": "In macello",
    "objective": "Lire la scène du marché et le nouvel indice d’huile.",
    "lessonPoint": "Je relie vocabulaire concret et formes neutres pour comprendre un indice.",
    "narrative": "Au macellum, un marchand affirme que l’homme a acheté de l’oleum.",
    "canDo": [
      "Je reconnais des neutres fréquents.",
      "Je repère l’action principale.",
      "Je traduis un indice concret."
    ],
    "lexicon": [
      "macellum = marché",
      "oleum = huile",
      "donum = offrande, cadeau",
      "signum = signe, marque, indice",
      "templum = temple",
      "emit = il/elle achète",
      "portat = il/elle porte",
      "celat = il/elle cache",
      "videt = il/elle voit",
      "invenit = il/elle trouve"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p3-l14-t1",
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
        "id": "p3-l14-t2",
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
        "id": "p3-l14-t3",
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
        "id": "p3-l14-t4",
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
        "id": "p3-l14-t5",
        "type": "multipleChoice",
        "prompt": "Traductions recevables de « oleum vir portat ».",
        "options": [
          "L’homme porte l’huile",
          "L’homme transporte l’huile",
          "L’huile porte l’homme",
          "L’homme achète l’huile"
        ],
        "expected": [
          "L’homme porte l’huile",
          "L’homme transporte l’huile"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l14-t6",
        "type": "ordering",
        "prompt": "Remets : vir / oleum / emit",
        "options": [
          "vir",
          "oleum",
          "emit"
        ],
        "expected": [
          "vir",
          "oleum",
          "emit"
        ],
        "points": 1
      },
      {
        "id": "p3-l14-t7",
        "type": "multipleChoice",
        "prompt": "Mini-texte : « In macello rumor crescit : vir oleum emit noctu. » Quel indice nouveau apparaît ?",
        "options": [
          "l’huile",
          "la lampe",
          "la paix",
          "le temple"
        ],
        "expected": [
          "l’huile"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l14-p1",
        "type": "textInput",
        "prompt": "Traduis : vir oleum celat",
        "expected": "l'homme cache l'huile",
        "acceptedAnswers": [
          "l'homme cache l'huile",
          "l'individu cache l'huile",
          "l'homme dissimule l'huile"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "l'homme cache l'huile",
            "l'individu cache l'huile",
            "l'homme dissimule l'huile"
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
        "id": "p3-l14-p2",
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
        "gradingFocus": "Morphologie et sens latin corrects ; ordre flexible accepté.",
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
            "input": "lorem ipsum",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p3-l14-p3",
        "type": "textInput",
        "prompt": "Règle simple : au neutre singulier, sujet et objet sont souvent…",
        "expected": "semblables",
        "acceptedAnswers": [
          "semblables",
          "identiques",
          "la même forme"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "semblables",
            "identiques",
            "la même forme"
          ]
        },
        "points": 1,
        "canonicalAnswer": "semblables",
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
            "input": "semblables",
            "isCorrect": true
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
        "Je comprends un indice concret (huile).",
        "Je reconnais des neutres utiles à l’enquête."
      ],
      "cahier": [
        "Je retiens : macellum, oleum, signum",
        "Je recopie sur mon cahier : neutre = forme souvent semblable sujet/objet"
      ],
      "keywords": [
        "marché",
        "indice",
        "huile"
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
    "id": "p3-l15",
    "period": 3,
    "periodId": "p3",
    "title": "In tabernis",
    "objective": "Comparer les versions au milieu des boutiques.",
    "lessonPoint": "Je vérifie les formes en -us/-um pour savoir qui agit et qui est accusé.",
    "narrative": "Dans les tabernae, les paroles se mélangent : certains accusent trop vite.",
    "canDo": [
      "Je relis la 2e déclinaison masculine.",
      "Je compare deux versions contradictoires.",
      "Je traduis une phrase d’accusation."
    ],
    "lexicon": [
      "servus = esclave, serviteur",
      "dominus = maître, maître de maison",
      "vicinus = voisin",
      "amicus = ami",
      "tabernarius = boutiquier",
      "murus = mur",
      "audit = il/elle entend",
      "vocat = il/elle appelle",
      "accusat = il/elle accuse",
      "timet = il/elle craint"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p3-l15-t1",
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
        "id": "p3-l15-t2",
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
        "id": "p3-l15-t3",
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
        "id": "p3-l15-t4",
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
        "id": "p3-l15-t5",
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
        "id": "p3-l15-t6",
        "type": "ordering",
        "prompt": "Remets : vicinus / servum / accusat",
        "options": [
          "vicinus",
          "servum",
          "accusat"
        ],
        "expected": [
          "vicinus",
          "servum",
          "accusat"
        ],
        "points": 1
      },
      {
        "id": "p3-l15-t7",
        "type": "multipleChoice",
        "prompt": "Mini-texte : « Tabernarius sero virum videt. Amicus dubitat. » Qui a vu l’homme tard ?",
        "options": [
          "le boutiquier",
          "l’ami",
          "la voisine",
          "le maître"
        ],
        "expected": [
          "le boutiquier"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l15-p1",
        "type": "textInput",
        "prompt": "Traduis : amicus vicinum timet",
        "expected": "l'ami craint le voisin",
        "acceptedAnswers": [
          "l'ami craint le voisin",
          "l'ami a peur du voisin",
          "l'ami craint la voisine"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "l'ami craint le voisin",
            "l'ami a peur du voisin",
            "l'ami craint la voisine"
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
        "id": "p3-l15-p2",
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
        "id": "p3-l15-p3",
        "type": "textInput",
        "prompt": "Lexique : dominus peut vouloir dire...",
        "expected": "maître",
        "acceptedAnswers": [
          "maître",
          "maître de maison",
          "patron"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "maître",
            "maître de maison",
            "patron"
          ]
        },
        "points": 1,
        "canonicalAnswer": "maître",
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
            "input": "maître",
            "isCorrect": true
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
        "Je vérifie qui agit avant d’accuser.",
        "Je relis -us/-um en contexte."
      ],
      "cahier": [
        "Je retiens : servus/servum, dominus/dominum",
        "Je recopie sur mon cahier : dans les boutiques, les récits peuvent se déformer"
      ],
      "keywords": [
        "taberna",
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
    "id": "p3-l16",
    "period": 3,
    "periodId": "p3",
    "title": "In balneo",
    "objective": "Réactiver le présent singulier avec des témoignages matinaux.",
    "lessonPoint": "Au présent singulier : -o (je), -s (tu), -t (il/elle).",
    "narrative": "Aux bains, des témoins disent avoir vu l’homme avant l’aube.",
    "canDo": [
      "Je repère les personnes du singulier.",
      "Je comprends qui parle dans une déposition.",
      "Je traduis une phrase simple."
    ],
    "lexicon": [
      "balneum = thermes, bains",
      "video = je vois",
      "audis = tu entends",
      "narrat = il/elle raconte",
      "nego = je nie",
      "times = tu crains",
      "intrat = il/elle entre",
      "exit = il/elle sort",
      "rogas = tu demandes",
      "habito = j’habite"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p3-l16-t1",
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
        "id": "p3-l16-t2",
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
        "id": "p3-l16-t3",
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
        "id": "p3-l16-t4",
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
        "id": "p3-l16-t5",
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
        "id": "p3-l16-t6",
        "type": "singleChoice",
        "prompt": "Mini-témoignage : « Video virum. Nego rumor. » Qui parle ?",
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
        "id": "p3-l16-t7",
        "type": "ordering",
        "prompt": "Mets le verbe en fin : ego / virum / audio",
        "options": [
          "ego",
          "virum",
          "audio"
        ],
        "expected": [
          "ego",
          "virum",
          "audio"
        ],
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l16-p1",
        "type": "textInput",
        "prompt": "Traduis : audio virum",
        "expected": "j'entends l'homme",
        "acceptedAnswers": [
          "j'entends l'homme",
          "j'écoute l'homme",
          "je perçois l'homme"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "j'entends l'homme",
            "j'écoute l'homme",
            "je perçois l'homme"
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
        "id": "p3-l16-p2",
        "type": "textInput",
        "prompt": "Traduis en latin : Je nie la rumeur.",
        "expected": "nego rumorem",
        "acceptedAnswers": [
          "nego rumorem",
          "rumorem nego"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "nego rumorem",
            "rumorem nego"
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
        "id": "p3-l16-p3",
        "type": "textInput",
        "prompt": "Complète : -o / -s / -t",
        "expected": "je / tu / il-elle",
        "acceptedAnswers": [
          "je / tu / il-elle",
          "1s/2s/3s",
          "je tu il/elle"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "je / tu / il-elle",
            "1s/2s/3s",
            "je tu il/elle"
          ]
        },
        "points": 1,
        "canonicalAnswer": "je / tu / il-elle",
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
            "input": "je / tu / il-elle",
            "isCorrect": true
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
        "Je lis qui parle grâce aux terminaisons.",
        "Je distingue je/tu/il-elle dans les dépositions."
      ],
      "cahier": [
        "Je retiens : -o = je ; -s = tu ; -t = il/elle",
        "Je recopie sur mon cahier : présent singulier dans les témoignages"
      ],
      "keywords": [
        "balneum",
        "présent singulier",
        "témoignages"
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
    "id": "p3-l17",
    "period": 3,
    "periodId": "p3",
    "title": "In foro",
    "objective": "Réactiver le présent pluriel dans un débat public.",
    "lessonPoint": "Au pluriel : -mus (nous), -tis (vous), -nt (ils/elles).",
    "narrative": "Au forum, le district confronte ses versions de façon publique.",
    "canDo": [
      "Je reconnais les personnes du pluriel.",
      "Je lis un échange collectif.",
      "Je traduis une phrase au présent pluriel."
    ],
    "lexicon": [
      "forum = forum, place publique",
      "videmus = nous voyons",
      "auditis = vous entendez",
      "clamant = ils/elles crient",
      "respondent = ils/elles répondent",
      "quaerimus = nous cherchons",
      "vicini = voisins",
      "mercatores = marchands",
      "puellae = jeunes filles",
      "rumores = rumeurs"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p3-l17-t1",
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
        "id": "p3-l17-t2",
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
        "id": "p3-l17-t3",
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
        "id": "p3-l17-t4",
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
        "id": "p3-l17-t5",
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
        "id": "p3-l17-t6",
        "type": "multipleChoice",
        "prompt": "Mini-texte : « Vicini clamant, mercatores respondent, puellae audiunt. » Qui parle pour le quartier ?",
        "options": [
          "les voisins",
          "les marchands",
          "les jeunes filles",
          "un seul homme"
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
        "id": "p3-l17-t7",
        "type": "ordering",
        "prompt": "Remets : in foro / clamant / vicini",
        "options": [
          "in",
          "foro",
          "vicini",
          "clamant"
        ],
        "expected": [
          "in",
          "foro",
          "vicini",
          "clamant"
        ],
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l17-p1",
        "type": "textInput",
        "prompt": "Traduis : quaerimus verum",
        "expected": "nous cherchons la vérité",
        "acceptedAnswers": [
          "nous cherchons la vérité",
          "nous cherchons le vrai",
          "nous cherchons ce qui est vrai"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "nous cherchons la vérité",
            "nous cherchons le vrai",
            "nous cherchons ce qui est vrai"
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
        "id": "p3-l17-p2",
        "type": "textInput",
        "prompt": "Traduis en latin : Les voisins répondent au forum.",
        "expected": "vicini in foro respondent",
        "acceptedAnswers": [
          "vicini in foro respondent",
          "vicini respondent in foro",
          "in foro vicini respondent",
          "in foro respondent vicini",
          "respondent vicini in foro",
          "respondent in foro vicini"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "vicini in foro respondent",
            "vicini respondent in foro",
            "in foro vicini respondent",
            "in foro respondent vicini",
            "respondent vicini in foro",
            "respondent in foro vicini"
          ]
        },
        "points": 1,
        "canonicalAnswer": "vicini in foro respondent",
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
            "input": "vicini in foro respondent",
            "isCorrect": true
          },
          {
            "input": "lorem ipsum",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p3-l17-p3",
        "type": "textInput",
        "prompt": "Tableau présent : -o / -s / -t / -mus / -tis / -nt",
        "expected": "je tu il/elle nous vous ils/elles",
        "acceptedAnswers": [
          "je tu il/elle nous vous ils/elles",
          "1s 2s 3s 1p 2p 3p",
          "je/tu/il ; nous/vous/ils"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "je tu il/elle nous vous ils/elles",
            "1s 2s 3s 1p 2p 3p",
            "je/tu/il ; nous/vous/ils"
          ]
        },
        "points": 1,
        "canonicalAnswer": "je tu il/elle nous vous ils/elles",
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
            "input": "je tu il/elle nous vous ils/elles",
            "isCorrect": true
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
        "Je reconnais les personnes du pluriel.",
        "Le forum sert à comparer publiquement les versions."
      ],
      "cahier": [
        "Je retiens : -mus/-tis/-nt",
        "Je recopie sur mon cahier : au forum, on cherche le verum ensemble"
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
    "id": "p3-l18",
    "period": 3,
    "periodId": "p3",
    "title": "Canis et porta obscura",
    "objective": "Travailler explicitement l’ordre des mots avec la scène de la porte sombre.",
    "lessonPoint": "Le sens dépend des formes et du verbe, pas seulement de la position des mots.",
    "narrative": "Le chien refuse toujours la même porte sombre ; ce détail devient central.",
    "canDo": [
      "Je lis des ordres variés.",
      "Je garde le même sens malgré l’ordre.",
      "Je produis une phrase latine correcte."
    ],
    "lexicon": [
      "canis = chien",
      "porta = porte",
      "obscura = sombre",
      "ante = devant",
      "latrat = il/elle aboie",
      "manet = il/elle reste",
      "timet = il/elle craint",
      "recusat = il/elle refuse",
      "intrat = il/elle entre",
      "audit = il/elle entend"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p3-l18-t1",
        "type": "singleChoice",
        "prompt": "latrat signifie…",
        "options": [
          "il/elle aboie",
          "il/elle dort",
          "il/elle entre",
          "il/elle cache"
        ],
        "expected": "il/elle aboie",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l18-t2",
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
        "id": "p3-l18-t3",
        "type": "singleChoice",
        "prompt": "« ante portam obscuram canis latrat » : sens correct ?",
        "options": [
          "Le chien aboie devant la porte sombre",
          "La porte aboie devant le chien",
          "Le chien entre dans la porte",
          "Le chien dort"
        ],
        "expected": "Le chien aboie devant la porte sombre",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l18-t4",
        "type": "singleChoice",
        "prompt": "« latrat ante portam canis » garde le même sens ?",
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
        "id": "p3-l18-t5",
        "type": "multipleChoice",
        "prompt": "Quels ordres peuvent signifier « Le chien reste devant la porte » ?",
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
        "id": "p3-l18-t6",
        "type": "ordering",
        "prompt": "Produis un ordre valide.",
        "options": [
          "canis",
          "ante",
          "portam",
          "manet"
        ],
        "expected": [
          "canis",
          "ante",
          "portam",
          "manet"
        ],
        "points": 1
      },
      {
        "id": "p3-l18-t7",
        "type": "multipleChoice",
        "prompt": "Mini-texte : « Canis portam obscuram timet et recusat. » Quelle porte l’effraie ?",
        "options": [
          "la porte sombre",
          "la porte claire",
          "la fontaine",
          "le marché"
        ],
        "expected": [
          "la porte sombre"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l18-p1",
        "type": "textInput",
        "prompt": "Traduis : canis portam timet",
        "expected": "le chien craint la porte",
        "acceptedAnswers": [
          "le chien craint la porte",
          "le chien a peur de la porte",
          "le chien craint cette porte"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "le chien craint la porte",
            "le chien a peur de la porte",
            "le chien craint cette porte"
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
        "id": "p3-l18-p2",
        "type": "textInput",
        "prompt": "Traduis en latin : Le chien reste devant la porte sombre.",
        "expected": "canis ante portam obscuram manet",
        "acceptedAnswers": [
          "canis ante portam obscuram manet",
          "canis manet ante portam obscuram",
          "ante portam obscuram canis manet",
          "ante portam obscuram manet canis",
          "manet canis ante portam obscuram",
          "manet ante portam obscuram canis"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "canis ante portam obscuram manet",
            "canis manet ante portam obscuram",
            "ante portam obscuram canis manet",
            "ante portam obscuram manet canis",
            "manet canis ante portam obscuram",
            "manet ante portam obscuram canis"
          ]
        },
        "points": 1,
        "canonicalAnswer": "canis ante portam obscuram manet",
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
            "input": "canis ante portam obscuram manet",
            "isCorrect": true
          },
          {
            "input": "lorem ipsum",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p3-l18-p3",
        "type": "textInput",
        "prompt": "Pourquoi l’ordre seul ne suffit-il pas ?",
        "expected": "il faut lire les formes",
        "acceptedAnswers": [
          "il faut lire les formes",
          "il faut repérer le verbe et les terminaisons",
          "les formes donnent le sens"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "il faut lire les formes",
            "il faut repérer le verbe et les terminaisons",
            "les formes donnent le sens"
          ]
        },
        "points": 1,
        "canonicalAnswer": "il faut lire les formes",
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
            "input": "il faut lire les formes",
            "isCorrect": true
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
        "Je ne me fais pas piéger par l’ordre.",
        "La porte sombre reste un indice stable."
      ],
      "cahier": [
        "Je retiens : S/C/V, V/S/C, C/V/S possibles",
        "Je recopie sur mon cahier : canis ante portam manet"
      ],
      "keywords": [
        "ordre latin",
        "canis",
        "porta"
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
    "id": "p3-l19",
    "period": 3,
    "periodId": "p3",
    "title": "Apud aram et fontem",
    "objective": "Relier autel, fontaine et tablette falsifiée dans une lecture continue.",
    "lessonPoint": "Je rassemble plusieurs indices pour comprendre une scène complète.",
    "narrative": "Près de l’ara et du fons, on relit la tabella falsa et les traces d’huile.",
    "canDo": [
      "Je lis un texte court continu.",
      "Je repère vrai/faux.",
      "Je fais le lien entre plusieurs indices."
    ],
    "lexicon": [
      "ara = autel",
      "fons = fontaine",
      "tabella = tablette",
      "falsa = fausse, falsifiée",
      "verum = vrai",
      "falsum = faux",
      "ostendit = il/elle montre",
      "legit = il/elle lit",
      "mutat = il/elle change",
      "separat = il/elle sépare"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p3-l19-t1",
        "type": "singleChoice",
        "prompt": "« tabella falsa » signifie…",
        "options": [
          "tablette falsifiée",
          "tablette neuve",
          "fontaine claire",
          "autel vide"
        ],
        "expected": "tablette falsifiée",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l19-t2",
        "type": "matching",
        "prompt": "Associe les mots de la scène.",
        "pairs": [
          {
            "left": "ara",
            "right": "autel"
          },
          {
            "left": "fons",
            "right": "fontaine"
          },
          {
            "left": "verum",
            "right": "vrai"
          },
          {
            "left": "falsum",
            "right": "faux"
          }
        ],
        "rightOptions": [
          "vrai",
          "autel",
          "faux",
          "fontaine"
        ],
        "expected": {
          "ara": "autel",
          "fons": "fontaine",
          "verum": "vrai",
          "falsum": "faux"
        },
        "points": 1
      },
      {
        "id": "p3-l19-t3",
        "type": "singleChoice",
        "prompt": "« vicina tabellam legit » : qui lit ?",
        "options": [
          "la voisine",
          "le maître",
          "le chien",
          "la rumeur"
        ],
        "expected": "la voisine",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l19-t4",
        "type": "multipleChoice",
        "prompt": "Texte bref : « Tabella mutat nomen. Verum non est. » Qu’est-ce qui est juste ?",
        "options": [
          "Un nom est changé",
          "Le texte n'est pas vrai",
          "Tout est clair",
          "La paix revient"
        ],
        "expected": [
          "Un nom est changé",
          "Le texte n'est pas vrai"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l19-t5",
        "type": "ordering",
        "prompt": "Remets : tabellam / servus / ostendit",
        "options": [
          "servus",
          "tabellam",
          "ostendit"
        ],
        "expected": [
          "servus",
          "tabellam",
          "ostendit"
        ],
        "points": 1
      },
      {
        "id": "p3-l19-t6",
        "type": "singleChoice",
        "prompt": "Quel indice relie tablette, huile et nuit ?",
        "options": [
          "des traces d’huile sur la tablette",
          "la pluie",
          "un cri de jour",
          "un jeu"
        ],
        "expected": "des traces d’huile sur la tablette",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l19-t7",
        "type": "multipleChoice",
        "prompt": "Lecture à ordre variable : « legit tabellam vicina » signifie…",
        "options": [
          "la voisine lit la tablette",
          "la tablette lit la voisine",
          "la voisine change la tablette",
          "le voisin lit la tablette"
        ],
        "expected": [
          "la voisine lit la tablette"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l19-p1",
        "type": "textInput",
        "prompt": "Traduis : servus verum ostendit",
        "expected": "le serviteur montre la vérité",
        "acceptedAnswers": [
          "le serviteur montre la vérité",
          "le serviteur montre le vrai",
          "le serviteur présente la vérité"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "le serviteur montre la vérité",
            "le serviteur montre le vrai",
            "le serviteur présente la vérité"
          ]
        },
        "points": 1,
        "canonicalAnswer": "le serviteur montre la vérité",
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
            "input": "le serviteur montre la vérité",
            "isCorrect": true
          },
          {
            "input": "réponse hors-sujet",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p3-l19-p2",
        "type": "textInput",
        "prompt": "Traduis en latin : La voisine lit la tablette.",
        "expected": "vicina tabellam legit",
        "acceptedAnswers": [
          "vicina tabellam legit",
          "vicina legit tabellam",
          "tabellam vicina legit",
          "tabellam legit vicina",
          "legit vicina tabellam",
          "legit tabellam vicina"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "vicina tabellam legit",
            "vicina legit tabellam",
            "tabellam vicina legit",
            "tabellam legit vicina",
            "legit vicina tabellam",
            "legit tabellam vicina"
          ]
        },
        "points": 1,
        "canonicalAnswer": "vicina tabellam legit",
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
            "input": "vicina tabellam legit",
            "isCorrect": true
          },
          {
            "input": "lorem ipsum",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p3-l19-p3",
        "type": "textInput",
        "prompt": "Pourquoi la lumière est-elle importante dans l’enquête ?",
        "expected": "elle permet de voir les indices",
        "acceptedAnswers": [
          "elle permet de voir les indices",
          "elle limite les faux récits",
          "on distingue mieux le vrai du faux"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "elle permet de voir les indices",
            "elle limite les faux récits",
            "on distingue mieux le vrai du faux"
          ]
        },
        "points": 1,
        "canonicalAnswer": "elle permet de voir les indices",
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
            "input": "elle permet de voir les indices",
            "isCorrect": true
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
        "Je relie plusieurs indices entre eux.",
        "Je relis vrai/faux avec la tabella."
      ],
      "cahier": [
        "Je retiens : ara, fons, tabella",
        "Je recopie sur mon cahier : la lumière aide à séparer verum et falsum"
      ],
      "keywords": [
        "indices",
        "fontaine",
        "tablette"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p3",
        "aram-fontem",
        "tabella"
      ]
    }
  },
  {
    "id": "p3-l20",
    "period": 3,
    "periodId": "p3",
    "title": "Lucernae in vico",
    "objective": "Passer de l’enquête à une solution collective concrète.",
    "lessonPoint": "Je comprends un plan d’action collectif simple en latin.",
    "narrative": "Les habitants décident de poser des lucernae aux portes et carrefours.",
    "canDo": [
      "Je lis qui apporte quoi.",
      "Je comprends l’action collective.",
      "Je traduis une phrase utile."
    ],
    "lexicon": [
      "lucerna = lampe à huile",
      "oleum = huile",
      "vicus = quartier",
      "ianua = porte",
      "via = rue",
      "ponit = il/elle place",
      "portat = il/elle porte",
      "manet = il/elle reste",
      "adiuvat = il/elle aide",
      "laborat = il/elle travaille"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p3-l20-t1",
        "type": "singleChoice",
        "prompt": "lucerna signifie…",
        "options": [
          "lampe",
          "fontaine",
          "marché",
          "porte"
        ],
        "expected": "lampe",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l20-t2",
        "type": "matching",
        "prompt": "Associe mot et traduction.",
        "pairs": [
          {
            "left": "lucerna",
            "right": "lampe"
          },
          {
            "left": "oleum",
            "right": "huile"
          },
          {
            "left": "ianua",
            "right": "porte"
          },
          {
            "left": "via",
            "right": "rue"
          }
        ],
        "rightOptions": [
          "rue",
          "lampe",
          "porte",
          "huile"
        ],
        "expected": {
          "lucerna": "lampe",
          "oleum": "huile",
          "ianua": "porte",
          "via": "rue"
        },
        "points": 1
      },
      {
        "id": "p3-l20-t3",
        "type": "singleChoice",
        "prompt": "« vicina lucernam ante ianuam ponit » : que fait la voisine ?",
        "options": [
          "elle place la lampe devant la porte",
          "elle porte la porte",
          "elle cache l’huile",
          "elle quitte la rue"
        ],
        "expected": "elle place la lampe devant la porte",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l20-t4",
        "type": "multipleChoice",
        "prompt": "Traductions recevables de « vicini oleum portant ».",
        "options": [
          "Les voisins portent l’huile",
          "Les voisins transportent l’huile",
          "L’huile porte les voisins",
          "Les voisins achètent la porte"
        ],
        "expected": [
          "Les voisins portent l’huile",
          "Les voisins transportent l’huile"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l20-t5",
        "type": "ordering",
        "prompt": "Remets : lucernam / ante ianuam / ponit / vicina",
        "options": [
          "vicina",
          "lucernam",
          "ante",
          "ianuam",
          "ponit"
        ],
        "expected": [
          "vicina",
          "lucernam",
          "ante",
          "ianuam",
          "ponit"
        ],
        "points": 1
      },
      {
        "id": "p3-l20-t6",
        "type": "multipleChoice",
        "prompt": "Mini-texte : « Vicini oleum portant. Puellae lucernas tenent. Servus adiuvat. » Qui apporte quoi ?",
        "options": [
          "les voisins portent l’huile",
          "les jeunes filles tiennent les lampes",
          "le serviteur aide",
          "le chien commande"
        ],
        "expected": [
          "les voisins portent l’huile",
          "les jeunes filles tiennent les lampes",
          "le serviteur aide"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l20-t7",
        "type": "singleChoice",
        "prompt": "Dans « in vico vicinus lucernam ante ianuam ponit », le verbe est…",
        "options": [
          "ponit",
          "vicinus",
          "lucernam",
          "ianuam"
        ],
        "expected": "ponit",
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l20-p1",
        "type": "textInput",
        "prompt": "Traduis : lucerna in via est",
        "expected": "la lampe est dans la rue",
        "acceptedAnswers": [
          "la lampe est dans la rue",
          "une lampe est dans la rue",
          "la lampe est sur la voie"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "la lampe est dans la rue",
            "une lampe est dans la rue",
            "la lampe est sur la voie"
          ]
        },
        "points": 1,
        "canonicalAnswer": "la lampe est dans la rue",
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
            "input": "la lampe est dans la rue",
            "isCorrect": true
          },
          {
            "input": "réponse hors-sujet",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p3-l20-p2",
        "type": "textInput",
        "prompt": "Traduis en latin : Le voisin place la lampe devant la porte.",
        "expected": "vicinus lucernam ante ianuam ponit",
        "acceptedAnswers": [
          "vicinus lucernam ante ianuam ponit",
          "vicinus lucernam ponit ante ianuam",
          "vicinus ante ianuam lucernam ponit",
          "vicinus ante ianuam ponit lucernam",
          "vicinus ponit lucernam ante ianuam",
          "vicinus ponit ante ianuam lucernam",
          "lucernam vicinus ante ianuam ponit",
          "lucernam vicinus ponit ante ianuam",
          "lucernam ante ianuam vicinus ponit",
          "lucernam ante ianuam ponit vicinus",
          "lucernam ponit vicinus ante ianuam",
          "lucernam ponit ante ianuam vicinus",
          "ante ianuam vicinus lucernam ponit",
          "ante ianuam vicinus ponit lucernam",
          "ante ianuam lucernam vicinus ponit",
          "ante ianuam lucernam ponit vicinus",
          "ante ianuam ponit vicinus lucernam",
          "ante ianuam ponit lucernam vicinus",
          "ponit vicinus lucernam ante ianuam",
          "ponit vicinus ante ianuam lucernam",
          "ponit lucernam vicinus ante ianuam",
          "ponit lucernam ante ianuam vicinus",
          "ponit ante ianuam vicinus lucernam",
          "ponit ante ianuam lucernam vicinus"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "vicinus lucernam ante ianuam ponit",
            "vicinus lucernam ponit ante ianuam",
            "vicinus ante ianuam lucernam ponit",
            "vicinus ante ianuam ponit lucernam",
            "vicinus ponit lucernam ante ianuam",
            "vicinus ponit ante ianuam lucernam",
            "lucernam vicinus ante ianuam ponit",
            "lucernam vicinus ponit ante ianuam",
            "lucernam ante ianuam vicinus ponit",
            "lucernam ante ianuam ponit vicinus",
            "lucernam ponit vicinus ante ianuam",
            "lucernam ponit ante ianuam vicinus",
            "ante ianuam vicinus lucernam ponit",
            "ante ianuam vicinus ponit lucernam",
            "ante ianuam lucernam vicinus ponit",
            "ante ianuam lucernam ponit vicinus",
            "ante ianuam ponit vicinus lucernam",
            "ante ianuam ponit lucernam vicinus",
            "ponit vicinus lucernam ante ianuam",
            "ponit vicinus ante ianuam lucernam",
            "ponit lucernam vicinus ante ianuam",
            "ponit lucernam ante ianuam vicinus",
            "ponit ante ianuam vicinus lucernam",
            "ponit ante ianuam lucernam vicinus"
          ]
        },
        "points": 1,
        "canonicalAnswer": "vicinus lucernam ante ianuam ponit",
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
            "input": "vicinus lucernam ante ianuam ponit",
            "isCorrect": true
          },
          {
            "input": "lorem ipsum",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p3-l20-p3",
        "type": "textInput",
        "prompt": "Pourquoi cette idée est-elle utile ?",
        "expected": "elle éclaire le quartier",
        "acceptedAnswers": [
          "elle éclaire le quartier",
          "on voit mieux la nuit",
          "elle réduit la peur"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "elle éclaire le quartier",
            "on voit mieux la nuit",
            "elle réduit la peur"
          ]
        },
        "points": 1,
        "canonicalAnswer": "elle éclaire le quartier",
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
            "input": "elle éclaire le quartier",
            "isCorrect": true
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
        "Une solution collective peut calmer le quartier.",
        "Je lis des actions concrètes au présent."
      ],
      "cahier": [
        "Je retiens : lucerna, oleum, ponit",
        "Je recopie sur mon cahier : les voisins organisent l’éclairage"
      ],
      "keywords": [
        "solution",
        "lampe",
        "quartier"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p3",
        "lucernae",
        "solution"
      ]
    }
  },
  {
    "id": "p3-l21",
    "period": 3,
    "periodId": "p3",
    "title": "Vicus noctu clarior est",
    "objective": "Comprendre les effets de l’éclairage sans nouvelle leçon de grammaire.",
    "lessonPoint": "Je lis un avant/après du quartier avec le vocabulaire déjà connu.",
    "narrative": "Les lampes restent allumées ; l’homme suspect ne circule plus, les troubles cessent.",
    "canDo": [
      "Je lis un changement de situation.",
      "Je comprends cause et effet.",
      "Je traduis une phrase de bilan."
    ],
    "lexicon": [
      "noctu = de nuit",
      "clarior = plus clair",
      "quietus = calme",
      "lucerna = lampe",
      "vicus = quartier",
      "manet = il/elle reste",
      "videt = il/elle voit",
      "dormit = il/elle dort",
      "turbat = il/elle trouble",
      "redit = il/elle revient"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p3-l21-t1",
        "type": "singleChoice",
        "prompt": "quietus signifie…",
        "options": [
          "calme",
          "bruyant",
          "sombre",
          "faux"
        ],
        "expected": "calme",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l21-t2",
        "type": "matching",
        "prompt": "Associe vocabulaire et sens sans nouvelle règle.",
        "pairs": [
          {
            "left": "clarus/clarior",
            "right": "clair / plus clair"
          },
          {
            "left": "quietus",
            "right": "calme"
          },
          {
            "left": "lucerna",
            "right": "lampe"
          },
          {
            "left": "noctu",
            "right": "de nuit"
          }
        ],
        "rightOptions": [
          "de nuit",
          "clair / plus clair",
          "lampe",
          "calme"
        ],
        "expected": {
          "clarus/clarior": "clair / plus clair",
          "quietus": "calme",
          "lucerna": "lampe",
          "noctu": "de nuit"
        },
        "points": 1
      },
      {
        "id": "p3-l21-t3",
        "type": "singleChoice",
        "prompt": "Phrase sûre : « vir in domo manet » signifie…",
        "options": [
          "l’homme reste dans la maison",
          "l’homme sort de la maison",
          "la maison reste",
          "le quartier fuit"
        ],
        "expected": "l’homme reste dans la maison",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l21-t4",
        "type": "multipleChoice",
        "prompt": "Traductions recevables de « lucerna vicum adiuvat ».",
        "options": [
          "La lampe aide le quartier",
          "L’éclairage aide le quartier",
          "Le quartier aide la lampe",
          "La lampe trouble le quartier"
        ],
        "expected": [
          "La lampe aide le quartier",
          "L’éclairage aide le quartier"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l21-t5",
        "type": "ordering",
        "prompt": "Remets : lucerna / vicum / adiuvat",
        "options": [
          "lucerna",
          "vicum",
          "adiuvat"
        ],
        "expected": [
          "lucerna",
          "vicum",
          "adiuvat"
        ],
        "points": 1
      },
      {
        "id": "p3-l21-t6",
        "type": "multipleChoice",
        "prompt": "Mini-texte : « Nunc vicus clarior est. Canis quietus manet. Rumor minor est. » Qu’est-ce qui change ?",
        "options": [
          "le quartier est plus clair",
          "le chien est plus calme",
          "la rumeur diminue",
          "la fontaine disparaît"
        ],
        "expected": [
          "le quartier est plus clair",
          "le chien est plus calme",
          "la rumeur diminue"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l21-t7",
        "type": "singleChoice",
        "prompt": "Pourquoi le chien aboie moins ?",
        "options": [
          "la porte et la rue sont mieux visibles",
          "il oublie la porte",
          "le forum ferme",
          "le marché crie"
        ],
        "expected": "la porte et la rue sont mieux visibles",
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l21-p1",
        "type": "textInput",
        "prompt": "Traduis : vicus quietus manet",
        "expected": "le quartier reste calme",
        "acceptedAnswers": [
          "le quartier reste calme",
          "le quartier demeure calme",
          "la rue de quartier reste calme"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "le quartier reste calme",
            "le quartier demeure calme",
            "la rue de quartier reste calme"
          ]
        },
        "points": 1,
        "canonicalAnswer": "le quartier reste calme",
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
            "input": "le quartier reste calme",
            "isCorrect": true
          },
          {
            "input": "réponse hors-sujet",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p3-l21-p2",
        "type": "textInput",
        "prompt": "Traduis en latin : L’homme reste dans la maison.",
        "expected": "vir in domo manet",
        "acceptedAnswers": [
          "vir in domo manet",
          "vir manet in domo",
          "in domo vir manet",
          "in domo manet vir",
          "manet vir in domo",
          "manet in domo vir"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "vir in domo manet",
            "vir manet in domo",
            "in domo vir manet",
            "in domo manet vir",
            "manet vir in domo",
            "manet in domo vir"
          ]
        },
        "points": 1,
        "canonicalAnswer": "vir in domo manet",
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
            "input": "vir in domo manet",
            "isCorrect": true
          },
          {
            "input": "lorem ipsum",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p3-l21-p3",
        "type": "textInput",
        "prompt": "Qu’est-ce qui fait disparaître les troubles ?",
        "expected": "l'éclairage collectif",
        "acceptedAnswers": [
          "l'éclairage collectif",
          "les lampes dans le quartier",
          "la rue plus visible"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "l'éclairage collectif",
            "les lampes dans le quartier",
            "la rue plus visible"
          ]
        },
        "points": 1,
        "canonicalAnswer": "l'éclairage collectif",
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
            "input": "l'éclairage collectif",
            "isCorrect": true
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
        "Je lis un bilan avant/après.",
        "Le calme revient avec la visibilité nocturne."
      ],
      "cahier": [
        "Je retiens : vicus clarior, vicus quietus",
        "Je recopie sur mon cahier : les lampes stoppent les troubles"
      ],
      "keywords": [
        "bilan",
        "nuit",
        "calme"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p3",
        "bilan",
        "clarior"
      ]
    }
  },
  {
    "id": "p3-l22",
    "period": 3,
    "periodId": "p3",
    "title": "Pax redit",
    "objective": "Finaliser la période avec une révision complète de l’enquête.",
    "lessonPoint": "Je mobilise interrogatifs, lieux, formes nominales, présent et ordre variable pour conclure.",
    "narrative": "Après l’éclairage collectif, la Subure redevient paisible : la pax revient.",
    "canDo": [
      "Je relis un mini-dossier final.",
      "Je réponds à des questions cumulatives.",
      "Je formule une conclusion simple."
    ],
    "lexicon": [
      "pax = paix",
      "redit = il/elle revient",
      "concordia = concorde",
      "discordia = discorde",
      "vicini = voisins",
      "lucerna = lampe",
      "forum = forum",
      "macellum = marché",
      "balneum = thermes",
      "tabella = tablette"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p3-l22-t1",
        "type": "singleChoice",
        "prompt": "Quel mot signifie « paix » ?",
        "options": [
          "pax",
          "discordia",
          "lucerna",
          "tabella"
        ],
        "expected": "pax",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l22-t2",
        "type": "multipleChoice",
        "prompt": "Choisis les lieux étudiés du quartier.",
        "options": [
          "forum",
          "macellum",
          "balneum",
          "montes",
          "insula"
        ],
        "expected": [
          "forum",
          "macellum",
          "balneum",
          "insula"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l22-t3",
        "type": "matching",
        "prompt": "Associe latin et français.",
        "pairs": [
          {
            "left": "lucerna",
            "right": "lampe"
          },
          {
            "left": "tabella",
            "right": "tablette"
          },
          {
            "left": "discordia",
            "right": "discorde"
          },
          {
            "left": "concordia",
            "right": "concorde"
          }
        ],
        "rightOptions": [
          "concorde",
          "tablette",
          "lampe",
          "discorde"
        ],
        "expected": {
          "lucerna": "lampe",
          "tabella": "tablette",
          "discordia": "discorde",
          "concordia": "concorde"
        },
        "points": 1
      },
      {
        "id": "p3-l22-t4",
        "type": "singleChoice",
        "prompt": "Dans « vicinus donum videt », le complément objet est…",
        "options": [
          "donum",
          "vicinus",
          "videt",
          "pax"
        ],
        "expected": "donum",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l22-t5",
        "type": "singleChoice",
        "prompt": "« respondent » correspond à…",
        "options": [
          "ils/elles répondent",
          "il/elle répond",
          "vous répondez",
          "je réponds"
        ],
        "expected": "ils/elles répondent",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l22-t6",
        "type": "multipleChoice",
        "prompt": "Mini-enquête finale (5 phrases) : quelles infos sont présentes ?",
        "options": [
          "l’homme sortait la nuit",
          "la tablette était falsifiée",
          "les voisins installent des lampes",
          "les troubles cessent",
          "le temple brûle"
        ],
        "expected": [
          "l’homme sortait la nuit",
          "la tablette était falsifiée",
          "les voisins installent des lampes",
          "les troubles cessent"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l22-t7",
        "type": "ordering",
        "prompt": "Rebâtis : vicini / lucernam / vident",
        "options": [
          "vicini",
          "lucernam",
          "vident"
        ],
        "expected": [
          "vicini",
          "lucernam",
          "vident"
        ],
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l22-p1",
        "type": "textInput",
        "prompt": "Traduis : pax in vico redit",
        "expected": "la paix revient dans le quartier",
        "acceptedAnswers": [
          "la paix revient dans le quartier",
          "la paix revient dans la rue de quartier",
          "la paix revient"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "la paix revient dans le quartier",
            "la paix revient dans la rue de quartier",
            "la paix revient"
          ]
        },
        "points": 1,
        "canonicalAnswer": "la paix revient dans le quartier",
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
            "input": "la paix revient dans le quartier",
            "isCorrect": true
          },
          {
            "input": "réponse hors-sujet",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p3-l22-p2",
        "type": "textInput",
        "prompt": "Traduis en latin : Les voisins voient la lampe.",
        "expected": "vicini lucernam vident",
        "acceptedAnswers": [
          "vicini lucernam in via vident",
          "vicini lucernam vident in via",
          "vicini in via lucernam vident",
          "vicini in via vident lucernam",
          "vicini vident lucernam in via",
          "vicini vident in via lucernam",
          "lucernam vicini in via vident",
          "lucernam vicini vident in via",
          "lucernam in via vicini vident",
          "lucernam in via vident vicini",
          "lucernam vident vicini in via",
          "lucernam vident in via vicini",
          "in via vicini lucernam vident",
          "in via vicini vident lucernam",
          "in via lucernam vicini vident",
          "in via lucernam vident vicini",
          "in via vident vicini lucernam",
          "in via vident lucernam vicini",
          "vident vicini lucernam in via",
          "vident vicini in via lucernam",
          "vident lucernam vicini in via",
          "vident lucernam in via vicini",
          "vident in via vicini lucernam",
          "vident in via lucernam vicini",
          "vicini lucernam vident"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "vicini lucernam in via vident",
            "vicini lucernam vident in via",
            "vicini in via lucernam vident",
            "vicini in via vident lucernam",
            "vicini vident lucernam in via",
            "vicini vident in via lucernam",
            "lucernam vicini in via vident",
            "lucernam vicini vident in via",
            "lucernam in via vicini vident",
            "lucernam in via vident vicini",
            "lucernam vident vicini in via",
            "lucernam vident in via vicini",
            "in via vicini lucernam vident",
            "in via vicini vident lucernam",
            "in via lucernam vicini vident",
            "in via lucernam vident vicini",
            "in via vident vicini lucernam",
            "in via vident lucernam vicini",
            "vident vicini lucernam in via",
            "vident vicini in via lucernam",
            "vident lucernam vicini in via",
            "vident lucernam in via vicini",
            "vident in via vicini lucernam",
            "vident in via lucernam vicini",
            "vicini lucernam vident"
          ]
        },
        "points": 1,
        "canonicalAnswer": "vicini lucernam vident",
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
            "input": "vicini lucernam vident",
            "isCorrect": true
          },
          {
            "input": "lorem ipsum",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p3-l22-p3",
        "type": "textInput",
        "prompt": "Pourquoi les troubles disparaissent-ils ?",
        "expected": "le quartier est éclairé et les habitants agissent ensemble",
        "acceptedAnswers": [
          "le quartier est éclairé et les habitants agissent ensemble",
          "les lampes rendent la rue visible",
          "la concorde remplace la discorde"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "le quartier est éclairé et les habitants agissent ensemble",
            "les lampes rendent la rue visible",
            "la concorde remplace la discorde"
          ]
        },
        "points": 1,
        "canonicalAnswer": "le quartier est éclairé et les habitants agissent ensemble",
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
            "input": "le quartier est éclairé et les habitants agissent ensemble",
            "isCorrect": true
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
        "Je sais relire toute l’enquête de Subure.",
        "Je relie langue, lecture et vie de quartier romain."
      ],
      "cahier": [
        "Je retiens : interrogatifs + lieux + présent + ordre variable",
        "Je recopie sur mon cahier : rosa/rosam ; dominus/dominum ; donum/donum",
        "Je recopie sur mon cahier : -o je ; -s tu ; -t il/elle ; -mus nous ; -tis vous ; -nt ils/elles",
        "Je recopie sur mon cahier : sujet souvent forme de base, objet souvent forme modifiée, neutre souvent semblable"
      ],
      "keywords": [
        "révision finale",
        "pax",
        "concordia",
        "Subura"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p3",
        "final",
        "pax"
      ]
    }
  }
];
