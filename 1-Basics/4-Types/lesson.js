// String : chaîne de caractères
const str = "texte";
const phrase = "J'aime le poulet !";
const guillemets = '"wahoo"';
const str2 = "arbre";
console.log(str2);

// Number : nombres
const chiffre = 9;

const somme = 4 + 7;
const decimal = 56.8637;
const total = chiffre + somme + decimal;
console.log(total);

// Boolean : booléens
const estVrai = true;
const estFaux = false;
console.log(estFaux);

// Array : listes/tableaux
const liste = ["texte", 23, 4 + 6, 5.6, true, phrase];
const liste2 = [[5, 6, 8], ["cudfc"]];
// console.table(liste);

// Object : objets
const listeAvecCle = { cle: "valeur" };
const personne = { nom: "Mario", age: 107, estDeveloppeur: true };

// Function : fonctions
const action = (nb) => {
  return nb + 5;
};
action(35);

// Null : rien
const rien = null;

// Undefined : non-définie
let vide;
console.log(vide);
vide = 56;
console.log(vide);
