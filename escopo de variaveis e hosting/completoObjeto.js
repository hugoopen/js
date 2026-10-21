const entrada = require('readline-sync')

let jogos = [
    {
        nome: 'Minecraft',
        genero: 'Aventura',
        horas: 45
    },
    {
        nome: 'Fifa',
        genero: 'Esporte',
        horas: 30
    },
    {
        nome: 'The Sims',
        genero: 'Simulação',
        horas: 20
    }
]

function listarJogos() {
    console.log('\n=====MEUS JOGOS=====');

    for (let i = 0; i < jogos.length; i++) {
        console.log(`${i + 1} - ${jogos[i].nome}`);
        console.log(`Gênero: ${jogos[i].genero}`);
        console.log(`Horas Jogadas: ${jogos[i].horas}`);
        console.log('------------------------------');
    }
}

function consultarHoras() {
    let total = 0

    for (let i = 0; i < jogos.length; i++) {
        total = total + jogos[i].horas
    }
    return total
}

let opcao

while (opcao !== 3) {
    console.clear()
    console.log('\n===== CATÁLOGO DE JOGOS=====');
    console.log('1 - Listar jogos');
    console.log('2 - Consultar total de horas');
    console.log('3 - Sair');

    opcao = Number(entrada.question('Escolha uma opcao: '))

    if (opcao === 1) {
        listarJogos()
        entrada.question('Aperte enter para voltar ao menu')
    } else if (opcao === 2) {
        console.log(`Total de horas jogadas: ${consultarHoras()}`);
        entrada.question('Aperte enter para voltar ao menu')
    } else if (opcao === 3) {
        console.log('Encerrando programa.');
    } else {
        console.log('Opção inválida!');
        entrada.question('Aperte enter para voltar ao menu')
    }
}

