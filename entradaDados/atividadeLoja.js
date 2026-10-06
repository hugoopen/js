const { question } = require("readline-sync");

console.log("=====ATENDIMENTO===== \n 1 - Comprar produto \n 2 - Consulta estoque \n 3 - Solicitar entrega \n 4 - Sair");
let opcao = Number(question("Escolha uma opcao: "))

switch (opcao) {
    case 1:
        let valorCompra = Number(question("Digite o valor da compra: "))
        let possuiCartao = question("Ja possui o cartao da loja Sim/Nao?  ")

        if (valorCompra >= 200 && possuiCartao === "sim") {
            
            console.log("Voce tera 10% de desconto.");
            
        } else if (valorCompra >= 200 || possuiCartao ==="sim") {

            console.log("Voce tera 5% de desconto!");
            
        } else{
            
            console.log("Sem desconto!");
            
        }

        break;

    case 2:
        let consultarEstoque = Number(question("Digite a quantidade de produtos disponiveis: "))

        if (consultarEstoque > 20) {

            console.log("Estoque alto!");
            
        } else if (consultarEstoque >= 6 && consultarEstoque <= 20 ) {

            console.log("Estque normal!");
            
        } else if (consultarEstoque >= 1 && consultarEstoque <=5) {
            
            console.log("Estoque baixo");
            
        } else{
            console.log("Produto esgotado");
            
        }
        break;

    case 3:
        let distanciaEntrega = Number(question("Digite a distancia da entrega: ")) 

        if (distanciaEntrega <=5 ) {
            
            console.log("Entrega disponivel e gratuita");
            
        } else if (distanciaEntrega >5 && distanciaEntrega <=15){
            
            console.log("Entrega disponivel com taxa");
            
        } else if (distanciaEntrega >15
        ) {
            
            console.log("Entrega nao disponivel");
            
        }
        break;

    case 4:
        console.log("Tchau!");
        break;

    default:
        console.log("Opcao inavalida.");
        
        break;
}
