let total = 0;
let quantidade = 0;
let continuar = 'S';

while (continuar === 'S') {
  let valor = parseFloat(prompt('Digite o valor da mercadoria:'));

  total += valor;
  quantidade++;

  continuar = prompt('MAIS MERCADORIAS (S/N)?').toUpperCase();
}

let media = total / quantidade;

console.log(`Valor total em estoque: R$ ${total.toFixed(2)}`);
console.log(`Média de valor das mercadorias em estoque: R$ ${media.toFixed(2)}`);

//69) O mesmo exercício anterior, mas agora não será informado o número de mercadorias em estoque.
//Então o funcionamento deverá ser da seguinte forma: ler o valor da mercadoria e perguntar ‘MAIS
//MERCADORIAS (S/N)?’. Ao final, imprimir o valor total em estoque e a média de valor das
//mercadorias em estoque. 