document.addEventListener("DOMContentLoaded", function () {
    let taskList = document.getElementById("tasks");
    let textInput = document.getElementById("text-input");
    
    // Function to add a new task
    function newTask() {
        let taskText = textInput.value.trim();
        
        if (taskText === "") {
            alert("Enter a task");
            return;
        }
        
        let newTask = document.createElement("div");
        newTask.setAttribute("id", "task-item");
        
        newTask.innerHTML = `
            <p id="task-text" onclick="doneTask(this)">${taskText}</p>
            <button onclick="deleteTask(this)" id="delete-btn">Delete</button>
        `;
        
        taskList.appendChild(newTask);
        textInput.value = "";
        saveData();
    }
    
    // Function to mark task as done/undone
    window.doneTask = function (element) {
        if (element.style.textDecoration === "line-through") {
            element.style.textDecoration = "none";
            element.style.color = "black";
        } else {
            element.style.textDecoration = "line-through";
            element.style.color = "gray";
        }
        saveData();
    };
    
    // Function to delete task
    window.deleteTask = function (button) {
        button.parentElement.remove();
        saveData();
    };
    
    // Save tasks to local storage
    function saveData() {
        localStorage.setItem("data", taskList.innerHTML);
    }
    
    // Retrieve tasks from local storage
    function showTask() {
        taskList.innerHTML = localStorage.getItem("data") || "";
    }
    
    showTask();
    
    // Attach event listener to button
    document.getElementById("newtask").addEventListener("click", newTask);
});
