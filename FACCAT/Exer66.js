let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
let valorFinal = 0;

if (num1 < num2) {
for (let i = num1; i <= num2; i++) {
valorFinal += i;
}
} else {
for (let i = num2; i <= num1; i++) {
valorFinal += i;
}
}

console.log("A soma dos números inteiros entre " + num1 + " e " + num2 + " é: " + valorFinal);

//66) O mesmo exercício anterior, mas agora, considere que o segundo valor lido poderá ser maior ou
//menor que o primeiro valor lido, ou seja, deve-se testá-los. 