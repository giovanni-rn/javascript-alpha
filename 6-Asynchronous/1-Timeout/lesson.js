// Délai avant exécution
/*
setTimeout(() => {
  console.log(3);
}, 2000);

setTimeout(() => {
  console.log(2);
}, 1000);

console.log(1);
*/

// Interval de temps
const interval1 = setInterval(() => {
  console.log("1 seconde s'est écoulée.", interval1);
}, 1000);

// Arrêter l'interval
setTimeout(() => {
  console.log("Cela fait 5 secondes depuis le début de l'éxecution.");
  clearInterval(interval1);
}, 5000);
