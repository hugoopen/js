//const entrada = require("./entrada")
import { perguntarNumero, perguntarTexto } from "./entrada"
const produtos = []


export function cadastrarProduto() {
    console.log("\n === CADASTRO PRODUTOS===");
    const nome = perguntarTexto("Nome:").trim()
    const preco = perguntarTexto("Preco: ").trim()
    const quantidade = perguntarNumero("Quantidade: ").trim()

    const produto = {
        nome: nome,
        preco: preco,
        quantidade: quantidade
    }

    produtos.push(produto)

    console.log("\nProduto castrado com sucesso!");
}

export function listarProdutos() {
    console.log("\n====== PRODUTO ATUAL======");

    if (produtos.length === 0) {
        console.log("Nenhum produto");
        return
    }
    produtos.forEach(produto => {
        console.log(`\nNome: ${produto.nome}`);
        console.log(`Preco: ${produto.preco}`);
        console.log(`Quantidade: ${produto.quantidade}`);
    });
}

export function buscarProduto() {
    const nome = perguntarTexto(
        "\nDigite o nome do produto: "
    )
    const produtoEncontrado = produtos.find(produto =>
        produto.nome.toLowerCase() === nome.toLowerCase()
    );

    if (produtoEncontrado) {
        console.log("\nProduto Encontrado!");
        console.log(produtoEncontrado);
    } else {
        console.log("\nProduto nao encontrado.");
    }

}
// module.exports = {
//     cadastrarProduto,
//     listarProdutos,
//     buscarProduto,
//     produtos
// }