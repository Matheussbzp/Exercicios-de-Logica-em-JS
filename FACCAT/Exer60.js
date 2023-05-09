let dentroIntervalo = 0;
let foraIntervalo = 0;

for (let i = 1; i <= 10; i++) {
  let valor = parseInt(prompt(`Digite o ${i}º valor:`));
  
  if (valor >= 10 && valor <= 20) {
    dentroIntervalo++;
  } else {
    foraIntervalo++;
  }
}

console.log(`Valores dentro do intervalo: ${dentroIntervalo}`);
console.log(`Valores fora do intervalo: ${foraIntervalo}`);

//Ler 10 valores e escrever quantos desses valores lidos estão no intervalo [10,20] (inlcuindo os
//valores 10 e 20 no intervalo) e quantos deles estão fora deste intervalo. 