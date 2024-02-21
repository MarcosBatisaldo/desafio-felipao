let nameXP = ["Marcos", 2001];
let level = "";

if (nameXP[1] < 1000) {
  level = "Ferro";
} else if (nameXP[1] < 2000) {
  level = "Bronze";
} else if (nameXP[1] < 5000) {
  level = "Prata";
} else if (nameXP[1] < 7000) {
  level = "Ouro";
} else if (nameXP[1] < 8000) {
  level = "Platina";
} else if (nameXP[1] < 9000) {
  level = "Ascendente";
} else if (nameXP[1] < 10000) {
  level = "Imortal";
} else {
  level = "Radiante";
}

console.log(`O heroi de nome ${nameXP[0]} esta no nivel de ${level}`);
