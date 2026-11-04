const produto = {
    nome: "Notebook",
    preco: 3550,
    disponivel: true
}

// objeto original
console.log("Objeto original:");
console.log(produto);

console.log(typeof produto);

//Serialização
const produtoTexto = JSON.stringify(produto)

//resultado esperado
console.log("Objeto convertido: ");
console.log(produtoTexto);
