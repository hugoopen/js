const funcionario = {
    nome: "Hugo",
    cargo: "Estagiario",
    salario: 1750
}

console.log("Objeto original:");
console.log(funcionario);

//Serializando o objeto
const funcionarioTexto = JSON.stringify(funcionario)

console.log("Objeto serializado:");
console.log(funcionarioTexto);
//Desserializando o texto
const funcionarioRecuperado = JSON.parse(funcionarioTexto)

console.log("Objeto recuperado:");
console.log(funcionarioRecuperado);

// Acessando os dados recuperados
console.log(funcionario.nome);
console.log(funcionario.cargo);
console.log(funcionario.salario);


