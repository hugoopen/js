const { question } = require("readline-sync");

let vendas = [150, 80, 250, 45, 320, 120, 60];
let opcao;

while (opcao !== 7) {
  console.clear();
  console.log("====== Escolha uma opcao do menu: =====");
  console.log("1 - Registrar uma venda");
  console.log("2 - Todas as vendas registradas");
  console.log("3 - Consultar uma venda pela posicao");
  console.log("4 - Alterar o valor de venda");
  console.log("5 - Cancelar uma venda");
  console.log("6 - Exibir o relatorio de vendas");
  console.log("7 - Sair");

  opcao = Number(question("Digite uma opcao: "));

  switch (opcao) {
    case 1: {
      let valorRenda = Number(question("Digite o valor da sua renda: "));
      if (valorRenda > 0) {
        vendas.push(valorRenda);
        console.log("Renda adicionada com sucesso!");
      } else {
        console.log("Digite um valor acima de 0");
      }
      question("Pressione enter para voltar ao menu.");
      break;
    }

    case 2: {
      if (vendas.length === 0) {
        console.log("Nenhuma venda foi registrada atualmente!");
        question("Pressione enter para voltar ao menu.");
        break;
      }
      for (let i = 0; i < vendas.length; i++) {
        console.log(`Venda: ${vendas[i]}, indice: ${i}`);
      }
      question("Pressione enter para voltar ao menu.");
      break;
    }

    case 3: {
      let solicitarIndice = Number(question("Digite o indice que procura: "));
      if (solicitarIndice >= 0 && solicitarIndice < vendas.length) {
        console.log(
          `Esta e a venda que voce procura: ${vendas[solicitarIndice]}`,
        );
      } else {
        console.log("Venda nao foi encontrada! Digite um valor valido.");
      }
      question("Pressione enter para voltar ao menu.");
      break;
    }

    case 4: {
      let substituirVenda = Number(
        question("Digite o indice da venda que deseja alterar: "),
      );
      if (substituirVenda >= 0 && substituirVenda < vendas.length) {
        let valorNovo = Number(question("Digite o novo valor: "));
        if (valorNovo > 0) {
          vendas.splice(substituirVenda, 1, valorNovo);
          console.log("Valor substituido com sucesso!");
        } else {
          console.log("Digite um valor acima de 0");
        }
      } else {
        console.log("Digite um indice correto!");
      }
      question("Pressione enter para voltar ao menu.");
      break;
    }

    case 5: {
      let cancelarVenda = Number(
        question("Digite o indice que deseja remover: "),
      );
      if (cancelarVenda >= 0 && cancelarVenda < vendas.length) {
        vendas.splice(cancelarVenda, 1);
        console.log("Cancelado com sucesso!");
      } else {
        console.log("Digite o indice de uma venda que exista!");
      }
      question("Pressione enter para voltar ao menu.");
      break;
    }

    case 6: {
      if (vendas.length === 0) {
        console.log("Nenhuma venda registrada!");
        question("Pressione enter para voltar ao menu.");
        break;
      }

      let faturamentoTotal = 0;
      let maiorVenda = vendas[0];
      let menorVenda = vendas[0];
      let vendasAcima = 0;
      let vendasAbaixo = 0;

      for (let i = 0; i < vendas.length; i++) {
        faturamentoTotal += vendas[i];

        if (vendas[i] > maiorVenda) maiorVenda = vendas[i];
        if (vendas[i] < menorVenda) menorVenda = vendas[i];

        if (vendas[i] >= 100) {
          vendasAcima++;
        } else {
          vendasAbaixo++;
        }
      }

      let media = faturamentoTotal / vendas.length;

      console.log("===== RELATORIO DE VENDAS =====");
      console.log(`Quantidade de vendas: ${vendas.length}`);
      console.log(`Faturamento total: R$ ${faturamentoTotal.toFixed(2)}`);
      if (faturamentoTotal >= 1000) {
        console.log("Parabens! A meta de R$ 1.000 foi atingida!");
      } else {
        let falta = 1000 - faturamentoTotal;
        console.log(
          `A meta de R$ 1.000 nao foi atingida. Faltam R$ ${falta.toFixed(2)}.`,
        );
      }
      console.log(`Valor medio das vendas: R$ ${media.toFixed(2)}`);
      console.log(`Maior venda: R$ ${maiorVenda}`);
      console.log(`Menor venda: R$ ${menorVenda}`);
      console.log(`Vendas iguais ou superiores a R$100: ${vendasAcima}`);
      console.log(`Vendas inferiores a R$100: ${vendasAbaixo}`);
      question("Pressione enter para voltar ao menu.");
      break;
    }

    case 7:
      console.log("Encerrando o sistema...");
      break;

    default:
      console.log("Opcao invalida! Escolha um numero de 1 a 7.");
      question("Pressione enter para voltar ao menu.");
      break;
  }
}
