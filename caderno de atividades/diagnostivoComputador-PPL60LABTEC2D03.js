const { question } = require("readline-sync");
const perguntas = [
    'Seu computador esta ligando? Digite sim ou nao:',
    'Sua conexao de rede esta funcionado? Digite sim ou nao:',
    'Voce esta conseguindo acessar o sistema? Digite sim ou nao:'
]

const dicas = [
    'Computador: verifique o cabo de energia e a tomada',
    'Rede: verifique o cabo de rede ou o Wi-Fi e reinicie o roteador.',
    'Sistema: confira seu usuário e senha ou procure o suporte'
]

const respostas = []

for (let i = 0; i < perguntas.length; i++) {
    respostas[i] = question(perguntas[i]) === "sim"
}

for (let i = 0; i < dicas.length; i++) {
    if(!respostas[i]){
        console.log(dicas[i]);
    }
}