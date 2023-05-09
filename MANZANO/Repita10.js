let dividendo = parseInt(prompt("Digite o dividendo:"));
let divisor = parseInt(prompt("Digite o divisor:"));
let contador = 0;

while (dividendo >= divisor) {
  dividendo -= divisor;
  contador++;
}

console.log("Resultado: " + contador);

//Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer.
//Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético
//DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve
//apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo. 