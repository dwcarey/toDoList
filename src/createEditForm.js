import { ToDoList } from "./toDoList";
import { Project } from "./projects";
import { Task } from "./tasks";
import { projectListLoad } from "./projectListLoad";
import { createTaskForm} from './createTaskForm';

function createEditForm(projectIndex, toDoList) {
    const selectedProject = toDoList.projects[projectIndex];
    let editing = true;

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
        console.log(editing);

        createTaskForm(toDoList, tasksCounter, editing);
    })



    //append this append that
    projectForm.appendChild(resetButton);
    projectForm.appendChild(closeButton);
    projectForm.appendChild(projectNameLabel);
    projectForm.appendChild(projectNameInput);
    projectForm.appendChild(projectDueLabel);
    projectForm.appendChild(projectDueInput);
    projectForm.appendChild(addTaskButton);

    if (selectedProject.tasks.length === 0) {
    //submit button, will submit form returning a Project object to projectlistload
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.id = 'submitButton';
    submitButton.addEventListener('click', (e) =>{
        e.preventDefault();
        const newProject = new Project(projectNameInput.value, projectDueInput.value);
        toDoList.editProject(projectIndex, newProject);
        projectForm.remove();
        editing = false;
        projectListLoad(toDoList);
    })
    projectForm.appendChild(submitButton);
}   else {
        //new submit button to handle both project and task creation
        const taskSubmitButton = document.createElement('button');
        taskSubmitButton.type = 'submit';
        taskSubmitButton.id = 'taskSubmitButton';
        taskSubmitButton.textContent = 'Submit';
        // eslint-disable-next-line no-loop-func
        console.log(taskSubmitButton);
        taskSubmitButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            const editProjectNameInput = document.querySelector('#projectNameInput').value;
            const editProjectDueInput = document.querySelector('#projectDueInput').value;
            const dayP = editProjectDueInput.split('/')[0];
            const monthP = editProjectDueInput.split('/')[1];
            const yearP = editProjectDueInput.split('/')[2];
            const newProjectDateP = `${yearP}-${monthP}-${dayP}`;
    
    
            const newProject = new Project(editProjectNameInput, newProjectDateP);
    
            for (let j = 1; j <= tasksCounter; j+=1) {
                console.log(j);
                console.log(tasksCounter);
                const taskNameData = document.getElementById(`taskName-${j}`).value;
                console.log(taskNameData);
                const taskDueData = document.getElementById(`taskDueInput-${j}`).value;
                const taskPriorityData = document.getElementById(`taskPriority-${j}`).value;
                const taskNotesData = document.getElementById(`taskNote-${j}`).value;
    
                const dayZ = taskDueData.split('/')[0];
                const monthZ = taskDueData.split('/')[1];
                const yearZ = taskDueData.split('/')[2];
                const newTaskDateZ = `${yearZ}-${monthZ}-${dayZ}`;
                const newTask = new Task(
                    taskNameData, 
                    newTaskDateZ, 
                    taskPriorityData,
                    taskNotesData)
                newProject.addTask(newTask);
            }
            toDoList.editProject(projectIndex, newProject);
            projectForm.remove();
            projectListLoad(toDoList);
            tasksCounter = 0;
    
        })
        projectForm.appendChild(taskSubmitButton);

}

    content.appendChild(projectForm);

    for(let i=0; i<tasksCounter; i+=1) {

        const taskForm = document.createElement('form');
        taskForm.id = `taskForm-${i+1}`;
        taskForm.classList.add('taskForm');

    
        //taskname text max25 with label, id'ed with taskscounter
        const taskNameLabel = document.createElement('label');
        taskNameLabel.textContent = `Task ${i+1} Name:`;
        const taskNameInput = document.createElement('input');
        taskNameInput.type = 'text';
        taskNameInput.id = `taskName-${i+1}`;
        taskNameInput.value = selectedProject.tasks[i].name;
    
        //taskduedate date with label, taskcounter
        const taskDueLabel = document.createElement('label');
        taskDueLabel.textContent = 'Due Date:'
        const taskDueInput = document.createElement('input');
        taskDueInput.type = 'date';
        taskDueInput.id = `taskDueInput-${i+1}`;
        const dayT = selectedProject.tasks[i].due.split('/')[0];
        const monthT = selectedProject.tasks[i].due.split('/')[1];
        const yearT = selectedProject.tasks[i].due.split('/')[2];
        const newTaskDate = `${yearT}-${monthT}-${dayT}`;
        taskDueInput.value = newTaskDate;
    
        //taskpriority dropdown low mid high
        const taskPriorityLabel = document.createElement('label');
        taskPriorityLabel.textContent = 'Priority:';
        const taskPriorityInput = document.createElement('select');

        taskPriorityInput.id = `taskPriority-${i+1}`;
        const lowOption = document.createElement('option');
        lowOption.value = 'Low';
        lowOption.textContent = 'Low';
        const midOption = document.createElement('option');
        midOption.value = 'Mid';
        midOption.textContent = 'Mid';
        const highOption = document.createElement('option');
        highOption.value = 'High';
        highOption.textContent = 'High';

        taskPriorityInput.appendChild(lowOption);
        taskPriorityInput.appendChild(midOption);
        taskPriorityInput.appendChild(highOption);
        taskPriorityInput.value = `${selectedProject.tasks[i].priority}`;

        //tasknotes textarea with label
        const taskNotesLabel = document.createElement('label');
        taskNotesLabel.textContent = 'Notes:';
        const taskNotesInput = document.createElement('input');
        taskNotesInput.type = 'textarea';
        taskNotesInput.maxLength = 100;
        taskNotesInput.id = `taskNote-${i+1}`;
        taskNotesInput.value = selectedProject.tasks[i].notes;
    

    
        //append this append that
        taskForm.appendChild(taskNameLabel);
        taskForm.appendChild(taskNameInput);
        taskForm.appendChild(taskDueLabel);
        taskForm.appendChild(taskDueInput);
        taskForm.appendChild(taskPriorityLabel);
        taskForm.appendChild(taskPriorityInput);
        taskForm.appendChild(taskNotesLabel);
        taskForm.appendChild(taskNotesInput);
    
        projectForm.appendChild(taskForm);
    }

}

export { createEditForm };