$(function(){


var	counter = 0;
var	projectArray = [
			{
				"name": "Connect Four",
				"img": "./media/images/connectfour.png",
				"url": "http://aadams22.github.io/connectfour/",
				"github": "https://github.com/aadams22/connectfour",
				"description": " a static website using HTML5, CSS3, Javascript, jQuery"

			},
			{
				"name": "MedTrakr",
				"img": "./media/images/medtrakr2.png",
				"url": "https://medtrakr.herokuapp.com/",
				"github": "https://github.com/aadams22/MedTrakr2.0",
				"description": "a personal medication tracker using Node.js, Express, jQuery, Passport Authentication"
			},
			{
				"name": "enigmatic",
				"img": "./media/images/enigmatic.png",
				"url": "http://enig-matic.herokuapp.com/",
				"github": "https://github.com/aadams22/enigmatic",
				"description": " an AES 256 encrypted private messaging web application using Node.js, Express, Socket.io, MongoDB, Crypto, Passport Authentication, and Facebook Oauth"

			},
			{
				"name" : "Oli & Olive",
				"img" : "./media/images/oliandolive.png",
				"url": "http://oli-and-olive.herokuapp.com/",
				"github": "https://github.com/aadams22/oli-and-olive",
				"description": "a personalized landing page using Ruby, Rails, Devise, and the DarkSkies API"
			},
			{
				"name": "Space",
				"img": "./media/images/planets.png",
				"url": "https://dry-wave-29594.herokuapp.com/",
				"github": "https://github.com/salinetti81/sad_space",
				"description": " a single page educational 3D animated model of the Solar System using HTML5, CSS3, Angular, Node.js, Express, MongoDB, Passport Authentication"
			}

		]


		function createCarousel(){
			console.log('carousel created.', projectArray[counter].name);

				$("#projects").append(
					"<img id='0' src='" + projectArray[0].img + "'></img>" +
					"<img id='1' src='" + projectArray[1].img + "'></img>" +
					"<img id='2' src='" + projectArray[2].img + "'></img>" +
					"<img id='3' src='" + projectArray[3].img + "'></img>" +
					"<img id='4' src='" + projectArray[4].img + "'></img>" 
				);

			$("img").hover(
			function(){
				console.log($(this).attr('id'));
			}, function(){

			});

		}; 



		// $('#return-to-cube').on('click', function(e){
		// 	console.log('return to cube clicked');
		// 	$('figure').remove();
		// 	$('.left-right-buttons').remove();
		// 	$('#return-to-cube').remove();

		// 	$('.cube-container').append(
		// 	"<div class='cube-container'" +
		// 	"<div id='cube'>" +
  //      " <figure class='front' id='projects'>" + "<h2>Projects</h2>" + "</figure>" +
  //      " <figure class='back' id='oli-and-olive'></figure>" +
  //      " <figure class='right' id='enigmatic'></figure>" +
  //      " <figure class='left' id='medtrakr'></figure>" +
  //      " <figure class='top' id='connectfour'></figure>" +
  //      " <figure class='bottom' id='space'></figure>" +
  //     "</div>" +
  //     "</div>"

		// 	);
		// });








	//clicks the cube to trigger transition into the flipbook display
	$('#project-link').click(function(e){
		$('.cube-container').remove();
		createCarousel();
	});





}); //<--window onload