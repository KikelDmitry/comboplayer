//email validate
{
	// let form = document.querySelector('.order-panel');
	// if(form != null) {
	// 	let input = form.querySelector('.order-panel__input'),
	// 		inputContainer = form.querySelector('.order-panel__email'),
	// 		check = form.querySelector('.order-panel__check'),
	// 		re = /\S+@\S+\.\S+/,
	// 		orderErr = form.querySelector('.order-panel__error'),
	// 		reset = form.querySelector('.order-panel__reset');

	// 	input.addEventListener('input', function () {
	// 		if (re.test(input.value)) {
	// 			inputContainer.classList.add('is-true')
	// 			inputContainer.classList.remove('is-false')
	// 			check.classList.add('is-true')
	// 			check.classList.remove('is-false')
	// 			orderErr.classList.remove('is-active')
	// 		} else {
	// 			inputContainer.classList.add('is-false')
	// 			inputContainer.classList.remove('is-true')
	// 			check.classList.add('is-false')
	// 			check.classList.remove('is-true')
	// 		}
	// 	})
	// 	reset.addEventListener('click', function () {
	// 		input.value = '';
	// 		inputContainer.classList.remove('is-direct');
	// 		input.readOnly = false;
	// 	})
	// 	input.addEventListener('blur', function () {
	// 		inputContainer.classList.remove('is-true', 'is-false')
	// 	})
	// 	form.addEventListener('submit', function (e) {
	// 		e.preventDefault();
	// 		if (check.classList.contains('is-true')) {
	// 			alert('submit success')
	// 		} else {
	// 			orderErr.classList.add('is-active')
	// 			setTimeout(function () {
	// 				orderErr.classList.remove('is-active')
	// 			}, 3000)
	// 		}
	// 	})
	// }
}

// order form
{
	let form = document.querySelector('.tariffs');
	if (form) {
		let inputs = form.querySelectorAll('input'),
			itemStates = form.querySelectorAll('.js-item-state');

		function getChecks() {
			let checkeds = Array.from(inputs).filter(function (input) {
				return input.checked
			})
			itemStates.forEach(function (item) {
				item.classList.remove('is-active')
			})
			checkeds.forEach(function (checked) {
				checked.closest('.js-item-state').classList.add('is-active')
			})

			inputs.forEach(function (input) {
				input.addEventListener('change', getChecks)
			})
		}
	}
}
// forms styles
{
	$('.form__iconed-input').find('.form__text-input').focus(function () {

	})
}
// sticky panel
{
	let header = $('.header'),
		postHeader = $('.post-header'),
		offset = (header.outerHeight() + postHeader.outerHeight() || header.outerHeight()) + header.offset().top,
		sticky = $('.sticky-header');

	if (sticky.length !== 0) {
		$(window).scroll(function () {
			if ($(window).height() > 600) {
				if ($(window).scrollTop() > offset) {
					header.css({
						marginBottom: sticky.height()
					});
					sticky.addClass('is-sticky');
				} else {
					header.css({
						marginBottom: 0
					});
					sticky.removeClass('is-sticky');
				}
			}
		})

	}
}
// header search bar
// {
// 	let searchInput = $('.header__search-input'),
// 		searchForm = $('.header__search'),
// 		rightBar = $('.header__right-side'),
// 		searchResults = $('.search-dropdown');

// 	searchInput.focus(function () {
// 		searchForm.addClass('is-focused');
// 		rightBar.addClass('d-none');
// 		rightBar.removeClass('d-flex');
// 		searchResults.addClass('is-active');
// 	});
// 	searchInput.blur(function () {
// 		searchForm.removeClass('is-focused');
// 		rightBar.addClass('d-flex');
// 		rightBar.removeClass('d-none');
// 		searchResults.removeClass('is-active');
// 	});
// }
// mobile menu
{
	let burger = document.querySelector('.header__burger-btn');
	function mobileMenuOpen() {
		let menu = document.querySelector('.header__menu');
		burger.classList.toggle('is-active');
		if (burger.classList.contains('is-active')) {
			// open action
			menu.classList.add('is-active')
			burger.setAttribute('aria-label', '?????????????? ????????')
		} else {
			// close action
			menu.classList.remove('is-active')
			burger.setAttribute('aria-label', '?????????????? ????????')
		}
	}
	burger.addEventListener('click', mobileMenuOpen);
}
// movie screenshots modal carousel
{
	let slides;
	if ($(window).width() < 990) {
		$('.movie-screenshots').owlCarousel({
			autoWidth: true,
			margin: 10,
		});
		slides = $('.movie-screenshots .owl-item');
	} else {
		$('.movie-screenshots').trigger('destroy.owl.carousel');
		$('.movie-screenshots').removeClass('owl-carousel');
		slides = $('.movie-screenshots__item');
	}
	slides.click(function () {
		let index = $(this).index();
		let modalSlides = $('.movie-modal .carousel-item');
		modalSlides.each(function () {
			$(this).removeClass('active');
		})
		modalSlides[index].classList.add('active')
	})
}
// owl carousel
{
	let bannerSlider = $('.top-slider__container'),
		itemsCarousels = $('.items-carousels'),
		timeline = $('.timeline__tape'),
		categories = $('.categories-list');

	let defaultConfig = {
		nav: true,
		navElement: 'button',
		navClass: ['slider-nav slider-nav--left', 'slider-nav slider-nav--right'],
		navText: ['<span class="visually-hidden">???????????????????? ??????????????</span><i class="icon-caret-down"></i>', '<span class="visually-hidden">?????????????????? ??????????????</span><i class="icon-caret-down"></i>'],
		loop: true,
	},
		bannerConfig = {
			...defaultConfig,
			items: 1,
			center: true,
			// autoWidth: true,
			responsive: {
				0: {
					nav: false,
				},
				576: {
					nav: true,
				},
			}
		},
		carouselConfig = {
			...defaultConfig,
			responsive: {
				0: {
					nav: false,
					items: 2,
				},
				576: {
					nav: false,
					items: 3,
				},
				768: {
					nav: true,
					items: 4,
				},
				1100: {
					nav: true,
					items: 5,
				}
			},
		},
		timelineConfig = {
			autoWidth: true,
			nav: true,
			navElement: 'button',
			navClass: ['timeline__nav timeline__nav--left', 'timeline__nav timeline__nav--right'],
			navText: ['<span class="visually-hidden">??????????</span><i class="icon-caret-up"></i>', '<span class="visually-hidden">????????????</span><i class="icon-caret-up"></i>'],
		},
		categoriesConfig = {
			autoWidth: true,
			nav: true,
			navElement: 'button',
			navClass: ['category-row__nav category-row__nav--prev', 'category-row__nav category-row__nav--next'],
			navText: ['<span class="visually-hidden">??????????</span><i class="icon-caret-up"></i>', '<span class="visually-hidden">????????????</span><i class="icon-caret-up"></i>'],
		}

	$(document).ready(function () {
		itemsCarousels.each(function () {
			$(this).owlCarousel(carouselConfig);
		});
		bannerSlider.owlCarousel(bannerConfig);
		timeline.owlCarousel(timelineConfig);
		categories.owlCarousel(categoriesConfig);

		$('.categories-list__input').each(function () {
			$(this).change(function () {
				categories.trigger('refresh.owl.carousel')
			})
		})
		$('.seasons-switcher__tape').each(function (idx) {
			$(this).owlCarousel({
				autoWidth: true,
				margin: 15,
				nav: true,
				navContainer: '#seasons-slider-' + idx,
				navClass: ['slider-nav slider-nav--left', 'slider-nav slider-nav--right'],
				navText: ['<span class="visually-hidden">??????????</span><i class="icon-caret-down"></i>', '<span class="visually-hidden">????????????</span><i class="icon-caret-down"></i>'],
			})
		})
	})
}
// favorite btn
{
	$('.fav-btn').click(function (e) {
		e.stopPropagation();
		$(this).toggleClass('is-active');
	})
}
// play btn 
{
	$('.play-btn').click(function () {
		if ($(this).hasClass('is-paused')) {
			$(this).removeClass('is-paused');
			$(this).attr('aria-label', '????????????????????');
		} else {
			$(this).addClass('is-paused');
			$(this).attr('aria-label', '??????????????????????????');
		}
	})
}
// expand btn 
{
	$('.player-bar__expand').click(function () {
		$(this).toggleClass('is-expanded')
	})
}
// sort dir
{
	$('.items-sort__dir').click(function (e) {
		e.stopPropagation();
		$(this).toggleClass('reverse-dir')
	})
}
{
	// player tooltips
	let hasTooltip = $('.has-tooltip'),
		tooltip = $('.float-tooltip');
	hasTooltip.mouseover(function () {
		let tooltipText = $(this).attr('aria-label');
		tooltip.text(tooltipText);
		tooltip.addClass('is-visible');
		let tooltipTop = $(this).offset().top - 30;
		let tooltipLeft = ($(this).outerWidth() / 2) + $(this).offset().left
		tooltip.css({
			top: tooltipTop,
			left: tooltipLeft
		})

		$(this).offset()
		// $(this).offset();
	})
	hasTooltip.mouseout(function () {
		tooltip.removeClass('is-visible');
	})
}
// tv guide info
{
	$(document).ready(function () {
		function isTouchDevice() {
			return (('ontouchstart' in window) ||
				(navigator.maxTouchPoints > 0) ||
				(navigator.msMaxTouchPoints > 0));
		}
		if (!isTouchDevice()) {
			let programmLink = $('.guide-channel__list > .programm-list__item');

			programmLink.mouseover(function () {
				let programmInfo = $(this).find('.programm-card');
				let tooCloseToRight = $(window).innerWidth() - ($(this).offset().left + $(this).innerWidth()) < programmInfo.innerWidth();
				programmInfo.addClass('is-visible');
				if (tooCloseToRight) {
					programmInfo.css({
						transform: 'translate(-50%, -50%)',
					})
				} else {
					programmInfo.css({
						transform: 'translate(50%, -50%)',
					})
				}
			})
			programmLink.mouseout(function () {
				programmInfo = $(this).find('.programm-card');
				programmInfo.removeClass('is-visible');
			})
		}
	})

}
// channel page -> programm description expander
{
	$('.expanded-text').click(function () {
		let fullHeight = $(this)[0].scrollHeight;
		let initialHeight = $(this).innerHeight();
		if (fullHeight >= initialHeight) {
			$(this).toggleClass('expanded');
			if ($(this).hasClass('expanded')) {
				$(this).css('max-height', fullHeight + 'px')
			} else {
				$(this).css('max-height', '50px')
			}
		} else {
			return
		}
	})
}
// cities dropdwon typehead.js
{
	let substringMatcher = function (strs) {
		return function findMatches(q, cb) {
			let matches, substringRegex;

			// an array that will be populated with substring matches
			matches = [];

			// regex used to determine if a string contains the substring `q`
			substrRegex = new RegExp(q, 'i');

			// iterate through the pool of strings and for any string that
			// contains the substring `q`, add it to the `matches` array
			$.each(strs, function (i, str) {
				if (substrRegex.test(str)) {
					matches.push(str);
				}
			});

			cb(matches);
		};
	};

	let citiesArr = [
		'????????????',
		'????????????-????-????????',
		'???????????? ??????????????',
		'????????????????????????',
		'??????????????',
		'??????????????????',
		'????????????????????????',
	];
	$('#cities-picker').typeahead({
		hint: false,
		highlight: true,
		minLength: 1
	},
		{
			name: 'cities',
			source: substringMatcher(citiesArr),
		});
}
