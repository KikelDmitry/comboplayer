//email validate
{
	let input = document.querySelector('.order-panel__input'),
		inputContainer = document.querySelector('.order-panel__email'),
		checkTrue = document.querySelector('.order-panel__check-icon--true'),
		checkFalse = document.querySelector('.order-panel__check-icon--false'),
		re = /\S+@\S+\.\S+/;

	input.addEventListener('input', function () {
		if (re.test(input.value)) {
			inputContainer.classList.add('is-true')
			inputContainer.classList.remove('is-false')
			checkTrue.classList.remove('d-none')
			checkFalse.classList.add('d-none')
		} else {
			inputContainer.classList.remove('is-true')
			inputContainer.classList.add('is-false')
			checkTrue.classList.add('d-none')
			checkFalse.classList.remove('d-none')
		}
	})
	input.addEventListener('blur', function () {
		inputContainer.classList.remove('is-true', 'is-false')
	})
}

// order form
{
	let form = document.querySelector('.tariffs'),
		inputs = form.querySelectorAll('input'),
		itemStates = form.querySelectorAll('.js-item-state');

	function getChecks() {
		let checkeds = [...inputs].filter(function (input) {
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