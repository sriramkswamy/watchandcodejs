// version 03
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

// adding a todo object
var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos: ', this.todos);
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
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

// calling addTodo
todoList.addTodo('hi')

// changing a todo object
var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos: ', this.todos);
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    // this.todos[position] = newValue; // this will no longer work
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};

// calling changeTodo
todoList.addTodo('hi');
todoList.changeTodo(0, 'bye');

// bang false
!false;
var myBoolean = true;
!myBoolean;

// switch original variable value
var newBoolean = true;
console.log(newBoolean);
newBoolean = !newBoolean;

// changing the completed state a todo object
var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos: ', this.todos);
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    // this.todos[position] = newValue; // this will no longer work
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position]; // to reduce typing
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};

// toggle completed state
todoList.addTodo('boolean testing');
todoList.toggleCompleted(0);
