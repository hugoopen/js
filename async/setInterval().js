let contador = 1

const intervalo = setInterval(() => {
    
    console.log(`Contagem: ${+ contador}`);
    
    contador++

    if (contador > 5) {
        clearInterval(intervalo)
        console.log("Contagem finalizada.");
        
    }
}, 1000);