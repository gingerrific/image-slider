'use strict';
 
 
var imagesArray = ["https://s3.amazonaws.com/ksr/projects/660047/photo-main.jpg?1397831981", "http://supergiantgames.com/site/wp-content/uploads/Transistor_Wallpaper_1920x1080.jpg", "http://cloud-4.steampowered.com/ugc/615043645846589420/E237625134C7E37487EC553109818982CE3FD0FD/", "../images/division.jpg", "http://thekoalition.com/images/2013/08/bell.jpg"];
 
 
 
function imageDisplay (images) {
	if ($.isArray(images) && images !== []){	
	  // error checks for array type
		var max = images.length
		// sets the display width of the div to accomodate varying width based on array length
		$('.image-slider').css('width',(max*100)+'%');
  
		images.map(function (x) {
		  // appends the contents of the .image-frame div into the dom for each index of the array (could posisbly be split off)
			$('.image-slider').append($('.image-frame').text());
			// the most recent div will have its background-image changed to the formatted array index
			$('.image-display').last().css('background', 'url(' + x + ') center / cover no-repeat');
		})
	}
 
	else {
		throw new Error("ImageParse requires a non-empty array as argument");
	}
}
 
 
var i = 0;
var interval;
// inter function that calls the animation, but also loops
function intervalManager () {
		interval = setInterval(function () {
		moveLeft();
		i += 1;
		
		if (i == 6) {
		  // when the counter hits the end of the array (in this case) return to one. need to set to index.length instead of '6'
		  // also resets the image slider to the first image
			i=1;
			$('.image-slider').animate({'margin-left': '0px', 'transition': 'none'});
		}
 
	}, 2400);
 
}
// animate the slider moving left the width of an image
function moveLeft () {
		$('.image-slider').css({'margin-left': '-=392px', 'transition':'all 1.6s linear'});	
}
 
// 'controls' - allows the slider to be stopped, restarted and advanced
$('.stop').click(function () {
	$('.image-slider').stop();
	clearInterval(interval);
})
 
$('.play').click(function () {
	imageDisplay(imagesArray);
	intervalManager();
})
 
$('.previous').click(function () {
	clearInterval(interval);
	$('.image-slider').css({'margin-left': '+=392px'});
	i -=1;	
	if (i == -1) {
		$('.image-slider').stop();
		$('.image-slider').css({'margin-left': '-=392px'});
		i = 1;
	}
})
 
$('.next').click(function () {
	clearInterval(interval);
	$('.image-slider').css({'margin-left': '-=392px'});	
	i += 1;
	if (i == 7) {
		$('.image-slider').stop();
		$('.image-slider').css({'margin-left': '+=392px'});
		i = 5;
	}
})