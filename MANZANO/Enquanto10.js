let contador = 50;
let soma = 0;
let quantidade = 0;
while (contador <= 70) {
  if (contador % 2 === 0) {
    soma += contador;
    quantidade++;
  }
  contador++;
}
let media = soma / quantidade;
console.log("Soma: " + soma);
console.log("Média: " + media);

//Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores
//pares situados na faixa numérica de 50 a 70. 