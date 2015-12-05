
$(document).ready(function() {




// When Click...
$(".hamburger").click( function () {
  // Do the Magic
$(".hamburger-nav").fadeToggle("fast");
});
});

$(document).ready(function() {

  $("#submit-btn").on('click', function(event) {
    event.preventDefault();
    $('fb-share-button').show();
});
});
