const readline = require ('readline-sync')

let  usuario = readline.question("Digite o seu nome de usuario: ")
let  senha = readline.question("Digite a sua senha: ")

while (senha !== "2006" || usuario !== "Hugo Silva"){
    
    if(usuario !== "Hugo Silva") {
        console.log("Usuario errado, apenas senha estar correto.");  
        usuario = readline.question("Digite o nome do seu usuario novamente: ") 
    } else if(senha !== "2006"){
        console.log("Senha incorreta, apenas usuario estar correto.");
        senha = readline.question("Digite sua senha novamente: ");
    }  else{
        console.log("Usuario e senha estão errados! 😁");
        
    }
} 
console.log("Senha estar correta e usuario também!");


