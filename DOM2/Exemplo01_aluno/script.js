const nome = document.getElementById("nome")
const mensagem = document.getElementById("mensagem")
const btnNome = document.getElementById("btnNome")
const btnMensagem = document.getElementById("btnMensagem")

btnNome.addEventListener("click", () => {
    nome.textContent = "hugoopen";
    nome.classList.add("nome-alterado")

})

btnMensagem.addEventListener("click", () => {
    mensagem.innerHTML =
        "<p>Seja bem-vindo, <strong>estudante!</strong></p>"
   
})
