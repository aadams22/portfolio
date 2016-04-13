$(function(){

	//appends the new div overlays
	function createNewFigures() {
		$('.cube-container').append(

     "<figure class='flat-figure right' id='medtrakr'>" +
      	"<div class='disabled'>MedTrakr: a personal medication tracker using Node.js, Express, jQuery, Passport Authentication</div>" +
      "</figure>" +

      "<figure class='flat-figure right' id='connectfour'>" +
      	"<div class='disabled'>Connect Four: a static website using HTML5, CSS3, Javascript, jQuery</div>" +
      "</figure>" +

      "<figure class='flat-figure right' id='oli-and-olive'>" +
      	"<div class='disabled'>Oli & Olive: a personalized landing page using Ruby, Rails, Devise, and the DarkSkies API</div>" +
      "</figure>" +

      "<figure class='flat-figure right' id='space'>" +
      	"<div class='disabled'>Space: a single page educational 3D animated model of the Solar System using HTML5, CSS3, Angular, Node.js, Express, MongoDB, Passport Authentication</div>" +
      "</figure>" +

      "<figure class='flat-figure left' id='enigmatic'>" + 
		 		"<div class='disabled'>Enigmatic: an AES 256 encrypted private messaging web application using Node.js, Express, Socket.io, MongoDB, Crypto, Passport Authentication, and Facebook Oauth</div>" +
		 	"</figure>");

		$("<ul class='left-right'>" + "<li id='l'>&#xE805</li>" + "<li id='r'>&#xE806</li>" + "</ul>").insertAfter('.cube-container');
	
	$('#l').on('click', function(e){

		var $right = $('.right').last();
		$right.removeClass('right');
		$right.addClass('left'); 


	});

	$('#r').on('click', function(e){
		var $left = $('.left').last();
		$left.removeClass('left');
		$left.addClass('right'); 



	});

	};


	//clicks the cube to trigger transition into the flat 2D display
	$('#cube').click(function(e){
		console.log("CUBE HAS BEEN CLICKED!");
		$('#cube').remove();

		createNewFigures();

	}); //<--cube click



	// $('.flat-figure').hover(function(e){
	// 	var $childDiv = $(this).children();
	// 	console.log($this);
	// 	console.log('THIS IS THE CHILD: ', $(this).children());
	// 	console.log('THIS IS THE VARIABLE: ', $childDiv);
	// 	// $childDiv.removeAttr('class', 'disabled');
	// 	$childDiv.attr('class', 'overlay');

	// }, function(e){
	// 	$childDiv.removeAttr('class', 'overlay');
	// });






}); //<--window onload