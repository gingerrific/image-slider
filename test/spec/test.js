/* global describe, it */

(function () {
    'use strict';
    describe('ImageSlide Constructor', function () {
		it('should correctly respond to its methods', function () {
			
			var quickSlide = new ImageSlide(['http:\/\/supergiantgames.com/site/wp-content/uploads/Transistor_Wallpaper_1920x1080.jpg']);
			expect(quickSlide).to.respondTo('images');
		});

		it('should throw when given non array args', function () {
        	
			var badImage = function () {
				imageParse("non-array");
			};
          
			expect(badImage).to.throw(Error);
        });
    });


    describe('Image parser', function () {

        it('should correctly format the url for display', function () {

			var imageExample = new ImageSlide(["https://s3.amazonaws.com/ksr/projects/660047/photo-main.jpg?1397831981"]);
        	
			expect(imageExample.images.pop()).to.have.string("url(");
        });
    });

    describe('Image view', function () {
		it('should display one image at a time', function () {

			var imageExample = new ImageSlide();
			imageExample.display();

			expect($('.imageDisplay')).to.equal(1);
    	});
    });

})();
