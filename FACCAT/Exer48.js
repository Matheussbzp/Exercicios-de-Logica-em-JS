let nota1 = -1, nota2 = -1;

while (nota1 < 0 || nota1 > 10) {
  nota1 = parseFloat(prompt("Digite a nota da 1ª avaliação (0 a 10): "));
  if (nota1 < 0 || nota1 > 10) {
    alert("Nota inválida! Digite um valor entre 0 e 10.");
  }
}

while (nota2 < 0 || nota2 > 10) {
  nota2 = parseFloat(prompt("Digite a nota da 2ª avaliação (0 a 10): "));
  if (nota2 < 0 || nota2 > 10) {
    alert("Nota inválida! Digite um valor entre 0 e 10.");
  }
}

const media = (nota1 + nota2) / 2;
alert(`A média do aluno é: ${media.toFixed(2)}`);

//48) Escreva um algoritmo para ler as notas da 1a. e 2a. avaliações de um aluno, calcule e imprima a
//média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada
//nota. 