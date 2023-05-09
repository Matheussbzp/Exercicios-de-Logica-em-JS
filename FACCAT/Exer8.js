// Leitura dos dados
const totalEleitores = prompt("Informe o número total de eleitores do município:");
const votosBrancos = prompt("Informe o número de votos em branco:");
const votosNulos = prompt("Informe o número de votos nulos:");
const votosValidos = prompt("Informe o número de votos válidos:");

// Cálculo dos percentuais
const percBrancos = (votosBrancos / totalEleitores) * 100;
const percNulos = (votosNulos / totalEleitores) * 100;
const percValidos = (votosValidos / totalEleitores) * 100;

// Saída dos resultados
console.log(`Percentual de votos em branco: ${percBrancos.toFixed(2)}%`);
console.log(`Percentual de votos nulos: ${percNulos.toFixed(2)}%`);
console.log(`Percentual de votos válidos: ${percValidos.toFixed(2)}%`);

//Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
//brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total
//de eleitores