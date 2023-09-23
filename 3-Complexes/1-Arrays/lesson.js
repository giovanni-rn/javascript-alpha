// Syntaxe d'une liste
const liste = ["poulet", "boeuf", "agneau", "côte de porc"];
const nombresPremiers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23];
const melange = [
  "fromage",
  45,
  false,
  48.9,
  Math.floor(Math.random() * 19),
  null,
];
console.table(melange);

const liste2D = [
  [0, 1],
  [1, 1],
  [0, [0, 1]],
];

// Accéder à un élément
const random = melange[4];
console.log(random);

// Modifier un élément
melange[5] = "cassis";
console.table(melange);

// Taille d'une liste
console.log(melange.length);
console.log(liste2D.length);
console.log(liste2D);
console.log(liste2D[0]);
console.log(liste2D[0][1]);

// Ajouter un élément
const listeVide = [];
console.log("\n\n\n");
console.log(listeVide.length);
listeVide.push("salut");
listeVide.push(56);
console.log(listeVide);
