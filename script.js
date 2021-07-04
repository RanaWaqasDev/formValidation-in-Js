 const form = document.getElementById('form');
const username =document.getElementById('username')
 const  password = document.getElementById('password');
const password2 = document.getElementById('password2');
const  email = document.getElementById('email');



let checkEmail = (input) =>{
    const email_validator_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email_validator_regex.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input , `Email is not valid`)
    }
}

let checkPasswordsMatch = (input1, input2) => {
    if(input1.value !== input2.value){
        showError(input2 , `Password Doesn't match`)
    }else {
        showSuccess(input2)
    }

}

let checkLength = (input , min ,max) => {
    if(input.value.length < min ){
        showError(input , `${getName(input)} must have atleate ${min} `)
    }else if (input.value.length > max){
        showError(input , `${getName(input)} must have atmost ${max} characters`)
    }else  {
        showSuccess(input)
    }
}



let showError = (input , message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText=message;
}
let showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = ('form-control success');
}
let checkRequired = (inputArr) => {
    inputArr.forEach( (input) => {
        if(input.value.trim() ===''){
            showError(input ,`${getName(input)} Is requied`);
        } else  {
            showSuccess(input)
        }
    })

 }

 let getName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
 }

form.addEventListener('submit', e => {
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    checkLength(username ,3,15);
    checkLength(password , 6,25);
    checkLength(password2 , 6,25);
    checkEmail(email)
    checkPasswordsMatch(password,password2)


})
