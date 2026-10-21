function exibirLivro(livros) {
    console.log('===== DADOS LIVROS ======');
    console.log(`Título: ${livros.titulo}`);
    console.log(`Autor: ${livros.autor}`);
    console.log(`Ano: ${livros.ano}`);
}

let meuLivro = [
    {
        titulo: 'Dom Casmurro',
        autor: 'Machado de Assis',
        ano: 1899
    },

    {
        titulo: 'Revolução dos Vilões',
        autor: 'Brian Buccellato, Francis Manapul',
        ano: 2024
    },

    {
        titulo: 'Senhor dos Anéis',
        autor: 'J.R.R Tolkien',
        ano: 1959
    }
]
// for (let i = 0; i < meuLivro.length; i++) {
//     console.log(meuLivro[i].titulo);
// }

console.log(meuLivro[0].titulo);
