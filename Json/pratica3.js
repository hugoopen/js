const { question, questionInt } = require("readline-sync");

let pedidos = [];
let pedidosTexto = ""; // Guarda a String JSON gerada e convertida
let pedidosRecuperados = []; // Guarda os pedidos desserializados, depois de convertido para JS
let proximoNumeroPedido = 101; // Gerador automático do número do pedido

function cadastrarPedido() {
    console.log("\n===== CADASTRAR PEDIDO =====");

    const nomeCliente = question("Digite o nome do cliente: ").trim();
    
    try {
        if (nomeCliente === "") {
            throw new Error("O nome do cliente nao pode ficar vazio!");
        }
        //adiciona no array pedido e cria o objeto JS
        const novoPedido = {
            numero: proximoNumeroPedido++,
            cliente: nomeCliente,
            produtos: [],
            total: 0,
            status: "Em preparo"
        };

        let adicionarMais = true;

        while (adicionarMais) {
            console.log("\n=== Adicionar Produto ao Pedido ===");
            const nomeProduto = question("Nome do produto: ").trim();
            const quantidadeTexto = question("Quantidade: ").trim();
            const precoTexto = question("Preco unitario: R$ ").trim();

            if (nomeProduto === "") {
                throw new Error("O nome do produto nao pode ficar vazio!");
            }

            const quantidade = Number(quantidadeTexto);
            if (quantidadeTexto === "" || Number.isNaN(quantidade) || quantidade <= 0) {
                throw new Error("Quantidade invalida!");
            }

            const preco = Number(precoTexto);
            if (Number.isNaN(preco) || preco <= 0) {
                throw new Error("Preco invalido!");
            }

            novoPedido.produtos.push({
                nome: nomeProduto,
                quantidade: quantidade,
                preco: preco
            });
            // soma os valores do novo pedido, calculo final
            novoPedido.total += (quantidade * preco);
            // trabalhando com dupla opção, s de sim ou n de não
            let resposta = question("Deseja adicionar mais um produto a este pedido? (s/n): ").trim().toLowerCase();
            if (resposta !== "s") {
                adicionarMais = false;
            }
        }
        //importamos ou adicionamos para dentro de array pedido, o novoPedido e o tratamos por meio de verificação, mensagem de erro.
        pedidos.push(novoPedido);
        console.log(`\nPedido n° ${novoPedido.numero} adicionado com sucesso! Total: R$ ${novoPedido.total.toFixed(2)}`);

    } catch (erro) {
        console.log(`Erro no cadastro: ${erro.message}`);
    }
}

function listarPedidos() {
    console.log("\n===== PEDIDOS ATUAIS =====");

    if (pedidos.length === 0) {
        console.log("Nenhum pedido cadastrado!");
        return;
    }

    pedidos.forEach((pedido) => {
        console.log(`\nPedido n°: ${pedido.numero} | Cliente: ${pedido.cliente} | Status: ${pedido.status}`);
        console.log("Produtos:");
        pedido.produtos.forEach((produto) => {
            console.log(`  - ${produto.quantidade} x ${produto.nome} (R$ ${produto.preco.toFixed(2)} cada)`);
        });
        console.log(`Total do Pedido: R$ ${pedido.total.toFixed(2)}`);
    });
}

function serializacaoJSON() {
    console.log("\n===== SERIALIZAR DADOS PARA JSON =====");

    if (pedidos.length === 0) {
        throw new Error("Nao ha pedidos para serializar. Cadastre um pedido primeiro!");
    }

    pedidosTexto = JSON.stringify(pedidos, null, 2);

    console.log("Objeto convertido para Texto JSON:");
    console.log(pedidosTexto);
    console.log(`Tipo da variavel: ${typeof pedidosTexto}`);
}

function desserializarJSON() {
    console.log("\n===== DESSERIALIZAR DADOS DO JSON =====");

    if (pedidosTexto === "") {
        throw new Error("Nao ha JSON salvo. Utilize a opcao 3 para serializar primeiro!");
    }

    // Salva o resultado na variável específica de recuperados
    pedidosRecuperados = JSON.parse(pedidosTexto);

    console.log("Texto convertido de volta para objetos com sucesso!");
    console.log(`Tipo da variavel: ${typeof pedidosRecuperados} (array: ${Array.isArray(pedidosRecuperados)})`);
    console.log("Utilize a opcao 5 para listar os pedidos recuperados.");
}

function listarPedidosRecuperados() {
    console.log("\n===== PEDIDOS RECUPERADOS DO JSON =====");

    if (pedidosRecuperados.length === 0) {
        console.log("Nenhum pedido foi recuperado ainda. Utilize a opcao 4 primeiro!");
        return;
    }

    pedidosRecuperados.forEach((pedido) => {
        console.log(`\n[RECUPERADO] Pedido n°: ${pedido.numero} | Cliente: ${pedido.cliente} | Status: ${pedido.status}`);
        console.log("Produtos:");
        pedido.produtos.forEach((produto) => {
            console.log(`  - ${produto.quantidade}x ${produto.nome} (R$ ${produto.preco.toFixed(2)} cada)`);
        });
        console.log(`Total: R$ ${pedido.total.toFixed(2)}`);
    });
}

function exibirMenu() {
    console.log("\n========== LANCHONETE DELIVERY ==========");
    console.log("1 - Cadastrar pedido");
    console.log("2 - Listar pedidos");
    console.log("3 - Exibir pedidos em JSON");
    console.log("4 - Recuperar pedidos do JSON");
    console.log("5 - Listar pedidos recuperados");
    console.log("6 - Sair");
}

let opcao;

while (opcao !== 6) {
    exibirMenu();
    opcao = questionInt("Escolha de 1 a 6: ");

    try {
        switch (opcao) {
            case 1:
                cadastrarPedido();
                break;

            case 2:
                listarPedidos();
                break;

            case 3:
                serializacaoJSON();
                break;

            case 4:
                desserializarJSON();
                break;

            case 5:
                listarPedidosRecuperados();
                break;

            case 6:
                console.log("Saindo do sistema!");
                break;

            default:
                console.log("Opcao invalida!");
                break;
        }

    } catch (erro) {
        console.log(`Erro: ${erro.message}`);
    }

    if (opcao !== 6) {
        question("\nAperte enter para voltar ao menu!");
    }
}
