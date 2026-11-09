import { perguntarTexto, perguntarNumero } from "../controleTarefas/entrada";
const tarefas = []
let geradorIdentificador = 0 // gerador automatico de id

export function cadastrarTarefa() {
    console.log("\n ===== CADASTRO DA TAREFA =====");

    const titulo = perguntarTexto("Digite o titulo: ").trim()
    const descricao = perguntarTexto("Digite a descricao: ").trim()
    const nomeResponsavel = perguntarTexto("Digite o nome do responsavel: ").trim()
    const nivelPrioridade = perguntarTexto("Digite o nivel da prioridade: ").trim()
    const status = perguntarTexto("Digite o status da tarefa: " ? "Em Andamento" : "Concluida").trim()

    const tarefa = {
        identificador: geradorIdentificador++,
        titulo: titulo,
        descrição: descricao,
        responsavelTarefa: nomeResponsavel,
        nivelPrioridade: nivelPrioridade,
        total: 0,
        status: "Pendente"
    }

    tarefa.push(tarefa)

    console.log("Tarefa cadastrada com sucesso!");

}

export function listarTarefa() {
    console.log("\n===TAREFA ATUAL===");
    if (tarefas.length === 0) {
        console.log("Nenhuma tarefa cadastrada!");
    }
    tarefas.forEach((tarefa, indice) => {
        console.log(`ID da tarefa: ${identificador}`);
        console.log(`Titulo: ${tarefa.titulo} - indice: ${indice + 1}`);
        console.log(`Descricao: ${tarefa.descricao}`);
        console.log(`Responsavel pela tarefa: ${tarefa.responsavelTarefa}`);
        console.log(`Nivel da prioridade da tarefa: ${tarefa.nivelPrioridade}`);
        console.log(`Status: ${tarefa.status}`);
    })
}

export function buscarTarefaPorId(identificador) {
    const buscarId = perguntarNumero("Digite o id que deseja: ").trim().toLoweCase()
    const resultadoId = tarefas.find(tarefa => tarefa.identificador.toLoweCase() === buscarId)
    if (resultadoId) {
        console.log("\n===TAREFA ENCONTRADA===");
        console.log(`Id: ${tarefa.identificador}`);
        console.log(`Titulo: ${tarefa.titulo}`);
        console.log(`Descricao: ${tarefa.descricao}`);
        console.log(`Responsabilidade: ${tarefa.responsavelTarefa}`);
        console.log(`Nivel de prioridade: ${tarefa.nivelPrioridade}`);
        console.log(`Status: ${tarefa.status}`);
    } else {
        console.log("Nenhum id encontrado, tente novamente.");

    }
}

export function atualizarId(identificador) {

    if (tarefas.length === 0) {
        console.log("Adicione uma tarefa antes de atualizar o id!");
    }
    else {
        listarTarefa()

        let identificador = perguntarNumero("Digite o id que procura: ")
        let id = identificador - 1


        if (identificador < 1 || identificador > tarefas.length) {
            console.log("Id invalido!");
        } else {
            let novoId = perguntarNumero("Digite o novo id: ")
        } if (novoId < 0) {
            console.log("O id não pode ser negativo.");
        } else {
            tarefas[id].geradorIdentificador = novoId
        }
    }
}

export function listarTarefasPorStatus(status) {
    if (tarefas.length === 0) {
        console.log("Adicione uma tarefa antes de tentar consultar o status.");

    }
}




//• Solicitar o título da tarefa.
//• Solicitar a descrição.
//• Solicitar o nome do responsável.
//• Solicitar a prioridade.
//• Criar um objeto contendo as informações.
//• Gerar um identificador para a nova tarefa.
//• Definir automaticamente o status inicial como Pendente.
//• Adicionar o objeto ao array tarefas.
//• Exibir uma mensagem confirmando o cadastro.
