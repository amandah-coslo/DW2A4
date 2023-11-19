function exibirSmartwatchResult(nome, descricao, preco, desconto) {
    document.getElementById("outputSmartwatchName").textContent = nome;
    document.getElementById("outputSmartwatchDescription").textContent = descricao;
    document.getElementById("outputSmartwatchPrice").textContent = preco.toFixed(2);
    document.getElementById("outputSmartwatchDiscountedPrice").textContent = desconto.toFixed(2);
}

function exibirSmartphoneResult(nome, descricao, preco, desconto) {
    document.getElementById("outputSmartphoneName").textContent = nome;
    document.getElementById("outputSmartphoneDescription").textContent = descricao;
    document.getElementById("outputSmartphonePrice").textContent = preco.toFixed(2);
    document.getElementById("outputSmartphoneDiscountedPrice").textContent = desconto.toFixed(2);
}

function exibirLaptopResult(nome, descricao, preco, desconto) {
    document.getElementById("outputLaptopName").textContent = nome;
    document.getElementById("outputLaptopDescription").textContent = descricao;
    document.getElementById("outputLaptopPrice").textContent = preco.toFixed(2);
    document.getElementById("outputLaptopDiscountedPrice").textContent = desconto.toFixed(2);
}