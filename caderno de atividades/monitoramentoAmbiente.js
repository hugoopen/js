const { question } = require("readline-sync");
let salas = ["Laboratório 1", "Laboratório 2", "Laboratório 3"];
let temperaturas = [23.5, 29.8, 26.2];
let contadoracima27 = 0
let opcao

while (opcao !== 7) {
    console.clear()
    console.log('1 - Apresentar todas as temperaturas das salas');
    console.log('2 - Registrar uma nova temperatura para uma sala.');
    console.log('3 - Identificar a sala com a maior temperatura.');
    console.log('4 - A temperatura media das salas');
    console.log('5 - Quantidade de salas com a temperatura acima de 27C');
    console.log('6 - Alguma sala ultrapassou os 30C');
    console.log('7 - Deseja encerrar o sistema? ');

    opcao = parseInt(question('Escolha uma opcao de 1 a 7:'))

    switch (opcao) {
        case 1:
            for (let i = 0; i < salas.length; i++) {
                console.log(`${salas[i]} - ${temperaturas[i]}`);
            }
            break;

        case 2:
            let posicao = parseInt(question('Digite a sala: ')) - 1
            if (posicao >= 0 && posicao < salas.length) {
                let novaTemperatura = parseFloat(question('Digite a nova temperatura '))
                temperaturas[posicao] = novaTemperatura
                console.log(`${salas[posicao]} - ${temperaturas[posicao]}`);
            } else {
                console.log('Sala invalida');
            }
            break

        case 3:
            let maiorTemperatura = temperaturas[0]
            let posicaoMaior = 0
            for (let i = 0; i < temperaturas.length; i++) {
                if (temperaturas[i] > maiorTemperatura) {
                    maiorTemperatura = temperaturas[i]
                    posicaoMaior = i
                }
            }
            console.log(`Esta foi a sala com a maior temperatura: ${salas[posicaoMaior]} (${maiorTemperatura})`);

        case 4:
            let soma = 0

            for (let i = 0; i < temperaturas.length; i++) {
                soma += temperaturas[i]
            }

            let media = soma / temperaturas.length
            console.log(`A temperatura media das salas: ${media.toFixed(1)}`);
            break

        case 5:
            for (let i = 0; i < temperaturas.length; i++) {
                if (temperaturas[i] > 27) {
                    contadoracima27++
                }
            }
            console.log(`Estas foram as temperaturas acima de 27C: ${contadoracima27}`);
            break

        case 6:
            let passou = false
            for (let i = 0; i < temperaturas.length; i++) {
                if (temperaturas[i] > 30) {
                    console.log(`${salas[i]} (sala ${i + 1}) passou de 30C: ${temperaturas[i]}`);
                    passou = true
                } 
            }
            if(!passou) {
                    console.log('Nenhuma sala teve temperatura maior que 30C');
            }
            break

        case 7:
            console.log('Encerrando');
            break

        default:
            console.log('Opcao invalida! Escolha entre 1 a 7.');
            break;
    }
    if (opcao !== 7) {
        question('Aperte enter para voltar ao menu.')
    }
}

