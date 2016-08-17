---
title: Version 02
date: 2016-08-17 17:20:27
tags:
	- functions
	- chrome
categories:
	- course
---

This version is going to be all about functions.

## Introduction

Functions are like recipes. It can take long list of instructions and give you some result. To understand this better, let's try to write down the steps to make a turkey sandwich and then convert that into a function.

```
makeTurkeySandwich
  Get one slice of bread.
  Add turkey.
  Put a slice of bread on top.
```

The first important thing while converting this in to a function is the use of the `function` keyword. That's how JavaScript knows it's a function. The basic structure is shown below.

``` [javascript] [english translated function]
function makeTurkeysandwich () {
    Get one slice of bread;
    Add turkey;
    Put a slice of bread on top;
}
```

Note the opening and closing braces after the instructions and the semicolon instead of period. Of course, this is not a valid JavaScript code. So, evaluating this will give lots of errors. This is just for illustration purposes. Finally, if you want to call this function (just like how you tell someone to make a turkey sandwich after you tell them the recipe), you should use the following style for it.

``` [javascript] [calling a function]
makeTurkeySandwich()
```

This will also result in errors but the important point to note is the parenthesis present in both when we defined the function and when we call it. We can talk about this later.

## Customizing functions

The best situation to customize the recipe is when you need repetitive recipes. For example, making a turkey sandwich or a ham sandwich is pretty similar except for the filling. This is a good situation where we can tweak our recipe. Let's write this new recipe.

```
makeSandwichWith ________
  Get one slice of bread.
  Add ________.
  Put a slice of bread on top.
```

This avoids a lot of repetitiveness and makes our recipe flexible. Let's try to use a similar style for our function. Here, instead of the blank - `____` - we have variables.

``` [javascript] [function with argument]
function makeSandwichWith (filling) {
	Get one slice of bread;
	Add filling;
	Put a slice of bread on top;
}
```

This can be called by

``` [javascript] [calling a function with argument]
makeSandwichWith(ham)
```

Now, this will create a recipe to make a ham sandwich. Note that, here when you write `ham`, you are implicitly telling that it's a variable and when there is no such variable. However, if you want to insert the text "ham", you need to do it within single quotes like so - `'ham'`.

The "filling" in the function definition is called a function parameter and the 'ham' that we input while calling it is called the function argument.

Note: Remember that we have used functions before. The ~console.log()~ is a function that takes multiple arguments.

## Requirements

All the requirements for version 2 are built around functions

- [ ] It should have a function to display TODOs
- [ ] It should have a function to add TODOs
- [ ] It should have a function to change TODOs
- [ ] It should have a function to delete TODOs

## Displaying TODOs with a function

To make a function that displays TODOs, we need some data to work with. So, let's create a variable just like we did in version 1.

``` [javascript] [display function]
var todos = ['item 1', 'item 2', 'item 3'];

function displayTodos() {
    console.log('My Todos: ', todos);
}

displayTodos();
```

``` [javascript] [result]
> My Todos:  [ 'item 1', 'item 2', 'item 3' ]
```

There are a couple of points to note here. The semicolon rules are a bit fuzzy. Therefore, until we use a tool that helps us with that, let's forget about the rules of semicolon. Secondly, note that this function takes no argument but still displays the todo items. This is because the variable to display - `todos` - is hard coded into the function. If there is no variable called `todos` in our code, this will throw an error.

### Updated requirements

- [X] It should have a function to display TODOs
- [ ] It should have a function to add TODOs
- [ ] It should have a function to change TODOs
- [ ] It should have a function to delete TODOs

## Adding TODOs with a function

This takes a new todo item and adds it to our `todos` variable. For a start, let's add a standard new item - "new todo".

``` [javascript] [function for adding a todo]
  var todos = ['item 1', 'item 2', 'item 3'];

  function displayTodos() {
      console.log('My Todos: ', todos);
  }

  function addTodo() {
      todos.push('new todo');
  }

  addTodo();

  displayTodos();
```

``` [javascript] [result]
> My Todos:  [ 'item 1', 'item 2', 'item 3', 'new todo' ]
```

Now this snippet of code, adds a standard text for todo, but that's not what we want. We want to add a custom text and this means we have to have the function ~addTodos()~ take a parameter for input.

``` [javascript] [function for adding a todo with an argument]
  var todos = ['item 1', 'item 2', 'item 3'];

  function displayTodos() {
      console.log('My Todos: ', todos);
  }

  function addTodo(todo) {
      todos.push(todo);
      displayTodos();
  }

  addTodo('hello there');
```

``` [javascript] [result]
> My Todos:  [ 'item 1', 'item 2', 'item 3', 'hello there' ]
```

Note that when we use this version of `addTodo`, you need supply an argument which will customize it. Also, you can call a function inside another function like how we call `displayTodos` inside `addTodo`.

### Updated requirements

- [X] It should have a function to display TODOs
- [X] It should have a function to add TODOs
- [ ] It should have a function to change TODOs
- [ ] It should have a function to delete TODOs

## Changing TODOs with a function

We would grab the variable of the todo item and change it. This strategy, however, will not work because we need flexibility.

``` [javascript] [function for changing a todo given position]
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
```

``` [javascript] [result]
> My Todos:  [ 'item 1', 'item 2', 'item 3', 'hello there' ]
> My Todos:  [ 'changed', 'item 2', 'item 3', 'hello there' ]
```

Here, the first parameter is the index of the item we want to change and the second is what the changed item should be.

### Updated requirements

- [X] It should have a function to display TODOs
- [X] It should have a function to add TODOs
- [X] It should have a function to change TODOs
- [ ] It should have a function to delete TODOs

## Deleting TODOs with a function

This is going to be pretty straightforward. We just take the position for the parameter and use the `splice` function. An important note here is that we are going to delete only one item per call of the function. So, the second argument of `splice` command is always going to be 1.

``` [javascript] [function for deleting a todo]
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
```

``` [javascript] [result]
> My Todos:  [ 'item 1', 'item 2', 'item 3', 'hello there' ]
> My Todos:  [ 'changed', 'item 2', 'item 3', 'hello there' ]
> My Todos:  [ 'changed', 'item 3', 'hello there' ]
```

### Updated requirements

- [X] It should have a function to display TODOs
- [X] It should have a function to add TODOs
- [X] It should have a function to change TODOs
- [X] It should have a function to delete TODOs

## Version 2 conclusions

Try to play around with all the functions with Chrome or any console. You can copy paste the code from the file [version02.js](https://github.com/sriramkswamy/watchandcodejs/blob/master/code/version02.js).
