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
	let form = document.querySelector('.tariffs'),
		inputs = form.querySelectorAll('input'),
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
	}

	inputs.forEach(function (input) {
		input.addEventListener('change', getChecks)
	})
}
{
	// sticky panel fallback
	$(window).scroll(function () {
		let header = $('.header'),
		 offset = header.height(),
		sticky = $('.order-sticky');
		if ($(window).scrollTop() > offset) {
			header.css({
				marginBottom: sticky.height()
			});
			sticky.css({
				position: 'fixed'
			});
		} else {
			header.css({
				marginBottom: 0
			});
			sticky.css({
				position: 'relative'
			});
		}
	})
}