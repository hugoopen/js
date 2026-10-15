const entrada = require('readline-sync')

function verificarResultado(nota) {
    if (nota >= 7) {
        return ("Aprovado")
    } else {
        return ("Reprovado")
    }

}


let notas = []

for (let i = 0; i < notas.length; i++) {
    let nota = Number(entrada.question(`Digite aqui as ${i + 1} notas das suas avaliacoes: `))
    nota.push()
}

let soma = 0

for (let i = 0; i < notas.length; i++) {

    soma += notas[i]
}
let media = soma / notas.length
let resultado = verificarResultado(media);


console.log("\n===== RESULTADO DO ALUNO =====");
console.log(`Notas: ${notas}`);
console.log(`Media: ${media.toFixed2}`);
console.log(`Situacao: ${resultado}`);






