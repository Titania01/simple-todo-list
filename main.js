let addTodoButton = document.getElementsByClassName('addToDo');
let toDoContainer = document.getElementsById('addToDoContainer');
let inputField = document.getElementsByClassName('addToDo');

addTodoButton.addEventListener('click', function(){
  let paragraph = document.createElement('p')
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
})