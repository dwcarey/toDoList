

function projectListLoad(projects) {
  const content = document.getElementById('content');
  const addProjectButton = document.createElement('button');
  const projectsList = document.createElement('ul');

  addProjectButton.textContent = 'Add Project';
  addProjectButton.id = 'addProjectButton';
  addProjectButton.classList.add('addProjectButton');
  content.appendChild(addProjectButton);

  for (let i = 0; i < projects.length; i += 1) {
    const listItem = document.createElement('li');
    listItem.id = 'listItem';

    const project = projects[i];

    const projectName = document.createElement('h2');
    projectName.textContent = `${project.name}`;

    const projectDueDate = document.createElement('h2');
    projectDueDate.textContent = `Due: ${project.due}`;

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.textContent = 'Delete Project';
    deleteProjectButton.id = `deleteProject-${i}`;
    deleteProjectButton.className = 'deleteProjectButton';

    const editProjectButton = document.createElement('button');
    editProjectButton.textContent = 'Edit Project';
    editProjectButton.id = `editProject-${i}`;
    editProjectButton.className = 'editProjectButton';

    listItem.appendChild(deleteProjectButton);
    listItem.appendChild(editProjectButton);
    listItem.appendChild(projectName);
    listItem.appendChild(projectDueDate);

    for (let j = 0; j < projects[i].tasks.length; j +=1) {
        const taskListItem = document.createElement('ul');
        taskListItem.id = 'taskListMain';

            const deleteTaskButton = document.createElement('button');
            deleteTaskButton.textContent = 'Delete Task';
            deleteTaskButton.id = `deleteTask-${i}/${j}`;
            deleteTaskButton.className = 'deleteTaskButton';

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
};

export { projectListLoad };