"use strict";
//Dom is a complicated OBJ, interface that extends etc.
//If there is no uncertantity at runtime add an exclamation point after getelementById, asserts that its not null, remove the quesiton mark after the button
const btn = document.getElementById("btn");
//Question mark optional chaining operator
// btn?.addEventListener("click", () => {
//     input.value = "";
// });
//Type Casting TS isnt smart enough to deduce the specific DOM type
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
//Specifying this is a Submit Event type, so we can compartmentalize the callback func
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
//TS includes JSON, DOM in the lib by default 
function createTodo(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        saveTodos();
        console.log('change');
    });
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    newLI.append(todo.text);
    list.append(newLI);
    newLI.append(checkbox);
}
form.addEventListener("submit", handleSubmit);
//Notes
//interface Todo {
//   text: string;
//   completed: boolean;
// }
// const btn = document.getElementById("btn")! as HTMLButtonElement; //Type assertion
// const input = document.getElementById("todoinput")! as HTMLInputElement;
// const form = document.querySelector("form")!;
// const list = document.getElementById("todolist")!;
// const todos: Todo[] = readTodos();
// todos.forEach(createTodo);
// // Load todos from local storage
// function readTodos(): Todo[] {
//   const todosJSON = localStorage.getItem("todos");
//   if (todosJSON === null) return [];
//   return JSON.parse(todosJSON);
// }
// // Save todos to local storage
// function saveTodos() {
//   localStorage.setItem("todos", JSON.stringify(todos));
// }
// function handleSubmit(e: SubmitEvent) {
//   e.preventDefault();
//   const newTodo: Todo = {
//     text: input.value,
//     completed: false,
//   };
//   createTodo(newTodo);
//   todos.push(newTodo);
//   saveTodos();
//   input.value = "";
// }
// function createTodo(todo: Todo) {
//   const newLI = document.createElement("li");
//   const checkbox = document.createElement("input");
//   checkbox.type = "checkbox";
//   checkbox.checked = todo.completed;
//   checkbox.addEventListener("change", function () {
//     todo.completed = checkbox.checked;
//     saveTodos();
//   });
//   newLI.append(todo.text);
//   newLI.append(checkbox);
//   list.append(newLI);
// }
// form.addEventListener("submit", handleSubmit);
