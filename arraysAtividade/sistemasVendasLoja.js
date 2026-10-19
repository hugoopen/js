const { question } = require("readline-sync");

let vendas = [150, 80, 250, 45, 320, 120, 60]
let opcao

while (opcao !== 7) {
    console.clear()
    console.log('====== Escolha uma opcao do menu: =====');
    console.log('1 - Registrar uma venda');
    console.log('2 - Todas as vendas registradas');
    console.log('3 - Consultar uma venda pela posicao');
    console.log('4 - Alterar o valor de venda');
    console.log('5 - Cancelar uma venda');
    console.log('6 - Exibir o relatorios de vendas');
    console.log('7 - Sair');

    opcao = Number(question('Digite uma opcao: '))

    switch (opcao) {
        case 1:
            let valorRenda = question('Digite o valor da sua renda:')
            if (valorRenda > 0) {
                vendas.push(valorRenda)
                console.log('Renda adicionada com sucesso!');
                question('Pressione enter para voltar ao menu.')
            } else {
                console.log('Digite um valor acima de 0');
                question('Pressione enter para voltar ao menu.')
            }
            break;

        case 2:
            if (vendas.length === 0) {
                console.log('Nenhuma venda foi registrada atualmente!');
                question('Pressione enter para voltar ao menu.')
            }
            for (let i = 0; i < vendas.length; i++) {
                console.log(`Vendas: ${vendas[i]} e seu indice: ${i}`);
            }
            question('Pressione enter para voltar ao menu.')
            break;

        case 3:
            let solicitarIndice = question('Digite o indice que procura: ')
            if (solicitarIndice >= 0 && solicitarIndice < vendas.length) {
                console.log(`Esta e a venda que voce procura: ${vendas[solicitarIndice]}`);
            } else {
                console.log('Produto não foi encontrado! Digite um valor valido.');
            }
            question('Pressione enter para voltar ao menu.')
            break;

        case 4:
            let substituirVenda = question('Digite o indice da venda que deseja alterar:')
            if (substituirVenda > 0 && substituirVenda < vendas.length) {
                let valorNovo = question('Digite o novo valor: ')
                vendas.splice(substituirVenda, 1, valorNovo)
                console.log("valor substituido com sucesso");
                question('Pressione enter para voltar ao menu.')
            } else {
                console.log('Digite um indice correto!');
            } question('Pressione enter para voltar ao menu.')

        case 5:
            let cancelarVenda = Number(question('Digite o indice que deseja remover:'))
            if (cancelarVenda > 0 && cancelarVenda < vendas.length) {
                vendas.splice(cancelarVenda, 1)
                console.log('Cancelado com sucesso!');
                question('Pressione enter para voltar ao menu.')
            }
            break;

        case 6:
        default:
            break;
    }





}