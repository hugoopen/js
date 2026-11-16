const entregas = [
    { id: 101, cliente: "Pedro", status: "Pendente", etapa: 0 },
    { id: 102, cliente: "Juliana", status: "Pendente", etapa: 0 },
    { id: 103, cliente: "Roberto", status: "Pendente", etapa: 0 }
];

function monitorarEntrega(listaEntregas, callback) {
    const statusAtualizado = ["Em transporte", "Saiu para entrega", "Entregue"];
    let statusPorAtualizacao = 0;

    console.log("Monitoramento iniciado!");

    const intervalo = setInterval(() => {
        console.log(`\nAtualização ${statusPorAtualizacao + 1} (${(statusPorAtualizacao + 1) * 2}s)`);

        // atualiza TODAS as entregas de forma unidas
        listaEntregas.forEach((entrega) => {
            entrega.status = statusAtualizado[statusPorAtualizacao];
            entrega.etapa = statusPorAtualizacao + 1;
            console.log(`Pedido ${entrega.id}: ${entrega.status}`);
        });

        statusPorAtualizacao++;

        // terminou todos os status: para o timer e finaliza
        if (statusPorAtualizacao === statusAtualizado.length) {
            clearInterval(intervalo);
            console.log("\nResumo das entregas:");
            console.table(listaEntregas);
            callback();
        }
    }, 2000);
}

function encerrarSistema() {
    console.log("Sistema encerrado.");
}

monitorarEntrega(entregas, encerrarSistema);
/*
1. Criar uma função monitorarEntregas(callback).
2. Utilizar setInterval() para atualizar o sistema automaticamente a cada 2 segundos.
3. A cada intervalo, atualizar a propriedade etapa dos objetos que ainda não foram 
entregues.
4. Definir o status de cada entrega de acordo com a etapa
5. Exibir o status de cada entrega após cada atualização.
6. Quando todas as entregas estiverem concluídas, utilizar clearInterval() para 
interromper o monitoramento.
7. Executar um callback para apresentar uma mensagem de finalização.
*/