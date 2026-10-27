const readline = require("readline-sync")

let musicas = []   // cada música vai ser um objeto: { titulo, artista, duracao }

function cadastrar() {
    let titulo = readline.question('digite o titulo da musica: ')
    let artista = readline.question('digite o nome do artista: ')
    let duracao = readline.questionInt('digite a duracao em segundos:')

    if (titulo === '') {
        console.log('o titulo nao pode ficar vazio')
    } else if (duracao < 0) {
        console.log('a duracao nao pode ser negativa')
    } else {
        let novaMusica = {
            titulo: titulo,
            artista: artista,
            duracao: duracao
        }
        musicas.push(novaMusica)
        console.log('musica cadastrada')
    }
}


function listar() {
    if (musicas.length === 0) {
        console.log('adicione algo antes de listar')
    } else {
        for (let i = 0; i < musicas.length; i++) {
            console.log(`${i + 1} -- musica: ${musicas[i].titulo} -- cantor(a)/grupo: ${musicas[i].artista} -- duração: ${musicas[i].duracao}s`)
        }
    }
}


function pesquisar() {
    if (musicas.length === 0) {
        console.log('adicione algo antes de pesquisar')

    } else {
        let pesquisa = readline.question('digite o nome da musica: ')

        for (let i = 0; i < musicas.length; i += 1) {
            if (musicas[i].titulo === pesquisa) {

                console.log(`musica encontrada, ${musicas[i].titulo} -- ${musicas[i].artista} -- ${musicas[i].duracao} segundos`)
                break

            } else if (i === musicas.length - 1) {
                console.log(`a musica: ${pesquisa} nao existe`)
            }



        }
    }

}




function atualizarDuracao() {

    if (musicas.length === 0) {
        console.log('adicione algo antes de pesquisar')

    } else {
        listar()

        let numero = readline.question('digite o numero da musica: ')
        let posicao = numero - 1


        if (numero < 1 || numero > musicas.length) {
            console.log('numero invalido')
        } else {
            let novaDuracao = readline.questionInt('digite a nova duracao em segundos: ')

            if (novaDuracao < 0) {
                console.log('a duracao nao pode ser negativa')
            } else {
                musicas[posicao].duracao = novaDuracao
                console.log('duracao atualizada')
            }
        }
    }
}






function remover() {
    if (musicas.length === 0) {
        console.log('adicione uma musica antes de remover')
    } else {
        listar()

        let numero = readline.questionInt('digite o numero da musica que deseja remover: ')
        let posicao = numero - 1

        if (numero < 1 || numero > musicas.length) {
            console.log('numero invalido')
        } else {
            musicas.splice(posicao, 1)
            console.log('musica removida')
        }
    }
}


function duracaoTotal() {
    let total = 0

    for (let i = 0; i < musicas.length; i += 1) {
        total += musicas[i].duracao
    }

    let segundos = total % 60
    let minutos = (total - segundos) / 60

    console.log(`duracao total: ${minutos} min e ${segundos} segundos`)
}


while (true) {
    console.log('1 - cadastrar musicas')
    console.log('2 - listar musicas')
    console.log('3 - pesquisar titulo')
    console.log('4 - atualizar duração')
    console.log('5 - remover musica')
    console.log('6 - apresentar duração total da coleção')
    console.log('7 - sair')


    let opcao = readline.questionInt('digite uma opcao: ')

    if (opcao === 7) {
        console.log('encerrando')
        break
    }

    switch (opcao) {

        case 1: {
            cadastrar()
            break
        }

        case 2: {
            listar()
            break
        }

        case 3: {
            pesquisar()
            break
        }

        case 4: {
            atualizarDuracao()
            break
        }
        case 5: {
            remover()
            break
        }

        case 6: {
            duracaoTotal()
            break
        }

        default: {
            console.log('opcao invalida')
        }
    }
}