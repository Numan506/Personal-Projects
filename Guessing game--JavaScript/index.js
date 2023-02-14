
let totalAttempt = 5;
let attempts = 0;
let win = 0;
let lost = 0;



const cardBody = document.querySelector(".card-body");
const form = document.querySelector("form");
const guessingNumber = form.querySelector("#guessingNumber");
const check = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const winLost = document.createElement("p");
const attempttext = cardBody.querySelector(".attempttext");



form.addEventListener("submit",(e)=>{
    e.preventDefault();
    attempts ++;

    if(attempts == 5){
        guessingNumber.disabled = true;
        check.disabled = true;


    }else{
        checkResult(guessingNumber.value);
    }
    guessingNumber.value = "";
    attempttext.innerHTML = ` Remaining attempts: ${totalAttempt-attempts}`
    
})

function checkResult(guessingNumber){


   const rendomNumber = getRendomNumber(5);

   if(guessingNumber == rendomNumber){
         resultText.innerHTML = `You have Won. `
         win ++;

   }else{
         resultText.innerHTML = `Sorry you have Lost :: Your random number was: ${rendomNumber} `
         lost ++;
   }
   winLost.innerHTML = `Won: ${win} and Lost: ${lost}`

   winLost.classList.add("large-text");
   cardBody.appendChild(winLost);

   
}


function getRendomNumber(limit){
    return Math.floor (Math.random()*limit)+1 ;
}