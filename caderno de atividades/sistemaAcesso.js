const { question } = require("readline-sync");

let nomeUsuario
let horasTreinamento
nomeUsuario = question('Digite o seu nome:')
horasTreinamento = Number(question('Quantas horas de treinamento: '))

if (nomeUsuario.trim() === "") {
    console.log('Acesso negado, digite algo por favor! ');
} else if (horasTreinamento >= 4) {
    console.log('Acesso liberado!');
} else {
    console.log('Tenha no mínimo 4 horas de treinamento para ter acesso ao sistema.');
}