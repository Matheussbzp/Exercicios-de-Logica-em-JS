// ler as três notas do aluno
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

// definir os pesos de cada nota
const peso1 = 2;
const peso2 = 3;
const peso3 = 5;

// calcular a média final ponderada
let mediaFinal = (nota1*peso1 + nota2*peso2 + nota3*peso3) / (peso1 + peso2 + peso3);

// exibir o resultado da média final
console.log("A média final é: " + mediaFinal.toFixed(2));

//13) Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
//Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média
//final é: 