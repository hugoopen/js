function soma(a, b) {
    let resultado = a + b
    console.log(`O resultado da soma de ${a} + ${b} é: ${resultado}`);
    
} 

function subtrair(a, b) {
    let resultado = a - b
    console.log(`O resultado da subtracao de ${a} - ${b} é: ${resultado}`);
    
} 

function multiplicacao(a, b) {
    let resultado = a * b
    console.log(`O resultado da multiplicacao de ${a} * ${b} é: ${resultado}`);
    
} 

function dividir(a, b) {
    let resultado = a / b
    if (b !== 0) {
        console.log(`O resultado da divisao de ${a} / ${b} é: ${resultado}`);
        
    } else {
        
        console.log('Impossivel de dividir por 0');
        
    }
} 

soma(10, 20)
subtrair(20, 30)
subtrair(10, 5)
dividir(10, 2)