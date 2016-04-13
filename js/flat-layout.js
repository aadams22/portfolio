$(function(){

	//appends the new figures and their overlays
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

		$("<ul class='left-right-buttons'>" + "<li id='l'>&#xE805</li>" + "<li id='r'>&#xE806</li>" + "</ul>").insertAfter('.cube-container');
	

		//clicking the left button flips the figures to the right
		var num = null;
		$('#l').on('click', function(e){	
			//z-index counter
			num += 1;
			//grabs the visible figure on the right
			var $rightItem = $('.right').last();
			//removes the right class name and adds the left classname
			$rightItem.removeClass('right');
			$rightItem.addClass('left'); 
			//sets the zIndex of the clicked figure so that other figures can be stacked on top
			$rightItem.css('zIndex', num);
		});

		//clicking the right button flips the figures to the left
		$('#r').on('click', function(e){
			//grabs the visible figure on the left
			var $leftItem = $('.left').last();
			//removes the left class name and adds the right classname
			$leftItem.removeClass('left');
			$leftItem.addClass('right'); 
			//clears the zIndex so other figures can be stacked on top
			$leftItem.css('zIndex', 0);
		});

			var $childDiv = null;
			$('.flat-figure').hover(
				function(e){
					$childDiv = $(this).children(':first');
					console.log($(this));
					console.log('this is the child: ', $childDiv);
					$childDiv.removeAttr('class', 'disabled');
					$childDiv.attr('class', 'overlay');

				}, function(e){
					$childDiv.removeAttr('class', 'overlay');
					$childDiv.attr('class', 'disabled');
			});


	};


	//clicks the cube to trigger transition into the flipbook display
	$('#cube').click(function(e){
		$('#cube').remove();
		createNewFigures();
	});










}); //<--window onload