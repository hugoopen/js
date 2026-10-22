const { question } = require("readline-sync");

let valorCompra = Number(question('Digite o valor da compra: '))
let totalValorCompra = 0

if(valorCompra < 100) {
    totalValorCompra = valorCompra + 20
} else if (valorCompra >= 100 && valorCompra <= 249.99)  {
    totalValorCompra = valorCompra + 12
} else if(valorCompra  >= 250){
    totalValorCompra = valorCompra 
} else if(valorCompra >= 0){
    console.log('Entrada inválida');
}
console.log(`Este é o valor da sua compra: ${totalValorCompra}`);
