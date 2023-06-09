import { ToDoList } from "./toDoList";
import { Project } from "./projects";
import { projectListLoad } from "./projectListLoad";
import { createTaskForm} from './createTaskForm';
import { isDate } from 'date-fns'
import { isValid } from 'date-fns'

function createProjectForm(toDoList) {
    let editing = false;
    let tasksCounter = 0;
    const content = document.getElementById('content');

    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    const projectForm = document.createElement('form');
    projectForm.id = 'projectForm';

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
        overlay.remove();
    })

    //project name label and 25 char text input
    const projectNameLabel = document.createElement('label');
    projectNameLabel.textContent = 'Project Name: ';

    const projectNameInput = document.createElement('input');
    projectNameInput.type = 'text';
    projectNameInput.maxLength = 25;
    projectNameInput.id = 'projectNameInput';
    projectNameInput.required = true;

    //project due date label and date input
    const projectDueLabel = document.createElement('label');
    projectDueLabel.textContent = 'Due Date: ';

    const projectDueInput = document.createElement('input');
    projectDueInput.type = 'date';
    projectDueInput.id = 'projectDueInput';
    projectDueInput.required = true;


    //add task button, will generate a task form
    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = 'Add Task';
    addTaskButton.type = 'button';
    addTaskButton.addEventListener('click', (e) => {
        tasksCounter += 1;
        createTaskForm(toDoList, tasksCounter, editing);
    })

    //submit button, will submit form returning a Project object to projectlistload
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.id = 'submitButton';
    submitButton.type = 'submit';
    submitButton.addEventListener('click', (e) =>{
        e.preventDefault();

        const projectDueInputData = projectDueInput.value;

        if(isValid(new Date(projectDueInputData))){
            const newProject = new Project(projectNameInput.value, projectDueInput.value);
            toDoList.addProject(newProject);
            projectForm.remove();
            overlay.remove();
            projectListLoad(toDoList);
            
        } else { // do nothing
        }

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

    content.appendChild(overlay);
    content.appendChild(projectForm);

}

export { createProjectForm };