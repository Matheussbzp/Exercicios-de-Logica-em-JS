let litros = parseFloat(prompt("Digite a quantidade de litros vendidos: "));
let tipo = prompt("Digite o tipo de combustível (A-álcool ou G-gasolina): ");

let precoAlcool = 2.9;
let precoGasolina = 3.3;
let precoTotal = 0;

if (tipo === "A") {
  if (litros <= 20) {
    precoTotal = litros * precoAlcool * 0.97;
  } else {
    precoTotal = litros * precoAlcool * 0.95;
  }
} else if (tipo === "G") {
  if (litros <= 20) {
    precoTotal = litros * precoGasolina * 0.96;
  } else {
    precoTotal = litros * precoGasolina * 0.94;
  }
}

console.log(`O valor a ser pago é R$ ${precoTotal.toFixed(2)}`);

// Um posto está vendendo combustíveis com a seguinte tabela de descontos:
//até 20 litros, desconto de 3% por litro Álcool
//acima de 20 litros, desconto de 5% por litro
//até 20 litros, desconto de 4% por litro Gasolina
//acima de 20 litros, desconto de 6% por litro
//Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da
//seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se
//que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90. 