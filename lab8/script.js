document.addEventListener("DOMContentLoaded", loadTasks);

const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("priority");
const taskDate = document.getElementById("taskDate");
const taskTime = document.getElementById("taskTime");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;
    const date = taskDate.value || "Без даты";
    const time = taskTime.value || "Без времени";

    if (taskText === "") {
        alert("Введите задачу");
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        priority: priority,
        date: date,
        time: time,
        completed: false,
    };

    saveTask(task);
    renderTask(task);
    clearInputs();
}

function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(renderTask);
}

function renderTask(task) {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");

    const taskInfo = document.createElement("div");
    taskInfo.classList.add("task-info");
    taskInfo.innerHTML = `
        <span>${task.text}</span>
        <span class="priority">Важность: ${task.priority}</span>
        <span>Дата: ${task.date} Время: ${task.time}</span>
    `;

    const taskButtons = document.createElement("div");
    taskButtons.classList.add("task-buttons");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = task.completed ? "Отменить" : "Готово";
    completeBtn.addEventListener("click", () => {
        task.completed = !task.completed;
        updateTask(task);
        li.classList.toggle("completed");
        completeBtn.textContent = task.completed ? "Отменить" : "Готово";
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    deleteBtn.addEventListener("click", () => {
        deleteTask(task.id);
        li.remove();
    });

    taskButtons.appendChild(completeBtn);
    taskButtons.appendChild(deleteBtn);

    li.appendChild(taskInfo);
    li.appendChild(taskButtons);

    taskList.appendChild(li);
}

function updateTask(updatedTask) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const index = tasks.findIndex((t) => t.id === updatedTask.id);
    if (index !== -1) tasks[index] = updatedTask;
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(id) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter((t) => t.id !== id);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

function clearInputs() {
    taskInput.value = "";
    taskDate.value = "";
    taskTime.value = "";
}
