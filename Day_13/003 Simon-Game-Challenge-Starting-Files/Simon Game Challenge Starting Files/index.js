// Array of button colors
var buttonColours = ["red", "blue", "green", "yellow"];

// Arrays to store the game pattern and user's clicked pattern
var gamePattern = [];
var userClickedPattern = [];

// Variables to track game state
var started = false;
var level = 0;

// Event listener for key press to start the game
$(document).keypress(function() {
    if (!started) {
        // Update level title and start the game
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

// Event listener for button click
$(".btn").click(function() {
    // Get the color of the clicked button
    var userChosenColour = $(this).attr("id");
    // Add the color to the user's clicked pattern
    userClickedPattern.push(userChosenColour);

    // Play sound and animate button press
    playSound(userChosenColour);
    animatePress(userChosenColour);

    // Check if the user's pattern is correct
    checkAnswer(userClickedPattern.length-1);
});

// Function to check if the user's pattern is correct
function checkAnswer(currentLevel) {
    // Check if the current color in the game pattern matches the user's clicked pattern
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        // If the user has completed the pattern, proceed to the next level
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        // If the user's pattern is incorrect, play wrong sound, show game over message, and restart the game
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

// Function to generate the next color in the game pattern
function nextSequence() {
    // Reset the user's clicked pattern
    userClickedPattern = [];
    // Increment the level and update level title
    level++;
    $("#level-title").text("Level " + level);
    // Generate a random number between 0 and 3
    var randomNumber = Math.floor(Math.random() * 4);
    // Get the color corresponding to the random number
    var randomChosenColour = buttonColours[randomNumber];
    // Add the color to the game pattern
    gamePattern.push(randomChosenColour);

    // Show the color by fading in and out
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    // Play sound for the color
    playSound(randomChosenColour);
}

// Function to animate button press
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

// Function to play sound
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// Function to restart the game
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
