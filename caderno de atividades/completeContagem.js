let contador = 1;
while (true) {

 console.log(`${contador}`);
 contador++

 if (contador > 20){
    break
 }
}
//explique o que aconteceria se o contador não fosse incrementado: ele não contaria até 20 e nem iria incrementar os números, logo não iria até o 20, apenas repetiria o número 1 em um loop finito.