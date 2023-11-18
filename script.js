import Deck from "./deck.js";

const BLUES = ["San Francisco", "Chicago", "Atlanta", "Toronto", "New York", "Washington", "London", "Madrid", "Paris", "Milan", "Essen", "St Petersburg"];
const REDS = ["Seoul", "Tokyo", "Osaka", "Beijing", "Shanghai", "Taipei", "Hong Kong", "Manila", "Bangkok", "Ho Chi Minh City", "Jakarta", "Sydney"];
const BLACKS = ["Moscow", "Istanbul", "Baghdad", "Tehran", "Algiers", "Cairo", "Riyadh", "Karachi", "Delhi", "Kolkata", "Mumbai", "Chennai"]
const YELLOWS = ["Los Angeles", "Mexico City", "Miami", "Sao Paulo", "Lagos", "Khartoum", "Santiago", "Lima", "Bogota", "Buenos Aires", "Kinshasa", "Johannesburg"];
const roles = ["Dispatcher", "Medic",  "Quarantine", "Reasearcher", "Scientist"];
const playerDeck = document.querySelector('.playerdeck');
const map = document.querySelector('.map');
const playerOnePin = 'assets/board/dispatcher_pin_piece.png';
const playerTwoPin = 'assets/board/medic_pin_piece.png';

var playerOne;
var playerTwo;

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

    playerOne = {
        role: "Dispatcher",
        hand: deckPlayer.cards.slice(0, 3),
        actionPoints: 3,
        playerpos: {y: 0, x: 0}
    };

    playerTwo = {
        role: "Scientist",
        hand: deckPlayer.cards.slice(3, 6),
        actionPoints: 3,
        playerpos: {y: 10, x: 5}
    };

    makeMap()
    
    infectedCity = deckInfection.pop();
    // infectCityStart();
} 

function infectCityStart() {

}

function infectCity () {

}


function makeMap() {
    var maxRow = 5;
    var maxColumn = 10;
    var row = 1;
    var column = 1;
    BLUES.forEach(function(cityName) {
        const city = document.createElement('div');
        city.classList.add('blueCity');
        if (row <= maxRow ){
            if(column <= maxColumn) {
                city.dataset.position = `(${row} ${column})`
                column++;
            } else {
                column = 1;
                row++;
            }
        }
        city.innerText = cityName;

        map.appendChild(city);

        if (row === playerOne.playerpos.y && column === playerOne.playerpos.x) {
            const player1 = playerHTML(1,playerOnePin);
            city.appendChild(player1)
        }

        if (row === playerTwo.playerpos.y && column === playerTwo.playerpos.x) {
            const player2 = playerHTML(2,playerTwoPin);
            city.appendChild(player2)
        }

        city.addEventListener('click', function() {
            const positionClicked = {row, column};
            if (canMove(playerOne.playerpos, positionClicked) && !(playerTwo.playerpos.y === positionClicked.row && playerTwo.playerpos.x === positionClicked.column)) {
                movPlayer(1, playerOnePin, positionClicked);
            } else if (canMove(playerTwo.playerpos, positionClicked) && !(playerOne.playerpos.y === positionClicked.row && playerOne.playerpos.x === positionClicked.column)) {
                movPlayer(2, playerTwoPin, positionClicked);
            } else {
                console.log("Invalid");
            }
        })


    });

    REDS.forEach(function(cityName) {
        const city = document.createElement('div');
        city.classList.add('redCity');
        if (row <= maxRow ){
            if(column <= maxColumn) {
                city.dataset.position = `(${row} ${column})`
                column++;
            } else {
                column = 1;
                row++;
            }
        }
        city.innerText = cityName;

        map.appendChild(city);

        if (row === playerOne.playerpos.y && column === playerOne.playerpos.x) {
            const player1 = playerHTML(1,playerOnePin);
            city.appendChild(player1)
        }

        if (row === playerTwo.playerpos.y && column === playerTwo.playerpos.x) {
            const player2 = playerHTML(2,playerTwoPin);
            city.appendChild(player2)
        }

        city.addEventListener('click', function() {
            const positionClicked = {row, column};
            if (canMove(playerOne.playerpos, positionClicked) && !(playerTwo.playerpos.y === positionClicked.row && playerTwo.playerpos.x === positionClicked.column)) {
                movPlayer(1, playerOnePin, positionClicked);
            } else if (canMove(playerTwo.playerpos, positionClicked) && !(playerOne.playerpos.y === positionClicked.row && playerOne.playerpos.x === positionClicked.column)) {
                movPlayer(2, playerTwoPin, positionClicked);
            } else {
                console.log("Invalid");
            }
        })


    });

    YELLOWS.forEach(function(cityName) {
        const city = document.createElement('div');
        city.classList.add('yellowCity');
        if (row <= maxRow ){
            if(column <= maxColumn) {
                city.dataset.position = `(${row} ${column})`
                column++;
            } else {
                column = 1;
                row++;
            }
        }
        city.innerText = cityName;

        map.appendChild(city);

        if (row === playerOne.playerpos.y && column === playerOne.playerpos.x) {
            const player1 = playerHTML(1,playerOnePin);
            city.appendChild(player1)
        }

        if (row === playerTwo.playerpos.y && column === playerTwo.playerpos.x) {
            const player2 = playerHTML(2,playerTwoPin);
            city.appendChild(player2)
        }

        city.addEventListener('click', function() {
            const positionClicked = {row, column};
            if (canMove(playerOne.playerpos, positionClicked) && !(playerTwo.playerpos.y === positionClicked.row && playerTwo.playerpos.x === positionClicked.column)) {
                movPlayer(1, playerOnePin, positionClicked);
            } else if (canMove(playerTwo.playerpos, positionClicked) && !(playerOne.playerpos.y === positionClicked.row && playerOne.playerpos.x === positionClicked.column)) {
                movPlayer(2, playerTwoPin, positionClicked);
            } else {
                console.log("Invalid");
            }
        })


    });

    BLACKS.forEach(function(cityName) {
        const city = document.createElement('div');
        city.classList.add('blackCity');
        if (row <= maxRow ){
            if(column <= maxColumn) {
                city.dataset.position = `(${row} ${column})`
                column++;
            } else {
                column = 1;
                row++;
            }
        }
        city.innerText = cityName;

        map.appendChild(city);

        if (row === playerOne.playerpos.y && column === playerOne.playerpos.x) {
            const player1 = playerHTML(1,playerOnePin);
            city.appendChild(player1)
        }

        if (row === playerTwo.playerpos.y && column === playerTwo.playerpos.x) {
            const player2 = playerHTML(2,playerTwoPin);
            city.appendChild(player2)
        }

        city.addEventListener('click', function() {
            const positionClicked = {row, column};
            if (canMove(playerOne.playerpos, positionClicked) && !(playerTwo.playerpos.y === positionClicked.row && playerTwo.playerpos.x === positionClicked.column)) {
                movPlayer(1, playerOnePin, positionClicked);
            } else if (canMove(playerTwo.playerpos, positionClicked) && !(playerOne.playerpos.y === positionClicked.row && playerOne.playerpos.x === positionClicked.column)) {
                movPlayer(2, playerTwoPin, positionClicked);
            } else {
                console.log("Invalid");
            }
        })


    });
}


