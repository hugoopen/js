const { question } = require("readline-sync");

const produtos = ['Teclado', 'Mouse', 'Monitor', 'Notebook', 'Impressora']
let opcao 

while (opcao !== 8) {
    console.clear()
    console.log('====== Escolha uma opcao do menu:');
    console.log('1 - Listar Produtos');
    console.log('2 - Adicionar um produto ao final');
    console.log('3 - Adicionar um produto ao final');
    console.log('4 - Remover o último do produto');
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
    
        default:
            break;
    }



}







