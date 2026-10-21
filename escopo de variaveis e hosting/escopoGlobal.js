let nome = 'Carlos' //variavel global

function apresentarnome() {
    console.log(nome);
}

apresentarnome()
console.log(nome);

// A variável nome foi declarada fora da função.
// Por isso, ela pode ser acessada tanto no código principal quanto dentro da função.