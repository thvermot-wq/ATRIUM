// Données de leçons 5E · Période 2 — Discordia in Subure.

const headerContexts5eP2 = {

  "p2-l1": "Au petit matin, l’autel vide attire encore les regards. « Maintenant, on arrête les mines choquées et on compare les versions ! », tranche Flavia, puis elle désigne les voisins un par un.",

  "p2-l2": "Un témoin assure que l’homme a couru vers le temple, puis jure qu’il venait de la boutique. « Il a vu beaucoup de choses pour quelqu’un d’aussi confus », dit Lucius, et il refait le trajet en courant.",

  "p2-l3": "Près de la fontaine, une femme serre la corde de son seau comme un poignet. « Je n’ai vu qu’une épaule, mais une épaule qui fuit, ça suffit », dit-elle, puis elle montre la porte du menton.",

  "p2-l4": "Dans la rue, le maître accuse le serviteur, le serviteur accuse le voisin, le voisin accuse le mauvais temps... « Continuez, et vous allez finir par dénoncer les pavés », grogne Marcus, puis il coupe la parole au plus bruyant.",

  "p2-l5": "Livia découvre une petite marque près du sanctuaire, presque rien, une griffure dans la pierre. « Le détail minuscule, c’est celui qui coûte le plus cher », dit-elle, puis elle gratte la poussière avec l’ongle.",

  "p2-l6": "Chacun raconte désormais ce qu’il a vu, entendu ou deviné, en se donnant le beau rôle. « Quand tout le monde devient témoin parfait, c’est que l’histoire a été piétinée », dit Flavia, puis elle reprend chaque phrase mot à mot.",

  "p2-l7": "Devant la maison, les voisins s’agglutinent si près qu’on ne sait plus qui aide et qui gêne. « Vous cherchez la vérité ou juste une meilleure place ? », lance Marcus, puis il repousse une épaule pour passer.",

  "p2-l8": "La tablette revient à Lucius, qui la relit plus lentement cette fois. « Quelqu’un n’a pas seulement écrit ; quelqu’un a déplacé la faute », dit-il, puis Flavia lui arrache presque l’objet.",

  "p2-l9": "Niger revient devant la même porte et refuse d’avancer d’un pas. « Moi, je commence à faire plus confiance au chien qu’au quartier », souffle Livia, puis Marcus suit l’angle exact de son museau.",

  "p2-l10": "À la fontaine, l’eau remonte trouble et laisse un dépôt gris sur le bois. « Ce qui sort du fond n’a jamais bonne allure », murmure Aurelia, puis elle incline le seau vers la lumière.",

  "p2-l11": "Quand Marcus prononce enfin le nom de la déesse Discordia, la rue se calme sans discuter. « Voilà ; au moins, notre désordre a trouvé son patron », dit Flavia, et personne ne rit.",

  "p2-l12": "Le soir retombe sur le quartier, mais les portes restent entrouvertes et les oreilles aussi. « La paix revient toujours après tout le monde », murmure Aurelia, puis Niger lève la tête au moindre pas.",

  "p2-l13": "En reprenant les témoignages, Flavia bute sur quelques mots plus rugueux que les autres : rex, mater, urbs, corpus. Ils ne ressemblent pas aux noms déjà connus... Est-ce que ce serait des morceaux d'un code ?"

};

 

