const { question } = require("readline-sync")


const livros = [
    {
        titulo: "JavaScript para Iniciantes",
        autor: "Carlos Silva",
        categoria: "Programação",
        disponivel: true
    },
    {
        titulo: "Python Básico",
        autor: "Ana Souza",
        categoria: "Programação",
        disponivel: true
    },
    {
        titulo: "Banco de Dados",
        autor: "Pedro Santos",
        categoria: "Tecnologia",
        disponivel: false
    }
]

function cadastrarLivro(titulo, autor, categoria, disponiveis) {
    return livros.push({
        titulo: titulo,
        autor: autor,
        categoria: categoria,
        disponivel: true
    })
}

function listarLivros(livro) {
    return livros.every(livro => livro.titulo.toLowerCase() === livro.titulo.toLocaleLowerCase)
}

function consultarLivro(livro) {
    return livros.find((consultar) => consultar.livro.toLowerCase === livro.toLowerCase())
}

function emprestarLivro(livro) {
    return livros.find(livro => livro.titulo.toLowerCase() === livro.titulo)
}

function devolverLivro() {
    return livros.filter(livro => livro.titulo.toLowerCase() === emprestarLivro.toLowerCase())
}

function avisoSituacao(livro) {
    livro.disponivel ? 'Emprestado com sucesso' : 'Ja esta emprestado'
}

const exibirMenu = () => {
    console.log('1 - Cadastrar livro');
    console.log('2 - Listar todos os livros');
    console.log('3 - Consultar livro');
    console.log('4 - Realizar emprestimo');
    console.log('5 - Realizar devolucao');
    console.log('6 - Listar livros disponiveis');
    console.log('7 - Sair');
}

function cadastrarLivro(nome, autoNome) {
    const nome = question('Digite o tiulo que deseja cadastrar: ').trim()
    const autoNome = question('Digite o nome do autor: ')
    const livro = listarLivros(nome, autoNome)
    try {
        if (nome.trim() === '') {
            throw new Error('O titulo nao pode ficar vazio')
        }

        if (autoNome.trim() === '') {
            throw new Error('Autor nao pode ficar vazio')
        }

        if (nome === livros.titulo) {
            throw new Error('O titulo nao pode ser igual aos dos outros livros ')
        }

        console.log(`Livro adicionado com sucesso!`);

    } catch (erro) {
        console.error(`Erro: ${erro.message}`);
    }
}

function listarLivros(titulo, autor, categoria, disponiveis, indice) {
    console.log('===== BIBLIOTECA =====')
    livros.forEach((livro, indice) => {
        console.log(`${indice + 1} - ${livro.titulo}`);
        console.log(`Autor: ${livro.autor}`);
        console.log(`Categoria: ${livro.categoria}`);
        console.log(`Situacao: ${livro.disponivel? 'Disponivel' : 'Ja esta emprestado'}`);
    });
}

function consultarLivro(){
    const livroProcurado = question('Digite o nome do livro que deseja pesquisar: ')
    const livroEncontrado = consultarLivro(livroProcurado)
}
