/* global describe, it */

(function () {
    'use strict';
    describe('ImageSlide Constructor', function () {
		
		it('should correctly respond to its methods', function (done) {
			var quickSlide = new ImageSlide(imagesArray);
			expect(quickSlide).to.respondTo('renderContainer');
			expect(quickSlide).to.respondTo('sliderView');
			expect(quickSlide).to.respondTo('order');
			done();
		});

		it('should throw when given a non array agument', function () {

			var badSlide = function () {
				var coolSlides = new ImageSlide();
				coolSlides.renderContainer("cool");
			};
          
			expect(badSlide).to.throw(Error);
        });

		it('should throw when given an empty array argument', function () {

		var badSlide = function () {
			var coolSlides = new ImageSlide();
			return coolSlides.renderContainer([]);
		};
      
		expect(badSlide).to.throw(Error);
        });
    });

    describe('ImageSlide constructor instances', function () {
		var imageArray2 = ["http://www.gameranx.com/img/14-Mar/luftrausers.jpg", "http://www.dealspwn.com/writer/wordpress/wp-content/uploads/2014/01/nidhogg11-540x338.jpg"];
        
        it('should accept any array of images for display in the slider', function () {

			var customImageSlide = new ImageSlide(imageArray2);

			expect(customImageSlide.order()[0]).to.equal('http://www.gameranx.com/img/14-Mar/luftrausers.jpg');
        });

        it('should accept and correctly apply a delay as an argument', function (done) {
        	setTimeout(10000)
			var customImageSlide = new ImageSlide(imageArray2, 4000);

			setTimeout(function () {	
				expect($('.image-slider').css('margin-left')).to.equal(-392+'px');
			},4250)
			done();

        });

        it('should correctly reorder an array based on the position passed as an argument', function () {

			var customStartSlide = new ImageSlide(imageArray2, 1);
			expect(customStartSlide.order()[0]).to.equal('http://www.dealspwn.com/writer/wordpress/wp-content/uploads/2014/01/nidhogg11-540x338.jpg');
        });

        it('should display the correct image when a position/index is passed as an argument', function () {
        	$('.image-slider').html('');
			var customStartSlide = new ImageSlide(imageArray2, 1);
			customStartSlide.renderContainer();
			customStartSlide.order();
			customStartSlide.sliderView();

			expect($('.image-display').first().css('background')).to.have.string('http://www.dealspwn.com/writer/wordpress/wp-content/uploads/2014/01/nidhogg11-540x338.jpg');
        });

        it('should be able to stop intervals called on itself', function () {
			var quickSlideShow = new ImageSlide(imagesArray);
			quickSlideShow.stopControl();

			// expect()
        });
    });


    describe('Image DOM display', function () {

        it('should correctly adjust the slider container size', function () {

			var imageExample = new ImageSlide([1,2,3,4,5]);
			imageExample.renderContainer();

			expect($('.image-slider').css('width')).to.equal(5*$(window).width()+'px');
        });
    });

    describe('Image view', function () {
		it('should keep track of its position in the loop', function () {

			var imageExample = new ImageSlide(imagesArray);
			$('.next').click();

			expect(i).to.equal(1);

		});
    });

})();
