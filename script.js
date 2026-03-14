const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e){

e.preventDefault();

let valid = true;

/* Inputs */

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phone = document.getElementById("phone");

const errors = document.querySelectorAll(".error");

errors.forEach(error => error.textContent = "");

/* Username validation */

if(username.value.trim() === ""){
errors[0].textContent = "Username cannot be empty";
valid = false;
}

/* Email validation */

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.value.match(emailPattern)){
errors[1].textContent = "Enter valid email";
valid = false;
}

/* Password validation */

if(password.value.length < 6){
errors[2].textContent = "Password must be at least 6 characters";
valid = false;
}

/* Phone validation */

const phonePattern = /^[0-9]{10}$/;

if(!phone.value.match(phonePattern)){
errors[3].textContent = "Phone number must be 10 digits";
valid = false;
}

/* Success */

if(valid){
alert("Registration Successful!");
form.reset();
}

});