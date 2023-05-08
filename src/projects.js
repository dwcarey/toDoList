class Project {
    constructor(name, due) {
        this.name = name;
        this.due = due;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }
}

export { Project };