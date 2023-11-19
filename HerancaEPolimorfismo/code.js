// code.js
document.getElementById("showModelCode").addEventListener("click", function () {
    const codeContainer = document.querySelector(".code-container");
    const code = document.getElementById("code");
    codeContainer.style.display = "block";
    code.innerText = modelCode;
  });
  
  document.getElementById("showViewCode").addEventListener("click", function () {
    const codeContainer = document.querySelector(".code-container");
    const code = document.getElementById("code");
    codeContainer.style.display = "block";
    code.innerText = viewCode;
  });
  
  document.getElementById("showControllerCode").addEventListener("click", function () {
    const codeContainer = document.querySelector(".code-container");
    const code = document.getElementById("code");
    codeContainer.style.display = "block";
    code.innerText = controllerCode;
  });
  
  document.getElementById("closeCode").addEventListener("click", function () {
    const codeContainer = document.querySelector(".code-container");
    codeContainer.style.display = "none";
    const code = document.getElementById("code");
    code.innerText = "";
  });
  
  const modelCode = `// model.js
  function Produto(nome, descricao, preco, codigoBarras) {
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.codigoBarras = codigoBarras;
    this.calculaDesconto = function(porcentagemDesconto) {
        return this.preco - (this.preco * (porcentagemDesconto / 100));
    };
}

// Smartwatch, Smartphone e Laptop herdam de Produto
function Smartwatch(nome, descricao, preco, codigoBarras, marca) {
    Produto.call(this, nome, descricao, preco, codigoBarras);
    this.marca = marca;
}

function Smartphone(nome, descricao, preco, codigoBarras, marca) {
    Produto.call(this, nome, descricao, preco, codigoBarras);
    this.marca = marca;
}

function Laptop(nome, descricao, preco, codigoBarras, marca) {
    Produto.call(this, nome, descricao, preco, codigoBarras);
    this.marca = marca;
}`;
  
  const viewCode = `// view.js
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
}`;
  
  const controllerCode = `// controller.js
  document.getElementById("calculateDiscount").addEventListener("click", function () {
    // Smartwatch
    const smartwatchName = document.getElementById("smartwatchName").value;
    const smartwatchDescription = document.getElementById("smartwatchDescription").value;
    const smartwatchPrice = parseFloat(document.getElementById("smartwatchPrice").value);
    const smartwatchDiscount = parseFloat(document.getElementById("smartwatchDiscount").value);

    const smartwatch = new Smartwatch(smartwatchName, smartwatchDescription, smartwatchPrice);
    const smartwatchDiscountedPrice = smartwatch.calculaDesconto(smartwatchDiscount);

    exibirSmartwatchResult(smartwatchName, smartwatchDescription, smartwatchPrice, smartwatchDiscountedPrice);

    // Smartphone
    const smartphoneName = document.getElementById("smartphoneName").value;
    const smartphoneDescription = document.getElementById("smartphoneDescription").value;
    const smartphonePrice = parseFloat(document.getElementById("smartphonePrice").value);
    const smartphoneDiscount = parseFloat(document.getElementById("smartphoneDiscount").value);

    const smartphone = new Smartphone(smartphoneName, smartphoneDescription, smartphonePrice);
    const smartphoneDiscountedPrice = smartphone.calculaDesconto(smartphoneDiscount);

    exibirSmartphoneResult(smartphoneName, smartphoneDescription, smartphonePrice, smartphoneDiscountedPrice);

    // Laptop
    const laptopName = document.getElementById("laptopName").value;
    const laptopDescription = document.getElementById("laptopDescription").value;
    const laptopPrice = parseFloat(document.getElementById("laptopPrice").value);
    const laptopDiscount = parseFloat(document.getElementById("laptopDiscount").value);

    const laptop = new Laptop(laptopName, laptopDescription, laptopPrice);
    const laptopDiscountedPrice = laptop.calculaDesconto(laptopDiscount);

    exibirLaptopResult(laptopName, laptopDescription, laptopPrice, laptopDiscountedPrice);
});`;