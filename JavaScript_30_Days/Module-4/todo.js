// ========================
// CLASS-5 |Part-5 Practice
// ========================
//Task add and render file.

console.log("todo start");

let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

let tasks = []; // Array to store tasks
let taskIdCounter = 0; // Counter to generate unique task IDs

//Render tasks from the tasks array

function render(){
    taskList.innerHTML = ""; // Clear the existing task list
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.classList.add ("task-item");

        let span = document.createElement("span");
        span.classList.add("task-text")
        span.textContent = `task: ${task.text} completed: ${task.completed ? 'True' : 'False'}`;

        let btnWrapper = document.createElement("span");
        btnWrapper.classList.add("addBtn");

        let completeBtn = document.createElement("button");
        btnWrapper.textContent = "✅";

        completeBtn.addEventListener("click", () => {
            completeTask(task.id);
        })

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";

        deleteBtn.addEventListener("click", () => {
            deleteTask(task.id);
        });

        btnWrapper.appendChild(completeBtn);
        btnWrapper.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(btnWrapper);

        taskList.appendChild(li);
    });
}

function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText == "") {
        return; // Do not add empty tasks
    }
    let newTask = {
        id: taskIdCounter++,
        text: taskText
    };

    tasks.push(newTask);
    taskInput.value = "";

    render();
}

addBtn.addEventListener("click", addTask);

function completeTask(id) {
    let task = tasks.find((task) => task.id === id);
    
        task.completed = !task.completed;
        render();
    
}

function deleteTask(id) {
    let task = tasks.filter((task) => task.id != id);
    render();
}
