const formLogin = document.querySelector('.login-form');
formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
   const {
   elements: {email, password}} = e.currentTarget;
   if (email.value === "" || password.value === "") {
   alert('Please fill in all the fields');
    } else {
        const formData = {
            email: email.value,
            password: password.value,
        };
        console.log(formData)
        formLogin.reset();
    }
   });
