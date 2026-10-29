const produtos = [
    {nome: 'Mouse', preco: 50, quantidade: 10}, 
    {nome: 'Teclado', preco: 120, quantidade: 5}, 
    {nome: 'Monitor', preco: 800, quantidade: 3}, 
]

const valorEstoqueTotal = produtos.reduce((total, produto) =>{
    return total + produto.preco * produto.quantidade
},0)

console.log('Este é o valor total do estoque de produtos: R$ ',valorEstoqueTotal);
