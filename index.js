// Create an Array of at least 3 losing messages
const lose = ["Sorry, try again", "Not a winner", "Try again"]

// Create variables to count wins and losses
var totalWins = 0;
var totalLoses = 0;

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var message = document.getElementById("message");
var wins = document.getElementById("wins");
var loses = document.getElementById("losses");

// target all .box elements and attach a click event listener to each one using a loop
const boxElements = document.querySelectorAll(".box")
boxElements.forEach((element) => element.addEventListener("click", boxClick));

// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable
function boxClick (){
    var boxNumber = parseInt(this.textContent);

// create a random number between 1-3 and store it to a variable
// This number will represent the winning box
    var boxWin = Math.floor((Math.random() * 3) + 1);

// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins
    if (boxWin == boxNumber){
        message.innerHTML = "You won!"
        totalWins += 1
        wins.innerHTML = "Wins: " + totalWins
    }


// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses
    else {
        message.innerHTML = lose [Math.floor(Math.random() * lose.length)]
        totalLoses += 1 
        loses.innerHTML = "Losses: " + totalLoses
    }
}