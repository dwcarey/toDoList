import { projectListLoad } from "./projectListLoad";
import { addEventListeners } from "./addEventListeners";
import { ToDoList } from './toDoList';
import { Task } from './tasks';
import { Project } from './projects';

function firstPageLoad() {
const toDoList = new ToDoList();

// Create new projects
const project1 = new Project('Phoenix Rising', 'May 15, 2023');
const project2 = new Project('Quantum Leap', 'May 30, 2023');
const project3 = new Project('The Atlas Project', 'June 10, 2023');
const project4 = new Project('ChronoScope', 'July 1, 2023');
const project5 = new Project('Eureka', 'July 15, 2023');
const project6 = new Project('The Quantum Paradox', 'August 1, 2023');
const project7 = new Project('Project Athena', 'August 15, 2023');
const project8 = new Project('Zephyr', 'September 1, 2023');

// Create new tasks
const task1 = new Task('Task 1', 'May 13, 2023', 'Medium', 'Do this task first');
const task2 = new Task('Task 2', 'May 17, 2023', 'High', 'This task is urgent');
const task3 = new Task('Task 3', 'May 28, 2023', 'Low', 'Not a priority');
const task4 = new Task('Task 4', 'June 5, 2023', 'High', 'Needs to be completed before project deadline');
const task5 = new Task('Task 5', 'June 25, 2023', 'Medium', 'Some urgency, but not critical');
const task6 = new Task('Task 6', 'July 7, 2023', 'High', 'Critical task for project success');
const task7 = new Task('Task 7', 'August 1, 2023', 'Low', 'Not a priority, but needs to be done eventually');
const task8 = new Task('Task 8', 'August 20, 2023', 'Medium', 'Some urgency, but can wait');

// Add tasks to projects
project1.addTask(task1);
project2.addTask(task2);
project2.addTask(task3);
project3.addTask(task4);
project3.addTask(task5);
project4.addTask(task6);
project5.addTask(task7);
project6.addTask(task8);
project7.addTask(task6);
project8.addTask(task7);

toDoList.addProject(project1);
toDoList.addProject(project2);
toDoList.addProject(project3);
toDoList.addProject(project4);
toDoList.addProject(project5);
toDoList.addProject(project6);
toDoList.addProject(project7);
toDoList.addProject(project8);

    projectListLoad(toDoList.projects);
    addEventListeners();
}

export { firstPageLoad };