const usuarios = [
    {nome: 'Ana', email: 'ana@gmail.com'},
    {nome: 'Carlos', email: 'carlos@gmail.com'},
    {nome: 'Marina', email: ''}
]

const verificarEmail = usuarios.every(usuario => {
    return usuario.email !== ''
})

console.log('Todos tem email?', verificarEmail);
