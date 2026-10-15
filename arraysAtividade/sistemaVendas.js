const vendas = [120, 45, 300, 80, 250, 35, 500]
let faturamentoTotal = 0
let contadorVendas = 0
let maiorVenda = vendas[0]
// 1. Percorrendo as vendas e exibindo elas
for (let i = 0; i < vendas.length; i++) {
    console.log(`Este foi os valor desta vendas: ${vendas[i]}`); 
}
//2. Calculando faturamento
for (let i = 0; i < vendas.length; i++) {
    faturamentoTotal += vendas[i]
}console.log(`Este e o valor total do faturamento ${faturamentoTotal}`);

//3. Contando vendas maiores ou iguais a sem
for (let i = 0; i < vendas.length; i++) {
    if (vendas[i] >= 100) {
        contadorVendas++
    }
}console.log(`Estas foram os valores de vendas iguais ou superiores a 100: ${contadorVendas}`); 

for (let i = 0; i < vendas.length; i++) {
    if (vendas[i] > maiorVenda) {
        maiorVenda = vendas[i];
    }
}
console.log(`Esta foi o valor da nossa maior venda: ${maiorVenda}`);

for (let i = 0; i < vendas.length; i++) {
    
    
}
    

    
