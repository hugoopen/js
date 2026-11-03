const { question, questionInt } = require("readline-sync");

const consultas = [
  {
    animal: "Thor",
    especie: "Cachorro",
    tutor: "Marcos",
    veterinario: "Dra. Ana",
    procedimento: "Consulta",
    valor: 120,
    realizada: true,
  },
  {
    animal: "Luna",
    especie: "Gato",
    tutor: "Carla",
    veterinario: "Dr. Pedro",
    procedimento: "Vacina",
    valor: 90,
    realizada: true,
  },
  {
    animal: "Bob",
    especie: "Cachorro",
    tutor: "Marcos",
    veterinario: "Dra. Ana",
    procedimento: "Exame",
    valor: 180,
    realizada: false,
  },
  {
    animal: "Mel",
    especie: "Gato",
    tutor: "Juliana",
    veterinario: "Dr. Pedro",
    procedimento: "Consulta",
    valor: 120,
    realizada: false,
  },
  {
    animal: "Max",
    especie: "Cachorro",
    tutor: "Roberto",
    veterinario: "Dra. Ana",
    procedimento: "Vacina",
    valor: 90,
    realizada: true,
  },
];

//Funcoes auxiliares (calculam e retornam)

const buscarPorNome = (animal) => {
  return consultas.find(
    (consulta) => consulta.animal.toLowerCase() === animal.toLowerCase(),
  );
};

const buscarPorConsultaVeterinario = (veterinario) => {
  return consultas.filter(
    (consulta) =>
      consulta.veterinario.toLowerCase() === veterinario.toLowerCase(),
  );
};

const buscarPorEspecie = (especie) => {
  return consultas.filter(
    (consulta) => consulta.especie.toLowerCase() === especie.toLowerCase(),
  );
};

const filtrarPorSituacao = (realizada) => {
  return consultas.filter((consulta) => consulta.realizada === realizada);
};

const valorTotalProcedimento = () => {
  return consultas.reduce((total, consulta) => {
    if (consulta.realizada) {
      return total + consulta.valor;
    }
    return total;
  }, 0);
};

const contaConsultasRealizadas = consultas.reduce((contador, consulta) => {
  if (consulta.realizada) {
    return contador + 1;
  }
  return contador;
}, 0);

const ordenadorConsultaNomeAnimal = () => {
  return [...consultas].sort((a, b) => a.animal.localeCompare(b.animal));
};

const avisoSituacao = (consulta) =>
  consulta.realizada ? "Realizada com sucesso" : "Pendente";

// Funcoes de cada opcao (conversam com o usuario)

const exibirMenu = () => {
  console.log("1 - Encontrar consultar");
  console.log("2 - Consultas de determinado veterinario");
  console.log("3 - Consultas nao realizadas");
  console.log("4 - Consulta de uma determinada especie");
  console.log("5 - Consultas pendentes");
  console.log("6 - Verificas todas consultas realizadas");
  console.log("7 - Relacao entre animal, tutor e procedimento");
  console.log("8 - Calcular valor total dos procedimento realizados");
  console.log("9 - Quantidade de consultas realizadas");
  console.log("10 - Ordenar consulta pelo nome do animal");
  console.log("11 - Relatorio completo");
  console.log("12 - Sair");
};

const encontrarConsulta = () => {
  const animal = question("Digite o nome do animal: ").trim();
  const consulta = buscarPorNome(animal);

  if (consulta) {
    console.log(`Nome: ${animal} | Situacao: ${avisoSituacao(consulta)}`);
  } else {
    console.log("Nao foi possivel encontrar consulta");
  }
};

const consultasDoVeterinario = () => {
  const nome = question("Digite o nome do veterinario: ").trim();
  const lista = buscarPorConsultaVeterinario(nome);

  if (lista.length === 0) {
    console.log("Nenhuma consulta encontrada para este veterinario");
  } else {
    lista.forEach((consulta) => {
      console.log(
        `${consulta.animal} - ${consulta.procedimento} - ${avisoSituacao(consulta)}`,
      );
    });
  }
};

const naoRealizadas = () => {
  const irrealizado = filtrarPorSituacao(false);

  if (irrealizado.length > 0) {
    console.log("Consultas nao realizadas: ");
    irrealizado.forEach((consulta) => console.log(`- ${consulta.animal}`));
  } else {
    console.log("Todas as consultas foram realizadas.");
  }
};

