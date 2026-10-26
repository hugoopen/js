const { question } = require("readline-sync");

let livros = [
    'O Hobbit',
    'Dom Casmurro',
    'A Revolucao dos Bichos',
    'O Pequeno Principe'
]

let emprestados = [false, true, false, false]
let opcao

while (opcao !== 6) {
    console.clear()
    console.log('1 - Listar livros')
    console.log('2 - Pesquisar livro');
    console.log('3 - Emprestar livro.');
    console.log('4 - Devolver livro');
    console.log('5 - Quantidade de livros disponivel');
    console.log('6 - Encerrar');

    opcao = parseInt(question('Digite uma opcao de 1 a 6:'))
    switch (opcao) {
        case 1:
            for (let i = 0; i < livros.length; i++) {
                console.log(`${i + 1} - ${livros[i]} : ${emprestados[i] ? 'emprestado' : 'disponivel'}`);
            }
            break;

        case 2:
            let pesquisarLivro = question('Digite o nome do livro: ').trim()
                let encontrado = false
                for (let i = 0; i < livros.length; i++) {
                    if (livros[i] === pesquisarLivro) {
                        encontrado = true
                    }                    
                }
                if (encontrado){
                    console.log(`O livro ${pesquisarLivro}, foi encontrado com sucesso!`);
                } else {
                    console.log(`O livro ${pesquisarLivro}, nao foi encontrado.`);
                }
                break;

        case 3:
            emprestarLivro = question('Digite o nome do livro que deseja emprestar: ').trim() - 1
            if (emprestarLivro >= 0 && emprestarLivro < livros.length) {
                if (!emprestados[emprestarLivro]) {
                    emprestados[emprestarLivro] = true
                    console.log(`${livros[emprestarLivro]} emprestado com sucesso, venha busca-lo.`);
                } else {
                    console.log(`Escolha um livro que ainda nao tenha sido emprestado.`);
                }
            } else {
                console.log('Nome invalido');
            }
            break;
        case 4:
            devolverLivro = question('Digite o nome do livro: ').trim() - 1
            if (devolverLivro >= 0 && devolverLivro < livros.length){
                if (emprestados[devolverLivro]) {
                    emprestados[devolverLivro] = false
                    console.log(`Livro ${livros[devolverLivro]} devolvido com sucesso`);
                } else {
                    console.log('Este livro nao foi emprestado');
                }
            } else {
                console.log('Este livro nao foi emprestado.');
            }
            break;

        case 5:
            let livroDisponivel = 0
            for (let i = 0; i < emprestados.length; i++) {
                if (!emprestados[i]) {
                 livroDisponivel++
                }
                
            }
        console.log(`Livros disponiveis para serem emprestados: ${livroDisponivel}`);
        break;

        case 6:
            console.log('Encerrando o sistema...');
            break;
            
        default:
            console.log('Opcao invalida! Escolha de 1 a 6');
            break;
    }
    if (opcao !== 6) {
        question('Aperte enter para voltar ao menu.')
    }
}
