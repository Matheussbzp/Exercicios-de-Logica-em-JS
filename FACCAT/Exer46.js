let valor1 = parseInt(prompt("Digite o primeiro valor:"));
let valor2 = parseInt(prompt("Digite o segundo valor (não pode ser zero):"));

while (valor2 === 0) {
  valor2 = parseInt(prompt("Valor inválido. Digite um segundo valor diferente de zero:"));
}

let resultado = valor1 / valor2;
console.log(`O resultado da divisão é ${resultado}.`);

//46) Acrescentar uma mensagem de 'VALOR INVÁLIDO' no exercício [44] caso o segundo valor
//informado seja ZERO. 