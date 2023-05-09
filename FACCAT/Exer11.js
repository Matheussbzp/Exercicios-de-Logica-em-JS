// Ler os dados de entrada
let numCarrosVendidos = parseInt(prompt("Digite o número de carros vendidos:"));
let valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas:"));
let salarioFixo = parseFloat(prompt("Digite o salário fixo:"));
let comissaoPorCarro = parseFloat(prompt("Digite o valor da comissão por carro vendido:"));

// Calcular a comissão total
let comissaoTotal = numCarrosVendidos * comissaoPorCarro;

// Calcular o valor da porcentagem das vendas
let porcentagemVendas = 0.05 * valorTotalVendas;

// Calcular o valor total do salário do vendedor
let salarioFinal = salarioFixo + comissaoTotal + porcentagemVendas;

// Exibir o resultado
alert("O salário final do vendedor é: R$" + salarioFinal.toFixed(2));


//Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
//mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
//efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
//vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
//vendedor.