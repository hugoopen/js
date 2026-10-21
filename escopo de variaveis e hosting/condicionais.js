let produto = {
    nome: 'Mouse Gamer',
    preco: 180,
    estoque: 5
}

if (produto.estoque > 0){
    console.log(`${produto.nome} está disponivel`);
} else{
    console.log(`${produto.nome} está esgotadoo`);
}