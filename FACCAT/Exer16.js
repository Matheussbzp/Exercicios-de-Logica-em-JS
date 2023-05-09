const precoUnidade = 1.3; // preço de uma maçã, se comprada individualmente
const precoDuzia = 1.0; // preço de uma maçã, se comprada em dúzia

let quantidade = prompt("Quantas maçãs você deseja comprar?"); // pede ao usuário a quantidade de maçãs desejada
quantidade = parseInt(quantidade); // converte a entrada do usuário em um número inteiro

let precoTotal; // variável que armazenará o preço total da compra

if (quantidade >= 12) { // se o usuário comprou pelo menos 12 maçãs
  precoTotal = quantidade * precoDuzia; // calcula o preço total baseado no preço por dúzia
} else { // caso contrário, se o usuário comprou menos de 12 maçãs
  precoTotal = quantidade * precoUnidade; // calcula o preço total baseado no preço por unidade
}

console.log(`O preço total da compra é de R$ ${precoTotal.toFixed(2)}`); // exibe o preço total da compra, formatado com duas casas decimais

//16) As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
//compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
//escreva o custo total da compra. 