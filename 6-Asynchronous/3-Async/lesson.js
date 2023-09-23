// Recevoir la réponse d'une promesse avec la syntaxe ES6
const promiseWithError = new Promise((resolve, reject) => {
  if (false) {
    resolve("La requête est un succès");
  } else {
    reject("La requête est refusée");
  }
});

const getResponse = async () => {
  const response = await promiseWithError;
  console.log(response);
};
// getResponse();

// Gestion d'erreur avec async/await
const getResponseWithErrorHandling = async () => {
  try {
    const response = await promiseWithError;
    console.log(response);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Requête terminée."); // Enfin
  }
};
getResponseWithErrorHandling();
