const { question } = require("readline-sync");

let nome = question("Digite o seu nome e sobrenome, por favor: ")
let idade = parseInt(question("Digite sua idade: "))
let salarioMensal = parseFloat(question("Digite o seu salário mínimo, por favor:"))
let valorVeiculo = parseFloat(question("Digite o valor do carro desejado: "))
let valorEntrada = parseFloat(question("Digite o valor valor de entrada:"))
let quantidadesParcelas = parseInt(question("Digite a quantidade escolhida de parcelas:"))
let possuiCNH = question("Você possui CNH? ")

if (idade >= 18 && possuiCNH === "sim" ){
    console.log("Finaciamento altorizado!");
} else {
    console.log("Finaciamento não altorizado");
}