const readline = require('readline');

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite sua idade:", (idade) => {

    idade = Number(idade);

    if(idade >=18){
        console.log("Você é maior de idade.");
    } else {
        console.log("Você é menor de idade.");
    }
})
entrada.close();