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
});