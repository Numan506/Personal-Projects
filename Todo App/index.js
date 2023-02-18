//Find Element
const container = document.querySelector(".container");
const todoForm = document.querySelector(".todo-form");
const inputTodoForm = document.querySelector("#inputTodoForm");
const btn = document.querySelector(".btn");
const todoLists = document.querySelector("#list");
const messageElement = document.querySelector("#message");

//createTodo
const createTodo =(todoId,todoValue)=>{

    const todoElement = document.createElement("li");
    todoElement.classList.add("li-style");
    todoElement.id = todoId;

    todoElement.innerHTML = `<span>${todoValue}</span>
    <span> <button class="btn" id="deleteBtn"> <i class="fa fa-trash"></i> </button></span>`;

    todoLists.appendChild(todoElement);

    const deleteButton = todoElement.querySelector("#deleteBtn");
    deleteButton.addEventListener("click",deleteBtn)

}

const showMessage =(text,status)=>{
    messageElement.textContent = text
    messageElement.classList.add(`bg-${status}`);

    setTimeout (()=>{
        messageElement.textContent ="";
        messageElement.classList.remove("bg-success");
        messageElement.classList.remove("bg-danger");

    },1000)

}
//Delete Button
const deleteBtn =(e)=>{
    const selectTodo = e.target.parentElement.parentElement.parentElement;
   
    
    todoLists.removeChild(selectTodo);
    showMessage("Todo is Delete","danger");

    let todos = getTodoLocalStorage();
    
    let result;

    result = todos.filter((x)=>x.todoId !== selectTodo.id)
    localStorage.setItem("myTodos",JSON.stringify(result));

}

  //getTodoLocalStorage
  const getTodoLocalStorage=()=>{
    return localStorage.getItem("myTodos")?JSON.parse(localStorage.getItem("myTodos")):[];
   }

const addTodo =(e)=>{
   e.preventDefault();
   const todoValue = inputTodoForm.value;
   
   //generate unique id
   const todoId = Date.now().toString();
   createTodo(todoId,todoValue)

   //show message create
   showMessage("Todo is created","success");

 
   // add todo local storage
   let todos = getTodoLocalStorage();
   todos.push({todoValue,todoId})
   localStorage.setItem("myTodos",JSON.stringify(todos));

   inputTodoForm.value ="";
}

const loadTodo =()=>{
    const todos = getTodoLocalStorage();

    todos.map((td)=>{createTodo(td.todoId,td.todoValue)})
}


//Listener add
todoForm.addEventListener("submit",addTodo)
window.addEventListener("DOMContentLoaded",loadTodo)