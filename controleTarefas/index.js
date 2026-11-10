import readline from "readline-sync"
import { perguntarNumero } from "./entrada.js";
import {
    cadastrarTarefa,
    listarTarefa,
    buscarTarefaPorId,
    atualizarStatus,
    listarTarefasPorStatus,
    STATUS
} from "./tarefas.js";
import {
    relatorioGeral,
    relatorioPrioridades,
    relatorioResponsaveis,
    relatorioPorIntegrante
} from "./relatorios.js";

function exibirMenu() {
    console.log("\n===== GERENCIADOR DE TAREFAS =====");
    console.log("1 - Cadastrar tarefa");
    console.log("2 - Listar tarefas");
    console.log("3 - Buscar tarefa por ID");
    console.log("4 - Atualizar status");
    console.log("5 - Listar por status");
    console.log("6 - Relatorio geral");
    console.log("7 - Relatorio de prioridades");
    console.log("8 - Tarefas e responsaveis");
    console.log("9 - Tarefas por integrante");
    console.log("0 - Sair");
}

function menuStatus() {
    console.log("\n1 - Pendente");
    console.log("2 - Em andamento");
    console.log("3 - Concluida");
    const opcao = perguntarNumero("Escolha o status: ");

    const opcoes = {
        1: STATUS.PENDENTE,
        2: STATUS.EM_ANDAMENTO,
        3: STATUS.CONCLUIDA
    };

    if (!opcoes[opcao]) {
        console.log("Status invalido.");
        return;
    }
    listarTarefasPorStatus(opcoes[opcao]);
}

function pausar() {
    readline.question("\nPressione Enter para continuar...");
}

function limparTela() {
    process.stdout.write("\x1b[2J\x1b[3J\x1b[H")
}

let executando = true;

while (executando) {
    limparTela();
    exibirMenu();
    const opcao = perguntarNumero("Escolha uma opcao: ");

    limparTela();

    switch (opcao) {
        case 1: cadastrarTarefa(); break;
        case 2: listarTarefa(); break;
        case 3: buscarTarefaPorId(); break;
        case 4: atualizarStatus(); break;
        case 5: menuStatus(); break;
        case 6: relatorioGeral(); break;
        case 7: relatorioPrioridades(); break;
        case 8: relatorioResponsaveis(); break;
        case 9: relatorioPorIntegrante(); break;
        case 0:
            console.log("Programa encerrado.");
            executando = false;
            break;
        default:
            console.log("Opcao invalida, tente novamente.");
            break
    }

    if (executando) pausar();
}