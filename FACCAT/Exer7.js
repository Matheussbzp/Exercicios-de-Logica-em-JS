// ler idade da pessoa em anos, meses e dias
const idadeAnos = parseInt(prompt("Digite a idade em anos: "));
const idadeMeses = parseInt(prompt("Digite a idade em meses: "));
const idadeDias = parseInt(prompt("Digite a idade em dias: "));

// calcular a idade em dias
const idadeTotalDias = idadeAnos * 365 + idadeMeses * 30 + idadeDias;

// exibir a idade em dias
console.log(`A idade total em dias é: ${idadeTotalDias} dias.`);

//7) Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade
//dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias. 