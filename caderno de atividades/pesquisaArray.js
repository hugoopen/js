const { question } = require("readline-sync");

let jogos = [ "Minecraft", "Terraria", "Stardew Valley", "Hollow Knight", "Celeste" ]; 

let jogoPesquisado = question('Digite o nome do jogo que deseja pesquisar: ')

for (let i = 0; i < jogos.length; i++) {
    if ( jogoPesquisado === jogos[i]) {
        console.log(`Este é o jogo que voce pesquisou: ${jogos[i]} e seu indice e: ${[i]}`);
        break    
    }else{
        console.log(`Digite um jogo que já esteja na lista`);
        break
    }
}