const consultaDeEspecie = () => {
  const nome = question("Digite o nome da especie: ").trim();
  const lista = buscarPorEspecie(nome);

  if (lista.length === 0) {
    console.log("Nenhuma consulta encontrada para esta especie");
  } else {
    lista.forEach((consulta) => {
      console.log(
        `${consulta.especie} - ${consulta.procedimento} - ${avisoSituacao(consulta)}`,
      );
    });
  }
};

const verificaConsultasPendentes = () => {
  const todasPendentes = consultas.every(
    (consulta) => consulta.realizada === false,
  );
  const pendentes = filtrarPorSituacao(false);

  if (pendentes.length === 0) {
    console.log("Nao existe consulta pendente.");
  } else if (todasPendentes) {
    console.log("Sim, todas as consultas estao pendentes: ");
  } else {
    console.log("Nem todas as consultas estao pendentes. Pendentes: ");
  }

  pendentes.forEach((consulta) => {
    console.log(`- ${consulta.procedimento}`);
  });
};

const verificarConsultasRealizadas = () => {
  const todasRealizadas = consultas.every(
    (consulta) => consulta.realizada === true,
  );
  const realizadas = filtrarPorSituacao(true);

  if (todasRealizadas) {
    console.log("Sim, todas as consultas foram realizadas: ");
  } else if (realizadas.length === 0) {
    console.log("Nenhuma consulta foi realizada.");
  } else {
    console.log("Nem todos as consultas foram realizadas: ");
  }
  realizadas.forEach((consulta) => {
    console.log(`- ${consulta.procedimento}`);
  });
};

const criarRelacaoTutorAnimal = () => {
  const criarLista = consultas.map((consulta) => {
    return {
      animal: consulta.animal,
      tutor: consulta.tutor,
      procedimento: consulta.procedimento,
    };
  });

  if (criarLista.length === 0) {
    console.log("Tutor e animal nao foram encontrado");
  } else {
    criarLista.forEach((relacao) => {
      console.log(
        `Tutor: ${relacao.tutor} - Nome do animal: ${relacao.animal} - Procedimento: ${relacao.procedimento}`,
      );
    });
  }
};

const valorTotalProcedimentoRealizado = () => {
  console.log(`Total: ${valorTotalProcedimento()}`);
};

const quantidadeConsultasRealizadas = () => {
  console.log(
    `Esta foi a quantia total de consultas realizadas: ${contaConsultasRealizadas}`,
  );
};

const mostrarConsultaPeloNome = () => {
  ordenadorConsultaNomeAnimal().forEach((consulta) => {
    console.log(
      `${consulta.animal} - ${consulta.veterinario} (${consulta.procedimento})`,
    );
  });
};

const mostrarRelatorio = () => {
  console.log("===== RELATORIO COMPLETO=====");
  consultas.forEach((consulta, indice) => {
    console.log(`${indice + 1} - ${consulta.animal}`);
    console.log(`Especie: ${consulta.especie}`);
    console.log(`Tutor: ${consulta.tutor}`);
    console.log(`Veterinario: ${consulta.veterinario}`);
    console.log(`Procedimento: ${consulta.procedimento}`);
    console.log(`Valor: ${consulta.valor}`);
    console.log(`Realizado: ${consulta.realizada ? "Realizado" : "Pendente"}`);
  });
};

let opcao;
while (opcao !== 12) {
  exibirMenu();
  opcao = questionInt("Escolha uma opcao de 1 a 12: ");

  switch (opcao) {
    case 1:
      encontrarConsulta();
      break;

    case 2:
      consultasDoVeterinario();
      break;

    case 3:
      naoRealizadas();
      break;

    case 4:
      consultaDeEspecie();
      break;

    case 5:
      verificaConsultasPendentes();
      break;

    case 6:
      verificarConsultasRealizadas();
      break;

    case 7:
      criarRelacaoTutorAnimal();
      break;

    case 8:
      valorTotalProcedimentoRealizado();
      break;

    case 9:
      quantidadeConsultasRealizadas();
      break;

    case 10:
      mostrarConsultaPeloNome();
      break;

    case 11:
      mostrarRelatorio();
      break;

    case 12:
      console.log("Sistema encerrado!");
      break;

    default:
      console.log("Opcao invalida! Escolha de 1 a 12");
      break;
  }
  if (opcao !== 12) {
    question("Aperte enter para voltar ao menu");
  }
}