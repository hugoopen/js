const readline = require('readline-sync')
let opcao
do{
    console.log("===== SISTEMA ====== \n 1 - Cadastrar \n 2 - Consultar \n 3 - Relatório \n 4 - Sair");

    opcao = Number(readline.question("Digite uma opcao: "))
    
    if (opcao == 1){
        
        console.log("Cadastrar");
        
    } else if (opcao == 2){
        
        console.log("Consultar");
        
    } else if (opcao == 3){

        console.log("Relatório");
        
    } else if (opcao == 4){
        console.log("Encerramento...");
        
    } else{
        console.log("Opção Invalida");
        
    }
}while (opcao !== 4)