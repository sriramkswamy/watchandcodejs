// english translated function
function makeTurkeysandwich () {
  Get one slice of bread;
  Add turkey;
  Put a slice of bread on top;
}

// function with argument
function makeSandwichWith (filling) {
  Get one slice of bread;
  Add filling;
  Put a slice of bread on top;
}

// display function
var todos = ['item 1', 'item 2', 'item 3'];

function displayTodos() {
  console.log('My Todos: ', todos);
}

displayTodos();

// function for adding a todo
var todos = ['item 1', 'item 2', 'item 3'];

function displayTodos() {
  console.log('My Todos: ', todos);
}

function addTodo() {
  todos.push('new todo');
}

addTodo();

displayTodos();

// function for adding a todo with an argument
var todos = ['item 1', 'item 2', 'item 3'];

function displayTodos() {
  console.log('My Todos: ', todos);
}

function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}

addTodo('hello there');

// function for changing a todo given position
var todos = ['item 1', 'item 2', 'item 3'];

function displayTodos() {
  console.log('My Todos: ', todos);
}

function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}

function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}

addTodo('hello there');
changeTodo(0, 'changed')

// function for deleting a todo
var todos = ['item 1', 'item 2', 'item 3'];

function displayTodos() {
  console.log('My Todos: ', todos);
}

function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}

function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}

function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}

addTodo('hello there');
changeTodo(0, 'changed');
deleteTodo(1);
