let n = parseInt(prompt("Digite o tamanho dos vetores:"));

let a = [];
let b = [];
let soma = [];

// leitura dos elementos do vetor A
for (let i = 0; i < n; i++) {
  let elemento = parseInt(prompt(`Digite o elemento ${i+1} do vetor A:`));
  a.push(elemento);
}

// leitura dos elementos do vetor B
for (let i = 0; i < n; i++) {
  let elemento = parseInt(prompt(`Digite o elemento ${i+1} do vetor B:`));
  b.push(elemento);
}

// cálculo da soma dos elementos de A e B e armazenamento no vetor Soma
for (let i = 0; i < n; i++) {
  soma[i] = a[i] + b[i];
}

// impressão do vetor Soma
console.log("Vetor Soma: " + soma);

//84) Faça um algoritmo para ler um valor N qualquer (que será o tamanho dos vetores). Após, ler dois
//vetores A e B (de tamanho N cada um) e depois armazenar em um terceiro vetor Soma a soma dos
//elementos do vetor A com os do vetor B (respeitando as mesmas posições) e escrever o vetor Soma. 