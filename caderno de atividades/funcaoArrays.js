function calcularSoma(numeros){
    let total = 0
    for (let i = 0; i < numeros.length; i++) {
        total+=numeros[i]
    }
    return total

}

function contarPares(numeros){
    let quantidade = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            quantidade++
        }
    }
    return quantidade
}

function encontrarMaior(numeros){
    maiorNumero = numeros[0]
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i]
        }
    }
    return maiorNumero
}

function buscarNumero(numeros, valor){
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === valor) {
            return true
        }
    }
    return false
}

let numeros = [12, 7, 24, 9, 31, 18, 5, 42];

console.log(`A soma dos numeros ${calcularSoma(numeros)}`);
console.log(`A quantidade de numeros pares: ${contarPares(numeros)}`);
console.log(`O maior numero ${encontrarMaior(numeros)}`);
console.log(`Contem o 31? ${buscarNumero(numeros, 31)}`);
console.log(`Contem o 10? ${buscarNumero(numeros, 10)}`);

