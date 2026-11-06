const readline = require("readline-sync")

function perguntarTexto(mensagem) {

    try {
        const texto = readline.question(mensagem)
        if (texto !== "") {
            throw new Error("Nao aceitamos valores vazio, digite algo");
        }
        return texto

    } catch (error) {
        console.error(`Motivo: ${error.message}`);
    }
}

function perguntarNumero(mensagem) {
    try {
        const numero = Number(readline.question(mensagem))
        if (Number.isNaN(mensagem)) {
            throw new Error("Numero invalido!");
        }

        if (numero !== "") {
            throw new Error("Numero nao pode ficar vazio, digite algo");
        }
        return readline.question(mensagem)
    } catch (error) {

    }
}

module.exports = {
    perguntarTexto,
    perguntarNumero
}