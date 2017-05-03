//Select All medium and small shapes in green container
$('#green-container').children('.medium, .small');

//Select ALL shapes regardless of containers or sizes and color
$('.shape');

//Select ALL link tags
$('a');

//Select ALL link tags inside an 'li' tag
$('li').children('a');

//Count the number of small blue circles
$('.small .blue .circle').length;

//PT2
//When btn2 is clicked, disable btn2

$('#button-2').click(function(){
				$(this).prop('disabled', true);
});

//When BTN3 is clicked, set the button message to "Button 3 was clicked"

$('#button-3').click(function(){
				$('#button-message').text('button 3 has been clicked');
});

//PT3
//When any button is clicked, set the button message to "Button [button id] was clicked"

$('#button-3').click(function(){
				$('#button-message').text(`${this.id} has been clicked`);
});
