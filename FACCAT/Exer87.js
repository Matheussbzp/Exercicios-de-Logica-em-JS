let TAMANHO_VETOR = 10;
let numeros = [];

// ler 10 números
for (let i = 0; i < TAMANHO_VETOR; i++) {
  numeros.push(Number(prompt(`Digite o ${i+1}º número:`)));
}

// ordenar em ordem crescente
numeros.sort((a, b) => a - b);

// ler um novo número
let novoNumero = Number(prompt("Digite um novo número:"));

// inserir o novo número na posição correta
let posicaoInsercao = 0;
while (posicaoInsercao < numeros.length && numeros[posicaoInsercao] < novoNumero) {
  posicaoInsercao++;
}
numeros.splice(posicaoInsercao, 0, novoNumero);

// exibir o vetor ordenado com o novo número
console.log("Vetor ordenado com o novo número:");
console.log(numeros);

//87) O mesmo exercício anterior, mas depois de ordenar os elementos do vetor em ordem crescente,
//deve ser lido mais um número qualquer e inserir esse novo número na posição correta, ou seja,
//mantendo a ordem crescente do vetor. 