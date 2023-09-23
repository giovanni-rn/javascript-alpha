// Recevoir un JSON depuis un fichier externe
const getJson = async () => {
  try {
    const response = await fetch("../1-Json/data.json");
    const data = await response.json();
    console.table(data);
    console.table(data[0].name);
  } catch (error) {
    console.error(error);
  }
};
getJson();

// Recevoir la réponse d'un API
// SOURCE - https://rapidapi.com/martin.svoboda/api/quotes15/
const getApi = async () => {
  const url = "https://quotes15.p.rapidapi.com/quotes/random/";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "33a38a48e2msh345936a2215c570p1a003cjsn277d5a16ce04",
      "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(`"${data.content}" de ${data.originator.name}, ${data.url}`);
  } catch (error) {
    console.error(error);
  }
};
getApi();
