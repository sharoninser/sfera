function navColorsChange(thisElementFunc, navFunc) {
    if($(thisElementFunc).hasClass('light') && !$(thisElementFunc).hasClass('screen-one')) {
        navFunc.removeClass('light');
        navFunc.addClass('dark');
    } else {
        navFunc.removeClass('dark');
        navFunc.addClass('light');
    }
}


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