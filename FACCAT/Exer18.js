let anoAtual = prompt("Digite o ano atual:");
let anoNascimento = prompt("Digite o ano de seu nascimento:");

let idade = anoAtual - anoNascimento;

if (idade >= 16) {
  console.log("Você pode votar este ano!");
} else {
  console.log("Você não pode votar este ano.");
}

//Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
//poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu)