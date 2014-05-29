'use strict';
 
 
	var i = 0;
var imagesArray = ["https://s3.amazonaws.com/ksr/projects/660047/photo-main.jpg?1397831981", "http://supergiantgames.com/site/wp-content/uploads/Transistor_Wallpaper_1920x1080.jpg", "http://cloud-4.steampowered.com/ugc/615043645846589420/E237625134C7E37487EC553109818982CE3FD0FD/", "http://static2.cdn.ubi.com/emea/gamesites/TCTD/wallpapers/TheDivision_Wallpapers_1024x768.jpg", "http://thekoalition.com/images/2013/08/bell.jpg"];
 
function ImageSlide (array, firstImagePos, delay) {
	// local constructor variable inits
	var intervalTime;
	var intervalName;
	// if a delay argument is passed, set this at the interval timing, otherwise use 2400 as default
	if (delay) {
		intervalTime = delay; 
	}
	else {
		intervalTime = 2400;
	}
	
	//render container property
	this.renderContainer = function () {
		 // error checks for array type
		if (!$.isArray(array)) {
			throw new Error("ImageParse requires a non-empty array as argument");
		}
		else if (array <= 0) {
			throw new Error ("The argument array is empty.");
		}
		else {
			var max = array.length;
			// sets the display width of the div to accomodate varying width based on array length
			$('.image-slider').css('width',(max*100)+'%');
		}
	};
	//re-arranges the array based on index value provided
	this.order = function () {
		if(firstImagePos) {
			return (array.slice(firstImagePos)).concat(array.slice(0,firstImagePos));
			}
		else {
			return array;
		}	
	};
	// adds the necessary html elements based on an array's length and assigns the images to the background css property
	this.sliderView = function () {
		(this.order()).forEach(function (x) {
		// appends the contents of the .image-frame div into the dom for each index of the array (could posisbly be split off)
		$('.image-slider').append($('.image-frame').text());
		// the most recent div will have its background-image changed to the formatted array index
		$('.image-display').last().css('background', 'url(' + x + ') center / cover no-repeat');
		});
	};

	// animate the slider moving left the width of an image
	this.imageSlide = function () {
		return $('.image-slider').css({'margin-left': '-=392px', 'transition':'all 1.6s linear'})
	}

	// interval function that will call the imageSlide animation every set interval (parameter or default of 2400)
	// if the counter hits the array length - 1, it will reset itself back to 0 and also move the image slider to 0.
	var that = this;	
	this.changeImage = setInterval(function () {
						that.imageSlide();
						i += 1;
							  // when the counter hits the end of the array (in this case) return to one. need to set to index.length instead of '6'
							  // also resets the image slider to the first image
							if (i >= array.length) {
								i=0;
								$('.image-slider').css({'margin-left': '0px', 'transition': 'none'})
							}
						}, intervalTime);

	this.stopControl = function () {
		clearInterval(this.changeImage);
	}

	this.nextImage = function () {
		i += 1;
		$('.image-slider').css({'margin-left': '-=392px'});
		if (i >= array.length) {
			$('.image-slider').stop();
			var tooFar = (array.length-1)*-392
			$('.image-slider').css({'margin-left': tooFar+'px'});
			i = array.length;
		}
	}	

	this.previousImage = function () {
		i -=1;
		$('.image-slider').css({'margin-left': '+=392px'});
		if (i <= -1) {
			$('.image-slider').css({'margin-left': '0px'});
			i = 0;
		}
	}
}


var slideShow = new ImageSlide(imagesArray, 0);
slideShow.renderContainer();
slideShow.sliderView();
 
// // 'controls' - allows the slider to be stopped, restarted and advanced
$('.stop').click(function () {
	slideShow.stopControl();
});

$('.play').click(function () {
	return slideShow = new ImageSlide(imagesArray, 0);
});

$('.previous').click(function () {
	slideShow.previousImage();
});

$('.next').click(function () {
	slideShow.nextImage();
});

 