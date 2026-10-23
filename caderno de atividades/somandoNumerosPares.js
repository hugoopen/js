let soma = 0
let quantidadePares = 0
for (let numeroPares = 1; numeroPares <= 100; numeroPares++) {
    if (numeroPares % 2 === 0) {
        soma += numeroPares
        quantidadePares++
    }
} 
console.log(`Esta é a quantidade de numeros pares encontrados: ${quantidadePares}`);
console.log(`Estes é a soma final: ${soma}`);