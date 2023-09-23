// Syntaxe d'un objet
const objet = { cle: "valeur", cle2: "valeur2" };
const poulet = {
  nom: "poulet",
  kilo: 5,
  bon: true,
  cuisson: ["four", "BBQ"],
  saluer: () => console.log("Salut !"),
};

// Accéder à une valeur
console.log(objet["cle2"], objet.cle2);
poulet.saluer();

// Modifier une valeur
poulet.bon = !poulet.bon;
console.log(poulet);
poulet.cuisson.push("briquet");
console.table(typeof poulet);
