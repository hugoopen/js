let vendas = [150, 80, 250, 45, 320]

function calcularFaturamento(lista) {
    let total = 0
    for (let i = 0; i < lista.length; i++) {
        total = total + lista[i]
        
    }
    return total;
}

function contarVendasAltas(lista) {
    let quantidade = 0
    for (let i = 0; i < lista.length; i++) {
        if(lista[i] >= 100)
            quantidade++;
    }
    return quantidade;
}

console.log(`Faturamento: R$ ${calcularFaturamento(vendas)}`);
console.log(`Vendas acima de R$ 100: ${contarVendasAltas(vendas)}`);

