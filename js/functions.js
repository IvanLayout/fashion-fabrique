$(() => {
	// Observer API
	const boxes = document.querySelectorAll('.lazyload')

	function scrollTracking(entries) {
		for (const entry of entries) {
			if (entry.intersectionRatio > 0 && entry.target.getAttribute('data-src') && !entry.target.classList.contains('loaded')) {
				entry.target.classList.add('loaded')

				entry.target.src = entry.target.getAttribute('data-src')
			}
		}
	}

	const observer = new IntersectionObserver(scrollTracking, {
		threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
	})

	boxes.forEach(element => observer.observe(element))

	// Моб. меню
	$('body').on('click', '.mob-menu-btn', function(e) {
		e.preventDefault()

		if ( $(this).hasClass('_active') ){
			$('.mob-menu-btn').removeClass('_active')
			$('.header-fix').removeClass('_show')
			$('body').removeClass('_lock-menu')
			$('.overlay-fix').removeClass('_show')
		} else{
			$('.mob-menu-btn').addClass('_active')
			$('.header-fix').addClass('_show')
			$('body').addClass('_lock-menu')
			$('.overlay-fix').addClass('_show')
		}
	})

	$('body').on('click', '.overlay-fix', function(e) {
		e.preventDefault()

		$('.mob-menu-btn').removeClass('_active')
		$('.header-fix').removeClass('_show')
		$('body').removeClass('_lock-menu')
		$('.overlay-fix').removeClass('_show')
	})

	$('body').on('click', '.menu-fix__link._sub', function(e) {
		e.preventDefault()

		$(this).next().addClass('_show')
		$('.menu-fix').addClass('_second')
	})

	$('body').on('click', '.menu-fix__title_back', function(e) {
		e.preventDefault()

		$('.menu-fix__sub').removeClass('_show')
		$('.menu-fix').removeClass('_second')
	})
	

	// Аккордион простой
	$('body').on('click', '.accord__open', function(e) {
		e.preventDefault()

		let parent = $(this).closest('.accord__item')

		if( parent.hasClass('_active') ) {
			parent.removeClass('_active')
			parent.find('.accord__data').slideUp(300)
		} else {
			parent.addClass('_active')
			parent.find('.accord__data').slideDown(300)
		}
	})

	// Изменения данных
	$('body').on('click', '.form__field-edit', function(e) {
		e.preventDefault()

		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')

			$(this).closest('.form__filed').find('.form__input').removeClass('_pad-input')
			$(this).closest('.form__filed').find('.form__input').prop('disabled', true)
		} else {
			$(this).addClass('_active')

			$(this).closest('.form__filed').find('.form__input').addClass('_pad-input')
			$(this).closest('.form__filed').find('.form__input').prop('disabled', false)
		}
    })

	// Личный кабинет
	$('.personal-form .edit-personal').click(function(e){
		e.preventDefault()

		var parent = $(this).closest('.personal-form')

		parent.find('.box_btn').addClass('_view')
	})

	// Табы
	var locationHash = window.location.hash

	$('body').on('click', '.tabs__button_js', function(e) {
		e.preventDefault()

		if( !$(this).hasClass('_active') ) {
			let parent = $(this).closest('.tabs-container')
			let activeTab = $(this).data('content')
			let level = $(this).data('level')

			parent.find('.tabs:first').find('.tabs__button_js').removeClass('_active')
			parent.find('.tab-content.' + level).removeClass('_active')

			$(this).addClass('_active')
			$(activeTab).addClass('_active')

			if ( $(this).closest('.production-process').length ) {
				clearTimeout($stopTimer);
				$index = $(this).index();
				$('.production-process .tabs').attr('class', '').addClass('tabs act' + $index);
				tabsTimer();

				return false
			}
		}
	})

	if( locationHash && $('.tabs-container').length ) {
		let activeTab = $('.tabs__button_js[data-content="'+ locationHash +'"]')
		let parent = activeTab.closest('.tabs-container')
		let level = activeTab.data('level')

		parent.find('.tabs:first').find('.tabs__button_js').removeClass('_active')
		parent.find('.tab-content.' + level).removeClass('_active')

		activeTab.addClass('_active')
		$(locationHash).addClass('_active')

		$('html, body').stop().animate({
			scrollTop: $(locationHash).offset().top - 120
		}, 1000)
	}

	// Мини всплывающие окна
	$('.mini-modal__btn').click(function (e) {
		e.preventDefault()

		const parent = $(this).closest('.mini-modal')

		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')
			$('.mini-modal__modal').removeClass('_active')

			$('body').removeClass('_lock-mini')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini-modal__btn').removeClass('_active')
			$(this).addClass('_active')

			$('.mini-modal__modal').removeClass('_active')
			parent.find('.mini-modal__modal').addClass('_active')

			if( $(this).hasClass('mini-modal__btn_look') ) {
				$('body').addClass('_lock-mini')
			}

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Закрываем всплывашку при клике за её пределами
	$(document).click((e) => {
		if ( !e.target.closest('.mini-modal') ) {
			$('.mini-modal__modal, .mini-modal__btn').removeClass('_active')
			$('body').removeClass('_lock-mini')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})

	// Фильтр
	$('body').on('click', '.open-filter', function(e) {
		e.preventDefault()

		$('.open-filter').toggleClass('_active')
		$('.catalog-filter').toggleClass('_show')
		$('.filter-overlay').toggleClass('_show')
	})

	$('body').on('click', '.filter-overlay', function(e) {
		e.preventDefault()

		$('.open-filter').removeClass('_active')
		$('.catalog-filter').removeClass('_show')
		$('.filter-overlay').removeClass('_show')
	})

	$('body').on('click', '.catalog-filter__btn-clear', function(e) {
		e.preventDefault()

		$(this).closest('.catalog-filter__item').removeClass('_choice')

		$('.mini-modal__modal, .mini-modal__btn').removeClass('_active')
		$('body').removeClass('_lock-mini')

		if (is_touch_device()) $('body').css('cursor', 'default')

		$(this).closest('.catalog-filter__item').find('input[type="checkbox"]').prop('checked', false)
	})
	

	// Аккордион
	$('body').on('click', '.accordion__title', function(e) {
		e.preventDefault()

		let parent = $(this).closest('.accordion__item')
		let accordion = $(this).closest('.accordion')

		if( parent.hasClass('_active') ) {
			parent.removeClass('_active')
			parent.find('.accordion__data').slideUp(300)
		} else {
			accordion.find('.accordion__item').removeClass('_active')
			accordion.find('.accordion__data').slideUp(300)

			parent.addClass('_active')
			parent.find('.accordion__data').slideDown(300)
		}
	})

	// Кастомный select
	$('select').niceSelect()


	// Маска ввода
	$('input[type=tel]').each(function(){
		let datamask = $(this).data('mask');

		$(this).inputmask(`${datamask}`, {
			showMaskOnHover: false
		})
	})

	// Fancybox
	Fancybox.getDefaults().dragToClose = false;
	Fancybox.getDefaults().placeFocusBack = false;

	// Всплывающие окна
	$('body').on('click', '.modal-btn', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: $(this).data('content'),
			type: 'inline'
		}])
	})


	// Отправка форм
	$('body').on('submit', '.form.ajax-submit', function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src  : '#modal-cod',
			type : 'inline',
			opts : {
				touch : false,
				speed : 300,
				backFocus : false,
				trapFocus : false,
				autoFocus : false,
				mobile : {
					clickSlide: "close"
				}
			}
		}])
	})


	// Увеличение картинки
	Fancybox.bind('.fancy-img', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})


	$('body').on('click', '.radio__label_del', function(e) {
		let delivery = $(this).data('del')

		$('.checkout-sector__item_del').removeClass('_show')

		if ( $(delivery).length ) {
			$(delivery).addClass('_show')
		}
	})


	$('body').on('click', '.section-cart__details', function(e) {
		e.preventDefault()
		if( $(this).hasClass('_active') ) {
			$(this).removeClass('_active')
			$('.section-cart__colr').removeClass('_show')
		} else {
			$(this).addClass('_active')
			$('.section-cart__colr').addClass('_show')
		}
	})


	$('body').on('click', '.close-details', function(e) {
		e.preventDefault()
		
		$('.section-cart__details').removeClass('_active')
		$('.section-cart__colr').removeClass('_show')
	})


	$('#search-input').on('input', function () {
		if (  $(this).val().length > 0 ) {
			$('.form-search__info').addClass('_show');
		} else {
			$('.form-search__info').removeClass('_show');
		}
	});
})


// Вспомогательные функции
const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

document.documentElement.style.setProperty(
	"--scroll_width",
	`${scrollbarWidth}px`
);

function setHeight(className){
    let maxheight = 0

    className.each(function() {
		let elHeight = $(this).outerHeight()

        if( elHeight > maxheight ) {
			maxheight = elHeight
        }
    })

    className.outerHeight( maxheight )
}

const is_touch_device = () => !!('ontouchstart' in window)