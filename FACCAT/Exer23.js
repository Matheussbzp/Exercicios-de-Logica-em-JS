// Declaração de variáveis
let nome, altura, pesoIdeal;
let sexo;

// Entrada de dados
nome = prompt("Digite o nome da pessoa:");
altura = parseFloat(prompt("Digite a altura da pessoa em metros:"));
sexo = prompt("Digite o sexo da pessoa (M ou F):");

// Cálculo do peso ideal
if (sexo === "M") {
  pesoIdeal = 72.7 * altura - 58;
} else if (sexo === "F") {
  pesoIdeal = 62.1 * altura - 44.7;
} else {
  console.log("Sexo inválido.");
}

// Exibição do resultado
if (pesoIdeal) {
  console.log(`O peso ideal de ${nome} é ${pesoIdeal.toFixed(2)} kg.`);
}

//Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule
//e mostre seu peso ideal, utilizando as seguintes fórmulas:
//- para sexo masculino: peso ideal = (72.7 * altura) - 58
//- para sexo feminino: peso ideal = (62.1 * altura) - 44.7
