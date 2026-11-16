// call back, callback Queue e Event Loop


function iniciandoDowload(callback) {
    let download = 0
    console.log("Iniciando download...");
    const intervalo = setInterval(() => {
        download += 20
        console.log(`Download: ${+ download}%`);


        if (download === 100) {
            clearInterval(intervalo)
            setTimeout(() => {
                console.log("Arquivo baixado com sucesso!");
                callback()
                
            }, 2000);
        }
    }, 1000);
}

function abrirArquivo() {
    console.log("Abrindo arquivo..");
}

iniciandoDowload(abrirArquivo)