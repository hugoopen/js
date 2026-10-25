const computador = {
    marca: "Lenovo",
    memoriaRAM: 8,
    armazenamento: 256,
    ligado: false
};
// Apresente a marca.
console.log(`Marca ${computador.marca}`);

// Altere a memória RAM para 16 GB.
computador.memoriaRAM = 16;
// Ligue o computador.
computador.ligado = true

// Apresente todas as informações.
const exibirInformacoes =(computador) => {
    console.log(`Marca: ${computador.marca}`)
    console.log(`RAM: ${computador.memoriaRAM} GB`);
    console.log(`Armazenamento: ${computador.armazenamento} GB`);
    console.log(`Ligado: ${computador.ligado}`);
}
exibirInformacoes(computador)
console.log(`O computador "${computador.marca}", está ${computador.ligado ? 'ligado' : 'desligado'}.`);
