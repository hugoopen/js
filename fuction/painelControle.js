const entrada = require('readline-sync')
const produtos = ['Mouse', 'Teclado', 'Monitor']
let quantidade = [10, 30, 40]
opcao = 0;

function listarProdutos(lista) {
    for (let i = 0; i < lista.length; i++) {
    }
}

while (opcao !== 3) {
    console.clear()
    console.log('1 - Listar produtos');
    console.log('2 - Quantidade de produtos');
    console.log('3 - Sair');
    opcao = Number(entrada.question('Escolha uma opcao: '))

    switch (opcao) {
        case 1:
            listarProdutos(produtos)
            entrada.question('Pressione enter para voltar ao menu')
            break;

        case 2:
            console.log(`Quantidade disponivel de produtos ${quantidade}`);
            entrada.question('Pressione enter para voltar ao menu')
            break;

        case  3:
            console.log('Encerrando o programa.');

        default:
         console.log('Opcao invalida!');
            break;
        }
    }
