const readline = require("readline-sync");

const livros = [
  {
    titulo: "JavaScript para Iniciantes",
    autor: "Carlos Silva",
    categoria: "Programação",
    disponivel: true,
  },
  {
    titulo: "Python Básico",
    autor: "Ana Souza",
    categoria: "Programação",
    disponivel: true,
  },
  {
    titulo: "Banco de Dados",
    autor: "Pedro Santos",
    categoria: "Tecnologia",
    disponivel: false,
  },
];

function buscarLivro(titulo) {
  return livros.find(
    (livro) => livro.titulo.toLowerCase() === titulo.trim().toLowerCase(),
  );
}

function cadastrarLivro() {
  const titulo = readline.question("Titulo: ").trim();
  const autor = readline.question("Autor: ").trim();
  const categoria = readline.question("Categoria: ").trim();

  if (titulo === "") {
    throw new Error("O titulo não pode ficar vazio.");
  }
  if (autor === "") {
    throw new Error("O autor não pode ficar vazio.");
  }
  if (buscarLivro(titulo)) {
    throw new Error("Ja existe um livro cadastrado com esse titulo.");
  }

  livros.push({ titulo, autor, categoria, disponivel: true });
  console.log("Livro cadastrado com sucesso!");
}

function listarLivros() {
  console.log("===== BIBLIOTECA =====");
  livros.forEach((livro, indice) => {
    console.log(`${indice + 1} - ${livro.titulo}`);
    console.log(`   Autor: ${livro.autor}`);
    console.log(`   Categoria: ${livro.categoria}`);
    console.log(`   Situação: ${livro.disponivel ? "Disponível" : "Emprestado"}`,
    );
  });
}

function consultarLivro() {
  const titulo = readline.question("Titulo do livro: ").trim();

  if (titulo === "") {
    throw new Error("O titulo deve ser informado.");
  }

  const livro = buscarLivro(titulo);
  if (!livro) {
    throw new Error("Livro não encontrado.");
  }

  console.log(`Titulo: ${livro.titulo}`);
  console.log(`Autor: ${livro.autor}`);
  console.log(`Categoria: ${livro.categoria}`);
  console.log(`Situação: ${livro.disponivel ? "Disponível" : "Emprestado"}`);
}

function emprestarLivro() {
  const titulo = readline
    .question("Titulo do livro a emprestar: ")
    .trim()
    .toLowerCase();
  const livro = buscarLivro(titulo);

  if (!livro) {
    throw new Error("Livro não encontrado.");
  }
  if (!livro.disponivel) {
    throw new Error("Esse livro já está emprestado.");
  }

  livro.disponivel = false;
  console.log("Emprestimo realizado com sucesso!");
}

function devolverLivro() {
  const titulo = readline.question("Titulo do livro a devolver: ");
  const livro = buscarLivro(titulo);

  if (!livro) {
    throw new Error("Livro nao encontrado.");
  }
  if (livro.disponivel) {
    throw new Error("Esse livro não esta emprestado.");
  }

  livro.disponivel = true;
  console.log("Devolucao realizada com sucesso!");
}

function listarDisponiveis() {
  const disponiveis = livros.filter((livro) => livro.disponivel);
  console.log("===== DISPONIVEIS =====");
  if (disponiveis.length === 0) {
    console.log("Nenhum livro disponível.");
    return;
  }
  disponiveis.forEach((livro) =>
    console.log(`- ${livro.titulo} (${livro.autor})`),
  );
}

function exibirMenu() {
  console.clear();
  console.log("\n===== MENU =====");
  console.log("1 - Cadastrar livro");
  console.log("2 - Listar todos os livros");
  console.log("3 - Consultar livro");
  console.log("4 - Realizar emprestimo");
  console.log("5 - Realizar devolução");
  console.log("6 - Listar livros disponíveis");
  console.log("7 - Sair");
}

let opcao
while (opcao !== 7) {
  exibirMenu();
  opcao = readline.questionInt("Escolha uma opcao de 1 a 7: ")

  try {
    switch (opcao) {
      case 1:
        cadastrarLivro();
        break;
      case 2:
        listarLivros();
        break;
      case 3:
        consultarLivro();
        break;
      case 4:
        emprestarLivro();
        break;
      case 5:
        devolverLivro();
        break;
      case 6:
        listarDisponiveis();
        break;
      case 7:
        console.log("Encerrando o sistema...");
        break;
      default:
        throw new Error("Opção invalida!");
        break;
    }
  } catch (erro) {
    console.log(`Erro: ${erro.message}`);
  }

  if (opcao !== 7) {
    readline.question("Aperte enter para voltar ao menu!");
  }
}
