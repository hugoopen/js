const btnTema = document.getElementById("btnTema")
btnTema.addEventListener("click", function() {
    document.body.classList.toggle("tema-escuro")
})

const listarLivro = document.getElementById("listaLivros")
fetch("livros.json")
    .then(response => response.json())
    .then(livros => {
        let lista = ""
        livros.forEach(livro => {
            lista += `<li>${livro.}`
        });
    })