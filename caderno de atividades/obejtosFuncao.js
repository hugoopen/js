const personagem = {
    nome: "Doomsday",
    vida: 150,
    nivel: 6,
    experiencia: 4
}

const receberDano = (personagem, dano) => {
    personagem.vida -= dano

    if (personagem.vida < 0) {
        personagem.vida = 0
    }

    if (personagem.vida === 0) {
        console.log(`${personagem.nome} foi derrotado! `);
    } else {
        console.log(`${personagem.nome} ainda tem ${personagem.vida} de vida restante.`);

    }
}

receberDano(personagem, 25)
receberDano(personagem, 125)
console.log(personagem.vida);


