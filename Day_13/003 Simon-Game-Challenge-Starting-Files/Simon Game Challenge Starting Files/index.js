
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColours[nextSequence()];

var gamePattern = [];
gamePattern.push(randomChosenColour);

function nextSequence(){
    var randomNumber = (Math.floor((Math.random() * 4)+0));
    // the above line will generate a random number between 0 and 2. 
    // Math.random() generates a random number between 0 and 1.
    // Math.floor() will round off the number to the nearest integer.
    // So, if Math.random() generates 0.5, then Math.floor(0.5) will be 0.

    //*****************************************************
    // if i want a radom number of range x to y, then i will use Math.floor(Math.random() * (y - x + 1)) + x) 
    //*****************************************************
    //why +1? because Math.random() generates a number between 0 and 1, so if i want to generate a number between 0 and 2, then i will use Math.floor(Math.random() * (2 - 0 + 1)) + 0 = Math.floor(Math.random() * 3) + 0 = Math.floor(Math.random() * 3) = 0, 1, 2. 
    // why +x? because i want to start the range from x.
    return randomNumber;


}
