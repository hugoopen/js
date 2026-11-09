// const calculadora = require("./calculadora")


// console.log(calculadora.somar(10, 5));
// console.log(calculadora.subtrair(10, 5));
// console.log(calculadora.multiplicar(10, 5));
// console.log(calculadora.dividir(10, 5));

//Modulação com ESM
// import { somar, subtrair, multiplicar, dividir } from "./calculadora.js"

// console.log(somar(10, 5));
// console.log(subtrair(10, 5));
// console.log(multiplicar(10, 5));
// console.log(dividir(10, 5));


import { questionInt, question, cadastrarProduto, listarProdutos, buscarProduto } from "readline-sync"
while (true) {
    console.clear()
    console.log("\n ======SISTEMA DE ESTOQUE=====");
    console.log("1 - Cadastrar produtos");
    console.log("2 - Listar produtos");
    console.log("3 - Buscar produtos");
    console.log("4 - Valor total do estoque");
    console.log("5 - Quantidade total de itens");
    console.log("6 - Sair");

    const opcao = questionInt("\n Escolha uma opcao de 1 a 6: ")

    switch (opcao) {
        case 1:
            cadastrarProduto
            break;

        case 2:
            listarProdutos
            break

        case 3:
            buscarProduto
            break

        case 4:
            const total = relatorios.calcularEstoque(produtos.produtos)
            console.log(`\n Valor total do estoque: R$ ${total.toFixed(2)}`);
            break

        case 5:
            const quantidade = relatorios.quantidadeEstoque(
                produtos.produtos
            )
            console.log(`\n Quantidade total de itens: ${quantidade}`);
            break

        case 6:
            console.log("\nEncerrando o sistema...");
            process.exit()
            break
        default:
            console.log("\nOpcao invalida!");
            break;
    }
    if (opcao) {
        question ("Aperte enter para voltar ao menu.")
    }
}