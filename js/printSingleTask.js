function printSingleTask(task, ind, tasks, printAllTasks) {
  const taskLi = document.createElement('li');
  const buttonsContainer = document.createElement('div');
  const startButton = document.createElement('button');
  const stopButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  taskLi.textContent = task;
  startButton.textContent = 'Start';
  stopButton.textContent = 'Stop';
  deleteButton.textContent = 'Delete';

  // add styles
  taskLi.classList.add('task');
  buttonsContainer.classList.add('buttonsContainer');

  startButton.addEventListener('click', () => {
    handleStart();
  });

  stopButton.addEventListener('click', () => {
    console.log('stop');
  });

  deleteButton.addEventListener('click', () => {
    tasks.splice(ind, 1);
    printAllTasks();
  });

  //   taskLi.appendChild(deleteButton);
  buttonsContainer.appendChild(startButton);
  buttonsContainer.appendChild(stopButton);
  taskLi.appendChild(buttonsContainer);
  document.getElementById('tasksList').appendChild(taskLi);
}

function handleStart() {
  console.log('start');
}

export { printSingleTask };
