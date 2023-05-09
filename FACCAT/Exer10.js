const custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro:"));
const porcentagemDistribuidor = 0.28;
const porcentagemImpostos = 0.45;

const custoFinal = custoFabrica * (1 + porcentagemDistribuidor + porcentagemImpostos);

console.log(`O custo final do carro para o consumidor é R$${custoFinal.toFixed(2)}`);

//O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do
//distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor
//seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro,
//calcular e escrever o custo final ao consumidor.