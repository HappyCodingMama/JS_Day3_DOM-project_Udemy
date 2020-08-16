# TaskList app
 JS project for beginners
 Simple kinds of todoList app with JavaScript 

## Inspiration
This app is based on courses by Brad Traversy from Udemy

## What I Did To Make The Project Even Better
* 

## what I learned
* method: addEventListener, createElement, preventDefault, createTextNode, parentElement,
	  contains, toLowerCase, forEach,  firstChild, indexOf
* DOM Property: className, classList, 
*CSS : display, block
* Comparing performance of : innerHtml vs removeChild(Faster)
   * https://www.measurethat.net/Benchmarks/Show/34/0/innerhtml-vs-removechild
* Comparing : textContent & HTMLElement.innerText
   * https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

[ Step One. UI & Add Task Items ]
1. Define UI Variables
id: 'task-form' / class: 'collection' / class: 'clear-tasks' / id: 'filter' / id: 'task'

2. call all event listeners

3. create function at all event listeners
   * load event
      'form' : Add task event, when 'submit' implement function 'addTask'
4. declare addTask 
   * if nothing enter at taskInput, then do alert "add a task"
   * create li element
    * add class 'collection-item'
    * create text node and append to li
   * create new link element
    * add class 'delete-item secondary-content'
    * add icon html '<i class="fa fa-remove"></i>'
    * append the link to li
    * append li to ul
    * clear input
   * Blocking default click handling

[ Step Two. Delete & Filter Tasks ]
1. load event
   'taskList' : Add remove task event, when 'click' implement function 'removeTask'
2. define function "removeTask"
   * declare if classList of event target contains 'delete-item', 
     then display the confirm box : 'Are you Sure?',
     then call method to remove li
3. load event
   'clearBtn' : Add clear task event, when 'click' implement function 'clearTasks'
4. define function "clearTasks"
   * clear Task using while statement, not innerHtml 

5. load event
 'filter' : Add filter task event, when 'keyup' implement function 'filterTasks'
6. define function "filterTasks"
   * create variable text : assignment value of event target to lower case 
   * select all node of class : 'collection-item', 
     execute a provided function once for each array element,
   * provided function: argument -> task
     create variable item : assignment  returns the first node of 'task',
                                  then, use textContent to get the element's text content  
                                  if  there is not a matching is not equal in the index of text,  
                                  then show on a webpage
		        otherwise, hide it.


--------------------------------------------------
12. store in LocalStorage
   function declaration: storeTaskInLocalStorage

13. add DOM load event 'getTasks'
     function declaration : getTasks

14. remove from local storage
    function declaration 

15. clear from local storage
   function declaration






 


 









