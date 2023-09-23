// Fonction qui calcule et renvoie x puissance y
const puissance = (x, y) => {
  // const power = x ** y;
  // return power;
  return x ** y;
  // console.log("au revoir");
};

// console.log(puissance(5, 3));

// Fonction qui soustrait deux nombres saisis par l'utilisateur
const soustraction = (x, y) => {
  // const nb1 = parseInt(x);
  // const nb2 = parseInt(y);
  // const difference = nb1 - nb2;
  // return difference;
  return parseInt(x) + parseInt(y);
};

console.log(
  soustraction(
    prompt("Entrez un premier nombre : "),
    prompt("Entrez un second nombre : ")
  )
);
