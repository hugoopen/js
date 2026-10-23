const { question } = require("readline-sync");
const encerrarRegistro = 0
let maiorDistancia = 0
let totalDistancia = 0
let distancias = []

while (encerrarRegistro !== 0) {
    let registrarDistancia = question('Digite a distancia percorrida por trecho em km: ')

    if (registrarDistancia >0) {
        console.log('Digite um valor valido!');
    }

    if (registrarDistancia) {
        maiorDistancia++
    }
}