// variable declarations for game elements
let gameBoard = document.getElementById('game_board');
let gameTiles = document.getElementsByClassName('game_tile');
let cardMatchCheck = [];
let mismatchedCards = [];
let cardArray = 
    [ "one", "one", "two", "two", "three", "three", 
     "four", "four", "five", "five", "six", "six", 
    "seven", "seven", "eight", "eight", "nine", "nine", 
     "ten", "ten", "eleven", "eleven", "twelve", "twelve" ];

// div class assignment for loop from the cardArray
// .className += allows for adding to an already assigned class
// in this case "game_tile" (our button class)

for (let i = 0; i < gameTiles.length; i++) {
    for (let j = 0; j < cardArray.length; j++) {
        gameTiles[i].setAttribute("class", cardArray[j]);
    } 
} 

// click response (working)
let gameTileClick = document.getElementsByTagName('button');
    for (let i = 0; i < gameTileClick.length; i++) {
        gameTileClick[i].addEventListener('click', changeCardImage, cardMatchCheck);
}

// testing grounds:

// this function runs through all card classes, and switches 
// between both card image states (back, front, back)
// need to work on implementing the pair recognition

//function changeCardImage(cardArray) {
//    if (cardArray.className == 'one') {
//        cardArray.className = 'game_tile';
//        cardMatchCheck.push(cardArray.className);
//        cardMatch();
//    }
//}

function changeCardImage(cardArray) {
    if (cardArray.className == 'one') {
        cardArray.className = 'one_img'
        cardMatchCheck.push(cardArray.className);
        cardMatch();
    } else if (cardArray.className == 'one_img') {
        cardArray.className = "one"    
    } else if (cardArray.className == 'two') {
        cardArray.className = 'two_img'
        cardMatchCheck.push(cardArray.className);
        cardMatch();
    } else if (cardArray.className == 'two_img') {
        cardArray.className = 'two'
    } else if (cardArray.className == 'three') {
        cardArray.className = 'three_img'
        cardMatchCheck.push(cardArray.className);
        cardMatch();
    } else if (cardArray.className == 'three_img') {
        cardArray.className = 'three'
    } else if (cardArray.className == 'four') {
        cardArray.className = 'four_img'
        cardMatchCheck.push(cardArray.className);
        cardMatch();
    } else if (cardArray.className == 'four_img') {
        cardArray.className = 'four'
    } else if (cardArray.className == 'five') {
        cardArray.className = 'five_img'
        cardMatchCheck.push(cardArray.className);
        cardMatch();
    } else if (cardArray.className == 'five_img') {
        cardArray.className = 'five'
    } else if (cardArray.className == 'six') {
        cardArray.className = 'six_img'
        cardMatchCheck.push(cardArray.className);
        cardMatch();
    } else if (cardArray.className == 'six_img') {
        cardArray.className = 'six'
    } else if (cardArray.className == 'seven') {
        cardArray.className = 'seven_img'
        cardMatchCheck.push(cardArray.className);
        cardMatch();
    } else if (cardArray.className == 'seven_img') {
        cardArray.className = 'seven'
    }  else if (cardArray.className == 'eight') {
        cardArray.className = 'eight_img'
        cardMatchCheck.push(cardArray.className);
        cardMatch();
    } else if (cardArray.className == 'eight_img') {
        cardArray.className = 'eight'
    }  else if (cardArray.className == 'nine') {
        cardArray.className = 'nine_img'
        cardMatchCheck.push(cardArray.className);
        cardMatch();
    } else if (cardArray.className == 'nine_img') {
        cardArray.className = 'nine'
    }  else if (cardArray.className == 'ten') {
        cardArray.className = 'ten_img'
        cardMatchCheck.push(cardArray.className);
        cardMatch();
    } else if (cardArray.className == 'ten_img') {
        cardArray.className = 'ten'
    }  else if (cardArray.className == 'eleven') {
        cardArray.className = 'eleven_img'
        cardMatchCheck.push(cardArray.className);
        cardMatch();
    } else if (cardArray.className == 'eleven_img') {
        cardArray.className = 'eleven'
    }  else if (cardArray.className == 'twelve') {
        cardArray.className = 'twelve_img'
        cardMatchCheck.push(cardArray.className);
        cardMatch();
    } else if (cardArray.className == 'twelve_img') {
        cardArray.className = 'twelve'
    } 
}

// function for checking card match

function cardMatch() {
    if (cardMatchCheck[0] === cardMatchCheck[1]) {
        cardMatchCheck.splice(0,cardMatchCheck.length)
        testLength();
        alert('Match!');
        console.log(cardMatchCheck);
    } else if (cardMatchCheck[0] !== cardMatchCheck[1]) {
        alert('No Match!');
        testLength();
        console.log(cardMatchCheck);
    } console.log(cardMatchCheck.length, cardMatchCheck);
      
}


// function for card mismatch
////
//function cardMismatch() {
//    if (cardMatchCheck[0] !== cardMatchCheck[1]) {
//        cardMatchCheck.push(mismatchedCards);
//        testLength();
//        console.log(cardMismatch);
//        console.log('mis-match');
//    }
//}

function testLength() {
    if (cardMatchCheck.length >= 2) {
        cardMatchCheck = [];
    }
}


// this adds to the original class name "game_tile": 

// gameTiles[i].className += cardArray[j];

// not sure if i'll need these...redudant var storage for what i seem
// to be able to reference with just the cardArray.classname property:

//let cardOne = document.getElementsByClassName('one');
//let cardTwo = document.getElementsByClassName('two');
//let cardThree = document.getElementsByClassName('three')
//let cardFour = document.getElementsByClassName('four')
//let cardFive = document.getElementsByClassName('five')
//let cardSix = document.getElementsByClassName('six')
//let cardSeven = document.getElementsByClassName('seven')
//let cardEight = document.getElementsByClassName('eight')
//let cardNine = document.getElementsByClassName('nine')
//let cardTen = document.getElementsByClassName('ten')
//let cardEleven = document.getElementsByClassName('eleven')
//let cardTwelve = document.getElementsByClassName('twelve')
