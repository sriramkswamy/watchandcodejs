---
title: Version 01
date: 2016-08-17 16:00:21
tags:
	- arrays
	- chrome
categories:
	- course
---

## Requirements

- [ ] It should have a place to store TODOs
- [ ] It should have a way to display TODOs
- [ ] It should have a way to add new TODOs
- [ ] It should have a way to change a TODO
- [ ] It should have a way to delete a TODO

## Storing TODOs

To store TODOs, we use a JavaScript array. We would just write TODO items like a list -

```
item 1, item 2, item 3
```

The programming term for this kind of list is an array and a JavaScript array is given by -

``` [javascript] [creating an array]
['item 1', 'item 2', 'item 3']
```

``` [javascript] [result]
> [ 'item 1', 'item 2', 'item 3' ]
```

However, this way of creating arrays is ephemeral and we lose the information as soon as we issue the command. To make sure we have access to this again, we store it in a variable, i.e., assign a name or a tag to it which can be referred to later.

The way to create a variable in JavaScript is -

``` [javascript] [creating a variable]
var todos = ['item 1', 'item 2', 'item 3']
```

This results in the following at the REPL.

``` [javascript] [result]
> undefined
```

The `var` is the syntax for variable and the `todos` is the name of the variable. Notice that if you evaluate this, you will get `undefined` but that's OK. Now, if you just type `todos` in a console, you should get the actual variable -

```
[ 'item 1', 'item 2', 'item 3' ]
```

### Updated requirements

Now, we have a simple way to store our TODOs. Let's update our requirements

- [X] It should have a place to store TODOs
- [ ] It should have a way to display TODOs
- [ ] It should have a way to add new TODOs
- [ ] It should have a way to change a TODO
- [ ] It should have a way to delete a TODO

## Displaying TODOs

Here, we display the list of todo items simplistically.

The `console.log()` function, as the name suggests, logs in whatever the input is in to the console. We can use it like this -

``` [javascript] [console.log function]
console.log("Hello, JavaScript!")
```

``` [javascript] [result]
> Hello, JavaScript!
```

The `console.log()` function can take multiple arguments too.

``` [javascript] [console.log with multiple arguments]
console.log("Hello there", "JavaScript")
```

``` [javascript] [result]
> Hello there JavaScript
```

Note that when the two strings were combined, `console.log()` added a space in between them automatically. If we do not want it to add a space, we use the following variant instead -

``` [javascript] [console.log combining strings]
console.log("Hello there" + "JavaScript")
```

``` [javascript] [result]
> Hello thereJavaScript
```

The `console.log()` function can also take variables. Let's try and print our todo items via this function. Note that the variable `todos` should not be enclosed in quotes. If we do that, it will print the text `todos` instead.

``` [javascript] [creating and printing a variable]
var todos = ['item 1', 'item 2', 'item 3']
console.log(todos)
```

``` [javascript] [result]
> [ 'item 1', 'item 2', 'item 3' ]
```

Let's make this a little bit pretty.

``` [javascript] [pretty printing a variable]
var todos = ['item 1', 'item 2', 'item 3']
console.log("My todos: ", todos)
```

``` [javascript] [result]
> My todos:  [ 'item 1', 'item 2', 'item 3' ]
```

This ticks off the second requirement we have set.

### Updated requirements

Now, we have a simple way to display our TODOs. Let's update our requirements

- [X] It should have a place to store TODOs
- [X] It should have a way to display TODOs
- [ ] It should have a way to add new TODOs
- [ ] It should have a way to change a TODO
- [ ] It should have a way to delete a TODO

## Adding TODOs

Since `todos` is a variable, it has some commands that it comes with. One of them is `push`. You use it in a similar way to `console.log`.

``` [javascript] [push command]
var todos = ['item 1', 'item 2', 'item 3']
todos.push('item 4')
todos.push('item 5')
console.log(todos)
```

``` [javascript] [result]
> [ 'item 1', 'item 2', 'item 3', 'item 4', 'item 5' ]
```

Now, the `todos` variable has 5 items - the original 3 plus the 2 we just added. Note that the `push` function pushes to the end of the array.

### Updated requirements

Now, we have a simple way to display our TODOs. Let's update our requirements

- [X] It should have a place to store TODOs
- [X] It should have a way to display TODOs
- [X] It should have a way to add new TODOs
- [ ] It should have a way to change a TODO
- [ ] It should have a way to delete a TODO

## Changing TODOs

Now, the todo items list has 5 items. To change a todo item, we need a way to get a hold of a specific one. The important point to note here is that computers start counting from 0 instead of 1. So, when we want the first element, we actually type in 0 instead of 1.

``` [javascript] [printing one element of an array]
var todos = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5']
console.log(todos[2])
```

``` [javascript] [result]
> item 3
```

Now, as you can see calling `todo[2]` resulted in `item 3` and not `item 2`. Play around with this. To actually change this, we just grab the one we want and set it to another value.

``` [javascript] [changing and printing a todo]
var todos = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5']
todos[4] = 'item 5 updated'
console.log(todos)
```

``` [javascript] [result]
>  [ 'item 1', 'item 2', 'item 3', 'item 4', 'item 5 updated' ]
```

Notice that the last item is updated. Finally, trying to access an element that is outside the size limits will result in an error.

``` [javascript] [accessing an out of bounds element]
var todos = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5']
console.log(todos[6])
```

``` [javascript] [result]
> undefined
```

### Updated requirements

Now, we have a simple way to change our todo items.

- [X] It should have a place to store TODOs
- [X] It should have a way to display TODOs
- [X] It should have a way to add new TODOs
- [X] It should have a way to change a TODO
- [ ] It should have a way to delete a TODO

## Delete a TODO

To delete a todo item, we use a built-in function like `push` - `splice`. The `splice` function takes two arguments - a number/index where we want to start deleting and another number to indicate how many items we want to delete.

``` [javascript] [splicing an array]
var todos = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5 updated']
todos.splice(0, 1)
console.log(todos)
```

``` [javascript] [result]
> [ 'item 2', 'item 3', 'item 4', 'item 5 updated' ]
```

Play around with this to get more familiarity. Note that trying to delete something that is out of bounds will cause an error.

``` [javascript] [deleting out of bounds element]
var todos = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5 updated']
todos.splice(0, 1)
// Now, there are only 4 elements in the array
todos.splice(4, 1)
console.log(todos)
```

``` [javascript] [result]
> [ 'item 2', 'item 3', 'item 4', 'item 5 updated' ]
```

The subtle point that the evaluation didn't pick up is that the line `todos.splice(4, 1)` doesn't return anything. It just returns a blank - `[]`. This might be a little confusing at first. So play around with it on Google Chrome's console or a Node REPL.

### Updated requirements

We have accomplished whatever we set out for in Version 1.

- [X] It should have a place to store TODOs
- [X] It should have a way to display TODOs
- [X] It should have a way to add new TODOs
- [X] It should have a way to change a TODO
- [X] It should have a way to delete a TODO

## Version 1 conclusions

Overview

- We learned how to use a variable (array in our case) to store the todo items and as a reference
- We learned about the `console.log()` command for displaying items
- We learned `push` command to add more todo items
- We learned how computers count and how to access (and change) a specific todo item
- We learned how to delete any item in an array using the `splice` command

In this section we saw how to do a basic version 1 of this app. There are a lot more to arrays but these concepts gives enough knowledge to create the second version of the app.

Try to play around with all the functions with Chrome or any console. You can copy paste the code from the file [version01.js](https://github.com/sriramkswamy/watchandcodejs/blob/master/code/version01.js).
