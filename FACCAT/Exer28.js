let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));
let valor3 = parseFloat(prompt("Digite o terceiro valor: "));

if (valor1 > valor2) {
  if (valor1 > valor3) {
    console.log("O maior valor é:", valor1);
  } else {
    console.log("O maior valor é:", valor3);
  }
} else {
  if (valor2 > valor3) {
    console.log("O maior valor é:", valor2);
  } else {
    console.log("O maior valor é:", valor3);
  }
}

//28) Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. 