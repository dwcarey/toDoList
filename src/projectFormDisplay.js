import { projectListLoad } from "./projectListLoad";
import { Project } from "./projects";
import { Task } from "./tasks";
import format from "date-fns/format";

function projectFormDisplay(projectData = null) {
  const form = document.createElement('form');
  const overlay = document.createElement('div');
  overlay.id = 'overlay';
  form.id = 'projectForm';
  const content = document.getElementById('content');
  content.appendChild(overlay);

  //create reset button
  const resetButton = document.createElement('button');
  resetButton.id = 'resetButton';
  resetButton.type = 'reset';
  resetButton.textContent = 'Reset';
  form.appendChild(resetButton);

  //create close form button
  const closeButton = document.createElement('button');
  closeButton.id = 'closeButton';
  closeButton.type = 'button';
  closeButton.textContent = 'Close';

  closeButton.addEventListener('click', (e) => {
    form.remove();
    overlay.remove();
  });
  form.appendChild(closeButton);

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
  if (projectData) {
    projectNameInput.value = projectData.name; // Prefill project name
  }
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

if (projectData && projectData.due) {
  const dueDateParts = projectData.due.split('/');
  const year = dueDateParts[2];
  const month = dueDateParts[1].padStart(2, '0');
  const day = dueDateParts[0].padStart(2, '0');
  const dueDateString = `${year}-${month}-${day}`;

  projectDueDateInput.value = dueDateString;
}

form.appendChild(projectDueDateInput);

  // Create an empty array to store task input fields
  const taskInputs = [];

  // Create a button to add tasks dynamically
  const addTaskButton = document.createElement('button');
  addTaskButton.id = 'addTaskButton';
  addTaskButton.type = 'button';
  addTaskButton.textContent = 'Add Task';
  form.appendChild(addTaskButton);

  // Create a submit button
  const submitButton = document.createElement('button');
  submitButton.id = 'submitButton';
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  form.appendChild(submitButton);

  if (projectData) {
    // Prefill tasks if projectData has tasks
    // eslint-disable-next-line no-restricted-syntax
    for (const taskData of projectData.tasks) {
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
      taskNameInput.value = taskData.name; // Prefill task name
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


      if (taskData && taskData.due) {
        const dueDateParts = taskData.due.split('/');
        const year = dueDateParts[2];
        const month = dueDateParts[1].padStart(2, '0');
        const day = dueDateParts[0].padStart(2, '0');
        const dueDateString = `${year}-${month}-${day}`;
      
        taskDueDateInput.value = dueDateString;
      }

      taskDiv.appendChild(taskDueDateInput);

      // Create a label for the task priority input field
      const taskPriorityLabel = document.createElement('label');
      taskPriorityLabel.textContent = `Task ${taskIndex} Priority: `;

      // Create a select input field for the task priority
      const taskPrioritySelect = document.createElement('select');
      taskPrioritySelect.name = `taskPriority${taskIndex}`;
      taskPrioritySelect.required = true;

      // Create options for task priority
      const priorityOptions = ["Low", "Medium", "High"];
      // eslint-disable-next-line no-restricted-syntax
      for (const option of priorityOptions) {
        const priorityOption = document.createElement('option');
        priorityOption.value = option;
        priorityOption.textContent = option;
        taskPrioritySelect.appendChild(priorityOption);
      }

      // Set the selected option based on taskData.priority
      taskPrioritySelect.value = taskData.priority;

      // Append the task priority label and select to the taskDiv
      taskDiv.appendChild(taskPriorityLabel);
      taskDiv.appendChild(taskPrioritySelect);

      // Create a label for the task notes input field
      const taskNotesLabel = document.createElement('label');
      taskNotesLabel.textContent = `Task ${taskIndex} Notes: `;
      taskDiv.appendChild(taskNotesLabel);

      // Create a textarea input field for the task notes
      const taskNotesTextarea = document.createElement('textarea');
      taskNotesTextarea.name = `taskNotes${taskIndex}`;
      taskNotesTextarea.rows = 4;
      taskNotesTextarea.value = taskData.notes; // Prefill task notes
      taskDiv.appendChild(taskNotesTextarea);

      // Add the task input fields to the form
      form.appendChild(taskDiv);

      // Store the task input fields in the taskInputs array
      taskInputs.push({
        name: taskNameInput,
        due: taskDueDateInput,
        priority: taskPrioritySelect,
        notes: taskNotesTextarea
      });
    }
  }

  // Add the form to the content
  content.appendChild(form);

  // Handle form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    overlay.remove();
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