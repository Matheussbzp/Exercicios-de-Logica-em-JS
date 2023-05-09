// Leitura dos dados de entrada
const horasTrabalhadasMes = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"));
const salarioHora = parseFloat(prompt("Digite o salário por hora do funcionário:"));

// Cálculo do salário semanal e mensal
const salarioSemanal = salarioHora * 40;
const salarioMensal = salarioSemanal * 4;

// Cálculo do salário com horas extras, caso tenham sido trabalhadas
if (horasTrabalhadasMes > 160) { // mais de 40 horas semanais durante o mês
  const horasExtras = horasTrabalhadasMes - 160;
  const valorHoraExtra = salarioHora * 1.5;
  const salarioHoraExtra = valorHoraExtra * horasExtras;
  const salarioTotal = salarioMensal + salarioHoraExtra;
  console.log(`O salário total do funcionário é R$ ${salarioTotal.toFixed(2)}.`);
} else { // até 40 horas semanais durante o mês
  console.log(`O salário total do funcionário é R$ ${salarioMensal.toFixed(2)}.`);
}


//A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais
//de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
//Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
//o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
//(considere que o mês possua 4 semanas exatas). 