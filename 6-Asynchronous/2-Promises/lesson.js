// Créer une promesse
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Salut !");
  }, 1000);
});

// Recevoir la réponse d'une promesse
promise.then((response) => {
  //   console.log(response);
});

// Gestion des erreurs
const promiseWithError = new Promise((resolve, reject) => {
  if (false) {
    resolve("La requête est un succès");
  } else {
    reject("La requête est refusée");
  }
});

promiseWithError
  .then((response) => console.log(response))
  .catch((error) => console.error(error))
  .finally(() => console.log("Terminé.")); // Enfin
