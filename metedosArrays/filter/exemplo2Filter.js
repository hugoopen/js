const livros = [
    {titulo: 'JavaScript', disponivel: true},
    {titulo: 'Python', disponivel: false},
    {titulo: 'Banco de dados', disponivel: true},
    {titulo: 'Redes de Computadores', disponivel: false},
]

const livroDisponivel = livros.filter(livro => {
    return livro.disponivel === true
})

console.log(livroDisponivel);

console.log('   ===== Livros Disponiveis =====');
livroDisponivel.forEach(livro =>  {
    console.log(`Estes são os livros disponiveis:`,livro.titulo);
});
