const livro = {
    titulo: 'O Hobbit',
    autor: 'J.R.R. Tolkien',
    ano: 1959,
    disponivel: true
}
const exibirLivro = (livro) => {
    console.log('===== DADOS LIVROS ======');
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano: ${livro.ano}`);
    console.log(`Diposnivel: ${livro.disponivel}`);
}
exibirLivro(livro)


console.log(livro.titulo);
console.log(livro.autor);

livro.anoPublicacao = 1938
livro.disponivel = false

exibirLivro(livro)
console.log(`O livro "${livro.titulo}", de ${livro.autor}, está ${livro.disponivel ? 'disponivel' : 'emprestado'}`);

