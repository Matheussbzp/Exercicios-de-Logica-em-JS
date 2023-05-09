for (let i = 1; i <= 10; i++) { // Loop externo para o primeiro número (1 a 10)
    let linha = i + ","; // Inicializa a linha com o primeiro número e uma vírgula
    for (let j = 1; j <= 10; j++) { // Loop interno para os números de 1 a 10
      linha += " " + j; // Adiciona o número atual na linha
    }
    console.log(linha); // Imprime a linha atual
  }

  //75) Escreva um algoritmo que imprima as seguintes seqüências de números: (1, 1 2 3 4 5 6 7 8 9 10)
//(2, 1 2 3 4 5 6 7 8 9 10) (3, 1 2 3 4 5 6 7 8 9 10) (4, 1 2 3 4 5 6 7 8 9 10) e assim sucessivamente, até
//que o primeiro número (antes da vírgula), também chegue a 10. 