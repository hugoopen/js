let animais = ["Gato", "Cachorro", "Coelho", "Papagaio"];
for (let i = 0; i < animais.length; i++) {
 console.log(`${i + 1} - ${animais[i]}`);
}

// <= ele tentava rodar 5 vezes, porem o indice 5 nao existe, por isso que devemos usar o menor que, pois vai até os indices válidos do array.