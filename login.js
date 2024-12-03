let wrapper = document.querySelector('.wrapper');
let loginLink = document.querySelector('.login-link');
let registerLink = document.querySelector('.register-link');
let iconClose = document.querySelector('.icon-close');
let forgot = document.querySelector('.forgot');



let registerUsername = document.getElementById('username');
let registerEmail = document.getElementById('email');
let registerPassword = document.getElementById('password');
let form = document.getElementById('form');
let button = document.getElementById('button');




let loginButton1 = document.getElementById('login-button1');
let loginForm = document.getElementById('login-form');
let loginEmail = document.getElementById('login-email');
let loginPassword = document.getElementById('login-password');


let popUp = document.getElementById('pop-up');
let ok = document.getElementById('ok');

iconClose.addEventListener('click',function(){
    wrapper.style.display = 'none';
});

registerLink.addEventListener('click',function(){
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',function(){
    wrapper.classList.remove('active');
});

forgot.addEventListener('click',function(){
    wrapper.classList.add('active');
});

// ______________________________________________

let informationUser;
    if(localStorage.Data != null){
        informationUser = JSON.parse(localStorage.Data)
    }else{
        informationUser = [];
    }
    button.onclick = function() {
    const usernameValue = registerUsername.value.trim();
    const emailValue = registerEmail.value.trim();
    const passwordValue = registerPassword.value.trim();

    if(validateInputs(usernameValue, emailValue, passwordValue)){
        let object = {
            username:usernameValue,
            email:emailValue,
            password:passwordValue,
        }
        informationUser.push(object)
        localStorage.setItem('Data', JSON.stringify(informationUser))
        clearData()  
    }}


    ok.onclick = function(){
        popUp.classList.remove('open');
    }
    

    loginButton1.addEventListener('click',function() {
        const emailValue1 = loginEmail.value.trim();
        const passwordValue1 = loginPassword.value.trim();
    function show_pop() {
        popUp.classList.add('open');
    }

        if(validateLoginInputs(emailValue1, passwordValue1)){
        let userExists = false;
        for(let i=0; i<informationUser.length; i++){
            if(informationUser[i].email === emailValue1 && informationUser[i].password === passwordValue1){
                userExists = true;
                break;
            }
        }

        if(userExists){
        } else {
            show_pop();
        }

        clearDataLogin();
    }
    });

    function clearDataLogin() {
        loginEmail.value='';
        loginPassword.value='';
    }

    function clearData(){
        registerUsername.value='';
        registerEmail.value='';
        registerPassword.value='';
    }
        

// validation
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');

    errorDisplay.innerText = message;
}

const setSuccess = element => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');

    errorDisplay.innerText = '';
};

const isValidEmail = registerEmail => {       //search
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(registerEmail).toLowerCase());
}

const validateInputs = (usernameValue, emailValue, passwordValue) => {
    
    if(usernameValue === ''){
        setError(registerUsername, 'Username is required');
        return false;
    } else {
        setSuccess(registerUsername);
    }

    if(emailValue === ''){
        setError(registerEmail, 'Email is required');
        return false;
    } else if (!isValidEmail(emailValue)){
        setError(registerEmail, 'Provide a valid email address');
        return false;
    } else {
        setSuccess(registerEmail)
    }

    if(passwordValue === ''){
        setError(registerPassword, 'Password is required');
        return false;
    } else if (passwordValue.length < 8){
        setError(registerPassword, 'Password must be at least 8 character.');
        return false;
    } else {
        setSuccess(registerPassword);
    }

    return true;
};


//validation login

form.addEventListener('submit', e => {
    e.preventDefault();

    validateLoginInputs();
});

const validateLoginInputs = (emailValue1, passwordValue1) => {
    if(emailValue1 === ''){
        setError(loginEmail, 'Email is required');
        return false;
    }else if (!isValidEmail(emailValue1)){
        setError(loginEmail, 'Provide a valid email address');
        return false;
    } else {
        setSuccess(loginEmail);
    }

    if(passwordValue1 === ''){
        setError(loginPassword, 'Password is required');
        return false;
    } else if (passwordValue1.length < 8){
        setError(loginPassword, 'Password must be at least 8 character.');
        return false;
    } else {
        setSuccess(loginPassword);
    }
    return true;
};