import { printSingleTask } from './printSingleTask.js';

const firstTask = {
  title: 'Buy groceries',
  status: 'created', // created, started, completed
};

const secondTask = {
  title: 'Clean the house',
  status: 'started',
};

const thirdTask = {
  title: 'Walk the dog',
  status: 'completed',
};

const tasks = [firstTask, secondTask, thirdTask];

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

  tasks.push({
    title: newTask,
    status: 'created',
  });
  document.getElementById('newTaskInput').value = '';
}

export { createNewTask, printAllTasks };
