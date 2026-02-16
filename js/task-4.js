const form = document.querySelector(".login-form");
const onFormHandler = (event)=> {
    event.preventDefault();
    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();
    if(email === "" || password ===""){
       return alert ( "All form fields must be filled in");
    }
    const submitEl = {
        email,
        password,
    };
    console.log (submitEl);
    form.reset();
};
form.addEventListener("submit", onFormHandler);
