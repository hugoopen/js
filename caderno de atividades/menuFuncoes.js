const { question } = require("readline-sync")

const criarMensagem = (nome) => `Bem - vindo ${nome}`
const minutosParaSegundos = (minutos) => minutos * 60
const verificarPar = (numero) => numero % 2 === 0

const mostrarBoasVindas = () => {
    let nome = question('Digite o seu nome: ')
    console.log(criarMensagem(nome));
}

const converterMinutos = () => {
    let minutos = parseFloat(question('Digite o tempo em minutos: '))

    if (isNaN(minutos) || minutos < 0) {
        console.log(`Valor inválido!`);

    } else {
        console.log(`${minutos} minutos equivalem a ${minutosParaSegundos(minutos)} segundos`);
    }
}

const checarNumero = () => {
    let numero = parseInt(question('Digite um numero: '))

    if (isNaN(numero)) {
        console.log(`Valor inválido`);
    } else if (verificarPar(numero)) {
        console.log(`${numero} é par`);
    } else {
        console.log(`${numero} é ímpar.`);
    }
}

let opcao = 0 
while (opcao !== 4) {
    console.clear()
    console.log('1 - Consultar mensagem de boas-vindas.');
    console.log('2 - Converta minutos em segundos.');
    console.log('3 - Verifique se um número é par.');
    console.log('4 - Encerrar programa...');
    opcao = parseInt(question('Escolha uma opcao: '))
    switch (opcao) {
        case 1:
            mostrarBoasVindas()
            break;
    
    
        case 2:
            converterMinutos()
            break;
    
    
        case 3:
            checarNumero()
            break;
    
        case 4:
            console.log('Encerrando aplicação...');
            break;
        default:
            console.log('Opcao invalida, escolha uma opcao entre 1 a 4!');
            break;
    }
    
    if (opcao !==4) {
        question('Aperte enter para voltar ao menu ')
    }

}
