
class ToDoList {
    constructor() {
        this.projects = [];
    }

    setProjects(projects) {
        this.projects = projects;
    }

    getProjects() {
        return this.projects;
    }

    addProject(newProject) {
        this.projects.push(newProject);
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