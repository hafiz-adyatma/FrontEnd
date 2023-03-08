const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const Register = document.getElementById('Register');

form.addEventListener('submit' , e => {
    e.preventDefault();

    validateInputs();
});


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidateEmail = email => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());

}
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const repasswordValue = repassword.value.trim();



    if(usernameValue === ''){
        setError(username, 'Username is required');
    } else{
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email, 'Email is requied');
    } else if (!isValidateEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, 'Password is required');
    } else if(passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character.');
    } else {
        setSuccess(password);
    }

    if(repasswordValue === ''){
        setError(repassword, 'Please confirm your password');
    } else if (repasswordValue !== passwordValue){
        setError(repassword, "Password doesn't match");
    } else {
        setSuccess(repassword);
    }
    
    if (username.parentElement.classList.contains('success') &&
    email.parentElement.classList.contains('success') &&
    password.parentElement.classList.contains('success') &&
    repassword.parentElement.classList.contains('success')) {
    // arahkan pengguna ke halaman login
    window.location.href = 'login.html';
}
}
