# TaskList app
 JS project for beginners
 Simple kinds of todoList app with JavaScript 

## Inspiration
This app is based on courses by Brad Traversy from Udemy

## What I Did To Make The Project Even Better


## What I learned
* method: addEventListener, createElement, preventDefault, createTextNode, parentElement,
	  contains, toLowerCase, forEach,  firstChild, indexOf, 
* DOM : className, classList, DOMContentLoaded 
* CSS : display, block
* store to the local storage : localStorage.setItem, localStorage.getItem, JSON.parse, JSON.stringify

* Comparing performance of : innerHtml vs removeChild(Faster)
   - https://www.measurethat.net/Benchmarks/Show/34/0/innerhtml-vs-removechild
* Comparing : textContent & HTMLElement.innerText
   - https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

## How to build
<strong> [ Step 1. UI & Add Task Items ] </strong>

1. Define UI Variables
   id: 'task-form' - form / class: 'collection' - taskList / class: 'clear-tasks' - clearBtn
   / id: 'filter' - filter / id: 'task' - taskInput

2. call all event listeners

3. create function at all event listeners
   * load event
      'form' : Add task event, when 'submit' implement function 'addTask'
4. declare addTask 
   * if nothing enter at taskInput, then do alert "add a task"
   * create li element
    - add class 'collection-item'
    - create text node and append to li
   * create new link element
    - add class 'delete-item secondary-content'
    - add icon html '<i class="fa fa-remove"></i>'
    - append the link to li
    - append li to ul
    - clear input
   * Blocking default click handling

<strong> [ Step 2. Delete & Filter Tasks ] </strong>

1. load event
   'taskList' : Add remove task event, when 'click' implement function 'removeTask'
2. define function "removeTask"
   * declare if classList of event target contains 'delete-item', 
     - then display the confirm box : 'Are you Sure?',
     - then call method to remove li
3. load event
   'clearBtn' : Add clear task event, when 'click' implement function 'clearTasks'
4. define function "clearTasks"
   * clear Task using while statement, not innerHtml 

5. load event
 'filter' : Add filter task event, when 'keyup' implement function 'filterTasks'
6. define function "filterTasks"
   * create variable text : assignment value of event target to lower case 
   * select all node of class : 'collection-item', 
     - execute a provided function once for each array element,
   * provided function: argument -> task
     - create variable item : assignment  returns the first node of 'task',
                                  then, use textContent to get the element's text content  
                                  if  there is not a matching is not equal in the index of text,  
                                  then show on a webpage
		                            otherwise, hide it.

<strong> [ Step 3. Persist To Local Storage ] </strong>

1. Store in local storage
   * call another function about localStorage in function addTask 
      - put taskInput value in the function
2. define function "storeTaskInLocalStorage", argument is "task"
   * define and initialize variable tasks
   * if the localStorage item is empty, then 'tasks' is empty array
     - otherwise, 'tasks' assigns stored items transforms into a javaScript object
     - add elements to the variable 'task'
   * set adding 'tasks' to the local storage
     - stored as a string

3. load event 
   DOM : after 'DOMContentLoaded', call 'getTasks'
4. get Tasks from local storage
   * define function "getTasks"
   * define and initialize variable tasks
   * if the localStorage item is empty, then 'tasks' is empty array
     - otherwise, 'tasks' assigns stored items transforms into a javaScript object
     - Loop through tasks, executes a provided function once for each array element
     - put contents of function addTask in the function

5. Remove from localstorage
   * call function 'removeFromLocalStorage' in function 'removeTask'
   * define function 'removeFromLocalStorage', argument is taskItem
   * define and initialize variable tasks
   * if the localStorage item is empty, then 'tasks' is empty array
     - otherwise, 'tasks' assigns stored items transforms into a javaScript object
     - Loop through tasks, executes a provided function, has two parameters task, index
       if task equals the current task in the iteration, then remove 1 in index in 'tasks'

   * set local storage again
     - set adding 'tasks' to the local storage
     - stored as a string

6. Clear from localstorage
   * call clearTasksFromLocalStorage with any argument
   * define function 'clearTasksFromLocalStorage'
   * clear local storage






 


 









