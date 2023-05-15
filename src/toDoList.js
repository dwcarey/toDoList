

class ToDoList {
    constructor() {
        this.projects = [];
    }

    setProjects(projects) {
        this.projects = projects;
    }

    getProject() {
        return this.projects;
    }

    addProject(newProject) {
        this.projects.push(newProject);
    }

}

export { ToDoList };