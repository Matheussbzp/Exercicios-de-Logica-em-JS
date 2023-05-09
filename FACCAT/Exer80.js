// Definindo o vetor
let vetorQ = new Array(20);

// Preenchendo o vetor com valores digitados pelo usuário
for(let i = 0; i < vetorQ.length; i++){
  do{
    vetorQ[i] = parseFloat(prompt(`Digite um número positivo para a posição ${i}:`));
  } while(vetorQ[i] < 0 || isNaN(vetorQ[i]));
}

// Encontrando o maior elemento e a respectiva posição
let maiorElemento = vetorQ[0];
let posicaoMaiorElemento = 0;
for(let i = 1; i < vetorQ.length; i++){
  if(vetorQ[i] > maiorElemento){
    maiorElemento = vetorQ[i];
    posicaoMaiorElemento = i;
  }
}

// Exibindo o resultado
console.log(`O maior elemento de Q é ${maiorElemento} e está na posição ${posicaoMaiorElemento}`);


//80) Ler um vetor Q de 20 posições (aceitar somente números positivos). Escrever a seguir o valor do
//maior elemento de Q e a respectiva posição que ele ocupa no vetor. 