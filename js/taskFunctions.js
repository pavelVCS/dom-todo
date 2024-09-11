import { printSingleTask } from './printSingleTask.js';

const tasks = ['Buy milk', 'Eat dinner', 'Study JS'];

function printAllTasks() {
  document.getElementById('tasksList').innerHTML = '';

  tasks.forEach((task, ind) => {
    printSingleTask(task, ind, tasks, printAllTasks);
  });
}

function createNewTask() {
  const newTask = document.getElementById('newTaskInput').value;

  if (!newTask.trim().length) {
    alert('Please enter a task');
    document.getElementById('newTaskInput').value = '';
    return;
  }

  tasks.push(newTask);
  document.getElementById('newTaskInput').value = '';
}

export { createNewTask, printAllTasks };
