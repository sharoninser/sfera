document.addEventListener('DOMContentLoaded', () => {
    let windowWidth = window.innerWidth;

    // sliders
    // team
    $('.screen-team-slider').slick({
		dots: false,
		loop: false,
		swipe: false,
        infinite: false,
		slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
		prevArrow: '#screen-slider-team-arrow__prev',
		nextArrow: '#screen-slider-team-arrow__next'
		// responsive: [
		// 	{
		// 		breakpoint: 576,
		// 		settings: {
		// 			arrows: false
		// 		}
		// 	}
		// ]
    });

    // reviews
    $('.screen-reviews-slider').slick({
		dots: false,
		loop: false,
		swipe: false,
        infinite: false,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1,
		prevArrow: '#screen-slider-reviews-arrow__prev',
		nextArrow: '#screen-slider-reviews-arrow__next'
		// responsive: [
		// 	{
		// 		breakpoint: 576,
		// 		settings: {
		// 			arrows: false
		// 		}
		// 	}
		// ]
    });

    // partners
    $('.screen-partners-slider').slick({
		dots: false,
		loop: false,
		swipe: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
		prevArrow: '#screen-slider-partners-arrow__prev',
		nextArrow: '#screen-slider-partners-arrow__next'
		// responsive: [
		// 	{
		// 		breakpoint: 576,
		// 		settings: {
		// 			arrows: false
		// 		}
		// 	}
		// ]
    });

    // content-slider
    $('.section-content-slider').slick({
        // loop: true,
        swipe: false,
        dots: true,
        centerMode: true,
        infinite: true,
		slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,        
		prevArrow: '#section-content-slider-arrow_prev',
		nextArrow: '#section-content-slider-arrow_next'
		// responsive: [
		// 	{
		// 		breakpoint: 576,
		// 		settings: {
		// 			arrows: false
		// 		}
		// 	}
		// ]
    });

    // view-sldier
    $('.screen-view-slider').slick({
        // loop: true,
        swipe: false,
        dots: false,
        centerMode: true,
        infinite: true,
		slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,        
		prevArrow: '#view-slider-arrow_prev1',
		nextArrow: '#view-slider-arrow_next1'
		// responsive: [
		// 	{
		// 		breakpoint: 576,
		// 		settings: {
		// 			arrows: false
		// 		}
		// 	}
		// ]
    });








    
    // counter sliders
    let slidersArray = document.querySelectorAll('.js-slider');
    counterSlide(slidersArray);  

});


function counterSlide(slidersArrayFunc) {
    for(let i = 0; i < slidersArrayFunc.length; i++) {
        if(slidersArrayFunc[i] !== null) {
            let sliderItemsArray = slidersArrayFunc[i].querySelectorAll('.js-slider-item');
            let sliderItemsLength = sliderItemsArray.length;
            let sliderNav = slidersArrayFunc[i].parentElement.querySelector('.screen-slider-nav');

            if(sliderNav !== null) {
                let outputSliderItemsCurrent = sliderNav.querySelector('.screen-slider-nav__counter-current');
                let outputSliderItemsAll = sliderNav.querySelector('.screen-slider-nav__counter-all');

                let j = 1;
                outputSliderItemsCurrent.innerHTML = j;
                outputSliderItemsAll.innerHTML = sliderItemsLength;

                $(slidersArrayFunc[i]).on('init reInit afterChange', function(event, slider, currentSlide, nextSlide) {
                    countElem = (currentSlide ? currentSlide : 0) + 1;
                    outputSliderItemsCurrent.innerHTML = countElem;
                });
            }
        }
    }
}