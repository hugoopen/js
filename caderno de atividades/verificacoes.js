// Menor de 13 anos: "Categoria infantil".
// De 13 a 17 anos: "Categoria juvenil".
// 18 anos ou mais: "Categoria adulta".
// Idade negativa: "Idade inválida".
const idade = 18;
if ( idade < 0) {
    console.log("Idade inválida");
} else if (idade <12) {
    console.log("Categoria infantil");
} else if (idade >= 13 && idade <= 17) {
    console.log("Categoria juvenil");
} else {
    console.log("Categoria adulta");
}
