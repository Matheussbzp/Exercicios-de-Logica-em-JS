let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));
let valor3 = parseFloat(prompt("Digite o terceiro valor: "));

let menor, meio, maior;

if (valor1 < valor2 && valor1 < valor3) {
  menor = valor1;
  if (valor2 < valor3) {
    meio = valor2;
    maior = valor3;
  } else {
    meio = valor3;
    maior = valor2;
  }
} else if (valor2 < valor1 && valor2 < valor3) {
  menor = valor2;
  if (valor1 < valor3) {
    meio = valor1;
    maior = valor3;
  } else {
    meio = valor3;
    maior = valor1;
  }
} else {
  menor = valor3;
  if (valor1 < valor2) {
    meio = valor1;
    maior = valor2;
  } else {
    meio = valor2;
    maior = valor1;
  }
}

console.log("Os valores em ordem crescente são:", menor, meio, maior);

//30) Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem
//crescente