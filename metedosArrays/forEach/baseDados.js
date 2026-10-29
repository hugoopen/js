const produtos =[
    {Nome: 'Mouse', categoria: 'Perifericos', preco: 50},
    {Nome: 'Teclado', categoria: 'Perifericos', preco: 120},
    {Nome: 'Monitor', categoria: 'Monitores', preco: 800},
    {Nome: 'Headset', categoria: 'Audio', preco: 180},
    {Nome: 'Webcam', categoria: 'Acessorio', preco: 150}
]

// produtos.forEach((produtos) => {
//     console.log(produtos);
// });

produtos.forEach(function(produtos) {
    console.log(produtos.Nome, produtos.preco.toFixed(2));
});


//forEach(): o opérario da esteira, item cego, percorre os elementos do início ao fim.