const readline = require('readline-sync')

let senha = readline.question("Digite sua senha: ")

while (senha !== "1234"){

    console.log("Senha incorreta! Tente novamente");

    senha = readline.question("Digite sua senha: ")
    
}

console.log("Senha correta!");
