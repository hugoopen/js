    const produtos = ['Teclado', 'Mouse', 'Monitor', 'Notebook', 'Webcam']
    let total = 0
    const quantidade = [12, 3, 0, 7, 2]
    let contadorProdutoReposicao = 0

    // 1. Exibir os produtos e seu estoque
    for (let i = 0; i < produtos.length; i++) {
        console.log(` ${produtos [i]}, sua quantidade de estoque e  ${quantidade[i]} `);
    }

    // 2.Verificar produto sem estoque
    for (let i = 0; i < produtos.length; i++) {
        if (quantidade[i] <=0){
            contadorProdutoReposicao++
            console.log(`O ${produtos[i]} estar sem estoque.`);
        }
    }
        
    // 3. Verificar estoque dos produtos
    for (let i = 0; i < produtos.length; i++) {
        if (quantidade[i] >0 && quantidade[i] <= 3)
            contadorProdutoReposicao++
            console.log(`Atencao: ${produtos[i]} estar com o estoque baixo.`);
    }

    // 4.Calcular e exibir a qauntidade total disponível no estoque
    for (let i = 0; i < quantidade.length; i++) {
        total += quantidade[i]
    } console.log(`A quantidade total de unidades disponivel é de ${total}. `);

    // 5. Reposição de produtos, contando tanto os que estão sem estoque e os que possuem estoque baixo.
        console.log(`Ha ${contadorProdutoReposicao} produtos que precisam de reposicao.`);

    