let areaTotal = 0;
let continuar = true;
while (continuar) {
  let nome = prompt("Digite o nome do cômodo:");
  let largura = parseFloat(prompt("Digite a largura do cômodo em metros:"));
  let comprimento = parseFloat(prompt("Digite o comprimento do cômodo em metros:"));
  let area = largura * comprimento;
  console.log("Área do " + nome + ": " + area + "m²");
  areaTotal += area;
  continuar = confirm("Deseja calcular a área de outro cômodo?");
}
console.log("Área total da residência: " + areaTotal + "m²");

    //k) Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha,
    //banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do
    //nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar
    //calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor
    //total acumulado da área residencial. 