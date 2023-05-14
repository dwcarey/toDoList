import { projectListLoad } from "./projectListLoad";
import { Project } from "./projects";
import { Task } from "./tasks";
import { attachEventListeners } from "./eventsController";

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
  if (projectData && projectData.due) {
    const originalDate = projectData.due;
    const dateComponents = originalDate.split('/');
    const rearrangedDate = `${dateComponents[2]}-${dateComponents[1]}-${dateComponents[0]}`;
    projectDueDateInput.value = rearrangedDate;
  }

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

  content.appendChild(form);

  attachEventListeners(form, overlay, taskInputs, projectListLoad);
}

export { createProjectForm };
