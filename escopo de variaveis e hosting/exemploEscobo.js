livro = {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R Tolkein',
    ano: 1937
}


let propriedade = 'titulo'
console.log(livro.titulo)
livro.titulo = 'Dom Quixote'
console.log(livro.titulo)
delete livro.titulo
console.log(livro);



let propriedade2 = 'autor'
console.log(livro.autor)
livro.autor = 'Machado de Assis'
console.log(livro.autor);


let propriedade3 = 'ano'
console.log(livro.ano)
livro.ano = 1605
console.log(livro.ano);


livro.titulo = 'Dom Quixote'
console.log(livro);









// let propriedade = 'titulo'
// console.log(livro[propriedade]);

// let propriedade2 = 'autor'
// console.log(livro[propriedade2]);

// let propriedade3 = 'ano'
// console.log(livro[propriedade3]);

