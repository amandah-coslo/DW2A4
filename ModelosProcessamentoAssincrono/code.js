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
const Model = {
  deckId: null,
  cartas: [],
  async gerarBaralho() {
    const response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    const data = await response.json();
    this.deckId = data.deck_id;
  },
  async selecionarCartas() {
    const response = await fetch(\`https://deckofcardsapi.com/api/deck/\${this.deckId}/draw/?count=4\`);
    const data = await response.json();
    this.cartas = data.cards;
  },
};`;

const viewCode = `// view.js
const View = {
  cartasSelecionadasElement: document.getElementById("cartasSelecionadas"),
  cartasSelecionadasElement2: document.getElementById("cartasSelecionadas2"),
  exibirNomeCartasSelecionadas(cartas) {
    this.cartasSelecionadasElement.innerHTML = "";
    cartas.forEach(cart => {
      const cartaElement = document.createElement("li");
      cartaElement.textContent = \`\${cart.value} de \${cart.suit}\`;
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
};`;

const controllerCode = `// controller.js
const gerarCartasButton = document.getElementById("gerarCartas");

gerarCartasButton.addEventListener("click", async () => {
  await Model.gerarBaralho();
  await Model.selecionarCartas();
  View.exibirNomeCartasSelecionadas(Model.cartas);
  View.exibirCartasSelecionadas(Model.cartas);
});

gerarCartasButton.click();`;