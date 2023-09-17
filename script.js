const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
        taskInput.focus();
        li.addEventListener("click", toggleCompleted);
    }
}

function toggleCompleted() {
    this.classList.toggle("completed");
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
