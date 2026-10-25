function validarNome(nome) {
    return nome.trim().length >= 3
}

let nomes = ["Ana", "Joao", "Li"]

for (let i = 0; i < nomes.length; i++) {
    if (validarNome(nomes[i])) {
        console.log(`${nomes[i]}: pode continuar`);
    } else{
        console.log(`${nomes[i]}: nome invalido`);
    }
}