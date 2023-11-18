import Deck from "./deck.js";

const BLUES = ["San Francisco", "Chicago", "Atlanta", "Toronto", "New York", "Washington", "London", "Madrid", "Paris", "Milan", "Essen", "St Petersburg"];
const REDS = ["Seoul", "Tokyo", "Osaka", "Beijing", "Shanghai", "Taipei", "Hong Kong", "Manila", "Bangkok", "Ho Chi Minh City", "Jakarta", "Sydney"];
const BLACKS = ["Moscow", "Istanbul", "Baghdad", "Tehran", "Algiers", "Cairo", "Riyadh", "Karachi", "Delhi", "Kolkata", "Mumbai", "Chennai"]
const YELLOWS = ["Los Angeles", "Mexico City", "Miami", "Sao Paulo", "Lagos", "Khartoum", "Santiago", "Lima", "Bogota", "Buenos Aires", "Kinshasa", "Johannesburg"];
const roles = ["Dispatcher", "Medic",  "Quarantine", "Reasearcher", "Scientist"];
const playerDeck = document.querySelector('.playerdeck');
const map = document.querySelector('.map');

let gameRunning = false;
let infectedCity = '';

setUp();

function setUp() {
    gameRunning = true

    const deckInfection = new Deck();
    const deckPlayer = new Deck();
    deckInfection.shuffleDeck();
    deckPlayer.shuffleDeck();

    var outbreakNum = 0;

    const playerOne = {
        role: "Dispatcher",
        hand: deckPlayer.cards.slice(0, 3),
        actionPoints: 3

    };

    const playerTwo = {
        role: "Scientist",
        hand: deckPlayer.cards.slice(3, 6),
        actionPoints: 3

    };

    // make map first 
    
    infectedCity = deckInfection.pop();
    infectedCity();
} 

function infectCity() {

}


function makeMap() {
    var maxRow = 5;
    var maxColumn = 10;
    var row = 1;
    var column = 1;
    BLUES.forEach(function(cityName) {
        const city = document.createElement('div');
        city.classList.add('blueCity');
        if (row < maxRow){
            if(column < maxColumn) {
                city.dataset.value = `(${row} ${column})`
                column++;
            } else {
                column = 1;
            }
        } else {
            row = 1;
        }

        city.dataset.value = `(${})`
        city.innerText = cityName;

        map.appendChild(city);


    });
}

function checkWin() {
    
}

// console.log(deckInfection.cards)
// console.log(deckPlayer.cards) 

function setup () {}
// stuff to get the game ready and started like setting infections on cities, 
// randomizing roles

function randomizeDeck () {}
// randomize the infection and player deck

function canMove () {}
// check city connections

function updateActions () {}
// update action points/tracking player actions

function updateMapInfection () {}
// add or delete infections

function outbreak () {}
// if a level 3 infected city gets infected, the adjacent cities gains the additional infection

function checkOutbreak () {}
// if outbreak level gets to 5, its gameover

function checkWin () {}
// if all cures are made and all cities have infection level 0

function movePins () {}
// animation of moving the pins of players

function updateCureStatus () {}
// visual of creating the cures

function drawAnimation () {}
// visual of taking a card from deck and putting on hand

function infectionAnimation () {}
// "toxic" clouds animations on cities

function cureAnimation () {}
// cure drops on cities




