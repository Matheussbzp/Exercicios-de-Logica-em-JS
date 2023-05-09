let time1 = prompt("Digite o nome do time 1: ");
let gols1 = parseInt(prompt("Digite o número de gols do time 1: "));
let time2 = prompt("Digite o nome do time 2: ");
let gols2 = parseInt(prompt("Digite o número de gols do time 2: "));

if (gols1 > gols2) {
  console.log("O time vencedor é: " + time1);
} else if (gols2 > gols1) {
  console.log("O time vencedor é: " + time2);
} else {
  console.log("EMPATE");
}

//32) Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
//do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE. 