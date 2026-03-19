// Données de leçons 5E · Période 3 — Discordia in Subura.
const headerContexts5eP3 = {
  "p3-l1": "Une rumeur nocturne rouvre l’affaire quand une voisine affirme avoir vu un homme sortir dans l’ombre.",
  "p3-l2": "Marcus suit la trace entre les insulae, se cache dans les angles, et comprend qu’un homme a pris l’habitude de passer là quand les portes se ferment.",
  "p3-l3": "Aux portes et aux fenêtres, les voisines de Subure regardent la rue chacune à sa façon.",
  "p3-l4": "Au marché, un marchand reconnaît l’homme et parle d'un parfum tenace d'huile ; si bien que l’odeur grasse revient soudain dans tous les souvenirs.",
  "p3-l5": "Dans les boutiques, les récits se contredisent, mais Flavia oblige chacun à reprendre les faits avant qu'on n'accuse encore quelqu'un à tort.",
  "p3-l6": "Aux bains, un témoin confirme un détail, en retire un autre, puis Marcus sent que le mensonge fatigue ceux qui le portent depuis trop longtemps.",
  "p3-l7": "Au forum, Subure vide enfin sa colère en plein jour, et les voisins se répondent et s'invectivent face à face au lieu de se mordre par rumeur interposée.",
  "p3-l8": "Niger retourne à la porte louche, gratte le bois, refuse d’entrer, et plus personne n’ose traiter ce manège comme un simple caprice.",
  "p3-l9": "Près de l’autel et de la fontaine, Marcus et Livia recoupent leurs indices, et voient les morceaux s’emboîter pour de bon.",
  "p3-l10": "Chacun pose une lampe devant sa porte ou au carrefour, car Subure veut ouvrir les yeux au lieu de parler dans le noir.",
  "p3-l11": "Sous les lampes restées allumées, la rue change de ton, l’homme ne repasse plus, et le calme revient peu à peu.",
  "p3-l12": "Quand Subure s’éclaire tout entière, Niger se tait enfin, Marcus relève la tête, et la concorde reprend sa place au milieu des maisons."
};

