let contador = 1;
let soma = 0;
while (contador <= 10) {
  let valor = parseFloat(prompt("Digite um valor:"));
  soma += valor;
  contador++;
}
let media = soma / 10;
console.log("Soma: " + soma);
console.log("Média: " + media);

//Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do
//somatório e a média aritmética dos valores lidos. 