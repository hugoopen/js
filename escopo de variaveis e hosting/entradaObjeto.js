const entrada = require('readline-sync')

let nome = entrada.question('Digite o nome do jogo: ')
let genero = entrada.question('Digite o genero do jogo: ')
let horas = Number(entrada.question('Quantas horas voce jogou? '))

let jogo = {
    nome,
    genero,
    horasJogadas: horas
}

console.log('\n===== JOGO CADASTRADO =====');
console.log(`Nome: ${jogo.nome}`);
console.log(`Gênero: ${jogo.genero}`);
console.log(`Horas: ${jogo.horasJogadas}`);
