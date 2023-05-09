let valor;

do {
  valor = parseInt(prompt("Digite um valor entre 1 e 10:"));
} while (valor < 1 || valor > 10);

for (let i = 1; i <= 10; i++) {
  console.log(`${valor} x ${i} = ${valor * i}`);
}

//56) Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.