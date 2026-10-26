const equipamento ={
    nome: 'Monitor',
    marca: 'Dell',
    preco: 988.90,
    estoque: 12,
    funcionando: true
}

//modificar
equipamento.estoque = 8,
equipamento.funcionando = false

//printar informações no terminal
console.log(`Nome: ${equipamento.nome}`);
console.log(`Marca: ${equipamento.marca}`);
console.log(`Preco: ${equipamento.preco.toFixed(2)}`);
console.log(`Quantidade em estoque: ${equipamento.estoque}`);
console.log(`Funcionado: ${equipamento.funcionando? 'sim' : 'não'}`);
