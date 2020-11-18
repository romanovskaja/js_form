let btnOpenModal = document.querySelector('.btn-open-modal');
let btnCloseModal = document.querySelector('.btn-close-modal');
let modalCont = document.querySelector('.modal-container');
let body = document.querySelector('body');

let closeModal = function () {
	let input = document.querySelector('.form__input');

	input.value = '';
	modalCont.classList.remove('show-modal');
	body.classList.remove('overflow');
	body.style.paddingRight = 0;
};

let createForm = function (name) {
	let userName = document.querySelector('#user-name');
	userName.innerHTML = name;
};

btnOpenModal.addEventListener('click', function () {
	let html = document.documentElement.clientWidth;
	let bodyPadding = window.innerWidth - html;
	let input = document.querySelector('.form__input');
	let errorMessage = document.querySelector('.error');

	errorMessage.classList.remove('show-error');
	// если input.value есть, т.е. ничего нету
	if (input.value) {
		createForm(input.value);
		modalCont.classList.add('show-modal');
		body.classList.add('overflow');
		body.style.paddingRight = bodyPadding + 'px';
	} else {
		errorMessage.classList.add('show-error');
	};
});

btnCloseModal.addEventListener('click', closeModal);

modalCont.addEventListener('click', function (e) {
	let target = e.target;
	if (target.classList.contains('modal-container')) {
		closeModal();
	}
});

