function displayAddForm() {
    const form = document.createElement('form');
    const content = document.getElementById('content');

    // Create a label for the project name input field
    const projectNameLabel = document.createElement('label');
    projectNameLabel.textContent = 'Project Name: ';
    form.appendChild(projectNameLabel);
    
    // Create a text input field for the project name
    const projectNameInput = document.createElement('input');
    projectNameInput.type = 'text';
    projectNameInput.name = 'projectName';
    projectNameInput.maxLength = 25; // set max length to 25 characters
    form.appendChild(projectNameInput);
    
    // Create a label for the project due date input field
    const projectDueDateLabel = document.createElement('label');
    projectDueDateLabel.textContent = 'Project Due Date: ';
    form.appendChild(projectDueDateLabel);
    
    // Create a date input field for the project due date
    const projectDueDateInput = document.createElement('input');
    projectDueDateInput.type = 'date';
    projectDueDateInput.name = 'projectDueDate';
    form.appendChild(projectDueDateInput);
    
    // Create a label for the task name input field
    const taskNameLabel = document.createElement('label');
    taskNameLabel.textContent = 'Task Name: ';
    form.appendChild(taskNameLabel);
    
    // Create a text input field for the task name
    const taskNameInput = document.createElement('input');
    taskNameInput.type = 'text';
    taskNameInput.name = 'taskName';
    taskNameInput.maxLength = 40; // set max length to 40 characters
    form.appendChild(taskNameInput);
    
    // Create a label for the task due date input field
    const taskDueDateLabel = document.createElement('label');
    taskDueDateLabel.textContent = 'Task Due Date: ';
    form.appendChild(taskDueDateLabel);
    
    // Create a date input field for the task due date
    const taskDueDateInput = document.createElement('input');
    taskDueDateInput.type = 'date';
    taskDueDateInput.name = 'taskDueDate';
    form.appendChild(taskDueDateInput);
    
    // Create a label for the task priority dropdown
    const taskPriorityLabel = document.createElement('label');
    taskPriorityLabel.textContent = 'Task Priority: ';
    form.appendChild(taskPriorityLabel);
    
    // Create a select dropdown for the task priority
    const taskPrioritySelect = document.createElement('select');
    taskPrioritySelect.name = 'taskPriority';
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
    const taskNotesInput = document.createElement('input');
    taskNotesInput.type = 'text';
    taskNotesInput.name = 'taskNotes';
    taskNotesInput.maxLength = 250; // set max length to 250 characters
    form.appendChild(taskNotesInput);
    
    // Create a submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    //add event listener here
    form.appendChild(submitButton);
    

    // Add the form to the document
    content.appendChild(form);

    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    const body = document.getElementById('body');
    body.appendChild(overlay);
}

export { displayAddForm };