const { question, questionInt } = require("readline-sync");

const produtos = [
    { nome: 'Mouse', categoria: 'Períferico', preco: 50, estoque: 4 },
    { nome: 'Teclado', categoria: 'Períferico', preco: 120, estoque: 10 },
    { nome: 'Monitor', categoria: 'Monitores', preco: 800, estoque: 2 },
    { nome: 'Webcam', categoria: 'Acessório', preco: 150, estoque: 6 },
    { nome: 'Headset', categoria: 'Áudio', preco: 180, estoque: 0 }
]

let opcao
while (opcao !== 7) {
    console.clear()
    console.log('1 - Pesquisar produto específico: ');
    console.log('2 - Filtrar produtos com estoque baixo');
    console.log('3 - Existe produto sem estoque');
    console.log('4 - Todos os produtos possuem estoque');
    console.log('5 - Criar lista com o nome e o valor total do produto');
    console.log('6 - Calcular o valor total do estoque');
    console.log('7 - Encerrar');

    opcao = questionInt('Escolha uma opcao de 1 a 7: ')

    switch (opcao) {
        case 1:
            const pesquisarProduto = question('Digite o produto que procura: ').trim().toLowerCase()
            const resultadoProduto = produtos.find(produto => produto.nome.toLowerCase() === pesquisarProduto)
            if (resultadoProduto) {
                console.log(`Este é o produto que voce procura: ${resultadoProduto.nome} - R$ ${resultadoProduto.preco} - Estoque: ${resultadoProduto.estoque}`);
            } else {
                console.log(`Produto nao foi encontrado`);
            }
            break;

        case 2:
            const filtarProdutos = produtos.filter(produto => {
                return produto.estoque < 5
            })
            console.log(filtarProdutos);
            break

        case 3:
            const produtoSemEstoque = produtos.some(produto => produto.estoque === 0)

            if (produtoSemEstoque) {
                console.log(`Sim, ha produtos sem estoque`);

                const semEstoque = produtos.filter(produto => produto.estoque === 0)
                semEstoque.forEach(produto => {
                    console.log(`- ${produto.nome}`);

                })
            }
            console.log(`Nao, todos contem estoque`);
            break

        case 4:
            const produtosPossuemEstoque = produtos.some(produto => produto.estoque > 0)

            if (produtosPossuemEstoque) {
                console.log(`Sim, todos possuem estoque`);
            } else {
                console.log(`Nao, nem todos possuem estoque. Sem estoque:`);
                produtos
                    .filter(produto => produto.estoque === 0)
                    .forEach(produto => console.log(`- ${produto.nome}`))
            }
            break

        case 5:
            const qualproduto = question('Digite o nome do produto: ').trim().toLowerCase()

            const criarLista = produtos
                .filter(produto => produto.nome.toLowerCase() === qualproduto)
                .map(produto => {
                    return {
                        nome: produto.nome,
                        valorTotal: produto.preco * produto.estoque
                    }
                })
            if (criarLista.length === 0) {
                console.log('Produto nao encontrado.');
            } else {
                console.log(criarLista);
            }
            break

        case 6:
            const valorEstoqueTotal = produtos.reduce((total, produto) => {
                return total + produto.preco * produto.estoque
            }, 0)
            console.log(`Este é o valor total do estoque de produtos: R$ ${valorEstoqueTotal}`);
            break

        case 7:
            console.log('Sistema encerrado!');
            break

        default:
            console.log('Valor invalido, escolha uma opcao de 1 a 7!');
            break;
    }
    if (opcao !== 7) {
        question('Aperte enter para voltar ao menu!')
    }
}

