
import { createProjectForm } from './creatProjectForm';
import { createEditForm } from './createEditForm';

function projectListLoad(toDoList) {
  const content = document.getElementById('content');
  content.replaceChildren();
  const addProjectButton = document.createElement('button');
  const projectsList = document.createElement('ul');

  addProjectButton.textContent = 'Add Project';
  addProjectButton.id = 'addProjectButton';
  addProjectButton.classList.add('addProjectButton');
  addProjectButton.type = 'button';
  content.appendChild(addProjectButton);

  for (let i = 0; i < toDoList.projects.length; i += 1) {
    const listItem = document.createElement('li');
    listItem.id = 'listItem';

    const project = toDoList.projects[i];

    const projectName = document.createElement('h2');
    projectName.textContent = `${project.name}`;

    const projectDueDate = document.createElement('h2');
    projectDueDate.textContent = `Due: ${project.due}`;

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.textContent = 'Delete Project';
    deleteProjectButton.id = `deleteProject-${i}`;
    deleteProjectButton.className = 'deleteProjectButton';
    deleteProjectButton.type = 'button';

    const editProjectButton = document.createElement('button');
    editProjectButton.textContent = 'Edit Project';
    editProjectButton.id = `editProject-${i}`;
    editProjectButton.className = 'editProjectButton';
    editProjectButton.type = 'button';

    listItem.appendChild(deleteProjectButton);
    listItem.appendChild(editProjectButton);
    listItem.appendChild(projectName);
    listItem.appendChild(projectDueDate);

    for (let j = 0; j < toDoList.projects[i].tasks.length; j +=1) {
        const taskListItem = document.createElement('ul');
        taskListItem.id = 'taskListMain';

            const deleteTaskButton = document.createElement('button');
            deleteTaskButton.textContent = 'Delete Task';
            deleteTaskButton.id = `deleteTask-${i}/${j}`;
            deleteTaskButton.className = 'deleteTaskButton';
            deleteTaskButton.type = 'button';

            const taskName = document.createElement('h3');
            taskName.textContent = `${project.tasks[j].name}`;

            const taskDue = document.createElement('li');
            taskDue.id = 'taskListItem';
            taskDue.textContent = `Due: ${project.tasks[j].due}`

            const taskPriority = document.createElement('li');
            taskPriority.id = 'taskListItem';
            taskPriority.textContent = `Priority: ${project.tasks[j].priority}`

            const taskNotes = document.createElement('li');
            taskNotes.id = 'taskListItem';
            taskNotes.textContent = `Notes: ${project.tasks[j].notes}`
            
            taskListItem.appendChild(deleteTaskButton);
            taskListItem.appendChild(taskName);
            taskListItem.appendChild(taskDue);
            taskListItem.appendChild(taskPriority);
            taskListItem.appendChild(taskNotes);

        listItem.appendChild(taskListItem);
    }
    projectsList.appendChild(listItem);
  }
  content.appendChild(projectsList);

  function addEventListeners() {
    const addProjectButtonListener = document.getElementById('addProjectButton');
    addProjectButtonListener.addEventListener('click', (e) => {
        createProjectForm(toDoList);

    });

    const deleteProjectButtons = document.querySelectorAll('button.deleteProjectButton');
    deleteProjectButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const projectIndex = button.id.split('-')[1];
            toDoList.deleteProject(projectIndex); 
            projectListLoad(toDoList);         
        });
    });

    const editProjectButtons = document.querySelectorAll('button.editProjectButton');
    editProjectButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const editProjectIndex = button.id.split('-')[1];
            createEditForm(editProjectIndex, toDoList);
        });
    });

    const deleteTaskButtons = document.querySelectorAll('button.deleteTaskButton');
    deleteTaskButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
          const projectAndTaskIndex = button.id.split('-')[1];
          const projectIndex = projectAndTaskIndex.split('/')[0];
          const taskIndex = projectAndTaskIndex.split('/')[1];
          toDoList.deleteTask(projectIndex, taskIndex);
          projectListLoad(toDoList);  
        });
    });
}

addEventListeners();
};

export { projectListLoad };