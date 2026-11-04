const aluno = {
    nome: "Mariana",
    idade: 22,
    curso: "Desenvolvimento de Sistemas"
}
//transforma o objeto em texto puro JSON
const alunoJson = JSON.stringify(aluno)

console.log(alunoJson);

// tipo de dados em js
console.log(typeof aluno);

//tipo de dados em JSON
console.log(typeof alunoJson);

