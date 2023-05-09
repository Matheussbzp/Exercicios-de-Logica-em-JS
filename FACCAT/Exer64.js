let soma = 0;
for (let i = 1; i <= 10; i++) {
  const numero = Number(prompt(`Digite o ${i}º número:`));
  if (numero < 40) {
    soma += numero;
  }
}
console.log(`A soma dos números menores que 40 é: ${soma}`);

//64) Escreva um algoritmo para ler 10 números. Todos os números lidos com valor inferior a 40 devem
//ser somados. Escreva o valor final da soma efetuada. 