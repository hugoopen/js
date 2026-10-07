const { question } = require("readline-sync");
let saldo = 1500
let opcao;
let depositarDinheiro;
let valorSaque;


while (opcao !== 4) {
    console.clear
    console.log("===== Caixa Eletronico ===== ");
    console.log("1. Consultar saldo");
    console.log("2. Depositar dinheiro");
    console.log("3. Sacar dinheiro");
    console.log("4. Sair");

    opcao = Number(question("Escolha uma opcao:  "))
    

    switch (opcao) {
        case 1:
            if(saldo > 0){
                console.log(`O seu saldo atua é de R$: ${saldo}`);
                question("\n Precione enter para voltar ao menu.")
            }
            break;

        case 2: 
            depositarDinheiro = Number(question("Deposite o valor necessario: "))
            
            if  (depositarDinheiro >0) {
            saldo = saldo + depositarDinheiro
                console.log("O deposito foi efetuado com sucesso!");
                question("\n Precione enter para voltar ao menu.")
            }
            break;

        case 3: 
            valorSaque = Number(question("Digite o valor do saque:"))
            if ( valorSaque >0 && valorSaque <=saldo) {
                console.log("Saque efetuado com sucesso!");
                question("\n Precione enter para voltar ao menu.")
            }
            break;
            
        case 4:
            console.log("Saindo do sistema...");
            question("\n Precione enter para sair do sistema")
            break;
            
        default:
            console.log("Informe uma opcao que exista no menu!");
            break;
    }
    
} 

