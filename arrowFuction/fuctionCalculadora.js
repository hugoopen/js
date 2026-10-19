const arrowFuctionSoma = (a, b) => a+b
const arrowFuctionsubtrair = (a, b) => a-b
const arrowFuctionmultiplicar = (a,b) => a*b
const arrowFuctionDividir = (a,b) => {
    if (b !== 0){
        console.log(`O resultado da divisão é ${a} / ${b} é: ${a / b}`);  
    } else {
        console.log(`Nao é divisivel por 0`);
        
    }
}


arrowFuctionDividir(20,10)
console.log(arrowFuctionSoma(20,10), arrowFuctionsubtrair(20,10), arrowFuctionmultiplicar(20,2));


