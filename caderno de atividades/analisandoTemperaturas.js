let temperatura = [28, 31, 29, 34, 27, 33, 30];
let maiorTemperatura = temperatura[0];
let menorTemperatura = temperatura[0];
let soma = 0;
let media = 0;
let quantidadeTemperatura = 0;

for (let i = 0; i < temperatura.length; i++) {
    if (temperatura[i] > maiorTemperatura) {
        maiorTemperatura = temperatura[i];
    }
}
console.log(`Esta foi a maior temperatura:${maiorTemperatura}`);

for (let i = 0; i < temperatura.length; i++){
    if (temperatura[i] < menorTemperatura) {
        menorTemperatura = temperatura[i];
    }
}
console.log(`Esta foi a menor temperatura:${menorTemperatura}`);

for (let i = 0; i < temperatura.length; i++){
    soma += temperatura[i];
}
console.log(`A soma total das temperaturas é:${soma.toFixed(0)}`);

media = soma / temperatura.length;
console.log(`A média das temperaturas é:${media.toFixed(0)}`);

for (let i = 0; i < temperatura.length; i++){
    if (temperatura[i] > 30) {
        quantidadeTemperatura++;
    }
}
console.log(`A quantidade de temperaturas acima de 30C é:${quantidadeTemperatura}`);
