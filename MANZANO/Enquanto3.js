let somaPares = 0;
let num = 1;

while (num <= 500) {
  if (num % 2 === 0) {
    somaPares += num;
  }
  num++;
}

console.log(`A soma dos valores pares de 1 a 500 é: ${somaPares}`);

//c) Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
//1 até 500. 