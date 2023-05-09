// lê os 20 números do vetor
let vetor = [];
for (let i = 0; i < 20; i++) {
  let numero = Number(prompt(`Digite o número ${i+1}:`));
  vetor.push(numero);
}

// lê o número a ser verificado
let numeroVerificar = Number(prompt("Digite um número para verificar se existe no vetor:"));

// verifica se o número existe no vetor
let indiceNumeroVerificar = vetor.indexOf(numeroVerificar);
if (indiceNumeroVerificar !== -1) {
  // remove o número do vetor
  vetor.splice(indiceNumeroVerificar, 1);
}

// exibe o novo vetor
console.log(vetor);


//88) Faça um algoritmo para ler um vetor de 20 números. Após isto, deverá ser lido mais um número
//qualquer e verificar se esse número existe no vetor ou não. Se existir, o algoritmo deve gerar um novo
//vetor sem esse número. (Considere que não haverão números repetidos no vetor).