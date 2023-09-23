// Echanger la valeur de ces deux variables
var objet = "poulet";
var nourriture = "ordinateur";
console.log("objet :", objet, "| nourriture :", nourriture);

var temp = objet;
objet = nourriture;
nourriture = temp;
console.log("objet :", objet, "| nourriture :", nourriture);

// Afficher la variable fruit grâce aux paramètres de fonction
var fruit = "orange";
function afficherVariable(fruitAffiche, fruitAffiche2) {
  console.log(fruitAffiche, fruitAffiche2);
}

afficherVariable(fruit, "banane");
