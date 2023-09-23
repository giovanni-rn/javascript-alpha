// Créer une promesse qui renvoie un message d'erreur si l'on est dimanche
const closedSunday = new Promise((resolve, reject) => {
  const dateCode = Date.now();
  const day = new Date(dateCode).getDay();
  if (day != 7 || !Date().includes("Sun")) {
    resolve("Success, it's open !");
  } else {
    reject("Come back later...");
  }
});

// Recevoir la promesse et afficher la réponse en cas de succès et d'échec
closedSunday
  .then((date) => console.log(date))
  .catch((error) => console.error(error));
