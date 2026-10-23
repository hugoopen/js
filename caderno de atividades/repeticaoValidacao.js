const readline = require("readline-sync");
const senhaCorreta = "js2026";
let senhaDigitada = "";
while (true) {
    senhaDigitada = readline.question("Digite a senha: ");
    if (senhaDigitada === senhaCorreta) {
        console.log("Acesso autorizado!");
        break;
    } else {
        console.log("Senha incorreta. Tente novamente.");
    } 
}