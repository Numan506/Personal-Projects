
const fontSize = document.querySelector("#fontSize");
const bgColor = document.querySelector("#bgColor");
const clrButton = document.querySelector("#clrButton");
const main = document.querySelector("main");




const bgClrchange =(e)=>{

    const cngBgClr = e.target.value ;
    main.style.backgroundColor = cngBgClr ;
    localStorage.setItem ("color", cngBgClr);
}

const fontChange =(e)=>{

    const cngFntSz = e.target.value
    main.style.fontSize  = cngFntSz;
    localStorage.setItem("Front", cngFntSz);
}

const reseltAll = ()=>{
    localStorage.removeItem("Front");
    localStorage.removeItem("color");
    setValues("16px","aqua")

}


const setValues =(initFront,initColor)=>{

    fontSize.value = initFront ;
    bgColor.value = initColor ;
    main.style.fontSize = initFront ;
    main.style.backgroundColor = initColor ;

}

const initSetup =()=>{
   const initFront = localStorage.getItem("Front");
   const initColor = localStorage.getItem("color")

   if (initFront && initColor){

         setValues(initFront,initColor)

   }if(!initFront && initColor){

         setValues("16px","aqua")
     
   }if(!initFront && initColor){
         setValues("16px",initColor)

   }if(initFront && !initColor){
         setValues(initFront,"aqua")
   }


}




fontSize.addEventListener("change",fontChange)
bgColor.addEventListener("change",bgClrchange)
clrButton.addEventListener("click",reseltAll)
initSetup();
