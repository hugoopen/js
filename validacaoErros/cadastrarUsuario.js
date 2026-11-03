function cadastrarUsuario(nome, idade) {
    try {
        if (nome.trim() === '') {
            throw new Error('O nome nao pode ficar vazio!')
        }

        if (idade <= 0) {
            throw new Error('Idade invalida')
        }

        if (idade < 18) {
            throw new Error('Usuario precisa ser maior de idade!')
        }

        console.log('Usuario cadastrado com sucesso!');

    } catch (erro) {

        console.error(`Erro: ${erro.message}`);
    }
}
cadastrarUsuario('Hugo', - 1)
cadastrarUsuario('', 20)
cadastrarUsuario('Ana', 17)
cadastrarUsuario('Carlos', 20)
