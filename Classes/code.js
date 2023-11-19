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
  class Produto {
    constructor(nome, descricao, preco, codigoBarras) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.codigoBarras = codigoBarras;
    }
    
    calculaDesconto(porcentagemDesconto, preco, nomeProduto){
        return preco - preco * (porcentagemDesconto/100);
    }
}`;
  
  const viewCode = `// view.js
  Não existe código disponível para ser visualizado na view.js`;
  
  const controllerCode = `// controller.js
  document.addEventListener("DOMContentLoaded", function () {
    const productNameInput = document.getElementById("productName");
    const productDescriptionInput = document.getElementById("productDescription");
    const productPriceInput = document.getElementById("productPrice");
    const productDiscountInput = document.getElementById("productDiscount");
    const calculateDiscountButton = document.getElementById("calculateDiscount");

    const outputProductName = document.getElementById("outputProductName");
    const outputProductDescription = document.getElementById("outputProductDescription");
    const outputProductPrice = document.getElementById("outputProductPrice");
    const outputDiscountedPrice = document.getElementById("outputDiscountedPrice");

    calculateDiscountButton.addEventListener("click", function () {
        const nome = productNameInput.value;
        const descricao = productDescriptionInput.value;
        const preco = parseFloat(productPriceInput.value);
        const desconto = parseFloat(productDiscountInput.value);

        const produto = new Produto(nome, descricao, preco, 0);
        const descontoFinal = produto.calculaDesconto(desconto, preco, nome);

        outputProductName.textContent = nome;
        outputProductDescription.textContent = descricao;
        outputProductPrice.textContent = preco.toFixed(2);
        outputDiscountedPrice.textContent = descontoFinal.toFixed(2);

        document.getElementById("productOutput").style.display = "block";
    });
})`;