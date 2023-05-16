import { ToDoList } from "./toDoList";
import { Project } from "./projects";

function createTaskForm(toDoList, tasksCounter) {
    const projectForm = document.getElementById('projectForm');
    const taskForm = document.createElement('form');
    taskForm.id = `taskForm-${tasksCounter}`;
    //make new submit button and append to content replacing old submit button
    //new submit button to handle both project and task creation
    //recycle for edit
    projectForm.appendChild(taskForm);
    console.log(projectForm);

}

export { createTaskForm };