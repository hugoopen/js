const { question } = require("readline-sync");

let quantidadeTrechos = 0
let distanciaTotal = 0
let maiorDistancia = 0

let distancia = parseFloat(question('Digite a distancia do trecho 1 em km (0 para encerrar): '))

while (distancia !== 0 && quantidadeTrechos < 3) {
    if (distancia < 0) {
        console.log('Opcao invalida! Digite um valor positivo');
    } else{
        quantidadeTrechos ++
        distanciaTotal += distancia

        if (distancia > maiorDistancia) {
            maiorDistancia = distancia
        }
    }
    if (quantidadeTrechos < 3) {
        distancia = parseFloat(question(`Digite a distancia do trecho ${quantidadeTrechos + 1} em km (0 para encerrar): `))
    }
}

console.log(`Trechos percorridos: ${quantidadeTrechos}`);
console.log(`Distancia total: ${distanciaTotal}`);
console.log(`Maior distancia: ${maiorDistancia}`);


