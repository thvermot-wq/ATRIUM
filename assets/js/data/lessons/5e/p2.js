// Données de leçons 5E · Période 2 — Discordia in Subure.
const headerContexts5eP2 = {
  "p2-l1": "Au pied de l’ara, Marcus examine la place vide de l'offrande, Flavia scrute les visages. L'enquête s'annonce plus compliquée que prévu !",
  "p2-l2": "Un témoin assure avoir vu quelqu’un filer vers le temple puis ressortir d’une boutique ; Lucius décide d'aller sur place pour prendre des renseignements.",
  "p2-l3": "Près de la fontaine, Aurelia parle enfin. Elle montre la porte par où elle a cru voir passer un gaillard plutôt louche, et Flavia ne la quitte pas des yeux.",
  "p2-l4": "Sextus accuse un esclave, l'esclave lui renvoie la balles, et Marcus voit les accusations se croiser dans Subure plus vite que les preuves.",
  "p2-l5": "Livia repère près du temple un gribouillis que personne n’avait voulu voir ; ce n’est pas grand-chose, juste assez pour remettre tout le quartier en mouvement.",
  "p2-l6": "On entend tout et son contraire : un gros chien noir, une porte peinte en vert, du danger partout. Flavia laisse parler, puis commence à faire le tri entre peur et mensonge.",
  "p2-l7": "Devant la porte, les voisins s’entassent, parlent tous plus fort que les autres, et Marcus comprend qu’à Subure une foule peut fabriquer une histoire entière avant même d’avoir compris la première phrase.",
  "p2-l8": "La tablette passe de main en main. Lucius tressaille : quelqu'un a remplacé un nom par un autre ! D’un coup, l’enquête ne porte plus seulement sur le vol, mais sur ce qu’on a voulu faire croire.",
  "p2-l9": "Niger, le petit chien, revient devant la même porte, s’arrête, grogne, refuse d’avancer. Livia finit par faire plus confiance au chien qu’aux habitants de Subure.",
  "p2-l10": "À l’aube, Aurelia plonge son seau dans une eau trouble. Elle se dit que les soupçons ont fini par salir Subure d’une maison à l’autre.",
  "p2-l11": "Quand Marcus prononce enfin le nom de Discordia, personne ne rit. La querelle qui courait de bouche en bouche prend soudain un visage net.",
  "p2-l12": "Le soir retombe sur Subure. Flavia n'arrive pas à s'endormir, Marcus repense à la porte verte, et chacun se demande si la paix va revenir, ou si la maléfique déesse attend juste qu’on baisse la garde."
};

