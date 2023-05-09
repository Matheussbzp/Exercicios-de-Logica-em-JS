let preco, codigo;
let soma = 0;
let maiorPreco = 0;

for (let i = 1; i <= 15; i++) {
  codigo = parseInt(prompt(`Digite o código do produto ${i}:`));
  preco = parseFloat(prompt(`Digite o preço do produto ${i}:`));
  soma += preco;

  if (preco > maiorPreco) {
    maiorPreco = preco;
  }
}

let media = soma / 15;

console.log(`O maior preço lido é: R$ ${maiorPreco.toFixed(2)}`);
console.log(`A média aritmética dos preços dos produtos é: R$ ${media.toFixed(2)}`);

//73) A prefeitura de uma cidade deseja fazer uma pesquisa entre seus habitantes. Faça um algoritmos
//para coletar dados sobre o salário e número de filhos de cada habitante e após as leituras, escrever:
//a) Média de salário da população
//b) Média do número de filhos
//c) Maior salário dos habitantes
//d) Percentual de pessoas com salário menor que R$ 150,00
//Obs.: O final da leituras dos dados se dará com a entrada de um “salário negativo”.