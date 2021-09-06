// Variable
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const isbn = document.querySelector("#isbn");
const button = document.querySelector(".btn");
const booklist = document.querySelector("#book-list");



button.addEventListener("click",function(){
    if(title.value =='' && author.value==''&& isbn.value==''){
         alert("input mut be needed")
    }else{
        const tableRow = document.createElement("tr");
        // creating Title
        const Title = document.createElement("th");
        Title.innerHTML=title.value;
        tableRow.appendChild(Title);
         // creating author
        const Author = document.createElement("th");
        Author.innerHTML=author.value;
        tableRow.appendChild(Author);

        
        // creating Isbn
        const Isbn = document.createElement("th");
        Isbn.innerHTML=author.value;
        tableRow.appendChild(Isbn);

        booklist.appendChild(tableRow)
    }
})