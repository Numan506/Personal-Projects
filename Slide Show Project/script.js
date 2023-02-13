const slideshow_elements = document.querySelectorAll(".slideshow-element");



let totalCurrentElement = 1;
setInterval(() => {

    totalCurrentElement ++;
    const currentElement = document.querySelector(".current");
    currentElement.classList.remove("current");

    if(totalCurrentElement > slideshow_elements.length){
        slideshow_elements [0].classList.add("current");
        totalCurrentElement = 1;

    }else{

        currentElement.nextElementSibling.classList.add("current");
    }   

}, 3000);



