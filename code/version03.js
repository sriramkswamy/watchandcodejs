// translated object
{
  operatingSystem: 'Mac',
  screenSize: '15 inches',
  purchaseYear: 2011
}

// assigning an object to a variable
var myComputer = {
  operatingSystem: 'Mac',
  screenSize: '15 inches',
  purchaseYear: 2011
};

console.log("Complete Object: ", myComputer);
console.log("Operating system: ", myComputer.operatingSystem);
console.log("Screen Size: ", myComputer.screenSize);
console.log("Purchase year: ", myComputer.purchaseYear);

// functions inside objects
var gordon = {
  name: 'Gordon',
  sayName: function() {
    console.log(this);
  }
};

console.log(gordon.sayName());

// refining this keyword based log
var gordon = {
  name: 'Gordon',
  sayName: function() {
    console.log(this.name);
  }
};

console.log(gordon.sayName());

// storing the todos
var todoList = {
  todos: ['item 1', 'item 2', 'item 3']
};

console.log(todoList);

// creating a anonymous function to display todos
var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log('My Todos: ', this.todos);
  }
};

console.log(todoList.displayTodos());

// creating a anonymous function to add todos
var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log('My Todos: ', this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  }
};

console.log(todoList.addTodo('plunker'));

// creating an anonymous function to change todos based on position
var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log('My Todos: ', this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  }
};

console.log(todoList.changeTodo(0, 'first'));

// creating an anonymous function to delete a todo
var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log('My Todos: ', this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};

console.log(todoList.deleteTodo(1));
