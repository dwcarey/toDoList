import { Project } from "./projects";
import { Task } from "./tasks";
import { createTaskInputs } from "./taskFormGeneration";

function attachEventListeners(form, overlay, taskInputs, projectListLoad) {
  const closeButton = form.querySelector('#closeButton');
  closeButton.addEventListener('click', (e) => {
    form.remove();
    overlay.remove();
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    overlay.remove();

    const projectNameInput = form.querySelector('input[name="projectName"]');
    const projectDueDateInput = form.querySelector('input[name="projectDueDate"]');
    const projectName = projectNameInput.value;
    const projectDueDate = projectDueDateInput.value;

    const project = new Project(projectName, projectDueDate);

    for (const taskInput of taskInputs) {
      const taskName = taskInput.name.value;
      const taskDueDate = taskInput.due.value;
      const taskPriority = taskInput.priority.value;
      const taskNotes = taskInput.notes.value;
    const task = new Task(taskName, taskDueDate, taskPriority, taskNotes);
      project.addTask(task);
    }

    form.reset();
    form.remove();

    projectListLoad();
  });

  const addTaskButton = form.querySelector('#addTaskButton');
  addTaskButton.addEventListener('click', () => {
    const taskIndex = taskInputs.length + 1;
    const taskDiv = createTaskInputs(taskIndex);
    form.insertBefore(taskDiv, addTaskButton);
    taskInputs.push({
      name: taskDiv.querySelector(`input[name="taskName${taskIndex}"]`),
      due: taskDiv.querySelector(`input[name="taskDueDate${taskIndex}"]`),
      priority: taskDiv.querySelector(`select[name="taskPriority${taskIndex}"]`),
      notes: taskDiv.querySelector(`textarea[name="taskNotes${taskIndex}"]`)
    });
  });
}

export { attachEventListeners };

