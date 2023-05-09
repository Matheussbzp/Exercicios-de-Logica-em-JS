let valor1 = parseInt(prompt("Digite o primeiro valor: "));
let valor2 = parseInt(prompt("Digite o segundo valor: "));
let valorFinal = 0;

for (let i = valor1; i <= valor2; i++) {
  valorFinal += i;
}

console.log(`A soma dos números inteiros entre ${valor1} e ${valor2} é: ${valorFinal}`);

//65) Ler 2 valores, calcular e escrever a soma dos inteiros existentes entre os 2 valores lidos (incluindo
//os valores lidos na soma). Considere que o segundo valor lido será sempre maior que o primeiro valor
//lido