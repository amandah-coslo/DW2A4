const Controller = {
    async main() {
        async function gerarCartas(){
            await Model.gerarBaralho();
            await Model.selecionarCartas();
            View.exibirNomeCartasSelecionadas(Model.cartas);
            View.exibirCartasSelecionadas(Model.cartas);
        }

        gerarCartas();

        const gerarNovasCartasButton = document.getElementById("gerarCartas");
        gerarNovasCartasButton.addEventListener("click", gerarCartas);
      
    },

  };
  
  Controller.main();