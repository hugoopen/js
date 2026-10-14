const { question } = require("readline-sync");

let jogos = ['Minecraft', ' Fifa', 'Gta', 'The Sims', 'Valorant']
console.log(`Esses são os jogos disponiveis: ${jogos}`);

jogos.push(question("Digite jogo voce deseja adicionar: "))
console.log(jogos);

jogos.pop()
console.log(jogos);

let = question("Digite o jogo que quer adicionar ao inicio da lista:")
jogos.unshift()
console.log(jogos);

console.log("Escolha uma opcao:");
console.log(" 1 - Subtituir um novo jogo ou 2 - Remover Jogo");
let opcao = Number(question("Escolha uma opcao: "))

switch (opcao) {
    case 1:
        let indice = question("Qual posiçao deseja alterar: ")
        let jogoSubtituido = question("Digite o jogo que deseja subtituir:")
        jogos.splice(indice, 1, jogoSubtituido)
        console.log(jogos);
        break;
    case 2:
        let 

    default:
        break;
}





