// Rajeunis Vanessa sans modifier jsonString directement
const jsonString =
  '[{"name": "Jean-Claude", "age": 107, "single": true}, {"name": "Philistin", "age": 17, "single": false}, {"name": "Rudolf", "age": 24, "single": true}, {"name": "Natasha", "age": 67, "single": true}]';

const jsonData = JSON.parse(jsonString);
jsonData[2].age = 21;

const newJson = JSON.stringify(jsonData);
console.table(jsonData);
