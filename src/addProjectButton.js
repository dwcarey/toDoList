import { projectFormDisplay } from "./projectFormDisplay";

function addProjectButton() {
    const content = document.getElementById('content');
    const addButton = document.createElement('button');
    addButton.id = 'addButton';
    addButton.textContent = 'Add Project';
    addButton.addEventListener('click', (e) => {
        projectFormDisplay();
    })
    content.appendChild(addButton);
}

export { addProjectButton };