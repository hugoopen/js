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
    console.clear()
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
            const resultadoLivro = livros.find(livro => livro.titulo.toLowerCase().trim() === pesquisarLivro)
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
            livroDisponivel
            .forEach( livro => console.log(`Livro: ${livro.titulo} | Disponivel: ${livro.disponivel ? 'esta disponivel' : 'nao esta disponivel'}`))
            break;

        case 3:
            const pesquisarAutor = question('Digite o nome do autor que procura:').trim().toLowerCase()
            const resultadoAutor = livros.filter(livro => livro.autor.trim().toLowerCase()  === pesquisarAutor )
            if (resultadoAutor) {
                resultadoAutor.forEach(livro => {
                    console.log(`Ano: ${livro.ano} - Titulo: ${livro.titulo}`);
                    
                });
            } else{
                console.log('Autor nao encontrado.');
            }
            break

        case 4:
            const livroIndiponivel = livros.some(livro => livro.disponivel === false)
            if (livroIndiponivel) {
                console.log('Livros indisponiveis: ');
                
                livros
                .filter(livro => livro.disponivel === false)
                .forEach(livro => 
                    console.log(`Livro: ${livro.titulo} | Disponivel: ${livro.disponivel ? 'esta disponivel' : 'nao esta disponivel'}`))
            } else {
                console.log('Todos os livros disponiveis');
            }
            break

        case 5: 
            const verificarLivroDisponivel = livros.every(livro => livro.disponivel === true)
            if (verificarLivroDisponivel) {
                console.log('Livros nao estao disponivel')
            }else{
                console.log('Livros disponiveis:');
            }
            livros
            .filter(livro => livro.disponivel === true)
            .forEach(livro => 
                console.log(`Livro ${livro.titulo} | Disponivel: ${livro.disponivel ? 'esta disponivel' : 'nao esta disponivel'}`))
            break

        case 6:
            const qualAutor = question('Digite o nome do autor: ').trim().toLowerCase()

            const criarLista = livros
            .filter(livro => livro.autor.toLowerCase() === qualAutor)
            .map(livro => {
                return{
                    titulo: livro.titulo,
                    autor: livro.autor
                }
            })
            if (criarLista.length === 0) {
                console.log('Autor e suas obras nao foram encntrados');
            }else{
                criarLista.forEach(livro =>{
                    console.log(`${livro.titulo} - ${livro.autor}`);
                })
            }
            break

        case 7: 
        const quantidadeTotalPaginas = livros.reduce((total, livro) => {
            return total + livro.paginas
        }, 0)
        console.log(`Este é o total de paginas do catalogo: ${quantidadeTotalPaginas}`);
        break
        default:
            break;
    }
    question('Aperte enter para voltar ao menu')
}