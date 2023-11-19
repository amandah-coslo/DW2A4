const View = {
    cartasSelecionadasElement: document.getElementById("cartasSelecionadas"),
    cartasSelecionadasElement2: document.getElementById("cartasSelecionadas2"),
    exibirNomeCartasSelecionadas(cartas) {
      this.cartasSelecionadasElement.innerHTML = "";
      cartas.forEach(cart => {
        const cartaElement = document.createElement("li");
        cartaElement.textContent = `${cart.value} de ${cart.suit}`;
        this.cartasSelecionadasElement.appendChild(cartaElement);
      });
    },
    exibirCartasSelecionadas(cartas) {
      this.cartasSelecionadasElement2.innerHTML = "";
      cartas.forEach(cart => {
        const cartaImagem = document.createElement("img");
        cartaImagem.src = cart.image;
        this.cartasSelecionadasElement2.appendChild(cartaImagem);
      });
    },
  };