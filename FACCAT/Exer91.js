let tamanhoVetor = 50;
let vetor = [];

// leitura dos números
for (let i = 0; i < tamanhoVetor; i++) {
  vetor[i] = Number(prompt(`Digite o ${i+1}º número:`));
}

// verifica se há números repetidos
let numerosRepetidos = [];
for (let i = 0; i < tamanhoVetor; i++) {
  for (let j = i+1; j < tamanhoVetor; j++) {
    if (vetor[i] == vetor[j] && !numerosRepetidos.includes(vetor[i])) {
      numerosRepetidos.push(vetor[i]);
    }
  }
}

// exibe as posições dos números repetidos
if (numerosRepetidos.length == 0) {
  console.log("Não há números repetidos no vetor.");
} else {
  console.log("Os números repetidos são: " + numerosRepetidos.join(", "));
  for (let i = 0; i < numerosRepetidos.length; i++) {
    let posicoes = [];
    for (let j = 0; j < tamanhoVetor; j++) {
      if (vetor[j] == numerosRepetidos[i]) {
        posicoes.push(j);
      }
    }
    console.log(`O número ${numerosRepetidos[i]} aparece nas posições: ${posicoes.join(", ")}`);
  }
}

//91) Faça um algoritmo para ler 50 números e armazenar em um vetor VET, verificar e escrever se
//existem números repetidos no vetor VET e em que posições se encontram. 