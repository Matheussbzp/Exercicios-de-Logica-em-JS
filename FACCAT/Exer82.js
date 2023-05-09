// lê os 10 números e armazena em um vetor A
let A = [];
for (let i = 0; i < 10; i++) {
  A[i] = parseInt(prompt(`Digite o ${i+1}º número:`));
}

// lê o número X
let X = parseInt(prompt("Digite um número X:"));

// multiplica cada elemento de A por X e armazena no vetor M
let M = [];
for (let i = 0; i < A.length; i++) {
  M[i] = A[i] * X;
}

// imprime o vetor M
console.log(M);

//82) Ler um vetor A de 10 números. Após, ler mais um número e guardar em uma variável X.
//Armazenar em um vetor M o resultado de cada elemento de A multiplicado pelo valor X. Logo após,
//imprimir o vetor M.