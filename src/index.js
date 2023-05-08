import './style.css';
import { Project } from './projects';
import { Task } from './tasks';


const bigProject = new Project('Big Project', 'May 10, 2023');
const smallProject = new Project('Small Project', 'May 19, 2023');

const bigTask = new Task('Big Task', 'May 9, 2023', 'High', 'Please do the task');
const smallTask = new Task('Small Task', 'May 19, 2023', 'Low', 'Please consider doing the task');

bigProject.addTask(bigTask);
smallProject.addTask(smallTask);
console.log(bigProject, smallProject);






