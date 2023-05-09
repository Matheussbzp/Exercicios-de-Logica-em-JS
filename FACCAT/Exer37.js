let kgMorango = parseFloat(prompt("Digite a quantidade de morangos em Kg:"));
let kgMaca = parseFloat(prompt("Digite a quantidade de maçãs em Kg:"));

let precoMorango, precoMaca;
if (kgMorango <= 5) {
  precoMorango = 2.5;
} else {
  precoMorango = 2.2;
}

if (kgMaca <= 5) {
  precoMaca = 1.8;
} else {
  precoMaca = 1.5;
}

let totalCompra = (kgMorango * precoMorango) + (kgMaca * precoMaca);

if (kgMorango + kgMaca > 8 || totalCompra > 25) {
  totalCompra *= 0.9;
}

alert("O valor total da compra é R$ " + totalCompra.toFixed(2));

//Uma fruteira está vendendo frutas com a seguinte tabela de preços:
//Até 5 Kg Acima de 5 Kg
//Morango R$ 2,50 por Kg R$ 2,20 por Kg
//Maçã R$ 1,80 por Kg R$ 1,50 por Kg
//Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
//ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
//morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente. 