export const lessons5eP3 = [
  {
    "id": "p3-l1",
    "period": 3,
    "periodId": "p3",
    "title": "Rumor nocturnus",
    "subtitle": "Une rumeur nocturne rouvre l’affaire quand une voisine affirme avoir vu un homme sortir dans l’ombre.",
    "objective": "Réactiver les interrogatifs dans une scène d’enquête nocturne.",
    "lessonPoint": "Je trouve le verbe d’abord, puis qui / quoi / où / pourquoi ; l’ordre latin peut varier.",
    "narrative": "Une rumeur dit qu’un homme sort la nuit : les voisins veulent vérifier les faits.",
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
      "rumor = rumeur",
      "vir = homme",
      "vicum = le voisinage, le quartier",
      "noctu = de nuit",
      "exit = il/elle sort",
      "videt = il/elle voit",
      "turbat = il/elle trouble",
      "dicit = il/elle dit"
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
        "prompt": "Traductions recevables de « vir noctu exit ».",
        "options": [
          "L’homme sort pendant la nuit",
          "Un homme sort la nuit",
          "La nuit sort de l’homme",
          "L’homme entre dans la nuit"
        ],
        "expected": [
          "L’homme sort pendant la nuit",
          "Un homme sort la nuit"
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
        "type": "multipleChoice",
        "prompt": "Mini-texte : « Vicina virum videt. Servus dicit multum. » Qu’est-ce qui est vu, qu’est-ce qui est dit ?",
        "options": [
          "L’homme est vu",
          "Le serviteur parle",
          "La tablette est vue",
          "La voisine parle"
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
    "title": "Inter insulas",
    "subtitle": "Marcus suit la trace entre les insulae, se cache dans les angles, et comprend qu’un homme a pris l’habitude de passer là quand les portes se ferment.",
    "objective": "Lire un trajet nocturne grâce aux prépositions.",
    "lessonPoint": "Je lis le groupe prépositionnel d’un seul bloc pour suivre le trajet.",
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
      "in + ablatif (-a) = dans (statique)",
      "in + accusatif (-am) = dans (mouvement)",
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
        "prompt": "Traductions recevables de « vir ad forum currit ».",
        "options": [
          "L’homme court vers le forum",
          "L’homme va vers le forum",
          "Le forum court vers l’homme",
          "L’homme se dirige vers la place publique"
        ],
        "expected": [
          "L’homme court vers le forum",
          "L’homme va vers le forum",
          "L’homme se dirige vers la place publique"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l2-t7",
        "type": "multipleChoice",
        "prompt": "Mini-texte : « Vir ex insula exit et ad forum currit. » Quels lieux sont traversés ?",
        "options": [
          "un immeuble",
          "les bains publics",
          "une place",
          "une boucherie"
        ],
        "expected": [
          "un immeuble",
          "une place"
        ],
        "shuffle": true,
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
    "title": "Feminae ad ianuam",
    "subtitle": "Aux portes et aux fenêtres, les voisines de Subure regardent la rue chacune à sa façon.",
    "objective": "Réinvestir la 1re déclinaison dans une scène d’observation.",
    "lessonPoint": "Je regarde -a et -am pour distinguer qui agit et ce qui est regardé.",
    "narrative": "Des voisines observent depuis les portes et les fenêtres, guettant les allées et venues nocturnes...",
    "canDo": [
      "Je reconnais des noms de 1re déclinaison.",
      "Je traduis une phrase simple."
    ],
    "lexicon": [
      "femina = femme",
      "vicina = voisine",
      "amica = amie",
      "ianua = porte",
      "fenestra = fenêtre",
      "lucerna = la lampe",
      "viam = la rue",
      "spectat = il/elle regarde",
      "aperit = il/elle ouvre",
      "portat = il/elle porte"
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
        "prompt": "Traductions recevables de « amica lucernam portat ».",
        "options": [
          "L’amie porte une lampe",
          "L’amie transporte la lampe",
          "La lampe porte l’amie",
          "L’amie cache la lampe"
        ],
        "expected": [
          "L’amie porte une lampe",
          "L’amie transporte la lampe"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l3-t7",
        "type": "multipleChoice",
        "prompt": "Mini-texte : « Vicina ad ianuam stat et viam spectat. » Quels éléments de la scène sont présents ?",
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
          "language": "la",
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
    "title": "In macello",
    "subtitle": "Au marché, un marchand reconnaît l’homme et parle d'un parfum tenace d'huile mal pressée ; si bien que l’odeur grasse revient soudain dans tous les souvenirs.",
    "objective": "Réinvestir le neutre dans une scène de marché et d’indice.",
    "lessonPoint": "Je repère les neutres de la 2e déclinaison, et j’observe leur fonction dans l’indice. Sujet (nominatif) = -um ; COD (accusatif) = -um.",
    "narrative": "Au marché, un marchand affirme que l’homme a acheté une huile de mauvaise qualité. De nuit ! Voilà de quoi faire parler les gens...",
    "canDo": [
      "Je reconnais des neutres fréquents.",
      "Je repère l’action principale.",
      "Je traduis un indice concret."
    ],
    "lexicon": [
      "macellum = marché",
      "mercator = marchand",
      "oleum = huile",
      "signum = signe, marque, indice",
      "templum = temple",
      "vir = homme",
      "emo, emit = j'achète ; il/elle achète",
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
  "type": "multipleChoice",
  "prompt": "Mini-texte : « In macello rumor crescit : vir oleum emit noctu. » Pourquoi cet achat paraît-il inquiétant ?",
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
          "language": "la",
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
    "title": "In tabernis",
    "subtitle": "Dans les boutiques, les récits se contredisent, mais Flavia oblige chacun à reprendre les faits un par un et à ne pas tirer de conclusion hâtive.",
    "objective": "Lire qui agit et qui subit dans des versions contradictoires.",
    "lessonPoint": "Qui accuse qui ? Je regarde qui est sujet (-us) / complément d'objet (-um) avant d’interpréter une accusation.",
    "narrative": "Dans les tabernae, les gens aiment parler fort et se pousser au premier plan. Les paroles se mélangent : certains accusent trop vite.",
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
      "sero = tard, tardivement",
      "audit = il/elle entend",
      "vocat = il/elle appelle",
      "accusat = il/elle accuse",
      "timet = il/elle craint"
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
        "type": "multipleChoice",
        "prompt": "Mini-texte : « Sero virum tabernarius videt. Amicus dubitat. » Qui a vu l’homme tard dans la nuit ?",
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
  "un marchand écoute un voisin",

  "l'aubergiste entend le voisin",
  "l'aubergiste entend un voisin",
  "l'aubergiste écoute le voisin",
  "l'aubergiste écoute un voisin",

  "un aubergiste entend le voisin",
  "un aubergiste entend un voisin",
  "un aubergiste écoute le voisin",
  "un aubergiste écoute un voisin"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
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
  "un marchand écoute un voisin",

  "l'aubergiste entend le voisin",
  "l'aubergiste entend un voisin",
  "l'aubergiste écoute le voisin",
  "l'aubergiste écoute un voisin",

  "un aubergiste entend le voisin",
  "un aubergiste entend un voisin",
  "un aubergiste écoute le voisin",
  "un aubergiste écoute un voisin"
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
    "title": "In balneo",
    "subtitle": "Aux bains, un témoin confirme un détail, en retire un autre, puis Marcus sent que le mensonge fatigue ceux qui le portent depuis trop longtemps.",
    "objective": "Identifier je / tu / il-elle dans des témoignages.",
    "lessonPoint": "Je lis la terminaison du verbe pour savoir qui parle.",
    "narrative": "Aux bains, des témoins disent avoir vu l’homme avant l’aube.",
    "canDo": [
      "Je repère les personnes du singulier.",
      "Je comprends qui parle dans une déposition.",
      "Je traduis une phrase simple."
    ],
    "lexicon": [
      "balneum = thermes, bains",
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
          "language": "la",
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
    "title": "In foro",
    "subtitle": "Au forum, Subure vide enfin sa colère en plein jour, et les voisins se répondent et s'invectivent face à face au lieu de se mordre par rumeur interposée.",
    "objective": "Identifier nous / vous / ils-elles dans un débat public.",
    "lessonPoint": "Je lis la terminaison du verbe pour savoir quel groupe agit.",
    "narrative": "Au forum, le quartier se retrouve pour confronter toutes les versions de l'histoire de façon publique ; ce qui promet du boucan !",
    "canDo": [
      "Je reconnais les personnes du pluriel.",
      "Je lis un échange collectif.",
      "Je traduis une phrase au présent pluriel."
    ],
    "lexicon": [
      "forum, in foro = le forum, sur le forum",
      "video, vides = je vois, tu vois",
      "audio, audis = j'entends, tu entends",
      "clamo, clamas = je crie, tu cries",
      "respondeo, respondes = je réponds, tu réponds",
      "quaero, quaeris = je cherche, tu cherches",
      "vicini = voisins",
      "mercatores = marchands",
      "puellae = jeunes filles",
      "rumores = rumeurs",
      "verum (neutre) = le vrai, la vérité" 
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
        "prompt": "Mini-texte : « Vicini clamant, mercatores respondent, puellae audiunt. » Quels personnages du quartier échangent leurs points de vue ?",
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
        "id": "p3-l7-p2",
        "type": "textInput",
        "prompt": "Traduis en latin : Sur le forum, les voisins crient.",
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
    "title": "Canis et porta obscura",
    "subtitle": "Niger retourne à la porte louche, gratte le bois, refuse d’entrer, et plus personne n’ose traiter ce manège comme un simple caprice.",
    "objective": "Lire une phrase à ordre variable sans se tromper sur le sens.",
    "lessonPoint": "Le sens dépend des formes et du verbe, pas seulement de la position des mots.",
    "narrative": "Le chien rôde toujours aux alentours de la même porte sombre ; ce n'était qu'une question de temps avant que nos enquêteurs ne s'y intéressent...",
    "canDo": [
      "Je lis des ordres variés.",
      "Je garde le même sens malgré l’ordre.",
      "Je produis une phrase latine correcte."
    ],
    "lexicon": [
      "canis = chien",
      "porta = porte",
      "vir, virum, viri = l'homme",
      "obscura = sombre",
      "ante = devant",
      "ex = hors de",
      "clamo, clamas = je crie, tu cries",
      "exeo, exis = je sors, tu sors",
      "latro, latras = j'aboie, tu aboies",
      "maneo, manes = je reste, tu restes",
      "timeo, times = je crains, tu crains",
      "recuso, recusas = je refuse, tu refuses",
      "intro, intras = j'entre, tu entres",
      "audio, audis = j'entends, tu entends"
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
        "expected": "canis ante portam obscuram manet",
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
  "title": "Sub porticu villae",
  "subtitle": "La fuite mène à une villa illuminée : sous le porche, un homme se cache pendant qu’un avocat célèbre reçoit pour un grand dîner.",
  "objective": "Suivre un déplacement et comprendre vers quel lieu précis mène la fuite.",
  "lessonPoint": "Je repère le verbe, puis je lis d’un bloc le groupe de lieu : per vias, in villam, sub porticu.",
  "narrative": "L’homme court à travers les rues et s’engouffre sous le porche d’une grande villa illuminée. Un avocat célèbre y prépare un grand dîner. Marcus et Livia comprennent que la fuite ne mène pas n’importe où : elle conduit à une maison bien précise.",
  "canDo": [
    "Je suis un déplacement dans une phrase simple.",
    "Je distingue où l’on va et où l’on se cache.",
    "Je relie un nouveau lieu à l’enquête."
  ],
  "lexicon": [
  "vir = l’homme, un homme",
  "via = la rue",
  "villa = la villa, la grande maison",
  "porticus = le porche, le portique",
  "cena = le dîner, le repas",
  "advocatus = l’avocat",
  "magnus, magna, magnum = grand",
  "per + acc. = à travers",
  "in + acc. = dans, vers (mouvement vers un lieu)",
  "sub + abl. = sous (lieu où l'on est)",
  "curro, curris = je cours, tu cours",
  "intro, intras = j'entre, tu entres",
  "lateo, lates = je me cache, tu te caches",
  "paro, paras = je prépare, tu prépares"
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
      "prompt": "Dans « vir sub porticu latet », quel groupe dit où l’homme se cache ?",
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
      "prompt": "Lis : « Vir currit ; sub porticu latet. » Quelle lecture suit bien la scène ?",
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
      "prompt": "Mini-dossier : « Vir per vias currit. In villam intrat. Sub porticu latet. » Coche toutes les étapes de la fuite.",
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
    "l’homme entre dans la villa l’avocat prépare un grand dîner",
    "un homme entre dans la villa l’avocat prépare un grand dîner",
    "l’homme entre dans une villa l’avocat prépare un grand dîner",
    "un homme entre dans une villa l’avocat prépare un grand dîner",
    "l’homme entre dans la grande maison l’avocat prépare un grand dîner",
    "un homme entre dans la grande maison l’avocat prépare un grand dîner",
    "l’homme entre dans une grande maison l’avocat prépare un grand dîner",
    "un homme entre dans une grande maison l’avocat prépare un grand dîner",
    "l’homme entre dans la villa l’avocat prépare le grand dîner",
    "un homme entre dans la villa l’avocat prépare le grand dîner",
    "l’homme entre dans une villa l’avocat prépare le grand dîner",
    "un homme entre dans une villa l’avocat prépare le grand dîner"
  ],
  "answerConfig": {
    "type": "translation-segment",
    "language": "fr",
    "accepted": [
      "l’homme entre dans la villa l’avocat prépare un grand dîner",
      "un homme entre dans la villa l’avocat prépare un grand dîner",
      "l’homme entre dans une villa l’avocat prépare un grand dîner",
      "un homme entre dans une villa l’avocat prépare un grand dîner",
      "l’homme entre dans la grande maison l’avocat prépare un grand dîner",
      "un homme entre dans la grande maison l’avocat prépare un grand dîner",
      "l’homme entre dans une grande maison l’avocat prépare un grand dîner",
      "un homme entre dans une grande maison l’avocat prépare un grand dîner",
      "l’homme entre dans la villa l’avocat prépare le grand dîner",
      "un homme entre dans la villa l’avocat prépare le grand dîner",
      "l’homme entre dans une villa l’avocat prépare le grand dîner",
      "un homme entre dans une villa l’avocat prépare le grand dîner"
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
    "id": "p3-l2",
    "period": 3,
    "periodId": "p3",
    "title": "Lucernae in vico",
    "subtitle": "Chacun pose une lampe devant sa porte ou au carrefour, car Subure veut ouvrir les yeux au lieu de parler dans le noir.",
    "objective": "Comprendre une solution collective formulée en latin simple.",
    "lessonPoint": "Je repère sujet, objet et lieu pour comprendre le plan d’action.",
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
        "id": "p3-l2-t1",
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
        "id": "p3-l10-t2",
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
        "id": "p3-l10-t3",
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
        "id": "p3-l10-t4",
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
        "id": "p3-l10-t5",
        "type": "singleChoice",
        "prompt": "Dans « vicina lucernam ante ianuam ponit », quel mot est le complément d’objet direct ?",
        "options": [
          "vicina",
          "lucernam",
          "ante ianuam",
          "ponit"
        ],
        "expected": "lucernam",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l10-t6",
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
        "id": "p3-l10-t7",
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
        "id": "p3-l10-p1",
        "type": "textInput",
        "prompt": "Traduis : lucerna in via est",
        "expected": "la lampe est dans la rue",
        "acceptedAnswers": [
          "la lampe est dans la rue",
          "une lampe est dans la rue",
          "la lampe se trouve dans la rue",
          "une lampe se trouve dans la rue"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "la lampe est dans la rue",
            "une lampe est dans la rue",
            "la lampe se trouve dans la rue",
            "une lampe se trouve dans la rue"
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
        "id": "p3-l10-p2",
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
        "id": "p3-l10-p3",
        "type": "textInput",
        "prompt": "Traduis : vicini oleum portant et laborant.",
        "expected": "les voisins portent l’huile et travaillent",
        "acceptedAnswers": [
          "les voisins portent l’huile et travaillent",
          "les voisins transportent l’huile et travaillent",
          "les voisins portent l’huile et se mettent au travail",
          "les voisins transportent l’huile et se mettent au travail"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "les voisins portent l’huile et travaillent",
            "les voisins transportent l’huile et travaillent",
            "les voisins portent l’huile et se mettent au travail",
            "les voisins transportent l’huile et se mettent au travail"
          ]
        },
        "points": 1,
        "canonicalAnswer": "les voisins portent l’huile et travaillent",
        "normalization": {
          "trim": true,
          "collapseSpaces": true,
          "ignoreCase": true,
          "ignorePunctuation": true,
          "normalizeApostrophes": true,
          "ignoreDiacritics": true
        },
        "gradingFocus": "Comprendre une action collective concrète et son effort.",
        "rejectIf": [
          "sens inversé",
          "verbe incorrect",
          "réponse hors-sujet"
        ],
        "tests": [
          {
            "input": "les voisins portent l’huile et travaillent",
            "isCorrect": true
          },
          {
            "input": "les voisins regardent l’huile et dorment",
            "isCorrect": false
          }
        ]
      }
    ],
    "summary": {
      "retains": [
        "Je lis une solution collective concrète formulée en latin simple.",
        "Je repère qui apporte, qui pose et qui aide dans la rue."
      ],
      "cahier": [
        "vicina lucernam ante ianuam ponit",
        "Les habitants éclairent le quartier ensemble."
      ],
      "keywords": [
        "solution",
        "lampe",
        "action collective"
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
    "id": "p3-l11",
    "period": 3,
    "periodId": "p3",
    "title": "Vicus noctu clarior est",
    "subtitle": "Sous les lampes restées allumées, la rue change de ton, l’homme ne repasse plus, et le calme revient peu à peu.",
    "objective": "Lire un avant / après du quartier avec le lexique acquis.",
    "lessonPoint": "Je compare avant et après grâce au lexique déjà connu.",
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
        "id": "p3-l11-t1",
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
        "id": "p3-l11-t2",
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
        "id": "p3-l11-t3",
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
        "id": "p3-l11-t4",
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
        "id": "p3-l11-t5",
        "type": "singleChoice",
        "prompt": "Dans « lucerna vicum adiuvat », quel mot reçoit l’aide ?",
        "options": [
          "lucerna",
          "vicum",
          "adiuvat",
          "quietus"
        ],
        "expected": "vicum",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l11-t6",
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
        "id": "p3-l11-t7",
        "type": "multipleChoice",
        "prompt": "Texte : « Lucernae manent. Vicus clarior est. Canis minus latrat. » Quels effets sont visibles ?",
        "options": [
          "les lampes restent allumées",
          "le quartier est plus clair",
          "le chien aboie moins",
          "le marché brûle"
        ],
        "expected": [
          "les lampes restent allumées",
          "le quartier est plus clair",
          "le chien aboie moins"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l11-p1",
        "type": "textInput",
        "prompt": "Traduis : vicus quietus manet",
        "expected": "le quartier reste calme",
        "acceptedAnswers": [
          "le quartier reste calme",
          "le quartier demeure calme"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "le quartier reste calme",
            "le quartier demeure calme"
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
        "id": "p3-l11-p2",
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
        "id": "p3-l11-p3",
        "type": "textInput",
        "prompt": "Traduis : rumor minor est.",
        "expected": "la rumeur est plus faible",
        "acceptedAnswers": [
          "la rumeur est plus faible",
          "la rumeur est moindre",
          "la rumeur diminue"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "la rumeur est plus faible",
            "la rumeur est moindre",
            "la rumeur diminue"
          ]
        },
        "points": 1,
        "canonicalAnswer": "la rumeur est plus faible",
        "normalization": {
          "trim": true,
          "collapseSpaces": true,
          "ignoreCase": true,
          "ignorePunctuation": true,
          "normalizeApostrophes": true,
          "ignoreDiacritics": true
        },
        "gradingFocus": "Comprendre un bilan bref du retour au calme.",
        "rejectIf": [
          "sens inversé",
          "réponse hors-sujet"
        ],
        "tests": [
          {
            "input": "la rumeur diminue",
            "isCorrect": true
          },
          {
            "input": "la rumeur augmente",
            "isCorrect": false
          }
        ]
      }
    ],
    "summary": {
      "retains": [
        "Je lis un avant / après du quartier avec le lexique déjà acquis.",
        "Je comprends que l’éclairage modifie à la fois la rue et les récits."
      ],
      "cahier": [
        "vicus clarior est ; vicus quietus manet",
        "rumor minor est"
      ],
      "keywords": [
        "avant/après",
        "calme",
        "éclairage"
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
    "id": "p3-l12",
    "period": 3,
    "periodId": "p3",
    "title": "Lux concordiam restituit",
    "subtitle": "Quand Subure s’éclaire tout entière, Niger se tait enfin, Marcus relève la tête, et la concorde reprend sa place au milieu des maisons.",
    "objective": "Relire tout le dossier et conclure l’enquête.",
    "lessonPoint": "Je mobilise questions, lieux, formes et verbes pour conclure.",
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
        "id": "p3-l12-t1",
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
        "id": "p3-l12-t2",
        "type": "multipleChoice",
        "prompt": "Quels lieux du quartier ont servi dans l’enquête de P3 ?",
        "options": [
          "forum",
          "macellum",
          "balneum",
          "insula",
          "campus"
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
        "id": "p3-l12-t3",
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
        "id": "p3-l12-t4",
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
        "id": "p3-l12-t5",
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
        "id": "p3-l12-t6",
        "type": "multipleChoice",
        "prompt": "Texte final : « Vir noctu ex insula exibat. Tabella falsa erat. Vicini lucernas ponebant. Pax in vico redit. » Quels éléments montrent que l’enquête s’achève ?",
        "options": [
          "la tablette était falsifiée",
          "les voisins installaient des lampes",
          "la paix revient dans le quartier",
          "l’homme sortait la nuit",
          "le temple brûle"
        ],
        "expected": [
          "la tablette était falsifiée",
          "les voisins installaient des lampes",
          "la paix revient dans le quartier",
          "l’homme sortait la nuit"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p3-l12-t7",
        "type": "singleChoice",
        "prompt": "Dans « vicini lucernam vident », que voient les voisins ?",
        "options": [
          "une lampe",
          "les voisins",
          "la paix",
          "la tablette"
        ],
        "expected": "une lampe",
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p3-l12-p1",
        "type": "textInput",
        "prompt": "Traduis : pax in vico redit",
        "expected": "la paix revient dans le quartier",
        "acceptedAnswers": [
          "la paix revient dans le quartier",
          "la paix revient dans la rue",
          "le calme revient dans le quartier",
          "le calme revient dans la rue"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "la paix revient dans le quartier",
            "la paix revient dans la rue",
            "le calme revient dans le quartier",
            "le calme revient dans la rue"
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
        "gradingFocus": "La localisation in vico doit être comprise.",
        "rejectIf": [
          "lieu oublié",
          "verbe incorrect",
          "réponse hors-sujet"
        ],
        "tests": [
          {
            "input": "la paix revient dans le quartier",
            "isCorrect": true
          },
          {
            "input": "la paix revient",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p3-l12-p2",
        "type": "textInput",
        "prompt": "Traduis en latin : Les voisins voient la lampe.",
        "expected": "vicini lucernam vident",
        "acceptedAnswers": [
          "vicini lucernam vident",
          "vicini vident lucernam",
          "lucernam vicini vident",
          "lucernam vident vicini",
          "vident vicini lucernam",
          "vident lucernam vicini"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "vicini lucernam vident",
            "vicini vident lucernam",
            "lucernam vicini vident",
            "lucernam vident vicini",
            "vident vicini lucernam",
            "vident lucernam vicini"
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
        "id": "p3-l12-p3",
        "type": "textInput",
        "prompt": "Traduis : concordia in Subura redit.",
        "expected": "la concorde revient dans Subure",
        "acceptedAnswers": [
          "la concorde revient dans Subure",
          "la concorde revient à Subure",
          "la concorde revient dans la Subure",
          "la concorde revient à la Subure"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "la concorde revient dans Subure",
            "la concorde revient à Subure",
            "la concorde revient dans la Subure",
            "la concorde revient à la Subure"
          ]
        },
        "points": 1,
        "canonicalAnswer": "la concorde revient dans Subure",
        "normalization": {
          "trim": true,
          "collapseSpaces": true,
          "ignoreCase": true,
          "ignorePunctuation": true,
          "normalizeApostrophes": true,
          "ignoreDiacritics": true
        },
        "gradingFocus": "Conclure la période par une traduction symbolique nette.",
        "rejectIf": [
          "sens inversé",
          "réponse hors-sujet"
        ],
        "tests": [
          {
            "input": "la concorde revient dans Subure",
            "isCorrect": true
          },
          {
            "input": "la discorde revient dans Subure",
            "isCorrect": false
          }
        ]
      }
    ],
    "summary": {
      "retains": [
        "Je sais relire tout le dossier de Subure et en dégager la conclusion.",
        "Je mobilise questions, lieux, formes et présents pour comprendre un mini-dossier."
      ],
      "cahier": [
        "pax in vico redit",
        "concordia in Subura redit",
        "Je recroise les indices avant de conclure."
      ],
      "keywords": [
        "révision finale",
        "pax",
        "concordia"
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
