const tasks = ['Buy milk', 'Eat dinner', 'Study JS'];

function printAllTasks() {
  document.getElementById('tasksList').innerHTML = '';

  tasks.forEach((task, ind) => {
    printSingleTask(task, ind, tasks);
  });
}

function printSingleTask(task, ind, tasks) {
  const taskLi = document.createElement('li');
  const deleteButton = document.createElement('button');

  taskLi.textContent = task;
  deleteButton.textContent = 'Delete';

  // add styles
  taskLi.classList.add('task');
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

export { printSingleTask, createNewTask, printAllTasks };
