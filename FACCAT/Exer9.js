// leitura do salário atual e percentual de reajuste
const salarioAtual = parseFloat(prompt("Digite o salário atual do funcionário:"));
const percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste (%):"));

// cálculo do novo salário
const novoSalario = salarioAtual * (1 + percentualReajuste / 100);

// impressão do resultado
console.log(`O novo salário do funcionário é R$${novoSalario.toFixed(2)}.`);


//9) Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
//Calcular e escrever o valor do novo salário.