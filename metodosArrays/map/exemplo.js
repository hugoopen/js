const produtos = [
    {nome: 'Mouse', preco: 120},
    {nome: 'Teclado', preco: 200},
    {nome: 'Monitor', preco: 1000},
]

const produtoComDesconto = produtos.map(produto => {
    return{
        nome: produto.nome,
        precoOriginal: produto.preco,
        precoFinal: produto.preco * 0.9
    }
})

console.log(produtoComDesconto);
