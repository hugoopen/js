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

        // terminou todos os status: para o timer (temporizador) e finaliza
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

/*
1- Qual a diferença entre setInterval() e setTimeout()?
Depende da quantidade de repetição da função que é executada, setTimeout: Executa uma única vez após o tempo de espera definido, já setInterval, depende da quantidades de loop definido ou não definidos, para parar esse loop, é obrigado usar o clearInterval(), caso contrario, ele roda repetidamente.

2-  Por que precisamos utilizar clearInterval()?
Para parar justamente o laço de repetição do setInterval (seja ele definido ou não), impedindo o consumo desnecessário de memória e processamento do navegador após a execução.

3- Como o programa identifica que todas as entregas foram concluídas?
Antes de finalizar, a variável statusPorAtualizacao recebe incrementos (statusPorAtualizacao++) a cada laço de repetição (ciclo), avançando pelos níveis de status da lista. O programa identifica que todas as entregas foram concluídas quando esse contador se torna estritamente igual (===) à quantidade total de elementos da lista (statusAtualizado.length).

4- Qual é a responsabilidade da função callback nesse sistema?
A responsabilidade da função callback nesse sistema é definir e executar a etapa final (como exibir "Sistema Encerrado", validar resultados com if ou atualizar a tela), garantindo que essas ações aconteçam somente após o término completo do ciclo de entregas.
 */

