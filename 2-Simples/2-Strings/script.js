// Renvoie un mot avec une majuscule sur la première lettre
const majPremiereLettre = (mot) => {
  const premiereLettre = mot[0];
  const majuscule = premiereLettre.toUpperCase();
  const resteMot = mot.slice(1);
  const nouveauMot = majuscule + resteMot;
  return nouveauMot;
};
console.log(majPremiereLettre("salut"));

// Concaténer deux chaînes de caractères avec une majuscule sur le 1er mot
const concat = (mot1, mot2) => {
  const nouveauMot1 = majPremiereLettre(mot1);
  return nouveauMot1 + " " + mot2;
};

const concat2 = (mot1, mot2) => majPremiereLettre(mot1) + " " + mot2;

const volaille = "poulet";
const cuisson = "braisé";

console.log(concat2(volaille, cuisson));
