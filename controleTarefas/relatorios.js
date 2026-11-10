import { tarefas, STATUS, PRIORIDADE } from "./tarefas.js";

export function relatorioGeral() {
  let pendentes = 0;
  let emAndamento = 0;
  let concluidas = 0;

  tarefas.forEach((tarefa) => {
    if (tarefa.status.toLowerCase() === STATUS.PENDENTE.toLowerCase()) {
      pendentes++;
    } else if (tarefa.status.toLowerCase() === STATUS.EM_ANDAMENTO.toLowerCase()) {
      emAndamento++;
    } else if (tarefa.status.toLowerCase() === STATUS.CONCLUIDA.toLowerCase()) {
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
  let baixa = 0;
  let media = 0;
  let alta = 0;

  tarefas.forEach((tarefa) => {
    if (tarefa.nivelPrioridade.toLowerCase() === PRIORIDADE.BAIXA.toLowerCase()) {
      baixa++;
    } else if (tarefa.nivelPrioridade.toLowerCase() === PRIORIDADE.MEDIA.toLowerCase()) {
      media++;
    } else if (tarefa.nivelPrioridade.toLowerCase() === PRIORIDADE.ALTA.toLowerCase()) {
      alta++;
    }
  });

  console.log("\n===== RELATORIO DE PRIORIDADES =====");
  console.log(`Baixa: ${baixa}`);
  console.log(`Media: ${media}`);
  console.log(`Alta: ${alta}`);
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
    const nome = tarefa.responsavelTarefa.trim().toLowerCase();

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
