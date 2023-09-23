// Structure conditionnelle if
if (1 == 1) {
  console.log("salut");
}

if ("arbre".includes("c")) {
  console.log("arbre");
}

// Structure conditionnelle if/else
const condition = true;
if (condition) {
  console.log("Vrai");
} else {
  console.log("Faux");
}

// Structure incluant else if
const nb = 45;
if (nb < 50) {
  console.log("Trop petit");
} else if (nb == 45) {
  console.log("Parfait");
} else {
  console.log("Trop petit");
}

// Opérateurs logiques
const mot = "canard";
if (mot == "dinde" || mot == "poulet" || mot == "canard") {
  console.log("C'est de la volaille !");
}

if (mot == "canard" && mot.length == 6) {
  console.log("C'est un canard !");
}