export const lessons5eP2 = [
  {
    "id": "p2-l1",
    "period": 2,
    "periodId": "p2",
    "title": "Quis donum sustulit ?",
    subtitle: headerContexts5eP2["p2-l1"],
    "objective": "Entrer dans l’enquête de Subure et comprendre les questions de base.",
    "lessonPoint": "Je commence par le verbe, puis je demande qui / quoi / où / pourquoi ; l’ordre latin peut changer.",
    "narrative": "Près de l’ara, un donum a disparu. Les voisins se regardent avec méfiance.",
    "canDo": [
      "Je reconnais quis / quid / cur / ubi.",
      "Je repère sujet, verbe et complément.",
      "Je traduis une question courte d’enquête."
    ],
    "lexicon": [
      "quis = qui ?",
      "quid = quoi ?",
      "cur = pourquoi ?",
      "ubi = où ?",
      "donum = offrande, cadeau",
      "ara = autel",
      "vicinus = voisin",
      "videt = il/elle voit",
      "negat = il/elle nie",
      "accusat = il/elle accuse"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p2-l1-t1",
        "type": "singleChoice",
        "prompt": "Quel mot latin signifie « qui ? »",
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
        "id": "p2-l1-t2",
        "type": "matching",
        "prompt": "Associe chaque interrogatif à son sens.",
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
            "left": "cur",
            "right": "pourquoi ?"
          },
          {
            "left": "ubi",
            "right": "où ?"
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
          "cur": "pourquoi ?",
          "ubi": "où ?"
        },
        "points": 1
      },
      {
        "id": "p2-l1-t3",
        "type": "singleChoice",
        "prompt": "« 𝑉𝑖𝑐𝑖𝑛𝑢𝑠 𝑆𝑒𝑥𝑡𝑢𝑚 𝑎𝑐𝑐𝑢𝑠𝑎𝑡 » : qui accuse ?",
        "options": [
          "le voisin",
          "Sextus",
          "l’autel",
          "le chien"
        ],
        "expected": "le voisin",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l1-t4",
        "type": "multipleChoice",
        "prompt": "Choisis les traductions recevables de « 𝑉𝑖𝑐𝑖𝑛𝑢𝑠 𝑆𝑒𝑥𝑡𝑢𝑚 𝑎𝑐𝑐𝑢𝑠𝑎𝑡 ».",
        "options": [
          "Le voisin accuse Sextus",
          "Le voisin met Sextus en cause",
          "Sextus accuse le voisin",
          "Sextus est accusé par le voisin"
        ],
        "expected": [
          "Le voisin accuse Sextus",
          "Le voisin met Sextus en cause",
          "Sextus est accusé par le voisin"
        ],
        "shuffle": true,
        "points": 1
      },
      {
  "id": "p2-l1-t5",
  "type": "singleChoice",
  "prompt": "Dans « 𝑉𝑖𝑐𝑖𝑛𝑢𝑠 𝑎𝑟𝑎𝑚 𝑣𝑖𝑑𝑒𝑡 », quel mot est le complément d’objet direct ?",
  "options": [
    "vicinus",
    "aram",
    "videt"
  ],
  "expected": "aram",
  "points": 1
},
      {
        "id": "p2-l1-t6",
        "type": "singleChoice",
        "prompt": "Repère le verbe dans « 𝐷𝑜𝑛𝑢𝑚 𝑣𝑖𝑐𝑖𝑛𝑢𝑠 𝑣𝑖𝑑𝑒𝑡 ».",
        "options": [
          "donum",
          "vicinus",
          "videt",
          "nullum"
        ],
        "expected": "videt",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l1-t7",
        "type": "multipleChoice",
        "prompt": "Quels mots servent à poser des questions ?",
        "options": [
          "quis",
          "quid",
          "cur",
          "donum"
        ],
        "expected": [
          "quis",
          "quid",
          "cur"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p2-l1-p1",
        "type": "textInput",
        "prompt": "Traduis en français : 𝑞𝑢𝑖𝑠 𝑑𝑜𝑛𝑢𝑚 𝑣𝑖𝑑𝑒𝑡 ?",
        "expected": "qui voit l'offrande ?",
        "acceptedAnswers": [
          "qui voit l'offrande",
          "qui voit le cadeau",
          "qui voit le don",
          "qui aperçoit l'offrande",
          "qui aperçoit le cadeau",
          "qui aperçoit le don"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "qui voit l'offrande",
            "qui voit le cadeau",
            "qui voit le don",
            "qui aperçoit l'offrande",
            "qui aperçoit le cadeau",
            "qui aperçoit le don"
          ]
        },
        "points": 1,
        "canonicalAnswer": "qui voit l'offrande ?",
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
            "input": "qui voit l'offrande ?",
            "isCorrect": true
          },
          {
            "input": "réponse hors-sujet",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p2-l1-p2",
        "type": "textInput",
        "prompt": "Traduis en latin : Le voisin accuse Sextus.",
        "expected": "vicinus Sextum accusat",
        "acceptedAnswers": [
          "vicinus Sextum accusat",
          "vicinus accusat Sextum",
          "Sextum vicinus accusat",
          "Sextum accusat vicinus",
          "accusat vicinus Sextum",
          "accusat Sextum vicinus"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "vicinus Sextum accusat",
            "vicinus accusat Sextum",
            "Sextum vicinus accusat",
            "Sextum accusat vicinus",
            "accusat vicinus Sextum",
            "accusat Sextum vicinus"
          ]
        },
        "points": 1,
        "canonicalAnswer": "vicinus Sextum accusat",
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
            "input": "vicinus Sextum accusat",
            "isCorrect": true
          },
          {
            "input": "lorem ipsum",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p2-l1-p3",
        "type": "textInput",
        "prompt": "Lexique : 𝑣𝑖𝑐𝑖𝑛𝑢𝑠 = ?",
        "expected": "voisin",
        "acceptedAnswers": [
          "voisin"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "voisin"
          ]
        },
        "points": 1,
        "canonicalAnswer": "voisin",
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
            "input": "voisin",
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
        "Je lis d’abord le verbe.",
        "Je me pose les 4 questions de base pour comprendre la scène."
      ],
      "cahier": [
        "quis/quid/cur/ubi",
        "L’ordre latin peut changer sans changer le sens."
      ],
      "keywords": [
        "enquête",
        "interrogatifs",
        "Subure"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p2",
        "discordia",
        "interrogatifs"
      ]
    }
  },
  {
    "id": "p2-l2",
    "period": 2,
    "periodId": "p2",
    "title": "Ubi est donum ? Ad templum, ex taberna",
    subtitle: headerContexts5eP2["p2-l2"],
    "objective": "Suivre les déplacements suspects dans le quartier.",
    "lessonPoint": "Les prépositions donnent le mouvement : ad vers, in dans, ex hors de, ante devant.",
    "narrative": "Un témoin dit avoir vu quelqu’un courir ad templum puis ex taberna.",
    "canDo": [
      "Je lis ad/in/ex/ante.",
      "Je localise une action.",
      "Je traduis un petit trajet."
    ],
    "lexicon": [
      "ad = vers",
      "in = dans",
      "ex = hors de, depuis",
      "ante = devant",
      "templum = temple",
      "taberna = boutique",
      "via = rue",
      "fons = fontaine",
      "venit = il/elle vient",
      "exit = il/elle sort"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p2-l2-t1",
        "type": "singleChoice",
        "prompt": "𝑎𝑑 signifie…",
        "options": [
          "vers",
          "dans",
          "hors de",
          "devant"
        ],
        "expected": "vers",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l2-t2",
        "type": "matching",
        "prompt": "Associe la préposition et le sens.",
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
            "right": "depuis"
          },
          {
            "left": "ante",
            "right": "devant"
          }
        ],
        "rightOptions": [
          "dans",
          "depuis",
          "vers",
          "devant"
        ],
        "expected": {
          "ad": "vers",
          "in": "dans",
          "ex": "depuis",
          "ante": "devant"
        },
        "points": 1
      },
      {
        "id": "p2-l2-t3",
        "type": "singleChoice",
        "prompt": "« 𝑆𝑒𝑟𝑣𝑢𝑠 𝑎𝑑 𝑡𝑒𝑚𝑝𝑙𝑢𝑚 𝑣𝑒𝑛𝑖𝑡 » : où va le serviteur ?",
        "options": [
          "vers le temple",
          "dans la boutique",
          "hors de la rue",
          "devant la fontaine"
        ],
        "expected": "vers le temple",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l2-t4",
        "type": "singleChoice",
        "prompt": "« 𝐸𝑥 𝑡𝑎𝑏𝑒𝑟𝑛𝑎 𝑠𝑒𝑟𝑣𝑎 𝑐𝑢𝑟𝑟𝑖𝑡 » : la servante…",
        "options": [
          "sort de la boutique",
          "entre dans la boutique",
          "reste devant la boutique",
          "va au temple"
        ],
        "expected": "sort de la boutique",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l2-t5",
        "type": "ordering",
        "prompt": "Traduis en suivant l'ordre de la phrase française : Le voisin est devant la porte.",
        "options": [
          "ante",
          "vicinus",
          "ianuam",
          "stat"
        ],
        "expected": [
          "vicinus",
          "stat",
          "ante",
          "ianuam"
        ],
        "points": 1
      },
      {
        "id": "p2-l2-t6",
        "type": "multipleChoice",
        "prompt": "Traductions possibles de « 𝐴𝑛𝑡𝑒 𝑖𝑎𝑛𝑢𝑎𝑚 𝑐𝑎𝑛𝑖𝑠 𝑠𝑡𝑎𝑡 ».",
        "options": [
          "Le chien est devant la porte",
          "Le chien se tient devant la porte",
          "La porte est devant le chien",
          "Le chien entre par la porte"
        ],
        "expected": [
          "Le chien est devant la porte",
          "Le chien se tient devant la porte"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l2-t7",
        "type": "multipleChoice",
        "prompt": "Mini-texte : « 𝐹𝑒𝑚𝑖𝑛𝑎 𝑖𝑛 𝑣𝑖𝑎 𝑒𝑠𝑡. 𝑆𝑒𝑟𝑣𝑢𝑠 𝑎𝑑 𝑓𝑜𝑛𝑡𝑒𝑚 𝑣𝑒𝑛𝑖𝑡. » Quels sont les lieux ?",
        "options": [
          "via",
          "fons",
          "tabella",
          "donum"
        ],
        "expected": [
          "via",
          "fons"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p2-l2-p1",
        "type": "textInput",
        "prompt": "Traduis : 𝑓𝑒𝑚𝑖𝑛𝑎 𝑖𝑛 𝑣𝑖𝑎 𝑎𝑚𝑏𝑢𝑙𝑎𝑡",
        "expected": "la femme marche dans la rue",
        "acceptedAnswers": [
          "la femme marche dans la rue",
          "une femme marche dans la rue",
          "la dame marche dans la rue",
          "une dame marche dans la rue",
          "la femme se promène dans la rue",
          "une femme se promène dans la rue",
          "la dame se promène dans la rue",
          "une dame se promène dans la rue"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "la femme marche dans la rue",
            "une femme marche dans la rue",
            "la dame marche dans la rue",
            "une dame marche dans la rue",
            "la femme se promène dans la rue",
            "une femme se promène dans la rue",
            "la dame se promène dans la rue",
            "une dame se promène dans la rue"
          ]
        },
        "points": 1,
        "canonicalAnswer": "la femme marche dans la rue",
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
            "input": "la femme marche dans la rue",
            "isCorrect": true
          },
          {
            "input": "réponse hors-sujet",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p2-l2-p2",
        "type": "textInput",
        "prompt": "Traduis en latin : Le serviteur sort de la boutique.",
        "expected": "servus ex taberna exit",
        "acceptedAnswers": [
          "servus ex taberna exit",
          "servus exit ex taberna",
          "ex taberna servus exit",
          "ex taberna exit servus",
          "exit servus ex taberna",
          "exit ex taberna servus"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "servus ex taberna exit",
            "servus exit ex taberna",
            "ex taberna servus exit",
            "ex taberna exit servus",
            "exit servus ex taberna",
            "exit ex taberna servus"
          ]
        },
        "points": 1,
        "canonicalAnswer": "servus ex taberna exit",
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
            "input": "servus ex taberna exit",
            "isCorrect": true
          },
          {
            "input": "lorem ipsum",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p2-l2-p3",
        "type": "textInput",
        "prompt": "Complète : 𝑎𝑑 = … ; 𝑒𝑥 = …",
        "expected": "vers ; hors de",
        "acceptedAnswers": [
          "vers ; hors de",
          "vers ; depuis",
          "vers et hors de"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "vers ; hors de",
            "vers ; depuis",
            "vers et hors de"
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
        "Je suis un trajet avec les prépositions.",
        "Je vérifie le verbe de mouvement."
      ],
      "cahier": [
        "ad/in/ex/ante",
        "Dans l’enquête, les déplacements comptent."
      ],
      "keywords": [
        "lieu",
        "mouvement",
        "témoins"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p2",
        "prepositions",
        "discordia"
      ]
    }
  },
  {
    "id": "p2-l3",
    "period": 2,
    "periodId": "p2",
    "title": "Testis prima ad fontem",
    subtitle: headerContexts5eP2["p2-l3"],
    "objective": "Lire la première déposition d’une témoin.",
    "lessonPoint": "En 1re déclinaison, -a est souvent le sujet, -am souvent le complément objet.",
    "narrative": "Près du fons, une femina raconte ce qu’elle a vu avant le tumulte.",
    "canDo": [
      "Je reconnais -a / -am.",
      "Je repère l’objet d’une action.",
      "Je traduis un court témoignage."
    ],
    "lexicon": [
      "femina = femme",
      "amica = amie",
      "taberna = boutique",
      "via = rue",
      "porta = porte",
      "aquam = l’eau",
      "fontem = la fontaine",
      "portat = il/elle porte",
      "spectat = il/elle regarde",
      "narrat = il/elle raconte"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p2-l3-t1",
        "type": "singleChoice",
        "prompt": "Quel mot appartient à la 1re déclinaison ?",
        "options": [
          "femina",
          "dominus",
          "donum",
          "servus"
        ],
        "expected": "femina",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l3-t2",
        "type": "matching",
        "prompt": "Associe mot et traduction.",
        "pairs": [
          {
            "left": "femina",
            "right": "femme"
          },
          {
            "left": "amica",
            "right": "amie"
          },
          {
            "left": "taberna",
            "right": "boutique"
          },
          {
            "left": "via",
            "right": "rue"
          }
        ],
        "rightOptions": [
          "rue",
          "femme",
          "boutique",
          "amie"
        ],
        "expected": {
          "femina": "femme",
          "amica": "amie",
          "taberna": "boutique",
          "via": "rue"
        },
        "points": 1
      },
      {
        "id": "p2-l3-t3",
        "type": "singleChoice",
        "prompt": "Dans « 𝐹𝑒𝑚𝑖𝑛𝑎 𝑎𝑞𝑢𝑎𝑚 𝑝𝑜𝑟𝑡𝑎𝑡 », quel est l’objet ?",
        "options": [
          "femina",
          "aquam",
          "portat",
          "nullus"
        ],
        "expected": "aquam",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l3-t4",
        "type": "singleChoice",
        "prompt": "Quelle terminaison montre souvent le complément objet en 1re déclinaison ?",
        "options": [
          "-am",
          "-a",
          "-um",
          "-us"
        ],
        "expected": "-am",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l3-t5",
        "type": "ordering",
        "prompt": "Remets dans l’ordre de base : 𝑓𝑒𝑚𝑖𝑛𝑎 / 𝑎𝑞𝑢𝑎𝑚 / 𝑝𝑜𝑟𝑡𝑎𝑡",
        "options": [
          "femina",
          "aquam",
          "portat"
        ],
        "expected": [
          "femina",
          "aquam",
          "portat"
        ],
        "points": 1
      },
      {
        "id": "p2-l3-t6",
        "type": "multipleChoice",
        "prompt": "Traductions recevables de « 𝐴𝑚𝑖𝑐𝑎 𝑎𝑑 𝑡𝑎𝑏𝑒𝑟𝑛𝑎𝑚 𝑎𝑚𝑏𝑢𝑙𝑎𝑡 ».",
        "options": [
          "L’amie marche vers la boutique",
          "L’amie va à la boutique",
          "La boutique marche vers l’amie",
          "L’amie entre dans l’autel"
        ],
        "expected": [
          "L’amie marche vers la boutique",
          "L’amie va à la boutique"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l3-t7",
        "type": "multipleChoice",
        "prompt": "Mini-texte : « 𝐹𝑒𝑚𝑖𝑛𝑎 𝑎𝑑 𝑓𝑜𝑛𝑡𝑒𝑚 𝑠𝑡𝑎𝑡. 𝐴𝑚𝑖𝑐𝑎 𝑝𝑜𝑟𝑡𝑎𝑚 𝑠𝑝𝑒𝑐𝑡𝑎𝑡. » Qui est témoin et que voit-elle ?",
        "options": [
          "La femme est témoin",
          "L’amie regarde la porte",
          "Le maître crie",
          "Le chien sort"
        ],
        "expected": [
          "La femme est témoin",
          "L’amie regarde la porte"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p2-l3-p1",
        "type": "textInput",
        "prompt": "Traduis : 𝑓𝑒𝑚𝑖𝑛𝑎 𝑝𝑜𝑟𝑡𝑎𝑚 𝑠𝑝𝑒𝑐𝑡𝑎𝑡",
        "expected": "la femme regarde la porte",
        "acceptedAnswers": [
          "la femme regarde la porte",
          "une femme regarde la porte",
          "la dame regarde la porte",
          "une dame regarde la porte",
          "la femme observe la porte",
          "une femme observe la porte",
          "la dame observe la porte",
          "une dame observe la porte"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "la femme regarde la porte",
            "une femme regarde la porte",
            "la dame regarde la porte",
            "une dame regarde la porte",
            "la femme observe la porte",
            "une femme observe la porte",
            "la dame observe la porte",
            "une dame observe la porte"
          ]
        },
        "points": 1,
        "canonicalAnswer": "la femme regarde la porte",
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
            "input": "la femme regarde la porte",
            "isCorrect": true
          },
          {
            "input": "réponse hors-sujet",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p2-l3-p2",
        "type": "textInput",
        "prompt": "Traduis en latin : L’amie regarde la rue.",
        "expected": "amica viam spectat",
        "acceptedAnswers": [
          "amica viam spectat",
          "amica spectat viam",
          "viam amica spectat",
          "viam spectat amica",
          "spectat amica viam",
          "spectat viam amica"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "amica viam spectat",
            "amica spectat viam",
            "viam amica spectat",
            "viam spectat amica",
            "spectat amica viam",
            "spectat viam amica"
          ]
        },
        "points": 1,
        "canonicalAnswer": "amica viam spectat",
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
            "input": "amica viam spectat",
            "isCorrect": true
          },
          {
            "input": "lorem ipsum",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p2-l3-p3",
        "type": "textInput",
        "prompt": "Rappel grammaire : -a = … ; -am = …",
        "expected": "sujet ; complément objet",
        "acceptedAnswers": [
          "sujet ; complément objet",
          "sujet ; objet",
          "forme de base ; objet",
          "nominatif ; accusatif"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "sujet ; complément objet",
            "sujet ; objet",
            "forme de base ; objet",
            "nominatif ; accusatif"
          ]
        },
        "points": 1,
        "canonicalAnswer": "sujet ; complément objet",
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
            "input": "sujet ; complément objet",
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
        "Je reconnais -a et -am dans une scène simple.",
        "Je relie forme et fonction."
      ],
      "cahier": [
        "femina/amicam",
        "-a sujet fréquent, -am objet fréquent"
      ],
      "keywords": [
        "1re déclinaison",
        "témoignage",
        "fontaine"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p2",
        "declinaison1",
        "discordia"
      ]
    }
  },
  {
    "id": "p2-l4",
    "period": 2,
    "periodId": "p2",
    "title": "Servus, dominus, vicinus",
    subtitle: headerContexts5eP2["p2-l4"],
    "objective": "Distinguer sujet et objet avec les masculins en -us/-um.",
    "lessonPoint": "Je regarde les formes : -us (souvent sujet), -um (souvent complément objet).",
    "narrative": "Les voisins se disputent : dominus accuse servum, puis le contraire est affirmé.",
    "canDo": [
      "Je reconnais des masculins de 2e déclinaison.",
      "Je distingue qui agit et qui subit.",
      "Je traduis une phrase d’accusation."
    ],
    "lexicon": [
      "servus = esclave, serviteur",
      "dominus = maître, maître de maison",
      "vicinus = voisin",
      "amicus = ami",
      "murus = mur",
      "canis = chien",
      "audit = il/elle entend",
      "accusat = il/elle accuse",
      "vocat = il/elle appelle",
      "timet = il/elle craint"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p2-l4-t1",
        "type": "singleChoice",
        "prompt": "Quel nom est de 2e déclinaison masculine ?",
        "options": [
          "servus",
          "taberna",
          "aqua",
          "porta"
        ],
        "expected": "servus",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l4-t2",
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
          "ami",
          "voisin",
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
        "id": "p2-l4-t3",
        "type": "singleChoice",
        "prompt": "« 𝐷𝑜𝑚𝑖𝑛𝑢𝑠 𝑠𝑒𝑟𝑣𝑢𝑚 𝑣𝑜𝑐𝑎𝑡 » : qui appelle ?",
        "options": [
          "le maître",
          "le serviteur",
          "le voisin",
          "le chien"
        ],
        "expected": "le maître",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l4-t4",
        "type": "singleChoice",
        "prompt": "« 𝑆𝑒𝑟𝑣𝑢𝑚 𝑑𝑜𝑚𝑖𝑛𝑢𝑠 𝑎𝑐𝑐𝑢𝑠𝑎𝑡 » : qui est accusé ?",
        "options": [
          "le serviteur",
          "le maître",
          "le voisin",
          "l’ami"
        ],
        "expected": "le serviteur",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l4-t5",
        "type": "multipleChoice",
        "prompt": "Traductions recevables : « 𝐴𝑚𝑖𝑐𝑢𝑠 𝑣𝑖𝑐𝑖𝑛𝑢𝑚 𝑎𝑢𝑑𝑖𝑡 ».",
        "options": [
          "L’ami entend le voisin",
          "L’ami écoute le voisin",
          "Le voisin entend l’ami",
          "L’ami appelle le voisin"
        ],
        "expected": [
          "L’ami entend le voisin",
          "L’ami écoute le voisin"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l4-t6",
        "type": "ordering",
        "prompt": "Compose dans l’ordre de base : le maître accuse le voisin.",
        "options": [
          "dominus",
          "vicinum",
          "accusat"
        ],
        "expected": [
          "dominus",
          "vicinum",
          "accusat"
        ],
        "points": 1
      },
      {
        "id": "p2-l4-t7",
        "type": "multipleChoice",
        "prompt": "Mini-texte : « 𝑆𝑒𝑟𝑣𝑢𝑠 𝑐𝑎𝑛𝑒𝑚 𝑡𝑖𝑚𝑒𝑡. 𝐷𝑜𝑚𝑖𝑛𝑢𝑠 𝑠𝑒𝑟𝑣𝑢𝑚 𝑣𝑜𝑐𝑎𝑡. » Que comprend-on ?",
        "options": [
          "Le serviteur craint le chien",
          "Le maître appelle le serviteur",
          "Le chien appelle le maître",
          "Le voisin rit"
        ],
        "expected": [
          "Le serviteur craint le chien",
          "Le maître appelle le serviteur"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p2-l4-p1",
        "type": "textInput",
        "prompt": "Traduis : 𝑣𝑖𝑐𝑖𝑛𝑢𝑠 𝑠𝑒𝑟𝑣𝑢𝑚 𝑎𝑐𝑐𝑢𝑠𝑎𝑡",
        "expected": "le voisin accuse le serviteur",
        "acceptedAnswers": [
          "le voisin accuse le serviteur",
          "le voisin accuse l'esclave",
          "le voisin met en cause le serviteur",
          "le voisin met en cause l'esclave"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "le voisin accuse le serviteur",
            "le voisin accuse l'esclave",
            "le voisin met en cause le serviteur",
            "le voisin met en cause l'esclave"
          ]
        },
        "points": 1,
        "canonicalAnswer": "le voisin accuse le serviteur",
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
            "input": "le voisin accuse le serviteur",
            "isCorrect": true
          },
          {
            "input": "réponse hors-sujet",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p2-l4-p2",
        "type": "textInput",
        "prompt": "Traduis en latin : Le maître appelle le voisin.",
        "expected": "dominus vicinum vocat",
        "acceptedAnswers": [
          "dominus vicinum vocat",
          "dominus vocat vicinum",
          "vicinum dominus vocat",
          "vicinum vocat dominus",
          "vocat dominus vicinum",
          "vocat vicinum dominus"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "dominus vicinum vocat",
            "dominus vocat vicinum",
            "vicinum dominus vocat",
            "vicinum vocat dominus",
            "vocat dominus vicinum",
            "vocat vicinum dominus"
          ]
        },
        "points": 1,
        "canonicalAnswer": "dominus vicinum vocat",
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
            "input": "dominus vicinum vocat",
            "isCorrect": true
          },
          {
            "input": "lorem ipsum",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p2-l4-p3",
        "type": "textInput",
        "prompt": "Lexique : 𝑑𝑜𝑚𝑖𝑛𝑢𝑠 peut vouloir dire…",
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
        "Je lis -us / -um pour éviter les inversions.",
        "Je vérifie qui fait l’action."
      ],
      "cahier": [
        "servus/servum",
        "dominus/dominum"
      ],
      "keywords": [
        "2e déclinaison",
        "accusation",
        "voisins"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p2",
        "declinaison2-m",
        "discordia"
      ]
    }
  },
  {
    "id": "p2-l5",
    "period": 2,
    "periodId": "p2",
    "title": "Donum, signum, periculum",
    subtitle: headerContexts5eP2["p2-l5"],
    "objective": "Comprendre le neutre singulier dans les indices de l’enquête.",
    "lessonPoint": "Au neutre singulier, nominatif et accusatif ont la même forme.",
    "narrative": "On découvre un signum étrange près du templum : periculum ou simple hasard ?",
    "canDo": [
      "Je reconnais des neutres en -um.",
      "Je comprends la règle nominatif = accusatif.",
      "Je traduis des phrases d’indices."
    ],
    "lexicon": [
      "donum = offrande, cadeau",
      "signum = signe, marque, indice",
      "templum = temple",
      "periculum = danger",
      "verbum = mot",
      "malum = mal, mauvaise chose",
      "videt = il/elle voit",
      "habet = il/elle a",
      "celat = il/elle cache",
      "invenit = il/elle trouve"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p2-l5-t1",
        "type": "singleChoice",
        "prompt": "Quel mot est neutre ?",
        "options": [
          "donum",
          "dominus",
          "femina",
          "servus"
        ],
        "expected": "donum",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l5-t2",
        "type": "matching",
        "prompt": "Associe chaque neutre à son sens.",
        "pairs": [
          {
            "left": "donum",
            "right": "offrande"
          },
          {
            "left": "signum",
            "right": "indice"
          },
          {
            "left": "templum",
            "right": "temple"
          },
          {
            "left": "periculum",
            "right": "danger"
          }
        ],
        "rightOptions": [
          "danger",
          "temple",
          "offrande",
          "indice"
        ],
        "expected": {
          "donum": "offrande",
          "signum": "indice",
          "templum": "temple",
          "periculum": "danger"
        },
        "points": 1
      },
      {
        "id": "p2-l5-t3",
        "type": "singleChoice",
        "prompt": "« 𝑆𝑖𝑔𝑛𝑢𝑚 𝑑𝑜𝑚𝑖𝑛𝑢𝑠 𝑣𝑖𝑑𝑒𝑡 » : que voit le maître ?",
        "options": [
          "le signe",
          "le maître",
          "la boutique",
          "le voisin"
        ],
        "expected": "le signe",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l5-t4",
        "type": "singleChoice",
        "prompt": "Au neutre singulier, que remarques-tu ?",
        "options": [
          "nominatif = accusatif",
          "le mot finit toujours en -a",
          "le verbe disparaît",
          "ordre fixe"
        ],
        "expected": "nominatif = accusatif",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l5-t5",
        "type": "multipleChoice",
        "prompt": "Traductions recevables : « 𝑇𝑒𝑚𝑝𝑙𝑢𝑚 𝑚𝑎𝑙𝑢𝑚 𝑐𝑒𝑙𝑎𝑡 ».",
        "options": [
          "Le temple cache un mal",
          "Le temple cache une mauvaise chose",
          "Le mal cache le temple",
          "Le temple porte un cadeau"
        ],
        "expected": [
          "Le temple cache un mal",
          "Le temple cache une mauvaise chose"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l5-t6",
        "type": "ordering",
        "prompt": "Ordonne dans l’ordre de base : 𝑑𝑜𝑛𝑢𝑚 / 𝑣𝑖𝑐𝑖𝑛𝑢𝑠 / 𝑖𝑛𝑣𝑒𝑛𝑖𝑡",
        "options": [
          "vicinus",
          "donum",
          "invenit"
        ],
        "expected": [
          "vicinus",
          "donum",
          "invenit"
        ],
        "points": 1
      },
      {
        "id": "p2-l5-t7",
        "type": "multipleChoice",
        "prompt": "Mini-texte : « 𝐷𝑜𝑛𝑢𝑚 𝑖𝑛 𝑡𝑒𝑚𝑝𝑙𝑜 𝑒𝑠𝑡. 𝑆𝑖𝑔𝑛𝑢𝑚 𝑖𝑛 𝑚𝑢𝑟𝑜 𝑒𝑠𝑡. » Quels neutres lis-tu ?",
        "options": [
          "donum",
          "signum",
          "murus",
          "femina"
        ],
        "expected": [
          "donum",
          "signum"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p2-l5-p1",
        "type": "textInput",
        "prompt": "Traduis : 𝑑𝑜𝑛𝑢𝑚 𝑖𝑛 𝑡𝑒𝑚𝑝𝑙𝑜 𝑒𝑠𝑡",
        "expected": "l'offrande est dans le temple",
        "acceptedAnswers": [
          "l'offrande est dans le temple",
          "le cadeau est dans le temple",
          "le don est dans le temple",
          "l'offrande se trouve dans le temple",
          "le cadeau se trouve dans le temple",
          "le don se trouve dans le temple"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "l'offrande est dans le temple",
            "le cadeau est dans le temple",
            "le don est dans le temple",
            "l'offrande se trouve dans le temple",
            "le cadeau se trouve dans le temple",
            "le don se trouve dans le temple"
          ]
        },
        "points": 1,
        "canonicalAnswer": "l'offrande est dans le temple",
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
            "input": "l'offrande est dans le temple",
            "isCorrect": true
          },
          {
            "input": "réponse hors-sujet",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p2-l5-p2",
        "type": "textInput",
        "prompt": "Traduis en latin : Le voisin trouve le signe.",
        "expected": "vicinus signum invenit",
        "acceptedAnswers": [
          "vicinus signum invenit",
          "vicinus invenit signum",
          "signum vicinus invenit",
          "signum invenit vicinus",
          "invenit vicinus signum",
          "invenit signum vicinus"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "vicinus signum invenit",
            "vicinus invenit signum",
            "signum vicinus invenit",
            "signum invenit vicinus",
            "invenit vicinus signum",
            "invenit signum vicinus"
          ]
        },
        "points": 1,
        "canonicalAnswer": "vicinus signum invenit",
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
            "input": "vicinus signum invenit",
            "isCorrect": true
          },
          {
            "input": "lorem ipsum",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p2-l5-p3",
        "type": "textInput",
        "prompt": "Règle courte : au neutre singulier, nominatif et accusatif sont…",
        "expected": "identiques",
        "acceptedAnswers": [
          "identiques",
          "pareils",
          "semblables",
          "les mêmes"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "identiques",
            "pareils",
            "semblables",
            "les mêmes"
          ]
        },
        "points": 1,
        "canonicalAnswer": "identiques",
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
            "input": "identiques",
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
        "Je reconnais les neutres utiles dans l’enquête.",
        "Je retiens la règle nominatif = accusatif au neutre."
      ],
      "cahier": [
        "donum/signum/templum",
        "Neutre : même forme sujet/objet"
      ],
      "keywords": [
        "neutre",
        "indices",
        "templum"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p2",
        "declinaison2-n",
        "discordia"
      ]
    }
  },
  {
    "id": "p2-l6",
    "period": 2,
    "periodId": "p2",
    "title": "Video, audio, accuso",
    subtitle: headerContexts5eP2["p2-l6"],
    "objective": "Comprendre le présent singulier dans les témoignages.",
    "lessonPoint": "Au présent : -o (je), -s (tu), -t (il/elle).",
    "narrative": "Chacun parle : « video », « Nego », « audis ». Les versions s’opposent.",
    "canDo": [
      "Je reconnais je/tu/il-elle au présent.",
      "Je repère qui parle dans un témoignage.",
      "Je traduis une phrase de déposition."
    ],
    "lexicon": [
      "video = je vois",
      "audis = tu entends",
      "accusat = il/elle accuse",
      "nego = je nie",
      "times = tu crains",
      "portat = il/elle porte",
      "clamo = je crie",
      "rogas = tu demandes",
      "narrat = il/elle raconte",
      "habito = j’habite"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p2-l6-t1",
        "type": "singleChoice",
        "prompt": "Quelle forme est à la 1re personne ?",
        "options": [
          "video",
          "audis",
          "accusat",
          "rogas"
        ],
        "expected": "video",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l6-t2",
        "type": "matching",
        "prompt": "Associe la terminaison et la personne.",
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
          "il/elle",
          "je",
          "tu"
        ],
        "expected": {
          "-o": "je",
          "-s": "tu",
          "-t": "il/elle"
        },
        "points": 1
      },
      {
        "id": "p2-l6-t3",
        "type": "singleChoice",
        "prompt": "« 𝑁𝑒𝑔𝑜 » signifie…",
        "options": [
          "je nie",
          "tu nies",
          "il nie",
          "nous nions"
        ],
        "expected": "je nie",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l6-t4",
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
        "id": "p2-l6-t5",
        "type": "multipleChoice",
        "prompt": "Sélectionne les formes de 1re personne.",
        "options": [
          "video",
          "nego",
          "clamo",
          "audis"
        ],
        "expected": [
          "video",
          "nego",
          "clamo"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l6-t6",
        "type": "singleChoice",
        "prompt": "Mini-témoignage : « 𝐻𝑎𝑏𝑖𝑡𝑜 𝑖𝑛 𝑣𝑖𝑎. 𝑁𝑒𝑔𝑜 𝑝𝑒𝑟𝑖𝑐𝑢𝑙𝑢𝑚. » Qui parle ?",
        "options": [
          "je",
          "tu",
          "il/elle",
          "ils"
        ],
        "expected": "je",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l6-t7",
        "type": "ordering",
        "prompt": "Place le verbe en fin dans l’ordre de base : je crie dans la rue.",
        "options": [
          "ego",
          "in",
          "via",
          "clamo"
        ],
        "expected": [
          "ego",
          "in",
          "via",
          "clamo"
        ],
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p2-l6-p1",
        "type": "textInput",
        "prompt": "Traduis : 𝑎𝑢𝑑𝑖𝑜 𝑐𝑎𝑛𝑒𝑚",
        "expected": "j'entends le chien",
        "acceptedAnswers": [
          "j'entends le chien",
          "j'écoute le chien"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "j'entends le chien",
            "j'écoute le chien"
          ]
        },
        "points": 1,
        "canonicalAnswer": "j'entends le chien",
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
            "input": "j'entends le chien",
            "isCorrect": true
          },
          {
            "input": "réponse hors-sujet",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p2-l6-p2",
        "type": "textInput",
        "prompt": "Traduis en latin : Je nie le danger.",
        "expected": "nego periculum",
        "acceptedAnswers": [
          "nego periculum",
          "periculum nego"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "nego periculum",
            "periculum nego"
          ]
        },
        "points": 1,
        "canonicalAnswer": "nego periculum",
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
            "input": "nego periculum",
            "isCorrect": true
          },
          {
            "input": "lorem ipsum",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p2-l6-p3",
        "type": "textInput",
        "prompt": "Complète : -o / -s / -t = …",
        "expected": "je / tu / il-elle",
        "acceptedAnswers": [
          "je / tu / il-elle",
          "je-tu-il",
          "1re 2e 3e personne singulier",
          "première deuxième troisième personne du singulier",
          "1re 2e 3e personne du singulier"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "je / tu / il-elle",
            "je-tu-il",
            "1re 2e 3e personne singulier",
            "première deuxième troisième personne du singulier",
            "1re 2e 3e personne du singulier"
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
        "Je lis la personne grâce à la terminaison.",
        "Les témoignages changent selon qui parle."
      ],
      "cahier": [
        "Présent singulier : -o / -s / -t",
        "1re conjugaison (repère) : -o / -as / -at / -amus / -atis / -ant"
      ],
      "keywords": [
        "présent",
        "témoignage",
        "personnes"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p2",
        "present-singulier",
        "discordia"
      ]
    }
  },
  {
    "id": "p2-l7",
    "period": 2,
    "periodId": "p2",
    "title": "Videmus, auditis, clamant",
    subtitle: headerContexts5eP2["p2-l7"],
    "objective": "Lire les formes du présent pluriel dans une rumeur collective.",
    "lessonPoint": "Au pluriel : -mus (nous), -tis (vous), -nt (ils/elles).",
    "narrative": "Le quartier entier parle : certains crient, d’autres répondent, la rumeur enfle.",
    "canDo": [
      "Je reconnais les personnes du pluriel.",
      "Je comprends qui parle au nom du groupe.",
      "Je traduis des phrases collectives."
    ],
    "lexicon": [
      "videmus = nous voyons",
      "auditis = vous entendez",
      "clamant = ils/elles crient",
      "habitant = ils/elles habitent",
      "portant = ils/elles portent",
      "intrant = ils/elles entrent",
      "currunt = ils/elles courent",
      "quaerimus = nous cherchons",
      "rogatis = vous demandez",
      "respondent = ils/elles répondent"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p2-l7-t1",
        "type": "singleChoice",
        "prompt": "Quel mot signifie « nous voyons » ?",
        "options": [
          "videmus",
          "videt",
          "vides",
          "video"
        ],
        "expected": "videmus",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l7-t2",
        "type": "matching",
        "prompt": "Associe la terminaison et la personne plurielle.",
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
          "vous",
          "ils/elles",
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
        "id": "p2-l7-t3",
        "type": "singleChoice",
        "prompt": "« 𝑉𝑖𝑐𝑖𝑛𝑖 𝑐𝑙𝑎𝑚𝑎𝑛𝑡 » : qui crie ?",
        "options": [
          "les voisins",
          "le voisin",
          "la voisine",
          "le chien"
        ],
        "expected": "les voisins",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l7-t4",
        "type": "singleChoice",
        "prompt": "« 𝑅𝑜𝑔𝑎𝑡𝑖𝑠 » correspond à…",
        "options": [
          "vous demandez",
          "nous demandons",
          "ils demandent",
          "tu demandes"
        ],
        "expected": "vous demandez",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l7-t5",
        "type": "multipleChoice",
        "prompt": "Choisis les formes au pluriel.",
        "options": [
          "videmus",
          "auditis",
          "clamant",
          "accusat"
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
        "id": "p2-l7-t6",
        "type": "multipleChoice",
        "prompt": "Mini-texte : « 𝑄𝑢𝑎𝑒𝑟𝑖𝑚𝑢𝑠 𝑑𝑜𝑛𝑢𝑚. 𝑅𝑜𝑔𝑎𝑡𝑖𝑠 𝑡𝑒𝑠𝑡𝑒𝑚. 𝑉𝑖𝑐𝑖𝑛𝑖 𝑟𝑒𝑠𝑝𝑜𝑛𝑑𝑒𝑛𝑡. » Qui parle collectivement ?",
        "options": [
          "nous",
          "vous",
          "les voisins",
          "un seul témoin"
        ],
        "expected": [
          "nous",
          "vous",
          "les voisins"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l7-t7",
        "type": "ordering",
        "prompt": "Remets dans l’ordre de base : 𝑖𝑛 𝑣𝑖𝑎 / 𝑐𝑙𝑎𝑚𝑎𝑛𝑡 / 𝑣𝑖𝑐𝑖𝑛𝑖",
        "options": [
          "in",
          "via",
          "vicini",
          "clamant"
        ],
        "expected": [
          "in",
          "via",
          "vicini",
          "clamant"
        ],
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p2-l7-p1",
        "type": "textInput",
        "prompt": "Traduis : 𝑑𝑜𝑛𝑢𝑚 𝑞𝑢𝑎𝑒𝑟𝑖𝑚𝑢𝑠",
        "expected": "nous cherchons l'offrande",
        "acceptedAnswers": [
          "nous cherchons l'offrande",
          "nous cherchons le cadeau",
          "nous cherchons le don",
          "nous recherchons l'offrande",
          "nous recherchons le cadeau",
          "nous recherchons le don"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "nous cherchons l'offrande",
            "nous cherchons le cadeau",
            "nous cherchons le don",
            "nous recherchons l'offrande",
            "nous recherchons le cadeau",
            "nous recherchons le don"
          ]
        },
        "points": 1,
        "canonicalAnswer": "nous cherchons l'offrande",
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
            "input": "nous cherchons l'offrande",
            "isCorrect": true
          },
          {
            "input": "réponse hors-sujet",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p2-l7-p2",
        "type": "textInput",
        "prompt": "Traduis en latin : Les voisins crient devant la porte.",
        "expected": "vicini ante ianuam clamant",
        "acceptedAnswers": [
          "vicini ante ianuam clamant",
          "vicini clamant ante ianuam",
          "ante ianuam vicini clamant",
          "ante ianuam clamant vicini",
          "clamant vicini ante ianuam",
          "clamant ante ianuam vicini"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "vicini ante ianuam clamant",
            "vicini clamant ante ianuam",
            "ante ianuam vicini clamant",
            "ante ianuam clamant vicini",
            "clamant vicini ante ianuam",
            "clamant ante ianuam vicini"
          ]
        },
        "points": 1,
        "canonicalAnswer": "vicini ante ianuam clamant",
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
            "input": "vicini ante ianuam clamant",
            "isCorrect": true
          },
          {
            "input": "lorem ipsum",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p2-l7-p3",
        "type": "textInput",
        "prompt": "Tableau : -o / -s / -t / -mus / -tis / -nt = ?",
        "expected": "je tu il/elle nous vous ils/elles",
        "acceptedAnswers": [
          "je tu il/elle nous vous ils/elles",
          "je/tu/il-nous/vous/ils",
          "1s 2s 3s 1p 2p 3p",
          "première deuxième troisième personne singulier pluriel",
          "1re 2e 3e singulier 1re 2e 3e pluriel"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "je tu il/elle nous vous ils/elles",
            "je/tu/il-nous/vous/ils",
            "1s 2s 3s 1p 2p 3p",
            "première deuxième troisième personne singulier pluriel",
            "1re 2e 3e singulier 1re 2e 3e pluriel"
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
        "La rumeur collective se lit dans les terminaisons."
      ],
      "cahier": [
        "-mus / -tis / -nt",
        "Videmus/auditis/clamant"
      ],
      "keywords": [
        "présent pluriel",
        "rumeur",
        "quartier"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p2",
        "present-pluriel",
        "discordia"
      ]
    }
  },
  {
    "id": "p2-l8",
    "period": 2,
    "periodId": "p2",
    "title": "Tabella falsa",
    subtitle: headerContexts5eP2["p2-l8"],
    "objective": "Lire un court texte suspect autour d’une tablette falsifiée.",
    "lessonPoint": "Je lis un petit texte en vérifiant les mots-clés verum/falsum et les verbes d’action.",
    "narrative": "Une tabella circule : un nom a été changé. Qui a modifié le message ?",
    "canDo": [
      "Je lis un micro-texte continu.",
      "Je repère vrai/faux.",
      "Je formule une hypothèse simple."
    ],
    "lexicon": [
      "tabella = tablette",
      "falsa = fausse, falsifiée",
      "scribit = il/elle écrit",
      "mutat = il/elle change",
      "verum = vrai",
      "falsum = faux",
      "nomen = nom",
      "signum = signe",
      "legit = il/elle lit",
      "ostendit = il/elle montre"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p2-l8-t1",
        "type": "singleChoice",
        "prompt": "« 𝑇𝑎𝑏𝑒𝑙𝑙𝑎 𝑓𝑎𝑙𝑠𝑎 » signifie…",
        "options": [
          "tablette falsifiée",
          "tablette neuve",
          "autel cassé",
          "chien calme"
        ],
        "expected": "tablette falsifiée",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l8-t2",
        "type": "matching",
        "prompt": "Associe mot et sens.",
        "pairs": [
          {
            "left": "verum",
            "right": "vrai"
          },
          {
            "left": "falsum",
            "right": "faux"
          },
          {
            "left": "nomen",
            "right": "nom"
          },
          {
            "left": "signum",
            "right": "signe"
          }
        ],
        "rightOptions": [
          "nom",
          "vrai",
          "signe",
          "faux"
        ],
        "expected": {
          "verum": "vrai",
          "falsum": "faux",
          "nomen": "nom",
          "signum": "signe"
        },
        "points": 1
      },
      {
        "id": "p2-l8-t3",
        "type": "singleChoice",
        "prompt": "Texte : « 𝑉𝑖𝑐𝑖𝑛𝑎 𝑡𝑎𝑏𝑒𝑙𝑙𝑎𝑚 𝑙𝑒𝑔𝑖𝑡 𝑒𝑡 𝑜𝑠𝑡𝑒𝑛𝑑𝑖𝑡. » Qui lit la tablette ?",
        "options": [
          "la voisine",
          "le voisin",
          "le chien",
          "le maître"
        ],
        "expected": "la voisine",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l8-t4",
        "type": "multipleChoice",
        "prompt": "Texte court : « 𝑁𝑜𝑚𝑒𝑛 𝑚𝑢𝑡𝑎𝑡. 𝑉𝑒𝑟𝑢𝑚 𝑛𝑜𝑛 𝑒𝑠𝑡. » Quelles phrases sont vraies ?",
        "options": [
          "Le nom est changé",
          "Le texte n'est pas vrai",
          "Le texte est sûr",
          "Personne ne lit"
        ],
        "expected": [
          "Le nom est changé",
          "Le texte n'est pas vrai"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l8-t5",
        "type": "ordering",
        "prompt": "Reconstitue dans l’ordre de base : 𝑣𝑖𝑐𝑖𝑛𝑢𝑠 / 𝑡𝑎𝑏𝑒𝑙𝑙𝑎𝑚 / 𝑙𝑒𝑔𝑖𝑡",
        "options": [
          "vicinus",
          "tabellam",
          "legit"
        ],
        "expected": [
          "vicinus",
          "tabellam",
          "legit"
        ],
        "points": 1
      },
      {
        "id": "p2-l8-t6",
        "type": "singleChoice",
        "prompt": "Dans « 𝐿𝑒𝑔𝑖𝑡 𝑡𝑎𝑏𝑒𝑙𝑙𝑎𝑚 𝑣𝑖𝑐𝑖𝑛𝑎 », quel est le verbe ?",
        "options": [
          "legit",
          "tabellam",
          "vicina",
          "nullus"
        ],
        "expected": "legit",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l8-t7",
        "type": "multipleChoice",
        "prompt": "Pourquoi la tablette paraît-elle suspecte ?",
        "options": [
          "Un nom a été changé",
          "Le texte dit verum",
          "Le mot falsa apparaît",
          "La fontaine est propre"
        ],
        "expected": [
          "Un nom a été changé",
          "Le mot falsa apparaît"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p2-l8-p1",
        "type": "textInput",
        "prompt": "Traduis : 𝑡𝑎𝑏𝑒𝑙𝑙𝑎 𝑓𝑎𝑙𝑠𝑎 𝑒𝑠𝑡",
        "expected": "la tablette est falsifiée",
        "acceptedAnswers": [
          "la tablette est falsifiée",
          "la tablette est fausse",
          "la tablette est truquée",
          "la tablette est trafiquée"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "la tablette est falsifiée",
            "la tablette est fausse",
            "la tablette est truquée",
            "la tablette est trafiquée"
          ]
        },
        "points": 1,
        "canonicalAnswer": "la tablette est falsifiée",
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
            "input": "la tablette est falsifiée",
            "isCorrect": true
          },
          {
            "input": "réponse hors-sujet",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p2-l8-p2",
        "type": "textInput",
        "prompt": "Traduis en latin : La voisine montre la tablette.",
        "expected": "vicina tabellam ostendit",
        "acceptedAnswers": [
          "vicina tabellam ostendit",
          "vicina ostendit tabellam",
          "tabellam vicina ostendit",
          "tabellam ostendit vicina",
          "ostendit vicina tabellam",
          "ostendit tabellam vicina"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "vicina tabellam ostendit",
            "vicina ostendit tabellam",
            "tabellam vicina ostendit",
            "tabellam ostendit vicina",
            "ostendit vicina tabellam",
            "ostendit tabellam vicina"
          ]
        },
        "points": 1,
        "canonicalAnswer": "vicina tabellam ostendit",
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
            "input": "vicina tabellam ostendit",
            "isCorrect": true
          },
          {
            "input": "lorem ipsum",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p2-l8-p3",
        "type": "textInput",
        "prompt": "Pourquoi la tablette semble-t-elle suspecte ? (français court)",
        "expected": "le nom a été changé",
        "acceptedAnswers": [
          "le nom a été changé",
          "un nom est modifié",
          "elle est falsifiée",
          "la cire a été modifiée",
          "le texte a été modifié",
          "le nom dans la cire a été changé"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "le nom a été changé",
            "un nom est modifié",
            "elle est falsifiée",
            "la cire a été modifiée",
            "le texte a été modifié",
            "le nom dans la cire a été changé"
          ]
        },
        "points": 1,
        "canonicalAnswer": "le nom a été changé",
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
            "input": "le nom a été changé",
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
        "Je peux lire un texte court continu.",
        "Je justifie une suspicion avec des indices précis."
      ],
      "cahier": [
        "verum/falsum",
        "tabella falsa : nomen mutat"
      ],
      "keywords": [
        "tablette",
        "faux",
        "indices"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p2",
        "lecture",
        "discordia"
      ]
    }
  },
  {
    "id": "p2-l9",
    "period": 2,
    "periodId": "p2",
    "title": "Canis ante ianuam latrat",
    subtitle: headerContexts5eP2["p2-l9"],
    "objective": "Comprendre explicitement la souplesse de l’ordre latin.",
    "lessonPoint": "Je ne traduis pas mot à mot dans l’ordre ; je repère formes et verbe.",
    "narrative": "Le canis refuse une porte précise. Les voisins y voient un signe inquiétant.",
    "canDo": [
      "Je lis S/C/V, V/S/C, C/V/S.",
      "Je garde le même sens malgré l’ordre variable.",
      "Je justifie ma traduction."
    ],
    "lexicon": [
      "canis = chien",
      "ianua = porte",
      "ante = devant",
      "latrat = il/elle aboie",
      "stat = il/elle se tient",
      "recusat = il/elle refuse",
      "intrat = il/elle entre",
      "timet = il/elle craint",
      "audit = il/elle entend",
      "manet = il/elle reste"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p2-l9-t1",
        "type": "singleChoice",
        "prompt": "𝑙𝑎𝑡𝑟𝑎𝑡 signifie…",
        "options": [
          "aboie",
          "entre",
          "écoute",
          "fuit"
        ],
        "expected": "aboie",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l9-t2",
        "type": "matching",
        "prompt": "Associe mot et sens.",
        "pairs": [
          {
            "left": "canis",
            "right": "chien"
          },
          {
            "left": "ianua",
            "right": "porte"
          },
          {
            "left": "ante",
            "right": "devant"
          },
          {
            "left": "latrat",
            "right": "aboie"
          }
        ],
        "rightOptions": [
          "porte",
          "aboie",
          "devant",
          "chien"
        ],
        "expected": {
          "canis": "chien",
          "ianua": "porte",
          "ante": "devant",
          "latrat": "aboie"
        },
        "points": 1
      },
      {
        "id": "p2-l9-t3",
        "type": "singleChoice",
        "prompt": "« 𝐴𝑛𝑡𝑒 𝑖𝑎𝑛𝑢𝑎𝑚 𝑐𝑎𝑛𝑖𝑠 𝑙𝑎𝑡𝑟𝑎𝑡 » signifie…",
        "options": [
          "Le chien aboie devant la porte",
          "La porte aboie devant le chien",
          "Le chien entre dans la porte",
          "Le voisin reste"
        ],
        "expected": "Le chien aboie devant la porte",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l9-t4",
        "type": "singleChoice",
        "prompt": "« 𝐿𝑎𝑡𝑟𝑎𝑡 𝑎𝑛𝑡𝑒 𝑖𝑎𝑛𝑢𝑎𝑚 𝑐𝑎𝑛𝑖𝑠 » : même sens ?",
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
        "id": "p2-l9-t5",
        "type": "multipleChoice",
        "prompt": "Quels ordres peuvent signifier « Le chien aboie devant la porte » ?",
        "options": [
          "canis ante ianuam latrat",
          "latrat ante ianuam canis",
          "ante ianuam latrat canis",
          "canis ianuam ante latrat"
        ],
        "expected": [
          "canis ante ianuam latrat",
          "latrat ante ianuam canis",
          "ante ianuam latrat canis"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l9-t6",
        "type": "ordering",
        "prompt": "Compose un ordre latin de base valide.",
        "options": [
          "canis",
          "ante",
          "ianuam",
          "manet"
        ],
        "expected": [
          "canis",
          "ante",
          "ianuam",
          "manet"
        ],
        "points": 1
      },
      {
        "id": "p2-l9-t7",
        "type": "multipleChoice",
        "prompt": "Mini-texte : « 𝐶𝑎𝑛𝑖𝑠 𝑎𝑛𝑡𝑒 𝑖𝑎𝑛𝑢𝑎𝑚 𝐴 𝑚𝑎𝑛𝑒𝑡, 𝑎𝑛𝑡𝑒 𝑖𝑎𝑛𝑢𝑎𝑚 𝐵 𝑟𝑒𝑐𝑢𝑠𝑎𝑡. » Que refuse le chien ?",
        "options": [
          "la porte B",
          "la porte A",
          "la fontaine",
          "la tablette"
        ],
        "expected": [
          "la porte B"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p2-l9-p1",
        "type": "textInput",
        "prompt": "Traduis : 𝑐𝑎𝑛𝑖𝑠 𝑖𝑎𝑛𝑢𝑎𝑚 𝑡𝑖𝑚𝑒𝑡",
        "expected": "le chien craint la porte",
        "acceptedAnswers": [
          "le chien craint la porte",
          "le chien a peur de la porte",
          "le chien redoute la porte"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "le chien craint la porte",
            "le chien a peur de la porte",
            "le chien redoute la porte"
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
        "id": "p2-l9-p2",
        "type": "textInput",
        "prompt": "Traduis en latin : Le chien reste devant la porte.",
        "expected": "canis ante ianuam manet",
        "acceptedAnswers": [
          "canis ante ianuam manet",
          "canis manet ante ianuam",
          "ante ianuam canis manet",
          "ante ianuam manet canis",
          "manet canis ante ianuam",
          "manet ante ianuam canis"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "canis ante ianuam manet",
            "canis manet ante ianuam",
            "ante ianuam canis manet",
            "ante ianuam manet canis",
            "manet canis ante ianuam",
            "manet ante ianuam canis"
          ]
        },
        "points": 1,
        "canonicalAnswer": "canis ante ianuam manet",
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
            "input": "canis ante ianuam manet",
            "isCorrect": true
          },
          {
            "input": "lorem ipsum",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p2-l9-p3",
        "type": "textInput",
        "prompt": "Explique brièvement : pourquoi l’ordre seul ne suffit-il pas ?",
        "expected": "il faut regarder les formes",
        "acceptedAnswers": [
          "il faut regarder les formes",
          "il faut repérer le verbe et les terminaisons",
          "l'ordre change mais les formes donnent le sens",
          "ce sont les formes qui donnent le sens",
          "ce sont les terminaisons qui donnent le sens"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "il faut regarder les formes",
            "il faut repérer le verbe et les terminaisons",
            "l'ordre change mais les formes donnent le sens",
            "ce sont les formes qui donnent le sens",
            "ce sont les terminaisons qui donnent le sens"
          ]
        },
        "points": 1,
        "canonicalAnswer": "il faut regarder les formes",
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
            "input": "il faut regarder les formes",
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
        "Je ne piège plus sur l’ordre des mots.",
        "Je confirme le sens avec les formes."
      ],
      "cahier": [
        "S/C/V possible",
        "Repérer verbe + terminaisons"
      ],
      "keywords": [
        "ordre des mots",
        "chien",
        "porte"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p2",
        "ordre-latin",
        "discordia"
      ]
    }
  },
  {
    "id": "p2-l10",
    "period": 2,
    "periodId": "p2",
    "title": "Aqua turpis in fonte",
    subtitle: headerContexts5eP2["p2-l10"],
    "objective": "Réviser les noms (1re, 2e masc., 2e neutre) dans la scène de la fontaine salie.",
    "lessonPoint": "Je compare les familles de noms pour lire sujet et complément objet.",
    "narrative": "Au matin, aqua turpis in fonte : la tension monte, chacun accuse l’autre.",
    "canDo": [
      "Je reconnais les trois familles de noms vues.",
      "Je distingue nominatif/accusatif.",
      "Je traduis une phrase de constat."
    ],
    "lexicon": [
      "aqua = eau",
      "turpis = sale, souillée",
      "fons = fontaine",
      "puella = jeune fille",
      "servus = serviteur",
      "donum = offrande",
      "taberna = boutique",
      "murus = mur",
      "manat = il/elle coule",
      "polluit = il/elle salit"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p2-l10-t1",
        "type": "singleChoice",
        "prompt": "Quel mot relève de la 1re déclinaison ?",
        "options": [
          "puella",
          "servus",
          "donum",
          "murus"
        ],
        "expected": "puella",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l10-t2",
        "type": "singleChoice",
        "prompt": "Quel mot est masculin 2e déclinaison ?",
        "options": [
          "servus",
          "aqua",
          "donum",
          "taberna"
        ],
        "expected": "servus",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l10-t3",
        "type": "singleChoice",
        "prompt": "Quel mot est neutre ?",
        "options": [
          "donum",
          "murus",
          "puella",
          "via"
        ],
        "expected": "donum",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l10-t4",
        "type": "matching",
        "prompt": "Associe mot et famille.",
        "pairs": [
          {
            "left": "rosa",
            "right": "1re déclinaison"
          },
          {
            "left": "dominus",
            "right": "2e masc."
          },
          {
            "left": "donum",
            "right": "2e neutre"
          }
        ],
        "rightOptions": [
          "2e neutre",
          "1re déclinaison",
          "2e masc."
        ],
        "expected": {
          "rosa": "1re déclinaison",
          "dominus": "2e masc.",
          "donum": "2e neutre"
        },
        "points": 1
      },
      {
        "id": "p2-l10-t5",
        "type": "multipleChoice",
        "prompt": "Sélectionne les formes accusatives.",
        "options": [
          "rosam",
          "dominum",
          "donum",
          "rosa"
        ],
        "expected": [
          "rosam",
          "dominum",
          "donum"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l10-t6",
        "type": "ordering",
        "prompt": "Table de base : 𝑟𝑜𝑠𝑎 / 𝑑𝑜𝑚𝑖𝑛𝑢𝑠 / 𝑑𝑜𝑛𝑢𝑚 (nominatif puis accusatif)",
        "options": [
          "rosa",
          "rosam",
          "dominus",
          "dominum",
          "donum",
          "donum"
        ],
        "expected": [
          "rosa",
          "rosam",
          "dominus",
          "dominum",
          "donum",
          "donum"
        ],
        "points": 1
      },
      {
        "id": "p2-l10-t7",
        "type": "singleChoice",
        "prompt": "« 𝐴𝑞𝑢𝑎 𝑖𝑛 𝑓𝑜𝑛𝑡𝑒 𝑡𝑢𝑟𝑝𝑖𝑠 𝑒𝑠𝑡 » : que se passe-t-il ?",
        "options": [
          "L’eau de la fontaine est sale",
          "La fontaine porte l’eau propre",
          "La boutique fuit",
          "Le mur crie"
        ],
        "expected": "L’eau de la fontaine est sale",
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p2-l10-p1",
        "type": "textInput",
        "prompt": "Traduis : 𝑎𝑞𝑢𝑎 𝑖𝑛 𝑓𝑜𝑛𝑡𝑒 𝑡𝑢𝑟𝑝𝑖𝑠 𝑒𝑠𝑡",
        "expected": "l'eau dans la fontaine est sale",
        "acceptedAnswers": [
          "l'eau dans la fontaine est sale",
          "l'eau de la fontaine est sale",
          "l'eau est sale dans la fontaine",
          "l'eau dans la fontaine est souillée",
          "l'eau de la fontaine est souillée",
          "l'eau est souillée dans la fontaine"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "l'eau dans la fontaine est sale",
            "l'eau de la fontaine est sale",
            "l'eau est sale dans la fontaine",
            "l'eau dans la fontaine est souillée",
            "l'eau de la fontaine est souillée",
            "l'eau est souillée dans la fontaine"
          ]
        },
        "points": 1,
        "canonicalAnswer": "l'eau dans la fontaine est sale",
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
            "input": "l'eau dans la fontaine est sale",
            "isCorrect": true
          },
          {
            "input": "réponse hors-sujet",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p2-l10-p2",
        "type": "textInput",
        "prompt": "Traduis en latin : La jeune fille voit l’eau.",
        "expected": "puella aquam videt",
        "acceptedAnswers": [
          "puella aquam videt",
          "puella videt aquam",
          "aquam puella videt",
          "aquam videt puella",
          "videt puella aquam",
          "videt aquam puella"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "puella aquam videt",
            "puella videt aquam",
            "aquam puella videt",
            "aquam videt puella",
            "videt puella aquam",
            "videt aquam puella"
          ]
        },
        "points": 1,
        "canonicalAnswer": "puella aquam videt",
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
            "input": "puella aquam videt",
            "isCorrect": true
          },
          {
            "input": "lorem ipsum",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p2-l10-p3",
        "type": "textInput",
        "prompt": "Complète les accusatifs dans les cartouches : 𝑟𝑜𝑠𝑎 / … ; 𝑑𝑜𝑚𝑖𝑛𝑢𝑠 / … ; 𝑑𝑜𝑛𝑢𝑚 / …",
        "placeholder": "rosam dominum donum",
        "uiVariant": "chipsCompletion",
        "chips": [
          {
            "label": "rosa /",
            "expected": "rosam"
          },
          {
            "label": "dominus /",
            "expected": "dominum"
          },
          {
            "label": "donum /",
            "expected": "donum"
          }
        ],
        "expected": "rosam dominum donum",
        "acceptedAnswers": [
          "rosam dominum donum"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "latin",
          "accepted": [
            "rosam dominum donum"
          ]
        },
        "points": 1,
        "canonicalAnswer": "rosam dominum donum",
        "normalization": {
          "trim": true,
          "collapseSpaces": true,
          "ignoreCase": true,
          "ignorePunctuation": true,
          "normalizeApostrophes": true,
          "ignoreDiacritics": true
        },
        "gradingFocus": "On vérifie seulement les trois formes accusatives attendues, dans l’ordre.",
        "rejectIf": [
          "forme latine impossible au niveau de la leçon",
          "ordre des trois formes incorrect"
        ],
        "tests": [
          {
            "input": "rosam dominum donum",
            "isCorrect": true
          },
          {
            "input": "rosa dominus donum",
            "isCorrect": false
          }
        ]
      }
    ],
    "summary": {
      "retains": [
        "Je reconnais les trois familles nominales utiles.",
        "Je lis mieux sujet et complément objet."
      ],
      "cahier": [
        "rosa / rosam",
        "dominus / dominum",
        "donum / donum",
        "Sujet souvent en forme de base ; complément objet souvent en forme modifiée ; au neutre les deux se ressemblent"
      ],
      "keywords": [
        "révision noms",
        "fontaine",
        "morphologie"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p2",
        "revision-noms",
        "discordia"
      ]
    }
  },
  {
    "id": "p2-l11",
    "period": 2,
    "periodId": "p2",
    "title": "Discordia intrat",
    subtitle: headerContexts5eP2["p2-l11"],
    "objective": "Nommer l’hypothèse de la Discorde et réviser le présent en contexte narratif.",
    "lessonPoint": "Je relie les verbes au présent aux effets dans le quartier.",
    "narrative": "Les habitants parlent d’une force : Discordia. Elle sépare les voisins et trouble la pax.",
    "canDo": [
      "Je lis un mini-récit connecté.",
      "Je repère les verbes du présent.",
      "J’explique une hypothèse de récit."
    ],
    "lexicon": [
      "Discordia = Discorde",
      "pax = paix",
      "vicus = quartier, rue",
      "intrat = il/elle entre",
      "turbat = il/elle trouble",
      "separat = il/elle sépare",
      "terret = il/elle effraie",
      "manet = il/elle demeure",
      "fugit = il/elle fuit",
      "vocat = il/elle appelle"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p2-l11-t1",
        "type": "singleChoice",
        "prompt": "Dans l’histoire, Discordia est…",
        "options": [
          "une force qui divise",
          "une voisine",
          "un chien",
          "une boutique"
        ],
        "expected": "une force qui divise",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l11-t2",
        "type": "matching",
        "prompt": "Associe mot et sens.",
        "pairs": [
          {
            "left": "pax",
            "right": "paix"
          },
          {
            "left": "turbat",
            "right": "trouble"
          },
          {
            "left": "separat",
            "right": "sépare"
          },
          {
            "left": "terret",
            "right": "effraie"
          }
        ],
        "rightOptions": [
          "sépare",
          "paix",
          "effraie",
          "trouble"
        ],
        "expected": {
          "pax": "paix",
          "turbat": "trouble",
          "separat": "sépare",
          "terret": "effraie"
        },
        "points": 1
      },
      {
        "id": "p2-l11-t3",
        "type": "singleChoice",
        "prompt": "« 𝐷𝑖𝑠𝑐𝑜𝑟𝑑𝑖𝑎 𝑣𝑖𝑐𝑢𝑚 𝑡𝑢𝑟𝑏𝑎𝑡 » : qui trouble le quartier ?",
        "options": [
          "Discordia",
          "la paix",
          "le chien",
          "le peuple"
        ],
        "expected": "Discordia",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l11-t4",
        "type": "multipleChoice",
        "prompt": "Quels mots sont des verbes au présent ?",
        "options": [
          "intrat",
          "turbat",
          "pax",
          "fugit"
        ],
        "expected": [
          "intrat",
          "turbat",
          "fugit"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l11-t5",
        "type": "multipleChoice",
        "prompt": "Quels effets de Discordia sont donnés ?",
        "options": [
          "les voisins se séparent",
          "la paix reste",
          "les habitants ont peur",
          "les disputes augmentent"
        ],
        "expected": [
          "les voisins se séparent",
          "les habitants ont peur",
          "les disputes augmentent"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l11-t6",
        "type": "ordering",
        "prompt": "Mets le verbe en fin dans l’ordre de base : 𝐷𝑖𝑠𝑐𝑜𝑟𝑑𝑖𝑎 / 𝑣𝑖𝑐𝑢𝑚 / 𝑡𝑢𝑟𝑏𝑎𝑡",
        "options": [
          "Discordia",
          "vicum",
          "turbat"
        ],
        "expected": [
          "Discordia",
          "vicum",
          "turbat"
        ],
        "points": 1
      },
      {
        "id": "p2-l11-t7",
        "type": "multipleChoice",
        "prompt": "Texte (4 phrases) : « 𝐷𝑖𝑠𝑐𝑜𝑟𝑑𝑖𝑎 𝑖𝑛𝑡𝑟𝑎𝑡. 𝑃𝑎𝑥 𝑓𝑢𝑔𝑖𝑡. 𝑉𝑖𝑐𝑖𝑛𝑖 𝑐𝑙𝑎𝑚𝑎𝑛𝑡. 𝐶𝑎𝑛𝑖𝑠 𝑚𝑎𝑛𝑒𝑡. » Qu’est-ce qui est vrai ?",
        "options": [
          "La paix fuit",
          "Les voisins crient",
          "Le chien reste",
          "Discordia protège la paix"
        ],
        "expected": [
          "La paix fuit",
          "Les voisins crient",
          "Le chien reste"
        ],
        "shuffle": true,
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p2-l11-p1",
        "type": "textInput",
        "prompt": "Traduis : 𝐷𝑖𝑠𝑐𝑜𝑟𝑑𝑖𝑎 𝑣𝑖𝑐𝑢𝑚 𝑡𝑢𝑟𝑏𝑎𝑡",
        "expected": "Discordia trouble le quartier",
        "acceptedAnswers": [
          "Discordia trouble le quartier",
          "la Discorde trouble le quartier",
          "Discordia met le quartier en désordre",
          "la Discorde met le quartier en désordre",
          "Discordia sème le trouble dans le quartier",
          "la Discorde sème le trouble dans le quartier"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "Discordia trouble le quartier",
            "la Discorde trouble le quartier",
            "Discordia met le quartier en désordre",
            "la Discorde met le quartier en désordre",
            "Discordia sème le trouble dans le quartier",
            "la Discorde sème le trouble dans le quartier"
          ]
        },
        "points": 1,
        "canonicalAnswer": "Discordia trouble le quartier",
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
            "input": "Discordia trouble le quartier",
            "isCorrect": true
          },
          {
            "input": "réponse hors-sujet",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p2-l11-p2",
        "type": "textInput",
        "prompt": "Traduis en latin : La paix ne reste pas dans la rue.",
        "expected": "pax in via non manet",
        "acceptedAnswers": [
          "pax in via non manet",
          "pax non manet in via",
          "in via pax non manet",
          "in via non manet pax",
          "non manet pax in via",
          "non manet in via pax"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "pax in via non manet",
            "pax non manet in via",
            "in via pax non manet",
            "in via non manet pax",
            "non manet pax in via",
            "non manet in via pax"
          ]
        },
        "points": 1,
        "canonicalAnswer": "pax in via non manet",
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
            "input": "pax in via non manet",
            "isCorrect": true
          },
          {
            "input": "lorem ipsum",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p2-l11-p3",
        "type": "textInput",
        "prompt": "Pourquoi les habitants parlent-ils de Discordia ?",
        "expected": "parce que les troubles se multiplient",
        "acceptedAnswers": [
          "parce que les troubles se multiplient",
          "parce que le quartier se divise",
          "parce que la paix disparaît",
          "parce que les voisins s'accusent",
          "parce que tout le monde se dispute"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "parce que les troubles se multiplient",
            "parce que le quartier se divise",
            "parce que la paix disparaît",
            "parce que les voisins s'accusent",
            "parce que tout le monde se dispute"
          ]
        },
        "points": 1,
        "canonicalAnswer": "parce que les troubles se multiplient",
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
            "input": "parce que les troubles se multiplient",
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
        "Je lis un récit connecté sur plusieurs phrases.",
        "Je repère les effets de Discordia avec les verbes au présent."
      ],
      "cahier": [
        "Discordia intrat, pax fugit",
        "présent : relier forme et sens dans le récit"
      ],
      "keywords": [
        "Discordia",
        "pax",
        "récit"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p2",
        "discordia",
        "recit"
      ]
    }
  },
  {
    "id": "p2-l12",
    "period": 2,
    "periodId": "p2",
    "title": "Paxne redit ?",
    subtitle: headerContexts5eP2["p2-l12"],
    "objective": "Clore l’enquête avec une révision cumulative et une mini-interprétation.",
    "lessonPoint": "Je mobilise toutes les clés du trimestre : questions, lieux, formes, présent, ordre souple.",
    "narrative": "Dernière mise au point : donum, tabella, canis et fons sont relus pour décider si la pax peut revenir.",
    "canDo": [
      "Je relis un mini-dossier en latin débutant.",
      "Je réponds à des questions cumulatives.",
      "Je formule une conclusion simple."
    ],
    "lexicon": [
      "pax = paix",
      "redit = il/elle revient",
      "populus = peuple, habitants",
      "vicini = voisins",
      "donum = offrande",
      "tabella = tablette",
      "canis = chien",
      "fons = fontaine",
      "verum = vrai",
      "falsum = faux"
    ],
    "maxScore": 10,
    "training": [
      {
        "id": "p2-l12-t1",
        "type": "singleChoice",
        "prompt": "Quel mot signifie « paix » ?",
        "options": [
          "pax",
          "populus",
          "fons",
          "tabella"
        ],
        "expected": "pax",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l12-t2",
        "type": "multipleChoice",
        "prompt": "Sélectionne les interrogatifs appris.",
        "options": [
          "quis",
          "quid",
          "cur",
          "ubi",
          "donum"
        ],
        "expected": [
          "quis",
          "quid",
          "cur",
          "ubi"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l12-t3",
        "type": "matching",
        "prompt": "Associe mot et traduction.",
        "pairs": [
          {
            "left": "tabella",
            "right": "tablette"
          },
          {
            "left": "canis",
            "right": "chien"
          },
          {
            "left": "fons",
            "right": "fontaine"
          },
          {
            "left": "verum",
            "right": "vrai"
          }
        ],
        "rightOptions": [
          "vrai",
          "fontaine",
          "tablette",
          "chien"
        ],
        "expected": {
          "tabella": "tablette",
          "canis": "chien",
          "fons": "fontaine",
          "verum": "vrai"
        },
        "points": 1
      },
      {
        "id": "p2-l12-t4",
        "type": "singleChoice",
        "prompt": "Dans « 𝑉𝑖𝑐𝑖𝑛𝑢𝑠 𝑑𝑜𝑛𝑢𝑚 𝑣𝑖𝑑𝑒𝑡 », quel est le complément objet ?",
        "options": [
          "donum",
          "vicinus",
          "videt",
          "nullus"
        ],
        "expected": "donum",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l12-t5",
        "type": "singleChoice",
        "prompt": "« 𝑄𝑢𝑎𝑒𝑟𝑖𝑚𝑢𝑠 » indique…",
        "options": [
          "nous",
          "vous",
          "il",
          "je"
        ],
        "expected": "nous",
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l12-t6",
        "type": "multipleChoice",
        "prompt": "Mini-enquête (5 phrases) : quelles infos sont présentes ?",
        "options": [
          "Le donum a disparu",
          "La tablette est suspecte",
          "Le chien refuse une porte",
          "La fontaine est souillée",
          "Un consul arrive"
        ],
        "expected": [
          "Le donum a disparu",
          "La tablette est suspecte",
          "Le chien refuse une porte",
          "La fontaine est souillée"
        ],
        "shuffle": true,
        "points": 1
      },
      {
        "id": "p2-l12-t7",
        "type": "ordering",
        "prompt": "Rebâtis la phrase dans l’ordre de base : 𝑣𝑖𝑐𝑖𝑛𝑖 / 𝑠𝑖𝑔𝑛𝑢𝑚 / 𝑣𝑖𝑑𝑒𝑛𝑡",
        "options": [
          "vicini",
          "signum",
          "vident"
        ],
        "expected": [
          "vicini",
          "signum",
          "vident"
        ],
        "points": 1
      }
    ],
    "production": [
      {
        "id": "p2-l12-p1",
        "type": "textInput",
        "prompt": "Traduis : 𝑝𝑎𝑥 𝑖𝑛 𝑣𝑖𝑐𝑜 𝑟𝑒𝑑𝑖𝑡",
        "expected": "la paix revient dans le quartier",
        "acceptedAnswers": [
          "la paix revient dans le quartier",
          "la paix revient dans la rue",
          "la paix revient",
          "le calme revient dans le quartier",
          "le calme revient dans la rue",
          "le calme revient"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "la paix revient dans le quartier",
            "la paix revient dans la rue",
            "la paix revient",
            "le calme revient dans le quartier",
            "le calme revient dans la rue",
            "le calme revient"
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
        "id": "p2-l12-p2",
        "type": "textInput",
        "prompt": "Traduis en latin : Les voisins voient le signe.",
        "expected": "vicini signum vident",
        "acceptedAnswers": [
          "vicini signum vident",
          "vicini vident signum",
          "signum vicini vident",
          "signum vident vicini",
          "vident vicini signum",
          "vident signum vicini"
        ],
        "answerConfig": {
          "type": "one-of",
          "language": "latin",
          "accepted": [
            "vicini signum vident",
            "vicini vident signum",
            "signum vicini vident",
            "signum vident vicini",
            "vident vicini signum",
            "vident signum vicini"
          ]
        },
        "points": 1,
        "canonicalAnswer": "vicini signum vident",
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
            "input": "vicini signum vident",
            "isCorrect": true
          },
          {
            "input": "lorem ipsum",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "p2-l12-p3",
        "type": "textInput",
        "prompt": "Qu’est-ce qui a troublé Subure ? (réponse courte)",
        "expected": "la Discorde",
        "acceptedAnswers": [
          "la Discorde",
          "Discordia",
          "les conflits entre voisins",
          "la querelle",
          "les disputes entre voisins",
          "les soupçons entre voisins"
        ],
        "answerConfig": {
          "type": "translation-segment",
          "language": "fr",
          "accepted": [
            "la Discorde",
            "Discordia",
            "les conflits entre voisins",
            "la querelle",
            "les disputes entre voisins",
            "les soupçons entre voisins"
          ]
        },
        "points": 1,
        "canonicalAnswer": "la Discorde",
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
            "input": "la Discorde",
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
        "Je mobilise toutes les notions de la période.",
        "Je peux lire et expliquer un mini-dossier narratif."
      ],
      "cahier": [
        "Interrogatifs : quis/quid/cur/ubi",
        "Prépositions : ad/in/ex/ante",
        "Déclinaisons : 1re + 2e masc. + 2e neutre",
        "Présent : -o/-s/-t/-mus/-tis/-nt",
        "Ordre latin flexible",
        "Civilisation : Subure est un quartier populaire vivant et bruyant de Rome"
      ],
      "keywords": [
        "révision",
        "enquête finale",
        "Subure",
        "pax"
      ]
    },
    "meta": {
      "status": "ready",
      "tags": [
        "p2",
        "final",
        "discordia"
      ]
    }
  }
];
