// pedir ao usuário para inserir as notas das avaliações
let nota1 = parseFloat(prompt("Insira a nota da primeira avaliação: "));
let nota2 = parseFloat(prompt("Insira a nota da segunda avaliação: "));

// calcular a média aritmética simples
let media = (nota1 + nota2) / 2;

// verificar se o aluno foi aprovado ou não
if (media >= 6) {
  console.log(`Parabéns! Você foi aprovado(a) com média ${media.toFixed(2)}.`);
} else {
  console.log(`Infelizmente, você foi reprovado(a) com média ${media.toFixed(2)}.`);
}

//Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
//uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
//   aluno é aprovado). Escrever também a média calculada. 