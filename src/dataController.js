import { projectListLoad } from "./projectListLoad";
import { Project } from "./projects";
import { Task } from "./tasks";


function dataController(projectName, projectDue, taskName, taskDue, taskPriority, taskNotes) {
    const newProject = new Project(projectName, projectDue);
    const task = new Task(taskName, taskDue, taskPriority, taskNotes);
    newProject.addTask(task);
    projectListLoad();
};

export { dataController };