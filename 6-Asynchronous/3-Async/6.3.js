// Fonction qui affiche la réponse de la promesse mais avec async/Await
const closedSunday = new Promise((resolve, reject) => {
  if (!Date().includes("Sun")) {
    resolve("Success, it's open !");
  } else {
    reject("Come back later...");
  }
});

const receivePromise = async (promise) => {
  try {
    const date = await promise;
    console.log(date);
  } catch (error) {
    console.error(error);
  }
};

receivePromise(closedSunday);
