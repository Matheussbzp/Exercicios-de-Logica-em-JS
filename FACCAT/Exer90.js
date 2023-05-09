let TAMANHO_VETOR = 30;

// lê os valores do vetor
let vetor = [];
for (let i = 0; i < TAMANHO_VETOR; i++) {
  let valor = Number(prompt(`Digite o valor da posição ${i + 1}:`));
  vetor.push(valor);
}

// lê o número que deve ser pesquisado no vetor
let numero = Number(prompt("Digite o número que deseja pesquisar no vetor:"));

// conta quantas vezes o número aparece no vetor
let contador = 0;
for (let i = 0; i < TAMANHO_VETOR; i++) {
  if (vetor[i] === numero) {
    contador++;
  }
}

// exibe o resultado
console.log(`O número ${numero} aparece ${contador} vezes no vetor.`);


//90) Faça um algoritmo para ler um vetor de 30 números. Após isto, ler mais um número qualquer,
//calcular e escrever quantas vezes esse número aparece no vetor. 