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


