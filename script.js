// To  access form elements ::
const form = document.querySelector('#task-form');

//To grab input in a variable ::
const taskInput = document.querySelector('#task');

//To add inputed task from user in list items ::
const taskList = document.querySelector('.collection');

//To clear the list collection ::
const clrBtn = document.querySelector('.clear-tasks');

//to access input of id filter ::
const filter = document.querySelector('#filter');


//             <------working------->

//calling a function which loads the functionality for our app (encapsulation)
loadEventListeners();

//declaration
function loadEventListeners(){

  //adding an eventListener to form which listen to a input of type "submit"
  //and when it triggers the event, it call a function "addTask"
  form.addEventListener('submit',addTask);

  //adding an eventListener to task list which listen to a "click" of mouse
  //and when it triggers the event, it call a function "removeTask" 
  taskList.addEventListener('click',removeTask);

  //adding an eventListener to clrButton  which listen to a "click" of mouse
  //and when it triggers the event, it call a function "clearTask"
  clrBtn.addEventListener("click",clearTasks);

  //adding an eventListener to filter  which listen to a "keyup" of mouse
  //and when it triggers the event, it call a function "filterTask"
  filter.addEventListener("keyup",filterTasks);
}

//  1. <--working of addTask-->
function addTask(e){
  //input validation
  if (taskInput.value === '')
  {alert("please enter the task");}

  //creating a list item or so called li of our ul "dynamically"
  const li = document.createElement("li");
  li.className = 'collection-item';
   
  //creating text node from user input
  const textNode = document.createTextNode(taskInput.value);

  //apending the text node into a li
  li.appendChild(textNode);
  
  //crating a remove mark, "x" sign via font-awesome library
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class = "fa fa-remove"></i>';

  //appending "x" to our li
  li.appendChild(link);

  //appending li to our ul
  taskList.appendChild(li);

  //clearing the input
  taskInput.value = '';

  //for preventing default behaviour
  e.preventDefault();
}

//  2. <--working of removeTask-->
function removeTask(e){
  //checking that click occurs exact on "x" mark 
  if(e.target.parentElement.classList.contains('delete-item'))   
  {
    //removing li that contained specified "x" mark using deligation
    e.target.parentElement.parentElement.remove();
  }
}

//  3. <--working of clearTask-->
function clearTasks(){
  //clears the task list
  taskList.innerHTML = " ";
}


//  3. <--working of filterTask-->
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    }
    else{
      task.style.display='none';
    }
  });
}