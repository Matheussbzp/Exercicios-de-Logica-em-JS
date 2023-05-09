let maior = Number.MIN_VALUE; // define a variável com o menor valor possível
let menor = Number.MAX_VALUE; // define a variável com o maior valor possível

for (let i = 0; i < 100; i++) {
  let valor = parseFloat(prompt(`Digite o valor ${i+1}:`));
  if (valor > maior) {
    maior = valor;
  }
  if (valor < menor) {
    menor = valor;
  }
}

console.log(`Maior valor: ${maior}`);
console.log(`Menor valor: ${menor}`);

//70) Faça um programa que leia 100 valores e no final, escreva o maior e o menor valor lido