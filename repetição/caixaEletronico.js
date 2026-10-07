const readline = require('readline-sync')

do{
    console.log("Escolha uma opcao: \n 1 - Consultar saldo \n 2 - Depositar dinherio \n 3 - Sacar dinheiro \n 4 - Sair");
    let opcao = Number(readline.question("Digite a opcao desejada: "))
    let saldo = 1500
    
    if (opcao == 1){
            console.log(`Seu saldo atual é de ${saldo.toFixed(2)}`);
    (saldo >0)

    }else if (opcao == 2){
        let saque = Number(readline.question("Digite o valor do saque: "))
        (saque >0 || saldo <=1500)
    }
}while()

