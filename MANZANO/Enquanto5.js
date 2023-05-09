let expoente = 0;
let potencia = 1;

while (expoente <= 15) {
  console.log(`3 elevado a ${expoente} é: ${potencia}`);
  potencia *= 3;
  expoente++;
}

//e) Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser
//considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio