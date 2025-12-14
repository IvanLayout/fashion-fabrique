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
	

	// Установка ширины стандартного скроллбара
	$(':root').css('--scroll_width', widthScroll() + 'px')

	// Моб. меню
	$('.mob-menu-btn').click((e) => {
		e.preventDefault()

		$('.mob-menu-btn').toggleClass('_active')
		$('body').toggleClass('_lock-add')
		$('.header__wrap').toggleClass('_show')
	})

	$('.close-menu').click((e) => {
		e.preventDefault()

		$('.mob-menu-btn').removeClass('_active')
		$('body').removeClass('_lock-add')
		$('.header__wrap').removeClass('_show')
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
})

$(window).on('load', () => {
	
})

// Вспомогательные функции
const widthScroll = () => {
	let div = document.createElement('div')

	div.style.overflowY = 'scroll'
	div.style.width = '50px'
	div.style.height = '50px'
	div.style.visibility = 'hidden'

	document.body.appendChild(div)

	let scrollWidth = div.offsetWidth - div.clientWidth
	document.body.removeChild(div)

	return scrollWidth
}

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