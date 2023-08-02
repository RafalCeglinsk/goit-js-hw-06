const formLogin = document.querySelector('.login-form');
formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
   const {
   elements: {email, password}} = e.currentTarget;
   if (email.value === "" || password.value === "") {
   alert('Please fill in all the fields');
    } else {
        console.log(`Email: ${email.value}, Password: ${password.value}`);
        formLogin.reset();
    }
   });
