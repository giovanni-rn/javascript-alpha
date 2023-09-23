// Structure du switch
const aliments = ["banane", "poulet", "saumon", "brocoli"];
const aliment = aliments[0];

/* if (aliment == "banane") {
  console.log("C'est un fruit");
} else if (aliment == "poulet") {
  console.log("C'est de la volaille");
} else if (aliment == "saumon") {
  console.log("C'est de la poiscaille");
} else if (aliment == "brocoli") {
  console.log("C'est un légume");
} */

switch (aliment) {
  case "banane":
    console.log("C'est un fruit");
    break;
  case "poulet":
    console.log("C'est de la volaille");
    break;
  case "saumon":
    console.log("C'est de la poiscaille");
    break;
  case "brocoli":
    console.log("C'est un légume");
    break;
}