function checkWin() {
    
}

// console.log(deckInfection.cards)
// console.log(deckPlayer.cards) 

function setup () {}
// stuff to get the game ready and started like setting infections on cities, 
// randomizing roles

function canMove (curPos, newPos) {
    const rowCheck = Math.abs(curPos.y - newPos.row);
    const columnCheck = Math.abs(curPos.x - newPos.column);
    return (rowCheck === 0 && columnCheck === 1) || (rowCheck === 1 && columnCheck === 0)
}
// check city connections

function movPlayer(playerNum, playerPin, position) {
    const playerImgClass = `player${playerNum}-pin`;
    const playerPinImg = playerHTML(playerPin);
    const newPlayerArea = map.children[position.row * 10 + position.column];
    const oldPlayerArea = map.querySelector(`.${playerNum === 1 ? 'player1-pin' : 'player2-pin'}`);
    if (oldPlayerArea) {
        oldPlayerArea.parentNode.removeChild(oldPlayerArea);
    }

    if (playerNum === 1) {
        const areaOccupied = newPlayerArea.querySelector(`player2-pin`);
        if (areaOccupied) {
            console.log('Invalid');
            return;
        }
    }

    if (playerNum === 2) {
        const areaOccupied = newPlayerArea.querySelector(`player1-pin`);
        if (areaOccupied) {
            console.log('Invalid');
            return;
        }
    }

    newPlayerArea.appendChild(playerPin);

    if (playerNum === 1) {
        playerOne.playerpos.y = position.row;
        playerOne.playerpos.x = position.column;
    }

    if (playerNum === 2) {
        playerTwo.playerpos.y = position.row;
        playerTwo.playerpos.x = position.column;
    }

}


function playerHTML(playerNum, pic) {
    const playerPin = document.createElement('img');
    playerPin.src = pic;
    playerPin.classList.add(`player${playerNum}-pin`);
    return playerPin;
}







