let a = parseInt(prompt("Digite o primeiro valor:"));
let b = parseInt(prompt("Digite o segundo valor (não pode ser zero):"));

while (b === 0) {
  b = parseInt(prompt("O segundo valor não pode ser zero. Digite novamente:"));
}

let resultado = a / b;
console.log(`O resultado da divisão é ${resultado}.`);

//Reescreva o exercício anterior utilizando a estrutura ENQUANTO. 