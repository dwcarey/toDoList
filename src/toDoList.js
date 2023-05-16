
class ToDoList {
    constructor() {
        this.projects = [];
    }

    addProject(newProject) {
        this.projects.push(newProject);
        return this.projects;
    }

    deleteProject(projectIndex) {
        this.projects.splice(projectIndex, 1);
        return this.projects;
    }

    deleteTask(projectIndex, taskIndex) {
        this.projects[projectIndex].tasks.splice(taskIndex, 1);
        return this.projects;
    }

}

export { ToDoList };