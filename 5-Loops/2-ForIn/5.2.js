// Fonction qui renvoie la liste des entiers de 0 à 99 (inclus)
const listInt = () => {
  const list = [];
  for (let i = 0; i < 100; i++) {
    list.push(i);
  }
  return list;
};

// Fonction qui affiche les nombres multiples de x
const multiples = (list) => {
  for (nb of list) {
    if (nb % 10 === 0) {
      console.log(nb);
    }
  }
};

multiples(listInt());
