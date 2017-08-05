// variable declarations for game elements
let gameTiles = document.getElementsByClassName('game_tile');
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
//      this adds to the original class name "game_tile":         
//      gameTiles[i].className += cardArray[j];
    } 
} 

// click response (working)
let gameTileClick = document.getElementsByTagName('button');
    for (let i = 0; i < gameTileClick.length; i++) {
        gameTileClick[i].addEventListener('click', changeCardImage);
    }

// testing grounds:

let cardOne = document.getElementsByClassName('one');
let cardTwo = document.getElementsByClassName('two');
let cardThree = document.getElementsByClassName('three')
let cardFour = document.getElementsByClassName('four')
let cardFive = document.getElementsByClassName('five')
let cardSix = document.getElementsByClassName('six')
let cardSeven = document.getElementsByClassName('seven')
let cardEight = document.getElementsByClassName('eight')
let cardNine = document.getElementsByClassName('nine')
let cardTen = document.getElementsByClassName('ten')
let cardEleven = document.getElementsByClassName('eleven')
let cardTwelve = document.getElementsByClassName('twelve')

function changeCardImage(cardArray) {
    if (cardArray.className == 'one') {
        cardArray.className = 'card_one_img'
    } else if (cardArray.className == "card_one_img") {
        cardArray.className = "one"    
    }
}



// function to recognize paired clicks:

//
//function clickMatch() {
//    if (cardOne.class === cardOne.class) {console.log('test');}
//}
//
//console.log(cardOne);
//console.log(cardTwo);


//// function to log clicks (off):

//function testFunction() {
//    console.log('test');
//}
     