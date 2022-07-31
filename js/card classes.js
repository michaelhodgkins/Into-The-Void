class Void {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

//Endurance 
class Endurance extends Void {
    constructor(health, strength) {
        super(health, strength)
    }
}
    receiveDamage(damage) {
    this.health -= damage;
    if(this.health = 0) {
        return 
    }
}

//Darkness
class Darkness extends Void {
    constructor(health, strength) {
        super(health, strength)
    }
}
receiveDamage(damage) {
    this.health -= damage;
    if(this.health = 0) {
        return ('You have failed');
    }
}
//Intelligence 
class Intelligence extends Void {
    constructor(health, strength) {
        super(health, strength)
    }
}
receiveDamage(damage) {
    this.health -= damage;
    if(this.health = 0) {
        
    }
}

// Deck
class Deck {
    constructor() {
        this.cardDeck = [];
    }

    addEndurance(Endurance) { //adding group 1 to card deck 
        this.cardDeck.push(Endurance);
    }

    addDarkness(Darkness) { //adding group 2 to card deck 
        this.cardDeck.push(Darkness);
    }

    addIntelligence(Intelligence) { //adding group 3 to card deck 
        this.cardDeck.push(Intelligence);
    }


}

//shuffle
//random card picked