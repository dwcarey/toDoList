import { projects } from './projects';

function projectListLoad() {
  const content = document.getElementById('content');
  const projectsList = document.createElement('ul');

  for (let i = 0; i < projects.length; i += 1) {
    const listItem = document.createElement('li');
    listItem.id = 'listItem';
    const project = projects[i];

    listItem.textContent = `Project Name:${project.name}\nDue Date:${project.due}`;

    for (let j = 0; j < projects[i].tasks.length; j +=1) {
    const taskListItem = document.createElement('ul');
    const taskDue = document.createElement('li');
    const taskPriority = document.createElement('li');
    const taskNotes = document.createElement('li');
        taskListItem.id = 'taskListMain';
        taskDue.id = 'taskListItem';
        taskPriority.id = 'taskListItem';
        taskNotes.id = 'taskListItem';

        taskListItem.textContent = `Task ${j+1}: ${project.tasks[j].name}`
        taskDue.textContent = `Due Date: ${project.tasks[j].due}`
        taskPriority.textContent = `Priority: ${project.tasks[j].priority}`
        taskNotes.textContent = `Notes: ${project.tasks[j].notes}`

        
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