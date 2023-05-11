import format from "date-fns/format";

class Task {
    constructor(name, due, priority, notes) {
        this.name = name;
        this.due = format(new Date(due), 'dd/MM/yyyy');
        this.priority = priority;
        this.notes = notes;
    }

}

export { Task };