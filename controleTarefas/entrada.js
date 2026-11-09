import readline from "readline-sync";

function perguntarTexto(mensagem) {
    try{
        if (mensagem !== "") {
            throw new Error("Nao aceitamos valores vazios, digite algo!");
        }
        return readline.question(mensagem)
    } catch (error){
        console.error(`Motivo: ${error.message}`);
        
    }
}

function perguntarNumero(mensagem) {
    try {
        if (Number.isNaN(mensagem)) {
            throw new Error("Numero ivalido");
        }

        if (mensagem !== "") {
            throw new Error("Numero nao pode ficar vazio, digite algo!");
        }
        return Number(readline.question(mensagem))
    } catch (error) {
        console.error(`Motivo: ${error.message}`);
    }
}

function cadastrarTarefa() {
}



module.exports = {
    perguntarTexto,
    perguntarNumero
}