// lendo as notas e a média dos exercícios
const n1 = parseFloat(prompt("Digite a nota da primeira verificação:"));
const n2 = parseFloat(prompt("Digite a nota da segunda verificação:"));
const n3 = parseFloat(prompt("Digite a nota da terceira verificação:"));
const mediaExercicios = parseFloat(prompt("Digite a média dos exercícios:"));

// calculando a média de aproveitamento
const mediaAproveitamento = (n1 + n2 * 2 + n3 * 3 + mediaExercicios) / 7;

// verificando o conceito do aluno de acordo com a tabela
let conceito;
if (mediaAproveitamento >= 9.0) {
  conceito = "A";
} else if (mediaAproveitamento >= 7.5 && mediaAproveitamento < 9.0) {
  conceito = "B";
} else if (mediaAproveitamento >= 6.0 && mediaAproveitamento < 7.5) {
  conceito = "C";
} else if (mediaAproveitamento >= 4.0 && mediaAproveitamento < 6.0) {
  conceito = "D";
} else {
  conceito = "E";
}

// exibindo o resultado
alert(`Média de aproveitamento: ${mediaAproveitamento.toFixed(2)}\nConceito: ${conceito}`);

//Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos
//exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo
//e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo: 
