// Syntaxe d'un JSON
const jsonString =
  '[{ "name": "Jean-Claude", "age": 107, "single": true },{ "name": "Philistin", "age": 17, "single": false }, { "name": "Rudolf", "age": 24, "single": true }, {"name": "Natasha", "age": 67, "single": true }]';
console.log(jsonString);

// Transormer un JSON en objet / liste d'objets
const jsonObject = JSON.parse(jsonString);
console.table(jsonObject);

// Transormer un objet en JSON
const jsonReString = JSON.stringify(jsonObject);
console.log(jsonReString);
