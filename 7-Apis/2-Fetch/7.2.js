// Affiche dans la console tous les célibataires depuis data.json
const findSingles = async () => {
  try {
    const singles = [];
    // Recevoir le JSON
    const response = await fetch("../Json/data.json");
    const data = await response.json();
    // Parcourir les objets correspondant aux 4 personnes
    for (let person in data) {
      // S'il est célibataire, son objet est ajouté à "singles"
      if (data[person].single) {
        singles.push(data[person]);
      }
    }
    console.table(singles);
  } catch (error) {
    console.error(error);
  }
};
findSingles();

// Donne l'année de sortie d'un film ou d'une série
// SOURCE - https://rapidapi.com/apidojo/api/imdb8/
const getReleaseDate = async () => {
  // Obtenir le nom de film saisi par l'utilisateur
  const searchQuery = prompt("Saisi le nom du film à rechercher");
  // Ajouter les paramètres pour l'API
  const url = `https://imdb8.p.rapidapi.com/title/v2/find?title=${searchQuery}&limit=20&sortArg=moviemeter%2Casc`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "33a38a48e2msh345936a2215c570p1a003cjsn277d5a16ce04",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  // Recevoir la réponse de l'API
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // Afficher le résultat grâce à une alerte
    alert(
      `L'année de sortie de ${searchQuery} est : ${result.results[0].year}`
    );
    // Gérer les erreurs
  } catch (error) {
    console.error(error);
  }
};
getReleaseDate();
