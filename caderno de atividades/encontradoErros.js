const distancia = 120; // Identifique o problema relacionado ao tipo de dado de distancia: erro pois estar em string e devemos por em number
const consumo = 12;
const precoCombustivel = 6.20;
let litros = distancia / consumo; //Verifique se a operação utilizada para calcular o custo está correta.
let custo = litros + precoCombustivel;
console.log(`Litros necessários:  ${litros}`);
console.log(`Custo da viagem: R$  ${custo}`);