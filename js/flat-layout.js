$(function(){

	//appends the new figures and their overlays
	function createNewFigures() {
		$('.cube-container').append(

     "<figure class='flat-figure right' id='medtrakr'>" +
      	"<div class='disabled'>" + "<h2>MedTrakr:</h2>" + " a personal medication tracker using Node.js, Express, jQuery, Passport Authentication</div>" +
      "</figure>" +

      "<figure class='flat-figure right' id='connectfour'>" +
      	"<div class='disabled'>" + "<h2>Connect Four:</h2>" + " a static website using HTML5, CSS3, Javascript, jQuery</div>" +
      "</figure>" +

      "<figure class='flat-figure right' id='oli-and-olive'>" +
      	"<div class='disabled'>" + "<h2>Oli & Olive:</h2> "+ " a personalized landing page using Ruby, Rails, Devise, and the DarkSkies API</div>" +
      "</figure>" +

      "<figure class='flat-figure right' id='space'>" +
      	"<div class='disabled'>" + "<h2>Space:</h2>" + " a single page educational 3D animated model of the Solar System using HTML5, CSS3, Angular, Node.js, Express, MongoDB, Passport Authentication</div>" +
      "</figure>" +

      "<figure class='flat-figure left' id='enigmatic'>" + 
		 		"<div class='disabled'>" + "<h2>Enigmatic:</h2>" + " an AES 256 encrypted private messaging web application using Node.js, Express, Socket.io, MongoDB, Crypto, Passport Authentication, and Facebook Oauth</div>" +
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

		//when you click on the project, the disabled class is removed to reveal
		//the information about the project
		$('.flat-figure').on('click', function(e){
				var $childDiv = $(this).children(':first');
				$childDiv.removeAttr('class', 'disabled');
				$childDiv.attr('class', 'overlay');

			$('.overlay').on('click', function(e){
				$(this).addClass('disabled');
				$(this).removeClass('overlay');
				 //because the div is nested within a clickable div, we must stop propagation
				 e.stopPropagation();
			});

			});	





	};


	//clicks the cube to trigger transition into the flipbook display
	$('#cube').click(function(e){
		$('html').off('mousemove');
   // document.removeEventListener;

		$('#cube').remove();
		createNewFigures();
	});










}); //<--window onload