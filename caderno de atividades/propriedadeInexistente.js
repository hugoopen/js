let dispositivo = {
 nome: "Impressora",
 fabricante: "Epson",
 funcionando: true
};
if (dispositivo.funcionando === true) {
 console.log("Equipamento funcionando");
} else {
 console.log("Verificar equipamento");
}

//quando tentamos acessar a propriedade que não existe no objeto, ela cai no else direto