const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//call all event listeners
loadAddEventListener();

function loadAddEventListener() {

form.addEventListener('submit', addTask);

function addTask(event) {
    if (taskInput.value === '') {
        alert('add a task');
    }

    const li = document.createElement('li');   
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-times"></i>';
    li.appendChild(link);

    taskList.appendChild(li);
    taskInput.value = '';

    event.preventDefault();

}
}









