// selectors

const todoInput = document.querySelector(".todoInput");

const todoButton = document.querySelector(".todoButton");

const todoList = document.querySelector(".todoList");

// alerts

const alertWarning = document.querySelector(".alert-warning");

const alertSuccess = document.querySelector(".alert-success");

// events

document.addEventListener("DOMContentLoaded", function(){
  getTodos();
});

todoButton.addEventListener("click", addTodo);

todoList.addEventListener("click", deleteCheck);


// functions

function addTodo(e) {
  e.preventDefault();

  const isEmpty = (str) => !str.trim().length;

  if (isEmpty(todoInput.value)) {

    alertWarning.style.display = "block";

    setTimeout(() => {
      alertWarning.style.display = "none";
    }, 4000);

    todoInput.value = "";

  }else{

    alertSuccess.style.display = "block";

    setTimeout(() => {
      alertSuccess.style.display = "none";
    }, 4000);

    saveLocalTodos(todoInput.value);
   
    // create todo Li

    const todoLi = document.createElement("li");
    todoLi.classList.add("todo");
    todoList.appendChild(todoLi);

    // create todo li a

    const newTodo = document.createElement("a");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todoItem");
    todoLi.appendChild(newTodo);

    // check close button

    const closeButton = document.createElement("span");
    closeButton.innerHTML = "<i class='fa fa-close'></i>";
    closeButton.classList.add("closeButton", "close");
    todoLi.appendChild(closeButton);
  
    // clear todo input value

    todoInput.value = "";
    
  }
}

function deleteCheck(e){

  const item = e.target;

  // delete todo

  if(item.classList[0] === "closeButton"){
    const todo = item.parentElement;
    todo.classList.add("fall");

    removeLocalTodos(todo);

    todo.addEventListener("transitionend", function(){
      todo.remove();
    });
  }

  todoList.onclick = function(ev){
    if(ev.target.tagName == 'LI'){
      ev.target.classList.toggle('checked');
    }
  };

}


// local storage

function saveLocalTodos(todo){
  let todos;

  if(localStorage.getItem("todos") === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(){
  let todos;

  if(localStorage.getItem("todos") === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach((todo) => {

    // create todo Li

    const todoLi = document.createElement("li");
    todoLi.classList.add("todo");
    todoList.appendChild(todoLi);
 
    // check button
 
    // create todo li a
 
    const newTodo = document.createElement("a");
    newTodo.innerText = todo;
    newTodo.classList.add("todoItem");
    todoLi.appendChild(newTodo);
 
    // check close button
 
    const closeButton = document.createElement("span");
    closeButton.innerHTML = "<i class='fa fa-close'></i>";
    closeButton.classList.add("closeButton", "close");
    todoLi.appendChild(closeButton);
  });
}

function removeLocalTodos(todo){
  let todos;

  if(localStorage.getItem("todos") === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  
}