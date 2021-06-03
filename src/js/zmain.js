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
// sticky panel
{
	let header = $('.header'),
		postHeader = $('.post-header'),
		offset = (header.outerHeight() + postHeader.outerHeight() || header.outerHeight()),
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
{
	let searchInput = $('.header__form-input'),
		searchForm = $('.header__form'),
		rightBar = $('.header__right-side'),
		searchResults = $('.search-dropdown');

	searchInput.focus(function () {
		searchForm.addClass('is-focused');
		rightBar.addClass('d-none');
		rightBar.removeClass('d-flex');
		searchResults.addClass('is-active');
	});
	searchInput.blur(function () {
		searchForm.removeClass('is-focused');
		rightBar.addClass('d-flex');
		rightBar.removeClass('d-none');
		searchResults.removeClass('is-active');
	});
}
// mobile menu
{
	let burger = document.querySelector('.header__burger-btn');
	function mobileMenuOpen() {
		let menu = document.querySelector('.header__menu');
		burger.classList.toggle('is-active');
		if (burger.classList.contains('is-active')) {
			// open action
			menu.classList.add('is-active')
			burger.setAttribute('aria-label', 'Закрыть меню')
		} else {
			// close action
			menu.classList.remove('is-active')
			burger.setAttribute('aria-label', 'Открыть меню')
		}
	}
	burger.addEventListener('click', mobileMenuOpen);
}
// owl carousel
{
	let bannerSlider = $('.top-slider__container'),
		itemsCarousels = $('.items-carousels'),
		timeline = $('.timeline__tape');

	let defaultConfig = {
		nav: true,
		navElement: 'button',
		navClass: ['slider-nav slider-nav--left', 'slider-nav slider-nav--right'],
		navText: ['<span class="visually-hidden">Предыдущий элемент</span><i class="icon-caret-down"></i>', '<span class="visually-hidden">Следующий элемент</span><i class="icon-caret-down"></i>'],
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
			navText: ['<span class="visually-hidden">Назад</span><i class="icon-caret-up"></i>', '<span class="visually-hidden">Вперед</span><i class="icon-caret-up"></i>'],
		}

	$(document).ready(function () {
		itemsCarousels.each(function () {
			$(this).owlCarousel(carouselConfig);
		});
		bannerSlider.owlCarousel(bannerConfig);
		timeline.owlCarousel(timelineConfig)
	})

}
// favorite btn
{
	$('.fav-btn').click(function () {
		$(this).toggleClass('is-active');
	})
}
// tv guide info
{
	let programmLink = $('.guide-channel__list > .programm-list__item'),
		programmInfo = $('.programm-card'),
		gridCol = $('.guide-grid__col'),
		closeBtn = $('.programm-card__close');

	function offset(el) {
		let rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {
			top: rect.top + scrollTop,
			left: rect.left + scrollLeft,
			width: rect.width
		}
	}

	programmLink.mouseover(function () {
		let currentCol = $(this).closest(gridCol);
		let prevCol = gridCol[currentCol.index() - 1];
		let nextCol = gridCol[currentCol.index() + 1];
		currentCol = currentCol[0];

		programmInfo.css({
			width: offset(currentCol).width - 30,
		})
		programmInfo.addClass('is-visible');

		if (nextCol == undefined || offset(nextCol).left < offset(currentCol).left) {
			programmInfo.css({
				left: offset(prevCol).left + 15,
				top: offset(prevCol).top,
			});
		} else {
			programmInfo.css({
				left: offset(nextCol).left + 15,
				top: offset(nextCol).top,
			});
		};
		programmLink.mouseout(function () {
			programmInfo.removeClass('is-visible');
		})
	})
	closeBtn.click(function () {
		programmInfo.removeClass('is-active');
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
		'Ростов',
		'Ростов-на-Дону',
		'Ростов Великий',
		'Ростановское',
		'Россошь',
		'Роскосмос',
		'Роскомнадзор',
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