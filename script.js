// Get the input box, add button, and task list from the HTML
const taskInput = document.getElementById('task-input'); // Where the user types the task
const addTaskButton = document.getElementById('add-task-button'); // Button to add the task
const taskList = document.getElementById('task-list'); // The list where tasks will appear

// Function to add a new task
function addTask() {
  // Get the text the user typed
  const taskText = taskInput.value.trim(); // trim() removes extra spaces at the start or end

  // Check if the input is empty
  if (taskText === '') {
    alert('Please enter a task!'); // Alert if no task is entered
    return; 
  }

  // Create a new task item (a <li> element)
  const taskItem = document.createElement('li'); // Create a new list item
  taskItem.className = 'task'; // Add the 'task' class for styling
  taskItem.innerHTML = `
    <span>${taskText}</span> 
    <button class="delete-button">Delete</button>
  `; // Add the task text and a delete button inside the <li>

  // Add a click event to mark the task as complete
  taskItem.addEventListener('click', function (event) {
    // Only toggle "complete" when clicking on the task, not the delete button
    if (event.target.tagName !== 'BUTTON') {
      taskItem.classList.toggle('complete'); // Add/remove 'complete' class for line-through
    }
  });

  // Add a click event to the delete button
  const deleteButton = taskItem.querySelector('.delete-button'); // Find the delete button
  deleteButton.addEventListener('click', function () {
    taskList.removeChild(taskItem); // Remove the task item from the list
  });

  // Add the new task to the list
  taskList.appendChild(taskItem);

  // Clear the input box for the next task
  taskInput.value = '';
}

// When the "Add" button is clicked, call the addTask function
addTaskButton.addEventListener('click', addTask);

// Allow pressing Enter to add a task
taskInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') { // Check if the Enter key was pressed
    addTask(); // Call the addTask function
  }
});
