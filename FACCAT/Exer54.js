let n = Number(prompt("Digite um valor maior que 0 para N:"));

while (n <= 0) {
  n = Number(prompt("Valor inválido! Digite um valor maior que 0 para N:"));
}

for (let i = 1; i <= n; i++) {
  console.log(i);
}

//Modifique o exercício anterior para aceitar somente valores maiores que 0 para N. Caso o valor
//informado (para N) não seja maior que 0, deverá ser lido um novo valor para N. 
