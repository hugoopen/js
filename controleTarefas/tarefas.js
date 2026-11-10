import { perguntarTexto, perguntarNumero } from "./entrada.js";

export const tarefas = [
  {
    identificador: 1,
    titulo: "Criar tela de login",
    descricao: "Desenvolver a interface de acesso",
    responsavelTarefa: "Carlos",
    nivelPrioridade: "Alta",
    status: "Pendente",
  },
  {
    identificador: 2,
    titulo: "Criar banco de dados",
    descricao: "Modelar as tabelas do sistema",
    responsavelTarefa: "Mariana",
    nivelPrioridade: "Média",
    status: "Em andamento",
  },
  {
    identificador: 3,
    titulo: "Documentar o projeto",
    descricao: "Criar documentação das funcionalidades",
    responsavelTarefa: "Pedro",
    nivelPrioridade: "Baixa",
    status: "Concluída",
  },
];
let geradorIdentificador = 0;

export const STATUS = Object.freeze({
  PENDENTE: "Pendente",
  EM_ANDAMENTO: "Em andamento",
  CONCLUIDA: "Concluida",
});

export const PRIORIDADE = Object.freeze({
  BAIXA: "Baixa",
  MEDIA: "Media",
  ALTA: "Alta",
});

const OPCOES_STATUS = {
  1: STATUS.PENDENTE,
  2: STATUS.EM_ANDAMENTO,
  3: STATUS.CONCLUIDA,
};

const OPCOES_PRIORIDADE = {
  1: PRIORIDADE.BAIXA,
  2: PRIORIDADE.MEDIA,
  3: PRIORIDADE.ALTA,
};

function perguntarStatus() {
  console.log("\nOpcoes de status: ");
  console.log("1 - Pendente");
  console.log("2 - Em andamento");
  console.log("3 - Concluida");

  let status;
  while (!status) {
    const opcao = perguntarNumero("Digite o status: ");
    status = OPCOES_STATUS[opcao];
    if (!status) console.log("Opcao invalida, tente novamente.");
  }
  return status;
}

function perguntarPrioridade() {
  console.log("\nNiveis de prioridade: ");
  console.log("1 - Baixa");
  console.log("2 - Media");
  console.log("3 - Alta");

  let prioridade;
  while (!prioridade) {
    const opcao = perguntarNumero("Digite a prioridade: ");
    prioridade = OPCOES_PRIORIDADE[opcao];
    if (!prioridade) console.log("Opcao invalida, tente novamente.");
  }
  return prioridade;
}

function exibirTarefas(tarefa) {
  console.log(`ID: ${tarefa.identificador}`);
  console.log(`Titulo: ${tarefa.titulo}`);
  console.log(`Descricao: ${tarefa.descricao}`);
  console.log(`Responsavel: ${tarefa.responsavelTarefa}`);
  console.log(`Prioridade: ${tarefa.nivelPrioridade}`);
  console.log(`Status: ${tarefa.status}`);
}

export function cadastrarTarefa() {
  console.log("\n===== CADASTRO DA TAREFA =====");

  const titulo = perguntarTexto("Digite o titulo: ").trim();
  const descricao = perguntarTexto("Digite a descricao: ").trim();
  const nomeResponsavel = perguntarTexto(
    "Digite o nome do responsavel: ",
  ).trim();
  const nivelPrioridade = perguntarPrioridade();
  const status = perguntarStatus();

  const tarefa = {
    identificador: geradorIdentificador++,
    titulo: titulo,
    descricao: descricao,
    responsavelTarefa: nomeResponsavel,
    nivelPrioridade: nivelPrioridade,
    status: status,
  };

  tarefas.push(tarefa);
  console.log("Tarefa cadastrada com sucesso!");
}

export function listarTarefa() {
  console.log("\n===== TAREFAS CADASTRADAS =====");
  if (tarefas.length === 0) {
    console.log("Nenhuma tarefa cadastrada!");
    return;
  }
  tarefas.forEach(exibirTarefas);
}

export function buscarTarefaPorId() {
  const buscarId = perguntarNumero("Digite o id que deseja: ");
  const resultado = tarefas.find((tarefa) => tarefa.identificador === buscarId);

  if (!resultado) {
    console.log("Nenhum id encontrado, tente novamente.");
    return;
  }
  console.log("\n===== TAREFA ENCONTRADA =====");
  exibirTarefas(resultado);
}

export function atualizarStatus() {
  const id = perguntarNumero("Digite o id da tarefa: ");
  const tarefa = tarefas.find((tarefa) => tarefa.identificador === id);

  if (!tarefa) {
    console.log("Tarefa nao encontrada.");
    return;
  }

  const novoStatus = perguntarStatus();
  tarefa.status = novoStatus;
  console.log(`Status atualizado para "${novoStatus}" com sucesso!`);
}

export function listarTarefasPorStatus(status) {
  const encontradas = tarefas.filter((tarefa) => tarefa.status === status);

  if (encontradas.length === 0) {
    console.log(`Nenhuma tarefa com o status "${status}".`);
    return;
  }
  console.log(`\n===== TAREFAS: ${status.toUpperCase()} =====`);
  encontradas.forEach(exibirTarefas);
}
