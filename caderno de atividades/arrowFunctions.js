const calcularCubo = (numero) => numero * numero * numero;

const verificarPar = (numero) => numero % 2 === 0;

const criarMensagem = (nome) => `Bem-vindo, ${nome}!`;


console.log(calcularCubo(3));
console.log(verificarPar(4));
console.log(criarMensagem('Hugo'));

// a arrow function tem uma sintaxe mais curta, e na forma reduzida o RETURN e as CHAVES podem ser omitidos quando há sóuma expressão.
