const { question } = require("readline-sync");

let nomes = ['Hugo', 'Daniel', 'Gabriel', 'Matheus', 'Yasmin']
// 1. Exibir todos os nomes já cadastrados, juntamente com sua posição
for (let i = 0; i < nomes.length; i++) {
    console.log(`Os nomes sao ${nomes[i]} e sua posicao é ${i}`);
}
// 2. Pedir ao usuário entrada de dados, no caso, o nome que deseja adicionar a lista.
let novoNome
novoNome = question("\nDigite o nome que deseja adicionar:")
console.log("Nome adicionado com sucesso!");
// 3. Adicionar o novoNome utilizando o push e percorrer a lista com a atualização.
nomes.push(novoNome)
console.log(nomes)

// 4. Quais nomes contém mais de 5 caracteres e quais são esses nomes
for (let i = 0; i < nomes.length; i++) {
    if (nomes[i].length >5  ) {
        
        console.log(`Este nome ${nomes[i]} possuem mais de 5 caracteres`);
        
    }
// 5. Exibir a quantidade de nomes cadastrados ao final
} console.log(nomes);





