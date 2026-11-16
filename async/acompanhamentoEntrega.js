const entregas = [
    {
        id: 101,
        cliente: "Pedro",
        status: "Pendente",
        etapa: 0
    },
    {
        id: 102,
        cliente: "Juliana",
        status: "Pendente",
        etapa: 0
    },
    {
        id: 103,
        cliente: "Roberto",
        status: "Pendente",
        etapa: 0
    }
];



function monitorarEntrega(listaEntregas, callback) {
    let indice = 0

    const statusAtualizado = ["Em transporte", "Saiu para entrega", "Entregue"]
    function proximoStatusEntrega() {
        if (indice < listaEntregas.length) {
            console.log("Monitoramento iniciado!");

            const entrega = listaEntregas[indice]
            console.log("Atualizacao 1 (2s)");

            setInterval(() => {
                entrega.status = "Em transporte"
                console.log(`Pedido ${entrega.id}: ${entrega.status}`);
                
                indice++
                proximoStatusEntrega()
            }, 2000);

        }
        else {
            console.log("\nResumo das entregas:")
            // console.table(listaEntregas)
            clearInterval(intervalo)
            callback()
        }
    }

    proximoStatusEntrega()
}

function encerrarSistema() {
    console.log("Sistema encerraso.");
}

monitorarEntrega(entregas, encerrarSistema)

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