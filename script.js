'use strict'
let form = document.querySelector('form')
let btn = document.querySelector("button")
let inputs = document.querySelectorAll('input')
// let inputValue = inputs.value;
let errorMsg = document.querySelectorAll(".texts")
let errorIcon = document.querySelectorAll(".img")

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    inputs.forEach((input, index) =>{
        const isEmpty = !input.value;
        errorIcon[index].style.visibility = isEmpty ? 'visible' : 'hidden';
        errorMsg[index].style.visibility = isEmpty ? 'visible' : 'hidden';
        input.style.border = isEmpty ?"2px solid red" : ''

        if (input.type === 'email') {
            if (isEmpty && !isValidEmail(input.value)) {
                input.style.color = 'red';
                input.placeholder = "email@example.com";
            } else {
                input.style.color = '';
            }
        }
    } )
});

function isValidEmail(email){
    var emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegEx.test(email);
}