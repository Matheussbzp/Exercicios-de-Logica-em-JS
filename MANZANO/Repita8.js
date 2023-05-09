let continuar = "SIM";
let areaTotal = 0;
while (continuar == "SIM") {
  let nomeComodo = prompt("Digite o nome do cômodo:");
  let largura = prompt("Digite a largura do cômodo:");
  let comprimento = prompt("Digite o comprimento do cômodo:");
  let areaComodo = largura * comprimento;
  console.log("A área do " + nomeComodo + " é " + areaComodo);
  areaTotal += areaComodo;
  continuar = prompt("Deseja continuar? (SIM ou NAO)");
}
console.log("Área total da residência: " + areaTotal);

//Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha,
//banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do
//nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área
//do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar
//calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor
//total acumulado da área residencial. 