const output_screen= document.querySelector("#output_screen");

function display(num){
    output_screen.value =output_screen.value+num
}

function calculate(){
try{
     output_screen.value= eval(output_screen.value)
}catch{
   alert("invalid")
}
}

function clr(){
     output_screen.value=""
    }

function del(){
        output_screen.value= output_screen.value.slice(0,-1)
}    