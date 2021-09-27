// Select System
var form = document.querySelector("#form")
var username = document.querySelector("#username")
var email = document.querySelector("#email")
var password = document.querySelector("#password")
var password1 = document.querySelector("#password1")

// Event System
form.addEventListener("submit",(e)=>{
e.preventDefault();
checkRequired([username,email,password,password1]);

checkLength(username, 5, 20);
checkLength(password, 6, 15);
emailTest(email);
checkPassword(password,password1)


});





// checkRequired
function checkRequired(inputArray){
    inputArray.forEach(function(input){
        if(input.value.trim()===""){
         errorFunction(input,`${getFieldName(input)} is required`)
        }
        else{
            successFunction(input)
        }
    })
 
 }

 // checkLength

function checkLength(input,min,max){
    if(input.value.length<min){
        errorFunction(input,`${getFieldName(input)} must be at list ${min} charecter`)
    }else if(input.value.length>max){
         errorFunction(input,`${getFieldName(input)} must be less then ${max} charecter`)
    }else{
        successFunction(input)
    }

}


//  getFieldName

function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);

}



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
    
};

// email validity

function emailTest(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(re.test(input.value.trim())){
        successFunction()
    }else{
        errorFunction(input,"email is not valid")
    }
}

// confirm password

function checkPassword(input1,input2){
          if(input1.value !== input2.value){
            errorFunction(input2,"password1 do not match")
          }
}

