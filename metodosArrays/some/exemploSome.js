const produtos = [
    {nome: 'Mouse', preco: 50, promocao: false},
    {nome: 'Teclado', preco: 120, promocao: true},
    {nome: 'Monitor', preco: 850, promocao: false}
]

const verificarPromocao = produtos.some(produto => {
    return produto.promocao === true
})

console.log('Existe promocao?', verificarPromocao);



