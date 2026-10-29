const produtos = [
    {nome: 'Mouse', categoria: 'Períferico', preco: 50, estoque: 4},
    {nome: 'Teclado', categoria: 'Períferico', preco: 120, estoque: 10},
    {nome: 'Monitor', categoria: 'Monitores', preco: 800, estoque: 2},
    {nome: 'Webcam', categoria: 'Acessório', preco: 150, estoque: 6},
    {nome: 'Headset', categoria: 'Áudio', preco: 180, estoque: 0}
]

let opcao 

console.log('1 - Pesquisar produto específico: ');
console.log('2 - Filtrar produtos com estoque baixo');
console.log('3 - Existe produto sem estoque');
console.log('4 - Todos os produtos possuem estoque');
console.log('5 - Criar lista com o nome e o valor total do produto');
console.log('6 - Calcular o valor total do estoque');
console.log();
console.log();
