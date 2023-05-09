import { Task } from "./tasks";

const projects = [];
class Project {
    constructor(name, due) {
        this.name = name;
        this.due = due;
        this.tasks = [];
        projects.push(this);
    }

    addTask(task) {
        this.tasks.push(task);
    }
    
}

const bigProject = new Project('Big Project', 'May 10, 2023');
const smallProject = new Project('Small Project', 'May 19, 2023');

const bigTask = new Task('Big Task', 'May 9, 2023', 'High', 'Please do the task');
const smallTask = new Task('Small Task', 'May 19, 2023', 'Low', 'Please consider doing the task');
const smallerTask = new Task('Smaller Task', 'May 18, 2023', 'Low', 'Please think abuot maybe considering doing the task');

bigProject.addTask(bigTask);
smallProject.addTask(smallTask);
smallProject.addTask(smallerTask);


export { Project, projects };
