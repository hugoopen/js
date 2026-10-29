const produtos = [
    {nome: 'Mouse', estoque: 10},
    {nome: 'Teclado', estoque: 5},
    {nome: 'Mouse', estoque: 3},
]

const todosDisponiveis = produtos.every(produto => {
    return produto.estoque > 0
})

console.log('Todos disponiveis?', todosDisponiveis);
