'use strict';


var imagesArray = ["https://s3.amazonaws.com/ksr/projects/660047/photo-main.jpg?1397831981", "http://supergiantgames.com/site/wp-content/uploads/Transistor_Wallpaper_1920x1080.jpg", "http://cloud-4.steampowered.com/ugc/615043645846589420/E237625134C7E37487EC553109818982CE3FD0FD/", "http://www.radialgames.com/press/ROCKETSROCKETSROCKETS/images/logo.png", "http://thekoalition.com/images/2013/08/bell.jpg"];



function imageDisplay (images) {
	if ($.isArray(images) && images !== []){	
	
		var max = images.length
		$('.image-slider').css('width',(max*100)+'%');

		images.map(function (x) {
			$('.image-slider').append($('.image-frame').text());
			$('.image-display').last().css('background', 'url(' + x + ') center / cover no-repeat');
		})
	}

	else {
		throw new Error("ImageParse requires a non-empty array as argument");
	}
}


var i = 0;
var interval;
function intervalManager () {
	
		interval = setInterval(function () {
		moveLeft();
		i += 1;
		
		if (i == 6) {
			i=1;
			$('.image-slider').animate({'margin-left': '0px', 'transition': 'none'},10);
		}

	}, 2400);

}

function moveLeft () {
		$('.image-slider').animate({'margin-left': '-=392px'}, 800);	
}


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
	$('.image-slider').animate({'margin-left': '+=392px'}, 800);
	i -=1;	
	if (i == -1) {
		$('.image-slider').stop();
		$('.image-slider').animate({'margin-left': '-=392px'}, 800);
		i = 1;
	}
	intervalManager();
})

$('.next').click(function () {
	clearInterval(interval);
	$('.image-slider').animate({'margin-left': '-=392px'}, 800);	
	i += 1;
	if (i == 7) {
		$('.image-slider').stop();
		$('.image-slider').animate({'margin-left': '+=392px'}, 800);
		i = 5;
	}
	intervalManager();	
})

