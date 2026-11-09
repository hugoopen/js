import readline from "readline-sync";

function perguntarTexto(mensagem) {
    return readline.question(mensagem)
}

function perguntarNumero(mensagem) {
    return Number(readline.question(mensagem))
}