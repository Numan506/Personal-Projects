document.querySelector("#get").addEventListener("click",getUsers);
document.querySelector("#post").addEventListener("click",postUsers);
document.querySelector("#update").addEventListener("click",updateUsers);
document.querySelector("#delete").addEventListener("click",deleteUsers);

function getUsers(){
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=3",{
        timeOut:5000
    })
    .then((res)=>showOut(res))
    .catch((err)=>console.log(err))
}

function postUsers(){
    axios.post("https://jsonplaceholder.typicode.com/todos",{
        
            title: 'Abu Jakaria Md',
            body: 'bar',
            userId: 1,
})
    
    .then((res)=>showOut(res))
    .catch((err)=>console.log(err))
}

function updateUsers(){
    axios.put("https://jsonplaceholder.typicode.com/posts/1",{
        body:({
            id: 1,
            title: 'Numan',
            body: 'bar1',
            userId: 1,
          }),
    })
    .then((res)=>showOut(res))
    .catch((err)=>console.log(err))
}

function deleteUsers(){
    axios.delete("https://jsonplaceholder.typicode.com/posts/1")
    .then((res)=>showOut(res))
    .catch((err)=>console.log(err))
}



function showOut(res){
    document.querySelector("#res").innerHTML=`
    <div class="card card-body bg-warning">
           <h4>Status: ${res.status}</h4>
    </div>

   <div class=" card mt-3 bg-success">
      <div class="card-header">
           Headers:
      </div>

      <div class="card-body">
           <pre>${JSON.stringify(res.headers,null,2)}</pre>
      </div>
   </div>

   <div class=" card mt-3 bg-danger">
      <div class="card-header">
           Data:
      </div>

      <div class="card-body">
           <pre>${JSON.stringify(res.data,null,3)}</pre>
      </div>
   </div>


    <div class="card mt-3 bg-secondary">
          
        <div class="card-header">
           Config:
        </div>
        <div class=""card-body>
           <pre>${JSON.stringify(res.config,null,3)}</pre>
        </div>
      
      
      </div>


    `
}