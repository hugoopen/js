const carregarUsuario = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok) {
            throw new Error("Error HTTPS: " + response.status);
        }

        const usuario = await response.json()

        console.log("===== BEM VINDO AO SISTEMA =====");
        usuario.forEach(usuario => {
            console.log(`Nome: ${usuario.name}`);
            console.log(`E-mail: ${usuario.email}`);
            return usuario
        })
        
    } catch (error) {
        console.log("Error: ", error.message);
    }
}
carregarUsuario()