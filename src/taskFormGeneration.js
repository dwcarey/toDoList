function createTaskInputs(taskIndex, taskData = {}) {
    const taskDiv = document.createElement('div');
    taskDiv.id = `taskDiv${taskIndex}`;
  
    const taskNameLabel = document.createElement('label');
    taskNameLabel.textContent = `Task ${taskIndex} Name: `;
    taskDiv.appendChild(taskNameLabel);
  
    const taskNameInput = document.createElement('input');
    taskNameInput.type = 'text';
    taskNameInput.name = `taskName${taskIndex}`;
    taskNameInput.required = true;
    taskNameInput.maxLength = 40;
    taskNameInput.value = taskData.name || '';
    taskDiv.appendChild(taskNameInput);
  
    const taskDueDateLabel = document.createElement('label');
    taskDueDateLabel.textContent = `Task ${taskIndex} Due Date: `;
    taskDiv.appendChild(taskDueDateLabel);
  
    const taskDueDateInput = document.createElement('input');
    taskDueDateInput.type = 'date';
    taskDueDateInput.required = true;
    taskDueDateInput.name = `taskDueDate${taskIndex}`;
    taskDueDateInput.value = taskData.due || '';
    taskDiv.appendChild(taskDueDateInput);
  
    const taskPriorityLabel = document.createElement('label');
    taskPriorityLabel.textContent = `Task ${taskIndex} Priority: `;
    taskDiv.appendChild(taskPriorityLabel);
  
    const taskPrioritySelect = document.createElement('select');
    taskPrioritySelect.name = `taskPriority${taskIndex}`;
    taskPrioritySelect.required = true;
  
    const priorityOptions = ["Low", "Medium", "High"];
    for (const option of priorityOptions) {
      const priorityOption = document.createElement('option');
      priorityOption.value = option;
      priorityOption.textContent = option;
      taskPrioritySelect.appendChild(priorityOption);
    }
  
    taskPrioritySelect.value = taskData.priority || 'Low';
    taskDiv.appendChild(taskPrioritySelect);
  
    const taskNotesLabel = document.createElement('label');
    taskNotesLabel.textContent = `Task ${taskIndex} Notes: `;
    taskDiv.appendChild(taskNotesLabel);
  
    const taskNotesTextarea = document.createElement('textarea');
    taskNotesTextarea.name = `taskNotes${taskIndex}`;
    taskNotesTextarea.rows = 4;
    taskNotesTextarea.value = taskData.notes || '';
    taskDiv.appendChild(taskNotesTextarea);
  
    return taskDiv;
  }
  
  export { createTaskInputs };
  