let num1, num2;

do {
  num1 = Number(prompt("Digite o primeiro número: "));
  num2 = Number(prompt("Digite o segundo número (diferente de zero): "));
} while (num2 === 0);

let resultado = num1 / num2;

console.log(`O resultado da divisão de ${num1} por ${num2} é ${resultado}.`);

//44) Escreva um algoritmo para ler 2 valores e se o segundo valor informado for ZERO, deve ser lido
//um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero e imprimir o resultado
//da divisão do primeiro valor lido pelo segundo valor lido. (utilizar a estrutura REPITA).
