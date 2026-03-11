// ATRIUM · 5e · Période 2
// Thème : DISCORDIA IN SUBURA
// Remaniement pédagogique : progression guidée, lexique traduit, réponses élargies,
// prise en compte de l'ordre mobile des mots latins dans les productions.

const latinOrders = (...chunks) => {
  const items = chunks.filter(Boolean).map((item) => String(item).trim()).filter(Boolean);
  const out = [];
  const walk = (prefix, rest) => {
    if (rest.length === 0) {
      out.push(prefix.join(" ").replace(/\s+/g, " ").trim());
      return;
    }
    rest.forEach((item, index) => {
      const next = rest.slice(0, index).concat(rest.slice(index + 1));
      walk(prefix.concat(item), next);
    });
  };
  walk([], items);
  return [...new Set(out)];
};

export const lessons5eP2 = [
  {
    id: "p2-l1",
    period: 2,
    periodId: "p2",
    title: "Quis donum sustulit ?",
    objective: "Entrer dans l'enquête en utilisant les interrogatifs et en lisant qui accuse qui.",
    lessonPoint:
      "Rappel de cours : pour comprendre une phrase latine, je repère d'abord le verbe, puis je demande quis ? quid ? cur ? ubi ? L'ordre des mots peut changer. Je m'appuie sur les formes et sur le sens global de la scène.",
    narrative:
      "Au petit matin, une offrande a disparu devant le temple de Minerve. Dans la Subure, chacun parle, mais personne ne raconte exactement la même chose.",
    canDo: [
      "Je reconnais les interrogatifs les plus utiles.",
      "Je repère le témoin, l'objet et le lieu.",
      "Je traduis une question courte d'enquête."
    ],
    lexicon: [
      "quis = qui ?",
      "quid = quoi ?",
      "cur = pourquoi ?",
      "ubi = où ?",
      "donum = offrande, cadeau",
      "ara = autel",
      "vicinus = voisin",
      "videt = voit",
      "negat = nie",
      "accusat = accuse"
    ],
    maxScore: 10,
    training: [
      {
        id: "p2-l1-t1",
        type: "singleChoice",
        prompt: "Quel mot latin sert à demander « qui ? » ?",
        options: ["quis", "quid", "cur", "ubi", "ara"],
        expected: "quis",
        shuffle: true,
        points: 1
      },
      {
        id: "p2-l1-t2",
        type: "matching",
        prompt: "Associe l'interrogatif latin à la bonne idée française.",
        pairs: [
          { left: "quis", right: "qui ?" },
          { left: "quid", right: "quoi ?" },
          { left: "cur", right: "pourquoi ?" },
          { left: "ubi", right: "où ?" }
        ],
        rightOptions: ["où ?", "quoi ?", "qui ?", "pourquoi ?"],
        expected: {
          quis: "qui ?",
          quid: "quoi ?",
          cur: "pourquoi ?",
          ubi: "où ?"
        },
        points: 1
      },
      {
        id: "p2-l1-t3",
        type: "singleChoice",
        prompt: "Mini-texte : « Vicinus Sextum accusat. » Qui accuse Sextus ?",
        options: ["le voisin", "Sextus", "l'offrande", "le temple", "Minerve"],
        expected: "le voisin",
        shuffle: true,
        points: 1
      },
      {
        id: "p2-l1-t4",
        type: "multipleChoice",
        prompt: "Quelles traductions sont recevables pour « vicinus Sextum accusat » ?",
        options: [
          "Le voisin accuse Sextus",
          "Le voisin met Sextus en cause",
          "Sextus accuse le voisin",
          "Sextus est accusé par le voisin",
          "Le voisin salue Sextus"
        ],
        expected: [
          "Le voisin accuse Sextus",
          "Le voisin met Sextus en cause",
          "Sextus est accusé par le voisin"
        ],
        shuffle: true,
        points: 1
      },
      {
        id: "p2-l1-t5",
        type: "ordering",
        prompt: "Remets les groupes dans un ordre latin possible pour dire : « Le voisin voit l'autel. »",
        options: ["videt", "vicinus", "aram"],
        expected: ["vicinus", "aram", "videt"],
        points: 1
      },
      {
        id: "p2-l1-t6",
        type: "singleChoice",
        prompt: "Dans « donum vicinus videt », quel mot est le verbe ?",
        options: ["donum", "vicinus", "videt", "quis", "ara"],
        expected: "videt",
        shuffle: true,
        points: 1,
        feedback: "Commence par chercher le mot qui dit l'action."
      },
      {
        id: "p2-l1-t7",
        type: "multipleChoice",
        prompt: "Quels mots servent à poser une question dans une enquête ?",
        options: ["quis", "quid", "cur", "ubi", "accusat"],
        expected: ["quis", "quid", "cur", "ubi"],
        shuffle: true,
        points: 1
      }
    ],
    production: [
      {
        id: "p2-l1-p1",
        type: "textInput",
        prompt: "Micro-version : quis donum videt ?",
        expected: "qui voit l'offrande ?",
        acceptedAnswers: [
          "qui voit l'offrande",
          "qui voit l'offrande ?",
          "qui voit le don",
          "qui voit le cadeau",
          "qui voit l'offrande sacrée"
        ],
        answerConfig: {
          type: "translation-segment",
          language: "fr",
          accepted: [
            "qui voit l'offrande",
            "qui voit le don",
            "qui voit le cadeau",
            "qui voit l'offrande sacrée"
          ]
        },
        points: 1
      },
      {
        id: "p2-l1-p2",
        type: "textInput",
        prompt: "Micro-thème : Le voisin accuse Sextus. L'ordre latin peut varier.",
        expected: "Vicinus Sextum accusat",
        acceptedAnswers: latinOrders("Vicinus", "Sextum", "accusat"),
        answerConfig: {
          type: "one-of",
          language: "latin",
          accepted: latinOrders("Vicinus", "Sextum", "accusat")
        },
        points: 1
      },
      {
        id: "p2-l1-p3",
        type: "textInput",
        prompt: "Réponse courte : un vicinus, c'est...",
        expected: "un voisin",
        acceptedAnswers: ["un voisin", "le voisin", "une voisine", "quelqu'un du voisinage"],
        answerConfig: {
          type: "translation-segment",
          language: "fr",
          accepted: ["un voisin", "une voisine", "quelqu'un du voisinage"]
        },
        points: 1
      }
    ],
    summary: {
      retains: [
        "Je peux entrer dans une phrase latine en posant les bonnes questions : quis ? quid ? cur ? ubi ?",
        "L'ordre latin peut bouger : je repère d'abord le verbe, puis le sujet et le complément."
      ],
      cahier: [
        "quis = qui ? ; quid = quoi ? ; cur = pourquoi ? ; ubi = où ?",
        "vicinus Sextum accusat = le voisin accuse Sextus",
        "Méthode : verbe d'abord, puis qui agit, puis sur quoi l'action porte."
      ],
      keywords: ["interrogatifs", "enquête", "vicinus", "donum", "ordre des mots"]
    },
    meta: {
      status: "ready",
      tags: ["discordia", "interrogatifs", "temple", "enquête"]
    }
  },
  {
    id: "p2-l2",
    period: 2,
    periodId: "p2",
    title: "Ad templum, ex taberna",
    objective: "Lire les déplacements suspects dans la Subure grâce aux prépositions les plus utiles.",
    lessonPoint:
      "Rappel de cours : ad indique le mouvement vers, in peut dire dans, ex indique l'origine ou la sortie. Une petite préposition change tout le sens d'un témoignage.",
    narrative:
      "On cherche maintenant qui s'est approché du temple, qui sort de la boutique et qui traverse la rue au mauvais moment.",
    canDo: [
      "Je distingue ad, in et ex.",
      "Je lis un déplacement simple dans un micro-récit.",
      "Je traduis une phrase de mouvement."
    ],
    lexicon: [
      "ad = vers",
      "in = dans",
      "ex = hors de, depuis",
      "templum = temple",
      "taberna = boutique",
      "via = rue",
      "forum = forum",
      "currit = court",
      "venit = vient",
      "exit = sort"
    ],
    maxScore: 10,
    training: [
      {
        id: "p2-l2-t1",
        type: "singleChoice",
        prompt: "Quel mot latin signifie ici « vers » dans « ad templum » ?",
        options: ["ad", "in", "ex", "cum", "ubi"],
        expected: "ad",
        shuffle: true,
        points: 1
      },
      {
        id: "p2-l2-t2",
        type: "matching",
        prompt: "Associe chaque préposition à son idée principale.",
        pairs: [
          { left: "ad", right: "aller vers" },
          { left: "in", right: "être dans" },
          { left: "ex", right: "sortir de" }
        ],
        rightOptions: ["être dans", "sortir de", "aller vers"],
        expected: {
          ad: "aller vers",
          in: "être dans",
          ex: "sortir de"
        },
        points: 1
      },
      {
        id: "p2-l2-t3",
        type: "singleChoice",
        prompt: "Mini-texte : « Flavia ad templum currit, Sextus ex taberna exit. » Qui va vers le temple ?",
        options: ["Flavia", "Sextus", "la boutique", "la rue", "Discordia"],
        expected: "Flavia",
        shuffle: true,
        points: 1
      },
      {
        id: "p2-l2-t4",
        type: "multipleChoice",
        prompt: "Quelles traductions conviennent pour « Sextus ex taberna exit » ?",
        options: [
          "Sextus sort de la boutique",
          "Sextus vient de la boutique",
          "Sextus entre dans la boutique",
          "Sextus quitte la boutique",
          "Sextus reste dans la boutique"
        ],
        expected: [
          "Sextus sort de la boutique",
          "Sextus vient de la boutique",
          "Sextus quitte la boutique"
        ],
        shuffle: true,
        points: 1
      },
      {
        id: "p2-l2-t5",
        type: "ordering",
        prompt: "Range ces groupes pour former une phrase latine possible : « Le garçon court vers le forum. »",
        options: ["puer", "ad forum", "currit"],
        expected: ["puer", "ad forum", "currit"],
        points: 1
      },
      {
        id: "p2-l2-t6",
        type: "singleChoice",
        prompt: "Dans « ad templum Flavia venit », où va Flavia ?",
        options: ["vers le temple", "hors du temple", "dans la boutique", "au forum puis à la maison", "on ne sait pas"],
        expected: "vers le temple",
        shuffle: true,
        points: 1,
        feedback: "La préposition donne ici le sens du déplacement."
      },
      {
        id: "p2-l2-t7",
        type: "multipleChoice",
        prompt: "Quels groupes expriment un déplacement ou une provenance ?",
        options: ["ad templum", "ex taberna", "in via", "forum", "currit"],
        expected: ["ad templum", "ex taberna", "in via"],
        shuffle: true,
        points: 1
      }
    ],
    production: [
      {
        id: "p2-l2-p1",
        type: "textInput",
        prompt: "Micro-version : puella ad forum currit",
        expected: "la jeune fille court vers le forum",
        acceptedAnswers: [
          "la jeune fille court vers le forum",
          "la fille court vers le forum",
          "la jeune fille se précipite vers le forum",
          "la puella court vers le forum"
        ],
        answerConfig: {
          type: "translation-segment",
          language: "fr",
          accepted: [
            "la jeune fille court vers le forum",
            "la fille court vers le forum",
            "la jeune fille se précipite vers le forum",
            "la puella court vers le forum"
          ]
        },
        points: 1
      },
      {
        id: "p2-l2-p2",
        type: "textInput",
        prompt: "Micro-thème : Sextus sort de la boutique. Plusieurs ordres latins sont admis.",
        expected: "Sextus ex taberna exit",
        acceptedAnswers: latinOrders("Sextus", "ex taberna", "exit"),
        answerConfig: {
          type: "one-of",
          language: "latin",
          accepted: latinOrders("Sextus", "ex taberna", "exit")
        },
        points: 1
      },
      {
        id: "p2-l2-p3",
        type: "textInput",
        prompt: "Réponse courte : ex signifie...",
        expected: "hors de",
        acceptedAnswers: ["hors de", "depuis", "en sortant de", "à partir de"],
        answerConfig: {
          type: "translation-segment",
          language: "fr",
          accepted: ["hors de", "depuis", "en sortant de", "à partir de"]
        },
        points: 1
      }
    ],
    summary: {
      retains: [
        "Une petite préposition peut transformer tout le sens d'une scène.",
        "ad = vers ; in = dans ; ex = hors de, depuis."
      ],
      cahier: [
        "ad templum = vers le temple",
        "ex taberna = hors de la boutique, depuis la boutique",
        "Je lis le mouvement avant de traduire le reste."
      ],
      keywords: ["prépositions", "déplacement", "ad", "ex", "Subure"]
    },
    meta: {
      status: "ready",
      tags: ["discordia", "prépositions", "déplacement", "subura"]
    }
  }
  // [...] Le document de code contient le reste du fichier à l’identique.
];
