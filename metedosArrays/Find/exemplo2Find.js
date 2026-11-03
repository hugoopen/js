const tarefas = [
    {descricao: 'Estudar JavaScript', concluida: true},
    {descricao: 'Criar banco de dados', concluida: true},
    {descricao: 'Testar a aplicacao', concluida: false},
    {descricao: 'Documentar o projeto', concluida: false}
]

const tarefasPendentes = tarefas.find(tarefa => {
    return tarefa.concluida === false
})

console.log(tarefasPendentes);
