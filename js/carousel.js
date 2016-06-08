$(function(){

var $overlay = null;
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
			console.log('carousel created.');

				for (var i = 0; i < projectArray.length; i++) {
					$("#projects").append(
						"<div>" +
							"<img id='" + i + "' src='" + projectArray[i].img + "'></img>" +
							"<div class='overlay'>" +
								"<h3>" + projectArray[i].name + "</h3>" +
								"<ul>" +
									"<li>" + "<a href='" + projectArray[i].github + "'>&#xE800</a>" + "</li>" +
									"<li>" + "<a href='" + projectArray[i].url + "'>&#xE800</a>" + "</li>" +							
								"</ul>" +
							"</div>" +
						"</div>");
				};


			$("img").hover(
			function(){
				console.log($(this));
				$overlay = $(this).next();
				$overlay.removeClass('disabled');
				$overlay.addClass('overlay');


			}, function(){
				$overlay.removeClass('overlay');
				$overlay.addClass('disabled');			
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