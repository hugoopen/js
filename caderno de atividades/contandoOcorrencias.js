const { question } = require("readline-sync");

let equipamentos = [ "Mouse", "Teclado", "Monitor", "Mouse", "Headset", "Mouse", "Teclado" ]; 

let pesquisado = question('Digite o nome do equpamento: ')
let contador = 0

for (let i = 0; i < equipamentos.length; i++) {
    if (equipamentos[i] === pesquisado) {
        contador++
    }
}
console.log(`O equipamento ${pesquisado} aparece ${contador} vezes.`);

let mouse = 0
let teclado = 0
let monitor = 0

for (let i = 0; i < equipamentos.length; i++) {
    if (equipamentos[i] === 'Mouse') {
        mouse++
    } else if (equipamentos[i] === 'Teclado') {
        teclado++
    } else if (equipamentos[i] === 'Monitor') {
        monitor++
    } 
}
console.log(`Mouse ${mouse}`);
console.log(`Teclado ${teclado}`);
console.log(`Monitor ${monitor}`);


