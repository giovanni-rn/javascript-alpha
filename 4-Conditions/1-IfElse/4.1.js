// Fonction qui vérifie qu'une liste ait bien la taille indiquée
const checkArrayLength = (list, len) => {
  if (list.length === len) {
    return true;
  } else {
    return false;
  }
};

fruits = ["banana", "strawberry", "orange"];
console.log(checkArrayLength(fruits, 7)); // false
console.log(checkArrayLength(fruits, 3)); // true

// Mini jeu : pile ou face
const pileOuFace = () => {
  const choice = ["pile", "face"];
  const randomChoice = choice[Math.floor(Math.random() * 2)];
  const userChoice = prompt("Pile ou face ?");
  if (randomChoice == userChoice) {
    alert("Gagné !");
  } else {
    alert("Perdu");
  }
};

pileOuFace();
