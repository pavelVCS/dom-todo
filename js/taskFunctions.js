import { printSingleTask } from './printSingleTask.js';
import { filterStatus } from './main.js';
import { data } from './data.js';

function printAllTasks() {
  const tasksList = document.getElementById('tasksList');
  tasksList.innerHTML = '';

  if (!data.tasks.length) {
    tasksList.textContent = 'There are no tasks created yet :)';
    return;
  }

  data.tasks
    .filter((singleTask) => {
      if (filterStatus === 'all' || !filterStatus) return true;

      return singleTask.status === filterStatus;
    })
    .forEach((task) => {
      printSingleTask(task, printAllTasks);
    });
}

function createNewTask() {
  const newTask = document.getElementById('newTaskInput').value;

  if (!newTask.trim().length) {
    alert('Please enter a task');
    document.getElementById('newTaskInput').value = '';
    return;
  }

  data.tasks.push({
    id: crypto.randomUUID(),
    title: newTask,
    status: 'created',
  });
  document.getElementById('newTaskInput').value = '';
}

export { createNewTask, printAllTasks };
