let TEMPERATURAS_ANO = 365;
let temperaturas = [];

// lê as temperaturas de cada dia do ano
for (let i = 0; i < TEMPERATURAS_ANO; i++) {
  let temperatura = Number(prompt(`Digite a temperatura do dia ${i + 1}:`));
  temperaturas.push(temperatura);
}

// encontra a menor temperatura
let menorTemperatura = temperaturas[0];
for (let i = 1; i < TEMPERATURAS_ANO; i++) {
  if (temperaturas[i] < menorTemperatura) {
    menorTemperatura = temperaturas[i];
  }
}

// encontra a maior temperatura
let maiorTemperatura = temperaturas[0];
for (let i = 1; i < TEMPERATURAS_ANO; i++) {
  if (temperaturas[i] > maiorTemperatura) {
    maiorTemperatura = temperaturas[i];
  }
}

// calcula a temperatura média anual
let somaTemperaturas = 0;
for (let i = 0; i < TEMPERATURAS_ANO; i++) {
  somaTemperaturas += temperaturas[i];
}
let mediaTemperaturas = somaTemperaturas / TEMPERATURAS_ANO;

// conta o número de dias com temperatura inferior à média anual
let diasTemperaturaInferiorMedia = 0;
for (let i = 0; i < TEMPERATURAS_ANO; i++) {
  if (temperaturas[i] < mediaTemperaturas) {
    diasTemperaturaInferiorMedia++;
  }
}

// exibe os resultados
console.log(`A menor temperatura do ano foi ${menorTemperatura} graus.`);
console.log(`A maior temperatura do ano foi ${maiorTemperatura} graus.`);
console.log(`A temperatura média anual foi ${mediaTemperaturas.toFixed(2)} graus.`);
console.log(`Houve ${diasTemperaturaInferiorMedia} dias no ano com temperatura inferior à média anual.`);

//85) Faça um algoritmo para ler e armazenar em um vetor a temperatura média de todos os dias do ano.
//Calcular e escrever:
//a) Menor temperatura do ano
//b) Maior temperatura do ano
//c) Temperatura média anual
//d) O número de dias no ano em que a temperatura foi inferior a média anual 