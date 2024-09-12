import { getStatusButtonLabel } from './helpers/statusButtonHelpers.js';

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
  buttonsContainer.classList.add('buttonsContainer');

  deleteButton.addEventListener('click', () => {
    handleDelete(ind, tasks, printAllTasks);
  });

  if (task.status !== 'completed') {
    buttonsContainer.appendChild(statusButton);
  }
  buttonsContainer.appendChild(deleteButton);
  taskLi.appendChild(buttonsContainer);
  document.getElementById('tasksList').appendChild(taskLi);
}

// buttons functions
function handleStart() {
  console.log('start');
}

function handleStop() {
  console.log('stop');
}

function handleDelete(ind, tasks, printAllTasks) {
  tasks.splice(ind, 1);
  printAllTasks();
}

export { printSingleTask };
