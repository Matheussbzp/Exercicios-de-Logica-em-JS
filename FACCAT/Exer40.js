let descricao = prompt("Digite a descrição do produto:");
let quantidade = Number(prompt("Digite a quantidade adquirida:"));
let precoUnitario = Number(prompt("Digite o preço unitário:"));

let total = quantidade * precoUnitario;
let desconto;

if (quantidade <= 5) {
  desconto = total * 0.02;
} else if (quantidade <= 10) {
  desconto = total * 0.03;
} else {
  desconto = total * 0.05;
}

let totalAPagar = total - desconto;

console.log(`Descrição do produto: ${descricao}`);
console.log(`Quantidade adquirida: ${quantidade}`);
console.log(`Preço unitário: R$ ${precoUnitario.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
console.log(`Total a pagar: R$ ${totalAPagar.toFixed(2)}`);


//Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço
//unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total
//a pagar (total a pagar = total - desconto), sabendo-se que:
// - Se quantidade <= 5 o desconto será de 2%
//- Se quantidade > 5 e quantidade <=10 o desconto será de 3%
//- Se quantidade > 10 o desconto será de 5%