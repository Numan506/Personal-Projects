const data =[
    {
        id:1,
        name:"Brown Leather Strap",
        img:"https://m.media-amazon.com/images/I/71CVv+-eVWL._UY550_.jpg",
        price:30,
        cat:"Abc"
    },
    {
        id:2,
        name:"Bold Blue Steel ",
        img:"https://m.media-amazon.com/images/I/51elon2l7EL._UX425_.jpg",
        price:35,
        cat:"Bde"
    },
    {
        id:53,
        name:"Black Beather Strap ",
        img:"https://m.media-amazon.com/images/I/71R7p+X-AkL._UY550_.jpg",
        price:40,
        cat:"Cfg"
    },
    {
        id:4,
        name:"Black Leather Strap",
        img:"https://m.media-amazon.com/images/I/81nC4u9eYfL._UY550_.jpg",
        price:45,
        cat:"Dhi"
    },
    {
        id:5,
        name:"Brown Leather Strap",
        img:"https://m.media-amazon.com/images/I/71nf1jTuxLL._UY550_.jpg",
        price:50,
        cat:"Ejk"
    },
    {
        id:6,
        name:"Black Men Watch",
        img:"https://m.media-amazon.com/images/I/61Sle5LIoFL._UX522_.jpg",
        price:55,
        cat:"Flm"
    },
    {
        id:7,
        name:"Blue Men Watch",
        img:"https://m.media-amazon.com/images/I/71+f+TmlmnL._UX522_.jpg",
        price:60,
        cat:"Gno"
    },
    {
        id:8,
        name:"Analog-Blue Dial Men's Watch",
        img:"https://m.media-amazon.com/images/I/71RJmPv0WKL._UX522_.jpg",
        price:65,
        cat:"Hpq",
    }
]


const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const allCats = document.querySelector(".cats");
const priceRange = document.querySelector(".pricerange");
const priceValue = document.querySelector(".priceValue");


const displayProducts =(products)=>{

    productsContainer.innerHTML = products.map((product)=>
        `<div class="product">
              <img src=${product.img}
              alt="" />
              <span class="name">${product.name}:</span>
              <span class="priceTex">Price: ${product.price}$</span>
              
       </div>`
    ).join("");

}
displayProducts(data);


//Search Button

searchInput.addEventListener("keyup",(e)=>{
    const value = e.target.value.toLowerCase()

    if(value){
        displayProducts(
            data.filter((item)=>item.name.toLowerCase().indexOf(value) !==-1)
        )
    }else{
       displayProducts(data)
    }
    
});


const setCatagory =()=>{
   const allCatagory = data.map(item=>item.cat);
   const catagory = ["All",...allCatagory.filter((item,index)=>{
    return allCatagory.indexOf(item)===index;
   })];

   allCats.innerHTML = catagory.map(cat=>
    `
    <span class="cat">${cat}</span>
    `).join("");


    allCats.addEventListener("click",(e)=>{
        const selectCat = e.target.textContent ;

        selectCat == "All"
            ? displayProducts(data)
            : displayProducts(data.filter((item)=> item.cat==selectCat));
    });
}

   const setPrice =()=>{
      const priceList = data.map((item)=>item.price);
      const maxPrice = Math.max(...priceList)
      const minPrice = Math.min(...priceList)

    //   priceRange.max = maxPrice;
    //   priceRange.min = minPrice;
    //   priceRange.value = maxPrice;

      priceValue.textContent = "$"+maxPrice;

      priceRange.addEventListener("input",(e)=>{
        priceValue.textContent = "$"+e.target.value;
        displayProducts(data.filter((item)=>item.price <= e.target.value))
      })

   }

setCatagory();
setPrice();