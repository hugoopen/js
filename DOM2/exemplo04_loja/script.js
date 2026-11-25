const btnSaudar = document.getElementById("btnSaudar")
const nome = document.getElementById("nome")
const mensagem = document.querySelector("#mensagem")

btnSaudar.addEventListener("click", () => {
    const nomeCliente = nome.value.trim()
    if (nomeCliente === "") {
        mensagem.textContent = "Por favor, digite o seu nome!"
    } else {
        mensagem.textContent = `Olá, ${nomeCliente}! Seja bem-vindo à nossa loja!`
    }
})

const titulo = document.querySelector("#titulo")
const btnTitulo = document.getElementById("btnTitulo")

btnTitulo.addEventListener("click", () => {
    titulo.textContent = "Ofertas TechStore"
})

const primeiroCard = document.querySelector(".card")
const btnPrimeiro = document.getElementById("btnPrimeiro")

btnPrimeiro.addEventListener("click", () => {
    primeiroCard.classList.toggle("destaque")
})

const cards = document.querySelectorAll(".card")
const btnTodos = document.getElementById("btnTodos")

btnTodos.addEventListener("click", () => {
    cards.forEach((card) => {
        card.classList.add("destaque")
    })
})

const btnRemover = document.getElementById("btnRemover")
btnRemover.addEventListener("click", () => {
    cards.forEach((card) => {
        card.classList.remove("destaque")
    })
})
