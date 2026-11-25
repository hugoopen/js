const titulo = document.getElementById("titulo")
const btnAlterarNome = document.getElementById("btnAlterarTema")

btnAlterarNome.addEventListener("click", () => {
    document.body.classList.toggle("tema-escuro")
})

const btnDestacarTema = document.querySelector("#btnDestacarTema")
btnDestacarTema.addEventListener("click", () => {
    titulo.classList.add("destaque")
})

const btnRemoverDestaque = document.querySelector("#btnRemoverDestaque")
btnRemoverDestaque.addEventListener("click", () => {
    titulo.classList.remove("destaque")
})