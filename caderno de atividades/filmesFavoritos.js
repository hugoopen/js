const { question } = require("readline-sync");

let filmes = []
let opcao

while (opcao !== 5) {
    console.clear()
    console.log('1 - Adicionar filme');
    console.log('2 - Listar Filmes');
    console.log('3 - Remover filme por posicao');
    console.log('4 - Pesquisar filme');
    console.log('5 - Encerrar programa');

    opcao = parseInt(question('Escolha uma opcao: '))

    switch (opcao) {
        case 1: {
            let adicionarFilmes = question('Digite o nome do filme que deseja adicionar: ').trim()
            if (adicionarFilmes !== "") {
                filmes.push(adicionarFilmes)
                console.log(`Filme ${adicionarFilmes} adicionado com sucesso!`)
            } else {
                console.log('O nome do filme não pode ficar vazio, digite algo, por favor');
            }
            question('Aperte enter para voltar ao menu')
            break;
        }

        case 2: {
            if (filmes.length === 0) {
                console.log('Você precisa adicionar algum filme antes para ver a sua lista');
            } else {
                for (let i = 0; i < filmes.length; i++) {
                    console.log(`${i + 1} - ${filmes[i]}`);
                }
            }
            question('Aperte enter para voltar ao menu')
            break;
        }
        case 3: {
            const posicao = parseInt(question('Digite a posicao do filme que desejas remover: '))
            if (posicao >= 0 && posicao < filmes.length) {
                const filmeRemovido = filmes.splice(posicao, 1)
                console.log(filmes);
                console.log(`Filme ${filmeRemovido} removido com sucesso da lista de seus filmes favoritos!`);
                
            } else {
                console.log('Não há nenhum filme nesta posição!');
            }
            question('Aperte enter para voltar ao menu')
            break;
        }
        case 4: {
            let pesquiseFilme = question('Digite o nome do filme que desejas pesquisar: ').trim()
            if (filmes.length === 0) {
                console.log('Você precisa adicionar algum filme para poder pesquisar!');
            } else if (filmes.includes(pesquiseFilme)) {
                console.log(`O filme ${pesquiseFilme}, foi encontrado com sucesso`);
            } else {
                console.log(`O filme ${pesquiseFilme}, infelizmente não foi encontrado.`);
            }
            question('Aperte enter para voltar ao menu')
            break;
        }


        case 5: {
            console.log('Encerrando o sistema...');
            break;
        }
        default:
            console.log("Opcao invalida! Escolha um numero de 1 a 5.");
            question("Pressione enter para voltar ao menu.");
            break;
    }
}