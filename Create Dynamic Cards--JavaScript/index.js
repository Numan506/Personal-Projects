// const posts = [
//     {
//         title:"This is Title 1",
//         body:"This is Body 1"
//     },
//     {
//         title:"This is Title 2",
//         body:"This is Body 2"
//     },
//     {
//         title:"This is Title 3",
//         body:"This is Body 3"
//     },
//     {
//         title:"This is Title 4",
//         body:"This is Body 4"
//     },
//     {
//         title:"This is Title 5",
//         body:"This is Body 5"
//     },
//     {
//         title:"This is Title 6",
//         body:"This is Body 6"
//     },
//     {
//         title:"This is Title 7",
//         body:"This is Body 7"
//     },
//     {
//         title:"This is Title 8",
//         body:"This is Body 8"
//     }
// ]


/* <div class="post">
            <h4 class="post-title">Post Title 1</h4>
            <p class="post-body">Post Discription</p>
    </div> */

//selectios part

     const fetchData = async(config)=>{
        try{
            const res = await axios(config);
            return res.data;

        }catch(err){
             throw err("Data is not fetched");
        }

        
        
     }

    const postElements = document.querySelector(".posts")
    
    const selectAllData =async()=>{
        const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");

        posts.map((post)=>{
         
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        postElement.innerHTML = `<h4 class="post-title">${"Id: "+post.id}</h4> </br>
        <p class="post-body">${"Title: "+post.title}</p> </br>
        <p class="post-body">${"Body: "+post.body}</p>`;

        postElements.appendChild(postElement)

        })
    
    }
    selectAllData();