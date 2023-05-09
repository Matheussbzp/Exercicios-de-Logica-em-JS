// Lendo os dados do empregado
let codigo = prompt("Digite o número do empregado:");
let anoNascimento = prompt("Digite o ano de nascimento do empregado:");
let anoIngresso = prompt("Digite o ano de ingresso do empregado na empresa:");

// Convertendo os dados para números
anoNascimento = parseInt(anoNascimento);
anoIngresso = parseInt(anoIngresso);

// Calculando a idade e o tempo de trabalho
let idade = new Date().getFullYear() - anoNascimento;
let tempoTrabalho = new Date().getFullYear() - anoIngresso;

// Verificando se o empregado está qualificado para a aposentadoria
if (idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 && tempoTrabalho >= 25)) {
  console.log("Idade: " + idade + " anos");
  console.log("Tempo de trabalho: " + tempoTrabalho + " anos");
  console.log("Requerer aposentadoria");
} else {
  console.log("Idade: " + idade + " anos");
  console.log("Tempo de trabalho: " + tempoTrabalho + " anos");
  console.log("Não requerer");
}


//Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para
//estar em condições, um dos seguintes requisitos deve ser satisfeito:
//- Ter no mínimo 65 anos de idade.
//- Ter trabalhado no mínimo 30 anos.
//- Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.
//Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano
//de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo
//de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'.