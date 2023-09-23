const calculator = () => {
  // Récupérer les deux nombres saisis et l'opérateur
  const nb1 = parseInt(prompt("Entrez un premier nombre :"));
  const operator = prompt("Entrez l'opération choisie : + - * /");
  const nb2 = parseInt(prompt("Entrez un second nombre :"));
  // Créer un switch qui effectue une opération en fonction de l'opérateur saisi
  let result;
  switch (operator) {
    case "+":
      result = nb1 + nb2;
      break;
    case "-":
      result = nb1 - nb2;
      break;
    case "*":
      result = nb1 * nb2;
      break;
    case "/":
      result = nb1 / nb2;
      break;
    default:
      console.log("Erreur");
      break;
  }
  return result;
};

console.log(calculator());
