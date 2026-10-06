const { question } = require("readline-sync")

let nomeCliente = (question("Digite o seu nome: "))
let idade = Number(question("Digite a sua idade: "))
let salarioMensal = Number(question("Digite o seu salario mensal: "))
let valorVeiculo = Number(question("Digite o valor do veiculo:"))
let valorEntrada = Number(question("Digite o valor da entrad: "))
let quantidadeParcelas = Number(question("Digite o valor da parcela desejada: "))
let possuiCNH = (question("Possui habilitacao? "))


if (nomeCliente >= 18 && possuiCNH === "sim") {
    
} else{
    
    console.log("Finaciamento não altorizado");
    
}

let valorFinaciado = (valorVeiculo - valorEntrada)
console.log(`Valor financiado ${valorFinaciado}`);


if (valorEntrada <= valorVeiculo * 0.2 ) {
} else { 
    
    console.log("Entrada insuficiente");
    
}

