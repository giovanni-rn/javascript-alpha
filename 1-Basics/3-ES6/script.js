// Créer une variable constante avec la syntaxe ES6
const viande = "boeuf";

// Créer une fonction ES6 qui renvoie un nombre
const returnNb = () => {
  return 123;
};
returnNb();

// Afficher la valeur renvoyée par la fonction du dessus avec une fonction flechée
const afficheNb = (nb) => {
  console.log(nb);
};
afficheNb(returnNb());
