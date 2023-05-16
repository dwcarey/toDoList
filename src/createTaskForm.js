import { ToDoList } from "./toDoList";
import { Project } from "./projects";
import { Task } from "./tasks";
import { projectListLoad } from "./projectListLoad";

function createTaskForm(toDoList, tasksCounter) {
    const projectForm = document.getElementById('projectForm');
    const taskForm = document.createElement('form');
    taskForm.id = `taskForm-${tasksCounter}`;
    taskForm.classList.add('taskForm');

    const oldSubmitButton = document.getElementById('submitButton');
    const oldTaskSubmitButton = document.getElementById('taskSubmitButton');

    const taskSubmitButton = document.createElement('button');
    taskSubmitButton.type = 'submit';
    taskSubmitButton.textContent = 'Submit';
    taskSubmitButton.id = 'taskSubmitButton';

    if (oldSubmitButton) {
        projectForm.replaceChild(taskSubmitButton, oldSubmitButton);
    }
    else if (oldTaskSubmitButton) {
        projectForm.replaceChild(taskSubmitButton, oldTaskSubmitButton);
    }

    //taskname text max25 with label, id'ed with taskscounter
    const taskNameLabel = document.createElement('label');
    taskNameLabel.textContent = `Task ${tasksCounter} Name:`;
    const taskNameInput = document.createElement('input');
    taskNameInput.type = 'text';
    taskNameInput.id = `taskName-${tasksCounter}`;

    //taskduedate date with label, taskcounter
    const taskDueLabel = document.createElement('label');
    taskDueLabel.textContent = 'Due Date:'
    const taskDueInput = document.createElement('input');
    taskDueInput.type = 'date';
    taskDueInput.id = `taskDueInput-${tasksCounter}`;

    //taskpriority dropdown low mid high
    const taskPriorityLabel = document.createElement('label');
    taskPriorityLabel.textContent = 'Priority:';
    const taskPriorityInput = document.createElement('select');
    taskPriorityInput.value = 'Low';
    taskPriorityInput.id = `taskPriority-${tasksCounter}`;
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

    //tasknotes textarea with label
    const taskNotesLabel = document.createElement('label');
    taskNotesLabel.textContent = 'Notes:';
    const taskNotesInput = document.createElement('input');
    taskNotesInput.type = 'textarea';
    taskNotesInput.maxLength = 100;
    taskNotesInput.id = `taskNote-${tasksCounter}`;

    //new submit button to handle both project and task creation
    taskSubmitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const projectNameInput = document.querySelector('#projectNameInput').value;
        const projectDueInput = document.querySelector('#projectDueInput').value;

        const newProject = new Project(projectNameInput, projectDueInput);

        for (let i = 1; i <= tasksCounter; i+=1) {
            const taskNameData = document.getElementById(`taskName-${i}`).value;
            const taskDueData = document.getElementById(`taskDueInput-${i}`).value;
            const taskPriorityData = document.getElementById(`taskPriority-${i}`).value;
            const taskNotesData = document.getElementById(`taskNote-${i}`).value;

            const day = taskDueData.split('/')[0];
            const month = taskDueData.split('/')[1];
            const year = taskDueData.split('/')[2];
            const shuffledDate = `${year}-${month}-${day}`;
            const newTask = new Task(
                taskNameData, 
                shuffledDate, 
                taskPriorityData,
                taskNotesData)
            newProject.addTask(newTask);
        }
        toDoList.addProject(newProject);
        projectForm.remove();
        projectListLoad(toDoList);
        console.log(toDoList);
    })

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

export { createTaskForm };