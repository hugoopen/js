const entrada = require('readline-sync')

let resultado = [5, 12, 23, 34, 45, 58]

let aposta = []

console.log("===== MINHA APOSTA DA MEGA-SENA =====");

while (aposta.length < 6) {

    let numero = Number(
        entrada.question("Digite um numero entre 1 a 60: ")
    )

    if (numero < 1 || numero > 60 || !Number.isInteger(numero)) {

        console.log("Numero invalido! Digite um inteiro entre 1 e 60.");

    } else if (aposta.indexOf(numero) !== -1) {

        console.log("Voce ja escolheu esse numero! Digite outro!");

    } else {
        aposta.push(numero)

        console.log("Numero registrado!");

    }
}

console.log("\n===== SUA APOSTA =====");
console.log(aposta);

console.log("\n===== RESULTADO DO SORTEIO =====");
console.log(resultado);

// 4. Comparar os numeros das duas listas 
let acertos = 0
let numerosacertados = []

for (let i = 0; i < aposta.length; i++) {

    for (let j = 0; j < resultado.length; j++) {

        if (aposta[i] === resultado[j]) {

            acertos++;

            numerosacertados.push(aposta[i])

        }

    }

    console.log("\n =====RESULTADO DA APOSTA=====");

    if (acertos > 0) {

        console.log("Numeros acertados");

        for (let i = 0; i < numerosacertados.length; i++) {

            console.log(numerosacertados[i]);

        }
    } else {

        console.log("Voce nao acertou nenhum numero");

    }

    console.log("\n =====Total de acertos =====");
    console.log(acertos);
    

}

if (acertos === 6) {

    console.log("Parabens! Voce acertou a SENA!");

} else if (acertos === 5) {

    console.log("Parabens! Voce acertou a QUINA!");

} else if (acertos === 4) {

    console.log("Parabens! Voce acertou a QUADRA!");

} else {

    console.log("Voce nao acertou nenhum numero.");

}

console.log("\n Total de acertos: " + acertos);




