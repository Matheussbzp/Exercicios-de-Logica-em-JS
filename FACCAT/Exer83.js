let vetor = [];

// leitura dos 20 números e armazenamento no vetor
for (let i = 0; i < 20; i++) {
  let numero = Number(prompt(`Digite o ${i+1}º número:`));
  vetor[i] = numero;
}

// escrita dos números na ordem inversa
console.log("Números lidos na ordem inversa:");
for (let i = vetor.length - 1; i >= 0; i--) {
  console.log(vetor[i]);
}


//83) Faça um algoritmo para ler 20 números e armazenar em um vetor. Após a leitura total dos 20
//números, o algoritmo deve escrever esses 20 números lidos na ordem inversa.