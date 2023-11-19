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
});