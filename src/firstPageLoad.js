import { projectListLoad } from "./projectListLoad";
import { addProjectButton } from "./addProjectButton";

function firstPageLoad() {
    addProjectButton();
    projectListLoad();
}



export { firstPageLoad };