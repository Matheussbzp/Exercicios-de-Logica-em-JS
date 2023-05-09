let primeiro = 1;
let segundo = 1;
let proximo = 0;
let count = 2;

console.log(primeiro);
console.log(segundo);

while (count < 15) {
  proximo = primeiro + segundo;
  console.log(proximo);
  primeiro = segundo;
  segundo = proximo;
  count++;
}

//Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de
//Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza
//pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo
//valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo
//é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc. 