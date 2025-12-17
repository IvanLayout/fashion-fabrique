// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

// Моб. версия
fakeResize = false
fakeResize2 = true

if (document.body.clientWidth < 375) {
	document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
}

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
			spaceBetween: 10,
			slidesPerView: 1,
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
					spaceBetween: 10,
					slidesPerView: 1
				},
				'480': {
					spaceBetween: 14,
					slidesPerView: 3
				},
				'768': {
					spaceBetween: 20,
					slidesPerView: 4
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 4,
				},
				'1300': {
					spaceBetween: 28,
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
					$(swiper.el).find('.product__name').height('auto')
					setHeight($(swiper.el).find('.product__box'))
					setHeight($(swiper.el).find('.product__name'))

					let posNav = $(swiper.el).find('.product__thumb').height()
					$(swiper.el).find('.slider-button-prev, .slider-button-next').css('top', posNav)
				},
				resize: function (swiper) {
					$(swiper.el).find('.product__box').height('auto')
					$(swiper.el).find('.product__name').height('auto')
					setHeight($(swiper.el).find('.product__box'))
					setHeight($(swiper.el).find('.product__name'))

					let posNav = $(swiper.el).find('.product__thumb').height()
					$(swiper.el).find('.slider-button-prev, .slider-button-next').css('top', posNav)
				}
			}
		})
	}


	if ($('.products__slider2').length) {
		new Swiper('.products__slider2', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 14,
			slidesPerView: 2,
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
					spaceBetween: 14,
					slidesPerView: 2
				},
				'480': {
					spaceBetween: 14,
					slidesPerView: 3
				},
				'768': {
					spaceBetween: 20,
					slidesPerView: 4
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 4
				},
				'1300': {
					spaceBetween: 28,
					slidesPerView: 4
				},
				'1440': {
					spaceBetween: 28,
					slidesPerView: 4
				},
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.product__box').height('auto')
					$(swiper.el).find('.product__name').height('auto')
					setHeight($(swiper.el).find('.product__box'))
					setHeight($(swiper.el).find('.product__name'))

					let posNav = $(swiper.el).find('.product__thumb').height()
					$(swiper.el).find('.slider-button-prev, .slider-button-next').css('top', posNav)
				},
				resize: function (swiper) {
					$(swiper.el).find('.product__box').height('auto')
					$(swiper.el).find('.product__name').height('auto')
					setHeight($(swiper.el).find('.product__box'))
					setHeight($(swiper.el).find('.product__name'))

					let posNav = $(swiper.el).find('.product__thumb').height()
					$(swiper.el).find('.slider-button-prev, .slider-button-next').css('top', posNav)
				}
			}
		})
	}

	if ($('.products__slider3').length) {
		new Swiper('.products__slider3', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 14,
			slidesPerView: 2,
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
					spaceBetween: 14,
					slidesPerView: 2
				},
				'480': {
					spaceBetween: 14,
					slidesPerView: 3
				},
				'768': {
					spaceBetween: 20,
					slidesPerView: 4
				},
				'1024': {
					spaceBetween: 28,
					slidesPerView: 4
				},
				'1300': {
					spaceBetween: 28,
					slidesPerView: 5
				},
				'1440': {
					spaceBetween: 28,
					slidesPerView: 6
				},
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.product__box').height('auto')
					$(swiper.el).find('.product__name').height('auto')
					setHeight($(swiper.el).find('.product__box'))
					setHeight($(swiper.el).find('.product__name'))

					let posNav = $(swiper.el).find('.product__thumb').height()
					$(swiper.el).find('.slider-button-prev, .slider-button-next').css('top', posNav)
				},
				resize: function (swiper) {
					$(swiper.el).find('.product__box').height('auto')
					$(swiper.el).find('.product__name').height('auto')
					setHeight($(swiper.el).find('.product__box'))
					setHeight($(swiper.el).find('.product__name'))

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
			spaceBetween: 10,
			slidesPerView: 1,
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
					spaceBetween: 10,
					slidesPerView: 1
				},
				'480': {
					spaceBetween: 10,
					slidesPerView: 2
				},
				'768': {
					spaceBetween: 20,
					slidesPerView: 3
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 3,
				},
				'1300': {
					spaceBetween: 28,
					slidesPerView: 3,
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

	if ( $('.products__grid').length ) {
		$('.products__grid').each(function() {
			productsHeight($(this), parseInt($(this).css('--product-count')))
		})
	}
});

$(window).on('resize', () => {
	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Перезапись ширины окна
		WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

		// Моб. версия
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}

		if ( $('.products__grid').length ) {
			$('.products__grid').each(function() {
				productsHeight($(this), parseInt($(this).css('--product-count')))
			})
		}
	}

	if ($('.application__slider').length){
		applicationSlider()
	}
});

function productsHeight(context, step) {
	let start    = 0
	let finish   = step
	let products = context.find('.product')

	products.find('.product__box').height('auto')
	products.find('.product__name').height('auto')

	for (let i = 0; i < products.length; i++) {
		setHeight(products.find('.product__box').slice(start, finish))
		setHeight(products.find('.product__name').slice(start, finish))

		start  = start + step
		finish = finish + step
	}
}

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