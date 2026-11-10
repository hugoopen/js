import readline from "readline-sync";

export function perguntarTexto(mensagem) {
    while (true) {
        try {
            const resposta = readline.question(mensagem).trim()

            if (resposta === "") {
                throw new Error("Nao aceitamos valores vazio, digite algo!");
            }
            return resposta
        } catch (error) {
            console.error(`Motivo: ${error.message}`);
        }
    }
}

export function perguntarNumero(mensagem) {
    while (true) {
        try {
            const resposta = readline.question(mensagem).trim()

            if (resposta === "") {
                throw new Error("O numero nao pode ficar vazio, digite algo");
            }

            const numero = Number(resposta)
            if (Number.isNaN(numero)) {
                throw new Error("Numero invalido, digite apenas numeros.");
            }
            return numero
        } catch (error) {
            console.error(`Motivo: ${error.message}`);
        }
    }
}