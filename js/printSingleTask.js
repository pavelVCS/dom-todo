import {
  getStatusButtonLabel,
  getTaskNextStatus,
} from './helpers/statusButtonHelpers.js';

function printSingleTask(task, ind, tasks, printAllTasks) {
  const taskLi = document.createElement('li');
  const buttonsContainer = document.createElement('div');
  const statusButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  const statusButtonLabel = getStatusButtonLabel(task.status);
  taskLi.textContent = task.title;
  statusButton.textContent = statusButtonLabel;
  deleteButton.textContent = 'Delete';

  // add styles
  taskLi.classList.add('task');
  if (task.status === 'started') {
    taskLi.classList.add('task--started');
  }

  if (task.status === 'completed') {
    taskLi.classList.add('task--completed');
  }

  buttonsContainer.classList.add('buttonsContainer');

  // add event listeners
  statusButton.addEventListener('click', () => {
    handleStatusChange(task, ind, tasks);
    printAllTasks();
  });

  deleteButton.addEventListener('click', () => {
    handleDelete(ind, tasks);
    printAllTasks();
  });

  if (task.status !== 'completed') {
    buttonsContainer.appendChild(statusButton);
  }
  buttonsContainer.appendChild(deleteButton);
  taskLi.appendChild(buttonsContainer);
  document.getElementById('tasksList').appendChild(taskLi);
}

// buttons functions
function handleStatusChange(task, ind, tasks) {
  const newTask = { ...task, status: getTaskNextStatus(task.status) };
  tasks.splice(ind, 1, newTask);
}

function handleDelete(ind, tasks) {
  tasks.splice(ind, 1);
}

export { printSingleTask };
