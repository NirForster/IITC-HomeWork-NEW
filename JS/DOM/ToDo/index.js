const addButton = document.getElementById("addToDoButton");
const taskInput = document.getElementById("toDoTask");
let tasks = [];

// RENDER
function renderTasks() {
  const tasksContainer = document.getElementById("toDoListContainer");
  tasksContainer.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i].task;
    const taskElement = document.createElement("li");
    taskElement.textContent = task;

    // Add "DELETE" button:
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      removeTask(i);
    });

    taskElement.appendChild(deleteButton);
    tasksContainer.appendChild(taskElement);
  }
}

// CREATE
function addTask() {
  const newTask = taskInput.value;
  if (newTask) {
    tasks.push({ task: newTask, isDone: false });
    taskInput.value = "";
    renderTasks();
  }
}

// DELETE
function removeTask(index) {
  tasks.splice(index, 1); // Remove item from the array
  renderTasks(); // Re-render the list to reflect changes
}

addButton.addEventListener("click", addTask);
