//Harry Tromans 101196352

/* Assignment 03: Starting a Todo List App
 *
 * You are going to build the brains of a simple Todo List application
 * in JavaScript. You don't have to worry about the look of the app for now.
 * We will make it look awesome in Assignment 04.
 *
 * For now, we'll focus on giving the application the following features:
 * 1. Add a new todo item
 * 2. Delete a todo item
 * 3. Mark a todo item as completed
 * 4. Delete a todo item
 * 5. Clear all completed todos
 *
 * The following code is the starting point for this assignment.
 *
 * You will have to write the code to initialise the todoItems array and
 * for the functions below.
 *
 * 1. addToDoItem(text)
 * 2. removeToDoItem(todoId)
 * 3. markToDoItemAsCompleted(todoId)
 * 4. deleteToDoItem(todoId)
 * 5. clearCompletedTasks()
 *
 * YOU MUST NOT CHANGE ANY OF THE FUNCTION NAMES OR THE AUTOMATED TESTS WILL FAIL
 *
 * As you write each function, press on the "Run Tests" button in the browser
 * to run the automated tests and check your work.
 *
 * You can also add your own tests and debug statements at the bottom of this file.
 *
 */


// Data storage - Initialize the array of To Do items
//
// NOTE:
//
// You must use the following object literal structure when creating new todo items
// {
//   id: 0,
//   text: "This is a todo item",
//   completed: false,
// }

// Initialise an empty array with the variable name todoItems

let todoItems = []; //Inialised array
let w = [0]; //Counter for ID


// Function to add a todo to the list
// It should accept a string as a parameter (text of the todo item)
// and it should add a new todo item to the todoItems array
// the function does not need to return anything
function addToDoItem(text) {
  

  
  if (typeof text == "string") {
    console.log("thankyou for inputing a string");
    w[0] = w[0]+1;
    let isCompleted = false;
      
    let ID = w[0];


      for (let i = 0 ; i < todoItems.length ; i++) {
        if (todoItems[i].id == ID) {

          
        }
      }
    

    

    let Obj = {id : ID,text : text, completed : isCompleted};
    
    todoItems.push(Obj);
    console.log(todoItems);
  }

  else {
    console.log("Please input a string");
  }
  
  
  
}

// Function to remove a todo to the list
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, remove it from the array
// the function does not need to return anything
function removeToDoItem(todoId) {

  if (Number.isInteger(todoId)) {
    if (todoId > 0) {
      console.log("good ID");
      let newArray = [];
      for (let i = 0 ; i < todoItems.length ; i++) {
        if (todoItems[i].id == todoId) {
          //todoItems[i].text = null; 
          console.log("removed");
        }
        else {
          newArray.push(todoItems[i]);
        }
        
      }
      todoItems = newArray;

    }
    
  } 
  else {
    console.log("Please input a valid ID")
  }



}

// Function to mark a task as completed
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, set its completed property to true
// the function does not need to return anything
function markToDoItemAsCompleted(todoId) {



  if (Number.isInteger) {

    console.log(todoItems[0].id)

    for (i = 0 ; i < todoItems.length ; i++) {
      if (todoItems[i].id == todoId) {
        todoItems[i].completed = true;
      }
    }
  }

  else {
    console.log("Please use a number");
  }



}

// Function to delete a task from the array
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, remove it from the array
// the function does not need to return anything, though you can return
// true or false depending on whether the item was successfully deleted
function deleteToDoItem(todoId) {


  if (Number.isInteger(todoId)) {
    if (todoId > 0) {
      console.log("good ID");
      let newArray = [];
      for (let i = 0 ; i < todoItems.length ; i++) {
        if (todoItems[i].id == todoId) {
 
          console.log("removed");
        }
        else {
          newArray.push(todoItems[i]);
        }
        
      }
      todoItems = newArray;

    }
    
  } 
  else {
    console.log("Please input a valid ID")
  }




}

// Function to clear all completed tasks
// Loop through the array of todos, and when you find a todo item that is marked
// as completed, remove it completely from the array
function clearCompletedTasks() {




  if (Number.isInteger) {

    console.log(todoItems[0].id)
    let bigArray = [];

    for (i = 0 ; i < todoItems.length ; i++) {
      if (todoItems[i].completed == true) {
        console.log("fuck yeah");
        
      } 
      else {
        bigArray[i] = todoItems[i];
      }
    }
    todoItems = bigArray;
  }

  else {
    console.log("Please use a number");
  }



}








