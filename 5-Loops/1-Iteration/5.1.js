// Affiche "Hello" dans la console 3 fois d'affilé
const printHello = () => {
  for (let i = 0; i < 3; i++) {
    console.log("Hello");
  }
};

printHello();

// Fonction qui renvoie une liste avec les entiers de 0 à 100 inclus
const listOfInt = () => {
  const list = [];
  for (let i = 0; i < 100; i++) {
    list.push(i);
  }
  return list;
};
console.log(listOfInt());

// Affiche les nombres pairs de 0 à x grâce à une boucle itérative (for i...)
const printEvenNumbers = (limit) => {
  for (let i = 0; i <= limit; i = i + 2) {
    console.log(i);
  }
};

printEvenNumbers(32);
