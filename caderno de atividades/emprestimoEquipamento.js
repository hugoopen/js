//Primeira versão: utilize arrays paralelos para armazenar os dados.
//Segunda versão: utilize objetos simples para representar os equipamentos

const { question } = require("readline-sync");

//Desenvolva uma aplicação que permita:
//• Cadastrar equipamentos.
//• Listar todos os equipamentos.
//• Pesquisar um equipamento pela identificação.
//• Registrar um empréstimo.
//• Registrar uma devolução.
//• Apresentar a quantidade de equipamentos disponíveis.
//• Encerrar o programa

let equipamentos = ["Fone", "Mouse", "Teclado"];
let marcas = ["QCY", "Lenovo", "Dell"];
let ids = [120, 260, 540];
let emprestados = [false, false, false];

let opcao;

while (opcao !== 7) {
  console.clear();
  console.log("1 - Cadastrar equipamento: ");
  console.log("2 - Listar os equipamento: ");
  console.log("3 - Pesquisar equipamento: ");
  console.log("4 - Registrar emprestimo: ");
  console.log("5 - Registrar devolucao: ");
  console.log("6 - Quantidade de equipamentos disponiveis: ");
  console.log("7 - Encerrar");

  opcao = parseInt(question("Escolha uma opcao de 1 a 7: "));
  switch (opcao) {
    case 1:
      let novoIds = parseInt(
        question("Digite a identificacao do novo produto:"),
      );
      let novoEquipamento = question(
        "Digite o nome do novo equipamento: ",
      ).trim();
      let novaMarca = question("Digite o nome da marca do novo equipamento: ");

      if (novoEquipamento === "" || novaMarca === "") {
        console.log("Nome e marca nao podem ficar vazio!");
      } else if (isNaN(novoIds) || novoIds < 0) console.log("Id invalido");
      else {
        ids.push(novoIds);
        equipamentos.push(novoEquipamento);
        marcas.push(novaMarca);
        console.log(`${novoEquipamento} adicionado com sucesso!`);
      }
      break;

    case 2:
      if (equipamentos.length === 0) {
        console.log("Nenhum equipamento adicionado ainda");
      } else {
        for (let i = 0; i < equipamentos.length; i++) {
          console.log(
            `${i + 1} - ${equipamentos[i]} | ${marcas[i]} | ${ids[i]} `,
          );
        }
      }
      break;

    case 3:
      let buscarEquipamento = question("Digite o nome do equipamento: ")
        .trim()
        .toLocaleLowerCase();
      let encontrado = false;
      for (let i = 0; i < equipamentos.length; i++) {
        if (equipamentos[i].toLocaleLowerCase() === buscarEquipamento) {
          console.log(
            `Encontrado na posicao ${i + 1} : ${equipamentos[i]} | ${marcas[i]} | ${ids[i]} id`,
          );
        }
        encontrado = true;
        if (!encontrado) {
          console.log(
            `O esquipamento ${equipamentos}, infelizmente não foi encontrado`,
          );
        }
      }
      break;

    case 4:
      let posicao =
        parseInt(question("Digite a identificacao do equipamento: ")) - 1;

      if (posicao >= 0 && posicao < equipamentos.length) {
        if (!emprestados[posicao]) {
          emprestados[posicao] = true;
          console.log(`${equipamentos[posicao]} emprestado com sucesso!`);
        } else {
          console.log("Este equipamento esta emprestado no momento");
        }
      } else {
        console.log("Posicao invalida!");
      }
      break;

    case 5:
      let posicaoDevolver =
        parseInt(question("Digite a identificacao do produto: ")) - 1;
      if (posicaoDevolver >= 0 && posicaoDevolver < equipamentos.length) {
        if (emprestados[posicaoDevolver]) {
          emprestados[posicaoDevolver] = false;
          console.log(`${equipamentos[posicao]} devolvido com sucesso!`);
        } else {
          console.log("Este equipamento ja esta disponivel");
        }
      } else {
        console.log("Posicao invalida.");
      }

    case 6:
      let total = 0;
      let contadorEquipamento = 0
      for (let i = 0; i < equipamentos.length; i++) {
        total += equipamentos[i];
        contadorEquipamento++
      }
      console.log(`Total de equipamentos: ${contadorEquipamento}`);
      break;

    case 7:
      console.log("Encerrando o sistema...");
      break;

    default:
      console.log("Opcao invalida! Escolha de 1 a 7");
      break;
  }
  if (opcao !== 7) {
    question("Aperte enter para voltar ao menu");
  }
}
