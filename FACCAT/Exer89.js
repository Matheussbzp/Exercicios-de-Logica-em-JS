// criação dos vetores
let v1 = [];
let v2 = [];

// leitura dos elementos dos vetores
for (let i = 0; i < 15; i++) {
  v1[i] = Number(prompt(`Digite o elemento ${i + 1} do vetor V1:`));
  v2[i] = Number(prompt(`Digite o elemento ${i + 1} do vetor V2:`));
}

// contagem de elementos iguais nas mesmas posições
let cont = 0;
for (let i = 0; i < 15; i++) {
  if (v1[i] === v2[i]) {
    cont++;
  }
}

// exibição do resultado
console.log(`Quantidade de vezes que V1 e V2 possuem os mesmos números e nas mesmas posições: ${cont}.`);

//89) Faça um algoritmo para ler dois vetores V1 e V2 de 15 números cada. Calcular e escrever a
//quantidade de vezes que V1 e V2 possuem os mesmos números e nas mesmas posições