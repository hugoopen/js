const btnTema = document.querySelector("#btnTema")
btnTema.addEventListener("click", function () {
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
    return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
}

function adicionarLinha(texto) {
    const p = document.createElement("p")
    p.textContent = texto
    resumo.appendChild(p)
}

function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto
    mensagem.classList.remove("sucesso", "erro")
    if (tipo) {
        mensagem.classList.add(tipo)
    }
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

    const opcao = selectProduto.options[selectProduto.selectedIndex]
    const nomeProduto = opcao.text.split(" - ")[0]

    const total = preco * quantidade

    // resumo
    resumo.innerHTML = ""
    adicionarLinha(`Cliente: ${cliente}`)
    adicionarLinha(`Produto: ${nomeProduto}`)
    adicionarLinha(`Quantidade: ${quantidade}`)
    adicionarLinha(`Valor unitário: ${formatoReal(preco)}`)
    adicionarLinha(`Total: ${formatoReal(total)}`)

    mostrarMensagem("Pedido calculado com sucesso!", "sucesso")
    resultado.classList.remove("oculto")
})

btnLimpar.addEventListener("click", () => {
    inputCliente.value = ""
    selectProduto.value = ""
    inputQuantidade.value = ""
    mostrarMensagem("")
    resumo.innerHTML = ""
    resultado.classList.add("oculto")
    inputCliente.focus()
})