//a) resolva com for
// for (let i = 1; i <= 5; i++) {
//     console.log(i);   
// }

//b)resolva com while
// let numero = 1
// while (numero <= 5) {
//     console.log(numero);
//     numero++
// }

//c)resolva com do while
resultado = ""
let i = 1
do {
    i += 1;
    resultado += i + ""
    console.log(i);
} while (i <= 5)

//Explique em qual situação cada estrutura pode ser mais conveniente
//For: Usada quando tem uma expressão para ser avaliada antes de cada iteração do loop. Se esta expressão for avaliada para true, declaração será executado.
//While: A declaração while cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina.
//do...while: ria um laço que executa uma declaração até que o teste da condição for falsa (false). A condição é avaliada depois que o bloco de código é executado, resultando que uma declaração seja executada pelo menos uma vez.