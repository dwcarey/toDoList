function addEventListeners() {
    const addProjectButton = document.getElementById('addProjectButton');
    addProjectButton.addEventListener('click', (e) => {
        console.log(addProjectButton);
    });

    const deleteProjectButtons = document.querySelectorAll('button.deleteProjectButton');
    deleteProjectButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log(button);
        });
    });

    const editProjectButtons = document.querySelectorAll('button.editProjectButton');
    editProjectButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log(button);
        });
    });

    const deleteTaskButtons = document.querySelectorAll('button.deleteTaskButton');
    deleteTaskButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log(button);
        });
    });
}

export { addEventListeners };