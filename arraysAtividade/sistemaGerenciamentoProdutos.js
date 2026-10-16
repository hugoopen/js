const { question } = require("readline-sync");

const produtos = ['Teclado', 'Mouse', 'Monitor', 'Notebook', 'Impressora']
let opcao

while (opcao !== 8) {
    console.clear()
    console.log('====== Escolha uma opcao do menu: =====');
    console.log('1 - Listar Produtos');
    console.log('2 - Adicionar um produto ao final');
    console.log('3 - Adicionar um produto ao inicio');
    console.log('4 - Remover o último produto');
    console.log('5 - Consultar um produto por índice');
    console.log('6 - Digite a posicao que deseja subtituir o produto: ');
    console.log('7 - Digite a posicao que deseja remover o produto: ');
    console.log('8 - Sair');

    opcao = Number(question('Escolha uma opcao: '))
    switch (opcao) {
        case 1:
            for (let i = 0; i < produtos.length; i++) {
                console.log(`Produto: ${produtos[i]} e seu indice e: ${i}`);
            }
            question('Pressione enter para voltar ao menu.')
            break;

        case 2:
            produtos.push(question('Digite aqui o produto que deseja adicionar: '))
            console.log(produtos);
            question('Pressione enter para voltar ao menu.')
            break;

        case 3:
            produtos.unshift(question('Digite aqui o produto que deseja adicionar: '))
            console.log(produtos);
            question('Pressione enter para voltar ao menu.')
            break;

        case 4:
            produtos.pop()
            console.log(produtos);
            question('Pressione enter para voltar ao menu.')
            break;

        case 5:
            for (let i = 0; i < produtos.length; i++) {
                let buscarIndice = Number(question('Digite o valor do indice que deseja procurar: '))
                if (buscarIndice < 0 || buscarIndice > produtos.length) {
                    console.log(`Produto não foi encontrado, digite um indice válido! Volte ao menu e tente novamnente.`);
                } else {
                    console.log(produtos[buscarIndice]);
                }
                question('Pressione enter para voltar ao menu.')
                break;
            }

        case 6:
            let indice = Number(question('Digite o indice do produto que você deseja substituir:'))
            let substituirProduto = (question('Digite o nome do novo produto:'))
            produtos.splice(indice, 1, substituirProduto)
            console.log(produtos);
            question('Pressione enter para voltar ao menu.')
            break;

        case 7:
            let posicao = Number(question('Digite o indice do produto que voce deseja substituir:'))
            produtos.splice(posicao, 1)
            console.log(produtos);
            question('Pressione enter para voltar ao menu.')
            break;

        case 8:
            console.log('Saindo do programa');
            question('Pressione enter para voltar ao menu.')
            break;

        default:
            console.log('Digite um valor valido.');
            question('Pressione enter para voltar ao menu.')
            break;
    }
}
console.log('Programa encerrado...');







