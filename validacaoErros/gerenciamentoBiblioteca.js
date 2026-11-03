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
    (l) => l.titulo.toLowerCase() === titulo.trim().toLowerCase(),
  );
}

function cadastrarLivro() {
  const titulo = readline.question("Título: ").trim();
  const autor = readline.question("Autor: ").trim();
  const categoria = readline.question("Categoria: ").trim();

  if (titulo === "") {
    throw new Error("O título não pode ficar vazio.");
  }
  if (autor === "") {
    throw new Error("O autor não pode ficar vazio.");
  }
  if (buscarLivro(titulo)) {
    throw new Error("Já existe um livro cadastrado com esse título.");
  }

  livros.push({ titulo, autor, categoria, disponivel: true });
  console.log("Livro cadastrado com sucesso!");
}

function listarLivros() {
  console.log("===== BIBLIOTECA =====");
  livros.forEach((livro, i) => {
    console.log(`${i + 1} - ${livro.titulo}`);
    console.log(`   Autor: ${livro.autor}`);
    console.log(`   Categoria: ${livro.categoria}`);
    console.log(
      `   Situação: ${livro.disponivel ? "Disponível" : "Emprestado"}`,
    );
  });
}

function consultarLivro() {
  const titulo = readline.question("Título do livro: ").trim();

  if (titulo === "") {
    throw new Error("O título deve ser informado.");
  }

  const livro = buscarLivro(titulo);
  if (!livro) {
    throw new Error("Livro não encontrado.");
  }

  console.log(`Título: ${livro.titulo}`);
  console.log(`Autor: ${livro.autor}`);
  console.log(`Categoria: ${livro.categoria}`);
  console.log(`Situação: ${livro.disponivel ? "Disponível" : "Emprestado"}`);
}

function emprestarLivro() {
  const titulo = readline.question("Título do livro a emprestar: ");
  const livro = buscarLivro(titulo);

  if (!livro) {
    throw new Error("Livro não encontrado.");
  }
  if (!livro.disponivel) {
    throw new Error("Esse livro já está emprestado.");
  }

  livro.disponivel = false;
  console.log("Empréstimo realizado com sucesso!");
}

function devolverLivro() {
  const titulo = readline.question("Título do livro a devolver: ");
  const livro = buscarLivro(titulo);

  if (!livro) {
    throw new Error("Livro não encontrado.");
  }
  if (livro.disponivel) {
    throw new Error("Esse livro não está emprestado.");
  }

  livro.disponivel = true;
  console.log("Devolução realizada com sucesso!");
}

function listarDisponiveis() {
  const disponiveis = livros.filter((livro) => livro.disponivel);
  console.log("===== DISPONÍVEIS =====");
  if (disponiveis.length === 0) {
    console.log("Nenhum livro disponível.");
    return;
  }
  disponiveis.forEach((livro) =>
    console.log(`- ${livro.titulo} (${livro.autor})`),
  );
}

function exibirMenu() {
  console.log("\n===== MENU =====");
  console.log("1 - Cadastrar livro");
  console.log("2 - Listar todos os livros");
  console.log("3 - Consultar livro");
  console.log("4 - Realizar empréstimo");
  console.log("5 - Realizar devolução");
  console.log("6 - Listar livros disponíveis");
  console.log("7 - Sair");
}

let opcao = "";

while (opcao !== "7") {
  exibirMenu();
  opcao = readline.question("Escolha uma opção: ").trim();

  try {
    switch (opcao) {
      case "1":
        cadastrarLivro();
        break;
      case "2":
        listarLivros();
        break;
      case "3":
        consultarLivro();
        break;
      case "4":
        emprestarLivro();
        break;
      case "5":
        devolverLivro();
        break;
      case "6":
        listarDisponiveis();
        break;
      case "7":
        console.log("Encerrando o sistema...");
        break;
      default:
        throw new Error("Opção inválida!");
    }
  } catch (erro) {
    console.log(`Erro: ${erro.message}`);
  }
}
