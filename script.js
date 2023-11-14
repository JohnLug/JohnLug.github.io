import Deck from "./deck.js"

const deckInfection = new Deck()
const deckPlayer = new Deck()
deckInfection.shuffleDeck()
deckPlayer.shuffleDeck()
console.log(deckInfection.cards)
console.log(deckPlayer.cards) 

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




