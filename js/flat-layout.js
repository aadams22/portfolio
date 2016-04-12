$function(function(){

	//appends the new div overlays
	function createNewFigures() {
		$('.cube-container').append(

		 "<figure id='enigmatic'>
		 		<div class='disabled'>Enigmatic: an AES 256 encrypted private messaging web application using Node.js, Express, Socket.io, MongoDB, Crypto, Passport Authentication, and Facebook Oauth</div>
		 	</figure>

      <figure id='medtrakr'>
      	<div class='disabled'>MedTrakr: a personal medication tracker using Node.js, Express, jQuery, Passport Authentication</div>
      </figure>

      <figure id='connectfour'>
      	<div class='disabled'>Connect Four: a static website using HTML5, CSS3, Javascript, jQuery</div>
      </figure>

      <figure id='space'>
      	<div class='disabled'>Space: a single page educational 3D animated model of the Solar System using HTML5, CSS3, Angular, Node.js, Express, MongoDB, Passport Authentication</div>
      </figure>

      <figure id='oli-and-olive'>
      	<div class='disabled'>Oli & Olive: a personalized landing page using Ruby, Rails, Devise, and the DarkSkies API</div>
      </figure>"


			);
	};


	//clicks the cube to trigger transition into the flat 2D display
	$('#cube').click(function(e){
		console.log("CUBE HAS BEEN CLICKED!");
		$('.cube-container').fadeOut('slow');
		$('#cube').remove();

		createNewFigures();

	}); //<--cube click



	$('figure').hover(function(e){
		var $childDiv = $(this).child();
		console.log('THIS IS THE CHILD: ', $(this).child());
		console.log('THIS IS THE VARIABLE: ', $(this).child());
		$childDiv.removeAttr('class', 'disabled');
		$childDiv.attr('class', 'overlay');

	}, function(e){
		$childDiv.removeAttr('class', 'overlay');
	});



}); //<--window onload