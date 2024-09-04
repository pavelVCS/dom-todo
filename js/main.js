document.getElementById('createButton').addEventListener('click', () => {
  createNewTask();
});

document.getElementById('newTaskInput').addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    createNewTask();
  }
});

function createNewTask() {
  const newTask = document.getElementById('newTaskInput').value;

  if (!newTask.trim().length) {
    alert('Please enter a task');
    document.getElementById('newTaskInput').value = '';
    return;
  }

  const taskLi = document.createElement('li');
  taskLi.textContent = newTask;

  document.getElementById('tasksList').appendChild(taskLi);
  document.getElementById('newTaskInput').value = '';
}
