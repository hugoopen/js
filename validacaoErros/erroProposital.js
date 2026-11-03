console.log('Iniciando programa...');

try{
    let resultado = 10/0

    console.log(resultado);
    
    //provocando erro proporcional
    console.log(nomeUsuario);
    
} catch (error){
    console.log('Ocorreu um erro!');
    console.log(error.message);
}
console.log('Programa finalizado.');

