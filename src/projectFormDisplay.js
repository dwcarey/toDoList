import { projectListLoad } from "./projectListLoad";
import { Project } from "./projects";
import { Task } from "./tasks";

function projectFormDisplay() {
  const form = document.createElement('form');
  form.id = 'projectForm';
  const content = document.getElementById('content');

  // Create a label for the project name input field
  const projectNameLabel = document.createElement('label');
  projectNameLabel.textContent = 'Project Name: ';
  form.appendChild(projectNameLabel);

  // Create a text input field for the project name
  const projectNameInput = document.createElement('input');
  projectNameInput.type = 'text';
  projectNameInput.name = 'projectName';
  projectNameInput.required = true;
  projectNameInput.maxLength = 25; // set max length to 25 characters
  form.appendChild(projectNameInput);

  // Create a label for the project due date input field
  const projectDueDateLabel = document.createElement('label');
  projectDueDateLabel.textContent = 'Project Due Date: ';
  form.appendChild(projectDueDateLabel);

  // Create a date input field for the project due date
  const projectDueDateInput = document.createElement('input');
  projectDueDateInput.type = 'date';
  projectDueDateInput.required = true;
  projectDueDateInput.name = 'projectDueDate';
  form.appendChild(projectDueDateInput);

  // Create a submit button
  const submitButton = document.createElement('button');
  submitButton.id = 'submitButton';
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  form.appendChild(submitButton);

  // Create an empty array to store task input fields
  const taskInputs = [];

  // Create a button to add tasks dynamically
  const addTaskButton = document.createElement('button');
  addTaskButton.id = 'addTaskButton';
  addTaskButton.type = 'button';
  addTaskButton.textContent = 'Add Task';
  form.appendChild(addTaskButton);


  addTaskButton.addEventListener('click', () => {
    const taskIndex = taskInputs.length + 1;

    // Create a div to hold the task input fields
    const taskDiv = document.createElement('div');
    taskDiv.id = `taskDiv${taskIndex}`;

    // Create a label for the task name input field
    const taskNameLabel = document.createElement('label');
    taskNameLabel.textContent = `Task ${taskIndex} Name: `;
    taskDiv.appendChild(taskNameLabel);

    // Create a text input field for the task name
    const taskNameInput = document.createElement('input');
    taskNameInput.type = 'text';
    taskNameInput.name = `taskName${taskIndex}`;
    taskNameInput.required = true;
    taskNameInput.maxLength = 40; // set max length to 40 characters
    taskDiv.appendChild(taskNameInput);

    // Create a label for the task due date input field
    const taskDueDateLabel = document.createElement('label');
    taskDueDateLabel.textContent = `Task ${taskIndex} Due Date: `;
    taskDiv.appendChild(taskDueDateLabel);

    // Create a date input field for the task due date
    const taskDueDateInput = document.createElement('input');
    taskDueDateInput.type = 'date';
    taskDueDateInput.required = true;
    taskDueDateInput.name = `taskDueDate${taskIndex}`;
    taskDiv.appendChild(taskDueDateInput);

    // Create a label for the task priority input field
    const taskPriorityLabel = document.createElement('label');
    taskPriorityLabel.textContent = `Task ${taskIndex}`;

// Create a select input field for the task priority
const taskPrioritySelect = document.createElement('select');
taskPrioritySelect.name = `taskPriority${taskIndex}`;
taskPrioritySelect.required = true;

// Create options for task priority
const priorityOptions = ["Low", "Medium", "High"];
for (const option of priorityOptions) {
  const priorityOption = document.createElement('option');
  priorityOption.value = option;
  priorityOption.textContent = option;
  taskPrioritySelect.appendChild(priorityOption);
}

taskDiv.appendChild(taskPrioritySelect);

// Create a label for the task notes input field
const taskNotesLabel = document.createElement('label');
taskNotesLabel.textContent = `Task ${taskIndex} Notes: `;
taskDiv.appendChild(taskNotesLabel);

// Create a textarea input field for the task notes
const taskNotesTextarea = document.createElement('textarea');
taskNotesTextarea.name = `taskNotes${taskIndex}`;
taskNotesTextarea.rows = 4;
taskDiv.appendChild(taskNotesTextarea);

// Add the task input fields to the form
form.insertBefore(taskDiv, addTaskButton, submitButton);

// Store the task input fields in the taskInputs array
taskInputs.push({
  name: taskNameInput,
  due: taskDueDateInput,
  priority: taskPrioritySelect,
  notes: taskNotesTextarea
});
});

// Add the form to the content
content.appendChild(form);

// Handle form submission
form.addEventListener('submit', (event) => {
event.preventDefault();

// Retrieve project details from the form
const projectName = projectNameInput.value;
const projectDueDate = projectDueDateInput.value;

// Create a new project
const project = new Project(projectName, projectDueDate);

// Retrieve task details from the form
for (const taskInput of taskInputs) {
  const taskName = taskInput.name.value;
  const taskDueDate = taskInput.due.value;
  const taskPriority = taskInput.priority.value;
  const taskNotes = taskInput.notes.value;

  // Create a new task
  const task = new Task(taskName, taskDueDate, taskPriority, taskNotes);

  // Add the task to the project
  project.addTask(task);
}

// Clear the form
form.reset();
form.remove();

// Reload the project list
projectListLoad();
});

}
export { projectFormDisplay };