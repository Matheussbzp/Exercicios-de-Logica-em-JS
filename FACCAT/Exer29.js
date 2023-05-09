let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));
let valor3 = parseFloat(prompt("Digite o terceiro valor: "));

if (valor1 > valor2) {
  if (valor1 > valor3) {
    if (valor2 > valor3) {
      console.log("A soma dos 2 maiores valores é:", valor1 + valor2);
    } else {
      console.log("A soma dos 2 maiores valores é:", valor1 + valor3);
    }
  } else {
    console.log("A soma dos 2 maiores valores é:", valor1 + valor3);
  }
} else {
  if (valor2 > valor3) {
    if (valor1 > valor3) {
      console.log("A soma dos 2 maiores valores é:", valor2 + valor1);
    } else {
      console.log("A soma dos 2 maiores valores é:", valor2 + valor3);
    }
  } else {
    console.log("A soma dos 2 maiores valores é:", valor2 + valor3);
  }
}

//29) Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2
//maiores. 