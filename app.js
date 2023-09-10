const passwordInput = document.getElementById('password')
const passwordInputLabel = document.querySelector('label[for="password"]');
const passwordConfirm = document.getElementById('password_confirm')
const submitButton = document.querySelector('button[form="detailsForm"]')
const formInputs = document.querySelectorAll('#detailsForm input')

function passwordCheck() {
    if(passwordInput.value.trim() !== passwordConfirm.value.trim()){
        passwordInputLabel.style.color = "red";
        passwordInputLabel.textContent = "PASSWORD - DO NOT MATCH"
        passwordInput.classList.add('error')
    }
    else{
        passwordInputLabel.style.color = "";
        passwordInputLabel.textContent = "PASSWORD"
    }
}

function formCheck(){
    let hasError = false;
    formInputs.forEach(input => {
        if(input.classList.contains('error')){
            hasError = true;
        }
    });
    if(hasError){
        console.log('Form Error')
        return
    }
    else{
        //In future handle any additional functionalities
    }
}