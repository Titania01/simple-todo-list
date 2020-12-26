let addTodoButton = document.getElementsById('addToDo');
let toDoContainer = document.getElementsById('addToDoContainer');
let inputField = document.getElementsById('addToDo');

addTodoButton.addEventListener('click', function(){
  let paragraph = document.createElement('p')
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
})