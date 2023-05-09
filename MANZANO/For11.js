let fatorial = 1;
for (let i = 1; i <= 10; i += 2) {
  for (let j = i; j >= 1; j--) {
    fatorial *= j;
  }
  console.log("O fatorial de " + i + " é " + fatorial);
  fatorial = 1;
}

//Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares
//situados na faixa numérica de 1 a 10. 