//find 
const produtos = [
    {Nome: 'Monitor', categoria: 'Monitores', preco: 750},
    {Nome: 'Headset', categoria: 'Audio', preco: 500}
]

let procurarProdutos = produtos.find((produtos) => {
    return produtos.preco > 500
})
