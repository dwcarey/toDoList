import { projects } from './projects';

function createTaskList(project) {
  const taskList = document.createElement('ul');

  for (let i = 0; i < project.tasks.length; i++) {
    const task = project.tasks[i];
    const taskListItem = document.createElement('li');
    const taskName = document.createElement('h3');
    const taskDue = document.createElement('p');
    const taskPriority = document.createElement('p');
    const taskNotes = document.createElement('p');

    taskName.textContent = task.name;
    taskDue.id = 'taskListItem';
    taskDue.textContent = `Due date: ${task.due}`;
    taskPriority.id = 'taskListItem';
    taskPriority.textContent = `Priority: ${task.priority}`;
    taskNotes.id = 'taskListItem';
    taskNotes.textContent = `Notes: ${task.notes}`;

    taskListItem.appendChild(taskName);
    taskListItem.appendChild(taskDue);
    taskListItem.appendChild(taskPriority);
    taskListItem.appendChild(taskNotes);
    taskList.appendChild(taskListItem);
  }

  return taskList;
}

function createProjectListItem(project) {
  const projectListItem = document.createElement('li');
  const projectName = document.createElement('h2');
  const projectDue = document.createElement('p');

  projectListItem.id = 'listItem';
  projectName.textContent = project.name;
  projectDue.textContent = `Due date: ${project.due}`;

  projectListItem.appendChild(projectName);
  projectListItem.appendChild(projectDue);
  projectListItem.appendChild(createTaskList(project));

  return projectListItem;
}

function projectListLoad() {
  const content = document.getElementById('content');
  const projectsList = document.createElement('ul');
  projectsList.id = 'projectContainer';

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    const projectListItem = createProjectListItem(project);
    projectsList.appendChild(projectListItem);
  }

  content.appendChild(projectsList);
}

export { projectListLoad };