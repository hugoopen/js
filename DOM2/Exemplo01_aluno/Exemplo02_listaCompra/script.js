const primeiroProduto = document.querySelector(".produto")
const btnDestacar = document.getElementById("btnDestacar")

btnDestacar.addEventListener("click", () =>{
    primeiroProduto.classList.add("destaque")
})
console.log(primeiroProduto);

const btnContar = document.getElementById("btnContar")
const contarProdutos = document.querySelectorAll(".produto")
const resultado = document.getElementById("resultado")

btnContar.addEventListener("click", () => {
    resultado.textContent = `A lista contém ${contarProdutos.length} produtos.`
})
console.log(resultado);
