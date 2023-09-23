// Créer un objet stockant les informations de : Phillipe, 45 ans, professeur
const phillipe = {
  name: "Phillipe",
  age: 45,
  job: "Professeur",
  single: true,
};

console.log(phillipe);

// Modifier le métier de Phillipe pour qu'il soit développeur web
const newJob = "Développeur web";
phillipe.job = newJob;

console.log(phillipe);
