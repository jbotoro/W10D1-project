
const localStorage = window.localStorage;
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let ultodo = document.querySelector(".todos");
let ulform = document.querySelector(".add-todo-form");
let checkboxes = Array.from(document.querySelectorAll("label"));



export const checkListener = () => {
  checkboxes.forEach ( label => {
    label.addEventListener("click")
  });
}


export const addTodo = () => {
  ulform.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputval = document.getElementsByName("add-todo")[0].value;
    let todo = {
      input: inputval,
      done: false
    };
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    populateList([todo]);
    document.getElementsByName("add-todo")[0].value = "";
  });
};

export const populateList = (todos) => {
  todos.map((todo) => {
    let li = document.createElement("li");
    let label = document.createElement("label");
    label.innerHTML = todo.input + '<input type="checkbox">';
    li.append(label);
    ultodo.append(li);
  });
};

addTodo();
populateList(todos);