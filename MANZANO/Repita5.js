let i = 1;
let soma = 0;
while (i <= 15) {
  let fatorial = 1;
  let j = 1;
  while (j <= i) {
    fatorial *= j;
    j++;
  }
  soma += fatorial;
  i++;
}
console.log(soma);

//e) Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o
//total do somatório da fatorial de cada valor lido