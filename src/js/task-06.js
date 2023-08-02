const formInput = document.querySelector('#validation-input');
const dataLength = formInput.getAttribute('data-length');

formInput.addEventListener('blur', () => {
    if (formInput.value.length < dataLength) {
        formInput.classList.add('invalid');
        formInput.classList.remove('valid');
    }
    else {
        formInput.classList.add('valid');
        formInput.classList.remove('invalid');
    }
});