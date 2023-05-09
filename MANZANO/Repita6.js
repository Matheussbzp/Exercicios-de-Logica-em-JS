let total = 0;
let media = 0;
let contador = 0;
let valor = prompt("Digite um valor positivo:");
while (valor >= 0) {
  total += valor;
  contador++;
  valor = prompt("Digite outro valor positivo:");
}
if (contador > 0) {
  media = total / contador;
}
console.log("Total: " + total);
console.log("Média: " + media);
console.log("Quantidade: " + contador);

//Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o
//total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras
//dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve
//parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar
//como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da
//média