$(function(){



		projectArray = [
			{
				"name": "Connect Four",
				"img": "../media/images/connectfour.png",
				"url": "http://aadams22.github.io/connectfour/",
				"github": "https://github.com/aadams22/connectfour",
				"description": ""

			},
			{
				"name": "MedTrakr",
				"img": "../media/images/medtrakr.png"
				"url": "https://medtrakr.herokuapp.com/",
				"github": "https://github.com/aadams22/MedTrakr2.0",
				"description": ""
			},
			{
				"name": "enigmatic",
				"img": "../media/images/enigmatic.png"
				"url": "http://enig-matic.herokuapp.com/",
				"github": "https://github.com/aadams22/enigmatic",
				"description": ""
			},
			{
				"name" : "Oli & Olive",
				"img" : "../media/images/oliandolive.png'"
				"url": "http://oli-and-olive.herokuapp.com/",
				"github": "https://github.com/aadams22/oli-and-olive",
				"description": ""
			},
			{
				"name": "Space",
				"img": "../media/images/planets.png"
				"url": "https://dry-wave-29594.herokuapp.com/",
				"github": "https://github.com/salinetti81/sad_space",
				"description": ""
			}

		]


		function createCarousel(){
			console.log('carousel created.', projectArray[0].name);

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