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

//72) Faça um algoritmo para ler o código e o preço de 15 produtos, calcular e escrever:
//- o maior preço lido
//- a média aritmética dos preços dos produtos 