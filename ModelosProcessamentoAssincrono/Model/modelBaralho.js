const Model = {
    deckId: null,
    cartas: [],
    async gerarBaralho() {
      const response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
      const data = await response.json();
      this.deckId = data.deck_id;
    },
    async selecionarCartas() {
      const response = await fetch(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=4`);
      const data = await response.json();
      this.cartas = data.cards;
    },
  };