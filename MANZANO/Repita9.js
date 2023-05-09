let maior = valor;
let menor = valor;
let valor = parseInt(prompt("Digite um valor:"));
while (valor >= 0) {
  if (valor > maior) {
    maior = valor;
  }
  if (valor < menor) {
    menor = valor;
  }
  valor = parseInt(prompt("Digite um valor:"));
}
console.log("Maior valor: " + maior);
console.log("Menor valor: " + menor);

//Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo
//seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo
//usuário. 