const { question } = require("readline-sync");

let nomes = ["Minecraft", "Terraria", "Celeste"];
let generos = ["Sandbox", "Aventura", "Plataforma"];
let horas = [45, 20, 12];

let opcao

while (opcao !== 7) {
  console.clear();
  console.log("1 - Cadastrar jogo");
  console.log("2 - Listar Jogos");
  console.log("3 - Pesquisar jogo");
  console.log("4 - Atualizar horas jogadas");
  console.log("5 - Apresentar jogo com mais hora");
  console.log("6 - Calcular total de horas jogadas");
  console.log("7 - Encerrar");

  opcao = parseInt(question("Escolha uma opcao de 1 a 7: "));

  switch (opcao) {
    case 1:
      let novoJogo = question("Digite o nome do jogo novo:").trim();
      let novoGenero = question("Digite o genero do jogo: ");
      let novasHoras = parseFloat(question("Digite a hora jodada: "));

      if (novoJogo === "" || novoGenero === "")
        console.log("Nome e genero nao podem ficar vazio!");
      else if (isNaN(novasHoras) || novasHoras < 0)
        console.log("Horas invalidas.");
      else {
        nomes.push(novoJogo);
        generos.push(novoGenero);
        horas.push(novasHoras);
        console.log(`${novoJogo} adicionado com sucesso!`);
      }
      break;

    case 2:
      if (nomes.length === 0) {
        console.log("Nenhum jogo adicionado ainda");
      } else {
        for (let i = 0; i < nomes.length; i++) {
          console.log(`${i + 1} - ${nomes[i]} | ${generos[i]} | ${horas[i]}`);
        }
      }
      break;

    case 3:
      let buscarJogo = question("Digite o nome do jogo: ").trim().toLowerCase();
      let encontrado = false;
      for (let i = 0; i < nomes.length; i++) {
        if (nomes[i].toLocaleLowerCase() === buscarJogo) {
          console.log(
            `Encontrado na posicao ${i + 1} : ${nomes[i]} | ${generos[i]} | ${horas[i]} h`,
          );
          encontrado = true;
          if (!encontrado) {
            console.log(
              `O jogo ${buscarJogo}, infelizmente não foi encontrado`,
            );
          }
        }
      }
      break;

    case 4:
      let posicao = parseInt(question("Digite a posicao do jogo: ")) - 1;

      if (posicao >= 0 && posicao < nomes.length) {
        let novasHoras = parseFloat(question("Digite uma hora: "));
        if (isNaN(novasHoras) || novasHoras < 0) {
          console.log("Horas invalidas! Nao pode ser negativo");
        } else {
          horas[posicao] = novasHoras;
          console.log(`${nomes[posicao]} agora tem ${horas[posicao]}`);
        }
      } else {
        console.log("Posicao invalida");
      }
      break;

    case 5:
        
      if (horas.length === 0) {
        console.log("Nenhum jogo cadastrado por agora");
      } else {
        let maiorHoras = horas[0];
        let posicaoMaior = 0;

        for (let i = 0; i < horas.length; i++) {
          if (horas[i] > maiorHoras) {
            maiorHoras = horas[i];
            posicaoMaior = i;
          }
        }
        console.log(
          `O jogo mais jogado é ${nomes[posicaoMaior]}, genero: ${generos[posicaoMaior]} com ${maiorHoras} h`,
        );
      }
      break;

    case 6:
      let total = 0;

      for (let i = 0; i < horas.length; i++) {
        total += horas[i];
      }
      console.log(`Total de horas jogadas: ${total} h`);
      break;

    case 7:
      console.log("Encerrando o sistema...");
      break;

    default:
      console.log("Opcao invalida! Escolha de 1 a 7");
      break
  }

  if (opcao !== 7) {
    question("Aperte enter para voltar ao menu");
  }
}
