import { ToDoList } from "./toDoList";
import { Project } from "./projects";
import { Task } from "./tasks";
import { projectListLoad } from "./projectListLoad";

function createEditForm(projectIndex, toDoList) {
    const selectedProject = toDoList.projects[projectIndex];

    let tasksCounter = selectedProject.tasks.length;

    const content = document.getElementById('content');
    const projectForm = document.createElement('form');
    projectForm.id = 'editProjectForm';

    //reset button, resets the form inputs
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.type = 'reset';

    //close button, closes the form
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.type = 'button';
    closeButton.addEventListener('click', () => {
        projectForm.remove();
    })

    //project name label and 25 char text input
    const projectNameLabel = document.createElement('label');
    projectNameLabel.textContent = 'Project Name: ';

    const projectNameInput = document.createElement('input');
    projectNameInput.type = 'text';
    projectNameInput.maxLength = 25;
    projectNameInput.id = 'projectNameInput';
    projectNameInput.value = selectedProject.name;

    //project due date label and date input
    const projectDueLabel = document.createElement('label');
    projectDueLabel.textContent = 'Due Date: ';

    const projectDueInput = document.createElement('input');
    projectDueInput.type = 'date';
    projectDueInput.id = 'projectDueInput';
    const day = selectedProject.due.split('/')[0];
    const month = selectedProject.due.split('/')[1];
    const year = selectedProject.due.split('/')[2];
    const newProjectDate = `${year}-${month}-${day}`;
    projectDueInput.value = newProjectDate;

    //add task button, will generate a task form
    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = 'Add Task';
    addTaskButton.type = 'button';
    addTaskButton.addEventListener('click', (e) => {
        tasksCounter += 1;
        //createEditTaskForm, same
        createTaskForm(toDoList, tasksCounter);
    })

    //submit button, will submit form returning a Project object to projectlistload
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.id = 'submitButton';
    submitButton.addEventListener('click', (e) =>{
        e.preventDefault();
        const newProject = new Project(projectNameInput.value, projectDueInput.value);
        toDoList.editProject(projectIndex, newProject);
        projectForm.remove();
        projectListLoad(toDoList);
    })

    //append this append that
    projectForm.appendChild(resetButton);
    projectForm.appendChild(closeButton);
    projectForm.appendChild(projectNameLabel);
    projectForm.appendChild(projectNameInput);
    projectForm.appendChild(projectDueLabel);
    projectForm.appendChild(projectDueInput);
    projectForm.appendChild(addTaskButton);
    projectForm.appendChild(submitButton);

    content.appendChild(projectForm);




    console.log(selectedProject);
}

export { createEditForm };