import { tarefas, STATUS, PRIORIDADE } from "./tarefas.js";

export function relatorioGeral() {
  let pendentes = 0;
  let emAndamento = 0;
  let concluidas = 0;

  tarefas.forEach((tarefa) => {
    if (tarefa.status === STATUS.PENDENTE) {
      pendentes++;
    } else if (tarefa.status === STATUS.EM_ANDAMENTO) {
      emAndamento++;
    } else if (tarefa.status === STATUS.CONCLUIDA) {
      concluidas++;
    }
  });

  console.log("\n===== RELATORIO GERAL =====");
  console.log(`Total de tarefas: ${tarefas.length}`);
  console.log(`Pendentes: ${pendentes}`);
  console.log(`Em andamento: ${emAndamento}`);
  console.log(`Concluidas: ${concluidas}`);
}

export function relatorioPrioridades() {
  let prioridadeBaixa = 0;
  let prioridadeMedia = 0;
  let prioridadeAlta = 0;

  tarefas.forEach((tarefa) => {
    if (tarefa.responsavelTarefa === PRIORIDADE.BAIXA) {
      prioridadeBaixa++;
    } else if (tarefa.responsavelTarefa === PRIORIDADE.MEDIA) {
      prioridadeMedia++;
    } else if (tarefa.responsavelTarefa === PRIORIDADE.ALTA) {
      prioridadeAlta++;
    }
  });

  console.log("\n===== RELATORIO DE PRIORIDADES =====");
  console.log(`Baixa: ${prioridadeBaixa}`);
  console.log(`Media: ${prioridadeMedia}`);
  console.log(`Alta: ${prioridadeAlta}`);
}

export function relatorioResponsaveis() {
  console.log("\n===== TAREFAS E RESPONSAVEIS =====");

  if (tarefas.length === 0) {
    console.log("Nenhuma tarefa cadastrada.");
    return;
  }

  tarefas.forEach((tarefa) => {
    console.log(
      `Titulo: ${tarefa.titulo} | Responsavel: ${tarefa.responsavelTarefa}`,
    );
  });
}

export function relatorioPorIntegrante() {
  console.log("\n===== TAREFAS POR INTEGRANTE =====");

  if (tarefas.length === 0) {
    console.log("Nenhuma tarefa cadastrada.");
    return;
  }

  const porIntegrante = {};

  tarefas.forEach((tarefa) => {
    const nome = tarefa.responsavelTarefa;

    if (!porIntegrante[nome]) {
      porIntegrante[nome] = [];
    }
    porIntegrante[nome].push(tarefa.titulo);
  });

  Object.entries(porIntegrante).forEach(([nome, titulos]) => {
    console.log(`\n${nome} (${titulos.length} tarefa(s)):`);
    titulos.forEach((titulo) => {
      console.log(`  - ${titulo}`);
    });
  });
}
