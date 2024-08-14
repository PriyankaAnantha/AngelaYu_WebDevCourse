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
        $("#level-title").text("Game Over, Press Any Key or start button to Restart");

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



// i am not understanding the logic of the game
// logic of the game
// 1. The game will start with the level 0 and the level title will be "Level 0".   
// 2. The game will generate a random color and play the sound for that color.
// 3. The player will have to click on the button with the same color as the one shown by the game.
// 4. If the player clicks the correct color, the game will generate another random color and play the sound for that color.
// 5. The player will have to remember the sequence of colors and click on the buttons in the same sequence.
// 6. If the player clicks the wrong color, the game will play the wrong sound and the game will be over.
// 7. The player can restart the game by pressing any key after the game is over.
// 8. The game will keep track of the level and update the level title accordingly.
// 9. The game will keep track of the game pattern and the player's clicked pattern.
// 10. The game will check if the player's clicked pattern matches the game pattern at each level.
// 11. If the player completes the game pattern for a level, the game will proceed to the next level.
// 12. The game will keep track of the game state to prevent multiple key presses to start the game.
// 13. The game will play the sound and animate the button press when the player clicks a button.
// 14. The game will restart the game when the player clicks the wrong color.
// 15. The game will show a game over message and play the wrong sound when the player clicks the wrong color.
// 16. The game will restart the game when the player presses any key after the game is over.




// Get the modal
var modal = document.getElementById("game-description-modal");

// Get the button that opens the modal
var btn = document.getElementById("description-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(document).ready(function() {
    var gameStarted = false;
  
    // Function to start the game
    function startGame() {
      if (!gameStarted) {
        gameStarted = true;
        // Your existing game start logic here
        nextSequence();
      } else {
        startOver();
        nextSequence();
      }
    }
  
    // Start game on keypress
    $(document).keypress(function() {
      startGame();
    });
  
    // Start game on button click
    $("#start-button").click(function() {
      startGame();
    });
  });