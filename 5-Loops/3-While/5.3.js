const guessNumber = (limit) => {
  // Générer un nombre aléatoire entre 0 et x
  let randomNumber = Math.floor(Math.random() * limit);
  // Reposer la question TANT QUE la réponse n'est pas trouvée
  let win = false;
  while (win != true) {
    const proposal = prompt("Propose un nombre :");
    if (proposal < randomNumber) {
      console.log("Trop petit");
    } else if (proposal > randomNumber) {
      console.log("Trop grand");
    } else if (proposal == randomNumber) {
      console.log("Trouvé ! Le nombre était :", randomNumber);
      win = true;
    }
  }
};

guessNumber(limit);
