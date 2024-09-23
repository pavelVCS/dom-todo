import { createNewTask, printAllTasks } from './taskFunctions.js';

export let filterStatus = 'all';

document.getElementById('createButton').addEventListener('click', () => {
  createNewTask();
  printAllTasks();
});

document.getElementById('newTaskInput').addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    createNewTask();
    printAllTasks();
  }
});

document.getElementById('filterByStatus').addEventListener('change', () => {
  filterStatus = document.getElementById('filterByStatus').value;
  printAllTasks();
});

printAllTasks();

fetch('https://jsonplaceholder.typicode.com/users/2')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const user = document.getElementById('user');
    user.textContent = data.name[0];
    user.classList.add('userBubble');
  })
  .catch((error) => {
    console.log(error);
  });
