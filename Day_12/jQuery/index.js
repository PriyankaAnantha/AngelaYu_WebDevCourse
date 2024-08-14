$('h1').css('color', '#brown');

// adding a class to the h1 element
$('h1').addClass('big-title');

// manipulating the text of the h1 element
$('h1').text('Good Bye');

// manipulating the html of the h1 element
$('h1').html('<em>Good Bye</em>');

// manipulating the attributes of the h1 element
$('a').attr('href', 'https://www.google.com');

// adding an event listener to the h1 element
$('h1').click(function() {
  $('h1').css('color', 'purple');
});

// adding an event listener to all the buttons
$('button').click(function() {
  $('h1').css('color', 'purple');
});

// adding an event listener to the input element
$('input').keypress(function(event) {
  console.log(event.key);
});

// adding an event listener to the entire document
$(document).keypress(function(event) {
  $('h1').text(event.key);
});

// adding and removing classes
$('h1').addClass('big-title');
//$('h1').removeClass('big-title');
//$('h1').toggleClass('big-title');

// adding and removing elements
$('h1').before('<button>New</button>');
$('h1').after('<button>New</button>');
$('h1').prepend('<button>New</button>');
$('h1').append('<button>New</button>');

// wesite animation with jQuery
$('button').on('click', function() {
  $('h1').slideUp().slideDown().animate({opacity: 0.5});
});



// project idea - keyboard typer game using jQuery
// logic for the game
// algo 
// 1. generate a letter
// 2. display the letter on the screen
// 3. listen for the keypress event
// 4. check if the key pressed is the same as the first letter of the word  
// 5. if it is, remove the first letter of the word and display the next letter
// 6. if the word is empty, generate a new word
// 7. keep track of the score
// 8. display the score on the screen
// 9. if the player types the wrong letter, end the game and display the score


