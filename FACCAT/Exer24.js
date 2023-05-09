// Pede ao usuário para inserir o salário fixo e o total de vendas
let salarioFixo = parseFloat(prompt("Insira o salário fixo do vendedor:"));
let totalVendas = parseFloat(prompt("Insira o total de vendas efetuadas pelo vendedor:"));

// Calcula a comissão devida
let comissao = 0;
if (totalVendas <= 1500) {
  comissao = totalVendas * 0.03;
} else {
  comissao = 1500 * 0.03 + (totalVendas - 1500) * 0.05;
}

// Calcula o salário total do vendedor
let salarioTotal = salarioFixo + comissao;

// Escreve o salário total na tela
console.log(`O salário total do vendedor é R$ ${salarioTotal.toFixed(2)}.`);

//Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
//ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
//ultrapassar este valor, calcular e escrever o seu salário total.