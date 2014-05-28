/* global describe, it */

(function () {
    'use strict';
    describe('ImageSlide Constructor', function () {
		it('should correctly respond to its methods', function () {
			var quickSlide = new ImageSlide();
			expect(quickSlide).to.respondTo('renderContainer');
			expect(quickSlide).to.respondTo('showImages');
			expect(quickSlide).to.respondTo('imageMove');
		});

		it('should throw when given non array args', function () {
        	
			var badImage = function () {
				var coolSlides = new ImageSlide()
				coolSlides.renderContainer("cool")
			};
          
			expect(badImage).to.throw(Error);
        });
    });


    describe('Image DOM display', function () {

        it('should correctly adjust the slider container size', function () {

			var imageExample = new ImageSlide();
			imageExample.renderContainer([1,2,3,4,5])
        	// works in practice
			expect($('.image-slider').css('width')).to.equal("500%");
        });
    });

    describe('Image view', function () {
		it('should keep track of its position in the loop', function () {

			var imageExample = new ImageSlide();
			imageExample.renderContainer(imagesArray);
			imageExample.showImages(imagesArray);
			$('.next').click();
			$('.next').click();
			// works in practice
			expect(i).to.equal(1);
    	});
    });

})();
