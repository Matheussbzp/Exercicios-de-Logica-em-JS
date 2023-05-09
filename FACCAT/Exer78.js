let nomes = [];

// lê os 10 nomes e armazena no vetor
for(let i = 0; i < 10; i++){
  let nome = prompt(`Digite o nome da ${i+1}ª pessoa:`);
  nomes.push(nome);
}

// lê o nome a ser pesquisado
let nomePesquisado = prompt("Digite o nome a ser pesquisado:");

// verifica se o nome está no vetor
let achou = false;
for(let i = 0; i < 10; i++){
  if(nomes[i] === nomePesquisado){
    achou = true;
    break;
  }
}

// exibe a mensagem de acordo com o resultado da pesquisa
if(achou){
  console.log("Achei");
} else {
  console.log("Não achei");
}


//78) Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armaze os nomes lidos em
//um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de pessoa e depois
//escrever a mensagem ACHEI, se o nome estiver entre os 10 nomes lidos anteriormente (guardados no
//vetor), ou NÃO ACHEI caso contrário. 