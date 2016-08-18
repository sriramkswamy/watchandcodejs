---
title: Version 04
date: 2016-08-17 23:19:51
tags:
	- boolean
	- plunker
categories:
	- course
---

## Requirements

- [ ] todoList.addTodo should add objects
- [ ] todoList.changeTodo should change the todo Text property
- [ ] todoList.toggleCompleted should change the completed property

## Introduction

We are going to start working with Booleans and our todo array is now going to become an object. Boolean essentially toggles between a `true` or a `false`. With that in mind, let's map out the requirements.

We base this version off of our [previous version](https://sriramkswamy.github.io/watchandcodejs/2016/08/17/Version-03/) which is indicated below.

``` [javascript] [version 03]
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
```

Let's first map out what properties we want to add -

``` [javascript] [new properties for object]
{
    todoText: 'item 1',
    completed: false // Boolean true or false
}
```

## Adding a TODO object

Let's change our existing code to reflect the idea discussed in the previous section.

``` [javascript] [adding a todo object]
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
```

Note that line number 9 - `todoText: todoText,` - can be confusing. The left `todoText` is going to remain `todoText` no matter what happens as it is the text property but the right `todoText` is referring to the parameter and might change based on the argument you supply. For example, if you call `todoList.addTodo('hi')`, then the right hand `todoText` is going to be `'hi'`.

Now, let's try calling it.

``` [javascript] [calling addTodo]
todoList.addTodo('hi')
```

``` [javascript] [result]
> My Todos:  [ { todoText: 'hi', completed: false } ]
```

Note that after changing our `addTodo` function, our `displayTodos` function acts weird. We can fix that later.

### Updated requirements

- [X] todoList.addTodo should add objects
- [ ] todoList.changeTodo should change the todo Text property
- [ ] todoList.toggleCompleted should change the completed property

## Changing a TODO

Following a similar logic as the previous section, we end up with this piece of code. While we are at it, let's also go ahead and change the variable `newValue` to `todoText` as it's more descriptive.

``` [javascript] [changing a todo object]
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
```

Let's now try calling this function.

``` [javascript] [calling changeTodo]
todoList.addTodo('hi');
todoList.changeTodo(0, 'bye');
```

``` [javascript] [result]
> My Todos:  [ { todoText: 'hi', completed: false } ]
> My Todos:  [ { todoText: 'bye', completed: false } ]
```

### Updated requirements

- [X] todoList.addTodo should add objects
- [X] todoList.changeTodo should change the todo Text property
- [ ] todoList.toggleCompleted should change the completed property

## The bang operator

Before going to write code, let's check out the `!` operator.

``` [javascript] [bang false]
!false;
var myBoolean = true;
!myBoolean;
```

Note that the undefined in the result is for evaluating the `var` variable declaration.

``` [javascript] [result]
> true
> undefined
> false
```

Another interesting way to use the bang operator is to set the variable to the opposite of its value.

``` [javascript] [switch original variable value]
var newBoolean = true;
console.log(newBoolean);
newBoolean = !newBoolean;
```

Note that the undefined in the result is for evaluating the `var` variable declaration.

``` [javascript] [results]
> undefined
> true
> false
```

## Toggle the completed state of the TODO

From the concepts discussed in our previous sections, we get -

``` [javascript] [changing the completed state a todo object]
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
```

Let's test it in the console.

``` [javascript] [toggle completed state]
todoList.addTodo('boolean testing');
todoList.toggleCompleted(0);
```

``` [javascript] [result]
> My Todos:  [ { todoText: 'boolean testing', completed: false } ]
> My Todos:  [ { todoText: 'boolean testing', completed: true } ]
```

### Updated requirements

- [X] todoList.addTodo should add objects
- [X] todoList.changeTodo should change the todo Text property
- [X] todoList.toggleCompleted should change the completed property

## Version 4 conclusions

In this version, we changed our app to use objects instead of arrays with the help of booleans. As usual, the complete code version of this can be found in [version04.js](https://github.com/sriramkswamy/watchandcodejs/blob/master/code/version04.js)
