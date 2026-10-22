const {question} = require("readline-sync");
let opcao
while (opcao !== 4) {
    console.clear();
    console.log("1 - Reproduzir musica");
    console.log("2 - Pausar Musica");
    console.log("3 - Avançar Faixa");
    console.log("4 - Encerrar aplicação");

     opcao = Number(question("Escolha uma opcao: "));

  switch (opcao) {
        case 1:{
            console.log("Reproduzir musica");
            question("Pressione enter para voltar ao menu.");
            break;
        }
        case 2: {
            console.log("Pausar musica");
            question("Pressione enter para voltar ao menu.");
            break;
        }
        case 3: {
            console.log("Avancar faixa");
            question("Pressione enter para voltar ao menu.");
            break;
        }
        case 4:
            console.log("Encerrando programa...");
            break;
            
        default:
                console.log("Opção invalida");
                question("Pressione enter para voltar ao menu.");
                break;
    }
}
console.log('Programa encerrado!');

