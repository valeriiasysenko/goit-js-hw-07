const form = document.querySelector(".js-login-form");
const onFormHandler = (event)=> {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    if(email === "" || password ===""){
        alert ( "All form fields must be filled in");
    }
    const submitEl = {
        email,
        password,
    };
    console.log (submitEl);
    form.reset();
};
form.addEventListener("submit", onFormHandler);
