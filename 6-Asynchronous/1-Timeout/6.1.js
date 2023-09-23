// Afficher un message dans la console au bout de 3 secondes
setTimeout(() => {
  console.log("Tu as attendu 3 secondes.");
}, 3000);

// Afficher un compte à rebours chaque seconde : 3, 2, 1
let secondsLeft = 3;
console.log(secondsLeft);

const countdown = setInterval(() => {
  if (secondsLeft <= 1) {
    clearInterval(countdown);
  } else {
    secondsLeft--;
    console.log(secondsLeft);
  }
}, 1000);
