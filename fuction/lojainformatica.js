const entrada = require('readline-sync')
let produtos = ['Mouse', 'Teclado', 'Monitor', 'Mouse']
let precos = [50, 120, 800, 50]

function calcularTotal(valores) {
    for (let i = 0; i < valores.length; i++) {
        total = total + valores
    }
    return total
}

function contarProduto(lista, nome) {
    let quantidade = 0
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === nome) {
            quantidade++
        }
    }
    return quantidade
}

let opcao = 0
while (opcao !== 4) {
    console.log('\n== LOJA DE INFORMATICA ==');
    console.log('1 - Listar produtos');
    console.log('2 - Calcular valor total');
    console.log('3 - Consultar Produto');
    console.log('4 - Sair');
    opcao = Number(entrada.question('Escolha:'))

    switch (opcao) {
        case 1:
            for (let i = 0; i < produtos.length; i++) {
                console.log(`${produtos[i]} - R$ ${precos[i]}`);
            }
            break;

        case 2:
            console.log(`Total: R$ ${calcularTotal(precos)}`);
            break;

        case 3:
            let nome = entrada.question('Produtos: ')
            let quantidade = contarProduto(produtos, nome)
            console.log(`Encontrado (s): ${quantidade}`);
            break;

        case 4:
            console.log('Programa encerrando...');
            break;

        default:
            console.log('Opcao invalida')
    }
}