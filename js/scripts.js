// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

$(() => {
	$('body').on('click', '.js-favorite', function (e) {
		e.preventDefault()

		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')
		} else {
			$(this).addClass('_active')
		}
	})

	// Добавление/Удаление (корзина)
	$('body').on('click', '.cart-js', function (e) {
		e.preventDefault()
	
		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')
		} else {
			$(this).addClass('_active')
		}
	})


	if ($('.products__slider').length) {
		new Swiper('.products__slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 15,
			slidesPerView: 'auto',
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 22,
					slidesPerView: 'auto'
				},
				'480': {
					spaceBetween: 22,
					slidesPerView: 'auto'
				},
				'768': {
					spaceBetween: 22,
					slidesPerView: 'auto'
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 4,
				},
				'1300': {
					spaceBetween: 20,
					slidesPerView: 4,
				},
				'1440': {
					spaceBetween: 28,
					slidesPerView: 4,
				},
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.product__box').height('auto')
					setHeight($(swiper.el).find('.product__box'))

					let posNav = $(swiper.el).find('.product__thumb').height()
					$(swiper.el).find('.slider-button-prev, .slider-button-next').css('top', posNav)
				},
				resize: function (swiper) {
					$(swiper.el).find('.product__box').height('auto')
					setHeight($(swiper.el).find('.product__box'))

					let posNav = $(swiper.el).find('.product__thumb').height()
					$(swiper.el).find('.slider-button-prev, .slider-button-next').css('top', posNav)
				}
			}
		})
	}

	if ($('.products__slider-small').length) {
		new Swiper('.products__slider-small', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 15,
			slidesPerView: 'auto',
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 22,
					slidesPerView: 'auto'
				},
				'480': {
					spaceBetween: 22,
					slidesPerView: 'auto'
				},
				'768': {
					spaceBetween: 22,
					slidesPerView: 'auto'
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 6,
				},
				'1300': {
					spaceBetween: 20,
					slidesPerView: 6,
				},
				'1440': {
					spaceBetween: 28,
					slidesPerView: 6,
				},
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.product__box').height('auto')
					setHeight($(swiper.el).find('.product__box'))

					let posNav = $(swiper.el).find('.product__thumb').height()
					$(swiper.el).find('.slider-button-prev, .slider-button-next').css('top', posNav)
				},
				resize: function (swiper) {
					$(swiper.el).find('.product__box').height('auto')
					setHeight($(swiper.el).find('.product__box'))

					let posNav = $(swiper.el).find('.product__thumb').height()
					$(swiper.el).find('.slider-button-prev, .slider-button-next').css('top', posNav)
				}
			}
		})
	}

	$('.product__thumbs span').hover(function () {
		let indexEl = $(this).data('index');
		$(this).closest('.product__thumbs').find('span').removeClass('_active')
		$(this).addClass('_active')
		$(this).closest('.product').find('.product__img').removeClass('_show')
		$(this).closest('.product').find(`.product__img:eq(${indexEl})`).addClass('_show')
	})


	if ($('.shops__slider').length) {
		new Swiper('.shops__slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 15,
			slidesPerView: 'auto',
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 22,
					slidesPerView: 'auto'
				},
				'480': {
					spaceBetween: 22,
					slidesPerView: 'auto'
				},
				'768': {
					spaceBetween: 22,
					slidesPerView: 'auto'
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 4,
				},
				'1300': {
					spaceBetween: 20,
					slidesPerView: 4,
				},
				'1440': {
					spaceBetween: 28,
					slidesPerView: 3,
				},
			}
		})
	}

	// Изменение количества товара
	$('body').on('click', '.amount__btn_minus', function (e) {
		e.preventDefault()

		let parent = $(this).closest('.amount')
			input = parent.find('input')
			inputVal = parseFloat(input.val())
			inputText = input.data('text')
			minimum = parseFloat(input.data('minimum'))
			step = parseFloat(input.data('step'));

		if (inputVal > minimum) {
			input.val(inputVal - step)
		}

		if (inputVal-step == minimum) {
			$(this).prop("disabled", true)
		}

		if(inputText){
			input.val(inputVal - step + inputText)
		}
	})

	$('body').on('click', '.amount__btn_plus', function (e) {
		e.preventDefault()

		let parent = $(this).closest('.amount')
			input = parent.find('input')
			inputVal = parseFloat(input.val())
			inputText = input.data('text')
			maximum = parseFloat(input.data('maximum'))
			step = parseFloat(input.data('step'))

		if (inputVal < maximum) {
			input.val(inputVal + step)

			parent.find('.amount__btn_minus').prop("disabled", false)
		}

		if(inputText){
			input.val(inputVal + step + inputText)
		}
	})
});

$(window).on('load', () => {
	if ($('.application__slider').length){
		applicationSlider()
	}
});

$(window).on('resize', () => {
	if ($('.application__slider').length){
		applicationSlider()
	}
});

function applicationSlider(){
	if ( $(window).width() < 768 && !$('.application__slider').hasClass('swiper-initialized') ) {
		$('.application__slider').addClass('swiper')
		$('.application__items').addClass('swiper-wrapper').removeClass('_flex')
		$('.application__item').addClass('swiper-slide')

		approachSwiper = new Swiper('.application__slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 10,
			slidesPerView: 'auto',
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			}
		})
	} else if ($(window).width() > 767 && $('.application__slider').hasClass('swiper-initialized')) {
		if ($('.application__slider').length === 1 && $('.application__slider').hasClass('swiper-initialized')) {
			approachSwiper.destroy(true, true)
		} else if ($('.application__slider').length >= 2 && $('.application__slider').hasClass('swiper-initialized')) {
			approachSwiper.forEach(function (element) {
				element.destroy(true, true)
			})
		}

		$('.application__slider').removeClass('swiper')
		$('.application__items').removeClass('swiper-wrapper').addClass('_flex')
		$('.application__item').removeClass('swiper-slide')
	}
}