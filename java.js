const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm(){
    isValid = form.checkValidity();
    if(!isValid){
        message.textContent = 'Please fill out all fields.';
        message.style.color ='black';
        messageContainer.style.borderColor = 'black';
        return;
    }

    if(password1El.value === password2El.value)
    {passwoedsMatch = true;
    password1El.style.borderColor = 'yellow';
    password2El.style.borderColor = 'yellow';
    }else{
        passwordsMatch=false;
        message.textContent = 'Make sure the passwords match.';
        message.style.color = 'black';
        messageContainer.style.borderColor = 'black';
        password1El.style.borderColor = 'black';
        password2El.style.borderColor = 'black';
        return;
    }
}
if(isValid && passwordsMatch){
    message.textContent= 'Success!';
    message.style.color = 'black';
    messageContainer.style.borderColor = 'black';
}

function storeFormData(){
    const user ={
        name: form.name.value,
        email: form.email.value,
        password: form.password.value
    };

    //here you write the code for transmitting data to a server

}

function processFormData(e){
    e.preventDefault();
    validateForm();
    if(isValid && passwordsMatch){
        storeFormData();
    }
}
form.addEventListener('submit',processFormData);
