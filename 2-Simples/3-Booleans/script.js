// Fonction qui vérifie si l'argument est un string
const checkString = (arg) => {
  const typeOfArg = typeof arg; // "number" | "string" | "boolean" ...
  const isString = typeOfArg == "string"; // true | false
  return isString;
};

const nb = 45;
const str = "45";
console.log(checkString(nb)); // false
console.log(checkString(str)); // true
