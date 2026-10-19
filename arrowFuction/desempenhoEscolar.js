// const { question, questionInt } = require("readline-sync");
// const arrowVerificarNota = (notas) =>{
//     if (notas >= 7 || notas === 10) {
//         console.log('Parabens, está aprovado! 😊');
//     }
// } 

// const nomeAluno = question('Digite o seu nome: ')

// const arrowFuctioInserirNotas = ()=> {
// while (arrowFuctioInserirNotas.length < 3) {
//         Number(question('Digite a nota da sua 1 avaliacão:'))
//         Number(question('Digite a nota da sua 2 avaliacão:'))
//         Number(question('Digite a nota da sua 2 avaliacão:'))
//     }

// }
// const arrowNota = 0


// console.log('===== SISTEMA DE DESEMPENHO ESCOLAR =====');
// console.log(`Nome ${nomeAluno}`);

const entrada = require('readline-sync')

const calcularMedia = (notas) => {
    let soma = 0

    for (let i = 0; i < notas.length; i++) {
        soma = soma + notas[i];
    }
    return soma / notas.length
}

const verificarSituacao = (media) => {
    if (media >= 7) {
        return 'Aprovado'
    } else if (media >= 5) {
        return 'Recuperacao'
    } else {
        return 'Reprovado'
    }
}

const exibirResultado = (nome, notas, media, situacao) => {
    console.log('\n ===== RESULTADO DO ALUNO =====');
    console.log(`Nome: ${nome}`);

    for (let i = 0; i < notas.length; i++) {
        console.log(`Nota ${i + 1}: ${notas[i]}`);
    }

    console.log(`Media final: ${media.toFixed(2)}`);
    console.log(`Situacao: ${situacao}`);
}

console.log('===== SISTEMA DE DESEMPENHO ESCOLAR =====');
let nome = entrada.question('Digite o seu nome').trim()

if (nome === "") {
    console.log('Erro: o nome nao pode ficar vazio');
} else {
    let notas = []
    let notasValidas = true
}

for (let i = 0; i < 3; i++) {
    let nota = Number(entrada.question(`Digite a ${i + 1} a nota: `))
}

if (nota < 0 || nota > 10) {
    console.log('Nota invalida, digite um valor de 0 a 10.');
    notasValidas = false
    break;

    notas.push(nota)
}


if (notasValidas) {
    let media = calcularMedia(notas)
    let situacao = verificarSituacao(media)

    exibirResultado(nome, notas, media, situacao)
} else {
    console.log('Nao foi possivel calclular o resultado');

}

