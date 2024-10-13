const projects = [];
const projectList = document.getElementById("project-list");
const progressBar = document.getElementById("progress");
const progressText = document.getElementById("progress-text");

document.getElementById("add-project").addEventListener("click", function() {
    const name = document.getElementById("project-name").value;
    const deadline = document.getElementById("project-deadline").value;

    if (name && deadline) {
        const project = { name, deadline, completed: false };
        projects.push(project);
        updateProjectList();
        updateProgress();
        clearInputs();
    }
});

function updateProjectList() {
    projectList.innerHTML = "";
    projects.forEach((project, index) => {
        const li = document.createElement("li");
        li.textContent = `${project.name} - Deadline: ${project.deadline}`;
        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.addEventListener("click", function() {
            project.completed = true;
            updateProjectList();
            updateProgress();
        });
        li.appendChild(completeButton);
        projectList.appendChild(li);
    });
}

function updateProgress() {
    const totalProjects = projects.length;
    const completedProjects = projects.filter(p => p.completed).length;
    const progressPercentage = totalProjects > 0 ? (completedProjects / totalProjects) * 100 : 0;

    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `${Math.round(progressPercentage)}% Complete`;
}

function clearInputs() {
    document.getElementById("project-name").value = "";
    document.getElementById("project-deadline").value = "";
}
