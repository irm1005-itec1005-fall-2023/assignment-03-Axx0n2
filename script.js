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

let todoItems = [];
const d = new Date();
let ID = (d.getHours() + d.getMinutes() + d.getSeconds() + d.getMilliseconds());

// Function to add a todo to the list
// It should accept a string as a parameter (text of the todo item)
// and it should add a new todo item to the todoItems array
// the function does not need to return anything
function addToDoItem(text) {
  


  if (typeof text == "string") {
    console.log("thankyou for inputing a string");
  
    let isCompleted = false;
      


    let ID = Math.floor(Math.random()*999);
      for (let i = 0 ; i < todoItems.length ; i++) {
        if (todoItems[i].id == ID) {
          ID = Math.floor(Math.random()*999);
          x = 1;
        }
  
        else {
          x = 0;
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


/*

  if (Number.isInteger(todoId)) {




    let newArray = [];
    let term = todoItems[todoId-1]
    for (let i = 0 ; i < todoItems.length ; i++) {
      if (todoItems[i] == term) {
        console.log("removed")
        todoItems[i].text = null;
      }
      else {
        newArray.push(todoItems[i])
        console.log(newArray)
      }
    }
    
    todoItems = newArray
  
  }
  else {
    console.log("Please use a valid ID");
  }
  



*/
}

// Function to mark a task as completed
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, set its completed property to true
// the function does not need to return anything
function markToDoItemAsCompleted(todoId) {
  // Implement the logic to mark a task as completed here


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
  // Implement the logic to remove a task here



  if (Number.isInteger(todoId)) {

    console.log("removed")
    let newArray = [];
    let term = todoItems[todoId]
    for (let i = 0 ; i < todoItems.length ; i++) {
      if (todoItems[i] == term) {
        console.log("removed")
      }
      else {
        newArray.push(todoItems[i])
        console.log(newArray)
      }
    }
    
    todoItems = newArray
  
  }
  else {
    console.log("Please use a number");
  }


}

// Function to clear all completed tasks
// Loop through the array of todos, and when you find a todo item that is marked
// as completed, remove it completely from the array
function clearCompletedTasks() {
  // Implement the logic to clear completed tasks here



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









// You can write your own tests here if you would like to test
// your code before using the automated tests
// For example, you could run:
//  addToDoItem("Test ToDo"); // This should add a new todo item to the array
//  console.log(todoItems); // This should show the todo item you added
//  removeToDoItem(0); // This should remove the todo item with ID 0 from the array
//  markToDoItemAsCompleted(0); // This should mark the todo item with ID 0 as completed
