const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const gridcheck = document.getElementById('gridcheck');

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

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const gridcheckValue = gridcheck.value.trim();

    if(usernameValue === ''){
        setError(username, 'Username is required');
    } else{
        setSuccess(username);
    }

    if(passwordValue === ''){
        setError(password, 'Password is required');
    } else if(passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character.');
    } else {
        setSuccess(password);
    }

    if(gridcheckValue === ""){
        setError(gridcheck, 'Please fill this button')
    } else{
        setSuccess(gridcheck);
    }

    if(username.parentElement.classList.contains('success') && password.parentElement.classList.contains('success') && gridcheck.parentElement.classList.contains('success')) {
        window.location.href = 'dashboard.html';
    }

}
