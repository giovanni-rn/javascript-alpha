// Concaténation
const mot1 = "maison";
const mot2 = " " + "bleue";
const phrase = mot1 + mot2;
console.log(phrase);

// Indice vs charAt
console.log(mot1[0]);
console.log(mot1.charAt(3));

const letter = mot2[1];
console.log(letter);

// Modification d'un string
mot1[0] = "a";
console.log(mot1);
const nouveauMot = mot1.slice(2, 4) + " green";
console.log(nouveauMot);

// Includes
console.log(mot1.includes("on"));

// Modifier la casse
console.log(mot1.toUpperCase());
console.log(mot1.toLowerCase());
