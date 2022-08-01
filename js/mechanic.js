class CardGame {
    constructor(cards) {
        this.cards = cards;
    }
}

shuffleCards() {
    let copyCards = [...this.cards];
    let shuffled = [];
    for(let i = 0; i < this.cards.length; i++) {
        let randomIndex = Math.floor(Math.random() * copyCards.length);
        shuffled.push(copyCards[randomIndex]);
        copyCards.splice(randomIndex, 1);
    }
    this.cards = shuffled;
}