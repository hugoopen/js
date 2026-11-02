const { question, questionInt } = require("readline-sync");

const tarefas = [
    {
        titulo: "Criar tela de login",
        responsavel: "Ana",
        prioridade: 1,
        concluida: true,
        horas: 4
    },
    {
        titulo: "Criar banco de dados",
        responsavel: "Carlos",
        prioridade: 1,
        concluida: true,
        horas: 6
    },
    {
        titulo: "Implementar cadastro",
        responsavel: "Ana",
        prioridade: 2,
        concluida: false,
        horas: 8
    },
    {
        titulo: "Realizar testes",
        responsavel: "Marina",
        prioridade: 1,
        concluida: false,
        horas: 5
    },
    {
        titulo: "Escrever documentação",
        responsavel: "Carlos",
        prioridade: 3,
        concluida: false,
        horas: 3
    }
];

let opcao

while (opcao !== 9) {
    console.clear()
    console.log('1 - Pesquisar tarefa');
    console.log('2 - Selecionar apenas tarefas realizadas');
    console.log('3 - Existe tarefa pendente');
    console.log('4 - Todas as tarefas foram concluidas');
    console.log('5 - Criar lista resumida');
    console.log('6 - Quantas horas foram previstas no projeto ');
    console.log('7 - Ordena atividade por prioridade');
    console.log('8 - Relatorio completo');
    console.log('9 - Sair');

    opcao = questionInt('Escolha uma opcao de 1 a 9: ')

    switch (opcao) {
        case 1:
            const pesquisarTarefa = question('Digite o nome da atividade: ').trim().toLowerCase()
            const resultadoTarefa = tarefas.find(tarefa => tarefa.titulo.toLowerCase() === pesquisarTarefa)
            if (resultadoTarefa) {
                console.log(`Esta e a tarefa que procura: ${resultadoTarefa.titulo} - ${resultadoTarefa.responsavel}`);
            } else {
                console.log(`Tarefa nao foi encontrada!`);
            }
            break;

        case 2:
            const tarefaConcluida = tarefas.some(tarefa => tarefa.concluida === true)
            if (tarefaConcluida) {
                console.log(`Tarefas concluidas: `);

                tarefas
                    .filter(tarefa => tarefa.concluida === true)
                    .forEach(tarefa =>
                        console.log(`Tarefa: ${tarefa.titulo} | Concluida: ${tarefa.concluida ? 'concluida' : 'nao foi concluida'} `))
            } else {
                console.log('Todas tarefas nao foram concluidas!');
            }
            break

        case 3:
            const tarefasPendentes = tarefas.some(tarefa => tarefa.concluida === false)
            if (tarefasPendentes) {
                console.log(`Tarefas pendentes: `);

                tarefas
                    .filter(tarefa => tarefa.concluida === false)
                    .forEach(tarefa =>
                        console.log(`Tarefa: ${tarefa.titulo} | Concluida: ${tarefa.concluida ? 'concluida' : 'nao foi concluida'} `))
            } else {
                console.log('Todas tarefas nao estao concluidas!');
            }
            break

        case 4:
            const todasConcluidas = tarefas.every(tarefa => tarefa.concluida)

            if (todasConcluidas) {
                console.log('Todas as tarefas foram concluidas!');
            } else {
                console.log('Ainda existe tarefas pendentes.');
            }
            break

        case 5:
            const painelResumido = tarefas.map(tarefa => ({
                titulo: tarefa.titulo,
                responsavel: tarefa.responsavel,
                concluida: tarefa.concluida ? 'Concluida' : 'Pendente'
            }))

            console.log('====== PAINEL RESUMIDO =====');
            painelResumido.forEach(tarefa => {
                console.log(`${tarefa.titulo} - ${tarefa.responsavel} | ${tarefa.concluida}`);
            })
            break

        case 6:
            const horasConcluidas = tarefas
                .filter(tarefa => tarefa.concluida)
                .reduce((total, tarefa) => total + tarefa.horas, 0)

            const quantidadeConcluidas = tarefas.filter(tarefa => tarefa.concluida).length
            const percentual = (quantidadeConcluidas / horasConcluidas) * 100

            console.log(`Horas de tarefas concluidas: ${horasConcluidas}`);
            console.log(`Percentual concluido: ${percentual.toFixed(1)}%`);

        case 7:
            const tarefaPrioridade = [...tarefas].sort((a, b) =>
                a.prioridade - b.prioridade)

            tarefaPrioridade.forEach(tarefa => {
                console.log(`Prioridade ${tarefa.prioridade} - ${tarefa.titulo}`)
            })
            break

        case 8:
            console.log('===== RELATORIO COMPLETO ======');
            tarefas.forEach((tarefa, indice) => {
                console.log(`${indice + 1} - ${tarefa.titulo}`);
                console.log(`Responsavel: ${tarefa.responsavel}`);
                console.log(`Prioridade: ${tarefa.prioridade}`);
                console.log(`Tarefa concluida: ${tarefa.concluida ? 'Concluida' : 'Pendente'}`);
                console.log(`Horas: ${tarefa.horas}`);
            });
            break

        case 9:
            console.log('Sistema encerrando!');
            break

        default:
            console.log('Valor invalido, escolha uma opcao entre 1 a 9');
            break;
    }
    if (opcao !== 9) {
        question('Aperte enter para voltar ao menu.')
    }
}
