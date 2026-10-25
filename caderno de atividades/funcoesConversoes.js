function celsiusParaFahrenheit(celsius) {
    return (celsius * 1.8) + 32
}

function quilometrosParaMetros(quilometro){
    return quilometro * 1000
}

function minutosParaSegundos(minutos) {
    return minutos * 60
}

let fahrenheit = celsiusParaFahrenheit(25)
let metros = quilometrosParaMetros(3)
let segundos = minutosParaSegundos(60)

console.log(`25C equivalem a ${fahrenheit.toFixed(1)} F°`);
console.log(`3 km equivalem a ${metros} m`);
console.log(`60 minutos equivalem a ${segundos} s`);

