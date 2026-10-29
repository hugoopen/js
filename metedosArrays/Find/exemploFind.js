const livros = [
    {codigo: 101, titulo: 'JavaScript para Iniciantes', disponivel: true},
    {codigo: 102, titulo: 'Logica de programacao', disponivel: false},
    {codigo: 103, titulo: 'Banco de dados', disponivel: true}
]

const book = livros.find(book  => book.codigo === 102)

if (book) {
    console.log('Livro:', book.titulo);
    console.log('Disponivel:', book.disponivel ? 'estar disponivel' : 'nao estar disponivel');
}
else{
    console.log('Livro nao encontrado.');
}

