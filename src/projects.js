import format from "date-fns/format";
class Project {
    constructor(name, due) {
        this.name = name;
        this.due = format(new Date(due), 'dd/MM/yyyy');
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }
    
}

export { Project };
