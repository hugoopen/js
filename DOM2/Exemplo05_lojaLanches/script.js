const btnTema = document.querySelector("#btnTema")
btnTema.addEventListener("click", function(){
    document.body.classList.toggle("escuro")
})

const selectProduto = document.querySelector("produto")
const inputQuantidade = document.querySelector("quantidade")
const btnCalcular = document.querySelector("btnCalcular")
const resultado = document.querySelector("resultado")