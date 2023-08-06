const formInput = document.querySelector('#validation-input');
const dataLength = parseInt(formInput.getAttribute("data-length"));

formInput.addEventListener('blur', () => {
    const formValue = formInput.value.trim();
    const isValid = formValue.length === dataLength;
    if (isValid) {
        formInput.classList.add('valid');
        formInput.classList.remove('invalid');
    }
    else {
        formInput.classList.add('invalid');
        formInput.classList.remove('valid');
    }
});