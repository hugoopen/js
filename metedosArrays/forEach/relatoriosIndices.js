const produtos =[
    {Nome: 'Mouse', preco: 50},
    {Nome: 'Teclado', preco: 120},
    {Nome: 'Monitor', preco: 800}
]

produtos.forEach((produtos, i) => {
    console.log(`${i+1} - ${produtos.Nome} | ${produtos.preco.toFixed(2)}`); 
});