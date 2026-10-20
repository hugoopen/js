const { question } = require("readline-sync");
let repeticao
const calcularArea = (comprimentoTerreno, larguraTerreno) =>
    comprimentoTerreno * larguraTerreno;

const classificarArea = (areaTotal) =>
    areaTotal < 200 ? "Terreno pequeno!"
    : areaTotal < 500 ? "Terreno médio"
    : "Terreno grande";

const calcularPrecoEstimado = (areaTotal, valorMetroQuadrado) =>
    (areaTotal * valorMetroQuadrado) / 2;

const classificarPorValor = (precoEstimado) =>
    precoEstimado < 50000 ? "Acessível"
    : precoEstimado < 150000 ? "Intermediário"
    : "Alto Valor";
    console.log("===== CALCULADORA DE PRECIFICAÇÃO E VALORIZAÇÃO DO TERRENO =====");
do {    
                const nome = question("Digite o seu nome: ");
                const comprimentoTerreno = Number(question("Digite o comprimento do terreno (m): "));
                const larguraTerreno = Number(question("Digite a largura do terreno (m): "));
                const valorMetroQuadrado = Number(question("Digite o valor do metro quadrado (R$): "));
                
                const areaTotal = calcularArea(comprimentoTerreno, larguraTerreno);
                const classificacaoArea = classificarArea(areaTotal);
                const precoEstimado = calcularPrecoEstimado(areaTotal, valorMetroQuadrado);
                const classificacaoValor = classificarPorValor(precoEstimado);
                
                console.log("\n===== DADOS INFORMADOS =====");
                console.log(`Nome: ${nome}`);
                console.log(`Comprimento: ${comprimentoTerreno} m`);
                console.log(`Largura: ${larguraTerreno} m`);
                console.log(`Valor do m²: R$ ${valorMetroQuadrado.toFixed(2)}`);
                
                console.log("\n===== RESULTADO =====");
                console.log(`Área total: ${areaTotal} m²`);
                console.log(`Classificação da área: ${classificacaoArea}`);
                console.log(`Preço estimado: R$ ${precoEstimado.toFixed(2)}`);
                console.log(`Classificação por valor: ${classificacaoValor}`);
                
                repeticao = question('\nDeseja fazer algum outro calculo: ');
} while (['sim', 's', 'yes'].includes(repeticao.toLowerCase()))
console.log('Sistema encerrado');

