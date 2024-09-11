import { createNewTask, printAllTasks } from './taskFunctions.js';

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

printAllTasks();
