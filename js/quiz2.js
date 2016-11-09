// write jQuery or vanilla javascript to do the following:
//  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

(function($){
	$('.links li a').on('click', function(e) {
		e.preventDefault()
		alert('you clicked a link, good for you');
	});

	console.log("this is a message for you!!!")
})(jQuery);

$(document).ready(function(){
  happy();
  $("#toShow").hide();
  $(".panel").hide();

  $( "#changeList li" ).each(function(index) {
    var item = $(this);
    this.style.color="blue";
    $(this).text("I am number "+(index+1));
  });

  $("#clearButton").click(function(event){
    $("#toFade").fadeOut("slow",function() {
      $("#toShow").show();
    });
  });

  $("#panel1Button").click(function(event){
    if($("#panel1").css('display')=="none"){
      $("#panel1").fadeIn("slow");
    }
    else{
      $("#panel1").fadeOut("slow");
    }
  });

  $("#panel2Button").click(function(event){
    if($("#panel2").css('display')=="none"){
      $("#panel2").fadeIn("slow");
    }
    else{
      $("#panel2").fadeOut("slow");
    }
  });
});


function happy(){
  console.log("This is simple and makes me happy.\n");
}
