

// wrapper.style.transform="translateX(-100vw)"

const products = [
    {
        id:1,
        title:"Air Force",
        price:"$"+190,
        colors:[
            {
               code:"black",
               img:"./img/shoesImg1.webp"
            },
            {
                code:"darkblue",
                img:"./img/air-force-shoes.webp"
            }
        ]
    },

    {
        id:2,
        title:"Air Jordern",
        price:"$"+220,
        colors:[
            {
               code:"lightgray",
               img:"./img/shoesIm2.jpg"
            },
            {
                code:"green",
                img:"./img/1.png"
            }
        ]
    },

    {
        id:3,
        title:"Air Blazer",
        price:"$"+110,
        colors:[
            {
               code:"black",
               img:"./img/shoesImg3.webp"
            },
            {
                code:"darkblue",
                img:"./img/1.png"
            }
        ]
    },

    {
        id:4,
        title:"Air Crater",
        price:"$"+234,
        colors:[
            {
               code:"lightgray",
               img:"./img/shoesImg4.jpeg"
            },
            {
                code:"green",
                img:"./img/1.png"
            }
        ]
    },

    {
        id:5,
        title:"Air Hippie",
        price:"$"+312,
        colors:[
            {
               code:"black",
               img:"./img/shoesImg5.jpg"
            },
            {
                code:"darkblue",
                img:"./img/1.png"
            }
        ]
    },

]

// select all item here:
const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");


let chosenProduct = products[0];

const currentProImg = document.querySelector(".productImg");
const currentProTitle = document.querySelector(".productTitle");
const currentProPrice = document.querySelector(".productPrice");
const currentProColor = document.querySelectorAll(".color");
const currentProSize = document.querySelectorAll(".size");

menuItem.forEach((item,index)=>{
    item.addEventListener("click",()=>{

        // change the current slide
        wrapper.style.transform = `translateX(${-100*index}vw)`;

        //change the chosen product
        chosenProduct = products[index];

        // change text of current product
        currentProTitle.textContent = chosenProduct.title ;
        currentProPrice.textContent = chosenProduct.price ;
        currentProImg.src = chosenProduct.colors[0].img

        //assign new color
        currentProColor.forEach((color,index)=>{
            color.style.backgroundColor=chosenProduct.colors[index].code;
        });
        
    });
});

        currentProColor.forEach((color,index)=>{
            color.addEventListener("click",()=>{
                currentProImg.src = chosenProduct.colors[index].img
            })
        });

        currentProSize.forEach((size,index)=>{
            size.addEventListener("click",()=>{
                currentProSize.forEach((size)=>{
                    size.style.backgroundColor="white";
                    size.style.color="black";
                })
                    size.style.backgroundColor="black";
                    size.style.color="white";
            })
        })


        const paymentFile = document.querySelector(".payment");
        const productButton = document.querySelector(".productBtn");
        const close = document.querySelector(".close");

        productButton.addEventListener("click",()=>{
            paymentFile.style.display = "flex";
        });

        close.addEventListener("click",()=>{
            paymentFile.style.display = "none";
         });


