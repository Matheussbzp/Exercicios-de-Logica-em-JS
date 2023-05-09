let numMercadorias = parseInt(prompt("Digite o número total de mercadorias em estoque:"));
let valorMercadoria = parseFloat(prompt("Digite o valor de cada mercadoria:"));

let valorTotalEstoque = numMercadorias * valorMercadoria;
let mediaValorMercadoria = valorTotalEstoque / numMercadorias;

console.log("Valor total em estoque: R$" + valorTotalEstoque.toFixed(2));
console.log("Média de valor das mercadorias: R$" + mediaValorMercadoria.toFixed(2));

//68) Uma loja está levantando o valor total de todas as mercadorias em estoque. Escreva um algoritmo
//que permita a entrada das seguintes informações: a) o número total de mercadorias no estoque; b) o
//valor de cada mercadoria. Ao final imprimir o valor total em estoque e a média de valor das
//mercadorias. 