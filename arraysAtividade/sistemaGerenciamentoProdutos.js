const { question, questionInt } = require("readline-sync");

const produtos = ['Teclado', 'Mouse', 'Monitor', 'Notebook', 'Impressora']
let opcao

const opcoesNumero = {
    invalidMessage: 'Erro: Digite um numero inteiro para o sistema funcionar!'
}

while (opcao !== 8) {
    console.clear()
    console.log('====== Escolha uma opcao do menu: =====');
    console.log('1 - Listar Produtos');
    console.log('2 - Adicionar um produto ao final');
    console.log('3 - Adicionar um produto ao inicio');
    console.log('4 - Remover o último produto');
    console.log('5 - Consultar um produto por índice');
    console.log('6 - Substituir um produto por índice');
    console.log('7 - Remover um produto por índice');
    console.log('8 - Sair');

    opcao = questionInt('Escolha uma opcao: ', opcoesNumero)

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

        case 5: {
            const buscarIndice = questionInt('Digite o valor do indice que deseja procurar: ', opcoesNumero)
            if (buscarIndice >= 0 && buscarIndice < produtos.length) {
                console.log(`Este é o produto que voce procura: ${produtos[buscarIndice]}`);
            } else {
                console.log('Produto não foi encontrado! Digite um valor que exista na lista.');
            }
            question('Pressione enter para voltar ao menu.')
            break;
        }

        case 6: {
            const indice = questionInt('Digite o indice que deseja substituir: ', opcoesNumero)
            if (indice >= 0 && indice < produtos.length) {
                const novoProduto = question('Digite o nome do novo produto: ')
                produtos.splice(indice, 1, novoProduto)
                console.log(produtos);
            } else {
                console.log('Indice fora da lista, nada foi alterado.');
            }
            question('Pressione enter para voltar ao menu.')
            break;
        }

        case 7: {
            const posicao = questionInt('Digite o indice do produto que deseja remover: ', opcoesNumero)
            if (posicao >= 0 && posicao < produtos.length) {
                produtos.splice(posicao, 1)
                console.log(produtos);
            } else {
                console.log('Indice fora da lista, nada foi removido!');
            }
            question('Pressione enter para voltar ao menu.')
            break;
        }

        case 8:
            console.log('Finalizando o programa...');
            break;

        default:
            console.log('Digite um valor valido.');
            question('Pressione enter para voltar ao menu.')
            break;
    }
}
console.log('Programa finalizado!');








