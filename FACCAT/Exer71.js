let quantidade = parseInt(prompt("Digite a quantidade de números:"));
let maior = -Infinity;
let soma = 0;

for (let i = 0; i < quantidade; i++) {
  let numero = parseFloat(prompt("Digite o número " + (i + 1) + ":"));
  if (numero > maior) {
    maior = numero;
  }
  soma += numero;
}

let media = soma / quantidade;

console.log("O maior número lido foi: " + maior);
console.log("A média dos números lidos foi: " + media.toFixed(2));

//71) Faça um algoritmo para ler uma quantidade e a seguir ler esta quantidade de números. Depois de
//ler todos os números o algoritmo deve apresentar na tela o maior dos números lidos e a média dos
//números lidos. 