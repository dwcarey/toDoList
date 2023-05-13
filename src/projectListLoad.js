import { projects } from './projects';
import { projectFormDisplay } from './projectFormDisplay';

function createTaskList(project) {
  const taskList = document.createElement('ul');

  for (let i = 0; i < project.tasks.length; i++) {
    const task = project.tasks[i];

    const projectIndex = projects.indexOf(project);
    const taskIndex = i;

    const taskListItem = document.createElement('li');
    const taskName = document.createElement('h3');
    const taskDue = document.createElement('p');
    const taskPriority = document.createElement('p');
    const taskNotes = document.createElement('p');
    const taskDeleteButton = document.createElement('button');

    taskDeleteButton.textContent = 'Delete Task';
    taskDeleteButton.id = `taskDelete ${projectIndex} ${taskIndex}`;
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

    taskDeleteButton.addEventListener('click', (e) => {
      if (e.target && e.target.id.startsWith('taskDelete ')) {
        const indices = e.target.id.split(' ').slice(1).map(Number);
        const projectIndexUse = indices[0];
        const taskIndexUse = indices[1];
  
        // Remove the task from the project.tasks array
        projects[projectIndexUse].tasks.splice(taskIndexUse, 1);
  
        // Reload the project list
        projectListLoad();
      }
  })}

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

  deleteButton.addEventListener('click', (e) => {
    if (e.target && e.target.id.startsWith('Delete ')) {
      const index = e.target.id.split(' ')[1];
      projects.splice(index, 1);
      projectListLoad();
    }
  });

  editButton.addEventListener('click', (e) => {
    if (e.target && e.target.id.startsWith('Edit ')) {
      const index = e.target.id.split(' ')[1];
      const selectedProject = projects[index];
      projectFormDisplay(selectedProject);
    }
  });

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
    const buttonID = `${i}`;
    const projectListItem = createProjectListItem(project, buttonID);
    projectsList.appendChild(projectListItem);
  }

  content.appendChild(projectsList);
}

export { projectListLoad };