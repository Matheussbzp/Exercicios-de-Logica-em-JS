let numeros = [];

// lê os 10 números
for (let i = 0; i < 10; i++) {
  numeros.push(Number(prompt(`Digite o ${i+1}º número:`)));
}

// ordena os números em ordem crescente
numeros.sort((a, b) => a - b);

// exibe o vetor ordenado
console.log(`Os números em ordem crescente são: ${numeros.join(', ')}`);

//86) Faça um algoritmo para ler 10 números e armazenar em um vetor. Após isto, o algoritmo deve
//ordenar os números no vetor em ordem crescente. Escrever o vetor ordenado. 