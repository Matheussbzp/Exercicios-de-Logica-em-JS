let valor1 = parseInt(prompt("Digite o primeiro valor: "));
let valor2 = parseInt(prompt("Digite o segundo valor: "));

while (valor2 === 0) {
  console.log("VALOR INVÁLIDO");
  valor2 = parseInt(prompt("Digite o segundo valor novamente: "));
}

console.log("O resultado da divisão é: " + valor1 / valor2);

//47) Acrescentar uma mensagem de 'VALOR INVÁLIDO' no exercício [45] caso o segundo valor
//informado seja ZERO.