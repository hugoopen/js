function executarTarefa(callback) {
    
    console.log("Executando tarefa...");
    
    callback()
}

function finalizar() {
    console.log("Tarefa finalizada!");
}

executarTarefa(finalizar)