function adicionarProduto() {
    var produtosDiv = document.getElementById("produtos");

    var novoProdutoDiv = document.createElement("div");
    novoProdutoDiv.className = "produto";

    var nomeProdutoInput = document.createElement("input");
    nomeProdutoInput.type = "text";
    nomeProdutoInput.className = "nomeProduto";
    nomeProdutoInput.placeholder = "Nome do Produto";

    var valorProdutoInput = document.createElement("input");
    valorProdutoInput.type = "number";
    valorProdutoInput.className = "valorProduto";
    valorProdutoInput.min = "0";
    valorProdutoInput.step = "0.01";
    valorProdutoInput.placeholder = "Valor do Produto";

    var removerProdutoButton = document.createElement("button");
    removerProdutoButton.type = "button";
    removerProdutoButton.innerText = "Remover";
    removerProdutoButton.onclick = function() {
        removerProduto(this.parentNode);
    };

    novoProdutoDiv.appendChild(nomeProdutoInput);
    novoProdutoDiv.appendChild(valorProdutoInput);
    novoProdutoDiv.appendChild(removerProdutoButton);

    produtosDiv.appendChild(novoProdutoDiv);
}

function removerProduto(produtoDiv) {
    var produtosDiv = document.getElementById("produtos");
    produtosDiv.removeChild(produtoDiv);
}

function calcularConta() {
    var numClientes = parseInt(document.getElementById("numClientes").value);

    var produtos = document.getElementsByClassName("produto");
    var totalConta = 0;
    var contas = [];

    for (var i = 0; i < produtos.length; i++) {
        var valorProduto = parseFloat(produtos[i].getElementsByClassName("valorProduto")[0].value);
        totalConta += valorProduto;
    }

    var incluirTaxa = document.getElementById("incluirTaxa").checked;
    var taxaServico = incluirTaxa ? (totalConta * 0.1) : 0;
    var valorTotal = totalConta + taxaServico;

    for (var j = 0; j < numClientes; j++) {
        contas[j] = valorTotal / numClientes;
    }

    exibirResultado(contas);
}

function exibirResultado(contas) {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.style.display = "block";

    var contasDiv = document.getElementById("contas");
    contasDiv.innerHTML = "";

    for (var i = 0; i < contas.length; i++) {
        var conta = contas[i];

        var contaText = document.createElement("p");
        contaText.innerText = "Cliente " + (i + 1) + ": R$ " + conta.toFixed(2);

        contasDiv.appendChild(contaText);
    }
}
