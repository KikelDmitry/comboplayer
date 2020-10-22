//email validate
{
	let form = document.querySelector('.order-panel'),
		input = form.querySelector('.order-panel__input'),
		inputContainer = form.querySelector('.order-panel__email'),
		check = form.querySelector('.order-panel__check'),
		re = /\S+@\S+\.\S+/,
		orderErr = form.querySelector('.order-panel__error');

	input.addEventListener('input', function () {
		if (re.test(input.value)) {
			inputContainer.classList.add('is-true')
			inputContainer.classList.remove('is-false')
			check.classList.add('is-true')
			check.classList.remove('is-false')
			orderErr.classList.remove('is-active')
		} else {
			inputContainer.classList.add('is-false')
			inputContainer.classList.remove('is-true')
			check.classList.add('is-false')
			check.classList.remove('is-true')
		}
	})
	input.addEventListener('blur', function () {
		inputContainer.classList.remove('is-true', 'is-false')
	})
	form.addEventListener('submit', function(e) {
		e.preventDefault();
		if (check.classList.contains('is-true')) {
			alert('submit success')
		} else {
			orderErr.classList.add('is-active')
			setTimeout(function() {
				orderErr.classList.remove('is-active')
			}, 3000)
		}
	})
}

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