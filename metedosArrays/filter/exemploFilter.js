const produtos = [
    {nome: 'Mouse', preco: 50},
    {nome: 'Teclado', preco: 120},
    {nome: 'Monitor', preco: 850},
    {nome: 'Webcam', preco: 150}
]

const produtosAcessiveis = produtos.filter(produto => {
    return produto.preco <= 150
})

console.log(produtosAcessiveis);


