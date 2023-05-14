import { projectListLoad } from "./projectListLoad";
import { Project } from "./projects";
import { Task } from "./tasks";
import format from "date-fns/format";

function createTaskInputs(taskIndex, taskData) {
  const taskDiv = document.createElement('div');
  taskDiv.id = `taskDiv${taskIndex}`;

  const taskNameLabel = document.createElement('label');
  taskNameLabel.textContent = `Task ${taskIndex} Name: `;
  taskDiv.appendChild(taskNameLabel);

  const taskNameInput = document.createElement('input');
  taskNameInput.type = 'text';
  taskNameInput.name = `taskName${taskIndex}`;
  taskNameInput.required = true;
  taskNameInput.maxLength = 40;
  taskNameInput.value = taskData.name || '';
  taskDiv.appendChild(taskNameInput);

  const taskDueDateLabel = document.createElement('label');
  taskDueDateLabel.textContent = `Task ${taskIndex} Due Date: `;
  taskDiv.appendChild(taskDueDateLabel);

  const taskDueDateInput = document.createElement('input');
  taskDueDateInput.type = 'date';
  taskDueDateInput.required = true;
  taskDueDateInput.name = `taskDueDate${taskIndex}`;
  taskDueDateInput.value = taskData.due || '';
  taskDiv.appendChild(taskDueDateInput);

  const taskPriorityLabel = document.createElement('label');
  taskPriorityLabel.textContent = `Task ${taskIndex} Priority: `;
  taskDiv.appendChild(taskPriorityLabel);

  const taskPrioritySelect = document.createElement('select');
  taskPrioritySelect.name = `taskPriority${taskIndex}`;
  taskPrioritySelect.required = true;

  const priorityOptions = ["Low", "Medium", "High"];
  for (const option of priorityOptions) {
    const priorityOption = document.createElement('option');
    priorityOption.value = option;
    priorityOption.textContent = option;
    taskPrioritySelect.appendChild(priorityOption);
  }

  taskPrioritySelect.value = taskData.priority || '';
  taskDiv.appendChild(taskPrioritySelect);

  const taskNotesLabel = document.createElement('label');
  taskNotesLabel.textContent = `Task ${taskIndex} Notes: `;
  taskDiv.appendChild(taskNotesLabel);

  const taskNotesTextarea = document.createElement('textarea');
  taskNotesTextarea.name = `taskNotes${taskIndex}`;
  taskNotesTextarea.rows = 4;
  taskNotesTextarea.value = taskData.notes || '';
  taskDiv.appendChild(taskNotesTextarea);

  return taskDiv;
}

function createProjectForm(projectData = null) {
  const form = document.createElement('form');
  const overlay = document.createElement('div');
  overlay.id = 'overlay';
  form.id = 'projectForm';
  const content = document.getElementById('content');
  content.appendChild(overlay);

  const resetButton = document.createElement('button');
  resetButton.id = 'resetButton';
  resetButton.type = 'reset';
  resetButton.textContent = 'Reset';
  form.appendChild(resetButton);

  const closeButton = document.createElement('button');
  closeButton.id = 'closeButton';
  closeButton.type = 'button';
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', (e) => {
    form.remove();
    overlay.remove();
  });
  form.appendChild(closeButton);

  const projectNameLabel = document.createElement('label');
  projectNameLabel.textContent = 'Project Name: ';
  form.appendChild(projectNameLabel);

  const projectNameInput = document.createElement('input');
  projectNameInput.type = 'text';
  projectNameInput.name = 'projectName';
  projectNameInput.required = true;
  projectNameInput.maxLength = 25;
  projectNameInput.value = projectData && projectData.name ? projectData.name : '';
form.appendChild(projectNameInput);

const projectDueDateLabel = document.createElement('label');
projectDueDateLabel.textContent = 'Project Due Date: ';
form.appendChild(projectDueDateLabel);

const projectDueDateInput = document.createElement('input');
projectDueDateInput.type = 'date';
projectDueDateInput.required = true;
projectDueDateInput.name = 'projectDueDate';
projectDueDateInput.value = projectData && projectData.due ? projectData.due : '';
form.appendChild(projectDueDateInput);

const taskInputs = [];

const addTaskButton = document.createElement('button');
addTaskButton.id = 'addTaskButton';
addTaskButton.type = 'button';
addTaskButton.textContent = 'Add Task';
form.appendChild(addTaskButton);

const submitButton = document.createElement('button');
submitButton.id = 'submitButton';
submitButton.type = 'submit';
submitButton.textContent = 'Submit';
form.appendChild(submitButton);

if (projectData && projectData.tasks) {
for (const [index, taskData] of projectData.tasks.entries()) {
const taskIndex = index + 1;
const taskDiv = createTaskInputs(taskIndex, taskData);
form.appendChild(taskDiv);
taskInputs.push({
name: taskDiv.querySelector([name=`taskName${taskIndex}`]),
due: taskDiv.querySelector([name=`taskDueDate${taskIndex}`]),
priority: taskDiv.querySelector([name=`taskPriority${taskIndex}`]),
notes: taskDiv.querySelector([name=`taskNotes${taskIndex}`])
});
}
}

content.appendChild(form);

form.addEventListener('submit', (event) => {
event.preventDefault();
overlay.remove();

const projectName = projectNameInput.value;
const projectDueDate = projectDueDateInput.value;

const project = new Project(projectName, projectDueDate);

for (const taskInput of taskInputs) {
  const taskName = taskInput.name.value;
  const taskDueDate = taskInput.due.value;
  const taskPriority = taskInput.priority.value;
  const taskNotes = taskInput.notes.value;

  const task = new Task(taskName, taskDueDate, taskPriority, taskNotes);
  project.addTask(task);
}

form.reset();
form.remove();

projectListLoad();
});
}

export { createProjectForm };
