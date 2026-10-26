const { question } = require("readline-sync");

let tarefas = []
let concluidas = []

let opcao
let posicao

while (opcao !== 7) {
    console.log('1 - Cadastrar tarefa.');
    console.log('2 - Listar Tarefas');
    console.log('3 - Marcar tarefa como concluida');
    console.log('4 - Listar tarefas pendentes');
    console.log('5 - Excluir tarefa');
    console.log('6 - Apresentar um resumo das tarefas');
    console.log('7 - Encerrar');

    opcao = parseInt(question('Escolha uma opcao de 1 a 7: '))

    switch (opcao) {
        case 1:
            let descricao = question('Digite a descricao da tarefa: ').trim()

            if (descricao !== "") {
                tarefas.push(descricao)
                concluidas.push(false)
                console.log('Tarefa cadastrada com sucesso!');
            } else {
                console.log('A descricao nao pode ficar vazia');
            }
            break;

        case 2:
            if (tarefas.length === 0) {
                console.log('Nenhuma tarefa cadastrada.');
            } else {
                for (let i = 0; i < tarefas.length; i++) {
                    console.log(`${i + 1} - ${tarefas[i]} : ${concluidas[i] ? 'concluida' : 'pendente'}`);
                }
            }
            break;

        case 3:
            posicao = parseInt(question('Digite o numero da tarefa: ')) - 1
            if (posicao >= 0 && posicao < tarefas.length) {
                if (!concluidas[posicao]) {
                    concluidas[posicao] = true
                    console.log(`Tarefa "${tarefas[posicao]}" concluida`);
                } else {
                    console.log(`Tareja ja esta concluida`);
                }
            } else {
                console.log('Nenhuma tarefa pendente!');
            }
            break

        case 4:
            let tarefaPendente = false
            for (let i = 0; i < tarefas.length; i++) {
                console.log(`${[i] + 1} - ${tarefas[i]}`);
                tarefaPendente = true
            }
            if (!tarefaPendente) {
                console.log(`Nao ha tarefas pendentes.`);
            }
            break

        case 5:
            posicao = parseInt(question('Digite o numero da tarefa: ')) - 1
            if (posicao >= 0 && posicao < tarefas.length) {
                let removida = tarefas.splice(posicao, 1)
                concluidas.splice(posicao, 1)
                console.log(`Tarefa "${removida[0]}, excluida com sucesso."`);
            } else {
                console.log('Nao ha tarefas para excluir!');
            }
            break;

        case 6:
            let totalConcluida = 0
            for (let i = 0; i < concluidas.length; i++) {
                if (concluidas[i]) {
                    totalConcluida++
                }
            }
            console.log(`Total de tarefas: ${tarefas.length}`);
            console.log(`Concluidas: ${totalConcluida}`);
            console.log(`Pendentes: ${tarefas.length - totalConcluida}`);
            break;

        case 7:
            console.log('Encerrando o sistema...');
            break

        default:
            console.log('Opcao invalida! Escolha de 1 a 7.');
    }
    if (opcao !== 7) {
        question('Aperte enter para voltar ao menu');
    }
}

