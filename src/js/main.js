//email validate
// {
// 	let form = document.querySelector('.order-panel'),
// 		input = form.querySelector('.order-panel__input'),
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
// 	reset.addEventListener('click', function() {
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
// sticky panel fallback
{
	let header = $('.header'),
		postHeader = $('.post-header'),
		offset = (header.outerHeight() + postHeader.outerHeight() || header.outerHeight()),
		sticky = $('.sticky-header');

	if (sticky.length !== 0) {
		$(window).scroll(function () {
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
		itemsCarousels = $('.items-carousels');

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
		};

	$(document).ready(function () {
		itemsCarousels.each(function () {
			$(this).owlCarousel(carouselConfig);
		});
		bannerSlider.owlCarousel(bannerConfig);
	})

}
// favorite btn
{
	$('.fav-btn').click(function() {
		$(this).toggleClass('is-active');
	})
}
