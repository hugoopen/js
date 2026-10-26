const { question } = require("readline-sync")

let salas = ['Sala A', 'Sala B', 'Sala C', 'Sala D']
let reservadas = [false, true, false, false]

let opcao
let posicao

while (opcao !== 5) {
    console.clear()
    console.log('1 - Listar salas');
    console.log('2 - Reservar sala');
    console.log('3 - Cancelar reserva');
    console.log('4 - Quantidades de salas disponiveis');
    console.log('5 - Encerrar');

    opcao = parseInt(question('Escolha uma opcao de 1 a 5:'))
    switch (opcao) {
        case 1:
            for (let i = 0; i < salas.length; i++) {
                console.log(`${i + 1} - ${salas[i]} : ${reservadas[i] ? 'reservada' : 'disponivel'}`);
            }
            break;

        case 2:
            posicao = parseInt(question('Digite o numero da sala (1 a 4):')) - 1
            if (posicao >= 0 && posicao < salas.length) {
                if (!reservadas[posicao]) {
                    reservadas[posicao] = true
                    console.log(`${salas[posicao]} reservada com sucesso!`);
                } else {
                    console.log('Escolha uma sala que nao esteja reservada.');
                }
            } else {
                console.log('Posicao inavalida');
            }
            break;
        case 3:
            posicao = parseInt(question('Digite o numero da sala (1 a 4):')) - 1
            if (posicao >= 0 && posicao < salas.length) {
                if (reservadas[posicao]) {
                    reservadas[posicao] = false
                    console.log(`Reserva da ${salas[posicao]} cancelada.`);
                } else {
                    console.log('Esta sala nao estar reservada.');
                }
            } else {
                console.log('Posicao invalida!');
            }
            break;
        case 4:
            let salasDisponivel = 0
            for (let i = 0; i < reservadas.length; i++) {
                if (!reservadas[i]) {
                    salasDisponivel++
                }
            }
            console.log(`Salas disponiveis: ${salasDisponivel}`);
            break;

        case 5:
            console.log('Encerrando o sistema...');
            break

        default:
            console.log('Opcao invalida! Escolha de 1 a 5.');
            break;
    }
    if (opcao !== 5) {
        question('Aperte enter para voltar ao menu.')
    }
}




