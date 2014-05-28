/* global describe, it */

(function () {
    'use strict';
    describe('imageDisplay funciton', function () {

		it('should throw when given non array args', function () {
        	
			var badImage = function () {
				imageParse("non-array");
			};
          
			expect(badImage).to.throw(Error);
        });
    });


    describe('Image parsing', function () {

        it('should correctly format the url for display', function () {

			var formatTest = imageDisplay(["https://s3.amazonaws.com/ksr/projects/660047/photo-main.jpg?1397831981"]);
        	// currently the function doesn't return anything, thus a string isn't found.
			expect(formatTest).to.have.string("url(");
        });
    });

    describe('Image view', function () {
		it('should create a slider of appropriate length', function () {

			imageDisplay([1,2,3]);
			// dom element I'm not sure how to test
			expect($('.image-slider').css()).to.have.string('300');
    	});
    });

})();
