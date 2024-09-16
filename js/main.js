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
