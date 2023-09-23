// Modifier une variable
var fruit = "banane";
console.log(fruit);
fruit = "citron";
console.log(fruit);

// Paramètres de fonction
function afficherFruit(fruitAffiche) {
  var viande = "poulet";
  console.log(fruitAffiche);
}

afficherFruit("framboise");
afficherFruit("peche");
afficherFruit("abricot");

// Portée des variables
console.log(viande);
