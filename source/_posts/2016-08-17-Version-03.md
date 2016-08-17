---
title: Version 03
date: 2016-08-17 17:42:22
tags:
	- objects
	- chrome
	- plunker
categories:
	- course
---

## Introduction

This version is going to be about objects. Objects can be thought of properties/details about something. For example, your laptop/computer might have an operating system, purchase year and screen size and these can be listed as below -

```
operatingSystem Mac
purchaseYear 2011
screenSize 15 inches
```

This example itself can be translated into JavaScript code like so -

``` [javascript] [translated object]
  {
      operatingSystem: 'Mac',
      screenSize: '15 inches',
      purchaseYear: 2011
  }
```

Note that 2011 is a number and hence can be left as such. We can assign this object to a variable.

``` [javascript] [assigning an object to a variable]
  var myComputer = {
      operatingSystem: 'Mac',
      screenSize: '15 inches',
      purchaseYear: 2011
  }

  console.log("Complete Object: ", myComputer);
  console.log("Operating system: ", myComputer.operatingSystem);
  console.log("Screen Size: ", myComputer.screenSize);
  console.log("Purchase year: ", myComputer.purchaseYear);
```

``` [javascript] [result]
> Complete Object:  { operatingSystem: 'Mac',
>   screenSize: '15 inches',
>   purchaseYear: 2011 }
> Operating system:  Mac
> Screen Size:  15 inches
> Purchase year:  2011
```

You use an object when you basically want to group some related data. When to use an array and an object? [Check out this question](http://stackoverflow.com/questions/4441139/when-to-use-an-object-or-an-array-in-javascript).

## Objects and functions

Sometimes, we want the properties of the object to handle something slightly more complicated. The easiest way is by turning to functions. You can place a function in an object. Let's consider the following object -

``` [javascript] [functions inside objects]
  var gordon = {
      name: 'Gordon',
      sayName: function() {
          console.log(this);
      }
  }

  console.log(gordon.sayName());
```

``` [javascript] [result]
> { name: 'Gordon', sayName: [Function] }
```

Note that we don't give a name to this function inside an object because we can call it by the name of the property. Also, an important concept here is the `this` keyword. The `this` keyword is used by an object to refer itself. However, using just `this` in the `console.log()` prints out the entire object, which is not what we want. So let's change it to display just a name.

``` [javascript] [refining this keyword based log]
  var gordon = {
      name: 'Gordon',
      sayName: function() {
          console.log(this.name);
      }
  }

  console.log(gordon.sayName());
```

``` [javascript] [result]
> Gordon
```

This new `console.log` statement prints just the name. Now, for some terminologies. The kind of function written here, inside an object, is called a method and since it has no name, it is called an anonymous function. We call the anonymous function by its property.

## Requirements

All the requirements for version 3 are built around objects

- [ ] It should store the todos array in an object
- [ ] It should have a displayTodos method
- [ ] It should have a addTodo method
- [ ] It should have a changeTodo method
- [ ] It should have a deleteTodo method

## Storing TODOs array in an object

Let's recreate what we did in the previous steps but try to use objects this time.

``` [javascript] [storing the todos]
  var todoList = {
      todos: ['item 1', 'item 2', 'item 3']
  };

  console.log(todoList);
```

``` [javascript] [result]
> { todos: [ 'item 1', 'item 2', 'item 3' ] }
```

That's it for storing todos. The important thing to remember here is that there is no semicolon (`;`) after the property is defined inside an object.

### Updated requirements

- [X] It should store the todos array in an object
- [ ] It should have a displayTodos method
- [ ] It should have a addTodo method
- [ ] It should have a changeTodo method
- [ ] It should have a deleteTodo method

## Displaying TODOs with an object

If you remember from our [previous attempt](https://sriramkswamy.github.io/watchandcodejs/2016/08/17/Version-02/), we tried to display the todo items with the help of a function. Here, we try to create a function within this new object based on the example discussed previously.

``` [javascript] [creating a anonymous function to display todos]
  var todoList = {
      todos: ['item 1', 'item 2', 'item 3'],
      displayTodos: function() {
          console.log('My Todos: ', this.todos);
      }
  };

  console.log(todoList.displayTodos());
```

``` [javascript] [result]
> My Todos:  [ 'item 1', 'item 2', 'item 3' ]
```

### Updated requirements

- [X] It should store the todos array in an object
- [X] It should have a displayTodos method
- [ ] It should have a addTodo method
- [ ] It should have a changeTodo method
- [ ] It should have a deleteTodo method

## Adding TODOs with an object

Just like the previous section, we take our [previously defined function](https://sriramkswamy.github.io/watchandcodejs/2016/08/17/Version-02/) and fit it into the object.

``` [javascript] [creating a anonymous function to add todos]
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
```

``` [javascript] [result]
> My Todos:  [ 'item 1', 'item 2', 'item 3', 'plunker' ]
```

### Updated requirements

- [X] It should store the todos array in an object
- [X] It should have a displayTodos method
- [X] It should have a addTodo method
- [ ] It should have a changeTodo method
- [ ] It should have a deleteTodo method

## Changing a TODO with an object

We are going to create an anonymous function for this new object based on our [previous function](https://sriramkswamy.github.io/watchandcodejs/2016/08/17/Version-02/).

``` [javascript] [creating an anonymous function to change todos based on position]
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
```

``` [javascript] [result]
> My Todos:  [ 'first', 'item 2', 'item 3' ]
```

### Updated requirements

- [X] It should store the todos array in an object
- [X] It should have a displayTodos method
- [X] It should have a addTodo method
- [X] It should have a changeTodo method
- [ ] It should have a deleteTodo method

## Deleting a TODO with an object

Hopefully, you are starting to see a pattern here. Let's continue that by using our [deleteTodo function](https://sriramkswamy.github.io/watchandcodejs/2016/08/17/Version-02/).

``` [javascript] [creating an anonymous function to delete a todo]
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
```

``` [javascript] [result]
> My Todos:  [ 'item 1', 'item 3' ]
```

### Updated requirements

- [X] It should store the todos array in an object
- [X] It should have a displayTodos method
- [X] It should have a addTodo method
- [X] It should have a changeTodo method
- [X] It should have a deleteTodo method

## Version 3 conclusions

We have met all the requirements and although the code is small, having everything in an object is useful for organization. The key takeaway from this version is the `this` keyword. The final version of this code can be found in [version03.js](https://github.com/sriramkswamy/watchandcodejs/blob/master/code/version03.js)
