const btnTema = document.querySelector("#btnTema")
btnTema.addEventListener("click", function(){
    document.body.classList.toggle("escuro")
})

const inputCliente = document.getElementById("cliente")
const selectProduto = document.getElementById("produto")
const inputQuantidade = document.getElementById("quantidade")
const btnCalcular = document.getElementById("btnCalcular")
const btnLimpar = document.getElementById("btnLimpar")
const mensagem = document.getElementById("mensagem")
const resultado = document.getElementById("resultado")
const resumo = document.getElementById("resumo")

function formatoReal(valor) {
    return valor.toLocaleString("pt-br", {style: "currency", currency: "BRL"})
}

function adicionarLinha(texto) {
    const p = document.createElement("p")
    p.textContent = texto
    resumo.appendChild(p)
}

btnCalcular.addEventListener("click", () => {
    const cliente = inputCliente.value.trim()
    const preco = Number(selectProduto.value)
    const quantidade = Number(inputQuantidade.value)


    if (cliente === "") {
        mostrarMensagem("Digite o nome do cliente!", "erro")
        return
    }

    if (selectProduto.value === "") {
        mostrarMensagem("Selecione um produto!", "erro")
        return
    }

    if (!Number.isInteger(quantidade) || quantidade < 1) {
        mostrarMensagem("Digite uma quantidade válida!", "erro")
        return
    }
})


