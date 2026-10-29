//find 
const produtos = [
    {Nome: 'Monitor', categoria: 'Monitores', preco: 850},
    {Nome: 'Headset', categoria: 'Audio', preco: 870}
]

let procurarProdutos = produtos.find((produto) => {
    return produto.preco > 800
})
console.log(produto.preco);
