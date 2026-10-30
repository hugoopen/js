const { question, questionInt } = require("readline-sync");

const livros = [
    {
        titulo: "JavaScript: O Guia Definitivo",
        autor: "David Flanagan",
        categoria: "Programacao",
        ano: 2022,
        disponivel: true,
        paginas: 700
    },
    {
        titulo: "Clean Code",
        autor: "Robert Martin",
        categoria: "Programacao",
        ano: 2009,
        disponivel: false,
        paginas: 425
    },
    {
        titulo: "O Hobbit",
        autor: "J.R.R. Tolkien",
        categoria: "Fantasia",
        ano: 1937,
        disponivel: true,
        paginas: 310
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        categoria: "Ficcao",
        ano: 1949,
        disponivel: false,
        paginas: 328
    },
    {
        titulo: "A Revolucao dos Bichos",
        autor: "George Orwell",
        categoria: "Ficcao",
        ano: 1945,
        disponivel: true,
        paginas: 152
    }
];

let opcao

while (opcao !== 10) {
    console.log('1 - Encontrar livro');
    console.log('2 - Listar livros disponiveis');
    console.log('3 - Pesquisar todos os livros de um determinado autor');
    console.log('4 - Existe livro indisponivel');
    console.log('5 - Verificar todos os livros disponiveis');
    console.log('6 - Criar lista com apenas titulo e autor');
    console.log('7 - Calcular a quantidade total de paginas do catalogo');
    console.log('8 - Ordenar os livros pelo ano de publicacao');
    console.log('9 - Relatorio completo');
    console.log('10 - Sair');

    opcao = questionInt('Escolha uma opcao de 1 a 10: ')

    switch (opcao) {
        case 1:
            const pesquisarLivro = question('Digite o nome do livro que procura: ').trim().toLowerCase()
            const resultadoLivro = livros.find(livro => livro.titulo.toLowerCase() === pesquisarLivro)
            if (resultadoLivro) {
                console.log(`Este é o livro que procura: ${resultadoLivro.titulo} - ${resultadoLivro.autor} | ${resultadoLivro.disponivel ? 'esta disponivel' : 'nao esta disponivel'}`);
            } else {
                console.log(`Livro nao foi encontrado`);
            }
            break
        case 2: 
            const livroDisponivel = livros.filter(livro => {
                return livro.disponivel === true
            })
            console.log(livroDisponivel);
            break;

        case 3:
            
        default:
            break;
    }
}