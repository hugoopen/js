let idade = 15

try{

    if (idade < 0) {
        throw new Error('A idade nao pode ser negativa');
    }

    if (idade < 18) {
        throw new Error('Acesso permitido somente para maiores de idade!');
    }

    console.log('Acesso permitido');
    
} catch (erro){
    console.log('Nao foi possivel continuar');
    console.error(`Motivo: ${erro.message}`);    
} 
