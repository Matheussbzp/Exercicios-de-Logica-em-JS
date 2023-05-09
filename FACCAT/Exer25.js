// leitura dos dados
const numeroConta = parseInt(prompt("Digite o número da conta do cliente:"));
const saldo = parseFloat(prompt("Digite o saldo da conta:"));
const debito = parseFloat(prompt("Digite o valor do débito:"));
const credito = parseFloat(prompt("Digite o valor do crédito:"));

// cálculo do saldo atual
const saldoAtual = saldo - debito + credito;

// verificação do saldo atual
if (saldoAtual >= 0) {
  console.log("Saldo Positivo");
} else {
  console.log("Saldo Negativo");
}

// exibição do saldo atual
console.log(`Saldo atual da conta ${numeroConta}: R$ ${saldoAtual.toFixed(2)}`);

// Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
//escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
//ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. 