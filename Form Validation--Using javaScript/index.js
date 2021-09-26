// Select System
var form = document.querySelector("#form")
var username = document.querySelector("#username")
var email = document.querySelector("#email")
var password = document.querySelector("#password")
var password1 = document.querySelector("#password1")

// Event System
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
 
// Now Show Error Message
if(username.value==""){
    errorFunction(username,"Username is Required")
}else{
    successFunction(username)
};

if(email.value==""){
    errorFunction(email,"Email is Required")
    
}else if(!validateEmail(email.value)){
      errorFunction(email,"Email is not valid")
}

else{
    successFunction(email)
};

if(password.value==""){
    errorFunction(password,"Password is Required")
}else{
    successFunction(password)
};

if(password1.value==""){
    errorFunction(password1,"Password1 is Required")
}else{
    successFunction(password1)
};




})


// errorFunction

function errorFunction(input,message){
    var formControl = input.parentElement;
   formControl.className = "form-control error "
   
    const small = formControl.querySelector("small")
    small.innerHTML=message
};

// successFunction
function successFunction(input){
    var formControl = input.parentElement;
    formControl.className = "form-control success "
    var text = input.target.value
    console.log(text)
};

// email validity

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


