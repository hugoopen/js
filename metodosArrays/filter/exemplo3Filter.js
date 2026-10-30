const chamados = [
    {numero: 1, setor: 'Financeiro', status: 'aberto'},
    {numero: 2, setor: 'TI', status: 'resolvido'},
    {numero: 3, setor: 'RH', status: 'aberto'},
    {numero: 4, setor: 'TI', status: 'aberto'}
]

const chamadoAbertos = chamados.filter(chamado =>{
    return chamado.status === 'aberto'
})

console.log(chamadoAbertos);

console.log('   =====Chamados em abertos=====');
chamadoAbertos.forEach(chamado => {
    console.log(`Numero: ${chamado.numero} - Setor: ${chamado.setor}`);
})