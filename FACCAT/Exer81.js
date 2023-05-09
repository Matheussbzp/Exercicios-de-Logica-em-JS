let Q = [];
let menor = null;
let posicaoMenor = null;

// lê os elementos do vetor Q
for (let i = 0; i < 20; i++) {
  let elemento = parseInt(prompt(`Digite o elemento ${i + 1} do vetor:`));
  while (elemento < 0 || isNaN(elemento)) {
    elemento = parseInt(prompt(`Digite um número positivo para o elemento ${i + 1} do vetor:`));
  }
  if (menor === null || elemento < menor) {
    menor = elemento;
    posicaoMenor = i;
  }
}

// escreve o resultado
console.log(`O menor elemento do vetor é ${menor} e ele está na posição ${posicaoMenor}.`);

//81) O mesmo exercício anterior, mas agora deve escrever o menor elemento do vetor e a respectiva
//posição dele nesse vetor. 