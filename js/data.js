const mockData = [
  {
    id: crypto.randomUUID(),
    title: 'Buy groceries',
    status: 'created', // created, started, completed
  },
  {
    id: crypto.randomUUID(),
    title: 'Clean the house',
    status: 'started',
  },
  {
    id: crypto.randomUUID(),
    title: 'Walk the dog',
    status: 'completed',
  },
  {
    id: crypto.randomUUID(),
    title: 'Do homework',
    status: 'created',
  },
  {
    id: crypto.randomUUID(),
    title: 'Go to the gym',
    status: 'started',
  },
  {
    id: crypto.randomUUID(),
    title: 'Read a book',
    status: 'completed',
  },
];

export const data = {
  tasks: [...mockData],
  setTasks: function (newTasks) {
    this.tasks = newTasks;
  },
  deleteTask: function (id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  },
  changeTaskStatus: function (id, nextStatus) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: nextStatus };
      }

      return task;
    });
  },
  createTask: function (title) {},
};
