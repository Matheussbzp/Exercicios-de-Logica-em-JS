// ler idades
const idadeHomem1 = parseInt(prompt("Digite a idade do primeiro homem:"));
const idadeHomem2 = parseInt(prompt("Digite a idade do segundo homem:"));
const idadeMulher1 = parseInt(prompt("Digite a idade da primeira mulher:"));
const idadeMulher2 = parseInt(prompt("Digite a idade da segunda mulher:"));

// determinar homem mais velho
let maisVelho;
if (idadeHomem1 > idadeHomem2) {
  maisVelho = idadeHomem1;
} else {
  maisVelho = idadeHomem2;
}

// determinar mulher mais nova
let maisNova;
if (idadeMulher1 < idadeMulher2) {
  maisNova = idadeMulher1;
} else {
  maisNova = idadeMulher2;
}

// calcular e exibir resultado
const soma = maisVelho + maisNova;
const produto = (idadeHomem1 < idadeHomem2 ? idadeHomem1 : idadeHomem2) * (idadeMulher1 > idadeMulher2 ? idadeMulher1 : idadeMulher2);
alert(`A soma da idade do homem mais velho com a mulher mais nova é ${soma}.\nO produto da idade do homem mais novo com a mulher mais velha é ${produto}.`);

//36) Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades
//dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma
//das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais
//novo com a mulher mais velha. 