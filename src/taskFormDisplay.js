


function taskFormDisplay() {
    const taskNameInput = document.createElement('input');
    const taskDueDateInput = document.createElement('input');
    const taskPrioritySelect = document.createElement('select');
    const taskNotesInput = document.createElement('input');
    const form = document.getElementById('projectForm');
    const submitButton = document.getElementById('submitButton');
    const taskButton = document.getElementById('taskButton');
        
            // Create a label for the task name input field
            const taskNameLabel = document.createElement('label');
            taskNameLabel.textContent = 'Task Name: ';
            form.appendChild(taskNameLabel);
            
            // Create a text input field for the task name
            taskNameInput.type = 'text';
            taskNameInput.name = 'taskName';
            taskNameInput.id = 'taskName';
            taskNameInput.required = true;
            taskNameInput.maxLength = 40; // set max length to 40 characters
            form.appendChild(taskNameInput);
            
            // Create a label for the task due date input field
            const taskDueDateLabel = document.createElement('label');
            taskDueDateLabel.textContent = 'Task Due Date: ';
            form.appendChild(taskDueDateLabel);
            
            // Create a date input field for the task due date
        
            taskDueDateInput.type = 'date';
            taskDueDateInput.required = true;
            taskDueDateInput.name = 'taskDueDate';
            taskDueDateInput.id = 'taskDueDate';
            form.appendChild(taskDueDateInput);
            
// Create a label for the task priority dropdown
const taskPriorityLabel = document.createElement('label');
taskPriorityLabel.textContent = 'Task Priority: ';
form.appendChild(taskPriorityLabel);

// Create a select dropdown for the task priority
taskPrioritySelect.name = 'taskPriority';
taskPrioritySelect.id = 'taskPriority';
form.appendChild(taskPrioritySelect);

            
            // Create three options for the task priority dropdown
            const lowPriorityOption = document.createElement('option');
            lowPriorityOption.value = 'Low';
            lowPriorityOption.textContent = 'Low';
            taskPrioritySelect.appendChild(lowPriorityOption);
            
            const mediumPriorityOption = document.createElement('option');
            mediumPriorityOption.value = 'Medium';
            mediumPriorityOption.textContent = 'Medium';
            taskPrioritySelect.appendChild(mediumPriorityOption);
            
            const highPriorityOption = document.createElement('option');
            highPriorityOption.value = 'High';
            highPriorityOption.textContent = 'High';
            taskPrioritySelect.appendChild(highPriorityOption);
            
            // Create a label for the task notes input field
            const taskNotesLabel = document.createElement('label');
            taskNotesLabel.textContent = 'Task Notes: ';
            form.appendChild(taskNotesLabel);
            
            // Create a text input field for the task notes
        
            taskNotesInput.type = 'text';
            taskNotesInput.required = true;
            taskNotesInput.name = 'taskNotes';
            taskNotesInput.id = 'taskNotes';
            taskNotesInput.maxLength = 250; // set max length to 250 characters
            form.appendChild(taskNotesInput);
            
            // Create a submit button
            submitButton.remove();
            submitButton.type = 'submit';
            submitButton.textContent = 'Submit';
            form.appendChild(submitButton);
            
        
            // Create a add Task button
                taskButton.remove();
                taskButton.type = 'button';
                taskButton.textContent = 'Add Task';
                form.appendChild(taskButton);
}

export { taskFormDisplay };