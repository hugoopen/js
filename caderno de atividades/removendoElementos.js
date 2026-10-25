const { question } = require("readline-sync");

let tarefas = ['Estudar JavaScript','Praticar arrays', 'Revisar funções', 'Estudar objetos', 'Resolver exercícios']

for (let i = 0; i < tarefas.length; i++) {
    console.log(`Tarefa de hoje: ${tarefas[i]}`);
}

let removerTarefas = parseInt(question('Digite o indice da tarefa que deseja remover:'))
if (removerTarefas >= 0 && removerTarefas < tarefas.length) {
    tarefas.splice(removerTarefas,1)
    console.log(tarefas);
} else{
    console.log('Indice fora da lista, nada foi removido.');
}
console.log('Lista final das tarefas:');
console.log(tarefas);
