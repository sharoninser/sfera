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
		nextArrow: '#screen-slider-team-arrow__next',
		responsive: [
			{
				breakpoint: 1025,
				settings: {
                    variableWidth: false
				}
            },
            {
				breakpoint: 769,
				settings: {
                    variableWidth: true,
                    swipe: true
				}
            }
		]
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
		nextArrow: '#screen-slider-reviews-arrow__next',
		responsive: [
			{
				breakpoint: 769,
				settings: {
                    swipe: true
				}
            }
		]
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
		nextArrow: '#screen-slider-partners-arrow__next',
		responsive: [
			{
				breakpoint: 769,
				settings: {
                    swipe: true
				}
            }
		]
    });

    // content-slider
    $('.section-content-slider').slick({
        // loop: true,
        swipe: false,
        arrows: true,
        dots: true,
        centerMode: true,
        infinite: true,
		slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,        
		prevArrow: '#section-content-slider-arrow_prev',
		nextArrow: '#section-content-slider-arrow_next',
		responsive: [
			{
				breakpoint: 1025,
				settings: {
                    variableWidth: false,
                    centerMode: false,
                    swipe: true
				}
            },
            {
				breakpoint: 576,
				settings: {
                    variableWidth: false,
                    centerMode: false,
                    swipe: true,
                    arrows: false
				}
			}
		]
    });

    // view-sldier
    $('.screen-view-slider').slick({
        // loop: true,
        swipe: false,
        dots: false,
        centerMode: true,
        infinite: true,
        arrows: true,
		slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,        
		prevArrow: '#view-slider-arrow_prev1',
		nextArrow: '#view-slider-arrow_next1',
		responsive: [
			{
				breakpoint: 1025,
				settings: {
                    swipe: true
				}
            },
            {
				breakpoint: 576,
				settings: {
                    swipe: true,
                    variableWidth: false,
                    centerMode: false,
                    arrows: false
				}
            }
		]
    });
    // view-sldier
    $('.screen-object-desc-slider').slick({
        loop: true,
        dots: false,
        infinite: false,
		slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,        
		prevArrow: '#screen-slider-object-detail-arrow__prev',
		nextArrow: '#screen-slider-object-detail-arrow__next',
		responsive: [
			{
				breakpoint: 769,
				settings: {
                    variableWidth: false,
					arrows: false
				}
			}
		]
    });

    // dropdown 

    if(windowWidth < 1025) {
        $('.screen-catalog-list-filter li a').each(function(){
            if($(this).hasClass('active')) {
                $(this).parents('.screen-catalog-list-filter-block').find('.screen-catalog-list-filter-dropdown__input').val($(this).text().trim());
            }
        });	
        $(document).on('click', '.screen-catalog-list-filter-block', function() {
            $(this).toggleClass('active');
            $(this).find('.screen-catalog-list-filter').stop().slideToggle(300);
        });
        $(document).on('click', '.screen-catalog-list-filter li a', function(e) {
            e.preventDefault();

            $('.screen-catalog-list-filter li a').removeClass('active');
            $(this).parents('.screen-catalog-list-filter-block').find('.screen-catalog-list-filter-dropdown__input').val($(this).text().trim());
            $(this).addClass('active');
        });
    } else {
        $(document).on('click', '.screen-catalog-list-filter li a', function(e) {
            e.preventDefault();

            $('.screen-catalog-list-filter li a').removeClass('active');
            $(this).parents('.screen-catalog-list-filter-block').find('.screen-catalog-list-filter-dropdown__input').val($(this).text().trim());
            $(this).addClass('active');
        });
    }
    







    
    // counter sliders
    let slidersArray = document.querySelectorAll('.js-slider');
    counterSlide(slidersArray);  


    // изменение кастомного добавления файлов
    $(".calculate-box-item-upload__default").change(function() {
        var f_name = [];
        for (var i = 0; i < $(this).get(0).files.length; ++i) {
            f_name.push(" " + $(this).get(0).files[i].name);
        }
        $("#f_name").val(f_name.join(", "));
    });



    // якорные ссылки

    let parentBlockLinksNav = $("#section-scroll");
    let parentBlockLinksBtnUp = $("#btn-scroll-up");

    anchorLinks(parentBlockLinksNav);
    anchorLinks(parentBlockLinksBtnUp);


    
    if(windowWidth > 1024) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                $(parentBlockLinksNav).removeClass('active');
            } else {
                $(parentBlockLinksNav).addClass('active');
            }
        });
    }
     


    // фиксированное навигационное меню
    var sections = $('section'),
        nav = $('.nav-menu'),
        nav_height = nav.outerHeight();

    if(windowWidth > 768) {
        $(window).on('scroll', function () {
            var cur_pos = $(this).scrollTop();
        
            if(sections !== null) {
                sections.each(function(index, section) {
                    var top = $(this).offset().top - nav_height - $(this).outerHeight() / 2,
                        bottom = top + $(this).outerHeight();
                    var thisElement = $(this);
                    
                    
                    if (cur_pos >= top && cur_pos <= bottom) {
                        // удаление классов после завершения итерации
                        nav.find('a').parent().removeClass('active');
                        sections.removeClass('active');                    
    
                        // добавление классов во время итерации
                        $(this).addClass('active');
                        nav.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
    
                        // проверка секций на пустой id (несколько секций подряд)
                        if($(section).attr('id') == undefined) {
                            var prevSiblingAll = $(section).prevAll();
                            var array = [];
                            // записывыем в новый массив элементы, у которых есть id
                            prevSiblingAll.each(function(index, prevSibling) {
                                if($(prevSibling).attr('id') !== undefined) {
                                    array.push(prevSibling);                                
                                }
                            });
                            // берем первый элемент массива (ближайший по DOM)
                            var prevScreenId = array[0].id;
                            nav.find('a[href="#'+prevScreenId+'"]').parent().addClass('active');
    
                            navColorsChange(thisElement, nav); // ф-ция смены цветов навигационного меню                       
                        } else {
                            $(this).addClass('active');
                            nav.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active')
                            navColorsChange(thisElement, nav); // ф-ция смены цветов навигационного меню
                        }
                    }
                });
            }
            
            hideFixedBlockNav(nav);
            hideFixedBlockUp(parentBlockLinksBtnUp);
    
        });
    }
    


    let counters = document.querySelectorAll('.calculate-box-item-counter');

    counters.forEach(function(counter) {
        let counterBtns = counter.querySelectorAll('button');

        counterBtns.forEach(function(counterBtn) {
            let parentCounterBtn = counterBtn.parentElement;
            let counterInput = parentCounterBtn.querySelector('input');

            counterBtn.addEventListener('click', function(e){
                e.preventDefault();
                // доделать счетчики

            });
        });
    });

});
