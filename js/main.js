const tasks = [];

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

function printAllTasks() {
  document.getElementById('tasksList').innerHTML = '';

  tasks.forEach((task, ind) => {
    printSingleTask(task, ind);
  });
}

function printSingleTask(task, ind) {
  const taskLi = document.createElement('li');
  const deleteButton = document.createElement('button');

  taskLi.textContent = task;
  deleteButton.textContent = 'Delete';

  deleteButton.style.marginLeft = '10px';

  deleteButton.addEventListener('click', () => {
    tasks.splice(ind, 1);
    printAllTasks();
  });

  taskLi.appendChild(deleteButton);
  document.getElementById('tasksList').appendChild(taskLi);
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

printAllTasks();
