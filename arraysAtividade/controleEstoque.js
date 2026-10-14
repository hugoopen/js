const produtos = ['Teclado', 'Mouse', 'Monitor', 'Notebook', 'Webcam']

const quantidade = [12, 3, 0, 7, 2]

// 1. Exibir os produtos e seu estoque
for (let i = 0; i < produtos.length; i++) {
    
    console.log(` ${produtos [i]}, sua quantidade de estoque e  ${quantidade[i]} `);
    
}