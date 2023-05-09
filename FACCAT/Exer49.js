let novoCalculo = "S";

while (novoCalculo === "S") {
  let nota1, nota2;
  let notasValidas = false;

  while (!notasValidas) {
    nota1 = parseFloat(prompt("Digite a primeira nota (0 a 10):"));
    nota2 = parseFloat(prompt("Digite a segunda nota (0 a 10):"));

    if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10) {
      notasValidas = true;
    } else {
      alert("Notas inválidas! Digite novamente.");
    }
  }

  let media = (nota1 + nota2) / 2;
  alert(`A média do aluno é ${media.toFixed(2)}`);

  novoCalculo = prompt("NOVO CÁLCULO (S/N)?").toUpperCase();
}

//49) Acrescente uma mensagem 'NOVO CÁLCULO (S/N)?' ao final do exercício [48]. Se for
//respondido 'S' deve retornar e executar um novo cálculo, caso contrário deverá encerrar o algoritmo.
