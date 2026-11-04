const jogos = [{
}]

const novoJogo = {
    nome: "nome",
    categoria: "categoria",
    ano: "ano",
    disponibilidade: true
}

function cadastrarJogos(nome, categoria, ano, disponibilidade) {
    try{
        if (nome.trim() === "") {
            throw new Error("O nome nao pode ficar vazio!");
        }
    
        if (categoria.trim() === "") {
            throw new Error("A categoria nao pode ficar vazia!");
        }
    
        if (ano <= 0) {
            throw new Error("Ano invalido");
        }
    
        if (ano.trim() === "") {
            throw new Error("O ano de lancamento nao pode ficar vazio!");
        }
    
        if (disponibilidade === true) {
            throw new Error("O jogo precisa esta disponivel!");
    }

        console.log("Jogo adicionado com sucesso!");
        
    } catch (Error) {

        console.log(`Erro: ${erro.message}`);

    }
}