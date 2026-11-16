function salvarUsuario(nome, callback) {
    console.log(`Salvando usuario: ${nome}...`);
    
    setTimeout(() => {
        console.log("Usuario salvo com sucesso!");
        callback()
    }, 2000);
}

function exibirMensagem() {
    console.log("Redirencionando para a tela principal...");
}

salvarUsuario("Maria", exibirMensagem)