export const lessons5eP2 = [

  {

    "id": "p2-l1",

    "period": 2,

    "periodId": "p2",

    "title": "Quis donum sustulit ? - Interrogatifs",

    subtitle: headerContexts5eP2["p2-l1"],

    "objective": "Entrer dans l’enquête de Subure et comprendre les questions de base.",

    "lessonPoint": "Je commence par le verbe, puis je demande qui / quoi / où / pourquoi ; l’ordre latin peut changer.",

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

      "donum (nom./acc.) = offrande, cadeau",

      "ara (nom.), aram (acc.) = autel",

      "vicinus (nom.), vicinum (acc.) = voisin",
      "Sextus (nom.), Sextum (acc.) = Sextus",

      "video, videt = je vois ; il/elle voit",

      "nego, negat = je nie ; il/elle nie",

      "accuso, accusat = j’accuse ; il/elle accuse"

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
  "prompt": "« Vicinus Sextum accusat » : qui accuse ?",
  "options": [ "le voisin", "Sextus", "l’autel", "le chien" ],
  "expected": "le voisin",
  "shuffle": true,
  "points": 1
},

     {
  "id": "p2-l1-t4",
  "type": "multipleChoice",
  "prompt": "Coche les trois traductions recevables de « Vicinus Sextum accusat ».",
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
  "prompt": "Dans « Vicinus aram videt », quel mot est le complément d’objet direct ?",
  "options": [ "vicinus", "aram", "videt" ],
  "expected": "aram",
  "points": 1
},

      {
  "id": "p2-l1-t6",
  "type": "singleChoice",
  "prompt": "Repère le verbe dans « Vicinus aram videt ».",
  "options": [ "donum", "vicinus", "videt", "nullum" ],
  "expected": "videt",
  "shuffle": true,
  "points": 1
},

      {
  "id": "p2-l1-t7",
  "type": "textInput",
  "prompt": "Traduis en français : Cur vicinus negat ?",
  "expected": "pourquoi le voisin nie-t-il ?",
  "acceptedAnswers": [
    "pourquoi le voisin nie-t-il",
    "pourquoi le voisin nie",
    "pour quelle raison le voisin nie"
  ],
  "answerConfig": {
    "type": "translation-segment",
    "language": "fr",
    "accepted": [
      "pourquoi le voisin nie-t-il",
      "pourquoi le voisin nie",
      "pour quelle raison le voisin nie"
    ]
  },
  "points": 1
}

    ],

    "production": [

         {
  "id": "p2-l1-p1",
  "type": "textInput",
  "prompt": "Traduis en français : Quis donum videt ?",
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
  "canonicalAnswer": "qui voit l'offrande",
  "normalization": {
    "trim": true,
    "collapseSpaces": true,
    "ignoreCase": true,
    "ignorePunctuation": true,
    "normalizeApostrophes": true,
    "ignoreDiacritics": true,
    "ignoreFrenchDeterminers": true
  },
  "gradingFocus": "Comprendre une question simple avec interrogatif, verbe et COD.",
  "rejectIf": [
    "interrogatif mal compris",
    "verbe principal mal compris",
    "contre-sens sur donum"
  ],
  "tests": [
    {
      "input": "qui voit l'offrande ?",
      "isCorrect": true
    },
    {
      "input": "qui aperçoit le don",
      "isCorrect": true
    },
    {
      "input": "qui porte le don ?",
      "isCorrect": false
    },
    {
      "input": "qui voient le don ?",
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
  "prompt": "Traduis en latin : Pourquoi le voisin accuse-t-il ?",
  "expected": "cur vicinus accusat",
  "acceptedAnswers": [
    "cur vicinus accusat",
    "cur accusat vicinus",
    "vicinus cur accusat",
    "accusat cur vicinus"
  ],
  "answerConfig": {
    "type": "one-of",
    "language": "latin",
    "accepted": [
      "cur vicinus accusat",
      "cur accusat vicinus",
      "vicinus cur accusat",
      "accusat cur vicinus"
    ]
  },
  "points": 1,
  "canonicalAnswer": "cur vicinus accusat",
  "normalization": {
    "trim": true,
    "collapseSpaces": true,
    "ignoreCase": true,
    "ignorePunctuation": true,
    "normalizeApostrophes": true,
    "ignoreDiacritics": true
  },
  "gradingFocus": "Produire une question simple en latin avec interrogatif, sujet et verbe au présent.",
  "rejectIf": [
    "interrogatif absent ou incorrect",
    "verbe incorrect",
    "forme de sujet incorrecte",
    "réponse hors lexique de la leçon"
  ],
  "tests": [
    {
      "input": "cur vicinus accusat",
      "isCorrect": true
    },
    {
      "input": "cur accusat vicinus",
      "isCorrect": true
    },
    {
      "input": "quid vicinus accusat",
      "isCorrect": false
    },
    {
      "input": "cur vicinum accusat",
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

    "title": "Ubi est donum ? Ad templum, ex taberna - Prépositions",

    subtitle: headerContexts5eP2["p2-l2"],

    "objective": "Suivre les déplacements suspects dans le quartier.",

    "lessonPoint": "Les prépositions donnent le mouvement : ad vers, in dans, ex hors de, ante devant.",

    "canDo": [

      "Je lis ad/in/ex/ante.",

      "Je localise une action.",

      "Je traduis un petit trajet."

    ],

    "lexicon": [

      "ad + accusatif = vers",
      "in + ablatif = dans",
      "ex + ablatif = hors de, depuis",
      "ante + accusatif = devant",
      "ianua = porte",
      "templum = temple",
      "taberna = boutique",
      "via = rue",
      "servus = esclave, serviteur",
      "fons = fontaine",
      "ancilla, ancillae = servante",
      "femina, feminae = femme",
      "fons, fontis = fontaine, source",
      "venio, venis, venit = je viens, tu viens, il/elle vient",
      "exeo, exis, exit = je sors, tu sors, il/elle sort",
      "sto, stas, stat = je me tiens, tu te tiens, il/elle se tient",
      "ambulo, ambulas, ambulat : je marche, tu marches, il/elle marche"

    ],

    "maxScore": 10,

    "training": [

    {
  "id": "p2-l2-t1",
  "type": "singleChoice",
  "prompt": "Mini-texte : « Servus ad templum venit. » Quel groupe indique la direction ?",
  "options": [
    "Servus venit",
    "ad templum",
    "templum venit",
    "Servus templum"
  ],
  "expected": "ad templum",
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
  "prompt": "« Servus ad templum venit » : où va le serviteur ?",
  "options": [ "vers le temple", "dans la boutique", "hors de la rue", "devant la fontaine" ],
  "expected": "vers le temple",
  "shuffle": true,
  "points": 1
},

      {
  "id": "p2-l2-t4",
  "type": "singleChoice",
  "prompt": "« Ancilla ex taberna exit » : la servante…",
  "options": [ "sort de la boutique", "entre dans la boutique", "reste devant la boutique", "va au temple" ],
  "expected": "sort de la boutique",
  "shuffle": true,
  "points": 1
},

    {
  "id": "p2-l2-t5",
  "type": "multipleChoice",
  "prompt": "Mini-texte : « Ancilla ex taberna exit et ad fontem venit. » Coche les deux informations justes.",
  "options": [
    "La servante sort de la boutique",
    "La servante va vers la fontaine",
    "La servante reste dans la boutique",
    "La servante vient de la fontaine"
  ],
  "expected": [
    "La servante sort de la boutique",
    "La servante va vers la fontaine"
  ],
  "shuffle": true,
  "points": 1
},

    {
  "id": "p2-l2-t6",
  "type": "multipleChoice",
  "prompt": "Coche les deux traductions possibles de « Canis ante ianuam stat ».",
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
  "type": "matching",
  "prompt": "Mini-texte : « Femina in via ambulat. Servus ad fontem venit. Ancilla ex taberna exit. Canis ante ianuam stat. » Associe chaque groupe à sa valeur.",
  "pairs": [
    {
      "left": "in via",
      "right": "lieu où l’on est"
    },
    {
      "left": "ad fontem",
      "right": "lieu vers lequel on va"
    },
    {
      "left": "ex taberna",
      "right": "lieu d’où l’on vient"
    },
    {
      "left": "ante ianuam",
      "right": "position devant"
    }
  ],
  "rightOptions": [
    "lieu où l’on est",
    "lieu vers lequel on va",
    "lieu d’où l’on vient",
    "position devant"
  ],
  "expected": {
    "in via": "lieu où l’on est",
    "ad fontem": "lieu vers lequel on va",
    "ex taberna": "lieu d’où l’on vient",
    "ante ianuam": "position devant"
  },
  "points": 1
}

    ],

    "production": [

      {
  "id": "p2-l2-p1",
  "type": "textInput",
  "prompt": "Traduis en français : Femina in via ambulat",
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
    "ignoreDiacritics": true,
    "ignoreFrenchDeterminers": true
  },
  "gradingFocus": "Lire correctement un sujet, un groupe de lieu et un verbe de déplacement simple.",
  "rejectIf": [
    "contre-sens sur le lieu",
    "verbe principal mal compris",
    "réponse hors-sujet"
  ],
  "tests": [
    {
      "input": "une femme marche dans la rue",
      "isCorrect": true
    },
    {
      "input": "la dame se promène dans la rue",
      "isCorrect": true
    },
    {
      "input": "la femme marche vers la rue",
      "isCorrect": false
    },
    {
      "input": "les femmes marchent dans la rue",
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

  "prompt": "Écris en latin le trajet du témoin : vers le temple ; dans la rue ; hors de la boutique ; devant la porte.",

  "expected": "ad templum ; in via ; ex taberna ; ante ianuam",

  "acceptedAnswers": [

    "ad templum ; in via ; ex taberna ; ante ianuam",
    "ad templum, in via, ex taberna, ante ianuam",
    "ad templum / in via / ex taberna / ante ianuam"

  ],

  "answerConfig": {

    "type": "one-of",

    "language": "latin",

    "accepted": [

      "ad templum ; in via ; ex taberna ; ante ianuam",
      "ad templum, in via, ex taberna, ante ianuam",
      "ad templum / in via / ex taberna / ante ianuam"

    ]

  },

  "points": 1,

  "canonicalAnswer": "ad templum ; in via ; ex taberna ; ante ianuam",

  "normalization": {

    "trim": true,

    "collapseSpaces": true,

    "ignoreCase": true,

    "ignorePunctuation": true,

    "normalizeApostrophes": true,

    "ignoreDiacritics": true

  },

  "gradingFocus": "Production correcte des quatre prépositions de la leçon et association juste avec le groupe nominal.",

  "rejectIf": [

    "préposition incorrecte",

    "ordre des segments non respecté",

    "forme latine impossible au niveau de la leçon"

  ],

  "tests": [

    {

      "input": "ad templum ; in via ; ex taberna ; ante ianuam",

      "isCorrect": true

    },

    {

      "input": "ad templum, in via, ex taberna, ante ianuam",

      "isCorrect": true

    },

    {

      "input": "ad templum / in via / ex taberna / ante ianuam",

      "isCorrect": true

    },

    {

      "input": "in templum ; ad via ; ex taberna ; ante ianuam",

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

    "title": "Testis prima ad fontem - 1ère déclinaison",

    subtitle: headerContexts5eP2["p2-l3"],

    "objective": "Lire la première déposition d’une témoin.",

    "lessonPoint": "La 1ère déclinaison rassemble beaucoup de noms féminins en -a. La terminaison -a est souvent le sujet (nominatif), -am souvent le complément objet (accusatif).",

    "canDo": [

      "Je reconnais -a / -am.",

      "Je repère l’objet d’une action.",

      "Je traduis un court témoignage."

    ],

    "lexicon": [

      "femina (nom.), feminam (acc.) = femme",

      "amica (nom.), amicam (acc.) = amie",

      "taberna (nom.), tabernam (acc.) = boutique",

      "via (nom.), viam (acc.) = rue",

      "porta (nom.), portam (acc.) = porte",

      "aqua (nom.), aquam (acc.) = eau",

      "ad fontem = vers la fontaine",
      "cena (nom.), cenae (gén.) = repas, dîner",
"rosa (nom.), rosae (gén.) = rose",
"venio, venis = je viens, tu viens",

      "porto, portat = je porte ; il/elle porte",

      "specto, spectat = je regarde ; il/elle regarde",

      "narro, narrat = je raconte ; il/elle raconte"

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
  "type": "multipleChoice",
  "prompt": "Coche les deux formes de 1re déclinaison qui peuvent être COD dans une phrase simple.",
  "options": [
    "feminam",
    "amicam",
    "taberna",
    "servus"
  ],
  "expected": [
    "feminam",
    "amicam"
  ],
  "shuffle": true,
  "points": 1
},

     {
  "id": "p2-l3-t5",
  "type": "multipleChoice",
  "prompt": "Mini-texte : « Femina aquam portat. » Choisis les deux affirmations justes.",
  "options": [
    "femina est le sujet",
    "aquam est le COD",
    "portat est le sujet",
    "aquam est au nominatif"
  ],
  "expected": [
    "femina est le sujet",
    "aquam est le COD"
  ],
  "shuffle": true,
  "points": 1
},

      {

        "id": "p2-l3-t4",

        "type": "singleChoice",

        "prompt": "Quelle terminaison de la 1ère déclinaison indique souvent que le mot est complément objet ?",

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

  "type": "matching",

  "prompt": "Associe chaque mot à sa fonction dans « 𝘍𝘦𝘮𝘪𝘯𝘢 𝘢𝘲𝘶𝘢𝘮 𝘱𝘰𝘳𝘵𝘢𝘵 ».",

  "pairs": [

    {

      "left": "femina",

      "right": "sujet"

    },

    {

      "left": "aquam",

      "right": "COD"

    },

    {

      "left": "portat",

      "right": "verbe"

    }

  ],

  "rightOptions": [

    "verbe",

    "sujet",

    "COD"

  ],

  "expected": {

    "femina": "sujet",

    "aquam": "COD",

    "portat": "verbe"

  },

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
  "prompt": "Mini-texte : « Femina fontem spectat. Servus ad viam venit. » Coche les deux traductions exactes.",
  "options": [
    "La femme regarde la fontaine",
    "Le serviteur vient vers la rue",
    "La femme quitte la fontaine",
    "Le serviteur entre dans la maison"
  ],
  "expected": [
    "La femme regarde la fontaine",
    "Le serviteur vient vers la rue"
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

  "prompt": "Choisis un COD dans la liste, puis traduis en latin : « La femme porte … ».\nListe : de l'eau / une rose / le repas",

  "expected": "femina aquam portat",

  "acceptedAnswers": [

    "femina aquam portat",

    "femina portat aquam",

    "aquam femina portat",

    "aquam portat femina",

    "portat femina aquam",

    "portat aquam femina",

 

    "femina rosam portat",

    "femina portat rosam",

    "rosam femina portat",

    "rosam portat femina",

    "portat femina rosam",

    "portat rosam femina",

 

    "femina cenam portat",

    "femina portat cenam",

    "cenam femina portat",

    "cenam portat femina",

    "portat femina cenam",

    "portat cenam femina"

  ],

  "answerConfig": {

    "type": "translation-segment",

    "language": "latin",

    "accepted": [

      "femina aquam portat",

      "femina portat aquam",

      "aquam femina portat",

      "aquam portat femina",

      "portat femina aquam",

      "portat aquam femina",

 

      "femina rosam portat",

      "femina portat rosam",

      "rosam femina portat",

      "rosam portat femina",

      "portat femina rosam",

      "portat rosam femina",

 

      "femina cenam portat",

      "femina portat cenam",

      "cenam femina portat",

      "cenam portat femina",

      "portat femina cenam",

      "portat cenam femina"

    ]

  },

  "points": 1,

  "canonicalAnswer": "femina aquam portat",

  "normalization": {

    "trim": true,

    "collapseSpaces": true,

    "ignoreCase": true,

    "ignorePunctuation": true,

    "normalizeApostrophes": true,

    "ignoreDiacritics": true

  },

  "gradingFocus": "Produire une phrase simple avec un COD correctement mis à l’accusatif.",

  "rejectIf": [

    "COD laissé au nominatif",

    "verbe incorrect",

    "forme latine impossible au niveau de la leçon"

  ],

  "tests": [

    {

      "input": "femina aquam portat",

      "isCorrect": true

    },

    {

      "input": "portat rosam femina",

      "isCorrect": true

    },

    {

      "input": "cenam portat femina",

      "isCorrect": true

    },

    {

      "input": "femina cena portat",

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

    "title": "Servus, dominus, vicinus - 2ème déclinaison",

    subtitle: headerContexts5eP2["p2-l4"],

    "objective": "Distinguer sujet et objet avec les masculins en -us/-um.",

    "lessonPoint": "Je regarde les terminaisons (ou 'désinences') : -us (souvent sujet), -um (souvent complément objet).",

    "canDo": [

      "Je reconnais des masculins de 2e déclinaison.",

      "Je distingue qui agit et qui subit.",

      "Je traduis une phrase d’accusation."

    ],

    "lexicon": [

      "servus (nom.), servum (acc.) = esclave, serviteur",

      "dominus (nom.), dominum (acc.) = maître, maître de maison",

      "vicinus (nom.), vicinum (acc.) = voisin",

      "amicus (nom.), amicum (acc.) = ami",

      "murus (nom.), murum (acc.) = mur",

      "canis = chien",

      "audio, audit = j’entends ; il/elle entend",

      "accuso, accusat = j’accuse ; il/elle accuse",

      "voco, vocat = j’appelle ; il/elle appelle",

      "timeo, timet = je crains ; il/elle craint"

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

  "type": "matching",

  "prompt": "Associe chaque mot à sa fonction dans « 𝘋𝘰𝘮𝘪𝘯𝘶𝘴 𝘷𝘪𝘤𝘪𝘯𝘶𝘮 𝘢𝘤𝘤𝘶𝘴𝘢𝘵 ».",

  "pairs": [

    {

      "left": "dominus",

      "right": "sujet"

    },

    {

      "left": "vicinum",

      "right": "COD"

    },

    {

      "left": "accusat",

      "right": "verbe"

    }

  ],

  "rightOptions": [

    "verbe",

    "sujet",

    "COD"

  ],

  "expected": {

    "dominus": "sujet",

    "vicinum": "COD",

    "accusat": "verbe"

  },

  "points": 1

},

      {

        "id": "p2-l4-t7",

        "type": "multipleChoice",

        "prompt": "Mini-texte : « 𝑆𝑒𝑟𝑣𝑢𝑠 𝑐𝑎𝑛𝑒𝑚 𝑡𝑖𝑚𝑒𝑡. 𝐷𝑜𝑚𝑖𝑛𝑢𝑠 𝑠𝑒𝑟𝑣𝑢𝑚 𝑣𝑜𝑐𝑎𝑡. » Coche les deux informations explicitement données par le texte.",

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
  "le voisin accuse ce serviteur",
  "le voisin accuse cet esclave",
  "le voisin met en cause le serviteur",
  "le voisin met en cause l'esclave"
],
"answerConfig": {
  "type": "translation-segment",
  "language": "fr",
  "accepted": [
    "le voisin accuse le serviteur",
    "le voisin accuse l'esclave",
    "le voisin accuse ce serviteur",
    "le voisin accuse cet esclave",
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

  "prompt": "Choisis un sujet et un COD dans la liste, puis traduis en latin : « … accuse … ».\nListe : le maître / le voisin / le serviteur",

  "expected": "dominus vicinum accusat",

  "acceptedAnswers": [

    "dominus vicinum accusat",

    "dominus accusat vicinum",

    "vicinum dominus accusat",

    "vicinum accusat dominus",

    "accusat dominus vicinum",

    "accusat vicinum dominus",

 

    "dominus servum accusat",

    "dominus accusat servum",

    "servum dominus accusat",

    "servum accusat dominus",

    "accusat dominus servum",

    "accusat servum dominus",

 

    "vicinus dominum accusat",

    "vicinus accusat dominum",

    "dominum vicinus accusat",

    "dominum accusat vicinus",

    "accusat vicinus dominum",

    "accusat dominum vicinus",

 

    "vicinus servum accusat",

    "vicinus accusat servum",

    "servum vicinus accusat",

    "servum accusat vicinus",

    "accusat vicinus servum",

    "accusat servum vicinus",

 

    "servus dominum accusat",

    "servus accusat dominum",

    "dominum servus accusat",

    "dominum accusat servus",

    "accusat servus dominum",

    "accusat dominum servus",

 

    "servus vicinum accusat",

    "servus accusat vicinum",

    "vicinum servus accusat",

    "vicinum accusat servus",

    "accusat servus vicinum",

    "accusat vicinum servus"

  ],

  "answerConfig": {

    "type": "translation-segment",

    "language": "latin",

    "accepted": [

      "dominus vicinum accusat",

      "dominus accusat vicinum",

      "vicinum dominus accusat",

      "vicinum accusat dominus",

      "accusat dominus vicinum",

      "accusat vicinum dominus",

 

      "dominus servum accusat",

      "dominus accusat servum",

      "servum dominus accusat",

      "servum accusat dominus",

      "accusat dominus servum",

      "accusat servum dominus",

 

      "vicinus dominum accusat",

      "vicinus accusat dominum",

      "dominum vicinus accusat",

      "dominum accusat vicinus",

      "accusat vicinus dominum",

      "accusat dominum vicinus",

 

      "vicinus servum accusat",

      "vicinus accusat servum",

      "servum vicinus accusat",

      "servum accusat vicinus",

      "accusat vicinus servum",

      "accusat servum vicinus",

 

      "servus dominum accusat",

      "servus accusat dominum",

      "dominum servus accusat",

      "dominum accusat servus",

      "accusat servus dominum",

      "accusat dominum servus",

 

      "servus vicinum accusat",

      "servus accusat vicinum",

      "vicinum servus accusat",

      "vicinum accusat servus",

      "accusat servus vicinum",

      "accusat vicinum servus"

    ]

  },

  "points": 1,

  "canonicalAnswer": "dominus vicinum accusat",

  "normalization": {

    "trim": true,

    "collapseSpaces": true,

    "ignoreCase": true,

    "ignorePunctuation": true,

    "normalizeApostrophes": true,

    "ignoreDiacritics": true

  },

  "gradingFocus": "Produire une phrase latine correcte avec sujet au nominatif et COD à l’accusatif.",

  "rejectIf": [

    "sujet et COD confondus",

    "COD laissé au nominatif",

    "forme verbale incorrecte",

    "réponse hors liste"

  ],

  "tests": [

    {

      "input": "dominus vicinum accusat",

      "isCorrect": true

    },

    {

      "input": "servus dominum accusat",

      "isCorrect": true

    },

    {

      "input": "vicinus servus accusat",

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

    "title": "Donum, signum, periculum - Le genre neutre",

    subtitle: headerContexts5eP2["p2-l5"],

    "objective": "Comprendre le neutre singulier dans les indices de l’enquête.",

    "lessonPoint": "2e déclinaison / Au neutre singulier, nominatif et accusatif ont la même terminaison : -um.",

    "canDo": [

      "Je reconnais des neutres en -um.",

      "Je comprends la règle nominatif = accusatif.",

      "Je traduis des phrases d’indices."

    ],

    "lexicon": [

      "donum (nom./acc.) = offrande, cadeau",

      "signum (nom./acc.) = signe, marque, indice",

      "templum (nom./acc.) = temple",

      "periculum (nom./acc.) = danger",

      "verbum (nom./acc.) = mot",

      "malum (nom./acc.) = mal, mauvaise chose",

      "sum, est, sunt = je suis, il/elle est, ils/elles sont",

      "video, videt = je vois ; il/elle voit",

      "habeo, habet = j’ai ; il/elle a",

      "celo, celat = je cache ; il/elle cache",

      "invenio, invenit = je trouve ; il/elle trouve"

    ],

    "maxScore": 10,

    "training": [

     {
  "id": "p2-l5-t1",
  "type": "singleChoice",
  "prompt": "Mini-texte : « Femina, servus, dominus et donum in templo sunt. » Quel mot peut garder la même forme comme sujet ou comme complément d’objet ?",
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

          "l'indice",

          "le maître",

          "la boutique",

          "le vide"

        ],

        "expected": "l'indice",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p2-l5-t4",

        "type": "singleChoice",

        "prompt": "Au neutre singulier, que remarques-tu ?",

        "options": [

          "Nominatif = accusatif",

          "Le mot finit toujours en -a",

          "Le verbe disparaît",

          "L'ordre des mots est toujours fixe"

        ],

        "expected": "Nominatif = accusatif",

        "shuffle": true,

        "points": 1

      },

      {

        "id": "p2-l5-t5",

        "type": "multipleChoice",

        "prompt": "Traductions recevables : « 𝑇𝑒𝑚𝑝𝑙𝑢𝑚 𝑚𝑎𝑙𝑢𝑚 𝑐𝑒𝑙𝑎𝑡 ».",

        "options": [

          "Le temple recèle un mal",

          "Le temple cache une mauvaise chose",

          "Le mal cache le temple",

          "Le temple dissimule un cadeau"

        ],

        "expected": [

          "Le temple recèle un mal",

          "Le temple cache une mauvaise chose"

        ],

        "shuffle": true,

        "points": 1

      },

      {

  "id": "p2-l5-t6",

  "type": "matching",

  "prompt": "Associe chaque mot à sa fonction dans « 𝘝𝘪𝘤𝘪𝘯𝘶𝘴 𝘥𝘰𝘯𝘶𝘮 𝘪𝘯𝘷𝘦𝘯𝘪𝘵 ».",

  "pairs": [

    {

      "left": "vicinus",

      "right": "sujet"

    },

    {

      "left": "donum",

      "right": "COD"

    },

    {

      "left": "invenit",

      "right": "verbe"

    }

  ],

  "rightOptions": [

    "verbe",

    "sujet",

    "COD"

  ],

  "expected": {

    "vicinus": "sujet",

    "donum": "COD",

    "invenit": "verbe"

  },

  "points": 1

},

      {

  "id": "p2-l5-t7",

  "type": "multipleChoice",

  "prompt": "Mini-texte : « 𝘋𝘰𝘯𝘶𝘮 𝘪𝘯 𝘵𝘦𝘮𝘱𝘭𝘰 𝘦𝘴𝘵. 𝘚𝘪𝘨𝘯𝘶𝘮 𝘪𝘯 𝘮𝘶𝘳𝘰 𝘦𝘴𝘵. » Coche les trois noms du dictionnaire qui sont neutres.",

  "options": [

    "donum",

    "templum",

    "signum",

    "murus"

  ],

  "expected": [

    "donum",

    "templum",

    "signum"

  ],

  "shuffle": true,

  "points": 1

},

    ],

    "production": [

      {

        "id": "p2-l5-p1",

        "type": "textInput",

        "prompt": "Traduis : « 𝑑𝑜𝑛𝑢𝑚 𝑖𝑛 𝑡𝑒𝑚𝑝𝑙𝑜 𝑒𝑠𝑡 »",

        "expected": "l'offrande est dans le temple",

        "acceptedAnswers": [

          "l'offrande est dans le temple",

          "une offrande est dans le temple",

          "le cadeau est dans le temple",

          "un cadeau est dans le temple",

          "le don est dans le temple",

          "un don est dans le temple",

          "l'offrande se trouve dans le temple",

          "une offrande se trouve dans le temple",

          "le cadeau se trouve dans le temple",

          "un cadeau se trouve dans le temple",

          "le don se trouve dans le temple",

          "un don se trouve dans le temple",

          "il y a une offrande dans le temple",

          "il y a un cadeau dans le temple",

          "il y a un don dans le temple"

        ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted": [

            "l'offrande est dans le temple",

            "une offrande est dans le temple",

            "le cadeau est dans le temple",

            "un cadeau est dans le temple",

            "le don est dans le temple",

            "un don est dans le temple",

            "l'offrande se trouve dans le temple",

            "une offrande se trouve dans le temple",

            "le cadeau se trouve dans le temple",

            "un cadeau se trouve dans le temple",

            "le don se trouve dans le temple",

            "un don se trouve dans le temple",

            "il y a une offrande dans le temple",

            "il y a un cadeau dans le temple",

            "il y a un don dans le temple"

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

        "prompt": "Traduis en latin : « Le voisin trouve le signe ».",

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
  "prompt": "Complète en latin : « Le temple cache un danger » = « Templum ____ celat ».",
  "expected": "periculum",
  "acceptedAnswers": [
    "periculum"
  ],
  "answerConfig": {
    "type": "one-of",
    "language": "latin",
    "accepted": [
      "periculum"
    ]
  },
  "points": 1,
  "canonicalAnswer": "periculum",
  "normalization": {
    "trim": true,
    "collapseSpaces": true,
    "ignoreCase": true,
    "ignorePunctuation": true,
    "normalizeApostrophes": true,
    "ignoreDiacritics": true
  },
  "gradingFocus": "Produire correctement un neutre singulier employé comme complément objet.",
  "rejectIf": [
    "mot hors leçon",
    "forme inexistante",
    "réponse vide"
  ],
  "tests": [
    {
      "input": "periculum",
      "isCorrect": true
    },
    {
      "input": "periculus",
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

    "title": "Video, audio, accuso - Présent singulier",

    subtitle: headerContexts5eP2["p2-l6"],

    "objective": "Comprendre le présent singulier dans les témoignages.",

    "lessonPoint": "Terminaisons du présent, au singulier : -o = je, -s = tu, -t = il/elle.",

    "canDo": [

      "Je reconnais je/tu/il-elle au présent.",

      "Je repère qui parle dans un témoignage.",

      "Je traduis une phrase de déposition."

    ],

    "lexicon": [

      "video, vides, videt = je vois, tu vois, il/elle voit",

      "audio, audis, audit = j’entends, tu entends, il/elle entend",

      "accuso, accusas, accusat = j’accuse, tu accuses, il/elle accuse",

      "nego, negas, negat = je nie, tu nies, il/elle nie",

      "timeo, times, timet = je crains, tu crains, il/elle craint",

      "porto, portas, portat = je porte, tu portes, il/elle porte",

      "rogo, rogas, rogat = je demande, tu demandes, il/elle demande",

      "narro, narras, narrat = je raconte, tu racontes, il/elle raconte",

      "habito, habitas, habitat = j’habite, tu habites, il/elle habite",
      "clamo, clamas = je crie, tu cries",

      "ego, tu, ille / illa = je, tu, il / elle",

      "periculum (nom./acc.) = danger",

      "in via = dans la rue"

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
  "type": "singleChoice",
  "prompt": "Quelle série contient seulement des formes de 2e personne du singulier ?",
  "options": [
    "audis, negas, rogas",
    "audio, nego, rogo",
    "audit, negat, rogat",
    "habito, audis, timet"
  ],
  "expected": "audis, negas, rogas",
  "shuffle": true,
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

        "prompt": "« Tu entends » =",

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

        "prompt": "Sélectionne les formes de 1re personne du singulier.",

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
  "type": "textInput",
  "prompt": "Traduis en latin en plaçant le verbe à la fin : « Je crie dans la rue. »",
  "expected": "ego in via clamo",
  "acceptedAnswers": [
    "ego in via clamo",
    "in via ego clamo",
    "in via clamo"
  ],
  "answerConfig": {
    "type": "one-of",
    "language": "latin",
    "accepted": [
      "ego in via clamo",
      "in via ego clamo",
      "in via clamo"
    ]
  },
  "points": 1,
  "canonicalAnswer": "ego in via clamo",
  "normalization": {
    "trim": true,
    "collapseSpaces": true,
    "ignoreCase": true,
    "ignorePunctuation": true,
    "normalizeApostrophes": true,
    "ignoreDiacritics": true
  },
  "gradingFocus": "Produire une phrase latine correcte avec le verbe placé à la fin.",
  "rejectIf": [
    "verbe non placé en fin de phrase",
    "préposition séparée de son groupe",
    "forme latine impossible au niveau de la leçon"
  ],
  "tests": [
    { "input": "ego in via clamo", "isCorrect": true },
    { "input": "in via ego clamo", "isCorrect": true },
    { "input": "in via clamo", "isCorrect": true },
    { "input": "ego clamo in via", "isCorrect": false }
  ]
}

    ],

    "production": [

      {

        "id": "p2-l6-p1",

        "type": "textInput",

        "prompt": "Traduis : « Audio canem »",

        "expected": "j'entends le chien",

       "acceptedAnswers": [
  "j'entends le chien",
  "j'entends ce chien",
  "j'écoute le chien",
  "j'écoute ce chien"
],
"answerConfig": {
  "type": "translation-segment",
  "language": "fr",
  "accepted": [
    "j'entends le chien",
    "j'entends ce chien",
    "j'écoute le chien",
    "j'écoute ce chien"
  ],
  "synonyms": []
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

  "prompt": "Écris en latin : « je crie ; tu cries ; il / elle crie ».",

  "expected": "clamo ; clamas ; clamat",

  "acceptedAnswers": [

    "clamo ; clamas ; clamat",
    "clamo, clamas, clamat",
    "clamo clamas clamat"

  ],

  "answerConfig": {

    "type": "one-of",

    "language": "latin",

    "accepted": [

      "clamo ; clamas ; clamat",
      "clamo, clamas, clamat",
      "clamo clamas clamat"

    ]

  },

  "points": 1,

  "canonicalAnswer": "clamo ; clamas ; clamat",

  "normalization": {

    "trim": true,

    "collapseSpaces": true,

    "ignoreCase": true,

    "ignorePunctuation": true,

    "normalizeApostrophes": true,

    "ignoreDiacritics": true

  },

  "gradingFocus": "Produire correctement les trois formes du singulier : 1re, 2e et 3e personne.",

  "rejectIf": [

    "personnes inversées",

    "forme verbale incorrecte",

    "réponse hors-sujet"

  ],

  "tests": [

    {

      "input": "clamo ; clamas ; clamat",

      "isCorrect": true

    },

    {

      "input": "clamo, clamas, clamat",

      "isCorrect": true

    },

    {

      "input": "clamas ; clamo ; clamat",

      "isCorrect": false

    }

  ]

},

{

  "id": "p2-l6-p3",

  "type": "textInput",

  "prompt": "Complète : En latin, la terminaison du verbe indique la _______ qui parle ou agit.",

  "expected": "personne",

  "acceptedAnswers": [

    "personne",

    "personne grammaticale"

  ],

  "answerConfig": {

    "type": "translation-segment",

    "language": "fr",

    "accepted": [

      "personne",

      "personne grammaticale"

    ]

  },

  "points": 1,

  "canonicalAnswer": "personne",

  "normalization": {

    "trim": true,

    "collapseSpaces": true,

    "ignoreCase": true,

    "ignorePunctuation": true,

    "normalizeApostrophes": true,

    "ignoreDiacritics": true

  },

  "gradingFocus": "Comprendre que la terminaison verbale latine porte déjà l’information de personne.",

  "rejectIf": [

    "réponse hors-sujet",

    "confusion entre temps et personne",

    "confusion entre sujet et verbe"

  ],

  "tests": [

    {

      "input": "personne",

      "isCorrect": true

    },

    {

      "input": "personne grammaticale",

      "isCorrect": true

    },

    {

      "input": "temps",

      "isCorrect": false

    }

  ]

}

    ],

    "summary": {

      "retains": [

        "J'identifie la personne qui parle ou agit grâce à la terminaison.",

      ],

      "cahier": [

        "Présent, au singulier : -o / -s / -t",

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

    "title": "Videmus, auditis, clamant - Présent pluriel",

    subtitle: headerContexts5eP2["p2-l7"],

    "objective": "Lire les formes du présent pluriel dans une rumeur collective.",

    "lessonPoint": "Au pluriel : -mus (nous), -tis (vous), -nt (ils/elles).",

    "canDo": [

      "Je reconnais les personnes du pluriel.",

      "Je comprends qui parle au nom du groupe.",

      "Je traduis des phrases collectives."

    ],

    "lexicon": [

      "video, videmus = je vois ; nous voyons",

      "audio, auditis = j’entends ; vous entendez",

      "clamo, clamant = je crie ; ils/elles crient",

      "habito, habitant = j’habite ; ils/elles habitent",

      "porto, portant = je porte ; ils/elles portent",

      "intro, intrant = j’entre ; ils/elles entrent",

      "curro, currunt = je cours ; ils/elles courent",

      "quaero, quaerimus = je cherche ; nous cherchons",

      "rogo, rogatis = je demande ; vous demandez",

      "respondeo, respondent = je réponds ; ils/elles répondent"

    ],

    "maxScore": 10,

    "training": [

      {

        "id": "p2-l7-t1",

        "type": "singleChoice",

        "prompt": "Quel mot signifie « Nous voyons » ?",

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

        "prompt": "Associe la terminaison et la personne au pluriel.",

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

          "les voisines"

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
          "audit",

          "auditis",
          "vides",

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

        "prompt": "Mini-texte : « 𝑄𝑢𝑎𝑒𝑟𝑖𝑚𝑢𝑠 𝑑𝑜𝑛𝑢𝑚. 𝑅𝑜𝑔𝑎𝑡𝑖𝑠 𝑡𝑒𝑠𝑡𝑒𝑚. 𝑉𝑖𝑐𝑖𝑛𝑖 𝑟𝑒𝑠𝑝𝑜𝑛𝑑𝑒𝑛𝑡. » Quels sujets, ici, parlent ou agissent collectivement ?",

        "options": [

          "Nous",

          "Ceux qui cherchent",

          "Vous",

          "Un certain Roger",

          "Les voisins",

          "Ceux qui répondent",

          "Un seul témoin"

        ],

        "expected": [

          "Nous",

          "Ceux qui cherchent",

          "Vous",

          "Les voisins",

          "Ceux qui répondent"

        ],

        "shuffle": true,

        "points": 1

      },

     {

  "id": "p2-l7-t7",

  "type": "matching",

  "prompt": "Associe chaque forme à ce qu’elle indique dans « 𝘝𝘪𝘤𝘪𝘯𝘪 𝘪𝘯 𝘷𝘪𝘢 𝘤𝘭𝘢𝘮𝘢𝘯𝘵 ».",

  "pairs": [

    {

      "left": "vicini",

      "right": "nom au pluriel"

    },

    {

      "left": "clamant",

      "right": "verbe au pluriel"

    },

    {

      "left": "via",

      "right": "nom au singulier"

    }

  ],

  "rightOptions": [

    "verbe au pluriel",

    "nom au pluriel",

    "nom au singulier"

  ],

  "expected": {

    "vicini": "nom au pluriel",

    "clamant": "verbe au pluriel",

    "via": "nom au singulier"

  },

  "points": 1

},

    ],

    "production": [

      {

        "id": "p2-l7-p1",

        "type": "textInput",

        "prompt": "Traduis : « 𝑑𝑜𝑛𝑢𝑚 𝑞𝑢𝑎𝑒𝑟𝑖𝑚𝑢𝑠 »",

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

        "prompt": "Traduis en latin : « Les voisins crient devant la porte. »",

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

  "prompt": "Écris en latin les trois formes du pluriel : « nous crions ; vous criez ; ils / elles crient ».",

  "expected": "clamamus ; clamatis ; clamant",

  "acceptedAnswers": [

    "clamamus ; clamatis ; clamant",
    "clamamus, clamatis, clamant"

  ],

  "answerConfig": {

    "type": "one-of",

    "language": "latin",

    "accepted": [

      "clamamus ; clamatis ; clamant",
      "clamamus, clamatis, clamant"

    ]

  },

  "points": 1,

  "canonicalAnswer": "clamamus ; clamatis ; clamant",

  "normalization": {

    "trim": true,

    "collapseSpaces": true,

    "ignoreCase": true,

    "ignorePunctuation": true,

    "normalizeApostrophes": true,

    "ignoreDiacritics": true

  },

  "gradingFocus": "Produire correctement les trois formes du pluriel : 1re, 2e et 3e personne.",

  "rejectIf": [

    "personnes inversées",

    "forme verbale incorrecte",

    "réponse hors-sujet"

  ],

  "tests": [

    {

      "input": "clamamus ; clamatis ; clamant",

      "isCorrect": true

    },

    {

      "input": "clamamus, clamatis, clamant",

      "isCorrect": true

    },

    {

      "input": "clamatis ; clamamus ; clamant",

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

    "title": "Tabella falsa - Vrai et faux",

    subtitle: headerContexts5eP2["p2-l8"],

    "objective": "Lire un court texte suspect autour d’une tablette falsifiée.",

    "lessonPoint": "Je lis un petit texte en vérifiant les mots-clés verum/falsum et les verbes d’action.",

    "canDo": [

      "Je lis un micro-texte continu.",

      "Je repère vrai/faux.",

      "Je formule une hypothèse simple."

    ],

    "lexicon": [

      "tabella (nom.), tabellam (acc.) = tablette",
"falsus, falsa, falsum = faux, fausse",
"scribo, scribit = j’écris ; il/elle écrit",
"muto, mutat = je change ; il/elle change",
"mutatum est = a été changé, est changé",
"verum (nom./acc.) = vrai",
"falsum (nom./acc.) = faux",
"nomen (nom./acc.) = nom",
"signum (nom./acc.) = signe",
"vicina, vicinae, f. = voisine",
"lego, legit = je lis ; il/elle lit",
"ostendo, ostendit = je montre ; il/elle montre"

    ],

    "maxScore": 10,

    "training": [

      {

        "id": "p2-l8-t1",

        "type": "singleChoice",

        "prompt": "Le contraire de « 𝑇𝑎𝑏𝑒𝑙𝑙𝑎 𝑓𝑎𝑙𝑠𝑎 » est…",

        "options": [

          "Tabella vera",

          "Tabella falsum",

          "Tabella mutata",

          "Tabella signum"

        ],

        "expected": "Tabella vera",

        "shuffle": true,

        "points": 1

      },

      {
  "id": "p2-l8-t2",
  "type": "multipleChoice",
  "prompt": "Mini-texte : « Tabella falsa est. Nomen mutatum est. Signum manet. » Coche les deux informations explicitement données.",
  "options": [
    "La tablette est fausse",
    "Le nom a été changé",
    "Le signe a disparu",
    "La voisine s’enfuit"
  ],
  "expected": [
    "La tablette est fausse",
    "Le nom a été changé"
  ],
  "shuffle": true,
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

        "prompt": "Texte court : « 𝑁𝑜𝑚𝑒𝑛 𝑚𝑢𝑡𝑎𝑡𝑢𝑚 𝑒𝑠𝑡. 𝑉𝑒𝑟𝑢𝑚 𝑛𝑜𝑛 𝑒𝑠𝑡. » Quelles propositions sont exactes ?",

        "options": [

          "Le nom est changé",

          "Le texte n'est pas vrai",

          "Le texte est sûr",

          "Personne ne change"

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

  "type": "matching",

  "prompt": "Associe chaque mot à sa fonction dans « 𝘝𝘪𝘤𝘪𝘯𝘶𝘴 𝘵𝘢𝘣𝘦𝘭𝘭𝘢𝘮 𝘭𝘦𝘨𝘪𝘵 ».",

  "pairs": [

    {

      "left": "vicinus",

      "right": "sujet"

    },

    {

      "left": "tabellam",

      "right": "COD"

    },

    {

      "left": "legit",

      "right": "verbe"

    }

  ],

  "rightOptions": [

    "verbe",

    "sujet",

    "COD"

  ],

  "expected": {

    "vicinus": "sujet",

    "tabellam": "COD",

    "legit": "verbe"

  },

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

          "Il s'agit d'une phrase non-verbale"

        ],

        "expected": "legit",

        "shuffle": true,

        "points": 1

      },

       {
  "id": "p2-l8-t7",
  "type": "multipleChoice",
  "prompt": "Mini-texte : « Vicina tabellam legit et signum ostendit. » Coche les deux informations justes.",
  "options": [
    "La voisine lit la tablette",
    "La voisine montre un signe",
    "Le voisin cache la tablette",
    "Le signe disparaît"
  ],
  "expected": [
    "La voisine lit la tablette",
    "La voisine montre un signe"
  ],
  "shuffle": true,
  "points": 1
}

    ],

    "production": [

      {

        "id": "p2-l8-p1",

        "type": "textInput",

        "prompt": "Traduis : « Tabella falsa est »",

        "expected": "la tablette est falsifiée",

        "acceptedAnswers": [

          "la tablette est falsifiée",

          "la tablette est fausse",

          "la tablette est truquée",

          "la tablette est trafiquée",

          "une tablette est falsifiée",

          "une tablette est fausse",

          "une tablette est truquée",

          "une tablette est trafiquée"

        ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "fr",

          "accepted": [

            "la tablette est falsifiée",

            "la tablette est fausse",

            "la tablette est truquée",

            "la tablette est trafiquée",

            "une tablette est falsifiée",

            "une tablette est fausse",

            "une tablette est truquée",

            "une tablette est trafiquée"

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
    "ignoreDiacritics": true,
    "ignoreFrenchDeterminers": true

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

        "prompt": "Traduis en latin : « La voisine montre la tablette ».",

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

  "prompt": "Traduis en français : « 𝘕𝘰𝘮𝘦𝘯 𝘮𝘶𝘵𝘢𝘵𝘶𝘮 𝘦𝘴𝘵. »",

  "expected": "le nom a été changé",

  "acceptedAnswers": [

    "le nom a été changé",

    "un nom a été changé",

    "le nom est changé",

    "un nom est changé",

    "le nom fut changé",

    "un nom fut changé",

 

    "le nom a été modifié",

    "un nom a été modifié",

    "le nom est modifié",

    "un nom est modifié",

    "le nom fut modifié",

    "un nom fut modifié"

  ],

  "answerConfig": {

    "type": "translation-segment",

    "language": "fr",

    "accepted": [

      "le nom a été changé",

      "un nom a été changé",

      "le nom est changé",

      "un nom est changé",

      "le nom fut changé",

      "un nom fut changé",

 

      "le nom a été modifié",

      "un nom a été modifié",

      "le nom est modifié",

      "un nom est modifié",

      "le nom fut modifié",

      "un nom fut modifié"

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
    "ignoreDiacritics": true,
    "ignoreFrenchDeterminers": true

  },

  "gradingFocus": "Comprendre que nomen mutatum est signale une modification du nom, avec plusieurs rendus français recevables.",

  "rejectIf": [

    "contre-sens",

    "réponse hors-sujet",

    "confusion sur mutatum"

  ],

  "tests": [

    {

      "input": "le nom a été changé",

      "isCorrect": true

    },

    {

      "input": "un nom est modifié",

      "isCorrect": true

    },

    {

      "input": "le nom fut changé",

      "isCorrect": true

    },

    {

      "input": "le nom est vrai",

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

        "Verum/falsum = vrai/faux | Vera/falsa = vraie/fausse",

        "Tabella falsa : nomen mutat = La tablette est fausse, le nom change"

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

    "title": "Canis ante ianuam latrat - Ordre des mots",

    subtitle: headerContexts5eP2["p2-l9"],

    "objective": "Comprendre explicitement la souplesse de l’ordre latin.",

    "lessonPoint": "Je ne traduis pas mot à mot dans l’ordre ; je repère formes et verbe.",

    "canDo": [

      "Je lis S/C/V, V/S/C, C/V/S.",

      "Je garde le même sens malgré l’ordre variable.",

      "Je justifie ma traduction."

    ],

    "lexicon": [

  "canis (nom.), canem (acc.) = chien",

  "ianua (nom.), ianuam (acc.) = porte",

  "ante + acc. = devant",
  "post + acc. = derrière",

  "in + acc. = dans, vers (mouvement)",

  "intus = dedans",
  "foris = dehors",

  "apertus,aperta = ouvert, ouverte",
  "clausus, clausa = fermé, fermée",

  "latro, latrat = j’aboie ; il/elle aboie",
  "taceo, tacet = je me tais ; il/elle se tait",

  "sto, stat = je me tiens ; il/elle se tient",

  "recuso, recusat = je refuse ; il/elle refuse",

  "intro, intrat = j’entre ; il/elle entre",

  "timeo, timet = je crains ; il/elle craint",

  "audio, audit = j’entends ; il/elle entend",

  "maneo, manet = je reste ; il/elle reste"

]

    ],

    "maxScore": 10,

    "training": [

      {

        "id": "p2-l9-t1",

        "type": "singleChoice",

        "prompt": "« 𝑙𝑎𝑡𝑟𝑎𝑡 » signifie…",

        "options": [

          "Il/ elle aboie",

          "Il/elle entre",

          "Il/elle écoute",

          "Il/elle fuit"

        ],

        "expected": "Il/elle aboie",

        "shuffle": true,

        "points": 1

      },

     {
  "id": "p2-l9-t2",
  "type": "matching",
  "prompt": "Trouve dans le lexique le contraire de chaque mot ou expression.",
  "pairs": [
    {
      "left": "ante",
      "right": "post"
    },
    {
      "left": "intus",
      "right": "foris"
    },
    {
      "left": "aperta",
      "right": "clausa"
    },
    {
      "left": "latrat",
      "right": "tacet"
    }
  ],
  "rightOptions": [
    "post",
    "foris",
    "clausa",
    "tacet"
  ],
  "expected": {
    "ante": "post",
    "intus": "foris",
    "aperta": "clausa",
    "latrat": "tacet"
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

  "prompt": "Dans « 𝐿𝑎𝑡𝑟𝑎𝑡 𝑎𝑛𝑡𝑒 𝑖𝑎𝑛𝑢𝑎𝑚 𝑐𝑎𝑛𝑖𝑠 », le sens change-t-il par rapport à « 𝐶𝑎𝑛𝑖𝑠 𝑎𝑛𝑡𝑒 𝑖𝑎𝑛𝑢𝑎𝑚 𝑙𝑎𝑡𝑟𝑎𝑡 » ?",

  "options": [

    "non, le sens de base reste le même",

    "oui, le chien devient complément",

    "oui, la porte devient sujet",

    "impossible à savoir"

  ],

  "expected": "non, le sens de base reste le même",

  "shuffle": true,

  "points": 1

},

      {

        "id": "p2-l9-t5",

        "type": "multipleChoice",

        "prompt": "Quelles phrases peuvent signifier « Le chien aboie devant la porte » ?",

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

  "type": "singleChoice",

  "prompt": "Dans « Ante ianuam manet canis », quel mot est le sujet ?",

  "options": [

    "canis",

    "ianuam",

    "ante",

    "manet"

  ],

  "expected": "canis",

  "shuffle": true,

  "points": 1

},

   {
  "id": "p2-l9-t7",
  "type": "singleChoice",
  "prompt": "Mini-texte : « Canis ex fonte venit et ante ianuam A manet, ante ianuam B recusat, et per vias currit.  » Quel endroit suspect est dénoncé par le chien ?",
  "options": [
    "la porte B",
    "la porte A",
    "la fontaine",
    "les rues"
  ],
  "expected": "la porte B",
  "shuffle": true,
  "points": 1
}
    ],

    "production": [

      {

        "id": "p2-l9-p1",

        "type": "textInput",

        "prompt": "Traduis : « Canis ianuam timet »",

        "expected": "le chien craint la porte",

     "acceptedAnswers": [
  "le chien craint la porte",
  "le chien craint cette porte",
  "le chien a peur de la porte",
  "le chien a peur de cette porte",
  "le chien redoute la porte",
  "le chien redoute cette porte"
],
"answerConfig": {
  "type": "translation-segment",
  "language": "fr",
  "accepted": [
    "le chien craint la porte",
    "le chien craint cette porte",
    "le chien a peur de la porte",
    "le chien a peur de cette porte",
    "le chien redoute la porte",
    "le chien redoute cette porte"
  ],
  "synonyms": []
},

        "points": 1,

        "canonicalAnswer": "le chien craint la porte",

        "normalization": {
    "trim": true,
    "collapseSpaces": true,
    "ignoreCase": true,
    "ignorePunctuation": true,
    "normalizeApostrophes": true,
    "ignoreDiacritics": true,
    "ignoreFrenchDeterminers": true

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

        "prompt": "Traduis en latin : « Le chien reste devant la porte ».",

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
    "ignoreDiacritics": true,
    "ignoreFrenchDeterminers": true

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

  "prompt": "Complète la traduction : « 𝑀𝑎𝑛𝑒𝑡 𝑎𝑛𝑡𝑒 𝑖𝑎𝑛𝑢𝑎𝑚 𝑐𝑎𝑛𝑖𝑠 » = « Le chien reste ... »",

  "expected": "devant la porte",

  "acceptedAnswers": [

    "devant la porte",

    "devant une porte"

  ],

  "answerConfig": {

    "type": "one-of",

    "language": "fr",

    "accepted": [

      "devant la porte",

      "devant une porte"

    ]

  },

  "points": 1,

  "canonicalAnswer": "devant la porte",

  "normalization": {
    "trim": true,
    "collapseSpaces": true,
    "ignoreCase": true,
    "ignorePunctuation": true,
    "normalizeApostrophes": true,
    "ignoreDiacritics": true,
    "ignoreFrenchDeterminers": true

  },

  "gradingFocus": "Identifier correctement le groupe de lieu malgré l’ordre latin.",

  "rejectIf": [

    "lieu faux",

    "ianuam mal compris",

    "réponse hors-sujet"

  ],

  "tests": [

    {

      "input": "devant la porte",

      "isCorrect": true

    },

    {

      "input": "dans la porte",

      "isCorrect": false

    }

  ]

}

    ],

    "summary": {

      "retains": [

        "Je ne piège plus sur l’ordre des mots.",

        "Je confirme le sens avec les terminaisons."

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

    "title": "Aqua turpis in fonte - Révision des cas",

    subtitle: headerContexts5eP2["p2-l10"],

    "objective": "Réviser les noms (1re déclinaison, 2e masc., 2e neutre) dans la scène de la fontaine salie.",

    "lessonPoint": "Je compare les familles de noms pour déterminer sujet et complément objet.",

    "canDo": [

      "Je reconnais les trois familles de noms vues.",

      "Je distingue nominatif/accusatif.",

      "Je traduis une phrase de constat."

    ],

    "lexicon": [

      "aqua (nom.), aquam (acc.) = eau",

      "fons (nom.), fontem (acc.) = fontaine",

      "puella (nom.), puellam (acc.) = jeune fille",

      "servus (nom.), servum (acc.) = serviteur",

      "donum (nom./acc.) = offrande",

      "taberna (nom.), tabernam (acc.) = boutique",

      "murus (nom.), murum (acc.) = mur",

      "turpis = sale, souillé",

      "mano, manat = je coule ; il/elle coule",
"video, vides = je vois, tu vois",
      "polluo, polluit = je salis ; il/elle salit"

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

        "prompt": "Quel mot parmi cette liste est neutre ?",

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

        "prompt": "Associe chaque mot à sa déclinaison.",

        "pairs": [

          {

            "left": "puella",

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

          "puella": "1re déclinaison",

          "dominus": "2e masc.",

          "donum": "2e neutre"

        },

        "points": 1

      },

      {

        "id": "p2-l10-t5",

        "type": "multipleChoice",

        "prompt": "Sélectionne les formes à l'accusatif (= COD).",

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
  "type": "textInput",
  "prompt": "Transforme ces trois noms à la forme COD, dans l’ordre : rosa ; dominus ; donum",
  "expected": "rosam ; dominum ; donum",
  "acceptedAnswers": [
    "rosam ; dominum ; donum",
    "rosam, dominum, donum",
    "rosam / dominum / donum",
    "rosam dominum donum"
  ],
  "answerConfig": {
    "type": "one-of",
    "language": "latin",
    "accepted": [
      "rosam ; dominum ; donum",
      "rosam, dominum, donum",
      "rosam / dominum / donum",
      "rosam dominum donum"
    ]
  },
  "points": 1
},

      {

        "id": "p2-l10-t7",

        "type": "singleChoice",

        "prompt": "« 𝐴𝑞𝑢𝑎 𝑖𝑛 𝑓𝑜𝑛𝑡𝑒 𝑡𝑢𝑟𝑝𝑖𝑠 𝑒𝑠𝑡 » : que se passe-t-il ?",

        "options": [

          "L’eau de la fontaine est sale",

          "La fontaine porte l’eau propre",

          "La boutique est inondée",

          "Il y a des tulipes dans l'eau"

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

        "prompt": "Traduis : « Aqua in fonte turpis est »",

        "expected": "l'eau dans la fontaine est sale",

       "acceptedAnswers": [
  "l'eau dans la fontaine est sale",
  "l'eau de la fontaine est sale",
  "l'eau est sale dans la fontaine",
  "l'eau dans la fontaine est souillée",
  "l'eau de la fontaine est souillée",
  "l'eau est souillée dans la fontaine",
  "l'eau dans la fontaine est trouble",
  "l'eau de la fontaine est trouble",
  "l'eau est trouble dans la fontaine"
],
"answerConfig": {
  "type": "translation-segment",
  "language": "fr",
  "tolerateArticles": true,
  "accepted": [
    "l'eau dans la fontaine est sale",
    "l'eau de la fontaine est sale",
    "l'eau est sale dans la fontaine",
    "l'eau dans la fontaine est souillée",
    "l'eau de la fontaine est souillée",
    "l'eau est souillée dans la fontaine",
    "l'eau dans la fontaine est trouble",
    "l'eau de la fontaine est trouble",
    "l'eau est trouble dans la fontaine"
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
    "ignoreDiacritics": true,
    "ignoreFrenchDeterminers": true

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

        "prompt": "Traduis en latin : « La jeune fille voit l’eau ».",

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

        "prompt": "Complète les accusatifs dans les cartouches : fons / … ; servus / … ; taberna / …",

        "placeholder": "fontem servum tabernam",

        "uiVariant": "chipsCompletion",

        "chips": [

          {

            "label": "fons /",

            "expected": "fontem"

          },

          {

            "label": "servus /",

            "expected": "servum"

          },

          {

            "label": "taberna /",

            "expected": "tabernam"

          }

        ],

        "expected": "fontem servum tabernam",

        "acceptedAnswers": [

          "fontem servum tabernam"

        ],

        "answerConfig": {

          "type": "translation-segment",

          "language": "latin",

          "accepted": [

            "fontem servum tabernam"

          ]

        },

        "points": 1,

        "canonicalAnswer": "fontem servum tabernam",

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

            "input": "fontem servum tabernam",

            "isCorrect": true

          },

          {

            "input": "fons servi tabernae",

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

        "fons (nominatif) / fontem (accusatif)",

        "servus (nominatif) / servum (accusatif)",

        "taberna (nominatif) / tabernam (accusatif)",

        "Le nominatif correspond à la fonction sujet ; l'accusatif à la fonction COD. En latin , le genre neutre existe ; nominatif et accusatif prennent la même terminaison (donum / donum, templum / templum)."

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

    "title": "Discordia intrat - Présent narratif",

    subtitle: headerContexts5eP2["p2-l11"],

    "objective": "Faire émerger l’hypothèse de la Discorde... et réviser le présent en contexte narratif.",

    "lessonPoint": "Je relie les verbes au présent aux effets dans le quartier.",

    "canDo": [

      "Je lis un mini-récit connecté.",

      "Je repère les verbes du présent.",

      "J’explique une hypothèse de récit."

    ],

    "lexicon": [

      "Discordia = Discorde",

      "pax (nom.), pacem (acc.) = paix",

      "vicus (nom.), vicum (acc.) = quartier, rue",
      "in vicum (acc.) = dans le quartier (mouvement)",
      "in vico (abl.) = dans le quartier (pas de mouvement)",
 "incola, incolae = habitant",
      "intro, intrat = j’entre ; il/elle entre",

      "turbo, turbat = je trouble ; il/elle trouble",

      "separo, separat = je sépare ; il/elle sépare",

      "terreo, terret = j’effraie ; il/elle effraie",

      "maneo, manet = je demeure ; il/elle demeure",
     
"timeo, times : je crains, tu crains",

      "fugio, fugit = je fuis ; il/elle fuit",

      "voco, vocat = j’appelle ; il/elle appelle",

      "non = ne... pas (négation devant un verbe)"

    ],

    "maxScore": 10,

    "training": [

      {

        "id": "p2-l11-t1",

        "type": "singleChoice",

        "prompt": "Dans « Discordia vicum turbat », quel mot accomplit l’action ?",

        "options": [

          "Discordia",

          "vicum",

          "turbat",

          "pax"

        ],

        "expected": "Discordia",

        "shuffle": true,

        "points": 1,

        "feedback": "Le sujet est le mot qui fait l’action ; ici, Discordia trouble le quartier."

      },

    {
  "id": "p2-l11-t2",
  "type": "singleChoice",
  "prompt": "🕊️ Mini-texte : « Pax non manet. Discordia amicos separat et terret. » Quel verbe montre le plus clairement que l’union du groupe est brisée ?",
  "options": [
    "separat",
    "terret",
    "manet",
    "pax"
  ],
  "expected": "separat",
  "shuffle": true,
  "points": 1
},

     {

  "id": "p2-l11-t3",

  "type": "singleChoice",

  "prompt": "Dans « 𝐷𝑖𝑠𝑐𝑜𝑟𝑑𝑖𝑎 𝑣𝑖𝑐𝑢𝑚 𝑡𝑢𝑟𝑏𝑎𝑡 », quel mot désigne ce qui subit le trouble ?",

  "options": [

    "vicum",

    "Discordia",

    "turbat",

    "pax"

  ],

  "expected": "vicum",

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

  "prompt": "Texte : « Discordia vicum turbat et vicinos separat. Incolae timent. Pax non manet. » Coche les quatre informations données par ce texte.",

  "options": [

    "le quartier est troublé",

    "les voisins se séparent",

    "les habitants ont peur",

    "la paix ne reste pas",
    "les habitants séparent les voisins",
    "le quartier reste en paix",

    "la fontaine est pure"

  ],

  "expected": [

    "le quartier est troublé",

    "les voisins se séparent",

    "les habitants ont peur",

    "la paix ne reste pas"

  ],

  "shuffle": true,

  "points": 1

},

         {

  "id": "p2-l11-t6",

  "type": "textInput",

  "prompt": "Passe de la 3e à la 1re personne du singulier : « 𝑉𝑖𝑐𝑢𝑚 𝑡𝑢𝑟𝑏𝑎𝑡 » devient « 𝑉𝑖𝑐𝑢𝑚 ... »",

  "expected": "turbo",

  "acceptedAnswers": [

    "turbo"

  ],

  "answerConfig": {

    "type": "one-of",

    "language": "latin",

    "accepted": [

      "turbo"

    ]

  },

  "points": 1,

  "canonicalAnswer": "turbo",

  "normalization": {

    "trim": true,

    "collapseSpaces": true,

    "ignoreCase": true,

    "ignorePunctuation": true,

    "normalizeApostrophes": true,

    "ignoreDiacritics": true

  },

  "gradingFocus": "Transformer correctement le verbe de la 3e personne à la 1re personne.",

  "rejectIf": [

    "personne verbale incorrecte",

    "forme inexistante",

    "réponse hors-sujet"

  ],

  "tests": [

    {

      "input": "turbo",

      "isCorrect": true

    },

    {

      "input": "turbat",

      "isCorrect": false

    },

    {

      "input": "turbas",

      "isCorrect": false

    }

  ]

},

      {

        "id": "p2-l11-t7",

        "type": "multipleChoice",

        "prompt": "Court texte : « 𝐷𝑖𝑠𝑐𝑜𝑟𝑑𝑖𝑎 𝑖𝑛𝑡𝑟𝑎𝑡. 𝑃𝑎𝑥 𝑓𝑢𝑔𝑖𝑡. 𝑉𝑖𝑐𝑖𝑛𝑖 𝑐𝑙𝑎𝑚𝑎𝑛𝑡. 𝐶𝑎𝑛𝑖𝑠 𝑚𝑎𝑛𝑒𝑡. » Coche les trois affirmations vraies.",

        "options": [

          "La paix fuit",

          "Les voisins crient",

          "Le chien reste",

          "Discordia protège la paix",
          "La paix entre",
          "Les voisins se taisent"

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

        "prompt": "Traduis : « 𝐷𝑖𝑠𝑐𝑜𝑟𝑑𝑖𝑎 𝑣𝑖𝑐𝑢𝑚 𝑡𝑢𝑟𝑏𝑎𝑡 »",

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
  "prompt": "Traduis en latin : « La paix ne reste pas dans le quartier ».",
  "expected": "pax in vico non manet",
  "acceptedAnswers": [
    "pax in vico non manet",
    "pax non manet in vico",
    "in vico pax non manet",
    "in vico non manet pax",
    "non manet pax in vico",
    "non manet in vico pax"
  ],
  "answerConfig": {
    "type": "one-of",
    "language": "latin",
    "accepted": [
      "pax in vico non manet",
      "pax non manet in vico",
      "in vico pax non manet",
      "in vico non manet pax",
      "non manet pax in vico",
      "non manet in vico pax"
    ]
  },
  "points": 1,
  "canonicalAnswer": "pax in vico non manet",
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
      "input": "pax in vico non manet",
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

  "prompt": "Traduis : 𝐷𝑖𝑠𝑐𝑜𝑟𝑑𝑖𝑎 𝑣𝑖𝑐𝑖𝑛𝑜𝑠 𝑡𝑒𝑟𝑟𝑒𝑡.",

  "expected": "Discordia effraie les voisins",

  "acceptedAnswers": [

    "Discordia effraie les voisins",

    "la Discorde effraie les voisins",

    "Discordia effraye les voisins",

    "la Discorde effraye les voisins",

    "Discordia épouvante les voisins",

    "la Discorde épouvante les voisins",

    "Discordia terrorise les voisins",

    "la Discorde terrorise les voisins",

    "Discordia terrifie les voisins",

    "la Discorde terrifie les voisins",

    "Discordia inquiète les voisins",

    "la Discorde inquiète les voisins",

    "Discordia fait peur aux voisins",

    "la Discorde fait peur aux voisins"

  ],

  "answerConfig": {

    "type": "translation-segment",

    "language": "fr",

    "accepted": [

      "Discordia effraie les voisins",

      "la Discorde effraie les voisins",

      "Discordia effraye les voisins",

      "la Discorde effraye les voisins",

      "Discordia épouvante les voisins",

      "la Discorde épouvante les voisins",

      "Discordia terrorise les voisins",

      "la Discorde terrorise les voisins",

      "Discordia terrifie les voisins",

      "la Discorde terrifie les voisins",

      "Discordia inquiète les voisins",

      "la Discorde inquiète les voisins",

      "Discordia fait peur aux voisins",

      "la Discorde fait peur aux voisins"

    ]

  },

  "points": 1,

  "canonicalAnswer": "Discordia effraie les voisins",

  "normalization": {
    "trim": true,
    "collapseSpaces": true,
    "ignoreCase": true,
    "ignorePunctuation": true,
    "normalizeApostrophes": true,
    "ignoreDiacritics": true,
    "ignoreFrenchDeterminers": true

  },

  "gradingFocus": "Compréhension correcte en français ; sujet et complément bien identifiés ; verbe de crainte correctement rendu.",

  "rejectIf": [

    "sens inversé sujet/objet",

    "verbe incorrect",

    "réponse hors-sujet"

  ],

  "tests": [

    {

      "input": "Discordia effraie les voisins",

      "isCorrect": true

    },

    {

      "input": "la Discorde fait peur aux voisins",

      "isCorrect": true

    },

    {

      "input": "les voisins effraient Discordia",

      "isCorrect": false

    },

    {

      "input": "Discordia trouble les voisins",

      "isCorrect": false

    }

  ]

},

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

    "title": "Paxne redit ? - Synthèse",

    subtitle: headerContexts5eP2["p2-l12"],

    "objective": "Clore l’enquête avec une révision cumulative et une mini-interprétation.",

    "lessonPoint": "Je mobilise toutes les clés du trimestre : questions, lieux, formes, présent, ordre souple.",

    "canDo": [

      "Je relis un mini-dossier en latin débutant.",

      "Je réponds à des questions cumulatives.",

      "Je formule une conclusion simple."

    ],

    "lexicon": [

      "pax (nom.), pacem (acc.) = paix",

      "redeo, redit = je reviens ; il/elle revient",

      "populus (nom.), populum (acc.) = peuple, habitants",

      "vicinus (sg.), vicini (pl.) = voisin, voisins",

      "donum (nom./acc.) = offrande",

      "tabella (nom.), tabellam (acc.) = tablette",

      "canis (nom.), canem (acc.) = chien",

      "fons (nom.), fontem (acc.) = fontaine",
"signum, signi = signe, marque, indice",
"falsus, falsa, falsum = faux, fausse",
"turpis, turpis, turpe = laid, honteux, sale",
"recuso, recusas = je refuse, tu refuses",

      "video, videt, vident = je vois ; il/elle voit ; ils/elles voient",

      "verum (nom./acc.) = le vrai",

      "falsum (nom./acc.) = le faux"

    ],

    "maxScore": 10,

    "training": [

      {
  "id": "p2-l12-t1",
  "type": "singleChoice",
  "prompt": "Mini-texte : « Pax in vico redit ». Quelle traduction est exacte ?",
  "options": [
    "la paix revient dans le quartier",
    "le quartier revient dans la paix",
    "la paix voit le quartier",
    "le voisin revient dans le quartier"
  ],
  "expected": "la paix revient dans le quartier",
  "shuffle": true,
  "points": 1
},

  {
  "id": "p2-l12-t2",
  "type": "matching",
  "prompt": "Associe chaque question latine au type de réponse attendu.",
  "pairs": [
    { "left": "Quis tabellam videt ?", "right": "un personnage" },
    { "left": "Quid falsum est ?", "right": "une chose" },
    { "left": "Cur pax non redit ?", "right": "une raison" },
    { "left": "Ubi donum est ?", "right": "un lieu" }
  ],
  "rightOptions": [
    "un lieu",
    "une raison",
    "une chose",
    "un personnage"
  ],
  "expected": {
    "Quis tabellam videt ?": "un personnage",
    "Quid falsum est ?": "une chose",
    "Cur pax non redit ?": "une raison",
    "Ubi donum est ?": "un lieu"
  },
  "points": 1
},

      {
  "id": "p2-l12-t3",
  "type": "matching",
  "prompt": "Associe chaque forme latine au bon nombre.",
  "pairs": [
    { "left": "videt", "right": "singulier" },
    { "left": "vident", "right": "pluriel" },
    { "left": "vicinus", "right": "singulier" },
    { "left": "vicini", "right": "pluriel" }
  ],
  "rightOptions": [
    "pluriel",
    "singulier"
  ],
  "expected": {
    "videt": "singulier",
    "vident": "pluriel",
    "vicinus": "singulier",
    "vicini": "pluriel"
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

          "nous cherchons",

          "vous cherchez",

          "il cherche",

          "je cherche"

        ],

        "expected": "nous cherchons",

        "shuffle": true,

        "points": 1

      },

   {
  "id": "p2-l12-t6",
  "type": "matching",
  "prompt": "Associe chaque indice latin à ce qu’il permet d’affirmer dans l’enquête.",
  "pairs": [
    {
      "left": "Donum non est.",
      "right": "l’offrande a disparu"
    },
    {
      "left": "Tabella falsa est.",
      "right": "la tablette n’est pas fiable"
    },
    {
      "left": "Canis ianuam recusat.",
      "right": "le chien refuse cette entrée"
    },
    {
      "left": "Aqua in fonte turpis est.",
      "right": "la fontaine paraît souillée"
    }
  ],
  "rightOptions": [
    "la tablette n’est pas fiable",
    "la fontaine paraît souillée",
    "le chien refuse cette entrée",
    "l’offrande a disparu"
  ],
  "expected": {
    "Donum non est.": "l’offrande a disparu",
    "Tabella falsa est.": "la tablette n’est pas fiable",
    "Canis ianuam recusat.": "le chien refuse cette entrée",
    "Aqua in fonte turpis est.": "la fontaine paraît souillée"
  },
  "points": 1
},

     {
  "id": "p2-l12-t7",
  "type": "matching",
  "prompt": "Dans « Quis vicinum videt ? », associe chaque mot à sa fonction.",
  "pairs": [
    {
      "left": "quis",
      "right": "mot interrogatif / sujet"
    },
    {
      "left": "vicinum",
      "right": "COD"
    },
    {
      "left": "videt",
      "right": "verbe"
    }
  ],
  "rightOptions": [
    "verbe",
    "COD",
    "mot interrogatif / sujet"
  ],
  "expected": {
    "quis": "mot interrogatif / sujet",
    "vicinum": "COD",
    "videt": "verbe"
  },
  "points": 1
}

    ],

    "production": [

    {
  "id": "p2-l12-p1",
  "type": "textInput",
  "prompt": "Traduis en français : « Vicini signum falsum vident »",
  "expected": "les voisins voient un faux indice",
  "acceptedAnswers": [
    "les voisins voient un faux indice",
    "des voisins voient un faux indice",
    "les voisins voient un indice faux",
    "des voisins voient un indice faux",
    "les voisins voient un faux signe",
    "des voisins voient un faux signe",
    "les voisins voient une fausse marque",
    "des voisins voient une fausse marque",
    "les voisins aperçoivent un faux indice",
    "des voisins aperçoivent un faux indice"
  ],
  "answerConfig": {
    "type": "translation-segment",
    "language": "fr",
    "accepted": [
      "les voisins voient un faux indice",
      "des voisins voient un faux indice",
      "les voisins voient un indice faux",
      "des voisins voient un indice faux",
      "les voisins voient un faux signe",
      "des voisins voient un faux signe",
      "les voisins voient une fausse marque",
      "des voisins voient une fausse marque",
      "les voisins aperçoivent un faux indice",
      "des voisins aperçoivent un faux indice"
    ]
  },
  "points": 1,
  "canonicalAnswer": "les voisins voient un faux indice",
  "normalization": {
    "trim": true,
    "collapseSpaces": true,
    "ignoreCase": true,
    "ignorePunctuation": true,
    "normalizeApostrophes": true,
    "ignoreDiacritics": true,
    "ignoreFrenchDeterminers": true
  },
  "gradingFocus": "Comprendre un sujet au pluriel, un COD au neutre singulier et un adjectif épithète accordé.",
  "rejectIf": [
    "verbe incorrect",
    "sens inversé sujet/objet",
    "adjectif mal compris",
    "réponse hors-sujet"
  ],
  "tests": [
    {
      "input": "les voisins voient un faux indice",
      "isCorrect": true
    },
    {
      "input": "des voisins aperçoivent un faux indice",
      "isCorrect": true
    },
    {
      "input": "les voisins voient l'indice",
      "isCorrect": false
    },
    {
      "input": "le voisin voit un faux indice",
      "isCorrect": false
    }
  ]
},

      {

        "id": "p2-l12-p2",

        "type": "textInput",

        "prompt": "Traduis en latin : « Les voisins voient le signe ».",

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
  "prompt": "Traduis en latin : « Pourquoi le peuple ne voit-il pas le vrai ? »",
  "expected": "cur populus verum non videt",
  "acceptedAnswers": [
    "cur populus verum non videt",
    "cur populus non videt verum",
    "cur verum populus non videt",
    "cur verum non videt populus",
    "cur non videt populus verum",
    "cur non videt verum populus"
  ],
  "answerConfig": {
    "type": "one-of",
    "language": "latin",
    "accepted": [
      "cur populus verum non videt",
      "cur populus non videt verum",
      "cur verum populus non videt",
      "cur verum non videt populus",
      "cur non videt populus verum",
      "cur non videt verum populus"
    ]
  },
  "points": 1,
  "canonicalAnswer": "cur populus verum non videt",
  "normalization": {
    "trim": true,
    "collapseSpaces": true,
    "ignoreCase": true,
    "ignorePunctuation": true,
    "normalizeApostrophes": true,
    "ignoreDiacritics": true
  },
  "gradingFocus": "Réinvestir une question latine avec interrogatif, sujet, COD neutre, négation et verbe au présent.",
  "rejectIf": [
    "interrogatif incorrect ou absent",
    "négation absente",
    "verbe incorrect",
    "sens inversé sujet/objet",
    "réponse hors-sujet"
  ],
  "tests": [
    {
      "input": "cur populus verum non videt",
      "isCorrect": true
    },
    {
      "input": "cur populus non videt verum",
      "isCorrect": true
    },
    {
      "input": "quid populus verum non videt",
      "isCorrect": false
    },
    {
      "input": "cur populum verum non videt",
      "isCorrect": false
    }
  ]
},

  {

  "id": "p2-l13",

  "period": 2,

  "periodId": "p2",

  "title": "Rex, Mater, Urbs - Premiers mots 3e déclinaison",

  subtitle: headerContexts5eP2["p2-l13"],

  "objective": "Reconnaître quelques noms fréquents de 3e déclinaison en lecture simple.",

  "lessonPoint": "Je reconnais quelques noms de 3e déclinaison, même quand leur forme change entre sujet et complément.",

  "narrative": "L’enquête avance, mais certains mots résistent. Flavia comprend qu’ils n’entrent ni dans la 1re ni dans la 2e déclinaison : il faut apprendre à les reconnaître sans paniquer.",

  "canDo": [

    "Je reconnais quelques mots fréquents de 3e déclinaison.",

    "Je repère sujet et complément dans une phrase simple.",

    "Je traduis de très courtes phrases avec des noms nouveaux."

  ],

  "lexicon": [

      "rex (nom.), regem (acc.) = roi",

      "mater (nom.), matrem (acc.) = mère",

      "nomen (nom./acc.) = nom",

      "corpus (nom./acc.) = corps",

      "urbs (nom.), urbem (acc.) = ville",

      "video, videt = je vois ; il/elle voit",

      "audio, audit = j’entends ; il/elle entend",

      "lego, legit = je lis ; il/elle lit",

      "porto, portat = je porte ; il/elle porte"

  ],

  "maxScore": 10,

  "training": [

   {
  "id": "p2-l13-t1",
  "type": "singleChoice",
  "prompt": "Quel mot garde la même forme comme sujet et comme COD ?",
  "options": [
    "rex",
    "mater",
    "urbs",
    "corpus"
  ],
  "expected": "corpus",
  "shuffle": true,
  "points": 1
},

    {

      "id": "p2-l13-t2",

      "type": "multipleChoice",

      "prompt": "Quels mots appartiennent à la 3e déclinaison ?",

      "options": [

        "rex",

        "mater",

        "urbs",

        "dominus",

        "puella"

      ],

      "expected": [

        "rex",

        "mater",

        "urbs"

      ],

      "shuffle": true,

      "points": 1

    },

    {
  "id": "p2-l13-t3",
  "type": "singleChoice",
  "prompt": "Choisis le seul trio où les trois mots sont à la forme complément objet.",
  "options": [
    "regem, matrem, urbem",
    "rex, mater, urbs",
    "regem, mater, urbs",
    "rex, matrem, urbem"
  ],
  "expected": "regem, matrem, urbem",
  "shuffle": true,
  "points": 1
},

    {

      "id": "p2-l13-t4",

      "type": "singleChoice",

      "prompt": "Dans « mater nomen legit », qui lit ?",

      "options": [

        "mater",

        "nomen",

        "legit",

        "urbs"

      ],

      "expected": "mater",

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p2-l13-t5",

      "type": "singleChoice",

      "prompt": "Dans « rex urbem videt », quel mot est le complément objet ?",

      "options": [

        "rex",

        "urbem",

        "videt",

        "regis"

      ],

      "expected": "urbem",

      "shuffle": true,

      "points": 1

    },

    {

      "id": "p2-l13-t6",

      "type": "singleChoice",

      "prompt": "Quel mot garde la même forme comme sujet et comme complément objet ?",

      "options": [

        "nomen",

        "rex",

        "mater",

        "urbs"

      ],

      "expected": "nomen",

      "shuffle": true,

      "points": 1

    },

   {
  "id": "p2-l13-t7",
  "type": "matching",
  "prompt": "Mini-scène : « Mater nomen legit. Rex urbem videt. Corpus in via est. » Associe chaque mot de 3e déclinaison à sa fonction dans sa proposition.",
  "pairs": [
    {
      "left": "mater",
      "right": "sujet de legit"
    },
    {
      "left": "nomen",
      "right": "COD de legit"
    },
    {
      "left": "rex",
      "right": "sujet de videt"
    },
    {
      "left": "urbem",
      "right": "COD de videt"
    }
  ],
  "rightOptions": [
    "COD de videt",
    "sujet de legit",
    "COD de legit",
    "sujet de videt"
  ],
  "expected": {
    "mater": "sujet de legit",
    "nomen": "COD de legit",
    "rex": "sujet de videt",
    "urbem": "COD de videt"
  },
  "points": 1
}

  ],

  "production": [

    {

      "id": "p2-l13-p1",

      "type": "textInput",

      "prompt": "Traduis : Mater nomen legit",

      "expected": "la mère lit le nom",

     "acceptedAnswers": [
  "la mère lit le nom",
  "la mère lit ce nom",
  "une mère lit le nom",
  "la maman lit le nom",
  "la maman lit ce nom",
  "une maman lit le nom"
],
"answerConfig": {
  "type": "translation-segment",
  "language": "fr",
  "accepted": [
    "la mère lit le nom",
    "la mère lit ce nom",
    "une mère lit le nom"
  ],
  "synonyms": [
    "la maman lit le nom",
    "la maman lit ce nom",
    "une maman lit le nom"
  ]
},

      "points": 1,

      "canonicalAnswer": "la mère lit le nom",

      "normalization": {

        "trim": true,

        "collapseSpaces": true,

        "ignoreCase": true,

        "ignorePunctuation": true,

        "normalizeApostrophes": true,

        "ignoreDiacritics": true

      },

      "gradingFocus": "Comprendre une phrase très simple avec deux noms de 3e déclinaison.",

      "rejectIf": [

        "sens inversé sujet/objet",

        "verbe incorrect",

        "réponse hors-sujet"

      ],

      "tests": [

        {

          "input": "la mère lit le nom",

          "isCorrect": true

        },

        {

          "input": "le nom lit la mère",

          "isCorrect": false

        }

      ]

    },

    {

      "id": "p2-l13-p2",

      "type": "textInput",

      "prompt": "Traduis en latin : Le roi voit la ville.",

      "expected": "rex urbem videt",

      "acceptedAnswers": [

        "rex urbem videt",

        "rex videt urbem",

        "urbem rex videt",

        "urbem videt rex",

        "videt rex urbem",

        "videt urbem rex"

      ],

      "answerConfig": {

        "type": "one-of",

        "language": "latin",

        "accepted": [

          "rex urbem videt",

          "rex videt urbem",

          "urbem rex videt",

          "urbem videt rex",

          "videt rex urbem",

          "videt urbem rex"

        ]

      },

      "points": 1,

      "canonicalAnswer": "rex urbem videt",

      "normalization": {

        "trim": true,

        "collapseSpaces": true,

        "ignoreCase": true,

        "ignorePunctuation": true,

        "normalizeApostrophes": true,

        "ignoreDiacritics": true

      },

      "gradingFocus": "Produire une phrase simple avec un sujet et un COD de 3e déclinaison.",

      "rejectIf": [

        "forme incorrecte de urbem",

        "sens inversé sujet/objet",

        "réponse hors-sujet"

      ],

      "tests": [

        {

          "input": "rex urbem videt",

          "isCorrect": true

        },

        {

          "input": "rex urbs videt",

          "isCorrect": false

        }

      ]

    },

    {

      "id": "p2-l13-p3",

      "type": "textInput",

      "prompt": "Complète : « La mère entend le roi » = Mater ____ audit.",

      "expected": "regem",

      "acceptedAnswers": [

        "regem"

      ],

      "answerConfig": {

        "type": "one-of",

        "language": "latin",

        "accepted": [

          "regem"

        ]

      },

      "points": 1,

      "canonicalAnswer": "regem",

      "normalization": {

        "trim": true,

        "collapseSpaces": true,

        "ignoreCase": true,

        "ignorePunctuation": true,

        "normalizeApostrophes": true,

        "ignoreDiacritics": true

      },

      "gradingFocus": "Reconnaître et produire une forme objet en -em.",

      "rejectIf": [

        "forme sujet au lieu du COD",

        "mot hors leçon",

        "réponse vide"

      ],

      "tests": [

        {

          "input": "regem",

          "isCorrect": true

        },

        {

          "input": "rex",

          "isCorrect": false

        }

      ]

    }

  ],

  "summary": {

    "retains": [

      "La 3e déclinaison ne ressemble pas toujours aux noms déjà connus.",

      "Je peux déjà reconnaître quelques mots fréquents : rex, mater, nomen, urbs, corpus."

    ],

    "cahier": [

      "rex / regem",

      "mater / matrem",

      "urbs / urbem",

      "nomen garde la même forme au neutre"

    ],

    "keywords": [

      "3e déclinaison",

      "rex",

      "mater",

      "urbs",

      "nomen"

    ]

  },

  "meta": {

    "status": "ready",

    "tags": [

      "p2",

      "troisieme-declinaison",

      "amorce",

      "lecture"

    ]

  }

}

];

      

