const jogo = {
    titulo: "Hollow Knight",
    genero: "Aventura",
    ano: 2017
};

jogo.genero = "Ação e aventura";
jogo.ano = 2020;

const exibirDetalhes = (jogo) => {
    console.log(`Titulo do jogo: ${jogo.titulo}`);
    console.log(`Genero: ${jogo.genero}`);
    console.log(`Ano: ${jogo.ano}`);
}
exibirDetalhes(jogo)



//a) falta criar a propriedade titulo dentro do objeto jogo
//b) criando a propriedade titulo dentro do objeto jogo
//c) sim, pois a propriedade não se chama anoLancamento, mas sim ano apenas.
