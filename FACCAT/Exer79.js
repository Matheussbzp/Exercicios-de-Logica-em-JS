// array para armazenar as notas dos alunos
let notas = [];

// leitura das notas dos 20 alunos
for (let i = 1; i <= 20; i++) {
  notas.push(Number(prompt(`Digite a nota do aluno ${i}:`)));
}

// cálculo da média da turma
let somaNotas = notas.reduce((total, nota) => total + nota, 0);
let mediaTurma = somaNotas / notas.length;

// contagem de alunos com nota acima da média
let countAcimaMedia = 0;
for (let i = 0; i < notas.length; i++) {
  if (notas[i] > mediaTurma) {
    countAcimaMedia++;
  }
}

// exibição dos resultados
console.log(`Média da turma: ${mediaTurma.toFixed(2)}`);
console.log(`Alunos com nota acima da média: ${countAcimaMedia}`);

//79) Escreva um algoritmo que permita a leitura das notas de uma turma de 20 alunos. Calcular a média
//da turma e contar quantos alunos obtiveram nota acima desta média calculada. Escrever a média da
//turma e o resultado da contagem.