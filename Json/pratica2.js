const { question, questionInt } = require("readline-sync");

const jogos = []

const novoJogo = {
    nome: "nome",
    categoria: "categoria",
    ano: "ano",
    disponibilidade: true
}

function cadastrarJogos() {
    const nome = question("Digite o nome do jogo:").trim()
    const categoria = question("Digite a categoria do jogo:").trim()
    const ano = question("Digite o ano do jogo:").trim()
    const disponibilidade = question("Digite a disponibilidade do jogo (s/n):").trim().toLowerCase() === "s"
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

function listarJogo() {
    console.log("===== JOGO =====");
    jogos.forEach((jogo, indice)) => {
        console.log(`${indice + 1}`);
        console.log();
        console.log();
        console.log();
    }
}

function exibirMenu() {
    console.log("\n=====MENU=====");
    console.log("1 - Cadastrar Jogo");
    console.log("2 - Listar jogo");
    console.log('3 - Seliarezar para JSON');
    console.log("4 - Desserealizar");
    console.log("5 - Sair");
}

let opcao
while (opcao !== 5) {
    exibirMenu()
    opcao = questionInt("Escolha de 1 a 7")

    try{
        switch (opcao) {
            case 1:
                cadastrarJogos()
                break;

            case 2:
                listarJogo()
                break
            default:
                break;
        }
    } catch (erro) {
        console.log(`Erro: ${erro.message}`);
    }

    if (opcao !== 7) {
        question("Aperte enter para voltar ao menu!")
    }
}