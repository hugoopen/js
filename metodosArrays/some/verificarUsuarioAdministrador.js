//existe usuario administrador?

const usuarios = [
    {nome: 'Ana', perfil: 'usuario'},
    {nome: 'Carlos', perfil: 'usuario'},
    {nome: 'Marina', perfil: 'administrador'}
]

const verificarAdministrador = usuarios.some(usuario => {
    return usuario.perfil === 'administrador'
})

console.log(`Este é o administrador: ${verificarAdministrador}`);
