const BLUES = ["San Francisco", "Chicago", "Atlanta", "Toronto", "New York", "Washington", "London", "Madrid", "Paris", "Milan", "Essen", "St Petersburg"]
const REDS = ["Seoul", "Tokyo", "Osaka", "Beijing", "Shanghai", "Taipei", "Hong Kong", "Manila", "Bangkok", "Ho Chi Minh City", "Jakarta", "Sydney"]
const BLACKS = ["Moscow", "Istanbul", "Baghdad", "Tehran", "Algiers", "Cairo", "Riyadh", "Karachi", "Delhi", "Kolkata", "Mumbai", "Chennai"]
const YELLOWS = ["Los Angeles", "Mexico City", "Miami", "Sao Paulo", "Lagos", "Khartoum", "Santiago", "Lima", "Bogota", "Buenos Aires", "Kinshasa", "Johannesburg"]

export default class Deck {
    constructor(blueCards = blueDeck(), redCards = redDeck(), blackCards = blackDeck(), yellowCards = yellowDeck()) {
        this.cards = blueCards.concat(redCards.concat(blackCards.concat(yellowCards)))
    }

    shuffleDeck () { // randomizing algorithm taken from 
        for (let i = this.cards.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldVal = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldVal
        }
    }
}

class Card {
    constructor(color, city) {
        this.color = color;
        this.city = city;
    }
}

function blueDeck () {
    let color = "Blue";
    return BLUES.map(city => {
        return new Card(color, city)
    })
}

function redDeck () {
    let color = "Red";
    return REDS.map(city => {
        return new Card(color, city)
    })
}

function blackDeck () {
    let color = "Black";
    return BLACKS.map(city => {
        return new Card(color, city)
    })
}

function yellowDeck () {
    let color = "Yellow";
    return YELLOWS.map(city => {
        return new Card(color, city)
    })
}