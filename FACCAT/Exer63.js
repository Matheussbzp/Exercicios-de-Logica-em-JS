let final = 0;

for (let i = 1; i <= 10; i++) {
  let numero = parseInt(prompt(`Digite o ${i}º número:`));
  
  if (numero < 40) {
    final += numero;
  }
}

console.log(`A soma dos números menores que 40 é: ${final}`);

//Escreva um algoritmo para ler 10 números e ao final da leitura escrever a soma total dos 10
//números lidos. 