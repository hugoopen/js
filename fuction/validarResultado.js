const entrada = require('readline-sync')

function verificarResultado(nota) {
    if (nota >= 7){
        return 'aprovado'
    } else {
        return'reprovado'
    }
}

let nota = Number(entrada.question('Digite a sua nota: '))
let resultado = verificarResultado(nota)

console.log(`Resultado: ${resultado}`);
