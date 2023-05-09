let contador = 0;
let negativos = 0;

while (contador < 10) {
  let valor = parseInt(prompt("Digite um valor: "));
  
  if (valor < 0) {
    negativos++;
  }
  
  contador++;
}

console.log("Quantidade de valores negativos: " + negativos);

//59) Ler 10 valores e escrever quantos desses valores lidos são NEGATIVOS. 