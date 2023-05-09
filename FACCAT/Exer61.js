let soma = 0;
let contador = 0;

while (contador < 10) {
  let valor = parseFloat(prompt(`Digite o ${contador + 1}º valor:`));

  soma += valor;
  contador++;
}

const media = soma / 10;

console.log(`A média aritmética dos valores é: ${media}`);

//Ler 10 valores, calcular e escrever a média aritmética desses valores lidos
