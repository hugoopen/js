const { question } = require("readline-sync");

let quantidadeVendas = 0;
let valorVendido = 0;
let maiorVenda = 0;
let menorVenda = 0;
let mediaVendas = 0;

let quantidadeVendas500 = 0;
let quantidadeVendas100 = 0;

let vendas = Number(question("Quantas vendas deseja cadastrar: "))

for (let i = 1; i <= vendas; i++) {
    
    let quantidadeVendas = Number(question("Digite o valor da venda: " + 1 +": "));
 
}

while (quantidadeVendas <= 0) {
    console.log("Valor inavalido!");

    quantidadeVendas = Number(question("Digite novamente o valor de venda:")); 
}

total = total + quantidadeVendas;

if (i == 1) {
    maiorVenda = quantidadeVendas;
}

if (i == 1){
    maiorVenda = quantidadeVendas;
    menorVenda = quantidadeVendas;
}

if (quantidadeVendas > maiorVenda){
    maiorVenda = quantidadeVendas
}

if (quantidadeVendas < menorVenda){
    menorVenda = quantidadeVendas
}
if (quantidadeVendas > quantidadeVendas500){
    acima500++
}

if (quantidadeVendas < quantidadeVendas100) {
    abaixo100++
}

let media = total / quantidadeVendas

console.log("\n =====Relatorio=====");
console.log(`Total vendido: R$ ${total}`);
console.log(`Maior venda: R$ ${maiorVenda}`);
console.log(`Menor venda: R$ ${menorVenda}`);
console.log(`Média: R$ ${media}`);
console.log(`Vendas acima de R$ 500 ${acima500}`);
console.log(`Vendas abaixo de 100 ${abaixo100}`);









    