const { question, questionInt } = require("readline-sync");

let jogos = []

let jogosTexto = ""


function cadastrarJogos() {
    console.log("\n===== CADASTRAR JOGO=====");

    const nome = question("Digite o nome do jogo:").trim()
    const categoria = question("Digite a categoria do jogo:").trim()
    const anoTexto = question("Digite o ano do jogo:").trim()
    const disponibilidade = question("Digite a disponibilidade do jogo (s/n):").trim().toLowerCase() === "s"
    try {
        if (nome === "") {
            throw new Error("O nome nao pode ficar vazio!");
        }

        if (categoria === "") {
            throw new Error("A categoria nao pode ficar vazia!");
        }

        const ano = Number(anoTexto)

        if (anoTexto === "") {
            throw new Error("O ano de lancamento nao pode ficar vazio!");
        }


        if (Number.isNaN(ano) || ano <= 0) {
            throw new Error("Ano invalido");
        }

        if (!disponibilidade) {
            throw new Error("O jogo precisa esta disponivel!");
        }

        const novoJogo = {
            nome: nome,
            categoria: categoria,
            ano: ano,
            disponibilidade: true
        }

        jogos.push(novoJogo)

        console.log("Jogo adicionado com sucesso!");

    } catch (Erro) {

        console.log(`Erro: ${erro.message}`);

    }

}

function listarJogo() {
    console.log("===== JOGOS =====");

    if (jogos.length === 0) {
        console.log("Nenhum jogo cadastrado!");
        return
    }

    jogos.forEach((jogo, indice) => {
        console.log(`${indice + 1} - ${jogo.nome}`);
        console.log(`Categoria: ${jogo.categoria}`);
        console.log(`Ano: ${jogo.ano}`);
        console.log(`Disponibilidade: ${jogo.disponibilidade ? "Disponivel" : "Nao esta disponivel"}`);
    })
}

function serializacaoJSON() {
    if (jogos.length === 0) {
        throw new Error("Nao ha jogo para serializar. Cadastre um jogo primeiro ");
    }

    jogosTexto = JSON.stringify(jogos)

    //resultado esperado
    console.log("Objeto convertido:");
    console.log(jogosTexto);
    console.log(`Tipo da variavel: ${typeof jogosTexto}`);
}

function desserializarJSON() {
    if (jogosTexto === "") {
        throw new Error("Nao ha JSON salvo. Utilize a opcao 3 para serializar primeiro!");
    }

    jogos = JSON.parse(jogosTexto)

    console.log("Texto convertido de volta para objetos!");
    console.log(`Tipo da variavel: ${typeof jogos} (array: ${Array.isArray(jogos)})`);

    listarJogo()
}


function exibirMenu() {
    console.log("\n=====MENU=====");
    console.log("1 - Cadastrar Jogo");
    console.log("2 - Listar jogo");
    console.log('3 - Serializar dados para (JSON.stringfy)');
    console.log("4 - Desserializar dados para (JSON.parse)");
    console.log("5 - Sair");
}

let opcao
while (opcao !== 5) {
    exibirMenu()
    opcao = questionInt("Escolha de 1 a 5:")

    try {
        switch (opcao) {
            case 1:
                cadastrarJogos()
                break;

            case 2:
                listarJogo()
                break

            case 3:
                serializacaoJSON()
                break

            case 4:
                desserializarJSON()
                break

            case 5:
                console.log("Saindo...");
                break

            default:
                console.log("Opcao invalida!");
                break;
        }

    } catch (erro) {
        console.log(`Erro: ${erro.message}`);
    }

    if (opcao !== 5) {
        question("Aperte enter para voltar ao menu!")
    }
}