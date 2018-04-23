
$('.colors').click(function () {

    var chosen_color = $(this).css('background-color');
    $('#canvas').css('background-color', chosen_color);
    

	// alert("nice hull color sparky");
      
	
	var color_name = $(this).attr('id');

//	$('#canvas').html(color_name);
	$('#hull-color').html("Hull:   " + color_name);
    
	
	$('#results').html(chosen_color + "was selected");
	
	
	
	

    //	alert(chosen_color);

});

$('.dcolors').click(function () {

    var chosen_color = $(this).css('background-color');
    $('#canvas-deck').css('background-color', chosen_color);
    
	var color_name = $(this).attr('id');
//	$('#canvas-deck').html(color_name);
	$('#deck-color').html("Deck:  " + color_name);
	
	//  alert("nice deck color sparky");
	
	
    //   alert(Value);	

    $('#results').html(chosen_color + "was selected");

    //	alert(chosen_color);

});


$('.tape').click(function () {

    var chosen_color = $(this).css('background-color');
    $('#canvas-tape').css('background-color', chosen_color);
    
	
	var color_name = $(this).attr('id');
//    $('#canvas-tape').html(color_name);
	$('#tape-color').html("Tape:  " + color_name);
	
	
	//   alert(Value);	

    $('#results').html(chosen_color + "was selected");

    //	alert(chosen_color);

});




   $('#refresh-btn').click(function(){
				
				$('#canvas').css('background-color', '#000000');
				$('#canvas-deck').css('background-color', '#000000');
				$('#canvas-tape').css('background-color', 'white');
				
				$('#hull-color').html("");
				$('#deck-color').html("");
				$('#tape-color').html("");
				
				$('.textures').css('background-color', 'white');
				$('#message-output').html("");
				$('#recipient-output').html("");
				$('#canvas').css('background-image', "");
				$('img.stickers.stickers_on_card.ui-draggable').css('visibility', 'hidden');
				$('input#recipient').html("");
				$('#bold-btn').prop('value','Bold');
								});
   
   				
				
 
  
  
  
 
		
		