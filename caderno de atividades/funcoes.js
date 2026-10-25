function calcularAreaRetangulo(largura, altura) {
    return largura * altura;
}
function calcularPerimetroRetangulo(largura, altura) {
    return 2 *(largura + altura);
}

let areaCalculada = calcularAreaRetangulo(8, 5);
let perimetroCalculado = calcularPerimetroRetangulo(8, 5);

console.log(`Área: ${areaCalculada}`);
console.log(`Perímetro: ${perimetroCalculado}`);