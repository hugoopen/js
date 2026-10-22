const { question } = require("readline-sync");

let quantidadeSegundos = parseInt(question('Digite a quantidade de segundos: '))

const horas = (quantidadeSegundos / 3600)
const minutos = ((quantidadeSegundos - (horas * 3600)) / 60)
const segundos = quantidadeSegundos % 60

console.log(`Este será o tempo: ${horas.toFixed()} hora, ${minutos.toFixed()} minutos e ${segundos.toFixed(0)} segundos `);




