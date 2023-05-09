let valor = 0;
let maior = 0;
let menor = 0;

while (valor >= 0) {
  valor = parseInt(prompt("Digite um valor positivo inteiro (ou um número negativo para sair):"));
  if (valor >= 0) {
    if (valor > maior) {
      maior = valor;
    }
    if (valor < menor) {
      menor = valor;
    }
  }
}

alert(`Maior valor: ${maior}\nMenor valor: ${menor}`);

//Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo
//seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo
//usuário