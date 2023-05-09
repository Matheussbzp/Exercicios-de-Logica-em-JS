let numAlunos = prompt("Digite o número de alunos:");
let somaNotas = 0;

for (let i = 1; i <= numAlunos; i++) {
  let nota = parseFloat(prompt(`Digite a nota do aluno ${i}:`));
  somaNotas += nota;
}

let media = somaNotas / numAlunos;

console.log(`A média aritmética das notas é: ${media.toFixed(2)}`);

// Ler o número de alunos existentes em uma turma e, após isto, ler as notas destes alunos, calcular e
//escrever a média aritmética dessas notas lidas. 