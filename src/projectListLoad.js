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
    const taskDeleteButton = document.createElement('button');

    taskDeleteButton.textContent = 'Delete Task';
    taskDeleteButton.id = `taskDelete${i}`;
    taskName.textContent = task.name;
    taskDue.id = 'taskListItem';
    taskDue.textContent = `Due date: ${task.due}`;
    taskPriority.id = 'taskListItem';
    taskPriority.textContent = `Priority: ${task.priority}`;
    taskNotes.id = 'taskListItem';
    taskNotes.textContent = `Notes: ${task.notes}`;

    taskListItem.appendChild(taskDeleteButton);
    taskListItem.appendChild(taskName);
    taskListItem.appendChild(taskDue);
    taskListItem.appendChild(taskPriority);
    taskListItem.appendChild(taskNotes);
    taskList.appendChild(taskListItem);
  }

  return taskList;
}

function createProjectListItem(project, buttonID) {
  const projectListItem = document.createElement('li');
  const projectName = document.createElement('h2');
  const projectDue = document.createElement('p');
  const editButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  editButton.textContent = 'Edit Project & Tasks';
  deleteButton.textContent = 'Delete Project & Tasks';
  deleteButton.id = `Delete ${buttonID}`;
  editButton.id = `Edit ${buttonID}`;
  projectListItem.id = 'listItem';
  projectName.textContent = project.name;
  projectDue.textContent = `Due date: ${project.due}`;

  projectListItem.appendChild(editButton);
  projectListItem.appendChild(deleteButton);
  projectListItem.appendChild(projectName);
  projectListItem.appendChild(projectDue);
  projectListItem.appendChild(createTaskList(project));

  return projectListItem;
}

function projectListLoad() {
  const content = document.getElementById('content');
  const oldList = document.getElementById('projectContainer');
  if (oldList !== null) {
    oldList.remove();
  };
  const projectsList = document.createElement('ul');
  projectsList.id = 'projectContainer';


  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    const buttonID = `project${i}`;
    const projectListItem = createProjectListItem(project, buttonID);
    projectsList.appendChild(projectListItem);
  }

  content.appendChild(projectsList);
}



export { projectListLoad };