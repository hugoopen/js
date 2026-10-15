const vendas = [120, 45, 300, 80, 250, 35, 500]
let faturamentoTotal = 0
let contadorVendas = 0
let maiorVenda = vendas[0]
let menorVenda = 0
// 1. Percorrendo as vendas e exibindo elas
for (let i = 0; i < vendas.length; i++) {
    console.log(`Este foi os valor desta vendas: ${vendas[i]}`);
}

//2. Calculando faturamento
for (let i = 0; i < vendas.length; i++) {
    faturamentoTotal += vendas[i]
} console.log(`Este e o valor total do faturamento ${faturamentoTotal}`);

//3. Contando vendas maiores ou iguais a 100
for (let i = 0; i < vendas.length; i++) {
    if (vendas[i] >= 100) {
        contadorVendas++
    }
}
console.log(`Este foram os valores de vendas iguais ou superiores a 100: ${contadorVendas}`);

//4. Indetificar qual foi a maior venda registrada
for (let i = 0; i < vendas.length; i++) {
    if (vendas[i] > maiorVenda) {
        maiorVenda = vendas[i];
    }
}
console.log(`Esta foi o valor da nossa maior venda: ${maiorVenda}`);

//5. Calcular os valores abaixo de 100 e exibir o resultado
for (let i = 0; i < vendas.length; i++) {
    if (vendas[i] < 100) {
        menorVenda += vendas[i]
    }
}
console.log(`Este é o valor total abaixo de 100: ${menorVenda}`);

//6. Exibir uma mensagem informando se o faturamento total foi igual ou superior a 1000.
if (faturamentoTotal >= 1000) {
    console.log(`O faturamento total foi de ${faturamentoTotal}, logo superior a 1000!`);
} else {
    console.log(`O faturameto total foi ${faturamentoTotal}, infelizmente fo menor que 1000.`);

}




