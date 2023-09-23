// Fonction qui renvoie le premier élement d'une liste
const returnFirst = (list) => {
  const firstElem = list[0];
  return firstElem;
};

const returnFirst2 = (list) => list[0];

// Fonction qui renvoie le dernier élement d'une liste
const returnLast = (list) => {
  const lastElem = list[list.length - 1];
  return lastElem;
};

const meet = ["poulet", "boeuf", "agneau", "steak haché", "dinde"];
console.log(returnFirst(meet));
console.log(returnLast(meet));

// Fonction qui ajoute un élément à la fin d'une liste sans utiliser ".push()"
const newPush = (list, elem) => {
  list[list.length] = elem;
  return list;
};

console.log(newPush(meet, "canard"));
